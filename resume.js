module.exports = {
  name: "resume",
  ns: "net/socket",
  title: "Resume",
  async: true,
  description: "Resume Socket",
  phrases: {
    active: "Resuming socket"
  },
  ports: {
    input: {
      "in": {
        title: "Socket",
        type: "Socket",
        async: true,
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            $.in.resume();
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