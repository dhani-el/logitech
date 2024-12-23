import Header from "./components/header";
import VerticalLine from "./components/line";
import ShowText from "./components/showTexts";
import ShowImage from "./components/showImage";
import MouseOne from "./assets/mx-master-3s-mouse-top-view-graphite.png"
export default function Home(){
    return (
                <div className="w-screen overflow-x-hidden min-h-screen bg-black relative px-8">
                    <Header/>
                    <VerticalLine width={"0.02rem"} height={"85vh"} color={"white"} />
                    <VerticalLine width={"0.02rem"} height={"85vh"} color={"white"} right={"2rem"} />
                    <div className="flex items-center h-[80vh] w-full p-8">
                        <ShowText title={dummyText.title} body={dummyText.body} className="self-center"/>
                        <ShowImage imageSrc={MouseOne}  />
                    </div>
                </div>
    )
}


const dummyText = {
    title:"Forge your firepower",
    body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptatem? Corrupti accusantium dolor facilis sed voluptates officiis totam, magnam recusandae ipsum voluptate beatae! Quis optio asperiores vitae at quidem vero?"
}