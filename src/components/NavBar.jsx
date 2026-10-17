import { Link } from "react-scroll";

const navigation = [
  { id: 1, title: "Home" },
  { id: 2, title: "About" },
  { id: 3, title: "Projects" },
  { id: 4, title: "Leadership" },
];

const NavBar = () => {
  return (
    <div className="fixed top-0 w-full shadow-md bg-white z-10 py-2 flex items-center justify-center">
      <nav className="flex justify-between items-center w-full max-w-6xl px-3 sm:px-4">
        <div className="flex items-center space-x-1 sm:space-x-4">
          {navigation.map((item) => (
            <Link
              key={`link_${item.id}`}
              activeClass="active"
              to={item.title.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-xs sm:text-sm md:text-xl font-marcellus text-black hover:bg-slate-100 rounded-lg px-1.5 py-2 sm:p-2 whitespace-nowrap"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <a
          href="/ANKITA_GURUNG_CV.pdf"
          download="ANKITA_GURUNG_CV.pdf"
          className="inline-flex items-center gap-1 bg-blue-900 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium px-2 py-1.5 sm:px-4 sm:py-2 rounded-md shadow-sm shrink-0"
        >
          <span>📥</span>
          <span className="hidden sm:inline">CV</span>
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
