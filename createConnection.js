module.exports = {
  name: "createConnection",
  ns: "net",
  description: "createConnection",
  phrases: {
    active: "establishing connection"
  },
  ports: {
    input: {
      connectListener: {
        type: "function",
        required: false
      },
      options: {
        type: "object",
        properties: {
          timeout: {
            type: "number",
            required: false
          },
          fd: {
            title: "File Descriptor",
            type: "number",
            required: false
          },
          allowHalfOpen: {
            type: "boolean",
            required: false
          },
          readable: {
            type: "boolean",
            required: false
          },
          writeable: {
            type: "boolean",
            required: false
          },
          port: {
            type: "boolean",
            required: true
          },
          host: {
            type: "string",
            "default": "localhost"
          },
          localAddress: {
            type: "string",
            required: false
          },
          localPort: {
            type: "number",
            required: false
          },
          family: {
            type: "enum",
            "enum": [4,
              6
            ],
            "default": 4
          },
          hints: {
            type: "number",
            required: false
          },
          lookup: {
            type: "function",
            required: false
          }
        }
      }
    },
    output: {
      out: {
        title: "Socket",
        type: "Socket"
      },
      close: {
        title: "Close",
        type: "boolean"
      },
      connect: {
        title: "Connect",
        type: "any"
      },
      data: {
        title: "Data",
        type: "any"
      },
      drain: {
        title: "Drain",
        type: "any"
      },
      end: {
        title: "End",
        type: "any"
      },
      lookup: {
        title: "Lookup",
        type: "object",
        properties: {
          error: {
            type: "Error"
          },
          address: {
            type: "string"
          },
          family: {
            type: "string"
          },
          host: {
            type: "string"
          }
        }
      }
    }
  },
  dependencies: {
    npm: {
      net: require('net')
    }
  },
  fn: function createConnection(input, $, output, state, done, cb, on, net) {
    var r = function() {
      var client = net.createConnection($.options, function() {
        output({
          out: $.create(client)
        });
      });

      client.on('connect', function() {
        output({
          connect: $.create(client)
        });
      });

      client.on('data', function(data) {
        output({
          data: $.create(data)
        });
      });

      client.on('drain', function() {
        output({
          drain: $.create(client)
        });
      });

      client.on('end', function() {
        output({
          end: $.create(client)
        });
      });

      client.on('error', function(error) {
        output({
          error: $.create(error)
        });
      });

      client.on('lookup', function(err, address, family, host) {
        output({
          lookup: $.create({
            error: err,
            address: address,
            family: family,
            host: host
          })
        });
      });

      client.on('timeout', function() {
        output({
          timeout: $.create(client)
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}