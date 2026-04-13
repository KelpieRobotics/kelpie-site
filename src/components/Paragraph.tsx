// import '@/styles/globals.css' 

export const Paragraph= ({data})=>{
    return (
        <div className="paragraph">

            {data}

        </div>
    )
}

export function ParagraphSection({ title, description, flip = false , otherside}) {
  return (
    <section className="bg-white p-4 relative overflow-hidden">
      <div className="relative z-10">
        <div className={`flex flex-col ${flip ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>

          {/* Text */}
          <div className={`w-full md:w-1/2 ${flip ? 'text-right' : 'text-left'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">{title}</h2>
            
            {/* Separator — pushed to the right when flipped */}
            <div className={`w-14 h-1 rounded-full mb-8 ${flip ? 'ml-auto' : ''}`} style={{ backgroundColor: '#00A99D' }} />
            
            <div className="text-lg text-gray-600 leading-relaxed">{description}</div>
          </div>

          {/* Decoration */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
           {otherside}
          </div>

        </div>
      </div>
    </section>
  );
}