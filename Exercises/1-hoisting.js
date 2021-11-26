'use strict';

const fn = () => {
  //should output undefined
  console.log(hoisted);
  var hoisted = 6;
  //should output 6
  console.log(hoisted);
};

module.exports = { fn };
