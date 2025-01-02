import { buildQuery } from "@/lib/utils";
import axios from "../axios";

export const fetchCategories = async () => {
  try {
    const response = await axios.get("/api/the-loai");
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const fetchCountries = async () => {
  try {
    const response = await axios.get("/api/quoc-gia");
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

export const fetchUpcomingMovies = async ({
  params,
}: {
  params: {
    page: number;
    category: string | null;
    country: string | null;
    year: string | null;
  };
}) => {
  try {
    const response = await axios.get(
      `/api/danh-sach/phim-sap-chieu?${buildQuery(params)}`,
    );
    const data = await response.data;
    return data?.data;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    throw error;
  }
};
