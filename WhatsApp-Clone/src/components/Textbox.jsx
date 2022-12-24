import React from 'react'

function Textbox() {
  return (
    <div  className='flex justify-center items-center fixed bottom-6 right-2 h-12 bg-[#495963]' style={{width:"70%"}}>
      <input className='h-10' style={{width:"90%", borderRadius: "8px", backgroundColor: "#2b343a", color: "#858585", textAlign: "center" }} defaultValue="Enter chat" type="text" name="" id="" />
    </div>
  )
}

export default Textbox
