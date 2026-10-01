import CategoryFind from "../Components/CategoryFind";
import ChoosenPosts from "../Components/ChoosenPosts";
import Hero from "../Components/Hero";
import HeroButtons from "../Components/HeroButtons";
import RecentArticles from "../Components/RecentArticles";
import Subscribe from "../Components/Subscribe";
const heroInfo = {
  badge: "مرحباً بك في عدسة",
  head1: "اكتشف ",
  head2: "التصوير الفوتوغرافي",
  span: "فن",
  paragraph: "انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.",
};


export default function Home() {
  return (
    <>
      <Hero heroInfo={heroInfo}>
        <HeroButtons />
      </Hero>

      <ChoosenPosts/>

      <CategoryFind/>

      <RecentArticles/>
      
      <Subscribe/>
    </>
  );
}
