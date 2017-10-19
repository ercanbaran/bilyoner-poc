/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const moment = require("moment");
moment.locale('tr');
const Color = require("sf-core/ui/color");
const ListviewTemplateDesign = require('library/ListviewTemplate');
const AlertView = require('sf-core/ui/alertview');
const System = require('sf-core/device/system');
const Button = require('sf-core/ui/button');

const ListviewTemplate = extend(ListviewTemplateDesign)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || ListviewTemplateDesign.defaults );
		this.pageName = pageName;
		
		this.setData = function(page,index,bilyonerData) {

			var data = bilyonerData.gameList[index];
			
			if (!page.selectedData) {
				page.selectedData = {};
			}
			if (!page.selectedData[index]) {
				page.selectedData[index] = {};
			}
				
			var momentDate = moment(data.MDATE);
			this.labelDateStr.text = momentDate.calendar(null, {
			    sameDay: '[Bugün]',
			    nextDay: '[Yarın]',
			    nextWeek: 'D MMMM',
			    lastDay: '[Dün]',
			    lastWeek: 'D MMMM',
			    sameElse: 'D MMMM'
			});
			this.labelTimeStr.text = momentDate.format("HH:mm");
			this.label_MCode.text = data.MCODE;
			this.label_teams.text = data.HTEAM + " - " + data.ATEAM;
			this.label_league.text = data.LEAG;
			this.label_mbs.text = data.MBS;
			this.label_betCount.text = data.BET_CNT;
			this.bet_1.setData("1", data.bets["F.1"]);
			this.bet_x.setData("X", data.bets["F.X"]);
			this.bet_2.setData("2", data.bets["F.2"]);
			
			if (page.selectedData[index].bet_1) {
				this.bet_1.backgroundColor = Color.YELLOW;
			}else{
				this.bet_1.backgroundColor = Color.WHITE;
			}
			
			if (page.selectedData[index].bet_x) {
				this.bet_x.backgroundColor = Color.YELLOW;
			}else{
				this.bet_x.backgroundColor = Color.WHITE;
			}
			
			if (page.selectedData[index].bet_2) {
				this.bet_2.backgroundColor = Color.YELLOW;
			}else{
				this.bet_2.backgroundColor = Color.WHITE;
			}
			
			this.bet_1.onTouchEnded = function(){
				if (page.selectedData[index].bet_1) {
					page.selectedData[index].bet_1 = false;
				}else{
					page.selectedData[index].bet_1 = true;
				}
				if (System.OS == "iOS") {
					page.listView.refreshData();
				}else{
					if (page.selectedData[index].bet_1) {
						this.bet_1.backgroundColor = Color.YELLOW;
					}else{
						this.bet_1.backgroundColor = Color.WHITE;
					}
				}
			}.bind(this);
			
			this.bet_x.onTouchEnded = function(){
				if (page.selectedData[index].bet_x) {
					page.selectedData[index].bet_x = false;
				}else{
					page.selectedData[index].bet_x = true;
				}
				
				if (System.OS == "iOS") {
					page.listView.refreshData();
				}else{
					if (page.selectedData[index].bet_x) {
						this.bet_x.backgroundColor = Color.YELLOW;
					}else{
						this.bet_x.backgroundColor = Color.WHITE;
					}
				}
			}.bind(this);
			
			this.bet_2.onTouchEnded = function(){;
				if (page.selectedData[index].bet_2) {
					page.selectedData[index].bet_2 = false;
				}else{
					page.selectedData[index].bet_2 = true;
				}
				if (System.OS == "iOS") {
					page.listView.refreshData();
				}else{
					if (page.selectedData[index].bet_2) {
						this.bet_2.backgroundColor = Color.YELLOW;
					}else{
						this.bet_2.backgroundColor = Color.WHITE;
					}
				}
			}.bind(this);
			
			this.betCount.onTouchEnded = function(_data){
				page.betDialog.showDialog(_data);
			}.bind(this,data);

		}.bind(this);
	}
	
);

module && (module.exports = ListviewTemplate);