module.exports = {
  name: "address",
  ns: "socket",
  title: "Address",
  async: true,
  description: "Socket Address",
  phrases: {
    active: "Retrieving socket address"
  },
  ports: {
    input: {
      "in": {
        title: "Socket",
        type: "Socket",
        async: true,
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            output({
              out: $.write('in', $.in),
              address: $.create($.address())
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
      },
      address: {
        title: "Address",
        type: "object"
      }
    }
  },
  state: {}
}