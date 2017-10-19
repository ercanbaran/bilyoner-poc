/* 
		You can modify its contents.
*/
const Color = require('sf-core/ui/color');
const Timer = require("sf-core/timer");
const Animator   = require('sf-core/ui/animator');
const FlexLayout   = require('sf-core/ui/flexlayout');
const extend = require('js-base/core/extend');
const ListViewItem = require("sf-core/ui/listviewitem");
const StaticsTeamTemplate = require("../components/StaticsTeam");
const PgStatsDesign = require('ui/ui_pgStats');

const PgStats = extend(PgStatsDesign)(
  // Constructor
  function(_super) {
    // Initalizes super class for this page scope
    _super(this);
    // overrides super.onShow method
    this.onShow = onShow.bind(this, this.onShow.bind(this));
    // overrides super.onLoad method
    this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

  });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow,parameters) {
  superOnShow();
  this.headerBar.itemColor = Color.WHITE;
  if (parameters && parameters.game && parameters.game.L_DESC) {
    this.lblLeagueName.text = parameters.game.L_DESC;
  }
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad,parameters) {
  superOnLoad();
  
  var self = this;
  
  self.layout.backgroundColor = Color.createGradient({
    startColor : Color.create(70,143,21),
    endColor : Color.create(29,55,4),
    direction : Color.GradientDirection.VERTICAL
  });
  
  self.flexTouch.onTouchEnded = function(){
    var height;
    if (self.flexPuanDurumu.height > 120) {
      height = 120;
    }else{
      height = 480;
    }
    
    self.flexTouch.backgroundColor = Color.create(100,0,0,0);
    self.activityIndicator.visible = true;
    
    Timer.setTimeout({
        task: function(){
            Animator.animate(self.layout, 250, function() {
                self.flexPuanDurumu.height = height;
                self.scrollView.layout.height = height + 170;
            }).complete(function() {
              self.flexTouch.backgroundColor = Color.create(0,0,0,0);
              self.activityIndicator.visible = false;
            });
        }.bind(this),
        delay: 50 
    });
  };
  
  self.listPuanDurumu.refreshEnabled = false;
  self.listPuanDurumu.backgroundColor = Color.TRANSPARENT;
  self.listPuanDurumu.itemCount = 14;
  
  self.listPuanDurumu.onRowCreate = function(){
      var myListViewItem = new ListViewItem();
        
      var listViewTemplate = new StaticsTeamTemplate();
      listViewTemplate.id = 200;
      myListViewItem.addChild(listViewTemplate);

      return myListViewItem;
  };
  self.listPuanDurumu.onRowBind = function(listViewItem, index){

  }.bind(this);
  self.listPuanDurumu.onPullRefresh = function() {
      // body...
  };
    
  self.layout.applyLayout();
}

module && (module.exports = PgStats);