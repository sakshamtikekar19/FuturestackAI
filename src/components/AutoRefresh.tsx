"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function AutoRefresh({ isPending }: { isPending: boolean }) {
  const router = useRouter();

  useEffect(() => {
    if (!isPending) return;

    const intervalId = setInterval(() => {
      router.refresh();
    }, 3000); // Poll every 3 seconds

    return () => clearInterval(intervalId);
  }, [isPending, router]);

  return null;
}
