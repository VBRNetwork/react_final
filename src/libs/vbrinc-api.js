import axios from 'axios'
import humps from 'humps'
let apiUrl = 'https://veelancing.io/api/v1/';
if ((!process.env.NODE_ENV || process.env.NODE_ENV === false)
    //PUT false
    || false) {
    apiUrl = 'http://127.0.0.1:8000/api/v1/'
}

const instance = axios.create({
    baseURL: apiUrl,
    headers: {'Access-Control-Allow-Origin': '*'}
});

function getToken(){
    let token = '';
    let tokenJson = {};
    let tokenJsonRoot = {};

    if (typeof window !== 'undefined') {
        tokenJson = JSON.parse(localStorage.getItem('persist:user'));
        tokenJsonRoot = JSON.parse(localStorage.getItem('persist:root'));
        if(tokenJson){
            token = tokenJson.token
        }
        if(tokenJsonRoot){
            token = JSON.parse(tokenJsonRoot.user).token
        }
    }

    return token;
}



const secureInstance = axios.create({
    baseURL: apiUrl,
    headers: {'Access-Control-Allow-Origin': '*','Authorization': "JWT " + getToken() }
});


const vbrincapi = {
    getToken({username, password}) {
        let bodyFormData = new FormData();
        bodyFormData.set('username', username);
        bodyFormData.set('password', password);
        return instance.post(apiUrl + 'accounts/auth/login/', bodyFormData).then(res => {
            return res;
        })
    },
    logout() {
        return secureInstance.post(apiUrl+'accounts/auth/logout/').then(res => {
            return humps.camelizeKeys(res.data)
        })
    },
    getAppSettings() {
        return instance.get(apiUrl + 'settings/', {}).then(res => {
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

        return instance.post(apiUrl + 'accounts/auth/registration',bodyFormData).then(res => {
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
        bodyFormData.set('email', data.last_name)
        bodyFormData.set('gender',data.gender)
        bodyFormData.set('date_birth', data.date_birth)
        bodyFormData.set('password1', data.password1);
        bodyFormData.set('password2', data.password2);
        bodyFormData.set('id_front_picture', data.id_front_picture[0])
        bodyFormData.set('id_back_picture', data.id_back_picture[0])
        bodyFormData.set('id_selfie_picture', data.id_selfie_picture[0])
        bodyFormData.set('address_line1', data.address_line1)
        bodyFormData.set('address_line2', data.address_line2)
        bodyFormData.set('phone', data.phone)
        bodyFormData.set('tos', data.tos)

        let response = false
        try {
            response = instance.post(apiUrl + 'bc/coinexchangedata/verify-user/', bodyFormData).then(res => {
                return humps.camelizeKeys(res.data)
            })
        }catch (e) {
            console.log(e)
        }
        return response

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
        return instance.post(apiUrl + 'accounts/subscribe/', bodyFormData).then(res => {
            return res.data
        })
    },
    getPageDetails(post_url){
        return instance.get(apiUrl + 'community/'+post_url).then(res => {
            return res.data
        })
    }
};


export default vbrincapi
