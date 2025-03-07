import React, { useEffect } from "react";
import image2 from './assets/as1.png';

const MeDownloader = () => {

    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
      }, []);


  return (
    <div className="bg-gray-100">

        <section className="bg-indigo-950 text-white py-50">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold mb-6">Download ME Downloader</h1>
                <p className="text-lg mb-8">Fast and simple tool to download files and YouTube videos with ease!</p>
                <a href="/MEDownloader_WINDOWS_1.1_setup.exe" >
                    <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-xl hover:bg-blue-600 transition duration-300">
                        Download Now
                    </button>
                </a>
            </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-gray-200 text-gray-800">
            <div className="container mx-auto flex items-center justify-between px-4">
                <div className="w-full md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">What is ME Downloader?</h1>
                    <p className="text-lg mb-6">
                    ME Downloader is a powerful tool for downloading files and YouTube videos
                    effortlessly. It allows you to save your favorite content directly to your device
                    with ease. Whether it's videos, music, or documents, ME Downloader makes it fast and
                    simple.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                    src={image2} // Placeholder for left image
                    alt="Intro"
                    className="w-full h-auto rounded-md"
                    />
                </div>
            </div>
        </section>

        {/* File Download Section */}
        <section className="py-20 bg-white">
            <div className="container mx-auto flex items-center justify-between px-4">
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">File Download</h2>
                    <p className="text-lg mb-6">
                    Download files of all types with ME Downloader. Save your files securely and
                    quickly with one click.
                    </p>
                    {/* <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
                    Download Now
                    </button> */}
                </div>
                {/* <div className="w-full md:w-1/2">
                    <img
                    src="/images/file-download.png" // Placeholder for file download image
                    alt="File Download"
                    className="w-full h-auto rounded-md shadow-lg"
                    />
                </div> */}
            </div>
        </section>

        {/* YouTube Video Download Section */}
        <section className="py-20 bg-gray-200">
            <div className="container mx-auto flex items-center justify-between px-4">
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">YouTube Video Download</h2>
                    <p className="text-lg mb-6">
                    Download YouTube videos directly with ME Downloader. Enjoy high-quality videos and
                    music offline anytime.
                    </p>
                    {/* <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
                    Download Now
                    </button> */}
                </div>
                {/* <div className="w-full md:w-1/2">
                    <img
                    src="/images/youtube-download.png" // Placeholder for YouTube download image
                    alt="YouTube Download"
                    className="w-full h-auto rounded-md shadow-lg"
                    />
                </div> */}
            </div>
        </section>
    </div>
  );
};

export default MeDownloader;
