import React from 'react'

function Contacts(props) {
    return (
        <div className='flex items-center m-6 mt-1 mb-1 pt-1 pb-1 bg-black hover:bg-[#343f46]' style={{ width: "34%" }}>
            <img className='w-12 h-12 ml-[10px] rounded-full cursor-pointer' src="https://pps.whatsapp.net/v/t61.24694-24/168151809_673481763878158_7145955530942284383_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSmCOZofvC01SufFdF8JrRhuT-7GNfCf7FbxS1fQ7mW3A&oe=63B086BC" alt="" />
            <div className='m-2 pt-1 pb-1' style={{ width: "85%", marginLeft: "5%" }}>
                <h3 className='' style={{ color: "#929292" }}>{props.name}</h3>
                <p className='' style={{ color: "#929292" }}>{props.disc}</p>
            </div>
        </div>
    )
}

export default Contacts
