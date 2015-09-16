'use strict';

module.exports = function(value) {
  return (Number((value || '').toString().replace(/[^\d\.-]/gi, '')) || null);
};
