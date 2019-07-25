var lis=document.querySelectorAll('.top_list ul li');
var divs=document.getElementById('divs');
var sparts=divs.children;

for(var i = 0;i<lis.length;i++)
{	let slis=lis[i];
	slis.addEventListener('click',show,false);
	slis.index=i;
}

function show(){
	let a=this.children[0];

	for(var i=0;i<lis.length;i++){
		let b=lis[i].children[0];
		b.className=b.className.replace('show','');
	}
	
	a.className=a.className+'show';
	
	for(var i=0;i<lis.length;i++){
		sparts[i].style.display='none';
	}
	sparts[this.index].style.display='block';
}

function switchTab1()
{
	console.log('click')
	var sdivs = document.getElementById('divs').getElementsByTagName('div');
	for (var i = 0; i < sdivs.length; i++) {
		var item = sdivs[i];
		if (item.id == null || item.id == '')
		{
			continue
		}
		
		item.style.display = 'none';
	}
	
	for(var i=0;i<lis.length;i++){
		let b=lis[i].children[0];
		b.className=b.className.replace('show','');
	}
	
	
	let a=lis[1].children[0];
	a.className=a.className+'show';
	
	var div=document.getElementById('two');
	div.style.display='block';
	console.log(div);
}
function switchTab2()
{
	console.log('click')
	var sdivs = document.getElementById('divs').getElementsByTagName('div');
	for (var i = 0; i < sdivs.length; i++) {
		var item = sdivs[i];
		if (item.id == null || item.id == '')
		{
			continue
		}
		
		item.style.display = 'none';
	}
	
	for(var i=0;i<lis.length;i++){
		let b=lis[i].children[0];
		b.className=b.className.replace('show','');
	}
	
	
	let a=lis[2].children[0];
	a.className=a.className+'show';
	
	var div=document.getElementById('three');
	div.style.display='block';
	console.log(div);
}

function switchTab3()
{
	console.log('click')
	var sdivs = document.getElementById('divs').getElementsByTagName('div');
	for (var i = 0; i < sdivs.length; i++) {
		var item = sdivs[i];
		if (item.id == null || item.id == '')
		{
			continue
		}
		
		item.style.display = 'none';
	}
	
	for(var i=0;i<lis.length;i++){
		let b=lis[i].children[0];
		b.className=b.className.replace('show','');
	}
	
	
	let a=lis[3].children[0];
	a.className=a.className+'show';
	
	var div=document.getElementById('four');
	div.style.display='block';
	console.log(div);
}

function switchTab4()
{
	console.log('click')
	var sdivs = document.getElementById('divs').getElementsByTagName('div');
	for (var i = 0; i < sdivs.length; i++) {
		var item = sdivs[i];
		if (item.id == null || item.id == '')
		{
			continue
		}
		
		item.style.display = 'none';
	}
	
	for(var i=0;i<lis.length;i++){
		let b=lis[i].children[0];
		b.className=b.className.replace('show','');
	}
	
	
	let a=lis[4].children[0];
	a.className=a.className+'show';
	
	var div=document.getElementById('five');
	div.style.display='block';
	console.log(div);
}

function switchTab5()
{
	console.log('click')
	var sdivs = document.getElementById('divs').getElementsByTagName('div');
	for (var i = 0; i < sdivs.length; i++) {
		var item = sdivs[i];
		if (item.id == null || item.id == '')
		{
			continue
		}
		
		item.style.display = 'none';
	}
	
	for(var i=0;i<lis.length;i++){
		let b=lis[i].children[0];
		b.className=b.className.replace('show','');
	}
	
	
	let a=lis[5].children[0];
	a.className=a.className+'show';
	
	var div=document.getElementById('six');
	div.style.display='block';
	console.log(div);
}
