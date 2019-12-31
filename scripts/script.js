// Vars ===========================================================================================

let 
  thisImg,
  newSrc;

const 
  modalDiv = $("#lightbox")

// Functions ======================================================================================

//! script-for-menu
$('span.menu').click(function () {
  $('.top-menu ul').slideToggle('slow', function () {
  });
});

$('#galleryTabContent img').on('click', function() {
  modalDiv.modal('toggle');
  thisImg = $(this).attr('src')
  newSrc = thisImg.split('tn_').join('');
  modalDiv.find("img").attr('src', newSrc);
  console.log(modalDiv.find("img"))
})
