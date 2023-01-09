System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, game, director, _dec, _class, _crd, ccclass, property, TopBar;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      game = _cc.game;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e1ce9drXhLHLal2n6ZT6pS", "TopBar", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'game', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TopBar", TopBar = (_dec = ccclass('TopBar'), _dec(_class = class TopBar extends Component {
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;
        start() {
          // Your initialization goes here.
          game.addPersistRootNode(this.node);
        }

        onHomeButtonClicked() {
          director.loadScene('lobby');
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=09df173612592a309c1af12bf154d0ad2177aacc.js.map