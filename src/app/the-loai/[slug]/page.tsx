import { fetchMovieByCategory } from "@/fetch";
import MovieByCategory from "../_components/MovieByCategory";
import PaginationControls from "@/app/danh-sach/_components/PanigationControls";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const movieByCate = await fetchMovieByCategory({
    slug: params.slug,
    params: { page: 1, category: "", country: "", year: "", sort_field: "" },
  });
  return {
    title: `Chill phim | ${movieByCate.seoOnPage.titleHead}`,
    description: movieByCate.seoOnPage.descriptionHead,
  };
}

export default async function TheLoaiPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string };
}) {
  const page = parseInt(searchParams.page || "1", 10); // Mặc định là 1 nếu không có page
  const category = searchParams.category || ""; // Mặc định là chuỗi rỗng
  const country = searchParams.country || ""; // Mặc định là chuỗi rỗng
  const year = searchParams.year || ""; // Mặc định là chuỗi rỗng
  const sort_field = searchParams.sort_field || "";

  const movieByCate = await fetchMovieByCategory({
    params: { page, category, country, year, sort_field },
    slug: params.slug,
  });

  return (
    <main className="container mx-auto px-4 space-y-10 py-5">
      <h1 className="text-2xl font-bold text-yellow-500 text-center">
        LỌC PHIM THEO THỂ LOẠI
      </h1>
      <MovieByCategory movieByCate={movieByCate} />
      <PaginationControls pagination={movieByCate.params.pagination} />
    </main>
  );
}
