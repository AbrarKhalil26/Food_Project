import React, { useRef } from 'react'
import './Navbar.css'

// Imported Font Awesome ======>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark , faBars , faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTwitter , faFacebookF , faInstagram , faVimeo } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {

    const signup = () => {
        localStorage.clear();
        window.location.replace('/signup');
    }

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }
    
    const searchRef = useRef();
    const showSearch = () => {
        searchRef.current.classList.toggle('none');
    }


    return (
        <div className='Navbar'>
            <div className='container-fluid container-lg'>
                <div className='nav-desktop'>
                    <div className='Sec1 gap-lg-5 gap-3 gap-md-4'>
                        <a href='/home' className='logo'>Kocina</a>
                        <nav className='removeInSmall'>
                            <a href='/'>Home</a>
                            <a href='/recipe'>Recipe</a>
                            <a href='/search'>Search</a>
                            <a href='/contact'>Contact</a>
                        </nav>

                    </div>
                    <div className='Sec2'>
                        <input className='none inputSearch' type='search' placeholder='Search here...' ref={searchRef}/>
                        <FontAwesomeIcon icon={faSearch} onClick={showSearch}/>

                        <button className='btn removeInSmall signBtn1'>
                            <a href='/signin'>Sign in</a>
                        </button>

                        <button className='btn general-btn py-1 px-4 signBtn2' onClick={signup}>
                            <a href='/signup'>Sign up</a>
                        </button>

                        <button className='btn nav-btn' onClick={showNavbar}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </div>


                <div className='nav-mobile'  ref={navRef}>
                    <div className='d-flex justify-content-between align-items-centerئ mb-4'>
                        <a href='/home' className='logo logo-mobile removeInlarge'>Kocina</a>
                        <button className='btn nav-btn nav-close-btn' onClick={showNavbar}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                    <nav className='removeInlarge'>
                        <a href='/'>Home</a>
                        <a href='/recipe'>Recipe</a>
                        <a href='/search'>Search</a>
                        <a href='/contact'>Contact</a>
                        <a href='/signin'>Sign In</a>
                        <a href='/signup'>Sign Up</a>
                        
                        <button className='btn general-btn mt-4 bg-light'>Sign Up</button>
                        <div className='SocialNav mt-5 d-flex justify-content-center gap-3 text-white-50'>
                            <FontAwesomeIcon icon={faTwitter}/>
                            <FontAwesomeIcon icon={faFacebookF}/>
                            <FontAwesomeIcon icon={faInstagram}/>
                            <FontAwesomeIcon icon={faVimeo}/>
                        </div>
                    </nav>

                </div>
            </div>
        </div>
    );
}

export default Navbar
