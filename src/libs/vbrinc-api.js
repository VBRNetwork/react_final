import axios from 'axios'
import humps from 'humps'

let apiUrl = 'https://127.0.0.1:8000/api/v1/';
if ((!process.env.NODE_ENV || process.env.NODE_ENV === false)
    //PUT false
    || false) {
    apiUrl = 'http://127.0.0.1:8000/api/v1/'
}

if (typeof window !== 'undefined' && window.location && window.location.host === 'ico.veelancing.io') {
    apiUrl = 'https://ico.veelancing.io/api/v1/';
}


function getToken(){
    let token = false;
    let tokenJson = {};
    let tokenJsonRoot = {};
    let json = {};

    if (typeof window !== 'undefined') {
        tokenJson = JSON.parse(localStorage.getItem('persist:user'));
        tokenJsonRoot = JSON.parse(localStorage.getItem('persist:root'));
        if(tokenJson){
            json = JSON.parse(tokenJson.user)
        }else if(tokenJsonRoot){
            json = JSON.parse(tokenJsonRoot.user)
        }else {
            token = null
            return token
        }

        if(json.token != 0)
            token = "JWT " + json.token
        else
            token = null
    }

    return token;
}

export function setTokenHeader(){
    secureInstance.defaults.headers.common['Authorization'] = getToken()
}

const secureInstance = axios.create({
    baseURL: apiUrl,
    headers: {'Access-Control-Allow-Origin': '*','Authorization': getToken() }
});


const vbrincapi = {
    getToken({username, password}) {
        let bodyFormData = new FormData();
        bodyFormData.set('username', username);
        bodyFormData.set('password', password);
        return secureInstance.post(apiUrl + 'accounts/auth/login/', bodyFormData).then(res => {
            return res;
        })
    },
    logout() {
        return secureInstance.post(apiUrl+'accounts/auth/logout/').then(res => {
            return humps.camelizeKeys(res.data)
        })
    },
    getAppSettings() {
        return secureInstance.get(apiUrl + 'settings/', {}).then(res => {
            return humps.camelizeKeys(res.data)
        })
    },
    registerAccount(data){
        let bodyFormData = new FormData();
        bodyFormData.set('username', data.email);
        bodyFormData.set('email', data.email);
        bodyFormData.set('first_name', data.first_name);
        bodyFormData.set('last_name', data.last_name);
        bodyFormData.set('password1', data.password1);
        bodyFormData.set('password2', data.password2,);

        return secureInstance.post(apiUrl + 'accounts/auth/registration',bodyFormData).then(res => {
            return humps.camelizeKeys(res)
        })
    },
    becomeFreelancer(data){
        let bodyFormData = new FormData();
        bodyFormData.set('description', data.description)
        bodyFormData.set('languages', JSON.stringify(data.languages))
        bodyFormData.set('categories',JSON.stringify(data.selectedCategories))
        bodyFormData.set('skills', JSON.stringify(data.skills))
        bodyFormData.set('cv_file', data.cvFile[0])
        bodyFormData.set('tos',data.tos)
        return secureInstance.post(apiUrl + 'accounts/become-freelancer',bodyFormData).then(res => {
            return humps.camelizeKeys(res.data)
        })
    },

    knowYourCustomer(data){
        let bodyFormData = new FormData();
        bodyFormData.set('first_name', data.first_name)
        bodyFormData.set('last_name', data.last_name)
        bodyFormData.set('email', data.email)
        bodyFormData.set('gender',data.gender)
        bodyFormData.set('date_birth', data.date_birth)
        bodyFormData.set('password1', data.password1);
        bodyFormData.set('password2', data.password2);
        if(typeof data.referral_code != 'undefined'){
            bodyFormData.set('referral_code', data.referral_code);
        }
        // bodyFormData.set('id_front_picture', data.id_front_picture[0])
        // bodyFormData.set('id_back_picture', data.id_back_picture[0])
        // bodyFormData.set('id_selfie_picture', data.id_selfie_picture[0])
        bodyFormData.set('address', data.address)
        // bodyFormData.set('address_line2', data.address_line2)
        bodyFormData.set('phone', data.phone)
        bodyFormData.set('tos', data.tos)

        return secureInstance.post(apiUrl + 'bc/coinexchangedata/verify-user/', bodyFormData).then(res => {
            return res
        })

    },

    getMembers(filter, page=1 ){
        let bodyFormData = new FormData();
        return secureInstance.get(apiUrl + 'accounts/list/?page='+page).then(res => {
            return humps.camelizeKeys(res.data)
        })
    },

    getSkillsLanguages(){
        let bodyFormData = new FormData();
        return secureInstance.get(apiUrl + 'settings/profile').then(res => {
            return humps.camelizeKeys(res.data)
        })
    },
    getProfileMember(id){
        let bodyFormData = new FormData();
        bodyFormData.set('id', id);
        return secureInstance.post(apiUrl + 'accounts/profile/', bodyFormData).then(res => {
            return humps.camelizeKeys(res.data)
        })
    },
    getIntlang(id){
        return secureInstance.post(apiUrl + 'intl').then(res => {
            return res.data
        })
    },
    subscribeToNewsletter(email){
        let bodyFormData = new FormData();
        bodyFormData.set('email', email);
        return secureInstance.post(apiUrl + 'accounts/subscribe/', bodyFormData).then(res => {
            return res
        })
    },
    getPageDetails(post_url){
        return secureInstance.get(apiUrl + 'community/'+post_url).then(res => {
            return res.data
        })
    },
    //User deletion api, as parameter the id of the user which you want to delete
    deleteUser(id){
        let bodyFormData = new FormData;
        bodyFormData.set('id', id);
        return secureInstance.post(apiUrl + 'accounts/delete-user', bodyFormData).then(res => {
            return res
        })
    }
};


export default vbrincapi
