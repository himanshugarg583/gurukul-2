import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import AboutUs from '../components/main-sections/AboutUs';
import ContactUs from '../components/main-sections/ContactUs';

const MainRoute = () => (
  <BrowserRouter basename="/gurukul-2">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>
);

export default MainRoute;