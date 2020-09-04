// Source credit: http://thenewcode.com/279/Rotate-Elements-on-Scroll-with-JavaScript

var leftItem = document.getElementById('windows'),
    rightItem = document.getElementById('cons'),
	leftItem2 = document.getElementById('doors'),
	rightItem2 = document.getElementById('oranges'),
	leftItem3 = document.getElementById('facias');

;(function(){

  var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
      if (running){ return; }
      running = true;
      requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  
  throttle("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function(){
  
  leftItem.style.transform = "translate(" + window.pageYOffset + "px)";
  rightItem.style.transform = "translate(-" + window.pageYOffset + "px)";  
	leftItem2.style.transform = "translate(" + window.pageYOffset + "px)";
  rightItem2.style.transform = "translate(-" + window.pageYOffset + "px)";  
	leftItem3.style.transform = "translate(" + window.pageYOffset + "px)";
})