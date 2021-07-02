import React, {useState, useEffect} from 'react';
import NavBar from '../NavBar';
import About from '../AboutMe';
import Projects from '../Projects';
import Contact from '../Contact';
import Resume from '../Resume';

function Home(){
    useEffect(() => {
        if(currentPage === 'About'){
            document.title = currentPage
        } else {
            document.title = currentPage.navLink
        }
    });

    const [currentPage, setCurrentPage] = useState('About');

    const writePage = (currentPage) => {
        switch(currentPage.navLink){
            case 'About':
                return <About/>;
            case 'Projects':
                return <Projects/>;
            case 'Contact':
                return <Contact/>;
            case 'Resume':
                return <Resume/>;
            default:
                return <About/>;
        }
    }

    return (
    <div> 
        <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <div>
            {writePage(currentPage)}
        </div>
    </div>
    )
};

export default Home;