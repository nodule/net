output = function (cb) {
  var client = net.createConnection($.options, function () {
    cb({out: $.create(client)});
  });

  client.on('connect', function () {
    cb({connect: $.create(client)});
  });

  client.on('data', function (data) {
    cb({data: $.create(data)});
  });

  client.on('drain', function () {
    cb({drain: $.create(client)});
  });

  client.on('end', function () {
    cb({end: $.create(client)});
  });

  client.on('error', function (error) {
    cb({error: $.create(error)});
  });

  client.on('lookup', function (err, address, family, host) {
    cb({
      lookup: $.create({
        error: err,
        address: address,
        family: family,
        host: host
      })
    });
  });

  client.on('timeout', function () {
    cb({timeout: $.create(client)});
  });
};
