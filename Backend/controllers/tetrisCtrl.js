const connection = require('../dbConfig')

const tetrisCtrl = {

    getRank : async (req, res) => {
        connection.query('SELECT * FROM TetrisRank ORDER BY points DESC', (error, rows)=> {
            if(error) throw error;
            res.send(rows);
        })
    },
    insertRank : async(req,res) => {
        // javascript 구조 분해 할당
        const {name, points} = req.body;
        const sql = `INSERT INTO TetrisRank(name, points) VALUES('${name}','${points}')`
        connection.query(
            sql,(error,rows) => {
                if(error) throw error;
                res.send(rows);
            }
        )
    }
    // getRoyal : async (req, res) => {
    //     connection.query('SELECT * FROM royal', (error, rows)=> {
    //         if(error) throw error;
    //         res.send(rows);
    //     })
    // },
}

module.exports = tetrisCtrl