import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import {saveJobApplication} from "../../Utility/localStorag"

import 'react-toastify/dist/ReactToastify.css';


const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(id,jobs,job);
    console.log(typeof(id));

    const handleApply = () => {
        saveJobApplication(id)
        toast("You have applied successfully");
    }

    return (
        <div>
            
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details coming here</h2>
                    <h2>Job details of: {job.job_title}</h2>
                </div>
                <div>
                    <h2 className="text-2xl">Side things</h2>
                    <button onClick={handleApply} className="btn btn-primary w-full">Apply now</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;