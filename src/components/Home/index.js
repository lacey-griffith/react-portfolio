import React, {useState, useEffect} from 'react';
import NavBar from '../NavBar';
import About from '../AboutMe';
import Projects from '../Projects';
import Contact from '../Contact';
import Resume from '../Resume';

function Home(){
    useEffect(() => {
        document.title = currentPage
    });

    const [currentPage, setCurrentPage] = useState('Home');

    const writePage = (currentPage) => {
        console.log(currentPage)
        switch(currentPage){
            case 'About':
                return <About/>;
            case 'Projects':
                return <Projects/>;
            case 'Contact':
                return <Contact/>;
            case 'Resume':
                return <Resume/>;
            // case 'Home':
            //     return <Home/>;
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