import { fetchHotMovies, fetchMovieDetail } from "@/fetch";
import RightSide from "../../_components/RightSide";
import MovieDetails from "../_components/DetailMovie";
import RecomentMovie from "../_components/RecomentMovie";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const fetDetailMovie = await fetchMovieDetail(params.slug);
  const currentMovie = fetDetailMovie.data.item;
  return {
    title: `Chill phim | ${currentMovie.origin_name} | ${currentMovie.name}`,
    description: currentMovie.content.slice(0, 160),
  };
}

const DeTail = async ({ params }: { params: { slug: string } }) => {
  const hotMovie = await fetchHotMovies({
    params: {
      page: 1,
      category: "",
      country: "",
      year: "",
      // sort_field: "",
    },
  });

  const fetDetailMovie = await fetchMovieDetail(params.slug);

  return (
    <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 py-10">
      <div className="lg:col-span-2 space-y-14">
        <MovieDetails fetDetailMovie={fetDetailMovie} slug={params.slug} />
        <RecomentMovie hotMovie={hotMovie} />
      </div>
      <RightSide className="lg:col-span-1" />
    </div>
  );
};
export default DeTail;
