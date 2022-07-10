import React from "react";
import CloudIcon from "../Common/Icons/CloudIcon";

const BrandInfo = () => {
  return (
    <div className="hidden xl:flex w-1/3 flex-col justify-center items-center">
      <div className="flex flex-row items-center justify-center">
        <h1 className="mb-4 text-white font-bold text-4xl font-sans">Kloud</h1>
        <div className="mb-4">
          <CloudIcon />
        </div>
      </div>
      <p className="text-white">Plateforme de stockage de fichier en ligne</p>
      <button className="ml-4 block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">
        En lire plus
      </button>
    </div>
  );
};

export default BrandInfo;
