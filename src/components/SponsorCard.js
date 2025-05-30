function SponsorCard(props){
    return (
        <div className="rounded-lg overflow-hidden shadow-lg backdrop-blur-sm backdrop-brightness-75 flex flex-col items-center justify-center w-50 h-64 p-4 sticky"
                        // style={{border:"5px solid white"}}
>

          <a href={props.website} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center mb-2 h-40 fill">
              <img
                src={props.logo}
                alt={props.name}
                className="h-full object-contain"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </div>
            {/* <h2 className="text-xl m-2 text-white text-center font-bold">{props.name}</h2> */}
          </a>
        </div>
    )
}

export default SponsorCard;