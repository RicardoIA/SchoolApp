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
    const { idCourse } = req.body;

    let SQL = "INSERT INTO subject ( name, descript, idCourse ) VALUES ( ?, ?, ? )";

    db.query(SQL, [name, descript, idCourse], (err, result) => {
      if (err) console.log(err);
      else res.send({ success: true });
    });
  },

  async read(req, res) {
    const { idCourse } = req.params;
    let SQL = "SELECT * FROM subject WHERE idCourse = ?";

    db.query(SQL, [idCourse], (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    });
  },

  async readId(req, res) {
    const { id } = req.params;
    let SQL = "SELECT * FROM subject WHERE id = ?";

    db.query(SQL, [id], (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    });
  },

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const { descript } = req.body;
    const { idCourse } = req.body;

    console.log(id);
    let SQL = "UPDATE subject SET name = ?, descript = ?, idCourse = ? WHERE id = ?";

    db.query(SQL, [name, descript, idCourse, id], (err, result) => {
      if (err) console.log(err);
      else res.send({ success: true });
    });
  },

  async delete(req, res) {
    const { id } = req.params;
    let SQL = "DELETE FROM subject WHERE id = ?";

    db.query(SQL, [id], (err, result) => {
      if (err) console.log(err);
      else res.send({ success: true });
    });
  },
};
