import Session from '../../mixins/sessionUtils';
import Authorization from '../../services/authorization';
import UI from '../../mixins/ui';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import http from '../../mixins/restutils';
import CONSTANTS from '../../constants/app-constant';
import User from '../../services/user';
import shoppingCart from '../../services/shoppingCart';
import ListCartItemForHeader from '../shoppingCart/components/ListCartItemForHeader';

var Header = React.createClass({
    render() {
        return User.isLoggedIn() ?
            (<HeaderV2 assocCustomer={this.props.assocCustomer} setParentLoadState={this.props.setParentLoadState} assocCustomers={this.props.assocCustomers}
                hideChicklet={this.props.hideChicklet} isShoppingCart={this.props.isShoppingCart}/>) :
            (<HeaderV1 routeName={this.props.routeName}/>);
    },
});

var HeaderV1 = React.createClass({
    getInternalUserDomain() {
        var route = '/MyNetmagic';
        if(this.props.routeName === '/NMInternalUser') {
            route = '/NMInternalUser';
        }
        return route;
    },

    render() {
        return (
            <div className="blackThemeHeader clearfix">
                <header className="clearfix">
                    <div className="container paddingZero text-center">
                        <Link to={this.getInternalUserDomain()} className="headerNttLogo">
                            <img src={require('../../../theme/default/images/NTT_loginLogo.png') } />
                        </Link>
                        <Link to={this.getInternalUserDomain()} className="headerNttLogo">
                            <img src={require('../../../theme/default/images/NM_loginLogo.png') } />
                        </Link>
                        <div>
                            { this.props.routeName === 'signup' ? (<HaveAccount />) : ('') }
                        </div>
                    </div>
                </header>
            </div>
        )
    }
});

const HaveAccount = () => <p className="pull-right loginLinkWrap"> Already have an account?<Link to='/MyNetmagic' className="loginLink">Login</Link> </p>

var HeaderV2 = React.createClass({

    mixins: [Session, User, UI],

    getInitialState() {
        return {
            show: {
                associated: true,
                currentProject: true,
                cartData: [],
                showSCToolTipBox: false
            }
        }
    },

    contextTypes: {
        router: React.PropTypes.object
    },

    logout() {
        Authorization.clearToken();
        this.removeItems(['user', 'activeCustomerId', 'mainCustomer',
            'associatedCustomer', 'userPermissions', 'modulePermissions',
            'permissions', 'customerBeans', 'splashScreen', 'updateTimestamp',
            'splashData', 'project', 'ShoppingCartPricingDetails', 'tempCartData',
            'globalData', 'defaultPermissions', 'customerModuleData',
            'notificationPropsData', 'notificationConfig', 'contactId',
            'contactType', 'mainCustomerList', 'contact', 'existingData']);
    },

    fetchNewPermissions(mainCustomerId, assocCustomerId, projectId) {
        this.props.setParentLoadState(false);
        this.getPermissions({
            mainCustomerId: mainCustomerId,
            assoCustomerId: assocCustomerId ? assocCustomerId : mainCustomerId || '',
            projectId: projectId || ''
        }).then((result) => {
                this.props.setParentLoadState(true)
            })
            .catch((error) => {
                //this.notifyError(CONSTANTS.UI_MESSAGES.userPermissionError);
            })
    },

    removeAssociate() {
        var mainCustomer = this.get('mainCustomer');
        if (mainCustomer) {
            var mainCustomerId = mainCustomer.customerId;
            this.removeItems(['associatedCustomer', 'project']);
            this.set('activeCustomerId', User.getMainCustomer('customerId'));
            this.setState({
                show: {
                    associated: false,
                    currentProject: false
                }
            });
            this.fetchNewPermissions(mainCustomerId);
        }
    },

    removeProject() {
        var mainCustomer = this.get('mainCustomer') || {};
        var associatedCustomer = this.get('associatedCustomer');
        if (mainCustomer && associatedCustomer) {
            this.remove('project');
            var mainCustomerId = mainCustomer.customerId;
            this.set('activeCustomerId',
                associatedCustomer && associatedCustomer.customerId);
            this.setState({
                show: {
                    associated: true,
                    currentProject: false
                }
            });
            this.fetchNewPermissions(mainCustomerId, this.get('activeCustomerId'));
            this.context.router.push('/dashboard')
        }
    },

    getSlicedName(name) {
        if (name) {
            return (name.length > CONSTANTS.NAME_LIMIT ? name.slice(0, CONSTANTS.SUB_STRING_LIMIT) + '...' : name);
        }
    },

    showNameOnHover(name = "") {
        var isNameLong = (name.length > CONSTANTS.NAME_LIMIT);
        return this.classSet({
            associateHoverName: isNameLong,
            hide: !isNameLong
        });
    },

    addAssociate(event) {
        var mainCustomer = this.get('mainCustomer') || {};
        var selectedCustomer = _.find(this.get('customerBeans'), function (user) { return user.customerName === event.currentTarget.value });
        this.set('associatedCustomer', selectedCustomer);
        var assocCustomer = this.get('associatedCustomer');
        event.currentTarget.value = '';
        if (mainCustomer && assocCustomer) {
            this.set('activeCustomerId', assocCustomer.customerId);
            this.setState({
                show: {
                    associated: true,
                    currentProject: false
                }
            });
            this.fetchNewPermissions(mainCustomer.customerId, this.get('activeCustomerId'), this.get('project'));
        }
    },

    addProject(event) {
        var associatedCustomer = this.get('associatedCustomer');
        var mainCustomer = this.get('mainCustomer') || {};
        var selectedProject = _.find(associatedCustomer && associatedCustomer.projects, (project) => {
            return project.projectName === event.currentTarget.value
        });
        this.set('project', selectedProject);
        var project = this.get('project');
        event.currentTarget.value = '';
        if (mainCustomer && associatedCustomer && project) {
            this.set('activeCustomerId', associatedCustomer.customerId);
            this.setState({
                show: {
                    associated: true,
                    currentProject: true
                }
            });
            this.fetchNewPermissions(mainCustomer.customerId, this.get('activeCustomerId'), User.getProject('projectId'));
        }
    },

    getProjects() {
        var associatedCustomer = Session.get('associatedCustomer');
        return associatedCustomer && associatedCustomer.projects || [];
    },

    showSCToolTipBox() {
        this.setState({ showSCToolTipBox: !this.state.showSCToolTipBox });
    },

    fetchExistingCart() {
    },

    getCartData() {
        var cartData = Session.get('tempCartData')//this.state.cartData;
        return (
            <div>
                <div className="cartHeader">
                    <span className="cartCount">my cart</span>
                    <div className="clear"></div>
                </div>
                <div className="cartListing">
                    <ul className="listingHeader">
                        <li className="productName"><span>Product Name</span></li>
                        <li className="quantity"><span>Qty</span></li>
                        <li className="contract"><span>Contract</span></li>
                        <li className="location"><span>Location</span></li>
                    </ul>
                </div>
            </div>
        )
    },

    getCartCount() {
        var cartData = Session.get('tempCartData')
        return cartData.length;
    },

    redirectToSplash(moduleRoute) {
        var user = Session.get('user');
        var customersData = user && user.customerSplashPageDataBeans;
        return customersData ? moduleRoute : '/shopping-cart';
    },

    showAssociateCustomer() {
        return _.map(this.props.assocCustomers, (data, key) => {
            return <option key={key} data-id={data.customerId} value={data.customerName} onChange={this.addAssociate}></option>
        });
    },

    showProjects() {
        return _.map(this.getProjects(Session.get('associatedCustomer')), (data, key) => {
            return <option key={key} data-id={data.projectId} value={data.projectName} onChange={this.addProject}></option>
        });
    },

    render() {
        let userData = Session.get('user');
        let customersData = Session.get('user') &&
            Session.get('user').customerSplashPageDataBeans;
        let mainCustomer = _.findWhere(customersData, { isMainCustomer: CONSTANTS.YES }) || {};
        Session.set('mainCustomer', Session.get('mainCustomer') || mainCustomer);
        let associatedCustomer = Session.get('associatedCustomer');
        let projectCheck = Session.get('project')
        let project = _.isEmpty(projectCheck) ? '' : projectCheck;
        let {associated, currentProject } = this.state.show;
        let hideChicklet = this.props.hideChicklet || _.isEmpty(customersData);
        return (
            <header className="clearfix headerWrap navbar-fixed-top row">
                <div className="leftMenuWrap clearfix col-xs-3">
                    <Link to={this.getUserInfo('isInternalUser') ? '/splash-screen-internal' : this.redirectToSplash('/splash-screen') } className="netMagicMainlogo">
                        <img className="img-responsive" src={require('../../../theme/default/images/NTT_logo-header.png') } />
                    </Link>
                    <Link to={this.getUserInfo('isInternalUser') ? '/splash-screen-internal' : this.redirectToSplash('/splash-screen') } className="netMagiclogo">
                        <span>
                            <img className="img-responsive" src={require('../../../theme/default/images/net-logo-black.png') } />
                        </span>
                    </Link>
                </div>
                <div className="searchWrapper headerSearchBox col-xs-6">
                    <div className="clearfix">
                        { hideChicklet ? (null) :
                            (<div className="customerName">
                                <span>
                                    {this.getSlicedName(User.getMainCustomer('customerName')) }
                                </span>
                                <label className={this.showNameOnHover(User.getMainCustomer('customerName')) }>
                                    {User.getMainCustomer('customerName')}
                                </label>
                                <span className="idNum">&nbsp; -{mainCustomer.customerId}</span>
                            </div>
                            )
                        }
                        {
                            associatedCustomer && (mainCustomer.customerId != associatedCustomer.customerId) ?
                                (<div className={associated && !hideChicklet ? "assocCustomerName" : "assocCustomerName hide"}>
                                    <span ref="associatedLabel">
                                        {this.getSlicedName(associatedCustomer && associatedCustomer.customerName) }
                                    </span>
                                    <label className={this.showNameOnHover(associatedCustomer && associatedCustomer.customerName) }>
                                        { associatedCustomer && associatedCustomer.customerName}
                                    </label>
                                    <span className="idNum">-{ associatedCustomer && associatedCustomer.customerId }
                                    </span>
                                    <i className="removeIcon" onClick={this.removeAssociate}>x</i>
                                </div>) : null
                        }
                        {
                            associatedCustomer && project ?
                                (<div className={currentProject && !hideChicklet ? "assocCustomerName projectName" : "assocCustomerName hide"}>
                                    <span ref="projectLabel">
                                        {this.getSlicedName(User.getProject('projectName')) }
                                    </span>
                                    <label className={this.showNameOnHover(User.getProject('projectName')) }>
                                        { User.getProject('projectName')}
                                    </label>
                                    <span className="idNum">-{ User.getProject('projectId')}
                                    </span>
                                    <i className="removeIcon" onClick={this.removeProject}>x</i>
                                </div>)
                                : null
                        }
                        {
                            _.isObject(associatedCustomer) && associatedCustomer ? null :
                                (<div className={ hideChicklet ? "searchBar  hide" : "searchBar"}>
                                    <input list="customers" name="browser" onChange={this.addAssociate} placeholder="Select Associated Customer..."/>
                                    <datalist id="customers">
                                        {this.showAssociateCustomer()}
                                    </datalist>
                                </div>
                                )
                        }
                        {
                            _.isObject(associatedCustomer) && associatedCustomer && !project ?
                                (
                                    <div className={ hideChicklet ? "searchBar hide" : "searchBar"}>
                                        <input list="customers" name="browser" placeholder="Select Project ..." onChange={this.addProject}/>
                                        <datalist id="customers">
                                            {this.showProjects()}
                                        </datalist>
                                    </div>
                                ) : null
                        }
                        <input type="text" name="searchField" className="searchBox noHover hide" placeholder="" />
                        <a href="javascript:void(0);" className="slideSearchLeft hide">
                            <input type="submit" className="submitSearch NMIcon-pinkSearch" value="" />
                        </a>
                    </div>
                </div>
                <div className="rightMenuPanel col-xs-3">
                    <a href="javascript:void(0);" className="headRightMenus hide">
                        <i className="toolTipBox">Notification</i>
                        <span className="NMIcon-pinkBell pinkBellWrap"></span>
                        <span className="notifyNumber hide">8</span>
                    </a>
                    <a href="javascript:void(0);" id="userInfoLink" className="userInfoWrap pull-right">
                        <span className="NMIcon-userPink userPinkIcon"></span>
                    </a>
                    <ul className="settingsDropDown">
                        <li>
                            <a href="javascript:void(0)">
                                <span className="userNameInfo" title={this.getUserInfo('loginUserName')}>
                                    {this.getUserInfo('loginUserName')}
                                </span>
                            </a>
                        </li>
                        <li className='hide'><a href="javascript:void(0)">Configure Dashboard</a></li>
                        <li className='hide'><a href="javascript:void(0)">Notification Settings</a></li>
                        <li className='hide'><Link to='roles'>Roles Management</Link></li>
                        <li><Link to={this.getUserInfo('isInternalUser') ? '/NMInternalUser' : '/MyNetmagic'} className="logoutLink" onClick={this.logout}>Logout</Link></li>
                    </ul>
                    {
                        hideChicklet || this.props.isShoppingCart ? (null) :
                            <Link to="/shopping-cart" className='pull-right buyingLink hide' >
                                <span>Buy Now</span>
                            </Link>
                    }
                    <a className="headRightMenus pull-right cartLink hide"
                        onClick={this.showSCToolTipBox}>
                        <span className="NMIcon-cartPink pinkCartWrap"></span>
                        {
                            this.state.showSCToolTipBox ?
                                <div className="cartDropDown">{ this.getCartData() }</div> : (null)
                        }
                    </a>
                    <Link to={this.redirectToSplash('/shopping-cart/provision') } className="headRightMenus pull-right provisionLink hide">
                        <i></i>
                    </Link>
                </div>
            </header>
        );
    },
});

export default Header;
