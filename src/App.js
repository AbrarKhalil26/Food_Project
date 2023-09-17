import React from 'react';
import './App.css';

// Imported route =====>
import { BrowserRouter , Routes, Route } from 'react-router-dom';

// imported Bootstrap =====>
import 'bootstrap/dist/css/bootstrap.min.css';

// Imported Pages ====>
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUP/SignUp';
import Contact from './pages/Contact/Contact';
import Favorite from './pages/FavoriteMeal/Favorite';

// Imported Loading ======>
const LoadingHome  = React.lazy(() => import('./pages/Home/Home'));
const LoadingRecipe  = React.lazy(() => import('./pages/Recipe/Recipe'));
const LoadingSearch  = React.lazy(() => import('./pages/Search/Search'));



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={
            <React.Suspense fallback='Loading...'>
              <LoadingHome/>
            </React.Suspense>
          }/>

          <Route path='/recipe' element={
            <React.Suspense fallback='Loading...'>
              <LoadingRecipe/>
            </React.Suspense>
          }/>

          <Route path='/search' element={
            <React.Suspense fallback="Loading...">
              <LoadingSearch/>
            </React.Suspense>
          }/>

          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>


          <Route path='/favorite' element={<Favorite/>}/>
        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
