on.input.in = function() {
  $.in.write($.data, $.encoding, function () {
    output({out: $.write('in', $.in)});
  });
}
