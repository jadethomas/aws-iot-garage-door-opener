const awsIot = require('aws-iot-device-sdk');



   //
   // The device module exports an MQTT instance, which will attempt
   // to connect to the AWS IoT endpoint configured in the arguments.
   // Once connected, it will emit events which our application can
   // handle.
   //
   const device = awsIot.device({
      keyPath: './certs/private.pem.key',
      certPath: './certs/certificate.pem.crt',
      caPath: './certs/root-CA.crt',
      clientId: 'garage-door',
      region: 'us-east-1',
      baseReconnectTimeMs: 4000,
      keepAlive: 30,
      protocol: 'mqtts',
      Debug: false
   });

device
  .on('connect', function() {
    console.log('connected');
     device.subscribe('garage-door-opener/activate', function(error, result) {
      console.log(result);
    });
  });
   device
      .on('close', function() {
         console.log('close');
      });
   device
      .on('reconnect', function() {
         console.log('reconnect');
      });
   device
      .on('offline', function() {
         console.log('offline');
      });
   device
      .on('error', function(error) {
         console.log('error', error);
      });
   device
      .on('message', function(topic, payload) {
         console.log('message', topic, payload.toString());
      });

  