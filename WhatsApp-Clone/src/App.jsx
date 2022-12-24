import React from 'react'
import ChatHeader from './components/ChatHeader'
import Contacts from './components/Contacts'
import ProfileHeader from './components/ProfileHeader'
import Textbox from './components/Textbox'

const App = () => {
  return (
    <div className='bg-black' style={{ height: "100vh" }}>
      <div className='flex'>
        <ProfileHeader />
        <ChatHeader />
      </div>
      <div className='flex'>
        <div className='ml-6 mr-1 mt-2 mb-2 pt-2 pb-2'>
          <Contacts name="Name" disc="Discription of the last message" />
        </div>
        <Textbox />
      </div>
    </div>
  )
}

export default App

