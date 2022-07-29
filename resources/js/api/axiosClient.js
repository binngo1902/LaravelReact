import axios from "axios";
import { useHistory } from "react-router-dom";
const axiosClient = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.request.use(function(config){
    $("<div class='page-loader'><span class='spinner-border text-primary' role='status'></span></div>")
    .appendTo('body');
    return config;
},function(error){
    $(".page-loader").remove();
    return Promise.reject(error);
});

axiosClient.interceptors.response.use(function (response){
    $(".page-loader").remove();
    return response.data;
},function(error){
    $(".page-loader").remove();
    if(error.response.status === 401) {
        localStorage.removeItem('logged_in');
        localStorage.removeItem('user_type');
        localStorage.removeItem('config');
        localStorage.removeItem('last_login');
        localStorage.removeItem('notify');
        localStorage.removeItem('info');
    }
    return Promise.reject(error);
});

export default axiosClient;
