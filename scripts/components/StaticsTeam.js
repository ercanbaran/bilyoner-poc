/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const StaticsTeamDesign = require('library/StaticsTeam');

const StaticsTeam = extend(StaticsTeamDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || StaticsTeamDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = StaticsTeam);