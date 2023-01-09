System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, ColliderComponent, RigidBodyComponent, director, Prefab, instantiate, Utils, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Grenade;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "./Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      ColliderComponent = _cc.ColliderComponent;
      RigidBodyComponent = _cc.RigidBodyComponent;
      director = _cc.director;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Utils = _unresolved_2.Utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "82dbe/89OJMi52m6sffuj1z", "Grenade", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'ColliderComponent', 'RigidBodyComponent', 'PhysicsSystem', 'director', 'Scene', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Grenade", Grenade = (_dec = ccclass('Grenade'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = class Grenade extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "explosionPrfb", _descriptor, this);

          this._collider = null;
          this._rigidBody = null;
          this._flyTime = 0;
          this._autoDestoryTime = 3;
          this._explosionForce = 100;
          this._explosionRadius = 10;
        }

        onLoad() {
          // Your initialization goes here.
          this._collider = this.node.getComponent(ColliderComponent);
          this._rigidBody = this.node.getComponent(RigidBodyComponent);

          this._collider.on('onCollisionEnter', this.onCollisionEnter, this);
        }

        init(force) {
          this._rigidBody.applyImpulse(force, new Vec3(0, -1, 0));
        }

        onCollisionEnter(event) {
          this.explosion();
        }

        explosion() {
          this.node.destroy();
          const scene = director.getScene();
          const explosion = instantiate(this.explosionPrfb);
          scene.addChild(explosion);
          explosion.setWorldPosition(this.node.getWorldPosition());
          const children = scene.children;
          children.forEach(node => {
            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).walkNode(node, node => {
              const rigid = node.getComponent(RigidBodyComponent);

              if (rigid) {
                const dir = new Vec3();
                Vec3.subtract(dir, node.getWorldPosition(), this.node.getWorldPosition());
                const dist = dir.length();

                if (dist < this._explosionRadius) {
                  dir.normalize();
                  Vec3.multiplyScalar(dir, dir, this._explosionForce / dist);
                  rigid.applyImpulse(dir);
                }
              }
            });
          });
        }

        update(deltaTime) {
          // Your update function goes here.
          this._flyTime += deltaTime;

          if (this._flyTime >= this._autoDestoryTime) {
            this.explosion();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "explosionPrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eb4fec86ccf99f80f9929db44a0b97edfb1c3b03.js.map