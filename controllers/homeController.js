const mysql = require("mysql");

//Connection pool
const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

// View home
exports.viewlogin = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("Connect Successfully");

        res.render('login')
    });
};


exports.authen = (req, res) => {

    const phonenumber = req.body.phonenumber,
        password = req.body.password;

    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("Connect Successfully");



        if (password === "1") {
            connection.query("SELECT * FROM food", (err, rows) => {
                // When done with the connection, release it
                if (!err) {
                    res.render("home", {
                        rows: rows,
                        title: "Home",
                    });
                } else {
                    console.log(err);
                }
            });
        } else res.render('login')
    });
};


// GET food detail