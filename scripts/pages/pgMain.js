const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const SwipeView = require('sf-core/ui/swipeview');
const Button = require('sf-core/ui/button');
const ScrollView = require('sf-core/ui/scrollview');
const FlexLayout = require('sf-core/ui/flexlayout');
const View = require('sf-core/ui/view');
const Font = require('sf-core/ui/font');
const StatusBarStyle = require('sf-core/ui/statusbarstyle');
const Animator   = require('sf-core/ui/animator');
const Screen = require('sf-core/device/screen');
const System = require('sf-core/device/system');

const PgSwipe = require('./pgSwipe');

const URL = 'https://www.bilyoner.com/gamelist/games?sports=1';
const categories = ["Futbol","Basketbol","Düello","Voleybol","Hentbol","Tenis","Motor Sporu"];


const Page_ = extend(Page)(
    // Constructor
    function(_super) {
        // Initalizes super class for this page scope
        _super(this, {
            onShow: onShow.bind(this),
            onLoad: onLoad.bind(this)
        });
    });

// Page.onShow -> This event is called when a page appears on the screen (everytime).
function onShow() {
    this.statusBar.android.color = Color.create("#000000");
    
    this.headerBar.backgroundColor = Color.create(47,98,14);
    this.headerBar.title = "Bilyoner.com";
    this.headerBar.titleColor = Color.WHITE;
    this.statusBar.ios.style = StatusBarStyle.LIGHTCONTENT;
    this.layout.backgroundColor = Color.createGradient({
        startColor : Color.create(70,143,21),
        endColor : Color.create(29,55,4),
        direction : Color.GradientDirection.VERTICAL
      });
}

// Page.onLoad -> This event is called once when page is created.
function onLoad() {
    this.headerBar.leftItemEnabled = false;
    this.swipeView = new SwipeView({
        flexGrow:1,
        backgroundColor : Color.TRANSPARENT,
        pages: function(){
           var pages = [];
           for (var i = 0; i < categories.length; i++) {
               pages.push(swipeViewPageConstructor(URL,categories[i]));
           }
           return pages; 
        }(),
        onPageSelected: function(index,page) {
            if (System.OS == "iOS") {
               Animator.animate(this.layout, 150, function() {
                    var left = this.scrollView.buttons[index].left;
                    var width = this.scrollView.buttons[index].width;
                    
                    this.scrollView.pointerView.left = left;
                    this.scrollView.pointerView.width = width;
                     
                    if (this.scrollView.contentOffset.x > left) {
                        this.scrollView.scrollToCoordinate(left);
                    }else if (left + width > this.scrollView.contentOffset.x + Screen.width) {
                        this.scrollView.scrollToCoordinate(left + width - Screen.width);
                    }
                    
                }.bind(this)).complete(function() {
                    // console.log("Complete");
                }); 
            }else{
                var left = this.scrollView.buttons[index].left;
                var width = this.scrollView.buttons[index].width;
                
                this.scrollView.pointerView.left = left;
                this.scrollView.pointerView.width = width;
                 
                if (this.scrollView.contentOffset.x > left) {
                    this.scrollView.scrollToCoordinate(left);
                }else if (left + width > this.scrollView.contentOffset.x + Screen.width) {
                    this.scrollView.scrollToCoordinate(left + width - Screen.width);
                }
                this.scrollView.layout.applyLayout();
            }
        }.bind(this),
        onStateChanged : function(state){
            this.swipeViewState = state;
        }.bind(this)
    });
    
    this.scrollView = createScrollView.call(this);
    this.layout.addChild(this.scrollView);
    this.layout.addChild(this.swipeView);
    this.layout.applyLayout();
}

function createScrollView(){
    var scrollView = new ScrollView({
        height: 50,
        scrollBarEnabled: false,
        align: ScrollView.Align.HORIZONTAL
    });
    
    scrollView.layout.flexDirection = FlexLayout.FlexDirection.ROW;
    scrollView.layout.height = 50;
    scrollView.layout.backgroundColor = Color.TRANSPARENT;
    
    scrollView.pointerView = new View({
        positionType : FlexLayout.PositionType.ABSOLUTE,
        backgroundColor : Color.YELLOW,
        left : 0,
        bottom : 0,
        height : 3,
    });
    
    var scrollViewLayoutWidth = 0;
    scrollView.buttons = [];
    for (var i = 0; i < categories.length; i++) {
        var btn = new Button();
        btn.text = categories[i];
        btn.font = Font.create(Font.DEFAULT,15,Font.BOLD);
        btn.onPress = function(_i){
            this.swipeView.swipeToIndex(_i,true);
        }.bind(this,i);
        btn.backgroundColor = Color.TRANSPARENT;
        var width = btn.font.sizeOfString(categories[i], 500).width + 20;
        if (i == 0) {
            scrollView.pointerView.width = width;
            scrollView.layout.addChild(scrollView.pointerView);
        }
        btn.width = width;
        scrollViewLayoutWidth += width;
        scrollView.layout.addChild(btn);
        scrollView.buttons.push(btn);
    }
    scrollView.layout.width = scrollViewLayoutWidth;
    
    var separator = new View({
        positionType : FlexLayout.PositionType.ABSOLUTE,
        backgroundColor : Color.create(40,0,0,0),
        left : 0,
        bottom : 0,
        height : 1,
        right : 0,
    });
    scrollView.layout.addChild(separator);
    
    return scrollView;
}

function swipeViewPageConstructor(url,category) {
    return extend(PgSwipe)(
        function(_super) {
            // Initalizes super class for this page scope
            _super(this, {requestUrl:url,category:category});
        }
    ); 
}

module && (module.exports = Page_);
