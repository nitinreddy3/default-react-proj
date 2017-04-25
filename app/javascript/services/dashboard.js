import http from '../mixins/restutils';
import UI from '../mixins/ui';
import Utility from '../mixins/basicUtils';
import CONSTANTS from '../constants/app-constant';

var getState = function (result, stateKey) {
  /*ignore jslint start*/
  this.state.widget[stateKey] = result;
  this.state.loaded[stateKey] = true;
  this.setState(this.state);
  /*ignore jslint end*/ 
};

const DashboardService = {
  typeCount: 2,
  getData: function(apiURL, queryParams, stateKey, onSuccess) {
    http.performGet(http.buildUrl(apiURL, queryParams))
      .then(function (result) {
        getState.call(this, result, stateKey);
        onSuccess && onSuccess();
      }.bind(this))
      .catch(function (error) {
        UI.notifyError( error.responseText);
      });
  },

  getOutstandingWidget: (params) => {
    return http.performPost(CONSTANTS.API_URLS.outstanding.widget, params);
  }
};

export default DashboardService;
