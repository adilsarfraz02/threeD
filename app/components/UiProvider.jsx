"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export function UiProvider({ children }) {
  const router = useRouter();
   const onBlur = () => {
     document.title = "Come Back! Next.js";
   };
   const onFocus = () => {
     document.title = "Next.js - Three Js";
   };

   useEffect(() => {
     window.addEventListener("blur", onBlur);
     window.addEventListener("focus", onFocus);

     return () => {
       window.removeEventListener("blur", onBlur);
       window.removeEventListener("focus", onFocus);
     };
   }, []);
  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
