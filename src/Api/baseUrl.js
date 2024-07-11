import axios from "axios"


const baseURL = axios.create({baseURL: 'https://api.lepgo.online'});


export default baseURL;