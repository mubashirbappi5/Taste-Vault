import PropTypes from 'prop-types'

const Cooking = ({cook,handlepreparing,totaltimeAndcalories}) => {
  
  
    console.log(cook)
    const {recipe_name,preparing_time,calories,recipe_id}=cook
    return (
        <div>
           
          <table className="table">
            <tbody>
          <tr>
        <th>{recipe_id}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time} min</td>
        <td>{calories} calories</td>
        <td><button onClick={ ()=>{handlepreparing(recipe_id), totaltimeAndcalories(preparing_time,calories)}} className='bg-primari px-4 py-2 rounded-full font-bold'>Preparing</button></td>
      </tr>
      </tbody>


          </table>




            </div>
  
    
  

    );
};
Cooking.propTypes = {
    cook:PropTypes.object,
   
    handlepreparing:PropTypes.func.isRequired,
    totaltimeAndcalories:PropTypes.func.isRequired
}

export default Cooking;