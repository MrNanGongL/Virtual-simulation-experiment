var word=document.getElementById('word');
var pic=document.getElementById('pic');
var numble=document.getElementById('numble');
var success;
var num;
var dataJson=window.localStorage.getItem('stulist');
	dataJson=eval('('+dataJson+')');
	
state();

function Exit(){
	
		for(var i=0;i<dataJson.length;i++)
	{
		if(dataJson[i].success==0){
			continue;
		}else if(dataJson[i].success==1){
			dataJson[i].success=0;
			success=0;
			break;
		}
	}
	
	dataJson=JSON.stringify(dataJson);
	window.localStorage.setItem('stulist',dataJson);
	
		if(success==0){
			word.style.display='block';
			pic.style.display='none';
		}
}//退出登录

function state(){
	
	for(var i=0;i<dataJson.length;i++)
	{	
		if(dataJson[i].success==0){
			continue;
		}else if(dataJson[i].success==1){
			success=1;
			num=dataJson[i].stuid;
			console.log(num);
		}
	}
	
	if(success==0){
			word.style.display='block';
			pic.style.display='none';
		}
		
	if(success==1){
			word.style.display='none';
			pic.style.display='block';
			numble.innerHTML=num;
		}
	
	console.log(dataJson);
}//在线状态


