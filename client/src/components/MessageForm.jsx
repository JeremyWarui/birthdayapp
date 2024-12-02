import { useState } from "react";
import { useNavigate } from "react-router-dom";
import messageService from "../services/messageService";

function MessageForm() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  // const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save the message (you can save it to a backend or localStorage)
      // Create a message object
      const newMessage = { name, message };
      const savedMessage = await messageService.postMessage(newMessage);
      console.log("Message posted: ", savedMessage);

      setName("");
      setMessage("");

      navigate("/thank-you");

      // setTimeout(() => navigate("/thank-you"), 1000);
    } catch (error) {
      console.error("Error posting the message", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-300 via-pink-200 to-pink-100 p-8">
      {" "}
      <div className="w-full sm:w-11/12 md:max-w-md mx-4">
        {" "}
        <h1 className="font-send-flowers font-bold text-4xl text-center mb-14 text-gray-900">
          {" "}
          Write a Message for Grace! 🌺{" "}
        </h1>{" "}
        <form onSubmit={handleSubmit} className="space-y-6">
          {" "}
          <div>
            {" "}
            <label htmlFor="name" className="block text-lg text-gray-700">
              {" "}
              Your Name{" "}
            </label>{" "}
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter your name"
              required
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label htmlFor="message" className="block text-lg text-gray-700">
              {" "}
              Your Message{" "}
            </label>{" "}
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Write your heartfelt message here"
              required
            />{" "}
          </div>{" "}
          <div className="text-center">
            {" "}
            <button
              type="submit"
              className=" bg-blue-600 text-white px-7 py-3 mt-8 rounded-full sm-max:text-md md:text-xl  shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-blue-700"
            >
              {" "}
              Send Message{" "}
            </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>
    </div>

    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-500 to-pink-100 py-8">
    //   <div className="bg-white bg-opacity-80 rounded-xl shadow-2xl p-8 w-full sm:w-11/12 md:max-w-lg sm:max-w-sm mx-4 sm:mx-0">
    //     <h1 className="text-3xl sm:text-3xl font-extrabold text-gray-800 text-center mb-6">
    //       Write a Message for Grace!
    //     </h1>

    //     <form onSubmit={handleSubmit} className="space-y-6">
    //       <div>
    //         <label
    //           htmlFor="name"
    //           className="block text-sm font-medium text-gray-700"
    //         >
    //           Your Name
    //         </label>
    //         <input
    //           type="text"
    //           id="name"
    //           name="name"
    //           value={name}
    //           onChange={(e) => setName(e.target.value)}
    //           className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
    //           placeholder="Enter your name"
    //         />
    //       </div>

    //       <div>
    //         <label
    //           htmlFor="message"
    //           className="block text-sm font-medium text-gray-700"
    //         >
    //           Your Message
    //         </label>
    //         <textarea
    //           id="message"
    //           name="message"
    //           value={message}
    //           onChange={(e) => setMessage(e.target.value)}
    //           rows="6"
    //           className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
    //           placeholder="Write your heartfelt message here"
    //         ></textarea>
    //       </div>

    //       <div className="text-center">
    //         <button
    //           type="submit"
    //           className="bg-blue-600 text-white px-6 py-3 rounded-full text-xl sm:text-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-blue-700"
    //         >
    //           Send Message
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
}

export default MessageForm;
