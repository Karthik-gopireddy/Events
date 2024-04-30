// Write your code here
import './index.css'

const EventItem = props => {
  const {Items, showEvent} = props

  const {imageUrl, name, location, registrationStatus} = Items
  const onImagedetails = () => {
    // console.log(registrationStatus)
    showEvent(registrationStatus)
  }
  return (
    <li className="listitems">
      <button className="itemsimgbutton" type="button" onClick={onImagedetails}>
        <img className="itemimage" src={imageUrl} alt="event" />
      </button>
      <p className="itemsnames">{name}</p>
      <p>{location}</p>
    </li>
  )
}
export default EventItem
