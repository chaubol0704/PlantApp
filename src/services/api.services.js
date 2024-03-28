import axios from "axios";
const commonConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export default () => {
  return axios.create({
    baseURL: "http://10.2.60.87:5000",
    ...commonConfig,
  });
};
