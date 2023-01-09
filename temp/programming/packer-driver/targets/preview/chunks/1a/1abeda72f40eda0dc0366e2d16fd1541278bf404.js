System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, CCFloat, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, v3_a, v3_b, CameraFollow;

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
      Node = _cc.Node;
      CCFloat = _cc.CCFloat;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96d85FGykZO9YXS5l7wnOnM", "CameraFollow", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'CCFloat', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      v3_a = new Vec3();
      v3_b = new Vec3();

      _export("CameraFollow", CameraFollow = (_dec = ccclass("CameraFollow"), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: CCFloat
      }), _dec4 = property(Vec3), _dec5 = property(Vec3), _dec(_class = (_class2 = class CameraFollow extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "target", _descriptor, this);

          _initializerDefineProperty(this, "smoothSpeed", _descriptor2, this);

          _initializerDefineProperty(this, "offset", _descriptor3, this);

          _initializerDefineProperty(this, "lookAtOffset", _descriptor4, this);
        }

        //điểm nhìn camera
        start() {// Your initialization goes here.
        }

        lateUpdate(deltaTime) {
          // Your update function goes here.
          this.target.getWorldPosition(v3_a);
          Vec3.add(v3_b, v3_a, this.offset);
          Vec3.lerp(v3_b, this.node.position, v3_b, this.smoothSpeed);
          this.node.setWorldPosition(v3_b);
          Vec3.add(v3_a, v3_a, this.lookAtOffset);
          this.node.lookAt(v3_a);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "smoothSpeed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.125;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "offset", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lookAtOffset", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1abeda72f40eda0dc0366e2d16fd1541278bf404.js.map