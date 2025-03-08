import image1 from './assets/home.jpg';

const Home = () => {
  return (
    <section id="home" className="relative w-full">
      {/* Background Image */}
      <img
        src={image1}
        alt="Home Background"
        className="w-full h-auto sm:h-[40vh] md:h-[50vh] lg:h-[70vh] object-cover pt-16 sm:pt-0"
      />

      {/* Buttons (Positioned at Bottom Right) */}
      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href="#projects"
          className="border-2 w-24 sm:w-28 border-gray-700 text-center text-gray-700 font-bold px-4 py-2 rounded shadow hover:bg-gray-200"
        >
          Projects
        </a>
        <a
          href="https://blog.meldzee.com/"
          target="_blank"
          className="border-2 w-24 sm:w-28 border-gray-500 text-center text-gray-500 font-bold px-4 py-2 rounded shadow hover:bg-gray-200"
        >
          Blog
        </a>
      </div>
    </section>
  );
};

export default Home;
