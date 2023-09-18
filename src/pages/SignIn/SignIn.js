import React, { useState } from 'react'
import './SignIn.css'
import { useNavigate } from 'react-router-dom'
import LogininWithSocial from '../../components/LogininWithSocial/LogininWithSocial';

// Imported Firebase =======>
import { auth , signInWithEmailAndPassword } from '../../db/config';



const SignIn = () => {
    const navigate = useNavigate();
    
    // Password Input
    const [valuePass, setValuePass] = useState('');
    const [validPass, setVaildPass] = useState('');
    // Input Email
    const [valueEmail, setValueEmail] = useState('');


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
            const newUser = {
                fullName: user.displayName,
                email: user.email,
                photoURL: user.photoURL
            }
            console.log(newUser);
            alert("Successfully Sign In");
            navigate('/');
            localStorage.setItem('user', JSON.stringify(newUser))

        })
        .catch((error) => {
            const errorCode = error.code;
            alert("error" + errorCode);
        });
    }


    return (
        <>
            <div className='signIn my-5 my-md-0'>
                <div className='container-fluid container-sm'>
                    <div className='row text-center justify-content-between g-5 g-md-0'>
                        <div className='col-12 col-md-5'>
                            <form onSubmit={handleSubmit}>
                                <a href='/home' className='logo'>Kocina</a>
                                <h2>Sign In to Kocina</h2>

                                <LogininWithSocial/>

                                <p className='otherjoin'>Or use your email account:</p>
    
                                <label>Email</label>
                                <input type='email' name='email' value={valueEmail} onChange={(e) => setValueEmail(e.target.value)} placeholder='tom@company.com' required/>
    
                                <label className='mt-3'>Password</label>
                                <input type='password' name='pass' value={valuePass} onChange={handelChangePass} placeholder='Min 8 characters' required/>
                                <span className='warningPass'>{validPass}</span>
    
                                <p className='forgotPass my-3'
                                    onClick={() => navigate('/forgetpass')}
                                >Forgot your password?</p>
                                <button type='submit' className='btn general-btn'>
                                    <a href='/'>Sign In</a>
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
        </>
    )
}

export default SignIn
