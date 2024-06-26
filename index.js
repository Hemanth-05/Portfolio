$(".project").on("mouseenter", function(){
    $(this).find(".projectImage").addClass("moveLeft");
});

$(".project").on("mouseleave", function(){
    $(this).find(".projectImage").removeClass("moveLeft");
});

document.querySelectorAll('.navItem').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const offset = 10; // Adjust this value as needed (10vh offset)
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - (window.innerHeight * offset / 100);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });