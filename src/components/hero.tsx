"use client";

import React, { useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Hero = () => {
  const [showArticle, setShowArticle] = useState(false);

  const handleGenerateClick = () => {
    setShowArticle(true);
  };
  return (
    <section>
      <div className="h-[40rem] bg-neutral-900 flex flex-col items-center justify-center relative w-full flex flex-col items-center">
        <TextGenerateEffect
          words={"Create the Cover Letter for your job application in seconds."}
          className="text-4xl font-bold text-center text-white"
        />
        <div className="flex justify-center items-left grid grid-cols-4 grid-rows-2 gap-4 w-full px-4 mt-8">
        <div
          className="col-span-2 row-span-2 border-2 border-gray-300 rounded-lg p-4 max-w-lg bg-white text-gray-700 cursor-text min-h-[100px] flex items-center justify-center"
          style={{ display: showArticle ? "none" : "flex" }}
        >
          <p>Click "Generate" to display the article here.</p>
        </div>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
          onClick={handleGenerateClick}
        >
          Generate
        </button>
        {showArticle && (
          <div className="border-2 border-gray-300 rounded-lg p-4 w-3/4 max-w-lg bg-white text-gray-700 mt-4">
            <h2 className="text-xl font-bold mb-2">Generated Article</h2>
            <p>
              This is the content of the generated article. It will replace the
              placeholder text when the "Generate" button is clicked.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada.
            </p>
          </div>
        )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
