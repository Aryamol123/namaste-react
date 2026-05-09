import { CDN_URL } from '../utils/constants'

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRatingString, sla } =
    resData?.info
  const styleCard = {
    backgroundColor: '#f0f0f0'
  }
  return (
    <div className='res-card' style={styleCard}>
      <img src={CDN_URL+cloudinaryImageId} alt='res-logo' className='res-logo' />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRatingString} Rating</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}

export default RestaurantCard
