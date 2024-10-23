

import { useState } from 'react'
import Banner from './component/Banner'
import Header from './component/Header'
import OurRecipe from './component/OurRecipe'
import RecipeCard from './component/RecipeCard'
import SideBar from './component/SideBar'
import Footer from './component/Footer'

function App() {
  const [sidebar,setsidebar] = useState([])
  const [preparing,setpreparing] = useState([])
  const[totaltime, settotaltime] = useState(0)
  const[totalcalories, settotalcalories] = useState(0)

  const handlewentcook = (resipe) =>{
    console.log("add recipe",resipe)
    const newsidebar =[...sidebar,resipe]
    setsidebar(newsidebar)
  }
  const handlepreparing = (id) =>{
    const deleteditem = sidebar.find(resipe => resipe.recipe_id === id)
    const updatedresipe = sidebar.filter(resipe => resipe.recipe_id !== id)
    setsidebar(updatedresipe)
    const Currentlyrecipe = [...preparing,deleteditem]
    setpreparing(Currentlyrecipe)
  }
  const totaltimeAndcalories=(time,calories) => {
    console.log(time,calories)
    settotaltime(totaltime + time)
    settotalcalories(totalcalories + calories)




  }
  

  return (
    <>
   <div className='w-11/12 mx-auto'>
   <Header/>
   <Banner/>
   <OurRecipe/>
   <section className=' grid grid-cols-1 md:grid-cols-5 gap-6'>
    <RecipeCard  handlewentcook={ handlewentcook}/>
    <SideBar sidebar={sidebar}
               handlepreparing={handlepreparing}
               preparing={preparing}
               totaltimeAndcalories={totaltimeAndcalories}
               totaltime={totaltime}
               totalcalories={totalcalories}
    
    />

   </section>
   
   </div>
   <Footer/>
    
    
      
    </>
  )
}

export default App
