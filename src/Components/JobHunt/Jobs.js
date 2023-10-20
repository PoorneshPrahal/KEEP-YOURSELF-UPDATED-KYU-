import React, { useEffect,useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Jobs.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import location from '../../images/location.png'
import salary from '../../images/salary.png'

function Jobs() {
    const [jobData, setJobData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=35b50d85&app_key=22b36c8c1f5d8b5b6fff09d526f4b98b");
                const data = await response.json();
                setJobData(data.results); // Update jobData state with the fetched data
                console.log(data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); // Call the async function inside useEffect

    }, []); // Empty dependency array means this effect will run once after initial render

    
  return (
    <div style={{ display: "flex" }}>
        <Sidebar/>
        <div className='row'>
{jobData.map((e)=>{
    return(
        <div class="card c1 col-5" style={{width:"18rem"}}>
        <div class="card-body">
          <h3 class="card-title">{e.title}</h3>
          <h5 class="card-title c-t">{e.created}</h5>
          <p class="card-text c-txt">{e.description}</p>
          <img src={salary} alt="" height={20}/>
          <h7 class="card-title"> Not Disclosed</h7>
          <br></br>
          <img src={location} alt="" height={20}/>
          <h7 class="card-title">{e.location.display_name}</h7>
          <div className='apply-btn'> 
          <button type="button" class="btn btn-primary ">Apply</button>
          </div>
          
        </div>
      </div>    
     
    )
})}
    </div> 


    </div>
  )
}

export default Jobs