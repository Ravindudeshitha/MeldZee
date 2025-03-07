import { useEffect } from "react";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";

const MainPage = () => {
//   useEffect(() => {
//     // Select all sections
//     const sections = document.querySelectorAll("section");

//     // To track if the scroll is in progress (debouncing scroll)
//     let isScrolling = false;

//     const handleWheel = (e) => {
//       if (isScrolling) return; // Prevent multiple scroll triggers

//       // Set isScrolling to true
//       isScrolling = true;

//       // Determine the scroll direction (deltaY)
//       const delta = e.deltaY;
      
//       // Get the current section in view
//       let currentIndex = Array.from(sections).findIndex(
//         (section) => section.getBoundingClientRect().top >= 0
//       );

//       if (delta > 0) {
//         // Scrolling down: Move to next section
//         if (currentIndex < sections.length - 1) {
//           sections[currentIndex + 1].scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//         }
//       } else if (delta < 0) {
//         // Scrolling up: Move to previous section
//         if (currentIndex > 0) {
//           sections[currentIndex - 1].scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//         }
//       }

//       // Debounce: reset isScrolling after a small delay (e.g., 500ms)
//       setTimeout(() => {
//         isScrolling = false;
//       }, 500);
//     };

//     // Attach the wheel event listener
//     window.addEventListener("wheel", handleWheel, { passive: false });

//     // Cleanup the event listener when the component unmounts
//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//     };
//   }, []);

  return (
    <div>
        
      
      <section id="home" className="">
        <Home />
      </section>
      <section id="about" className="h-screen flex items-center justify-center">
        <About />
      </section>

      <section id="projects" className="h-screen flex items-center justify-center">
        <Projects />
      </section>

      {/* <section id="contact" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl">Contact Section</h1>
      </section>

      <section id="blog" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl">Blog Section</h1>
      </section> */}
    </div>
  );
};

export default MainPage;
