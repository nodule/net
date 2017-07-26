on.input.in = function() {
  $.in.setKeepAlive($.enable, $.initialDelay);
  output({out: $.write('in', $.in)});
}
