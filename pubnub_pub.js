
'use strict';

var os = require('os');
var PubNub = require('pubnub');

var info = {
	ifaces:os.networkInterfaces(), 
	hostname: os.hostname(), 
	localeString: new Date().toLocaleString(),
	timestamp: new Date().getTime(),
};
   
console.log(info);

var pubnub = new PubNub({
  publishKey : 'pub-c-ef0fc78d-2db3-49bf-b31c-59ecb4dfe378',
  subscribeKey : 'sub-c-64fada00-1c48-11e7-b284-02ee2ddab7fe'
});
       
pubnub.publish({
  channel : "my_public_ip_list",
  message : JSON.stringify(info),
	storeInHistory: true
}, function(status, response) {
  console.log(status, response);
});
       

