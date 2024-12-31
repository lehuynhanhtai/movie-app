import { Banner } from "./_components/Banner";
import HotMovie from "./_components/HotMovie";
import LeftSide from "./_components/LeftSide";
import RightSide from "./_components/RightSide";

export default function Home() {
  return (
    <div>
      <Banner />
      <HotMovie />
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <LeftSide className="lg:col-span-2" />
        <RightSide className="lg:col-span-1" />
      </div>
    </div>
  );
}
