**Pre-settings:** \
installing node js, express and socket.io
```
apt-get install npm
mkdir chat
cd chat
npm init
npm install --save socket.io
npm install --save express
```
keep app.js and index.html files in chat or whatever folder you created
and run the file using the following command \

`node app.js`

Create the subdirectory ‘client’ in your project directory. Then cd into it and create a page called ‘index.html’. Add the following lines of code to the file \

Here we are telling our app to use express, starting our server, telling our app to use /client as the directory to serve pages from, and setting /client/index.html as the starting page for our app. This is a pretty standard setup for a Node.js app that uses express \

one last step \
for a node js chat server that needs to be running consistently–Forever. Forever allows your node app to run without you maintaining an active session with the app. Install it with this command. \
`npm install forever -g`

Then, in your project directory, use this command to start your app and keep it running. \
```
forever start app.js
forever stop app.js
```
**Let’s take a step by step look at what is going on here:** \
* When a socket connects, we define functions based on events or strings the socket receives
* Generate a random id when a user connects and add them to our socket list variable
* Check's if user already exits,if yes notify with `userExists` event.
* Define a function when the event `Msg` occurs, which loops through our socket list and sends the message to every connected socket with our `newMsg` event.
* When a socket disconnects, remove them from our socket list and notifies in the server terminal through `userLeft` event.
* Finally, tell our app to listen on port 4242. Whatever port you choose, make sure it is open and not blocked by a firewall.

*how to find VPS Ip address?* \
do ifconfig in ubuntu or do ipconfig in windows --> check for `wlan-inet`address \ 

**how to chat?** \
then give your ip address to all the clients which we want to connect \
`<vps_ip_addr>:port_num`
By using this anyone who wants to chat can be connected easily through your VPS Ip address


**THANK YOU**
