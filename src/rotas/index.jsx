import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Maxim from '../pages/maxim/index';
import Author from '../pages/author/index';
import PrivacyPolicy from '../pages/privacy-policy';
import About from '../pages/about';
import { HelmetProvider } from 'react-helmet-async';

export default function Rotas(){
    return(
        <BrowserRouter>
        <HelmetProvider>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/author/:author/maxim/:id" element={<Maxim />} />
                <Route path="/author/:author" element={<Author />} />
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </HelmetProvider>
        </BrowserRouter>
    )
}