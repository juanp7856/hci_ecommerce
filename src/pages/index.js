import Image from "next/image";
import MainLayout from "../components/main_layout"
import { Inter } from "next/font/google";
import BreadCrumb from "@/components/breadcrumb";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout title='HCI' content='Main'>
      <BreadCrumb categorias={[]} />
      <p>primer</p>
      <p>asdasadsadsadsad</p>
      <p>asdasadsadsadsad</p>
      <p>asdasadsadsadsad</p>
      <p>asdasadsadsadsad</p>
      <p>asdasadsadsadsad</p>
      <p>asdasadsadsadsad</p>
      <p>asdasadsadsadsad</p>
      <p>asdasadsadsadsad</p>
      <p>asdasadsadsadsad</p>
      <p>asdasadsadsadsad</p>
      <p>asdasadsadsadsad</p>
      <p>asdasadsadsadsad</p>
    </MainLayout>
  );
}
