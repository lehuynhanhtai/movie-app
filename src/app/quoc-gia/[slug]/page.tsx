import PaginationControls from "@/app/danh-sach/_components/PanigationControls";
import { fetchMovieByCountry } from "@/fetch";
import MovieByCountry from "../_components/MovieByCountry";

export default async function MovieQuocGiaPage({
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

  const movieByCountry = await fetchMovieByCountry({
    slug: params.slug,
    params: { page, category, country, year, sort_field },
  });
  return (
    <main className="container mx-auto px-4 space-y-10 py-5">
      <h1 className="text-2xl font-bold text-yellow-500 text-center">
        LỌC PHIM THEO QUỐC GIA
      </h1>
      <MovieByCountry movieByCountry={movieByCountry} />
      <PaginationControls pagination={movieByCountry.params.pagination} />
    </main>
  );
}
