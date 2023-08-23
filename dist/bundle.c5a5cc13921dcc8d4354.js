/*! For license information please see bundle.c5a5cc13921dcc8d4354.js.LICENSE.txt */
  color: #fff;
  font-family: ${li.PIXEL_LABEL};
  pointer-events: all;
  border-radius: 5px;
  letter-spacing: 1px;
  ${t=>{switch(t.$view){case"active":return ri`
          background: ${hi.BLUE};
        `;case"primary":return ri`
          background: ${hi.WARN};
          &:hover {
            background: ${hi.WARN_DARK};
          }
        `;case"confirm":return ri`
          background: ${hi.SUCCESS};
          &:hover {
            background: ${hi.SUCCESS_DARK};
          }
        `;case"decline":return ri`
          background: ${hi.ERROR};
          &:hover {
            background: ${hi.ERROR_DARK};
          }
        `;default:return ri`
          background: ${hi.BLACK};
          &:hover {
            background: ${hi.BLUE};
          }
        `}}}
  ${t=>{switch(t.$size){case"fixed":return ri`
          text-align: center;
          font-size: 10px;
          line-height: 24px;
          width: 80px;
        `;case"large":return ri`
          font-size: 22px;
          line-height: 22px;
          padding: 13px 20px 14px 20px;
        `;case"medium":return ri`
          font-size: 18px;
          line-height: 18px;
          padding: 10px 18px 11px 18px;
        `;default:return ri`
          font-size: 11px;
          line-height: 11px;
          padding: 7px 10px 8px 10px;
        `}}}
  &:hover {
    cursor: pointer;
  }
`,pi=({size:t,view:e,onClick:i,children:n})=>C.createElement(fi,{onClick:i,$size:t,$view:e},n),gi={target:1280,min:.7,max:1},vi=ci.div`
  width: 100%;
  height: 100%;
  background: ${hi.BLACK_TRANSPARENT_75};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3;
  pointer-events: all;
  > * {
    pointer-events: none;
  }
`,mi=({children:t})=>{const e=(0,_.useRelativeScale)(gi);return C.createElement(vi,{ref:e},t)},yi=ci.div`
  margin-top: 100px;
  list-style: none;
`,xi=ci.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-family: ${li.PIXEL_LABEL};
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`,bi=ci.div`
  margin-top: -3px;
  font-size: 26px;
  line-height: 26px;
`,Ti=ci.div`
  margin-left: 10px;
  font-size: 16px;
  line-height: 16px;
`,wi=ci.div`
  margin-left: 15px;
  font-size: 12px;
  line-height: 12px;
  color: ${oi.SUCCESS};
`,Ei=({stat:t,record:e})=>{const i=(0,C.useMemo)((()=>[{key:"score",label:"Total score",value:t.score},{key:"waves",label:"Waves completed",value:t.waves},{key:"kills",label:"Enemies killed",value:t.kills},{key:"lived",label:"Minutes lived",value:t.lived.toFixed(1)}]),[]);return C.createElement(yi,null,i.map((i=>{var n;return C.createElement(xi,{key:i.key},C.createElement(bi,null,i.value),C.createElement(Ti,null,i.label),(null!==(n=null==e?void 0:e[i.key])&&void 0!==n?n:0)<t[i.key]&&C.createElement(wi,null,"RECORD"))})))},Si=ci.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,Ai=ci.div`
  background: ${hi.ERROR};
  color: #fff;
  padding: 15px 30px 24px 30px;
  font-family: ${li.PIXEL_LABEL};
  font-size: 66px;
  line-height: 66px;
  margin-bottom: 40px;
`,_i=({stat:t,record:e})=>{const i=(0,_.useGame)();return C.createElement(mi,null,C.createElement(Si,null,C.createElement(Ai,null,"GAME OVER"),C.createElement(pi,{onClick:()=>{i.stopGame()},size:"large",view:"confirm"},"Play again"),C.createElement(Ei,{stat:t,record:e})))};_i.displayName="GameoverUI";class Ci extends x.Scene{}class Ri extends Ci{constructor(){super(n.GAMEOVER)}create(t){new _.Interface(this,_i,t)}}const Pi={files:[]};function Mi(t){return"string"==typeof t?[t]:Object.values(t)}function Oi(t){Pi.files=Pi.files.concat(Mi(t).map((t=>({key:t,type:"audio",url:`assets/audio/${t}.mp3`}))))}function Li(t){Pi.files=Pi.files.concat(Mi(t).map((t=>({key:t,type:"image",url:`assets/sprites/${t}.png`}))))}function Di(t,e){Pi.files=Pi.files.concat(Mi(t).map((t=>{const{width:i,height:n}="function"==typeof e?e(t):e;return{key:t,type:"spritesheet",url:`assets/sprites/${t}.png`,frameConfig:{frameWidth:i,frameHeight:n}}})))}function ki(t,e){return function(t,e,i,n){return new(i||(i=Promise))((function(s,r){function a(t){try{h(n.next(t))}catch(t){r(t)}}function o(t){try{h(n.throw(t))}catch(t){r(t)}}function h(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,o)}h((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const i=new FontFace(t,`url('assets/fonts/${e}')`);return i.load().then((()=>(document.fonts.add(i),i)))}))}var Fi,Ii,Bi;!function(t){t.ERROR="interface/error"}(Fi||(Fi={})),function(t){t.NOTICE="notice"}(Ii||(Ii={})),function(t){t.INFO="INFO",t.WARN="WARN",t.ERROR="ERROR"}(Bi||(Bi={}));const Ni=150;function Ui(t,e){return e?Math.floor(t/e)*e:Math.floor(t)}function zi(t){const e=t.maxLevel?Math.min(t.maxLevel,t.level):t.level;return Ui(t.defaultValue+t.defaultValue*t.scale*(e-1),t.roundTo)}function Yi(t){if(t.retardationLevel&&t.level>t.retardationLevel){const e=Yi(Object.assign(Object.assign({},t),{level:t.retardationLevel,retardationLevel:void 0}));return zi(Object.assign(Object.assign({},t),{defaultValue:e,level:t.level-t.retardationLevel+1}))}const e=t.maxLevel?Math.min(t.maxLevel,t.level):t.level;return Ui(t.defaultValue*Math.pow(t.scale+1,e-1),t.roundTo)}const Xi=ci.div`
  position: absolute;
  pointer-events: none;
  display: none;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 10px;
  font-size: 12px;
  line-height: 32px;
  height: 32px;
  background: ${hi.BLACK_TRANSPARENT_25};
  border-radius: 5px;
  padding: 0 12px;
`,Gi=ci.div`
  position: relative;
  background: ${hi.BLACK_TRANSPARENT_50};
  font-family: ${li.PIXEL_LABEL};
  display: flex;
  color: #fff;
  border-radius: 5px;
  pointer-events: all;
  &:hover {
    ${Xi} {
      display: block;
    }
  }
`,Wi=ci.div`
  pointer-events: none;
  background: ${hi.BLACK_TRANSPARENT_75};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`,Vi=ci.img`
  width: 16px;
`,Hi=ci.div`
  pointer-events: none;
  font-size: 16px;
  line-height: 16px;
  height: 32px;
  padding: 0 13px 0 9px;
  display: flex;
  align-items: center;
  flex: 1;
`,ji=({children:t,type:e})=>C.createElement(Gi,null,C.createElement(Wi,null,C.createElement(Vi,{src:`assets/sprites/hud/${e}.png`})),C.createElement(Hi,null,t),C.createElement(Xi,null,e)),$i=ci.div`
  position: absolute;
  background: ${hi.BLACK_TRANSPARENT_75};
  padding: 20px;
  border-radius: 10px;
  color: #fff;
  position: absolute;
  left: 50%;
  bottom: 32px;
  transform: translateX(-50%);
`,Ki=ci.div`
  font-family: ${li.PIXEL_TEXT};
  font-size: 13px;
  line-height: 17px;
  letter-spacing: 1px;
  color: #fff;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,qi=ci.div`
  display: flex;
  margin-top: 15px;
  > div:not(:last-child) {
    margin-right: 10px;
  }
`,Zi=({children:t,onConfirm:e,onClose:i})=>C.createElement($i,null,C.createElement(Ki,null,t),C.createElement(qi,null,C.createElement(pi,{view:"confirm",onClick:e},"Yes"),C.createElement(pi,{view:"decline",onClick:i},"No")));var Qi,Ji;!function(t){t.START="start",t.COMPLETE="complete"}(Qi||(Qi={})),function(t){t.START="wave/start",t.COMPLETE="wave/complete",t.TICK="wave/tick"}(Ji||(Ji={}));const tn=ci.div`
  display: flex;
  margin-top: 15px;
  > div:not(:last-child) {
    margin-right: 5px;
  }
`,en=()=>{const t=(0,_.useGame)(),i=(0,_.useScene)(n.WORLD),[s,r]=(0,C.useState)(!1),[a,h]=(0,C.useState)({experience:0,resources:0}),l=()=>{r(!1)},u=t=>{if(t%3==0){const e=zi({defaultValue:400,scale:1,level:t}),i=zi({defaultValue:30,scale:1,level:t});r(!0),h({experience:e,resources:i})}};return(0,C.useEffect)((()=>{if(t.isFlagEnabled(o.ADS))return i.wave.on(Qi.START,l),i.wave.on(Qi.COMPLETE,u),()=>{i.wave.off(Qi.START,l),i.wave.off(Qi.COMPLETE,u)}}),[]),s?C.createElement(Zi,{onConfirm:()=>{t.showAd(e.REWARDED,(()=>{i.player.giveExperience(a.experience),i.player.giveResources(a.resources)})),r(!1)},onClose:l},"Do you want to get reward",C.createElement("br",null),"by watching ads?",C.createElement(tn,null,C.createElement(ji,{type:"resources"},"+",a.resources),C.createElement(ji,{type:"experience"},"+",a.experience))):null},nn={"top-left":{transform:"translate(0, 0)",left:"39px",right:"auto"},"top-center":{transform:"translate(-50%, 0)",left:"50%",right:"auto"},"top-right":{transform:"translate(100%, 0)",left:"auto",right:"39px"},"bottom-left":{transform:"translate(0, -100%)",left:"39px",right:"auto"},"bottom-center":{transform:"translate(-50%, -100%)",left:"50%",right:"auto"},"bottom-right":{transform:"translate(100%, -100%)",left:"auto",right:"39px"}},sn=di`
  0% { transform: translate(0, 0) }
  50% { transform: translate(10px, 0) }
  100% { transform: translate(0, 0) }
`,rn=di`
  0% { transform: translate(0, 0) }
  50% { transform: translate(-10px, 0) }
  100% { transform: translate(0, 0) }
`,an=di`
  0% { transform: translate(0, 0) }
  50% { transform: translate(0, 10px) }
  100% { transform: translate(0, 0) }
`,on=di`
  0% { transform: translate(0, 0) }
  50% { transform: translate(0, -10px) }
  100% { transform: translate(0, 0) }
`,hn=ci.div`
  position: relative;
  pointer-events: none;
`,ln=ci.span`
  display: inline-block;
  padding: 1px 2px 1px 3px;
  margin-right: 1px;
  font-size: 11px;
  line-height: 11px;
  color: #000;
  background: #fff;
  border-radius: 3px;
`,un=ci.div`
  background: ${hi.BLACK};
  padding: 9px 12px 10px 12px;
  border-radius: 5px;
  color: #fff;
  font-family: ${li.PIXEL_TEXT};
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 1px;
  white-space: pre;
  width: ${t=>t.$width?`${t.$width}px`:"auto"};
  &::after {
    position: absolute;
    content: "";
  }
`,cn=ci.div`
  position: absolute;
  ${t=>{switch(t.$side){case"left":return ri`
          padding-left: 10px;
          transform: translate(0, -50%);
          ${un} {
            animation: ${sn} 1s infinite;
            &::after {
              left: 0;
              top: 50%;
              transform: translate(-100%, -50%);
              border-top: 8px solid transparent;
              border-bottom: 8px solid transparent;
              border-right: 10px solid #000;
            }
          }
        `;case"right":return ri`
          padding-right: 10px;
          transform: translate(-100%, -50%);
          ${un} {
            animation: ${rn} 1s infinite;
            &::after {
              right: 0;
              top: 50%;
              transform: translate(100%, -50%);
              border-top: 8px solid transparent;
              border-bottom: 8px solid transparent;
              border-left: 10px solid #000;
            }
          }
        `;case"top":return ri`
          padding-top: 10px;
          transform: ${nn[`top-${t.$align}`].transform};
          ${un} {
            animation: ${an} 1s infinite;
            &::after {
              top: 0;
              left: ${nn[`top-${t.$align}`].left};
              right: ${nn[`top-${t.$align}`].right};
              transform: translate(-50%, -100%);
              border-left: 8px solid transparent;
              border-right: 8px solid transparent;
              border-bottom: 10px solid #000;
            }
          }
        `;case"bottom":return ri`
          padding-bottom: 10px;
          transform: ${nn[`bottom-${t.$align}`].transform};
          ${un} {
            animation: ${on} 1s infinite;
            &::after {
              bottom: 0;
              left: ${nn[`bottom-${t.$align}`].left};
              right: ${nn[`bottom-${t.$align}`].right};
              transform: translate(-50%, 100%);
              border-left: 8px solid transparent;
              border-right: 8px solid transparent;
              border-top: 10px solid #000;
            }
          }
        `}}}
`,dn=({children:t,side:e,width:i,align:n="center"})=>{const s=(0,C.useMemo)((()=>(Array.isArray(t)?t:[t]).map(((t,e)=>{if("string"==typeof t&&/\[[\w\s]+\]/.test(t)){const[i,n]=t.split(/\[[\w\s]+\]/);return C.createElement(C.Fragment,{key:e},i,C.createElement(ln,null,t.replace(/[\s\S]*\[([\w\s]+)\][\s\S]*/,"$1").toUpperCase()),n)}return t}))),[t]);return C.createElement(hn,{role:"hint"},C.createElement(cn,{$side:e,$align:n},C.createElement(un,{$width:i},s)))};var fn,pn,gn,vn,mn,yn;!function(t){t.UPGRADE="upgrade"}(fn||(fn={})),function(t){t.WALL="WALL",t.TOWER_FIRE="TOWER_FIRE",t.TOWER_LAZER="TOWER_LAZER",t.TOWER_FROZEN="TOWER_FROZEN",t.GENERATOR="GENERATOR",t.AMMUNITION="AMMUNITION",t.RADAR="RADAR"}(pn||(pn={})),function(t){t.WALL="building/textures/wall",t.TOWER_FIRE="building/textures/tower_fire",t.TOWER_FROZEN="building/textures/tower_frozen",t.TOWER_LAZER="building/textures/tower_lazer",t.GENERATOR="building/textures/generator",t.AMMUNITION="building/textures/ammunition",t.RADAR="building/textures/radar"}(gn||(gn={})),function(t){t.ALERT="building/icons/alert",t.UPGRADE="building/icons/upgrade",t.HEALTH="building/icons/params/health",t.RADIUS="building/icons/params/radius",t.AMMO="building/icons/params/ammo",t.HEAL="building/icons/params/heal",t.DAMAGE="building/icons/params/damage",t.RESOURCES="building/icons/params/resources",t.SPEED="building/icons/params/speed",t.DELAY="building/icons/params/pause"}(vn||(vn={})),function(t){t.SELECT="building/select",t.UNSELECT="building/unselect",t.BUILD="building/build",t.UPGRADE="building/upgrade",t.DEAD="building/dead",t.OVER="building/over",t.RELOAD="building/reload",t.REPAIR="building/repair",t.DAMAGE_1="building/damage_1",t.DAMAGE_2="building/damage_2"}(mn||(mn={})),function(t){t.NONE="NONE",t.FOCUSED="FOCUSED",t.SELECTED="SELECTED"}(yn||(yn={}));const xn="keyup-BACKSPACE",bn="keyup-R",Tn="keyup-E",wn="keyup-U",En=[{name:"W,A,S,D",description:"Movement"},{name:"E",description:"Upgrade active building"},{name:"LEFT CLICK",description:"Build"},{name:"R",description:"Repair active building"},{name:"RIGHT CLICK",description:"Stop build"},{name:"BACKSPACE",description:"Destroy active building"},{name:"N",description:"Skip wave timeleft"}],Sn=9998;var An,_n,Cn,Rn,Pn,Mn;!function(t){t.MAP="MAP",t.BUILDING="BUILDING",t.CRYSTAL="CRYSTAL",t.SCENERY="SCENERY"}(An||(An={})),function(t){t.ENEMY="ENEMY",t.PLAYER="PLAYER",t.SCENERY="SCENERY",t.CRYSTAL="CRYSTAL"}(_n||(_n={})),function(t){t.EARTH="EARTH",t.MOON="MOON",t.MARS="MARS"}(Cn||(Cn={})),function(t){t.EARTH="level/earth/scenery",t.MOON="level/moon/scenery",t.MARS="level/mars/scenery"}(Rn||(Rn={})),function(t){t.EARTH="level/earth/tileset",t.MOON="level/moon/tileset",t.MARS="level/mars/tileset"}(Pn||(Pn={})),function(t){t.WATER="WATER",t.SAND="SAND",t.GRASS="GRASS",t.RUBBLE="RUBBLE",t.MOUNT="MOUNT",t.SNOW="SNOW"}(Mn||(Mn={}));const On=[{params:{upperBound:.12},data:{type:Mn.WATER,tileIndex:0,z:0,collide:!1,solid:!1,spawn:[]}},{params:{lowerBound:.12,upperBound:.15},data:{type:Mn.WATER,tileIndex:1,z:0,collide:!1,solid:!1,spawn:[]}},{params:{lowerBound:.15,upperBound:.17},data:{type:Mn.WATER,tileIndex:2,z:0,collide:!1,solid:!1,spawn:[]}},{params:{lowerBound:.17,upperBound:.2},data:{type:Mn.SAND,tileIndex:6,z:0,collide:!1,solid:!0,friction:1.2,spawn:[_n.ENEMY,_n.CRYSTAL]}},{params:{lowerBound:.2,upperBound:.24},data:{type:Mn.SAND,tileIndex:[7,8],z:0,collide:!1,solid:!0,friction:1.2,spawn:[_n.ENEMY,_n.CRYSTAL]}},{params:{lowerBound:.24,upperBound:.34},data:{type:Mn.GRASS,tileIndex:12,z:0,collide:!1,solid:!0,spawn:[_n.ENEMY,_n.PLAYER,_n.SCENERY]}},{params:{lowerBound:.34,upperBound:.44},data:{type:Mn.GRASS,tileIndex:[13,14],z:0,collide:!1,solid:!0,spawn:[_n.ENEMY,_n.PLAYER,_n.SCENERY]}},{params:{lowerBound:.44,upperBound:.54},data:{type:Mn.GRASS,tileIndex:[15,17],z:0,collide:!1,solid:!0,spawn:[_n.ENEMY]}},{params:{lowerBound:.54,upperBound:.59},data:{type:Mn.MOUNT,tileIndex:[24,25],z:1,collide:!0,solid:!1,spawn:[]}},{params:{lowerBound:.59,upperBound:.63},data:{type:Mn.MOUNT,tileIndex:26,z:1,collide:!0,solid:!1,spawn:[]}},{params:{lowerBound:.63,upperBound:.7},data:{type:Mn.MOUNT,tileIndex:27,z:2,collide:!0,solid:!1,spawn:[]}},{params:{lowerBound:.7},data:{type:Mn.SNOW,tileIndex:31,z:3,collide:!0,solid:!1,spawn:[]}},{data:{type:Mn.RUBBLE,tileIndex:[18,19],z:0,collide:!1,solid:!0,friction:.8,spawn:[_n.PLAYER]}}],Ln=[{params:{upperBound:.09},data:{type:Mn.WATER,tileIndex:0,z:0,collide:!1,solid:!1,spawn:[]}},{params:{lowerBound:.09,upperBound:.12},data:{type:Mn.WATER,tileIndex:1,z:0,collide:!1,solid:!1,spawn:[]}},{params:{lowerBound:.12,upperBound:.14},data:{type:Mn.WATER,tileIndex:2,z:0,collide:!1,solid:!1,spawn:[]}},{params:{lowerBound:.14,upperBound:.18},data:{type:Mn.SAND,tileIndex:3,z:0,collide:!1,solid:!0,spawn:[_n.ENEMY,_n.CRYSTAL]}},{params:{lowerBound:.18,upperBound:.22},data:{type:Mn.SAND,tileIndex:[4,5],z:0,collide:!1,solid:!0,spawn:[_n.ENEMY,_n.CRYSTAL,_n.SCENERY]}},{params:{lowerBound:.22,upperBound:.32},data:{type:Mn.GRASS,tileIndex:6,z:0,collide:!1,solid:!0,spawn:[_n.ENEMY,_n.PLAYER,_n.SCENERY]}},{params:{lowerBound:.32,upperBound:.54},data:{type:Mn.GRASS,tileIndex:[7,8],z:0,collide:!1,solid:!0,spawn:[_n.ENEMY,_n.PLAYER,_n.SCENERY]}},{params:{lowerBound:.54,upperBound:.64},data:{type:Mn.MOUNT,tileIndex:12,z:1,collide:!0,solid:!1,spawn:[]}},{params:{lowerBound:.64,upperBound:.72},data:{type:Mn.MOUNT,tileIndex:13,z:2,collide:!0,solid:!1,spawn:[]}},{params:{lowerBound:.72},data:{type:Mn.MOUNT,tileIndex:14,z:3,collide:!0,solid:!1,spawn:[]}},{data:{type:Mn.RUBBLE,tileIndex:[9,10],z:0,collide:!1,solid:!0,friction:.8,spawn:[_n.PLAYER]}}],Dn=[{params:{upperBound:.09},data:{type:Mn.WATER,tileIndex:0,z:0,collide:!1,solid:!1,spawn:[]}},{params:{lowerBound:.09,upperBound:.12},data:{type:Mn.WATER,tileIndex:1,z:0,collide:!1,solid:!1,spawn:[]}},{params:{lowerBound:.12,upperBound:.14},data:{type:Mn.WATER,tileIndex:2,z:0,collide:!1,solid:!1,spawn:[]}},{params:{lowerBound:.14,upperBound:.18},data:{type:Mn.SAND,tileIndex:3,z:0,collide:!1,solid:!0,spawn:[_n.ENEMY,_n.CRYSTAL]}},{params:{lowerBound:.18,upperBound:.22},data:{type:Mn.SAND,tileIndex:[4,5],z:0,collide:!1,solid:!0,spawn:[_n.ENEMY,_n.CRYSTAL,_n.SCENERY]}},{params:{lowerBound:.22,upperBound:.32},data:{type:Mn.GRASS,tileIndex:6,z:0,collide:!1,solid:!0,spawn:[_n.ENEMY,_n.PLAYER,_n.SCENERY]}},{params:{lowerBound:.32,upperBound:.54},data:{type:Mn.GRASS,tileIndex:[7,8],z:0,collide:!1,solid:!0,spawn:[_n.ENEMY,_n.PLAYER,_n.SCENERY]}},{params:{lowerBound:.54,upperBound:.64},data:{type:Mn.MOUNT,tileIndex:12,z:1,collide:!0,solid:!1,spawn:[]}},{params:{lowerBound:.64,upperBound:.72},data:{type:Mn.MOUNT,tileIndex:13,z:2,collide:!0,solid:!1,spawn:[]}},{params:{lowerBound:.72},data:{type:Mn.MOUNT,tileIndex:14,z:3,collide:!0,solid:!1,spawn:[]}},{data:{type:Mn.RUBBLE,tileIndex:[9,10],z:0,collide:!1,solid:!0,friction:.8,spawn:[_n.PLAYER]}}],kn=100,Fn={width:42,height:48,origin:.25,persperctive:.571,deg:29.726},In={width:42,height:72,origin:.5},Bn={frequencyChange:.2,heightRedistribution:.7,borderSmoothness:.8,falloff:.3},Nn={[Cn.EARTH]:{BIOMES:On,SCENERY_DENSITY:2,SCENERY_VARIANTS:4,CRYSTAL_VARIANTS:[1]},[Cn.MOON]:{BIOMES:Dn,SCENERY_DENSITY:1.5,SCENERY_VARIANTS:8,CRYSTAL_VARIANTS:[3]},[Cn.MARS]:{BIOMES:Ln,SCENERY_DENSITY:1.5,SCENERY_VARIANTS:8,CRYSTAL_VARIANTS:[0,2]}};var Un,zn,Yn;!function(t){t.DEAD="dead",t.DAMAGE="damage"}(Un||(Un={}));class Xn extends(w()){get health(){return this._health}set health(t){this._health=t}get maxHealth(){return this._maxHealth}set maxHealth(t){this._maxHealth=t}get armour(){return this._armour}set armour(t){this._armour=t}get maxArmour(){return this._maxArmour}set maxArmour(t){this._maxArmour=t}constructor({health:t,maxHealth:e,armour:i,maxArmour:n}){var s;super(),this.health=t,this.maxHealth=null!=e?e:t,this.armour=null!=i?i:0,this.maxArmour=null!==(s=null!=n?n:i)&&void 0!==s?s:0}damage(t){let e=t;this.armour>0&&(e=t-this.armour,this.setArmour(this.armour-t),e<=0)||this.setHealth(this.health-e)}kill(){this.setHealth(0)}heal(){this.setHealth(this.maxHealth)}addHealth(t){this.setHealth(this.health+t)}setHealth(t){if(this.isDead())return;const e=this.health;this.health=Math.min(this.maxHealth,Math.max(0,t)),this.health<e&&(this.emit(Un.DAMAGE,e-this.health),0===this.health&&this.emit(Un.DEAD))}setArmour(t){this.isDead()||(this.armour=Math.min(this.maxArmour,Math.max(0,t)))}setMaxHealth(t){this.maxHealth=Math.max(1,t)}isMaxHealth(){return this.health===this.maxHealth}setMaxArmour(t){this.maxArmour=Math.max(1,t)}isDead(){return 0===this.health}}!function(t){t.BLOOD="effect/blood",t.EXPLOSION="effect/explosion",t.SMOKE="effect/smoke",t.DAMAGE="effect/damage"}(zn||(zn={})),function(t){t.BIT="effect/bit",t.BIT_SOFT="effect/bit_soft",t.GLOW="effect/glow"}(Yn||(Yn={}));class Gn extends b().GameObjects.Sprite{constructor(t,{texture:e,position:i,staticFrame:n,depth:s,rate:r=16}){super(t,i.x,i.y,e,null!=n?n:0),t.add.existing(this),this.setDepth(s),void 0===n&&(this.anims.create({key:"effect",frames:this.anims.generateFrameNumbers(e,{}),frameRate:r}),this.anims.play("effect"),this.on("animationcomplete",(()=>{this.destroy()})))}}Di(zn,{width:32,height:32});class Wn{constructor(t,{key:e,positionAtWorld:i,texture:n,params:s}){var r,a;this.scene=t.scene,this.parent=t,this.key=e,this.emitter=this.scene.add.particles(null!==(r=null==i?void 0:i.x)&&void 0!==r?r:0,null!==(a=null==i?void 0:i.y)&&void 0!==a?a:0,n,s),this.emitter.setDepth(Sn),this.parent.effects?this.parent.effects[e]&&this.parent.effects[e].destroy():this.parent.effects={},this.parent.effects[e]=this,this.parent.on(Phaser.GameObjects.Events.DESTROY,(()=>{this.destroy()})),s.duration&&this.emitter.on(Phaser.GameObjects.Particles.Events.COMPLETE,(()=>{this.destroy()}))}destroy(){var t;null===(t=this.parent.effects)||void 0===t||delete t[this.key],this.emitter.destroy(),this.parent.off(Phaser.GameObjects.Events.DESTROY,this.destroy)}}Li(Yn);var Vn=i(372);const Hn={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let jn;const $n=new Uint8Array(16);function Kn(){if(!jn&&(jn="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!jn))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return jn($n)}const qn=[];for(let t=0;t<256;++t)qn.push((t+256).toString(16).slice(1));const Zn=function(t,e,i){if(Hn.randomUUID&&!e&&!t)return Hn.randomUUID();const n=(t=t||{}).random||(t.rng||Kn)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){i=i||0;for(let t=0;t<16;++t)e[i+t]=n[t];return e}return function(t,e=0){return(qn[t[e+0]]+qn[t[e+1]]+qn[t[e+2]]+qn[t[e+3]]+"-"+qn[t[e+4]]+qn[t[e+5]]+"-"+qn[t[e+6]]+qn[t[e+7]]+"-"+qn[t[e+8]]+qn[t[e+9]]+"-"+qn[t[e+10]]+qn[t[e+11]]+qn[t[e+12]]+qn[t[e+13]]+qn[t[e+14]]+qn[t[e+15]]).toLowerCase()}(n)};function Qn(){return new Worker(i.p+"bundle.3c2fb6bfda5f2edf242b.worker.js")}var Jn,ts,es,is,ns,ss,rs,as,os,hs,ls,us;!function(t){t.CREATE_TASK="create_task",t.COMPLETE_TASK="complete_task",t.CANCEL_TASK="cancel_task",t.UPDATE_POINTS_COST="update_points_cost"}(Jn||(Jn={}));class cs{constructor(){this.pointsCost=[],this.tasks=[],this.worker=new Qn,this.worker.addEventListener("message",(({data:t})=>{const e=this.tasks.find((e=>e.id===t.payload.id));e&&t.event===Jn.COMPLETE_TASK&&e.callback(t.payload.path)}))}setPointCost(t,e){this.pointsCost[t.y]||(this.pointsCost[t.y]=[]),this.pointsCost[t.y][t.x]=e,this.worker.postMessage({event:Jn.UPDATE_POINTS_COST,payload:this.pointsCost})}resetPointCost(t){this.pointsCost[t.y]&&(delete this.pointsCost[t.y][t.x],this.worker.postMessage({event:Jn.UPDATE_POINTS_COST,payload:this.pointsCost}))}createTask(t,e){var i;const n=Object.assign({},t);return n.id=null!==(i=n.id)&&void 0!==i?i:Zn(),this.worker.postMessage({event:Jn.CREATE_TASK,payload:n}),this.tasks.push({id:n.id,callback:e}),n.id}cancelTask(t){this.worker.postMessage({event:Jn.CANCEL_TASK,payload:{taskId:t}});const e=this.tasks.findIndex((e=>e.id===t));-1!==e&&this.tasks.splice(e,1)}}class ds{constructor(t,e){this.tiles=[],this.size=t,this.height=e;for(let i=0;i<e;i++){this.tiles[i]=[];for(let e=0;e<t;e++)this.tiles[i][e]=[]}}isFreePoint(t){const e=this.getTile(t);return!e||Boolean(e.clearable)}getTile(t){var e,i,n;const{x:s,y:r,z:a}=t;return null!==(n=null===(i=null===(e=this.tiles[a])||void 0===e?void 0:e[r])||void 0===i?void 0:i[s])&&void 0!==n?n:null}getTileWithType(t,e){return this.tileIs(t,e)?this.getTile(t):null}tileIs(t,e){const i=this.getTile(t);return!!i&&(e instanceof Array?e.includes(i.tileType):e===i.tileType)}putTile(t,e,i=!0){const n=this.getTile(e);n&&n.destroy();const{x:s,y:r,z:a}=e;this.tiles[a][r][s]=t,i&&t.on(b().GameObjects.Events.DESTROY,(()=>{this.removeTile(e)}))}removeTile(t){if(!this.getTile(t))return;const{x:e,y:i,z:n}=t;delete this.tiles[n][i][e]}}class fs extends ds{get effectsOnGround(){return this._effectsOnGround}set effectsOnGround(t){this._effectsOnGround=t}get groundLayer(){return this._groundLayer}set groundLayer(t){this._groundLayer=t}constructor(t,e){super(kn,4),this.gridCollide=[],this.gridSolid=[],this._effectsOnGround=[],this.scene=t,this.planet=e;const i=new Vn.WorldGenerator({width:kn,height:kn}),n=i.addLayer(Bn);Nn[this.planet].BIOMES.forEach((t=>{t.params&&n.addBiome(t.params,t.data)})),this.map=i.generate(),this.gridCollide=this.map.getMatrix().map((t=>t.map((t=>t.collide)))),this.gridSolid=this.map.getMatrix().map((t=>t.map((t=>!t.solid)))),this.navigator=new cs,this.addTilemap(),this.addMapTiles(),this.addScenery(),this.scene.game.events.on(`${s.UPDATE_SETTINGS}.${r.EFFECTS}`,(t=>{"off"===t&&this.removeEffects()}))}looseEffects(){this.effectsOnGround.forEach((t=>{t.setAlpha(t.alpha-.2),t.alpha<=0&&t.destroy()}))}removeEffects(){this.effectsOnGround.forEach((t=>{t.destroy()})),this.effectsOnGround=[]}readSpawnPositions(t,e=2){var i;const n=[],s=Math.floor(e/2);for(let r=e;r<this.map.width-e;r+=e)for(let a=e;a<this.map.height-e;a+=e){const e=r+b().Math.Between(-s,s),o=a+b().Math.Between(-s,s),h=null===(i=this.map.getAt({x:e,y:o}))||void 0===i?void 0:i.spawn;h&&h.includes(t)&&n.push({x:e,y:o})}return n}hasTilesBetweenPositions(t,e){return function(t,e){const i=[],n=Object.assign({},t),s=Math.abs(e.x-t.x),r=Math.abs(e.y-t.y),a=t.x<e.x?1:-1,o=t.y<e.y?1:-1;let h,l=s-r;for(;i.push(Object.assign({},n)),!c(n,e);)h=2*l,h>-r&&(l-=r,n.x+=a),h<s&&(l+=s,n.y+=o);return i}(fs.ToMatrixPosition(t),fs.ToMatrixPosition(e)).some((t=>{var e;return(null===(e=this.getTile(Object.assign(Object.assign({},t),{z:1})))||void 0===e?void 0:e.tileType)===An.MAP}))}getBiome(t){var e,i;return null!==(i=null===(e=Nn[this.planet].BIOMES.find((e=>e.data.type===t)))||void 0===e?void 0:e.data)&&void 0!==i?i:null}addTilemap(){const t=new(b().Tilemaps.MapData)({width:kn,height:kn,tileWidth:Fn.width,tileHeight:.5*Fn.height,orientation:b().Tilemaps.Orientation.ISOMETRIC,format:b().Tilemaps.Formats.ARRAY_2D}),e=new(b().Tilemaps.Tilemap)(this.scene,t),i=e.addTilesetImage(Pn[this.planet],void 0,Fn.width,Fn.height);if(!i)throw Error("Unable to create map tileset");this.addFalloffLayer(e,i),this.addGroundLayer(e,i)}addGroundLayer(t,e){const i=t.createBlankLayer("ground",e,.5*-Fn.width,-Fn.height*Fn.origin);if(!i)throw Error("Unable to create map layer");this.groundLayer=i}addFalloffLayer(t,e){const i=.5*Math.max(this.scene.sys.canvas.clientWidth,this.scene.sys.canvas.clientHeight),n=Math.ceil(i/(.5*Fn.height)),s=2*n+kn,r=fs.ToWorldPosition({x:-n,y:-n,z:0}),a=t.createBlankLayer("falloff",e,r.x-.5*Fn.width,r.y-Fn.height*Fn.origin,s,s);if(!a)return;const o=this.getBiome(Mn.WATER);if(!o)return;const h=Array.isArray(o.tileIndex)?o.tileIndex[0]:o.tileIndex;for(let t=0;t<s;t++)for(let e=0;e<s;e++)(e<n||e>=s-n||t<n||t>=s-n)&&a.putTileAt(h,e,t,!1)}addMapTiles(){const t=(t,e)=>{const i=Array.isArray(e.tileIndex)?b().Math.Between(...e.tileIndex):e.tileIndex;0===e.z?this.groundLayer.putTileAt(i,t.x,t.y,!1):this.addMountTile(i,Object.assign(Object.assign({},t),{z:e.z}))};this.map.each(((e,i)=>{if(t(e,i),i.z>1){const n=i.z-1,s=this.map.getAt({x:e.x+1,y:e.y}),r=this.map.getAt({x:e.x,y:e.y+1});if(s&&s.z!==n||r&&r.z!==n){const i=Nn[this.planet].BIOMES.find((t=>t.data.z===n));i&&t(e,i.data)}}}))}addMountTile(t,e){const i=fs.ToWorldPosition(e),n=this.scene.add.image(i.x,i.y,Pn[this.planet],t);n.tileType=An.MAP,n.setDepth(fs.GetTileDepth(i.y,e.z)),n.setOrigin(.5,Fn.origin),this.putTile(n,e,!1)}addScenery(){this.sceneryTiles=this.scene.add.group();const t=this.readSpawnPositions(_n.SCENERY),e=Math.ceil(kn*Nn[this.planet].SCENERY_DENSITY);for(let i=0;i<e;i++){const e=b().Utils.Array.GetRandom(t),i=Object.assign(Object.assign({},e),{z:1});if(this.isFreePoint(i)){const t=fs.ToWorldPosition(i),e=this.scene.add.image(t.x,t.y,Rn[this.planet],b().Math.Between(0,Nn[this.planet].SCENERY_VARIANTS-1));e.tileType=An.SCENERY,e.clearable=!0,e.setDepth(fs.GetTileDepth(t.y,i.z)),e.setOrigin(.5,In.origin),this.putTile(e,i),this.sceneryTiles.add(e)}}}static ToMatrixPosition(t){const{width:e,height:i,origin:n}=Fn,s=t.x/(.5*e),r=t.y/(i*n);return{x:Math.round((s+r)/2),y:Math.round((r-s)/2)}}static ToWorldPosition(t){const{width:e,height:i,origin:n}=Fn;return{x:(t.x-t.y)*(.5*e),y:(t.x+t.y)*(i*n)-t.z*(.5*i)}}static GetDepth(t,e,i=0){return t+e*Fn.height+i}static GetTileDepth(t,e){return t+e*Fn.height+.5*Fn.height}}Di(Pn,Fn),Di(Rn,In),function(t){t.SELECT_BUILDING="select_building",t.UNSELECT_BUILDING="unselect_building",t.SHOW_HINT="show_hint",t.HIDE_HINT="hide_hint",t.USE_SUPERSKILL="use_superskill"}(ts||(ts={})),function(t){t.UPGRADE="upgrade",t.BUILD="build",t.BUILD_START="build_start",t.BUILD_STOP="build_stop",t.BUILD_COMPLETE="build_complete"}(es||(es={})),function(t){t.BUILDING="BUILDING",t.NPC="NPC",t.ENEMY="ENEMY",t.SHOT="SHOT",t.CRYSTAL="CRYSTAL"}(is||(is={}));class ps extends b().GameObjects.Image{get upgradeLevel(){return this._upgradeLevel}set upgradeLevel(t){this._upgradeLevel=t}get isFocused(){return this._isFocused}set isFocused(t){this._isFocused=t}constructor(t,{positionAtMatrix:e,health:i,texture:n,variant:s,radius:r,delay:a}){const o=Object.assign(Object.assign({},e),{z:1}),h=fs.ToWorldPosition(o);super(t,h.x,h.y,n),this.tileType=An.BUILDING,this._upgradeLevel=1,this.radius=null,this.delay=null,this.nextActionTimestamp=0,this.outlineState=yn.NONE,this.alertIcon=null,this.alertTween=null,this.upgradeIcon=null,this.upgradeTween=null,this.actionsArea=null,this._isFocused=!1,this.toFocus=!1,this.isSelected=!1,this.defaultHealth=0,this.buildTimer=null,this.buildBar=null,t.addEntity(is.BUILDING,this),this.radius=null!=r?r:null,this.delay=null!=a?a:null,this.defaultHealth=i,this.variant=s,this.positionAtMatrix=e,this.live=new Xn({health:i}),this.addActionArea(),this.setInteractive({pixelPerfect:!0,useHandCursor:!0}),this.handleKeyboard(),this.handlePointer(),this.scene.builder.addFoundation(e),this.setDepth(fs.GetTileDepth(h.y,o.z)),this.setOrigin(.5,Fn.origin),this.scene.level.putTile(this,o),this.startBuildProcess(),this.scene.level.navigator.setPointCost(e,4),this.live.on(Un.DAMAGE,this.onDamage.bind(this)),this.live.on(Un.DEAD,this.onDead.bind(this)),this.on(b().GameObjects.Events.DESTROY,(()=>{this.stopBuildProcess(),this.removeAlertIcon(),this.removeUpgradeIcon(),this.unfocus(),this.unselect(),this.scene.level.navigator.resetPointCost(e)}))}update(){this.updateOutline(),this.toFocus&&this.focus()}actionsAreaContains(t){if(!this.actionsArea)return!1;const e=this.actionsArea.getTopLeft();return this.actionsArea.geom.contains(t.x-e.x,t.y-e.y)}pauseActions(){this.delay&&(this.nextActionTimestamp=this.scene.getTime()+this.getActionsDelay())}isActionAllowed(){return!this.delay||this.nextActionTimestamp<this.scene.getTime()}getInfo(){const t=[{label:"Health",icon:vn.HEALTH,value:this.live.health}],e=this.getActionsDelay();return e&&t.push({label:"Delay",icon:vn.DELAY,value:e/1e3+" s"}),t}getControls(){const t=[];return this.isUpgradeAllowed()&&t.push({label:"Upgrade",cost:this.getUpgradeCost(),disabled:this.getUpgradeAllowedByWave()>this.scene.wave.number,onClick:()=>{this.upgrade()}}),this.live.isMaxHealth()||t.push({label:"Repair",cost:this.getRepairCost(),onClick:()=>{this.repair()}}),t}getMeta(){return this.constructor}getActionsRadius(){return this.radius?zi({defaultValue:this.radius.default,scale:this.radius.growth,level:this.upgradeLevel}):0}getActionsDelay(){return this.delay?zi({defaultValue:this.delay.default,scale:this.delay.growth,level:this.upgradeLevel,roundTo:100}):0}getUpgradeCost(t){const e=this.getMeta().Cost/4,i=null!=t?t:this.upgradeLevel;return Math.round(e*i*2)}getRepairCost(){const t=1-this.live.health/this.live.maxHealth;let e=this.getMeta().Cost;for(let t=1;t<this.upgradeLevel;t++)e+=this.getUpgradeCost(t);return Math.ceil(e*t)}isUpgradeAllowed(){return this.upgradeLevel<4}getUpgradeAllowedByWave(){var t;return(null!==(t=this.getMeta().AllowByWave)&&void 0!==t?t:1)+this.upgradeLevel}upgrade(){if(!this.isUpgradeAllowed())return;const t=this.getUpgradeAllowedByWave();if(t>this.scene.wave.number)return void this.scene.game.screen.notice(Bi.ERROR,`Upgrade will be available on ${t} wave`);const e=this.getUpgradeCost();if(this.scene.player.resources<e)return void this.scene.game.screen.notice(Bi.ERROR,"Not enough resources");this.upgradeLevel++,this.addUpgradeIcon(),this.updateActionArea(),this.upgradeHealth(),this.setFrame(this.upgradeLevel-1),this.emit(fn.UPGRADE),this.scene.builder.emit(es.UPGRADE,this),this.scene.player.takeResources(e);const i=zi({defaultValue:15,scale:.75,level:this.upgradeLevel});this.scene.player.giveExperience(i),this.scene.game.sound.play(mn.UPGRADE),this.scene.game.tutorial.complete(g.UPGRADE_BUILDING)}repair(){if(this.live.isMaxHealth())return;const t=this.getRepairCost();this.scene.player.resources<t?this.scene.game.screen.notice(Bi.ERROR,"Not enough resources"):(this.live.heal(),this.scene.player.takeResources(t),this.scene.sound.play(mn.REPAIR))}upgradeHealth(){const t=Yi({defaultValue:this.defaultHealth,scale:.7,level:this.upgradeLevel,roundTo:100}),e=t-this.live.maxHealth;this.live.setMaxHealth(t),this.live.addHealth(e)}onDamage(){const t=b().Utils.Array.GetRandom([mn.DAMAGE_1,mn.DAMAGE_2]);this.scene.game.sound.getAll(t).length<3&&this.scene.game.sound.play(t),this.scene.game.isSettingEnabled(r.EFFECTS)&&new Gn(this.scene,{texture:zn.DAMAGE,position:this.getTopCenterByLevel(),depth:this.depth+1,rate:14})}onDead(){this.break()}focus(){this.toFocus=!0,this.isFocused||this.scene.player.live.isDead()||this.scene.builder.isBuild||(this.isFocused=!0)}unfocus(){this.toFocus=!1,this.isFocused&&(this.isFocused=!1)}getPositionOnGround(){return{x:this.x,y:this.y+.5*Fn.height}}addAlertIcon(){this.alertIcon||(this.alertIcon=this.scene.add.image(this.x,this.y,vn.ALERT),this.alertIcon.setDepth(this.depth+1),this.alertTween=this.scene.tweens.add({targets:this.alertIcon,alpha:{from:1,to:0},duration:500,ease:"Linear",yoyo:!0,repeat:-1}))}removeAlertIcon(){var t;this.alertIcon&&(this.alertIcon.destroy(),this.alertIcon=null,null===(t=this.alertTween)||void 0===t||t.destroy(),this.alertTween=null)}addUpgradeIcon(){this.upgradeIcon&&this.removeUpgradeIcon(),this.upgradeIcon=this.scene.add.image(this.x,this.y,vn.UPGRADE),this.upgradeIcon.setDepth(this.depth+1),this.upgradeTween=this.scene.tweens.add({targets:this.upgradeIcon,y:{from:this.y,to:this.y-32},alpha:{from:1,to:0},duration:500,ease:"Linear",onComplete:()=>{this.removeUpgradeIcon()}})}removeUpgradeIcon(){var t;this.upgradeIcon&&(this.upgradeIcon.destroy(),this.upgradeIcon=null,null===(t=this.upgradeTween)||void 0===t||t.destroy(),this.upgradeTween=null)}select(){this.isFocused&&!this.isSelected&&(this.scene.builder.selectedBuilding&&this.scene.builder.selectedBuilding.unselect(),this.scene.builder.selectedBuilding=this,this.isSelected=!0,this.actionsArea&&this.actionsArea.setVisible(!0),this.scene.events.emit(ts.SELECT_BUILDING,this))}unselect(){this.isSelected&&(this.scene.builder.selectedBuilding=null,this.isSelected=!1,this.actionsArea&&this.actionsArea.setVisible(!1),this.scene.events.emit(ts.UNSELECT_BUILDING,this))}getTopCenterByLevel(){return{x:this.x,y:this.y-6}}setOutline(t){if(this.outlineState!==t){if(t===yn.NONE)this.removeShader("OutlineShader");else{const e={[yn.FOCUSED]:{size:2,color:16777215},[yn.SELECTED]:{size:4,color:13696847}}[t];this.outlineState===yn.NONE?this.addShader("OutlineShader",e):this.updateShader("OutlineShader",e)}this.outlineState=t}}updateOutline(){let t=yn.NONE;this.isSelected?t=yn.SELECTED:this.isFocused&&(t=yn.FOCUSED),this.setOutline(t)}addActionArea(){if(!this.radius||this.actionsArea)return;const t=this.getPositionOnGround();this.actionsArea=this.scene.add.ellipse(t.x,t.y),this.actionsArea.setStrokeStyle(2,16777215,.5),this.actionsArea.setFillStyle(16777215,.2),this.actionsArea.setVisible(!1),this.updateActionArea(),this.on(b().GameObjects.Events.DESTROY,(()=>{var t;null===(t=this.actionsArea)||void 0===t||t.destroy()}))}updateActionArea(){if(!this.actionsArea)return;const t=2*this.getActionsRadius();this.actionsArea.setSize(t,t*Fn.persperctive),this.actionsArea.setDepth(Sn),this.actionsArea.updateDisplayOrigin()}break(){this.scene.sound.play(mn.DEAD),this.scene.game.isSettingEnabled(r.EFFECTS)&&new Gn(this.scene,{texture:zn.SMOKE,position:this.getPositionOnGround(),depth:this.depth+1,rate:18}),this.destroy()}startBuildProcess(){this.addBuildBar(),this.addBuildTimer(),this.setActive(!1),this.setAlpha(.5)}completeBuildProcess(){this.stopBuildProcess(),this.setActive(!0),this.setAlpha(1),this.scene.builder.emit(es.BUILD,this)}stopBuildProcess(){this.removeBuildBar(),this.removeBuildTimer()}addBuildTimer(){let t=0;this.buildTimer=this.scene.time.addEvent({delay:50,repeat:20,callback:()=>{if(t++,this.setAlpha(this.alpha+.025),20===t)this.completeBuildProcess();else if(this.buildBar){const e=this.buildBar.getAt(1),i=t/20;e.setSize((this.buildBar.width-2)*i,this.buildBar.height-2)}}})}removeBuildTimer(){this.buildTimer&&(this.buildTimer.destroy(),this.buildTimer=null)}addBuildBar(){if(this.buildBar)return;const t=this.scene.add.rectangle(0,0,20,5,0);t.setOrigin(0,0);const e=this.scene.add.rectangle(1,1,0,0,16777215);e.setOrigin(0,0),this.buildBar=this.scene.add.container(-10,0),this.buildBar.setSize(t.width,t.height),this.buildBar.add([t,e]),this.buildBar.setPosition(this.x-t.width/2,this.y+20),this.buildBar.setDepth(this.depth+.5*Fn.height)}removeBuildBar(){this.buildBar&&(this.buildBar.destroy(),this.buildBar=null)}handleKeyboard(){var t,e,i,n;const s=t=>e=>{(this.isSelected||this.isFocused&&null===this.scene.builder.selectedBuilding)&&(t(),e.preventDefault())},r=s((()=>this.repair())),a=s((()=>this.break())),o=s((()=>this.upgrade()));null===(t=this.scene.input.keyboard)||void 0===t||t.on(bn,r),null===(e=this.scene.input.keyboard)||void 0===e||e.on(xn,a),null===(i=this.scene.input.keyboard)||void 0===i||i.on(Tn,o),null===(n=this.scene.input.keyboard)||void 0===n||n.on(wn,o),this.on(b().GameObjects.Events.DESTROY,(()=>{var t,e,i,n;null===(t=this.scene.input.keyboard)||void 0===t||t.off(bn,r),null===(e=this.scene.input.keyboard)||void 0===e||e.off(xn,a),null===(i=this.scene.input.keyboard)||void 0===i||i.off(Tn,o),null===(n=this.scene.input.keyboard)||void 0===n||n.off(wn,o)}))}handlePointer(){const t=t=>{0===t.button&&(this.isFocused?this.select():this.unselect())},e=()=>{this.unfocus(),this.unselect()};this.scene.input.on(b().Input.Events.POINTER_DOWN,t),this.scene.game.events.on(s.FINISH,e),this.scene.builder.on(es.BUILD_START,e),this.on(b().Input.Events.POINTER_OVER,this.focus,this),this.on(b().Input.Events.POINTER_OUT,this.unfocus,this),this.on(b().GameObjects.Events.DESTROY,(()=>{this.scene.input.off(b().Input.Events.POINTER_DOWN,t),this.scene.game.events.off(s.FINISH,e),this.scene.builder.off(es.BUILD_START,e)}))}}Oi(mn),Li(vn),Di(gn,{width:Fn.width,height:Fn.height});class gs extends ps{get ammo(){return this._ammo}set ammo(t){this._ammo=t}constructor(t,e){super(t,Object.assign(Object.assign({},e),{variant:pn.AMMUNITION,health:gs.Health,texture:gs.Texture,radius:{default:120,growth:.25}})),this.maxAmmo=Ni,this._ammo=Ni,this.scene.game.tutorial.complete(g.BUILD_AMMUNITION),this.on(fn.UPGRADE,this.onUpgrade.bind(this))}getInfo(){const t=[{label:"Ammo",icon:vn.AMMO,value:this.ammo}];return super.getInfo().concat(t)}use(t){if(this.ammo<=t){const t=this.ammo;return this.scene.game.screen.notice(Bi.WARN,`${this.getMeta().Name} are over`),0===this.scene.game.sound.getAll(mn.OVER).length&&this.scene.game.sound.play(mn.OVER),this.destroy(),t}return this.ammo-=t,t}onUpgrade(){const t=Yi({defaultValue:Ni,scale:1,level:this.upgradeLevel,roundTo:10}),e=t-this.maxAmmo;this.maxAmmo=t,this.ammo+=e}}gs.Name="Ammunition",gs.Description="Reloads towers ammo within building radius",gs.Params=[{label:"Health",value:400,icon:vn.HEALTH},{label:"Ammo",value:Ni,icon:vn.AMMO}],gs.Texture=gn.AMMUNITION,gs.Cost=40,gs.Health=400,gs.AllowByWave=3;class vs extends ps{constructor(t,e){super(t,Object.assign(Object.assign({},e),{variant:pn.GENERATOR,health:vs.Health,texture:vs.Texture,delay:{default:1300,growth:-.154}})),this.scene.game.tutorial.state(g.BUILD_GENERATOR)===v.IN_PROGRESS&&(this.scene.game.tutorial.complete(g.BUILD_GENERATOR),this.scene.game.tutorial.start(g.STOP_BUILD))}update(){super.update(),this.isActionAllowed()&&(this.generateResource(),this.pauseActions())}getTopCenterByLevel(){return{x:this.x,y:this.y-6+8*(3-Math.min(this.upgradeLevel,3))}}generateResource(){this.scene.player.giveResources(1),this.scene.game.isSettingEnabled(r.EFFECTS)&&new Wn(this,{key:"generate",texture:Yn.BIT,positionAtWorld:this.getTopCenterByLevel(),params:{duration:300,lifespan:{min:100,max:200},scale:{start:1,end:.5},alpha:{start:1,end:0},speed:60,maxAliveParticles:8,tint:3014578}})}}vs.Name="Generator",vs.Description="Generates resources for builds and upgrades",vs.Params=[{label:"Health",value:300,icon:vn.HEALTH}],vs.Texture=gn.GENERATOR,vs.Cost=20,vs.Health=300,vs.Limit=!0;class ms extends ps{constructor(t,e){super(t,Object.assign(Object.assign({},e),{variant:pn.RADAR,health:ms.Health,texture:ms.Texture,radius:{default:130,growth:.3}})),this.scene.game.tutorial.complete(g.BUILD_RADAR)}}ms.Name="Radar",ms.Description="Makes hidden enemies visible within building radius",ms.Params=[{label:"Health",value:800,icon:vn.HEALTH}],ms.Texture=gn.RADAR,ms.Cost=60,ms.Health=800,ms.AllowByWave=8,function(t){t.LAZER="shot/lazer"}(ns||(ns={})),function(t){t.FIRE="shot/fire",t.FROZEN="shot/frozen"}(ss||(ss={})),function(t){t.FIRE="shot/ball_fire",t.FROZEN="shot/ball_frozen"}(rs||(rs={}));class ys extends b().Physics.Arcade.Image{constructor(t,e,{texture:i,audio:n,glowColor:s=null,scale:r=1}){super(t,0,0,i),this.initiator=null,this.positionCallback=null,this.effect=null,this.startPosition=null,this.glowColor=null,t.addEntity(is.SHOT,this),this.params=e,this.audio=n,this.glowColor=s,this.setActive(!1),this.setVisible(!1),this.setScale(r),this.scene.physics.add.collider(this,this.scene.getEntitiesGroup(is.ENEMY),((t,e)=>{this.hit(e)}))}setInitiator(t,e=null){this.initiator=t,this.positionCallback=e,t.on(b().GameObjects.Events.DESTROY,(()=>{this.destroy()}))}update(){if(!this.params.maxDistance||!this.startPosition)return;if(b().Math.Distance.BetweenPoints(this,this.startPosition)>this.params.maxDistance)return void this.stop();const t=fs.GetDepth(this.y,1);this.setDepth(t)}shoot(t){var e,i;if(!this.initiator||!this.params.speed)return;const n=null!==(i=null===(e=this.positionCallback)||void 0===e?void 0:e.call(this))&&void 0!==i?i:this.initiator;this.setPosition(n.x,n.y),this.setActive(!0),this.setVisible(!0),this.glowColor&&this.scene.game.isSettingEnabled(r.EFFECTS)&&(this.effect=new Wn(this,{key:"glow",texture:Yn.GLOW,params:{follow:this,scale:{start:.25*this.scale,end:0},blendMode:"ADD",tint:this.glowColor}})),this.startPosition={x:this.x,y:this.y};const s=b().Math.Distance.BetweenPoints(this,t.body.center),a=Math.min(this.params.speed,1200),o=s/a,h=this.scene.getFuturePosition(t,o);this.scene.physics.world.enable(this,b().Physics.Arcade.DYNAMIC_BODY),this.scene.physics.moveTo(this,h.x,h.y,a),this.scene.game.sound.getAll(this.audio).length<3&&this.scene.game.sound.play(this.audio)}hit(t){const{damage:e,freeze:i}=this.params;if(i&&t.live.armour<=0){const e=i/this.scale;t.freeze(e,!0)}e&&(t.live.damage(e),this.scene.getEntities(is.ENEMY).forEach((i=>{if(i!==t){const n=b().Math.Distance.BetweenPoints(t,i);if(n<32){const t=.3*e*(1-n/32);i.live.damage(t)}}}))),this.stop()}stop(){this.effect&&(this.effect.destroy(),this.effect=null),this.setActive(!1),this.setVisible(!1),this.startPosition=null,this.scene.physics.world.disable(this)}}Oi(rs),Li(ss);class xs extends ys{constructor(t,e,i={}){super(t,e,Object.assign(Object.assign({},i),{texture:ss.FIRE,audio:rs.FIRE,glowColor:16733184}))}}!function(t){t.PLAYER="player"}(as||(as={})),function(t){t.UPGRADE="player/upgrade",t.WALK="player/walk",t.DEAD="player/dead",t.DAMAGE_1="player/damage_1",t.DAMAGE_2="player/damage_2",t.DAMAGE_3="player/damage_3"}(os||(os={})),function(t){t.MAX_HEALTH="MAX_HEALTH",t.SPEED="SPEED",t.BUILD_AREA="BUILD_AREA",t.ASSISTANT="ASSISTANT"}(hs||(hs={})),function(t){t[t.LEFT=-1]="LEFT",t[t.RIGHT=1]="RIGHT",t[t.UP=-1]="UP",t[t.DOWN=1]="DOWN",t[t.NONE=0]="NONE"}(ls||(ls={})),function(t){t.FROST="FROST",t.RAGE="RAGE",t.SHIELD="SHIELD",t.FIRE="FIRE"}(us||(us={}));class bs extends ps{get ammo(){return this._ammo}set ammo(t){this._ammo=t}constructor(t,e,i){super(t,e),this.needReload=!1,this._ammo=30,i.setInitiator(this),this.shot=i,this.shotDefaultParams=i.params,this.handleAmmunitionRelease()}getInfo(){const t=[],e=this.getShotCurrentParams();return e.damage&&t.push({label:"Damage",icon:vn.DAMAGE,value:e.damage}),e.freeze&&t.push({label:"Freeze",icon:vn.DAMAGE,value:`${(e.freeze/1e3).toFixed(1)} s`}),e.speed&&t.push({label:"Speed",icon:vn.SPEED,value:e.speed}),t.push({label:"Ammo",icon:vn.AMMO,attention:0===this.ammo,value:`${this.ammo}/30`}),super.getInfo().concat(t)}update(){super.update(),this.isCanAttack()&&this.attack()}isCanAttack(){return this.ammo>0&&this.isActionAllowed()&&!this.scene.player.live.isDead()}attack(){const t=this.getTarget();t&&(this.shoot(t),this.pauseActions(),this.ammo--,0===this.ammo&&this.reload())}getShotCurrentParams(){const t={maxDistance:this.getActionsRadius()};if(this.shotDefaultParams.speed&&(t.speed=Yi({defaultValue:this.shotDefaultParams.speed,scale:.2,level:this.upgradeLevel})),this.shotDefaultParams.damage){const e=this.scene.player.activeSuperskills[us.RAGE];t.damage=Yi({defaultValue:this.shotDefaultParams.damage,scale:.55,level:this.upgradeLevel})*(e?2:1)}return this.shotDefaultParams.freeze&&(t.freeze=Yi({defaultValue:this.shotDefaultParams.freeze,scale:.45,level:this.upgradeLevel})),t}getAmmunition(){const t=this.scene.builder.getBuildingsByVariant(pn.AMMUNITION).filter((t=>t.ammo>0&&t.actionsAreaContains(this.getPositionOnGround())));return 0===t.length?null:t.reduce(((t,e)=>t.ammo>e.ammo?t:e))}reload(){const t=this.getAmmunition();t?(this.ammo+=t.use(30),this.needReload&&(this.removeAlertIcon(),this.needReload=!1,0===this.scene.game.sound.getAll(mn.RELOAD).length&&this.scene.game.sound.play(mn.RELOAD),this.scene.game.tutorial.complete(g.RELOAD_TOWER))):this.needReload||(this.addAlertIcon(),this.needReload=!0,this.scene.game.tutorial.start(g.RELOAD_TOWER))}getTarget(){const t=this.scene.getEntities(is.ENEMY).filter((t=>{if(t.alpha<1||t.live.isDead())return!1;const e=t.getPositionOnGround();return this.actionsAreaContains(e)&&!this.scene.level.hasTilesBetweenPositions(e,this.getPositionOnGround())}));return d(t,this)}shoot(t){this.shot.params=this.getShotCurrentParams(),this.shot.shoot(t)}handleAmmunitionRelease(){const t=t=>{this.needReload&&t.variant===pn.AMMUNITION&&this.reload()};this.scene.builder.on(es.UPGRADE,t),this.scene.builder.on(es.BUILD,t),this.on(Phaser.GameObjects.Events.DESTROY,(()=>{this.scene.builder.off(es.UPGRADE,t),this.scene.builder.off(es.BUILD,t)}))}}class Ts extends bs{constructor(t,e){const i=new xs(t,{damage:40,speed:300});super(t,Object.assign(Object.assign({},e),{variant:pn.TOWER_FIRE,health:Ts.Health,texture:Ts.Texture,radius:{default:160,growth:.25},delay:{default:1400,growth:-.15}}),i);let n=null;const s=()=>{n&&(this.scene.hideHint(n),n=null)},r=this.scene.game.tutorial.bind(g.UPGRADE_BUILDING,{beg:()=>{n=this.scene.showHint({side:"top",text:"Hover and press [E] to upgrade",position:this.getPositionOnGround()})},end:s}),a=this.scene.game.tutorial.bind(g.RELOAD_TOWER,{beg:()=>{0===this.ammo&&(n=this.scene.showHint({side:"top",text:"Build ammunition nearby",position:this.getPositionOnGround()}))},end:s});this.on(Phaser.GameObjects.Events.DESTROY,(()=>{s(),r(),a()})),this.scene.game.tutorial.state(g.BUILD_TOWER_FIRE)===v.IN_PROGRESS&&(this.scene.game.tutorial.complete(g.BUILD_TOWER_FIRE),this.scene.game.tutorial.start(g.BUILD_GENERATOR))}}Ts.Name="Fire tower",Ts.Description="Basic fire attack of enemies",Ts.Params=[{label:"Health",value:600,icon:vn.HEALTH},{label:"Radius",value:160,icon:vn.RADIUS},{label:"Damage",value:40,icon:vn.DAMAGE},{label:"Speed",value:300,icon:vn.SPEED}],Ts.Texture=gn.TOWER_FIRE,Ts.Cost=30,Ts.Health=600;class ws extends ys{constructor(t,e){super(t,e,{texture:ss.FROZEN,audio:rs.FROZEN,glowColor:41471})}}class Es extends bs{constructor(t,e){const i=new ws(t,{freeze:900,speed:300});super(t,Object.assign(Object.assign({},e),{variant:pn.TOWER_FROZEN,health:Es.Health,texture:Es.Texture,radius:{default:150,growth:.25},delay:{default:1400,growth:-.15}}),i)}}Es.Name="Frozen tower",Es.Description="Freezing enemies for some time",Es.Params=[{label:"Health",value:800,icon:vn.HEALTH},{label:"Radius",value:150,icon:vn.RADIUS},{label:"Freeze",value:`${.9.toFixed(1)} s`,icon:vn.DAMAGE},{label:"Speed",value:300,icon:vn.SPEED}],Es.Texture=gn.TOWER_FROZEN,Es.Cost=40,Es.Health=800,Es.AllowByWave=3;class Ss extends b().GameObjects.Line{constructor(t,e){super(t),this.initiator=null,this.positionCallback=null,this.timer=null,this.target=null,t.addEntity(is.SHOT,this),this.params=e,this.setActive(!1),this.setVisible(!1),this.setStrokeStyle(2,11613951,.5),this.setDepth(Sn),this.setOrigin(0,0),this.on(b().GameObjects.Events.DESTROY,(()=>{this.timer&&this.timer.destroy()}))}setInitiator(t,e=null){this.initiator=t,this.positionCallback=e,t.on(b().GameObjects.Events.DESTROY,(()=>{this.destroy()}))}update(){this.updateLine()}shoot(t){this.initiator&&(this.target=t,this.timer=this.scene.time.addEvent({delay:80,repeat:5,callback:()=>this.processing()}),this.updateLine(),this.setActive(!0),this.setVisible(!0),this.scene.game.sound.getAll(ns.LAZER).length<3&&this.scene.game.sound.play(ns.LAZER))}stop(){this.target=null,this.timer&&(this.timer.destroy(),this.timer=null),this.setVisible(!1),this.setActive(!1)}updateLine(){var t,e,i;if(!this.initiator||!(null===(t=this.target)||void 0===t?void 0:t.body))return;const n=null!==(i=null===(e=this.positionCallback)||void 0===e?void 0:e.call(this))&&void 0!==i?i:this.initiator;this.setTo(n.x,n.y,this.target.body.center.x,this.target.body.center.y)}hit(){if(!this.target||!this.params.damage)return;const t=this.params.damage/5;this.target.live.damage(t),this.scene.game.isSettingEnabled(r.EFFECTS)&&new Wn(this.target,{key:"glow",texture:Yn.GLOW,params:{duration:150,follow:this.target,followOffset:this.target.getBodyOffset(),lifespan:{min:100,max:150},scale:{start:.2,end:.1},speed:80,tint:11613951}})}processing(){var t,e;!(this.initiator&&this.params.maxDistance&&(null===(t=this.target)||void 0===t?void 0:t.body))||this.target.live.isDead()||b().Math.Distance.BetweenPoints(this.initiator,this.target.body.center)>this.params.maxDistance?this.stop():(this.hit(),0===(null===(e=this.timer)||void 0===e?void 0:e.repeatCount)&&this.stop())}}Oi(ns);class As extends bs{constructor(t,e){const i=new Ss(t,{damage:65});super(t,Object.assign(Object.assign({},e),{variant:pn.TOWER_LAZER,health:As.Health,texture:As.Texture,radius:{default:140,growth:.25},delay:{default:1300,growth:-.16}}),i)}}As.Name="Lazer tower",As.Description="Instant and continuous laser attack of enemies",As.Params=[{label:"Health",value:400,icon:vn.HEALTH},{label:"Readius",value:140,icon:vn.RADIUS},{label:"Damage",value:65,icon:vn.DAMAGE}],As.Texture=gn.TOWER_LAZER,As.Cost=80,As.Health=400,As.AllowByWave=6;class _s extends ps{constructor(t,e){super(t,Object.assign(Object.assign({},e),{variant:pn.WALL,health:_s.Health,texture:_s.Texture}))}}_s.Name="Wall",_s.Description="Defends other buildings",_s.Params=[{label:"Health",value:1500,icon:vn.HEALTH}],_s.Texture=gn.WALL,_s.Cost=10,_s.Health=1500,_s.AllowByWave=2;const Cs={[pn.WALL]:_s,[pn.TOWER_FIRE]:Ts,[pn.TOWER_FROZEN]:Es,[pn.TOWER_LAZER]:As,[pn.GENERATOR]:vs,[pn.AMMUNITION]:gs,[pn.RADAR]:ms},Rs=ci.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
`,Ps=ci.div`
  display: flex;
  align-items: center;
  background: ${hi.BLACK_TRANSPARENT_25};
  border-radius: 5px;
  overflow: hidden;
`,Ms=ci.div`
  width: 34px;
  height: 34px;
  background: ${hi.BLACK_TRANSPARENT_50};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 5px 5px 0;
`,Os=ci.img`
  width: 15px;
  height: 15px;
`,Ls=ci.div`
  padding: 2px 5px;
  color: ${t=>t.$attention?oi.WARN:"#fff"};
`,Ds=ci.div`
  font-family: ${li.PIXEL_TEXT};
  font-size: 10px;
  line-height: 10px;
  opacity: 0.75;
  margin: -1px 0 2px 0;
`,ks=ci.div`
  font-family: ${li.PIXEL_LABEL};
  font-size: 12px;
  line-height: 12px;
`,Fs=({list:t})=>C.createElement(Rs,null,t.map((t=>C.createElement(Ps,{key:t.label},C.createElement(Ms,null,C.createElement(Os,{src:`assets/sprites/${t.icon}.png`})),C.createElement(Ls,{$attention:t.attention},C.createElement(Ds,null,t.label),C.createElement(ks,null,t.value)))))),Is=ci.div`
  color: #fff;
  display: flex;
  align-items: center;
  ${t=>"small"===t.$size&&ri`
      zoom: 0.75;
    `}
`,Bs=ci.img`
  width: 16px;
  margin-right: 5px;
`,Ns=ci.div`
  margin-top: -2px;
  font-family: ${li.PIXEL_LABEL};
  font-size: 15px;
  line-height: 15px;
  color: ${t=>t.$attention?oi.ERROR:"#fff"};
`,Us=({type:t,value:e,size:i})=>{const s=(0,_.useScene)(n.WORLD),[r,a]=(0,C.useState)(0);return(0,_.useSceneUpdate)(s,(()=>{a(s.player[t])})),C.createElement(Is,{$size:i},C.createElement(Bs,{src:`assets/sprites/hud/${t}.png`}),C.createElement(Ns,{$attention:r<e},e))},zs=ci.div`
  font-family: ${li.PIXEL_TEXT};
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 1px;
  color: #fff;
`,Ys=({children:t})=>C.createElement(zs,null,t),Xs=di`
  0% { opacity: 0; margin-right: -15px }
  100% { opacity: 1; margin-right: 0 }
`,Gs=ci.div`
  width: 260px;
  animation: ${Xs} 0.1s ease-in;
  border-radius: 10px;
  overflow: hidden;
  &::after {
    position: absolute;
    content: "";
    right: 0;
    top: 30px;
    transform: translate(100%, -50%);
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 15px solid ${hi.BLUE_DARK_TRANSPARENT};
  }
`,Ws=ci.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: ${hi.BLUE_DARK_TRANSPARENT};
  height: 59px;
`,Vs=ci.div`
  font-family: ${li.PIXEL_LABEL};
  color: ${oi.SUCCESS};
  font-size: 16px;
  line-height: 16px;
`,Hs=ci.div`
  padding: 18px 20px 20px 20px;
  background: ${hi.BLUE_TRANSPARENT};
`,js=ci.div`
  margin: 15px 0 -5px 0;
  border-radius: 5px;
  padding: 6px 9px;
  font-family: ${li.PIXEL_TEXT};
  font-size: 10px;
  line-height: 10px;
  letter-spacing: 1px;
  color: #fff;
  background: ${t=>t.$attention?`${hi.ERROR}aa`:hi.BLACK_TRANSPARENT_25};
`,$s=({variant:t})=>{const e=(0,_.useScene)(n.WORLD),[i,s]=(0,C.useState)(null),[r,a]=(0,C.useState)(0),[o,h]=(0,C.useState)(!1),[l,u]=(0,C.useState)(!1);return(0,_.useSceneUpdate)(e,(()=>{const i=e.builder.isBuildingAllowByWave(t),n=e.builder.isBuildingAllowByTutorial(t),r=e.builder.getBuildingLimit(t);h(i),u(n),s(r),r&&a(e.builder.getBuildingsByVariant(t).length)})),l?C.createElement(Gs,null,C.createElement(Ws,null,C.createElement(Vs,null,Cs[t].Name),C.createElement(Us,{type:"resources",value:Cs[t].Cost,size:"large"})),C.createElement(Hs,null,C.createElement(Ys,null,Cs[t].Description),o?!!i&&C.createElement(js,{$attention:r>=i},"Current limit: ",r,"/",i):C.createElement(js,{$attention:!0},"Available from ",C.createElement("b",null,Cs[t].AllowByWave)," wave"),C.createElement(Fs,{list:Cs[t].Params}))):null},Ks=di`
  0% { background: ${hi.SUCCESS}; }
  50% { background: ${hi.SUCCESS_DARK}; }
  100% { background: ${hi.SUCCESS}; }
`,qs=ci.div`
  width: 70px;
  height: 60px;
  padding: 10px 16px 10px 10px;
  background: ${hi.BLACK_TRANSPARENT_75};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    right: 3px;
    top: 3px;
    bottom: 3px;
    background: ${hi.ERROR_LIGHT};
    border-radius: 2px;
    width: 3px;
  }
  ${t=>!t.$disabled&&ri`
      &:hover {
        background: ${hi.BLACK};
        cursor: pointer;
      }
    `}
  ${t=>(t.$disabled||t.$disallow)&&ri`
      opacity: 0.5;
      filter: grayscale(100%);
      &::before {
        background: #aaa;
      }
    `}
  ${t=>t.$usable&&ri`
      &::before {
        background: ${hi.SUCCESS_LIGHT};
      }
    `}
  ${t=>t.$active&&ri`
      opacity: 1;
      background: ${hi.BLUE};
    `}
  ${t=>t.$newest&&ri`
      &::after {
        position: absolute;
        content: "new";
        color: #fff;
        font-family: ${li.PIXEL_TEXT};
        font-size: 9px;
        line-height: 9px;
        left: -3px;
        top: -3px;
        border-radius: 5px;
        background: ${hi.SUCCESS};
        padding: 2px 4px 3px 4px;
        animation: ${Ks} 1s infinite;
      }
    `}
`,Zs=ci.div`
  overflow: hidden;
  width: 34px;
  height: 40px;
  img {
    height: 100%;
  }
`,Qs=ci.div`
  position: absolute;
  color: #fff;
  font-family: ${li.PIXEL_TEXT};
  font-size: 10px;
  line-height: 10px;
  right: 10px;
  top: 4px;
  opacity: 0.75;
`,Js=ci.img``,tr=({number:t,variant:e})=>{const i=(0,_.useScene)(n.WORLD),[s,r]=(0,C.useState)(!1),[a,o]=(0,C.useState)(!1),[h,l]=(0,C.useState)(!1),[u,c]=(0,C.useState)(!1),[d,f]=(0,C.useState)(!1),p=!u&&!s&&!a;return(0,_.useSceneUpdate)(i,(()=>{const t=i.builder.variant===e,n=!i.builder.isBuildingAllowByWave(e),s=!i.builder.isBuildingAllowByTutorial(e),a=!n&&!s&&i.player.resources>=Cs[e].Cost&&!i.builder.isBuildingLimitReached(e);l(t),r(n),o(s),f(a),t&&c(!0)})),C.createElement(qs,{onClick:()=>{s||(i.builder.variant===e?i.builder.unsetBuildingVariant():i.builder.setBuildingVariant(e))},onMouseEnter:()=>{s||a||c(!0)},$disallow:s,$disabled:a,$active:h,$newest:p,$usable:d},C.createElement(Qs,null,t),C.createElement(Zs,null,C.createElement(Js,{src:`assets/sprites/${Cs[e].Texture}.png`})))},er=ci.div`
  pointer-events: all;
  display: grid;
  grid-gap: 10px;
  @media (max-height: 600px) and (min-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }
`,ir=ci.div`
  position: absolute;
  transform: translate(-100%, 50%);
  margin: -58px 0 0 -15px;
  display: none;
  z-index: 2;
`,nr=ci.div`
  position: relative;
  display: flex;
  align-items: center;
  &:hover {
    [role=hint] {
      display: none;
    }
    ${ir} {
      display: block;
    }
  }
`,sr=()=>{const t=(0,_.useGame)(),[e,i]=(0,C.useState)(null),n=t=>{switch(t){case g.BUILD_GENERATOR:return i({variant:pn.GENERATOR,text:"Build generator to get resources"});case g.BUILD_RADAR:return i({variant:pn.RADAR,text:"Build radar to uncover enemies"});case g.BUILD_TOWER_FIRE:return i({variant:pn.TOWER_FIRE,text:"Build tower to attack enemies"});case g.BUILD_AMMUNITION:return i({variant:pn.AMMUNITION,text:"Build ammunition to reload towers"})}},s=t=>{switch(t){case g.BUILD_GENERATOR:case g.BUILD_RADAR:case g.BUILD_TOWER_FIRE:case g.BUILD_AMMUNITION:return i(null)}};return(0,C.useEffect)((()=>t.tutorial.bindAll({beg:n,end:s})),[]),C.createElement(er,null,Object.values(pn).map(((t,i)=>C.createElement(nr,{key:t},(null==e?void 0:e.variant)===t&&C.createElement(dn,{side:"right"},e.text),C.createElement(ir,null,C.createElement($s,{variant:t})),C.createElement(tr,{variant:t,number:i+1})))))},rr=ci.div`
  color: #fff;
  font-family: ${li.PIXEL_TEXT};
  font-size: 12px;
  line-height: 12px;
  opacity: 0.5;
`,ar=()=>{const t=(0,_.useGame)(),e=(0,_.useScene)(n.WORLD),[i,s]=(0,C.useState)(0),[r,a]=(0,C.useState)();return(0,_.useSceneUpdate)(e,(()=>{var e;s(Math.round(t.loop.actualFps));const i=null===(e=null===performance||void 0===performance?void 0:performance.memory)||void 0===e?void 0:e.usedJSHeapSize;i&&a((i/1024/1024).toFixed(2))})),C.createElement(rr,null,i," FPS",r&&C.createElement(C.Fragment,null,C.createElement("br",null),r," MB"))},or=ci.div`
  margin-top: 100px;
`,hr=()=>{const t=(0,_.useGame)(),[e,i]=(0,C.useState)(null),n=t=>{if(t===g.STOP_BUILD)return i("Use [Right click] to stop build")},s=t=>{if(t===g.STOP_BUILD)return i(null)};return(0,C.useEffect)((()=>t.tutorial.bindAll({beg:n,end:s})),[]),e?C.createElement(or,null,C.createElement(dn,{side:"top",align:"center"},e)):null},lr=di`
  0% { opacity: 0; margin-top: -32px }
  100% { opacity: 1; margin-top: 0 }
`,ur=ci.div`
  position: absolute;
  left: 50%;
  top: 128px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`,cr=ci.div`
  padding: 8px 15px 9px 15px;
  color: #fff;
  font-family: ${li.PIXEL_LABEL};
  font-size: 16px;
  line-height: 16px;
  animation: ${lr} 0.2s ease-in;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  background: ${t=>hi[t.$type]};
`,dr=()=>{const t=(0,_.useCurrentScene)(),[e,i]=(0,C.useState)([]),n=t=>{i((e=>{let i=!1;const n=e.map((e=>e.text===t.text?(i=!0,Object.assign(Object.assign({},e),{timestamp:Date.now()})):e));return i||n.push(Object.assign(Object.assign({},t),{timestamp:Date.now()})),n}))};return(0,C.useEffect)((()=>(t.events.on(Ii.NOTICE,n),()=>{t.events.off(Ii.NOTICE,n)})),[]),(0,_.useSceneUpdate)(t,(()=>{const t=Date.now();i((e=>{const i=e.filter((e=>t-e.timestamp<3e3));return i.length===e.length?e:i}))})),C.createElement(ur,null,e.map((t=>C.createElement(cr,{role:"notice",key:t.text,$type:t.type},t.text))))},fr=ci.div`
  width: 80px;
  height: 80px;
  background: ${hi.BLACK_TRANSPARENT_50};
  border-radius: 5px 5px 0 0;
`,pr=ci.img`
  width: 100%;
`,gr=()=>C.createElement(fr,null,C.createElement(pr,{src:"assets/sprites/hud/avatar.png"})),vr=()=>{const t=(0,_.useScene)(n.WORLD),[e,i]=(0,C.useState)(0);return(0,_.useSceneUpdate)(t,(()=>{i(t.player.experience)})),C.createElement(ji,{type:"experience"},e)},mr=ci.div`
  background: #000;
  width: 80px;
  position: relative;
`,yr=ci.div`
  height: 20px;
  background: ${hi.SUCCESS};
  box-shadow: 0 10px 0 ${hi.WHITE_TRANSPARENT_15}inset;
  transition: width 0.3s ease-out;
`,xr=ci.div`
  position: absolute;
  font-family: ${li.PIXEL_LABEL};
  color: #fff;
  font-size: 11px;
  line-height: 11px;
  text-shadow: 1px 1px 0 #000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  padding-bottom: 1px;
`,br=()=>{const t=(0,_.useScene)(n.WORLD),[e,i]=(0,C.useState)(0),[s,r]=(0,C.useState)(0);return(0,_.useSceneUpdate)(t,(()=>{i(t.player.live.health),r(t.player.live.maxHealth)})),C.createElement(mr,null,C.createElement(yr,{style:{width:e/s*100+"%"}}),C.createElement(xr,null,`${e} HP`))},Tr=ci.div`
  position: relative;
`,wr=()=>{const t=(0,_.useGame)(),e=(0,_.useScene)(n.WORLD),[i,s]=(0,C.useState)(0),[r,a]=(0,C.useState)(!1);return(0,C.useEffect)((()=>t.tutorial.bind(g.RESOURCES,{beg:()=>a(!0),end:()=>a(!1)})),[]),(0,_.useSceneUpdate)(e,(()=>{s(e.player.resources)})),C.createElement(Tr,null,C.createElement(ji,{type:"resources"},i),r&&C.createElement(dn,{side:"top",align:"left"},"If resources not enough",C.createElement("br",null),"you can find crystals on map"))},Er=()=>{const t=(0,_.useScene)(n.WORLD),[e,i]=(0,C.useState)(0);return(0,_.useSceneUpdate)(t,(()=>{i(t.player.score)})),C.createElement(ji,{type:"score"},e)},Sr={width:69,height:89,gamut:4},{RIGHT:Ar,LEFT:_r,UP:Cr,DOWN:Rr,NONE:Pr}=ls,Mr={[hs.MAX_HEALTH]:{label:"Maximum health",description:"Grow health of player and assistant",experience:100,maxLevel:10},[hs.SPEED]:{label:"Movement speed",description:"Grow speed of player and assistant",experience:100,maxLevel:10},[hs.BUILD_AREA]:{label:"Build area",description:"Grow radius of build area",experience:100,maxLevel:10},[hs.ASSISTANT]:{label:"Assistant strength",description:"Grow damage, radius and speed attack",experience:100,maxLevel:10}},Or={[us.FROST]:{description:"Freezes all spawned enemies",cost:40,duration:6e3},[us.RAGE]:{description:"Doubles towers damage",cost:60,duration:1e4},[us.SHIELD]:{description:"Prevents damage to all buildings",cost:40,duration:1e4},[us.FIRE]:{description:"Deals damage to all enemies",cost:70,duration:1e3}},Lr={[`${_r}|${Cr}`]:180+Fn.deg,[`${_r}|${Pr}`]:180,[`${_r}|${Rr}`]:180-Fn.deg,[`${Pr}|${Cr}`]:270,[`${Pr}|${Rr}`]:90,[`${Ar}|${Cr}`]:-Fn.deg,[`${Ar}|${Pr}`]:0,[`${Ar}|${Rr}`]:Fn.deg},Dr={[`${_r}|${Cr}`]:"move_left_up",[`${_r}|${Pr}`]:"move_left",[`${_r}|${Rr}`]:"move_left_down",[`${Pr}|${Cr}`]:"move_up",[`${Pr}|${Rr}`]:"move_down",[`${Ar}|${Cr}`]:"move_right_up",[`${Ar}|${Pr}`]:"move_right",[`${Ar}|${Rr}`]:"move_right_down"},kr=ci.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  overflow: hidden;
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`,Fr=ci.div`
  width: 300px;
  padding: 10px;
  background: ${hi.BLACK_TRANSPARENT_25};
  flex: 1;
`,Ir=ci.div`
  font-family: ${li.PIXEL_LABEL};
  color: ${oi.SUCCESS};
  font-size: 14px;
  line-height: 14px;
  margin-bottom: 4px;
`,Br=ci.div`
  font-family: ${li.PIXEL_TEXT};
  font-size: 9px;
  line-height: 9px;
  margin-top: 6px;
  background: ${hi.BLACK_TRANSPARENT_50};
  padding: 3px 5px;
  display: inline-flex;
  align-items: center;
  b {
    font-size: 12px;
    line-height: 12px;
    margin-left: 5px;
  }
`,Nr=ci.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.35);
  ${t=>t.$active&&ri`
      background: ${hi.BLACK_TRANSPARENT_50};
      &:hover {
        cursor: pointer;
        background: ${hi.BLACK_TRANSPARENT_75};
      }
    `}
`,Ur=ci.div`
  font-family: ${li.PIXEL_LABEL};
  font-size: 10px;
  line-height: 10px;
  margin-bottom: 10px;
`,zr=ci.div`
  color: ${oi.WARN};
  font-family: ${li.PIXEL_LABEL};
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  white-space: pre;
`,Yr=({type:t})=>{const e=(0,_.useScene)(n.WORLD),[i,s]=(0,C.useState)(null),r=(null==i?void 0:i.currentLevel)&&i.maxLevel<=i.currentLevel;return(0,_.useSceneUpdate)(e,(()=>{const i=Object.assign(Object.assign({},Mr[t]),{experience:e.player.getExperienceToUpgrade(t),currentLevel:e.player.upgradeLevel[t]});s((t=>(0,_.getModifiedObject)(t,i)))})),i&&C.createElement(kr,null,C.createElement(Fr,null,C.createElement(Ir,null,i.label),C.createElement(Ys,null,i.description),C.createElement(Br,null,"LEVEL ",C.createElement("b",null,i.currentLevel))),r?C.createElement(Nr,null,C.createElement(zr,null,"MAX",C.createElement("br",null),"LEVEL")):C.createElement(Nr,{onClick:()=>{e.player.upgrade(t)},$active:!0},C.createElement(Ur,null,"UPGRADE"),C.createElement(Us,{type:"experience",value:i.experience,size:"large"})))},Xr=di`
  0% { opacity: 0; margin-top: 0 }
  100% { opacity: 1; margin-top: 14px }
`,Gr=ci.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: ${hi.BLUE_TRANSPARENT};
  padding: 20px;
  margin-top: 14px;
  pointer-events: all;
  animation: ${Xr} 0.1s ease-in;
  border-radius: 10px;
  &::after {
    position: absolute;
    content: "";
    top: -14px;
    left: 39px;
    transform: translateX(-50%);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 14px solid ${hi.BLUE_TRANSPARENT};
  }
`,Wr=({onClose:t})=>{const e=(0,C.useRef)(null),i=(0,C.useMemo)((()=>Object.keys(Mr)),[]),n=i=>{i.composedPath().every((t=>t!==e.current))&&t()},s=e=>{"Escape"===e.key&&(t(),e.stopPropagation())};return(0,C.useEffect)((()=>(document.addEventListener("click",n),document.addEventListener("keyup",s),()=>{document.removeEventListener("click",n),document.removeEventListener("keyup",s)})),[]),C.createElement(Gr,{ref:e},i.map((t=>C.createElement(Yr,{key:t,type:t}))))},Vr=ci.div`
  position: relative;
`,Hr=()=>{const t=(0,_.useGame)(),[e,i]=(0,C.useState)(!1),[n,s]=(0,C.useState)(!1);return(0,C.useEffect)((()=>t.tutorial.bind(g.UPGRADE_SKILL,{beg:()=>s(!0),end:()=>s(!1)})),[]),C.createElement(Vr,null,C.createElement(pi,{onClick:t=>{i(!e),t.stopPropagation()},view:e?"active":void 0,size:"fixed"},"SKILLS"),e&&C.createElement(Wr,{onClose:()=>{i(!1)}}),n&&!e&&C.createElement(dn,{side:"top",align:"left"},"Click to upgrade skills"))},jr=ci.div`
  display: flex;
`,$r=ci.div`
  &:not(:last-child) {
    margin-right: 16px;
  }
`,Kr=ci.div`
  height: 6px;
`,qr=()=>C.createElement(jr,null,C.createElement($r,null,C.createElement(gr,null),C.createElement(br,null),C.createElement(Kr,null),C.createElement(Hr,null)),C.createElement($r,null,C.createElement(Er,null),C.createElement(Kr,null),C.createElement(vr,null),C.createElement(Kr,null),C.createElement(wr,null))),Zr=ci.div`
  width: 100%;
  height: 100%;
  padding: 32px;
  display: flex;
  justify-content: space-between;
`,Qr=ci.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`,Jr=ci.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${t=>{switch(t.$side){case"left":return ri`
        justify-self: start;
        align-items: flex-start;
      `;case"center":return ri`
        justify-self: center;
        align-items: center;
      `;case"right":return ri`
        justify-self: end;
        align-items: flex-end;
      `}}}
`,ta=di`
  0% { right: 0 }
  100% { right: 100% }
`,ea=di`
  0% { opacity: 0; margin-bottom: 0 }
  100% { opacity: 1; margin-bottom: 12px }
`,ia=ci.img`
  display: block;
  width: 26px;
  height: 26px;
`,na=ci.div`
  position: absolute;
  display: none;
  transform: translateX(-50%);
  bottom: 100%;
  left: 50%;
  margin-bottom: 12px;
  width: 200px;
  animation: ${ea} 0.1s ease-in;
  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 100%);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 12px solid ${hi.BLUE_TRANSPARENT};
  }
`,sa=ci.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: ${hi.BLUE_DARK_TRANSPARENT};
  border-radius: 10px 10px 0 0;
`,ra=ci.div`
  color: ${oi.SUCCESS};
  font-family: ${li.PIXEL_LABEL};
  font-size: 14px;
  line-height: 14px;
  padding-bottom: 2px;
`,aa=ci.div`
  background: ${hi.BLUE_TRANSPARENT};
  padding: 10px 14px 12px 14px;
  border-radius: 0 0 10px 10px;
`,oa=ci.div`
  background: ${hi.BLACK_TRANSPARENT_50};
  padding: 14px;
  pointer-events: all;
  position: relative;
  border-bottom: 6px solid #000;
  border-radius: 5px;
  ${t=>t.$active?ri`
          ${ia} {
            opacity: 0.5;
          }
        `:ri`
          &:hover {
            background: ${hi.BLACK_TRANSPARENT_75};
            cursor: pointer;
            ${na} {
              display: block;
            }
          }
        `}
  &:not(:last-child) {
    margin-right: 10px;
  }
`,ha=ci.div`
  position: absolute;
  background: ${hi.INFO};
  right: 0;
  left: 0;
  bottom: -6px;
  height: 6px;
  animation: ${ta} 1s linear;
`,la=({type:t})=>{const e=(0,_.useGame)(),i=(0,_.useScene)(n.WORLD),s=(0,_.useScene)(n.SYSTEM),[r,a]=(0,C.useState)(!1),[o,h]=(0,C.useState)(!1),[l,u]=(0,C.useState)(0);return(0,_.useSceneUpdate)(s,(()=>{a(e.onPause),h(Boolean(i.player.activeSuperskills[t])),u(i.player.getSuperskillCost(t))})),C.createElement(oa,{onClick:()=>{i.player.useSuperskill(t)},$active:o},C.createElement(na,null,C.createElement(sa,null,C.createElement(ra,null,t),C.createElement(Us,{type:"resources",value:l,size:"small"})),C.createElement(aa,null,C.createElement(Ys,null,Or[t].description))),o&&C.createElement(ha,{style:{animationDuration:`${Or[t].duration}ms`,animationPlayState:r?"paused":"running"}}),C.createElement(ia,{src:`assets/sprites/feature/${t.toLowerCase()}.png`}))},ua=ci.div`
  display: flex;
`,ca=()=>{const t=(0,_.useScene)(n.WORLD),e=(0,C.useMemo)((()=>Object.keys(us)),[]),[i,s]=(0,C.useState)(!1);return(0,_.useSceneUpdate)(t,(()=>{s(t.wave.isGoing)})),i?C.createElement(ua,null,e.map((t=>C.createElement(la,{key:t,type:t})))):C.createElement("div",null)},da=di`
  0% { transform: scale(0.8) }
  100% { transform: scale(1.0) }
`,fa=ci.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,pa=ci.div`
  font-family: ${li.PIXEL_LABEL};
  display: flex;
  color: #fff;
  align-items: center;
  padding: 10px 15px 10px 10px;
  background: ${hi.BLACK_TRANSPARENT_75};
  border-radius: 5px;
`,ga=ci.div`
  font-size: 24px;
  line-height: 24px;
  padding: 6px 17px 10px 17px;
  border-radius: 3px;
  background: ${t=>t.$going?hi.ERROR:hi.SUCCESS};
  box-shadow: 0 20px 0 ${hi.WHITE_TRANSPARENT_15} inset;
`,va=ci.div`
  margin-left: 10px;
`,ma=ci.div`
  font-size: 11px;
  line-height: 11px;
  opacity: 0.5;
  margin-top: -2px;
`,ya=ci.div`
  margin-top: 3px;
  font-size: 20px;
  line-height: 20px;
  ${t=>t.$attention&&ri`
      color: ${oi.ERROR};
      animation: ${da} 1s infinite;
    `}
`,xa=()=>{const t=(0,_.useScene)(n.WORLD),[e,i]=(0,C.useState)(1),[s,r]=(0,C.useState)(null),[a,o]=(0,C.useState)(!1),[h,l]=(0,C.useState)(!1),[u,c]=(0,C.useState)(!0);return(0,_.useSceneUpdate)(t,(()=>{const e=t.wave.isPeaceMode||t.isTimePaused();if(c(e),!e)if(i(t.wave.number),o(t.wave.isGoing),t.wave.isGoing){const e=t.wave.getEnemiesLeft();r(e),l(!1)}else{const e=t.wave.getTimeleft();r(function(t){const e=Math.floor(t/1e3/60),i=Math.ceil(t/1e3)%60;return`${e<10?"0":""}${e}:${i<10?"0":""}${i}`}(e)),l(e<=3e3)}})),u?C.createElement("div",null):C.createElement(fa,null,C.createElement(pa,null,C.createElement(ga,{$going:a},e),C.createElement(va,null,C.createElement(ma,null,a?"Enemies":"Timeleft"),C.createElement(ya,{$attention:h},s))))},ba=()=>{const t=(0,_.useRelativeScale)(gi);return C.createElement(Zr,{ref:t},C.createElement(Qr,null,C.createElement(Jr,{$side:"left"},C.createElement(qr,null),C.createElement(ar,null)),C.createElement(Jr,{$side:"center"},C.createElement(xa,null),C.createElement(en,null),C.createElement(hr,null),C.createElement(ca,null)),C.createElement(Jr,{$side:"right"},C.createElement(sr,null))),C.createElement(dr,null))};ba.displayName="ScreenUI";class Ta extends Ci{constructor(){super(n.SCREEN)}create(){new _.Interface(this,ba)}notice(t,e){this.events.emit(Ii.NOTICE,{type:t,text:e}),t===Bi.ERROR&&this.game.sound.play(Fi.ERROR)}}Oi(Fi);const wa=ci.div`
  color: #fff;
  font-family: ${li.PIXEL_TEXT};
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 1px;
  margin-top: -2px;
`,Ea=()=>C.createElement(wa,null,"Your task is to survive on chosen planet as many waves as possible.",C.createElement("br",null),"With each wave count of enemies and their characteristics will grow.",C.createElement("br",null),C.createElement("br",null),"Build walls to defend, towers to attack, ammunitions to reload towers",C.createElement("br",null),"and generators to get more resources.",C.createElement("br",null),C.createElement("br",null),"And also upgrade skills of your character and his assistant."),Sa=ci.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(2, 1fr);
`,Aa=ci.div`
  display: flex;
  align-items: center;
`,_a=ci.div`
  margin-right: 8px;
  display: flex;
`,Ca=ci.div`
  color: #000;
  font-family: ${li.PIXEL_LABEL};
  font-size: 13px;
  line-height: 13px;
  padding: 4px 7px 5px 7px;
  background: #fff;
  text-align: center;
  border-radius: 3px;
  &:not(:last-child) {
    margin-right: 3px;
  }
`,Ra=()=>C.createElement(Sa,null,En.map(((t,e)=>C.createElement(Aa,{key:e},C.createElement(_a,null,t.name.split(",").map((t=>C.createElement(Ca,{key:t},t)))),C.createElement(Ys,null,"- ",t.description))))),Pa=ci.div`
  display: flex;
  align-items: center;
`,Ma=ci.div`
  color: #fff;
  font-family: ${li.PIXEL_LABEL};
  font-size: 18px;
  line-height: 18px;
  margin-right: 15px;
`,Oa=ci.ul`
  list-style: none;
  display: flex;
  ${t=>t.$disabled?ri`
          opacity: 0.5;
        `:ri`
          pointer-events: all;
        `}
`,La=ci.li`
  color: ${t=>t.$active?oi.SUCCESS:hi.WHITE_TRANSPARENT_75};
  font-family: ${li.PIXEL_LABEL};
  font-size: 14px;
  line-height: 14px;
  border: 1px solid
    ${t=>t.$active?oi.SUCCESS:hi.WHITE_TRANSPARENT_75};
  padding: 4px 7px 6px 7px;
  border-radius: 3px;
  &:not(:last-child) {
    margin-right: 5px;
  }
  &:hover {
    cursor: pointer;
    ${t=>!t.$active&&ri`
        color: ${oi.HOVER};
        border-color: ${oi.HOVER};
      `};
  }
`,Da=({label:t,values:e,currentValue:i,onChange:n})=>C.createElement(Pa,null,C.createElement(Ma,null,t),C.createElement(Oa,null,e.map((t=>C.createElement(La,{key:t,onClick:()=>n(t),$active:i===t},t))))),ka=({label:t,values:e,defaultValue:i,onChange:n})=>{const[s,r]=(0,C.useState)(i);return C.createElement(Da,{label:t,values:e,currentValue:s,onChange:t=>{n(t),r(t)}})},Fa=ci.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Ia=ci.div`
  margin-bottom: 40px;

  > *:not(:last-child) {
    margin-bottom: 25px;
  }
`;var Ba,Na,Ua,za,Ya,Xa;!function(t){t.MAP="MAP",t.BUILDING="BUILDING",t.CRYSTAL="CRYSTAL",t.SCENERY="SCENERY"}(Ba||(Ba={})),function(t){t.ENEMY="ENEMY",t.PLAYER="PLAYER",t.SCENERY="SCENERY",t.CRYSTAL="CRYSTAL"}(Na||(Na={})),function(t){t.EARTH="EARTH",t.MOON="MOON",t.MARS="MARS"}(Ua||(Ua={})),function(t){t.EARTH="level/earth/scenery",t.MOON="level/moon/scenery",t.MARS="level/mars/scenery"}(za||(za={})),function(t){t.EARTH="level/earth/tileset",t.MOON="level/moon/tileset",t.MARS="level/mars/tileset"}(Ya||(Ya={})),function(t){t.WATER="WATER",t.SAND="SAND",t.GRASS="GRASS",t.RUBBLE="RUBBLE",t.MOUNT="MOUNT",t.SNOW="SNOW"}(Xa||(Xa={}));const Ga=()=>{const t=(0,_.useGame)(),e=(0,C.useMemo)((()=>Object.keys(Ua)),[]),i=(0,C.useMemo)((()=>Object.keys(a)),[]);return C.createElement(Fa,null,C.createElement(Ia,null,C.createElement(ka,{label:"Planet",values:e,defaultValue:t.world.level.planet,onChange:e=>{t.world.scene.restart({planet:e}),t.world.events.once(b().Scenes.Events.CREATE,(()=>{t.world.camera.focusOnLevel()}))}}),C.createElement(ka,{label:"Difficulty",values:i,defaultValue:t.difficulty,onChange:e=>{t.difficulty=e}})),C.createElement(pi,{onClick:()=>{t.startGame()},view:"primary",size:"medium"},"Start"))},Wa=({type:t,data:e})=>{const i=(0,_.useGame)(),[n,s]=(0,C.useState)(i.settings[t]);return C.createElement(Da,{label:e.description,values:e.values,currentValue:n,onChange:e=>{i.updateSetting(t,e),s(e)}})},Va=ci.div`
  > *:not(:last-child) {
    margin-bottom: 25px;
  }
`,Ha=()=>{return C.createElement(Va,null,(t=u,e=(t,e)=>C.createElement(Wa,{key:t,type:t,data:e}),Object.entries(t).map((([t,i],n)=>e(t,i)))));var t,e},ja=ci.div`

`,$a=({page:t})=>{const e=(0,C.useMemo)((()=>{switch(t){case y.NEW_GAME:return C.createElement(Ga,null);case y.SETTINGS:return C.createElement(Ha,null);case y.ABOUT:return C.createElement(Ea,null);case y.CONTROLS:return C.createElement(Ra,null)}}),[t]);return C.createElement(ja,null,e)},Ka=ci.div`
  font-family: ${li.PIXEL_TEXT};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,qa=ci.div`
  color: rgba(255, 255, 255, 0.75);
  text-align: right;
  white-space: pre-line;
  font-size: 12px;
  line-height: 12px;
`,Za=ci.a`
  color: #fff;
  pointer-events: all;
  &:hover {
    color: ${oi.HOVER};
  }
`,Qa=ci.div`
  margin-top: 6px;
`,Ja=ci.a`
  margin-top: 10px;
  color: #fff;
  pointer-events: all;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  font-size: 13px;
  line-height: 13px;
  padding: 5px 9px;
  border-radius: 3px;
  background: #6170c1;
  &:hover {
    background: #111;
  }
`,to=ci.img`
  width: 16px;
  margin-right: 8px;
  display: inline-block;
`,eo=()=>C.createElement(Ka,null,C.createElement(qa,null,"Created by"," ",C.createElement(Za,{href:p.v.HQ,target:"_blank"},p.v.u2),C.createElement(Qa,null,"Version ",p.i8)),C.createElement(Ja,{href:"https://discord.gg/cnFAdMsRxn",target:"_blank"},C.createElement(to,{src:"assets/discord.png"}),"DISCORD")),io=ci.ul`
  list-style: none;
  text-align: right;
  pointer-events: all;
  display: flex;
`,no=ci.li`
  font-family: ${li.PIXEL_LABEL};
  font-size: 24px;
  line-height: 24px;
  padding-bottom: 7px;
  border-bottom: 4px solid transparent;
  ${t=>t.$active?ri`
          color: ${oi.SUCCESS};
          border-color: ${oi.SUCCESS};
          &:hover {
            cursor: pointer;
          }
        `:ri`
          color: #fff;
          &:hover {
            cursor: pointer;
            color: ${oi.HOVER};
          }
        `}
  &:not(:last-child) {
    margin-right: 30px;
  }
`,so=({page:t,onSelect:e})=>{const i=(0,_.useGame)(),n=(0,C.useMemo)((()=>[...i.isStarted?[{label:"Continue",onClick:()=>{i.resumeGame()}},{label:"New game",page:y.NEW_GAME,onClick:()=>{window.confirm("Do you confirm start new game?")&&i.stopGame()}}]:[{label:"New game",page:y.NEW_GAME}],{label:"Settings",page:y.SETTINGS},{label:"About",page:y.ABOUT},{label:"Controls",page:y.CONTROLS}]),[]);return C.createElement(io,null,n.map((i=>{var n;return C.createElement(no,{key:i.label,onClick:null!==(n=i.onClick)&&void 0!==n?n:()=>i.page&&e(i.page),$active:i.page===t},i.label)})))},ro=ci.div`
  height: 90vh;
  max-height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
`,ao=ci.div`
  width: 90%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
`,oo=ci.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 60px;

  ${ao} {
    align-items: center;
  }
`,ho=ci.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${hi.BLACK_TRANSPARENT_50};
  padding: 40px 0 36px 0;
  margin-bottom: 60px;
`,lo=ci.div`
  display: flex;
  justify-content: center;
  flex: 1;
`,uo=ci.img`
  height: 70px;
`,co=({defaultPage:t})=>{const[e,i]=(0,C.useState)(null!=t?t:y.NEW_GAME);return C.createElement(mi,null,C.createElement(ro,null,C.createElement(oo,null,C.createElement(ao,null,C.createElement(uo,{src:"assets/logotype.png"}),C.createElement(eo,null))),C.createElement(ho,null,C.createElement(ao,null,C.createElement(so,{page:e,onSelect:i}))),C.createElement(lo,null,C.createElement(ao,null,C.createElement($a,{page:e})))))};co.displayName="MenuUI";class fo extends Ci{constructor(){super(n.MENU)}create(t){new _.Interface(this,co,{defaultPage:t.page}),console.log("Menu scene created"),this.game.isStarted||(console.log("Start game",this.game),this.game.world.camera.focusOnLevel())}}class po extends Ci{constructor(){super({key:n.SYSTEM,pack:Pi}),function(t){const e=document.getElementById("loading-status");e&&(e.innerText="ASSETS LOADING")}()}create(){var t;Promise.all([ki(li.PIXEL_LABEL,"pixel_label.ttf"),ki(li.PIXEL_TEXT,"pixel_text.ttf")]).then((()=>{!function(){const t=document.getElementById("loading");t&&t.remove()}()})),this.scene.launch(n.WORLD),this.scene.launch(n.MENU),this.scene.bringToTop(),null===(t=this.input.keyboard)||void 0===t||t.on("keyup-ESC",(()=>{this.game.isPaused||(this.game.isFinished?this.game.stopGame():this.game.isStarted&&(this.game.onPause?this.game.resumeGame():this.game.pauseGame()))}))}}var go,vo;!function(t){t.RedCandle="enemy/bat",t.SPIKE="enemy/spike",t.RISPER="enemy/risper",t.DEMON="enemy/demon",t.OVERLORD="enemy/overlord",t.BOSS="enemy/boss",t.IMPURE="enemy/impure",t.UNDEAD="enemy/undead",t.TERMER="enemy/termer"}(go||(go={})),function(t){t.RedCandle="RedCandle",t.SPIKE="SPIKE",t.RISPER="RISPER",t.DEMON="DEMON",t.OVERLORD="OVERLORD",t.BOSS="BOSS",t.IMPURE="IMPURE",t.UNDEAD="UNDEAD",t.TERMER="TERMER"}(vo||(vo={}));const mo={[go.RedCandle]:{frameRate:4,size:{width:60,height:58.78,gamut:4}},[go.RISPER]:{frameRate:4,size:{width:16,height:24,gamut:4}},[go.DEMON]:{frameRate:4,size:{width:16,height:24,gamut:4}},[go.SPIKE]:{frameRate:4,size:{width:16,height:26,gamut:4}},[go.UNDEAD]:{frameRate:4,size:{width:18,height:26,gamut:4}},[go.OVERLORD]:{frameRate:8,size:{width:32,height:40,gamut:6}},[go.IMPURE]:{frameRate:8,size:{width:32,height:40,gamut:6}},[go.TERMER]:{frameRate:4,size:{width:32,height:40,gamut:6}},[go.BOSS]:{frameRate:4,size:{width:64,height:80,gamut:12}}};class yo extends b().Physics.Arcade.Sprite{get positionAtMatrix(){return this._positionAtMatrix}set positionAtMatrix(t){this._positionAtMatrix=t}constructor(t,{texture:e,positionAtMatrix:i,health:n,speed:s,frame:r=0}){const a=fs.ToWorldPosition(Object.assign(Object.assign({},i),{z:0}));super(t,a.x,a.y,e,r),this.gamut=0,this.speed=0,this.currentBiome=null,this.collisionTargets=[],this.collisionHandler=null,this.collisionGround=!1,this.indicators=[],this.positionDebug=null,t.add.existing(this),this.positionAtMatrix=i,this.live=new Xn({health:n}),this.container=this.scene.add.container(this.x,this.y),this.speed=s,this.scene.physics.world.enable(this,b().Physics.Arcade.DYNAMIC_BODY),this.setOrigin(.5,1),this.setImmovable(!0),this.setPushable(!1),this.addDebugPosition(),this.live.on(Un.DAMAGE,this.onDamage.bind(this)),this.live.on(Un.DEAD,this.onDead.bind(this)),this.on(b().GameObjects.Events.DESTROY,(()=>{this.container.destroy()}))}update(){var t;super.update();const e=this.getPositionOnGround(),i=fs.GetDepth(e.y,1),n=this.getTopCenter();this.positionAtMatrix=fs.ToMatrixPosition(e),this.currentBiome=this.scene.level.map.getAt(this.positionAtMatrix),this.setDepth(i),this.container.setDepth(i+19),this.container.setPosition(n.x,(null!==(t=null==n?void 0:n.y)&&void 0!==t?t:0)-10),this.container.setAlpha(this.alpha),this.container.setVisible(this.visible),this.updateIndicators(),this.drawDebugGroundPosition()}isStopped(){return c(this.body.velocity,{x:0,y:0})}getAllPositionsAtMatrix(){return this.getProjectionOnGround().map((t=>fs.ToMatrixPosition(t)))}addCollider(t,e,i){this.scene.physics.add[e](this,this.scene.getEntitiesGroup(t),((t,e)=>{i(e)}))}setTilesCollision(t,e){this.collisionTargets=t,this.collisionHandler=e}setTilesGroundCollision(t){this.collisionGround=t}handleCollide(t){const e=this.getCollidedTile(t);return this.collisionHandler&&e instanceof b().GameObjects.Image&&this.collisionHandler(e),Boolean(e)}getCollidedTile(t){var e;if(0===this.collisionTargets.length&&!this.collisionGround)return!1;const i=this.collisionGround&&(null===(e=this.currentBiome)||void 0===e?void 0:e.friction)||1,n=this.speed/i*(.002*this.scene.deltaTime),s=this.scene.physics.velocityFromAngle(t,n);if(this.collisionGround){const t=this.getPositionOnGround(),e=fs.ToMatrixPosition({x:t.x+s.x,y:t.y+s.y}),i=this.scene.level.map.getAt(e);if(!(null==i?void 0:i.solid))return!0}if(this.collisionTargets.length>0){const t=this.getProjectionOnGround();for(const e of t){const t=fs.ToMatrixPosition({x:e.x+s.x,y:e.y+s.y}),i=this.scene.level.getTileWithType(Object.assign(Object.assign({},t),{z:1}),this.collisionTargets);if(i)return i}}return!1}getPositionOnGround(){return{x:this.x,y:this.y-this.getGamutOffset()}}getBodyOffset(){return{x:0,y:this.body?this.body.center.y-this.y:0}}getGamutOffset(){return this.gamut*this.scaleY*.5}getProjectionOnGround(){const t=.4*this.displayWidth,e=this.getGamutOffset(),i=b().Math.PI2/8,n=this.getPositionOnGround(),s=[];for(let r=0;r<8;r++)s.push({x:n.x+Math.sin(r*i)*t,y:n.y-Math.cos(r*i)*e});return s}addIndicator(t){var e;const i=null!==(e=t.size)&&void 0!==e?e:this.displayWidth,n=this.scene.add.rectangle(0,0,i,5,0);n.setOrigin(0,0);const s=this.scene.add.rectangle(1,1,0,0,t.color);s.setOrigin(0,0);const r=this.scene.add.container(-i/2,-6*this.indicators.length);r.setSize(n.width,n.height),r.add([n,s]),this.container.add(r),this.indicators.push({container:r,value:t.value})}updateIndicators(){this.indicators.forEach(((t,e)=>{const i=t.value();i<=0?(t.container.destroy(),this.indicators.splice(e,1)):t.container.getAt(1).setSize((t.container.width-2)*i,t.container.height-2)}))}addDebugPosition(){}drawDebugGroundPosition(){if(!this.positionDebug)return;this.positionDebug.clear(),this.positionDebug.lineStyle(1,16711680),this.positionDebug.beginPath();const t=this.getPositionOnGround();this.positionDebug.moveTo(t.x,t.y),this.positionDebug.lineTo(t.x+10,t.y),this.positionDebug.moveTo(t.x,t.y),this.positionDebug.lineTo(t.x,t.y+10),this.positionDebug.closePath(),this.positionDebug.strokePath(),this.positionDebug.lineStyle(1,16777215),this.positionDebug.beginPath();const e=this.getProjectionOnGround(),i=[...e,e[0]];for(let t=1;t<i.length;t++)this.positionDebug.moveTo(i[t-1].x,i[t-1].y),this.positionDebug.lineTo(i[t].x,i[t].y);this.positionDebug.closePath(),this.positionDebug.strokePath()}onDamage(){this.scene.game.isSettingEnabled(r.EFFECTS)&&!this.scene.game.isFlagEnabled(o.NO_BLOOD)&&new Wn(this,{key:"blood",texture:Yn.BIT_SOFT,params:{duration:200,follow:this,followOffset:this.getBodyOffset(),lifespan:{min:100,max:250},scale:{start:1,end:.5},speed:60,maxAliveParticles:6,tint:14491166}})}onDead(){this.anims.stop(),this.scene.tweens.add({targets:[this,this.container],alpha:0,duration:250,onComplete:()=>{this.destroy()}})}}var xo;!function(t){t.PATH_NOT_FOUND="path_not_found"}(xo||(xo={}));class bo extends yo{constructor(t,{positionAtMatrix:e,texture:i,health:n,speed:s,pathFindTriggerDistance:r,frameRate:a=4}){super(t,{texture:i,positionAtMatrix:e,health:n,speed:s}),this.isPathPassed=!1,this.pathToTarget=[],this.pathFindingTask=null,this.pathFindTriggerDistance=0,this.pathFindTimestamp=0,this.pathDebug=null,this.freezeTimestamp=0,this.freezeEffectTimer=null,t.addEntity(is.NPC,this),this.setVisible(!1),this.pathFindTriggerDistance=r,this.addDebugPath(),this.anims.create({key:"idle",frames:this.anims.generateFrameNumbers(i,{}),frameRate:a,repeat:-1,delay:500*Math.random()}),this.anims.play("idle"),this.on(b().GameObjects.Events.DESTROY,(()=>{this.freezeEffectTimer&&this.freezeEffectTimer.destroy(),this.pathFindingTask&&this.scene.level.navigator.cancelTask(this.pathFindingTask)}))}update(){return super.update(),this.isCanPursuit()?this.getDistanceToTarget()>this.pathFindTriggerDistance?(this.findPathToTarget(),this.moveByPath(),void(this.isPathPassed=!1)):(this.resetPath(),void(this.isPathPassed=!0)):(this.setVelocity(0,0),void(this.isPathPassed=!1))}freeze(t,e=!1){this.freezeTimestamp=this.scene.getTime()+t,e&&(this.freezeEffectTimer?this.freezeEffectTimer.elapsed=0:(this.setTint(43263),this.freezeEffectTimer=this.scene.time.delayedCall(t,(()=>{this.clearTint(),this.freezeEffectTimer=null}))),this.scene.game.isSettingEnabled(r.EFFECTS)&&new Wn(this,{key:"freeze",texture:Yn.GLOW,params:{duration:200,follow:this,followOffset:this.getBodyOffset(),lifespan:{min:100,max:150},scale:.2,speed:80,tint:56831}}))}isFreezed(){return this.freezeTimestamp>this.scene.getTime()}findPathToTarget(){if(this.pathFindingTask)return;const t=Date.now();if(this.pathFindTimestamp>t)return;if(this.pathToTarget.length>0&&c(this.pathToTarget[this.pathToTarget.length-1],this.scene.player.positionAtMatrix))return;const e=this.positionAtMatrix;this.pathFindTimestamp=t+300,this.pathFindingTask=this.scene.level.navigator.createTask({from:e,to:this.scene.player.positionAtMatrix,grid:this.scene.level.gridCollide,compress:!0},(t=>{if(this.active){if(!t)return this.pathFindingTask=null,void this.emit(xo.PATH_NOT_FOUND,e);this.visible||this.activate(),t.shift(),this.pathToTarget=t,this.pathFindingTask=null,this.isCanPursuit()&&this.moveToTile(),this.drawDebugPath()}}))}activate(){this.setVisible(!0)}getDistanceToTarget(){return b().Math.Distance.BetweenPoints(this.getPositionOnGround(),this.scene.player.getPositionOnGround())}moveTo(t){const e=b().Math.Angle.BetweenPoints(this.getPositionOnGround(),t),i=b().Math.RadToDeg(e);if(this.handleCollide(i))return void this.setVelocity(0,0);const n=this.isFreezed()?.1*this.speed:this.speed,s=this.scene.physics.velocityFromRotation(e,n);this.setVelocity(s.x,s.y)}nextPathTile(){const[t]=this.pathToTarget,e=fs.ToWorldPosition(Object.assign(Object.assign({},t),{z:0})),i=this.getPositionOnGround(),n=Math.sign(this.body.velocity.x),s=Math.sign(this.body.velocity.y);i.x*n>=e.x*n&&i.y*s>=e.y*s&&this.pathToTarget.shift()}resetPath(){this.pathToTarget=[],this.pathFindingTask&&(this.scene.level.navigator.cancelTask(this.pathFindingTask),this.pathFindingTask=null)}moveByPath(){this.pathToTarget.length>0&&(this.nextPathTile(),this.moveToTile())}moveToTile(){const[t]=this.pathToTarget;if(t){const e=fs.ToWorldPosition(Object.assign(Object.assign({},t),{z:0}));this.moveTo(e)}}isCanPursuit(){return!this.live.isDead()&&!this.scene.player.live.isDead()}addDebugPath(){}drawDebugPath(){if(!this.pathDebug)return;this.pathDebug.clear(),this.pathDebug.lineStyle(2,14941187),this.pathDebug.beginPath();const t=[this.positionAtMatrix,...this.pathToTarget];for(let e=1;e<t.length;e++){const i=fs.ToWorldPosition(Object.assign(Object.assign({},t[e-1]),{z:0})),n=fs.ToWorldPosition(Object.assign(Object.assign({},t[e]),{z:0}));this.pathDebug.moveTo(i.x,i.y),this.pathDebug.lineTo(n.x,n.y)}this.pathDebug.closePath(),this.pathDebug.strokePath()}}class To extends bo{constructor(t,{positionAtMatrix:e,texture:i,score:n,multipliers:s}){super(t,{texture:i,positionAtMatrix:e,frameRate:mo[i].frameRate,pathFindTriggerDistance:32,health:Yi({defaultValue:90*s.health*t.game.getDifficultyMultiplier(),scale:.38,level:t.wave.number,retardationLevel:13}),speed:zi({defaultValue:60*s.speed,scale:.1,level:t.wave.number,maxLevel:13})}),this.damageTimer=null,this.isOverlapTarget=!1,t.addEntity(is.ENEMY,this),this.damage=Yi({defaultValue:90*s.damage*t.game.getDifficultyMultiplier(),scale:.22,level:t.wave.number}),this.score=null!=n?n:1,this.gamut=mo[i].size.gamut,this.might=(s.health+s.damage+s.speed)/3,this.body.setCircle(.5*this.width-2),this.body.setOffset(2,2),this.addIndicator({color:14361379,value:()=>this.live.health/this.live.maxHealth}),this.handlePlayerSuperskill(),this.setTilesCollision([An.BUILDING],(t=>{t instanceof ps&&(this.scene.player.activeSuperskills[us.SHIELD]||this.attack(t))})),this.on(xo.PATH_NOT_FOUND,this.onPathNotFound.bind(this)),this.on(b().GameObjects.Events.DESTROY,(()=>{this.damageTimer&&this.damageTimer.destroy()}))}update(){super.update(),this.isOverlapTarget?this.setVelocity(0,0):this.isPathPassed&&this.moveTo(this.scene.player.getPositionOnGround()),this.isOverlapTarget=!1}activate(){super.activate(),this.addSpawnEffect()}overlapTarget(){this.isOverlapTarget=!0}attack(t){this.isFreezed()||t.live.isDead()||(t.live.damage(this.damage),this.freeze(1e3))}onPathNotFound(t){!function(t,e){const i=t.findIndex((t=>c(t,e)));-1!==i&&t.splice(i,1)}(this.scene.enemySpawnPositions,t);const e=this.scene.getEnemySpawnPosition(),i=fs.ToWorldPosition(Object.assign(Object.assign({},e),{z:0}));this.setPosition(i.x,i.y)}onDead(){const t=Yi({defaultValue:10*this.might,scale:.15,level:this.scene.wave.number});this.scene.player.giveExperience(t),this.scene.player.giveScore(this.score),this.scene.player.incrementKills(),this.addBloodEffect(),super.onDead()}addOngoingDamage(t,e){const i=t/(e/100);this.damageTimer=this.scene.time.addEvent({delay:100,repeat:e/100,callback:()=>{var t;this.live.damage(i),0===(null===(t=this.damageTimer)||void 0===t?void 0:t.repeatCount)&&(this.damageTimer.destroy(),this.damageTimer=null)}})}addFireEffect(t){this.scene.game.isSettingEnabled(r.EFFECTS)&&new Wn(this,{key:"fire",texture:Yn.GLOW,params:{follow:this,followOffset:this.getBodyOffset(),duration:t,color:[16436258,16291840,16266752,10421252],colorEase:"quad.out",lifespan:25*this.displayWidth,angle:{min:-100,max:-80},scale:{start:1.25*this.displayWidth/100,end:0,ease:"sine.out"},speed:80,advance:200,blendMode:"ADD"}})}addBloodEffect(){var t;if(!(null===(t=this.currentBiome)||void 0===t?void 0:t.solid)||!this.scene.game.isSettingEnabled(r.EFFECTS)||this.scene.game.isFlagEnabled(o.NO_BLOOD))return;const e=this.getPositionOnGround(),i=new Gn(this.scene,{texture:zn.BLOOD,position:e,staticFrame:b().Math.Between(0,3),depth:fs.GetDepth(e.y,0,.5*Fn.height)});this.scene.level.effectsOnGround.push(i)}addSpawnEffect(){this.scene.game.isSettingEnabled(r.EFFECTS)&&new Wn(this,{key:"spawn",texture:Yn.GLOW,positionAtWorld:this.body.center,params:{duration:400,lifespan:{min:150,max:250},scale:{start:.25,end:0},speed:100,quantity:2,tint:0}});const t=this.scale;this.freeze(750),this.container.setAlpha(0),this.setScale(.1),this.scene.tweens.add({targets:this,scale:t,duration:750,onComplete:()=>{this.container.setAlpha(1)}})}handlePlayerSuperskill(){const t=t=>{const{duration:e}=Or[t];switch(t){case us.FROST:this.freeze(e,!0);break;case us.FIRE:this.addFireEffect(e),this.addOngoingDamage(.5*this.live.maxHealth,e)}};this.scene.events.on(ts.USE_SUPERSKILL,t),this.on(b().GameObjects.Events.DESTROY,(()=>{this.scene.events.off(ts.USE_SUPERSKILL,t)}))}}Di(go,(t=>mo[t].size));class wo extends To{constructor(t,e){super(t,Object.assign(Object.assign({},e),{texture:go.RedCandle,multipliers:{health:.35,damage:.1,speed:1}}))}}wo.SpawnWaveRange=[1,4];class Eo extends To{constructor(t,e){super(t,Object.assign(Object.assign({},e),{texture:go.DEMON,multipliers:{health:.4,damage:.2,speed:.8}}))}}Eo.SpawnWaveRange=[2,7];class So extends To{constructor(t,e){super(t,Object.assign(Object.assign({},e),{texture:go.IMPURE,multipliers:{health:1.3,damage:.7,speed:.9}}))}update(){super.update();const t=this.scene.builder.getBuildingsByVariant(pn.RADAR).some((t=>t.actionsAreaContains(this)));this.setAlpha(t?1:.5)}}So.SpawnWaveRange=[8];class Ao extends To{constructor(t,e){super(t,Object.assign(Object.assign({},e),{texture:go.OVERLORD,multipliers:{health:1,damage:.5,speed:.8}}));const i=Yi({defaultValue:50*t.game.getDifficultyMultiplier(),scale:.38,level:t.wave.number,retardationLevel:15});this.live.setMaxArmour(i),this.live.setArmour(i),this.addIndicator({color:54527,value:()=>this.live.armour/this.live.maxArmour})}}Ao.SpawnWaveRange=[6];class _o extends To{constructor(t,e){super(t,Object.assign(Object.assign({},e),{texture:go.RISPER,multipliers:{health:.7,damage:.4,speed:1}}))}}_o.SpawnWaveRange=[4,9];class Co extends To{constructor(t,e){super(t,Object.assign(Object.assign({},e),{texture:go.SPIKE,multipliers:{health:.7,damage:.3,speed:.8}}))}}Co.SpawnWaveRange=[3,9];class Ro extends To{constructor(t,e){super(t,Object.assign(Object.assign({},e),{texture:go.TERMER,multipliers:{health:1.4,damage:1,speed:.9}}))}}Ro.SpawnWaveRange=[11];class Po extends To{constructor(t,e){super(t,Object.assign(Object.assign({},e),{texture:go.UNDEAD,multipliers:{health:2,damage:.4,speed:.7}}))}}Po.SpawnWaveRange=[7];const Mo={[vo.RedCandle]:wo,[vo.DEMON]:Eo,[vo.RISPER]:_o,[vo.SPIKE]:Co,[vo.OVERLORD]:Ao,[vo.BOSS]:class extends To{constructor(t,e){super(t,Object.assign(Object.assign({},e),{texture:go.BOSS,score:10,multipliers:{health:7,damage:1,speed:.5}}))}},[vo.UNDEAD]:Po,[vo.IMPURE]:So,[vo.TERMER]:Ro};var Oo,Lo;!function(t){t.CRYSTAL="crystal"}(Oo||(Oo={})),function(t){t.PICKUP="crystal/pickup"}(Lo||(Lo={}));class Do extends b().GameObjects.Image{constructor(t,{positionAtMatrix:e,variant:i=0}){const n=Object.assign(Object.assign({},e),{z:1}),s=fs.ToWorldPosition(n);super(t,s.x,s.y,Oo.CRYSTAL,i),this.tileType=An.CRYSTAL,t.addEntity(is.CRYSTAL,this),this.setDepth(fs.GetTileDepth(s.y,n.z)),this.setOrigin(.5,Fn.origin),this.scene.level.putTile(this,n)}pickup(){const t=this.getResourcesAmount();this.scene.player.giveResources(t),this.scene.sound.play(Lo.PICKUP),this.destroy()}getResourcesAmount(){const t=zi({defaultValue:4,scale:1,level:this.scene.wave.number});return b().Math.Between(t-Math.floor(.25*t),t+Math.floor(.25*t))}}Oi(Lo),Di(Oo,Fn);const ko={width:44,height:44,gamut:4};var Fo,Io;!function(t){t.ASSISTANT="assistant"}(Fo||(Fo={})),function(t){t.DEAD="assistant/dead",t.DAMAGE_1="assistant/damage_1",t.DAMAGE_2="assistant/damage_2"}(Io||(Io={}));class Bo extends bo{constructor(t,{owner:e,positionAtMatrix:i,speed:n,health:s,level:r}){super(t,{texture:Fo.ASSISTANT,positionAtMatrix:i,speed:n,health:s,pathFindTriggerDistance:40}),this.nextAttackTimestamp=0,this.level=1,t.add.existing(this),this.shot=new xs(t,{maxDistance:70,speed:500,damage:15},{scale:.75}),this.shot.setInitiator(this,(()=>this.body.center)),this.shotDefaultParams=this.shot.params,this.gamut=ko.gamut,this.owner=e,this.level=r,this.body.setCircle(this.width/2,0,1),this.addIndicator({color:13696847,value:()=>this.live.health/this.live.maxHealth,size:20}),this.handleWaveComplete(),this.activate(),this.addCollider(is.ENEMY,"collider",(t=>{t.attack(this)})),this.addCollider(is.ENEMY,"overlap",(t=>{t.overlapTarget()}))}update(){super.update(),this.isPathPassed&&this.setVelocity(0,0),this.isCanAttack()&&this.attack()}onDamage(){this.scene.game.sound.play(Phaser.Utils.Array.GetRandom([Io.DAMAGE_1,Io.DAMAGE_2])),super.onDamage()}onDead(){this.scene.sound.play(Io.DEAD),this.scene.game.isSettingEnabled(r.EFFECTS)&&new Gn(this.scene,{texture:zn.EXPLOSION,position:this.body.center,depth:this.depth+1}),super.onDead()}isCanAttack(){return this.nextAttackTimestamp<this.scene.getTime()&&!this.owner.live.isDead()}attack(){const t=this.getTarget();if(!t)return;this.shot.params=this.getShotCurrentParams(),this.shot.shoot(t);const e=this.scene.getTime(),i=Yi({defaultValue:1e3,scale:-.15,level:this.level});this.nextAttackTimestamp=e+Math.max(i,200)}getTarget(){const t=Yi({defaultValue:70,scale:.15,level:this.level});return d(this.scene.getEntities(is.ENEMY).filter((e=>{if(e.alpha<1||e.live.isDead())return!1;const i=this.getPositionOnGround(),n=e.getPositionOnGround();return Phaser.Math.Distance.BetweenPoints(i,n)<=t&&!this.scene.level.hasTilesBetweenPositions(i,n)})),this)}getShotCurrentParams(){return{maxDistance:this.shotDefaultParams.maxDistance&&Yi({defaultValue:this.shotDefaultParams.maxDistance,scale:.15,level:this.level}),speed:this.shotDefaultParams.speed&&Yi({defaultValue:this.shotDefaultParams.speed,scale:.1,level:this.level}),damage:this.shotDefaultParams.damage&&Yi({defaultValue:this.shotDefaultParams.damage,scale:.55,level:this.level})}}handleWaveComplete(){const t=()=>{this.live.heal()};this.scene.wave.on(Qi.COMPLETE,t),this.on(Phaser.Scenes.Events.DESTROY,(()=>{this.scene.wave.off(Qi.COMPLETE,t)}))}}Oi(Io),Di(Fo,ko);class No extends yo{get experience(){return this._experience}set experience(t){this._experience=t}get resources(){return this._resources}set resources(t){this._resources=t}get score(){return this._score}set score(t){this._score=t}get kills(){return this._kills}set kills(t){this._kills=t}get upgradeLevel(){return this._upgradeLevel}set upgradeLevel(t){this._upgradeLevel=t}get activeSuperskills(){return this._activeSuperskills}set activeSuperskills(t){this._activeSuperskills=t}constructor(t,e){super(t,Object.assign(Object.assign({},e),{texture:as.PLAYER,health:100,speed:90})),this._experience=0,this._resources=70,this._score=0,this._kills=0,this._upgradeLevel={[hs.MAX_HEALTH]:1,[hs.SPEED]:1,[hs.BUILD_AREA]:1,[hs.ASSISTANT]:1},this.direction=0,this.isMoving=!1,this.dustEffect=null,this._activeSuperskills={},t.add.existing(this),this.gamut=Sr.gamut,this.registerKeyboard(),this.registerAnimations(),this.addDustEffect(),this.addIndicator({color:13696847,value:()=>this.live.health/this.live.maxHealth,size:20}),this.body.setSize(14,26),this.setTilesGroundCollision(!0),this.setTilesCollision([An.MAP,An.BUILDING,An.CRYSTAL],(t=>{t instanceof Do&&t.pickup()})),this.addCollider(is.ENEMY,"collider",(t=>{t.attack(this)})),this.addCollider(is.ENEMY,"overlap",(t=>{t.overlapTarget()})),this.scene.wave.on(Qi.COMPLETE,this.onWaveComplete.bind(this))}update(){super.update(),this.live.isDead()||(this.dustEffect&&this.dustEffect.emitter.setDepth(this.depth-1),this.updateDirection(),this.updateVelocity())}giveScore(t){this.live.isDead()||(this.score+=t)}giveExperience(t){this.live.isDead()||(this.experience+=Math.round(t/this.scene.game.getDifficultyMultiplier()))}giveResources(t){this.live.isDead()||(this.resources+=t,this.scene.game.tutorial.state(g.RESOURCES)===v.IN_PROGRESS&&this.scene.game.tutorial.complete(g.RESOURCES))}takeResources(t){this.resources-=t,this.resources<20&&0===this.scene.builder.getBuildingsByVariant(pn.GENERATOR).length&&this.scene.game.tutorial.start(g.RESOURCES)}incrementKills(){this.kills++}getSuperskillCost(t){return zi({defaultValue:Or[t].cost,scale:.15,level:this.scene.wave.number})}useSuperskill(t){if(this.activeSuperskills[t]||!this.scene.wave.isGoing)return;const e=this.getSuperskillCost(t);this.resources<e?this.scene.game.screen.notice(Bi.ERROR,"Not enough resources"):(this.activeSuperskills[t]=!0,this.takeResources(e),this.scene.events.emit(ts.USE_SUPERSKILL,t),this.scene.time.addEvent({delay:Or[t].duration,callback:()=>{delete this.activeSuperskills[t]}}))}getExperienceToUpgrade(t){return Yi({defaultValue:Mr[t].experience,scale:.75,level:this.upgradeLevel[t],roundTo:10})}getUpgradeNextValue(t){const e=this.upgradeLevel[t]+1;switch(t){case hs.MAX_HEALTH:return Yi({defaultValue:100,scale:.55,level:e,roundTo:10});case hs.SPEED:return Yi({defaultValue:90,scale:.05,level:e});case hs.BUILD_AREA:return Yi({defaultValue:140,scale:.13,level:e});case hs.ASSISTANT:return e}}upgrade(t){const e=this.getExperienceToUpgrade(t);if(this.experience<e)return void this.scene.game.screen.notice(Bi.ERROR,"Not enough experience");const i=this.getUpgradeNextValue(t);switch(t){case hs.MAX_HEALTH:{const t=i-this.live.maxHealth;this.live.setMaxHealth(i),this.live.addHealth(t),this.scene.assistant&&(this.scene.assistant.live.setMaxHealth(i),this.scene.assistant.live.addHealth(t));break}case hs.SPEED:this.speed=i,this.scene.assistant&&(this.scene.assistant.speed=i);break;case hs.BUILD_AREA:this.scene.builder.setBuildAreaRadius(i);break;case hs.ASSISTANT:this.scene.assistant&&(this.scene.assistant.level=i)}this.experience-=e,this.upgradeLevel[t]++,this.scene.sound.play(os.UPGRADE),this.scene.game.tutorial.complete(g.UPGRADE_SKILL)}onDamage(){this.scene.camera.shake();const t=b().Utils.Array.GetRandom([os.DAMAGE_1,os.DAMAGE_2,os.DAMAGE_3]);0===this.scene.game.sound.getAll(t).length&&this.scene.game.sound.play(t),super.onDamage()}onDead(){this.scene.sound.play(os.DEAD),this.setVelocity(0,0),this.stopMovement(),this.scene.tweens.add({targets:[this,this.container],alpha:0,duration:250})}onWaveComplete(t){const e=Yi({defaultValue:50,scale:.2,level:t});this.giveExperience(e),this.giveScore(10*t),this.live.heal()}registerKeyboard(){var t;this.movementKeys=null===(t=this.scene.input.keyboard)||void 0===t?void 0:t.addKeys("W,A,S,D,UP,LEFT,DOWN,RIGHT")}updateVelocity(){var t,e;if(!this.isMoving)return void this.setVelocity(0,0);if(this.handleCollide(this.direction))return void this.setVelocity(0,0);const i=null!==(e=null===(t=this.currentBiome)||void 0===t?void 0:t.friction)&&void 0!==e?e:1,n=this.speed/i,s=this.scene.physics.velocityFromAngle(this.direction,n);this.setVelocity(s.x,s.y)}updateDirection(){const t=this.getKeyboardSingleDirection([["LEFT","A"],["RIGHT","D"]]),e=this.getKeyboardSingleDirection([["UP","W"],["DOWN","S"]]),i=`${t}|${e}`,n=this.isMoving,s=this.direction;console.log(i),0!==t||0!==e?(this.isMoving=!0,this.direction=Lr[i]):this.isMoving=!1,n===this.isMoving&&s===this.direction||(this.isMoving?(this.anims.play(Dr[i]),n||(this.dustEffect&&this.dustEffect.emitter.start(),this.scene.game.sound.play(os.WALK,{loop:!0,rate:1.8}))):this.stopMovement())}stopMovement(){this.isMoving=!1,this.anims.currentAnim&&(this.anims.setProgress(0),this.anims.stop()),this.dustEffect&&this.dustEffect.emitter.stop(),this.scene.sound.stopByKey(os.WALK)}getKeyboardSingleDirection(t){const e=t.find((([t,e])=>this.movementKeys[t].isDown||this.movementKeys[e].isDown));return ls[e?e[0]:"NONE"]}addDustEffect(){this.scene.game.isSettingEnabled(r.EFFECTS)&&(this.dustEffect=new Wn(this,{key:"dust",texture:Yn.BIT,params:{follow:this,followOffset:{x:0,y:-this.gamut*this.scaleY*.5},lifespan:{min:150,max:300},scale:.6,speed:10,frequency:150,alpha:{start:.75,end:0},emitting:!1}}))}registerAnimations(){Object.values(Dr).forEach(((t,e)=>{this.anims.create({key:t,frames:this.anims.generateFrameNumbers(as.PLAYER,{}),frameRate:8,repeat:-1})}))}}Oi(os),Di(as,Sr);class Uo{constructor(t){this.scene=t}zoomOut(){this.scene.cameras.main.zoomTo(1,1e4)}shake(){this.scene.cameras.main.shake(100,5e-4)}focusOn(t){const e=this.scene.cameras.main;e.resetFX(),e.startFollow(t),e.setZoom(4),e.zoomTo(2,200)}focusOnLevel(){console.log("focusOnLevel");const t=this.scene.cameras.main,e=this.scene.level.size-1,i=fs.ToWorldPosition({x:0,y:e,z:0}),n=fs.ToWorldPosition({x:e,y:0,z:0});t.setZoom(2),t.pan(i.x+this.scene.sys.canvas.width/2,i.y,0),setTimeout((()=>{t.pan(n.x-this.scene.sys.canvas.width/2,n.y,12e4)}),0)}addZoomControl(){const t=this.scene.cameras.main;this.scene.input.on(b().Input.Events.POINTER_WHEEL,(e=>{const i=t.zoom-e.deltaY/500,n=Math.min(2,Math.max(1,i));t.zoomTo(n,10)}))}}const zo=ci.div`
  margin-top: 80px;
  position: absolute;
  left: 50%;
`,Yo=ci.div`
  color: #fff;
  font-family: ${li.PIXEL_TEXT};
  font-size: 11px;
  line-height: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
`,Xo=ci.div`
  margin: 1px 0 0 6px;
`,Go=ci.div`
  padding: 6px 9px;
  background: ${hi.BLACK_TRANSPARENT_75};
  transform: translateX(-50%);
  pointer-events: all;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  ${t=>t.$disabled&&ri`
      ${Yo}, ${Xo} {
        opacity: 0.7;
      }
    `}
  &:not(:last-child) {
    margin-bottom: 3px;
  }
  &:hover {
    cursor: pointer;
    background: ${hi.BLACK};
  }
`,Wo=({list:t})=>C.createElement(zo,null,t.map((t=>C.createElement(Go,{key:t.label,onClick:t.onClick,$disabled:t.disabled},C.createElement(Yo,null,t.label),t.cost&&C.createElement(Xo,null,C.createElement(Us,{type:"resources",value:t.cost,size:"small"})))))),Vo=ci.div`
  position: absolute;
  width: 260px;
  transform: translate(-50%, -100%);
  margin-top: -32px;
  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 100%);
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 15px solid ${hi.BLUE_TRANSPARENT};
  }
`,Ho=ci.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  background: ${hi.BLUE_DARK_TRANSPARENT};
  border-radius: 10px 10px 0 0;
`,jo=ci.div`
  background: ${hi.BLUE_TRANSPARENT};
  padding: 16px;
  border-radius: 0 0 10px 10px;
`,$o=ci.div`
  font-family: ${li.PIXEL_LABEL};
  color: ${oi.SUCCESS};
  font-size: 16px;
  line-height: 16px;
`,Ko=ci.div`
  display: grid;
  grid-template-columns: repeat(${4}, 1fr);
  grid-gap: 5px;
`;Ko.Progress=ci.div`
  height: 12px;
  transition: all 0.2s ease-out;
  background: ${hi.BLACK};
  box-shadow: 0 6px 0 #222 inset;
  ${t=>t.$active&&ri`
      background: ${hi.SUCCESS};
      box-shadow: 0 6px 0 ${hi.WHITE_TRANSPARENT_15} inset;
    `}
`;const qo=ci.div`
  background: ${hi.BLACK};
  position: relative;
  margin-bottom: 6px;
`;qo.Progress=ci.div`
  height: 14px;
  background: ${hi.ERROR};
  box-shadow: 0 7px 0 ${hi.WHITE_TRANSPARENT_15} inset;
  transition: width 0.3s ease-out;
`,qo.Value=ci.div`
  position: absolute;
  font-family: ${li.PIXEL_LABEL};
  color: #fff;
  font-size: 10px;
  line-height: 10px;
  text-shadow: 1px 1px 0 #000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  padding-bottom: 2px;
`;const Zo=()=>{const t=(0,_.useScene)(n.WORLD),[e,i]=(0,C.useState)(null),[s,r]=(0,C.useState)(1),[a,o]=(0,C.useState)(1),[h,l]=(0,C.useState)(1),[u,c]=(0,C.useState)([]),[d,f]=(0,C.useState)([]),p=t=>{i(t)},g=()=>{i(null),c([]),f([])};return(0,C.useEffect)((()=>(t.events.on(ts.SELECT_BUILDING,p),t.events.on(ts.UNSELECT_BUILDING,g),()=>{t.events.off(ts.SELECT_BUILDING,p),t.events.off(ts.UNSELECT_BUILDING,g)})),[]),(0,_.useSceneUpdate)(t,(()=>{(null==e?void 0:e.active)&&(r(e.upgradeLevel),o(e.live.health),l(e.live.maxHealth),c((t=>(0,_.getModifiedArray)(t,e.getInfo(),["value","attention"]))),f((t=>(0,_.getModifiedArray)(t,e.getControls(),["label","cost"]))))}),[e]),e&&C.createElement(_.RelativePosition,{x:e.x,y:e.y},C.createElement(Vo,null,C.createElement(Ho,null,C.createElement($o,null,e.getMeta().Name)),C.createElement(jo,null,C.createElement(qo,null,C.createElement(qo.Progress,{style:{width:a/h*100+"%"}}),C.createElement(qo.Value,null,`${a} HP`)),C.createElement(Ko,null,Array.from({length:4}).map(((t,e)=>C.createElement(Ko.Progress,{key:e,$active:e<s})))),C.createElement(Fs,{list:u})),C.createElement(Wo,{list:d})))},Qo=ci.div`
  position: absolute;
`,Jo=()=>{const t=(0,_.useScene)(n.WORLD),[e,i]=(0,C.useState)(null),s=(0,C.useRef)(null),r=t=>{i(t)},a=()=>{i(null)};return(0,C.useEffect)((()=>(t.events.on(ts.SHOW_HINT,r),t.events.on(ts.HIDE_HINT,a),()=>{t.events.off(ts.SHOW_HINT,r),t.events.off(ts.HIDE_HINT,a)})),[]),e&&C.createElement(_.RelativePosition,{x:e.position.x,y:e.position.y},C.createElement(Qo,{ref:s},C.createElement(dn,{side:e.side},e.text)))},th=()=>C.createElement(C.Fragment,null,C.createElement(Zo,null),C.createElement(Jo,null));th.displayName="WorldUI";class eh extends(w()){get isBuild(){return this._isBuild}set isBuild(t){this._isBuild=t}get variant(){return this._variant}set variant(t){this._variant=t}get radius(){return this._radius}set radius(t){this._radius=t}constructor(t){super(),this._isBuild=!1,this.selectedBuilding=null,this.buildArea=null,this.buildingPreview=null,this.buildings={},this._variant=null,this._radius=140,this.scene=t,this.setMaxListeners(0),this.handleKeyboard(),this.handleTutorial(),this.scene.player.live.on(Un.DEAD,(()=>{this.closeBuilder()}))}update(){this.isCanBuild()?this.isBuild?(this.updateBuildAreaPosition(),this.updateBuildingPreview()):this.openBuilder():this.isBuild&&this.closeBuilder()}setBuildingVariant(t){if(this.variant===t||!this.isBuildingAllowByTutorial(t))return;const e=Cs[t];this.isBuildingAllowByWave(t)?(this.scene.sound.play(mn.SELECT),this.variant=t,this.buildingPreview&&this.buildingPreview.setTexture(e.Texture)):this.scene.game.screen.notice(Bi.ERROR,`Will be available on ${e.AllowByWave} wave`)}unsetBuildingVariant(){null!==this.variant&&(this.scene.sound.play(mn.UNSELECT),this.scene.game.tutorial.complete(g.STOP_BUILD),this.clearBuildingVariant())}addFoundation(t){const e=this.scene.level.getBiome(Mn.RUBBLE);if(e)for(let i=t.y-1;i<=t.y+1;i++)for(let n=t.x-1;n<=t.x+1;n++){const t=this.scene.level.map.getAt({x:n,y:i});if(t&&t.solid&&t.type!==Mn.RUBBLE){const t=Array.isArray(e.tileIndex)?b().Math.Between(...e.tileIndex):e.tileIndex;this.scene.level.groundLayer.putTileAt(t,n,i),this.scene.level.map.replaceAt({x:n,y:i},e);const s=this.scene.level.getTileWithType({x:n,y:i,z:1},An.SCENERY);s&&s.destroy(),this.scene.level.effectsOnGround.forEach((t=>{c(fs.ToMatrixPosition(t),{x:n,y:i})&&t.destroy()}))}}}isBuildingAllowByTutorial(t){if(!this.scene.game.tutorial.isEnabled)return!0;const e=[{step:g.BUILD_TOWER_FIRE,variant:pn.TOWER_FIRE},{step:g.BUILD_GENERATOR,variant:pn.GENERATOR}].find((t=>this.scene.game.tutorial.state(t.step)===v.IN_PROGRESS));return!e||e.variant===t}isBuildingAllowByWave(t){const e=Cs[t].AllowByWave;return!e||e<=this.scene.wave.number}getBuildingLimit(t){var e;if(!Cs[t].Limit)return null;const i=function(t,e){let i=0,n=t;for(let t=1;t<=e;t++)t===n&&(i++,n=t+i);return i}(null!==(e=Cs[t].AllowByWave)&&void 0!==e?e:1,this.scene.wave.number);return i}getBuildingsByVariant(t){var e;return null!==(e=this.buildings[t])&&void 0!==e?e:[]}getAssumedPosition(){return fs.ToMatrixPosition({x:this.scene.input.activePointer.worldX,y:this.scene.input.activePointer.worldY})}onMouseClick(t){0===t.button?this.build():2===t.button&&this.unsetBuildingVariant()}openBuilder(){this.isBuild||(this.createBuildArea(),this.createBuildingPreview(),this.scene.input.on(b().Input.Events.POINTER_UP,this.onMouseClick,this),this.isBuild=!0,this.emit(es.BUILD_START))}closeBuilder(){this.isBuild&&(this.scene.input.off(b().Input.Events.POINTER_UP,this.onMouseClick),this.destroyBuildingPreview(),this.destroyBuildArea(),this.isBuild=!1,this.emit(es.BUILD_STOP))}clearBuildingVariant(){this.closeBuilder(),this.variant=null}switchBuildingVariant(t){const e=Object.values(pn)[t];e&&(this.variant===e?this.unsetBuildingVariant():this.setBuildingVariant(e))}isCanBuild(){return null!==this.variant&&!this.scene.player.live.isDead()}isAllowBuild(){if(!this.buildArea)return!1;const t=this.getAssumedPosition(),e=fs.ToWorldPosition(Object.assign(Object.assign({},t),{z:0})),i=this.buildArea.getTopLeft();if(!this.buildArea.geom.contains(e.x-i.x,e.y-i.y))return!1;const n=this.scene.level.map.getAt(t);if(!(null==n?void 0:n.solid))return!1;if(!this.scene.level.isFreePoint(Object.assign(Object.assign({},t),{z:1})))return!1;let s=this.scene.player.getAllPositionsAtMatrix();return this.scene.getEntities(is.NPC).forEach((t=>{s=s.concat(t.getAllPositionsAtMatrix())})),!!s.every((e=>!c(t,e)))}build(){if(!this.variant||!this.isAllowBuild())return;const t=Cs[this.variant];if(this.isBuildingLimitReached(this.variant))return void this.scene.game.screen.notice(Bi.ERROR,`You have maximum ${t.Name}`);if(this.scene.player.resources<t.Cost)return void this.scene.game.screen.notice(Bi.ERROR,"Not enough resources");let e=this.buildings[this.variant];const i=new t(this.scene,{positionAtMatrix:this.getAssumedPosition()});e?e.push(i):(e=[i],this.buildings[this.variant]=e),i.on(b().GameObjects.Events.DESTROY,(()=>{if(e){const t=e.indexOf(i);-1!==t&&e.splice(t,1)}})),this.scene.player.takeResources(t.Cost),this.scene.player.giveExperience(30),this.scene.sound.play(mn.BUILD)}isBuildingLimitReached(t){const e=this.getBuildingLimit(t);return!!e&&this.getBuildingsByVariant(t).length>=e}createBuildArea(){this.buildArea=this.scene.add.ellipse(),this.buildArea.setStrokeStyle(2,16777215,.4),this.updateBuildAreaPosition(),this.updateBuildAreaSize()}setBuildAreaRadius(t){this.radius=t,this.buildArea&&this.updateBuildAreaSize()}updateBuildAreaSize(){this.buildArea&&(this.buildArea.setSize(2*this.radius,2*this.radius*Fn.persperctive),this.buildArea.updateDisplayOrigin(),this.buildArea.setDepth(Sn))}updateBuildAreaPosition(){if(!this.buildArea)return;const t=this.scene.player.getPositionOnGround();this.buildArea.setPosition(t.x,t.y)}destroyBuildArea(){this.buildArea&&(this.buildArea.destroy(),this.buildArea=null)}createBuildingPreview(){if(!this.variant)return;const t=Cs[this.variant];this.buildingPreview=this.scene.add.image(0,0,t.Texture),this.buildingPreview.setOrigin(.5,Fn.origin),this.updateBuildingPreview()}updateBuildingPreview(){if(!this.buildingPreview)return;const t=this.getAssumedPosition(),e=Object.assign(Object.assign({},t),{z:1}),i=fs.ToWorldPosition(e),n=fs.GetTileDepth(i.y,e.z)+1;this.buildingPreview.setPosition(i.x,i.y),this.buildingPreview.setDepth(n),this.buildingPreview.setAlpha(this.isAllowBuild()?1:.25)}destroyBuildingPreview(){this.buildingPreview&&(this.buildingPreview.destroy(),this.buildingPreview=null)}handleKeyboard(){var t;null===(t=this.scene.input.keyboard)||void 0===t||t.on(b().Input.Keyboard.Events.ANY_KEY_UP,(t=>{Number(t.key)&&this.switchBuildingVariant(Number(t.key)-1)}))}handleTutorial(){this.scene.game.tutorial.bind(g.BUILD_TOWER_FIRE,{beg:()=>{this.scene.setTimePause(!0)},end:()=>{this.scene.setTimePause(!1),this.clearBuildingVariant()}}),this.scene.game.tutorial.bind(g.BUILD_GENERATOR,{beg:()=>{this.scene.setTimePause(!0)},end:()=>{this.scene.setTimePause(!1)}}),this.scene.game.screen.events.on(b().Interface.Events.MOUNT,(()=>{this.scene.game.tutorial.start(g.BUILD_TOWER_FIRE)}))}}class ih extends(w()){get isGoing(){return this._isGoing}set isGoing(t){this._isGoing=t}get isPeaceMode(){return this._isPeaceMode}set isPeaceMode(t){this._isPeaceMode=t}get number(){return this._number}set number(t){this._number=t}constructor(t){super(),this._isGoing=!1,this._isPeaceMode=!1,this._number=1,this.spawnedEnemiesCount=0,this.enemiesMaxCount=0,this.lastSpawnedEnemyVariant=null,this.nextWaveTimestamp=0,this.nextSpawnTimestamp=0,this.alarmInterval=null,this.scene=t,this.setMaxListeners(0),this.handleKeyboard(),this.runTimeleft()}getTimeleft(){const t=this.scene.getTime();return Math.max(0,this.nextWaveTimestamp-t)}update(){const t=this.scene.getTime();if(this.isGoing)this.spawnedEnemiesCount<this.enemiesMaxCount?this.nextSpawnTimestamp<=t&&this.spawnEnemy():0===this.scene.getEntitiesGroup(is.ENEMY).getTotalUsed()&&this.complete();else if(!this.isPeaceMode){const e=this.nextWaveTimestamp-t;e<=0?this.start():e<=3e3&&!this.scene.isTimePaused()&&!this.alarmInterval&&(this.scene.sound.play(Ji.TICK),this.alarmInterval=setInterval((()=>{this.scene.sound.play(Ji.TICK)}),1e3))}}getEnemiesLeft(){const t=this.scene.getEntitiesGroup(is.ENEMY).getTotalUsed(),e=this.spawnedEnemiesCount-t;return this.enemiesMaxCount-e}skipTimeleft(){if(this.isGoing||this.scene.isTimePaused())return;const t=this.scene.getTime(),e=this.nextWaveTimestamp-t,i=Math.floor(this.scene.getResourceExtractionSpeed()*(e/1e3));this.scene.player.giveResources(i),this.nextWaveTimestamp=t}runTimeleft(){const t=zi({defaultValue:1e4,scale:.5,level:this.number,roundTo:1e3});this.nextWaveTimestamp=this.scene.getTime()+t}start(){var t;this.isGoing=!0,this.nextSpawnTimestamp=0,this.spawnedEnemiesCount=0,this.enemiesMaxCount=Ui((t={defaultValue:4,scale:.27,level:this.number}).defaultValue*Math.pow(t.level,t.scale+1),t.roundTo),this.alarmInterval&&(clearInterval(this.alarmInterval),this.alarmInterval=null),this.scene.sound.play(Ji.START),this.emit(Qi.START,this.number)}complete(){const t=this.number;this.isGoing=!1,this.number++,this.runTimeleft(),this.scene.game.screen.notice(Bi.INFO,`Wave ${t} completed`),this.scene.sound.play(Ji.COMPLETE),this.emit(Qi.COMPLETE,t),this.scene.level.looseEffects(),2===this.number?(this.scene.game.tutorial.start(g.UPGRADE_SKILL),this.scene.game.tutorial.start(g.UPGRADE_BUILDING)):3===this.number?this.scene.game.tutorial.start(g.BUILD_AMMUNITION):8===this.number&&this.scene.game.tutorial.start(g.BUILD_RADAR)}spawnEnemy(){const t=this.getEnemyVariant();if(!t)return;this.scene.spawnEnemy(t);const e=Yi({defaultValue:2300,scale:-.035,level:this.number});this.nextSpawnTimestamp=this.scene.getTime()+Math.max(e,500),this.spawnedEnemiesCount++}getEnemyVariant(){if(this.number%5==0&&this.spawnedEnemiesCount<Math.ceil(this.number/5))return vo.BOSS;const t=[];return f(Mo,((e,i)=>{if(e!==this.lastSpawnedEnemyVariant&&i.SpawnWaveRange){const[n,s]=i.SpawnWaveRange;this.number>=n&&(!s||this.number<=s)&&t.push(e)}})),t.length>0&&(this.lastSpawnedEnemyVariant=b().Utils.Array.GetRandom(t)),this.lastSpawnedEnemyVariant}handleKeyboard(){var t;null===(t=this.scene.input.keyboard)||void 0===t||t.on("keyup-N",(()=>{this.skipTimeleft()}))}}Oi(Ji);class nh extends Ci{get player(){return this._player}set player(t){this._player=t}get assistant(){return this._assistant}set assistant(t){this._assistant=t}get level(){return this._level}set level(t){this._level=t}get wave(){return this._wave}set wave(t){this._wave=t}get builder(){return this._builder}set builder(t){this._builder=t}get camera(){return this._camera}set camera(t){this._camera=t}get deltaTime(){return this._deltaTime}set deltaTime(t){this._deltaTime=t}constructor(){super(n.WORLD),this._assistant=null,this.enemySpawnPositions=[],this.enemySpawnPositionsAnalog=[],this.currentHintId=null,this._deltaTime=1}create(t){var e;this.input.setPollAlways(),this.lifecyle=this.time.addEvent({delay:Number.MAX_SAFE_INTEGER,loop:!0}),this.level=new fs(this,null!==(e=t.planet)&&void 0!==e?e:Cn.EARTH),this.camera=new Uo(this),this.generateEnemySpawnPositions()}start(){new _.Interface(this,th),this.addEntityGroups(),this.camera.addZoomControl(),this.wave=new ih(this),this.addPlayer(),this.addAssistant(),this.addCrystals(),this.builder=new eh(this)}update(t,e){this.game.isStarted&&(this.deltaTime=e,this.player.update(),this.builder.update(),this.wave.update())}showHint(t){return this.currentHintId=Zn(),this.events.emit(ts.SHOW_HINT,t),this.currentHintId}hideHint(t){t&&t!==this.currentHintId||(this.events.emit(ts.HIDE_HINT),this.currentHintId=null)}getTime(){return Math.floor(this.lifecyle.getElapsed())}isTimePaused(){return this.lifecyle.paused}setTimePause(t){this.lifecyle.paused=t}getResourceExtractionSpeed(){return this.builder.getBuildingsByVariant(pn.GENERATOR).reduce(((t,e)=>t+1/e.getActionsDelay()*1e3),0)}addEntity(t,e){this.add.existing(e),this.entityGroups[t].add(e)}getEntitiesGroup(t){return this.entityGroups[t]}getEntities(t){return this.entityGroups[t].getChildren()}spawnEnemy(t){return new(0,Mo[t])(this,{positionAtMatrix:this.getEnemySpawnPosition()})}generateEnemySpawnPositions(){this.enemySpawnPositions=this.level.readSpawnPositions(_n.ENEMY,4),this.enemySpawnPositionsAnalog=[];for(let t=0;t<this.level.map.width;t++)for(let e=0;e<this.level.map.height;e++)0!==t&&t!==this.level.map.width-1&&0!==e&&e!==this.level.map.height-1||this.enemySpawnPositionsAnalog.push({x:t,y:e})}getEnemySpawnPosition(){const t=this.getEntities(is.BUILDING);let e=this.enemySpawnPositions.filter((e=>b().Math.Distance.BetweenPoints(e,this.player.positionAtMatrix)>=16&&t.every((t=>b().Math.Distance.BetweenPoints(e,t.positionAtMatrix)>=8))));0===e.length&&(e=this.enemySpawnPositionsAnalog);const i=function(t,e){let i=t.map((t=>({position:t,distance:Phaser.Math.Distance.BetweenPoints(e,t)})));return i=i.sort(((t,e)=>t.distance-e.distance)),i.map((({position:t})=>t))}(e,this.player.positionAtMatrix).slice(0,10);return b().Utils.Array.GetRandom(i)}getFuturePosition(t,e){const i=this.game.loop.actualFps,n=Math.pow(.3,1/i),s=1-Math.pow(n,e*i),r=t.body.velocity.x/i*s/(1-n),a=t.body.velocity.y/i*s/(1-n);return{x:t.body.center.x+r,y:t.body.center.y+a}}addEntityGroups(){this.entityGroups={[is.CRYSTAL]:this.add.group(),[is.ENEMY]:this.add.group(),[is.NPC]:this.add.group({runChildUpdate:!0}),[is.BUILDING]:this.add.group({runChildUpdate:!0}),[is.SHOT]:this.add.group({runChildUpdate:!0})}}addPlayer(){const t=this.level.readSpawnPositions(_n.PLAYER);this.player=new No(this,{positionAtMatrix:b().Utils.Array.GetRandom(t)}),this.camera.focusOn(this.player),this.player.live.on(Un.DEAD,(()=>{this.camera.zoomOut(),this.game.finishGame()}))}addAssistant(){const t=()=>{const e=function(t){const e=[];for(let i=t.y-1;i<=t.y+1;i++)for(let n=t.x-1;n<=t.x+1;n++)c({x:n,y:i},t)||e.push({x:n,y:i});return e}(this.player.positionAtMatrix).find((t=>{const e=this.level.map.getAt(t);return null==e?void 0:e.solid}));this.assistant=new Bo(this,{owner:this.player,positionAtMatrix:e||this.player.positionAtMatrix,speed:this.player.speed,health:this.player.live.maxHealth,level:this.player.upgradeLevel[hs.ASSISTANT]}),this.assistant.once(b().Scenes.Events.DESTROY,(()=>{this.assistant=null,this.wave.once(Qi.COMPLETE,(()=>{t()}))}))};t()}addCrystals(){const t=this.level.readSpawnPositions(_n.CRYSTAL),e=()=>{const e=t.filter((t=>this.level.isFreePoint(Object.assign(Object.assign({},t),{z:1})))),i=Nn[this.level.planet].CRYSTAL_VARIANTS;new Do(this,{positionAtMatrix:b().Utils.Array.GetRandom(e),variant:b().Utils.Array.GetRandom(i)})},i=Math.ceil(Math.floor(.15*this.level.size/this.game.getDifficultyMultiplier()));for(let t=0;t<i;t++)e();this.wave.on(Qi.COMPLETE,(()=>{const t=i-this.getEntitiesGroup(is.CRYSTAL).getTotalUsed();for(let i=0;i<t;i++)e()}))}}class sh extends b().Game{get isStarted(){return this._isStarted}set isStarted(t){this._isStarted=t}get onPause(){return this._onPause}set onPause(t){this._onPause=t}get isFinished(){return this._isFinished}set isFinished(t){this._isFinished=t}get screen(){return this._screen}set screen(t){this._screen=t}get world(){return this._world}set world(t){this._world=t}get settings(){return this._settings}set settings(t){this._settings=t}constructor(){super({scene:[po,nh,Ta,fo,Ri],pixelArt:!0,autoRound:!0,disableContextMenu:!0,width:window.innerWidth,height:window.innerHeight,parent:"game-container",transparent:!0,scale:{mode:b().Scale.RESIZE},physics:{default:"arcade",arcade:{debug:false,fps:60,gravity:{y:0}}}}),this._isStarted=!1,this._onPause=!1,this._isFinished=!1,this._settings={},this.difficulty=a.NORMAL,this.tutorial=new E,this.readFlags(),this.readSettings(),this.isFlagEnabled(o.ADS)&&("https://sdk.crazygames.com/crazygames-sdk-v2.js",new Promise(((t,e)=>{const i=document.createElement("script");i.setAttribute("src","https://sdk.crazygames.com/crazygames-sdk-v2.js"),i.addEventListener("load",t),i.addEventListener("error",e),document.body.appendChild(i)}))),console.log("Game is started"),this.events.on(b().Core.Events.READY,(()=>{this.screen=this.scene.getScene(n.SCREEN),this.world=this.scene.getScene(n.WORLD),this.sound.setVolume(.1),this.registerShaders()})),this.events.on(`${s.UPDATE_SETTINGS}.${r.AUDIO}`,(t=>{this.sound.mute="off"===t})),this.events.on(`${s.UPDATE_SETTINGS}.${r.TUTORIAL}`,(t=>{"on"===t?this.tutorial.enable():this.tutorial.disable()}))}pauseGame(){this.onPause=!0,this.world.scene.pause(),this.screen.scene.pause(),this.scene.systemScene.scene.launch(n.MENU,{page:y.ABOUT})}resumeGame(){this.onPause=!1,this.scene.systemScene.scene.stop(n.MENU),this.world.scene.resume(),this.screen.scene.resume()}startGame(){this.isStarted||(this.isSettingEnabled(r.TUTORIAL)||this.tutorial.disable(),this.scene.systemScene.scene.stop(n.MENU),this.scene.systemScene.scene.launch(n.SCREEN),this.world.start(),this.isStarted=!0,window.onbeforeunload=function(){return"Leave game? No saves!"})}stopGame(){this.isStarted&&(this.isStarted=!1,this.world.scene.restart(),this.tutorial.reset(),this.isFinished&&(this.isFinished=!1,this.scene.systemScene.scene.stop(n.GAMEOVER)),this.scene.systemScene.scene.stop(n.SCREEN),this.scene.systemScene.scene.launch(n.MENU,{page:y.NEW_GAME}),this.showAd(e.MIDGAME),window.onbeforeunload=null)}finishGame(){if(!this.isStarted)return;this.isFinished=!0,this.events.emit(s.FINISH);const t=this.getRecordStat(),e=this.getCurrentStat();this.writeBestStat(e,t),this.scene.systemScene.scene.stop(n.SCREEN),this.scene.systemScene.scene.launch(n.GAMEOVER,{stat:e,record:t})}getDifficultyMultiplier(){switch(this.difficulty){case a.EASY:return.8;case a.HARD:return 1.3;default:return 1}}updateSetting(t,e){this.settings[t]=e,localStorage.setItem(`SETTINGS.${t}`,e),this.events.emit(`${s.UPDATE_SETTINGS}.${t}`,e)}isSettingEnabled(t){return"on"===this.settings[t]}readSettings(){f(r,(t=>{var e;this.settings[t]=null!==(e=localStorage.getItem(`SETTINGS.${t}`))&&void 0!==e?e:u[t].default}))}isFlagEnabled(t){return this.flags.includes(t)}readFlags(){var t;const e=new URLSearchParams(window.location.search).get("flags");this.flags=null!==(t=null==e?void 0:e.toUpperCase().split(","))&&void 0!==t?t:[]}showAd(t,e){var i,n,s;this.isFlagEnabled(o.ADS)&&(null===(s=null===(n=null===(i=window.CrazyGames)||void 0===i?void 0:i.SDK)||void 0===n?void 0:n.ad)||void 0===s||s.requestAd(t,{adStarted:()=>{this.pause()},adFinished:()=>{this.resume(),null==e||e()},adError:e=>{console.warn(`Error ${t} ad:`,e)}}))}getRecordStat(){try{const t=localStorage.getItem(`BEST_STAT.${this.difficulty}`);return t&&JSON.parse(t)}catch(t){return null}}writeBestStat(t,e){const i=Object.keys(t).reduce(((i,n)=>{var s;return Object.assign(Object.assign({},i),{[n]:Math.max(t[n],null!==(s=null==e?void 0:e[n])&&void 0!==s?s:0)})}),{});localStorage.setItem(`BEST_STAT.${this.difficulty}`,JSON.stringify(i))}getCurrentStat(){return{score:this.world.player.score,waves:this.world.wave.number-1,kills:this.world.player.kills,lived:this.world.getTime()/1e3/60}}registerShaders(){const t=this.renderer;f(A,((e,i)=>{t.pipelines.addPostPipeline(e,i)}))}}!function(t,e,i,n){new(i||(i=Promise))((function(s,r){function a(t){try{h(n.next(t))}catch(t){r(t)}}function o(t){try{h(n.throw(t))}catch(t){r(t)}}function h(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,o)}h((n=n.apply(t,e||[])).next())}))}(void 0,void 0,void 0,(function*(){function e(){window.innerWidth>=l[0]&&window.innerHeight>=l[1]?function(t){const e=document.getElementById(`failure-${t}`);e&&e.remove()}(t.BAD_SCREEN_SIZE):h(t.BAD_SCREEN_SIZE)}console.clear(),console.log([`Created by ${p.v.u2} / ${p.v.HQ}`,`Version ${p.i8}`,`Open-Source at ${p.cj.H.replace("git+","")}`].join("\n")),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?h(t.BAD_DEVICE):(e(),window.addEventListener("resize",e),new sh)}))})()})();
//# sourceMappingURL=bundle.c5a5cc13921dcc8d4354.js.map