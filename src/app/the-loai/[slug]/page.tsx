import { fetchMovieByCategory } from "@/fetch";
import MovieByCategory from "../_components/MovieByCategory";
import PaginationControls from "@/app/danh-sach/_components/PanigationControls";

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
    <main className="container mx-auto px-4 space-y-10">
      <MovieByCategory movieByCate={movieByCate} />
      <PaginationControls pagination={movieByCate.params.pagination} />
    </main>
  );
}
