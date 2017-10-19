/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const MatchTitleDesign = require('library/MatchTitle');

const MatchTitle = extend(MatchTitleDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || MatchTitleDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = MatchTitle);