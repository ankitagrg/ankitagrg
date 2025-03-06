import PageTitle from "../components/PageTitle";
import Skills from "./skills";

const AboutMe = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center">
      <PageTitle title="ABOUT ME" />
      <main className="max-w-6xl min-h-80 flex flex-col justify-center px-4 md:px-0">
        <section className="mt-8 rounded-md p-4 shadow-inner transition-all duration-500 hover:scale-105">
          <h2 className="text-center text-2xl font-semibold text-gray-900">
          Step into my creative space!
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            I'm currently pursuing my Software Engineering degree at Gandaki College of Engineering and Science, affiliated with Pokhara University.
          </p>
          <p className="mt-4 text-lg text-gray-700">
          I am committed to building intelligent and innovative solutions that enhance digital experiences and drive technological evolution.
          </p>
        </section>
        <Skills />
      </main>
    </div>
  );
};

export default AboutMe;
