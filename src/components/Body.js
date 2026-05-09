import RestaurantCard from './RestaurantCard'
import { resList } from '../utils/mockData'
import { useState } from 'react'

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList)


  return (
    <div className='body'>
      <button
        className='filter-btn'
        onClick={() => {
          const filteredRestaurants = listOfRestaurants.filter(
            res => res.info.avgRating > 4
          )
          setListOfRestaurants(filteredRestaurants)
        }}
      >
        Top Rated Restaurants
      </button>
      <div className='res-container'>
        {listOfRestaurants.map(restaurantData => (
          <RestaurantCard
            key={restaurantData.info.id}
            resData={restaurantData}
          />
        ))}
      </div>
    </div>
  )
}
export default Body
