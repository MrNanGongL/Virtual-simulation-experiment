var stuId=document.getElementById('stuId');
var stuPassword=document.getElementById('stuPassword');
var stuPassword2=document.getElementById('stuPassword2');
var submit=document.getElementById('submit');
var success=0;//登录状态

submit.onclick=function() {
	var upDate=null;
	var repeat=null;
	
	if(stuId.value&&stuPassword.value&&stuPassword2.value){
		if(stuPassword.value!=stuPassword2.value){
			alert("密码不一致！请重新输入");
		}
		else{
			if(window.localStorage.getItem('stulist')){
				upDate={'stuid':stuId.value,'password':stuPassword.value,'success':success};
				var dataJson=window.localStorage.getItem('stulist');
				dataJson=eval('('+dataJson+')');
				for(var i=0;i<dataJson.length;i++){
					if(dataJson[i].stuid==upDate.stuid){
						alert('本学号已被注册！');
						repeat=1;
					}
				}
				
				if(repeat==null){
					dataJson.push(upDate);
					dataJson=JSON.stringify(dataJson);
					window.localStorage.setItem('stulist',dataJson);
					alert('注册成功');
					window.location='./land.html';
				}
			}
			else{
				upDate={'stuid':stuId.value,'password':stuPassword.value,'success':success};
				var data=[];
				data.push(upDate);
				data=JSON.stringify(data);
				window.localStorage.setItem('stulist',data);
				alert('注册成功');
				window.location='./land.html';
			}
			
		}
	}
}