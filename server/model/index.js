const getAdmin = require('./getAdmin');
const getAssignmentDueDate = require('./getAssignmentDueDate');
const getAssignmentsForClass = require('./getAssignmentsForClass');
const getClassIdFromAssignmentId = require('./getClassIdFromAssignmentId');
const getClassStudents = require('./getClassStudents');
const getClasses = require('./getClasses');
const getClassesFromEmail = require('./getClassesFromEmail');
const getRoleAtLogin = require('./getRoleAtLogin');
const getStudentIdFromEmail = require('./getStudentIdFromEmail');
const getStudents = require('./getStudents');
const getTeacherClasses = require('./getTeacherClasses');
const getTeachers = require('./getTeachers');
const insertUpdateSubmittedAssignment = require('./insertUpdateSubmittedAssignment');
const login = require('./login');
const getStudentClassGrades = require('./getStudentClassGrades');

module.exports = {
  getAdmin,
  getAssignmentDueDate,
  getAssignmentsForClass,
  getClassIdFromAssignmentId,
  getClassStudents,
  getClasses,
  getClassesFromEmail,
  getRoleAtLogin,
  getStudentIdFromEmail,
  getStudents,
  getTeacherClasses,
  getTeachers,
  insertUpdateSubmittedAssignment,
  login,
  getStudentClassGrades,
};
