import React from "react";
import { Loader } from "lucide-react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <Loader size={48} className="animate-spin" />
    </div>
  );
};

export default Loading;
