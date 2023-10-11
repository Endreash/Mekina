import { Link } from 'react-router-dom'
//import Slider from '../components/Slider'
import rentCategoryImage from '../assets/jpg/rent.jpg'
import sellCategoryImage from '../assets/jpg/sell.jpg'

function Explore() {
  return (
    <div className='explore'>
      <header>
        <p className='pageHeader'>Explore</p>
      </header>
      <main>
        <p className='exploreCategoryHeading'>Categories</p>
        <div className='exploreCategories'>
          <Link to='/category/rent'>
            <img
              src={rentCategoryImage}
              alt='rent'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Cars for rent</p>
          </Link>
          <Link to='/category/sale'>
            <img
              src={sellCategoryImage}
              alt='sell'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Cars for sale</p>
          </Link>
        </div>

        {/* <p className='section__title'>categories</p> */}
        <div className='project__wrapper'>
          
          <Link to= "/category/rent" >
            <img
          src={rentCategoryImage}
          alt='rent'
          className='project__img'
          />
          <div className='project__wrapper_bg'></div>
          <p className='project__description'>Rent</p>
          </Link>
          
        </div>

        <div className='project__wrapper'>

        <div className='project__wrapper_bg'>
          
          <Link to= "/category/sell" >
            <img
          src={sellCategoryImage}
          alt='rent'
          className='project__img'
          />
          </Link>
          <p className='project__description'>Sell</p>
        </div>
        </div>

        {/* <div className='container'>
          <div className='row'>
          <Link to='/category/rent'>
            <img
              src={rentCategoryImage}
              alt='rent'
              className='project__img'
            />
            <div class="project__wrapper--bg"></div>
            <p className='exploreCategoryName'>Cars for rent</p>
              <div class="project__description"></div>
          </Link>
          <Link to='/category/sale'>
            <img
              src={sellCategoryImage}
              alt='sell'
              className='project__img'
            />
            <p className='project__description--para'>Cars for sale</p>
          </Link>
          </div>
        </div> */}
         <p>kaltemechachu fuck off </p>
      </main>
    </div>
  )
}

export default Explore