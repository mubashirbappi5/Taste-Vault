import PropTypes from 'prop-types'
import Cooking from './Cooking';

const SideBar = ({sidebar}) => {
   
    return (
        <div className="col-span-2 border rounded-3xl p-6 space-y-5">
           <div>
           <h1 className=" text-center font-bold">Want to cook:{sidebar.length}</h1>
            <table className="table">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th>.</th>
      </tr>
    </thead>
    
           </table>

          {
            sidebar.map((cook,idx) =><Cooking key={idx} cook={cook}></Cooking>)
          }
           </div>


         <div className="space-y-4">
         <h1 className=" text-center font-bold ">Currently cooking: 02</h1> 
         <table className="table">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
       
      </tr>
    </thead>
    
           </table>
         </div>
        </div>
    );
};
SideBar.propTypes = {
    sidebar:PropTypes.array
}

export default SideBar;