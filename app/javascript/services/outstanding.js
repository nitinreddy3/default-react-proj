import http from '../mixins/restutils';
import UI from '../mixins/ui';
import Utility from '../mixins/basicUtils';
import CONSTANTS from '../constants/app-constant';
import Session from '../mixins/sessionUtils';
import User from './user';

const Invoice = {
    typeCount: 2,
    getData: function (url, businessUnit) {
        var mainCustomer = Session.get('mainCustomer');
        var mainCustomerId = User.getMainCustomer('customerId') || User.getMainCustomer('cvCrmId');
        var project = Session.get('project');
        var requestParams = {
            OutstandingAPIinput: {
                billToCustomer: mainCustomerId,
                businessUnit: businessUnit || CONSTANTS.DUMMY_BUSINESS_UNIT,
                suppportToCustomers: {
                    suppportToCustomerId: Session.get('activeCustomerId'),
                    projectList: {
                        Project: 'ALL'
                    }
                }
            }
        };
        return http.performPost(url, requestParams);
    },

    makePaymentRequest: (request) => http.performPost(CONSTANTS.API_URLS.outstanding.payment, request),

    getBusinessUnits: () => http.performGet(CONSTANTS.API_URLS.outstanding.businessUnit)

};

export default Invoice;
