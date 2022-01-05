const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//get route to display flashcard prompt on user page
router.get('/', rejectUnauthenticated, (req, res) => {
    const sqlQuery = `
        SELECT * FROM "cards"
        WHERE "user_id"=$1;
    `;
    const sqlValues = [req.user.id];
    console.log('in get route for cards', sqlQuery);
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
            res.send(dbRes.rows);
        })
    .catch((dbErr) => {
        res.sendStatus(500);
    })
});

//post route to send input to DB
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('in router post');
    console.log(req.body);
    console.log('user', req.user);
    const sqlQuery = `
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
    pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
        console.log('sqlQuery', sqlQuery);
    res.sendStatus(201);
    })
    .catch((dbErr) => {
    res.sendStatus(500);
    })
});

//put route for the card response
router.put('/:id', rejectUnauthenticated, (req, res) => {
    const sqlQuery = `
    SELECT * FROM "cards"
    WHERE "user_id"=$1;
    `;
    const sqlValues = [req.user.id];
    console.log('in get put route for card response', sqlQuery);
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
            res.send(dbRes.rows);
        })
    .catch((dbErr) => {
        res.sendStatus(500);
    })
})

module.exports = router;
