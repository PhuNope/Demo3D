System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, ShootingPlayerController, ActionType, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, InputControl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfShootingPlayerController(extras) {
    _reporterNs.report("ShootingPlayerController", "./ShootingPlayerController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionType(extras) {
    _reporterNs.report("ActionType", "./GameDefines", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ShootingPlayerController = _unresolved_2.ShootingPlayerController;
    }, function (_unresolved_3) {
      ActionType = _unresolved_3.ActionType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5bf17fQN9lOwI0hmD3n6l8i", "InputControl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'ColliderComponent', 'RigidBodyComponent', 'EventTouch']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("InputControl", InputControl = (_dec = ccclass('InputControl'), _dec2 = property({
        type: [Node]
      }), _dec3 = property({
        type: _crd && ShootingPlayerController === void 0 ? (_reportPossibleCrUseOfShootingPlayerController({
          error: Error()
        }), ShootingPlayerController) : ShootingPlayerController
      }), _dec(_class = (_class2 = class InputControl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "actionButtons", _descriptor, this);

          _initializerDefineProperty(this, "playerCtrl", _descriptor2, this);
        }

        onLoad() {
          this.actionButtons.forEach(button => {
            button.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
            button.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          });
        }

        onTouchStart(event) {
          const node = event.currentTarget;

          if (node) {
            switch (node.name) {
              case 'Forward':
                this.playerCtrl.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                  error: Error()
                }), ActionType) : ActionType).Forward, true);
                break;

              case 'Backward':
                this.playerCtrl.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                  error: Error()
                }), ActionType) : ActionType).Backward, true);
                break;

              case 'Left':
                this.playerCtrl.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                  error: Error()
                }), ActionType) : ActionType).Left, true);
                break;

              case 'Right':
                this.playerCtrl.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                  error: Error()
                }), ActionType) : ActionType).Right, true);
                break;

              case 'Shoot':
                this.playerCtrl.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                  error: Error()
                }), ActionType) : ActionType).Shoot, true);
                break;

              case 'ThrowGrenade':
                this.playerCtrl.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                  error: Error()
                }), ActionType) : ActionType).ThrowGrenade, true);
                break;
            }
          }
        }

        onTouchEnd(event) {
          const node = event.currentTarget;

          if (node) {
            switch (node.name) {
              case 'Forward':
                this.playerCtrl.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                  error: Error()
                }), ActionType) : ActionType).Forward, false);
                break;

              case 'Backward':
                this.playerCtrl.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                  error: Error()
                }), ActionType) : ActionType).Backward, false);
                break;

              case 'Left':
                this.playerCtrl.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                  error: Error()
                }), ActionType) : ActionType).Left, false);
                break;

              case 'Right':
                this.playerCtrl.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                  error: Error()
                }), ActionType) : ActionType).Right, false);
                break;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "actionButtons", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerCtrl", [_dec3], {
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
//# sourceMappingURL=7fddbe975bfb501c21515fd532b5132bfad58e04.js.map