module.exports = {
  name: "setTimeout",
  ns: "socket",
  title: "Set Timeout",
  async: true,
  description: "Set Timeout",
  phrases: {
    active: "Set Timeout"
  },
  ports: {
    input: {
      timeout: {
        title: "Timeout",
        type: "number",
        "default": "3000"
      },
      "in": {
        title: "Socket",
        type: "Socket",
        async: true,
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            $.in.setTimeout($.timeout);

            $.in.on('timeout', function() {
              $.in.end();
            });

            output({
              out: $.write('in', $.in)
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      out: {
        title: "Socket",
        type: "Socket"
      }
    }
  },
  state: {}
}