import React from 'react'
import './Search.css'

// Imported pages ======>
import Navbar from '../../layout/Navbar/Navbar'
import Footer from '../../layout/Footer/Footer'
import SearchContent from '../../components/SearchContent/SearchContent';



const Search = () => {
  return (
    <div className="SearchPage">
      <div>
        <Navbar />
      </div>

      <div className="SearchContent">
        <SearchContent/>
      </div>

      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default Search
