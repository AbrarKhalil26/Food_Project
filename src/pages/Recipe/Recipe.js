import React, { useEffect, useRef, useState } from 'react'
import './Recipe.css'
import { useLocation } from 'react-router-dom';

// Imported Pages ======>
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

// Imported Font Awesome ======>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft , faStar , faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF , faLinkedinIn ,faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

// Imported img ======>
import aliceImg from '../../assets/Alice.jpeg'
import tomImg from '../../assets/Tom.jpeg'


const Recipe = () => {
  const location = useLocation();
  // Add a default empty object if location.state is null
  const { data } = location.state || {}; 
  // console.log(data);
  
  var [dataFromLocalStorage, setDataFromLocalStorage] = 
    useState(localStorage.getItem('data Meal'));

  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]); 
  const [measures, setMeasure] = useState([]); 
  const [meals, setMeals] = useState();



  // a random number for details Recipe
  const randomRecipes = Math.floor(Math.random() * 30) + 1;
  const randomActiveTime = Math.floor(Math.random() * 50) + 1;
  const randomTotalTime = randomActiveTime + (Math.floor(Math.random() * 10) + 1);
  const randomServes = Math.floor(Math.random() * 10) + 1;

  // a random number for rates
  const randomInt = Math.floor(Math.random() * 1000) + 1;
  const randomInt1 = Math.floor(Math.random() * 5) + 1;
  var randomFloat = Math.random();
  var roundedFloat = (Math.round(randomFloat * 10) / 10) + randomInt1;


  const heartRef = useRef();
  const colorHeart = () => {
    heartRef.current.classList.toggle('active');
  }  



  

  useEffect(() => {
    
    // get all ingredients in one Meal
    const tempIngredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = dataFromLocalStorage['strIngredient' + i];
      if (ingredient !== '') {
        tempIngredients.push(ingredient);
      }
    }
    setIngredients(tempIngredients);
    
    
    
    // get all measures in one Meal
    const tempMeasure = [];
    for (let i = 1; i <= 20; i++) {
      const measures = dataFromLocalStorage['strMeasure' + i];
      if (measures !== '') {
        tempMeasure.push(measures);
      }
    }
    setMeasure(tempMeasure);
    
    
    // get to other Meals for Other Recipes Section
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then(response => response.json())
    .then(data => {
      // console.log(data.categories);
      setMeals(data.categories);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching categories:', error);
    });
    
    setDataFromLocalStorage(JSON.parse(localStorage.getItem('data Meal')))

  },[])





  return (
    <div className="RecipePage">
      <div>
        <Navbar />
      </div>

      <div className="contentRecipe">
        <div className="container-fluid container-sm main my-4">
          <div className="row justify-content-center align-items-center g-5">
            <div className="img col-12 col-md-6 col-xl-5">
              <img src={dataFromLocalStorage.strMealThumb} className="col-12" alt="main-pic" />
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <div className="content-container">
                <h1 className="main-header">{dataFromLocalStorage.strMeal}</h1>
                <p>{dataFromLocalStorage.strInstructions}</p>

                <div className="three-icons pt-5 pb-4">
                  <div className="col-4">
                    <FontAwesomeIcon icon={faClock} />
                    <h6>Active Time</h6>
                    <span>{randomActiveTime}</span>
                  </div>
                  <div className="col-4">
                    <FontAwesomeIcon
                      icon={faClockRotateLeft}
                      flip="horizontal"
                    />
                    <h6>Total Time</h6>
                    <span>{randomTotalTime}</span>
                  </div>
                  <div className="col-4">
                    <svg
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      data-svg="users"
                    >
                      <circle
                        fill="none"
                        stroke="rgb(74, 74, 74)"
                        stroke-width="1.1"
                        cx="7.7"
                        cy="8.6"
                        r="3.5"
                      ></circle>
                      <path
                        fill="none"
                        stroke="rgb(74, 74, 74)"
                        stroke-width="1.1"
                        d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"
                      ></path>
                      <path
                        fill="none"
                        stroke="rgb(74, 74, 74)"
                        stroke-width="1.1"
                        d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"
                      ></path>
                    </svg>
                    <h6>Yield</h6>
                    <span>Serves {randomServes}</span>
                  </div>
                </div>
                <div className="last-row">
                  <div>
                    <p className='text-black mb-2'>
                      Created in <a href="#">{dataFromLocalStorage.strArea}</a>
                    </p>
                    <span>{randomRecipes} recipes</span>
                  </div>
                  <div className="icons">
                    <a href="#" title="Save Recipe">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        data-svg="plus-circle"
                      >
                        <circle
                          fill="none"
                          stroke="rgb(120, 120, 120)"
                          stroke-width="1.1"
                          cx="9.5"
                          cy="9.5"
                          r="9"
                        ></circle>
                        <line
                          fill="none"
                          stroke="rgb(120, 120, 120)"
                          x1="9.5"
                          y1="5"
                          x2="9.5"
                          y2="14"
                        ></line>
                        <line
                          fill="none"
                          stroke="rgb(120, 120, 120)"
                          x1="5"
                          y1="9.5"
                          x2="14"
                          y2="9.5"
                        ></line>
                      </svg>
                    </a>
                    <a href="#" title="Shopping List">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        data-svg="cart"
                      >
                        <circle
                          cx="7.3"
                          cy="17.3"
                          r="1.4"
                          stroke="rgb(120, 120, 120)"
                          fill="rgb(120, 120, 120)"
                        ></circle>
                        <circle
                          cx="13.3"
                          cy="17.3"
                          r="1.4"
                          stroke="rgb(120, 120, 120)"
                          fill="rgb(120, 120, 120)"
                        ></circle>
                        <polyline
                          fill="none"
                          stroke="rgb(120, 120, 120)"
                          points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"
                        ></polyline>
                      </svg>
                    </a>
                    <a href="#" title="Print Recipe">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        data-svg="print"
                      >
                        <polyline
                          fill="none"
                          stroke="rgb(120, 120, 120)"
                          points="4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5"
                        ></polyline>
                        <polyline
                          fill="none"
                          stroke="rgb(120, 120, 120)"
                          points="15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5"
                        ></polyline>
                        <rect
                          fill="none"
                          stroke="rgb(120, 120, 120)"
                          width="11"
                          height="6"
                          x="4.5"
                          y="11.5"
                        ></rect>
                        <rect
                          width="8"
                          height="1"
                          x="6"
                          y="13"
                          stroke="rgb(120, 120, 120)"
                          fill="rgb(120, 120, 120)"
                        ></rect>
                        <rect
                          width="8"
                          height="1"
                          x="6"
                          y="15"
                          stroke="rgb(120, 120, 120)"
                          fill="rgb(120, 120, 120)"
                        ></rect>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!------------------------------------------------------------------ content-1 ------------------------------------------------------------> */}
        <div className="content-1 container-lg">
          <div className="row g-5">
            {/* <!--------------------------------------------- articles ----------------------------> */}
            <div className="articles col-lg-7 offset-lg-1">
              <h4 className="art-header">How to Make It</h4>
              <div className="step-cont">
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    fill="#eb4a36"
                    className="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>
                </span>
                <div className="step-body">
                  <div className="head">
                    <span>1.STEP</span>
                    <hr />
                  </div>
                  <p>
                    Labour, of evaluated would he the a the our what is in the
                    arduous sides behavioural is which the have didn't kicked
                    records the it framework by the for traveler sure the can
                    most well her. Entered have break himself cheek, and
                    activity, for bit of text.
                  </p>
                </div>
              </div>
              <div className="step-cont">
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    fill="#eb4a36"
                    className="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>
                </span>
                <div className="step-body">
                  <div className="head">
                    <span>2.STEP</span>
                    <hr />
                  </div>
                  <p>
                    Labour, of evaluated would he the a the our what is in the
                    arduous sides behavioural is which the have didn't kicked
                    records the it framework by the for traveler sure the can
                    most well her. Entered have break himself cheek, and
                    activity, for bit of text.
                  </p>
                </div>
              </div>
              <div className="step-cont">
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    fill="#eb4a36"
                    className="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>
                </span>
                <div className="step-body">
                  <div className="head">
                    <span>3.STEP</span>
                    <hr />
                  </div>
                  <p>
                    Labour, of evaluated would he the a the our what is in the
                    arduous sides behavioural is which the have didn't kicked
                    records the it framework by the for traveler sure the can
                    most well her. Entered have break himself cheek, and
                    activity, for bit of text.
                  </p>
                </div>
              </div>
              <div className="step-cont">
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    fill="#eb4a36"
                    className="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>
                </span>
                <div className="step-body">
                  <div className="head">
                    <span>4.STEP</span>
                    <hr />
                  </div>
                  <p>
                    Labour, of evaluated would he the a the our what is in the
                    arduous sides behavioural is which the have didn't kicked
                    records the it framework by the for traveler sure the can
                    most well her. Entered have break himself cheek, and
                    activity, for bit of text.
                  </p>
                </div>
              </div>
              <hr />
              <div className="comments mt-5">
                <h4 className="head-2">Comments</h4>
                <div className="waman-div mb-4 col-lg-11">
                  <div className="header">
                    <div className="static">
                      <img src={aliceImg} alt="user-pic" />
                      <div className="text">
                        <h5 className="fw-bold">Tom Solender</h5>
                        <span>12 days ago</span>
                        <div className="stars-icons">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="dynamic">
                      <span>Reply</span>
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet.
                    </p>
                  </div>
                </div>
                <div className="special-comments">
                  <div className="man-div mb-4">
                    <div className="header">
                      <div className="static">
                        <img src={tomImg} alt="user-pic" />
                        <div className="text">
                          <h5 className="fw-bold">Tom Solender</h5>
                          <span>12 days ago</span>
                        </div>
                      </div>
                      <div className="dynamic">
                        <span>Reply</span>
                      </div>
                    </div>
                    <div className="body">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet.
                    </div>
                  </div>
                  <div className="waman-div mb-4 ">
                    <div className="header">
                      <div className="static">
                        <img src={aliceImg} alt="user-pic" />
                        <div className="text">
                          <h5 className="fw-bold">Tom Solender</h5>
                          <span>12 days ago</span>
                          <div className="stars-icons">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill text-warning"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill text-warning"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill text-warning"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill text-warning"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="dynamic">
                        <span>Reply</span>
                      </div>
                    </div>
                    <div className="body">
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!---------------------------------------------- aside ------------------------------> */}
            <div className="aside col-lg-4">
              <h4 className="aside-header">Ingredients</h4>
              <ul className="list-group list-group-flush">
                {ingredients.map((ing, index) => {
                    return(
                          <li className="my-2" >
                            {measures[index]} {ing}
                          </li>
                    )
                  })
                }
              </ul>

              <div className='ContentTags my-5'>
                <h4 className="tags-header mb-3">Tags</h4>
                <div className="tags-container">
                  <a href="#">
                    <div>DINNER</div>
                  </a>
                  <a href="#">
                    <div>CASSEROLE</div>
                  </a>
                  <a href="#">
                    <div>PARTY</div>
                  </a>
                  <a href="#">
                    <div>MEAT</div>
                  </a>
                </div>
              </div>

              <div className='ContentShare'>
                <h4 className="icons-header mb-4">Share Recipe</h4>
                <div className="icons-container">
                  <a href="index.html" title="#" target="_blank" className='general-icon text-center'>
                    <FontAwesomeIcon icon={faFacebookF}/>
                  </a>
                  <a href="index.html" title="#" target="_blank" className='general-icon text-center'>
                    <FontAwesomeIcon icon={faLinkedinIn}/>
                  </a>
                  <a href="index.html" title="#" target="_blank" className='general-icon text-center'>
                    <FontAwesomeIcon icon={faTwitter}/>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* <!------------------------------------------------------------------ content-2 -------------------------------------------------------------> */}
        <div className="container-fluid content-2 mb-5">
          <div className="row content-row">
            <div className="galary">
              <h4>Other Recipes You May Like</h4>
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 my-4">
                


                  {
                    loading ? (
                      Array.from({ length: 8 }).map((_, index) => (
                        <div className="pic col px-2">
                        <div className="card h-100 border-0 ">
                          <div className="img-food">
                            <img src='' className="card-img-top placeholder placeholder-img-recipe w-100" alt="pic-1"/>
                          </div>
                          <div className="card-body py-1 px-1">
                            <h6 className="card-title placeholder w-100"></h6>
                            <div className="card-text placeholder w-100">
                              <span></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      ))

                    ) : (
                      meals && meals.map((meal,index) => {
                        if(index < 8){
                          return(
                            <div className="pic col px-2">
                              <div className="card h-100 border-0 ">
                                <div className="img-food">
                                  <img src={meal.strCategoryThumb} className="card-img-top" alt="pic-1"/>
                                  <div className='iconHeart'>
                                    <FontAwesomeIcon icon={faHeart} ref={heartRef} onClick={colorHeart}/>
                                  </div>
                                </div>
                                <div className="card-body py-1 px-1">
                                  <h6 className="card-title">{meal.strCategory}</h6>
                                  <div className="card-text">
                                    <span>
                                      <FontAwesomeIcon icon={faStar} className="text-warning pe-2"/>
                                      <span>{roundedFloat}({randomInt})</span>
                                    </span>
                                    <span>by John Keller</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        }
                      })
                    )
                  }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Recipe
