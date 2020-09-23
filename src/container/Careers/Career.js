import React, { useEffect, useState } from 'react';
import classes from './index.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import OpeningText from '../../components/OpeningText';
import { p_color, jobs } from '../../constants';
import Select from 'react-select';

const locations = [
  { value: 'All', label: 'All' },
  { value: 'Singapore', label: 'Singapore' },
  { value: 'Shanghai', label: 'Shanghai' },
];

const departments = [
  { value: 'All', label: 'All' },
  { value: 'Trading', label: 'Trading' },
  { value: 'Technology', label: 'Technology' },
  { value: 'Corporate Functions', label: 'Corporate Functions' },
];

const types = [
  { value: 'All', label: 'All' },
  { value: 'Intern', label: 'Intern' },
  { value: 'Full Time', label: 'Full Time' },
];

const selectStyles = {
  control: (styles) => ({ ...styles }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
    };
  },
};

export default function Career() {
  const [availableJobs, setAvailableJobs] = useState(jobs);
  const [noJobs, setNoJobs] = useState(false);
  const [location, setLocation] = useState({ value: 'All', label: 'Select Location...' });
  const [department, setDepartment] = useState({
    value: 'All',
    label: 'Select Department...',
  });
  const [type, setType] = useState({ value: 'All', label: 'Select Type...' });

  const updateJobs = () => {
    let res = jobs;

    // Filter locations
    if (location.value !== 'All') {
      res = jobs.filter((job) => job.location === location.value);
      setAvailableJobs(res);
    }

    // Filter departments
    if (department.value !== 'All') {
      res = res.filter((job) => job.department === department.value);
    }

    // Filter types
    if (type.value !== 'All') {
      res = res.filter((job) => job.type === type.value);
    }
    setAvailableJobs(res);
  };

  const handleLocationChange = (e) => {
    setLocation(e);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e);
  };

  const handleTypeChange = (e) => {
    setType(e);
  };

  useEffect(() => {
    updateJobs();
  }, [location, department, type]);

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
              <div className={classes.filters}>
                <div className={classes.location_filter}>
                  <Select
                    value={location}
                    onChange={handleLocationChange}
                    options={locations}
                    styles={selectStyles}
                  />
                </div>

                <div className={classes.department_filter}>
                  <Select
                    value={department}
                    onChange={handleDepartmentChange}
                    options={departments}
                    styles={selectStyles}
                  />
                </div>

                <div className={classes.type_filter}>
                  <Select
                    value={type}
                    onChange={handleTypeChange}
                    options={types}
                    styles={selectStyles}
                  />
                </div>
              </div>

              <div className={classes.listing}>
                {availableJobs.map((job, i) => (
                  <div className={classes.job_card}>
                    <h2 className={`heading ${classes.job_name}`}>{job.name}</h2>
                    <div className={classes.job_location}>Location: {job.location}</div>
                    <div className={classes.job_department}>Department: {job.department}</div>
                    <div className={classes.job_type}>Type: {job.type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
