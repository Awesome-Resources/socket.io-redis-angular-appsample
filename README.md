# socket.io-redis Application Example

This is a very simple Node.JS client/server application that shows how to setup [Express.js](http://expressjs.com/), [Socket.IO 1.x](http://socket.io/) and [socket.io-redis](https://github.com/socketio/socket.io-redis) together with angular 5.

This is very useful as a starting point to understand how to scale Socket.IO RealTime Applications that need multiple server processes. Redis is used as a storage point (adapter) in order to run multiple socket.io instances in different processes or servers that can all broadcast and emit events to and from each other.

The application uses all the interesting Socket.IO features like **namespaces** and **rooms**. Take a look to the code to learn how.

This work was inspired by [socket.io-redis-sample](https://github.com/stoshiya/socket.io-redis-sample) and extended to test namespaces and rooms.

## Usage

1. Run redis-server (the application uses default configuration)
```
$ sudo apt-get install redis-server
$ sudo service redis-server restart
$ sudo service redis-server status
```

2. Clone this repo and cd into the root to install its dependencies
```
$ git clone https://github.com/Awesome-Resources/socket.io-redis-angular-appsample.git
$ cd socket.io-redis-appsample
$ npm install
```

3. Run the application multiple times (use different ports)
```
$ PORT=3000 node app.js
$ PORT=3001 node app.js
$ PORT=3002 node app.js
$ PORT=3003 node app.js
```

4. Use the browser to to connect to each application and emit events/messages to other clients interacting with the client app.
```
$ google-chrome http://127.0.0.1:3000
$ google-chrome http://127.0.0.1:3001
$ google-chrome http://127.0.0.1:3002
$ google-chrome http://127.0.0.1:3003
```

5. Client side application
```
$ cd angular/
$ npm start
```

##Working
This is a very simple MEAN stack based socket example with redis. Running redis server you need to run node app.js.
So you able to get a view of a back-side application on localhost:3000.

For Client side you need to run angular application, then here I've defined 'abc' room id over 'message-room' that will handsacked with backend,
verified and subscribed through redis-socket. Then using this room id you can send message to front-side.
For sending general message you can send over 'message-all' event.

## License

MIT

### Something's broken?
Please do open a new issue, but please check first that the TODO list and same issue has not already been raised and that you are using the latest version :)

Please **do not** send private emails - Github Issues are supposed to help whoever might have your same issue, so it is the right place to help each other.

Issues not filled out with the provided templates are going to be closed. Please provide as much information as possible: do include a plunkr so that I can see what the problem is without having to replicate your environment on my laptop.

No features requests will be considered, unless they are Pull Requests. I feel the component is already quite bloated, and I'd like on solving bugs and making this more reliable for everyone.

## Contributing/Pull Requests
Contributions are highly welcome! No, there is no guideline on how to do it. Just make sure to lint and unit test your changes. We'll figure out the rest with a couple of messages...

### Ok - cool stuff. But when will you fix the issue I created?
Do please read this great post by Micheal Bromley: http://www.michaelbromley.co.uk/blog/529/why-i-havent-fixed-your-issue-yet. No, I don't have babies, but am not 24/7 coding :)