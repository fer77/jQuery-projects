var main = function() {
  $('.day').click(function() {
    $(this).next().toggle(300);
  	$(this).find('.weekday span').toggleClass('glyphicon-minus');
  });
};

$(document).ready(main);
