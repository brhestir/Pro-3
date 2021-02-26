import axios from "axios";
const BASEURL =
  "http://api.marketstack.com/v1/intraday?interval=1min&symbols=";
const APIKEY = "&access_key=412cef10f09b95f3a1a79b98ae8a3d0f";

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
};
