import { useEffect, useState } from "react";
import Resipe from "./Resipe";


const RecipeCard = () => {
    const [recipes, setrecipes] = useState([])
    useEffect(()=>{
        fetch("/recipe.json")
        .then(res=> res.json())
        .then(data => setrecipes(data))
    },[])
    return (
        <div className="col-span-3 grid grid-cols-2 gap-4">
            
            {
                recipes.map(resipe =><Resipe
                     key={resipe.id}
                     resipe={resipe}
                />
                    
                )
            }
            
        </div>
    );
};

export default RecipeCard;