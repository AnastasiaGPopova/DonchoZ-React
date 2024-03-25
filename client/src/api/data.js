import * as api from './api.js';


const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Implement application-specific requests
export async function getPaintings() {
    return await api.get(host + '/paintings');
}



export async function getItemById(id) {
    return await api.get(host + '/paintings/' + id);
}


export async function createPainting(data) {

        const response = await api.post(host + '/paintings', data);
        console.log(response)
        return response
}

export async function editPainting(id, data) {
    try{
        return await api.put(host + '/paintings/' + id, data);
    }catch(error){
        console.log(error)
    }
}



// export async function searchFunction(data) {
//     try{
//         return await api.post(host + '/search', data);
        
//     }catch(error){
//         console.log(error)
//     }
// }



export async function deletePainting(id) {
    return await api.del(host + '/paintings/' + id);
}



export async function getUser() {
 
    const response = await api.get(host + `/users/`);
    return response
}



