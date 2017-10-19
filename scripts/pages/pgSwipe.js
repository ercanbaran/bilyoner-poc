const extend = require("js-base/core/extend");
const Router = require("sf-core/ui/router");
const ListView = require("sf-core/ui/listview");
const ListViewItem = require("sf-core/ui/listviewitem");
const ListViewTemplate = require("../components/ListviewTemplate");
const Color = require("sf-core/ui/color");
const Dialog = require("sf-core/ui/dialog");
const ActivityIndicator = require('sf-core/ui/activityindicator');
const FlexLayout = require('sf-core/ui/flexlayout');
const http = require("sf-core/net/http");
const Http = new http();
const Timer = require("sf-core/timer");
const System = require('sf-core/device/system');
const AlertView = require('sf-core/ui/alertview');
const Animator   = require('sf-core/ui/animator');
const Screen = require('sf-core/device/screen');
const MatchTitle = require("../components/MatchTitle");
const MatchBottom = require("../components/MatchBottom");
const SubBetListItem = require("../components/SubBetListItem");
const mcs = require("../lib/mcs");

// Get generetad UI code
var PageSwipeDesign = require("../ui/ui_pgSwipe");

var bilyonerData = [];

function Bet(params)
{
   this.title;
   this.color;
   this.OVs = [];
   this.height;
   
   if (params) {
        for (var param in params) {
            this[param] = params[param];
        }
    }
}

const PageSwipe = extend(PageSwipeDesign)(
    function(_super, props) {
        // Initalizes super class for this page scope
        _super(this);
        // overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
        
        this.requestUrl = props.requestUrl;
        this.category = props.category;
        this.func = props.naber;
    }
);

function onLoad(_superOnLoad){
    var category = this.category;
    mcs.storeBasicEvent(`OnLoad : ${category}`);
    
    _superOnLoad && _superOnLoad();
    
    createListView.call(this);
    createLoadingView.call(this);
    createBetDialog.call(this);
    this.layout.applyLayout();
    
    if (bilyonerData && bilyonerData.gameList && bilyonerData.gameList.length > 0) {
        this.listView.itemCount = bilyonerData.gameList.length;
        this.listView.refreshData();
        this.loadingView.visible = false;
       
    }else{
        loadData.call(this); 
    }
}

function onShow(_superOnShow) {
    // console.log("Show" + this.category);
    _superOnShow && _superOnShow();
}

function createLoadingView(){
    var backgroundView = new FlexLayout({
        positionType: FlexLayout.PositionType.ABSOLUTE,
        justifyContent: FlexLayout.JustifyContent.CENTER,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: Color.create(155,0,0,0)
    });
    
    var myActivityIndicator = new ActivityIndicator({
        alignSelf: FlexLayout.AlignSelf.CENTER
    });

    backgroundView.addChild(myActivityIndicator);
    this.layout.addChild(backgroundView);
    this.loadingView = backgroundView;
}

function createBetDialog(){
    var betDialog = new Dialog();
    this.betDialog = betDialog;
    this.betDialog.layout.backgroundColor = Color.TRANSPARENT;
    
    var backgroundView = new FlexLayout();
    backgroundView.positionType = FlexLayout.PositionType.ABSOLUTE;
    backgroundView.left = 0;
    backgroundView.top = 0;
    backgroundView.ios.masksToBounds = false;
    backgroundView.right = 0;
    backgroundView.bottom = 0;
    backgroundView.backgroundColor = Color.create(180,200,200,200);
    this.betDialog.backgroundView = backgroundView;
    this.betDialog.layout.addChild(backgroundView);
    
    var flexContent = new FlexLayout();
    flexContent.flexGrow = 1;
    flexContent.width = Screen.width - 60;
    flexContent.left = 30;
    flexContent.marginTop = 60;
    flexContent.marginBottom = 60;
    flexContent.backgroundColor = Color.create(33,36,38);
    flexContent.borderRadius = 10;
    backgroundView.addChild(flexContent);
    
    this.betDialog.matchTitle = new MatchTitle();
    flexContent.addChild(this.betDialog.matchTitle);
    
    var matchBottom = new MatchBottom();
    matchBottom.positionType = FlexLayout.PositionType.ABSOLUTE;
    matchBottom.top = NaN;
    matchBottom.bottom = 0;
    matchBottom.right = 0;
    matchBottom.left = 0;
    
    matchBottom.imgTamam.onTouchEnded = function(){
        this.betDialog.hideDialog();
    }.bind(this);
    flexContent.addChild(matchBottom);
    
    var betArray = [];
    this.betDialog.listView = new ListView();
    this.betDialog.listView.positionType = FlexLayout.PositionType.ABSOLUTE;
    this.betDialog.listView.top = 50;
    this.betDialog.listView.left = 0;
    this.betDialog.listView.right = 0;
    this.betDialog.listView.bottom = 60;
    this.betDialog.listView.flexGrow = 1;
    this.betDialog.listView.itemCount = betArray.length;
    this.betDialog.listView.backgroundColor = Color.create(33,36,38);
    this.betDialog.listView.refreshEnabled = false;
    
    this.betDialog.listView.onRowHeight = function(index){
        return betArray[index].height;
    }
    
    this.betDialog.listView.onRowCreate = function(){
        var myListViewItem = new ListViewItem();
        myListViewItem.backgroundColor = Color.TRANSPARENT;
        
        var subBetListItem = new SubBetListItem();
        subBetListItem.id = 200;
        myListViewItem.addChild(subBetListItem);
        
        subBetListItem.flexBetTitle.ios.masksToBounds = false;
        subBetListItem.flexBet1_Item1.ios.masksToBounds = false;
        subBetListItem.flexBet1_Item2.ios.masksToBounds = false;
        subBetListItem.flexBet1_Item3.ios.masksToBounds = false;
        subBetListItem.flexBet2_Item1.ios.masksToBounds = false;
        subBetListItem.flexBet2_Item2.ios.masksToBounds = false;
        subBetListItem.flexBet2_Item3.ios.masksToBounds = false;
        subBetListItem.flexBet3_Item1.ios.masksToBounds = false;
        subBetListItem.flexBet3_Item2.ios.masksToBounds = false;
        subBetListItem.flexBet3_Item3.ios.masksToBounds = false;
        
        return myListViewItem;
    };
    this.betDialog.listView.onRowBind = function(listViewItem, index){
        listViewItem.findChildById(200).setData(betArray[index]);
    }.bind(this);
    
    this.betDialog.listView.onPullRefresh = function() {
        // body...
    };
    
    flexContent.addChild(this.betDialog.listView);
    
    this.betDialog.showDialog = function (e){
        this.betDialog.matchTitle.code.text = e.MCODE;
        this.betDialog.matchTitle.match.text = e.HTEAM + " - " + e.ATEAM;
        this.betDialog.matchTitle.league.text = e.L_DESC;
        
        betArray = [];
        
        if (e.bets["F.1"]) {
            var bet = new Bet();
            bet.title = "Mac Sonucu"
            bet.color = Color.create(252,92,32);
            bet.height = 85;
            bet.OVs = {
                "1" : e.bets["F.1"].OV,
                "X" : e.bets["F.X"].OV,
                "2" : e.bets["F.2"].OV
            }
            betArray.push(bet);
        }
        
        if (e.bets["DC.12"] || e.bets["DC.X2"] || e.bets["DC.1X"]) {
            var bet = new Bet();
            bet.title = "Cifte Sans"
            bet.color = Color.create(188,11,80);
            bet.height = 85;
            bet.OVs = {
                "1-X" : e.bets["DC.1X"] ? e.bets["DC.1X"].OV : "-",
                "1-2" : e.bets["DC.12"] ? e.bets["DC.12"].OV : "-",
                "X-2" : e.bets["DC.X2"] ? e.bets["DC.X2"].OV : "-"
            }
            betArray.push(bet);
        }
        
        if (e.bets["GS.01"] || e.bets["GS.23"] || e.bets["GS.46"] || e.bets["GS.7P"]) {
            var bet = new Bet();
            bet.title = "Toplam Gol"
            bet.color = Color.create(137,190,38);
            bet.height = 130;
            bet.OVs = {
                "0-1" : e.bets["GS.01"] ? e.bets["GS.01"].OV : "-",
                "2-3" : e.bets["GS.23"] ? e.bets["GS.23"].OV : "-",
                "4-6" : e.bets["GS.46"] ? e.bets["GS.46"].OV : "-",
                "7+" : e.bets["GS.7P"] ? e.bets["GS.7P"].OV : "-"
            }
            betArray.push(bet);
        }
        
        if (e.bets["SF.11"] || e.bets["SF.1X"] || e.bets["SF.12"] || e.bets["SF.X1"] || e.bets["SF.XX"] || e.bets["SF.X2"] || e.bets["SF.21"] || e.bets["SF.2X"] || e.bets["SF.22"]) {
            var bet = new Bet();
            bet.title = "Ilk Yari Mac Sonucu";
            bet.color = Color.create(24,153,207);
            bet.height = 180;
            bet.OVs = {
                "1/1" : e.bets["SF.11"] ? e.bets["SF.11"].OV : "-",
                "1/X" : e.bets["SF.1X"] ? e.bets["SF.1X"].OV : "-",
                "1/2" : e.bets["SF.12"] ? e.bets["SF.12"].OV : "-",
                "X/1" : e.bets["SF.X1"] ? e.bets["SF.X1"].OV : "-",
                "X/X" : e.bets["SF.XX"] ? e.bets["SF.XX"].OV : "-",
                "X/2" : e.bets["SF.X2"] ? e.bets["SF.X2"].OV : "-",
                "2/1" : e.bets["SF.21"] ? e.bets["SF.21"].OV : "-",
                "2/X" : e.bets["SF.2X"] ? e.bets["SF.2X"].OV : "-",
                "2/2" : e.bets["SF.22"] ? e.bets["SF.22"].OV : "-"
            }
            betArray.push(bet);
        }

        this.betDialog.listView.itemCount = betArray.length;
        this.betDialog.listView.refreshData();
        this.betDialog.show();
    }.bind(this);
    
    this.betDialog.hideDialog = function (e){
        this.betDialog.hide();
        this.betDialog.listView.scrollTo(0);
    }.bind(this);
    
    this.betDialog.layout.applyLayout();
}

function createListView(){
    this.listView.refreshEnabled = false;
    this.listView.rowHeight = 85;
    this.listView.backgroundColor = Color.TRANSPARENT;
    this.listView.ios.leftToRightSwipeEnabled = true;
    
    //Native Api Access
    //iOS 11 Bug Link : https://forums.developer.apple.com/thread/86703
    if (System.OS == "iOS") {
        this.listView.nativeObject.setValueForKey(0,"estimatedRowHeight");
        this.listView.nativeObject.setValueForKey(0,"estimatedSectionHeaderHeight");
        this.listView.nativeObject.setValueForKey(0,"estimatedSectionFooterHeight");
    }
    
    this.listView.onRowCreate = function(){
        var myListViewItem = new ListViewItem();
        
        var listViewTemplate = new ListViewTemplate();
        listViewTemplate.id = 200;
        myListViewItem.addChild(listViewTemplate);
        
        listViewTemplate.bet_1.borderRadius = 8;
        listViewTemplate.bet_1.ios.masksToBounds = false;
        listViewTemplate.bet_x.borderRadius = 8;
        listViewTemplate.bet_x.ios.masksToBounds = false;
        listViewTemplate.bet_2.borderRadius = 8;
        listViewTemplate.bet_2.ios.masksToBounds = false;
        listViewTemplate.layout_league2.ios.masksToBounds = false;
        
        return myListViewItem;
    };
    
    var isLoading = false;
    this.listView.onRowBind = function(listViewItem, index){
        listViewItem.findChildById(200).setData(this,index,bilyonerData);
        
        Timer.setTimeout({
                task: function(){
                    if(index > bilyonerData.gameList.length - 10 && !isLoading){
                        isLoading = true;
                        bilyonerData.gameList = bilyonerData.gameList.concat(bilyonerData.gameList);
                        this.listView.itemCount = bilyonerData.gameList.length;
                        this.listView.refreshData();
                        isLoading = false;  
                    }
                }.bind(this),
                delay: 50
            });
    }.bind(this);
    
    this.listView.onPullRefresh = function() {
        // body...
    };
    this.listView.ios.onRowSwiped = function(direction,expansionSettings){
       if (direction == ListView.iOS.SwipeDirection.LEFTTORIGHT) {
            //Expansion button index. Default value 0
            expansionSettings.buttonIndex = 0;
            //Size proportional threshold to trigger the expansion button. Default value 1.5
            expansionSettings.threshold = 1; 
    
            var archiveSwipeItem = ListView.iOS.createSwipeItem("İstatistik",Color.TRANSPARENT,30,function(e){
                Router.go("pgStats",{
                    game: bilyonerData.gameList[e.index]
                });
            }.bind(this));
    
            return [archiveSwipeItem];
        } else if(direction == ListView.iOS.SwipeDirection.RIGHTTOLEFT){
            return [];
        }
    }.bind(this);
    
    this.listView.onRowSelected = function(listViewItem,index){
        if (System.OS == "Android") {
            Router.go("pgStats",{
                game: bilyonerData.gameList[index]
            });  
        }
    }.bind(this);

}

function loadData(){
    Http.request({
            'url':this.requestUrl,
            // 'headers': {
            // },
            'method':'GET',
            // 'body': '',
            onLoad: function(response){
                //Native Api Access
                //Create Background Thread for JSON.parse
                if (System.OS == "iOS") {
                    SF.dispatch_async(SF.dispatch_get_global_queue(0,0),function(){
                        
                        this.bilyonerData = JSON.parse(response.body.toString());
                        bilyonerData = this.bilyonerData;
                        this.listView.itemCount = this.bilyonerData.gameList.length;
                        
                        SF.dispatch_async(SF.dispatch_get_main_queue(),function(){
                            
                            this.listView.refreshData();
                            this.loadingView.visible = false;
                            
                        }.bind(this));
                    }.bind(this));
                }else{
                    this.bilyonerData = JSON.parse(response.body.toString());
                    bilyonerData = this.bilyonerData;
                    this.listView.itemCount = this.bilyonerData.gameList.length;
                    this.listView.refreshData();
                    this.loadingView.visible = false;
                }
                
            }.bind(this),
            onError: function(e){
                // Handle error like:
                this.loadingView.visible = false;
                if(e.statusCode === 500){
                    showAlert("Internal Server Error Occurred.");
                }
                else{
                    showAlert("Server responsed with: " + e.statusCode + ". Message is: " + e.message);
                }
            }.bind(this)
        }
    );
}

function showAlert(message){
    var myAlertView = new AlertView({
        title: "",
        message: message
    });
    
    myAlertView.addButton({
        index: AlertView.ButtonType.POSITIVE,
        text: "Ok",
        onClick: function() {
        }
    });

    myAlertView.show();
}

module && (module.exports = PageSwipe);