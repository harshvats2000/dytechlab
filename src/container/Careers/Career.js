import React, { useEffect, useState } from 'react';
import classes from './index.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import OpeningText from '../../components/OpeningText';
import { p_color, jobs, s_color } from '../../constants';

export default function Career() {
  const [locationsFilter, setLocationsFilter] = useState('All-locations');
  const [departmentsFilter, setDepartmentsFilter] = useState('All-departments');
  const [availableJobs, setAvailableJobs] = useState(jobs);
  const [noJobs, setNoJobs] = useState(false);

  // Change colors of locations filter
  const changeLocationStyles = () => {
    var el = document.getElementsByClassName(locationsFilter)[0];
    var locations = document.getElementsByClassName('location');
    for (var i = 0, max = locations.length; i < max; i++) {
      locations[i].style.color = 'gray';
    }
    el.style.color = s_color;
  };

  // Change colors of departments filter
  const changeDepartmentStyles = () => {
    var el = document.getElementsByClassName(departmentsFilter)[0];
    var departments = document.getElementsByClassName('department');
    for (var i = 0, max = departments.length; i < max; i++) {
      departments[i].style.color = 'gray';
    }
    el.style.color = s_color;
  };

  const changeAvailableJobs = () => {
    let res = jobs;
    if (locationsFilter !== 'All-locations') {
      res = jobs.filter((job) => job.location === locationsFilter);
    }
    if (departmentsFilter !== 'All-departments') {
      res = res.filter((job) => job.department === departmentsFilter);
    }
    setAvailableJobs(res);
    if (res.length === 0) {
      setNoJobs(true);
    } else {
      setNoJobs(false);
    }
  };

  useEffect(() => {
    changeLocationStyles();
    changeDepartmentStyles();

    changeAvailableJobs();
  }, [locationsFilter, departmentsFilter]);

  return (
    <>
      <div className={classes.root}>
        <Header />

        <div className={classes.banner}>
          <img src='/images/about/2.jpeg' className={classes.img} />
          <h1 className={classes.bannerTitle}>
            Where <span style={{ color: p_color }}>experience</span> <span>meets</span>{' '}
            innovation
            <p style={{ fontSize: '16px', fontWeight: 400 }}>
              A results-driven team at the intersection of trading + technology
            </p>
          </h1>
        </div>

        <OpeningText
          text='We empower a team of exceptional individuals to identify and capture trading and
          investment opportunities globally.'
        />

        <div className={classes.body}>
          <div className={classes.careers}>
            <h1 className='heading'>Open Positions</h1>

            <div className={classes.careers_body}>
              <div className={classes.filter}>
                <h4 className='heading'>Job locations</h4>

                <div className={classes.locations}>
                  <h5
                    className='underline-dark All-locations location'
                    onClick={(e) => setLocationsFilter('All-locations')}
                  >
                    All
                  </h5>

                  <h5
                    className='underline-dark Shanghai location'
                    onClick={(e) => setLocationsFilter('Shanghai')}
                  >
                    Shanghai
                  </h5>

                  <h5
                    className='underline-dark Singapore location'
                    onClick={(e) => setLocationsFilter('Singapore')}
                  >
                    Singapore
                  </h5>
                </div>

                <h4 className='heading'>Job Departments</h4>
                <div className={classes.departments}>
                  <h5
                    className='underline-dark All-departments department'
                    onClick={(e) => setDepartmentsFilter('All-departments')}
                  >
                    All
                  </h5>
                  <h5
                    className='underline-dark Trading department'
                    onClick={(e) => setDepartmentsFilter('Trading')}
                  >
                    Trading
                  </h5>
                  <h5
                    className='underline-dark Technology department'
                    onClick={(e) => setDepartmentsFilter('Technology')}
                  >
                    Technology
                  </h5>
                  <h5
                    className='underline-dark Corporate department'
                    onClick={(e) => setDepartmentsFilter('Corporate')}
                  >
                    Corporate Functions
                  </h5>
                </div>
              </div>

              <div className={classes.listing}>
                {availableJobs.map((job, i) => (
                  <div key={i} className={classes.job_card}>
                    <h3 className='heading'>{job.name}</h3>

                    <div className={classes.job_location}>
                      <span>Location:&nbsp;&nbsp;&nbsp;</span>
                      <span>{job.location}</span>
                    </div>

                    <div className={classes.job_department}>
                      <span>Department:&nbsp;&nbsp;&nbsp;</span>
                      <span>{job.department}</span>
                    </div>

                    <div className={classes.job_type}>
                      <span>Type:&nbsp;&nbsp;&nbsp;</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                ))}
                {!noJobs ? null : <h1>No Jobs available for this filter.</h1>}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
