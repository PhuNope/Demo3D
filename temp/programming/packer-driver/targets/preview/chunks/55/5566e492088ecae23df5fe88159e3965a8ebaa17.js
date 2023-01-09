System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SkeletalAnimationComponent, Vec3, CCFloat, systemEvent, SystemEvent, tween, AnimationComponent, AudioClip, AudioSourceComponent, GameDefines, GameState, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, tempVec3_a, MoveAction, MoveState, cocosAnim, PlayerController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameDefines(extras) {
    _reporterNs.report("GameDefines", "./GameDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "./GameDefines", _context.meta, extras);
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
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
      Vec3 = _cc.Vec3;
      CCFloat = _cc.CCFloat;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      tween = _cc.tween;
      AnimationComponent = _cc.AnimationComponent;
      AudioClip = _cc.AudioClip;
      AudioSourceComponent = _cc.AudioSourceComponent;
    }, function (_unresolved_2) {
      GameDefines = _unresolved_2.GameDefines;
      GameState = _unresolved_2.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fb971QsleBHKbNynDY3dK1p", "PlayerController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SkeletalAnimationComponent', 'Vec3', 'CCFloat', 'systemEvent', 'SystemEvent', 'tween', 'AnimationComponent', 'Touch', 'ColliderComponent', 'ITriggerEvent', 'AudioClip', 'AudioSourceComponent']);

      ({
        ccclass,
        property
      } = _decorator);
      tempVec3_a = new Vec3();

      (function (MoveAction) {
        MoveAction[MoveAction["LEFT"] = 0] = "LEFT";
        MoveAction[MoveAction["RIGHT"] = 1] = "RIGHT";
        MoveAction[MoveAction["UP"] = 2] = "UP";
      })(MoveAction || (MoveAction = {}));

      (function (MoveState) {
        MoveState[MoveState["RUNNING"] = 0] = "RUNNING";
        MoveState[MoveState["MOVING_LEFT"] = 1] = "MOVING_LEFT";
        MoveState[MoveState["MOVING_RIGHT"] = 2] = "MOVING_RIGHT";
        MoveState[MoveState["JUMPING"] = 3] = "JUMPING";
      })(MoveState || (MoveState = {}));

      cocosAnim = {
        idle: 'cocos_anim_idle',
        run: 'cocos_anim_run',
        jump: 'cocos_anim_jump'
      };

      _export("PlayerController", PlayerController = (_dec = ccclass('PlayerController'), _dec2 = property({
        type: CCFloat
      }), _dec3 = property({
        type: SkeletalAnimationComponent
      }), _dec4 = property({
        type: AudioClip
      }), _dec5 = property({
        type: AudioClip
      }), _dec(_class = (_class2 = class PlayerController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "speed", _descriptor, this);

          _initializerDefineProperty(this, "playerAnimComp", _descriptor2, this);

          _initializerDefineProperty(this, "coinAC", _descriptor3, this);

          _initializerDefineProperty(this, "jumpAC", _descriptor4, this);

          this.onTriggerCoin = void 0;
          this.onTriggerBlock = void 0;
          this._pressedX = 0;
          this._pressedY = 0;
          this._moveState = MoveState.RUNNING;
          this._gameState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).INIT;
          this._audioSourceComp = null;
        }

        start() {
          // Your initialization goes here.
          this._audioSourceComp = this.getComponent(AudioSourceComponent);
        }

        onGameStateChanged(state) {
          switch (state) {
            case (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).INIT:
              this.onGameInit();
              break;

            case (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).PLAYING:
              this.onGamePlaying();
              break;

            case (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).END:
              this.onGameEnd();
              break;
          }

          this._gameState = state;
        }

        onGameInit() {
          this.playerAnimComp.play(cocosAnim.idle);
          this.node.setPosition(tempVec3_a.set(0, 0, 0));
        }

        onGamePlaying() {
          this._moveState = MoveState.RUNNING;
          this.playerAnimComp.play(cocosAnim.run);
          var jumpState = this.playerAnimComp.getState(cocosAnim.jump);
          jumpState.on(AnimationComponent.EventType.FINISHED, this.onJumpEnd, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onViewTouchStart, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onViewTouchEnd, this);
        }

        onGameEnd() {
          var jumpState = this.playerAnimComp.getState(cocosAnim.jump);
          jumpState.off(AnimationComponent.EventType.FINISHED, this.onJumpEnd, this);
          systemEvent.off(SystemEvent.EventType.TOUCH_START, this.onViewTouchStart, this);
          systemEvent.off(SystemEvent.EventType.TOUCH_END, this.onViewTouchEnd, this);
        }

        onTriggerEnter(event) {
          var triggerNode = event.otherCollider.node;

          if (triggerNode.name === 'Coin') {
            this._audioSourceComp.playOneShot(this.coinAC);

            if (this.onTriggerCoin) {
              this.onTriggerCoin(triggerNode);
            }
          } else if (triggerNode.name === 'RoadBlock') {
            var animComp = triggerNode.getComponent(AnimationComponent);
            var downName = 'block_down';
            var state = animComp.getState(downName);

            if (!state.isPlaying) {
              animComp.play(downName);
            }

            if (this.onTriggerBlock) {
              this.onTriggerBlock(triggerNode);
            }
          }
        }

        onViewTouchStart(event) {
          var location = event.getLocation(); // 获取节点坐标

          this._pressedX = location.x;
          this._pressedY = location.y;
        }

        onViewTouchEnd(event) {
          var touchPoint = event.getLocation();
          var endX = this._pressedX - touchPoint.x;
          var endY = this._pressedY - touchPoint.y;

          if (Math.abs(endX) > Math.abs(endY)) {
            //手势向左右
            //判断向左还是向右 
            if (endX > 0) {
              // left
              this.move(MoveAction.LEFT);
            } else {
              // right
              this.move(MoveAction.RIGHT);
            }
          } else {
            //手势向上下
            //判断手势向上还是向下
            if (endY > 0) {// down
            } else {
              // up
              this.move(MoveAction.UP);
            }
          }
        }

        move(moveAction) {
          switch (moveAction) {
            case MoveAction.LEFT:
              if (this._moveState === MoveState.RUNNING) {
                tween(this.node).by(0.5, {
                  position: new Vec3((_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
                    error: Error()
                  }), GameDefines) : GameDefines).leftLineX, 0, 0)
                }, {
                  onComplete: () => {
                    this._moveState = MoveState.RUNNING;
                  }
                }).start();
                this._moveState = MoveState.MOVING_LEFT;
              }

              break;

            case MoveAction.RIGHT:
              if (this._moveState === MoveState.RUNNING) {
                tween(this.node).by(0.5, {
                  position: new Vec3((_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
                    error: Error()
                  }), GameDefines) : GameDefines).rightLineX, 0, 0)
                }, {
                  onComplete: () => {
                    this._moveState = MoveState.RUNNING;
                  }
                }).start();
                this._moveState = MoveState.MOVING_RIGHT;
              }

              break;

            case MoveAction.UP:
              if (this._moveState === MoveState.RUNNING) {
                this._audioSourceComp.playOneShot(this.jumpAC);

                this.playerAnimComp.crossFade(cocosAnim.jump);
                var state = this.playerAnimComp.getState(cocosAnim.jump);
                state.speed = 1.5;
                tween(this.node).by(0.75, {
                  position: new Vec3(0, 0, 10)
                }, {
                  onComplete: () => {// this._moveState = MoveState.RUNNING;
                  }
                }).start();
                this._moveState = MoveState.JUMPING;
              }

              break;
          }
        }

        onJumpEnd(type, state) {
          // const jumpState = this.playerAnimComp.getState(cocosAnim.jump);
          // jumpState.off(AnimationComponent.EventType.LASTFRAME, this.onJumpEnd, this);
          if ((state == null ? void 0 : state.name) === cocosAnim.jump) {
            this.playerAnimComp.play(cocosAnim.run);
            this._moveState = MoveState.RUNNING;
          }
        }

        update(deltaTime) {
          if (this._gameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).PLAYING) {
            if (this._moveState === MoveState.JUMPING) {// this.node.translate(tempVec3_a.set(0, 0, this.speed * 1.5 * deltaTime));
            } else {
              this.node.translate(tempVec3_a.set(0, 0, this.speed * deltaTime));
            }
          }
        }

        onDestroy() {
          systemEvent.off(SystemEvent.EventType.TOUCH_START, this.onViewTouchStart, this);
          systemEvent.off(SystemEvent.EventType.TOUCH_END, this.onViewTouchEnd, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerAnimComp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "coinAC", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "jumpAC", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5566e492088ecae23df5fe88159e3965a8ebaa17.js.map