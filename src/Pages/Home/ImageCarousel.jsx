import React from 'react';
import { Carousel} from 'flowbite-react';

export default function ImageCarousel() {
    
  return (
    <div  style={{height: "500px"}}>
      <Carousel>
        <img src="bg-image-1.jpeg"  alt="bg-1" />
        <img src="bg-image-2.jpeg"  alt="bg-2" />
        <img src="bg-image-3.jpeg"  alt="bg-3" />
        <img src="bg-image-4.jpeg"  alt="bg-4" />
        <img src="bg-image-5.jpeg"  alt="bg-5" />
        <img src="bg-image-6.jpeg"  alt="bg-6" />
      </Carousel>
    </div>
  )
}
