System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Utils, _crd;

  _export("Utils", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4aba5X+ky1KWqr6BZdQ3uCi", "Utils", undefined);

      __checkObsolete__(['Node']);

      _export("Utils", Utils = class Utils {
        static walkNode(node, callback) {
          callback(node);
          node.children.forEach(childNode => {
            this.walkNode(childNode, callback);
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8cd39173ab193ed330678ccdf56f4f67ca1c65b4.js.map