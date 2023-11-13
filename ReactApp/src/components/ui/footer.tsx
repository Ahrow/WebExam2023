import { useState } from "react";

export const Footer = () => {
  const [showGif, setShowGif] = useState(false);

  const sendBugReport = () => {
    setShowGif(true);

    setTimeout(() => {
      setShowGif(false);
    }, 10000);
  };

  return (
    <div>
      <div className="bottom-0 h-20 bg-black w-full mt-40 flex justify-between items-center text-white">
        <p className="ml-10">F1Champion LTD</p>
        <button className="mr-10" onClick={sendBugReport}>
          Found a bug? <span className="underline">Click here!</span>
        </button>
        {showGif && (
          <img
            className="mb-96 mr-96"
            src="src/assets/monkey.gif"
            alt="Lawyer GIF"
            height={500}
            width={500}
          />
        )}
      </div>
    </div>
  );
};
