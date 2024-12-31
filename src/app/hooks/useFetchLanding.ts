import axios from "axios";
import { useCallback } from "react";

const useFetchLanding = () => {
  const fetchTrending = useCallback(
    async ({ callback }: { callback: (data: []) => void }) => {
      const response = await axios.get("/trending/all/week?language=vi");
      console.log(response.data);
      callback(response.data);
    },
    [],
  );
  return {
    fetchTrending,
  };
};

export default useFetchLanding;
