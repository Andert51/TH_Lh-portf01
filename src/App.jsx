import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Characters, CharacterDetail, AdminPanel, StarsCanvas } from "./components";
import Login from "./components/Login";
import { AuthProvider } from "./contexts/AuthContext";

const HomePage = () => {
  return (
    <>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/character/:characterId" element={<CharacterDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
