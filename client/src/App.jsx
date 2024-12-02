import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MessageForm from "./components/MessageForm";
import ThankYouPage from "./components/ThankYouPage";
import ViewMessages from "./components/ViewMessages";
import BirthdayLandingPage from "./components/BirthdayLandingPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page with confetti effect */}
        <Route path="/" element={<LandingPage />} />

        <Route path="/message" element={<MessageForm />} />

        <Route path="/thank-you" element={<ThankYouPage />} />

        <Route path="/view-messages" element={<ViewMessages />} />

        <Route path="/birthday" element={<BirthdayLandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
