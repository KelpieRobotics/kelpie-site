// import '@/styles/globals.css' 

export const Paragraph= ({data})=>{
    return (
        <div className="paragraph">

            {data}

        </div>
    )
}

export function SectionTitle({children, divStyle=""}) {
  return (
    <div>
      <div className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">{children}</div>
      <div className={`w-14 h-1 rounded-full mb-8 ${divStyle}`} style={{ backgroundColor: '#00A99D' }} />
    </div>
  )
}

export function SectionText({children}){
  return (
    <div className="text-lg text-gray-600 leading-relaxed">{children}</div>
  )
}