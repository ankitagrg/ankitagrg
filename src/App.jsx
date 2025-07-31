import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import AboutMe from "./pages/aboutme";
import Portfolio from "./pages/portfolio";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9fafb] text-black">
      <NavBar />
      <Home />
      <div className="px-4 max-w-6xl mx-auto w-full">
        <AboutMe />
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
};

export default App;
