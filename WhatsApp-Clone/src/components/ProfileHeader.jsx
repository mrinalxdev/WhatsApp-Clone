import React from 'react'

export default function ProfileHeader() {

  return (

    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className='ml-6 mr-1 mt-2 mb-2 pt-2 pb-2 w-1/3'>
        <div className='flex items-center bg-[#343f46] mb-1 mt-1'>
          <img className='w-12 h-12 ml-[10px] rounded-full cursor-pointer' src="https://pps.whatsapp.net/v/t61.24694-24/168151809_673481763878158_7145955530942284383_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSmCOZofvC01SufFdF8JrRhuT-7GNfCf7FbxS1fQ7mW3A&oe=63B086BC" alt="" />
          <div className='flex w-1/4 justify-between' style={{ width: "40%", marginLeft: "46%", marginRight: "10px" }}>
            <img className='w-8 h-8 cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/4121/4121044.png" alt="" />
            <img className='w-8 h-8 cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/4785/4785876.png" alt="" />
            <img className='w-8 h-8 cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/1370/1370907.png" alt="" />
          </div>
        </div>
        <div className='flex h-10 items-center mt-1 -mb-1 justify-between'>
          <input className='mb-1' style={{ height: "28px", width: "80%", marginLeft: "10px", borderRadius: "6px", backgroundColor: "#343f46", color: "#858585", textAlign: "center" }} defaultValue="Search your chat" type="text" name="" id="" />
          <span className="cursor-pointer material-symbols-outlined text-4xl" style={{ marginRight: "8px", color: "#343f46", fontSize: "38px" }}>
            filter_list
          </span>
        </div>
      </div>
    </>
  )
}
