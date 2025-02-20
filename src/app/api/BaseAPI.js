"use client"
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});