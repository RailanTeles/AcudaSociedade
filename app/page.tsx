"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "./Context/AuthContext";
import Loading from "./Components/Loading";

export default function Home() {
  const { isLogged } = useAuth();
  const router = useRouter();

  if(isLogged == null){
    return (
      <Loading></Loading>
    )
  }

  if(isLogged == false){
    router.push("/Login");
  }

  if(isLogged == true){
    return (
      <div>
        Essa é a home!
      </div>
    );
  }
  
}
