"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "./Context/AuthContext";

export default function Home() {
  const { isLogged } = useAuth();
  const router = useRouter();

  if(isLogged == null){
    return (
      <div>Carregando</div>
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
