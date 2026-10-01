import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <Link className="flex items-center gap-3 mb-6 group" to="">
                <span className="w-11 h-11 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 text-white font-bold text-xl">
                  ع
                </span>
                <span className="text-xl font-bold text-white">عدسة</span>
              </Link>
              <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                المدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>
              <div className="flex gap-2">
                <Link
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="twitter"
                  to=""
                >
                  <i className="fa-brands fa-square-x-twitter"></i>
                </Link>
                <Link
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="github"
                  to=""
                >
                  <i className="fa-brands fa-github"></i>
                </Link>
                <Link
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="linkedin"
                  to=""
                >
                  <i className="fa-brands fa-square-linkedin"></i>
                </Link>
                <Link
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="youtube"
                  to=""
                >
                  <i className="fa-brands fa-youtube"></i>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                استكشف
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    to="/"
                    data-discover="true"
                  >
                    <i className="fa-solid fa-angle-left opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>{" "}
                    المدونة
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    to="/"
                    data-discover="true"
                  >
                    <i className="fa-solid fa-angle-left opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>{" "}
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    to="/"
                    data-discover="true"
                  >
                    <i className="fa-solid fa-angle-left opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>{" "}
                    الرئيسية
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                التصنيفات
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    to="/"
                    data-discover="true"
                  >
                    <i className="fa-solid fa-angle-left opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>{" "}
                    إضاءة
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    to="/"
                    data-discover="true"
                  >
                    <i className="fa-solid fa-angle-left opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>{" "}
                    بورتريه
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    to="/"
                    data-discover="true"
                  >
                    <i className="fa-solid fa-angle-left opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>{" "}
                    مناظر طبيعية
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    to="/"
                    data-discover="true"
                  >
                    <i className="fa-solid fa-angle-left opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>{" "}
                    تقنيات
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                ابقى على اطلاع
              </h3>
              <p className="text-sm text-neutral-500 mb-4">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </p>
              <form className="space-y-3">
                <div className="relative">
                  <input
                    placeholder="أدخل بريدك الإلكتروني"
                    className="w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600"
                    type="email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-sm cursor-pointer font-semibold text-white duration-300 transition-all inline-flex items-center justify-center px-8 py-4 rounded-full bg-linear-to-br from-orange-500 to-orange-600 hover:-translate-y-1"
                >
                  اشترك
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="relative border-t border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-neutral-600">
                © 2026 عدسة. صنع بكل{" "}
                <i className="fa-solid fa-heart text-orange-500"></i> جميع
                الحقوق محفوظة.
              </p>
              <div className="flex gap-6">
                <Link
                  className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
                  to="/privacy"
                  data-discover="true"
                >
                  سياسة الخصوصية
                </Link>
                <Link
                  className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
                  to="/terms"
                  data-discover="true"
                >
                  شروط الخدمة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
