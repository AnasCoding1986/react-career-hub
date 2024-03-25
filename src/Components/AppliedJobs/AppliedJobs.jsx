import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorag";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect(() => {
        const storedJonid = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job =>)
        }
    },[])

    return (
        <div>
            <h2>Jobs that I applied</h2>
        </div>
    );
};

export default AppliedJobs;