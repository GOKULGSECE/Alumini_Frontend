import '../App.css';


const JobsCard = ({ job }) => {
    return (
        <>
           <div className="job-card">
            <div className="job-header">
                <span className="date">{new Date(job.postedDate).toDateString()}</span>
                <img src={job.logo} alt={`${job.company} logo`} className="company-logo" />
            </div>
            <h3 className="job-title">{job.title}</h3>
            <div className="details">
                <p className="company">{job.company} - {job.location}</p>
                <div className="tags">
                    {job.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="footer">
                <p className="salary">{job.salary}</p>
                <button className="details-button">Details</button>
            </div>
        </div>


        </>
    );
};


export default JobsCard;