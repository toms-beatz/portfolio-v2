import { axiosInstance } from "@/app/api/BaseAPI";

export const getHardSkills = async () => {
    try {
        const response = await axiosInstance.get('/api/hard-skills');
        return response.data.data;
    } catch (error) {
        throw error;
    }
}