import React from 'react'
import './Packet.css'

function Packet() {
  return (
    <div className='container'>
        <img src="img.png" alt="image"></img>
        <h1>Packet Notes</h1>
        <p>
          Send and receive mesaage without keeping your phone online.
          <br />
          Use Packet Notes on up to 4 linked device and one mobile phone
        </p>
        <h3>
          <i className="fa-solid fa-lock"></i>end-to-end encrypted
        </h3>
      </div>
  )
}

export default Packet
