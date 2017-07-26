module.exports = {
  name: "setEncoding",
  ns: "net/socket",
  title: "Set Encoding",
  async: true,
  description: "Set Socket Encoding",
  phrases: {
    active: "Set socket encoding"
  },
  ports: {
    input: {
      encoding: {
        title: "Encoding",
        type: "string"
      },
      "in": {
        title: "Socket",
        type: "Socket",
        async: true,
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            $.in.setEncoding($.encoding);
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