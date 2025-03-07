import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Navigation from "./Navigation";
import Footer from "./Footer"; // Import Footer
import MeDownloader from "./MeDownloader";
import F2DAnnotator from "./F2DAnnotator";

function App() {
  return (
    <Router>
      <div className="bg-gray-200">
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/me-downloader" element={<MeDownloader />} />
          <Route path="/f2f-annotator" element={<F2DAnnotator />} />
        </Routes>
        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
}

export default App;
