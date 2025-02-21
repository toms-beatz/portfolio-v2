import { axiosInstance } from "@/app/api/BaseAPI";

export const getFormations = async () => {
    try {
        const response = await axiosInstance.get('/api/formations');
        return response.data.data;
    } catch (error) {
        throw error;
    }
}