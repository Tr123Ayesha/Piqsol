import './App.css';
import Dashboard from './pages/dashboard';
import Inbox from './pages/inbox';
import Starred from "./pages/starred"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Inbox" element={<Inbox />} />
                <Route path='Starred' element={<Starred/>} />
              
            </Routes>
        </Router>
    </div>
  );
}

export default App;
