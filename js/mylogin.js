var stuId=document.getElementById('stuId');
var stuPassword=document.getElementById('stuPassword');
var submit=document.getElementById('submit');
var exit=document.getElementById('exit');
var success;

submit.onclick=function(){
	
	var login={'stuid':stuId.value,'password':stuPassword.value,'success':success};
	var dataJson=window.localStorage.getItem('stulist');
	dataJson=eval('('+dataJson+')');
	var flag=false;
	if(login.stuid&&login.password){
		for(var i=0;i<dataJson.length;i++){
			if(dataJson[i].stuid==login.stuid&&dataJson[i].password==login.password)
			{
				flag=true;
				dataJson[i].success=1;
				console.log(dataJson[i].success);
				alert(login.stuid+'登录成功');
				window.location='./index.html';
			}
			
			if(dataJson[i].stuid==login.stuid&&dataJson[i].password != login.password)
			{
				alert('请输入正确的密码')
				flag=true;
			}
		}
		
		//dataJson.push(login);
		dataJson=JSON.stringify(dataJson);
		window.localStorage.setItem('stulist',dataJson);
		if(flag==false){
			alert('该用户不存在');
		}
	}else{
		alert('请输入学号和密码');
	}
}


