# PageSnap

This is really just a quick demo of how to create a simple service for snapshotting a web page on Heroku. In reality, you’d want this running behind some kind of password or auth so somebody doesn't slam it with requests.

## Run it!

First, clone this repo!

Then, create your Heroku app using the heroku-buildpack-multi buildpack (this is needed to run both NodeJS and PhantomJS):

```
$ heroku create --stack cedar --buildpack https://github.com/ddollar/heroku-buildpack-multi.git
```

And then simply push it to Heroku!

```
$ git push heroku master
```

Now you can head on over to your browser and point it to your app, e.g. http://<your-app-name>.herokuapp.com/http%3A%2F%2Fheroku.com.png to see a snapshot of heroku.com
