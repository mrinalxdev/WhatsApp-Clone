import React from 'react'
import ChatHeader from './components/ChatHeader'
import Contacts from './components/Contacts'
import ProfileHeader from './components/ProfileHeader'

const App = () => {
  return (
    <div className='bg-black'>
      <div className='flex'>
        <ProfileHeader />
        <ChatHeader />
      </div>
      <Contacts name="Name" disc="Discription of the last message" />
    </div>
  )
}

export default App

