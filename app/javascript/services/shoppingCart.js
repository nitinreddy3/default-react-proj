import http from '../mixins/restutils';
import UI from '../mixins/ui';
import Utility from '../mixins/basicUtils';
import CONSTANTS from '../constants/app-constant';

const ShoppingCartService = {
  getData: (apiURL, queryParams) => http.performGet(apiURL, queryParams),
  getBillingGroup: (apiURL, queryParams) => http.performGet(apiURL, queryParams),
  saveCart: (apiURL, requestBody) => http.performPost(apiURL, requestBody),
  getPricing: (apiURL, requestBody) => http.performPost(apiURL, requestBody),
  getContract: (apiURL, requestBody) => http.performPost(apiURL, requestBody),
  getAddresses: (apiURL, requestBody) => http.performPost(apiURL, requestBody),

  getProjectsFromAPI: (params) => {
    return http.performGet(http.buildUrl(CONSTANTS.API_URLS.associatedProjects,
      params));
  },
};

export default ShoppingCartService;
