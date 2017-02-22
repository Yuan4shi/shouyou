window.onresize = r;
function r(resizeNum){	
	var winW = window.innerWidth;
	document.getElementsByTagName("html")[0].style.fontSize=winW*0.15625+"px";
};
setTimeout(function(){r(0)}, 100);
