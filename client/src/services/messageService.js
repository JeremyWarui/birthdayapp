const baseUrl = "/api/messages";
import axios from "axios";

const getMessages = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching the messages", error);
    throw error;
  }
};

const postMessage = async (newMsg) => {
  try {
    const response = await axios.post(baseUrl, newMsg);
    return response.data;
  } catch (error) {
    console.error("Error posting the message", error);
    throw error;
  }
};

export default {
  getMessages,
  postMessage,
};
