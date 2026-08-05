import BottomNav from "./components/layout/BottomNav.jsx";
import Footer from "./components/layout/Footer.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Home from "./pages/Home.jsx";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-1 pb-20 md:pb-0">
        <Home/>
      </main>
      <Footer/>
      <BottomNav/>
    </div>
  );
}

export default App;