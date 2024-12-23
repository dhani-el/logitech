




export default function ShowText({title,body}){
    return <div className="text-white w-[40%] flex flex-col gap-4">
                <h3 className="text-6xl font-bold">{title}</h3>
                <p className="text-sm">{body}</p>
                <button className="w-fit font-bold border-solid rounded-2xl border-blue-300 border-[0.1rem] p-2">PLAY ADVANCED</button>
    </div>
}