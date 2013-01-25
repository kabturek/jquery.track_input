(function( $ ) {
  $.fn.track_input = function(input_selector, options) {

    var settings = $.extend( {
      'limit'         : null,
      'format'        : null,
      'default_value'       : "nbsp;"
    }, options);
    var $this = this
    var tracker = function(){
      content = $(this).val();
      if(content.length == 0){
        return $this.text(settings['default_value'])
      }
      if(settings['limit'] && (content.length > settings['limit'])){
        content = content.substring(0, settings['limit'] - 3);
        content = content + '...';
      }
      if(settings['format']){
        content = settings['format'].apply(this, [content])
      }
      $this.text(content);
    }
    $(input_selector).live('keyup', tracker);
    $(input_selector).live('change', tracker).change();

  };
})( jQuery );
