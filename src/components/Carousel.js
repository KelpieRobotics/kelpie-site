import { useState } from "react"

export const Carousel = ({cards})=>{
    const [currentIndex,setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex)=>(prevIndex + 1)%cards.length);
    }
    const prevSlide = () => {
        setCurrentIndex((prevIndex)=>(prevIndex - 1)%cards.length);
    }
    return (
        <div className="carousel">
            <button id='prev' className='btn' onClick={prevSlide}>&lt;</button>

            <div className="item">
                {cards[currentIndex]}
                {/* {cards[currentIndex]} */}
            </div>

            <button id='next' className="btn" onClick={nextSlide}>&gt;</button>

        </div>
    )
}