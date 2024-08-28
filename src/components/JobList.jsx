
import {JOBS} from "../jobsData";
import JobsCard from "./JobsCard";
import '../App.css'

const JobList = () => {
   

    return(
        <>
            <div className="job-list">
                {JOBS.map((job)=> (
                    <JobsCard key={job.id} job={job} />
                ))}
            </div>

        </>
    );
};

export default JobList;