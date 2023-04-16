import Image from "next/image";
import Layout from "@/components/Layout";
import Hero from "@/components/home/hero";
import Head from "next/head";

//nextjs에서 제공하는 이미지 태그 존재( 이미지 태그 대신 이걸로 사용해야.. )

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Cr28self 포트폴리오</title>
        <meta name="description" content="포트폴리오" />
      </Head>
      <section className="flex flex-col items-center justify-center min-h-screen text-gray-600 body-font">
        <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
