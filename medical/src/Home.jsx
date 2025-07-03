import React from 'react'
import Header from './Header'
import Grid from '@mui/material/Grid'
import Carousel from 'react-bootstrap/Carousel'

function Home() {
  return (
    <div>
      
      <div className="flex flex-column item-centre justify-center">
        {/* Image Slider */}
        <Carousel className="w-[99.99%] h-[500px]" interval={100000} pause={false}>
          <Carousel.Item>
            <img
              className="d-block w-100 h-[500px] object-cover"
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First Slide</h3>
              <p>Description for first slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-[500px] object-cover"
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second Slide</h3>
              <p>Description for second slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-[500px] object-cover"
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third Slide</h3>
              <p>Description for third slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* ...rest of your layout */}
        <div className="bg-yellow-500 w-full h-screen flex  items-center justify-center">
          <div className="h-screen bg-info flex-1">
            <div className="h-[80%] w-[80%] bg-fuchsia-300  border rounded"></div>
          </div>

              <div className="h-screen bg-red-400 flex flex-2 items-center justify-center">
            <div className="h-[95%] w-[90%] bg-fuchsia-300 border rounded"></div>
          </div>

          <div className="h-screen bg-yellow-400 flex-1"></div>
        </div>
      </div>
    </div>
  )
}

export default Home