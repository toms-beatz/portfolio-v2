import { axiosInstance } from "@/app/api/BaseAPI";

export const getTestimonials = async () => {
    try {
        const response = await axiosInstance.get('/api/testimonials?populate=*');
        return response.data.data;
    } catch (error) {
        throw error;
    }
}