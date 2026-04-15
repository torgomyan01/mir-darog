import Navbar from "@/components/layout/home/navbar/navbar";
import MainTemplate from "@/components/common/main-template/main-template";
import HomeRedesign from "@/components/layout/home/home-redesign";
import { buildHomeMetadata } from "@/lib/seo";

export const metadata = buildHomeMetadata();

export default function Home() {
  return (
    <MainTemplate>
      <Navbar />
      <HomeRedesign />
    </MainTemplate>
  );
}
