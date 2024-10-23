import PropTypes from 'prop-types'
import Cooking from './Cooking';
import Cookingtwo from './Cookingtwo';

const SideBar = ({sidebar,handlepreparing,preparing,totaltimeAndcalories,totaltime,totalcalories}) => {
  console.log(preparing)
  console.log(totaltime)
   
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
            sidebar.map((cook,idx) =><Cooking key={idx} 
             cook={cook}
             handlepreparing={handlepreparing} 
             totaltimeAndcalories={totaltimeAndcalories}
            ></Cooking>)
          }
           </div>


         <div className="space-y-4">
         <h1 className=" text-center font-bold ">Currently cooking: {preparing.length}</h1> 
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
           {
            preparing.map((prepaired,idx)=> <Cookingtwo key={idx} prepaired={prepaired}  ></Cookingtwo>)
           }
        
        <p className='font-bold'>Total  time:{totaltime} min</p>
        <p className='font-bold'>Total  calories:{totalcalories} calories</p>
     
         </div>
        </div>
    );
};
SideBar.propTypes = {
    sidebar:PropTypes.array,
    preparing:PropTypes.array,
    handlepreparing:PropTypes.func.isRequired,
    totaltimeAndcalories:PropTypes.func.isRequired,
    totaltime:PropTypes.number,
    totalcalories:PropTypes.number
}

export default SideBar;