import AboutOurAuthors from "../Components/About/AboutOurAuthors";
import AboutValues from "../Components/About/AboutValues";
import LetsTalk from "../Components/About/LetsTalk";
import Hero from "../Components/Hero";
import HeroAboutCards from "../Components/HeroAboutCards";
const heroInfo = {
  badge: "من نحن",
  head1: "مهمتنا هي ",
  head2: "",
  span: "الإعلام والإلهام",
  paragraph:
    "مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.",
};

export default function About() {
  return (
    <>
      <Hero heroInfo={heroInfo}>
        <HeroAboutCards />
      </Hero>
      <AboutValues/>
      <AboutOurAuthors/>
      <LetsTalk/>
    </>
  );
}
