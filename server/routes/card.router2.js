const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
    const sqlQuery = `
        SELECT * FROM "cards"
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

/**
 * POST route template
 */
  // POST route code here
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

module.exports = router;
