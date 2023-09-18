import React from 'react'
import './Profile.css'
import Navbar from '../../layout/Navbar/Navbar';
import Footer from '../../layout/Footer/Footer';

const Profile = () => {

    const storedUser = JSON.parse(localStorage.getItem('user')) || [];
    // console.log("Retrieved user from localStorage:", storedUser);

    return (
        <div className='ProfilePage'>
            <div>
                <Navbar/>
            </div>

            <div className='ProfileContent container-fluid container-md'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-12 col-sm-6 d-grid justify-content-center'>
                        <img src={
                            storedUser? 
                            storedUser.photoURL == null? 
                            'https://graph.facebook.com/2188588797999004/picture'
                            : storedUser.photoURL 
                            : ''
                            }
                            alt=''
                        />
                    </div>
                    <div className='col-12 col-sm-6'>
                        <div className='text'>
                            <h2 className='mb-4'>{storedUser.fullName}</h2>
                            <p className='mb-3'><span>Email:</span> {storedUser.email}</p>
                            <p><span>Description:</span> description</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='ProfileFooter'>
                <Footer/>
            </div>
        </div>
    )
}

export default Profile
