
import "./globals.css";
import { Roboto } from "next/font/google";
import { Poppins } from "next/font/google";
import { Providers } from "./provider";
import NavBar from "@/components/Navbar";
const roboto = Roboto({
  weight: ["100","400", "500", "700"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Summarizer Ai",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
