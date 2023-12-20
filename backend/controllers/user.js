import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM questions";
//q = query
    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};
    
    export const addUser = (req, res) => {
        const q = 
        "INSERT INTO questions(`question1`,`question2,`question3`) VALUES(?)";

        const values = [
            req.body.question1,
            req.body.question2,
            req.body.question3,

        ];
    
        db.query(q, [values], (err) => {
            if(err) return res.jason(err);

            return res.status(200).json("Response entered successfully");
        });
    };

    export const updateUser = (req, res) => {
        const q = 
        "Update questions SET `question1` = ?,`question2 = ?,`question3 = ?` WHERE Id = ?";

        const values = [
            req.body.question1,
            req.body.question2,
            req.body.question3,

        ];
    
        db.query(q, [...values,req.params.id], (err) => {
            if(err) return res.jason(err);

            return res.status(200).json("Response successfully updated");
        });
    };

    export const deleteUser = (req, res) => {
        const q = "DELETE from  questions WHERE `Id` = ?";
    
        db.query(q, [...values,req.params.id], (err) => {
            if(err) return res.jason(err);

            return res.status(200).json("user successfully deleted");
        });
    };