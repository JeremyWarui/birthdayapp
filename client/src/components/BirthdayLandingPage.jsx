import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import party from "party-js";

function BirthdayLandingPage() {
  const birthdayDivRef = useRef(null);

  useEffect(() => {
    // Trigger confetti when the page loads
    if (birthdayDivRef.current) {
      party.confetti(birthdayDivRef.current, {
        count: party.variation.range(50, 250), // Number of confetti particles
        size: party.variation.range(0.6, 1.1), // Size of the confetti pieces
        spread: party.variation.range(10, 100),
        speed: party.variation.range(5, 800), // Speed of the confetti
        angle: 90, // 90 degrees means the confetti falls straight down
        y: 0, // Start from the top of the screen
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-300 via-pink-200 to-pink-100 p-8">
      {" "}
      <div ref={birthdayDivRef} className="text-center">
        {" "}
        <h1 className="font-send-flowers sm-max:text-3xl sm:text-5xl md:text-8xl font-bold text-gray-900 leading-tight mb-5">
          {" "}
          🎉 Happy Birthday 🎉{" "}
          <span className="block text-4xl md:text-7xl sm:mt-2 mb-9 mt-2">
            Grace! 🌺
          </span>{" "}
        </h1>{" "}
        <p className=" text-lg sm:text-lg md:text-2xl text-gray-700 mb-11 md:my-20">
          {" "}
          All your amazing friends wish to let you know of what they wish you
          for your birthday! <br /> <br /> Click the button below to read them.{" "}
        </p>{" "}
        <Link to="/view-messages">
          {" "}
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-xl shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-blue-700">
            {" "}
            View Your Messages{" "}
          </button>{" "}
        </Link>{" "}
      </div>{" "}
    </div>

    // <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-500 via-pink-400 to-pink-200">
    //   <div
    //     ref={birthdayDivRef}
    //     className="text-center bg-slate-200 bg-opacity-80 rounded-xl shadow-2xl p-8 w-full sm:w-11/12 md:max-w-lg sm:max-w-sm mx-4 sm:mx-0"
    //   >
    //     <h1 className="text-4xl sm:text-3xl font-extrabold text-gray-800 leading-tight mb-6">
    //       <span className="block sm:inline sm:mr-2">🎉</span>
    //       <span className="block sm:inline sm:mr-2">Happy</span>
    //       <span className="block sm:inline sm:mr-2">Birthday</span>
    //       <span className="block sm:inline sm:mr-2">Grace!</span>
    //       <span className="block sm:inline">🎉</span>
    //     </h1>

    //     {/* <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-6">
    //       🎉 Happy Birthday, Grace! 🎉
    //     </h1> */}
    //     <p className="text-lg sm:text-base text-gray-700 mb-6">
    //       All your friends have left you amazing messages! Click the button
    //       below to read them.
    //     </p>

    //     <Link to="/view-messages">
    //       <button className="bg-green-600 text-white px-6 py-3 rounded-full text-xl sm:text-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-green-700">
    //         View Your Messages
    //       </button>
    //     </Link>
    //   </div>
    // </div>
  );
}

export default BirthdayLandingPage;
