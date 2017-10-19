/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const StaticsDesign = require('library/Statics');

const Statics = extend(StaticsDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || StaticsDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = Statics);