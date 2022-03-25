import axios from "axios";
import {api_url} from "@/utils/constants";

export default axios.create({
    baseURL:api_url,
})