/* eslint-disable no-console */
const createClient = require('./db');

const adminData = [
  { name: 'John Smith', email: 'jsmith@gmail.com' },
  { name: 'Jane Johnson', email: 'jane.johnson@skool.edu' },
];

const adminCredentialsData = [
  { admin_id: 1, admin_email: 'jsmith@gmail.com', password: 'vasetime' },
  { admin_id: 2, admin_email: 'jane.johnson@skool.edu', password: 'testingblue' },
];

const teachersData = [
  { name: 'John Doe', email: 'john.doe@aol.com' },
  { name: 'Jane Doe', email: 'jane.doe@hotmail.com' },
];

const teacherCredentialsData = [
  { teacher_id: 1, teacher_email: 'john.doe@aol.com', password: 'passworda;lkdfja' },
  { teacher_id: 2, teacher_email: 'jane.doe@hotmail.com', password: 'password123' },
];

const studentsData = [
  { name: 'John Smith', email: 'john.smith@gmail.com' },
  { name: 'Jane Johnson', email: 'jane.johnson@gmail.com' },
  { name: 'Michael Brown', email: 'michael.brown@gmail.com' },
  { name: 'Emily Davis', email: 'emily.davis@gmail.com' },
  { name: 'William Miller', email: 'william.miller@gmail.com' },
  { name: 'Olivia Wilson', email: 'olivia.wilson@gmail.com' },
  { name: 'James Taylor', email: 'james.taylor@gmail.com' },
  { name: 'Sophia Anderson', email: 'sophia.anderson@gmail.com' },
  { name: 'Benjamin Thomas', email: 'benjamin.thomas@gmail.com' },
  { name: 'Isabella Martinez', email: 'isabella.martinez@gmail.com' },
  { name: 'Daniel Jackson', email: 'daniel.jackson@gmail.com' },
  { name: 'Mia White', email: 'mia.white@gmail.com' },
  { name: 'Joseph Harris', email: 'joseph.harris@gmail.com' },
  { name: 'Charlotte Clark', email: 'charlotte.clark@gmail.com' },
  { name: 'David Lewis', email: 'david.lewis@gmail.com' },
  { name: 'Abigail Young', email: 'abigail.young@gmail.com' },
  { name: 'Andrew Hall', email: 'andrew.hall@gmail.com' },
  { name: 'Elizabeth Allen', email: 'elizabeth.allen@gmail.com' },
  { name: 'Joshua King', email: 'joshua.king@gmail.com' },
  { name: 'Ella Wright', email: 'ella.wright@gmail.com' },
  { name: 'Christopher Green', email: 'christopher.green@gmail.com' },
  { name: 'Sofia Baker', email: 'sofia.baker@gmail.com' },
  { name: 'Andrew Hill', email: 'andrew.hill@gmail.com' },
  { name: 'Ava Phillips', email: 'ava.phillips@gmail.com' },
  { name: 'Matthew Turner', email: 'matthew.turner@gmail.com' },
  { name: 'Grace Carter', email: 'grace.carter@gmail.com' },
  { name: 'Ryan Ward', email: 'ryan.ward@gmail.com' },
  { name: 'Chloe Foster', email: 'chloe.foster@gmail.com' },
  { name: 'Samuel Morgan', email: 'samuel.morgan@gmail.com' },
  { name: 'Natalie Howard', email: 'natalie.howard@gmail.com' },
];

const studentCredentialsData = [
  { student_id: 1, student_email: 'john.smith@gmail.com', password: 'password' },
  { student_id: 2, student_email: 'jane.johnson@gmail.com', password: 'test' },
  { student_id: 3, student_email: 'michael.brown@gmail.com', password: 'dog' },
  { student_id: 4, student_email: 'emily.davis@gmail.com', password: 'ohno' },
  { student_id: 5, student_email: 'william.miller@gmail.com', password: 'safe' },
  { student_id: 6, student_email: 'olivia.wilson@gmail.com', password: 'apples' },
  { student_id: 7, student_email: 'james.taylor@gmail.com', password: 'carrots' },
  { student_id: 8, student_email: 'sophia.anderson@gmail.com', password: 'cake' },
  { student_id: 9, student_email: 'benjamin.thomas@gmail.com', password: 'shoes' },
  { student_id: 10, student_email: 'isabella.martinez@gmail.com', password: 'bird' },
  { student_id: 11, student_email: 'daniel.jackson@gmail.com', password: 'car' },
  { student_id: 12, student_email: 'mia.white@gmail.com', password: 'pw123' },
  { student_id: 13, student_email: 'joseph.harris@gmail.com', password: 'bkapei93291kda;c' },
  { student_id: 14, student_email: 'charlotte.clark@gmail.com', password: 'corn' },
  { student_id: 15, student_email: 'david.lewis@gmail.com', password: 'sebastian' },
  { student_id: 16, student_email: 'abigail.young@gmail.com', password: 'byebye' },
  { student_id: 17, student_email: 'andrew.hall@gmail.com', password: 'animals' },
  { student_id: 18, student_email: 'elizabeth.allen@gmail.com', password: 'partytime' },
  { student_id: 19, student_email: 'joshua.king@gmail.com', password: 'ilikebrownies' },
  { student_id: 20, student_email: 'ella.wright@gmail.com', password: 'cauliflowercake' },
  { student_id: 21, student_email: 'christopher.green@gmail.com', password: 'ridinghigh' },
  { student_id: 22, student_email: 'sofia.baker@gmail.com', password: 'plannedflight' },
  { student_id: 23, student_email: 'andrew.hill@gmail.com', password: 'southwest' },
  { student_id: 24, student_email: 'ava.phillips@gmail.com', password: 'towels' },
  { student_id: 25, student_email: 'matthew.turner@gmail.com', password: 'connection' },
  { student_id: 26, student_email: 'grace.carter@gmail.com', password: 'githubrules' },
  { student_id: 27, student_email: 'ryan.ward@gmail.com', password: 'godzilla' },
  { student_id: 28, student_email: 'chloe.foster@gmail.com', password: 'mothra' },
  { student_id: 29, student_email: 'samuel.morgan@gmail.com', password: 'rodan' },
  { student_id: 30, student_email: 'natalie.howard@gmail.com', password: 'ghidorah' },
];

const classesData = [
  { name: 'Math', teacher_id: 1 },
  { name: 'Science', teacher_id: 2 },
  { name: 'History', teacher_id: 1 },
  { name: 'English', teacher_id: 2 },
];

const assignmentData = [
  { name: 'Math Assignment 1', class_id: 1, due_date: '2024-04-15' },
  { name: 'Science Assignment 1', class_id: 2, due_date: '2024-04-15' },
  { name: 'History Assignment 1', class_id: 3, due_date: '2024-04-15' },
  { name: 'English Assignment 1', class_id: 4, due_date: '2024-04-15' },
];

const teacherAssignmentData = [
  { teacher_id: 1, assignment_id: 1 },
  { teacher_id: 2, assignment_id: 2 },
  { teacher_id: 1, assignment_id: 3 },
  { teacher_id: 2, assignment_id: 4 },
];

const classesStudentsData = [
  { class_id: 1, student_id: 1 },
  { class_id: 2, student_id: 2 },
  { class_id: 3, student_id: 3 },
  { class_id: 4, student_id: 4 },
  { class_id: 1, student_id: 5 },
  { class_id: 2, student_id: 6 },
  { class_id: 3, student_id: 7 },
  { class_id: 4, student_id: 8 },
  { class_id: 1, student_id: 9 },
  { class_id: 2, student_id: 10 },
  { class_id: 3, student_id: 11 },
  { class_id: 4, student_id: 12 },
  { class_id: 1, student_id: 13 },
  { class_id: 2, student_id: 14 },
  { class_id: 3, student_id: 15 },
  { class_id: 4, student_id: 16 },
  { class_id: 1, student_id: 17 },
  { class_id: 2, student_id: 18 },
  { class_id: 3, student_id: 19 },
  { class_id: 4, student_id: 20 },
  { class_id: 1, student_id: 21 },
  { class_id: 2, student_id: 22 },
  { class_id: 3, student_id: 23 },
  { class_id: 4, student_id: 24 },
  { class_id: 1, student_id: 25 },
  { class_id: 2, student_id: 26 },
  { class_id: 3, student_id: 27 },
  { class_id: 4, student_id: 28 },
  { class_id: 1, student_id: 29 },
  { class_id: 2, student_id: 30 },
];

const studentsAssignmentsData = [
  {
    student_id: 1, assignment_id: 1, score: 90, total_points: 100, grade: 'A', completed: true,
  },
  {
    student_id: 2, assignment_id: 2, score: 80, total_points: 100, grade: 'B', completed: true,
  },
  {
    student_id: 3, assignment_id: 3, score: 70, total_points: 100, grade: 'C', completed: true,
  },
  {
    student_id: 4, assignment_id: 4, score: 0, total_points: 100, grade: 'F', completed: false,
  },
  {
    student_id: 5, assignment_id: 1, score: 90, total_points: 100, grade: 'A', completed: true,
  },
  {
    student_id: 6, assignment_id: 2, score: 80, total_points: 100, grade: 'B', completed: true,
  },
  {
    student_id: 7, assignment_id: 3, score: 100, total_points: 100, grade: 'A', completed: true,
  },
  {
    student_id: 8, assignment_id: 4, score: 87, total_points: 100, grade: 'B', completed: true,
  },
  {
    student_id: 9, assignment_id: 1, score: 70, total_points: 100, grade: 'C', completed: true,
  },
  {
    student_id: 10, assignment_id: 2, score: 80, total_points: 100, grade: 'B', completed: true,
  },
  {
    student_id: 11, assignment_id: 3, score: 65, total_points: 100, grade: 'D', completed: true,
  },
  {
    student_id: 12, assignment_id: 4, score: 47, total_points: 100, grade: 'F', completed: true,
  },
  {
    student_id: 13, assignment_id: 1, score: 85, total_points: 100, grade: 'B', completed: true,
  },
  {
    student_id: 14, assignment_id: 2, score: 86, total_points: 100, grade: 'B', completed: true,
  },
  {
    student_id: 15, assignment_id: 3, score: 0, total_points: 100, grade: 'F', completed: false,
  },
  {
    student_id: 16, assignment_id: 4, score: 87, total_points: 100, grade: 'B', completed: true,
  },
  {
    student_id: 17, assignment_id: 1, score: 91, total_points: 100, grade: 'A', completed: true,
  },
  {
    student_id: 18, assignment_id: 2, score: 82, total_points: 100, grade: 'B', completed: true,
  },
  {
    student_id: 19, assignment_id: 3, score: 76, total_points: 100, grade: 'C', completed: true,
  },
  {
    student_id: 20, assignment_id: 4, score: 0, total_points: 100, grade: 'F', completed: false,
  },
  {
    student_id: 21, assignment_id: 1, score: 97, total_points: 100, grade: 'A', completed: true,
  },
  {
    student_id: 22, assignment_id: 2, score: 84, total_points: 100, grade: 'B', completed: true,
  },
  {
    student_id: 23, assignment_id: 3, score: 0, total_points: 100, grade: 'F', completed: false,
  },
  {
    student_id: 24, assignment_id: 4, score: 84, total_points: 100, grade: 'B', completed: true,
  },
  {
    student_id: 25, assignment_id: 1, score: 90, total_points: 100, grade: 'A', completed: true,
  },
  {
    student_id: 26, assignment_id: 2, score: 80, total_points: 100, grade: 'B', completed: true,
  },
  {
    student_id: 27, assignment_id: 3, score: 70, total_points: 100, grade: 'C', completed: true,
  },
  {
    student_id: 28, assignment_id: 4, score: 0, total_points: 100, grade: 'F', completed: false,
  },
  {
    student_id: 29, assignment_id: 1, score: 90, total_points: 100, grade: 'A', completed: true,
  },
  {
    student_id: 30, assignment_id: 2, score: 80, total_points: 100, grade: 'B', completed: true,
  },
];

const teacherCalendarData = [
  {
    name: 'Math Test', teacher_id: 1, event_start: '2024-04-15T10:00:00.000Z', event_end: '2024-04-15T12:00:00.000Z', completed: true,
  },
  {
    name: 'History Quiz', teacher_id: 1, event_start: '2024-04-15T13:00:00.000Z', event_end: '2024-04-15T14:00:00.000Z', completed: false,
  },
  {
    name: 'Science Test', teacher_id: 2, event_start: '2024-04-15T09:00:00.000Z', event_end: '2024-04-15T11:00:00.000Z', completed: true,
  },
  {
    name: 'English Quiz', teacher_id: 2, event_start: '2024-04-15T13:00:00.000Z', event_end: '2024-04-15T14:00:00.000Z', completed: false,
  },
];

const studentCalendarData = [
  {
    name: 'Study for Math Test', student_id: 1, event_start: '2024-04-14T10:00:00.000Z', event_end: '2024-04-14T12:00:00.000Z', completed: false,
  },
  {
    name: 'Study for Science Test', student_id: 2, event_start: '2024-04-14T10:00:00.000Z', event_end: '2024-04-14T12:00:00.000Z', completed: false,
  },
  {
    name: 'Study for History Quiz', student_id: 3, event_start: '2024-04-14T11:00:00.000Z', event_end: '2024-04-14T12:00:00.000Z', completed: true,
  },
  {
    name: 'Study for English Quiz', student_id: 4, event_start: '2024-04-14T13:00:00.000Z', event_end: '2024-04-14T14:00:00.000Z', completed: true,
  },
];

async function seed() {
  const client = createClient();
  try {
    await client.connect();
    await client.query(`
      INSERT INTO roles (role) VALUES ('admin');
      INSERT INTO roles (role) VALUES ('teacher');
      INSERT INTO roles (role) VALUES ('student');
    `);

    adminData.forEach(async (admin) => {
      await client.query(`
        INSERT INTO admin (name, email, role_id) VALUES ('${admin.name}', '${admin.email}', 1);
      `);
    });

    teachersData.forEach(async (teacher) => {
      await client.query(`
        INSERT INTO teachers (name, email, role_id) VALUES ('${teacher.name}', '${teacher.email}', 2);
      `);
    });

    studentsData.forEach(async (student) => {
      await client.query(`
        INSERT INTO students (name, email, role_id) VALUES ('${student.name}', '${student.email}', 3);
      `);
    });

    classesData.forEach(async (classData) => {
      await client.query(`
        INSERT INTO classes (name, teacher_id) VALUES ('${classData.name}', ${classData.teacher_id});
      `);
    });

    assignmentData.forEach(async (assignment) => {
      await client.query(`
        INSERT INTO assignments (name, class_id, due_date) VALUES ('${assignment.name}', ${assignment.class_id}, '${assignment.due_date}');
      `);
    });

    studentCredentialsData.forEach(async (student) => {
      await client.query(`
        INSERT INTO students_credentials (student_id, student_email, password) VALUES (${student.student_id}, '${student.student_email}', '${student.password}');
      `);
    });

    teacherCredentialsData.forEach(async (teacher) => {
      await client.query(`
        INSERT INTO teachers_credentials (teacher_id, teacher_email, password) VALUES (${teacher.teacher_id}, '${teacher.teacher_email}', '${teacher.password}');
      `);
    });

    adminCredentialsData.forEach(async (admin) => {
      await client.query(`
        INSERT INTO admin_credentials (admin_id, admin_email, password) VALUES (${admin.admin_id}, '${admin.admin_email}', '${admin.password}');
      `);
    });

    teacherAssignmentData.forEach(async (teacherAssignment) => {
      await client.query(`
        INSERT INTO teachers_assignments (teacher_id, assignment_id) VALUES (${teacherAssignment.teacher_id}, ${teacherAssignment.assignment_id});
      `);
    });

    classesStudentsData.forEach(async (classStudent) => {
      await client.query(`
        INSERT INTO classes_students (class_id, student_id) VALUES (${classStudent.class_id}, ${classStudent.student_id});
      `);
    });

    studentsAssignmentsData.forEach(async (studentAssignment) => {
      await client.query(`
        INSERT INTO students_assignments (student_id, assignment_id, score, total_points, grade, completed) VALUES (${studentAssignment.student_id}, ${studentAssignment.assignment_id}, ${studentAssignment.score}, ${studentAssignment.total_points}, '${studentAssignment.grade}', ${studentAssignment.completed});
      `);
    });

    teacherCalendarData.forEach(async (teacherEvent) => {
      await client.query(`
        INSERT INTO teachers_calendar (name, teacher_id, event_start, event_end, completed) VALUES ('${teacherEvent.name}', ${teacherEvent.teacher_id}, '${teacherEvent.event_start}', '${teacherEvent.event_end}', ${teacherEvent.completed});
      `);
    });

    studentCalendarData.forEach(async (studentEvent) => {
      await client.query(`
        INSERT INTO students_calendar (name, student_id, event_start, event_end, completed) VALUES ('${studentEvent.name}', ${studentEvent.student_id}, '${studentEvent.event_start}', '${studentEvent.event_end}', ${studentEvent.completed});
      `);
    });
  } catch (error) {
    console.error(error);
  }

  console.log('Seeded database successfully!');
}

seed();