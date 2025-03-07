import image1 from './assets/home.jpg'

const Home = () => {
    return (
      <section id="home" className="h-[80vh] relative">
        {/* Background Image */}
        <img 
          src={image1} 
          alt="Home Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
  
        {/* Buttons (Positioned at Bottom Right) */}
        <div className="absolute bottom-6 right-6 flex space-x-4">
          <a href="#projects" className="border-2 w-28 border-gray-700 text-center text-gray-700 font-bold px-4 py-2 rounded shadow hover:bg-gray-200">
            Projects
          </a>
          <a href="#blog" className="border-2 w-28 border-gray-500 text-center text-gray-500 font-bold px-4 py-2 rounded shadow hover:bg-gray-200">
            Blog
          </a>
        </div>
      </section>
    );
  };
  
  export default Home;
  