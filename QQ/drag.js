function getByClass(clsName,parent){
  var oParent=parent?document.getElementById(parent):document,
      eles=[],
      elements=oParent.getElementsByTagName('*');

  for(var i=0,l=elements.length;i<l;i++){
    if(elements[i].className==clsName){
      eles.push(elements[i]);
    }
  }
  return eles;
}

window.onload=drag;

function drag(){
	var oTitle=getByClass('webQQ','loginPanel')[0];
	oTitle.onmousedown=fndown;
	var oClose=document.getElementById('ui_boxyClose');
   oClose.onclick=function(){
   	  document.getElementById('loginPanel').style.display='none';
   }
}
function fndown(event){
	event=event||window.event;
	var odrag=document.getElementById('loginPanel');
	var disX=event.clientX-odrag.offsetLeft;
	var disY=event.clientY-odrag.offsetTop;
	document.onmousemove=function (event){
		event=event||window.event;
		fnMove(event,disX,disY);
		
	}
	
}
function fnMove(e,posX,posY){
	var odrag=document.getElementById('loginPanel');
	var l=e.offsetLeft-posX;
	var t=e.offsetTop-posY;
	odrag.style.left=l+'px';
	odrag.style.top=t+'px';
	
}


function clickIcon(){
	var oState=document.getElementById('loginState'),
		oStateList=document.getElementById('loginStatePanel'),
		oList=oStateList.getElementsByTagName('li'),
		oStateText=document.getElementById('login2qq_state_txt'),
		ologinStateShow=document.getElementById('loginStateShow');
	oState.onclick=function(event){
		event=event||window.event;
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancleBubble=true;
			}
		oStateList.style.display="block";
	}
	for(var i=0;i<oList.length;i++){
		oList[i].onmouseover=function(){
			this.style.background="blue";
			this.style.color="white";
		}
		oList[i].onmouseout=function(){
			this.style.background="#FFF";
			this.style.color="black";
		}
		oList[i].onclick=function(event){
			event=event||window.event;
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancleBubble=true;
			}
			var id=this.id;
			oStateList.style.display="none";
			var txt=getByClass('stateSelect_text',id)[0].innerHTML;
			oStateText.innerHTML=txt;
			ologinStateShow.className="";
			ologinStateShow.className="login-state-show "+id;

		}
		document.onclick=function(event){
			event=event||window.event;
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancleBubble=true;
			}
			oStateList.style.display="none";
		}

	}

}