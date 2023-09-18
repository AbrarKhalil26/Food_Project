import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ForgetPass.css'
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../db/config';

const ForgotPass = () => {
    const navigate = useNavigate();


    const handleSubmit = async(e) =>{
        e.preventDefault();
        const emailValue = e.target.email.value;
        sendPasswordResetEmail(auth, emailValue)
            .then(data => {
                alert('Check your email')
                navigate('/signin')
            })
            .catch(err => {
                alert(err.code)
            })
    }

    return (
        <div className='forgetPage my-5 my-md-0'>
            <div className='container-fluid container-sm'>
                <div className='row text-center justify-content-between align-items-center g-5 g-md-0'>
                    <div className='col-12 col-md-6'>
                        <div className='sec2-signin'>
                            <div className='img-signin'></div>
                            <div className='text-on-img'>
                                <h2>Hello There, Join Us</h2>
                                <p>Enter your personal details and join the cooking community</p>
                                <button className='btn general-btn'>
                                    <a href='/signin'>Sign in</a>
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className='col-12 col-md-5'>
                        <form className='gap-3' onSubmit={(e) => handleSubmit(e)}>
                            <a href='/home' className='logo'>Kocina</a>
                            <h2>Forgot Password</h2>

                            <label>Email</label>
                            <input type='email' name='email' placeholder='Enter Your Email' required/>

                            <button className='btn general-btn text-light mt-4'>Reset</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPass
