/* eslint-disable no-console */
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './homepage.css';
import React from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import { useUserData } from '../data-providers/UserDataProvider';
import AssignmentsTable from './AssignmentsTable';

const { useState, useEffect } = React;

function Homepage() {
  const { userData } = useUserData();
  const {
    email,
    id,
    role,
    name,
  } = userData;

  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [assignments, setAssignments] = useState([]);
  const [tasks, setTasks] = useState([]);

  const localizer = momentLocalizer(moment);

  const getCurrentAssignments = (classId) => {
    let path = `/skoolhub/assignments/current/${role}/${id}`;
    if (classId) {
      path += `/?classId=${classId}`;
    }

    axios.get(path)
      .then((response) => {
        setAssignments(response.data);
      })
      .catch((error) => console.error({
        Message: 'Error retrieving assignments.',
        Error: error,
      }));
  };

  useEffect(() => {
    if (role === 2 || role === 3) {
      axios.get(`/skoolhub/user/classes/${email}`)
        .then((response) => setClasses(response.data))
        .catch((error) => console.error({
          Message: 'Error retrieving classes.',
          Error: error,
        }));

      axios.get(`/skoolhub/calendar/${role}/${id}`)
        .then((response) => response.data.map((event) => ({
          ...event,
          start: new Date(event.start),
          end: new Date(event.end),
        })))
        .then((formattedEvents) => setTasks(formattedEvents))
        .catch((error) => console.error({
          Message: 'Error retrieving calendar.',
          Error: error,
        }));

      getCurrentAssignments();
    }
  }, [userData.role]);

  const filterAssignments = (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    setSelectedClass(selectedOption.value);

    if (selectedOption.value !== 'All Classes') {
      getCurrentAssignments(selectedOption.value);
    } else {
      getCurrentAssignments();
    }
  };

  return (
    <motion.div
      className="motion-homepage"
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      transition={{ ease: 'easeInOut', duration: 0.7 }}
    >
      <div className="homepage-container">
        <h1>{`Welcome back, ${name}`}</h1>
        {(tasks.length > 0 && assignments.length > 0) && (
        <div className="homepage-flex-container">
          {assignments.length > 0 && (
            <div className="homepage-assignments-container">
              <h2>Current Assignments</h2>
              <AssignmentsTable
                assignments={assignments}
                classes={classes}
                selectedClass={selectedClass}
                filter={filterAssignments}
              />
            </div>
          )}
          <div>
            <div className="homepage-calendar-container">
              <h2>Today&apos;s Tasks</h2>
              <Calendar
                localizer={localizer}
                scrollToTime={moment().startOf('hour').toDate()}
                events={tasks}
                defaultView="day"
                views={['day']}
              />
            </div>
          </div>
        </div>
        )}
      </div>
    </motion.div>
  );
}

export default Homepage;
