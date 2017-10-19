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
const ScrollView = require('sf-core/ui/scrollview');
const Color = require('sf-core/ui/color');
const FlexLayout = require('sf-core/ui/flexlayout');
const Label = require('sf-core/ui/label');
const Font = require('sf-core/ui/font');
const ListView = require('sf-core/ui/listview');
const ListViewItem = require('sf-core/ui/listviewitem');
const ActivityIndicator = require('sf-core/ui/activityindicator');
const TextAlignment = require('sf-core/ui/textalignment');
const StatusBarStyle = require('sf-core/ui/statusbarstyle');

const Statics = require("../components/Statics");

const getCombinedStyle = require("library/styler-builder").getCombinedStyle;
const getCombinedLayoutStyle = require("library/styler-builder").getCombinedLayoutStyle;

const PgStats_ = extend(Page)(
  //constructor
  function(_super, props) {
    // initalizes super class for this page scope
    _super(this, Object.assign({}, {
      onShow: onShow.bind(this),
      onLoad: onLoad.bind(this)
    }, props || {}));

    const scrollViewStyle = getCombinedStyle(".scrollView", {
      width: NaN,
      height: NaN,
      backgroundColor: Color.create(0, 255, 255, 255),
      flexGrow: 1
    });
    const scrollViewLayoutStyle = getCombinedLayoutStyle(".scrollView", {
      height: NaN
    });
    var scrollView = new ScrollView(scrollViewStyle);
    Object.assign(scrollView.layout, scrollViewLayoutStyle);

    this.layout.addChild(scrollView);
    this.scrollView = scrollView;

    scrollView.children = {};
    scrollView.children["flexPuanDurumu"] = (function() {
      const flexPuanDurumuStyle = getCombinedStyle(".flexLayout", {
        width: NaN,
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 10,
        height: 120,
        left: 0,
        top: 0
      });
      var flexPuanDurumu = new FlexLayout(flexPuanDurumuStyle);
      this.flexPuanDurumu = flexPuanDurumu;
      flexPuanDurumu.children = {};
      flexPuanDurumu.children["flexLayout1"] = (function() {
        const flexLayout1Style = getCombinedStyle(".flexLayout", {
          width: NaN,
          height: 40,
          backgroundColor: Color.create(0, 47, 98, 14),
          left: NaN,
          right: NaN,
          marginLeft: NaN,
          marginRight: NaN,
          borderRadius: 10,
          paddingLeft: NaN,
          paddingRight: NaN,
          flexDirection: FlexLayout.FlexDirection.ROW,
          flexGrow: 0
        });
        var flexLayout1 = new FlexLayout(flexLayout1Style);
        flexLayout1.children = {};
        flexLayout1.children["flexLayout2"] = (function() {
          const flexLayout2Style = getCombinedStyle(".flexLayout", {
            height: 40,
            width: NaN,
            backgroundColor: Color.create(255, 47, 98, 14),
            borderRadius: NaN,
            flexGrow: 3
          });
          var flexLayout2 = new FlexLayout(flexLayout2Style);
          flexLayout2.children = {};
          flexLayout2.children["lblLeagueName"] = (function() {
            const lblLeagueNameStyle = getCombinedStyle(".label", {
              height: NaN,
              width: NaN,
              backgroundColor: Color.create(0, 255, 255, 255),
              marginLeft: 10,
              textColor: Color.create(255, 255, 255, 255),
              text: "U17 Dunya Kupasi",
              marginBottom: 10,
              flexGrow: 1,
              font: Font.create(Font.DEFAULT, 14, Font.BOLD)

            });
            var lblLeagueName = new Label(lblLeagueNameStyle);
            if (lblLeagueNameStyle.scrollEnabled === false)
              lblLeagueName.ios && (lblLeagueName.ios.scrollEnabled = false);
            this.lblLeagueName = lblLeagueName;

            return lblLeagueName;
          }).call(this);
          flexLayout2.addChild(flexLayout2.children["lblLeagueName"]);

          return flexLayout2;
        }).call(this);
        flexLayout1.addChild(flexLayout1.children["flexLayout2"]);
        flexLayout1.children["flexLayout3"] = (function() {
          const flexLayout3Style = getCombinedStyle(".flexLayout", {
            height: 40,
            width: NaN,
            borderColor: Color.create(255, 53, 4, 4),
            backgroundColor: Color.create(255, 27, 25, 25),
            borderRadius: NaN,
            flexGrow: 2
          });
          var flexLayout3 = new FlexLayout(flexLayout3Style);
          flexLayout3.children = {};
          flexLayout3.children["lblPuanDurumu"] = (function() {
            const lblPuanDurumuStyle = getCombinedStyle(".label", {
              height: NaN,
              width: NaN,
              marginLeft: 10,
              backgroundColor: Color.create(0, 255, 255, 255),
              textColor: Color.create(255, 255, 255, 255),
              marginBottom: 10,
              text: "Puan Durumu",
              flexGrow: 1,
              font: Font.create(Font.DEFAULT, 14, Font.BOLD)

            });
            var lblPuanDurumu = new Label(lblPuanDurumuStyle);
            if (lblPuanDurumuStyle.scrollEnabled === false)
              lblPuanDurumu.ios && (lblPuanDurumu.ios.scrollEnabled = false);

            return lblPuanDurumu;
          }).call(this);
          flexLayout3.addChild(flexLayout3.children["lblPuanDurumu"]);

          return flexLayout3;
        }).call(this);
        flexLayout1.addChild(flexLayout1.children["flexLayout3"]);

        return flexLayout1;
      }).call(this);
      flexPuanDurumu.addChild(flexPuanDurumu.children["flexLayout1"]);
      flexPuanDurumu.children["flexStaticTeamList"] = (function() {
        const flexStaticTeamListStyle = getCombinedStyle(".flexLayout", {
          width: NaN,
          height: NaN,
          left: 0,
          right: 0,
          top: 30,
          bottom: 0,
          positionType: FlexLayout.PositionType.ABSOLUTE
        });
        var flexStaticTeamList = new FlexLayout(flexStaticTeamListStyle);
        this.flexStaticTeamList = flexStaticTeamList;
        flexStaticTeamList.children = {};
        flexStaticTeamList.children["statics"] = (function() {
          const staticsStyle = getCombinedStyle(".flexLayout", {
            left: NaN,
            top: NaN,
            height: 30,
            right: NaN,
            width: NaN,
            backgroundColor: Color.create(255, 248, 248, 248),
            flexDirection: FlexLayout.FlexDirection.ROW,
            positionType: FlexLayout.PositionType.RELATIVE
          });
          var statics = new Statics(staticsStyle, "pgStats");

          return statics;
        }).call(this);
        flexStaticTeamList.addChild(flexStaticTeamList.children["statics"]);
        flexStaticTeamList.children["listPuanDurumu"] = (function() {
          const listPuanDurumuStyle = getCombinedStyle(".listView", {
            width: NaN,
            height: NaN,
            rowHeight: 30,
            itemCount: 0,
            flexGrow: 1
          });
          var listPuanDurumu = new ListView(listPuanDurumuStyle);
          listPuanDurumu.onRowCreate = function() {
            return new ListViewItem();
          };
          this.listPuanDurumu = listPuanDurumu;

          return listPuanDurumu;
        }).call(this);
        flexStaticTeamList.addChild(flexStaticTeamList.children["listPuanDurumu"]);

        return flexStaticTeamList;
      }).call(this);
      flexPuanDurumu.addChild(flexPuanDurumu.children["flexStaticTeamList"]);
      flexPuanDurumu.children["flexTouch"] = (function() {
        const flexTouchStyle = getCombinedStyle(".flexLayout", {
          width: NaN,
          height: NaN,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          borderColor: Color.create(0, 0, 0, 0),
          backgroundColor: Color.create(0, 0, 0, 0),
          positionType: FlexLayout.PositionType.ABSOLUTE,
          justifyContent: FlexLayout.JustifyContent.CENTER,
          alignItems: FlexLayout.AlignItems.CENTER
        });
        var flexTouch = new FlexLayout(flexTouchStyle);
        this.flexTouch = flexTouch;
        flexTouch.children = {};
        flexTouch.children["activityIndicator"] = (function() {
          const activityIndicatorStyle = getCombinedStyle(".activityIndicator", {
            width: 44,
            height: 44,
            left: 0,
            right: NaN,
            top: 0,
            bottom: NaN,
            backgroundColor: Color.create(0, 255, 255, 255),
            visible: false,
            color: Color.create(255, 255, 255, 255),
            positionType: FlexLayout.PositionType.RELATIVE
          });
          var activityIndicator = new ActivityIndicator(activityIndicatorStyle);
          this.activityIndicator = activityIndicator;

          return activityIndicator;
        }).call(this);
        flexTouch.addChild(flexTouch.children["activityIndicator"]);

        return flexTouch;
      }).call(this);
      flexPuanDurumu.addChild(flexPuanDurumu.children["flexTouch"]);

      return flexPuanDurumu;
    }).call(this);
    scrollView.layout.addChild(scrollView.children["flexPuanDurumu"]);

    scrollView.children["flexLayout1_3"] = (function() {
      const flexLayout1_3Style = getCombinedStyle(".flexLayout", {
        width: NaN,
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 10,
        height: 130,
        left: 0,
        top: 0
      });
      var flexLayout1_3 = new FlexLayout(flexLayout1_3Style);
      flexLayout1_3.children = {};
      flexLayout1_3.children["flexLayout1"] = (function() {
        const flexLayout1Style = getCombinedStyle(".flexLayout", {
          width: NaN,
          height: 40,
          backgroundColor: Color.create(0, 47, 98, 14),
          left: NaN,
          right: NaN,
          marginLeft: NaN,
          marginRight: NaN,
          borderRadius: 10,
          paddingLeft: NaN,
          paddingRight: NaN,
          flexDirection: FlexLayout.FlexDirection.ROW,
          flexGrow: 0
        });
        var flexLayout1 = new FlexLayout(flexLayout1Style);
        flexLayout1.children = {};
        flexLayout1.children["flexLayout2"] = (function() {
          const flexLayout2Style = getCombinedStyle(".flexLayout", {
            height: 40,
            width: NaN,
            backgroundColor: Color.create(255, 47, 98, 14),
            borderRadius: NaN,
            flexGrow: 3
          });
          var flexLayout2 = new FlexLayout(flexLayout2Style);
          flexLayout2.children = {};
          flexLayout2.children["lblTitle"] = (function() {
            const lblTitleStyle = getCombinedStyle(".label", {
              height: NaN,
              width: NaN,
              backgroundColor: Color.create(0, 255, 255, 255),
              marginLeft: 10,
              textColor: Color.create(255, 255, 255, 255),
              text: "Son Maclar",
              marginBottom: 10,
              flexGrow: 1,
              font: Font.create(Font.DEFAULT, 14, Font.BOLD)

            });
            var lblTitle = new Label(lblTitleStyle);
            if (lblTitleStyle.scrollEnabled === false)
              lblTitle.ios && (lblTitle.ios.scrollEnabled = false);

            return lblTitle;
          }).call(this);
          flexLayout2.addChild(flexLayout2.children["lblTitle"]);

          return flexLayout2;
        }).call(this);
        flexLayout1.addChild(flexLayout1.children["flexLayout2"]);
        flexLayout1.children["flexLayout3"] = (function() {
          const flexLayout3Style = getCombinedStyle(".flexLayout", {
            height: 40,
            width: NaN,
            borderColor: Color.create(255, 53, 4, 4),
            backgroundColor: Color.create(255, 27, 25, 25),
            borderRadius: NaN,
            flexGrow: 2
          });
          var flexLayout3 = new FlexLayout(flexLayout3Style);
          flexLayout3.children = {};
          flexLayout3.children["lblPuanDurumu"] = (function() {
            const lblPuanDurumuStyle = getCombinedStyle(".label", {
              height: NaN,
              width: NaN,
              marginLeft: 10,
              backgroundColor: Color.create(0, 255, 255, 255),
              textColor: Color.create(255, 255, 255, 255),
              marginBottom: 10,
              text: "Form Durumu",
              flexGrow: 1,
              font: Font.create(Font.DEFAULT, 14, Font.BOLD)

            });
            var lblPuanDurumu = new Label(lblPuanDurumuStyle);
            if (lblPuanDurumuStyle.scrollEnabled === false)
              lblPuanDurumu.ios && (lblPuanDurumu.ios.scrollEnabled = false);

            return lblPuanDurumu;
          }).call(this);
          flexLayout3.addChild(flexLayout3.children["lblPuanDurumu"]);

          return flexLayout3;
        }).call(this);
        flexLayout1.addChild(flexLayout1.children["flexLayout3"]);

        return flexLayout1;
      }).call(this);
      flexLayout1_3.addChild(flexLayout1_3.children["flexLayout1"]);
      flexLayout1_3.children["flexLayout3"] = (function() {
        const flexLayout3Style = getCombinedStyle(".flexLayout", {
          width: NaN,
          height: NaN,
          left: 0,
          right: 0,
          top: 30,
          bottom: 0,
          positionType: FlexLayout.PositionType.ABSOLUTE
        });
        var flexLayout3 = new FlexLayout(flexLayout3Style);
        flexLayout3.children = {};
        flexLayout3.children["flexLayout2"] = (function() {
          const flexLayout2Style = getCombinedStyle(".flexLayout", {
            height: 30,
            width: NaN,
            backgroundColor: Color.create(255, 234, 234, 234),
            flexDirection: FlexLayout.FlexDirection.ROW
          });
          var flexLayout2 = new FlexLayout(flexLayout2Style);
          flexLayout2.children = {};
          flexLayout2.children["label2_1"] = (function() {
            const label2_1Style = getCombinedStyle(".label", {
              width: NaN,
              height: NaN,
              marginLeft: 5,
              text: "Ghana (U17)",
              backgroundColor: Color.create(0, 255, 255, 255),
              flexGrow: 1,
              font: Font.create(Font.DEFAULT, 14, Font.BOLD)

            });
            var label2_1 = new Label(label2_1Style);
            if (label2_1Style.scrollEnabled === false)
              label2_1.ios && (label2_1.ios.scrollEnabled = false);

            return label2_1;
          }).call(this);
          flexLayout2.addChild(flexLayout2.children["label2_1"]);
          flexLayout2.children["label2"] = (function() {
            const label2Style = getCombinedStyle(".label", {
              width: NaN,
              height: NaN,
              marginLeft: 5,
              text: "Usa(U17)",
              backgroundColor: Color.create(0, 255, 255, 255),
              textAlignment: TextAlignment.MIDRIGHT,
              marginRight: 5,
              flexGrow: 1,
              font: Font.create(Font.DEFAULT, 14, Font.BOLD)

            });
            var label2 = new Label(label2Style);
            if (label2Style.scrollEnabled === false)
              label2.ios && (label2.ios.scrollEnabled = false);

            return label2;
          }).call(this);
          flexLayout2.addChild(flexLayout2.children["label2"]);

          return flexLayout2;
        }).call(this);
        flexLayout3.addChild(flexLayout3.children["flexLayout2"]);
        flexLayout3.children["flexLayout2_1"] = (function() {
          const flexLayout2_1Style = getCombinedStyle(".flexLayout", {
            height: 30,
            width: NaN,
            backgroundColor: Color.create(255, 245, 245, 245),
            flexDirection: FlexLayout.FlexDirection.ROW
          });
          var flexLayout2_1 = new FlexLayout(flexLayout2_1Style);
          flexLayout2_1.children = {};
          flexLayout2_1.children["label2_1"] = (function() {
            const label2_1Style = getCombinedStyle(".label", {
              width: NaN,
              height: NaN,
              marginLeft: 5,
              text: "Puan : 3",
              backgroundColor: Color.create(0, 255, 255, 255),
              textColor: Color.create(255, 61, 60, 60),
              flexGrow: 1,
              font: Font.create(Font.DEFAULT, 15, Font.NORMAL)

            });
            var label2_1 = new Label(label2_1Style);
            if (label2_1Style.scrollEnabled === false)
              label2_1.ios && (label2_1.ios.scrollEnabled = false);

            return label2_1;
          }).call(this);
          flexLayout2_1.addChild(flexLayout2_1.children["label2_1"]);
          flexLayout2_1.children["label2"] = (function() {
            const label2Style = getCombinedStyle(".label", {
              width: NaN,
              height: NaN,
              marginLeft: 5,
              text: "Puan : 3",
              backgroundColor: Color.create(0, 255, 255, 255),
              textAlignment: TextAlignment.MIDRIGHT,
              marginRight: 5,
              textColor: Color.create(255, 60, 60, 60),
              flexGrow: 1,
              font: Font.create(Font.DEFAULT, 15, Font.NORMAL)

            });
            var label2 = new Label(label2Style);
            if (label2Style.scrollEnabled === false)
              label2.ios && (label2.ios.scrollEnabled = false);

            return label2;
          }).call(this);
          flexLayout2_1.addChild(flexLayout2_1.children["label2"]);

          return flexLayout2_1;
        }).call(this);
        flexLayout3.addChild(flexLayout3.children["flexLayout2_1"]);
        flexLayout3.children["flexLayout2_1_1"] = (function() {
          const flexLayout2_1_1Style = getCombinedStyle(".flexLayout", {
            height: NaN,
            width: NaN,
            backgroundColor: Color.create(255, 245, 245, 245),
            flexDirection: FlexLayout.FlexDirection.ROW,
            flexGrow: 1,
            justifyContent: FlexLayout.JustifyContent.CENTER,
            alignItems: FlexLayout.AlignItems.CENTER
          });
          var flexLayout2_1_1 = new FlexLayout(flexLayout2_1_1Style);
          flexLayout2_1_1.children = {};
          flexLayout2_1_1.children["label2_1_1"] = (function() {
            const label2_1_1Style = getCombinedStyle(".label", {
              width: 30,
              height: 30,
              marginLeft: NaN,
              text: "G",
              backgroundColor: Color.create(255, 157, 202, 36),
              textColor: Color.create(255, 255, 255, 255),
              textAlignment: TextAlignment.MIDCENTER,
              borderRadius: 10,
              marginRight: 10,
              flexGrow: 0,
              font: Font.create(Font.DEFAULT, 20, Font.BOLD)

            });
            var label2_1_1 = new Label(label2_1_1Style);
            if (label2_1_1Style.scrollEnabled === false)
              label2_1_1.ios && (label2_1_1.ios.scrollEnabled = false);

            return label2_1_1;
          }).call(this);
          flexLayout2_1_1.addChild(flexLayout2_1_1.children["label2_1_1"]);
          flexLayout2_1_1.children["label2_1"] = (function() {
            const label2_1Style = getCombinedStyle(".label", {
              width: 30,
              height: 30,
              marginLeft: 10,
              text: "G",
              backgroundColor: Color.create(255, 157, 202, 36),
              textColor: Color.create(255, 255, 255, 255),
              textAlignment: TextAlignment.MIDCENTER,
              borderRadius: 10,
              flexGrow: 0,
              font: Font.create(Font.DEFAULT, 20, Font.BOLD)

            });
            var label2_1 = new Label(label2_1Style);
            if (label2_1Style.scrollEnabled === false)
              label2_1.ios && (label2_1.ios.scrollEnabled = false);

            return label2_1;
          }).call(this);
          flexLayout2_1_1.addChild(flexLayout2_1_1.children["label2_1"]);

          return flexLayout2_1_1;
        }).call(this);
        flexLayout3.addChild(flexLayout3.children["flexLayout2_1_1"]);

        return flexLayout3;
      }).call(this);
      flexLayout1_3.addChild(flexLayout1_3.children["flexLayout3"]);

      return flexLayout1_3;
    }).call(this);
    scrollView.layout.addChild(scrollView.children["flexLayout1_3"]);

    //assign the children to page 
    this.children = Object.assign({}, {
      scrollView: scrollView
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
    color: Color.create(255, 47, 98, 14),
    style: StatusBarStyle.LIGHTCONTENT
  });

  Object.assign(this.statusBar, statusBarStyle);

  if (statusBarStyle.color)
    this.statusBar.android && (this.statusBar.android.color = statusBarStyle.color);
  if (statusBarStyle.style)
    this.statusBar.ios && (this.statusBar.ios.style = statusBarStyle.style);

  //HeaderBar props
  const headerBarStyle = getCombinedStyle(".headerBar", {
    title: "İstatistikler",
    backgroundColor: Color.create(255, 47, 98, 14),
    titleColor: Color.create(255, 255, 255, 255)
  });

  Object.assign(this.headerBar, headerBarStyle);

}

/**
 * @event onLoad
 * This event is called once when page is created.
 */
function onLoad() {

  const pageStyle = getCombinedStyle(".page", {});

  Object.assign(this.layout, pageStyle);

}

module && (module.exports = PgStats_);