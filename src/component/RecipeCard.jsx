import { useEffect, useState } from "react";
import Resipe from "./Resipe";
import PropTypes from 'prop-types'



const RecipeCard = ({ handlewentcook}) => {
    const [recipes, setrecipes] = useState([])
    useEffect(()=>{
        fetch("/recipe.json")
        .then(res=> res.json())
        .then(data => setrecipes(data))
    },[])
    return (
        <div className="col-span-3  grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {
                recipes.map((resipe,idx)=><Resipe
                     key={idx}
                     resipe={resipe}
                     handlewentcook={handlewentcook}
                />
                    
                )
            }
            
        </div>
    );
};
RecipeCard.propTypes = {
    handlewentcook:PropTypes.func.isRequired
}

export default RecipeCard;