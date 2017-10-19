//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const FlexLayout = require('sf-core/ui/flexlayout');
const Color = require('sf-core/ui/color');
const ListView = require('sf-core/ui/listview');
const ListViewItem = require('sf-core/ui/listviewitem');
const StatusBarStyle = require('sf-core/ui/statusbarstyle');

const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const PgSwipe_ = extend(Page)(
  //constructor
  function(_super, props) {
    // initalizes super class for this page scope
    _super(this, Object.assign({}, {
      onShow: onShow.bind(this),
      onLoad: onLoad.bind(this),
      orientation: Page.Orientation.PORTRAIT
    }, props || {}));

    const flexLayout6Style = getCombinedStyle(".flexLayout", {
      width: NaN,
      height: NaN,
      backgroundColor: Color.create(0, 234, 234, 234),
      alignSelf: FlexLayout.AlignSelf.STRETCH,
      flexGrow: 1
    });
    var flexLayout6 = new FlexLayout(flexLayout6Style);
    this.layout.addChild(flexLayout6);

    flexLayout6.children = {};
    flexLayout6.children["listView"] = (function() {
      const listViewStyle = getCombinedStyle(".listView", {
        width: NaN,
        height: NaN,
        itemCount: 0,
        backgroundColor: Color.create(0, 255, 255, 255),
        flexGrow: 1
      });
      var listView = new ListView(listViewStyle);
      listView.onRowCreate = function() {
        return new ListViewItem();
      };
      this.listView = listView;

      return listView;
    }).call(this);
    flexLayout6.addChild(flexLayout6.children["listView"]);

    //assign the children to page 
    this.children = Object.assign({}, {
      flexLayout6: flexLayout6
    });

  });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //StatusBar props
  const statusBarStyle = getCombinedStyle(".statusBar", {
    visible: true,
    color: Color.create(255, 93, 162, 28),
    style: StatusBarStyle.LIGHTCONTENT
  });

  Object.assign(this.statusBar, statusBarStyle);

  if (statusBarStyle.color)
    this.statusBar.android && (this.statusBar.android.color = statusBarStyle.color);
  if (statusBarStyle.style)
    this.statusBar.ios && (this.statusBar.ios.style = statusBarStyle.style);

  //HeaderBar props
  const headerBarStyle = getCombinedStyle(".headerBar", {
    title: "Bilyoner.com",
    titleColor: Color.create(255, 255, 255, 255),
    visible: true,
    backgroundColor: Color.create(255, 47, 98, 14)
  });

  Object.assign(this.headerBar, headerBarStyle);

}

/**
 * @event onLoad
 * This event is called once when page is created.
 */
function onLoad() {

  const pageStyle = getCombinedStyle(".page", {
    backgroundColor: Color.create(0, 47, 98, 14),
    paddingLeft: NaN,
    paddingRight: NaN,
    paddingTop: NaN,
    paddingBottom: NaN,
    flexDirection: FlexLayout.FlexDirection.COLUMN,
    alignItems: FlexLayout.AlignItems.CENTER,
    direction: FlexLayout.Direction.INHERIT,
    flexWrap: FlexLayout.FlexWrap.NOWRAP,
    justifyContent: FlexLayout.JustifyContent.SPACE_AROUND
  });

  Object.assign(this.layout, pageStyle);

}

module && (module.exports = PgSwipe_);