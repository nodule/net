module.exports = {
  name: "end",
  ns: "socket",
  title: "End Socket",
  async: true,
  description: "End Socket",
  phrases: {
    active: "Closing socket"
  },
  ports: {
    input: {
      "in": {
        title: "Socket",
        type: "Socket",
        async: true,
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            $.in.end();
            // ... destroy packet
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    }
  },
  state: {}
}