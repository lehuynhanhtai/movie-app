import { useState } from "react";

const useDialog = () => {
  const [open, setOpen] = useState(false);

  const handleToggleDialog = () => {
    setOpen((prev) => !prev);
  };

  return {
    open,
    handleToggleDialog,
  };
};

export default useDialog;
