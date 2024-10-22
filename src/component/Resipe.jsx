import PropTypes from 'prop-types';
import { MdOutlineAccessTime } from "react-icons/md";
import { FaHotjar } from "react-icons/fa";



const Resipe = ({resipe,handlewentcook}) => {
   
    const {recipe_name,recipe_image,short_description,preparing_time,calories,ingredients} =resipe
    return (
        <div>
           
           <div className="card bg-base-100  border-2">
  <figure className="px-6 pt-4">
    <img
      src={recipe_image}
      alt="recipe"
      className="rounded-xl" />
  </figure>
  <div className="p-7">
    <h2 className="card-title font-semibold text-xl">{recipe_name}</h2>
    <p className='text-dark2'>{short_description}</p>
    <div className="divider"></div>
    <h5 className='text-lg font-medium'>ingredients:{ingredients.length}</h5>
    {
        ingredients.map((item,idx) => <li className='text-dark2' key={idx}>{item}</li>)
    }
    <div className="divider"></div>
    <div className='flex justify-items-start gap-10'>
    <p className='text-dark2 flex items-center gap-2'><MdOutlineAccessTime />{preparing_time}min</p>
    <p className='text-dark2 flex items-center gap-2'><FaHotjar />{calories}calories</p>
    </div>
    <div className="card-actions mt-4">
    <button onClick={()=>handlewentcook(resipe)} className=" px-5 py-2 rounded-full bg-primari text-black font-bold hover:bg-black hover:text-white hover:border">Want to Cook</button>
    </div>
  </div>
</div>
            
        </div>
    );
};
Resipe.propTypes = {
    resipe:PropTypes.object,
    handlewentcook:PropTypes.func.isRequired
}

export default Resipe;