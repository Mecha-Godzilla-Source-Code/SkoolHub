/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaCheckSquare } from 'react-icons/fa';
import SubmitAssignmentModal from './SubmitAssignmentModal';

function SubmitAssignmentButton({
  studentEmail,
  assignmentId,
  getClassesAndAssignments,
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
        getClassesAndAssignments={getClassesAndAssignments}
      />
      )}
    </div>
  );
}

export default SubmitAssignmentButton;

SubmitAssignmentButton.propTypes = {
  studentEmail: PropTypes.string.isRequired,
  assignmentId: PropTypes.number.isRequired,
  getClassesAndAssignments: PropTypes.func.isRequired,
};
