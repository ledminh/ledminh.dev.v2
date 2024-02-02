import AboutBlock from "@/ui/landing_page/AboutBlock";
import Menu from "@/ui/landing_page/Menu";
import getAboutData from "@/core/server/about/getAboutData";

export default async function AboutPage() {
  const about = await getAboutData();
  return (
    <section>
      <Menu currentPage="ABOUT" />
      <AboutBlock about={about} />
    </section>
  );
}
