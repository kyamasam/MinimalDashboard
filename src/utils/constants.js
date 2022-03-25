import json from '../app_settings.json'

let baseUrl = json.api_url;
let api_url = baseUrl + '/api/v1'
export {
    api_url,
}