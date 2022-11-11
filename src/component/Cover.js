import React from 'react'
import coverImage from '../images/cover-image.jpg'

const Cover = () => {
  return (
    <div className="hero h-96" style={{backgroundImage: `url(${coverImage})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Shop Cart</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Explore</button>
    </div>
  </div>
</div>
  )
}

export default Cover
