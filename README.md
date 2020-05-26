This project is based on the project of https://github.com/bchiang7/spotify-profile by the author of Brittany Chiang.

I included functionality such as get followed artists, and redesign the layout and css.
My next step is to include more functionality such as unfollow artists, and change the recommend compomnent.





# Spotify Profile

> A web app for visualizing personalized Spotify data


## Setup

1. [Register a Spotify App](https://developer.spotify.com/dashboard/applications) and add `http://localhost:8888/callback` as a Redirect URI in the app settings
1. Create an `.env` file in the root of the project based on `.env.example`
1. `nvm use`
1. `yarn && yarn client:install`
1. `yarn dev`

## Deploying to Heroku

1. Create new heroku app

   ```bash
   heroku create app-name
   ```

2. Set Heroku environment variables

   ```bash
   heroku config:set SPOTIFY_CLIENT_ID=XXXXX
   heroku config:set SPOTIFY_CLIENT_SECRET=XXXXX
   heroku config:set REDIRECT_URI=https://app-name.herokuapp.com/callback
   heroku config:set FRONTEND_URI=https://app-name.herokuapp.com
   ```

3. Push to Heroku

   ```bash
   git push heroku master
   ```

4. Add `http://app-name.herokuapp.com/callback` as a Redirect URI in the spotify application settings

5. Once the app is live on Heroku, hitting http://app-name.herokuapp.com/login should be the same as hitting http://localhost:8888/login

