document.addEventListener("touchstart",function(){},false);$(window).on('load',function(){$('#loading').fadeOut(300);})
function timeout(ms){return new Promise(resolve=>setTimeout(resolve,ms));}
$(document).ready(function(){$(window).scroll(function(){var height=$(window).scrollTop();if(height>50){$(".button-select-category").css("visibility","visible");$(".button-select-category").css("opacity","1");}else{$(".button-select-category").css("opacity","0");}});$(document).scroll(function(){$('#bt-government').click(function(){$('.bgwhitealpha').removeClass('border-active');$('#government').addClass('border-active');});$('#bt-thaiStock').click(function(){$('.bgwhitealpha').removeClass('border-active');$('#thaiStock').addClass('border-active');});$('#bt-foreignStock').click(function(){$('.bgwhitealpha').removeClass('border-active');$('#foreignStock').addClass('border-active');});$('#bt-yeekee').click(function(){$('.bgwhitealpha').removeClass('border-active');$('#yeekee').addClass('border-active');});$('#bt-jetsadabet').click(function(){$('.bgwhitealpha').removeClass('border-active');$('#jetsadabet').addClass('border-active');});$('#bt-jetsadabetvip').click(function(){$('.bgwhitealpha').removeClass('border-active');$('#jetsadabetvip').addClass('border-active');});$('#back-top').click(function(){$('.bgwhitealpha').removeClass('border-active');});});$('carousel').carousel();$('#lang').selectpicker();$('#lang-pc').selectpicker();$('#lang-mobile').selectpicker();$('.boxclose').click(function(){$('.bubblechat').addClass('d-none');});$(".box__keyboard .btn-outline-primary").on("click",function(){$(this).blur();});$(".box__keyboard .btn-outline-primary").on("touchstart",function(){$(this).removeClass("mobileHoverFix");});$(".box__keyboard .btn-outline-primary").on("touchend",function(){$(this).addClass("mobileHoverFix");$(this).hasClass("mobileHoverFix",function(){$(this).removeClass("mobileHoverFix");},1500);},1500);$("#marquee1").marquee();});window.onload=function(){if(screen.width<320){var mvp=document.getElementById('vp');mvp.setAttribute('content','user-scalable=no,width=320');}};(function($){$.fn.nodoubletapzoom=function(){$(this).bind('touchstart',function preventZoom(e){var t2=e.timeStamp,t1=$(this).data('lastTouch')||t2,dt=t2-t1,fingers=e.originalEvent.touches.length;$(this).data('lastTouch',t2);if(!dt||dt>500||fingers>1)return;e.preventDefault();$(this).trigger('click').trigger('click');});};})(jQuery);