modulex.add("event-dom/gesture/basic",["event-dom/base","event-dom/gesture/util"],function(e,t,n){var o,r=e("event-dom/base"),u=e("event-dom/gesture/util");o=function(e){function t(e,t){var o={isActive:1};o[t]=function(t){n.fire(t.target,e,t)},d(e,{order:1,handle:o})}e={};var n=r,o=u,d=o.addEvent,s=e={START:"ksGestureStart",MOVE:"ksGestureMove",END:"ksGestureEnd"};return t(s.START,"onTouchStart"),t(s.MOVE,"onTouchMove"),t(s.END,"onTouchEnd"),e}(),n.exports=o});