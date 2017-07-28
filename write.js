module.exports = {
  name: "write",
  ns: "socket",
  title: "Socket Write",
  async: true,
  description: "Write to socket",
  phrases: {
    active: "Writing to socket"
  },
  ports: {
    input: {
      data: {
        title: "Data",
        type: "any",
        async: true,
        fn: function __DATA__(data, source, state, input, $, output) {
          var r = function() {
            $.in.write($.data, $.encoding, function() {
              output({
                out: $.write('in', $.in)
              });
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      encoding: {
        title: "Encoding",
        type: "any",
        "default": "utf8"
      },
      "in": {
        title: "Socket",
        type: "Socket"
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