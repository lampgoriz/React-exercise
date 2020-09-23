import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        // 'API-KEY': 'fa4e8830-2447-4120-b9db-3bcc67a6fe5f' // Lampogriz
        'API-KEY': '7795886e-f5ca-4c12-8d1a-5a0197a62370' // Mamba
    }
})

export const UserAPI = {
    getUsers(currentPage = 1, pageSize = 100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}

export const FollowAPI = {
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response);
    },
    follow(id){
        return instance.post(`follow/${id}`).then(response => response);
    }
}

export const ProfileAPI ={
    getProfile(id){
        return instance.get(`profile/${id}`).then(response => response);
    }
}
