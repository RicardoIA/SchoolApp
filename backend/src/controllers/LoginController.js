const mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "virtualschool",
});

module.exports = {
  async login(req, res) {
    const { email } = req.body;
    const { login } = req.body;
    const { password } = req.body;

    let SQL = "SELECT * FROM user WHERE login = ? and password = ? or email = ? and password = ?";

    db.query(SQL, [login, password, email, password], (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    });
  },
};
