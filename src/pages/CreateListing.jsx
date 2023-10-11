import { useState, useEffect, useRef } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'

function CreateListing() {
  // eslint-disable-next-line
  const [selectedCategory, setSelectedCategory] = useState();
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    type: 'sell',
    name: '',
    prod: '',
    model: '',
    seller: '',
    location: '',
    engineType: 'benzine',
    driven: false,
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    condition: false,
    transmission: 'automatic',
  })

  const {
    type,
    name,
    prod,
    model,
    seller,
    location,
    engineType,
    offer,
    regularPrice,
    discountedPrice,
    images,
    condition,
    transmission,
  } = formData

  const auth = getAuth()
  const navigate = useNavigate()
  const isMounted = useRef(true)

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid })
        } else {
          navigate('/sign-in')
        }
      })
    }

    return () => {
      isMounted.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted])

  const onSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    if (discountedPrice >= regularPrice) {
      setLoading(false)
      toast.error('Discounted price needs to be less than regular price')
      return
    }

    if (images.length > 6) {
      setLoading(false)
      toast.error('Max 6 images')
      return
    }

  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  const filterBooks = (event) => {
    setMyCar(event.target.value)
  }

  const onMutate = (e) => {
    let boolean = null

    if (e.target.value === 'true') {
      boolean = true
    }
    if (e.target.value === 'false') {
      boolean = false
    }

    // Files
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }))
    }

    // Text/Booleans/Numbers
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }))
    }
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <div className='profile'>
      <header>
        <p className='pageHeader'>Create a Listing</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <label className='formLabel'>Sell / Rent</label>
          <div className='formButtons'>
            <button
              type='button'
              className={type === 'sale' ? 'formButtonActive' : 'formButton'}
              id='type'
              value='sale'
              onClick={onMutate}
            >
              Sell
            </button>
            <button
              type='button'
              className={type === 'rent' ? 'formButtonActive' : 'formButton'}
              id='type'
              value='rent'
              onClick={onMutate}
            >
              Rent
            </button>
          </div>

          <label className='formLabel'>Name</label>
          <input
            className='formInputName'
            type='text'
            id='name'
            value={name}
            onChange={onMutate}
            maxLength='32'
            minLength='10'
            required
          />

          <div className='formRooms flex'>
            <div>
              <label className='formLabel'>Production Date</label>
              <input
                className='formInputSmall'
                type='number'
                id='bedrooms'
                defaultValue={prod}
                onChange={onMutate}
                min='2000'
                max='2023'
                required
              />
            </div>
          </div>

          {/* <label className='formLabel'>Transmission</label> */}
          <div className="filter-container">
            <div className='formLabel'>Transmission</div>
            <div>
                <select
                    name="category-list"
                    id="category-list"
                    onChange={handleCategoryChange}
                >
                    <option value="">All</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                </select>
            </div>
            </div> 

            <select
                  id="filter"
                  onChange={(event) => filterBooks(event.target.value)}
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>


             <label className='formLabel'>Driven in Ethiopia</label>
          <div className='formButtons'>
            <button
              className={condition ? 'formButtonActive' : 'formButton'}
              type='button'
              id='parking'
              defaultValue={true}
              onClick={onMutate}
              min='1'
              max='50'
            >
              Yes
            </button>
            <button
              className={
                !condition && condition !== null ? 'formButtonActive' : 'formButton'
              }
              type='button'
              id='parking'
              defaultValue={false}
              onClick={onMutate}
            >
              No
            </button>
          </div>

          <label className='formLabel'>Seller</label>
          <input
            className='formInputName'
            type='text'
            id='seller'
            defaultValue={seller}
            onChange={onMutate}
            maxLength='32'
            minLength='10'
            required
          />
          <label className='formLabel'>Engine Type</label>
          <input
            className='formInputName'
            type='text'
            id='Engine'
            defaultValue={engineType}
            onChange={onMutate}
            maxLength='32'
            minLength='10'
            required
          />
          {/* <label className='formLabel'>Transmission</label>
          <input
            className='formInputName'
            type='text'
            id='transmission'
            defaultValue={transmission}
            onChange={onMutate}
            maxLength='32'
            minLength='10'
            required
          /> */}

          <label className='formLabel'>Address</label>
          <textarea
            className='formInputAddress'
            type='text'
            id='address'
            defaultValue={location}
            onChange={onMutate}
            required
          />

          <label className='formLabel'>Offer</label>
          <div className='formButtons'>
            <button
              className={offer ? 'formButtonActive' : 'formButton'}
              type='button'
              id='offer'
              value={true}
              onClick={onMutate}
            >
              Yes
            </button>
            <button
              className={
                !offer && offer !== null ? 'formButtonActive' : 'formButton'
              }
              type='button'
              id='offer'
              value={false}
              onClick={onMutate}
            >
              No
            </button>
          </div>

          <label className='formLabel'>Regular Price</label>
          <div className='formPriceDiv'>
            <input
              className='formInputSmall'
              type='number'
              id='regularPrice'
              value={regularPrice}
              onChange={onMutate}
              min='50'
              max='750000000'
              required
            />
            {type === 'rent' && <p className='formPriceText'>$ / Month</p>}
          </div>

          {offer && (
            <>
              <label className='formLabel'>Discounted Price</label>
              <input
                className='formInputSmall'
                type='number'
                id='discountedPrice'
                value={discountedPrice}
                onChange={onMutate}
                min='50'
                max='750000000'
                required={offer}
              />
            </>
          )}

          <label className='formLabel'>Images</label>
          <p className='imagesInfo'>
            The first image will be the cover (max 6).
          </p>
          <input
            className='formInputFile'
            type='file'
            id='images'
            onChange={onMutate}
            max='6'
            accept='.jpg,.png,.jpeg'
            multiple
            required
          />
          <button type='submit' className='primaryButton createListingButton'>
            Create Listing
          </button>
        </form>
      </main>
    </div>
  )
}

export default CreateListing