const open = document.querySelector(".hamburger"); 

const close = document.querySelector(".mobile-nav");
  var t1 = gsap.timeline({ defaults: 1, ease: 'expo.inOut', });
    open.addEventListener('click', () => { 
      if(t1.reversed()) {
        t1.play();
      } else {
      t1.to('nav', { right: 0 })
      .to('nav', { height: '100vh' }, '-=.1')
      .to('nav ul li a', {opacity: 1, PointerEvents: 'all', stagger: .2}, '-=.8')
      .to('.mobile-nav', { opacity: 1, PointerEvents: 'all'}, "-=.8")
      .to('nav a', { opacity: 1 }, '-=1');
      }
    });

    close.addEventListener('click', () => { 
      t1.reverse();
    })
   
   
   
   
   
   
   


