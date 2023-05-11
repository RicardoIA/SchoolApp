const mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "virtualschool",
});

module.exports = {
  async create(req, res) {
    const { name } = req.body;
    const { login } = req.body;
    const { password } = req.body;
    const { registration } = req.body;
    const { phone } = req.body;
    const { email } = req.body;
    const { address } = req.body;
    const { city } = req.body;
    const { state } = req.body;
    const { number } = req.body;
    const { idCourse } = req.body;

    let SQL = "INSERT INTO user ( name, login, password, registration, phone, email, address, city, state, number, idCourse ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )";

    db.query(SQL, [name, login, password, registration, phone, email, address, city, state, number, idCourse], (err, result) => {
      if (err) console.log(err);
      else res.send({ success: true });
    });
  },

  async read(req, res) {
    let SQL = "SELECT * FROM user";

    db.query(SQL, (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    });
  },

  async readId(req, res) {
    const { id } = req.params;
    let SQL = "SELECT * FROM user WHERE id = ?";

    db.query(SQL, [id], (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    });
  },

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const { login } = req.body;
    const { password } = req.body;
    const { registration } = req.body;
    const { phone } = req.body;
    const { email } = req.body;
    const { address } = req.body;
    const { city } = req.body;
    const { state } = req.body;
    const { number } = req.body;
    const { idCourse } = req.body;

    console.log(id);
    let SQL = "UPDATE user SET name = ?, login = ?, password = ?, registration = ?, phone = ?, email = ?, address = ?, city = ?, state = ?, number = ?, idCourse = ? WHERE id = ?";

    db.query(SQL, [name, login, password, registration, phone, email, address, city, state, number, idCourse, id], (err, result) => {
      if (err) console.log(err);
      else res.send({ success: true });
    });
  },

  async delete(req, res) {
    const { id } = req.params;
    let SQL = "DELETE FROM user WHERE id = ?";

    db.query(SQL, [id], (err, result) => {
      if (err) console.log(err);
      else res.send({ success: true });
    });
  },

};
