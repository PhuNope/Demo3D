System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, CCFloat, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, AutoDestory;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      CCFloat = _cc.CCFloat;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30e6ans+w9BR531aZJP3Yb6", "AutoDestory", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'CCFloat']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AutoDestory", AutoDestory = (_dec = ccclass('AutoDestory'), _dec2 = property({
        type: CCFloat
      }), _dec(_class = (_class2 = class AutoDestory extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "destroyTime", _descriptor, this);

          this._curPassedTime = 0;
        }

        start() {// Your initialization goes here.
        }

        update(deltaTime) {
          // Your update function goes here.
          this._curPassedTime += deltaTime;

          if (this._curPassedTime > this.destroyTime) {
            this.node.destroy();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "destroyTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e33e900ef1e10a347256123bd30ccdbd7c1ee312.js.map