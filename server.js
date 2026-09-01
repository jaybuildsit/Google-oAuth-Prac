import { config } from "dotenv";
import express from "express";
import passport from "passport";

import {Strategy as GoogleStrategy } from "passport-google-oauth20"

config();

const app = express()


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use(passport.initialize());

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URI


}));

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

