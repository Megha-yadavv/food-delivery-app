import React from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import SideBar from '../../components/SideBar/SideBar'

const Home = () => {

  const[category, setCategory] = useState("All")

  return (
    <div className='home'>
    <SideBar className='menu-bar'/>
    <Header/>
    <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category}/>
    <AppDownload />
    </div>
  )
}

export default Home