;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};

	// Parallax
	var parallax = function() {
		if ( !isMobile.any() ) {
			$(window).stellar();
		}
	};


	// Page Nav
	var clickMenu = function() {
		$('#navbar a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top - 0
			    	}, 500);
			   }

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-fh5co-nav-toggle').removeClass('active');
		    }

		    event.preventDefault();
		    return false;
		});
	};
	// Reflect scrolling in navigation
	var navActive = function(section) {
		
		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};

	var navigationSection = function() {

		var $section = $('section[data-section]');
		
		$section.waypoint(function(direction) {
		  	
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};

	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
					}, 100 );
				}
			} 
			
		});
	};


	// Animations
	// Home
	var homeAnimate = function() {
		if ( $('#fh5co-home').length > 0 ) {	

			$('#fh5co-home').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-home .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var exploreAnimate = function() {

		var explore = $('#fh5co-explore');
		if ( explore.length > 0 ) {	

			explore.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						explore.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						explore.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 700);

					setTimeout(function() {
						explore.find('.to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 1000);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var gettingStartedAnimate = function() {
		var started = $('.getting-started-1');
		if ( started.length > 0 ) {	

			started.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						started.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						started.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var pricingAnimate = function() {
		var pricing = $('#fh5co-pricing');
		if ( pricing.length > 0 ) {	

			pricing.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						pricing.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						pricing.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var servicesAnimate = function() {
		var services = $('#fh5co-services');
		if ( services.length > 0 ) {	

			services.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					var sec = services.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						services.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						services.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var teamAnimate = function() {
		var team = $('#fh5co-team');
		if ( team.length > 0 ) {	

			team.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = team.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						team.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						team.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var footerAnimate = function() {
		var footer = $('#fh5co-footer');
		if ( footer.length > 0 ) {	

			footer.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(function() {
						footer.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter-section').length > 0 ) {
			$('#fh5co-counter-section').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '90%' } );
		}
	};

	// Document on load.
	$(function(){
		parallax();
		fullHeight();
		clickMenu();
		windowScroll();
		navigationSection();
		
		// Animations
		homeAnimate();
		exploreAnimate();
		gettingStartedAnimate();
		pricingAnimate();
		servicesAnimate();
		teamAnimate();
		footerAnimate();
		counter();
		counterWayPoint();

	});


}());
var show = [];
var totalSec = 0;
function typeIn()
{
    var text = document.getElementById("submitTxt").value; //receive inputbox
    if(text == "")
    {
        var trial = localStorage.getItem("trial"); //determine how many times of null input and trigger events
        if (trial == null) {
            localStorage.setItem("trial", 1);
        }
        else {
            localStorage.setItem("trial", Number(trial) + 1);
        }
        switch (Number(trial))
        {
            case 1:
                alert("Try to type something");
                break;
            case 3:
                alert("There is no relationship between the first puzzle and the PGP content below.");
                break;
            case 10:
                alert("You look so confused?");
                break;
            case 11:
                alert("I won't give you an answer.");
                break;
            case 15:
                alert("I m pretty sure that you can find the answer.");
                break;
            case 19:
            case 20:
                alert("..........");
                break;
            case 21:
                alert("Hey....that's enough.");
                break;
            case 22:
                alert("Fine........");
                alert("Try out using different cases of letter and symbol.");
                break;
            default:
                if (trial < 22)
                {
                    alert("");
                }
                else
                {
                    alert("Try it with different cases of letter and symbol.");
                }
        }
    }
    else if(text == "riGHT")//Answer correct ans
    {
        var pgpPrivateKey = document.getElementById("pgpPrivateKey");
        var pgpEncryptedMess = document.getElementById("pgpEncryptedMess");
        pgpPrivateKey.innerHTML = "lQOsBFzzilYBCAC<span style='color:GreenYellow'>P</span>JdqQGv35/JMB1h+723EsEMNJxhT1l5<span style='color:GreenYellow'>a</span>d<span style='color:GreenYellow'>s</span>0xSyVCnpBMdK<span style='color:GreenYellow'>s</span>D6<br>I6Gk<span style='color:Magenta'>Wut</span>uMMkP/eMNGDxodiXocq/iLDm3kC5oU+s+/JgWXgrWoZS7nDZeI8HxUZ7A<br>Qq<span style='color:GreenYellow'>w</span>AB<span style='color:Magenta'>YNW</span>kIO430BZkrgpzfXUJZPAmubc+WQ2yanMZCQ/PsVVUjyiix5xqiMXjOEv<br>+pSdY<span style='color:GreenYellow'>o</span><span style='color:Magenta'>ahz</span>975PLtmwT1Ai6+L4I6uPWBBdNboXniUqvJ0oRUT1awcsd1lwVWhD3qU<br>LUKVXV4<span style='color:Magenta'>l9M</span>S/YnYXim21VWeffAb4M1pq+XDblhwb+g5gVW<span style='color:GreenYellow'>r</span>VnB9HY4WHQDOt+8sE<br>rLDJ3LVy<span style='color:Magenta'>XXf</span>NIOVEDW3P1xpM1qPtLLTkrwezABEBAAH/AwMCkY0FKc52NBtgI9Uo<br>fbozqfTJpCZIXIrCtqfFV8MasHWYDVlcPXS8NveYyqhy/DQW<span style='color:cyan'>067</span>/X44T3am3NHRe<br>opnB46VqbBoeM2wvY5NPeCxuCvZ19XyuCYf60Tcee24<span style='color:cyan'>AGD</span>CnfRwzLBkGX6JiBnvx<br>PwstcUMVMpaacrMrwzWcWSM3N0LBZ3Rf1iyiHsCpOsnNaFfXzP+fG<span style='color:cyan'>UY6</span>3b2O5twC<br>G0t<span style='color:GreenYellow'>d</span>9Mhnb36qbN++m+DsK875OfGL4+TYlMlwO81YFtAZT/gg<span style='color:cyan'>CJN</span>gkN9L7xDBbSZT<br>YUCUpdk/p68t9UYbBYhvndjIC1tqL2/N9wNu0S307gzvY/4ob4XbxNOJhz<span style='color:cyan'>HnJ</span>WgM<br>LDwSWSVjSPRDH3k3YGHDTuucia95HzseLTE47PFHu+si7psb2JMS3Jo/akFIt3+z<br>iY6U5Pth1wEMufHRqaVY+kaK5LZGYpO4Gx4fhlYWLw5OcJI1o8lX8LwZLgAcJzaz<br>VXrAK2DNIJODo5GKl+nxhVeVgir6HL/KaAwH8IwzLLjj/fjvyMtw5PpiV61Gw4F0<br>0eVOJcODcjpWHj0TsbT9qbveNQ5+PgGpE53n2h3OIlyMyUofg3H3dNpN2A34TMSC<br>RsVRwOSL716fmCwKDfwTr9NK0yas/eFAvjFNvdW7m1URDzQsKcrXg1A6GuPk5bdC<br>SmsvbtMmVit11AlaWnfljf+jeE8ISpJ6lLcfR1oVLzJxLd7SOn3Tq2zDY427IZkD<br>1OkJaXfDMe0tsfymS4axnzgpnMoEK/7CMGqGQ8/gCRUKoXgRqNqk0D7rswiIII0F<br>tL7dcaZN9Xmx1n92sGt1DCTEvBpSB7d3S4Nmjsw17HDQuDjsjizOhsMir78iELWM<br>xqKHW+7MN66vT9Bp1lLce8OXsiO89cQmacwBdZ//obQAiQEcBBABAgAGBQJc84pW<br>AAoJEBxb8GAN/JiKak0H/1/RrlKsn57/G8kusTPXtnHANOo9v8Exza/zWlPc1jPu<br>fBl0U2V5pV5hj+KCYAhG9wJrNFfvvSKFjCwX8q4YNyVaB2Lecx2Ez5/2RVVxNPPa<br>eUPuh5BbWT0NsX2C1HhWcZTY65fhgXF8h9C2B16XPAnjemAhlwmxJdOZTzARXG38<br>HpAW6cQaXG1XEAJE+q8c3bnGlVNkzg1V/xiXLDBzvxrrI2K8HOFi0JZzi5b41vs7<br>7KAM44/Fx2adidWDD1IeDeqyCwgAlGEHg+F6y5KXpmzhknopcphq0YCwIJAJ/JPx<br>+fWzIIvZ9R5UNBX8MehUF4zvFssX3lgLjf9vQQs5VUc=<br><span style='color:GreenYellow'>=</span>SAv9";
        pgpEncryptedMess.innerHTML = "hQEMAxxb8GAN/JiKAQf/Sn7JKseMdMSOP<span style='color:GreenYellow'>r</span>watOQR2DmfSwutqbKAV2yXPi6jymZc<br>9QH644RtsYKZy2<span style='color:GreenYellow'>e</span>eUX2zLNwB<span style='color:GreenYellow'>d</span>QTh98j52ETwTOhQNM0RcDD5ciOc5K/syVSnmKeK<br>uC2hzpf<span style='color:GreenYellow'>+</span>CpX<span style='color:GreenYellow'>b</span>TNJkFENwnCBXZPZf9tRQsIqtzTg9jHjXQ1<span style='color:GreenYellow'>l</span>UxrbDU<span style='color:GreenYellow'>u</span>mOY4Z<span style='color:GreenYellow'>e</span>Udo6<br>jgJf<span style='color:GreenYellow'>3</span>zLuO5cJv2TnmvEJAwrm2Ji35iPz6V6LwRUoKSJR5sZrQSbSg66Mmo7jSgl4<br>3edk/U47zHUgpsVfNXCKhnZI7fbCMBkDKqOoIfzFVkaB<span style='color:GreenYellow'>+</span>GO0GVJ8WOotPn8ft<span style='color:GreenYellow'>3</span>j/<br>iLPN1v9niFDfqyOFN0iaJhiH+obQUYZDrlX48J2B5MkhrR47zczvaJbyVbJA5FnP<br>GmNn7Zi1PT+lWRv5Qn6aR2Ho<br>=P58U";
        var quest = document.getElementById("quest");
        quest.innerHTML = "kUuxkt0bZP4=v?hctaw ?gnihtemos ees ot ekil uoy dluoW .trams os era uoY !spoO";
    }
    else if(text == "AES")
    {
        var quest = document.getElementById("quest");
        quest.innerHTML = "txet-tpyrced-tpyrcne/moc.kksloot";
        aesEncryptedMess.innerHTML = "U2FsdGVkX1+sVRabpF9QNqTmkw/daY9OoNk/Q7x2QjfTzg0cC6Un3VFzdJ+vnPhYXjIZNv6PRIjs/MZll8pd02DyZekBJodQ6hF1VbmKBvtaiAPwtsR+WheJrh34ryw+t40moqrWR2jzFk3vfXWpcCKNvehd950Co+Ogh7IOo3Xr+uN6lLsaBP/V2FocACQinRJyAqAVDBhTX3jA06CQTXTzmwCkIbS1PAVRUMBwgamOuNNi0B9rVgWMozupRIr7LqP7vzqICnlF3C1WANMzc5FcNhVWbyrvyic4YIzYiWLW6e91+yrOVGmotGhDa48h1eV4JIV9rI2aj0mLq6lZ+njGurhoosrC/LQ9Gvmt6/27buWr2C0GDnnrK7zI6vZ9Dm+l2M56eeSucqmFZhYMoL89PzUG5uzpjqvlOKHf+n9BO+h6iiNcPKeoeILpFwR8LLYKBEKcwCfMJrfv3649xjbhVTLH9w+ZKZ7LZDmAUqtL/8xLOJ0PP+8by8wqwWvMCOpvNl8lxhYirdByLWgpkDNHUT2DC1hN21vsgLyNUZL9XqprzWqQwkOo/Jx3BAp+sxiHShPSdNQ/i46qCzZpvx87fDCRQr5wMs7V+MJNZ9M=";
    }
    else if(text == "finish")
    {
        var quest = document.getElementById("quest");
        var min = totalSec / 60;
        if (min < 1)
        {
            min = 0;
        }
        var sec = totalSec % 60;
        quest.innerHTML = "End game<br>"+min + " minutes: " + sec + " seconds";
    }
    else
    {
        //var a = document.getElementsByClassName('a');
        var quest = document.getElementById("quest");
        var ans = "have you t[r][i]ed out all the characters? IT'S STILL NOT ENOU[G][H] YE[T].";
        
        for (var i = 0; i < ans.length; i++)
        {
            if(text==ans.charAt(i))
            {
                show[i] = ans.charAt(i);
            }
        }
        if (quest.innerHTML != "watch?v=4PZb0tkxuUk")
        {
            var collection = show.join("");
            quest.innerHTML = collection;
        }
        //a.innerHTML = show;
        /*Array.prototype.forEach.call(a,apart => {
            //apart.style.color = "white";
            apart.innerHTML = "?";
        });*/
        document.getElementById("submitTxt").value = "";
    }
}
function setupStorage()
{
    setInterval(setTime, 1000);
    localStorage.removeItem("trial");
    alert("WARNING: You are about to enter a website that may contain some encrypted content. This page cannot be exited unless all the saving will be eliminated.")
}
function setTime()
{
    ++totalSec;
}

