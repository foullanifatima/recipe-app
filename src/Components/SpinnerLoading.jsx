import oval from '../assets/Oval.png'

function SpinnerLoading() {
  return (
    <div className="row container d-flex justify-content-center align-items-center h-100 spinner">
      <img src={oval} alt="spinner" className="img-fluid" />
    </div>
  )
}

export default SpinnerLoading
