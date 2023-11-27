import { useEffect, useState } from "react"

export const Carousel = ({cards})=>{
    // some important control functions
    const [currentIndex,setCurrentIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(autoNextSlide, 3000);    
        return () => clearInterval(intervalId);
      }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex)=>(prevIndex + 1)%cards.length);
    }
    const prevSlide = () => {
        setCurrentIndex((prevIndex)=>(prevIndex - 1 +cards.length)%cards.length);
    }
    const moveToSlide = (n)=>{
        console.log(`the n is ${n}`);

        setCurrentIndex((prevIndex)=>(n));
    }

    const getClassName = (index)=>{
        let value = "dot";
        if(currentIndex == index){
            return `${value} active`;
        }
        return value;
    }

    const autoNextSlide = ()=>{
        nextSlide();
    }

    
    return (
        <div className="scroller">
            <div className="carousel">
                    {cards.map((card,index)=>{
                        return(
                            <div className="item">
                                {card}
                            </div>
                        )
                    })} 
            </div>
            <div className="carousel">
                    {cards.map((card,index)=>{
                        return(
                            <div className="item">
                                {card}
                            </div>
                        )
                    })} 
            </div>
            {/* <div className="dots">
                    {cards.map((card,index)=>{
                        return(
                            <span key={index} className={getClassName(index)} onClick={()=>{
                                if (currentIndex != index){
                                    moveToSlide(index)}}
                                }/>
                        )
                    })}
            </div>   */}
        </div>   
    )
}