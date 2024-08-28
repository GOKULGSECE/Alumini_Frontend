
import {JOBS} from "../jobsData";
import JobsCard from "./JobsCard";
import FilterSidebar from './FilterSidebar'; 

import { useSelector } from 'react-redux';
import '../App.css'

const JobList = () => {
    const filteredJobs = useSelector(state => state.jobs.filteredJobs);
   

    return(
        <>
        <div className="job-list-container"> 
            <FilterSidebar  />
        
            <div className="job-list">
                {JOBS.map((job)=> (
                    <JobsCard key={job.id} job={job} />
                ))}
            </div>
         </div>

        </>
    );
};

export default JobList;