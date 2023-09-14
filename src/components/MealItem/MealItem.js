import React, { useEffect, useRef } from 'react'
import './MealItem.css'
import { useNavigate } from 'react-router-dom'
// Imported Icons ======>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart , faStar } from '@fortawesome/free-solid-svg-icons';



const MealItem = ({ data } ) => {
    // console.log('data',data)

    const navigation = useNavigate();

    // a random number 
    const randomInt = Math.floor(Math.random() * 1000) + 1;
    const randomInt1 = Math.floor(Math.random() * 5) + 1;
    var randomFloat = Math.random();
    var roundedFloat = (Math.round(randomFloat * 10) / 10) + randomInt1;

    const heartRef = useRef();
    const colorHeart = () => {
        heartRef.current.classList.toggle('active');
    }


    return (
        <>
            <div className='col-6 col-md-4 col-lg-3'>
                <div className="contentFood" key={data.idMeal}>
                    <div className='bgFood' onClick={() => {
                        localStorage.setItem('data Meal', JSON.stringify(data));
                        navigation("/recipe", {
                            replace: true,
                            state: { data }
                            
                            });
                        }}>
                    </div>

                    <div className="img-food mb-3">
                        <img src={data.strMealThumb} alt=""/>
                        <div className='iconHeart'>
                            <FontAwesomeIcon icon={faHeart} ref={heartRef} onClick={colorHeart}/>
                        </div>
                    </div>

                    <div className="details mt-4">
                        <h6>{data.strMeal}</h6>
                        <div className="d-flex justify-content-between mt-2">
                            <p>
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className="text-warning pe-2"
                                />
                                <span>{roundedFloat}({randomInt})</span>
                            </p>
                            <p className=''>{ data.strArea}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MealItem
