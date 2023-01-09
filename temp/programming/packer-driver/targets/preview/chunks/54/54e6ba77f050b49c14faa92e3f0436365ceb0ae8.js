System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GameDefines, _crd, ActionType;

  _export("ActionType", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e8a98x4a5IJagoJYKD9cKE", "GameDefines", undefined);

      (function (ActionType) {
        ActionType[ActionType["Forward"] = 0] = "Forward";
        ActionType[ActionType["Backward"] = 1] = "Backward";
        ActionType[ActionType["Left"] = 2] = "Left";
        ActionType[ActionType["Right"] = 3] = "Right";
        ActionType[ActionType["Shoot"] = 4] = "Shoot";
        ActionType[ActionType["ThrowGrenade"] = 5] = "ThrowGrenade";
      })(ActionType || _export("ActionType", ActionType = {}));

      _export("GameDefines", GameDefines = class GameDefines {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=54e6ba77f050b49c14faa92e3f0436365ceb0ae8.js.map