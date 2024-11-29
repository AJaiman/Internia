'use client';

import { useSelectedInterests } from "./lib/useSelectedInterests";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  useSelectedInterests();
  return <>{children}</>;
}