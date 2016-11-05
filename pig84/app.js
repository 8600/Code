var http = require("http");
var fs = require("fs");

function cutString(original,before,after,index){index=index||0;if(typeof index==="number"){var P=original.indexOf(before,index);if(P>-1){if(after){var f=original.indexOf(after,P+1);if(f>-1){return original.slice(P+before.toString().length,f);}else{console.error("owo [在文本中找不到 参数三 "+after+"]");}}else{return original.slice(P+before.toString().length);}}else{console.error("owo [在文本中找不到 参数一 "+before+"]");}}else{console.error("owo [sizeTransition:"+index+"不是一个整数!]");}}

function get(key,response,token,number){
	var id=[
		"/http.aspx?action=loginIn&uid=pandelion&pwd=mmit7750",
		"/http.aspx?action=getMobilenum&uid=pandelion&token="+token+"&pid=8816&lock=0&size=&mobile=",
		"/http.aspx?action=getVcodeAndReleaseMobile&uid=pandelion&token="+token+"&pid=8816&mobile="+number+"&author_uid=pandelion"
		];
	var options = {  
		hostname: '不公开',  
		port: 80,  
		path: id[key],  
		method: "",  
		headers: {  
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'  
		}  
	}; 
	var req = http.request(options, function (res) {  
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
						chunk="没有收到验证码，请过几秒重试！";
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
        })

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
        })
    }
    
}).listen(process.env.PORT || 3000);
console.log("服务已启动！");
