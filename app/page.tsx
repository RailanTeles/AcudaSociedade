"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "./Context/AuthContext";
import { useEffect } from "react";
import Loading from "./Components/Loading";

export default function Home() {
  const { isLogged } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLogged === false) {
      router.push("/Login");
    }
  }, [isLogged, router]);

  if (isLogged == null) {
    return <Loading/>;
  }

  if (isLogged === false) {
    return null;
  }

  return (
    <div>
      Essa é a home!
    </div>
  );
}
