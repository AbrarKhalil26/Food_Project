import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../layout/Navbar/Navbar'
import Footer from '../../layout/Footer/Footer'
import SearchContent from '../../components/SearchContent/SearchContent'
import Accordion from '../../components/Accordion/Accordion'

// Imported Font Awesome ======>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight , faPlay } from '@fortawesome/free-solid-svg-icons'

import { questions } from '../../db/dataApi'




const Home = () => {


  const [dataLinks] = useState(questions);
  const [mealVideos, setMealVideos] = useState([]);
  const [playVideo, setPlayVideo] = useState('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Meal Videos
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
    .then(res => res.json())
    .then((data) => {
      // console.log(data.meals);
      setMealVideos(data.meals);
      setLoading(false);
    })
    .catch((error) => {
      console.log('Error fetching data:', error);
    })

  }, [])



  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="contentHome mt-5">
        <div className="header">
          <div className="sec-1 my-4">
            <div className="container-fluid container-lg">
              <div className="img-card col-11 rounded-4">
                <div className="img-card-content">
                  <h1 className="card-title">Choose from thousands of recipes</h1>
                  <p>
                    Appropriately integrate technically sound value with
                    scalable infomediaries negotiate sustainable strategic theme
                    areas.
                  </p>
                  <a className="icon-link icon-link-hover" href="#">
                    Sign up today
                    <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sec-2">
          <div className="container-fluid container-lg">
            <div className="row g-5">

              {/* ---------------  Aside  --------------- */}

              <div className="col-12 col-md-3">
                <div className='aside pe-3'>
                  <h1 className="header fs-3 mb-5">Recipes</h1>
                  <div className='groupLinks d-grid'>
                    
                    {
                      dataLinks.map((dataQ) => {
                        return(
                          <Accordion key={dataQ.id} {...dataQ}/>
                        )
                      })
                    }
                  </div>
                </div>
              </div>

              {/* ---------------  Search  --------------- */}
              
              <div className="col-12 col-md-9 bg-body-light">
                <SearchContent />
              </div>

              {/* ---------------  Videos  --------------- */}
              
              <div className="videosHome">
                <div className="container-fluid container-lg">
                  <div className="sec-3 mb-5">
                    <div className="f-row d-flex mb-5 justify-content-between">
                      <h1>videos</h1>
                      <select>
                        <option>Sort by: All</option>
                        <option>Beef</option>
                        <option>Breakfast</option>
                        <option>Chicken</option>
                        <option>Lamb</option>
                        <option>Pork</option>
                        <option>Pasta</option>
                        <option>Dessert</option>
                        <option>Side</option>
                        <option>Starter</option>
                        <option>Seafood</option>
                        <option>Vegetarian</option>
                        <option>Miscellaneous</option>
                      </select>
                    </div>

                    <div className='mealWithVideo'>
                      <div className='row g-4'>
                        {
                          loading ? (
                            Array.from({ length: 4 }).map((_, index) => (
                              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                                <a
                                  className="singleMeal position-relative text-light"
                                  href={playVideo}
                                  rel="noreferrer"
                                  target='_blank'
                                >
                                  <div className="imgSingleMeal">
                                    <img src='' alt="" className='placeholder'/>
                                  </div>
                                  <div className="detailsSigleMeal">
                                    <div className="playVideo">
                                      <FontAwesomeIcon icon={faPlay} />
                                    </div>
                                    <div className="textMeal">
                                      <h6 className='placeholder h-100 w-100'></h6>
                                      <p className='placeholder h-100 w-100'></p>
                                    </div>
                                  </div>
                                </a>
                              </div>

                            ))
                          ) : (
                            mealVideos.map((oneMeal) => {
                              // console.log("data Meal from home: "+ oneMeal)
                              return (
                                <div
                                  className="col-12 col-sm-6 col-md-4 col-lg-3"
                                  key={oneMeal.idMeal}
                                >
                                  <a
                                    className="singleMeal position-relative"
                                    href={playVideo}
                                    rel="noreferrer"
                                    target='_blank'
                                    onClick={() => setPlayVideo(oneMeal.strYoutube)}
                                  >
                                    <div className="imgSingleMeal">
                                      <img src={oneMeal.strMealThumb} alt="" />
                                    </div>
                                    <div className="detailsSigleMeal">
                                      <div className="playVideo">
                                        <FontAwesomeIcon icon={faPlay} />
                                      </div>
                                      <div className="textMeal">
                                        <h6>{oneMeal.strMeal}</h6>
                                        <p>{oneMeal.strArea}</p>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              );
                            })
                          )
                        }
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ---------------  Subscripe  --------------- */}
              
              <div className="Subscripe sec-4">
                <div className="container-fluid container-lg">
                  <div className="card">
                    <h2 className="header mb-5">
                      Be the first to know about the latest deals, receive
                      new trending recipes &amp; more!
                    </h2>

                    <form className='d-flex align-items-center gap-3'>
                      <input
                        type="email"
                        className="rounded-pill"
                        required
                        placeholder="Email Address"
                        pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                        id="useremail"
                      />

                      <button type="submit" className="btn general-btn rounded-pill bg-warning">
                        subscribe
                      </button>
                    </form>

                  </div>
                </div>
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

export default Home
