import image from '../assets/Group.png'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div className="error-page">
      <div className="container text-center">
        <img src={image} alt="" className="notfound-img" />
        <h1>Page Not Found</h1>
        <p>
          We are sorry, the page you requested could not be found. <br></br>
          Please go back to the homepage
        </p>
        <Link to="/">
          <button className="button">Home Page</button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
