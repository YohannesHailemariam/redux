import React from 'react'
import { ProfileCard } from './components/ProfileCard'
import { UserForm } from './components/UserForm'
import { UserDetails } from './components/UserDetails'
import { useDispatch } from 'react-redux'
import { AppDispatch } from './store'
import { fetchPostsThunk } from './store/posts/postsThunk'

function App() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <ProfileCard />
      <UserForm />
      <UserDetails />
      <h1>Posts</h1>
      <button onClick={() => dispatch(fetchPostsThunk())}>Fetch Posts</button>
    </div>
  )
}

export default App
