module.exports = {
  name: "pause",
  ns: "net/socket",
  title: "Pause",
  async: true,
  description: "Pause Socket",
  phrases: {
    active: "Pausing socket"
  },
  ports: {
    input: {
      "in": {
        title: "Socket",
        type: "Socket",
        async: true,
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            $.in.pause();
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