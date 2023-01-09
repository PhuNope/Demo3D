System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ColliderComponent, RigidBodyComponent, _dec, _class, _crd, ccclass, property, Bullet;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ColliderComponent = _cc.ColliderComponent;
      RigidBodyComponent = _cc.RigidBodyComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "79e967ngr5Nj7u6HpRpNKi8", "Bullet", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'ColliderComponent', 'RigidBodyComponent']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bullet", Bullet = (_dec = ccclass('Bullet'), _dec(_class = class Bullet extends Component {
        constructor(...args) {
          super(...args);
          this._collider = null;
          this._rigidBody = null;
          this._flyTime = 0;
          this._autoDestoryTime = 5;
        }

        onLoad() {
          // Your initialization goes here.
          this._collider = this.node.getComponent(ColliderComponent);
          this._rigidBody = this.node.getComponent(RigidBodyComponent);

          this._collider.on('onCollisionEnter', this.onCollisionEnter, this);
        }

        init(velocity) {
          this._rigidBody.setLinearVelocity(velocity);
        }

        onCollisionEnter(event) {// if(event.otherCollider.node.name == 'AirWell'||
          //    event.otherCollider.node.name == 'Monster'||
          //    event.otherCollider.node.name == 'tree'){
          //     this.node.destroy();
          // }
        }

        update(deltaTime) {
          // Your update function goes here.
          this._flyTime += deltaTime;

          if (this._flyTime >= this._autoDestoryTime) {
            this.node.destroy();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2294f7ed5285547ebe1db6512222699527a936a0.js.map