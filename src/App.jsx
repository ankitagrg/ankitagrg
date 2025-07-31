import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import AboutMe from "./pages/aboutme";
import Portfolio from "./pages/portfolio";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9fafb] text-black font-sans">
      {/* Navbar - usually fixed height, responsive inside */}
      <NavBar />

      {/* Main content area grows to fill available space */}
      <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Home Section */}
        <Home />

        {/* About Me and Portfolio sections */}
        <section className="mt-12 space-y-16 sm:space-y-24">
          <AboutMe />
          <Portfolio />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
