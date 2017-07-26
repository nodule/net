module.exports = {
  name: "setKeepAlive",
  ns: "net/socket",
  title: "Set Keep Alive",
  async: true,
  description: "Set Keep Alive",
  phrases: {
    active: "Set keep alive"
  },
  ports: {
    input: {
      enable: {
        title: "Enable",
        type: "boolean",
        "default": true
      },
      initialDelay: {
        title: "Initial Delay",
        type: "number",
        "default": 0
      },
      "in": {
        title: "Socket",
        type: "Socket",
        async: true,
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            $.in.setKeepAlive($.enable, $.initialDelay);
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