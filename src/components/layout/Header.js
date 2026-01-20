import React from "react";
import ProfileImage from "../../assets/Matheus.png";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto shadow-md rounded-b-lg">
        <div className="py-6 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h1 className="text-3xl font-bold mb-3">Matheus Ferreira</h1>
              <h2 className="text-xl text-text-secondary">
                Senior iOS Developer, tech entusiast and undergraduate degree in
                Analysis and Development of Systems.{" "}
              </h2>
              <p className="text-sm mt-2">Recife, Pernambuco, Brazil</p>
              <div className="mt-2 space-x-2">
                <a
                  href="mailto:mathferreiranasc12@gmail.com"
                  className="text-primary hover:underline"
                >
                  Email |
                </a>
                <a
                  href="https://linkedin.com/in/matheuszx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  LinkedIn |
                </a>
                <a
                  href="https://github.com/MatheusFerreiraZx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub |
                </a>
                <a
                  href="https://medium.com/@mathferreiranasc12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Medium
                </a>
              </div>
            </div>
            <img
              src={ProfileImage}
              alt="Matheus"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
