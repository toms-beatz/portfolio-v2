import { axiosInstance } from "@/app/api/BaseAPI";

export const getSidebarData = async () => {
    try {
        const response = await axiosInstance.get('/api/sidebar-info?populate=*');
        return response.data.data;
    } catch (error) {
        throw error;
    }
}