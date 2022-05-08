import React, { useEffect } from 'react'
import hoverEffect from 'hover-effect'

import image from './images/image.jpg'
import image2 from './images/image2.jpg'
import overlay from './images/overlay.jpg'

const App = () => {
  useEffect(() => {
      var image_animate = new hoverEffect({
          parent: document.querySelector('.item-image'),
          intensity: 0.5,
          image1: image,
          image2: image2,
          displacementImage: overlay
      })
  })

  return (
  <div className='App'>
      <div className='container'>
          <div className='item'>
              <div className='item-header'>
                  <div className='item-header-heading'>
                      #endsars
                  </div>
                  <div className='item-header-heading2'>
                      20/10/20
                  </div>
              </div>
              <div className='item-image'></div>
              <div className='item-footer'>
                  <div className='item-footer-qoute'>
                      fighting for our lives.
                  </div>
              </div>
          </div>
      </div>
  </div>
  )
}

export default App