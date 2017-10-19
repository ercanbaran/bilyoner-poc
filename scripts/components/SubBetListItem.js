/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const SubBetListItemDesign = require('library/SubBetListItem');

const SubBetListItem = extend(SubBetListItemDesign)(
  //constructor
  function(_super, props, pageName) {
      // initalizes super class for this scope
      _super(this, props || SubBetListItemDesign.defaults);
      this.pageName = pageName;
    
      this.setData = function(bet) {
        var componentsArray = [this.flexBet1_Item1,this.flexBet1_Item2,this.flexBet1_Item3,this.flexBet2_Item1,this.flexBet2_Item2,this.flexBet2_Item3,this.flexBet3_Item1,this.flexBet3_Item2,this.flexBet3_Item3];
  
        this.flexBet1.visible = true;
        this.flexBet2.visible = false;
        this.flexBet3.visible = false;
        
        this.flexBet1_Item2.visible = false;
        this.flexBet1_Item3.visible = false;
        
        this.flexBet3_Item2.visible = false;
        this.flexBet3_Item3.visible = false;
        
        this.flexBet2_Item2.visible = false;
        this.flexBet2_Item3.visible = false;
        
        this.title.text = bet.title;
        this.flexBetTitle.backgroundColor = bet.color;
        
        var objectKeys = Object.keys(bet.OVs);
        for (var i = 0; i < objectKeys.length; i++) {
          
          if (i > 2 && !this.flexBet2.visible) {
            this.flexBet2.visible = true;
          }else if(i > 5 && !this.flexBet3.visible){
            this.flexBet3.visible = true;
          }
          componentsArray[i].visible = true;
          componentsArray[i].labelType.text = objectKeys[i];
          componentsArray[i].labelPercent.text = bet.OVs[objectKeys[i]];
        }
		  }.bind(this);
  }

);

module && (module.exports = SubBetListItem);