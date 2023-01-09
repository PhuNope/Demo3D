System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GameDefines, _crd, GameState;

  _export("GameState", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1c463EiXuNDjI7atKa8Vmdn", "GameDefines", undefined);

      _export("GameDefines", GameDefines = class GameDefines {});

      GameDefines.floorLength = 10;
      GameDefines.maxActiveFloor = 50;
      GameDefines.leftLineX = 5;
      GameDefines.middleLineX = 0;
      GameDefines.rightLineX = -5;
      GameDefines.CoinNodeName = 'Coin';
      GameDefines.BlockNodeName = 'RoadBlock';

      (function (GameState) {
        GameState[GameState["INIT"] = 0] = "INIT";
        GameState[GameState["PLAYING"] = 1] = "PLAYING";
        GameState[GameState["END"] = 2] = "END";
      })(GameState || _export("GameState", GameState = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e17d89d723b2701cad868d64663c9755fd8f3403.js.map