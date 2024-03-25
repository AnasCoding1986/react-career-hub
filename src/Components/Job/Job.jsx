import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information} = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="mr-4 px-7 py-4 text-blue-400 font-extrabold rounded-2xl border border-cyan-500 my-4">{remote_or_onsite}</button>
        <button className="mr-4 px-7 py-4 text-blue-400 font-extrabold rounded-2xl border border-cyan-500 my-4">{job_type}</button>
    </div>
    <div className="card-actions">
      <Link to={`/job/${id}`}>
        <button className="btn btn-primary">View DEtails</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Job;