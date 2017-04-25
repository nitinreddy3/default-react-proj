import CONSTANTS from '../../constants/app-constant';
import Alert from './Alert';
import Header from './Header';
import Footer from './Footer';
import UI from '../../mixins/ui';
import Session from '../../mixins/sessionUtils';

var ChildComponent = React.createClass({
  mixins: [UI, Session],

  render() {
	return(<div>
	  <Header ref="header" isLoggedIn= {this.get('user')}
		assocCustomer={this.get('associatedCustomer')} project={this.get('project')}
		setParentLoadState = {this.props.setParentLoadState} assocCustomers={this.props.assocCustomers}
		isShoppingCart={this.props.isShoppingCart}/>
		<div className="pageData">
		  <Alert />
		  {this.props.reload ? this.props.children :
			(<span className="flashMessage">{CONSTANTS.UI_MESSAGES.fetchingPermissions}
			</span>)}
		</div>
		<Footer />
	</div>
	);
  },
});

export default ChildComponent;
