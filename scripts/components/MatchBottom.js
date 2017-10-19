/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const MatchBottomDesign = require('library/MatchBottom');

const MatchBottom = extend(MatchBottomDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || MatchBottomDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = MatchBottom);