import PropTypes from 'prop-types'

const Cookingtwo = ({prepaired}) => {
    console.log(prepaired)
    const {recipe_name,preparing_time,calories,recipe_id}=prepaired

    return (
        <div>
             <table className="table">
            <tbody>
          <tr>
        <th>{recipe_id}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time} min</td>
        <td>{calories} calories</td>
        
      </tr>
      
      </tbody>


          </table>




            
        </div>
    );
};
Cookingtwo.propTypes = {
    prepaired:PropTypes.object,
    totaltime:PropTypes.number,
}

export default Cookingtwo;