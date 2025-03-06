import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "../src/pages/home";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/portfolio";


const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <NavBar />
      <Home />
      <div className="px-4">
        <AboutMe/>
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
};

export default App;
