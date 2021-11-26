'use strict';

const fn = () => {
    console.log(hoisted);
    var hoisted = 6;
    console.log(hoisted);
};

module.exports = { fn };
