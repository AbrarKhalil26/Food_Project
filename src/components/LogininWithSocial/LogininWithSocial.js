import'./LogininWithSocial.css'
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'

import { auth, providerFacebook, providerGoogle } from '../../db/config';
import { signInWithPopup } from 'firebase/auth';


const LogininWithSocial = () => {
    const navigate = useNavigate();
    
    // Login With Google
    const handleClickGoogle = () => {
        signInWithPopup(auth , providerGoogle)
        .then((data) => {
            const newUser = {
                fullName: data.user.displayName,
                email: data.user.email,
                photoURL: data.user.photoURL
            }
            
            localStorage.setItem('user', JSON.stringify(newUser))
            navigate('/');
            console.log("Google user: " , newUser);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
    // Login With Facebook
    const handleClickFacebook = () => {
        signInWithPopup(auth, providerFacebook)
        .then((data) => {
            const newUser = {
                fullName: data.user.displayName,
                email: data.user.email,
                photoURL: data.user.photoURL
            }

            localStorage.setItem('user', JSON.stringify(newUser))
            navigate('/');
            console.log("Facebook user: " , data);
        })
        .catch((err) => {
            console.log(err);
        })
    }


    return (
        <div className='signin-with-social'>
            <div className='general-icon' onClick={handleClickFacebook}>
                <FontAwesomeIcon icon={faFacebookF}/>
            </div>
            <div className='general-icon' onClick={handleClickGoogle}>
                <FontAwesomeIcon icon={faGooglePlusG}/>
            </div>
            {/* <div className='general-icon'>
                <FontAwesomeIcon icon={faGithub}/>
            </div> */}
        </div>
    )
}

export default LogininWithSocial
