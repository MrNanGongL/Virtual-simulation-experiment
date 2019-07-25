var stuId = document.getElementById('stuId');
var stuPassword = document.getElementById('stuPassword');
var submit = document.getElementById('submit');
submit.onclick = function () {

    var login = { 'stuid': stuId.value, 'password': stuPassword.value };
    var dataJson = window.localStorage.getItem('stulist');
    var flag = false;
    var data;
    dataJson = eval('(' + dataJson + ')');
    if (login.stuid && login.password) {
        for (var i = 0; i < dataJson.length; i++) {
            if (dataJson[i].stuid == login.stuid && dataJson[i].password == login.password) {
                dataJson[i].success = 1;
                console.log(dataJson[i].stuid + '登录成功')
                window.location.href='./index.html'
                
            }
            else {
                dataJson[i].success = 0;
            }


            flag = true;
        }

        data = dataJson;
        data = JSON.stringify(data);
        window.localStorage.setItem('stulist', data);
       
        if (flag == false) {
            alert('用户名或密码错误');
        }
    }
    else {
        alert('未输入用户名或者密码');
    }



}