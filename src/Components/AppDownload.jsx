import React from "react";
import posterImg from "../assets/react.svg";

const AppDownload = () => {
  // Placeholder download links
  const customerAppUrl = "/my-app.apk";
  const driverAppUrl = "/my-app-driver.apk";

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="rounded-xl shadow-lg p-10 max-w-md w-full text-center bg-gray-900 border border-gray-800">
        <img
          src="https://iu-frontend-hazel.vercel.app/images/IUAPPDOWNLODE.png"
          alt="IU App Poster"
          className="mx-auto mb-6 w-32 h-32 object-contain rounded-2xl shadow-lg border-4 border-orange-600 bg-white"
        />
        <h1 className="text-3xl font-bold text-white mb-4">IU App Download</h1>
        <p className="text-white mb-8 text-lg">
          Download the IU App for your role. Choose the correct version below:
        </p>
        <div className="flex flex-col gap-4">
          <a
            href={customerAppUrl}
            download
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 shadow-md text-lg"
          >
            Download for Customer
          </a>
          <a
            href={driverAppUrl}
            download
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 shadow-md text-lg"
          >
            Download for Driver
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
