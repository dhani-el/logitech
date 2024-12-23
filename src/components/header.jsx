

import logo from "../assets/logo_Logitech.png"

const links = [
    {
        url:"#home",
        title:"Home"
    },
    {
        url:"#about",
        title:"About"
    },
    {
        url:"#product",
        title:"Product"
    },
    {
        url:"#specification",
        title:"Specification"
    }
]

export default function Header(){
    return <div className="w-full flex justify-between py-4">
                <Logo/>
                <NavLinks links={links}/>
           </div>
}


function Logo(){
    return <div className="landscape:w-[8%]">
                <img src={logo} className="w-full "/>
            </div>
}

function NavLinks({links=[]}){
    return <div className="w-[40%] flex justify-start gap-6">
                {
                    links.map(link=>{
                        return <a href={link?.url} className="text-white">{link?.title}</a>
                    })
                }
    </div>
}