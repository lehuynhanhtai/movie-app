import { fetchHotMovies, fetchOneMovie } from "@/fetch";
import PlayerMovie from "../_components/PlayerMovie";
import RecomentMovie from "@/app/chi-tiet/_components/RecomentMovie";
import ContentMovie from "../_components/ContentMovie";
import TabServer from "../_components/TabServer";
import { ServerProvider } from "../contexts/ServerContext";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const oneMovie = await fetchOneMovie({
    slug: params.slug[0],
  });
  return {
    title: `Chill phim | ${oneMovie.seoOnPage.titleHead}`,
    description: oneMovie.seoOnPage.descriptionHead,
  };
}

export default async function Movie({ params }: { params: { slug: string } }) {
  const movie = await fetchOneMovie({ slug: params.slug[0] });
  const hotMovie = await fetchHotMovies({
    params: {
      page: 1,
      category: "",
      country: "",
      year: "",
      // sort_field: "",
    },
  });

  return (
    <ServerProvider defaultServer={movie.item.episodes[0].server_name}>
      <main className="max-w-screen-lg px-4 mx-auto space-y-10">
        <PlayerMovie movie={movie} slug={params.slug[1]} />
        <TabServer data={movie.item} slug={params.slug[1]} />
        <ContentMovie content={movie.item.content} />
        <RecomentMovie hotMovie={hotMovie} />
      </main>
    </ServerProvider>
  );
}
