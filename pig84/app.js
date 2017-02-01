"use strict";
const http = require("http");
const fs = require("fs");

function get(key,response,token,number){
	const id=[
		"/pubApi/uLogin?uName=pandelion&pWord=mmit7750&Developer=Y1ywdDJCpG3BO2s4VzN7Zw%3d%3d",
		"/pubApi/GetPhone?ItemId=2200&Phone=17060916741&token="+token,
		"/pubApi/GMessage?token="+token+"&ItemId=2200&Phone=17060916741"//+number
		];
	const options = {  
		hostname: 'api.shjmpt.com',  
		port: 9002,  
		path: id[key],  
		method: "",  
		headers: {  
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'  
		}  
	}; 
	const req = http.request(options, function (res) {  
		res.setEncoding('utf8');  
		res.on('data', function (chunk) { 
			console.log(chunk);
			switch(key){
				case 0:{
					const mess=chunk.split("&");
					if(mess[0]){
						chunk=mess[0];
					}
					else{
						chunk="不知道为什么失败了！";
					}
					break;
				}
				case 1:{
					const mess=chunk.split(";");
					if(mess[0].length!==11){
						chunk="我忘了添加号码了，请通知我添加！";
					}
					else{
						chunk=mess[0];
					}
					break;
				}
				case 2:{
					console.log(chunk);
					chunk=chunk.replace("MSG&2200&","");
					chunk=chunk.replace("&","-");
					break;
				}
			}
			chunk=chunk+"";
			response.write(chunk);
			response.end();
		});  
	});  
  
	req.on('error', function (e) {  
		console.log('problem with request: ' + e.message);  
	});  
  
	// write data to request body  
	req.write("");  
	req.end(); 
}

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
	if(request.method == "GET"){
		response.write(fs.readFileSync("index.html"));
		response.end();
    }
	else{
        var postdata = "";
        request.addListener("data",function(postchunk){
            postdata += postchunk;
        });

        request.addListener("end",function(){
            console.log(postdata);
			postdata=postdata.split("|");
			switch(postdata[0]){
				case "是我":{get(0,response,"0","0");break;}
				case "给我一个号码吧":{get(1,response,postdata[1],"0");break;}
				case "验证码":{get(2,response,postdata[1],postdata[2]);break;}
				default:{
					if(postdata.length==11){
						get(2,response);
						break;
					}
				}
			}           
        });
    }
    
}).listen(process.env.PORT || 3100);
console.log("服务已启动！");
