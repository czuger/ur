// Generated by CoffeeScript 1.4.0
(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  $(document).ready(function() {
    return $.getJSON('assets/js/test.json', function(data) {
      return root.data = data;
    });
  });

}).call(this);
