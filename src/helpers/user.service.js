import BaseService from "@/services/base.service.js";

export const getAll = async() => {
    return BaseService.get("/users");
}

export const getByName = async(name) => {
    return BaseService.get(`/users/${name}`);
}

export const post = async(data) => {
    return BaseService.post("/users", data);
}

export const put = async(id, data) => {
    return BaseService.put(`/users/${id}`, data);
}

export const remove = async(id) => {
    return BaseService.delete(`/users/${id}`);
}
