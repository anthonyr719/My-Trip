import React from 'react';
import { Link } from 'react-router-dom';

const JobList = props =>  {
   let jobs;
   console.log(props.jobs);
   if ( props.jobs.length) {
      jobs = props.jobs.map((job, index) => {
         return <Link to={`/jobs/${job._id}`} className="jobrow" key={index}>{job.position} | {job.company} | {job.location} | {job.phone} | {job.email}</Link>
      })
   } else {
      jobs = <p>No Job Data!</p>
   }
   return (
         <div className='JobList'>
            <h3>All Your Current Jobs:</h3>
            {jobs}
            <hr/>
            
         </div>
      )
}


export default JobList;
