import Layout from "@/components/Layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "@/config";
import ProjectItem from "@/components/projects/project-item";
function projects({ project }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center p-6 mb-10">
        <Head>
          <title>Cr28self 포트폴리오</title>
          <meta name="description" content="포트폴리오" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">
          총 프로젝트 수 :
          <span className="pl-4 text-blue-500">{project.results.length}</span>
        </h1>
        <div className="grid w-full grid-cols-1 gap-8 py-8 m-6 md:grid-cols-2">
          {project.results.map((item) => (
            <ProjectItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

//처음 빌드타임때 호출됨 ( 빌드할때 데이터 가져옴 ) - 미리 렌더링
//그다음 프론트엔드 영역 실행

export async function getStaticProps() {
  //await fetch

  //서버 영역

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
    }),
  };
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const project = await res.json();

  return {
    props: { project }, // will be passed to the page component as props
  };
}

export default projects;
