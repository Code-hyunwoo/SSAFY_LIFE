const connection = require('../dbConfig')

const wordleCtrl = {

    getAnswer : async (req, res) => {
        connection.query('SELECT * FROM wordle', (error, rows)=> {
            if(error) throw error;
            res.send(rows);
        })
    },
    insertRoyal : async(req,res) => {
        // javascript 구조 분해 할당
        const {royal_name, royal_date, royal_time} = req.body;
        const sql = `INSERT INTO royal(name, date, time) VALUES('${royal_name}','${royal_date}','${royal_time}')`
        connection.query(
            sql,(error,rows) => {
                if(error) throw error;
                res.send(rows);
            }
        )
    },
    getRoyal : async (req, res) => {
        connection.query('SELECT * FROM royal', (error, rows)=> {
            if(error) throw error;
            res.send(rows);
        })
    },
}

module.exports = wordleCtrl