import type { Metadata } from "next";
// Fonts
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
// Styles
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Flex, Theme } from "@radix-ui/themes";
// Components
import Footer from "./components/Footer";
import { FrameIcon } from "@radix-ui/react-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tikki Takka",
  description: "The classic game of Tic Tac Toe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${GeistSans.className}`}>
        <Theme
          appearance="dark"
          accentColor="blue"
          panelBackground="solid"
          radius="full"
          scaling="90%"
          className="flex flex-col justify-between"
        >
          <header className="w-full p-4 font-bold">
            <Flex align={"center"} gap={"2"} justify={"center"}>
              <FrameIcon /> Tikki Takka
            </Flex>
          </header>
          <main className="p-6">{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
