import { Inter } from "next/font/google";
import "./globals.css";
import { UiProvider } from "./components/UiProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
 

  return (
    <html lang="en" >
      <body className={inter.className}>
        <UiProvider>{children}</UiProvider>
      </body>
    </html>
  );
}
