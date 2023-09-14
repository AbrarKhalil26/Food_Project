import React, { useEffect, useState } from 'react'
import './SignUp.css'

// Imported Firebase =======>
import { auth , createUserWithEmailAndPassword , providerFacebook , providerGoogle  } from '../../db/config';
import { signInWithPopup } from "firebase/auth";

// Imported Font Awesome ======>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG , faFacebookF ,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Home from '../Home/Home';


const SignUp = () => {

    // Input Name
    const [valueName, setValueName] = useState('');
    // Input Email
    const [valueEmail, setValueEmail] = useState('');
    // Password Input
    const [valuePass, setValuePass] = useState('');
    const [validPass, setVaildPass] = useState('');

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
        
        createUserWithEmailAndPassword(auth, valueEmail, valuePass)
            .then((success) => {
                const user = success.user;
                console.log(user);
                alert("Successfully create an account");
                window.location.replace('/signin');
            })
            .catch((error) => {
                const errorCode = error.code;
                alert("error" + errorCode);
            },
        );
    }

    useEffect(() => {
        setValueGoogle(localStorage.getItem('email'))
        setValueFacebook(localStorage.getItem('email'))
    })


    return (
        <>
        {(valueGoogle || valueFacebook) ? <Home/> :

        <div className='signIn my-5 my-md-0'>
            <div className='container-fluid container-sm'>
                <div className='row text-center justify-content-between g-5 g-md-0'>
                    <div className='col-12 col-md-5'>
                        <form onSubmit={handleSubmit}>
                            <a href='/home' className='logo'>Kocina</a>
                            <h2>Sign In to Kocina</h2>
                            <div className='signin-with-social'>
                                <div className='general-icon'>
                                    <FontAwesomeIcon icon={faFacebookF} onClick={handleClickFacebook}/>
                                </div>
                                <div className='general-icon'>
                                    <FontAwesomeIcon icon={faGooglePlusG} onClick={handleClickGoogle}/>
                                </div>
                                <div className='general-icon'>
                                    <FontAwesomeIcon icon={faLinkedinIn}/>
                                </div>
                            </div>
                            <p className='otherjoin'>Or use your email for registration:</p>

                            <label>Full name</label>
                            <input type='text' name='name' value={valueName} onChange={(e) => setValueName(e.target.value)}  placeholder='Tom Atiks' required/>

                            <label className='mt-3'>Email</label>
                            <input type='email' name='email' value={valueEmail} onChange={(e) => setValueEmail(e.target.value)} placeholder='tom@company.com' required/>

                            <label className='mt-3'>Password</label>
                            <input type='password' name='pass' value={valuePass} onChange={handelChangePass} placeholder='Min 8 characters' required/>
                            <span className='warningPass'>{validPass}</span>

                            <button type='submit' className='btn general-btn mt-3'>
                                <a href=''>Sign up</a>
                            </button>

                            <p className='terms mt-3'>By signing up you agree to our <span>terms</span> of service.</p>
                        </form>
                    </div>

                    <div className='col-12 col-md-6'>
                        <div className='sec2-signin'>
                            <div className='img-signup'></div>
                            <div className='text-on-img'>
                                <h2>Hello There, Join Us</h2>
                                <p>Enter your personal details and join the cooking community</p>
                                <button className='btn general-btn'>
                                    <a href='/signin'>Sign In</a>
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

export default SignUp
