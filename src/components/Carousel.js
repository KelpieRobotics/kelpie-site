export const Carousel = ({cards})=>{
    return (
        <div className="scroller">
            <div className="carousel">
                {cards.map((card,index)=>{
                    return(
                        <div className="item" key={index}>
                            {card}
                        </div>
                    )
                })} 
            </div>
        </div>   
    )
}
