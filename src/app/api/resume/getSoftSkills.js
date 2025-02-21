import { axiosInstance } from "@/app/api/BaseAPI";

export const getSoftSkills = async () => {
    try {
        const response = await axiosInstance.get('/api/soft-skills');
        return response.data.data;
    } catch (error) {
        throw error;
    }
}