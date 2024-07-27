import React from 'react'
import { ProfileCard } from './components/ProfileCard'
import { UserForm } from './components/UserForm'
import { UserDetails } from './components/UserDetails'

function App() {
  return (
    <div>
      <ProfileCard />
      <UserForm />
      <UserDetails />
    </div>
  )
}

export default App
