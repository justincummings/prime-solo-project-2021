const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * Get all of the flashcards for correct user
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const sqlQuery = `
        SELECT * FROM "flashcards"
        WHERE "user_id"=$1;
    `;
    const sqlValues = [req.user.id];
    pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
    res.send(dbRes.rows);
    })
    .catch((dbErr) => {
    res.sendStatus(500);
    })
});

router.post('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body);
    console.log('user', req.user);
    const sqlQuery = `
    INSERT INTO "flashcards"
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
    res.sendStatus(201);
    })
    .catch((dbErr) => {
    res.sendStatus(500);
    })
});
module.exports = router;