import image from '../assets/Group.png'
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
        <button className="button">Home Page</button>
      </div>
    </div>
  )
}

export default NotFound
