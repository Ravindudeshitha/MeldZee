import { Link } from "react-router-dom";

const Projects = () => {
    return (
      <section id="projects" className="h-screen flex items-center justify-center bg-gray-200 py-12">
        <div className="w-full md:w-4/5 lg:w-3/5 text-left space-y-8">
  
          {/* Title */}
          <h2 className="text-4xl sm:text-6xl  font-extrabold mb-6 text-left text-gray-500 mb-12 ">Work & Projects</h2>
          <p className="text-sm sm:text-lg font-light mb-8 text-center">
            Below are some of the projects we've worked on. From downloading software to annotating data, these projects are designed to make your life easier. Explore the tools and feel free to explore more about each one.
          </p>
  
          {/* Projects Flex Layout */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 relative">
  
            {/* Rotated Title for Software Projects */}
            {/* <h3 className="absolute left-[-80px] top-1/2 transform -translate-y-1/2 rotate-270 text-3xl font-bold">
              Software Projects
            </h3> */}
            
            {/* F2F Annotator */}
            <div className="w-full md:w-1/2 lg:w-3/7 border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-center">F2F Annotator</h3>
              <p className="text-sm sm:text-lg font-light mb-4">
                F2F Annotator is a powerful tool designed for image and data annotation. Perfect for data preprocessing, it helps users annotate files quickly and efficiently for machine learning and data analysis tasks.
              </p>
              <div className="text-center">
                {/* Add a button or a link to learn more or download */}
                <Link to={'/f2f-annotator'} className="bg-green-500 text-white px-6 py-2 rounded shadow hover:bg-green-600">
                  Learn More
                </Link>
              </div>
            </div>

            {/* ME Downloader */}
            <div className="w-full md:w-1/2 lg:w-3/7 border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-center">ME Downloader</h3>
              <p className="text-sm sm:text-lg font-light mb-4">
                ME Downloader is an efficient software for downloading media and files from various sources. It is designed to save time and make your downloading experience seamless and quick.
              </p>
              <div className="text-center">
                {/* Add a button or a link to learn more or download */}
                <Link to={'/me-downloader'} className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600">
                  Learn More
                </Link>
              </div>
            </div>
  
            
          </div>
  
          {/* NPM Package Section */}
          <div className="w-full text-center mb-8 relative">
            {/* Rotated Title for NPM Package */}
            {/* <h3 className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 rotate-270 text-3xl font-bold">
              NPM Package
            </h3> */}
  
            <div className="w-full md:w-3/5 lg:w-5/9 border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-center">Elegant Smooth Slider (UI Package)</h3>
              <p className="text-sm sm:text-lg font-light mb-4">
                The Elegant Smooth Slider is a UI package that provides a highly customizable and smooth sliding carousel. Perfect for displaying images, content, or anything that requires smooth transitions and intuitive controls.
              </p>
              <div className="text-center">
                <a
                  href="https://www.npmjs.com/package/elegant-smooth-slider"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 text-white px-6 py-2 rounded shadow hover:bg-yellow-600"
                >
                  Visit NPM Package
                </a>
              </div>
            </div>
          </div>

          
  
        </div>
      </section>
    );
  };
  
  export default Projects;
  