import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './components/Home/index';
import Projects from './components/Projects/';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import NotFoundPage from './components/NotFound';

export const TheRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/projects" element={<Projects />} />
                <Route path="/Projects" element={<Projects />} />

                <Route path="/contact" element={<ContactForm />} />
                <Route path="/Contact" element={<ContactForm />} />

                <Route path="/resume" element={<Resume />} />
                <Route path="/Resume" element={<Resume />} />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    )
}

export default TheRoutes;