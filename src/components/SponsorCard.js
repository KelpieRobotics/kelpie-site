function SponsorCard(props){
    return (
        // <li>
        //<div className="rounded-lg overflow-hidden shadow-lg backdrop-blur-sm backdrop-brightness-75 flex flex-col items-center justify-center h-64 p-4">
        <div className="rounded-lg overflow-hidden shadow-lg backdrop-blur-sm backdrop-brightness-75 flex flex-col items-center justify-center h-64 p-4">

          <a href={props.website} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center mb-2 h-40 fill">
              <img
                src={props.logo}
                alt={props.name}
                // className="h-auto max-w-full max-h-full"
                className="h-full object-contain"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </div>
            <h2 className="text-xl m-2 text-white text-center font-bold">{props.name}</h2>
          </a>
        </div>
      // </li>
    )
}

export default SponsorCard;