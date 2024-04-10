/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import AssignmentsRowStudent from './AssignmentsRowStudent';

function AssignmentsTableStudent({
  data,
  selectedClass,
  getClassesAndAssignments,
  setViewSubmissionModalOpen,
  setAssignmentId,
  viewSubmissionModalOpen,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Assignment</th>
          <th>Due Date</th>
          <th>Submitted On</th>
          <th>Submit Assignment</th>
          <th>View Submission</th>
        </tr>
      </thead>
      <tbody>
        {data
          .find((classObj) => classObj.name === selectedClass)
          .assignments.map((assignment) => (
            <AssignmentsRowStudent
              key={assignment.id}
              assignment={assignment}
              getClassesAndAssignments={getClassesAndAssignments}
              setViewSubmissionModalOpen={setViewSubmissionModalOpen}
              setAssignmentId={setAssignmentId}
              viewSubmissionModalOpen={viewSubmissionModalOpen}
            />
          ))}
      </tbody>
    </table>
  );
}

export default AssignmentsTableStudent;

AssignmentsTableStudent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedClass: PropTypes.string.isRequired,
  getClassesAndAssignments: PropTypes.func.isRequired,
  setViewSubmissionModalOpen: PropTypes.func.isRequired,
  setAssignmentId: PropTypes.func.isRequired,
  viewSubmissionModalOpen: PropTypes.bool.isRequired,
};
