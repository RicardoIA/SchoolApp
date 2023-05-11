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
    const { idSubject } = req.body;

    let SQL = "INSERT INTO class ( name, descript, idSubject ) VALUES ( ?, ?, ? )";

    db.query(SQL, [name, descript, idSubject], (err, result) => {
      if (err) console.log(err);
      else res.send({ success: true });
    });
  },

  async read(req, res) {
    const { idSubject } = req.params;
    let SQL = "SELECT * FROM class WHERE idSubject = ?";

    db.query(SQL, [idSubject], (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    });
  },

  async readId(req, res) {
    const { id } = req.params;
    let SQL = "SELECT * FROM class WHERE id = ?";

    db.query(SQL, [id], (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    });
  },

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const { descript } = req.body;
    const { idSubject } = req.body;

    console.log(id);
    let SQL = "UPDATE class SET name = ?, descript = ?, idSubject = ? WHERE id = ?";

    db.query(SQL, [name, descript, idSubject, id], (err, result) => {
      if (err) console.log(err);
      else res.send({ success: true });
    });
  },

  async delete(req, res) {
    const { id } = req.params;
    let SQL = "DELETE FROM class WHERE id = ?";

    db.query(SQL, [id], (err, result) => {
      if (err) console.log(err);
      else res.send({ success: true });
    });
  },
};
