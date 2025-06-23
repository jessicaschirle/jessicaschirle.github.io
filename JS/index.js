var width = $(window).width();
var fileName = window.location.pathname.split('/').pop();
var offset = $('#header').outerHeight();

window.onload = function()
{
	fetch("blog.html")
	.then(response => {
		if (!response.ok) {
			throw new Error(`HTTP error, status = ${response.status}`);
		}
		return response.text();
	})
	.then(html => {
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, "text/html");
		const myLinks = doc.querySelectorAll("ul a");
		for(let i = 0; i < 3; i++){
			console.log("blog-"+i);
			document.getElementById("blog-"+i).href = myLinks[i].href;
			document.getElementById("blog-"+i).innerText = myLinks[i].innerText;
		}
	})
}




window.onscroll = function(){
if ((width >= 1000)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#header").css("background","#fff");
        $("#header").css("color","#000");
	if(fileName !== "") {
		$("#logo").css("color","rgb(12, 60, 110)");
	}
        $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
	$(".dropdown-content").css("box-shadow","0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
	$(".dropdown-content").css("background","#fff");
        $("#header").css("padding","4vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid rgb(12, 60, 110)");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }else{
        $("#header").css("background","transparent");
        $("#header").css("color","#fff");
	if(fileName !== "") {
		$("#logo").css("color","#fff");
	}
        $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
	$(".dropdown-content").css("box-shadow","none");
	$(".dropdown-content").css("background","rgba(12, 60, 110,0.5)");
        $("#header").css("padding","6vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid #fff");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }
}
}

function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },800);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1650);

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top - 50
        }, 1500, function(){

       });
       } 
      });
  });
  
