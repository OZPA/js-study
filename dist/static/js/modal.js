!function(t){var i=function(){this.modalButton,this.modalWrapper,this.modalContent,this.windowWidth,this.windowHeight,this.modalWidth,this.modalHeight};t(document).ready(function(){i.init(),i.openModal()}),t(window).resize(function(){i.centeringModal()}),i.init=function(){this.modalButton=t(".js-modal a"),this.modalWrapper=t(".js-modal-wrapper"),this.modalContent=t(".js-modal-content")},i.openModal=function(){this.modalButton.on("click",function(o){var n=t(this).attr("href");o.preventDefault(),t("body").append('<div class="js-modal-wrapper modal__wrapper"></div>'),t("body").append('<div class="js-modal-content modal__content"><img src='+n+"></div>"),i.centeringModal(),t(document).on("click",".js-modal-wrapper",function(){t(".js-modal-wrapper, .js-modal-content").remove()})})},i.centeringModal=function(){this.windowWidth=t(window).innerWidth(),this.windowHeight=t(window).innerHeight(),this.modalWidth=t(".js-modal-content").width(),this.modalHeight=t(".js-modal-content").height(),t(".js-modal-content").css({left:(this.windowWidth-this.modalWidth)/2+"px",top:(this.windowHeight-this.modalHeight)/2+"px"})}}(jQuery);