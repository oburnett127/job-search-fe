import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import classes from './JobsList.module.css';

function JobsList({jobs}) {

    //console.log(jobs);
    //console.log(typeof jobs);

    return (
        jobs?.data && (
            <div className={classes.jobs}>
                <h1>All Jobs</h1>
                <ul className={classes.list}>
                    {jobs.data?.map((job) => (
                        <li key={uuidv4()} className={classes.item}>
                            <Link to={{ pathname: `/jobs/${job.id}` }}>
                                <div className={classes.content}>
                                    <h2>{job.title}</h2>
                                    <p>Employer Name: {job.employerName}</p>
                                    <p>Posted on: {job.postDate}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    )
}

export default JobsList;