"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/entity/user";

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, loading, error, getUser } = useUserStore();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!user && !loading) {
      getUser().finally(() => setInitialized(true));
    } else {
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (error) router.replace("/");
    if (!loading && !user) {
      router.replace("/");
    }
  }, [initialized, loading, user, router]);

  if (!initialized || loading) {
    return <div>Загрузка...</div>;
  }

  return <>{children}</>;
}
