import { axiosInstance } from "@/app/api/BaseAPI";

export const getAboutPageData = async () => {
    try {
        const response = await axiosInstance.get('/api/about-page');
        return response.data.data;
    } catch (error) {
        throw error;
    }
}