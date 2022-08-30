
import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from "uuid"
import FeedBackForm from './components/FeedBackForm';
import FeedBackItem from './components/FeedBackItem';
import FeedBackList from './components/FeedBackList';
import FeedBackReviews from './components/FeedBackReviews';
import Header from './components/Header';
import FeedBack from "./data/FeedBack"
import About from "./pages/About"
import AboutIconLink from "./components/AboutIconLink"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
function App() {
  const [feedback, setFeedback] = useState(FeedBack)
  const deleteFeedback = (id) => {
    if (window.confirm("are u sure wanna delete this ?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  return (
    <>
      <Router>
        <Header />

        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedBackForm handleAdd={addFeedback} />
                  <FeedBackReviews feedback={feedback} />
                  <FeedBackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                  <AboutIconLink />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
