import { axiosInstance } from "@/app/api/BaseAPI";

export const getProjects = async () => {
    try {
        const response = await axiosInstance.get('/api/projects?populate=*');
        return response.data.data;
    } catch (error) {
        throw error;
    }
}