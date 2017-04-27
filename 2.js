var http = require('http');


			http.get({
  			host: 'pubsub.pubnub.com',
	  		port: 80,
		  	path: '/v2/history/sub-key/sub-c-64fada00-1c48-11e7-b284-02ee2ddab7fe/channel/my_public_ip_list',
			}, function(response){
		  	var body = '';
  			response.on('data', function(d) {
    			body += d;
	  		});

		  	response.on('end', function(){
  		  	// Data reception is done, do whatever with it!
    			var parsed = JSON.parse(body)[0];
					//console.log(parsed);
					
					var latest = {};
					for(var i in parsed){
						var x;
						try{
							x = JSON.parse(parsed[i]);
							if(x.hostname != "rpi2") console.log(x);
							if(typeof x.hostname != "string") continue;
							if(latest[x.hostname] && latest[x.hostname].timestamp){
								if(latest[x.hostname].timestamp < x.timestamp){
									latest[x.hostname] = x;
								}
							}else{
								latest[x.hostname] = x;
							}
						}catch(e){
							continue;
						}
					}
					console.log("============= latest");
					console.log(latest);
					
  			});
			});
