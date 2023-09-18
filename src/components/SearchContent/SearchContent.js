import React, { useEffect, useState } from 'react'
import './SearchContent.css'
import MealItem from '../MealItem/MealItem';

// Imported Icons ======>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Imported Paginate ======>
import ReactPaginate from 'react-paginate';


const SearchContent = () => {
    
    const [valueSearch, setValueSearch] = useState('');
    const [meal, setMeal] = useState([]);
    const [valueSelect, setValueSelect] = useState('Sort by: All');
    const [loading, setLoading] = useState(true);
    



    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (mealId) => {
        let updatedFavorites;
        if (favorites.includes(mealId)) {
            updatedFavorites = favorites.filter((id) => id !== mealId);
        } else {
            updatedFavorites =[...favorites, mealId];
        }
        setFavorites(updatedFavorites);
        localStorage.setItem('FavoriteMeal', JSON.stringify(updatedFavorites));
    };

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('FavoriteMeal'));
        if (storedFavorites) {
            setFavorites(storedFavorites);
        }
    }, []);
    
    
    
    const SearchMeal = (e) => {
        if(e.key === "Enter")
        {
            setLoading(true);
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${valueSearch}`)
            .then(response => response.json())
            .then(data => {
                setMeal(data.meals);
                setLoading(false);
                localStorage.setItem('dataMealSearch', JSON.stringify(data.meals));
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
        }
    }

    // Do Paginate =====================================================>
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8;

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = meal?.slice(itemOffset, endOffset) || [];
    const pageCount = meal?.length ? Math.ceil(meal.length / itemsPerPage) : 0;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    // console.log('meal: ',meal)

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % meal.length;
        // console.log(
        // `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        setItemOffset(newOffset);
    };
    // =================================================================


    return (
        <>
            <div className="container-fluid container-lg d-grid">
                <div className="row justify-content-between g-4">
                    <div className="col-12 col-md-6">
                    <div className="divSearch">
                        <FontAwesomeIcon icon={faSearch} />
                        <input
                        type="search"
                        placeholder="Search for recipes..."
                        onChange={(e) => setValueSearch(e.target.value)}
                        onKeyPress={SearchMeal}
                        value={valueSearch}
                        />
                    </div>
                    </div>

                    <div className="col-3 text-end">
                    <select onChange={(e) => setValueSelect(e.target.value)}>
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
                </div>

                <div className="divFood my-5">
                    <div className="row g-5">
                        {valueSearch.length === 0  || meal == null? (
                            <p className="notFound">Not found</p>
                            ) : ( 
                                loading ? (
                                    <div className='col-6 col-md-4 col-lg-3'>
                                        <div className="contentFood">
                                            <div className='bgFood'></div>
                                            <div className="img-food mb-3">
                                                <img src='' alt="" className='placeholder placeholder-img w-100'/>
                                            </div>
                                            <div className="details">
                                                <h6 className='placeholder h-100 w-100'></h6>
                                                <div className="placeholder h-100 w-100"></div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                currentItems.map((res) => {
                                    if (
                                        valueSelect === res.strCategory ||
                                        valueSelect === "Sort by: All"
                                        ) {
                                            return (
                                                <MealItem 
                                                    data={res} 
                                                    isFavorite={favorites.includes(res.idMeal)}
                                                    toggleFavorite={toggleFavorite} 
                                                    key={res.idMeal}
                                                />
                                            )
                                    }
                                console.log(meal);
                            })
                        )
                    )}
                    </div>
                </div>
                
                <div className='pagination'>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=" >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={2}
                        pageCount={pageCount}
                        previousLabel="< "
                        renderOnZeroPageCount={null}
                        pageLinkClassName='pageNum'
                        previousLinkClassName='pageNum'
                        nextLinkClassName='pageNum'
                        activeLinkClassName='activePageNum'
                    />
                </div>
            </div>

        </>
    );
}

export default SearchContent