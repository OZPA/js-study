(function($) {

  var Modal = Modal || function() {};

  $(document).ready(function() {
    Modal.openModal();
  });

  $(window).resize(function() {
    Modal.centeringModal();
  });

  /* --------------------------------------------
    Open Modal Window
  -------------------------------------------- */

  Modal.openModal = function() {

    $('.js-modal a').on('click', function(e) {
      var src = $(this).attr('href')

      e.preventDefault();

      $('body').append('<div class="js-modal-wrapper modal__wrapper"></div>');
      $('body').append('<div class="js-modal-content modal__content"><img src=' + src + '></div>');

      Modal.centeringModal();

      $(document).on('click', '.js-modal-wrapper',  function() {
        $('.js-modal-wrapper, .js-modal-content').remove();
      });
    });
  },


  /* --------------------------------------------
    Centering Modal Window
  -------------------------------------------- */

  Modal.centeringModal = function() {

    this.windowWidth  = $(window).innerWidth();
    this.windowHeight = $(window).innerHeight();
    this.modalWidth  = $('.js-modal-content').width();
    this.modalHeight = $('.js-modal-content').height();

    $('.js-modal-content').css({
      'left' : ((this.windowWidth - this.modalWidth) / 2) + 'px',
      'top'  : ((this.windowHeight - this.modalHeight) / 2) + 'px'
    });

  }

})(jQuery);
