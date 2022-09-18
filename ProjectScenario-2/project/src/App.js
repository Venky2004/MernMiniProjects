import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//pages
import { Card } from './pages/Card';
//components
import { useEffect, useState } from 'react';


function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    const getFeedback = async () => {
      const DatafromServer = await fetchData()
      setData(DatafromServer)
    }
    getFeedback()
  }, [])
  const fetchData = async () => {
    const res = await fetch('http://localhost:5000/sampledata')
    const data = await res.json()
    return data
  }

  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">

        </header> */}
        <p>Hi</p>
        <Routes>
          <Route path='/' element={data.map((e) => {
            return (
              <Card eventid={e.eventid} type={e.type} rjname={e.rjname} timing={e.timing} duration={e.duration} participation={e.participation} pic={e.pic} />
            );
          })} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
