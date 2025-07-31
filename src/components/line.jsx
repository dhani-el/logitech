


export default function VerticalLine({width,height,color,top,left,right,bottom}){
    return <div style={{left,right,bottom,top,height,borderLeftWidth:width,borderLeftColor:color,borderLeftStyle:"solid"}} className="absolute">

    </div>
}

