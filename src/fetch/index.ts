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

export const fetchPhimLe = async ({
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
      `/api/danh-sach/phim-le?${buildQuery(params)}`,
    );
    const data = await response.data;
    return data?.data;
  } catch (error) {
    console.error("Error fetching phim le:", error);
    throw error;
  }
};

export const fetchPhimBo = async ({
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
      `/api/danh-sach/phim-bo?${buildQuery(params)}`,
    );
    const data = await response.data;
    return data?.data;
  } catch (error) {
    console.error("Error fetching phim bo:", error);
    throw error;
  }
};

export const fetchTvShows = async ({
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
      `/api/danh-sach/tv-shows?${buildQuery(params)}`,
    );
    const data = await response.data;
    return data?.data;
  } catch (error) {
    console.error("Error fetching tv show:", error);
    throw error;
  }
};

export const fetchHoatHinh = async ({
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
      `/api/danh-sach/hoat-hinh?${buildQuery(params)}`,
    );
    const data = await response.data;
    return data?.data;
  } catch (error) {
    console.error("Error fetching hoat hinh:", error);
    throw error;
  }
};

export const fetchNewsMovies = async ({
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
      `/api/danh-sach/moi?${buildQuery(params)}`,
    );
    const data = await response.data;
    return data?.data;
  } catch (error) {
    console.error("Error fetching hoat hinh:", error);
    throw error;
  }
};

export const fetchHotMovies = async ({
  params,
}: {
  params: {
    page: number;
    category: string | null;
    country: string | null;
    year: string | null;
    // sort_field: string | null;
  };
}) => {
  try {
    const response = await axios.get(
      `/api/danh-sach/hot?${buildQuery(params)}`,
    );
    const data = await response.data;
    return data?.data;
  } catch (error) {
    console.error("Error fetching hoat hinh:", error);
    throw error;
  }
};

export const fetchMovieDetail = async (slug: string) => {
  try {
    const response = await axios.get(`/api/phim/${slug}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error fetching movie detail:", error);
    throw error;
  }
};

export const fetchListMovie = async ({
  slug,
  params,
}: {
  slug: string;
  params: {
    page: number;
    category: string | null;
    country: string | null;
    year: string | null;
    sort_field: string | null;
  };
}) => {
  try {
    const response = await axios.get(
      `/api/danh-sach/${slug}?${buildQuery(params)}`,
    );
    const data = await response.data;
    return data.data;
  } catch (error) {
    console.error("Error fetching movie detail:", error);
    throw error;
  }
};

export const fetchOneMovie = async ({ slug }: { slug: string }) => {
  try {
    const response = await axios.get(`/api/phim/${slug}`);
    const data = await response.data;
    return data.data;
  } catch (error) {
    console.error("Error fetching movie detail:", error);
    throw error;
  }
};

export const fetchMovieByCategory = async ({
  slug,
  params,
}: {
  slug: string;
  params: {
    page: number;
    category: string | null;
    country: string | null;
    year: string | null;
    sort_field: string | null;
  };
}) => {
  try {
    const response = await axios.get(
      `/api/the-loai/${slug}?${buildQuery(params)}`,
    );
    const data = await response.data;
    return data.data;
  } catch (error) {
    console.error("Error fetching movie detail:", error);
    throw error;
  }
};

export const fetchMovieByCountry = async ({
  slug,
  params,
}: {
  slug: string;
  params: {
    page: number;
    category: string | null;
    country: string | null;
    year: string | null;
    sort_field: string | null;
  };
}) => {
  try {
    const response = await axios.get(
      `/api/quoc-gia/${slug}?${buildQuery(params)}`,
    );
    const data = await response.data;
    return data.data;
  } catch (error) {
    console.error("Error fetching movie detail:", error);
    throw error;
  }
};
