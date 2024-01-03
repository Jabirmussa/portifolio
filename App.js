
const interObserv = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
    console.log(entry)
    entry.target.classList.toggle("show", entry.isIntersecting)
    })
})
const elements = document.querySelectorAll(".animation")
elements.forEach(el =>
    IntersectObserver.observe(el)
)

function showMoreImages() {

  var hiddenImages = document.querySelectorAll('.img1.hidden');
  hiddenImages.forEach(function (image) {
      image.classList.toggle('hidden');
  });
  var verMaisBtn = document.getElementById('ver-mais-btn');
  var linkText = verMaisBtn.querySelector('a');
  if (linkText.textContent === 'Ver mais...') {
      linkText.textContent = 'Ver menos...';
  } 
  else {
      linkText.textContent = 'Ver mais...';
  }
  
}