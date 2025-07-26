import PageTitle from "../components/PageTitle";
import Skills from "./skills";

const AboutMe = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center py-14">
      <PageTitle title="ABOUT ME" />
      <main className="max-w-6xl min-h-80 flex flex-col justify-center px-4 space-y-6">
        <section className="bg-white shadow-md rounded-lg p-6 transition-transform duration-500 hover:scale-105">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-900">
            Step into my creative space!
          </h2>
          <div className="mt-4 space-y-4 text-base md:text-lg text-gray-700">
            <p>
              I'm currently pursuing my Software Engineering degree at Gandaki College of Engineering and Science, affiliated with Pokhara University.
            </p>
            <p>
              I am committed to building intelligent and innovative solutions that enhance digital experiences and drive technological evolution.
            </p>
          </div>
        </section>
        <Skills />
      </main>
    </div>
  );
};

export default AboutMe;