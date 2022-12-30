import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { FeedbackProvider } from "./context/FeedbackProvider";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path=""
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
          </Routes>
          <Routes>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

// import React from "react";

// function App() {
//   return React.createElement(
//     "div",
//     { className: "container" },
//     React.createElement("h1", {}, "My App")
//   );
// }

// export default App;
