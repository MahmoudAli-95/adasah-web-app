import { Link } from "react-router-dom";

export default function HeroButtons() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
        <Link
          className="btn-primary inline-flex items-center justify-center gap-2 group"
          to="/blog"
          data-discover="true"
        >
          <span>استكشف المقالات</span>
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </Link>
        <Link
          className="btn-secondary inline-flex items-center justify-center gap-2"
          to="/about"
          data-discover="true"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>اعرف المزيد</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        <div
          className="glass-card p-4 hover:scale-105 transition-transform duration-300"
          style={{ animationDelay: "0ms" }}
        >
          <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1"></i>
          <p className="text-2xl md:text-3xl font-bold gradient-text">+50</p>
          <p className="text-neutral-500 text-sm">مقالة</p>
        </div>

        <div
          className="glass-card p-4 hover:scale-105 transition-transform duration-300"
          style={{ animationDelay: "100ms" }}
        >
          <i className="fa-solid fa-users text-2xl text-orange-500 mb-1"></i>
          <p className="text-2xl md:text-3xl font-bold gradient-text">+10ألف</p>
          <p className="text-neutral-500 text-sm">قارئ</p>
        </div>

        <div
          className="glass-card p-4 hover:scale-105 transition-transform duration-300"
          style={{ animationDelay: "200ms" }}
        >
          <i className="fa-solid fa-folder-open text-2xl text-orange-500 mb-1"></i>
          <p className="text-2xl md:text-3xl font-bold gradient-text">4</p>
          <p className="text-neutral-500 text-sm">تصنيفات</p>
        </div>

        <div
          className="glass-card p-4 hover:scale-105 transition-transform duration-300"
          style={{ animationDelay: "300ms" }}
        >
          <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1"></i>
          <p className="text-2xl md:text-3xl font-bold gradient-text">6</p>
          <p className="text-neutral-500 text-sm">كاتب</p>
        </div>
      </div>
    </>
  );
}