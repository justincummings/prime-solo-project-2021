const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//get route
router.get('/', rejectUnauthenticated, (req, res) => {
    const sqlQuery = `
        SELECT * FROM "cards"
        WHERE "user_id"=$1;
    `;
    const sqlValues = [req.user.id];
    // console.log('in get route for cards', sqlQuery);
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
            res.send(dbRes.rows);
        })
    .catch((dbErr) => {
        res.sendStatus(500);
    })
});

//post route to DB
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('in router post');
    console.log(req.body);
    console.log('user', req.user);
    const sqlText = `
    INSERT INTO "cards"
        ("prompt", "response", "user_id")
    VALUES
        ($1, $2, $3);
    `;
    const sqlValues = [
        req.body.prompt,
        req.body.response,
        req.user.id
    ];
    pool.query(sqlText, sqlValues)
    .then((dbRes) => {
        console.log('sqlText', sqlText);
    res.sendStatus(201);
    })
    .catch((dbErr) => {
    res.sendStatus(500);
    })
});

router.get('/:id', rejectUnauthenticated, (req, res) => {
    const sqlText = `
        SELECT * FROM "cards"
        WHERE "id"=$1;
    `;
    const sqlValues = [
        req.params.id
    ];
    // console.log('in get route for cards', sqlText);
    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            res.send(dbRes.rows[0]);
        })
    .catch((dbErr) => {
        res.sendStatus(500);
    })
});


//delete route for card
router.delete('/:id', (req, res) => {
    const cardToDelete = req.params.id;
    console.log('req.params.id:', req.params.id);
    const sqlText = `
    DELETE FROM "cards"
    WHERE "id"=$1;`;
    const sqlValues = [cardToDelete];
    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
        res.sendStatus(200);
        }).catch((dbErr) => {
        res.sendStatus(500);
        console.log('card delete error', dbErr);
    })
});

router.put('/:id', (req, res) => {
    const sqlText = `
        UPDATE cards
        SET 
            prompt = $1,
            response = $2
        WHERE id = $3;
    `;
    const sqlValues = [
        req.body.prompt,
        req.body.response,
        req.body.user_id
    ];
    
    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
        res.sendStatus(200);
    })
    .catch((dbErr) => {
        console.log('UPDATE database error', dbErr);
        res.sendStatus(500);
    });
});


module.exports = router;
