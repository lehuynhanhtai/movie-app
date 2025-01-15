import React from "react";
import { CarouselApi } from "@/components/ui/carousel";

interface UseCarouselProps {
  autoSlide?: boolean;
}

const useCarousel = ({ autoSlide = true }: UseCarouselProps = {}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState<number>(0);
  const [count, setCount] = React.useState<number>(0);

  const nextSlide = React.useCallback(() => {
    if (!api) return;
    const next = (current % count) + 1;
    api.scrollTo(next - 1);
    setCurrent(next);
  }, [api, current, count]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    let interval: NodeJS.Timeout | null = null;

    if (autoSlide) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [api, current, count, autoSlide, nextSlide]);

  const prevSlide = () => {
    if (!api) return;
    const prev = current === 1 ? count : current - 1;
    api.scrollTo(prev - 1);
    setCurrent(prev);
  };

  return { api, current, count, setApi, nextSlide, prevSlide };
};

export default useCarousel;
