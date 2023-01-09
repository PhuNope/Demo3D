System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, instantiate, Vec3, Quat, tween, systemEvent, SystemEvent, CameraComponent, geometry, PhysicsSystem, loader, JsonAsset, ModelComponent, Texture2D, director, find, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Ray, tempQuat_a, Lobby;

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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      Quat = _cc.Quat;
      tween = _cc.tween;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      CameraComponent = _cc.CameraComponent;
      geometry = _cc.geometry;
      PhysicsSystem = _cc.PhysicsSystem;
      loader = _cc.loader;
      JsonAsset = _cc.JsonAsset;
      ModelComponent = _cc.ModelComponent;
      Texture2D = _cc.Texture2D;
      director = _cc.director;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f8f65nzsiBIqqzZ74MY4hPw", "LobbyManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'Vec3', 'Quat', 'tween', 'EventTouch', 'systemEvent', 'SystemEvent', 'EventMouse', 'CameraComponent', 'geometry', 'PhysicsSystem', 'loader', 'JsonAsset', 'ModelComponent', 'Texture2D', 'js', 'director', 'Vec2', 'game', 'find']);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        Ray
      } = geometry);
      tempQuat_a = new Quat();

      _export("Lobby", Lobby = (_dec = ccclass('Lobby'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CameraComponent
      }), _dec(_class = (_class2 = class Lobby extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "coverPrfb", _descriptor, this);

          _initializerDefineProperty(this, "mainCamera", _descriptor2, this);

          this.coverWidth = 1;
          this._coverList = [];
          this._coverData = [];
          this._curIndex = 0;
          this._isLoading = false;
        }

        start() {
          const persistCanvas = find('PersistCanvas');
          persistCanvas.active = false; // Your initialization goes here.

          this.loadCovers(); //this.tweenToIndex(this._curIndex, true);
          //鼠标监听

          systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this); //触摸监听

          systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
        }

        loadCovers() {
          loader.loadRes('games.json', JsonAsset, (err, jsonObj) => {
            if (Array.isArray(jsonObj.json)) {
              this.generateCovers(jsonObj.json);
            }
          });
        }

        generateCovers(coverData) {
          this._coverData = coverData;
          const coverNum = Math.max(coverData.length, 5); // 为了好看，默认至少五个

          for (let i = 0; i < coverNum; i++) {
            const coverNode = instantiate(this.coverPrfb);
            coverNode.name = '' + i;
            coverNode.parent = this.node;

            if (i < coverData.length) {
              const data = coverData[i];
              const modelComp = coverNode.getComponent(ModelComponent);
              const mat = modelComp.material;
              loader.loadRes(data.coverImgUrl, Texture2D, (err, texture) => {
                if (err) {
                  console.error(err);
                  return;
                }

                mat.setProperty('mainTexture', texture);

                if (i === coverData.length - 1) {
                  this.tweenToIndex(this._curIndex, true);
                }
              });
            }

            this._coverList.push(coverNode);
          }
        }

        tweenToIndex(index, immediate = false) {
          if (index < 0 || index >= this._coverList.length) {
            return;
          }

          this._curIndex = index;

          for (let i = 0; i < this._coverList.length; i++) {
            const coverNode = this._coverList[i];
            const pos = new Vec3();
            const rot = new Quat();

            if (i !== this._curIndex) {
              const delta = (i - this._curIndex) * this.coverWidth;
              let diff = 1 - (Math.abs(delta) + 2) * 0.1;

              if (diff < 0.1) {
                diff = 0.1;
              }

              const sign = Math.sign(delta);
              let posX = delta * diff;
              let angle = -60 * sign;
              pos.set(posX, 0, 0);
              Quat.fromAxisAngle(rot, Vec3.UNIT_Y, angle / 180 * Math.PI);
            }

            if (immediate) {
              coverNode.setWorldPosition(pos);
              coverNode.setWorldRotation(rot);
            } else {
              tween(coverNode).to(0.5, {
                position: pos,
                rotation: rot
              }, {
                onComplete: () => {}
              }).start();
            }
          }
        }

        moveRight() {
          if (this._curIndex + 1 < this._coverList.length) {
            this.tweenToIndex(this._curIndex + 1);
          }
        }

        moveLeft() {
          if (this._curIndex - 1 >= 0) {
            this.tweenToIndex(this._curIndex - 1);
          }
        }

        onClickPos(mousePos) {
          const outRay = new Ray();
          this.mainCamera.screenPointToRay(mousePos.x, mousePos.y, outRay);
          PhysicsSystem.instance.raycastClosest(outRay);

          if (PhysicsSystem.instance.raycastClosestResult.collider && PhysicsSystem.instance.raycastClosestResult.collider.node) {
            const node = PhysicsSystem.instance.raycastClosestResult.collider.node;
            const index = Number.parseInt(node.name);

            if (index < this._coverData.length) {
              if (this._isLoading) {
                return;
              }

              this._isLoading = true;
              const sceneUrl = this._coverData[index].sceneUrl;

              if (director.loadScene(sceneUrl)) {
                const persistCanvas = find('PersistCanvas');
                persistCanvas.active = true;
                this._isLoading = false;
              } else {
                this._isLoading = false;
              }
            }
          }
        }

        onMouseUp(event) {
          this.onClickPos(event.getLocation());
        }

        onTouchEnd(touch, event) {
          this.onClickPos(event.getLocation());
        }

        onDestroy() {
          //鼠标监听
          systemEvent.off(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this); //触摸监听

          systemEvent.off(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coverPrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec3], {
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
//# sourceMappingURL=511391c96051a47393bce01a53668b4eb39b4ce3.js.map