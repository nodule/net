on.input.data = function() {
  $.in.write($.data, $.encoding, function () {
    output({out: $.write('in', $.in)});
  });
}
