var SDRightClickMenu={offsetfromcursorX:12,offsetfromcursorY:10,enabletip:!1,PopTipestablished:!1,_PopTipDiv:null,mouseInMenuFlag:!1,Browsertruebody:function(){return document.documentElement?document.documentElement:document.body},movePopTipAftMouse:function(i){if(SDRightClickMenu.enabletip){var e=i.clientX+SDRightClickMenu.Browsertruebody().scrollLeft,t=i.clientY+SDRightClickMenu.Browsertruebody().scrollTop,o=SDRightClickMenu.Browsertruebody().clientWidth,n=SDRightClickMenu.Browsertruebody().clientHeight,l=o-i.clientX-SDRightClickMenu.offsetfromcursorX,u=n-i.clientY-SDRightClickMenu.offsetfromcursorY,c=SDRightClickMenu.offsetfromcursorX<0?-1*SDRightClickMenu.offsetfromcursorX:-1e3;l<SDRightClickMenu._PopTipDiv.offsetWidth?SDRightClickMenu._PopTipDiv.style.left=e-SDRightClickMenu._PopTipDiv.offsetWidth+"px":SDRightClickMenu._PopTipDiv.style.left=e<c?"5px":e+SDRightClickMenu.offsetfromcursorX+"px",u<SDRightClickMenu._PopTipDiv.offsetHeight?SDRightClickMenu._PopTipDiv.style.top=t-SDRightClickMenu._PopTipDiv.offsetHeight-SDRightClickMenu.offsetfromcursorY+"px":SDRightClickMenu._PopTipDiv.style.top=t+SDRightClickMenu.offsetfromcursorY+"px"}},showRightClickMenu:function(i,e){thetext=i.getAttribute("menuContent"),SDRightClickMenu.PopTipestablished||(SDRightClickMenu._PopTipDiv=document.createElement("div"),SDRightClickMenu._PopTipDiv.style.position="absolute",SDRightClickMenu._PopTipDiv.style.border="1px solid #FFC83C",SDRightClickMenu._PopTipDiv.style.backgroundColor="#FFF9EB",SDRightClickMenu._PopTipDiv.style.padding="5px",SDRightClickMenu._PopTipDiv.style.lineHeight="18px",SDRightClickMenu._PopTipDiv.style.overflow="auto",document.body.appendChild(SDRightClickMenu._PopTipDiv),SDRightClickMenu.PopTipestablished=!0),SDRightClickMenu._PopTipDiv.style.width=e+"px",SDRightClickMenu._PopTipDiv.innerHTML=thetext,SDRightClickMenu.enabletip=!0,SDRightClickMenu._PopTipDiv.style.display="";var t=window.event||arguments.callee.caller.arguments[0];SDRightClickMenu.movePopTipAftMouse(t),SDRightClickMenu._PopTipDiv.onmouseover=function(){SDRightClickMenu.mouseInMenuFlag=!0},SDRightClickMenu._PopTipDiv.onmouseout=function(){SDRightClickMenu.mouseInMenuFlag=!1},t.returnValue=!1}};document.onclick=function(i){return SDRightClickMenu.enabletip&&(SDRightClickMenu.enabletip=!1,SDRightClickMenu._PopTipDiv.style.display="none"),!0};