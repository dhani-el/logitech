
import backgroundImage from "/micebackground.jpg"


export default function ShowImage({imageSrc}){
    return <div className={`h-full w-[60%] flex items-center justify-center relative  `}>
                <img src={backgroundImage} className="h-[90%] w-[60%] absolute z-[1] rounded-[100%] opacity-60"/>
                <img src={imageSrc} className="h-[85%] w-auto z-[2]"/>
    </div>
}