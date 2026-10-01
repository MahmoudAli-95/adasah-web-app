import { Link } from "react-router-dom";
import PostsData from "../../../posts.json";

export default function BlogAllPosts({ selectedCategory, search }) {
  const { posts } = PostsData;
  const categoryFiltered =
    selectedCategory === "جميع المقالات"
      ? posts
      : posts.filter((post) => {
          return post.category === selectedCategory;
        });

  const filteredposts = categoryFiltered.filter((post) => {
    return post.excerpt.trim().includes(search);
  });

  return (
    <>
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-linear-to-r from-orange-500/5 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-neutral-400">
              عرض{" "}
              <span className="font-bold text-white">{filteredposts.length}</span>{" "}
              مقالات
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredposts.map((post) => (
              <article
                key={post.id}
                className="group card overflow-hidden bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 p-0"
              >
                <Link className="block" to={`/blog/${post.slug}`}>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      src={post.image}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        {post.readTime}
                      </span>
                      <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                      <div className="flex items-center gap-3">
                        <img
                          alt={post.author.name}
                          className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                          src={post.author.avatar}
                        />
                        <div>
                          <p className="text-sm font-medium text-white">
                            {post.author.name}
                          </p>
                          <p className="text-xs text-neutral-500">
                            {post.author.role}
                          </p>
                        </div>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                        <svg
                          className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
