const passport = require('passport');
const googlestrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
    new googlestrategy({
        clientID:keys.GoogleClientID,
        clientSecret:keys.GoogleClientSecret,
        callbackURL:'/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done)=>{
        console.log('access token', accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile', profile);
    })
);

