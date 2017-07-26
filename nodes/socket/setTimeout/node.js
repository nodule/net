on.input.in = function() {
  $.in.setTimeout($.timeout);

  $.in.on('timeout', function () {
    $.in.end();
  });

  output({out: $.write('in', $.in)});
}
