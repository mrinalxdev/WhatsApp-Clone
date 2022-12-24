import React from 'react'

function ChatHeader() {
    return (
        
            
            <div className='flex bg-[#343f46] ml-1 mt-5 mb-2 pt-1 pb-1 w-9/12 h-12 items-center' style={{}}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <img className='w-12 h-12 ml-[10px] rounded-full cursor-pointer' src="https://pps.whatsapp.net/v/t61.24694-24/135206992_763659561312490_78105507204237184_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdT0s1FRM5WapZKIes25YcM0U6LmIVWmL4-pvvgZkCxuGA&oe=63B2BA7B" alt="" />
                <div className='flex mt-1 mb-1' style={{width: "fit-content" ,marginLeft: "80%"}}>
                    <span className="material-symbols-outlined cursor-pointer material-symbols-outlined text-4xl ml-4 mr-4" style={{ color: "black", fontSize: "38px" }}>
                        search
                    </span>
                    <span className="material-symbols-outlined cursor-pointer material-symbols-outlined text-4xl ml-4 mr-4" style={{ color: "black", fontSize: "38px" }}>
                        more_vert
                    </span>
                </div>
            </div>
        
    )
}

export default ChatHeader
