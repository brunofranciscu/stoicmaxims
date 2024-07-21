import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Maxim from '../pages/maxim/index';
import Author from '../pages/author/index';
import PrivacyPolicy from '../pages/privacy-policy';
import About from '../pages/about';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/maxim/:id" element={<Maxim/>} />
                <Route path="/author/:author" element={<Author/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
            </Routes>
        </BrowserRouter>
    )
}