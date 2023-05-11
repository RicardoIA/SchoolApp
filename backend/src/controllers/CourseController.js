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
    const { descript } = req.body;

    let SQL = "INSERT INTO course ( name, descript ) VALUES ( ?, ? )";

    db.query(SQL, [name, descript], (err, result) => {
      if (err) console.log(err);
      else res.send({ success: true });
    });
  },

  async read(req, res) {
    let SQL = "SELECT * FROM course";

    db.query(SQL, (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    });
  },

  async readId(req, res) {
    const { id } = req.params;
    let SQL = "SELECT * FROM course WHERE id = ?";

    db.query(SQL, [id], (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    });
  },

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const { descript } = req.body;

    console.log(id);
    let SQL = "UPDATE course SET name = ?, descript = ? WHERE id = ?";

    db.query(SQL, [name, descript, id], (err, result) => {
      if (err) console.log(err);
      else res.send({ success: true });
    });
  },

  async delete(req, res) {
    const { id } = req.params;
    let SQL = "DELETE FROM course WHERE id = ?";

    db.query(SQL, [id], (err, result) => {
      if (err) console.log(err);
      else res.send({ success: true });
    });
  },
};
