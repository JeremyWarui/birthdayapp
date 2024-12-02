import { useEffect, useRef } from "react";
import party from "party-js";
import { Link } from "react-router-dom";

function ThankYouPage() {
  const thankYouDivRef = useRef(null);

  useEffect(() => {
    // Trigger confetti when the page loads
    if (thankYouDivRef.current) {
      party.confetti(thankYouDivRef.current, {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-300 via-pink-200 to-pink-100 p-8">
      <div ref={thankYouDivRef} className="text-center">
        <h1 className="font-send-flowers font-bold text-4xl sm:text-5xl md:text-7xl text-gray-900">
          {" "}
          Thank You! 👏{" "}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 my-10 mx-4">
          Your message has been successfully received! <br /> Your kind words
          will surely make her smile 😊.
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-12 py-4 rounded-full sm-max:text-sm md:text-xl shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-blue-700"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

export default ThankYouPage;
