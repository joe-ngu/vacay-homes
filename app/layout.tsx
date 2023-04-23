import { Nunito } from "next/font/google";

import "./globals.css";
// import ClientOnly from "./components/ClientOnly";
import Navbar from "@/app/components/navbar";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ToasterProvider from "@/app/providers/ToasterProviders";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

const font = Nunito({
  subsets: ["latin"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <ClientOnly> */}
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {/* </ClientOnly> */}
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
