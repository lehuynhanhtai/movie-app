import RightSide from "@/app/_components/RightSide";
import ListMovies from "@/app/chi-tiet/_components/ListMovies";
import { fetchListMovie } from "@/fetch";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import FilterBar from "../_components/FilterGroup";

const ListMovie = async ({ params }: { params: { slug: string } }) => {
  const data = await fetchListMovie(params.slug);
  return (
    <main className="container px-4 mx-auto space-y-5">
      <FilterBar />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-14">
          <ListMovies data={data} />
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" className="bg-yellow-700" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className="bg-yellow-700" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        <RightSide className="lg:col-span-1" />
      </div>
    </main>
  );
};

export default ListMovie;
