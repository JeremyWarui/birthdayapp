import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import messageService from "../services/messageService";

function ViewMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const fetchedMessages = await messageService.getMessages();
        setMessages(fetchedMessages);
      } catch (error) {
        console.error("Error fetching the messages", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 bg-cover bg-center sm-max:bg-contain sm-max:bg-[url('/assets/happybirthday.png')] md:bg-cover md:bg-[url('/assets/Birthday_Card.png')]">
      {" "}
      <div className="max-w-5xl mx-auto">
        {" "}
        <h1 className="font-send-flowers sm-max:text-3xl md:text-5xl text-center font-bold text-gray-800 mb-6">
          {" "}
          🎉 Wishes for You 🎉{" "}
        </h1>{" "}
        {/* Message Grid */}{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {" "}
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-95 rounded-md shadow-md p-6 hover:shadow-lg transition-shadow w-full sm:w-60 md:w-72 lg:w-80 h-60 sm-max:h-min md:h-60 lg:h-60"
            >
              {" "}
              <h2 className="text-lg text-center font-semibold text-gray-800 mb-2">
                {" "}
                {msg.name}{" "}
              </h2>{" "}
              <p className="text-gray-600 text-center">{msg.message}</p>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>

    // <div className="min-h-screen bg-gray-100 py-8 px-4 sm-max:bg-contain md:bg-cover bg-center sm-max:bg-[url('/assets/happybirthday.png')] md:bg-[url('/assets/Birthday_Card.png')]">
    //   <div className="max-w-5xl mx-auto">
    //     <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
    //       🎉 Messages for You 🎉
    //     </h1>

    //     {/* Message Grid */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {messages.map((msg, idx) => (
    //         <div
    //           key={idx}
    //           className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
    //         >
    //           <h2 className="text-lg font-semibold text-gray-800 mb-2">
    //             {msg.name}
    //           </h2>
    //           <p className="text-gray-600">{msg.message}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-500 to-pink-100 py-8">
    //   <div className="bg-white bg-opacity-80 rounded-xl shadow-2xl p-8 w-full sm:w-11/12 md:max-w-lg sm:max-w-sm mx-4 sm:mx-0">
    //     <h1 className="text-3xl sm:text-3xl font-extrabold text-gray-800 text-center mb-6">
    //       Messages for you 😇
    //     </h1>

    //     {messages.length === 0 ? (
    //       <p className="text-lg text-gray-700 text-center">
    //         No messages yet. 😔
    //       </p>
    //     ) : (
    //       <div className="space-y-4">
    //         {messages.map((msg, index) => (
    //           <div key={index} className="bg-pink-100 p-4 rounded-lg shadow-md">
    //             <p className="font-bold text-gray-800">{msg.name}</p>
    //             <p className="text-gray-700">{msg.message}</p>
    //           </div>
    //         ))}
    //       </div>
    //     )}
    //     <Link
    //       to="/birthday"
    //       className="text-blue-600 text-lg hover:underline mt-6 pt-10"
    //     >
    //       Go back to the landing page
    //     </Link>
    //   </div>
    // </div>
  );
}

export default ViewMessages;
