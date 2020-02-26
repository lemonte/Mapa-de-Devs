import axios from "axios";
const api = axios.create({
    baseURL: " http://tb-w9v.anonymous.mobile.exp.direct:3333",
    //exp://192.168.137.1:19000
    //192.168.137.1  
})
export default api;