import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import party from "party-js";

function LandingPage() {
  const birthdayDivRef = useRef(null);

  useEffect(() => {
    if (birthdayDivRef.current) {
      party.confetti(birthdayDivRef.current, {
        count: party.variation.range(50, 250), // Number of confetti particles
        size: party.variation.range(0.6, 1.1), // Size of the confetti pieces
        spread: party.variation.range(10, 30),
        // spread: 0, // Set spread to 0 to make it fall directly down
        speed: party.variation.range(5, 800), // Speed of the confetti
        angle: 90, // 90 degrees means the confetti falls straight down
        y: 0, // Start from the top of the screen
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-8 bg-gradient-to-b from-pink-300 via-pink-200 to-pink-100">
      {" "}
      <div ref={birthdayDivRef} className="text-center max-w-5xl mx-auto">
        {" "}
        <h1 className="font-send-flowers sm-max:text-3xl sm:text-5xl md:text-8xl font-extrabold text-gray-900 leading-tight mb-5">
          {" "}
          🎉 Happy Birthday 🎉{" "}
          <span className="block text-4xl md:text-7xl sm:mt-2 mb-9 mt-2">
            Grace! 🌺
          </span>{" "}
        </h1>{" "}
        <p className="text-lg sm-max:text-sm md:text-2xl text-gray-700 mb-11 md:my-22 px-4 sm:px-6">
          {" "}
          Tomorrow is Grace&apos;s birthday! <br /> Together lets celebrate this
          special day with Grace by leaving her a heartfelt message! <br />
          Let her know how much she means to you, share your favorite memory
          together, or simply wish her the happiest of birthdays. <br />
          Your message will make her day even more special!{" "}
        </p>
        <Link to="/message">
          {" "}
          <button className="bg-blue-600 text-white px-7 py-3 rounded-full sm-max:text-sm md:text-xl shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-blue-700">
            {" "}
            Write a Message{" "}
          </button>{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
}

export default LandingPage;
