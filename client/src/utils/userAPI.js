import axios from "axios";

export default {
  // makes an API call for random user data link(https://randomuser.me/documentation#howto)
  randomUser: function (randomData) {
    console.log(randomData);
    return axios.get("https://randomuser.me/api/?gender=female");
  },
};
