const connection = require('../dbConfig')

const guestCtrl = {

    getGuest : async (req, res) => {
        connection.query('SELECT * FROM guest', (error, rows)=> {
            if(error) throw error;
            res.send(rows);
        })
    },
    insertGuest : async(req,res) => {
        // javascript 구조 분해 할당
        const {person_id, person_name, person_text} = req.body;
        const sql = `INSERT INTO guest(person_id,person_name,person_text) VALUES(${person_id},'${person_name}','${person_text}')`
        connection.query(
            sql,(error,rows) => {
                if(error) throw error;
                res.send(rows);
            }
        )
    }
}

module.exports = guestCtrl