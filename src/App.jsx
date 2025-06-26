import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Characters, StarsCanvas } from "./components";

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
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
