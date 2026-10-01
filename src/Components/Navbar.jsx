import logo from "../assets/adasa.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <Link className="flex items-center gap-3 cursor-pointer group">
              <div className="w-12 h-12 relative rounded-xl overflow-hidden group-hover:scale-105 duration-300 transition-all ">
                <img
                  className="object-cover w-full h-full"
                  src={logo}
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-neutral-300 ">
                  عدسة
                </span>
                <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                  عالم التصوير الفوتوغرافي
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center">
              <div className="flex items-center p-1.5 bg-[#161616] border border-[#262626] rounded-full">
                <NavLink
                  className={(x) =>
                    x.isActive
                      ? "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white"
                      : "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"
                  }
                  to="/"
                >
                  الرئيسية
                </NavLink>
                <NavLink
                  className={(x) =>
                    x.isActive
                      ? "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white"
                      : "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"
                  }
                  to="/blog"
                >
                  المدونة
                </NavLink>
                <NavLink
                  className={(x) =>
                    x.isActive
                      ? "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white"
                      : "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"
                  }
                  to="/about"
                >
                  من نحن
                </NavLink>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
                <i className="fa-solid fa-magnifying-glass w-5 h-5"></i>
              </button>
              <Link className="btn-primary hover:-translate-y-1" to="">
                ابدأ القراءة
              </Link>
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
            >
              <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
            </button>
          </div>
          {/* Hidden Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-80 pb-6" : "max-h-0"}`}
          >
            <div className="bg-[#161616] backdrop-blur-xl rounded-2xl p-4 border border-[#262626]">
              <div className="flex flex-col space-y-1">
                <NavLink
                  aria-current="page"
                  className={(x) =>
                    x.isActive
                      ? "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 bg-orange-500/10 text-orange-500 border border-orange-500/30"
                      : "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                  }
                  to="/"
                  data-discover="true"
                >
                  الرئيسية
                </NavLink>
                <NavLink
                  className={(x) =>
                    x.isActive
                      ? "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 bg-orange-500/10 text-orange-500 border border-orange-500/30"
                      : "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                  }
                  to="/blog"
                  data-discover="true"
                >
                  المدونة
                </NavLink>
                <NavLink
                  className={(x) =>
                    x.isActive
                      ? "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 bg-orange-500/10 text-orange-500 border border-orange-500/30"
                      : "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                  }
                  to="/about"
                  data-discover="true"
                >
                  من نحن
                </NavLink>
                <Link
                  className="text-sm cursor-pointer font-semibold text-white duration-300 transition-all inline-flex items-center justify-center px-8 py-4 rounded-full bg-linear-to-br from-orange-500 to-orange-600 hover:-translate-y-1 text-center mt-2"
                  to=""
                  data-discover="true"
                >
                  ابدأ القراءة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
