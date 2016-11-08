"use strict";
const http = require("http");
const fs = require("fs");

function get(key,response,token,number){
	const id=[
		"/http.aspx?action=loginIn&uid=pandelion&pwd=mmit7750",
		"/http.aspx?action=getMobilenum&uid=pandelion&token="+token+"&pid=8816&lock=0&size=&mobile=",
		"/http.aspx?action=getVcodeAndReleaseMobile&uid=pandelion&token="+token+"&pid=8816&mobile="+number+"&author_uid=pandelion"
		];
	const options = {  
		hostname: 'we2.ma.com',  
		port: 80,  
		path: id[key],  
		method: "",  
		headers: {  
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'  
		}  
	}; 
	const req = http.request(options, function (res) {  
		res.setEncoding('utf8');  
		res.on('data', function (chunk) { 
			const mess=chunk.split("|");
			console.log(mess);
			switch(key){
				case 0:{
					if(mess[1].length!==16){
						chunk="不知道为什么失败了！";
					}
					else{
						chunk=mess[1];
					}
					break;
				}
				case 1:{
					if(mess[0].length!==11){
						chunk="我忘了添加号码了，请通知我添加！";
					}
					else{
						chunk=mess[0];
					}
					break;
				}
				case 2:{
					console.log(mess[0]);
					if(mess[0]==="not_receive"){
						chunk="暂时没有收到验证码，自动收取中！";
					}
					else{
						chunk=mess[1];
					}
					break;
				}
			}
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
