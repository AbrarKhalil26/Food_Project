import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom';

// Imported Font Awesome ======>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark , faBars , faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTwitter , faFacebookF , faInstagram , faVimeo } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    const navigate = useNavigate();
    const [signinSuccessfully, setSigninSuccessfully] = useState('');

    const signup = () => {
        localStorage.clear();
        navigate('/signup');
    }

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }
    
    const searchRef = useRef();
    const showSearch = () => {
        searchRef.current.classList.toggle('none');
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));
    // console.log("Retrieved user from localStorage:", storedUser);
    
    useEffect(() => {
        if (storedUser) {
            setSigninSuccessfully('d-none');
        }
    }, [storedUser]);
    

    return (
        <div className='Navbar'>
            <div className='container-fluid container-lg'>
                <div className='nav-desktop'>
                    <div className='Sec1 gap-lg-5 gap-3 gap-md-4'>
                        <a href='/home' className='logo'>Kocina</a>
                        <nav className='removeInSmall'>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/recipe'>Recipe</NavLink>
                            <NavLink to='/search'>Search</NavLink>
                            <NavLink to='/contact'>Contact</NavLink>
                        </nav>

                    </div>
                    <div className='Sec2'>
                        <input className='none inputSearch' type='search' placeholder='Search here...' ref={searchRef}/>
                        <FontAwesomeIcon icon={faSearch} onClick={showSearch}/>

                        <button className={`btn removeInSmall signBtn1 ${signinSuccessfully}`}>
                            <a href='/signin'>Sign in</a>
                        </button>

                        <button className='btn general-btn py-1 px-4 signBtn2' onClick={signup}>
                            <a href='/signup'>Sign up</a>
                        </button>

                        <div className='userInfo'>
                            <img src={
                                storedUser? 
                                    storedUser.photoURL == null? 
                                    'https://graph.facebook.com/2188588797999004/picture'
                                    : storedUser.photoURL 
                                    : ''} 
                                alt=''
                            />
                        </div>

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
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/recipe'>Recipe</NavLink>
                        <NavLink to='/search'>Search</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                        <NavLink to='/signin'>Sign In</NavLink>
                        <NavLink to='/signup'>Sign Up</NavLink>
                        
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
