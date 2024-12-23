

import logo from "../assets/Logitech_logo.png"

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
    return <div>
                <Logo/>
                <NavLinks links={links}/>
           </div>
}


function Logo(){
    return <div>
                <img src={logo}/>
            </div>
}

function NavLinks({links=[]}){
    return <div>
                {
                    links.map(link=>{
                        return <a href={link?.url}>{link?.title}</a>
                    })
                }
    </div>
}