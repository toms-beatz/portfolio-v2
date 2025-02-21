import { axiosInstance } from "@/app/api/BaseAPI";

export const getExperiences = async () => {
    try {
        const response = await axiosInstance.get('/api/experiences');
        return response.data.data;
    } catch (error) {
        throw error;
    }
}