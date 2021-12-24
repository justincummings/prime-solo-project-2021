
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "cards" (
    "id" SERIAL PRIMARY KEY,
    "prompt" TEXT NOT NULL,
    "response"  TEXT NOT NULL
);

CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL
);

INSERT INTO "category" ("name")
VALUES 
('Interview Prep'),
('Front-end'),
('Back-end'),
('General'),
('Code Challenge');


