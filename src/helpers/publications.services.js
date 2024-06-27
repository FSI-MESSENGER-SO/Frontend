import BaseService from "@/services/base.service.js";

export const getAllPublications = async () => {
    return await BaseService.get("/posts");
}

export const postPublication = async (publication) => {
    return await BaseService.post("/posts", publication);
}

export const deletePublication = async (id) => {
    return await BaseService.delete("/posts/"+ id);
}

export const updatePublication = async (id, publication) => {
    return await BaseService.put("/posts/"+ id, publication);
}
