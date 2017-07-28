on.input.options = function () {
  var client = net.createConnection($.options, function () {
    output({out: $.create(client)});
  });

  client.on('connect', function () {
    output({connect: $.create(client)});
  });

  client.on('data', function (data) {
    output({data: $.create(data)});
  });

  client.on('drain', function () {
    output({drain: $.create(client)});
  });

  client.on('end', function () {
    output({end: $.create(client)});
  });

  client.on('error', function (error) {
    output({error: $.create(error)});
  });

  client.on('lookup', function (err, address, family, host) {
    output({
      lookup: $.create({
        error: err,
        address: address,
        family: family,
        host: host
      })
    });
  });

  client.on('timeout', function () {
    output({timeout: $.create(client)});
  });
};
