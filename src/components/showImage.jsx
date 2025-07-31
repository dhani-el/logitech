
import backgroundImage from "../assets/background_shadow.png"


export default function ShowImage({imageSrc}){
    return <div className={`h-full w-[60%] flex items-center justify-center relative  `}>
                <img src={backgroundImage} className="h-[100%] absolute z-[1] opacity-40"/>
                <img src={imageSrc} className="h-[85%] w-auto z-[2]"/>
    </div>
}