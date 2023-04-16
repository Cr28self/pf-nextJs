import Image from "next/legacy/image";

function ProjectItem({ data }) {
  const projectTitle = data.properties.name.title[0].plain_text;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imageSrc = data.cover.external.url;
  const tags = data.properties.tags.multi_select;

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imageSrc}
        alt="cover image"
        width="50%"
        height="50%s"
        layout="responsive"
        objectFit="none"
        quality={100}
      />

      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold">{projectTitle}</h1>
        <h1>{description}</h1>
        <div className="flex items-start mr-2">
          {tags.map((aTag) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700"
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
