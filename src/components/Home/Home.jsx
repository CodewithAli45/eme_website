import React from 'react'
import Header from '../Header/Header';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css';

export default function Home() {
  return (
    <div className='container'>
        <Header />
        <Carousel autoPlay // enable auto play
            interval={4000} // set the interval to 2 seconds
            infiniteLoop // enable infinite loop
            showThumbs={false} // hide the thumbnails
            showStatus={false} // hide the status indicator
            dynamicHeight // adjust the height dynamically
            >
            <img className='bg-image' src="bg-image-1.jpeg" alt="" />
            <img className='bg-image' src="bg-image-2.jpeg" alt="" />
            <img className='bg-image' src="bg-image-3.jpeg" alt="" />
            <img className='bg-image' src="bg-image-4.jpeg" alt="" />
            <img className='bg-image' src="bg-image-5.jpeg" alt="" />
            <img className='bg-image' src="bg-image-6.jpeg" alt="" />
        </Carousel>
    </div>
  )
}
