

import Banner from './component/Banner'
import Header from './component/Header'
import OurRecipe from './component/OurRecipe'
import RecipeCard from './component/RecipeCard'
import SideBar from './component/SideBar'

function App() {
  

  return (
    <>
   <div className='w-11/12 mx-auto'>
   <Header/>
   <Banner/>
   <OurRecipe/>
   <section className='grid grid-cols-5'>
    <RecipeCard/>
    <SideBar/>

   </section>
   </div>
    
    
      
    </>
  )
}

export default App
