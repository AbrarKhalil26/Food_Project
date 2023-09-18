import React, { useEffect, useState } from 'react'
import './Favorite.css'
import Navbar from '../../layout/Navbar/Navbar'
import Footer from '../../layout/Footer/Footer'

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// lodash is library that helps equality checks and function binding
import { isEqual } from 'lodash';


const Favorite = () => {

    const storedFavorites = JSON.parse(localStorage.getItem('FavoriteMeal'));
    const storedMealSearch = JSON.parse(localStorage.getItem('dataMealSearch'));
    const [favoriteMeals, setFavoriteMeals] = useState([]);

    // a random number 
    const randomInt = Math.floor(Math.random() * 1000) + 1;
    const randomInt1 = Math.floor(Math.random() * 5) + 1;
    var randomFloat = Math.random();
    var roundedFloat = (Math.round(randomFloat * 10) / 10) + randomInt1;



    useEffect(() => {
        if (storedFavorites && storedMealSearch) {
            const filteredMeals = storedMealSearch.filter(item => storedFavorites.includes(item.idMeal));
        
            console.log('filteredMeals: ', filteredMeals)
            console.log('favoriteMeals: ', favoriteMeals)
            // Check if filtered meals are different from current favorite meals
            if (filteredMeals.length > 0 && 
                !isEqual(filteredMeals, favoriteMeals) && 
                !isEqual(filteredMeals.length, favoriteMeals.length)
            )
                setFavoriteMeals(filteredMeals);
        }
    }, [storedFavorites, storedMealSearch, favoriteMeals]);


    return (
        <div className='favoritePage'>
            <div>
                <Navbar/>
            </div>

            <div className='favoriteContent container-fluid container-lg'>
                <h1>Favorite Meals</h1>
                <div className="divFood my-5">
                    <div className="row g-5">

                        {favoriteMeals.length > 0 ? (
                            favoriteMeals &&
                                favoriteMeals.map((item) => (
                                    <div className='col-6 col-md-4 col-lg-3' key={item.idMeal}>
                                        <div className="contentFood">
                                        <div className='bgFood'></div>
                                        <div className="img-food mb-3">
                                            <img src={item.strMealThumb} alt="" />
                                            <div className='iconHeart'></div>
                                        </div>
                                        <div className="details mt-4">
                                            <h6>{item.strMeal}</h6>
                                            <div className="d-flex justify-content-between mt-2">
                                            <p>
                                                <FontAwesomeIcon
                                                icon={faStar}
                                                className="text-warning pe-2"
                                                />
                                                <span>{roundedFloat}({randomInt})</span>
                                            </p>
                                            <p className=''>{item.strArea}</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                            ))
                        ):( <p className='notFound text-center fs-5'>Not Found</p>)
                        }
                    </div>
                </div>

                
            </div>

            <div className='favFooter'>
                <Footer/>
            </div>
        </div>
    )
}

export default Favorite
