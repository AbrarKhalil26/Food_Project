import React from 'react'
import './Contact.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Contact = () => {
  return (
    <div className='PageContact'>
      <div>
        <Navbar/>
      </div>

      <div className='Contact mt-0 mt-md-3'>
        <div className='container-fluid container-lg'>
          <div className='row justify-content-between align-items-center g-lg-3 g-5'>
            <div className='col-12 col-md-5'>
              <div className='details'>
                <h1>Hello, what's on your mind?</h1>
                <p>
                  Credibly administrate market positioning deliverables rather than clicks-and-mortar methodologies.
                  Proactively formulate out-of-the-box technology with clicks-and-mortar testing procedures. 
                  Uniquely promote leveraged web-readiness for standards compliant value. Rapidiously pontificate 
                  cooperative mindshare via maintainable applications.
                </p>
                <button className='btn general-btn text-light'>Schedule a call</button>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <form>
                <label>Name</label>
                <input type='text' name='Name' placeholder='' required/>

                <label>Email</label>
                <input type='email' name='email' placeholder='' required/>

                <label>Message</label>
                <textarea rows='5'  minLength={10}></textarea>
              
                <button type='submit' className='btn general-btn bg-warning'>Send Message</button>
              
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Contact
