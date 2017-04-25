import http from '../mixins/restutils';
import UI from '../mixins/ui';
import CONSTANTS from '../constants/app-constant';

const Service = {
  getSOFLineItems: function(sofNumber) {
    var url = http.buildUrl(CONSTANTS.API_URLS.serviceSOFLineItems,
    { contractnumber: sofNumber });
    return http.performGet(url, { statusCode: this.state.serviceStatus, page: 1 });
  },

  getSOFList: function(params) {
    return http.performGet(http.buildUrl(CONSTANTS.API_URLS.serviceSOFList,
      params), { statusCode: this.state.serviceStatus, page: 1 });
  }
};

export default Service;
