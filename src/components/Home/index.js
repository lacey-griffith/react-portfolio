import React, {useState, useEffect} from 'react';
import NavBar from '../NavBar';
//import Projects from '../Projects';
import Projects from '../Projects/index.js';

import Contact from '../Contact';
import Resume from '../Resume';
import Footer from '../Footer';
import NotFoundPage from '../NotFound.js';
import profilePicture from '../../assets/images/bioImage.jpg';

const Home = () =>{
    console.log('home');

    const [currentPage, setCurrentPage] = useState('Home');

    useEffect(() => {
        document.title = currentPage;
    }, [currentPage]);

    
    const writePage = (currentPage) => {
        console.log(currentPage)

        switch(currentPage){
            case 'Projects':
                return <Projects />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            case 'Home':
                return (
                    <div>
                        <h1>Home Page Content</h1>
                        {/* You can add more content related to 'Home' here */}
                    </div>
                );
            default:
                return <NotFoundPage />;
        }
    }

    return (
        <>
    <div> 
        <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <div>
            {writePage(currentPage)}
        </div>
    </div>

    <Footer/>
{/*}
    <section className='my-5'>
        <div className='container d-flex flex-column text-center'>
            <div className='p-2'>
                <img src={profilePicture} className='my-2 profile-image' alt='profile'></img>
            </div>

            <div className='p-2'>
                <p className='about-me'>
                 Hi! I'm Lacey. 
                </p>
            </div>
            </div>
        <div><Footer/></div>
    </section>*/}
        </>
    )
};
export default Home;