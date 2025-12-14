import { Link } from "react-scroll";

const navigation = [
  { id: 1, title: "Home" },
  { id: 2, title: "About" },
  { id: 3, title: "Projects" },
];

const NavBar = () => {
  return (
    <div className="fixed top-0 w-full shadow-md bg-white z-10 py-2 flex items-center justify-center">
      <nav className="flex justify-between items-center w-full max-w-6xl px-4">
        <div className="flex items-center space-x-4">
          {navigation.map((item) => (
            <Link
              key={`link_${item.id}`}
              activeClass="active"
              to={item.title.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-sm md:text-xl font-marcellus text-black hover:bg-slate-100 rounded-lg p-2"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <a
          href="/ANKITAGURUNG_CV"
          download="ANKITAGURUNG_CV"
          className="inline-flex items-center bg-blue-900 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm"
        >
          📥 CV
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
