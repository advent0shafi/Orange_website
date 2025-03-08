import ProjectDetail from "./sections/sectionPI1"
import ProjectDetails from "./sections/sectionPI2"
import ProjectOverview from "./sections/sectionPI3"
import ProjectGallery from "./sections/sectionPI4"
import RelatedProjects from "./sections/sectionPI5"



export default async function Page({ params }: { params:  Promise<{ projectSlug: string }> }) {
    const { projectSlug } = await params;


  return (
    <div>
      <ProjectDetail projectSlug={projectSlug} />
      <ProjectDetails />
      <ProjectOverview />
      <ProjectGallery />
      <RelatedProjects />
    </div>
  )
}


