import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SalonesProvenza from './pages/SalonProvenza';


function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SalonesProvenza />} />
      </Routes>
    </Router>
  )
}

export default App
