/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaCheckSquare } from 'react-icons/fa';
import SubmitAssignmentModal from './SubmitAssignmentModal';

function SubmitAssignmentButton({
  studentEmail,
  assignmentId,
  getClassesAndAssignmentsForStudent,
}) {
  const [submitAssignmentModalIsOpen, setSubmitAssignmentModalIsOpen] = useState(false);
  return (
    <div>
      <button type="button" className="submitAssignmentButtonButton" onClick={() => setSubmitAssignmentModalIsOpen(true)}><FaCheckSquare size={15}/></button>
      {submitAssignmentModalIsOpen && (
      <SubmitAssignmentModal
        setSubmitAssignmentModalIsOpen={setSubmitAssignmentModalIsOpen}
        studentEmail={studentEmail}
        assignmentId={assignmentId}
        getClassesAndAssignmentsForStudent={getClassesAndAssignmentsForStudent}
      />
      )}
    </div>
  );
}

export default SubmitAssignmentButton;

SubmitAssignmentButton.propTypes = {
  studentEmail: PropTypes.string.isRequired,
  assignmentId: PropTypes.number.isRequired,
  getClassesAndAssignmentsForStudent: PropTypes.func.isRequired,
};
