import RightSide from "@/app/_components/RightSide";
import ListMovies from "@/app/chi-tiet/_components/ListMovies";
import { fetchCategories, fetchCountries, fetchListMovie } from "@/fetch";
import FilterBar from "../_components/FilterGroup";
import PaginationControls from "../_components/PanigationControls";

const ListMovie = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string };
}) => {
  // Lấy giá trị page từ query string
  const page = parseInt(searchParams.page || "1", 10); // Mặc định là 1 nếu không có page
  const category = searchParams.category || ""; // Mặc định là chuỗi rỗng
  const country = searchParams.country || ""; // Mặc định là chuỗi rỗng
  const year = searchParams.year || ""; // Mặc định là chuỗi rỗng
  const sort_field = searchParams.sort_field || "";

  const data = await fetchListMovie({
    slug: params.slug,
    params: { page, category, country, year, sort_field },
  });

  const pagination = data.params.pagination;

  const dataCategories = await fetchCategories();
  const dataCountries = await fetchCountries();

  return (
    <main className="container px-4 mx-auto space-y-5">
      <FilterBar
        dataCategories={dataCategories}
        dataCountries={dataCountries}
        slug={params.slug}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-14">
          <ListMovies data={data} />
          <PaginationControls pagination={pagination} />
        </div>
        <RightSide className="lg:col-span-1" />
      </div>
    </main>
  );
};

export default ListMovie;
