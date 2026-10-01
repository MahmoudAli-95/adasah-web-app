import { useState } from "react";
import BlogStikyNav from "../Components/Blog/BlogStikyNav";
import BlogAllPosts from "../Components/Blog/BlogAllPosts";
import Hero from "../Components/Hero";

const heroInfo = {
  badge: "مدونتنا",
  head1: "استكشف ",
  head2: "",
  span: "مقالاتنا",
  paragraph: "اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث",
};

export default function Blog() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("جميع المقالات");

  return (
    <>
      <Hero heroInfo={heroInfo} />

      <BlogStikyNav
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        search={search}
        setSearch={setSearch}
      />

      <BlogAllPosts 
      selectedCategory={selectedCategory}
      search={search} />
    </>
  );
}
