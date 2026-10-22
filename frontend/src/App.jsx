import { Routes, Route } from 'react-router-dom'

import BottomNav from "./components/layout/BottomNav.jsx";
import Footer from "./components/layout/Footer.jsx";
import Navbar from "./components/layout/Navbar.jsx";

import Home from "./pages/Home.jsx";
import MatchDetails from './pages/MatchDetails.jsx';


function App() {
  return (
    <div className="min-h-screen text-sm text-primary flex flex-col justify-between antialiased">
      <Navbar/>
      <main className="w-full pt-16 bg-background min-h-screen">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/matches/matchdetails' element={<MatchDetails/>} />
        </Routes>
      </main>
      <Footer/>
      <BottomNav/>
    </div>
  );
}

export default App;