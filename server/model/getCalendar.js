const createClient = require('../database/db');

module.exports = async (role, id) => {
  let table;
  let roleId;
  if (role === '3') {
    table = 'students_calendar';
    roleId = 'student_id';
  } else if (role === '2') {
    table = 'teachers_calendar';
    roleId = 'teacher_id';
  } else if (role === '1') {
    table = 'admin_calendar';
    roleId = 'admin_id';
  }
  const client = createClient();
  try {
    const query = `SELECT id, name, event_start, event_end, completed FROM ${table} WHERE ${roleId} = $1`;
    const values = [id];
    await client.connect();
    const { rows } = await client.query(query, values);
    const formattedData = rows.map((row) => ({
      id: row.id,
      title: row.name,
      start: row.event_start,
      end: row.event_end,
      completed: row.completed,
    }));
    return formattedData;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await client.end();
  }
};
