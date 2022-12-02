import React, {useState} from 'react';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";
import "./slider.scss"

const Slider = () => {
    // const [ index, setIndex] = useState(0);

    const [currentImage, setCurrentImage] = useState(0);


    const images = [
        "/img/featured1.jpg",
        "/img/featured2.jpg",
        "/img/featured3.jpg",
        "/img/featured2.jpg",
      ];

    //   const handleArrow = (direction) => {
    //     if(direction === "left") { 
    //         setIndex(index !== 0 ? index - 1 : 3)
    //     }
    //     if (direction === "right") {
    //         setIndex(index !==3 ? index + 1 : 0)
    //     }
            
        
    //   }


      const nextSlide = () => {
  
        setCurrentImage( currentImage >=3 ? 0 : currentImage + 1)
        
      }
      const prevSlide = () => {
        
        setCurrentImage(currentImage <= 0 ? 3  : currentImage - 1)
      }
    


console.log(prevSlide)


  return (
    <div className='slider'>
        <div className="arrowContainer">
            <img src="/img/arrowl.png" className='left' onClick={prevSlide}/>
        </div>
        {/* <div className="wrapper" style={{transform:`translateX(${-100*currentImage}vw)`}}> */}
        <div className="wrapper">
        {images.map((img, index) => (
            <div 
            className={index === currentImage ? 'active' : 'slide'}
            key={index}
            
            > 
               {index === currentImage && (
              <img src={img} className="img" />
            )}
            </div>
          ))}
           

        </div>
        <div className="arrowContainer">
            <img src="/img/arrowr.png" className='right' onClick={nextSlide} />

        </div>

    </div>
  )
}

export default Slider