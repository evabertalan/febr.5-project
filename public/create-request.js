'use strict';
var req = new XMLHttpRequest();
var createRequest = function(method, url, data, callback) {
  req.open(method, url);
  req.setRequestHeader('Content-type', 'application/json');
  req.send(data);
  req.onreadystatechange = function() {
  console.log('status: ', req.readyState);
    if (req.readyState === 4) {
      callback(req.response);
    };
  };
};
