import React from 'react' 
import Navbar from '../components/Navbar'
import CreateBar from '../components/CreateBar'
import PostView from '../components/PostView'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <PostView/>
        <PostView/>
        <PostView/>
        <CreateBar/>
    </div>
  )
}

export default Home