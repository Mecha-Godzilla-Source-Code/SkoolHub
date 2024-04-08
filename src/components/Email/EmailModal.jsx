import React from 'react';
import PropTypes from 'prop-types';

function EmailModal({
  setMessage, setSubject, email, setEmailModal,
}) {
  // update Subject and line of email, send email on submit
  return (
    <form onSubmit={email} className="emailModal">
      <button type="button" onClick={() => setEmailModal(false)}>Close</button>
      <label htmlFor="subject">
        Subject:
        <input type="text" id="subject" name="subject" onChange={(e) => { setSubject(e.target.value); }} required />
      </label>
      <label htmlFor="message">
        Message:
        <textarea id="message" name="message" onChange={(e) => { setMessage(e.target.value); }} required />
      </label>
      <button type="submit">Send Email</button>
    </form>
  );
}

EmailModal.propTypes = {
  setMessage: PropTypes.func.isRequired,
  setSubject: PropTypes.func.isRequired,
  email: PropTypes.func.isRequired,
  setEmailModal: PropTypes.func.isRequired,
};

export default EmailModal;
