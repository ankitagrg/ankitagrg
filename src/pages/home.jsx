import Name from "../components/Name";
import SocialMedia from "../components/SocialMedia";

const Home = () => {
  return (
    <div id="home" className="flex flex-col mt-12 md:mt-24 max-w-6xl w-11/12 mx-auto">
      <div>
        <Name text="ANKITA" />
      </div>
      <section>
        <p className="font-marcellus text-black text-base md:text-lg tracking-wide leading-relaxed">
          is a driven and creative individual with a passion for technology and innovation.
        </p>
      </section>
      <section className="flex flex-col items-start">
        <SocialMedia />
      </section>
    </div>
  );
};

export default Home;