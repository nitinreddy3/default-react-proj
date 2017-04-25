import http from '../mixins/restutils';
import UI from '../mixins/ui';
import Utility from '../mixins/basicUtils';
import CONSTANTS from '../constants/app-constant';
import User from './user';

const Assets = {
  getList: function(requestParams) {
    var defaultParams = User.getCustomerParams();
    var params = _.chain(defaultParams)
      .extend({
        assetTypeName: requestParams.assetType ||
          ( requestParams.tab || _.first(CONSTANTS.ASSET_TYPES).type),
        assetTypeId: "",
        listOfAssetTagName: _.pluck(requestParams.tags, 'label') || [],
        associateCustomerId: defaultParams.assoCustomerId,
        mainCustomerId: defaultParams.customerId,
        maxResults: 20,
        pageNumber: requestParams.pageNumber,
      }).omit('assoCustomerId', 'customerId')
      .value();
    return http.performPost(http.buildUrl(CONSTANTS.API_URLS.assetList), params);
  },

  getTagList: function() {
    return http.performGet(http.buildUrl(CONSTANTS.API_URLS.assetTags, User.getCustomerParams()));
  },

  addRemoveTag: function(params, url) {
    return http.performPost(http.buildUrl(url, params));
  }
};

export default Assets;
