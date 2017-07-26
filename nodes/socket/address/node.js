on.input.in = function() {
  output({
    out: $.write('in', $.in),
    address: $.create($.address())
  });
}
