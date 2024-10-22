import PropTypes from 'prop-types'
const Cooking = ({cook}) => {
    console.log(cook)
    const {recipe_name,preparing_time,calories,recipe_id}=cook
    return (
        <div>
            {/* <h2>{recipe_name}</h2>
            <p>{preparing_time}</p>
            <p>{calories}</p>
            <button className='px-5 py-2 font-bold bg-primari rounded-full'>Preparing</button> */}
          <table className="table">
          <tr>
        <th>{recipe_id}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time} min</td>
        <td>{calories} calories</td>
        <td><button className='bg-primari px-4 py-2 rounded-full font-bold'>Preparing</button></td>
      </tr>


          </table>




            </div>
  
    
  

    );
};
Cooking.propTypes = {
    cook:PropTypes.object
}

export default Cooking;