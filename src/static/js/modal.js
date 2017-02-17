(function($) {

  var Modal = function() {

      this.modalButton;
      this.modalWrapper;
      this.modalContent;
      this.windowWidth;
      this.windowHeight;
      this.modalWidth;
      this.modalHeight;
  };

  $(document).ready(function() {
    Modal.init();
    Modal.openModal();
  });

  $(window).resize(function() {
    Modal.centeringModal();
  });

  /* --------------------------------------------
    Initialize
  -------------------------------------------- */

  Modal.init = function() {
    this.modalButton  = $('.js-modal a');
    this.modalWrapper = $('.js-modal-wrapper');
    this.modalContent = $('.js-modal-content');
  },


  /* --------------------------------------------
    Open Modal Window
  -------------------------------------------- */

  Modal.openModal = function() {

    this.modalButton.on('click', function(e) {
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
