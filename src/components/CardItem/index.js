// Write your code here.
import './index.css'

const CardDetails = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-item`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="image-container">
        <img className="card-image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardDetails
