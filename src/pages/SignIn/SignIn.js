import React, { useEffect, useState } from 'react'
import './SignIn.css'

// Imported Firebase =======>
import { signInWithEmailAndPassword, providerFacebook, auth , providerGoogle } from '../../db/config';
import { signInWithPopup } from "firebase/auth";

// Imported Font Awesome ======>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG , faFacebookF ,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

// Imported Pages =====>
import Home from '../Home/Home';


const SignIn = () => {
    // Password Input
    const [valuePass, setValuePass] = useState('');
    const [validPass, setVaildPass] = useState('');
    // Input Email
    const [valueEmail, setValueEmail] = useState('');
    // Login with social
    const [valueGoogle, setValueGoogle] = useState('');
    const [valueFacebook, setValueFacebook] = useState(null);
    
    
    
    // Login With Google
    const handleClickGoogle = (e) => {
        signInWithPopup(auth , providerGoogle)
        .then((data) => {
            setValueGoogle(data.user.email)
            localStorage.setItem('email', data.user.email)
        })
    }
    
    // Login With Facebook
    const handleClickFacebook = (e) => {
        signInWithPopup(auth, providerFacebook)
        .then((data) => {
            setValueGoogle(data.user.email)
            localStorage.setItem('email', data.user.email)
            console.log("faceblook user: " , data);
        }).catch((err) => {
            console.log(err);
        })
    }




    const handelChangePass = (e) => {
        setValuePass(e.target.value);
        const minPass = 8;
        var newPass = e.target.value;
        if (newPass.length < minPass) {
            setVaildPass('');
        }
        else{
            setVaildPass('Please enter min 8 charaters')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, valueEmail, valuePass)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                alert("Successfully Sign In");
                window.location.replace('/');

            })
            .catch((error) => {
                const errorCode = error.code;
                alert("error" + errorCode);
        });
    }


    useEffect(() => {
        setValueGoogle(localStorage.getItem('email'))
        setValueFacebook(localStorage.getItem('email'))
    })



    return (
        <>
        {
            (valueGoogle || valueFacebook) ? <Home/> :
            <div className='signIn my-5 my-md-0'>
                <div className='container-fluid container-sm'>
                    <div className='row text-center justify-content-between g-5 g-md-0'>
                        <div className='col-12 col-md-5'>
                            <form onSubmit={handleSubmit}>
                                <a href='/home' className='logo'>Kocina</a>
                                <h2>Sign In to Kocina</h2>
                                <div className='signin-with-social'>
                                    <div className='general-icon' onClick={handleClickFacebook}>
                                        <FontAwesomeIcon icon={faFacebookF}/>
                                    </div>
                                    <div className='general-icon' onClick={handleClickGoogle}>
                                        <FontAwesomeIcon icon={faGooglePlusG}/>
                                    </div>
                                    <div className='general-icon'>
                                        <FontAwesomeIcon icon={faLinkedinIn}/>
                                    </div>
                                </div>
                                <p className='otherjoin'>Or use your email account:</p>
    
                                <label>Email</label>
                                <input type='email' name='email' value={valueEmail} onChange={(e) => setValueEmail(e.target.value)} placeholder='tom@company.com' required/>
    
                                <label className='mt-3'>Password</label>
                                <input type='password' name='pass' value={valuePass} onChange={handelChangePass} placeholder='Min 8 characters' required/>
                                <span className='warningPass'>{validPass}</span>
    
                                <p className='forgotPass mt-3'>Forgot your password?</p>
                                <button type='submit' className='btn general-btn'>
                                    <a href='#'>Sign In</a>
                                </button>
    
                            </form>
                        </div>
    
                        <div className='col-12 col-md-6'>
                            <div className='sec2-signin'>
                                <div className='img-signin'></div>
                                <div className='text-on-img'>
                                    <h2>Hello There, Join Us</h2>
                                    <p>Enter your personal details and join the cooking community</p>
                                    <button className='btn general-btn'>
                                        <a href='/signup'>Sign up</a>
                                    </button>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        }
        </>
    )
}

export default SignIn
