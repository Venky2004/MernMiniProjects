import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//pages
import Home from './pages/Home';
import Feedback from './pages/Feedback';
import ViewResults from './pages/ViewResults';
//components
import Nav from './components/Nav';
import { useEffect, useState } from 'react';


function App() {

  const [feedback, setFeedback] = useState([])
  const ele = () => {
    {
      feedback.map((e) => {
        return (
          <ViewResults name={e.name} comment={e.comment} />
        );
      })
    }
  }

  useEffect(() => {
    const getFeedback = async () => {
      const feedbackFromServer = await fetchFeedback()
      setFeedback(feedbackFromServer)
    }
    getFeedback()
  }, [])
  const fetchFeedback = async () => {
    const res = await fetch('http://localhost:5000/feedback')
    const data = await res.json()
    return data
  }

  return (
    <Router>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path='/ViewResults' element={feedback.map((e) => {
            return (
              <ViewResults name={e.name} age={e.age} gender={e.gender} job={e.job} phone={e.phone} email={e.email} address={e.address} vac={e.vac} />
            );
          })} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
