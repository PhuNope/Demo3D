System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, AnimationComponent, systemEvent, SystemEvent, macro, Vec3, game, Quat, CCFloat, Prefab, director, instantiate, Bullet, ActionType, Grenade, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, PlayerAnimState, MoveDir, tempVec3_a, tempVec3_b, tempQuat_a, ShootingPlayerController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "./Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionType(extras) {
    _reporterNs.report("ActionType", "./GameDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGrenade(extras) {
    _reporterNs.report("Grenade", "./Grenade", _context.meta, extras);
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
      AnimationComponent = _cc.AnimationComponent;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      macro = _cc.macro;
      Vec3 = _cc.Vec3;
      game = _cc.game;
      Quat = _cc.Quat;
      CCFloat = _cc.CCFloat;
      Prefab = _cc.Prefab;
      director = _cc.director;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Bullet = _unresolved_2.Bullet;
    }, function (_unresolved_3) {
      ActionType = _unresolved_3.ActionType;
    }, function (_unresolved_4) {
      Grenade = _unresolved_4.Grenade;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7f57e5bdZhH4Zj3eULtx95X", "ShootingPlayerController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'AnimationComponent', 'systemEvent', 'SystemEvent', 'macro', 'Vec3', 'math', 'game', 'Quat', 'CCFloat', 'Prefab', 'director', 'instantiate', 'Scene', 'EventMouse']);

      ({
        ccclass,
        property
      } = _decorator);

      (function (PlayerAnimState) {
        PlayerAnimState[PlayerAnimState["None"] = 0] = "None";
        PlayerAnimState[PlayerAnimState["Idle"] = 1] = "Idle";
        PlayerAnimState[PlayerAnimState["Running"] = 2] = "Running";
        PlayerAnimState[PlayerAnimState["Jumping"] = 3] = "Jumping";
        PlayerAnimState[PlayerAnimState["Shooting"] = 4] = "Shooting";
      })(PlayerAnimState || (PlayerAnimState = {}));

      (function (MoveDir) {
        MoveDir[MoveDir["Left"] = 0] = "Left";
        MoveDir[MoveDir["Right"] = 1] = "Right";
        MoveDir[MoveDir["Forward"] = 2] = "Forward";
        MoveDir[MoveDir["Backward"] = 3] = "Backward";
      })(MoveDir || (MoveDir = {}));

      tempVec3_a = new Vec3();
      tempVec3_b = new Vec3();
      tempQuat_a = new Quat();

      _export("ShootingPlayerController", ShootingPlayerController = (_dec = ccclass('ShootingPlayerController'), _dec2 = property({
        type: CCFloat
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: CCFloat
      }), _dec9 = property({
        type: CCFloat
      }), _dec(_class = (_class2 = class ShootingPlayerController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "moveSpeed", _descriptor, this);

          _initializerDefineProperty(this, "BulletPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "grenatePrfb", _descriptor3, this);

          _initializerDefineProperty(this, "firePoint", _descriptor4, this);

          _initializerDefineProperty(this, "throwPoint", _descriptor5, this);

          _initializerDefineProperty(this, "verticalViewNode", _descriptor6, this);

          _initializerDefineProperty(this, "viewUpAngle", _descriptor7, this);

          _initializerDefineProperty(this, "viewDownAngle", _descriptor8, this);

          this._animComp = null;
          this._animState = PlayerAnimState.None;
          this._animStateToNameMap = {};
          this._moveDirMap = {};
          this._velocity = new Vec3();
          this._rotHorizontalSpeed = 0.005;
          this._rotVerticalSpeed = 0.002;
          this._bulletSpeed = 50;
          this._grenadeForce = 50;
        }

        onLoad() {
          //键盘监听
          systemEvent.on(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this); //鼠标监听

          systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
          systemEvent.on(SystemEvent.EventType.MOUSE_DOWN, this.onMouseDown, this); // systemEvent.on(SystemEvent.EventType.MOUSE_MOVE,this.onMouseMove,this);
          //触摸监听

          systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this._animStateToNameMap[PlayerAnimState.Idle] = 'Idle';
          this._animStateToNameMap[PlayerAnimState.Running] = 'Run';
          this._animStateToNameMap[PlayerAnimState.Jumping] = 'Jump';
          this._animStateToNameMap[PlayerAnimState.Shooting] = 'ShootTorsoArmsRifle';
          this._moveDirMap[MoveDir.Left] = new Vec3(1, 0, 0);
          this._moveDirMap[MoveDir.Right] = new Vec3(-1, 0, 0);
          this._moveDirMap[MoveDir.Forward] = new Vec3(0, 0, 1);
          this._moveDirMap[MoveDir.Backward] = new Vec3(0, 0, -1);
        }

        start() {
          // Your initialization goes here.
          this._animComp = this.node.getComponent(AnimationComponent);

          this._animComp.on(AnimationComponent.EventType.FINISHED, this.onAnimationEnd, this);

          this.changeToAnimState(PlayerAnimState.Idle);
        }

        doAction(action, enable) {
          switch (action) {
            case (_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
              error: Error()
            }), ActionType) : ActionType).Forward:
              if (enable) {
                this._velocity.z = 1;
                this.changeToAnimState(PlayerAnimState.Running);
              } else {
                if (this._velocity.z > 0) {
                  this._velocity.z = 0;
                }

                this.checkToIdle();
              }

              break;

            case (_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
              error: Error()
            }), ActionType) : ActionType).Backward:
              if (enable) {
                this._velocity.z = -1;
                this.changeToAnimState(PlayerAnimState.Running);
              } else {
                if (this._velocity.z < 0) {
                  this._velocity.z = 0;
                }

                this.checkToIdle();
              }

              break;

            case (_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
              error: Error()
            }), ActionType) : ActionType).Left:
              if (enable) {
                this._velocity.x = 1;
                this.changeToAnimState(PlayerAnimState.Running);
              } else {
                if (this._velocity.x > 0) {
                  this._velocity.x = 0;
                }

                this.checkToIdle();
              }

              break;

            case (_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
              error: Error()
            }), ActionType) : ActionType).Right:
              if (enable) {
                this._velocity.x = -1;
                this.changeToAnimState(PlayerAnimState.Running);
              } else {
                if (this._velocity.x < 0) {
                  this._velocity.x = 0;
                }

                this.checkToIdle();
              }

              break;

            case (_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
              error: Error()
            }), ActionType) : ActionType).Shoot:
              if (enable) {
                this.changeToAnimState(PlayerAnimState.Shooting);
                this.shoot();
              }

              break;

            case (_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
              error: Error()
            }), ActionType) : ActionType).ThrowGrenade:
              if (enable) {
                this.throwGrenade();
              }

              break;
          }
        }

        onKeyDown(event) {
          switch (event.keyCode) {
            case macro.KEY.a:
              this.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                error: Error()
              }), ActionType) : ActionType).Left, true);
              break;

            case macro.KEY.d:
              this.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                error: Error()
              }), ActionType) : ActionType).Right, true);
              break;

            case macro.KEY.w:
              this.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                error: Error()
              }), ActionType) : ActionType).Forward, true);
              break;

            case macro.KEY.s:
              this.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                error: Error()
              }), ActionType) : ActionType).Backward, true);
              break;

            case macro.KEY.g:
              this.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                error: Error()
              }), ActionType) : ActionType).ThrowGrenade, true);
              break;

            case macro.KEY.space:
              // this.changeToAnimState(PlayerAnimState.Jumping);
              break;
          }
        }

        checkToIdle() {
          if (this._velocity.x === 0 && this._velocity.y === 0 && this._velocity.z === 0) {
            this.changeToAnimState(PlayerAnimState.Idle);
          }
        }

        onKeyUp(event) {
          switch (event.keyCode) {
            case macro.KEY.a:
              this.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                error: Error()
              }), ActionType) : ActionType).Left, false);
              break;

            case macro.KEY.d:
              this.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                error: Error()
              }), ActionType) : ActionType).Right, false);
              break;

            case macro.KEY.w:
              this.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                error: Error()
              }), ActionType) : ActionType).Forward, false);
              break;

            case macro.KEY.s:
              this.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                error: Error()
              }), ActionType) : ActionType).Backward, false);
              break;

            case macro.KEY.space:
              break;
          }
        }

        onMouseDown(event) {
          if (event.getButton() === 2) {
            game.canvas.requestPointerLock == null ? void 0 : game.canvas.requestPointerLock();
          }
        }

        onMouseUp(event) {
          if (event.getButton() === 0) {
            // 鼠标左键
            this.changeToAnimState(PlayerAnimState.Shooting);
            this.shoot();
          } else if (event.getButton() === 2) {
            document.exitPointerLock == null ? void 0 : document.exitPointerLock();
          }
        }

        onMouseMove(event) {
          if (event.movementX != 0) {
            var horizontalRot = this.node.getRotation();
            Quat.rotateAround(horizontalRot, horizontalRot, Vec3.UNIT_Y, -event.movementX * this._rotHorizontalSpeed);
            this.node.setRotation(horizontalRot);
          }

          if (event.movementY != 0) {
            var verticalRot = this.verticalViewNode.getRotation();
            Quat.rotateAround(verticalRot, verticalRot, Vec3.UNIT_X, event.movementY * this._rotVerticalSpeed);
            verticalRot.getEulerAngles(tempVec3_a);

            if (tempVec3_a.x > this.viewDownAngle && tempVec3_a.x < this.viewUpAngle) {
              this.verticalViewNode.setRotation(verticalRot);
            }
          }
        }

        onTouchMove(event) {
          if (event.getDelta().x != 0) {
            var horizontalRot = this.node.getRotation();
            Quat.rotateAround(horizontalRot, horizontalRot, Vec3.UNIT_Y, -event.getDelta().x * this._rotHorizontalSpeed);
            this.node.setRotation(horizontalRot);
          }

          if (event.getDelta().y != 0) {
            var verticalRot = this.verticalViewNode.getRotation();
            Quat.rotateAround(verticalRot, verticalRot, Vec3.UNIT_X, event.getDelta().y * this._rotVerticalSpeed);
            verticalRot.getEulerAngles(tempVec3_a);

            if (tempVec3_a.x > this.viewDownAngle && tempVec3_a.x < this.viewUpAngle) {
              this.verticalViewNode.setRotation(verticalRot);
            }
          }
        }

        changeToAnimState(state) {
          if (this._animState === PlayerAnimState.Idle) {
            if (this._animState !== state) {
              this._animComp.play(this._animStateToNameMap[state]);

              this._animState = state;
            }
          } else {
            if (state === PlayerAnimState.Idle) {
              this._animComp.play(this._animStateToNameMap[state]);

              this._animState = state;
            }
          }
        }

        onAnimationEnd(type, state) {
          if (state.name === this._animStateToNameMap[PlayerAnimState.Shooting]) {
            this.changeToAnimState(PlayerAnimState.Idle);
          }
        }

        shoot() {
          var scene = director.getScene();
          var newBullet = instantiate(this.BulletPrefab); // ts-ignore

          scene.addChild(newBullet);
          newBullet.setPosition(this.firePoint.getWorldPosition());
          var bullet = newBullet.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet);
          var dir = new Vec3(0, 0, 1);
          Vec3.transformQuat(dir, dir, this.firePoint.getWorldRotation());
          Vec3.multiplyScalar(dir, dir, this._bulletSpeed);
          bullet.init(dir);
        }

        throwGrenade() {
          var scene = director.getScene();
          var newGrenade = instantiate(this.grenatePrfb);
          scene.addChild(newGrenade);
          newGrenade.setPosition(this.throwPoint.getWorldPosition());
          var grenade = newGrenade.getComponent(_crd && Grenade === void 0 ? (_reportPossibleCrUseOfGrenade({
            error: Error()
          }), Grenade) : Grenade);
          var dir = new Vec3(0, 0, 1);
          Vec3.transformQuat(dir, dir, this.throwPoint.getWorldRotation());
          Vec3.multiplyScalar(dir, dir, this._grenadeForce);
          grenade.init(dir);
        }

        move(deltaTime) {
          var curPos = tempVec3_a;
          var dir = this._velocity;
          this.node.getWorldPosition(curPos);
          this.node.getWorldRotation(tempQuat_a);
          Vec3.transformQuat(tempVec3_b, dir, tempQuat_a);
          Vec3.scaleAndAdd(curPos, curPos, tempVec3_b, deltaTime * this.moveSpeed);
          this.node.setWorldPosition(curPos);
        }

        update(deltaTime) {
          // Your update function goes here.
          if (this._animState === PlayerAnimState.Running) {
            this.move(deltaTime);
          }
        }

        onDestroy() {
          // 取消键盘监听
          systemEvent.off(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
          systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this); // 取消鼠标监听

          systemEvent.off(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
          systemEvent.off(SystemEvent.EventType.MOUSE_DOWN, this.onMouseDown, this); // systemEvent.off(SystemEvent.EventType.MOUSE_MOVE,this.onMouseMove,this);
          // 取消触摸监听

          systemEvent.off(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BulletPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "grenatePrfb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "firePoint", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "throwPoint", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "verticalViewNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "viewUpAngle", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 60;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "viewDownAngle", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -60;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5ba59ed75b09c64fa4d161f09953607e8a1e2d2c.js.map