

import { useState } from 'react'
import Banner from './component/Banner'
import Header from './component/Header'
import OurRecipe from './component/OurRecipe'
import RecipeCard from './component/RecipeCard'
import SideBar from './component/SideBar'

function App() {
  const [sidebar,setsidebar] = useState([])

  const handlewentcook = (resipe) =>{
    console.log("add recipe",resipe)
    const newsidebar =[...sidebar,resipe]
    setsidebar(newsidebar)
  }
  console.log(sidebar)
  

  return (
    <>
   <div className='w-11/12 mx-auto'>
   <Header/>
   <Banner/>
   <OurRecipe/>
   <section className='grid grid-cols-5 gap-6'>
    <RecipeCard  handlewentcook={ handlewentcook}/>
    <SideBar sidebar={sidebar}/>

   </section>
   </div>
    
    
      
    </>
  )
}

export default App
