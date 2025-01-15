// contexts/ServerContext.tsx
"use client";
import { createContext, useContext, useState } from "react";

const ServerContext = createContext<{
  currentServer: string;
  setCurrentServer: (server: string) => void;
}>({ currentServer: "", setCurrentServer: () => {} });

export function ServerProvider({
  children,
  defaultServer,
}: {
  children: React.ReactNode;
  defaultServer: string;
}) {
  const [currentServer, setCurrentServer] = useState(defaultServer);

  return (
    <ServerContext.Provider value={{ currentServer, setCurrentServer }}>
      {children}
    </ServerContext.Provider>
  );
}

export const useServer = () => useContext(ServerContext);
