import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
         'API-KEY': 'fa4e8830-2447-4120-b9db-3bcc67a6fe5f' // Lampogriz
        //'API-KEY': '7795886e-f5ca-4c12-8d1a-5a0197a62370' // Mamba
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`);
    },
    follow(id) {
        return instance.post(`follow/${id}`);
    },
    getProfile(id) {
        console.warn("use profileAPI object")
        return profileAPI.getProfile(id);
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status});
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`);
    }
}
