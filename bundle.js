(()=>{var Th="123",Kt={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qt={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ah=0,Ua=1,Lh=2,Ga=1,qs=2,Ki=3,Nr=0,tt=1,Fr=2,Ha=1,Qi=0,er=1,ka=2,Va=3,Wa=4,Ch=5,ei=100,Rh=101,Ph=102,ja=103,qa=104,Dh=200,Ih=201,Nh=202,Fh=203,Xa=204,Ya=205,Oh=206,Bh=207,zh=208,Uh=209,Gh=210,Hh=0,kh=1,Vh=2,Xs=3,Wh=4,jh=5,qh=6,Xh=7,Or=0,Yh=1,Zh=2,tr=0,Jh=1,$h=2,Kh=3,Qh=4,eu=5,Za=300,Ys=301,Zs=302,Ja=303,$a=304,Js=306,$s=307,Ks=1e3,_t=1001,Qs=1002,ft=1003,Ka=1004,Qa=1005,lt=1006,tu=1007,Br=1008,eo=1009,nu=1010,iu=1011,zr=1012,ru=1013,Ur=1014,mn=1015,Gr=1016,su=1017,ou=1018,au=1019,nr=1020,cu=1021,Nn=1022,Dt=1023,lu=1024,hu=1025,ti=1026,ir=1027,uu=1028,fu=1029,du=1030,pu=1031,mu=1032,gu=1033,ec=33776,tc=33777,nc=33778,ic=33779,rc=35840,sc=35841,oc=35842,ac=35843,vu=36196,cc=37492,lc=37496,yu=37808,xu=37809,_u=37810,bu=37811,wu=37812,Mu=37813,Su=37814,Eu=37815,Tu=37816,Au=37817,Lu=37818,Cu=37819,Ru=37820,Pu=37821,Du=36492,Iu=37840,Nu=37841,Fu=37842,Ou=37843,Bu=37844,zu=37845,Uu=37846,Gu=37847,Hu=37848,ku=37849,Vu=37850,Wu=37851,ju=37852,qu=37853,Xu=2200,Yu=2201,Zu=2202,Hr=2300,kr=2301,to=2302,ni=2400,ii=2401,Vr=2402,no=2500,hc=2501,Ju=0,ri=3e3,io=3001,uc=3007,fc=3002,$u=3003,dc=3004,pc=3005,mc=3006,Ku=3200,Qu=3201,si=0,ef=1,ro=7680,tf=519,Wr=35044,rr=35048,gc="300 es";function Et(){}Object.assign(Et.prototype,{addEventListener:function(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)},hasEventListener:function(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1},removeEventListener:function(t,e){if(this._listeners===void 0)return;let n=this._listeners,i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}},dispatchEvent:function(t){if(this._listeners===void 0)return;let e=this._listeners,n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t)}}});var st=[];for(let t=0;t<256;t++)st[t]=(t<16?"0":"")+t.toString(16);var jr=1234567,xe={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=st[t&255]+st[t>>8&255]+st[t>>16&255]+st[t>>24&255]+"-"+st[e&255]+st[e>>8&255]+"-"+st[e>>16&15|64]+st[e>>24&255]+"-"+st[n&63|128]+st[n>>8&255]+"-"+st[n>>16&255]+st[n>>24&255]+st[i&255]+st[i>>8&255]+st[i>>16&255]+st[i>>24&255];return r.toUpperCase()},clamp:function(t,e,n){return Math.max(e,Math.min(n,t))},euclideanModulo:function(t,e){return(t%e+e)%e},mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},lerp:function(t,e,n){return(1-n)*t+n*e},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){return t!==void 0&&(jr=t%2147483647),jr=jr*16807%2147483647,(jr-1)/2147483646},degToRad:function(t){return t*xe.DEG2RAD},radToDeg:function(t){return t*xe.RAD2DEG},isPowerOfTwo:function(t){return(t&t-1)===0&&t!==0},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,n,i,r){let s=Math.cos,o=Math.sin,a=s(n/2),c=o(n/2),l=s((e+i)/2),d=o((e+i)/2),u=s((e-i)/2),h=o((e-i)/2),f=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":t.set(a*d,c*u,c*h,a*l);break;case"YZY":t.set(c*h,a*d,c*u,a*l);break;case"ZXZ":t.set(c*u,c*h,a*d,a*l);break;case"XZX":t.set(a*d,c*m,c*f,a*l);break;case"YXY":t.set(c*f,a*d,c*m,a*l);break;case"ZYZ":t.set(c*m,c*f,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}},U=class{constructor(e=0,n=0){Object.defineProperty(this,"isVector2",{value:!0}),this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){let e=Math.atan2(-this.y,-this.x)+Math.PI;return e}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}},dt=class{constructor(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,c,l){let d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=c,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}clone(){return new this.constructor().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],d=i[4],u=i[7],h=i[2],f=i[5],m=i[8],y=r[0],v=r[3],g=r[6],p=r[1],M=r[4],T=r[7],E=r[2],x=r[5],A=r[8];return s[0]=o*y+a*p+c*E,s[3]=o*v+a*M+c*x,s[6]=o*g+a*T+c*A,s[1]=l*y+d*p+u*E,s[4]=l*v+d*M+u*x,s[7]=l*g+d*T+u*A,s[2]=h*y+f*p+m*E,s[5]=h*v+f*M+m*x,s[8]=h*g+f*T+m*A,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return n*o*d-n*a*l-i*s*d+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],u=d*o-a*l,h=a*c-d*s,f=l*s-o*c,m=n*u+i*h+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=u*y,e[1]=(r*l-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(d*n-r*c)*y,e[5]=(r*s-a*n)*y,e[6]=f*y,e[7]=(i*c-l*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).copy(this).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){let n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],d=r[7];return r[0]=n*s+i*c,r[3]=n*o+i*l,r[6]=n*a+i*d,r[1]=-i*s+n*c,r[4]=-i*o+n*l,r[7]=-i*a+n*d,this}translate(e,n){let i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}},oi,ai={getDataURL:function(t){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{oi===void 0&&(oi=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),oi.width=t.width,oi.height=t.height;let n=oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=oi}return e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}},nf=0;function ke(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=_t,i=_t,r=lt,s=Br,o=Dt,a=eo,c=1,l=ri){Object.defineProperty(this,"id",{value:nf++}),this.uuid=xe.generateUUID(),this.name="",this.image=t,this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new U(0,0),this.repeat=new U(1,1),this.center=new U(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.version=0,this.onUpdate=null}ke.DEFAULT_IMAGE=void 0;ke.DEFAULT_MAPPING=Za;ke.prototype=Object.assign(Object.create(Et.prototype),{constructor:ke,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this},toJSON:function(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let i=this.image;if(i.uuid===void 0&&(i.uuid=xe.generateUUID()),!e&&t.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(so(i[s].image)):r.push(so(i[s]))}else r=so(i);t.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return e||(t.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(t){if(this.mapping!==Za)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ks:t.x=t.x-Math.floor(t.x);break;case _t:t.x=t.x<0?0:1;break;case Qs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ks:t.y=t.y-Math.floor(t.y);break;case _t:t.y=t.y<0?0:1;break;case Qs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}});Object.defineProperty(ke.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function so(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?ai.getDataURL(t):t.data?{data:Array.prototype.slice.call(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ze=class{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isVector4",{value:!0}),this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,o=.01,a=.1,c=e.elements,l=c[0],d=c[4],u=c[8],h=c[1],f=c[5],m=c[9],y=c[2],v=c[6],g=c[10];if(Math.abs(d-h)<o&&Math.abs(u-y)<o&&Math.abs(m-v)<o){if(Math.abs(d+h)<a&&Math.abs(u+y)<a&&Math.abs(m+v)<a&&Math.abs(l+f+g-3)<a)return this.set(1,0,0,0),this;n=Math.PI;let M=(l+1)/2,T=(f+1)/2,E=(g+1)/2,x=(d+h)/4,A=(u+y)/4,D=(m+v)/4;return M>T&&M>E?M<o?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=x/i,s=A/i):T>E?T<o?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=x/r,s=D/r):E<o?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=A/s,r=D/s),this.set(i,r,s,n),this}let p=Math.sqrt((v-m)*(v-m)+(u-y)*(u-y)+(h-d)*(h-d));return Math.abs(p)<.001&&(p=1),this.x=(v-m)/p,this.y=(u-y)/p,this.z=(h-d)/p,this.w=Math.acos((l+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}};function It(t,e,n){this.width=t,this.height=e,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e),n=n||{},this.texture=new ke(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=t,this.texture.image.height=e,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:lt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}It.prototype=Object.assign(Object.create(Et.prototype),{constructor:It,isWebGLRenderTarget:!0,setSize:function(t,e){(this.width!==t||this.height!==e)&&(this.width=t,this.height=e,this.texture.image.width=t,this.texture.image.height=e,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.width=t.width,this.height=t.height,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function vc(t,e,n){It.call(this,t,e,n),this.samples=4}vc.prototype=Object.assign(Object.create(It.prototype),{constructor:vc,isWebGLMultisampleRenderTarget:!0,copy:function(t){return It.prototype.copy.call(this,t),this.samples=t.samples,this}});var ot=class{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=e,this._y=n,this._z=i,this._w=r}static slerp(e,n,i,r){return i.copy(e).slerp(n,r)}static slerpFlat(e,n,i,r,s,o,a){let c=i[r+0],l=i[r+1],d=i[r+2],u=i[r+3],h=s[o+0],f=s[o+1],m=s[o+2],y=s[o+3];if(u!==y||c!==h||l!==f||d!==m){let v=1-a,g=c*h+l*f+d*m+u*y,p=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){let E=Math.sqrt(M),x=Math.atan2(E,g*p);v=Math.sin(v*x)/E,a=Math.sin(a*x)/E}let T=a*p;if(c=c*v+h*T,l=l*v+f*T,d=d*v+m*T,u=u*v+y*T,v===1-a){let E=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=E,l*=E,d*=E,u*=E}}e[n]=c,e[n+1]=l,e[n+2]=d,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],d=i[r+3],u=s[o],h=s[o+1],f=s[o+2],m=s[o+3];return e[n]=a*m+d*u+c*f-l*h,e[n+1]=c*m+d*h+l*u-a*f,e[n+2]=l*m+d*f+a*h-c*u,e[n+3]=d*m-a*u-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),d=a(r/2),u=a(s/2),h=c(i/2),f=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=h*d*u+l*f*m,this._y=l*f*u-h*d*m,this._z=l*d*m+h*f*u,this._w=l*d*u-h*f*m;break;case"YXZ":this._x=h*d*u+l*f*m,this._y=l*f*u-h*d*m,this._z=l*d*m-h*f*u,this._w=l*d*u+h*f*m;break;case"ZXY":this._x=h*d*u-l*f*m,this._y=l*f*u+h*d*m,this._z=l*d*m+h*f*u,this._w=l*d*u-h*f*m;break;case"ZYX":this._x=h*d*u-l*f*m,this._y=l*f*u+h*d*m,this._z=l*d*m-h*f*u,this._w=l*d*u+h*f*m;break;case"YZX":this._x=h*d*u+l*f*m,this._y=l*f*u+h*d*m,this._z=l*d*m-h*f*u,this._w=l*d*u-h*f*m;break;case"XZY":this._x=h*d*u-l*f*m,this._y=l*f*u-h*d*m,this._z=l*d*m+h*f*u,this._w=l*d*u+h*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],l=n[2],d=n[6],u=n[10],h=i+a+u;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(d-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+d)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=1e-6,r=e.dot(n)+1;return r<i?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xe.clamp(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,n){return n!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,n)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,c=n._y,l=n._z,d=n._w;return this._x=i*d+o*a+r*l-s*c,this._y=r*d+o*c+s*a-i*l,this._z=s*d+o*l+i*c-r*a,this._w=o*d-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-n;return this._w=f*o+n*this._w,this._x=f*i+n*this._x,this._y=f*r+n*this._y,this._z=f*s+n*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),d=Math.atan2(l,a),u=Math.sin((1-n)*d)/l,h=Math.sin(n*d)/l;return this._w=o*u+this._w*h,this._x=i*u+this._x*h,this._y=r*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}},_=class{constructor(e=0,n=0,i=0){Object.defineProperty(this,"isVector3",{value:!0}),this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,n)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(yc.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(yc.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*n+o*r-a*i,d=c*i+a*n-s*r,u=c*r+s*i-o*n,h=-s*n-o*i-a*r;return this.x=l*c+h*-s+d*-a-u*-o,this.y=d*c+h*-o+u*-s-l*-a,this.z=u*c+h*-a+l*-o-d*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e,n){return n!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,n)):this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oo.copy(this).projectOnVector(e),this.sub(oo)}reflect(e){return this.sub(oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(xe.clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}},oo=new _,yc=new ot,en=class{constructor(e,n){Object.defineProperty(this,"isBox3",{value:!0}),this.min=e!==void 0?e:new _(Infinity,Infinity,Infinity),this.max=n!==void 0?n:new _(-Infinity,-Infinity,-Infinity)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=Infinity,i=Infinity,r=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.length;c<l;c+=3){let d=e[c],u=e[c+1],h=e[c+2];d<n&&(n=d),u<i&&(i=u),h<r&&(r=h),d>s&&(s=d),u>o&&(o=u),h>a&&(a=h)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=Infinity,i=Infinity,r=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.count;c<l;c++){let d=e.getX(c),u=e.getY(c),h=e.getZ(c);d<n&&(n=d),u<i&&(i=u),h<r&&(r=h),d>s&&(s=d),u>o&&(o=u),h>a&&(a=h)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=sr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new _),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new _),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let n=e.geometry;n!==void 0&&(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox),co.applyMatrix4(e.matrixWorld),this.union(co));let i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),n=new _),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sr),sr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),qr.subVectors(this.max,or),ci.subVectors(e.a,or),li.subVectors(e.b,or),hi.subVectors(e.c,or),gn.subVectors(li,ci),vn.subVectors(hi,li),Fn.subVectors(ci,hi);let n=[0,-gn.z,gn.y,0,-vn.z,vn.y,0,-Fn.z,Fn.y,gn.z,0,-gn.x,vn.z,0,-vn.x,Fn.z,0,-Fn.x,-gn.y,gn.x,0,-vn.y,vn.x,0,-Fn.y,Fn.x,0];return ao(n,ci,li,hi,qr)?(n=[1,0,0,0,1,0,0,0,1],ao(n,ci,li,hi,qr)?(Xr.crossVectors(gn,vn),n=[Xr.x,Xr.y,Xr.z],ao(n,ci,li,hi,qr)):!1):!1}clampPoint(e,n){return n===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),n=new _),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){let n=sr.copy(e).clamp(this.min,this.max);return n.sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(sr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};function ao(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){On.fromArray(t,s);let a=r.x*Math.abs(On.x)+r.y*Math.abs(On.y)+r.z*Math.abs(On.z),c=e.dot(On),l=n.dot(On),d=i.dot(On);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var tn=[new _,new _,new _,new _,new _,new _,new _,new _],sr=new _,co=new en,ci=new _,li=new _,hi=new _,gn=new _,vn=new _,Fn=new _,or=new _,qr=new _,Xr=new _,On=new _,rf=new en,nn=class{constructor(e,n){this.center=e!==void 0?e:new _,this.radius=n!==void 0?n:-1}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):rf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),n=new _),n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new en),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}},rn=new _,lo=new _,Yr=new _,yn=new _,ho=new _,Zr=new _,uo=new _,ui=class{constructor(e,n){this.origin=e!==void 0?e:new _,this.direction=n!==void 0?n:new _(0,0,-1)}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n===void 0&&(console.warn("THREE.Ray: .at() target is now required"),n=new _),n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,n){n===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),n=new _),n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=rn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(rn.copy(this.direction).multiplyScalar(n).add(this.origin),rn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){lo.copy(e).add(n).multiplyScalar(.5),Yr.copy(n).sub(e).normalize(),yn.copy(this.origin).sub(lo);let s=e.distanceTo(n)*.5,o=-this.direction.dot(Yr),a=yn.dot(this.direction),c=-yn.dot(Yr),l=yn.lengthSq(),d=Math.abs(1-o*o),u,h,f,m;if(d>0)if(u=o*c-a,h=o*a-c,m=s*d,u>=0)if(h>=-m)if(h<=m){let y=1/d;u*=y,h*=y,f=u*(u+o*h+2*a)+h*(o*u+h+2*c)+l}else h=s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+l;else h=-s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+l;else h<=-m?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+h*(h+2*c)+l):h<=m?(u=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+h*(h+2*c)+l);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),r&&r.copy(Yr).multiplyScalar(h).add(lo),f}intersectSphere(e,n){rn.subVectors(e.center,this.origin);let i=rn.dot(this.direction),r=rn.dot(rn)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);if(n===0)return!0;let i=e.normal.dot(this.direction);return i*n<0}intersectBox(e,n){let i,r,s,o,a,c,l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r?null:((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),u>=0?(a=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),i>c||a>r?null:((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0?null:this.at(i>=0?i:r,n)))}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,n,i,r,s){ho.subVectors(n,e),Zr.subVectors(i,e),uo.crossVectors(ho,Zr);let o=this.direction.dot(uo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yn.subVectors(this.origin,e);let c=a*this.direction.dot(Zr.crossVectors(yn,Zr));if(c<0)return null;let l=a*this.direction.dot(ho.cross(yn));if(l<0)return null;if(c+l>o)return null;let d=-a*yn.dot(uo);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}},Te=class{constructor(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,c,l,d,u,h,f,m,y,v){let g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=d,g[10]=u,g[14]=h,g[3]=f,g[7]=m,g[11]=y,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/fi.setFromMatrixColumn(e,0).length(),s=1/fi.setFromMatrixColumn(e,1).length(),o=1/fi.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let h=o*d,f=o*u,m=a*d,y=a*u;n[0]=c*d,n[4]=-c*u,n[8]=l,n[1]=f+m*l,n[5]=h-y*l,n[9]=-a*c,n[2]=y-h*l,n[6]=m+f*l,n[10]=o*c}else if(e.order==="YXZ"){let h=c*d,f=c*u,m=l*d,y=l*u;n[0]=h+y*a,n[4]=m*a-f,n[8]=o*l,n[1]=o*u,n[5]=o*d,n[9]=-a,n[2]=f*a-m,n[6]=y+h*a,n[10]=o*c}else if(e.order==="ZXY"){let h=c*d,f=c*u,m=l*d,y=l*u;n[0]=h-y*a,n[4]=-o*u,n[8]=m+f*a,n[1]=f+m*a,n[5]=o*d,n[9]=y-h*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){let h=o*d,f=o*u,m=a*d,y=a*u;n[0]=c*d,n[4]=m*l-f,n[8]=h*l+y,n[1]=c*u,n[5]=y*l+h,n[9]=f*l-m,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){let h=o*c,f=o*l,m=a*c,y=a*l;n[0]=c*d,n[4]=y-h*u,n[8]=m*u+f,n[1]=u,n[5]=o*d,n[9]=-a*d,n[2]=-l*d,n[6]=f*u+m,n[10]=h-y*u}else if(e.order==="XZY"){let h=o*c,f=o*l,m=a*c,y=a*l;n[0]=c*d,n[4]=-u,n[8]=l*d,n[1]=h*u+y,n[5]=o*d,n[9]=f*u-m,n[2]=m*u-f,n[6]=a*d,n[10]=y*u+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sf,e,of)}lookAt(e,n,i){let r=this.elements;return bt.subVectors(e,n),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),xn.crossVectors(i,bt),xn.lengthSq()===0&&(Math.abs(i.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),xn.crossVectors(i,bt)),xn.normalize(),Jr.crossVectors(bt,xn),r[0]=xn.x,r[4]=Jr.x,r[8]=bt.x,r[1]=xn.y,r[5]=Jr.y,r[9]=bt.y,r[2]=xn.z,r[6]=Jr.z,r[10]=bt.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,n)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],d=i[1],u=i[5],h=i[9],f=i[13],m=i[2],y=i[6],v=i[10],g=i[14],p=i[3],M=i[7],T=i[11],E=i[15],x=r[0],A=r[4],D=r[8],V=r[12],X=r[1],C=r[5],O=r[9],N=r[13],B=r[2],P=r[6],I=r[10],G=r[14],W=r[3],ne=r[7],ce=r[11],ae=r[15];return s[0]=o*x+a*X+c*B+l*W,s[4]=o*A+a*C+c*P+l*ne,s[8]=o*D+a*O+c*I+l*ce,s[12]=o*V+a*N+c*G+l*ae,s[1]=d*x+u*X+h*B+f*W,s[5]=d*A+u*C+h*P+f*ne,s[9]=d*D+u*O+h*I+f*ce,s[13]=d*V+u*N+h*G+f*ae,s[2]=m*x+y*X+v*B+g*W,s[6]=m*A+y*C+v*P+g*ne,s[10]=m*D+y*O+v*I+g*ce,s[14]=m*V+y*N+v*G+g*ae,s[3]=p*x+M*X+T*B+E*W,s[7]=p*A+M*C+T*P+E*ne,s[11]=p*D+M*O+T*I+E*ce,s[15]=p*V+M*N+T*G+E*ae,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],u=e[6],h=e[10],f=e[14],m=e[3],y=e[7],v=e[11],g=e[15];return m*(+s*c*u-r*l*u-s*a*h+i*l*h+r*a*f-i*c*f)+y*(+n*c*f-n*l*h+s*o*h-r*o*f+r*l*d-s*c*d)+v*(+n*l*u-n*a*f-s*o*u+i*o*f+s*a*d-i*l*d)+g*(-r*a*d-n*c*u+n*a*h+r*o*u-i*o*h+i*c*d)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],u=e[9],h=e[10],f=e[11],m=e[12],y=e[13],v=e[14],g=e[15],p=u*v*l-y*h*l+y*c*f-a*v*f-u*c*g+a*h*g,M=m*h*l-d*v*l-m*c*f+o*v*f+d*c*g-o*h*g,T=d*y*l-m*u*l+m*a*f-o*y*f-d*a*g+o*u*g,E=m*u*c-d*y*c-m*a*h+o*y*h+d*a*v-o*u*v,x=n*p+i*M+r*T+s*E;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/x;return e[0]=p*A,e[1]=(y*h*s-u*v*s-y*r*f+i*v*f+u*r*g-i*h*g)*A,e[2]=(a*v*s-y*c*s+y*r*l-i*v*l-a*r*g+i*c*g)*A,e[3]=(u*c*s-a*h*s-u*r*l+i*h*l+a*r*f-i*c*f)*A,e[4]=M*A,e[5]=(d*v*s-m*h*s+m*r*f-n*v*f-d*r*g+n*h*g)*A,e[6]=(m*c*s-o*v*s-m*r*l+n*v*l+o*r*g-n*c*g)*A,e[7]=(o*h*s-d*c*s+d*r*l-n*h*l-o*r*f+n*c*f)*A,e[8]=T*A,e[9]=(m*u*s-d*y*s-m*i*f+n*y*f+d*i*g-n*u*g)*A,e[10]=(o*y*s-m*a*s+m*i*l-n*y*l-o*i*g+n*a*g)*A,e[11]=(d*a*s-o*u*s-d*i*l+n*u*l+o*i*f-n*a*f)*A,e[12]=E*A,e[13]=(d*y*r-m*u*r+m*i*h-n*y*h-d*i*v+n*u*v)*A,e[14]=(m*a*r-o*y*r-m*i*c+n*y*c+o*i*v-n*a*v)*A,e[15]=(o*u*r-d*a*r+d*i*c-n*u*c-o*i*h+n*a*h)*A,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,d*a+i,d*c-r*o,0,l*c-r*a,d*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i){return this.set(1,n,i,0,e,1,i,0,e,n,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,l=s+s,d=o+o,u=a+a,h=s*l,f=s*d,m=s*u,y=o*d,v=o*u,g=a*u,p=c*l,M=c*d,T=c*u,E=i.x,x=i.y,A=i.z;return r[0]=(1-(y+g))*E,r[1]=(f+T)*E,r[2]=(m-M)*E,r[3]=0,r[4]=(f-T)*x,r[5]=(1-(h+g))*x,r[6]=(v+p)*x,r[7]=0,r[8]=(m+M)*A,r[9]=(v-p)*A,r[10]=(1-(h+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,s=fi.set(r[0],r[1],r[2]).length(),o=fi.set(r[4],r[5],r[6]).length(),a=fi.set(r[8],r[9],r[10]).length(),c=this.determinant();c<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nt.copy(this);let l=1/s,d=1/o,u=1/a;return Nt.elements[0]*=l,Nt.elements[1]*=l,Nt.elements[2]*=l,Nt.elements[4]*=d,Nt.elements[5]*=d,Nt.elements[6]*=d,Nt.elements[8]*=u,Nt.elements[9]*=u,Nt.elements[10]*=u,n.setFromRotationMatrix(Nt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,c=2*s/(n-e),l=2*s/(i-r),d=(n+e)/(n-e),u=(i+r)/(i-r),h=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){let a=this.elements,c=1/(n-e),l=1/(i-r),d=1/(o-s),u=(n+e)*c,h=(i+r)*l,f=(o+s)*d;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},fi=new _,Nt=new Te,sf=new _(0,0,0),of=new _(1,1,1),xn=new _,Jr=new _,bt=new _,di=class{constructor(e=0,n=0,i=0,r=di.DefaultOrder){Object.defineProperty(this,"isEuler",{value:!0}),this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n,i){let r=xe.clamp,s=e.elements,o=s[0],a=s[4],c=s[8],l=s[1],d=s[5],u=s[9],h=s[2],f=s[6],m=s[10];n=n||this._order;switch(n){case"XYZ":this._y=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,d),this._z=0);break;case"YXZ":this._x=Math.asin(-r(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,m),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-r(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,d),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,m));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,d),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xc,n,i)}setFromVector3(e,n){return this.set(e.x,e.y,e.z,n||this._order)}reorder(e){return _c.setFromEuler(this),this.setFromQuaternion(_c,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new _(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};di.DefaultOrder="XYZ";di.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var xc=new Te,_c=new ot,fo=class{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}},af=0,bc=new _,pi=new ot,sn=new Te,$r=new _,ar=new _,cf=new _,lf=new ot,wc=new _(1,0,0),Mc=new _(0,1,0),Sc=new _(0,0,1),hf={type:"added"},Ec={type:"removed"};function ge(){Object.defineProperty(this,"id",{value:af++}),this.uuid=xe.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DefaultUp.clone();let t=new _,e=new di,n=new ot,i=new _(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Te},normalMatrix:{value:new dt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=ge.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}ge.DefaultUp=new _(0,1,0);ge.DefaultMatrixAutoUpdate=!0;ge.prototype=Object.assign(Object.create(Et.prototype),{constructor:ge,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(t){return this.quaternion.premultiply(t),this},setRotationFromAxisAngle:function(t,e){this.quaternion.setFromAxisAngle(t,e)},setRotationFromEuler:function(t){this.quaternion.setFromEuler(t,!0)},setRotationFromMatrix:function(t){this.quaternion.setFromRotationMatrix(t)},setRotationFromQuaternion:function(t){this.quaternion.copy(t)},rotateOnAxis:function(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this},rotateOnWorldAxis:function(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this},rotateX:function(t){return this.rotateOnAxis(wc,t)},rotateY:function(t){return this.rotateOnAxis(Mc,t)},rotateZ:function(t){return this.rotateOnAxis(Sc,t)},translateOnAxis:function(t,e){return bc.copy(t).applyQuaternion(this.quaternion),this.position.add(bc.multiplyScalar(e)),this},translateX:function(t){return this.translateOnAxis(wc,t)},translateY:function(t){return this.translateOnAxis(Mc,t)},translateZ:function(t){return this.translateOnAxis(Sc,t)},localToWorld:function(t){return t.applyMatrix4(this.matrixWorld)},worldToLocal:function(t){return t.applyMatrix4(sn.copy(this.matrixWorld).invert())},lookAt:function(t,e,n){t.isVector3?$r.copy(t):$r.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(ar,$r,this.up):sn.lookAt($r,ar,this.up),this.quaternion.setFromRotationMatrix(sn),i&&(sn.extractRotation(i.matrixWorld),pi.setFromRotationMatrix(sn),this.quaternion.premultiply(pi.invert()))},add:function(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(hf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)},remove:function(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ec)),this},clear:function(){for(let t=0;t<this.children.length;t++){let e=this.children[t];e.parent=null,e.dispatchEvent(Ec)}return this.children.length=0,this},attach:function(t){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(sn),t.updateWorldMatrix(!1,!1),this.add(t),this},getObjectById:function(t){return this.getObjectByProperty("id",t)},getObjectByName:function(t){return this.getObjectByProperty("name",t)},getObjectByProperty:function(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n],s=r.getObjectByProperty(t,e);if(s!==void 0)return s}},getWorldPosition:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),t=new _),this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),t=new ot),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,t,cf),t},getWorldScale:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),t=new _),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,lf,t),t},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),t=new _),this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)},traverseVisible:function(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)},traverseAncestors:function(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)},updateWorldMatrix:function(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(t)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){let d=a[c];r(t.shapes,d)}else r(t.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(t.materials,this.material[a]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];i.animations.push(r(t.animations,a))}}if(e){let o=s(t.geometries),a=s(t.materials),c=s(t.textures),l=s(t.images),d=s(t.shapes),u=s(t.skeletons),h=s(t.animations);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),h.length>0&&(n.animations=h)}return n.object=i,n;function s(o){let a=[];for(let c in o){let l=o[c];delete l.metadata,a.push(l)}return a}},clone:function(t){return new this.constructor().copy(this,t)},copy:function(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}});var po=new _,uf=new _,ff=new dt,Ut=class{constructor(e,n){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=e!==void 0?e:new _(1,0,0),this.constant=n!==void 0?n:0}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=po.subVectors(i,n).cross(uf.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}clone(){return new this.constructor().copy(this)}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),n=new _),n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){n===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),n=new _);let i=e.delta(po),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):void 0;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?void 0:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new _),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||ff.getNormalMatrix(e),r=this.coplanarPoint(po).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}},Ft=new _,on=new _,mo=new _,an=new _,mi=new _,gi=new _,Tc=new _,go=new _,vo=new _,yo=new _,at=class{constructor(e,n,i){this.a=e!==void 0?e:new _,this.b=n!==void 0?n:new _,this.c=i!==void 0?i:new _}static getNormal(e,n,i,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new _),r.subVectors(i,n),Ft.subVectors(e,n),r.cross(Ft);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ft.subVectors(r,n),on.subVectors(i,n),mo.subVectors(e,n);let o=Ft.dot(Ft),a=Ft.dot(on),c=Ft.dot(mo),l=on.dot(on),d=on.dot(mo),u=o*l-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new _),u===0)return s.set(-2,-1,-1);let h=1/u,f=(l*c-a*d)*h,m=(o*d-a*c)*h;return s.set(1-f-m,m,f)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,an),an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(e,n,i,r,s,o,a,c){return this.getBarycoord(e,n,i,r,an),c.set(0,0),c.addScaledVector(s,an.x),c.addScaledVector(o,an.y),c.addScaledVector(a,an.z),c}static isFrontFacing(e,n,i,r){return Ft.subVectors(i,n),on.subVectors(e,n),Ft.cross(on).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ft.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Ft.cross(on).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new _),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return at.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Ut),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return at.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return at.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return at.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return at.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){n===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),n=new _);let i=this.a,r=this.b,s=this.c,o,a;mi.subVectors(r,i),gi.subVectors(s,i),go.subVectors(e,i);let c=mi.dot(go),l=gi.dot(go);if(c<=0&&l<=0)return n.copy(i);vo.subVectors(e,r);let d=mi.dot(vo),u=gi.dot(vo);if(d>=0&&u<=d)return n.copy(r);let h=c*u-d*l;if(h<=0&&c>=0&&d<=0)return o=c/(c-d),n.copy(i).addScaledVector(mi,o);yo.subVectors(e,s);let f=mi.dot(yo),m=gi.dot(yo);if(m>=0&&f<=m)return n.copy(s);let y=f*l-c*m;if(y<=0&&l>=0&&m<=0)return a=l/(l-m),n.copy(i).addScaledVector(gi,a);let v=d*m-f*u;if(v<=0&&u-d>=0&&f-m>=0)return Tc.subVectors(s,r),a=(u-d)/(u-d+(f-m)),n.copy(r).addScaledVector(Tc,a);let g=1/(v+y+h);return o=y*g,a=h*g,n.copy(i).addScaledVector(mi,o).addScaledVector(gi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ot={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function xo(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function _o(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var ue=class{constructor(e,n,i){return Object.defineProperty(this,"isColor",{value:!0}),n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,n,i){return this.r=e,this.g=n,this.b=i,this}setHSL(e,n,i){if(e=xe.euclideanModulo(e,1),n=xe.clamp(n,0,1),i=xe.clamp(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=xo(s,r,e+1/3),this.g=xo(s,r,e),this.b=xo(s,r,e-1/3)}return this}setStyle(e){function n(r){if(r===void 0)return;parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){let r,s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,n(r[5]),this;if(r=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,n(r[5]),this;break;case"hsl":case"hsla":if(r=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)){let a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return n(r[5]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f0-9]+)$/.exec(e)){let r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let n=Ac[e];return n!==void 0?this.setHex(n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,n=2){return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}copyLinearToGamma(e,n=2){let i=n>0?1/n:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}copyLinearToSRGB(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});let n=this.r,i=this.g,r=this.b,s=Math.max(n,i,r),o=Math.min(n,i,r),a,c,l=(o+s)/2;if(o===s)a=0,c=0;else{let d=s-o;c=l<=.5?d/(s+o):d/(2-s-o);switch(s){case n:a=(i-r)/d+(i<r?6:0);break;case i:a=(r-n)/d+2;break;case r:a=(n-i)/d+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,n,i){return this.getHSL(Ot),Ot.h+=e,Ot.s+=n,Ot.l+=i,this.setHSL(Ot.h,Ot.s,Ot.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpHSL(e,n){this.getHSL(Ot),e.getHSL(Kr);let i=xe.lerp(Ot.h,Kr.h,n),r=xe.lerp(Ot.s,Kr.s,n),s=xe.lerp(Ot.l,Kr.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};ue.NAMES=Ac;ue.prototype.r=1;ue.prototype.g=1;ue.prototype.b=1;var Qr=class{constructor(e,n,i,r,s,o=0){this.a=e,this.b=n,this.c=i,this.normal=r&&r.isVector3?r:new _,this.vertexNormals=Array.isArray(r)?r:[],this.color=s&&s.isColor?s:new ue,this.vertexColors=Array.isArray(s)?s:[],this.materialIndex=o}clone(){return new this.constructor().copy(this)}copy(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(let n=0,i=e.vertexNormals.length;n<i;n++)this.vertexNormals[n]=e.vertexNormals[n].clone();for(let n=0,i=e.vertexColors.length;n<i;n++)this.vertexColors[n]=e.vertexColors[n].clone();return this}},df=0;function ve(){Object.defineProperty(this,"id",{value:df++}),this.uuid=xe.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=er,this.side=Nr,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Xa,this.blendDst=Ya,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}ve.prototype=Object.assign(Object.create(Et.prototype),{constructor:ve,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Ha;continue}let i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}},toJSON:function(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==Nr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){let s=[];for(let o in r){let a=r[o];delete a.metadata,s.push(a)}return s}if(e){let r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.flatShading=t.flatShading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(ve.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function Bn(t){ve.call(this),this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(t)}Bn.prototype=Object.create(ve.prototype);Bn.prototype.constructor=Bn;Bn.prototype.isMeshBasicMaterial=!0;Bn.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this};var Ve=new _,es=new U;function _e(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Wr,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(_e.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(_e.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this},copyArray:function(t){return this.array.set(t),this},copyColorsArray:function(t){let e=this.array,n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new ue),e[n++]=s.r,e[n++]=s.g,e[n++]=s.b}return this},copyVector2sArray:function(t){let e=this.array,n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new U),e[n++]=s.x,e[n++]=s.y}return this},copyVector3sArray:function(t){let e=this.array,n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new _),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z}return this},copyVector4sArray:function(t){let e=this.array,n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new ze),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z,e[n++]=s.w}return this},applyMatrix3:function(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)es.fromBufferAttribute(this,e),es.applyMatrix3(t),this.setXY(e,es.x,es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this},applyMatrix4:function(t){for(let e=0,n=this.count;e<n;e++)Ve.x=this.getX(e),Ve.y=this.getY(e),Ve.z=this.getZ(e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this},applyNormalMatrix:function(t){for(let e=0,n=this.count;e<n;e++)Ve.x=this.getX(e),Ve.y=this.getY(e),Ve.z=this.getZ(e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this},transformDirection:function(t){for(let e=0,n=this.count;e<n;e++)Ve.x=this.getX(e),Ve.y=this.getY(e),Ve.z=this.getZ(e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this},set:function(t,e=0){return this.array.set(t,e),this},getX:function(t){return this.array[t*this.itemSize]},setX:function(t,e){return this.array[t*this.itemSize]=e,this},getY:function(t){return this.array[t*this.itemSize+1]},setY:function(t,e){return this.array[t*this.itemSize+1]=e,this},getZ:function(t){return this.array[t*this.itemSize+2]},setZ:function(t,e){return this.array[t*this.itemSize+2]=e,this},getW:function(t){return this.array[t*this.itemSize+3]},setW:function(t,e){return this.array[t*this.itemSize+3]=e,this},setXY:function(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this},onUpload:function(t){return this.onUploadCallback=t,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function wo(t,e,n){_e.call(this,new Int8Array(t),e,n)}wo.prototype=Object.create(_e.prototype);wo.prototype.constructor=wo;function Mo(t,e,n){_e.call(this,new Uint8Array(t),e,n)}Mo.prototype=Object.create(_e.prototype);Mo.prototype.constructor=Mo;function So(t,e,n){_e.call(this,new Uint8ClampedArray(t),e,n)}So.prototype=Object.create(_e.prototype);So.prototype.constructor=So;function Eo(t,e,n){_e.call(this,new Int16Array(t),e,n)}Eo.prototype=Object.create(_e.prototype);Eo.prototype.constructor=Eo;function cr(t,e,n){_e.call(this,new Uint16Array(t),e,n)}cr.prototype=Object.create(_e.prototype);cr.prototype.constructor=cr;function To(t,e,n){_e.call(this,new Int32Array(t),e,n)}To.prototype=Object.create(_e.prototype);To.prototype.constructor=To;function lr(t,e,n){_e.call(this,new Uint32Array(t),e,n)}lr.prototype=Object.create(_e.prototype);lr.prototype.constructor=lr;function ts(t,e,n){_e.call(this,new Uint16Array(t),e,n)}ts.prototype=Object.create(_e.prototype);ts.prototype.constructor=ts;ts.prototype.isFloat16BufferAttribute=!0;function Ne(t,e,n){_e.call(this,new Float32Array(t),e,n)}Ne.prototype=Object.create(_e.prototype);Ne.prototype.constructor=Ne;function Ao(t,e,n){_e.call(this,new Float64Array(t),e,n)}Ao.prototype=Object.create(_e.prototype);Ao.prototype.constructor=Ao;var Lc=class{constructor(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}computeGroups(e){let n=[],i,r,s,o=e.faces;for(r=0;r<o.length;r++){let a=o[r];a.materialIndex!==s&&(s=a.materialIndex,i!==void 0&&(i.count=r*3-i.start,n.push(i)),i={start:r*3,materialIndex:s})}i!==void 0&&(i.count=r*3-i.start,n.push(i)),this.groups=n}fromGeometry(e){let n=e.faces,i=e.vertices,r=e.faceVertexUvs,s=r[0]&&r[0].length>0,o=r[1]&&r[1].length>0,a=e.morphTargets,c=a.length,l;if(c>0){l=[];for(let g=0;g<c;g++)l[g]={name:a[g].name,data:[]};this.morphTargets.position=l}let d=e.morphNormals,u=d.length,h;if(u>0){h=[];for(let g=0;g<u;g++)h[g]={name:d[g].name,data:[]};this.morphTargets.normal=h}let f=e.skinIndices,m=e.skinWeights,y=f.length===i.length,v=m.length===i.length;i.length>0&&n.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(let g=0;g<n.length;g++){let p=n[g];this.vertices.push(i[p.a],i[p.b],i[p.c]);let M=p.vertexNormals;if(M.length===3)this.normals.push(M[0],M[1],M[2]);else{let E=p.normal;this.normals.push(E,E,E)}let T=p.vertexColors;if(T.length===3)this.colors.push(T[0],T[1],T[2]);else{let E=p.color;this.colors.push(E,E,E)}if(s===!0){let E=r[0][g];E!==void 0?this.uvs.push(E[0],E[1],E[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",g),this.uvs.push(new U,new U,new U))}if(o===!0){let E=r[1][g];E!==void 0?this.uvs2.push(E[0],E[1],E[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",g),this.uvs2.push(new U,new U,new U))}for(let E=0;E<c;E++){let x=a[E].vertices;l[E].data.push(x[p.a],x[p.b],x[p.c])}for(let E=0;E<u;E++){let x=d[E].vertexNormals[g];h[E].data.push(x.a,x.b,x.c)}y&&this.skinIndices.push(f[p.a],f[p.b],f[p.c]),v&&this.skinWeights.push(m[p.a],m[p.b],m[p.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this}};function Cc(t){if(t.length===0)return-Infinity;let e=t[0];for(let n=1,i=t.length;n<i;++n)t[n]>e&&(e=t[n]);return e}var pf={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray!="undefined"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ns(t,e){return new pf[t](e)}var mf=1,Gt=new Te,Lo=new ge,vi=new _,wt=new en,hr=new en,rt=new _;function Oe(){Object.defineProperty(this,"id",{value:mf+=2}),this.uuid=xe.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}Oe.prototype=Object.assign(Object.create(Et.prototype),{constructor:Oe,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(t){return Array.isArray(t)?this.index=new(Cc(t)>65535?lr:cr)(t,1):this.index=t,this},getAttribute:function(t){return this.attributes[t]},setAttribute:function(t,e){return this.attributes[t]=e,this},deleteAttribute:function(t){return delete this.attributes[t],this},hasAttribute:function(t){return this.attributes[t]!==void 0},addGroup:function(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})},clearGroups:function(){this.groups=[]},setDrawRange:function(t,e){this.drawRange.start=t,this.drawRange.count=e},applyMatrix4:function(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(t){return Gt.makeRotationX(t),this.applyMatrix4(Gt),this},rotateY:function(t){return Gt.makeRotationY(t),this.applyMatrix4(Gt),this},rotateZ:function(t){return Gt.makeRotationZ(t),this.applyMatrix4(Gt),this},translate:function(t,e,n){return Gt.makeTranslation(t,e,n),this.applyMatrix4(Gt),this},scale:function(t,e,n){return Gt.makeScale(t,e,n),this.applyMatrix4(Gt),this},lookAt:function(t){return Lo.lookAt(t),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this},setFromObject:function(t){let e=t.geometry;if(t.isPoints||t.isLine){let n=new Ne(e.vertices.length*3,3),i=new Ne(e.colors.length*3,3);if(this.setAttribute("position",n.copyVector3sArray(e.vertices)),this.setAttribute("color",i.copyColorsArray(e.colors)),e.lineDistances&&e.lineDistances.length===e.vertices.length){let r=new Ne(e.lineDistances.length,1);this.setAttribute("lineDistance",r.copyArray(e.lineDistances))}e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone())}else t.isMesh&&(e&&e.isGeometry&&this.fromGeometry(e));return this},setFromPoints:function(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ne(e,3)),this},updateFromObject:function(t){let e=t.geometry;if(t.isMesh){let n=e.__directGeometry;if(e.elementsNeedUpdate===!0&&(n=void 0,e.elementsNeedUpdate=!1),n===void 0)return this.fromGeometry(e);n.verticesNeedUpdate=e.verticesNeedUpdate,n.normalsNeedUpdate=e.normalsNeedUpdate,n.colorsNeedUpdate=e.colorsNeedUpdate,n.uvsNeedUpdate=e.uvsNeedUpdate,n.groupsNeedUpdate=e.groupsNeedUpdate,e.verticesNeedUpdate=!1,e.normalsNeedUpdate=!1,e.colorsNeedUpdate=!1,e.uvsNeedUpdate=!1,e.groupsNeedUpdate=!1,e=n}if(e.verticesNeedUpdate===!0){let n=this.attributes.position;n!==void 0&&(n.copyVector3sArray(e.vertices),n.needsUpdate=!0),e.verticesNeedUpdate=!1}if(e.normalsNeedUpdate===!0){let n=this.attributes.normal;n!==void 0&&(n.copyVector3sArray(e.normals),n.needsUpdate=!0),e.normalsNeedUpdate=!1}if(e.colorsNeedUpdate===!0){let n=this.attributes.color;n!==void 0&&(n.copyColorsArray(e.colors),n.needsUpdate=!0),e.colorsNeedUpdate=!1}if(e.uvsNeedUpdate){let n=this.attributes.uv;n!==void 0&&(n.copyVector2sArray(e.uvs),n.needsUpdate=!0),e.uvsNeedUpdate=!1}if(e.lineDistancesNeedUpdate){let n=this.attributes.lineDistance;n!==void 0&&(n.copyArray(e.lineDistances),n.needsUpdate=!0),e.lineDistancesNeedUpdate=!1}return e.groupsNeedUpdate&&(e.computeGroups(t.geometry),this.groups=e.groups,e.groupsNeedUpdate=!1),this},fromGeometry:function(t){return t.__directGeometry=new Lc().fromGeometry(t),this.fromDirectGeometry(t.__directGeometry)},fromDirectGeometry:function(t){let e=new Float32Array(t.vertices.length*3);if(this.setAttribute("position",new _e(e,3).copyVector3sArray(t.vertices)),t.normals.length>0){let n=new Float32Array(t.normals.length*3);this.setAttribute("normal",new _e(n,3).copyVector3sArray(t.normals))}if(t.colors.length>0){let n=new Float32Array(t.colors.length*3);this.setAttribute("color",new _e(n,3).copyColorsArray(t.colors))}if(t.uvs.length>0){let n=new Float32Array(t.uvs.length*2);this.setAttribute("uv",new _e(n,2).copyVector2sArray(t.uvs))}if(t.uvs2.length>0){let n=new Float32Array(t.uvs2.length*2);this.setAttribute("uv2",new _e(n,2).copyVector2sArray(t.uvs2))}this.groups=t.groups;for(let n in t.morphTargets){let i=[],r=t.morphTargets[n];for(let s=0,o=r.length;s<o;s++){let a=r[s],c=new Ne(a.data.length*3,3);c.name=a.name,i.push(c.copyVector3sArray(a.data))}this.morphAttributes[n]=i}if(t.skinIndices.length>0){let n=new Ne(t.skinIndices.length*4,4);this.setAttribute("skinIndex",n.copyVector4sArray(t.skinIndices))}if(t.skinWeights.length>0){let n=new Ne(t.skinWeights.length*4,4);this.setAttribute("skinWeight",n.copyVector4sArray(t.skinWeights))}return t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new en);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new _(-Infinity,-Infinity,-Infinity),new _(Infinity,Infinity,Infinity));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];wt.setFromBufferAttribute(r),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new _,Infinity);return}if(t){let n=this.boundingSphere.center;if(wt.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){let o=e[r];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(rt.addVectors(wt.min,hr.min),wt.expandByPoint(rt),rt.addVectors(wt.max,hr.max),wt.expandByPoint(rt)):(wt.expandByPoint(hr.min),wt.expandByPoint(hr.max))}wt.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)rt.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(rt));if(e)for(let r=0,s=e.length;r<s;r++){let o=e[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)rt.fromBufferAttribute(o,c),a&&(vi.fromBufferAttribute(t,c),rt.add(vi)),i=Math.max(i,n.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,h=n.count;u<h;u++)n.setXYZ(u,0,0,0);let i=new _,r=new _,s=new _,o=new _,a=new _,c=new _,l=new _,d=new _;if(t)for(let u=0,h=t.count;u<h;u+=3){let f=t.getX(u+0),m=t.getX(u+1),y=t.getX(u+2);i.fromBufferAttribute(e,f),r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,y),l.subVectors(s,r),d.subVectors(i,r),l.cross(d),o.fromBufferAttribute(n,f),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,y),o.add(l),a.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let u=0,h=e.count;u<h;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),s.fromBufferAttribute(e,u+2),l.subVectors(s,r),d.subVectors(i,r),l.cross(d),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(t.attributes[i]===void 0)continue;let r=n[i],s=r.array,o=t.attributes[i],a=o.array,c=o.itemSize*e,l=Math.min(a.length,s.length-c);for(let d=0,u=c;d<l;d++,u++)s[u]=a[d]}return this},normalizeNormals:function(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rt.fromBufferAttribute(t,e),rt.normalize(),t.setXYZ(e,rt.x,rt.y,rt.z)},toNonIndexed:function(){function t(o,a){let c=o.array,l=o.itemSize,d=o.normalized,u=new c.constructor(a.length*l),h=0,f=0;for(let m=0,y=a.length;m<y;m++){h=a[m]*l;for(let v=0;v<l;v++)u[f++]=c[h++]}return new _e(u,l,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;let e=new Oe,n=this.index.array,i=this.attributes;for(let o in i){let a=i[o],c=t(a,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let a=[],c=r[o];for(let l=0,d=c.length;l<d;l++){let u=c[l],h=t(u,n);a.push(h)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let c=s[o];e.addGroup(c.start,c.count,c.materialIndex)}return e},toJSON:function(){let t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let a=this.parameters;for(let c in a)a[c]!==void 0&&(t[c]=a[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let a in n){let c=n[a],l=c.toJSON(t.data);c.name!==""&&(l.name=c.name),t.data.attributes[a]=l}let i={},r=!1;for(let a in this.morphAttributes){let c=this.morphAttributes[a],l=[];for(let d=0,u=c.length;d<u;d++){let h=c[d],f=h.toJSON(t.data);h.name!==""&&(f.name=h.name),l.push(f)}l.length>0&&(i[a]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t},clone:function(){return new Oe().copy(this)},copy:function(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let l=i[c];this.setAttribute(c,l.clone(e))}let r=t.morphAttributes;for(let c in r){let l=[],d=r[c];for(let u=0,h=d.length;u<h;u++)l.push(d[u].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,l=s.length;c<l;c++){let d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Rc=new Te,zn=new ui,Co=new nn,_n=new _,bn=new _,wn=new _,Ro=new _,Po=new _,Do=new _,is=new _,rs=new _,ss=new _,yi=new U,xi=new U,_i=new U,ur=new _,os=new _;function Je(t,e){ge.call(this),this.type="Mesh",this.geometry=t!==void 0?t:new Oe,this.material=e!==void 0?e:new Bn,this.updateMorphTargets()}Je.prototype=Object.assign(Object.create(ge.prototype),{constructor:Je,isMesh:!0,copy:function(t){return ge.prototype.copy.call(this,t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this},updateMorphTargets:function(){let t=this.geometry;if(t.isBufferGeometry){let e=t.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(r),t.ray.intersectsSphere(Co)===!1)return;if(Rc.copy(r).invert(),zn.copy(t.ray).applyMatrix4(Rc),n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)return;let s;if(n.isBufferGeometry){let o=n.index,a=n.attributes.position,c=n.morphAttributes.position,l=n.morphTargetsRelative,d=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,y=h.length;m<y;m++){let v=h[m],g=i[v.materialIndex],p=Math.max(v.start,f.start),M=Math.min(v.start+v.count,f.start+f.count);for(let T=p,E=M;T<E;T+=3){let x=o.getX(T),A=o.getX(T+1),D=o.getX(T+2);s=as(this,g,t,zn,a,c,l,d,u,x,A,D),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let v=m,g=y;v<g;v+=3){let p=o.getX(v),M=o.getX(v+1),T=o.getX(v+2);s=as(this,i,t,zn,a,c,l,d,u,p,M,T),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let m=0,y=h.length;m<y;m++){let v=h[m],g=i[v.materialIndex],p=Math.max(v.start,f.start),M=Math.min(v.start+v.count,f.start+f.count);for(let T=p,E=M;T<E;T+=3){let x=T,A=T+1,D=T+2;s=as(this,g,t,zn,a,c,l,d,u,x,A,D),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let v=m,g=y;v<g;v+=3){let p=v,M=v+1,T=v+2;s=as(this,i,t,zn,a,c,l,d,u,p,M,T),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}}else if(n.isGeometry){let o=Array.isArray(i),a=n.vertices,c=n.faces,l,d=n.faceVertexUvs[0];d.length>0&&(l=d);for(let u=0,h=c.length;u<h;u++){let f=c[u],m=o?i[f.materialIndex]:i;if(m===void 0)continue;let y=a[f.a],v=a[f.b],g=a[f.c];if(s=Pc(this,m,t,zn,y,v,g,ur),s){if(l&&l[u]){let p=l[u];yi.copy(p[0]),xi.copy(p[1]),_i.copy(p[2]),s.uv=at.getUV(ur,y,v,g,yi,xi,_i,new U)}s.face=f,s.faceIndex=u,e.push(s)}}}}});function Pc(t,e,n,i,r,s,o,a){let c;if(e.side===tt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==Fr,a),c===null)return null;os.copy(a),os.applyMatrix4(t.matrixWorld);let l=n.ray.origin.distanceTo(os);return l<n.near||l>n.far?null:{distance:l,point:os.clone(),object:t}}function as(t,e,n,i,r,s,o,a,c,l,d,u){_n.fromBufferAttribute(r,l),bn.fromBufferAttribute(r,d),wn.fromBufferAttribute(r,u);let h=t.morphTargetInfluences;if(e.morphTargets&&s&&h){is.set(0,0,0),rs.set(0,0,0),ss.set(0,0,0);for(let m=0,y=s.length;m<y;m++){let v=h[m],g=s[m];if(v===0)continue;Ro.fromBufferAttribute(g,l),Po.fromBufferAttribute(g,d),Do.fromBufferAttribute(g,u),o?(is.addScaledVector(Ro,v),rs.addScaledVector(Po,v),ss.addScaledVector(Do,v)):(is.addScaledVector(Ro.sub(_n),v),rs.addScaledVector(Po.sub(bn),v),ss.addScaledVector(Do.sub(wn),v))}_n.add(is),bn.add(rs),wn.add(ss)}t.isSkinnedMesh&&(t.boneTransform(l,_n),t.boneTransform(d,bn),t.boneTransform(u,wn));let f=Pc(t,e,n,i,_n,bn,wn,ur);if(f){a&&(yi.fromBufferAttribute(a,l),xi.fromBufferAttribute(a,d),_i.fromBufferAttribute(a,u),f.uv=at.getUV(ur,_n,bn,wn,yi,xi,_i,new U)),c&&(yi.fromBufferAttribute(c,l),xi.fromBufferAttribute(c,d),_i.fromBufferAttribute(c,u),f.uv2=at.getUV(ur,_n,bn,wn,yi,xi,_i,new U));let m=new Qr(l,d,u);at.getNormal(_n,bn,wn,m.normal),f.face=m}return f}var Io=class extends Oe{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super();this.type="BoxBufferGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],d=[],u=[],h=0,f=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(d,3)),this.setAttribute("uv",new Ne(u,2));function m(y,v,g,p,M,T,E,x,A,D,V){let X=T/A,C=E/D,O=T/2,N=E/2,B=x/2,P=A+1,I=D+1,G=0,W=0,ne=new _;for(let ce=0;ce<I;ce++){let ae=ce*C-N;for(let ye=0;ye<P;ye++){let be=ye*X-O;ne[y]=be*p,ne[v]=ae*M,ne[g]=B,l.push(ne.x,ne.y,ne.z),ne[y]=0,ne[v]=0,ne[g]=x>0?1:-1,d.push(ne.x,ne.y,ne.z),u.push(ye/A),u.push(1-ce/D),G+=1}}for(let ce=0;ce<D;ce++)for(let ae=0;ae<A;ae++){let ye=h+ae+P*ce,be=h+ae+P*(ce+1),We=h+(ae+1)+P*(ce+1),k=h+(ae+1)+P*ce;c.push(ye,be,k),c.push(be,We,k),W+=6}a.addGroup(f,W,V),f+=W,h+=G}}};function bi(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function ht(t){let e={};for(let n=0;n<t.length;n++){let i=bi(t[n]);for(let r in i)e[r]=i[r]}return e}var gf={clone:bi,merge:ht},vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function vt(t){ve.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=vf,this.fragmentShader=yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}vt.prototype=Object.create(ve.prototype);vt.prototype.constructor=vt;vt.prototype.isShaderMaterial=!0;vt.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bi(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this};vt.prototype.toJSON=function(t){let e=ve.prototype.toJSON.call(this,t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i],s=r.value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e};function Mn(){ge.call(this),this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te}Mn.prototype=Object.assign(Object.create(ge.prototype),{constructor:Mn,isCamera:!0,copy:function(t,e){return ge.prototype.copy.call(this,t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),t=new _),this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(t){ge.prototype.updateMatrixWorld.call(this,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()},updateWorldMatrix:function(t,e){ge.prototype.updateWorldMatrix.call(this,t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()},clone:function(){return new this.constructor().copy(this)}});function nt(t=50,e=1,n=.1,i=2e3){Mn.call(this),this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}nt.prototype=Object.assign(Object.create(Mn.prototype),{constructor:nt,isPerspectiveCamera:!0,copy:function(t,e){return Mn.prototype.copy.call(this,t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this},setFocalLength:function(t){let e=.5*this.getFilmHeight()/t;this.fov=xe.RAD2DEG*2*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){let t=Math.tan(xe.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/t},getEffectiveFOV:function(){return xe.RAD2DEG*2*Math.atan(Math.tan(xe.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let t=this.near,e=t*Math.tan(xe.DEG2RAD*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,e-=s.offsetY*n/c,i*=s.width/a,n*=s.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(t){let e=ge.prototype.toJSON.call(this,t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});var wi=90,Mi=1;function Si(t,e,n){if(ge.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new nt(wi,Mi,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new _(1,0,0)),this.add(i);let r=new nt(wi,Mi,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new _(-1,0,0)),this.add(r);let s=new nt(wi,Mi,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new _(0,1,0)),this.add(s);let o=new nt(wi,Mi,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new _(0,-1,0)),this.add(o);let a=new nt(wi,Mi,t,e);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new _(0,0,1)),this.add(a);let c=new nt(wi,Mi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new _(0,0,-1)),this.add(c),this.update=function(l,d){this.parent===null&&this.updateMatrixWorld();let u=l.xr.enabled,h=l.getRenderTarget();l.xr.enabled=!1;let f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,l.setRenderTarget(n,0),l.render(d,i),l.setRenderTarget(n,1),l.render(d,r),l.setRenderTarget(n,2),l.render(d,s),l.setRenderTarget(n,3),l.render(d,o),l.setRenderTarget(n,4),l.render(d,a),n.texture.generateMipmaps=f,l.setRenderTarget(n,5),l.render(d,c),l.setRenderTarget(h),l.xr.enabled=u}}Si.prototype=Object.create(ge.prototype);Si.prototype.constructor=Si;function Sn(t,e,n,i,r,s,o,a,c,l){t=t!==void 0?t:[],e=e!==void 0?e:Ys,o=o!==void 0?o:Nn,ke.call(this,t,e,n,i,r,s,o,a,c,l),this.flipY=!1,this._needsFlipEnvMap=!0}Sn.prototype=Object.create(ke.prototype);Sn.prototype.constructor=Sn;Sn.prototype.isCubeTexture=!0;Object.defineProperty(Sn.prototype,"images",{get:function(){return this.image},set:function(t){this.image=t}});function Un(t,e,n){Number.isInteger(e)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),e=n),It.call(this,t,t,e),e=e||{},this.texture=new Sn(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture._needsFlipEnvMap=!1}Un.prototype=Object.create(It.prototype);Un.prototype.constructor=Un;Un.prototype.isWebGLCubeRenderTarget=!0;Un.prototype.fromEquirectangularTexture=function(t,e){this.texture.type=e.type,this.texture.format=Dt,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

			varying vec3 vWorldDirection;

			vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

				return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

			}

			void main() {

				vWorldDirection = transformDirection( position, modelMatrix );

				#include <begin_vertex>
				#include <project_vertex>

			}
		`,fragmentShader:`

			uniform sampler2D tEquirect;

			varying vec3 vWorldDirection;

			#include <common>

			void main() {

				vec3 direction = normalize( vWorldDirection );

				vec2 sampleUV = equirectUv( direction );

				gl_FragColor = texture2D( tEquirect, sampleUV );

			}
		`},i=new Io(5,5,5),r=new vt({name:"CubemapFromEquirect",uniforms:bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tt,blending:Qi});r.uniforms.tEquirect.value=e;let s=new Je(i,r),o=e.minFilter;e.minFilter===Br&&(e.minFilter=lt);let a=new Si(1,10,this);return a.update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this};Un.prototype.clear=function(t,e,n,i){let r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)};function Ei(t,e,n,i,r,s,o,a,c,l,d,u){ke.call(this,null,s,o,a,c,l,i,r,d,u),this.image={data:t||null,width:e||1,height:n||1},this.magFilter=c!==void 0?c:ft,this.minFilter=l!==void 0?l:ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}Ei.prototype=Object.create(ke.prototype);Ei.prototype.constructor=Ei;Ei.prototype.isDataTexture=!0;var Ti=new nn,cs=new _,fr=class{constructor(e,n,i,r,s,o){this.planes=[e!==void 0?e:new Ut,n!==void 0?n:new Ut,i!==void 0?i:new Ut,r!==void 0?r:new Ut,s!==void 0?s:new Ut,o!==void 0?o:new Ut]}set(e,n,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}clone(){return new this.constructor().copy(this)}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],d=i[6],u=i[7],h=i[8],f=i[9],m=i[10],y=i[11],v=i[12],g=i[13],p=i[14],M=i[15];return n[0].setComponents(a-r,u-c,y-h,M-v).normalize(),n[1].setComponents(a+r,u+c,y+h,M+v).normalize(),n[2].setComponents(a+s,u+l,y+f,M+g).normalize(),n[3].setComponents(a-s,u-l,y-f,M-g).normalize(),n[4].setComponents(a-o,u-d,y-m,M-p).normalize(),n[5].setComponents(a+o,u+d,y+m,M+p).normalize(),this}intersectsObject(e){let n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Ti.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++){let o=n[s].distanceToPoint(i);if(o<r)return!1}return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(cs.x=r.normal.x>0?e.max.x:e.min.x,cs.y=r.normal.y>0?e.max.y:e.min.y,cs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cs)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}};function Dc(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){if(e===!0)return;if(n===null)return;i=t.requestAnimationFrame(r),e=!0},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function xf(t,e){let n=e.isWebGL2,i=new WeakMap;function r(l,d){let u=l.array,h=l.usage,f=t.createBuffer();t.bindBuffer(d,f),t.bufferData(d,u,h),l.onUploadCallback();let m=5126;return u instanceof Float32Array?m=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?l.isFloat16BufferAttribute?n?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:u instanceof Int16Array?m=5122:u instanceof Uint32Array?m=5125:u instanceof Int32Array?m=5124:u instanceof Int8Array?m=5120:u instanceof Uint8Array&&(m=5121),{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,d,u){let h=d.array,f=d.updateRange;t.bindBuffer(u,l),f.count===-1?t.bufferSubData(u,0,h):(n?t.bufferSubData(u,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):t.bufferSubData(u,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let d=i.get(l);d&&(t.deleteBuffer(d.buffer),i.delete(l))}function c(l,d){if(l.isGLBufferAttribute){let h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u===void 0?i.set(l,r(l,d)):u.version<l.version&&(s(u.buffer,l,d),u.version=l.version)}return{get:o,remove:a,update:c}}var Ic=class extends Oe{constructor(e=1,n=1,i=1,r=1){super();this.type="PlaneBufferGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,o=n/2,a=Math.floor(i),c=Math.floor(r),l=a+1,d=c+1,u=e/a,h=n/c,f=[],m=[],y=[],v=[];for(let g=0;g<d;g++){let p=g*h-o;for(let M=0;M<l;M++){let T=M*u-s;m.push(T,-p,0),y.push(0,0,1),v.push(M/a),v.push(1-g/c)}}for(let g=0;g<c;g++)for(let p=0;p<a;p++){let M=p+l*g,T=p+l*(g+1),E=p+1+l*(g+1),x=p+1+l*g;f.push(M,T,x),f.push(T,E,x)}this.setIndex(f),this.setAttribute("position",new Ne(m,3)),this.setAttribute("normal",new Ne(y,3)),this.setAttribute("uv",new Ne(v,2))}},_f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wf=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Mf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ef="vec3 transformed = vec3( position );",Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Af=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,Lf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,Nf=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor.xyz *= color.xyz;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,zf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Uf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",jf=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$f=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Kf=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,td=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,nd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,sd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,od=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cd=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,ud=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,fd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,md=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_d=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Td=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Ad=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,Cd=`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Rd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,Pd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,Dd=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Id=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,Nd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Fd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Od=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Vd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,jd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qd=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ep=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,tp=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,np=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ip=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,rp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,sp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,op=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ap=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lp=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,up=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_p=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ep=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ap=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Np=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Op=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,zp=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Gp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Re={alphamap_fragment:_f,alphamap_pars_fragment:bf,alphatest_fragment:wf,aomap_fragment:Mf,aomap_pars_fragment:Sf,begin_vertex:Ef,beginnormal_vertex:Tf,bsdfs:Af,bumpmap_pars_fragment:Lf,clipping_planes_fragment:Cf,clipping_planes_pars_fragment:Rf,clipping_planes_pars_vertex:Pf,clipping_planes_vertex:Df,color_fragment:If,color_pars_fragment:Nf,color_pars_vertex:Ff,color_vertex:Of,common:Bf,cube_uv_reflection_fragment:zf,defaultnormal_vertex:Uf,displacementmap_pars_vertex:Gf,displacementmap_vertex:Hf,emissivemap_fragment:kf,emissivemap_pars_fragment:Vf,encodings_fragment:Wf,encodings_pars_fragment:jf,envmap_fragment:qf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:Yf,envmap_pars_vertex:Zf,envmap_physical_pars_fragment:od,envmap_vertex:Jf,fog_vertex:$f,fog_pars_vertex:Kf,fog_fragment:Qf,fog_pars_fragment:ed,gradientmap_pars_fragment:td,lightmap_fragment:nd,lightmap_pars_fragment:id,lights_lambert_vertex:rd,lights_pars_begin:sd,lights_toon_fragment:ad,lights_toon_pars_fragment:cd,lights_phong_fragment:ld,lights_phong_pars_fragment:hd,lights_physical_fragment:ud,lights_physical_pars_fragment:fd,lights_fragment_begin:dd,lights_fragment_maps:pd,lights_fragment_end:md,logdepthbuf_fragment:gd,logdepthbuf_pars_fragment:vd,logdepthbuf_pars_vertex:yd,logdepthbuf_vertex:xd,map_fragment:_d,map_pars_fragment:bd,map_particle_fragment:wd,map_particle_pars_fragment:Md,metalnessmap_fragment:Sd,metalnessmap_pars_fragment:Ed,morphnormal_vertex:Td,morphtarget_pars_vertex:Ad,morphtarget_vertex:Ld,normal_fragment_begin:Cd,normal_fragment_maps:Rd,normalmap_pars_fragment:Pd,clearcoat_normal_fragment_begin:Dd,clearcoat_normal_fragment_maps:Id,clearcoat_pars_fragment:Nd,packing:Fd,premultiplied_alpha_fragment:Od,project_vertex:Bd,dithering_fragment:zd,dithering_pars_fragment:Ud,roughnessmap_fragment:Gd,roughnessmap_pars_fragment:Hd,shadowmap_pars_fragment:kd,shadowmap_pars_vertex:Vd,shadowmap_vertex:Wd,shadowmask_pars_fragment:jd,skinbase_vertex:qd,skinning_pars_vertex:Xd,skinning_vertex:Yd,skinnormal_vertex:Zd,specularmap_fragment:Jd,specularmap_pars_fragment:$d,tonemapping_fragment:Kd,tonemapping_pars_fragment:Qd,transmissionmap_fragment:ep,transmissionmap_pars_fragment:tp,uv_pars_fragment:np,uv_pars_vertex:ip,uv_vertex:rp,uv2_pars_fragment:sp,uv2_pars_vertex:op,uv2_vertex:ap,worldpos_vertex:cp,background_frag:lp,background_vert:hp,cube_frag:up,cube_vert:fp,depth_frag:dp,depth_vert:pp,distanceRGBA_frag:mp,distanceRGBA_vert:gp,equirect_frag:vp,equirect_vert:yp,linedashed_frag:xp,linedashed_vert:_p,meshbasic_frag:bp,meshbasic_vert:wp,meshlambert_frag:Mp,meshlambert_vert:Sp,meshmatcap_frag:Ep,meshmatcap_vert:Tp,meshtoon_frag:Ap,meshtoon_vert:Lp,meshphong_frag:Cp,meshphong_vert:Rp,meshphysical_frag:Pp,meshphysical_vert:Dp,normal_frag:Ip,normal_vert:Np,points_frag:Fp,points_vert:Op,shadow_frag:Bp,shadow_vert:zp,sprite_frag:Up,sprite_vert:Gp},te={common:{diffuse:{value:new ue(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new dt},uv2Transform:{value:new dt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new U(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new dt}},sprite:{diffuse:{value:new ue(15658734)},opacity:{value:1},center:{value:new U(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new dt}}},Ht={basic:{uniforms:ht([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:ht([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.fog,te.lights,{emissive:{value:new ue(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:ht([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:ht([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:ht([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new ue(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:ht([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:ht([te.points,te.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:ht([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:ht([te.common,te.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:ht([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Re.normal_vert,fragmentShader:Re.normal_frag},sprite:{uniforms:ht([te.sprite,te.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},cube:{uniforms:ht([te.envmap,{opacity:{value:1}}]),vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:ht([te.common,te.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:ht([te.lights,te.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Ht.physical={uniforms:ht([Ht.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new U(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new ue(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};function Hp(t,e,n,i,r){let s=new ue(0),o=0,a,c,l=null,d=0,u=null;function h(m,y,v,g){let p=y.isScene===!0?y.background:null;p&&p.isTexture&&(p=e.get(p));let M=t.xr,T=M.getSession&&M.getSession();T&&T.environmentBlendMode==="additive"&&(p=null),p===null?f(s,o):p&&p.isColor&&(f(p,1),g=!0),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),p&&(p.isCubeTexture||p.isWebGLCubeRenderTarget||p.mapping===Js)?(c===void 0&&(c=new Je(new Io(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:bi(Ht.cube.uniforms),vertexShader:Ht.cube.vertexShader,fragmentShader:Ht.cube.fragmentShader,side:tt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,x,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),p.isWebGLCubeRenderTarget&&(p=p.texture),c.material.uniforms.envMap.value=p,c.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p._needsFlipEnvMap?-1:1,(l!==p||d!==p.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,l=p,d=p.version,u=t.toneMapping),m.unshift(c,c.geometry,c.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new Je(new Ic(2,2),new vt({name:"BackgroundMaterial",uniforms:bi(Ht.background.uniforms),vertexShader:Ht.background.vertexShader,fragmentShader:Ht.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(l!==p||d!==p.version||u!==t.toneMapping)&&(a.material.needsUpdate=!0,l=p,d=p.version,u=t.toneMapping),m.unshift(a,a.geometry,a.material,0,0,null))}function f(m,y){n.buffers.color.setClear(m.r,m.g,m.b,y,r)}return{getClearColor:function(){return s},setClearColor:function(m,y=1){s.set(m),o=y,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,f(s,o)},render:h}}function kp(t,e,n,i){let r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=y(null),l=c;function d(N,B,P,I,G){let W=!1;if(o){let ne=m(I,P,B);l!==ne&&(l=ne,h(l.object)),W=v(I,G),W&&g(I,G)}else{let ne=B.wireframe===!0;(l.geometry!==I.id||l.program!==P.id||l.wireframe!==ne)&&(l.geometry=I.id,l.program=P.id,l.wireframe=ne,W=!0)}N.isInstancedMesh===!0&&(W=!0),G!==null&&n.update(G,34963),W&&(A(N,B,P,I),G!==null&&t.bindBuffer(34963,n.get(G).buffer))}function u(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function h(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function f(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function m(N,B,P){let I=P.wireframe===!0,G=a[N.id];G===void 0&&(G={},a[N.id]=G);let W=G[B.id];W===void 0&&(W={},G[B.id]=W);let ne=W[I];return ne===void 0&&(ne=y(u()),W[I]=ne),ne}function y(N){let B=[],P=[],I=[];for(let G=0;G<r;G++)B[G]=0,P[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:P,attributeDivisors:I,object:N,attributes:{},index:null}}function v(N,B){let P=l.attributes,I=N.attributes,G=0;for(let W in I){let ne=P[W],ce=I[W];if(ne===void 0)return!0;if(ne.attribute!==ce)return!0;if(ne.data!==ce.data)return!0;G++}return l.attributesNum!==G?!0:l.index!==B}function g(N,B){let P={},I=N.attributes,G=0;for(let W in I){let ne=I[W],ce={};ce.attribute=ne,ne.data&&(ce.data=ne.data),P[W]=ce,G++}l.attributes=P,l.attributesNum=G,l.index=B}function p(){let N=l.newAttributes;for(let B=0,P=N.length;B<P;B++)N[B]=0}function M(N){T(N,0)}function T(N,B){let P=l.newAttributes,I=l.enabledAttributes,G=l.attributeDivisors;if(P[N]=1,I[N]===0&&(t.enableVertexAttribArray(N),I[N]=1),G[N]!==B){let W=i.isWebGL2?t:e.get("ANGLE_instanced_arrays");W[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,B),G[N]=B}}function E(){let N=l.newAttributes,B=l.enabledAttributes;for(let P=0,I=B.length;P<I;P++)B[P]!==N[P]&&(t.disableVertexAttribArray(P),B[P]=0)}function x(N,B,P,I,G,W){i.isWebGL2===!0&&(P===5124||P===5125)?t.vertexAttribIPointer(N,B,P,G,W):t.vertexAttribPointer(N,B,P,I,G,W)}function A(N,B,P,I){if(i.isWebGL2===!1&&(N.isInstancedMesh||I.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();let G=I.attributes,W=P.getAttributes(),ne=B.defaultAttributeValues;for(let ce in W){let ae=W[ce];if(ae>=0){let ye=G[ce];if(ye!==void 0){let be=ye.normalized,We=ye.itemSize,k=n.get(ye);if(k===void 0)continue;let et=k.buffer,me=k.type,Pe=k.bytesPerElement;if(ye.isInterleavedBufferAttribute){let we=ye.data,Fe=we.stride,Se=ye.offset;we&&we.isInstancedInterleavedBuffer?(T(ae,we.meshPerAttribute),I._maxInstanceCount===void 0&&(I._maxInstanceCount=we.meshPerAttribute*we.count)):M(ae),t.bindBuffer(34962,et),x(ae,We,me,be,Fe*Pe,Se*Pe)}else ye.isInstancedBufferAttribute?(T(ae,ye.meshPerAttribute),I._maxInstanceCount===void 0&&(I._maxInstanceCount=ye.meshPerAttribute*ye.count)):M(ae),t.bindBuffer(34962,et),x(ae,We,me,be,0,0)}else if(ce==="instanceMatrix"){let be=n.get(N.instanceMatrix);if(be===void 0)continue;let We=be.buffer,k=be.type;T(ae+0,1),T(ae+1,1),T(ae+2,1),T(ae+3,1),t.bindBuffer(34962,We),t.vertexAttribPointer(ae+0,4,k,!1,64,0),t.vertexAttribPointer(ae+1,4,k,!1,64,16),t.vertexAttribPointer(ae+2,4,k,!1,64,32),t.vertexAttribPointer(ae+3,4,k,!1,64,48)}else if(ce==="instanceColor"){let be=n.get(N.instanceColor);if(be===void 0)continue;let We=be.buffer,k=be.type;T(ae,1),t.bindBuffer(34962,We),t.vertexAttribPointer(ae,3,k,!1,12,0)}else if(ne!==void 0){let be=ne[ce];if(be!==void 0)switch(be.length){case 2:t.vertexAttrib2fv(ae,be);break;case 3:t.vertexAttrib3fv(ae,be);break;case 4:t.vertexAttrib4fv(ae,be);break;default:t.vertexAttrib1fv(ae,be)}}}}E()}function D(){C();for(let N in a){let B=a[N];for(let P in B){let I=B[P];for(let G in I)f(I[G].object),delete I[G];delete B[P]}delete a[N]}}function V(N){if(a[N.id]===void 0)return;let B=a[N.id];for(let P in B){let I=B[P];for(let G in I)f(I[G].object),delete I[G];delete B[P]}delete a[N.id]}function X(N){for(let B in a){let P=a[B];if(P[N.id]===void 0)continue;let I=P[N.id];for(let G in I)f(I[G].object),delete I[G];delete P[N.id]}}function C(){if(O(),l===c)return;l=c,h(l.object)}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:C,resetDefaultState:O,dispose:D,releaseStatesOfGeometry:V,releaseStatesOfProgram:X,initAttributes:p,enableAttribute:M,disableUnusedAttributes:E}}function Vp(t,e,n,i){let r=i.isWebGL2,s;function o(l){s=l}function a(l,d){t.drawArrays(s,l,d),n.update(d,s,1)}function c(l,d,u){if(u===0)return;let h,f;if(r)h=t,f="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](s,l,d,u),n.update(d,s,u)}this.setMode=o,this.render=a,this.renderInstances=c}function Wp(t,e,n){let i;function r(){if(i!==void 0)return i;let x=e.get("EXT_texture_filter_anisotropic");return x!==null?i=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function s(x){if(x==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";x="mediump"}return x==="mediump"&&(t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0)?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&t instanceof WebGL2ComputeRenderingContext,a=n.precision!==void 0?n.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=n.logarithmicDepthBuffer===!0,d=t.getParameter(34930),u=t.getParameter(35660),h=t.getParameter(3379),f=t.getParameter(34076),m=t.getParameter(34921),y=t.getParameter(36347),v=t.getParameter(36348),g=t.getParameter(36349),p=u>0,M=o||!!e.get("OES_texture_float"),T=p&&M,E=o?t.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:d,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:p,floatFragmentTextures:M,floatVertexTextures:T,maxSamples:E}}function jp(t){let e=this,n=null,i=0,r=!1,s=!1,o=new Ut,a=new dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h,f){let m=u.length!==0||h||i!==0||r;return r=h,n=d(u,f,0),i=u.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1,l()},this.setState=function(u,h,f){let m=u.clippingPlanes,y=u.clipIntersection,v=u.clipShadows,g=t.get(u);if(!r||m===null||m.length===0||s&&!v)s?d(null):l();else{let p=s?0:i,M=p*4,T=g.clippingState||null;c.value=T,T=d(m,h,M,f);for(let E=0;E!==M;++E)T[E]=n[E];g.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=p}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,f,m){let y=u!==null?u.length:0,v=null;if(y!==0){if(v=c.value,m!==!0||v===null){let g=f+y*4,p=h.matrixWorldInverse;a.getNormalMatrix(p),(v===null||v.length<g)&&(v=new Float32Array(g));for(let M=0,T=f;M!==y;++M,T+=4)o.copy(u[M]).applyMatrix4(p,a),o.normal.toArray(v,T),v[T+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function qp(t){let e=new WeakMap;function n(o,a){return a===Ja?o.mapping=Ys:a===$a&&(o.mapping=Zs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ja||a===$a)if(e.has(o)){let c=e.get(o).texture;return n(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=t.getRenderList(),d=t.getRenderTarget(),u=t.getRenderState(),h=new Un(c.height/2);return h.fromEquirectangularTexture(t,o),e.set(o,h),t.setRenderTarget(d),t.setRenderList(l),t.setRenderState(u),o.addEventListener("dispose",r),n(h.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function Xp(t){let e={};return{has:function(n){if(e[n]!==void 0)return e[n]!==null;let i;switch(n){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(n)}return e[n]=i,i!==null},get:function(n){return this.has(n)||console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),e[n]}}}function Yp(t,e,n,i){let r=new WeakMap,s=new WeakMap;function o(u){let h=u.target,f=r.get(h);f.index!==null&&e.remove(f.index);for(let y in f.attributes)e.remove(f.attributes[y]);h.removeEventListener("dispose",o),r.delete(h);let m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(u,h){let f=r.get(h);return f||(h.addEventListener("dispose",o),h.isBufferGeometry?f=h:h.isGeometry&&(h._bufferGeometry===void 0&&(h._bufferGeometry=new Oe().setFromObject(u)),f=h._bufferGeometry),r.set(h,f),n.memory.geometries++,f)}function c(u){let h=u.attributes;for(let m in h)e.update(h[m],34962);let f=u.morphAttributes;for(let m in f){let y=f[m];for(let v=0,g=y.length;v<g;v++)e.update(y[v],34962)}}function l(u){let h=[],f=u.index,m=u.attributes.position,y=0;if(f!==null){let p=f.array;y=f.version;for(let M=0,T=p.length;M<T;M+=3){let E=p[M+0],x=p[M+1],A=p[M+2];h.push(E,x,x,A,A,E)}}else{let p=m.array;y=m.version;for(let M=0,T=p.length/3-1;M<T;M+=3){let E=M+0,x=M+1,A=M+2;h.push(E,x,x,A,A,E)}}let v=new(Cc(h)>65535?lr:cr)(h,1);v.version=y;let g=s.get(u);g&&e.remove(g),s.set(u,v)}function d(u){let h=s.get(u);if(h){let f=u.index;f!==null&&(h.version<f.version&&l(u))}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:d}}function Zp(t,e,n,i){let r=i.isWebGL2,s;function o(h){s=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function d(h,f){t.drawElements(s,f,a,h*c),n.update(f,s,1)}function u(h,f,m){if(m===0)return;let y,v;if(r)y=t,v="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[v](s,f,a,h*c,m),n.update(f,s,m)}this.setMode=o,this.setIndex=l,this.render=d,this.renderInstances=u}function Jp(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){n.calls++;switch(o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function $p(t,e){return t[0]-e[0]}function Kp(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Qp(t){let e={},n=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){let l=s.morphTargetInfluences,d=l===void 0?0:l.length,u=e[o.id];if(u===void 0){u=[];for(let v=0;v<d;v++)u[v]=[v,0];e[o.id]=u}for(let v=0;v<d;v++){let g=u[v];g[0]=v,g[1]=l[v]}u.sort(Kp);for(let v=0;v<8;v++)v<d&&u[v][1]?(i[v][0]=u[v][0],i[v][1]=u[v][1]):(i[v][0]=Number.MAX_SAFE_INTEGER,i[v][1]=0);i.sort($p);let h=a.morphTargets&&o.morphAttributes.position,f=a.morphNormals&&o.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let g=i[v],p=g[0],M=g[1];p!==Number.MAX_SAFE_INTEGER&&M?(h&&o.getAttribute("morphTarget"+v)!==h[p]&&o.setAttribute("morphTarget"+v,h[p]),f&&o.getAttribute("morphNormal"+v)!==f[p]&&o.setAttribute("morphNormal"+v,f[p]),n[v]=M,m+=M):(h&&o.hasAttribute("morphTarget"+v)===!0&&o.deleteAttribute("morphTarget"+v),f&&o.hasAttribute("morphNormal"+v)===!0&&o.deleteAttribute("morphNormal"+v),n[v]=0)}let y=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(t,"morphTargetBaseInfluence",y),c.getUniforms().setValue(t,"morphTargetInfluences",n)}return{update:r}}function em(t,e,n,i){let r=new WeakMap;function s(a){let c=i.render.frame,l=a.geometry,d=e.get(a,l);return r.get(d)!==c&&(l.isGeometry&&d.updateFromObject(a),e.update(d),r.set(d,c)),a.isInstancedMesh&&(n.update(a.instanceMatrix,34962),a.instanceColor!==null&&n.update(a.instanceColor,34962)),d}function o(){r=new WeakMap}return{update:s,dispose:o}}function dr(t=null,e=1,n=1,i=1){ke.call(this,null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=ft,this.minFilter=ft,this.wrapR=_t,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}dr.prototype=Object.create(ke.prototype);dr.prototype.constructor=dr;dr.prototype.isDataTexture2DArray=!0;function pr(t=null,e=1,n=1,i=1){ke.call(this,null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=ft,this.minFilter=ft,this.wrapR=_t,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}pr.prototype=Object.create(ke.prototype);pr.prototype.constructor=pr;pr.prototype.isDataTexture3D=!0;var Nc=new ke,tm=new dr,nm=new pr,Fc=new Sn,Oc=[],Bc=[],zc=new Float32Array(16),Uc=new Float32Array(9),Gc=new Float32Array(4);function Ai(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=Oc[r];if(s===void 0&&(s=new Float32Array(r),Oc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Mt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Hc(t,e){let n=Bc[e];n===void 0&&(n=new Int32Array(e),Bc[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function im(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function rm(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),Mt(n,e)}}function sm(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),Mt(n,e)}}function om(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),Mt(n,e)}}function am(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Mt(n,e)}else{if(Tt(n,i))return;Gc.set(i),t.uniformMatrix2fv(this.addr,!1,Gc),Mt(n,i)}}function cm(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Mt(n,e)}else{if(Tt(n,i))return;Uc.set(i),t.uniformMatrix3fv(this.addr,!1,Uc),Mt(n,i)}}function lm(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Mt(n,e)}else{if(Tt(n,i))return;zc.set(i),t.uniformMatrix4fv(this.addr,!1,zc),Mt(n,i)}}function hm(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(e||Nc,r)}function um(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||tm,r)}function fm(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||nm,r)}function dm(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(e||Fc,r)}function pm(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function mm(t,e){let n=this.cache;if(Tt(n,e))return;t.uniform2iv(this.addr,e),Mt(n,e)}function gm(t,e){let n=this.cache;if(Tt(n,e))return;t.uniform3iv(this.addr,e),Mt(n,e)}function vm(t,e){let n=this.cache;if(Tt(n,e))return;t.uniform4iv(this.addr,e),Mt(n,e)}function ym(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function xm(t){switch(t){case 5126:return im;case 35664:return rm;case 35665:return sm;case 35666:return om;case 35674:return am;case 35675:return cm;case 35676:return lm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return vm;case 5125:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return um}}function _m(t,e){t.uniform1fv(this.addr,e)}function bm(t,e){t.uniform1iv(this.addr,e)}function wm(t,e){t.uniform2iv(this.addr,e)}function Mm(t,e){t.uniform3iv(this.addr,e)}function Sm(t,e){t.uniform4iv(this.addr,e)}function Em(t,e){let n=Ai(e,this.size,2);t.uniform2fv(this.addr,n)}function Tm(t,e){let n=Ai(e,this.size,3);t.uniform3fv(this.addr,n)}function Am(t,e){let n=Ai(e,this.size,4);t.uniform4fv(this.addr,n)}function Lm(t,e){let n=Ai(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Cm(t,e){let n=Ai(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Rm(t,e){let n=Ai(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Pm(t,e,n){let i=e.length,r=Hc(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTexture2D(e[s]||Nc,r[s])}function Dm(t,e,n){let i=e.length,r=Hc(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTextureCube(e[s]||Fc,r[s])}function Im(t){switch(t){case 5126:return _m;case 35664:return Em;case 35665:return Tm;case 35666:return Am;case 35674:return Lm;case 35675:return Cm;case 35676:return Rm;case 5124:case 35670:return bm;case 35667:case 35671:return wm;case 35668:case 35672:return Mm;case 35669:case 35673:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35680:case 36300:case 36308:case 36293:return Dm}}function Nm(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=xm(e.type)}function kc(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Im(e.type)}kc.prototype.updateCache=function(t){let e=this.cache;t instanceof Float32Array&&e.length!==t.length&&(this.cache=new Float32Array(t.length)),Mt(e,t)};function Vc(t){this.id=t,this.seq=[],this.map={}}Vc.prototype.setValue=function(t,e,n){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let o=i[r];o.setValue(t,e[o.id],n)}};var No=/([\w\d_]+)(\])?(\[|\.)?/g;function Wc(t,e){t.seq.push(e),t.map[e.id]=e}function Fm(t,e,n){let i=t.name,r=i.length;for(No.lastIndex=0;;){let s=No.exec(i),o=No.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Wc(n,l===void 0?new Nm(a,t,e):new kc(a,t,e));break}else{let d=n.map,u=d[a];u===void 0&&(u=new Vc(a),Wc(n,u)),n=u}}}function En(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),s=t.getUniformLocation(e,r.name);Fm(r,s,this)}}En.prototype.setValue=function(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)};En.prototype.setOptional=function(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)};En.upload=function(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){let o=e[r],a=n[o.id];a.needsUpdate!==!1&&o.setValue(t,a.value,i)}};En.seqWithValue=function(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let s=t[i];s.id in e&&n.push(s)}return n};function jc(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Om=0;function Bm(t){let e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function qc(t){switch(t){case ri:return["Linear","( value )"];case io:return["sRGB","( value )"];case fc:return["RGBE","( value )"];case dc:return["RGBM","( value, 7.0 )"];case pc:return["RGBM","( value, 16.0 )"];case mc:return["RGBD","( value, 256.0 )"];case uc:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case $u:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Xc(t,e,n){let i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=t.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+r+Bm(s)}function mr(t,e){let n=qc(e);return"vec4 "+t+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function zm(t,e){let n=qc(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function Um(t,e){let n;switch(e){case Jh:n="Linear";break;case $h:n="Reinhard";break;case Kh:n="OptimizedCineon";break;case Qh:n="ACESFilmic";break;case eu:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Gm(t){let e=[t.extensionDerivatives||t.envMapCubeUV||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""];return e.filter(gr).join(`
`)}function Hm(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function km(t,e){let n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),o=s.name;n[o]=t.getAttribLocation(e,o)}return n}function gr(t){return t!==""}function Yc(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zc(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(t){return t.replace(Vm,Wm)}function Wm(t,e){let n=Re[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Fo(n)}var jm=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(t){return t.replace(qm,Jc).replace(jm,Xm)}function Xm(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Jc(t,e,n,i)}function Jc(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kc(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ym(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ga?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===qs?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function Zm(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ys:case Zs:e="ENVMAP_TYPE_CUBE";break;case Js:case $s:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jm(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Zs:case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function $m(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Or:e="ENVMAP_BLENDING_MULTIPLY";break;case Yh:e="ENVMAP_BLENDING_MIX";break;case Zh:e="ENVMAP_BLENDING_ADD";break}return e}function Km(t,e,n,i){let r=t.getContext(),s=n.defines,o=n.vertexShader,a=n.fragmentShader,c=Ym(n),l=Zm(n),d=Jm(n),u=$m(n),h=t.gammaFactor>0?t.gammaFactor:1,f=n.isWebGL2?"":Gm(n),m=Hm(s),y=r.createProgram(),v,g,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=[m].filter(gr).join(`
`),v.length>0&&(v+=`
`),g=[f,m].filter(gr).join(`
`),g.length>0&&(g+=`
`)):(v=[Kc(n),"#define SHADER_NAME "+n.shaderName,m,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+h,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),g=[f,Kc(n),"#define SHADER_NAME "+n.shaderName,m,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+h,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+d:"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==tr?"#define TONE_MAPPING":"",n.toneMapping!==tr?Re.tonemapping_pars_fragment:"",n.toneMapping!==tr?Um("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",Re.encodings_pars_fragment,n.map?mr("mapTexelToLinear",n.mapEncoding):"",n.matcap?mr("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?mr("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?mr("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?mr("lightMapTexelToLinear",n.lightMapEncoding):"",zm("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gr).join(`
`)),o=Fo(o),o=Yc(o,n),o=Zc(o,n),a=Fo(a),a=Yc(a,n),a=Zc(a,n),o=$c(o),a=$c(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",n.glslVersion===gc?"":"out highp vec4 pc_fragColor;",n.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=p+v+o,T=p+g+a,E=jc(r,35633,M),x=jc(r,35632,T);if(r.attachShader(y,E),r.attachShader(y,x),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),t.debug.checkShaderErrors){let V=r.getProgramInfoLog(y).trim(),X=r.getShaderInfoLog(E).trim(),C=r.getShaderInfoLog(x).trim(),O=!0,N=!0;if(r.getProgramParameter(y,35714)===!1){O=!1;let B=Xc(r,E,"vertex"),P=Xc(r,x,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(y,35715),"gl.getProgramInfoLog",V,B,P)}else V!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",V):(X===""||C==="")&&(N=!1);N&&(this.diagnostics={runnable:O,programLog:V,vertexShader:{log:X,prefix:v},fragmentShader:{log:C,prefix:g}})}r.deleteShader(E),r.deleteShader(x);let A;this.getUniforms=function(){return A===void 0&&(A=new En(r,y)),A};let D;return this.getAttributes=function(){return D===void 0&&(D=km(r,y)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=Om++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=x,this}function Qm(t,e,n,i,r,s){let o=[],a=i.isWebGL2,c=i.logarithmicDepthBuffer,l=i.floatVertexTextures,d=i.maxVertexUniforms,u=i.vertexTextures,h=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},m=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function y(x){let A=x.skeleton,D=A.bones;if(l)return 1024;{let V=d,X=Math.floor((V-20)/4),C=Math.min(X,D.length);return C<D.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+D.length+" bones. This GPU supports "+C+"."),0):C}}function v(x){let A;return x?x.isTexture?A=x.encoding:x.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),A=x.texture.encoding):A=ri,A}function g(x,A,D,V,X){let C=V.fog,O=x.isMeshStandardMaterial?V.environment:null,N=e.get(x.envMap||O),B=f[x.type],P=X.isSkinnedMesh?y(X):0;x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let I,G;if(B){let ce=Ht[B];I=ce.vertexShader,G=ce.fragmentShader}else I=x.vertexShader,G=x.fragmentShader;let W=t.getRenderTarget(),ne={isWebGL2:a,shaderID:B,shaderName:x.type,vertexShader:I,fragmentShader:G,defines:x.defines,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,instancing:X.isInstancedMesh===!0,instancingColor:X.isInstancedMesh===!0&&X.instanceColor!==null,supportsVertexTextures:u,outputEncoding:W!==null?v(W.texture):t.outputEncoding,map:!!x.map,mapEncoding:v(x.map),matcap:!!x.matcap,matcapEncoding:v(x.matcap),envMap:!!N,envMapMode:N&&N.mapping,envMapEncoding:v(N),envMapCubeUV:!!N&&(N.mapping===Js||N.mapping===$s),lightMap:!!x.lightMap,lightMapEncoding:v(x.lightMap),aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,emissiveMapEncoding:v(x.emissiveMap),bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===ef,tangentSpaceNormalMap:x.normalMapType===si,clearcoatMap:!!x.clearcoatMap,clearcoatRoughnessMap:!!x.clearcoatRoughnessMap,clearcoatNormalMap:!!x.clearcoatNormalMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,alphaMap:!!x.alphaMap,gradientMap:!!x.gradientMap,sheen:!!x.sheen,transmissionMap:!!x.transmissionMap,combine:x.combine,vertexTangents:x.normalMap&&x.vertexTangents,vertexColors:x.vertexColors,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.displacementMap||!!x.transmissionMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.transmissionMap)&&!!x.displacementMap,fog:!!C,useFog:x.fog,fogExp2:C&&C.isFogExp2,flatShading:x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:c,skinning:x.skinning&&P>0,maxBones:P,useVertexTexture:l,morphTargets:x.morphTargets,morphNormals:x.morphNormals,maxMorphTargets:t.maxMorphTargets,maxMorphNormals:t.maxMorphNormals,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:x.toneMapped?t.toneMapping:tr,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,alphaTest:x.alphaTest,doubleSided:x.side===Fr,flipSided:x.side===tt,depthPacking:x.depthPacking!==void 0?x.depthPacking:!1,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()};return ne}function p(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.fragmentShader),A.push(x.vertexShader)),x.defines!==void 0)for(let D in x.defines)A.push(D),A.push(x.defines[D]);if(x.isRawShaderMaterial===!1){for(let D=0;D<m.length;D++)A.push(x[m[D]]);A.push(t.outputEncoding),A.push(t.gammaFactor)}return A.push(x.customProgramCacheKey),A.join()}function M(x){let A=f[x.type],D;if(A){let V=Ht[A];D=gf.clone(V.uniforms)}else D=x.uniforms;return D}function T(x,A){let D;for(let V=0,X=o.length;V<X;V++){let C=o[V];if(C.cacheKey===A){D=C,++D.usedTimes;break}}return D===void 0&&(D=new Km(t,A,x,r),o.push(D)),D}function E(x){if(--x.usedTimes===0){let A=o.indexOf(x);o[A]=o[o.length-1],o.pop(),x.destroy()}}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:T,releaseProgram:E,programs:o}}function eg(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function tg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program!==e.program?t.program.id-e.program.id:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ng(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qc(t){let e=[],n=0,i=[],r=[],s={id:-1};function o(){n=0,i.length=0,r.length=0}function a(h,f,m,y,v,g){let p=e[n],M=t.get(m);return p===void 0?(p={id:h.id,object:h,geometry:f,material:m,program:M.program||s,groupOrder:y,renderOrder:h.renderOrder,z:v,group:g},e[n]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=m,p.program=M.program||s,p.groupOrder=y,p.renderOrder=h.renderOrder,p.z=v,p.group=g),n++,p}function c(h,f,m,y,v,g){let p=a(h,f,m,y,v,g);(m.transparent===!0?r:i).push(p)}function l(h,f,m,y,v,g){let p=a(h,f,m,y,v,g);(m.transparent===!0?r:i).unshift(p)}function d(h,f){i.length>1&&i.sort(h||tg),r.length>1&&r.sort(f||ng)}function u(){for(let h=n,f=e.length;h<f;h++){let m=e[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.program=null,m.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:u,sort:d}}function ig(t){let e=new WeakMap;function n(r,s){let o=e.get(r),a;return o===void 0?(a=new Qc(t),e.set(r,new WeakMap),e.get(r).set(s,a)):(a=o.get(s),a===void 0&&(a=new Qc(t),o.set(s,a))),a}function i(){e=new WeakMap}return{get:n,dispose:i}}function rg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new _,color:new ue};break;case"SpotLight":n={position:new _,direction:new _,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new _,color:new ue,distance:0,decay:0};break;case"HemisphereLight":n={direction:new _,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":n={color:new ue,position:new _,halfWidth:new _,halfHeight:new _};break}return t[e.id]=n,n}}}function sg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var og=0;function ag(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function cg(t,e){let n=new rg,i=sg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let l=0;l<9;l++)r.probe.push(new _);let s=new _,o=new Te,a=new Te;function c(l,d,u){let h=0,f=0,m=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let y=0,v=0,g=0,p=0,M=0,T=0,E=0,x=0,A=u.matrixWorldInverse;l.sort(ag);for(let V=0,X=l.length;V<X;V++){let C=l[V],O=C.color,N=C.intensity,B=C.distance,P=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=O.r*N,f+=O.g*N,m+=O.b*N;else if(C.isLightProbe)for(let I=0;I<9;I++)r.probe[I].addScaledVector(C.sh.coefficients[I],N);else if(C.isDirectionalLight){let I=n.get(C);if(I.color.copy(C.color).multiplyScalar(C.intensity),I.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(A),C.castShadow){let G=C.shadow,W=i.get(C);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,r.directionalShadow[y]=W,r.directionalShadowMap[y]=P,r.directionalShadowMatrix[y]=C.shadow.matrix,T++}r.directional[y]=I,y++}else if(C.isSpotLight){let I=n.get(C);if(I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(A),I.color.copy(O).multiplyScalar(N),I.distance=B,I.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(A),I.coneCos=Math.cos(C.angle),I.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),I.decay=C.decay,C.castShadow){let G=C.shadow,W=i.get(C);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,r.spotShadow[g]=W,r.spotShadowMap[g]=P,r.spotShadowMatrix[g]=C.shadow.matrix,x++}r.spot[g]=I,g++}else if(C.isRectAreaLight){let I=n.get(C);I.color.copy(O).multiplyScalar(N),I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(A),a.identity(),o.copy(C.matrixWorld),o.premultiply(A),a.extractRotation(o),I.halfWidth.set(C.width*.5,0,0),I.halfHeight.set(0,C.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),r.rectArea[p]=I,p++}else if(C.isPointLight){let I=n.get(C);if(I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(A),I.color.copy(C.color).multiplyScalar(C.intensity),I.distance=C.distance,I.decay=C.decay,C.castShadow){let G=C.shadow,W=i.get(C);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,W.shadowCameraNear=G.camera.near,W.shadowCameraFar=G.camera.far,r.pointShadow[v]=W,r.pointShadowMap[v]=P,r.pointShadowMatrix[v]=C.shadow.matrix,E++}r.point[v]=I,v++}else if(C.isHemisphereLight){let I=n.get(C);I.direction.setFromMatrixPosition(C.matrixWorld),I.direction.transformDirection(A),I.direction.normalize(),I.skyColor.copy(C.color).multiplyScalar(N),I.groundColor.copy(C.groundColor).multiplyScalar(N),r.hemi[M]=I,M++}}p>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=te.LTC_FLOAT_1,r.rectAreaLTC2=te.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=te.LTC_HALF_1,r.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=f,r.ambient[2]=m;let D=r.hash;(D.directionalLength!==y||D.pointLength!==v||D.spotLength!==g||D.rectAreaLength!==p||D.hemiLength!==M||D.numDirectionalShadows!==T||D.numPointShadows!==E||D.numSpotShadows!==x)&&(r.directional.length=y,r.spot.length=g,r.rectArea.length=p,r.point.length=v,r.hemi.length=M,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=x,r.spotShadowMap.length=x,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=E,r.spotShadowMatrix.length=x,D.directionalLength=y,D.pointLength=v,D.spotLength=g,D.rectAreaLength=p,D.hemiLength=M,D.numDirectionalShadows=T,D.numPointShadows=E,D.numSpotShadows=x,r.version=og++)}return{setup:c,state:r}}function el(t,e){let n=new cg(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function c(d){n.setup(i,r,d)}let l={lightsArray:i,shadowsArray:r,lights:n};return{init:s,state:l,setupLights:c,pushLight:o,pushShadow:a}}function lg(t,e){let n=new WeakMap;function i(s,o){let a;return n.has(s)===!1?(a=new el(t,e),n.set(s,new WeakMap),n.get(s).set(o,a)):n.get(s).has(o)===!1?(a=new el(t,e),n.get(s).set(o,a)):a=n.get(s).get(o),a}function r(){n=new WeakMap}return{get:i,dispose:r}}function Gn(t){ve.call(this),this.type="MeshDepthMaterial",this.depthPacking=Ku,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}Gn.prototype=Object.create(ve.prototype);Gn.prototype.constructor=Gn;Gn.prototype.isMeshDepthMaterial=!0;Gn.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this};function Hn(t){ve.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new _,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}Hn.prototype=Object.create(ve.prototype);Hn.prototype.constructor=Hn;Hn.prototype.isMeshDistanceMaterial=!0;Hn.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this};var hg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function tl(t,e,n){let i=new fr,r=new U,s=new U,o=new ze,a=[],c=[],l={},d={0:tt,1:Nr,2:Fr},u=new vt({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new U},radius:{value:4}},vertexShader:ug,fragmentShader:hg}),h=u.clone();h.defines.HORIZONAL_PASS=1;let f=new Oe;f.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new Je(f,u),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ga,this.render=function(E,x,A){if(y.enabled===!1)return;if(y.autoUpdate===!1&&y.needsUpdate===!1)return;if(E.length===0)return;let D=t.getRenderTarget(),V=t.getActiveCubeFace(),X=t.getActiveMipmapLevel(),C=t.state;C.setBlending(Qi),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);for(let O=0,N=E.length;O<N;O++){let B=E[O],P=B.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);let I=P.getFrameExtents();if(r.multiply(I),s.copy(P.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(s.x=Math.floor(n/I.x),r.x=s.x*I.x,P.mapSize.x=s.x),r.y>n&&(s.y=Math.floor(n/I.y),r.y=s.y*I.y,P.mapSize.y=s.y)),P.map===null&&!P.isPointLightShadow&&this.type===Ki){let W={minFilter:lt,magFilter:lt,format:Dt};P.map=new It(r.x,r.y,W),P.map.texture.name=B.name+".shadowMap",P.mapPass=new It(r.x,r.y,W),P.camera.updateProjectionMatrix()}if(P.map===null){let W={minFilter:ft,magFilter:ft,format:Dt};P.map=new It(r.x,r.y,W),P.map.texture.name=B.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();let G=P.getViewportCount();for(let W=0;W<G;W++){let ne=P.getViewport(W);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),C.viewport(o),P.updateMatrices(B,W),i=P.getFrustum(),T(x,A,P.camera,B,this.type)}!P.isPointLightShadow&&this.type===Ki&&v(P,A),P.needsUpdate=!1}y.needsUpdate=!1,t.setRenderTarget(D,V,X)};function v(E,x){let A=e.update(m);u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(x,null,A,u,m,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(x,null,A,h,m,null)}function g(E,x,A){let D=E<<0|x<<1|A<<2,V=a[D];return V===void 0&&(V=new Gn({depthPacking:Qu,morphTargets:E,skinning:x}),a[D]=V),V}function p(E,x,A){let D=E<<0|x<<1|A<<2,V=c[D];return V===void 0&&(V=new Hn({morphTargets:E,skinning:x}),c[D]=V),V}function M(E,x,A,D,V,X,C){let O=null,N=g,B=E.customDepthMaterial;if(D.isPointLight===!0&&(N=p,B=E.customDistanceMaterial),B===void 0){let P=!1;A.morphTargets===!0&&(P=x.morphAttributes&&x.morphAttributes.position&&x.morphAttributes.position.length>0);let I=!1;E.isSkinnedMesh===!0&&(A.skinning===!0?I=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",E));let G=E.isInstancedMesh===!0;O=N(P,I,G)}else O=B;if(t.localClippingEnabled&&A.clipShadows===!0&&A.clippingPlanes.length!==0){let P=O.uuid,I=A.uuid,G=l[P];G===void 0&&(G={},l[P]=G);let W=G[I];W===void 0&&(W=O.clone(),G[I]=W),O=W}return O.visible=A.visible,O.wireframe=A.wireframe,C===Ki?O.side=A.shadowSide!==null?A.shadowSide:A.side:O.side=A.shadowSide!==null?A.shadowSide:d[A.side],O.clipShadows=A.clipShadows,O.clippingPlanes=A.clippingPlanes,O.clipIntersection=A.clipIntersection,O.wireframeLinewidth=A.wireframeLinewidth,O.linewidth=A.linewidth,D.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(D.matrixWorld),O.nearDistance=V,O.farDistance=X),O}function T(E,x,A,D,V){if(E.visible===!1)return;let X=E.layers.test(x.layers);if(X&&(E.isMesh||E.isLine||E.isPoints)&&((E.castShadow||E.receiveShadow&&V===Ki)&&(!E.frustumCulled||i.intersectsObject(E)))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);let O=e.update(E),N=E.material;if(Array.isArray(N)){let B=O.groups;for(let P=0,I=B.length;P<I;P++){let G=B[P],W=N[G.materialIndex];if(W&&W.visible){let ne=M(E,O,W,D,A.near,A.far,V);t.renderBufferDirect(A,null,O,ne,E,G)}}}else if(N.visible){let B=M(E,O,N,D,A.near,A.far,V);t.renderBufferDirect(A,null,O,B,E,null)}}let C=E.children;for(let O=0,N=C.length;O<N;O++)T(C[O],x,A,D,V)}}function fg(t,e,n){let i=n.isWebGL2;function r(){let R=!1,J=new ze,ie=null,he=new ze(0,0,0,0);return{setMask:function(Q){ie!==Q&&!R&&(t.colorMask(Q,Q,Q,Q),ie=Q)},setLocked:function(Q){R=Q},setClear:function(Q,le,de,L,q){q===!0&&(Q*=L,le*=L,de*=L),J.set(Q,le,de,L),he.equals(J)===!1&&(t.clearColor(Q,le,de,L),he.copy(J))},reset:function(){R=!1,ie=null,he.set(-1,0,0,0)}}}function s(){let R=!1,J=null,ie=null,he=null;return{setTest:function(Q){Q?ce(2929):ae(2929)},setMask:function(Q){J!==Q&&!R&&(t.depthMask(Q),J=Q)},setFunc:function(Q){if(ie!==Q){if(Q)switch(Q){case Hh:t.depthFunc(512);break;case kh:t.depthFunc(519);break;case Vh:t.depthFunc(513);break;case Xs:t.depthFunc(515);break;case Wh:t.depthFunc(514);break;case jh:t.depthFunc(518);break;case qh:t.depthFunc(516);break;case Xh:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);ie=Q}},setLocked:function(Q){R=Q},setClear:function(Q){he!==Q&&(t.clearDepth(Q),he=Q)},reset:function(){R=!1,J=null,ie=null,he=null}}}function o(){let R=!1,J=null,ie=null,he=null,Q=null,le=null,de=null,L=null,q=null;return{setTest:function(oe){R||(oe?ce(2960):ae(2960))},setMask:function(oe){J!==oe&&!R&&(t.stencilMask(oe),J=oe)},setFunc:function(oe,Me,Ye){(ie!==oe||he!==Me||Q!==Ye)&&(t.stencilFunc(oe,Me,Ye),ie=oe,he=Me,Q=Ye)},setOp:function(oe,Me,Ye){(le!==oe||de!==Me||L!==Ye)&&(t.stencilOp(oe,Me,Ye),le=oe,de=Me,L=Ye)},setLocked:function(oe){R=oe},setClear:function(oe){q!==oe&&(t.clearStencil(oe),q=oe)},reset:function(){R=!1,J=null,ie=null,he=null,Q=null,le=null,de=null,L=null,q=null}}}let a=new r,c=new s,l=new o,d={},u=null,h=null,f=null,m=null,y=null,v=null,g=null,p=null,M=null,T=!1,E=null,x=null,A=null,D=null,V=null,X=t.getParameter(35661),C=!1,O=0,N=t.getParameter(7938);N.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL\ ([0-9])/.exec(N)[1]),C=O>=1):N.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(N)[1]),C=O>=2);let B=null,P={},I=new ze,G=new ze;function W(R,J,ie){let he=new Uint8Array(4),Q=t.createTexture();t.bindTexture(R,Q),t.texParameteri(R,10241,9728),t.texParameteri(R,10240,9728);for(let le=0;le<ie;le++)t.texImage2D(J+le,0,6408,1,1,0,6408,5121,he);return Q}let ne={};ne[3553]=W(3553,3553,1),ne[34067]=W(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ce(2929),c.setFunc(Xs),me(!1),Pe(Ua),ce(2884),k(Qi);function ce(R){d[R]!==!0&&(t.enable(R),d[R]=!0)}function ae(R){d[R]!==!1&&(t.disable(R),d[R]=!1)}function ye(R){return u!==R?(t.useProgram(R),u=R,!0):!1}let be={[ei]:32774,[Rh]:32778,[Ph]:32779};if(i)be[ja]=32775,be[qa]=32776;else{let R=e.get("EXT_blend_minmax");R!==null&&(be[ja]=R.MIN_EXT,be[qa]=R.MAX_EXT)}let We={[Dh]:0,[Ih]:1,[Nh]:768,[Xa]:770,[Gh]:776,[zh]:774,[Oh]:772,[Fh]:769,[Ya]:771,[Uh]:775,[Bh]:773};function k(R,J,ie,he,Q,le,de,L){if(R===Qi){h&&(ae(3042),h=!1);return}if(h||(ce(3042),h=!0),R!==Ch){if(R!==f||L!==T){if((m!==ei||g!==ei)&&(t.blendEquation(32774),m=ei,g=ei),L)switch(R){case er:t.blendFuncSeparate(1,771,1,771);break;case ka:t.blendFunc(1,1);break;case Va:t.blendFuncSeparate(0,0,769,771);break;case Wa:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case er:t.blendFuncSeparate(770,771,1,771);break;case ka:t.blendFunc(770,1);break;case Va:t.blendFunc(0,769);break;case Wa:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}y=null,v=null,p=null,M=null,f=R,T=L}return}Q=Q||J,le=le||ie,de=de||he,(J!==m||Q!==g)&&(t.blendEquationSeparate(be[J],be[Q]),m=J,g=Q),(ie!==y||he!==v||le!==p||de!==M)&&(t.blendFuncSeparate(We[ie],We[he],We[le],We[de]),y=ie,v=he,p=le,M=de),f=R,T=null}function et(R,J){R.side===Fr?ae(2884):ce(2884);let ie=R.side===tt;J&&(ie=!ie),me(ie),R.blending===er&&R.transparent===!1?k(Qi):k(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),a.setMask(R.colorWrite);let he=R.stencilWrite;l.setTest(he),he&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Fe(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits)}function me(R){E!==R&&(R?t.frontFace(2304):t.frontFace(2305),E=R)}function Pe(R){R!==Ah?(ce(2884),R!==x&&(R===Ua?t.cullFace(1029):R===Lh?t.cullFace(1028):t.cullFace(1032))):ae(2884),x=R}function we(R){R!==A&&(C&&t.lineWidth(R),A=R)}function Fe(R,J,ie){R?(ce(32823),(D!==J||V!==ie)&&(t.polygonOffset(J,ie),D=J,V=ie)):ae(32823)}function Se(R){R?ce(3089):ae(3089)}function Y(R){R===void 0&&(R=33984+X-1),B!==R&&(t.activeTexture(R),B=R)}function K(R,J){B===null&&Y();let ie=P[B];ie===void 0&&(ie={type:void 0,texture:void 0},P[B]=ie),(ie.type!==R||ie.texture!==J)&&(t.bindTexture(R,J||ne[R]),ie.type=R,ie.texture=J)}function ee(){let R=P[B];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function fe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{t.texImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function S(){try{t.texImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function b(R){I.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),I.copy(R))}function Z(R){G.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),G.copy(R))}function j(){d={},B=null,P={},u=null,h=null,f=null,m=null,y=null,v=null,g=null,p=null,M=null,T=!1,E=null,x=null,A=null,D=null,V=null,a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ce,disable:ae,useProgram:ye,setBlending:k,setMaterial:et,setFlipSided:me,setCullFace:Pe,setLineWidth:we,setPolygonOffset:Fe,setScissorTest:Se,activeTexture:Y,bindTexture:K,unbindTexture:ee,compressedTexImage2D:fe,texImage2D:se,texImage3D:S,scissor:b,viewport:Z,reset:j}}function dg(t,e,n,i,r,s,o){let a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,d=r.maxTextureSize,u=r.maxSamples,h=new WeakMap,f,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(S){}function y(S,b){return m?new OffscreenCanvas(S,b):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function v(S,b,Z,j){let R=1;if((S.width>j||S.height>j)&&(R=j/Math.max(S.width,S.height)),R<1||b===!0)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap){let J=b?xe.floorPowerOfTwo:Math.floor,ie=J(R*S.width),he=J(R*S.height);f===void 0&&(f=y(ie,he));let Q=Z?y(ie,he):f;Q.width=ie,Q.height=he;let le=Q.getContext("2d");return le.drawImage(S,0,0,ie,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+ie+"x"+he+")."),Q}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function g(S){return xe.isPowerOfTwo(S.width)&&xe.isPowerOfTwo(S.height)}function p(S){return a?!1:S.wrapS!==_t||S.wrapT!==_t||S.minFilter!==ft&&S.minFilter!==lt}function M(S,b){return S.generateMipmaps&&b&&S.minFilter!==ft&&S.minFilter!==lt}function T(S,b,Z,j){t.generateMipmap(S);let R=i.get(b);R.__maxMipLevel=Math.log(Math.max(Z,j))*Math.LOG2E}function E(S,b,Z){if(a===!1)return b;if(S!==null){if(t[S]!==void 0)return t[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let j=b;return b===6403&&(Z===5126&&(j=33326),Z===5131&&(j=33325),Z===5121&&(j=33321)),b===6407&&(Z===5126&&(j=34837),Z===5131&&(j=34843),Z===5121&&(j=32849)),b===6408&&(Z===5126&&(j=34836),Z===5131&&(j=34842),Z===5121&&(j=32856)),(j===33325||j===33326||j===34842||j===34836)&&e.get("EXT_color_buffer_float"),j}function x(S){return S===ft||S===Ka||S===Qa?9728:9729}function A(S){let b=S.target;b.removeEventListener("dispose",A),V(b),b.isVideoTexture&&h.delete(b),o.memory.textures--}function D(S){let b=S.target;b.removeEventListener("dispose",D),X(b),o.memory.textures--}function V(S){let b=i.get(S);if(b.__webglInit===void 0)return;t.deleteTexture(b.__webglTexture),i.remove(S)}function X(S){let b=i.get(S),Z=i.get(S.texture);if(!S)return;if(Z.__webglTexture!==void 0&&t.deleteTexture(Z.__webglTexture),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let j=0;j<6;j++)t.deleteFramebuffer(b.__webglFramebuffer[j]),b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[j]);else t.deleteFramebuffer(b.__webglFramebuffer),b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer&&t.deleteRenderbuffer(b.__webglColorRenderbuffer),b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer);i.remove(S.texture),i.remove(S)}let C=0;function O(){C=0}function N(){let S=C;return S>=c&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+c),C+=1,S}function B(S,b){let Z=i.get(S);if(S.isVideoTexture&&Y(S),S.version>0&&Z.__version!==S.version){let j=S.image;if(j===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(Z,S,b);return}}n.activeTexture(33984+b),n.bindTexture(3553,Z.__webglTexture)}function P(S,b){let Z=i.get(S);if(S.version>0&&Z.__version!==S.version){ye(Z,S,b);return}n.activeTexture(33984+b),n.bindTexture(35866,Z.__webglTexture)}function I(S,b){let Z=i.get(S);if(S.version>0&&Z.__version!==S.version){ye(Z,S,b);return}n.activeTexture(33984+b),n.bindTexture(32879,Z.__webglTexture)}function G(S,b){let Z=i.get(S);if(S.version>0&&Z.__version!==S.version){be(Z,S,b);return}n.activeTexture(33984+b),n.bindTexture(34067,Z.__webglTexture)}let W={[Ks]:10497,[_t]:33071,[Qs]:33648},ne={[ft]:9728,[Ka]:9984,[Qa]:9986,[lt]:9729,[tu]:9985,[Br]:9987};function ce(S,b,Z){Z?(t.texParameteri(S,10242,W[b.wrapS]),t.texParameteri(S,10243,W[b.wrapT]),(S===32879||S===35866)&&t.texParameteri(S,32882,W[b.wrapR]),t.texParameteri(S,10240,ne[b.magFilter]),t.texParameteri(S,10241,ne[b.minFilter])):(t.texParameteri(S,10242,33071),t.texParameteri(S,10243,33071),(S===32879||S===35866)&&t.texParameteri(S,32882,33071),(b.wrapS!==_t||b.wrapT!==_t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(S,10240,x(b.magFilter)),t.texParameteri(S,10241,x(b.minFilter)),b.minFilter!==ft&&b.minFilter!==lt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));let j=e.get("EXT_texture_filter_anisotropic");if(j){if(b.type===mn&&e.get("OES_texture_float_linear")===null)return;if(b.type===Gr&&(a||e.get("OES_texture_half_float_linear"))===null)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(t.texParameterf(S,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function ae(S,b){S.__webglInit===void 0&&(S.__webglInit=!0,b.addEventListener("dispose",A),S.__webglTexture=t.createTexture(),o.memory.textures++)}function ye(S,b,Z){let j=3553;b.isDataTexture2DArray&&(j=35866),b.isDataTexture3D&&(j=32879),ae(S,b),n.activeTexture(33984+Z),n.bindTexture(j,S.__webglTexture),t.pixelStorei(37440,b.flipY),t.pixelStorei(37441,b.premultiplyAlpha),t.pixelStorei(3317,b.unpackAlignment);let R=p(b)&&g(b.image)===!1,J=v(b.image,R,!1,d),ie=g(J)||a,he=s.convert(b.format),Q=s.convert(b.type),le=E(b.internalFormat,he,Q);ce(j,b,ie);let de,L=b.mipmaps;if(b.isDepthTexture)le=6402,a?b.type===mn?le=36012:b.type===Ur?le=33190:b.type===nr?le=35056:le=33189:b.type===mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ti&&le===6402&&(b.type!==zr&&b.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=zr,Q=s.convert(b.type))),b.format===ir&&le===6402&&(le=34041,b.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=nr,Q=s.convert(b.type))),n.texImage2D(3553,0,le,J.width,J.height,0,he,Q,null);else if(b.isDataTexture)if(L.length>0&&ie){for(let q=0,oe=L.length;q<oe;q++)de=L[q],n.texImage2D(3553,q,le,de.width,de.height,0,he,Q,de.data);b.generateMipmaps=!1,S.__maxMipLevel=L.length-1}else n.texImage2D(3553,0,le,J.width,J.height,0,he,Q,J.data),S.__maxMipLevel=0;else if(b.isCompressedTexture){for(let q=0,oe=L.length;q<oe;q++)de=L[q],b.format!==Dt&&b.format!==Nn?he!==null?n.compressedTexImage2D(3553,q,le,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,q,le,de.width,de.height,0,he,Q,de.data);S.__maxMipLevel=L.length-1}else if(b.isDataTexture2DArray)n.texImage3D(35866,0,le,J.width,J.height,J.depth,0,he,Q,J.data),S.__maxMipLevel=0;else if(b.isDataTexture3D)n.texImage3D(32879,0,le,J.width,J.height,J.depth,0,he,Q,J.data),S.__maxMipLevel=0;else if(L.length>0&&ie){for(let q=0,oe=L.length;q<oe;q++)de=L[q],n.texImage2D(3553,q,le,he,Q,de);b.generateMipmaps=!1,S.__maxMipLevel=L.length-1}else n.texImage2D(3553,0,le,he,Q,J),S.__maxMipLevel=0;M(b,ie)&&T(j,b,J.width,J.height),S.__version=b.version,b.onUpdate&&b.onUpdate(b)}function be(S,b,Z){if(b.image.length!==6)return;ae(S,b),n.activeTexture(33984+Z),n.bindTexture(34067,S.__webglTexture),t.pixelStorei(37440,b.flipY);let j=b&&(b.isCompressedTexture||b.image[0].isCompressedTexture),R=b.image[0]&&b.image[0].isDataTexture,J=[];for(let q=0;q<6;q++)!j&&!R?J[q]=v(b.image[q],!1,!0,l):J[q]=R?b.image[q].image:b.image[q];let ie=J[0],he=g(ie)||a,Q=s.convert(b.format),le=s.convert(b.type),de=E(b.internalFormat,Q,le);ce(34067,b,he);let L;if(j){for(let q=0;q<6;q++){L=J[q].mipmaps;for(let oe=0;oe<L.length;oe++){let Me=L[oe];b.format!==Dt&&b.format!==Nn?Q!==null?n.compressedTexImage2D(34069+q,oe,de,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+q,oe,de,Me.width,Me.height,0,Q,le,Me.data)}}S.__maxMipLevel=L.length-1}else{L=b.mipmaps;for(let q=0;q<6;q++)if(R){n.texImage2D(34069+q,0,de,J[q].width,J[q].height,0,Q,le,J[q].data);for(let oe=0;oe<L.length;oe++){let Me=L[oe],Ye=Me.image[q].image;n.texImage2D(34069+q,oe+1,de,Ye.width,Ye.height,0,Q,le,Ye.data)}}else{n.texImage2D(34069+q,0,de,Q,le,J[q]);for(let oe=0;oe<L.length;oe++){let Me=L[oe];n.texImage2D(34069+q,oe+1,de,Q,le,Me.image[q])}}S.__maxMipLevel=L.length}M(b,he)&&T(34067,b,ie.width,ie.height),S.__version=b.version,b.onUpdate&&b.onUpdate(b)}function We(S,b,Z,j){let R=s.convert(b.texture.format),J=s.convert(b.texture.type),ie=E(b.texture.internalFormat,R,J);n.texImage2D(j,0,ie,b.width,b.height,0,R,J,null),t.bindFramebuffer(36160,S),t.framebufferTexture2D(36160,Z,j,i.get(b.texture).__webglTexture,0),t.bindFramebuffer(36160,null)}function k(S,b,Z){if(t.bindRenderbuffer(36161,S),b.depthBuffer&&!b.stencilBuffer){let j=33189;if(Z){let R=b.depthTexture;R&&R.isDepthTexture&&(R.type===mn?j=36012:R.type===Ur&&(j=33190));let J=Se(b);t.renderbufferStorageMultisample(36161,J,j,b.width,b.height)}else t.renderbufferStorage(36161,j,b.width,b.height);t.framebufferRenderbuffer(36160,36096,36161,S)}else if(b.depthBuffer&&b.stencilBuffer){if(Z){let j=Se(b);t.renderbufferStorageMultisample(36161,j,35056,b.width,b.height)}else t.renderbufferStorage(36161,34041,b.width,b.height);t.framebufferRenderbuffer(36160,33306,36161,S)}else{let j=s.convert(b.texture.format),R=s.convert(b.texture.type),J=E(b.texture.internalFormat,j,R);if(Z){let ie=Se(b);t.renderbufferStorageMultisample(36161,ie,J,b.width,b.height)}else t.renderbufferStorage(36161,J,b.width,b.height)}t.bindRenderbuffer(36161,null)}function et(S,b){let Z=b&&b.isWebGLCubeRenderTarget;if(Z)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),B(b.depthTexture,0);let j=i.get(b.depthTexture).__webglTexture;if(b.depthTexture.format===ti)t.framebufferTexture2D(36160,36096,3553,j,0);else if(b.depthTexture.format===ir)t.framebufferTexture2D(36160,33306,3553,j,0);else throw new Error("Unknown depthTexture format")}function me(S){let b=i.get(S),Z=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");et(b.__webglFramebuffer,S)}else if(Z){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(36160,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]=t.createRenderbuffer(),k(b.__webglDepthbuffer[j],S,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=t.createRenderbuffer(),k(b.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function Pe(S){let b=i.get(S),Z=i.get(S.texture);S.addEventListener("dispose",D),Z.__webglTexture=t.createTexture(),o.memory.textures++;let j=S.isWebGLCubeRenderTarget===!0,R=S.isWebGLMultisampleRenderTarget===!0,J=g(S)||a;if(a&&S.texture.format===Nn&&(S.texture.type===mn||S.texture.type===Gr)&&(S.texture.format=Dt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),j){b.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)b.__webglFramebuffer[ie]=t.createFramebuffer()}else if(b.__webglFramebuffer=t.createFramebuffer(),R)if(a){b.__webglMultisampledFramebuffer=t.createFramebuffer(),b.__webglColorRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(36161,b.__webglColorRenderbuffer);let ie=s.convert(S.texture.format),he=s.convert(S.texture.type),Q=E(S.texture.internalFormat,ie,he),le=Se(S);t.renderbufferStorageMultisample(36161,le,Q,S.width,S.height),t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064,36161,b.__webglColorRenderbuffer),t.bindRenderbuffer(36161,null),S.depthBuffer&&(b.__webglDepthRenderbuffer=t.createRenderbuffer(),k(b.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(j){n.bindTexture(34067,Z.__webglTexture),ce(34067,S.texture,J);for(let ie=0;ie<6;ie++)We(b.__webglFramebuffer[ie],S,36064,34069+ie);M(S.texture,J)&&T(34067,S.texture,S.width,S.height),n.bindTexture(34067,null)}else n.bindTexture(3553,Z.__webglTexture),ce(3553,S.texture,J),We(b.__webglFramebuffer,S,36064,3553),M(S.texture,J)&&T(3553,S.texture,S.width,S.height),n.bindTexture(3553,null);S.depthBuffer&&me(S)}function we(S){let b=S.texture,Z=g(S)||a;if(M(b,Z)){let j=S.isWebGLCubeRenderTarget?34067:3553,R=i.get(b).__webglTexture;n.bindTexture(j,R),T(j,b,S.width,S.height),n.bindTexture(j,null)}}function Fe(S){if(S.isWebGLMultisampleRenderTarget)if(a){let b=i.get(S);t.bindFramebuffer(36008,b.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,b.__webglFramebuffer);let Z=S.width,j=S.height,R=16384;S.depthBuffer&&(R|=256),S.stencilBuffer&&(R|=1024),t.blitFramebuffer(0,0,Z,j,0,0,Z,j,R,9728),t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Se(S){return a&&S.isWebGLMultisampleRenderTarget?Math.min(u,S.samples):0}function Y(S){let b=o.render.frame;h.get(S)!==b&&(h.set(S,b),S.update())}let K=!1,ee=!1;function fe(S,b){S&&S.isWebGLRenderTarget&&(K===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),K=!0),S=S.texture),B(S,b)}function se(S,b){S&&S.isWebGLCubeRenderTarget&&(ee===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),ee=!0),S=S.texture),G(S,b)}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=B,this.setTexture2DArray=P,this.setTexture3D=I,this.setTextureCube=G,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Fe,this.safeSetTexture2D=fe,this.safeSetTextureCube=se}function pg(t,e,n){let i=n.isWebGL2;function r(s){let o;if(s===eo)return 5121;if(s===su)return 32819;if(s===ou)return 32820;if(s===au)return 33635;if(s===nu)return 5120;if(s===iu)return 5122;if(s===zr)return 5123;if(s===ru)return 5124;if(s===Ur)return 5125;if(s===mn)return 5126;if(s===Gr)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===cu)return 6406;if(s===Nn)return 6407;if(s===Dt)return 6408;if(s===lu)return 6409;if(s===hu)return 6410;if(s===ti)return 6402;if(s===ir)return 34041;if(s===uu)return 6403;if(s===fu)return 36244;if(s===du)return 33319;if(s===pu)return 33320;if(s===mu)return 36248;if(s===gu)return 36249;if(s===ec||s===tc||s===nc||s===ic)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ec)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===tc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===nc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ic)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rc||s===sc||s===oc||s===ac)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===rc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===oc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ac)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===vu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===cc||s===lc)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===cc)return o.COMPRESSED_RGB8_ETC2;if(s===lc)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===yu||s===xu||s===_u||s===bu||s===wu||s===Mu||s===Su||s===Eu||s===Tu||s===Au||s===Lu||s===Cu||s===Ru||s===Pu||s===Iu||s===Nu||s===Fu||s===Ou||s===Bu||s===zu||s===Uu||s===Gu||s===Hu||s===ku||s===Vu||s===Wu||s===ju||s===qu)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===Du)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===nr)return i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function Oo(t=[]){nt.call(this),this.cameras=t}Oo.prototype=Object.assign(Object.create(nt.prototype),{constructor:Oo,isArrayCamera:!0});function Tn(){ge.call(this),this.type="Group"}Tn.prototype=Object.assign(Object.create(ge.prototype),{constructor:Tn,isGroup:!0});function vr(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(vr.prototype,{constructor:vr,getHandSpace:function(){if(this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints=[],this._hand.inputState={pinching:!1},window.XRHand))for(let t=0;t<=window.XRHand.LITTLE_PHALANX_TIP;t++){let e=new Tn;e.matrixAutoUpdate=!1,e.visible=!1,this._hand.joints.push(e),this._hand.add(e)}return this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this},disconnect:function(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(t,e,n){let i=null,r=null,s=null,o=this._targetRay,a=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(c&&t.hand){s=!0;for(let l=0;l<=window.XRHand.LITTLE_PHALANX_TIP;l++)if(t.hand[l]){let d=e.getJointPose(t.hand[l],n),u=c.joints[l];d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.jointRadius=d.radius),u.visible=d!==null;let h=c.joints[window.XRHand.INDEX_PHALANX_TIP],f=c.joints[window.XRHand.THUMB_PHALANX_TIP],m=h.position.distanceTo(f.position),y=.02,v=.005;c.inputState.pinching&&m>y+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=y-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}}else o!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}});function nl(t,e){let n=this,i=null,r=1,s=null,o="local-floor",a=null,c=[],l=new Map,d=new nt;d.layers.enable(1),d.viewport=new ze;let u=new nt;u.layers.enable(2),u.viewport=new ze;let h=[d,u],f=new Oo;f.layers.enable(1),f.layers.enable(2);let m=null,y=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let O=c[C];return O===void 0&&(O=new vr,c[C]=O),O.getTargetRaySpace()},this.getControllerGrip=function(C){let O=c[C];return O===void 0&&(O=new vr,c[C]=O),O.getGripSpace()},this.getHand=function(C){let O=c[C];return O===void 0&&(O=new vr,c[C]=O),O.getHandSpace()};function v(C){let O=l.get(C.inputSource);O&&O.dispatchEvent({type:C.type,data:C.inputSource})}function g(){l.forEach(function(C,O){C.disconnect(O)}),l.clear(),t.setFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function p(C){s=C,X.setContext(i),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}this.setFramebufferScaleFactor=function(C){r=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){o=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getSession=function(){return i},this.setSession=function(C){if(i=C,i!==null){i.addEventListener("select",v),i.addEventListener("selectstart",v),i.addEventListener("selectend",v),i.addEventListener("squeeze",v),i.addEventListener("squeezestart",v),i.addEventListener("squeezeend",v),i.addEventListener("end",g);let O=e.getContextAttributes();O.xrCompatible!==!0&&e.makeXRCompatible();let N={antialias:O.antialias,alpha:O.alpha,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:r},B=new XRWebGLLayer(i,e,N);i.updateRenderState({baseLayer:B}),i.requestReferenceSpace(o).then(p),i.addEventListener("inputsourceschange",M)}};function M(C){let O=i.inputSources;for(let N=0;N<c.length;N++)l.set(O[N],c[N]);for(let N=0;N<C.removed.length;N++){let B=C.removed[N],P=l.get(B);P&&(P.dispatchEvent({type:"disconnected",data:B}),l.delete(B))}for(let N=0;N<C.added.length;N++){let B=C.added[N],P=l.get(B);P&&P.dispatchEvent({type:"connected",data:B})}}let T=new _,E=new _;function x(C,O,N){T.setFromMatrixPosition(O.matrixWorld),E.setFromMatrixPosition(N.matrixWorld);let B=T.distanceTo(E),P=O.projectionMatrix.elements,I=N.projectionMatrix.elements,G=P[14]/(P[10]-1),W=P[14]/(P[10]+1),ne=(P[9]+1)/P[5],ce=(P[9]-1)/P[5],ae=(P[8]-1)/P[0],ye=(I[8]+1)/I[0],be=G*ae,We=G*ye,k=B/(-ae+ye),et=k*-ae;O.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(et),C.translateZ(k),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert();let me=G+k,Pe=W+k,we=be-et,Fe=We+(B-et),Se=ne*W/Pe*me,Y=ce*W/Pe*me;C.projectionMatrix.makePerspective(we,Fe,Se,Y,me,Pe)}function A(C,O){O===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(O.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.getCamera=function(C){f.near=u.near=d.near=C.near,f.far=u.far=d.far=C.far,(m!==f.near||y!==f.far)&&(i.updateRenderState({depthNear:f.near,depthFar:f.far}),m=f.near,y=f.far);let O=C.parent,N=f.cameras;A(f,O);for(let P=0;P<N.length;P++)A(N[P],O);C.matrixWorld.copy(f.matrixWorld);let B=C.children;for(let P=0,I=B.length;P<I;P++)B[P].updateMatrixWorld(!0);return N.length===2?x(f,d,u):f.projectionMatrix.copy(d.projectionMatrix),f};let D=null;function V(C,O){if(a=O.getViewerPose(s),a!==null){let B=a.views,P=i.renderState.baseLayer;t.setFramebuffer(P.framebuffer);let I=!1;B.length!==f.cameras.length&&(f.cameras.length=0,I=!0);for(let G=0;G<B.length;G++){let W=B[G],ne=P.getViewport(W),ce=h[G];ce.matrix.fromArray(W.transform.matrix),ce.projectionMatrix.fromArray(W.projectionMatrix),ce.viewport.set(ne.x,ne.y,ne.width,ne.height),G===0&&f.matrix.copy(ce.matrix),I===!0&&f.cameras.push(ce)}}let N=i.inputSources;for(let B=0;B<c.length;B++){let P=c[B],I=N[B];P.update(I,O,s)}D&&D(C,O)}let X=new Dc;X.setAnimationLoop(V),this.setAnimationLoop=function(C){D=C},this.dispose=function(){}}Object.assign(nl.prototype,Et.prototype);function mg(t){function e(g,p){g.fogColor.value.copy(p.color),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,M,T){p.isMeshBasicMaterial?i(g,p):p.isMeshLambertMaterial?(i(g,p),c(g,p)):p.isMeshToonMaterial?(i(g,p),d(g,p)):p.isMeshPhongMaterial?(i(g,p),l(g,p)):p.isMeshStandardMaterial?(i(g,p),p.isMeshPhysicalMaterial?h(g,p):u(g,p)):p.isMeshMatcapMaterial?(i(g,p),f(g,p)):p.isMeshDepthMaterial?(i(g,p),m(g,p)):p.isMeshDistanceMaterial?(i(g,p),y(g,p)):p.isMeshNormalMaterial?(i(g,p),v(g,p)):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&s(g,p)):p.isPointsMaterial?o(g,p,M,T):p.isSpriteMaterial?a(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.specularMap&&(g.specularMap.value=p.specularMap);let M=t.get(p).envMap;if(M){g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M._needsFlipEnvMap?-1:1,g.reflectivity.value=p.reflectivity,g.refractionRatio.value=p.refractionRatio;let x=t.get(M).__maxMipLevel;x!==void 0&&(g.maxMipLevel.value=x)}p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity);let T;p.map?T=p.map:p.specularMap?T=p.specularMap:p.displacementMap?T=p.displacementMap:p.normalMap?T=p.normalMap:p.bumpMap?T=p.bumpMap:p.roughnessMap?T=p.roughnessMap:p.metalnessMap?T=p.metalnessMap:p.alphaMap?T=p.alphaMap:p.emissiveMap?T=p.emissiveMap:p.clearcoatMap?T=p.clearcoatMap:p.clearcoatNormalMap?T=p.clearcoatNormalMap:p.clearcoatRoughnessMap&&(T=p.clearcoatRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uvTransform.value.copy(T.matrix));let E;p.aoMap?E=p.aoMap:p.lightMap&&(E=p.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uv2Transform.value.copy(E.matrix))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity}function s(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function o(g,p,M,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=T*.5,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let E;p.map?E=p.map:p.alphaMap&&(E=p.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uvTransform.value.copy(E.matrix))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let M;p.map?M=p.map:p.alphaMap&&(M=p.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),g.uvTransform.value.copy(M.matrix))}function c(g,p){p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap)}function l(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===tt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===tt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===tt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===tt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function u(g,p){g.roughness.value=p.roughness,g.metalness.value=p.metalness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===tt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===tt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias);let M=t.get(p).envMap;M&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p){u(g,p),g.reflectivity.value=p.reflectivity,g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.sheen&&g.sheen.value.copy(p.sheen),p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),g.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===tt&&g.clearcoatNormalScale.value.negate()),g.transmission.value=p.transmission,p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap)}function f(g,p){p.matcap&&(g.matcap.value=p.matcap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===tt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===tt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function m(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function y(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),g.referencePosition.value.copy(p.referencePosition),g.nearDistance.value=p.nearDistance,g.farDistance.value=p.farDistance}function v(g,p){p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===tt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===tt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function gg(){let t=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return t.style.display="block",t}function Li(t){t=t||{};let e=t.canvas!==void 0?t.canvas:gg(),n=t.context!==void 0?t.context:null,i=t.alpha!==void 0?t.alpha:!1,r=t.depth!==void 0?t.depth:!0,s=t.stencil!==void 0?t.stencil:!0,o=t.antialias!==void 0?t.antialias:!1,a=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,c=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",d=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1,u=null,h=null;this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=ri,this.physicallyCorrectLights=!1,this.toneMapping=tr,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;let f=this,m=!1,y=null,v=0,g=0,p=null,M=null,T=-1,E=null,x=null,A=new ze,D=new ze,V=null,X=e.width,C=e.height,O=1,N=null,B=null,P=new ze(0,0,X,C),I=new ze(0,0,X,C),G=!1,W=new fr,ne=!1,ce=!1,ae=new Te,ye=new _,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return p===null?O:1}let k=n;function et(w,z){for(let F=0;F<w.length;F++){let H=w[F],re=e.getContext(H,z);if(re!==null)return re}return null}try{let w={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:d};if(e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",Ye,!1),k===null){let z=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&z.shift(),k=et(z,w),k===null)throw et(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let me,Pe,we,Fe,Se,Y,K,ee,fe,se,S,b,Z,j,R,J,ie,he,Q,le,de;function L(){me=new Xp(k),Pe=new Wp(k,me,t),Pe.isWebGL2===!1&&(me.get("WEBGL_depth_texture"),me.get("OES_texture_float"),me.get("OES_texture_half_float"),me.get("OES_texture_half_float_linear"),me.get("OES_standard_derivatives"),me.get("OES_element_index_uint"),me.get("OES_vertex_array_object"),me.get("ANGLE_instanced_arrays")),me.get("OES_texture_float_linear"),le=new pg(k,me,Pe),we=new fg(k,me,Pe),we.scissor(D.copy(I).multiplyScalar(O).floor()),we.viewport(A.copy(P).multiplyScalar(O).floor()),Fe=new Jp(k),Se=new eg,Y=new dg(k,me,we,Se,Pe,le,Fe),K=new qp(f),ee=new xf(k,Pe),de=new kp(k,me,ee,Pe),fe=new Yp(k,ee,Fe,de),se=new em(k,fe,ee,Fe),ie=new Qp(k),R=new jp(Se),S=new Qm(f,K,me,Pe,de,R),b=new mg(Se),Z=new ig(Se),j=new lg(me,Pe),J=new Hp(f,K,we,se,a),he=new Vp(k,me,Fe,Pe),Q=new Zp(k,me,Fe,Pe),Fe.programs=S.programs,f.capabilities=Pe,f.extensions=me,f.properties=Se,f.renderLists=Z,f.state=we,f.info=Fe}L();let q=new nl(f,k);this.xr=q;let oe=new tl(f,se,Pe.maxTextureSize);this.shadowMap=oe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let w=me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){if(w===void 0)return;O=w,this.setSize(X,C,!1)},this.getSize=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),w=new U),w.set(X,C)},this.setSize=function(w,z,F){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,C=z,e.width=Math.floor(w*O),e.height=Math.floor(z*O),F!==!1&&(e.style.width=w+"px",e.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),w=new U),w.set(X*O,C*O).floor()},this.setDrawingBufferSize=function(w,z,F){X=w,C=z,O=F,e.width=Math.floor(w*F),e.height=Math.floor(z*F),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),w=new ze),w.copy(A)},this.getViewport=function(w){return w.copy(P)},this.setViewport=function(w,z,F,H){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,z,F,H),we.viewport(A.copy(P).multiplyScalar(O).floor())},this.getScissor=function(w){return w.copy(I)},this.setScissor=function(w,z,F,H){w.isVector4?I.set(w.x,w.y,w.z,w.w):I.set(w,z,F,H),we.scissor(D.copy(I).multiplyScalar(O).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(w){we.setScissorTest(G=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(){return J.getClearColor()},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(w,z,F){let H=0;(w===void 0||w)&&(H|=16384),(z===void 0||z)&&(H|=256),(F===void 0||F)&&(H|=1024),k.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",Ye,!1),Z.dispose(),j.dispose(),Se.dispose(),K.dispose(),se.dispose(),de.dispose(),q.dispose(),Zi.stop()};function Me(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Ye(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1,L()}function Zt(w){let z=w.target;z.removeEventListener("dispose",Zt),Kn(z)}function Kn(w){Yi(w),Se.remove(w)}function Yi(w){let z=Se.get(w).program;z!==void 0&&S.releaseProgram(z)}function Pt(w,z){w.render(function(F){f.renderBufferImmediate(F,z)})}this.renderBufferImmediate=function(w,z){de.initAttributes();let F=Se.get(w);w.hasPositions&&!F.position&&(F.position=k.createBuffer()),w.hasNormals&&!F.normal&&(F.normal=k.createBuffer()),w.hasUvs&&!F.uv&&(F.uv=k.createBuffer()),w.hasColors&&!F.color&&(F.color=k.createBuffer());let H=z.getAttributes();w.hasPositions&&(k.bindBuffer(34962,F.position),k.bufferData(34962,w.positionArray,35048),de.enableAttribute(H.position),k.vertexAttribPointer(H.position,3,5126,!1,0,0)),w.hasNormals&&(k.bindBuffer(34962,F.normal),k.bufferData(34962,w.normalArray,35048),de.enableAttribute(H.normal),k.vertexAttribPointer(H.normal,3,5126,!1,0,0)),w.hasUvs&&(k.bindBuffer(34962,F.uv),k.bufferData(34962,w.uvArray,35048),de.enableAttribute(H.uv),k.vertexAttribPointer(H.uv,2,5126,!1,0,0)),w.hasColors&&(k.bindBuffer(34962,F.color),k.bufferData(34962,w.colorArray,35048),de.enableAttribute(H.color),k.vertexAttribPointer(H.color,3,5126,!1,0,0)),de.disableUnusedAttributes(),k.drawArrays(4,0,w.count),w.count=0},this.renderBufferDirect=function(w,z,F,H,re,De){z===null&&(z=be);let Ae=re.isMesh&&re.matrixWorld.determinant()<0,Ie=za(w,z,H,re);we.setMaterial(H,Ae);let Le=F.index,Ke=F.attributes.position;if(Le===null){if(Ke===void 0||Ke.count===0)return}else if(Le.count===0)return;let Ze=1;H.wireframe===!0&&(Le=fe.getWireframeAttribute(F),Ze=2),(H.morphTargets||H.morphNormals)&&ie.update(re,F,H,Ie),de.setup(re,H,Ie,F,Le);let Ee,Ge=he;Le!==null&&(Ee=ee.get(Le),Ge=Q,Ge.setIndex(Ee));let $t=Le!==null?Le.count:Ke.count,He=F.drawRange.start*Ze,In=F.drawRange.count*Ze,it=De!==null?De.start*Ze:0,js=De!==null?De.count*Ze:Infinity,gt=Math.max(He,it),Ji=Math.min($t,He+In,it+js)-1,Qn=Math.max(0,Ji-gt+1);if(Qn===0)return;if(re.isMesh)H.wireframe===!0?(we.setLineWidth(H.wireframeLinewidth*We()),Ge.setMode(1)):Ge.setMode(4);else if(re.isLine){let $i=H.linewidth;$i===void 0&&($i=1),we.setLineWidth($i*We()),re.isLineSegments?Ge.setMode(1):re.isLineLoop?Ge.setMode(2):Ge.setMode(3)}else re.isPoints?Ge.setMode(0):re.isSprite&&Ge.setMode(4);if(re.isInstancedMesh)Ge.renderInstances(gt,Qn,re.count);else if(F.isInstancedBufferGeometry){let $i=Math.min(F.instanceCount,F._maxInstanceCount);Ge.renderInstances(gt,Qn,$i)}else Ge.render(gt,Qn)},this.compile=function(w,z){h=j.get(w,z),h.init(),w.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(h.pushLight(H),H.castShadow&&h.pushShadow(H))}),h.setupLights(z);let F=new WeakMap;w.traverse(function(H){let re=H.material;if(re)if(Array.isArray(re))for(let De=0;De<re.length;De++){let Ae=re[De];F.has(Ae)===!1&&(Jt(Ae,w,H),F.set(Ae))}else F.has(re)===!1&&(Jt(re,w,H),F.set(re))})};let xt=null;function Mh(w){if(q.isPresenting)return;xt&&xt(w)}let Zi=new Dc;Zi.setAnimationLoop(Mh),typeof window!="undefined"&&Zi.setContext(window),this.setAnimationLoop=function(w){xt=w,q.setAnimationLoop(w),w===null?Zi.stop():Zi.start()},this.render=function(w,z){let F,H;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),F=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),H=arguments[3]),z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;de.resetDefaultState(),T=-1,E=null,w.autoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(z=q.getCamera(z)),w.isScene===!0&&w.onBeforeRender(f,w,z,F||p),h=j.get(w,z),h.init(),ae.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W.setFromProjectionMatrix(ae),ce=this.localClippingEnabled,ne=R.init(this.clippingPlanes,ce,z),u=Z.get(w,z),u.init(),Fa(w,z,0,f.sortObjects),u.finish(),f.sortObjects===!0&&u.sort(N,B),ne===!0&&R.beginShadows();let re=h.state.shadowsArray;oe.render(re,w,z),h.setupLights(z),ne===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset(),F!==void 0&&this.setRenderTarget(F),J.render(u,w,z,H);let De=u.opaque,Ae=u.transparent;De.length>0&&Oa(De,w,z),Ae.length>0&&Oa(Ae,w,z),w.isScene===!0&&w.onAfterRender(f,w,z),p!==null&&(Y.updateRenderTargetMipmap(p),Y.updateMultisampleRenderTarget(p)),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1),u=null,h=null};function Fa(w,z,F,H){if(w.visible===!1)return;let re=w.layers.test(z.layers);if(re){if(w.isGroup)F=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){H&&ye.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ae);let Ae=se.update(w),Ie=w.material;Ie.visible&&u.push(w,Ae,Ie,F,ye.z,null)}}else if(w.isImmediateRenderObject)H&&ye.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ae),u.push(w,null,w.material,F,ye.z,null);else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&(w.skeleton.frame!==Fe.render.frame&&(w.skeleton.update(),w.skeleton.frame=Fe.render.frame)),!w.frustumCulled||W.intersectsObject(w))){H&&ye.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ae);let Ae=se.update(w),Ie=w.material;if(Array.isArray(Ie)){let Le=Ae.groups;for(let Ke=0,Ze=Le.length;Ke<Ze;Ke++){let Ee=Le[Ke],Ge=Ie[Ee.materialIndex];Ge&&Ge.visible&&u.push(w,Ae,Ge,F,ye.z,Ee)}}else Ie.visible&&u.push(w,Ae,Ie,F,ye.z,null)}}let De=w.children;for(let Ae=0,Ie=De.length;Ae<Ie;Ae++)Fa(De[Ae],z,F,H)}function Oa(w,z,F){let H=z.isScene===!0?z.overrideMaterial:null;for(let re=0,De=w.length;re<De;re++){let Ae=w[re],Ie=Ae.object,Le=Ae.geometry,Ke=H===null?Ae.material:H,Ze=Ae.group;if(F.isArrayCamera){x=F;let Ee=F.cameras;for(let Ge=0,$t=Ee.length;Ge<$t;Ge++){let He=Ee[Ge];Ie.layers.test(He.layers)&&(we.viewport(A.copy(He.viewport)),h.setupLights(He),Ba(Ie,z,He,Le,Ke,Ze))}}else x=null,Ba(Ie,z,F,Le,Ke,Ze)}}function Ba(w,z,F,H,re,De){if(w.onBeforeRender(f,z,F,H,re,De),h=j.get(z,x||F),w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),w.isImmediateRenderObject){let Ae=za(F,z,re,w);we.setMaterial(re),de.reset(),Pt(w,Ae)}else f.renderBufferDirect(F,z,H,re,w,De);w.onAfterRender(f,z,F,H,re,De),h=j.get(z,x||F)}function Jt(w,z,F){z.isScene!==!0&&(z=be);let H=Se.get(w),re=h.state.lights,De=h.state.shadowsArray,Ae=re.state.version,Ie=S.getParameters(w,re.state,De,z,F),Le=S.getProgramCacheKey(Ie),Ke=H.program,Ze=!0;if(Ke===void 0)w.addEventListener("dispose",Zt);else if(Ke.cacheKey!==Le)Yi(w);else if(H.lightsStateVersion!==Ae)Ze=!1;else if(Ie.shaderID!==void 0){let He=w.isMeshStandardMaterial?z.environment:null;H.envMap=K.get(w.envMap||He);return}else Ze=!1;Ze&&(Ie.uniforms=S.getUniforms(w),w.onBeforeCompile(Ie,f),Ke=S.acquireProgram(Ie,Le),H.program=Ke,H.uniforms=Ie.uniforms,H.outputEncoding=Ie.outputEncoding);let Ee=H.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(H.numClippingPlanes=R.numPlanes,H.numIntersection=R.numIntersection,Ee.clippingPlanes=R.uniform),H.environment=w.isMeshStandardMaterial?z.environment:null,H.fog=z.fog,H.envMap=K.get(w.envMap||H.environment),H.needsLights=Eh(w),H.lightsStateVersion=Ae,H.needsLights&&(Ee.ambientLightColor.value=re.state.ambient,Ee.lightProbe.value=re.state.probe,Ee.directionalLights.value=re.state.directional,Ee.directionalLightShadows.value=re.state.directionalShadow,Ee.spotLights.value=re.state.spot,Ee.spotLightShadows.value=re.state.spotShadow,Ee.rectAreaLights.value=re.state.rectArea,Ee.ltc_1.value=re.state.rectAreaLTC1,Ee.ltc_2.value=re.state.rectAreaLTC2,Ee.pointLights.value=re.state.point,Ee.pointLightShadows.value=re.state.pointShadow,Ee.hemisphereLights.value=re.state.hemi,Ee.directionalShadowMap.value=re.state.directionalShadowMap,Ee.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ee.spotShadowMap.value=re.state.spotShadowMap,Ee.spotShadowMatrix.value=re.state.spotShadowMatrix,Ee.pointShadowMap.value=re.state.pointShadowMap,Ee.pointShadowMatrix.value=re.state.pointShadowMatrix);let Ge=H.program.getUniforms(),$t=En.seqWithValue(Ge.seq,Ee);H.uniformsList=$t}function za(w,z,F,H){z.isScene!==!0&&(z=be),Y.resetTextureUnits();let re=z.fog,De=F.isMeshStandardMaterial?z.environment:null,Ae=p===null?f.outputEncoding:p.texture.encoding,Ie=K.get(F.envMap||De),Le=Se.get(F),Ke=h.state.lights;if(ne===!0&&(ce===!0||w!==E)){let it=w===E&&F.id===T;R.setState(F,w,it)}F.version===Le.__version?(F.fog&&Le.fog!==re||(Le.environment!==De||(Le.needsLights&&Le.lightsStateVersion!==Ke.state.version||(Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==R.numPlanes||Le.numIntersection!==R.numIntersection)||(Le.outputEncoding!==Ae||Le.envMap!==Ie)))))&&Jt(F,z,H):(Jt(F,z,H),Le.__version=F.version);let Ze=!1,Ee=!1,Ge=!1,$t=Le.program,He=$t.getUniforms(),In=Le.uniforms;if(we.useProgram($t.program)&&(Ze=!0,Ee=!0,Ge=!0),F.id!==T&&(T=F.id,Ee=!0),Ze||E!==w){if(He.setValue(k,"projectionMatrix",w.projectionMatrix),Pe.logarithmicDepthBuffer&&He.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),E!==w&&(E=w,Ee=!0,Ge=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){let it=He.map.cameraPosition;it!==void 0&&it.setValue(k,ye.setFromMatrixPosition(w.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&He.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||F.skinning)&&He.setValue(k,"viewMatrix",w.matrixWorldInverse)}if(F.skinning){He.setOptional(k,H,"bindMatrix"),He.setOptional(k,H,"bindMatrixInverse");let it=H.skeleton;if(it){let js=it.bones;if(Pe.floatVertexTextures){if(it.boneTexture===null){let gt=Math.sqrt(js.length*4);gt=xe.ceilPowerOfTwo(gt),gt=Math.max(gt,4);let Ji=new Float32Array(gt*gt*4);Ji.set(it.boneMatrices);let Qn=new Ei(Ji,gt,gt,Dt,mn);it.boneMatrices=Ji,it.boneTexture=Qn,it.boneTextureSize=gt}He.setValue(k,"boneTexture",it.boneTexture,Y),He.setValue(k,"boneTextureSize",it.boneTextureSize)}else He.setOptional(k,it,"boneMatrices")}}return(Ee||Le.receiveShadow!==H.receiveShadow)&&(Le.receiveShadow=H.receiveShadow,He.setValue(k,"receiveShadow",H.receiveShadow)),Ee&&(He.setValue(k,"toneMappingExposure",f.toneMappingExposure),Le.needsLights&&Sh(In,Ge),re&&F.fog&&b.refreshFogUniforms(In,re),b.refreshMaterialUniforms(In,F,O,C),En.upload(k,Le.uniformsList,In,Y)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(En.upload(k,Le.uniformsList,In,Y),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&He.setValue(k,"center",H.center),He.setValue(k,"modelViewMatrix",H.modelViewMatrix),He.setValue(k,"normalMatrix",H.normalMatrix),He.setValue(k,"modelMatrix",H.matrixWorld),$t}function Sh(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function Eh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.setFramebuffer=function(w){y!==w&&p===null&&k.bindFramebuffer(36160,w),y=w},this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return g},this.getRenderList=function(){return u},this.setRenderList=function(w){u=w},this.getRenderState=function(){return h},this.setRenderState=function(w){h=w},this.getRenderTarget=function(){return p},this.setRenderTarget=function(w,z=0,F=0){p=w,v=z,g=F,w&&Se.get(w).__webglFramebuffer===void 0&&Y.setupRenderTarget(w);let H=y,re=!1;if(w){let De=Se.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(H=De[z],re=!0):w.isWebGLMultisampleRenderTarget?H=Se.get(w).__webglMultisampledFramebuffer:H=De,A.copy(w.viewport),D.copy(w.scissor),V=w.scissorTest}else A.copy(P).multiplyScalar(O).floor(),D.copy(I).multiplyScalar(O).floor(),V=G;if(M!==H&&(k.bindFramebuffer(36160,H),M=H),we.viewport(A),we.scissor(D),we.setScissorTest(V),re){let De=Se.get(w.texture);k.framebufferTexture2D(36160,36064,34069+z,De.__webglTexture,F)}},this.readRenderTargetPixels=function(w,z,F,H,re,De,Ae){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie){let Le=!1;Ie!==M&&(k.bindFramebuffer(36160,Ie),Le=!0);try{let Ke=w.texture,Ze=Ke.format,Ee=Ke.type;if(Ze!==Dt&&le.convert(Ze)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee!==eo&&le.convert(Ee)!==k.getParameter(35738)&&!(Ee===mn&&(Pe.isWebGL2||me.get("OES_texture_float")||me.get("WEBGL_color_buffer_float")))&&!(Ee===Gr&&(Pe.isWebGL2?me.get("EXT_color_buffer_float"):me.get("EXT_color_buffer_half_float")))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k.checkFramebufferStatus(36160)===36053?z>=0&&z<=w.width-H&&F>=0&&F<=w.height-re&&k.readPixels(z,F,H,re,le.convert(Ze),le.convert(Ee),De):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{Le&&k.bindFramebuffer(36160,M)}}},this.copyFramebufferToTexture=function(w,z,F=0){let H=Math.pow(2,-F),re=Math.floor(z.image.width*H),De=Math.floor(z.image.height*H),Ae=le.convert(z.format);Y.setTexture2D(z,0),k.copyTexImage2D(3553,F,Ae,w.x,w.y,re,De,0),we.unbindTexture()},this.copyTextureToTexture=function(w,z,F,H=0){let re=z.image.width,De=z.image.height,Ae=le.convert(F.format),Ie=le.convert(F.type);Y.setTexture2D(F,0),k.pixelStorei(37440,F.flipY),k.pixelStorei(37441,F.premultiplyAlpha),k.pixelStorei(3317,F.unpackAlignment),z.isDataTexture?k.texSubImage2D(3553,H,w.x,w.y,re,De,Ae,Ie,z.image.data):z.isCompressedTexture?k.compressedTexSubImage2D(3553,H,w.x,w.y,z.mipmaps[0].width,z.mipmaps[0].height,Ae,z.mipmaps[0].data):k.texSubImage2D(3553,H,w.x,w.y,Ae,Ie,z.image),H===0&&F.generateMipmaps&&k.generateMipmap(3553),we.unbindTexture()},this.initTexture=function(w){Y.setTexture2D(w,0),we.unbindTexture()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function il(t){Li.call(this,t)}il.prototype=Object.assign(Object.create(Li.prototype),{constructor:il,isWebGL1Renderer:!0});var ls=class extends ge{constructor(){super();Object.defineProperty(this,"isScene",{value:!0}),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.background!==null&&(n.object.background=this.background.toJSON(e)),this.environment!==null&&(n.object.environment=this.environment.toJSON(e)),this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}};function At(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=xe.generateUUID()}Object.defineProperty(At.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(At.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this},set:function(t,e=0){return this.array.set(t,e),this},clone:function(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xe.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new At(e,this.stride);return n.setUsage(this.usage),n},onUpload:function(t){return this.onUploadCallback=t,this},toJSON:function(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xe.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});var kn=new _;function Vn(t,e,n,i){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}Object.defineProperties(Vn.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(t){this.data.needsUpdate=t}}});Object.assign(Vn.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(t){for(let e=0,n=this.data.count;e<n;e++)kn.x=this.getX(e),kn.y=this.getY(e),kn.z=this.getZ(e),kn.applyMatrix4(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this},setX:function(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this},setY:function(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this},setZ:function(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this},setW:function(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this},getX:function(t){return this.data.array[t*this.data.stride+this.offset]},getY:function(t){return this.data.array[t*this.data.stride+this.offset+1]},getZ:function(t){return this.data.array[t*this.data.stride+this.offset+2]},getW:function(t){return this.data.array[t*this.data.stride+this.offset+3]},setXY:function(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this},clone:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new _e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Vn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function Wn(t){ve.call(this),this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}Wn.prototype=Object.create(ve.prototype);Wn.prototype.constructor=Wn;Wn.prototype.isSpriteMaterial=!0;Wn.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this};var Ci,yr=new _,Ri=new _,Pi=new _,Di=new U,xr=new U,rl=new Te,hs=new _,_r=new _,us=new _,sl=new U,Bo=new U,ol=new U;function al(t){if(ge.call(this),this.type="Sprite",Ci===void 0){Ci=new Oe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new At(e,5);Ci.setIndex([0,1,2,0,2,3]),Ci.setAttribute("position",new Vn(n,3,0,!1)),Ci.setAttribute("uv",new Vn(n,2,3,!1))}this.geometry=Ci,this.material=t!==void 0?t:new Wn,this.center=new U(.5,.5)}al.prototype=Object.assign(Object.create(ge.prototype),{constructor:al,isSprite:!0,raycast:function(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ri.setFromMatrixScale(this.matrixWorld),rl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Pi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ri.multiplyScalar(-Pi.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let s=this.center;fs(hs.set(-.5,-.5,0),Pi,s,Ri,i,r),fs(_r.set(.5,-.5,0),Pi,s,Ri,i,r),fs(us.set(.5,.5,0),Pi,s,Ri,i,r),sl.set(0,0),Bo.set(1,0),ol.set(1,1);let o=t.ray.intersectTriangle(hs,_r,us,!1,yr);if(o===null&&(fs(_r.set(-.5,.5,0),Pi,s,Ri,i,r),Bo.set(0,1),o=t.ray.intersectTriangle(hs,us,_r,!1,yr),o===null))return;let a=t.ray.origin.distanceTo(yr);if(a<t.near||a>t.far)return;e.push({distance:a,point:yr.clone(),uv:at.getUV(yr,hs,_r,us,sl,Bo,ol,new U),face:null,object:this})},copy:function(t){return ge.prototype.copy.call(this,t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}});function fs(t,e,n,i,r,s){Di.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(xr.x=s*Di.x-r*Di.y,xr.y=r*Di.x+s*Di.y):xr.copy(Di),t.copy(e),t.x+=xr.x,t.y+=xr.y,t.applyMatrix4(rl)}var ds=new _,cl=new _;function zo(){ge.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}zo.prototype=Object.assign(Object.create(ge.prototype),{constructor:zo,isLOD:!0,copy:function(t){ge.prototype.copy.call(this,t,!1);let e=t.levels;for(let n=0,i=e.length;n<i;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=t.autoUpdate,this},addLevel:function(t,e=0){e=Math.abs(e);let n=this.levels,i;for(i=0;i<n.length&&!(e<n[i].distance);i++);return n.splice(i,0,{distance:e,object:t}),this.add(t),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(t){let e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i&&!(t<e[n].distance);n++);return e[n-1].object}return null},raycast:function(t,e){let n=this.levels;if(n.length>0){ds.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(ds);this.getObjectForDistance(i).raycast(t,e)}},update:function(t){let e=this.levels;if(e.length>1){ds.setFromMatrixPosition(t.matrixWorld),cl.setFromMatrixPosition(this.matrixWorld);let n=ds.distanceTo(cl)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r&&n>=e[i].distance;i++)e[i-1].object.visible=!1,e[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}},toJSON:function(t){let e=ge.prototype.toJSON.call(this,t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let s=n[i];e.object.levels.push({object:s.object.uuid,distance:s.distance})}return e}});function Uo(t,e){t&&t.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),Je.call(this,t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Te,this.bindMatrixInverse=new Te}Uo.prototype=Object.assign(Object.create(Je.prototype),{constructor:Uo,isSkinnedMesh:!0,copy:function(t){return Je.prototype.copy.call(this,t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this},bind:function(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){let t=new ze,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);let r=1/t.manhattanLength();r!==Infinity?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}},updateMatrixWorld:function(t){Je.prototype.updateMatrixWorld.call(this,t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(){let t=new _,e=new ze,n=new ze,i=new _,r=new Te;return function(s,o){let a=this.skeleton,c=this.geometry;e.fromBufferAttribute(c.attributes.skinIndex,s),n.fromBufferAttribute(c.attributes.skinWeight,s),t.fromBufferAttribute(c.attributes.position,s).applyMatrix4(this.bindMatrix),o.set(0,0,0);for(let l=0;l<4;l++){let d=n.getComponent(l);if(d!==0){let u=e.getComponent(l);r.multiplyMatrices(a.bones[u].matrixWorld,a.boneInverses[u]),o.addScaledVector(i.copy(t).applyMatrix4(r),d)}}return o.applyMatrix4(this.bindMatrixInverse)}}()});function Go(){ge.call(this),this.type="Bone"}Go.prototype=Object.assign(Object.create(ge.prototype),{constructor:Go,isBone:!0});var ll=new Te,vg=new Te;function Ho(t=[],e=[]){this.uuid=xe.generateUUID(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}Object.assign(Ho.prototype,{init:function(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Te)}},calculateInverses:function(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Te;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}},pose:function(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=t.length;r<s;r++){let o=t[r]?t[r].matrixWorld:vg;ll.multiplyMatrices(o,e[r]),ll.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)},clone:function(){return new Ho(this.bones,this.boneInverses)},getBoneByName:function(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}},dispose:function(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)},fromJSON:function(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],s=e[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Go),this.bones.push(s),this.boneInverses.push(new Te().fromArray(t.boneInverses[n]))}return this.init(),this},toJSON:function(){let t={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let s=e[i];t.bones.push(s.uuid);let o=n[i];t.boneInverses.push(o.toArray())}return t}});var hl=new Te,ul=new Te,ps=[],br=new Je;function fl(t,e,n){Je.call(this,t,e),this.instanceMatrix=new _e(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}fl.prototype=Object.assign(Object.create(Je.prototype),{constructor:fl,isInstancedMesh:!0,copy:function(t){return Je.prototype.copy.call(this,t),this.instanceMatrix.copy(t.instanceMatrix),this.count=t.count,this},getColorAt:function(t,e){e.fromArray(this.instanceColor.array,t*3)},getMatrixAt:function(t,e){e.fromArray(this.instanceMatrix.array,t*16)},raycast:function(t,e){let n=this.matrixWorld,i=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material===void 0)return;for(let r=0;r<i;r++){this.getMatrixAt(r,hl),ul.multiplyMatrices(n,hl),br.matrixWorld=ul,br.raycast(t,ps);for(let s=0,o=ps.length;s<o;s++){let a=ps[s];a.instanceId=r,a.object=this,e.push(a)}ps.length=0}},setColorAt:function(t,e){this.instanceColor===null&&(this.instanceColor=new _e(new Float32Array(this.count*3),3)),e.toArray(this.instanceColor.array,t*3)},setMatrixAt:function(t,e){e.toArray(this.instanceMatrix.array,t*16)},updateMorphTargets:function(){}});function Lt(t){ve.call(this),this.type="LineBasicMaterial",this.color=new ue(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(t)}Lt.prototype=Object.create(ve.prototype);Lt.prototype.constructor=Lt;Lt.prototype.isLineBasicMaterial=!0;Lt.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.morphTargets=t.morphTargets,this};var dl=new _,pl=new _,ml=new Te,ms=new ui,gs=new nn;function Ii(t,e,n){n===1&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),ge.call(this),this.type="Line",this.geometry=t!==void 0?t:new Oe,this.material=e!==void 0?e:new Lt,this.updateMorphTargets()}Ii.prototype=Object.assign(Object.create(ge.prototype),{constructor:Ii,isLine:!0,copy:function(t){return ge.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},computeLineDistances:function(){let t=this.geometry;if(t.isBufferGeometry)if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)dl.fromBufferAttribute(e,i-1),pl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=dl.distanceTo(pl);t.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){let e=t.vertices,n=t.lineDistances;n[0]=0;for(let i=1,r=e.length;i<r;i++)n[i]=n[i-1],n[i]+=e[i-1].distanceTo(e[i])}return this},raycast:function(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(i),gs.radius+=r,t.ray.intersectsSphere(gs)===!1)return;ml.copy(i).invert(),ms.copy(t.ray).applyMatrix4(ml);let s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new _,c=new _,l=new _,d=new _,u=this.isLineSegments?2:1;if(n.isBufferGeometry){let h=n.index,f=n.attributes,m=f.position;if(h!==null){let y=h.array;for(let v=0,g=y.length-1;v<g;v+=u){let p=y[v],M=y[v+1];a.fromBufferAttribute(m,p),c.fromBufferAttribute(m,M);let T=ms.distanceSqToSegment(a,c,d,l);if(T>o)continue;d.applyMatrix4(this.matrixWorld);let E=t.ray.origin.distanceTo(d);if(E<t.near||E>t.far)continue;e.push({distance:E,point:l.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else for(let y=0,v=m.count-1;y<v;y+=u){a.fromBufferAttribute(m,y),c.fromBufferAttribute(m,y+1);let g=ms.distanceSqToSegment(a,c,d,l);if(g>o)continue;d.applyMatrix4(this.matrixWorld);let p=t.ray.origin.distanceTo(d);if(p<t.near||p>t.far)continue;e.push({distance:p,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else if(n.isGeometry){let h=n.vertices,f=h.length;for(let m=0;m<f-1;m+=u){let y=ms.distanceSqToSegment(h[m],h[m+1],d,l);if(y>o)continue;d.applyMatrix4(this.matrixWorld);let v=t.ray.origin.distanceTo(d);if(v<t.near||v>t.far)continue;e.push({distance:v,point:l.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}},updateMorphTargets:function(){let t=this.geometry;if(t.isBufferGeometry){let e=t.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});var vs=new _,ys=new _;function xs(t,e){Ii.call(this,t,e),this.type="LineSegments"}xs.prototype=Object.assign(Object.create(Ii.prototype),{constructor:xs,isLineSegments:!0,computeLineDistances:function(){let t=this.geometry;if(t.isBufferGeometry)if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)vs.fromBufferAttribute(e,i),ys.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+vs.distanceTo(ys);t.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){let e=t.vertices,n=t.lineDistances;for(let i=0,r=e.length;i<r;i+=2)vs.copy(e[i]),ys.copy(e[i+1]),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+vs.distanceTo(ys)}return this}});function gl(t,e){Ii.call(this,t,e),this.type="LineLoop"}gl.prototype=Object.assign(Object.create(Ii.prototype),{constructor:gl,isLineLoop:!0});function jn(t){ve.call(this),this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(t)}jn.prototype=Object.create(ve.prototype);jn.prototype.constructor=jn;jn.prototype.isPointsMaterial=!0;jn.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.morphTargets=t.morphTargets,this};var vl=new Te,ko=new ui,_s=new nn,bs=new _;function yl(t,e){ge.call(this),this.type="Points",this.geometry=t!==void 0?t:new Oe,this.material=e!==void 0?e:new jn,this.updateMorphTargets()}yl.prototype=Object.assign(Object.create(ge.prototype),{constructor:yl,isPoints:!0,copy:function(t){return ge.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},raycast:function(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(i),_s.radius+=r,t.ray.intersectsSphere(_s)===!1)return;vl.copy(i).invert(),ko.copy(t.ray).applyMatrix4(vl);let s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(n.isBufferGeometry){let a=n.index,c=n.attributes,l=c.position;if(a!==null){let d=a.array;for(let u=0,h=d.length;u<h;u++){let f=d[u];bs.fromBufferAttribute(l,f),Vo(bs,f,o,i,t,e,this)}}else for(let d=0,u=l.count;d<u;d++)bs.fromBufferAttribute(l,d),Vo(bs,d,o,i,t,e,this)}else{let a=n.vertices;for(let c=0,l=a.length;c<l;c++)Vo(a[c],c,o,i,t,e,this)}},updateMorphTargets:function(){let t=this.geometry;if(t.isBufferGeometry){let e=t.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function Vo(t,e,n,i,r,s,o){let a=ko.distanceSqToPoint(t);if(a<n){let c=new _;ko.closestPointToPoint(t,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}function xl(t,e,n,i,r,s,o,a,c){ke.call(this,t,e,n,i,r,s,o,a,c),this.format=o!==void 0?o:Nn,this.minFilter=s!==void 0?s:lt,this.magFilter=r!==void 0?r:lt,this.generateMipmaps=!1;let l=this;function d(){l.needsUpdate=!0,t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(d)}xl.prototype=Object.assign(Object.create(ke.prototype),{constructor:xl,clone:function(){return new this.constructor(this.image).copy(this)},isVideoTexture:!0,update:function(){let t=this.image,e="requestVideoFrameCallback"in t;e===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function wr(t,e,n,i,r,s,o,a,c,l,d,u){ke.call(this,null,s,o,a,c,l,i,r,d,u),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}wr.prototype=Object.create(ke.prototype);wr.prototype.constructor=wr;wr.prototype.isCompressedTexture=!0;function ws(t,e,n,i,r,s,o,a,c){ke.call(this,t,e,n,i,r,s,o,a,c),this.needsUpdate=!0}ws.prototype=Object.create(ke.prototype);ws.prototype.constructor=ws;ws.prototype.isCanvasTexture=!0;function Ms(t,e,n,i,r,s,o,a,c,l){if(l=l!==void 0?l:ti,l!==ti&&l!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===ti&&(n=zr),n===void 0&&l===ir&&(n=nr),ke.call(this,null,i,r,s,o,a,l,n,c),this.image={width:t,height:e},this.magFilter=o!==void 0?o:ft,this.minFilter=a!==void 0?a:ft,this.flipY=!1,this.generateMipmaps=!1}Ms.prototype=Object.create(ke.prototype);Ms.prototype.constructor=Ms;Ms.prototype.isDepthTexture=!0;var yg=0,kt=new Te,Wo=new ge,Ss=new _;function yt(){Object.defineProperty(this,"id",{value:yg+=2}),this.uuid=xe.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}yt.prototype=Object.assign(Object.create(Et.prototype),{constructor:yt,isGeometry:!0,applyMatrix4:function(t){let e=new dt().getNormalMatrix(t);for(let n=0,i=this.vertices.length;n<i;n++){let r=this.vertices[n];r.applyMatrix4(t)}for(let n=0,i=this.faces.length;n<i;n++){let r=this.faces[n];r.normal.applyMatrix3(e).normalize();for(let s=0,o=r.vertexNormals.length;s<o;s++)r.vertexNormals[s].applyMatrix3(e).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(t){return kt.makeRotationX(t),this.applyMatrix4(kt),this},rotateY:function(t){return kt.makeRotationY(t),this.applyMatrix4(kt),this},rotateZ:function(t){return kt.makeRotationZ(t),this.applyMatrix4(kt),this},translate:function(t,e,n){return kt.makeTranslation(t,e,n),this.applyMatrix4(kt),this},scale:function(t,e,n){return kt.makeScale(t,e,n),this.applyMatrix4(kt),this},lookAt:function(t){return Wo.lookAt(t),Wo.updateMatrix(),this.applyMatrix4(Wo.matrix),this},fromBufferGeometry:function(t){let e=this,n=t.index!==null?t.index:void 0,i=t.attributes;if(i.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;let r=i.position,s=i.normal,o=i.color,a=i.uv,c=i.uv2;c!==void 0&&(this.faceVertexUvs[1]=[]);for(let u=0;u<r.count;u++)e.vertices.push(new _().fromBufferAttribute(r,u)),o!==void 0&&e.colors.push(new ue().fromBufferAttribute(o,u));function l(u,h,f,m){let y=o===void 0?[]:[e.colors[u].clone(),e.colors[h].clone(),e.colors[f].clone()],v=s===void 0?[]:[new _().fromBufferAttribute(s,u),new _().fromBufferAttribute(s,h),new _().fromBufferAttribute(s,f)],g=new Qr(u,h,f,v,y,m);e.faces.push(g),a!==void 0&&e.faceVertexUvs[0].push([new U().fromBufferAttribute(a,u),new U().fromBufferAttribute(a,h),new U().fromBufferAttribute(a,f)]),c!==void 0&&e.faceVertexUvs[1].push([new U().fromBufferAttribute(c,u),new U().fromBufferAttribute(c,h),new U().fromBufferAttribute(c,f)])}let d=t.groups;if(d.length>0)for(let u=0;u<d.length;u++){let h=d[u],f=h.start,m=h.count;for(let y=f,v=f+m;y<v;y+=3)n!==void 0?l(n.getX(y),n.getX(y+1),n.getX(y+2),h.materialIndex):l(y,y+1,y+2,h.materialIndex)}else if(n!==void 0)for(let u=0;u<n.count;u+=3)l(n.getX(u),n.getX(u+1),n.getX(u+2));else for(let u=0;u<r.count;u+=3)l(u,u+1,u+2);return this.computeFaceNormals(),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this},normalize:function(){this.computeBoundingSphere();let t=this.boundingSphere.center,e=this.boundingSphere.radius,n=e===0?1:1/e,i=new Te;return i.set(n,0,0,-n*t.x,0,n,0,-n*t.y,0,0,n,-n*t.z,0,0,0,1),this.applyMatrix4(i),this},computeFaceNormals:function(){let t=new _,e=new _;for(let n=0,i=this.faces.length;n<i;n++){let r=this.faces[n],s=this.vertices[r.a],o=this.vertices[r.b],a=this.vertices[r.c];t.subVectors(a,o),e.subVectors(s,o),t.cross(e),t.normalize(),r.normal.copy(t)}},computeVertexNormals:function(t=!0){let e=new Array(this.vertices.length);for(let n=0,i=this.vertices.length;n<i;n++)e[n]=new _;if(t){let n=new _,i=new _;for(let r=0,s=this.faces.length;r<s;r++){let o=this.faces[r],a=this.vertices[o.a],c=this.vertices[o.b],l=this.vertices[o.c];n.subVectors(l,c),i.subVectors(a,c),n.cross(i),e[o.a].add(n),e[o.b].add(n),e[o.c].add(n)}}else{this.computeFaceNormals();for(let n=0,i=this.faces.length;n<i;n++){let r=this.faces[n];e[r.a].add(r.normal),e[r.b].add(r.normal),e[r.c].add(r.normal)}}for(let n=0,i=this.vertices.length;n<i;n++)e[n].normalize();for(let n=0,i=this.faces.length;n<i;n++){let r=this.faces[n],s=r.vertexNormals;s.length===3?(s[0].copy(e[r.a]),s[1].copy(e[r.b]),s[2].copy(e[r.c])):(s[0]=e[r.a].clone(),s[1]=e[r.b].clone(),s[2]=e[r.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let t=0,e=this.faces.length;t<e;t++){let n=this.faces[t],i=n.vertexNormals;i.length===3?(i[0].copy(n.normal),i[1].copy(n.normal),i[2].copy(n.normal)):(i[0]=n.normal.clone(),i[1]=n.normal.clone(),i[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(let e=0,n=this.faces.length;e<n;e++){let i=this.faces[e];i.__originalFaceNormal?i.__originalFaceNormal.copy(i.normal):i.__originalFaceNormal=i.normal.clone(),i.__originalVertexNormals||(i.__originalVertexNormals=[]);for(let r=0,s=i.vertexNormals.length;r<s;r++)i.__originalVertexNormals[r]?i.__originalVertexNormals[r].copy(i.vertexNormals[r]):i.__originalVertexNormals[r]=i.vertexNormals[r].clone()}let t=new yt;t.faces=this.faces;for(let e=0,n=this.morphTargets.length;e<n;e++){if(!this.morphNormals[e]){this.morphNormals[e]={},this.morphNormals[e].faceNormals=[],this.morphNormals[e].vertexNormals=[];let r=this.morphNormals[e].faceNormals,s=this.morphNormals[e].vertexNormals;for(let o=0,a=this.faces.length;o<a;o++){let c=new _,l={a:new _,b:new _,c:new _};r.push(c),s.push(l)}}let i=this.morphNormals[e];t.vertices=this.morphTargets[e].vertices,t.computeFaceNormals(),t.computeVertexNormals();for(let r=0,s=this.faces.length;r<s;r++){let o=this.faces[r],a=i.faceNormals[r],c=i.vertexNormals[r];a.copy(o.normal),c.a.copy(o.vertexNormals[0]),c.b.copy(o.vertexNormals[1]),c.c.copy(o.vertexNormals[2])}}for(let e=0,n=this.faces.length;e<n;e++){let i=this.faces[e];i.normal=i.__originalFaceNormal,i.vertexNormals=i.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new en),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new nn),this.boundingSphere.setFromPoints(this.vertices)},merge:function(t,e,n=0){if(!(t&&t.isGeometry)){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",t);return}let i,r=this.vertices.length,s=this.vertices,o=t.vertices,a=this.faces,c=t.faces,l=this.colors,d=t.colors;e!==void 0&&(i=new dt().getNormalMatrix(e));for(let u=0,h=o.length;u<h;u++){let f=o[u],m=f.clone();e!==void 0&&m.applyMatrix4(e),s.push(m)}for(let u=0,h=d.length;u<h;u++)l.push(d[u].clone());for(let u=0,h=c.length;u<h;u++){let f=c[u],m,y,v=f.vertexNormals,g=f.vertexColors,p=new Qr(f.a+r,f.b+r,f.c+r);p.normal.copy(f.normal),i!==void 0&&p.normal.applyMatrix3(i).normalize();for(let M=0,T=v.length;M<T;M++)m=v[M].clone(),i!==void 0&&m.applyMatrix3(i).normalize(),p.vertexNormals.push(m);p.color.copy(f.color);for(let M=0,T=g.length;M<T;M++)y=g[M],p.vertexColors.push(y.clone());p.materialIndex=f.materialIndex+n,a.push(p)}for(let u=0,h=t.faceVertexUvs.length;u<h;u++){let f=t.faceVertexUvs[u];this.faceVertexUvs[u]===void 0&&(this.faceVertexUvs[u]=[]);for(let m=0,y=f.length;m<y;m++){let v=f[m],g=[];for(let p=0,M=v.length;p<M;p++)g.push(v[p].clone());this.faceVertexUvs[u].push(g)}}},mergeMesh:function(t){if(!(t&&t.isMesh)){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",t);return}t.matrixAutoUpdate&&t.updateMatrix(),this.merge(t.geometry,t.matrix)},mergeVertices:function(t=4){let e={},n=[],i=[],r=Math.pow(10,t);for(let a=0,c=this.vertices.length;a<c;a++){let l=this.vertices[a],d=Math.round(l.x*r)+"_"+Math.round(l.y*r)+"_"+Math.round(l.z*r);e[d]===void 0?(e[d]=a,n.push(this.vertices[a]),i[a]=n.length-1):i[a]=i[e[d]]}let s=[];for(let a=0,c=this.faces.length;a<c;a++){let l=this.faces[a];l.a=i[l.a],l.b=i[l.b],l.c=i[l.c];let d=[l.a,l.b,l.c];for(let u=0;u<3;u++)if(d[u]===d[(u+1)%3]){s.push(a);break}}for(let a=s.length-1;a>=0;a--){let c=s[a];this.faces.splice(c,1);for(let l=0,d=this.faceVertexUvs.length;l<d;l++)this.faceVertexUvs[l].splice(c,1)}let o=this.vertices.length-n.length;return this.vertices=n,o},setFromPoints:function(t){this.vertices=[];for(let e=0,n=t.length;e<n;e++){let i=t[e];this.vertices.push(new _(i.x,i.y,i.z||0))}return this},sortFacesByMaterialIndex:function(){let t=this.faces,e=t.length;for(let a=0;a<e;a++)t[a]._id=a;function n(a,c){return a.materialIndex-c.materialIndex}t.sort(n);let i=this.faceVertexUvs[0],r=this.faceVertexUvs[1],s,o;i&&i.length===e&&(s=[]),r&&r.length===e&&(o=[]);for(let a=0;a<e;a++){let c=t[a]._id;s&&s.push(i[c]),o&&o.push(r[c])}s&&(this.faceVertexUvs[0]=s),o&&(this.faceVertexUvs[1]=o)},toJSON:function(){let t={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.parameters!==void 0){let f=this.parameters;for(let m in f)f[m]!==void 0&&(t[m]=f[m]);return t}let e=[];for(let f=0;f<this.vertices.length;f++){let m=this.vertices[f];e.push(m.x,m.y,m.z)}let n=[],i=[],r={},s=[],o={},a=[],c={};for(let f=0;f<this.faces.length;f++){let m=this.faces[f],y=!0,v=!1,g=this.faceVertexUvs[0][f]!==void 0,p=m.normal.length()>0,M=m.vertexNormals.length>0,T=m.color.r!==1||m.color.g!==1||m.color.b!==1,E=m.vertexColors.length>0,x=0;if(x=l(x,0,0),x=l(x,1,y),x=l(x,2,v),x=l(x,3,g),x=l(x,4,p),x=l(x,5,M),x=l(x,6,T),x=l(x,7,E),n.push(x),n.push(m.a,m.b,m.c),n.push(m.materialIndex),g){let A=this.faceVertexUvs[0][f];n.push(h(A[0]),h(A[1]),h(A[2]))}if(p&&n.push(d(m.normal)),M){let A=m.vertexNormals;n.push(d(A[0]),d(A[1]),d(A[2]))}if(T&&n.push(u(m.color)),E){let A=m.vertexColors;n.push(u(A[0]),u(A[1]),u(A[2]))}}function l(f,m,y){return y?f|1<<m:f&~(1<<m)}function d(f){let m=f.x.toString()+f.y.toString()+f.z.toString();return r[m]!==void 0||(r[m]=i.length/3,i.push(f.x,f.y,f.z)),r[m]}function u(f){let m=f.r.toString()+f.g.toString()+f.b.toString();return o[m]!==void 0||(o[m]=s.length,s.push(f.getHex())),o[m]}function h(f){let m=f.x.toString()+f.y.toString();return c[m]!==void 0||(c[m]=a.length/2,a.push(f.x,f.y)),c[m]}return t.data={},t.data.vertices=e,t.data.normals=i,s.length>0&&(t.data.colors=s),a.length>0&&(t.data.uvs=[a]),t.data.faces=n,t},clone:function(){return new yt().copy(this)},copy:function(t){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=t.name;let e=t.vertices;for(let u=0,h=e.length;u<h;u++)this.vertices.push(e[u].clone());let n=t.colors;for(let u=0,h=n.length;u<h;u++)this.colors.push(n[u].clone());let i=t.faces;for(let u=0,h=i.length;u<h;u++)this.faces.push(i[u].clone());for(let u=0,h=t.faceVertexUvs.length;u<h;u++){let f=t.faceVertexUvs[u];this.faceVertexUvs[u]===void 0&&(this.faceVertexUvs[u]=[]);for(let m=0,y=f.length;m<y;m++){let v=f[m],g=[];for(let p=0,M=v.length;p<M;p++){let T=v[p];g.push(T.clone())}this.faceVertexUvs[u].push(g)}}let r=t.morphTargets;for(let u=0,h=r.length;u<h;u++){let f={};if(f.name=r[u].name,r[u].vertices!==void 0){f.vertices=[];for(let m=0,y=r[u].vertices.length;m<y;m++)f.vertices.push(r[u].vertices[m].clone())}if(r[u].normals!==void 0){f.normals=[];for(let m=0,y=r[u].normals.length;m<y;m++)f.normals.push(r[u].normals[m].clone())}this.morphTargets.push(f)}let s=t.morphNormals;for(let u=0,h=s.length;u<h;u++){let f={};if(s[u].vertexNormals!==void 0){f.vertexNormals=[];for(let m=0,y=s[u].vertexNormals.length;m<y;m++){let v=s[u].vertexNormals[m],g={};g.a=v.a.clone(),g.b=v.b.clone(),g.c=v.c.clone(),f.vertexNormals.push(g)}}if(s[u].faceNormals!==void 0){f.faceNormals=[];for(let m=0,y=s[u].faceNormals.length;m<y;m++)f.faceNormals.push(s[u].faceNormals[m].clone())}this.morphNormals.push(f)}let o=t.skinWeights;for(let u=0,h=o.length;u<h;u++)this.skinWeights.push(o[u].clone());let a=t.skinIndices;for(let u=0,h=a.length;u<h;u++)this.skinIndices.push(a[u].clone());let c=t.lineDistances;for(let u=0,h=c.length;u<h;u++)this.lineDistances.push(c[u]);let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.elementsNeedUpdate=t.elementsNeedUpdate,this.verticesNeedUpdate=t.verticesNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.lineDistancesNeedUpdate=t.lineDistancesNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var _l=class extends Oe{constructor(e,n,i=1,r=0){super();this.type="PolyhedronBufferGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};let s=[],o=[];a(r),l(i),d(),this.setAttribute("position",new Ne(s,3)),this.setAttribute("normal",new Ne(s.slice(),3)),this.setAttribute("uv",new Ne(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(p){let M=new _,T=new _,E=new _;for(let x=0;x<n.length;x+=3)f(n[x+0],M),f(n[x+1],T),f(n[x+2],E),c(M,T,E,p)}function c(p,M,T,E){let x=E+1,A=[];for(let D=0;D<=x;D++){A[D]=[];let V=p.clone().lerp(T,D/x),X=M.clone().lerp(T,D/x),C=x-D;for(let O=0;O<=C;O++)O===0&&D===x?A[D][O]=V:A[D][O]=V.clone().lerp(X,O/C)}for(let D=0;D<x;D++)for(let V=0;V<2*(x-D)-1;V++){let X=Math.floor(V/2);V%2===0?(h(A[D][X+1]),h(A[D+1][X]),h(A[D][X])):(h(A[D][X+1]),h(A[D+1][X+1]),h(A[D+1][X]))}}function l(p){let M=new _;for(let T=0;T<s.length;T+=3)M.x=s[T+0],M.y=s[T+1],M.z=s[T+2],M.normalize().multiplyScalar(p),s[T+0]=M.x,s[T+1]=M.y,s[T+2]=M.z}function d(){let p=new _;for(let M=0;M<s.length;M+=3){p.x=s[M+0],p.y=s[M+1],p.z=s[M+2];let T=v(p)/2/Math.PI+.5,E=g(p)/Math.PI+.5;o.push(T,1-E)}m(),u()}function u(){for(let p=0;p<o.length;p+=6){let M=o[p+0],T=o[p+2],E=o[p+4],x=Math.max(M,T,E),A=Math.min(M,T,E);x>.9&&A<.1&&(M<.2&&(o[p+0]+=1),T<.2&&(o[p+2]+=1),E<.2&&(o[p+4]+=1))}}function h(p){s.push(p.x,p.y,p.z)}function f(p,M){let T=p*3;M.x=e[T+0],M.y=e[T+1],M.z=e[T+2]}function m(){let p=new _,M=new _,T=new _,E=new _,x=new U,A=new U,D=new U;for(let V=0,X=0;V<s.length;V+=9,X+=6){p.set(s[V+0],s[V+1],s[V+2]),M.set(s[V+3],s[V+4],s[V+5]),T.set(s[V+6],s[V+7],s[V+8]),x.set(o[X+0],o[X+1]),A.set(o[X+2],o[X+3]),D.set(o[X+4],o[X+5]),E.copy(p).add(M).add(T).divideScalar(3);let C=v(E);y(x,X+0,p,C),y(A,X+2,M,C),y(D,X+4,T,C)}}function y(p,M,T,E){E<0&&p.x===1&&(o[M]=p.x-1),T.x===0&&T.z===0&&(o[M]=E/2/Math.PI+.5)}function v(p){return Math.atan2(p.z,-p.x)}function g(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}},Uv=new _,Gv=new _,Hv=new _,kv=new at,_g={triangulate:function(t,e,n){n=n||2;let i=e&&e.length,r=i?e[0]*n:t.length,s=bl(t,0,r,n,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,d,u,h,f;if(i&&(s=xg(t,e,s,n)),t.length>80*n){a=l=t[0],c=d=t[1];for(let m=n;m<r;m+=n)u=t[m],h=t[m+1],u<a&&(a=u),h<c&&(c=h),u>l&&(l=u),h>d&&(d=h);f=Math.max(l-a,d-c),f=f!==0?1/f:0}return Mr(s,o,n,a,c,f),o}};function bl(t,e,n,i,r){let s,o;if(r===bg(t,e,n,i)>0)for(s=e;s<n;s+=i)o=wl(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=wl(s,t[s],t[s+1],o);return o&&Es(o,o.next)&&(Sr(o),o=o.next),o}function An(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Es(n,n.next)||Xe(n.prev,n,n.next)===0)){if(Sr(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Mr(t,e,n,i,r,s,o){if(!t)return;!o&&s&&Tg(t,i,r,s);let a=t,c,l;for(;t.prev!==t.next;){if(c=t.prev,l=t.next,s?Mg(t,i,r,s):wg(t)){e.push(c.i/n),e.push(t.i/n),e.push(l.i/n),Sr(t),t=l.next,a=l.next;continue}if(t=l,t===a){o?o===1?(t=Sg(An(t),e,n),Mr(t,e,n,i,r,s,2)):o===2&&Eg(t,e,n,i,r,s):Mr(An(t),e,n,i,r,s,1);break}}}function wg(t){let e=t.prev,n=t,i=t.next;if(Xe(e,n,i)>=0)return!1;let r=t.next.next;for(;r!==t.prev;){if(Ni(e.x,e.y,n.x,n.y,i.x,i.y,r.x,r.y)&&Xe(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function Mg(t,e,n,i){let r=t.prev,s=t,o=t.next;if(Xe(r,s,o)>=0)return!1;let a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,d=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,u=jo(a,c,e,n,i),h=jo(l,d,e,n,i),f=t.prevZ,m=t.nextZ;for(;f&&f.z>=u&&m&&m.z<=h;){if(f!==t.prev&&f!==t.next&&Ni(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Xe(f.prev,f,f.next)>=0)return!1;if(f=f.prevZ,m!==t.prev&&m!==t.next&&Ni(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Xe(m.prev,m,m.next)>=0)return!1;m=m.nextZ}for(;f&&f.z>=u;){if(f!==t.prev&&f!==t.next&&Ni(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Xe(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;m&&m.z<=h;){if(m!==t.prev&&m!==t.next&&Ni(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Xe(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function Sg(t,e,n){let i=t;do{let r=i.prev,s=i.next.next;!Es(r,s)&&Ml(r,i,i.next,s)&&Er(r,s)&&Er(s,r)&&(e.push(r.i/n),e.push(i.i/n),e.push(s.i/n),Sr(i),Sr(i.next),i=t=s),i=i.next}while(i!==t);return An(i)}function Eg(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ag(o,a)){let c=Sl(o,a);o=An(o,o.next),c=An(c,c.next),Mr(o,e,n,i,r,s),Mr(c,e,n,i,r,s);return}a=a.next}o=o.next}while(o!==t)}function xg(t,e,n,i){let r=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:t.length,l=bl(t,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(Rg(l));for(r.sort(Lg),s=0;s<r.length;s++)Cg(r[s],n),n=An(n,n.next);return n}function Lg(t,e){return t.x-e.x}function Cg(t,e){if(e=Pg(t,e),e){let n=Sl(e,t);An(e,e.next),An(n,n.next)}}function Pg(t,e){let n=e,i=t.x,r=t.y,s=-Infinity,o;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){let h=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=i&&h>s){if(s=h,h===i){if(r===n.y)return n;if(r===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!o)return null;if(i===s)return o;let a=o,c=o.x,l=o.y,d=Infinity,u;n=o;do i>=n.x&&n.x>=c&&i!==n.x&&Ni(r<l?i:s,r,c,l,r<l?s:i,r,n.x,n.y)&&(u=Math.abs(r-n.y)/(i-n.x),Er(n,t)&&(u<d||u===d&&(n.x>o.x||n.x===o.x&&Dg(o,n)))&&(o=n,d=u)),n=n.next;while(n!==a);return o}function Dg(t,e){return Xe(t.prev,t,e.prev)<0&&Xe(e.next,t,t.next)<0}function Tg(t,e,n,i){let r=t;do r.z===null&&(r.z=jo(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,Ig(r)}function Ig(t){let e,n,i,r,s,o,a,c,l=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<l&&!(a++,i=i.nextZ,!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,l*=2}while(o>1);return t}function jo(t,e,n,i,r){return t=32767*(t-n)*r,e=32767*(e-i)*r,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Rg(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Ni(t,e,n,i,r,s,o,a){return(r-o)*(e-a)-(t-o)*(s-a)>=0&&(t-o)*(i-a)-(n-o)*(e-a)>=0&&(n-o)*(s-a)-(r-o)*(i-a)>=0}function Ag(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Ng(t,e)&&(Er(t,e)&&Er(e,t)&&Fg(t,e)&&(Xe(t.prev,t,e.prev)||Xe(t,e.prev,e))||Es(t,e)&&Xe(t.prev,t,t.next)>0&&Xe(e.prev,e,e.next)>0)}function Xe(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Es(t,e){return t.x===e.x&&t.y===e.y}function Ml(t,e,n,i){let r=As(Xe(t,e,n)),s=As(Xe(t,e,i)),o=As(Xe(n,i,t)),a=As(Xe(n,i,e));return r!==s&&o!==a||(r===0&&Ts(t,n,e)||(s===0&&Ts(t,i,e)||o===0&&Ts(n,t,i)))?!0:!!(a===0&&Ts(n,e,i))}function Ts(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function As(t){return t>0?1:t<0?-1:0}function Ng(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Ml(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Er(t,e){return Xe(t.prev,t,t.next)<0?Xe(t,e,t.next)>=0&&Xe(t,t.prev,e)>=0:Xe(t,e,t.prev)<0||Xe(t,t.next,e)<0}function Fg(t,e){let n=t,i=!1,r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!==n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Sl(t,e){let n=new qo(t.i,t.x,t.y),i=new qo(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function wl(t,e,n,i){let r=new qo(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Sr(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function qo(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function bg(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}var Ln={area:function(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5},isClockWise:function(t){return Ln.area(t)<0},triangulateShape:function(t,e){let n=[],i=[],r=[];El(t),Tl(n,t);let s=t.length;e.forEach(El);for(let a=0;a<e.length;a++)i.push(s),s+=e[a].length,Tl(n,e[a]);let o=_g.triangulate(n,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function El(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Tl(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}var Xo=class extends Oe{constructor(e,n){super();this.type="ExtrudeBufferGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Ne(r,3)),this.setAttribute("uv",new Ne(s,2)),this.computeVertexNormals();function o(a){let c=[],l=n.curveSegments!==void 0?n.curveSegments:12,d=n.steps!==void 0?n.steps:1,u=n.depth!==void 0?n.depth:100,h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,f=n.bevelThickness!==void 0?n.bevelThickness:6,m=n.bevelSize!==void 0?n.bevelSize:f-2,y=n.bevelOffset!==void 0?n.bevelOffset:0,v=n.bevelSegments!==void 0?n.bevelSegments:3,g=n.extrudePath,p=n.UVGenerator!==void 0?n.UVGenerator:Og;n.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=n.amount);let M,T=!1,E,x,A,D;g&&(M=g.getSpacedPoints(d),T=!0,h=!1,E=g.computeFrenetFrames(d,!1),x=new _,A=new _,D=new _),h||(v=0,f=0,m=0,y=0);let V=a.extractPoints(l),X=V.shape,C=V.holes,O=!Ln.isClockWise(X);if(O){X=X.reverse();for(let Y=0,K=C.length;Y<K;Y++){let ee=C[Y];Ln.isClockWise(ee)&&(C[Y]=ee.reverse())}}let N=Ln.triangulateShape(X,C),B=X;for(let Y=0,K=C.length;Y<K;Y++){let ee=C[Y];X=X.concat(ee)}function P(Y,K,ee){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().multiplyScalar(ee).add(Y)}let I=X.length,G=N.length;function W(Y,K,ee){let fe,se,S,b=Y.x-K.x,Z=Y.y-K.y,j=ee.x-Y.x,R=ee.y-Y.y,J=b*b+Z*Z,ie=b*R-Z*j;if(Math.abs(ie)>Number.EPSILON){let he=Math.sqrt(J),Q=Math.sqrt(j*j+R*R),le=K.x-Z/he,de=K.y+b/he,L=ee.x-R/Q,q=ee.y+j/Q,oe=((L-le)*R-(q-de)*j)/(b*R-Z*j);fe=le+b*oe-Y.x,se=de+Z*oe-Y.y;let Me=fe*fe+se*se;if(Me<=2)return new U(fe,se);S=Math.sqrt(Me/2)}else{let he=!1;b>Number.EPSILON?j>Number.EPSILON&&(he=!0):b<-Number.EPSILON?j<-Number.EPSILON&&(he=!0):Math.sign(Z)===Math.sign(R)&&(he=!0),he?(fe=-Z,se=b,S=Math.sqrt(J)):(fe=b,se=Z,S=Math.sqrt(J/2))}return new U(fe/S,se/S)}let ne=[];for(let Y=0,K=B.length,ee=K-1,fe=Y+1;Y<K;Y++,ee++,fe++)ee===K&&(ee=0),fe===K&&(fe=0),ne[Y]=W(B[Y],B[ee],B[fe]);let ce=[],ae,ye=ne.concat();for(let Y=0,K=C.length;Y<K;Y++){let ee=C[Y];ae=[];for(let fe=0,se=ee.length,S=se-1,b=fe+1;fe<se;fe++,S++,b++)S===se&&(S=0),b===se&&(b=0),ae[fe]=W(ee[fe],ee[S],ee[b]);ce.push(ae),ye=ye.concat(ae)}for(let Y=0;Y<v;Y++){let K=Y/v,ee=f*Math.cos(K*Math.PI/2),fe=m*Math.sin(K*Math.PI/2)+y;for(let se=0,S=B.length;se<S;se++){let b=P(B[se],ne[se],fe);me(b.x,b.y,-ee)}for(let se=0,S=C.length;se<S;se++){let b=C[se];ae=ce[se];for(let Z=0,j=b.length;Z<j;Z++){let R=P(b[Z],ae[Z],fe);me(R.x,R.y,-ee)}}}let be=m+y;for(let Y=0;Y<I;Y++){let K=h?P(X[Y],ye[Y],be):X[Y];T?(A.copy(E.normals[0]).multiplyScalar(K.x),x.copy(E.binormals[0]).multiplyScalar(K.y),D.copy(M[0]).add(A).add(x),me(D.x,D.y,D.z)):me(K.x,K.y,0)}for(let Y=1;Y<=d;Y++)for(let K=0;K<I;K++){let ee=h?P(X[K],ye[K],be):X[K];T?(A.copy(E.normals[Y]).multiplyScalar(ee.x),x.copy(E.binormals[Y]).multiplyScalar(ee.y),D.copy(M[Y]).add(A).add(x),me(D.x,D.y,D.z)):me(ee.x,ee.y,u/d*Y)}for(let Y=v-1;Y>=0;Y--){let K=Y/v,ee=f*Math.cos(K*Math.PI/2),fe=m*Math.sin(K*Math.PI/2)+y;for(let se=0,S=B.length;se<S;se++){let b=P(B[se],ne[se],fe);me(b.x,b.y,u+ee)}for(let se=0,S=C.length;se<S;se++){let b=C[se];ae=ce[se];for(let Z=0,j=b.length;Z<j;Z++){let R=P(b[Z],ae[Z],fe);T?me(R.x,R.y+M[d-1].y,M[d-1].x+ee):me(R.x,R.y,u+ee)}}}We(),k();function We(){let Y=r.length/3;if(h){let K=0,ee=I*K;for(let fe=0;fe<G;fe++){let se=N[fe];Pe(se[2]+ee,se[1]+ee,se[0]+ee)}K=d+v*2,ee=I*K;for(let fe=0;fe<G;fe++){let se=N[fe];Pe(se[0]+ee,se[1]+ee,se[2]+ee)}}else{for(let K=0;K<G;K++){let ee=N[K];Pe(ee[2],ee[1],ee[0])}for(let K=0;K<G;K++){let ee=N[K];Pe(ee[0]+I*d,ee[1]+I*d,ee[2]+I*d)}}i.addGroup(Y,r.length/3-Y,0)}function k(){let Y=r.length/3,K=0;et(B,K),K+=B.length;for(let ee=0,fe=C.length;ee<fe;ee++){let se=C[ee];et(se,K),K+=se.length}i.addGroup(Y,r.length/3-Y,1)}function et(Y,K){let ee=Y.length;for(;--ee>=0;){let fe=ee,se=ee-1;se<0&&(se=Y.length-1);for(let S=0,b=d+v*2;S<b;S++){let Z=I*S,j=I*(S+1),R=K+fe+Z,J=K+se+Z,ie=K+se+j,he=K+fe+j;we(R,J,ie,he)}}}function me(Y,K,ee){c.push(Y),c.push(K),c.push(ee)}function Pe(Y,K,ee){Fe(Y),Fe(K),Fe(ee);let fe=r.length/3,se=p.generateTopUV(i,r,fe-3,fe-2,fe-1);Se(se[0]),Se(se[1]),Se(se[2])}function we(Y,K,ee,fe){Fe(Y),Fe(K),Fe(fe),Fe(K),Fe(ee),Fe(fe);let se=r.length/3,S=p.generateSideWallUV(i,r,se-6,se-3,se-2,se-1);Se(S[0]),Se(S[1]),Se(S[3]),Se(S[1]),Se(S[2]),Se(S[3])}function Fe(Y){r.push(c[Y*3+0]),r.push(c[Y*3+1]),r.push(c[Y*3+2])}function Se(Y){s.push(Y.x),s.push(Y.y)}}}toJSON(){let e=Oe.prototype.toJSON.call(this),n=this.parameters.shapes,i=this.parameters.options;return Bg(n,i,e)}},Og={generateTopUV:function(t,e,n,i,r){let s=e[n*3],o=e[n*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],d=e[r*3+1];return[new U(s,o),new U(a,c),new U(l,d)]},generateSideWallUV:function(t,e,n,i,r,s){let o=e[n*3],a=e[n*3+1],c=e[n*3+2],l=e[i*3],d=e[i*3+1],u=e[i*3+2],h=e[r*3],f=e[r*3+1],m=e[r*3+2],y=e[s*3],v=e[s*3+1],g=e[s*3+2];return Math.abs(a-d)<.01?[new U(o,1-c),new U(l,1-u),new U(h,1-m),new U(y,1-g)]:[new U(a,1-c),new U(d,1-u),new U(f,1-m),new U(v,1-g)]}};function Bg(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){let s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}var Al=class extends yt{constructor(e,n){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},this.fromBufferGeometry(new Xo(e,n)),this.mergeVertices()}toJSON(){let e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return zg(n,i,e)}};function zg(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){let s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}var Fi=class extends _l{constructor(e=1,n=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n);this.type="IcosahedronBufferGeometry",this.parameters={radius:e,detail:n}}},Yo=class extends yt{constructor(e,n){super();this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n},this.fromBufferGeometry(new Fi(e,n)),this.mergeVertices()}};function Ls(t,e,n){Oe.call(this),this.type="ParametricBufferGeometry",this.parameters={func:t,slices:e,stacks:n};let i=[],r=[],s=[],o=[],a=1e-5,c=new _,l=new _,d=new _,u=new _,h=new _;t.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");let f=e+1;for(let m=0;m<=n;m++){let y=m/n;for(let v=0;v<=e;v++){let g=v/e;t(g,y,l),r.push(l.x,l.y,l.z),g-a>=0?(t(g-a,y,d),u.subVectors(l,d)):(t(g+a,y,d),u.subVectors(d,l)),y-a>=0?(t(g,y-a,d),h.subVectors(l,d)):(t(g,y+a,d),h.subVectors(d,l)),c.crossVectors(u,h).normalize(),s.push(c.x,c.y,c.z),o.push(g,y)}}for(let m=0;m<n;m++)for(let y=0;y<e;y++){let v=m*f+y,g=m*f+y+1,p=(m+1)*f+y+1,M=(m+1)*f+y;i.push(v,g,M),i.push(g,p,M)}this.setIndex(i),this.setAttribute("position",new Ne(r,3)),this.setAttribute("normal",new Ne(s,3)),this.setAttribute("uv",new Ne(o,2))}Ls.prototype=Object.create(Oe.prototype);Ls.prototype.constructor=Ls;function Zo(t,e,n){yt.call(this),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:n},this.fromBufferGeometry(new Ls(t,e,n)),this.mergeVertices()}Zo.prototype=Object.create(yt.prototype);Zo.prototype.constructor=Zo;var Ll=class extends Oe{constructor(e,n=12){super();this.type="ShapeBufferGeometry",this.parameters={shapes:e,curveSegments:n};let i=[],r=[],s=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let d=0;d<e.length;d++)l(e[d]),this.addGroup(a,c,d),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Ne(r,3)),this.setAttribute("normal",new Ne(s,3)),this.setAttribute("uv",new Ne(o,2));function l(d){let u=r.length/3,h=d.extractPoints(n),f=h.shape,m=h.holes;Ln.isClockWise(f)===!1&&(f=f.reverse());for(let v=0,g=m.length;v<g;v++){let p=m[v];Ln.isClockWise(p)===!0&&(m[v]=p.reverse())}let y=Ln.triangulateShape(f,m);for(let v=0,g=m.length;v<g;v++){let p=m[v];f=f.concat(p)}for(let v=0,g=f.length;v<g;v++){let p=f[v];r.push(p.x,p.y,0),s.push(0,0,1),o.push(p.x,p.y)}for(let v=0,g=y.length;v<g;v++){let p=y[v],M=p[0]+u,T=p[1]+u,E=p[2]+u;i.push(M,T,E),c+=3}}}toJSON(){let e=Oe.prototype.toJSON.call(this),n=this.parameters.shapes;return Ug(n,e)}};function Ug(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){let r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}var Cl=class extends yt{constructor(e,n){super();this.type="ShapeGeometry",typeof n=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),n=n.curveSegments),this.parameters={shapes:e,curveSegments:n},this.fromBufferGeometry(new Ll(e,n)),this.mergeVertices()}toJSON(){let e=yt.prototype.toJSON.call(this),n=this.parameters.shapes;return Gg(n,e)}};function Gg(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){let r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}function Oi(t){ve.call(this),this.type="ShadowMaterial",this.color=new ue(0),this.transparent=!0,this.setValues(t)}Oi.prototype=Object.create(ve.prototype);Oi.prototype.constructor=Oi;Oi.prototype.isShadowMaterial=!0;Oi.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.color.copy(t.color),this};function Cn(t){vt.call(this,t),this.type="RawShaderMaterial"}Cn.prototype=Object.create(vt.prototype);Cn.prototype.constructor=Cn;Cn.prototype.isRawShaderMaterial=!0;function cn(t){ve.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=si,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(t)}cn.prototype=Object.create(ve.prototype);cn.prototype.constructor=cn;cn.prototype.isMeshStandardMaterial=!0;cn.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.vertexTangents=t.vertexTangents,this};function qn(t){cn.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new U(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=xe.clamp(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(t)}qn.prototype=Object.create(cn.prototype);qn.prototype.constructor=qn;qn.prototype.isMeshPhysicalMaterial=!0;qn.prototype.copy=function(t){return cn.prototype.copy.call(this,t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.reflectivity=t.reflectivity,t.sheen?this.sheen=(this.sheen||new ue).copy(t.sheen):this.sheen=null,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this};function Xn(t){ve.call(this),this.type="MeshPhongMaterial",this.color=new ue(16777215),this.specular=new ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=si,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Xn.prototype=Object.create(ve.prototype);Xn.prototype.constructor=Xn;Xn.prototype.isMeshPhongMaterial=!0;Xn.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Bi(t){ve.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ue(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=si,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Bi.prototype=Object.create(ve.prototype);Bi.prototype.constructor=Bi;Bi.prototype.isMeshToonMaterial=!0;Bi.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function zi(t){ve.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=si,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}zi.prototype=Object.create(ve.prototype);zi.prototype.constructor=zi;zi.prototype.isMeshNormalMaterial=!0;zi.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Ui(t){ve.call(this),this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Ui.prototype=Object.create(ve.prototype);Ui.prototype.constructor=Ui;Ui.prototype.isMeshLambertMaterial=!0;Ui.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Gi(t){ve.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ue(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=si,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Gi.prototype=Object.create(ve.prototype);Gi.prototype.constructor=Gi;Gi.prototype.isMeshMatcapMaterial=!0;Gi.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Hi(t){Lt.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}Hi.prototype=Object.create(Lt.prototype);Hi.prototype.constructor=Hi;Hi.prototype.isLineDashedMaterial=!0;Hi.prototype.copy=function(t){return Lt.prototype.copy.call(this,t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this};var Hg=Object.freeze({__proto__:null,ShadowMaterial:Oi,SpriteMaterial:Wn,RawShaderMaterial:Cn,ShaderMaterial:vt,PointsMaterial:jn,MeshPhysicalMaterial:qn,MeshStandardMaterial:cn,MeshPhongMaterial:Xn,MeshToonMaterial:Bi,MeshNormalMaterial:zi,MeshLambertMaterial:Ui,MeshDepthMaterial:Gn,MeshDistanceMaterial:Hn,MeshBasicMaterial:Bn,MeshMatcapMaterial:Gi,LineDashedMaterial:Hi,LineBasicMaterial:Lt,Material:ve}),qe={arraySlice:function(t,e,n){return qe.isTypedArray(t)?new t.constructor(t.subarray(e,n!==void 0?n:t.length)):t.slice(e,n)},convertArray:function(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},getKeyframeOrder:function(t){function e(r,s){return t[r]-t[s]}let n=t.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(e),i},sortedArray:function(t,e,n){let i=t.length,r=new t.constructor(i);for(let s=0,o=0;o!==i;++s){let a=n[s]*e;for(let c=0;c!==e;++c)r[o++]=t[a+c]}return r},flattenJSON:function(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let o=s[i];if(o===void 0)return;if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),n.push.apply(n,o)),s=t[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),n.push(o)),s=t[r++];while(s!==void 0)},subclip:function(t,e,n,i,r=30){let s=t.clone();s.name=e;let o=[];for(let c=0;c<s.tracks.length;++c){let l=s.tracks[c],d=l.getValueSize(),u=[],h=[];for(let f=0;f<l.times.length;++f){let m=l.times[f]*r;if(m<n||m>=i)continue;u.push(l.times[f]);for(let y=0;y<d;++y)h.push(l.values[f*d+y])}if(u.length===0)continue;l.times=qe.convertArray(u,l.times.constructor),l.values=qe.convertArray(h,l.values.constructor),o.push(l)}s.tracks=o;let a=Infinity;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(t,e=0,n=t,i=30){i<=0&&(i=30);let r=n.tracks.length,s=e/i;for(let o=0;o<r;++o){let a=n.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;let l=t.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let d=0,u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=u/3);let h=0,f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);let m=a.times.length-1,y;if(s<=a.times[0]){let g=d,p=u-d;y=qe.arraySlice(a.values,g,p)}else if(s>=a.times[m]){let g=m*u+d,p=g+u-d;y=qe.arraySlice(a.values,g,p)}else{let g=a.createInterpolant(),p=d,M=u-d;g.evaluate(s),y=qe.arraySlice(g.resultBuffer,p,M)}if(c==="quaternion"){let g=new ot().fromArray(y).normalize().conjugate();g.toArray(y)}let v=l.times.length;for(let g=0;g<v;++g){let p=g*f+h;if(c==="quaternion")ot.multiplyQuaternionsFlat(l.values,p,y,0,l.values,p);else{let M=f-h*2;for(let T=0;T<M;++T)l.values[p+T]-=y[T]}}}return t.blendMode=hc,t}};function Ct(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n}Object.assign(Ct.prototype,{evaluate:function(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];e:{t:{let s;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}s=e.length;break n}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===a)break;if(i=r,r=e[--n-1],t>=r)break t}s=n,n=0;break n}break e}for(;n<s;){let o=n+s>>>1;t<e[o]?s=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(Ct.prototype,{beforeStart_:Ct.prototype.copySampleValue_,afterEnd_:Ct.prototype.copySampleValue_});function Jo(t,e,n,i){Ct.call(this,t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}Jo.prototype=Object.assign(Object.create(Ct.prototype),{constructor:Jo,DefaultSettings_:{endingStart:ni,endingEnd:ni},intervalChanged_:function(t,e,n){let i=this.parameterPositions,r=t-2,s=t+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case ii:r=t,o=2*e-n;break;case Vr:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case ii:s=t,a=2*n-e;break;case Vr:s=1,a=n+i[1]-i[0];break;default:s=t-1,a=e}let c=(n-e)*.5,l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(a-n),this._offsetPrev=r*l,this._offsetNext=s*l},interpolate_:function(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,h=this._weightNext,f=(n-e)/(i-e),m=f*f,y=m*f,v=-u*y+2*u*m-u*f,g=(1+u)*y+(-1.5-2*u)*m+(-.5+u)*f+1,p=(-1-h)*y+(1.5+h)*m+.5*f,M=h*y-h*m;for(let T=0;T!==o;++T)r[T]=v*s[l+T]+g*s[c+T]+p*s[a+T]+M*s[d+T];return r}});function Cs(t,e,n,i){Ct.call(this,t,e,n,i)}Cs.prototype=Object.assign(Object.create(Ct.prototype),{constructor:Cs,interpolate_:function(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=(n-e)/(i-e),d=1-l;for(let u=0;u!==o;++u)r[u]=s[c+u]*d+s[a+u]*l;return r}});function $o(t,e,n,i){Ct.call(this,t,e,n,i)}$o.prototype=Object.assign(Object.create(Ct.prototype),{constructor:$o,interpolate_:function(t){return this.copySampleValue_(t-1)}});function ut(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qe.convertArray(e,this.TimeBufferType),this.values=qe.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}Object.assign(ut,{toJSON:function(t){let e=t.constructor,n;if(e.toJSON!==void 0)n=e.toJSON(t);else{n={name:t.name,times:qe.convertArray(t.times,Array),values:qe.convertArray(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}});Object.assign(ut.prototype,{constructor:ut,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:kr,InterpolantFactoryMethodDiscrete:function(t){return new $o(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodLinear:function(t){return new Cs(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:function(t){return new Jo(this.times,this.values,this.getValueSize(),t)},setInterpolation:function(t){let e;switch(t){case Hr:e=this.InterpolantFactoryMethodDiscrete;break;case kr:e=this.InterpolantFactoryMethodLinear;break;case to:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hr;case this.InterpolantFactoryMethodLinear:return kr;case this.InterpolantFactoryMethodSmooth:return to}},getValueSize:function(){return this.values.length/this.times.length},shift:function(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this},scale:function(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this},trim:function(t,e){let n=this.times,i=n.length,r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);let o=this.getValueSize();this.times=qe.arraySlice(n,r,s),this.values=qe.arraySlice(this.values,r*o,s*o)}return this},validate:function(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let o=0;o!==r;o++){let a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),t=!1;break}if(s!==null&&s>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,s),t=!1;break}s=a}if(i!==void 0&&qe.isTypedArray(i))for(let o=0,a=i.length;o!==a;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t},optimize:function(){let t=qe.arraySlice(this.times),e=qe.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===to,r=t.length-1,s=1;for(let o=1;o<r;++o){let a=!1,c=t[o],l=t[o+1];if(c!==l&&(o!==1||c!==c[0]))if(i)a=!0;else{let d=o*n,u=d-n,h=d+n;for(let f=0;f!==n;++f){let m=e[d+f];if(m!==e[u+f]||m!==e[h+f]){a=!0;break}}}if(a){if(o!==s){t[s]=t[o];let d=o*n,u=s*n;for(let h=0;h!==n;++h)e[u+h]=e[d+h]}++s}}if(r>0){t[s]=t[r];for(let o=r*n,a=s*n,c=0;c!==n;++c)e[a+c]=e[o+c];++s}return s!==t.length?(this.times=qe.arraySlice(t,0,s),this.values=qe.arraySlice(e,0,s*n)):(this.times=t,this.values=e),this},clone:function(){let t=qe.arraySlice(this.times,0),e=qe.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}});function Ko(t,e,n){ut.call(this,t,e,n)}Ko.prototype=Object.assign(Object.create(ut.prototype),{constructor:Ko,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:Hr,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Qo(t,e,n,i){ut.call(this,t,e,n,i)}Qo.prototype=Object.assign(Object.create(ut.prototype),{constructor:Qo,ValueTypeName:"color"});function Tr(t,e,n,i){ut.call(this,t,e,n,i)}Tr.prototype=Object.assign(Object.create(ut.prototype),{constructor:Tr,ValueTypeName:"number"});function ea(t,e,n,i){Ct.call(this,t,e,n,i)}ea.prototype=Object.assign(Object.create(Ct.prototype),{constructor:ea,interpolate_:function(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(n-e)/(i-e),c=t*o;for(let l=c+o;c!==l;c+=4)ot.slerpFlat(r,0,s,c-o,s,c,a);return r}});function Rs(t,e,n,i){ut.call(this,t,e,n,i)}Rs.prototype=Object.assign(Object.create(ut.prototype),{constructor:Rs,ValueTypeName:"quaternion",DefaultInterpolation:kr,InterpolantFactoryMethodLinear:function(t){return new ea(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:void 0});function ta(t,e,n,i){ut.call(this,t,e,n,i)}ta.prototype=Object.assign(Object.create(ut.prototype),{constructor:ta,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:Hr,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Ar(t,e,n,i){ut.call(this,t,e,n,i)}Ar.prototype=Object.assign(Object.create(ut.prototype),{constructor:Ar,ValueTypeName:"vector"});function Bt(t,e,n,i){this.name=t,this.tracks=n,this.duration=e!==void 0?e:-1,this.blendMode=i!==void 0?i:no,this.uuid=xe.generateUUID(),this.duration<0&&this.resetDuration()}function kg(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Tr;case"vector":case"vector2":case"vector3":case"vector4":return Ar;case"color":return Qo;case"quaternion":return Rs;case"bool":case"boolean":return Ko;case"string":return ta}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function Vg(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=kg(t.type);if(t.times===void 0){let n=[],i=[];qe.flattenJSON(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}Object.assign(Bt,{parse:function(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let s=0,o=n.length;s!==o;++s)e.push(Vg(n[s]).scale(i));let r=new Bt(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r},toJSON:function(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,s=n.length;r!==s;++r)e.push(ut.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(t,e,n,i){let r=e.length,s=[];for(let o=0;o<r;o++){let a=[],c=[];a.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let l=qe.getKeyframeOrder(a);a=qe.sortedArray(a,1,l),c=qe.sortedArray(c,1,l),!i&&a[0]===0&&(a.push(r),c.push(c[0])),s.push(new Tr(".morphTargetInfluences["+e[o].name+"]",a,c).scale(1/n))}return new Bt(t,-1,s)},findByName:function(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null},CreateClipsFromMorphTargetSequences:function(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=t.length;o<a;o++){let c=t[o],l=c.name.match(r);if(l&&l.length>1){let d=l[1],u=i[d];u||(i[d]=u=[]),u.push(c)}}let s=[];for(let o in i)s.push(Bt.CreateFromMorphTargetSequence(o,i[o],e,n));return s},parseAnimation:function(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(d,u,h,f,m){if(h.length!==0){let y=[],v=[];qe.flattenJSON(h,y,v,f),y.length!==0&&m.push(new d(u,y,v))}},i=[],r=t.name||"default",s=t.fps||30,o=t.blendMode,a=t.length||-1,c=t.hierarchy||[];for(let d=0;d<c.length;d++){let u=c[d].keys;if(!u||u.length===0)continue;if(u[0].morphTargets){let h={},f;for(f=0;f<u.length;f++)if(u[f].morphTargets)for(let m=0;m<u[f].morphTargets.length;m++)h[u[f].morphTargets[m]]=-1;for(let m in h){let y=[],v=[];for(let g=0;g!==u[f].morphTargets.length;++g){let p=u[f];y.push(p.time),v.push(p.morphTarget===m?1:0)}i.push(new Tr(".morphTargetInfluence["+m+"]",y,v))}a=h.length*(s||1)}else{let h=".bones["+e[d].name+"]";n(Ar,h+".position",u,"pos",i),n(Rs,h+".quaternion",u,"rot",i),n(Ar,h+".scale",u,"scl",i)}}if(i.length===0)return null;let l=new Bt(r,a,i,o);return l}});Object.assign(Bt.prototype,{resetDuration:function(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this},trim:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this},validate:function(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t},optimize:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this},clone:function(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new Bt(this.name,this.duration,t,this.blendMode)},toJSON:function(){return Bt.toJSON(this)}});var ki={enabled:!1,files:{},add:function(t,e){if(this.enabled===!1)return;this.files[t]=e},get:function(t){return this.enabled===!1?void 0:this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Wg(t,e,n){let i=this,r=!1,s=0,o=0,a,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){o++,r===!1&&(i.onStart!==void 0&&i.onStart(l,s,o)),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,d){return c.push(l,d),this},this.removeHandler=function(l){let d=c.indexOf(l);return d!==-1&&c.splice(d,2),this},this.getHandler=function(l){for(let d=0,u=c.length;d<u;d+=2){let h=c[d],f=c[d+1];if(h.global&&(h.lastIndex=0),h.test(l))return f}return null}}var jg=new Wg;function Ue(t){this.manager=t!==void 0?t:jg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Ue.prototype,{load:function(){},loadAsync:function(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})},parse:function(){},setCrossOrigin:function(t){return this.crossOrigin=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}});var zt={};function ln(t){Ue.call(this,t)}ln.prototype=Object.assign(Object.create(Ue.prototype),{constructor:ln,load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=ki.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;if(zt[t]!==void 0){zt[t].push({onLoad:e,onProgress:n,onError:i});return}let o=/^data:(.*?)(;base64)?,(.*)$/,a=t.match(o),c;if(a){let l=a[1],d=!!a[2],u=a[3];u=decodeURIComponent(u),d&&(u=atob(u));try{let h,f=(this.responseType||"").toLowerCase();switch(f){case"arraybuffer":case"blob":let m=new Uint8Array(u.length);for(let v=0;v<u.length;v++)m[v]=u.charCodeAt(v);f==="blob"?h=new Blob([m.buffer],{type:l}):h=m.buffer;break;case"document":let y=new DOMParser;h=y.parseFromString(u,l);break;case"json":h=JSON.parse(u);break;default:h=u;break}setTimeout(function(){e&&e(h),r.manager.itemEnd(t)},0)}catch(h){setTimeout(function(){i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)},0)}}else{zt[t]=[],zt[t].push({onLoad:e,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",t,!0),c.addEventListener("load",function(l){let d=this.response,u=zt[t];if(delete zt[t],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),ki.add(t,d);for(let h=0,f=u.length;h<f;h++){let m=u[h];m.onLoad&&m.onLoad(d)}r.manager.itemEnd(t)}else{for(let h=0,f=u.length;h<f;h++){let m=u[h];m.onError&&m.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)}},!1),c.addEventListener("progress",function(l){let d=zt[t];for(let u=0,h=d.length;u<h;u++){let f=d[u];f.onProgress&&f.onProgress(l)}},!1),c.addEventListener("error",function(l){let d=zt[t];delete zt[t];for(let u=0,h=d.length;u<h;u++){let f=d[u];f.onError&&f.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),c.addEventListener("abort",function(l){let d=zt[t];delete zt[t];for(let u=0,h=d.length;u<h;u++){let f=d[u];f.onError&&f.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(let l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(t),c},setResponseType:function(t){return this.responseType=t,this},setMimeType:function(t){return this.mimeType=t,this}});function Rl(t){Ue.call(this,t)}Rl.prototype=Object.assign(Object.create(Ue.prototype),{constructor:Rl,load:function(t,e,n,i){let r=this,s=new ln(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){let e=[];for(let n=0;n<t.length;n++){let i=Bt.parse(t[n]);e.push(i)}return e}});function Pl(t){Ue.call(this,t)}Pl.prototype=Object.assign(Object.create(Ue.prototype),{constructor:Pl,load:function(t,e,n,i){let r=this,s=[],o=new wr,a=new ln(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let c=0;function l(d){a.load(t[d],function(u){let h=r.parse(u,!0);s[d]={width:h.width,height:h.height,format:h.format,mipmaps:h.mipmaps},c+=1,c===6&&(h.mipmapCount===1&&(o.minFilter=lt),o.image=s,o.format=h.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let d=0,u=t.length;d<u;++d)l(d);else a.load(t,function(d){let u=r.parse(d,!0);if(u.isCubemap){let h=u.mipmaps.length/u.mipmapCount;for(let f=0;f<h;f++){s[f]={mipmaps:[]};for(let m=0;m<u.mipmapCount;m++)s[f].mipmaps.push(u.mipmaps[f*u.mipmapCount+m]),s[f].format=u.format,s[f].width=u.width,s[f].height=u.height}o.image=s}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=lt),o.format=u.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}});function Ps(t){Ue.call(this,t)}Ps.prototype=Object.assign(Object.create(Ue.prototype),{constructor:Ps,load:function(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=ki.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;let o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),ki.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(l){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),i&&i(l),r.manager.itemError(t),r.manager.itemEnd(t)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),t.substr(0,5)!=="data:"&&(this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin)),r.manager.itemStart(t),o.src=t,o}});function na(t){Ue.call(this,t)}na.prototype=Object.assign(Object.create(Ue.prototype),{constructor:na,load:function(t,e,n,i){let r=new Sn,s=new Ps(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function a(c){s.load(t[c],function(l){r.images[c]=l,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)a(c);return r}});function Dl(t){Ue.call(this,t)}Dl.prototype=Object.assign(Object.create(Ue.prototype),{constructor:Dl,load:function(t,e,n,i){let r=this,s=new Ei,o=new ln(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(a){let c=r.parse(a);if(!c)return;c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:_t,s.wrapT=c.wrapT!==void 0?c.wrapT:_t,s.magFilter=c.magFilter!==void 0?c.magFilter:lt,s.minFilter=c.minFilter!==void 0?c.minFilter:lt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=Br),c.mipmapCount===1&&(s.minFilter=lt),s.needsUpdate=!0,e&&e(s,c)},n,i),s}});function Lr(t){Ue.call(this,t)}Lr.prototype=Object.assign(Object.create(Ue.prototype),{constructor:Lr,load:function(t,e,n,i){let r=new ke,s=new Ps(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o;let a=t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0;r.format=a?Nn:Dt,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}});function pe(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(pe.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)},getPoints:function(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e},getSpacedPoints:function(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e},getLength:function(){let t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(t===void 0&&(t=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(t,e){let n=this.getLengths(),i=0,r=n.length,s;e?s=e:s=t*n[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===s)return i/(r-1);let l=n[i],d=n[i+1],u=d-l,h=(s-l)/u,f=(i+h)/(r-1);return f},getTangent:function(t,e){let n=1e-4,i=t-n,r=t+n;i<0&&(i=0),r>1&&(r=1);let s=this.getPoint(i),o=this.getPoint(r),a=e||(s.isVector2?new U:new _);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)},computeFrenetFrames:function(t,e){let n=new _,i=[],r=[],s=[],o=new _,a=new Te;for(let h=0;h<=t;h++){let f=h/t;i[h]=this.getTangentAt(f,new _),i[h].normalize()}r[0]=new _,s[0]=new _;let c=Number.MAX_VALUE,l=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);l<=c&&(c=l,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),s[h]=s[h-1].clone(),o.crossVectors(i[h-1],i[h]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(xe.clamp(i[h-1].dot(i[h]),-1,1));r[h].applyMatrix4(a.makeRotationAxis(o,f))}s[h].crossVectors(i[h],r[h])}if(e===!0){let h=Math.acos(xe.clamp(r[0].dot(r[t]),-1,1));h/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(h=-h);for(let f=1;f<=t;f++)r[f].applyMatrix4(a.makeRotationAxis(i[f],h*f)),s[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this},toJSON:function(){let t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t},fromJSON:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}});function Rt(t,e,n,i,r,s,o,a){pe.call(this),this.type="EllipseCurve",this.aX=t||0,this.aY=e||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=s||2*Math.PI,this.aClockwise=o||!1,this.aRotation=a||0}Rt.prototype=Object.create(pe.prototype);Rt.prototype.constructor=Rt;Rt.prototype.isEllipseCurve=!0;Rt.prototype.getPoint=function(t,e){let n=e||new U,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,a=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let l=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=a-this.aX,h=c-this.aY;a=u*l-h*d+this.aX,c=u*d+h*l+this.aY}return n.set(a,c)};Rt.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};Rt.prototype.toJSON=function(){let t=pe.prototype.toJSON.call(this);return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t};Rt.prototype.fromJSON=function(t){return pe.prototype.fromJSON.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};function Cr(t,e,n,i,r,s){Rt.call(this,t,e,n,n,i,r,s),this.type="ArcCurve"}Cr.prototype=Object.create(Rt.prototype);Cr.prototype.constructor=Cr;Cr.prototype.isArcCurve=!0;function ia(){let t=0,e=0,n=0,i=0;function r(s,o,a,c){t=s,e=a,n=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,d,u){let h=(o-s)/l-(a-s)/(l+d)+(a-o)/d,f=(a-o)/d-(c-o)/(d+u)+(c-a)/u;h*=d,f*=d,r(o,a,h,f)},calc:function(s){let o=s*s,a=o*s;return t+e*s+n*o+i*a}}}var Ds=new _,ra=new ia,sa=new ia,oa=new ia;function pt(t=[],e=!1,n="centripetal",i=.5){pe.call(this),this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}pt.prototype=Object.create(pe.prototype);pt.prototype.constructor=pt;pt.prototype.isCatmullRomCurve3=!0;pt.prototype.getPoint=function(t,e=new _){let n=e,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t,o=Math.floor(s),a=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:a===0&&o===r-1&&(o=r-2,a=1);let c,l;this.closed||o>0?c=i[(o-1)%r]:(Ds.subVectors(i[0],i[1]).add(i[0]),c=Ds);let d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?l=i[(o+2)%r]:(Ds.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=Ds),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(d),h),m=Math.pow(d.distanceToSquared(u),h),y=Math.pow(u.distanceToSquared(l),h);m<1e-4&&(m=1),f<1e-4&&(f=m),y<1e-4&&(y=m),ra.initNonuniformCatmullRom(c.x,d.x,u.x,l.x,f,m,y),sa.initNonuniformCatmullRom(c.y,d.y,u.y,l.y,f,m,y),oa.initNonuniformCatmullRom(c.z,d.z,u.z,l.z,f,m,y)}else this.curveType==="catmullrom"&&(ra.initCatmullRom(c.x,d.x,u.x,l.x,this.tension),sa.initCatmullRom(c.y,d.y,u.y,l.y,this.tension),oa.initCatmullRom(c.z,d.z,u.z,l.z,this.tension));return n.set(ra.calc(a),sa.calc(a),oa.calc(a)),n};pt.prototype.copy=function(t){pe.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};pt.prototype.toJSON=function(){let t=pe.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t};pt.prototype.fromJSON=function(t){pe.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new _().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};function Il(t,e,n,i,r){let s=(i-e)*.5,o=(r-n)*.5,a=t*t,c=t*a;return(2*n-2*i+s+o)*c+(-3*n+3*i-2*s-o)*a+s*t+n}function qg(t,e){let n=1-t;return n*n*e}function Xg(t,e){return 2*(1-t)*t*e}function Yg(t,e){return t*t*e}function Rr(t,e,n,i){return qg(t,e)+Xg(t,n)+Yg(t,i)}function Zg(t,e){let n=1-t;return n*n*n*e}function Jg(t,e){let n=1-t;return 3*n*n*t*e}function $g(t,e){return 3*(1-t)*t*t*e}function Kg(t,e){return t*t*t*e}function Pr(t,e,n,i,r){return Zg(t,e)+Jg(t,n)+$g(t,i)+Kg(t,r)}function Vt(t=new U,e=new U,n=new U,i=new U){pe.call(this),this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}Vt.prototype=Object.create(pe.prototype);Vt.prototype.constructor=Vt;Vt.prototype.isCubicBezierCurve=!0;Vt.prototype.getPoint=function(t,e=new U){let n=e,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Pr(t,i.x,r.x,s.x,o.x),Pr(t,i.y,r.y,s.y,o.y)),n};Vt.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this};Vt.prototype.toJSON=function(){let t=pe.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t};Vt.prototype.fromJSON=function(t){return pe.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function hn(t=new _,e=new _,n=new _,i=new _){pe.call(this),this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}hn.prototype=Object.create(pe.prototype);hn.prototype.constructor=hn;hn.prototype.isCubicBezierCurve3=!0;hn.prototype.getPoint=function(t,e=new _){let n=e,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Pr(t,i.x,r.x,s.x,o.x),Pr(t,i.y,r.y,s.y,o.y),Pr(t,i.z,r.z,s.z,o.z)),n};hn.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this};hn.prototype.toJSON=function(){let t=pe.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t};hn.prototype.fromJSON=function(t){return pe.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function St(t=new U,e=new U){pe.call(this),this.type="LineCurve",this.v1=t,this.v2=e}St.prototype=Object.create(pe.prototype);St.prototype.constructor=St;St.prototype.isLineCurve=!0;St.prototype.getPoint=function(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n};St.prototype.getPointAt=function(t,e){return this.getPoint(t,e)};St.prototype.getTangent=function(t,e){let n=e||new U;return n.copy(this.v2).sub(this.v1).normalize(),n};St.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this};St.prototype.toJSON=function(){let t=pe.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};St.prototype.fromJSON=function(t){return pe.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Wt(t=new _,e=new _){pe.call(this),this.type="LineCurve3",this.v1=t,this.v2=e}Wt.prototype=Object.create(pe.prototype);Wt.prototype.constructor=Wt;Wt.prototype.isLineCurve3=!0;Wt.prototype.getPoint=function(t,e=new _){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n};Wt.prototype.getPointAt=function(t,e){return this.getPoint(t,e)};Wt.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this};Wt.prototype.toJSON=function(){let t=pe.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};Wt.prototype.fromJSON=function(t){return pe.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function jt(t=new U,e=new U,n=new U){pe.call(this),this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}jt.prototype=Object.create(pe.prototype);jt.prototype.constructor=jt;jt.prototype.isQuadraticBezierCurve=!0;jt.prototype.getPoint=function(t,e=new U){let n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(Rr(t,i.x,r.x,s.x),Rr(t,i.y,r.y,s.y)),n};jt.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this};jt.prototype.toJSON=function(){let t=pe.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};jt.prototype.fromJSON=function(t){return pe.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function un(t=new _,e=new _,n=new _){pe.call(this),this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}un.prototype=Object.create(pe.prototype);un.prototype.constructor=un;un.prototype.isQuadraticBezierCurve3=!0;un.prototype.getPoint=function(t,e=new _){let n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(Rr(t,i.x,r.x,s.x),Rr(t,i.y,r.y,s.y),Rr(t,i.z,r.z,s.z)),n};un.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this};un.prototype.toJSON=function(){let t=pe.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};un.prototype.fromJSON=function(t){return pe.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function qt(t=[]){pe.call(this),this.type="SplineCurve",this.points=t}qt.prototype=Object.create(pe.prototype);qt.prototype.constructor=qt;qt.prototype.isSplineCurve=!0;qt.prototype.getPoint=function(t,e=new U){let n=e,i=this.points,r=(i.length-1)*t,s=Math.floor(r),o=r-s,a=i[s===0?s:s-1],c=i[s],l=i[s>i.length-2?i.length-1:s+1],d=i[s>i.length-3?i.length-1:s+2];return n.set(Il(o,a.x,c.x,l.x,d.x),Il(o,a.y,c.y,l.y,d.y)),n};qt.prototype.copy=function(t){pe.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this};qt.prototype.toJSON=function(){let t=pe.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t};qt.prototype.fromJSON=function(t){pe.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new U().fromArray(i))}return this};var Qg=Object.freeze({__proto__:null,ArcCurve:Cr,CatmullRomCurve3:pt,CubicBezierCurve:Vt,CubicBezierCurve3:hn,EllipseCurve:Rt,LineCurve:St,LineCurve3:Wt,QuadraticBezierCurve:jt,QuadraticBezierCurve3:un,SplineCurve:qt});function Rn(){pe.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}Rn.prototype=Object.assign(Object.create(pe.prototype),{constructor:Rn,add:function(t){this.curves.push(t)},closePath:function(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new St(e,t))},getPoint:function(t){let e=t*this.getLength(),n=this.getCurveLengths(),i=0;for(;i<n.length;){if(n[i]>=e){let r=n[i]-e,s=this.curves[i],o=s.getLength(),a=o===0?0:1-r/o;return s.getPointAt(a)}i++}return null},getLength:function(){let t=this.getCurveLengths();return t[t.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t},getSpacedPoints:function(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e},getPoints:function(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let s=r[i],o=s&&s.isEllipseCurve?t*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?t*s.points.length:t,a=s.getPoints(o);for(let c=0;c<a.length;c++){let l=a[c];if(n&&n.equals(l))continue;e.push(l),n=l}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e},copy:function(t){pe.prototype.copy.call(this,t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this},toJSON:function(){let t=pe.prototype.toJSON.call(this);t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t},fromJSON:function(t){pe.prototype.fromJSON.call(this,t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Qg[i.type]().fromJSON(i))}return this}});function Xt(t){Rn.call(this),this.type="Path",this.currentPoint=new U,t&&this.setFromPoints(t)}Xt.prototype=Object.assign(Object.create(Rn.prototype),{constructor:Xt,setFromPoints:function(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this},moveTo:function(t,e){return this.currentPoint.set(t,e),this},lineTo:function(t,e){let n=new St(this.currentPoint.clone(),new U(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this},quadraticCurveTo:function(t,e,n,i){let r=new jt(this.currentPoint.clone(),new U(t,e),new U(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(t,e,n,i,r,s){let o=new Vt(this.currentPoint.clone(),new U(t,e),new U(n,i),new U(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this},splineThru:function(t){let e=[this.currentPoint.clone()].concat(t),n=new qt(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this},arc:function(t,e,n,i,r,s){let o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(t+o,e+a,n,i,r,s),this},absarc:function(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this},ellipse:function(t,e,n,i,r,s,o,a){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+c,e+l,n,i,r,s,o,a),this},absellipse:function(t,e,n,i,r,s,o,a){let c=new Rt(t,e,n,i,r,s,o,a);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this},copy:function(t){return Rn.prototype.copy.call(this,t),this.currentPoint.copy(t.currentPoint),this},toJSON:function(){let t=Rn.prototype.toJSON.call(this);return t.currentPoint=this.currentPoint.toArray(),t},fromJSON:function(t){return Rn.prototype.fromJSON.call(this,t),this.currentPoint.fromArray(t.currentPoint),this}});function Vi(t){Xt.call(this,t),this.uuid=xe.generateUUID(),this.type="Shape",this.holes=[]}Vi.prototype=Object.assign(Object.create(Xt.prototype),{constructor:Vi,getPointsHoles:function(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e},extractPoints:function(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}},copy:function(t){Xt.prototype.copy.call(this,t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this},toJSON:function(){let t=Xt.prototype.toJSON.call(this);t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t},fromJSON:function(t){Xt.prototype.fromJSON.call(this,t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Xt().fromJSON(i))}return this}});function je(t,e=1){ge.call(this),this.type="Light",this.color=new ue(t),this.intensity=e}je.prototype=Object.assign(Object.create(ge.prototype),{constructor:je,isLight:!0,copy:function(t){return ge.prototype.copy.call(this,t),this.color.copy(t.color),this.intensity=t.intensity,this},toJSON:function(t){let e=ge.prototype.toJSON.call(this,t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}});function Nl(t,e,n){je.call(this,t,n),this.type="HemisphereLight",this.position.copy(ge.DefaultUp),this.updateMatrix(),this.groundColor=new ue(e)}Nl.prototype=Object.assign(Object.create(je.prototype),{constructor:Nl,isHemisphereLight:!0,copy:function(t){return je.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}});function fn(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new U(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new U(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}Object.assign(fn.prototype,{_projScreenMatrix:new Te,_lightPositionWorld:new _,_lookTarget:new _,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(t){let e=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,s=this._lightPositionWorld;s.setFromMatrixPosition(t.matrixWorld),e.position.copy(s),r.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(r),e.updateMatrixWorld(),i.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)},getViewport:function(t){return this._viewports[t]},getFrameExtents:function(){return this._frameExtents},copy:function(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}});function aa(){fn.call(this,new nt(50,1,.5,500)),this.focus=1}aa.prototype=Object.assign(Object.create(fn.prototype),{constructor:aa,isSpotLightShadow:!0,updateMatrices:function(t){let e=this.camera,n=xe.RAD2DEG*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),fn.prototype.updateMatrices.call(this,t)}});function Fl(t,e,n,i,r,s){je.call(this,t,e),this.type="SpotLight",this.position.copy(ge.DefaultUp),this.updateMatrix(),this.target=new ge,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=s!==void 0?s:1,this.shadow=new aa}Fl.prototype=Object.assign(Object.create(je.prototype),{constructor:Fl,isSpotLight:!0,copy:function(t){return je.prototype.copy.call(this,t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function ca(){fn.call(this,new nt(90,1,.5,500)),this._frameExtents=new U(4,2),this._viewportCount=6,this._viewports=[new ze(2,1,1,1),new ze(0,1,1,1),new ze(3,1,1,1),new ze(1,1,1,1),new ze(3,0,1,1),new ze(1,0,1,1)],this._cubeDirections=[new _(1,0,0),new _(-1,0,0),new _(0,0,1),new _(0,0,-1),new _(0,1,0),new _(0,-1,0)],this._cubeUps=[new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,0,1),new _(0,0,-1)]}ca.prototype=Object.assign(Object.create(fn.prototype),{constructor:ca,isPointLightShadow:!0,updateMatrices:function(t,e=0){let n=this.camera,i=this.matrix,r=this._lightPositionWorld,s=this._lookTarget,o=this._projScreenMatrix;r.setFromMatrixPosition(t.matrixWorld),n.position.copy(r),s.copy(n.position),s.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(s),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}});function Ol(t,e,n,i){je.call(this,t,e),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new ca}Ol.prototype=Object.assign(Object.create(je.prototype),{constructor:Ol,isPointLight:!0,copy:function(t){return je.prototype.copy.call(this,t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}});function la(t,e,n,i,r,s){Mn.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t!==void 0?t:-1,this.right=e!==void 0?e:1,this.top=n!==void 0?n:1,this.bottom=i!==void 0?i:-1,this.near=r!==void 0?r:.1,this.far=s!==void 0?s:2e3,this.updateProjectionMatrix()}la.prototype=Object.assign(Object.create(Mn.prototype),{constructor:la,isOrthographicCamera:!0,copy:function(t,e){return Mn.prototype.copy.call(this,t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this},setViewOffset:function(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,s=n+t,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=l*this.view.offsetY,a=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(t){let e=ge.prototype.toJSON.call(this,t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}});function ha(){fn.call(this,new la(-5,5,5,-5,.5,500))}ha.prototype=Object.assign(Object.create(fn.prototype),{constructor:ha,isDirectionalLightShadow:!0,updateMatrices:function(t){fn.prototype.updateMatrices.call(this,t)}});function Bl(t,e){je.call(this,t,e),this.type="DirectionalLight",this.position.copy(ge.DefaultUp),this.updateMatrix(),this.target=new ge,this.shadow=new ha}Bl.prototype=Object.assign(Object.create(je.prototype),{constructor:Bl,isDirectionalLight:!0,copy:function(t){return je.prototype.copy.call(this,t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function zl(t,e){je.call(this,t,e),this.type="AmbientLight"}zl.prototype=Object.assign(Object.create(je.prototype),{constructor:zl,isAmbientLight:!0});function Ul(t,e,n,i){je.call(this,t,e),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}Ul.prototype=Object.assign(Object.create(je.prototype),{constructor:Ul,isRectAreaLight:!0,copy:function(t){return je.prototype.copy.call(this,t),this.width=t.width,this.height=t.height,this},toJSON:function(t){let e=je.prototype.toJSON.call(this,t);return e.object.width=this.width,e.object.height=this.height,e}});var Gl=class{constructor(){Object.defineProperty(this,"isSphericalHarmonics3",{value:!0}),this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new _)}set(e){for(let n=0;n<9;n++)this.coefficients[n].copy(e[n]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,n){let i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.282095),n.addScaledVector(o[1],.488603*r),n.addScaledVector(o[2],.488603*s),n.addScaledVector(o[3],.488603*i),n.addScaledVector(o[4],1.092548*(i*r)),n.addScaledVector(o[5],1.092548*(r*s)),n.addScaledVector(o[6],.315392*(3*s*s-1)),n.addScaledVector(o[7],1.092548*(i*s)),n.addScaledVector(o[8],.546274*(i*i-r*r)),n}getIrradianceAt(e,n){let i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.886227),n.addScaledVector(o[1],2*.511664*r),n.addScaledVector(o[2],2*.511664*s),n.addScaledVector(o[3],2*.511664*i),n.addScaledVector(o[4],2*.429043*i*r),n.addScaledVector(o[5],2*.429043*r*s),n.addScaledVector(o[6],.743125*s*s-.247708),n.addScaledVector(o[7],2*.429043*i*s),n.addScaledVector(o[8],.429043*(i*i-r*r)),n}add(e){for(let n=0;n<9;n++)this.coefficients[n].add(e.coefficients[n]);return this}addScaledSH(e,n){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],n);return this}scale(e){for(let n=0;n<9;n++)this.coefficients[n].multiplyScalar(e);return this}lerp(e,n){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],n);return this}equals(e){for(let n=0;n<9;n++)if(!this.coefficients[n].equals(e.coefficients[n]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,n=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,n+r*3);return this}toArray(e=[],n=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,n+r*3);return e}static getBasisAt(e,n){let i=e.x,r=e.y,s=e.z;n[0]=.282095,n[1]=.488603*r,n[2]=.488603*s,n[3]=.488603*i,n[4]=1.092548*i*r,n[5]=1.092548*r*s,n[6]=.315392*(3*s*s-1),n[7]=1.092548*i*s,n[8]=.546274*(i*i-r*r)}};function Yt(t,e){je.call(this,void 0,e),this.type="LightProbe",this.sh=t!==void 0?t:new Gl}Yt.prototype=Object.assign(Object.create(je.prototype),{constructor:Yt,isLightProbe:!0,copy:function(t){return je.prototype.copy.call(this,t),this.sh.copy(t.sh),this},fromJSON:function(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this},toJSON:function(t){let e=je.prototype.toJSON.call(this,t);return e.object.sh=this.sh.toArray(),e}});function Hl(t){Ue.call(this,t),this.textures={}}Hl.prototype=Object.assign(Object.create(Ue.prototype),{constructor:Hl,load:function(t,e,n,i){let r=this,s=new ln(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){let e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}let i=new Hg[t.type];if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=new ue().setHex(t.sheen)),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==1&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.skinning!==void 0&&(i.skinning=t.skinning),t.morphTargets!==void 0&&(i.morphTargets=t.morphTargets),t.morphNormals!==void 0&&(i.morphNormals=t.morphNormals),t.dithering!==void 0&&(i.dithering=t.dithering),t.vertexTangents!==void 0&&(i.vertexTangents=t.vertexTangents),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(let r in t.uniforms){let s=t.uniforms[r];i.uniforms[r]={};switch(s.type){case"t":i.uniforms[r].value=n(s.value);break;case"c":i.uniforms[r].value=new ue().setHex(s.value);break;case"v2":i.uniforms[r].value=new U().fromArray(s.value);break;case"v3":i.uniforms[r].value=new _().fromArray(s.value);break;case"v4":i.uniforms[r].value=new ze().fromArray(s.value);break;case"m3":i.uniforms[r].value=new dt().fromArray(s.value);break;case"m4":i.uniforms[r].value=new Te().fromArray(s.value);break;default:i.uniforms[r].value=s.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.extensions!==void 0)for(let r in t.extensions)i.extensions[r]=t.extensions[r];if(t.shading!==void 0&&(i.flatShading=t.shading===1),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new U().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new U().fromArray(t.clearcoatNormalScale)),t.transmission!==void 0&&(i.transmission=t.transmission),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),i},setTextures:function(t){return this.textures=t,this}});var ev={decodeText:function(t){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch(n){return e}},extractUrlBase:function(t){let e=t.lastIndexOf("/");return e===-1?"./":t.substr(0,e+1)}};function Is(){Oe.call(this),this.type="InstancedBufferGeometry",this.instanceCount=Infinity}Is.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Is,isInstancedBufferGeometry:!0,copy:function(t){return Oe.prototype.copy.call(this,t),this.instanceCount=t.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let t=Oe.prototype.toJSON.call(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}});function ua(t,e,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),_e.call(this,t,e,n),this.meshPerAttribute=i||1}ua.prototype=Object.assign(Object.create(_e.prototype),{constructor:ua,isInstancedBufferAttribute:!0,copy:function(t){return _e.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},toJSON:function(){let t=_e.prototype.toJSON.call(this);return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}});function kl(t){Ue.call(this,t)}kl.prototype=Object.assign(Object.create(Ue.prototype),{constructor:kl,load:function(t,e,n,i){let r=this,s=new ln(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){let e={},n={};function i(h,f){if(e[f]!==void 0)return e[f];let m=h.interleavedBuffers,y=m[f],v=r(h,y.buffer),g=ns(y.type,v),p=new At(g,y.stride);return p.uuid=y.uuid,e[f]=p,p}function r(h,f){if(n[f]!==void 0)return n[f];let m=h.arrayBuffers,y=m[f],v=new Uint32Array(y).buffer;return n[f]=v,v}let s=t.isInstancedBufferGeometry?new Is:new Oe,o=t.data.index;if(o!==void 0){let h=ns(o.type,o.array);s.setIndex(new _e(h,1))}let a=t.data.attributes;for(let h in a){let f=a[h],m;if(f.isInterleavedBufferAttribute){let y=i(t.data,f.data);m=new Vn(y,f.itemSize,f.offset,f.normalized)}else{let y=ns(f.type,f.array),v=f.isInstancedBufferAttribute?ua:_e;m=new v(y,f.itemSize,f.normalized)}f.name!==void 0&&(m.name=f.name),s.setAttribute(h,m)}let c=t.data.morphAttributes;if(c)for(let h in c){let f=c[h],m=[];for(let y=0,v=f.length;y<v;y++){let g=f[y],p;if(g.isInterleavedBufferAttribute){let M=i(t.data,g.data);p=new Vn(M,g.itemSize,g.offset,g.normalized)}else{let M=ns(g.type,g.array);p=new _e(M,g.itemSize,g.normalized)}g.name!==void 0&&(p.name=g.name),m.push(p)}s.morphAttributes[h]=m}let l=t.data.morphTargetsRelative;l&&(s.morphTargetsRelative=!0);let d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let h=0,f=d.length;h!==f;++h){let m=d[h];s.addGroup(m.start,m.count,m.materialIndex)}let u=t.data.boundingSphere;if(u!==void 0){let h=new _;u.center!==void 0&&h.fromArray(u.center),s.boundingSphere=new nn(h,u.radius)}return t.name&&(s.name=t.name),t.userData&&(s.userData=t.userData),s}});function Vl(t){typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Ue.call(this,t),this.options={premultiplyAlpha:"none"}}Vl.prototype=Object.assign(Object.create(Ue.prototype),{constructor:Vl,isImageBitmapLoader:!0,setOptions:function(e){return this.options=e,this},load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=ki.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",fetch(t,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,r.options)}).then(function(a){ki.add(t,a),e&&e(a),r.manager.itemEnd(t)}).catch(function(a){i&&i(a),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}});function Wl(){this.type="ShapePath",this.color=new ue,this.subPaths=[],this.currentPath=null}Object.assign(Wl.prototype,{moveTo:function(t,e){return this.currentPath=new Xt,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this},lineTo:function(t,e){return this.currentPath.lineTo(t,e),this},quadraticCurveTo:function(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this},bezierCurveTo:function(t,e,n,i,r,s){return this.currentPath.bezierCurveTo(t,e,n,i,r,s),this},splineThru:function(t){return this.currentPath.splineThru(t),this},toShapes:function(t,e){function n(g){let p=[];for(let M=0,T=g.length;M<T;M++){let E=g[M],x=new Vi;x.curves=E.curves,p.push(x)}return p}function i(g,p){let M=p.length,T=!1;for(let E=M-1,x=0;x<M;E=x++){let A=p[E],D=p[x],V=D.x-A.x,X=D.y-A.y;if(Math.abs(X)>Number.EPSILON){if(X<0&&(A=p[x],V=-V,D=p[E],X=-X),g.y<A.y||g.y>D.y)continue;if(g.y===A.y){if(g.x===A.x)return!0}else{let C=X*(g.x-A.x)-V*(g.y-A.y);if(C===0)return!0;if(C<0)continue;T=!T}}else{if(g.y!==A.y)continue;if(D.x<=g.x&&g.x<=A.x||A.x<=g.x&&g.x<=D.x)return!0}}return T}let r=Ln.isClockWise,s=this.subPaths;if(s.length===0)return[];if(e===!0)return n(s);let o,a,c,l=[];if(s.length===1)return a=s[0],c=new Vi,c.curves=a.curves,l.push(c),l;let d=!r(s[0].getPoints());d=t?!d:d;let u=[],h=[],f=[],m=0,y;h[m]=void 0,f[m]=[];for(let g=0,p=s.length;g<p;g++)a=s[g],y=a.getPoints(),o=r(y),o=t?!o:o,o?(!d&&h[m]&&m++,h[m]={s:new Vi,p:y},h[m].s.curves=a.curves,d&&m++,f[m]=[]):f[m].push({h:a,p:y[0]});if(!h[0])return n(s);if(h.length>1){let g=!1,p=[];for(let M=0,T=h.length;M<T;M++)u[M]=[];for(let M=0,T=h.length;M<T;M++){let E=f[M];for(let x=0;x<E.length;x++){let A=E[x],D=!0;for(let V=0;V<h.length;V++)i(A.p,h[V].p)&&(M!==V&&p.push({froms:M,tos:V,hole:x}),D?(D=!1,u[V].push(A)):g=!0);D&&u[M].push(A)}}p.length>0&&(g||(f=u))}let v;for(let g=0,p=h.length;g<p;g++){c=h[g].s,l.push(c),v=f[g];for(let M=0,T=v.length;M<T;M++)c.holes.push(v[M].h)}return l}});function jl(t){this.type="Font",this.data=t}Object.assign(jl.prototype,{isFont:!0,generateShapes:function(t,e=100){let n=[],i=tv(t,e,this.data);for(let r=0,s=i.length;r<s;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}});function tv(t,e,n){let i=Array.from?Array.from(t):String(t).split(""),r=e/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,o=[],a=0,c=0;for(let l=0;l<i.length;l++){let d=i[l];if(d===`
`)a=0,c-=s;else{let u=nv(d,r,a,c,n);a+=u.offsetX,o.push(u.path)}}return o}function nv(t,e,n,i,r){let s=r.glyphs[t]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");return}let o=new Wl,a,c,l,d,u,h,f,m;if(s.o){let y=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let v=0,g=y.length;v<g;){let p=y[v++];switch(p){case"m":a=y[v++]*e+n,c=y[v++]*e+i,o.moveTo(a,c);break;case"l":a=y[v++]*e+n,c=y[v++]*e+i,o.lineTo(a,c);break;case"q":l=y[v++]*e+n,d=y[v++]*e+i,u=y[v++]*e+n,h=y[v++]*e+i,o.quadraticCurveTo(u,h,l,d);break;case"b":l=y[v++]*e+n,d=y[v++]*e+i,u=y[v++]*e+n,h=y[v++]*e+i,f=y[v++]*e+n,m=y[v++]*e+i,o.bezierCurveTo(u,h,f,m,l,d);break}}}return{offsetX:s.ha*e,path:o}}function ql(t){Ue.call(this,t)}ql.prototype=Object.assign(Object.create(Ue.prototype),{constructor:ql,load:function(t,e,n,i){let r=this,s=new ln(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){let a;try{a=JSON.parse(o)}catch(l){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),a=JSON.parse(o.substring(65,o.length-2))}let c=r.parse(a);e&&e(c)},n,i)},parse:function(t){return new jl(t)}});var Ns,iv={getContext:function(){return Ns===void 0&&(Ns=new(window.AudioContext||window.webkitAudioContext)),Ns},setContext:function(t){Ns=t}};function fa(t){Ue.call(this,t)}fa.prototype=Object.assign(Object.create(Ue.prototype),{constructor:fa,load:function(t,e,n,i){let r=this,s=new ln(r.manager);s.setResponseType("arraybuffer"),s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{let a=o.slice(0),c=iv.getContext();c.decodeAudioData(a,function(l){e(l)})}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)}});function Xl(t,e,n){Yt.call(this,void 0,n);let i=new ue().set(t),r=new ue().set(e),s=new _(i.r,i.g,i.b),o=new _(r.r,r.g,r.b),a=Math.sqrt(Math.PI),c=a*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)}Xl.prototype=Object.assign(Object.create(Yt.prototype),{constructor:Xl,isHemisphereLightProbe:!0,copy:function(t){return Yt.prototype.copy.call(this,t),this},toJSON:function(t){let e=Yt.prototype.toJSON.call(this,t);return e}});function Yl(t,e){Yt.call(this,void 0,e);let n=new ue().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}Yl.prototype=Object.assign(Object.create(Yt.prototype),{constructor:Yl,isAmbientLightProbe:!0,copy:function(t){return Yt.prototype.copy.call(this,t),this},toJSON:function(t){let e=Yt.prototype.toJSON.call(this,t);return e}});var Zl=new Te,Jl=new Te;function rv(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new nt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new nt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(rv.prototype,{update:function(t){let e=this._cache,n=e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep;if(n){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep;let i=t.projectionMatrix.clone(),r=e.eyeSep/2,s=r*e.near/e.focus,o=e.near*Math.tan(xe.DEG2RAD*e.fov*.5)/e.zoom,a,c;Jl.elements[12]=-r,Zl.elements[12]=r,a=-o*e.aspect+s,c=o*e.aspect+s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(i),a=-o*e.aspect-s,c=o*e.aspect-s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Jl),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Zl)}});var $l=class extends ge{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let n=this.context.createBufferSource();return n.buffer=this.buffer,n.loop=this.loop,n.loopStart=this.loopStart,n.loopEnd=this.loopEnd,n.onended=this.onEnded.bind(this),n.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=n,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.source.detune===void 0?void 0:(this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this)}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}},Kl=class{constructor(e,n=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=n,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,n=this.getFrequencyData();for(let i=0;i<n.length;i++)e+=n[i];return e/n.length}};function Ql(t,e,n){this.binding=t,this.valueSize=n;let i,r,s;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(Ql.prototype,{accumulate:function(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=e}else{s+=e;let o=e/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s},accumulateAdditive:function(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t},apply:function(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let a=e*this._origIndex;this._mixBufferRegion(n,i,a,1-r,e)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let a=e,c=e+e;a!==c;++a)if(n[a]!==n[a+e]){o.setValue(n,i);break}},saveOriginalState:function(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,s=i;r!==s;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)},_setAdditiveIdentityNumeric:function(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1},_setAdditiveIdentityOther:function(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]},_select:function(t,e,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)t[e+s]=t[n+s]},_slerp:function(t,e,n,i){ot.slerpFlat(t,e,t,e,t,n,i)},_slerpAdditive:function(t,e,n,i,r){let s=this._workIndex*r;ot.multiplyQuaternionsFlat(t,s,t,e,t,n),ot.slerpFlat(t,e,t,e,t,s,i)},_lerp:function(t,e,n,i,r){let s=1-i;for(let o=0;o!==r;++o){let a=e+o;t[a]=t[a]*s+t[n+o]*i}},_lerpAdditive:function(t,e,n,i,r){for(let s=0;s!==r;++s){let o=e+s;t[o]=t[o]+t[n+s]*i}}});var da="\\[\\]\\.:\\/",sv=new RegExp("["+da+"]","g"),pa="[^"+da+"]",ov="[^"+da.replace("\\.","")+"]",av=/((?:WC+[\/:])*)/.source.replace("WC",pa),cv=/(WCOD+)?/.source.replace("WCOD",ov),lv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pa),hv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pa),uv=new RegExp("^"+av+cv+lv+hv+"$"),fv=["material","materials","bones"];function eh(t,e,n){let i=n||mt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}Object.assign(eh.prototype,{getValue:function(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)},setValue:function(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)},bind:function(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()},unbind:function(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}});function mt(t,e,n){this.path=e,this.parsedPath=n||mt.parseTrackName(e),this.node=mt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t}Object.assign(mt,{Composite:eh,create:function(t,e,n){return t&&t.isAnimationObjectGroup?new mt.Composite(t,e,n):new mt(t,e,n)},sanitizeNodeName:function(t){return t.replace(/\s/g,"_").replace(sv,"")},parseTrackName:function(t){let e=uv.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);fv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n},findNode:function(t,e){if(!e||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===e||o.uuid===e)return o;let a=n(o.children);if(a)return a}return null},i=n(t.children);if(i)return i}return null}});Object.assign(mt.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,n){e[n]=this.node[this.propertyName]},function(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]},function(e,n){e[n]=this.resolvedProperty[this.propertyIndex]},function(e,n){this.resolvedProperty.toArray(e,n)}],SetterByBindingTypeAndVersioning:[[function(e,n){this.targetObject[this.propertyName]=e[n]},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]},function(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0},function(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty[this.propertyIndex]=e[n]},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty.fromArray(e,n)},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(e,n){this.bind(),this.getValue(e,n)},setValue:function(e,n){this.bind(),this.setValue(e,n)},bind:function(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=mt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===c){c=l;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[i];if(s===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(mt.prototype,{_getValue_unbound:mt.prototype.getValue,_setValue_unbound:mt.prototype.setValue});function dv(){this.uuid=xe.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}Object.assign(dv.prototype,{isAnimationObjectGroup:!0,add:function(){let t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length,o,a=t.length,c=this.nCachedObjects_;for(let l=0,d=arguments.length;l!==d;++l){let u=arguments[l],h=u.uuid,f=e[h];if(f===void 0){f=a++,e[h]=f,t.push(u);for(let m=0,y=s;m!==y;++m)r[m].push(new mt(u,n[m],i[m]))}else if(f<c){o=t[f];let m=--c,y=t[m];e[y.uuid]=f,t[f]=y,e[h]=m,t[m]=u;for(let v=0,g=s;v!==g;++v){let p=r[v],M=p[m],T=p[f];p[f]=M,T===void 0&&(T=new mt(u,n[v],i[v])),p[m]=T}}else t[f]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){let a=arguments[s],c=a.uuid,l=e[c];if(l!==void 0&&l>=r){let d=r++,u=t[d];e[u.uuid]=l,t[l]=u,e[c]=d,t[d]=a;for(let h=0,f=i;h!==f;++h){let m=n[h],y=m[d],v=m[l];m[l]=y,m[d]=v}}}this.nCachedObjects_=r},uncache:function(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,s=t.length;for(let o=0,a=arguments.length;o!==a;++o){let c=arguments[o],l=c.uuid,d=e[l];if(d!==void 0)if(delete e[l],d<r){let u=--r,h=t[u],f=--s,m=t[f];e[h.uuid]=d,t[d]=h,e[m.uuid]=u,t[u]=m,t.pop();for(let y=0,v=i;y!==v;++y){let g=n[y],p=g[u],M=g[f];g[d]=p,g[u]=M,g.pop()}}else{let u=--s,h=t[u];u>0&&(e[h.uuid]=d),t[d]=h,t.pop();for(let f=0,m=i;f!==m;++f){let y=n[f];y[d]=y[u],y.pop()}}}this.nCachedObjects_=r},subscribe_:function(t,e){let n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(i!==void 0)return r[i];let s=this._paths,o=this._parsedPaths,a=this._objects,c=a.length,l=this.nCachedObjects_,d=new Array(c);i=r.length,n[t]=i,s.push(t),o.push(e),r.push(d);for(let u=l,h=a.length;u!==h;++u){let f=a[u];d[u]=new mt(f,t,e)}return d},unsubscribe_:function(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length-1,a=s[o],c=t[o];e[c]=n,s[n]=a,s.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}});var th=class{constructor(e,n,i=null,r=n.blendMode){this._mixer=e,this._clip=n,this._localRoot=i,this.blendMode=r;let s=n.tracks,o=s.length,a=new Array(o),c={endingStart:ni,endingEnd:ni};for(let l=0;l!==o;++l){let d=s[l].createInterpolant(null);a[l]=d,d.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Yu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=Infinity,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,n){return this.loop=e,this.repetitions=n,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,n,i){if(e.fadeOut(n),this.fadeIn(n),i){let r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,n),this.warp(a,1,n)}return this}crossFadeTo(e,n,i){return e.crossFadeFrom(this,n,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,n,i){let r=this._mixer,s=r.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=e/o,l[1]=n/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,n,i,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*i;if(c<0||i===0)return;this._startTime=null,n=i*c}n*=this._updateTimeScale(e);let o=this._updateTime(n),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case hc:for(let d=0,u=c.length;d!==u;++d)c[d].evaluate(o),l[d].accumulateAdditive(a);break;case no:default:for(let d=0,u=c.length;d!==u;++d)c[d].evaluate(o),l[d].accumulate(r,a)}}}_updateWeight(e){let n=0;if(this.enabled){n=this.weight;let i=this._weightInterpolant;if(i!==null){let r=i.evaluate(e)[0];n*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=n,n}_updateTimeScale(e){let n=0;if(!this.paused){n=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let r=i.evaluate(e)[0];n*=r,e>i.parameterPositions[1]&&(this.stopWarping(),n===0?this.paused=!0:this.timeScale=n)}}return this._effectiveTimeScale=n,n}_updateTime(e){let n=this._clip.duration,i=this.loop,r=this.time+e,s=this._loopCount,o=i===Zu;if(e===0)return s===-1?r:o&&(s&1)===1?n-r:r;if(i===Xu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=n)r=n;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=n||r<0){let a=Math.floor(r/n);r-=n*a,s+=Math.abs(a);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?n:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return n-r}return r}_setEndings(e,n,i){let r=this._interpolantSettings;i?(r.endingStart=ii,r.endingEnd=ii):(e?r.endingStart=this.zeroSlopeAtStart?ii:ni:r.endingStart=Vr,n?r.endingEnd=this.zeroSlopeAtEnd?ii:ni:r.endingEnd=Vr)}_scheduleFading(e,n,i){let r=this._mixer,s=r.time,o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=n,a[1]=s+e,c[1]=i,this}};function nh(t){this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}nh.prototype=Object.assign(Object.create(Et.prototype),{constructor:nh,_bindAction:function(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,o=t._interpolants,a=n.uuid,c=this._bindingsByRootAndName,l=c[a];l===void 0&&(l={},c[a]=l);for(let d=0;d!==r;++d){let u=i[d],h=u.name,f=l[h];if(f!==void 0)s[d]=f;else{if(f=s[d],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,a,h));continue}let m=e&&e._propertyBindings[d].binding.parsedPath;f=new Ql(mt.create(n,h,m),u.ValueTypeName,u.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,a,h),s[d]=f}o[d].resultBuffer=f.buffer}},_activateAction:function(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}},_deactivateAction:function(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}},_isActiveAction:function(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions},_addInactiveAction:function(t,e,n){let i=this._actions,r=this._actionsByClip,s=r[e];if(s===void 0)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s;else{let o=s.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),s.actionByRoot[n]=t},_removeInactiveAction:function(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,s=this._actionsByClip,o=s[r],a=o.knownActions,c=a[a.length-1],l=t._byClipCacheIndex;c._byClipCacheIndex=l,a[l]=c,a.pop(),t._byClipCacheIndex=null;let d=o.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],a.length===0&&delete s[r],this._removeInactiveBindingsForAction(t)},_removeInactiveBindingsForAction:function(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}},_lendAction:function(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackAction:function(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_addInactiveBinding:function(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,s=i[e];s===void 0&&(s={},i[e]=s),s[n]=t,t._cacheIndex=r.length,r.push(t)},_removeInactiveBinding:function(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],a=e[e.length-1],c=t._cacheIndex;a._cacheIndex=c,e[c]=a,e.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]},_lendBinding:function(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackBinding:function(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_lendControlInterpolant:function(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new Cs(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n},_takeBackControlInterpolant:function(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(t,e,n){let i=e||this._root,r=i.uuid,s=typeof t=="string"?Bt.findByName(i,t):t,o=s!==null?s.uuid:t,a=this._actionsByClip[o],c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=no),a!==void 0){let d=a.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=a.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;let l=new th(this,s,e,n);return this._bindAction(l,c),this._addInactiveAction(l,o,r),l},existingAction:function(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?Bt.findByName(n,t):t,s=r?r.uuid:t,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null},stopAllAction:function(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this},update:function(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let c=0;c!==n;++c){let l=e[c];l._update(i,t,r,s)}let o=this._bindings,a=this._nActiveBindings;for(let c=0;c!==a;++c)o[c].apply(s);return this},setTime:function(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)},getRoot:function(){return this._root},uncacheClip:function(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let s=r.knownActions;for(let o=0,a=s.length;o!==a;++o){let c=s[o];this._deactivateAction(c);let l=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=l,e[l]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}},uncacheRoot:function(t){let e=t.uuid,n=this._actionsByClip;for(let s in n){let o=n[s].actionByRoot,a=o[e];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let s in r){let o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}},uncacheAction:function(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});var Fs=class{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new Fs(this.value.clone===void 0?this.value:this.value.clone())}};function ih(t,e,n){At.call(this,t,e),this.meshPerAttribute=n||1}ih.prototype=Object.assign(Object.create(At.prototype),{constructor:ih,isInstancedInterleavedBuffer:!0,copy:function(t){return At.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},clone:function(t){let e=At.prototype.clone.call(this,t);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(t){let e=At.prototype.toJSON.call(this,t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}});function rh(t,e,n,i,r){this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}Object.defineProperty(rh.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(rh.prototype,{isGLBufferAttribute:!0,setBuffer:function(t){return this.buffer=t,this},setType:function(t,e){return this.type=t,this.elementSize=e,this},setItemSize:function(t){return this.itemSize=t,this},setCount:function(t){return this.count=t,this}});function sh(t,e,n,i){this.ray=new ui(t,e),this.near=n||0,this.far=i||Infinity,this.camera=null,this.layers=new fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function oh(t,e){return t.distance-e.distance}function ma(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){let r=t.children;for(let s=0,o=r.length;s<o;s++)ma(r[s],e,n,!0)}}Object.assign(sh.prototype,{set:function(t,e){this.ray.set(t,e)},setFromCamera:function(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(t,e,n){let i=n||[];return ma(t,this,i,e),i.sort(oh),i},intersectObjects:function(t,e,n){let i=n||[];if(Array.isArray(t)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(let r=0,s=t.length;r<s;r++)ma(t[r],this,i,e);return i.sort(oh),i}});var Os=class{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}clone(){return new this.constructor().copy(this)}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(xe.clamp(n/this.radius,-1,1))),this}},ah=new U,ch=class{constructor(e,n){Object.defineProperty(this,"isBox2",{value:!0}),this.min=e!==void 0?e:new U(Infinity,Infinity),this.max=n!==void 0?n:new U(-Infinity,-Infinity)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=ah.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=Infinity,this.max.x=this.max.y=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new U),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new U),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,n){return n===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),n=new U),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,n){return n===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),n=new U),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){let n=ah.copy(e).clamp(this.min,this.max);return n.sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},lh=new _,Bs=new _,hh=class{constructor(e,n){this.start=e!==void 0?e:new _,this.end=n!==void 0?n:new _}set(e,n){return this.start.copy(e),this.end.copy(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new _),e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new _),e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return n===void 0&&(console.warn("THREE.Line3: .at() target is now required"),n=new _),this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){lh.subVectors(e,this.start),Bs.subVectors(this.end,this.start);let i=Bs.dot(Bs),r=Bs.dot(lh),s=r/i;return n&&(s=xe.clamp(s,0,1)),s}closestPointToPoint(e,n,i){let r=this.closestPointToPointParameter(e,n);return i===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),i=new _),this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}};function zs(t){ge.call(this),this.material=t,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}zs.prototype=Object.create(ge.prototype);zs.prototype.constructor=zs;zs.prototype.isImmediateRenderObject=!0;var Pn=new _,Us=new Te,ga=new Te,uh=class extends xs{constructor(e){let n=fh(e),i=new Oe,r=[],s=[],o=new ue(0,0,1),a=new ue(0,1,0);for(let l=0;l<n.length;l++){let d=n[l];d.parent&&d.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new Ne(r,3)),i.setAttribute("color",new Ne(s,3));let c=new Lt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,c);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=n,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let n=this.bones,i=this.geometry,r=i.getAttribute("position");ga.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<n.length;s++){let a=n[s];a.parent&&a.parent.isBone&&(Us.multiplyMatrices(ga,a.matrixWorld),Pn.setFromMatrixPosition(Us),r.setXYZ(o,Pn.x,Pn.y,Pn.z),Us.multiplyMatrices(ga,a.parent.matrixWorld),Pn.setFromMatrixPosition(Us),r.setXYZ(o+1,Pn.x,Pn.y,Pn.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}};function fh(t){let e=[];t&&t.isBone&&e.push(t);for(let n=0;n<t.children.length;n++)e.push.apply(e,fh(t.children[n]));return e}var dh=class extends xs{constructor(e=10,n=10,i=4473924,r=8947848){i=new ue(i),r=new ue(r);let s=n/2,o=e/n,a=e/2,c=[],l=[];for(let h=0,f=0,m=-a;h<=n;h++,m+=o){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);let y=h===s?i:r;y.toArray(l,f),f+=3,y.toArray(l,f),f+=3,y.toArray(l,f),f+=3,y.toArray(l,f),f+=3}let d=new Oe;d.setAttribute("position",new Ne(c,3)),d.setAttribute("color",new Ne(l,3));let u=new Lt({vertexColors:!0,toneMapped:!1});super(d,u);this.type="GridHelper"}},pv=new Float32Array(1),Vv=new Int32Array(pv.buffer),mv=4,ph=8,Wv=Math.pow(2,ph),gv=[.125,.215,.35,.446,.526,.582],jv=ph-mv+1+gv.length,qv={[ri]:0,[io]:1,[fc]:2,[dc]:3,[pc]:4,[mc]:5,[uc]:6},Yn=(1+Math.sqrt(5))/2,Wi=1/Yn,Xv=[new _(1,1,1),new _(-1,1,1),new _(1,1,-1),new _(-1,1,-1),new _(0,Yn,Wi),new _(0,Yn,-Wi),new _(Wi,0,Yn),new _(-Wi,0,Yn),new _(Yn,Wi,0),new _(-Yn,Wi,0)];pe.create=function(t,e){return console.log("THREE.Curve.create() has been deprecated"),t.prototype=Object.create(pe.prototype),t.prototype.constructor=t,t.prototype.getPoint=e,t};Object.assign(Rn.prototype,{createPointsGeometry:function(t){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let e=this.getPoints(t);return this.createGeometry(e)},createSpacedPointsGeometry:function(t){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let e=this.getSpacedPoints(t);return this.createGeometry(e)},createGeometry:function(t){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let e=new yt;for(let n=0,i=t.length;n<i;n++){let r=t[n];e.vertices.push(new _(r.x,r.y,r.z||0))}return e}});Object.assign(Xt.prototype,{fromPoints:function(t){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(t)}});function vv(t){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),pt.call(this,t),this.type="catmullrom",this.closed=!0}vv.prototype=Object.create(pt.prototype);function yv(t){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),pt.call(this,t),this.type="catmullrom"}yv.prototype=Object.create(pt.prototype);function mh(t){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),pt.call(this,t),this.type="catmullrom"}mh.prototype=Object.create(pt.prototype);Object.assign(mh.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});dh.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};uh.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(Ue.prototype,{extractUrlBase:function(t){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),ev.extractUrlBase(t)}});Ue.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Object.assign(ch.prototype,{center:function(t){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},size:function(t){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(t)}});Object.assign(en.prototype,{center:function(t){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionSphere:function(t){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)},size:function(t){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(t)}});Object.assign(nn.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}});fr.prototype.setFromMatrix=function(t){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(t)};hh.prototype.center=function(t){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(t)};Object.assign(xe,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(t){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),xe.floorPowerOfTwo(t)},nextPowerOfTwo:function(t){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),xe.ceilPowerOfTwo(t)}});Object.assign(dt.prototype,{flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},multiplyVector3:function(t){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},getInverse:function(t){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(t).invert()}});Object.assign(Te.prototype,{extractPosition:function(t){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(t)},flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new _().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(t){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(t)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(t){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector4:function(t){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(t){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),t.transformDirection(this)},crossVector:function(t){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(t,e,n,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(t,e,i,n,r,s)},getInverse:function(t){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(t).invert()}});Ut.prototype.isIntersectionLine=function(t){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(t)};Object.assign(ot.prototype,{multiplyVector3:function(t){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),t.applyQuaternion(this)},inverse:function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()}});Object.assign(ui.prototype,{isIntersectionBox:function(t){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionPlane:function(t){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(t)},isIntersectionSphere:function(t){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)}});Object.assign(at.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(t,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(t,e)},midpoint:function(t){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(t)},normal:function(t){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(t)},plane:function(t){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(t)}});Object.assign(at,{barycoordFromPoint:function(t,e,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),at.getBarycoord(t,e,n,i,r)},normal:function(t,e,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),at.getNormal(t,e,n,i)}});Object.assign(Vi.prototype,{extractAllPoints:function(t){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(t)},extrude:function(t){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Al(this,t)},makeGeometry:function(t){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Cl(this,t)}});Object.assign(U.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(_.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(t){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(t)},getScaleFromMatrix:function(t){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(t)},getColumnFromMatrix:function(t,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,t)},applyProjection:function(t){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(t)},fromAttribute:function(t,e,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(ze.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(yt.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},applyMatrix:function(t){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.assign(ge.prototype,{getChildByName:function(t){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(t)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(t,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,t)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(t){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.defineProperties(ge.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(t){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=t}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.assign(Je.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});Object.defineProperties(Je.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Ju},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Object.defineProperties(zo.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});Object.defineProperty(Ho.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});Uo.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(pe.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(t){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=t}});nt.prototype.setLens=function(t,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(t)};Object.defineProperties(je.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(t){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=t}},shadowCameraLeft:{set:function(t){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=t}},shadowCameraRight:{set:function(t){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=t}},shadowCameraTop:{set:function(t){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=t}},shadowCameraBottom:{set:function(t){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=t}},shadowCameraNear:{set:function(t){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=t}},shadowCameraFar:{set:function(t){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=t}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(t){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=t}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(t){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=t}},shadowMapHeight:{set:function(t){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=t}}});Object.defineProperties(_e.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===rr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(rr)}}});Object.assign(_e.prototype,{setDynamic:function(t){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?rr:Wr),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(Oe.prototype,{addIndex:function(t){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(t)},addAttribute:function(t,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(t,new _e(arguments[1],arguments[2]))):t==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(t,e)},addDrawCall:function(t,e,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(t,e)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(t){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(t)},applyMatrix:function(t){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.defineProperties(Oe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(Is.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(t){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=t}}});Object.defineProperties(sh.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(t){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=t}}});Object.defineProperties(At.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===rr},set:function(t){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(t)}}});Object.assign(At.prototype,{setDynamic:function(t){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?rr:Wr),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(Xo.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}});Object.assign(ls.prototype,{dispose:function(){console.error("THREE.Scene: .dispose() has been removed.")}});Object.defineProperties(Fs.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(ve.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ue}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(t){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===Ha}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(t){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=t}}});Object.defineProperties(Xn.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(qn.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(t){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=t}}});Object.defineProperties(vt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(t){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=t}}});Object.assign(Li.prototype,{clearTarget:function(t,e,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(t),this.clear(e,n,i)},animate:function(t){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(t)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(t){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(t)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}});Object.defineProperties(Li.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=t}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=t}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(t){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=t===!0?io:ri}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(tl.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(It.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=t}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=t}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=t}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=t}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(t){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=t}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(t){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=t}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(t){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=t}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(t){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=t}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(t){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=t}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(t){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=t}}});Object.defineProperties($l.prototype,{load:{value:function(t){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let e=this,n=new fa;return n.load(t,function(i){e.setBuffer(i)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}});Kl.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Si.prototype.updateCubeMap=function(t,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(t,e)};Si.prototype.clear=function(t,e,n,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(t,e,n,i)};ai.crossOrigin=void 0;ai.loadTexture=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let r=new Lr;r.setCrossOrigin(this.crossOrigin);let s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s};ai.loadTextureCube=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let r=new na;r.setCrossOrigin(this.crossOrigin);let s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s};ai.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};ai.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Th}}));var va=function(){};(function(){var t=new _,e=new _;function n(h,f){h.indexOf(f)===-1&&h.push(f)}function i(h,f){var m=h.indexOf(f);m>-1&&h.splice(m,1)}function r(h,f){var m=f.position.distanceTo(h.position),y=0,v=[],g,p=h.faces.length,M,T;for(g=0;g<p;g++)M=h.faces[g],M.hasVertex(f)&&v.push(M);for(g=0;g<p;g++){var E=1;M=h.faces[g];for(var x=0;x<v.length;x++){T=v[x];var A=M.normal.dot(T.normal);E=Math.min(E,(1.001-A)/2)}y=Math.max(y,E)}var D=0;v.length<2&&(y=1);var V=m*y+D;return V}function s(h){if(h.neighbors.length===0){h.collapseNeighbor=null,h.collapseCost=-.01;return}h.collapseCost=1e5,h.collapseNeighbor=null;for(var f=0;f<h.neighbors.length;f++){var m=r(h,h.neighbors[f]);h.collapseNeighbor||(h.collapseNeighbor=h.neighbors[f],h.collapseCost=m,h.minCost=m,h.totalCost=0,h.costCount=0),h.costCount++,h.totalCost+=m,m<h.minCost&&(h.collapseNeighbor=h.neighbors[f],h.minCost=m)}h.collapseCost=h.totalCost/h.costCount}function o(h,f){for(console.assert(h.faces.length===0);h.neighbors.length;){var m=h.neighbors.pop();i(m.neighbors,h)}i(f,h)}function a(h,f){i(f,h),h.v1&&i(h.v1.faces,h),h.v2&&i(h.v2.faces,h),h.v3&&i(h.v3.faces,h);for(var m=[h.v1,h.v2,h.v3],y,v,g=0;g<3;g++){if(y=m[g],v=m[(g+1)%3],!y||!v)continue;y.removeIfNonNeighbor(v),v.removeIfNonNeighbor(y)}}function c(h,f,m,y){if(!y){o(m,h);return}var v,g=[];for(v=0;v<m.neighbors.length;v++)g.push(m.neighbors[v]);for(v=m.faces.length-1;v>=0;v--)m.faces[v].hasVertex(y)&&a(m.faces[v],f);for(v=m.faces.length-1;v>=0;v--)m.faces[v].replaceVertex(m,y);for(o(m,h),v=0;v<g.length;v++)s(g[v])}function l(h){for(var f=h[0],m=0;m<h.length;m++)h[m].collapseCost<f.collapseCost&&(f=h[m]);return f}function d(h,f,m,y,v,g){this.a=y,this.b=v,this.c=g,this.v1=h,this.v2=f,this.v3=m,this.normal=new _,this.computeNormal(),h.faces.push(this),h.addUniqueNeighbor(f),h.addUniqueNeighbor(m),f.faces.push(this),f.addUniqueNeighbor(h),f.addUniqueNeighbor(m),m.faces.push(this),m.addUniqueNeighbor(h),m.addUniqueNeighbor(f)}d.prototype.computeNormal=function(){var h=this.v1.position,f=this.v2.position,m=this.v3.position;t.subVectors(m,f),e.subVectors(h,f),t.cross(e).normalize(),this.normal.copy(t)},d.prototype.hasVertex=function(h){return h===this.v1||h===this.v2||h===this.v3},d.prototype.replaceVertex=function(h,f){h===this.v1?this.v1=f:h===this.v2?this.v2=f:h===this.v3&&(this.v3=f),i(h.faces,this),f.faces.push(this),h.removeIfNonNeighbor(this.v1),this.v1.removeIfNonNeighbor(h),h.removeIfNonNeighbor(this.v2),this.v2.removeIfNonNeighbor(h),h.removeIfNonNeighbor(this.v3),this.v3.removeIfNonNeighbor(h),this.v1.addUniqueNeighbor(this.v2),this.v1.addUniqueNeighbor(this.v3),this.v2.addUniqueNeighbor(this.v1),this.v2.addUniqueNeighbor(this.v3),this.v3.addUniqueNeighbor(this.v1),this.v3.addUniqueNeighbor(this.v2),this.computeNormal()};function u(h,f){this.position=h,this.id=f,this.faces=[],this.neighbors=[],this.collapseCost=0,this.collapseNeighbor=null}u.prototype.addUniqueNeighbor=function(h){n(this.neighbors,h)},u.prototype.removeIfNonNeighbor=function(h){var f=this.neighbors,m=this.faces,y=f.indexOf(h);if(y===-1)return;for(var v=0;v<m.length;v++)if(m[v].hasVertex(h))return;f.splice(y,1)},va.prototype.modify=function(h,f){h.isBufferGeometry&&(h=new yt().fromBufferGeometry(h)),h.mergeVertices();var m=h.vertices,y=h.faces,v=[],g=[],p,M;for(p=0,M=m.length;p<M;p++){var T=new u(m[p],p);v.push(T)}for(p=0,M=y.length;p<M;p++){var E=y[p],x=E.a,A=E.b,D=E.c,V=new d(v[x],v[A],v[D],x,A,D);g.push(V)}for(p=0,M=v.length;p<M;p++)s(v[p]);for(var X,C=f;C--;){if(X=l(v),!X){console.log("THREE.SimplifyModifier: No next vertex");break}c(v,g,X,X.collapseNeighbor)}var O=new Oe,N=[],B=[];for(p=0;p<v.length;p++){var T=v[p].position;N.push(T.x,T.y,T.z)}for(p=0;p<g.length;p++){var E=g[p],x=v.indexOf(E.v1),A=v.indexOf(E.v2),D=v.indexOf(E.v3);B.push(x,A,D)}return O.setAttribute("position",new Ne(N,3)),O.setIndex(B),O}})();var $={};$.VERSION="1.0.0";$.PI=Math.PI;$.TAU=2*$.PI;$.clamp=function(t,e,n){return Math.min(n,Math.max(e,t))};$.step=function(t,e){return e<t?0:1};$.smoothStep=function(t,e,n){var i=$.clamp((n-t)/(e-t),0,1);return i*i*(3-2*i)};$.deg2Rad=function(t){return t*Math.PI/180};$.toRadians=$.deg2Rad;$.rad2Deg=function(t){return t*180/Math.PI};$.toDegrees=$.rad2Deg;$.clamp01=function(t){return $.clamp(t,0,1)};$.mix=function(t,e,n){return n<=0?t:n>=1?e:t+n*(e-t)};$.lerp=$.mix;$.inverseMix=function(t,e,n){return(n-t)/(e-t)};$.inverseLerp=$.inverseMix;$.mixUnclamped=function(t,e,n){return n<=0?t:n>=1?e:t+n*(e-t)};$.lerpUnclamped=$.mixUnclamped;$.fract=function(t){return t-Math.floor(t)};$.frac=$.fract;$.isPowerOfTwo=function(t){return(t-1&t)==0};$.closestPowerOfTwo=function(t){return Math.pow(2,Math.round(Math.log(t)/Math.log(2)))};$.nextPowerOfTwo=function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.log(2)))};$.mod=function(t,e){return(t%e+e)%e};$.deltaAngle=function(t,e){var n=$.mod(e-t,360);return n>180&&(n=Math.abs(n-360)),n};$.deltaAngleDeg=$.deltaAngle;$.deltaAngleRad=function(t,e){return $.toRadians($.deltaAngle($.toDegrees(t),$.toDegrees(e)))};$.lerpAngle=function(t,e,n){var i=$.deltaAngle(t,e);return $.mod(t+$.lerp(0,i,n),360)};$.lerpAngleDeg=$.lerpAngle;$.lerpAngleRad=function(t,e,n){return $.toRadians($.lerpAngleDeg($.toDegrees(t),$.toDegrees(e),n))};$.gammaToLinearSpace=function(t){return Math.pow(t,2.2)};$.linearToGammaSpace=function(t){return Math.pow(t,1/2.2)};$.map=function(t,e,n,i,r){return n+(r-t)*(i-n)/(e-t)};$.scale=$.map;$.almostIdentity=function(t,e,n){if(t>e)return t;var i=2*n-e,r=2*e-3*n,s=t/e;return(i*s+r)*s*s+n};$.impulse=function(t,e){var n=t*e;return n*Math.exp(1-n)};$.cubicPulse=function(t,e,n){return n=Math.abs(n-t),n>e?0:(n/=e,1-n*n*(3-2*n))};$.expStep=function(t,e,n){return Math.exp(-e*Math.pow(t,n))};$.parabola=function(t,e){return Math.pow(4*t*(1-t),e)};$.powerCurve=function(t,e,n){var i=Math.pow(e+n,e+n)/(Math.pow(e,e)*Math.pow(n,n));return i*Math.pow(t,e)*Math.pow(1-t,n)};$.latLonToCartesian=function(t,e){e+=180,t=$.clamp(t,-85,85);var n=$.toRadians(90-t),i=$.toRadians(180-e),r=Math.sin(n)*Math.cos(i),s=Math.cos(n),o=Math.sin(n)*Math.sin(i);return{x:r,y:s,z:o}};$.cartesianToLatLon=function(t,e,n){var i=Math.sqrt(t*t+e*e+n*n);return{lat:Math.asin(n/i),lon:Math.atan2(e,t)}};$.randomInRange=function(t,e){return t+Math.random()*(e-t)};$.norm=function(t,e,n){return(t-e)/(n-e)};$.hash=function(t){return $.fract((1+Math.cos(t))*415.92653)};$.noise2d=function(t,e){var n=$.hash(t*37),i=$.hash(e*57);return $.fract(n+i)};$.smoothMin=function(t,e,n){var i=Math.exp(-n*t)+Math.exp(-n*e);return-Math.log(i)/n};$.smoothMax=function(t,e,n){return Math.log(Math.exp(t)+Math.exp(e))/n};$.almost=function(t,e){return Math.abs(t-e)<1e-4};var Dn=$,Zn,ya=new Tn,xa,_a=new Yo(4,40),ji={scale:1,noise:1};function Dr(t,e){return t.x*e.x+t.y*e.y+t.z*e.z}var xv=new _(127.1,311.7,74.7),_v=new _(269.5,183.3,246.1),bv=new _(113.5,271.9,124.6),Be=new _,iy=new _;function wv(t){return Be.set(Dr(t,xv),Dr(t,_v),Dr(t,bv)),{x:Dn.fract(Math.sin(Be.x)*43758.5453123),y:Dn.fract(Math.sin(Be.y)*43758.5453123),z:Dn.fract(Math.sin(Be.z)*43758.5453123)}}var gh=new _,Gs=new _,Jn=new U,Ir=new _,ba=new _,Mv=new _(1,57,113);function $n(t){gh.set(Math.floor(t.x),Math.floor(t.y),Math.floor(t.z)),Gs.set(Dn.fract(t.x),Dn.fract(t.y),Dn.fract(t.z));let e=0;Jn.set(100,100);for(let n=-1;n<=1;n++)for(let i=-1;i<=1;i++)for(let r=-1;r<=1;r++){Ir.set(r,i,n),Be.copy(gh).add(Ir);let s=wv(Be);ba.set(Ir.x-Gs.x+s.x,Ir.y-Gs.y+s.y,Ir.z-Gs.z+s.z);let o=Dr(ba,ba);o<Jn.x?(e=Dr(Be,Mv),Jn.set(o,Jn.x)):o<Jn.y&&(Jn.y=o)}return Math.sqrt(Jn.x)}var Hs=new _;function Sv(t){Hs.copy(t).multiplyScalar(.25),Be.copy(Hs).multiplyScalar(2);let e=$n(Be);Be.copy(Hs).normalize().multiplyScalar(-1);var n=-.1*Dn.smoothStep(0,1,e);return Be.multiplyScalar(n).add(Hs),Be.clone()}function Ev(t){let e=1e-4;Be.clone(t),Be.x+=e;let n=$n(Be);Be.clone(t),Be.x-=e;let i=$n(Be),r=n-i;Be.clone(t),Be.y+=e,n=$n(Be),Be.clone(t),Be.y-=e,i=$n(Be);let s=n-i;Be.clone(t),Be.z+=e,n=$n(Be),Be.clone(t),Be.z-=e,i=$n(Be);let o=n-i;return new _(r,s,o).normalize()}async function ks(){Zn&&ya.remove(Zn);let t=[],e=_a.vertices;for(let s=0;s<e.length;s++){let o=Sv(e[s]);e[s].copy(o),t[s]=Ev(e[s])}let n=new va,i=_a.faces.length*.4,r=_a;r.computeVertexNormals(!0),r.computeFaceNormals(),Zn=new Je(r,xa),Zn.scale.setScalar(3),Zn.castShadow=Zn.receiveShadow=!0,ya.add(Zn)}var vh={init:async(t,e,n)=>{xa=t,ji.q=e||ji.q,ji.r=n||ji.r,await ks()},update:()=>{},group:ya,generate:()=>ks(xa),params:t=>{t.add(ji,"scale",.1,2,.1).onChange(ks),t.add(ji,"noise",.1,2,.1).onChange(ks)}},qi=function(t,e){e===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=t,this.domElement=e,this.enabled=!0,this.target=new _,this.minDistance=0,this.maxDistance=Infinity,this.minZoom=0,this.maxZoom=Infinity,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-Infinity,this.maxAzimuthAngle=Infinity,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:Kt.ROTATE,MIDDLE:Kt.DOLLY,RIGHT:Kt.PAN},this.touches={ONE:Qt.ROTATE,TWO:Qt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(i),n.update(),a=o.NONE},this.update=function(){var L=new _,q=new ot().setFromUnitVectors(t.up,new _(0,1,0)),oe=q.clone().invert(),Me=new _,Ye=new ot,Zt=2*Math.PI;return function(){var Yi=n.object.position;L.copy(Yi).sub(n.target),L.applyQuaternion(q),l.setFromVector3(L),n.autoRotate&&a===o.NONE&&V(A()),n.enableDamping?(l.theta+=d.theta*n.dampingFactor,l.phi+=d.phi*n.dampingFactor):(l.theta+=d.theta,l.phi+=d.phi);var Pt=n.minAzimuthAngle,xt=n.maxAzimuthAngle;return isFinite(Pt)&&isFinite(xt)&&(Pt<-Math.PI?Pt+=Zt:Pt>Math.PI&&(Pt-=Zt),xt<-Math.PI?xt+=Zt:xt>Math.PI&&(xt-=Zt),Pt<=xt?l.theta=Math.max(Pt,Math.min(xt,l.theta)):l.theta=l.theta>(Pt+xt)/2?Math.max(Pt,l.theta):Math.min(xt,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=u,l.radius=Math.max(n.minDistance,Math.min(n.maxDistance,l.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),L.setFromSpherical(l),L.applyQuaternion(oe),Yi.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(d.set(0,0,0),h.set(0,0,0)),u=1,f||Me.distanceToSquared(n.object.position)>c||8*(1-Ye.dot(n.object.quaternion))>c?(n.dispatchEvent(i),Me.copy(n.object.position),Ye.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",de,!1),n.domElement.removeEventListener("pointerdown",se,!1),n.domElement.removeEventListener("wheel",J,!1),n.domElement.removeEventListener("touchstart",he,!1),n.domElement.removeEventListener("touchend",le,!1),n.domElement.removeEventListener("touchmove",Q,!1),n.domElement.ownerDocument.removeEventListener("pointermove",S,!1),n.domElement.ownerDocument.removeEventListener("pointerup",b,!1),n.domElement.removeEventListener("keydown",ie,!1)};var n=this,i={type:"change"},r={type:"start"},s={type:"end"},o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},a=o.NONE,c=1e-6,l=new Os,d=new Os,u=1,h=new _,f=!1,m=new U,y=new U,v=new U,g=new U,p=new U,M=new U,T=new U,E=new U,x=new U;function A(){return 2*Math.PI/60/60*n.autoRotateSpeed}function D(){return Math.pow(.95,n.zoomSpeed)}function V(L){d.theta-=L}function X(L){d.phi-=L}var C=function(){var L=new _;return function(oe,Me){L.setFromMatrixColumn(Me,0),L.multiplyScalar(-oe),h.add(L)}}(),O=function(){var L=new _;return function(oe,Me){n.screenSpacePanning===!0?L.setFromMatrixColumn(Me,1):(L.setFromMatrixColumn(Me,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(oe),h.add(L)}}(),N=function(){var L=new _;return function(oe,Me){var Ye=n.domElement;if(n.object.isPerspectiveCamera){var Zt=n.object.position;L.copy(Zt).sub(n.target);var Kn=L.length();Kn*=Math.tan(n.object.fov/2*Math.PI/180),C(2*oe*Kn/Ye.clientHeight,n.object.matrix),O(2*Me*Kn/Ye.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(C(oe*(n.object.right-n.object.left)/n.object.zoom/Ye.clientWidth,n.object.matrix),O(Me*(n.object.top-n.object.bottom)/n.object.zoom/Ye.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function B(L){n.object.isPerspectiveCamera?u/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function P(L){n.object.isPerspectiveCamera?u*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function I(L){m.set(L.clientX,L.clientY)}function G(L){T.set(L.clientX,L.clientY)}function W(L){g.set(L.clientX,L.clientY)}function ne(L){y.set(L.clientX,L.clientY),v.subVectors(y,m).multiplyScalar(n.rotateSpeed);var q=n.domElement;V(2*Math.PI*v.x/q.clientHeight),X(2*Math.PI*v.y/q.clientHeight),m.copy(y),n.update()}function ce(L){E.set(L.clientX,L.clientY),x.subVectors(E,T),x.y>0?B(D()):x.y<0&&P(D()),T.copy(E),n.update()}function ae(L){p.set(L.clientX,L.clientY),M.subVectors(p,g).multiplyScalar(n.panSpeed),N(M.x,M.y),g.copy(p),n.update()}function ye(){}function be(L){L.deltaY<0?P(D()):L.deltaY>0&&B(D()),n.update()}function We(L){var q=!1;switch(L.keyCode){case n.keys.UP:N(0,n.keyPanSpeed),q=!0;break;case n.keys.BOTTOM:N(0,-n.keyPanSpeed),q=!0;break;case n.keys.LEFT:N(n.keyPanSpeed,0),q=!0;break;case n.keys.RIGHT:N(-n.keyPanSpeed,0),q=!0;break}q&&(L.preventDefault(),n.update())}function k(L){if(L.touches.length==1)m.set(L.touches[0].pageX,L.touches[0].pageY);else{var q=.5*(L.touches[0].pageX+L.touches[1].pageX),oe=.5*(L.touches[0].pageY+L.touches[1].pageY);m.set(q,oe)}}function et(L){if(L.touches.length==1)g.set(L.touches[0].pageX,L.touches[0].pageY);else{var q=.5*(L.touches[0].pageX+L.touches[1].pageX),oe=.5*(L.touches[0].pageY+L.touches[1].pageY);g.set(q,oe)}}function me(L){var q=L.touches[0].pageX-L.touches[1].pageX,oe=L.touches[0].pageY-L.touches[1].pageY,Me=Math.sqrt(q*q+oe*oe);T.set(0,Me)}function Pe(L){n.enableZoom&&me(L),n.enablePan&&et(L)}function we(L){n.enableZoom&&me(L),n.enableRotate&&k(L)}function Fe(L){if(L.touches.length==1)y.set(L.touches[0].pageX,L.touches[0].pageY);else{var q=.5*(L.touches[0].pageX+L.touches[1].pageX),oe=.5*(L.touches[0].pageY+L.touches[1].pageY);y.set(q,oe)}v.subVectors(y,m).multiplyScalar(n.rotateSpeed);var Me=n.domElement;V(2*Math.PI*v.x/Me.clientHeight),X(2*Math.PI*v.y/Me.clientHeight),m.copy(y)}function Se(L){if(L.touches.length==1)p.set(L.touches[0].pageX,L.touches[0].pageY);else{var q=.5*(L.touches[0].pageX+L.touches[1].pageX),oe=.5*(L.touches[0].pageY+L.touches[1].pageY);p.set(q,oe)}M.subVectors(p,g).multiplyScalar(n.panSpeed),N(M.x,M.y),g.copy(p)}function Y(L){var q=L.touches[0].pageX-L.touches[1].pageX,oe=L.touches[0].pageY-L.touches[1].pageY,Me=Math.sqrt(q*q+oe*oe);E.set(0,Me),x.set(0,Math.pow(E.y/T.y,n.zoomSpeed)),B(x.y),T.copy(E)}function K(L){n.enableZoom&&Y(L),n.enablePan&&Se(L)}function ee(L){n.enableZoom&&Y(L),n.enableRotate&&Fe(L)}function fe(){}function se(L){if(n.enabled===!1)return;switch(L.pointerType){case"mouse":case"pen":Z(L);break}}function S(L){if(n.enabled===!1)return;switch(L.pointerType){case"mouse":case"pen":j(L);break}}function b(L){switch(L.pointerType){case"mouse":case"pen":R(L);break}}function Z(L){L.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus();var q;switch(L.button){case 0:q=n.mouseButtons.LEFT;break;case 1:q=n.mouseButtons.MIDDLE;break;case 2:q=n.mouseButtons.RIGHT;break;default:q=-1}switch(q){case Kt.DOLLY:if(n.enableZoom===!1)return;G(L),a=o.DOLLY;break;case Kt.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;W(L),a=o.PAN}else{if(n.enableRotate===!1)return;I(L),a=o.ROTATE}break;case Kt.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;I(L),a=o.ROTATE}else{if(n.enablePan===!1)return;W(L),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&(n.domElement.ownerDocument.addEventListener("pointermove",S,!1),n.domElement.ownerDocument.addEventListener("pointerup",b,!1),n.dispatchEvent(r))}function j(L){if(n.enabled===!1)return;L.preventDefault();switch(a){case o.ROTATE:if(n.enableRotate===!1)return;ne(L);break;case o.DOLLY:if(n.enableZoom===!1)return;ce(L);break;case o.PAN:if(n.enablePan===!1)return;ae(L);break}}function R(L){if(n.domElement.ownerDocument.removeEventListener("pointermove",S,!1),n.domElement.ownerDocument.removeEventListener("pointerup",b,!1),n.enabled===!1)return;ye(L),n.dispatchEvent(s),a=o.NONE}function J(L){if(n.enabled===!1||n.enableZoom===!1||a!==o.NONE&&a!==o.ROTATE)return;L.preventDefault(),L.stopPropagation(),n.dispatchEvent(r),be(L),n.dispatchEvent(s)}function ie(L){if(n.enabled===!1||n.enableKeys===!1||n.enablePan===!1)return;We(L)}function he(L){if(n.enabled===!1)return;L.preventDefault();switch(L.touches.length){case 1:switch(n.touches.ONE){case Qt.ROTATE:if(n.enableRotate===!1)return;k(L),a=o.TOUCH_ROTATE;break;case Qt.PAN:if(n.enablePan===!1)return;et(L),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(n.touches.TWO){case Qt.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(L),a=o.TOUCH_DOLLY_PAN;break;case Qt.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;we(L),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&n.dispatchEvent(r)}function Q(L){if(n.enabled===!1)return;L.preventDefault(),L.stopPropagation();switch(a){case o.TOUCH_ROTATE:if(n.enableRotate===!1)return;Fe(L),n.update();break;case o.TOUCH_PAN:if(n.enablePan===!1)return;Se(L),n.update();break;case o.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;K(L),n.update();break;case o.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ee(L),n.update();break;default:a=o.NONE}}function le(L){if(n.enabled===!1)return;fe(L),n.dispatchEvent(s),a=o.NONE}function de(L){if(n.enabled===!1)return;L.preventDefault()}n.domElement.addEventListener("contextmenu",de,!1),n.domElement.addEventListener("pointerdown",se,!1),n.domElement.addEventListener("wheel",J,!1),n.domElement.addEventListener("touchstart",he,!1),n.domElement.addEventListener("touchend",le,!1),n.domElement.addEventListener("touchmove",Q,!1),n.domElement.addEventListener("keydown",ie,!1),this.update()};qi.prototype=Object.create(Et.prototype);qi.prototype.constructor=qi;var wa=function(t,e){qi.call(this,t,e),this.screenSpacePanning=!1,this.mouseButtons.LEFT=Kt.PAN,this.mouseButtons.RIGHT=Kt.ROTATE,this.touches.ONE=Qt.PAN,this.touches.TWO=Qt.DOLLY_ROTATE};wa.prototype=Object.create(Et.prototype);wa.prototype.constructor=wa;var Tv=document.querySelector("canvas"),dn=new Li({antialias:!0,alpha:!0,canvas:Tv,preserveDrawingBuffer:!0,powerPreference:"high-performance"});dn.setPixelRatio(window.devicePixelRatio);dn.setClearColor(0,1);dn.shadowMap.enabled=!0;dn.shadowMap.type=qs;var Vs=new ls,Xi=new nt(60,1,.1,100);Xi.position.set(2,2,2);var Av=new qi(Xi,dn.domElement);Av.screenSpacePanning=!0;var yh=[];function xh(t){yh.push(t)}function Ma(){let t=window.innerWidth,e=window.innerHeight,n=window.devicePixelRatio;Xi.aspect=t/e,Xi.updateProjectionMatrix(),dn.setSize(t,e);for(let i of yh)i()}window.addEventListener("resize",Ma);var _h=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"closed"});this.shadow=e;let n=document.createElement("style");n.textContent=`@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300&display=swap');
    :host { all: unset; width: 300px; --padding: 6px; }
    *{font-family: sans-serif, 'Source Code Pro', monospace; background-color: black; color: white; margin: 0; padding: 0; box-sizing: border-box; font-size: 12px; }
    div.container p{padding: var(--padding); font-weight: bold; border-bottom: 1px solid #222;}
    div.controller {display: flex; flex-direction: row;}
    div.controller * {color: #eee;}
    div.controller span.strip{ flex: 0 0 var(--padding); background-color: red; border-right: 1px solid #222; border-bottom: 1px solid #b70000;}
    div.controller span.label{ padding: var(--padding); flex: 0 0 100px;  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
    div.controller input[type="range"], div.controller input[type="button"]{flex: 1 1 100%; width: 100%; }`,this.shadow.append(n)}connectedCallback(){let e=new MutationObserver(n=>{n.forEach(i=>{if(i.addedNodes.length)for(let r of i.addedNodes)this.shadow.append(r)})});e.observe(this,{childList:!0})}};customElements.define("vesc-element",_h);var pn=class{constructor(e,n){this.div=document.createElement("div"),this.div.className="controller",this.label=document.createElement("span"),this.label.className="label",this.label.textContent=n,this.strip=document.createElement("span"),this.strip.className="strip",this.div.append(this.strip),this.div.append(this.label),this.control=e,this.div.append(this.control),this.div.style.zIndex=1e3,this.onChangeFn=null,this.relayRequested=!1,this.value=void 0}onChange(e){return this.onChangeFn=e,this}setText(e){return this.label.textContent=e,this}setValue(e){}relay(e){if(this.value=e,this.onChangeFn){if(this.relayRequested)return;this.relayRequested=!0,requestAnimationFrame(()=>{this.onChangeFn(this.value),this.relayRequested=!1})}}},Sa=class extends pn{constructor(e,n,i,r,s){let o=document.createElement("input");o.type="range",o.min=i,o.max=r,o.step=s,o.addEventListener("input",a=>{let c=parseFloat(a.target.value);e[n]=c,this.relay(c)}),o.addEventListener("change",a=>{}),super(o,n),this.input=o}setValue(e){this.input.value=e,e=parseFloat(this.input.value),this.relay(e)}},Ea=class extends pn{constructor(e,n,i,r){let s=document.createElement("input");s.type="button",s.value=i,s.addEventListener("click",o=>{r()}),super(s,n),this.input=s}},Ta=class extends pn{constructor(e,n){let i=document.createElement("input");i.type="checkbox",i.addEventListener("change",r=>{let s=r.target.checked;e[n]=s,this.relay(s)}),super(i,n),this.input=i}setValue(e){this.input.checked=e,e=this.input.checked,this.relay(e)}},Aa=class extends pn{constructor(e,n){let i=document.createElement("input");i.type="file",i.addEventListener("change",r=>{let s=this.input.files;if(s.length){let o=s[0],a=new FileReader;a.onload=c=>{e[n]=c.target.result,this.relay(c.target.result)},a.readAsDataURL(o)}},!1),super(i,n),this.input=i}},La=class{constructor(e,n=""){this.controllers=[],this.state=null,this.parent=e,this.div=document.createElement("div"),this.div.className="container",this.container=document.createElement("div"),this.visible=!0,n&&(this.title=document.createElement("p"),this.title.textContent=n,this.div.append(this.title),this.title.addEventListener("click",i=>{this.visible=!this.visible,this.container.style.display=this.visible?"block":"none"})),this.div.append(this.container)}add(e,n,i=0,r=100,s=1){this.state=e,this.prop=n;let o,a=typeof e[n];switch(a){case"number":o=new Sa(e,n,i,r,s),o.setValue(e[n]);break;case"boolean":o=new Ta(e,n),o.setValue(e[n]);break;case"function":o=new Ea(e,n,"Click",e[n]);break;default:console.log(`Type ${a} not supported for ${n}`)}return o.setValue(e[n]),this.controllers.push(o),this.parent.register(e,n,o),this.container.append(o.div),o}addFile(e,n){this.state=e,this.prop=n;let i=new Aa(e,n);return i.setValue(e[n]),this.controllers.push(i),this.parent.register(e,n,i),this.container.append(i.div),i}},Ca=class{constructor(){this.containers=[],this.handlers=new Map,this.proxies=new Map,this.base=document.createElement("vesc-element"),this.base.style.position="absolute",document.body.append(this.base)}addFolder(e){let n=new La(this,e);return this.containers.push(n),this.base.append(n.div),n}register(e,n,i){let r=this.handlers.get(e);if(r){r.push({prop:n,controller:i});return}this.handlers.set(e,[{prop:n,controller:i}])}update(e,n,i){let r=this.proxies.get(e),s=this.handlers.get(r);if(!s)return;for(let o of s.values())o.prop===n&&o.controller.setValue(i)}createProxy(e){let n=this,i={get:function(o,a,c){return o[a]},set:function(o,a,c){return n.update(o,a,c),o[a]=c,!0}},r=e||{},s=new Proxy(r,i);return this.proxies.set(r,s),s}},Lv=`#version 300 es
precision highp float;

in vec3 position;
in vec3 normal;
in vec2 uv;

uniform vec2 resolution;
uniform mat3 normalMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform vec3 voronoiScale;
uniform float distortionFactor;
uniform float normalDistance;
uniform float noiseDistort;
uniform float noiseScale;
uniform float twistX;
uniform float twistY;
uniform float twistZ;
uniform float bulgeFactor;

out vec4 vWorldPosition;
out vec4 vEyePosition;
out vec3 vPosition;
out vec2 vUv;
out float strength;

out vec3 vTangent;
out vec3 vBinormal;
out vec3 vNormal;

// https://www.shadertoy.com/view/ldl3Dl

vec3 hash( vec3 x )
{
	x = vec3( dot(x,vec3(127.1,311.7, 74.7)),
			  dot(x,vec3(269.5,183.3,246.1)),
			  dot(x,vec3(113.5,271.9,124.6)));

	return fract(sin(x)*43758.5453123);
}

vec3 voronoi( in vec3 x )
{
    vec3 p = floor( x );
    vec3 f = fract( x );

	float id = 0.0;
    vec2 res = vec2( 100.0 );
    for( int k=-1; k<=1; k++ )
    for( int j=-1; j<=1; j++ )
    for( int i=-1; i<=1; i++ )
    {
        vec3 b = vec3( float(i), float(j), float(k) );
        vec3 r = vec3( b ) - f + hash( p + b );
        float d = dot( r, r );

        if( d < res.x )
        {
			id = dot( p+b, vec3(1.0,57.0,113.0 ) );
            res = vec2( d, res.x );			
        }
        else if( d < res.y )
        {
            res.y = d;
        }
    }

    return vec3( sqrt( res ), abs(id) );
}

vec3 opTwistX( vec3 p, float twist ) {
  float k = twist;
  float c = cos(k*p.x);
  float s = sin(k*p.x);
  mat2  m = mat2(c,-s,s,c);
  vec2 r = m*p.yz;
  vec3 q = vec3(p.x,r.x,r.y);
  return q;
}

vec3 opTwistY( vec3 p, float twist ) {
  float k = twist;
  float c = cos(k*p.y);
  float s = sin(k*p.y);
  mat2  m = mat2(c,-s,s,c);
  vec2 r = m*p.xz;
  vec3 q = vec3(r.x,p.y,r.y);
  return q;
}

vec3 opTwistZ( vec3 p, float twist ) {
  float k = twist;
  float c = cos(k*p.z);
  float s = sin(k*p.z);
  mat2  m = mat2(c,-s,s,c);
  vec2 r = m*p.xy;
  vec3 q = vec3(r.x,r.y,p.z);
  return q;
}

vec3 rotate(vec3 p) {
  return opTwistX(opTwistY(opTwistZ(p, twistZ), twistY), twistX);
}

float hash(float h) {
	return fract(sin(h) * 43758.5453123);
}

float noise(vec3 x) {
	vec3 p = floor(x);
	vec3 f = fract(x);
	f = f * f * (3.0 - 2.0 * f);

	float n = p.x + p.y * 157.0 + 113.0 * p.z;
	return mix(
			mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
					mix(hash(n + 157.0), hash(n + 158.0), f.x), f.y),
			mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
					mix(hash(n + 270.0), hash(n + 271.0), f.x), f.y), f.z);
}

float fbm(vec3 p) {
	float f = 0.0;
	f = 0.5000 * noise(p);
	p *= 2.01;
	f += 0.2500 * noise(p);
	p *= 2.02;
	f += 0.1250 * noise(p);

	return f;
}


// https://www.shadertoy.com/view/3llGzX


// simple LCG

#define LCG(k) k = (65 * k) % 1021
#define lr(k) float(k)/1021.

// permutation polynomial

int permp (int i1, int i2)
{
      int t = (i1 + i2) & 255;
        
      return ((112 * t + 153) * t + 151) & 255;
}

// return the two closest distances for 3D Worley noise
// type controls the type of metric used

vec2 worley(int type, vec3 p)
{
    vec2 dl = vec2(20.0);
    ivec3 iv = ivec3(floor(p));
    vec3 fv = fract(p);
    
    int j = 0; // initialization for Knuth's "algorithm L"
    ivec3 di = ivec3(1), ki = -di;
    ivec4 fi = ivec4(0, 1, 2, 3);
    
    // instead of writing a triply nested loop (!!)
    // generate the indices for the neighbors in Gray order (Knuth's "algorithm L")
    // see section 7.2.1.1 of TAOCP, Volume 4A or https://doi.org/10.1145/360336.360343
    
	for (int k = 0; k < 27; k++) // loop through all neighbors
    { 
		 // seeding
        int s = permp(permp(permp(0, iv.z + ki.z), iv.y + ki.y), iv.x + ki.x); LCG(s);
            
		 for (int m = 0; m < 2; m++) // two points per cell
             {
                // generate feature points within the cell
                LCG(s); float sz = lr(s);
                LCG(s); float sy = lr(s);
                LCG(s); float sx = lr(s);
                
                vec3 tp = vec3(ki) + vec3(sx, sy, sz) - fv;
                float c = 0.0;
                if (type == 1) c = dot(tp, tp); // Euclidean metric
                if (type == 2) c = abs(tp.x) + abs(tp.y) + abs(tp.z); // Manhattan metric
                if (type == 3) c = max(abs(tp.x), max(abs(tp.y), abs(tp.z))); // Chebyshev metric
                
                float m1 = min(c, dl.x); // ranked distances
                dl = vec2(min(m1, dl.y), max(m1, min(max(c, dl.x), dl.y)));
             }
        
        // updating steps for Knuth's "algorithm L"
        j = fi[0]; fi[0] = 0; ki[2 - j] += di[j];
        if ((ki[2 - j] & 1) == 1) {
            di[j] = -di[j];
            fi[j] = fi[j + 1]; fi[j + 1] = j + 1;
        }
	}
    
    if (type == 1) dl = sqrt(dl); // don't forget to root at the end for Euclidean distance
        
    return dl;
}

// sstep - "smootherstep alternative"
float sstep(float x)
{
  x = clamp(x, 0.0, 1.0);
  float ix = 1.0 - x;
  x = x * x;
  return x / (x + ix * ix);
}


// vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
// vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

// float snoise(vec3 v){ 
//   const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
//   const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// // First corner
//   vec3 i  = floor(v + dot(v, C.yyy) );
//   vec3 x0 =   v - i + dot(i, C.xxx) ;

// // Other corners
//   vec3 g = step(x0.yzx, x0.xyz);
//   vec3 l = 1.0 - g;
//   vec3 i1 = min( g.xyz, l.zxy );
//   vec3 i2 = max( g.xyz, l.zxy );

//   //  x0 = x0 - 0. + 0.0 * C 
//   vec3 x1 = x0 - i1 + 1.0 * C.xxx;
//   vec3 x2 = x0 - i2 + 2.0 * C.xxx;
//   vec3 x3 = x0 - 1. + 3.0 * C.xxx;

// // Permutations
//   i = mod(i, 289.0 ); 
//   vec4 p = permute( permute( permute( 
//              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
//            + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
//            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// // Gradients
// // ( N*N points uniformly over a square, mapped onto an octahedron.)
//   float n_ = 1.0/7.0; // N=7
//   vec3  ns = n_ * D.wyz - D.xzx;

//   vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

//   vec4 x_ = floor(j * ns.z);
//   vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

//   vec4 x = x_ *ns.x + ns.yyyy;
//   vec4 y = y_ *ns.x + ns.yyyy;
//   vec4 h = 1.0 - abs(x) - abs(y);

//   vec4 b0 = vec4( x.xy, y.xy );
//   vec4 b1 = vec4( x.zw, y.zw );

//   vec4 s0 = floor(b0)*2.0 + 1.0;
//   vec4 s1 = floor(b1)*2.0 + 1.0;
//   vec4 sh = -step(h, vec4(0.0));

//   vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
//   vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

//   vec3 p0 = vec3(a0.xy,h.x);
//   vec3 p1 = vec3(a0.zw,h.y);
//   vec3 p2 = vec3(a1.xy,h.z);
//   vec3 p3 = vec3(a1.zw,h.w);

// //Normalise gradients
//   vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
//   p0 *= norm.x;
//   p1 *= norm.y;
//   p2 *= norm.z;
//   p3 *= norm.w;

// // Mix final noise value
//   vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
//   m = m * m;
//   return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
//                                 dot(p2,x2), dot(p3,x3) ) );
// }

// vec3 snoiseVec3( vec3 x ){
//   float s  = snoise(vec3( x ));
//   float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));
//   float s2 = snoise(vec3( x.z + 14.2 , x.x - 124.5 , x.y + 99.4 ));
//   vec3 c = vec3( s , s1 , s2 );
//   return c;
// }

// vec3 curlNoise( vec3 p ){
//   const float e = .1;
//   vec3 dx = vec3( e   , 0.0 , 0.0 );
//   vec3 dy = vec3( 0.0 , e   , 0.0 );
//   vec3 dz = vec3( 0.0 , 0.0 , e   );

//   vec3 p_x0 = snoiseVec3( p - dx );
//   vec3 p_x1 = snoiseVec3( p + dx );
//   vec3 p_y0 = snoiseVec3( p - dy );
//   vec3 p_y1 = snoiseVec3( p + dy );
//   vec3 p_z0 = snoiseVec3( p - dz );
//   vec3 p_z1 = snoiseVec3( p + dz );

//   float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
//   float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
//   float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

//   const float divisor = 1.0 / ( 2.0 * e );
//   return  vec3( x , y , z );// * divisor;
//   //return normalize( vec3( x , y , z ) * divisor );
// }


vec4 map(in vec3 pos ){
  
  // for(int i=0; i<4; i++) {
  //   pos += .1*curlNoise(.5*pos);
  // }

  float value = voronoi(pos*voronoiScale).x;
  // vec2 w = worley(1, pos*voronoiScale);
  // float value = length(w.xy)/(w.y + w.x) - w.x;
  float d = distortionFactor*value;
  //d += noiseDistort*fbm(noiseScale*pos);
  //d = pow(d, 2.);
  //d = exp(d);
  //d = sign(d) * sqrt(abs(d));
  d += noiseDistort*fbm(noiseScale*pos);
  vec3 p = pos + normalize(pos) * d;
  p = rotate(p);
  return vec4(p, value);
}

vec4 calc(in float r,  in float phi, in float theta ){
  vec3 pos = vec3(
    r * sin(theta) * cos(phi),
    r * sin(theta) * sin(phi),
    r * cos(theta)
  );
  return map(pos);
}

vec3 calcNormal( in vec3 pos, out vec3 tangent, out vec3 binormal ) {
  float r = length(pos);
	float phi = atan( pos.y, pos.x );
	float theta = acos( pos.z );

	float e = normalDistance;
	vec3 dx = calc( r,phi + e, theta ).xyz - calc( r, phi - e, theta ).xyz;
	vec3 dz = calc( r,phi, theta + e ).xyz - calc( r, phi, theta - e ).xyz;
  
  tangent = normalize(dx);
  binormal = normalize(dz);
  vec3 normal = normalize(cross(tangent, binormal));

  tangent = normalize(cross(normal,vec3(1.,0.,0.)));
  binormal = normalize(cross(normal, tangent));
  tangent = normalize(cross(normal, binormal));

  return normal;
}

// Polyhedra stuff

#define EPSILON 	0.001
#define MAXDIST 	100.0
#define MAXSTEPS	100

float sdSphere( vec3 p, float s )
{
  return length(p)-s;
}
float udRoundBox( vec3 p, vec3 b, float r ) {
  return length(max(abs(p)-b,0.0))-r;
}
float dot2( in vec3 v ) { return dot(v,v); }
float sdTetrahedron(vec3 p, float size)
{
    const float k = sqrt(2.0);
    p /= size;
    p.xz = abs(p.xz);
    
    float m = 2.0*p.z - k*p.y - 1.0;
    p = (m>0.0) ? p : vec3(p.z,-p.y,p.x);
    float s1 = clamp(p.x,0.0,1.0);
    float s2 = clamp((p.x-p.y*k-p.z+2.0)/4.0,0.0,1.0);
    
    m = 2.0*p.z - k*p.y - 1.0;
    float d = sign(m)*sqrt((sign(p.y*k+p.z+1.0)+sign(2.0-3.0*p.x-k*p.y-p.z)<1.0) 
                  ?
                  min( dot2(vec3(s1,-k*0.5,0)-p), 
                       dot2(vec3(s2, k*0.5-k*s2,1.0-s2)-p) )
                  :
                  m*m/6.0 );
    
    return d * size;
}
float opSmoothUnion( float d1, float d2, float k ) {
  float h = clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );
  return mix( d2, d1, h ) - k*h*(1.0-h); }
float opSmoothSubtraction( float d1, float d2, float k ) {
  float h = clamp( 0.5 - 0.5*(d2+d1)/k, 0.0, 1.0 );
  return mix( d2, -d1, h ) + k*h*(1.0-h); }
float opSmoothIntersection( float d1, float d2, float k ) {
  float h = clamp( 0.5 - 0.5*(d2-d1)/k, 0.0, 1.0 );
  return mix( d2, d1, h ) + k*h*(1.0-h); }
float sdRoundBox( vec3 p, vec3 b, float r )
{
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0) - r;
}
float sdOctahedron( vec3 p, float s)
{
  p = abs(p);
  float m = p.x+p.y+p.z-s;
  vec3 q;
       if( 3.0*p.x < m ) q = p.xyz;
  else if( 3.0*p.y < m ) q = p.yzx;
  else if( 3.0*p.z < m ) q = p.zxy;
  else return m*0.57735027;
    
  float k = clamp(0.5*(q.z-q.y+s),0.0,s); 
  return length(vec3(q.x,q.y-s+k,q.z-k)); 
}
// https://www.shadertoy.com/view/XtyXzW
#define PI 3.14159265359
#define PHI (1.618033988749895)
#define TAU 6.283185307179586
#define GDFVector3 normalize(vec3(1, 1, 1 ))
#define GDFVector4 normalize(vec3(-1, 1, 1))
#define GDFVector5 normalize(vec3(1, -1, 1))
#define GDFVector6 normalize(vec3(1, 1, -1))
#define GDFVector7 normalize(vec3(0, 1, PHI+1.))
#define GDFVector8 normalize(vec3(0, -1, PHI+1.))
#define GDFVector9 normalize(vec3(PHI+1., 0, 1))
#define GDFVector10 normalize(vec3(-PHI-1., 0, 1))
#define GDFVector11 normalize(vec3(1, PHI+1., 0))
#define GDFVector12 normalize(vec3(-1, PHI+1., 0))
#define GDFVector13 normalize(vec3(0, PHI, 1))
#define GDFVector14 normalize(vec3(0, -PHI, 1))
#define GDFVector15 normalize(vec3(1, 0, PHI))
#define GDFVector16 normalize(vec3(-1, 0, PHI))
#define GDFVector17 normalize(vec3(PHI, 1, 0))
#define GDFVector18 normalize(vec3(-PHI, 1, 0))
#define fGDFBegin float d = 0.;
#define fGDF(v) d = max(d, abs(dot(p, v)));
#define fGDFEnd return d - r;
// Version with variable exponent.
// This is slow and does not produce correct distances, but allows for bulging of objects.
#define fGDFExp(v) d += pow(abs(dot(p, v)), e);
// Version with without exponent, creates objects with sharp edges and flat faces
#define fGDF(v) d = max(d, abs(dot(p, v)));
// https://www.shadertoy.com/view/lssfW4
#define fGDFExpEnd return pow(d, 1./e) - r;
#define fGDFEnd return d - r;
float fDodecahedron(vec3 p, float r, float e) {
	fGDFBegin
  fGDFExp(GDFVector13) fGDFExp(GDFVector14) fGDFExp(GDFVector15) fGDFExp(GDFVector16)
  fGDFExp(GDFVector17) fGDFExp(GDFVector18)
  fGDFExpEnd
}
float fDodecahedron(vec3 p, float r) {
    fGDFBegin
    fGDF(GDFVector13) fGDF(GDFVector14) fGDF(GDFVector15) fGDF(GDFVector16)
    fGDF(GDFVector17) fGDF(GDFVector18)
    fGDFEnd
}
float fIcosahedron(vec3 p, float r) {
    fGDFBegin
    fGDF(GDFVector3) fGDF(GDFVector4) fGDF(GDFVector5) fGDF(GDFVector6)
    fGDF(GDFVector7) fGDF(GDFVector8) fGDF(GDFVector9) fGDF(GDFVector10)
    fGDF(GDFVector11) fGDF(GDFVector12)
    fGDFEnd
}
float fIcosahedron(vec3 p, float r, float e) {
  fGDFBegin
  fGDFExp(GDFVector3) fGDFExp(GDFVector4) fGDFExp(GDFVector5) fGDFExp(GDFVector6)
  fGDFExp(GDFVector7) fGDFExp(GDFVector8) fGDFExp(GDFVector9) fGDFExp(GDFVector10)
  fGDFExp(GDFVector11) fGDFExp(GDFVector12)
  fGDFExpEnd
}
float mapPolyhedra (vec3 p, float t) {
  // float tetra = sdTetrahedron(p, max(.0001,tetrahedronFactor)) - .1;
  // float cube = sdRoundBox(p, vec3(cubeFactor), .1);
  // float octa = sdOctahedron(p, 1.25 * octahedronFactor) - .1;
  // float icosa = fIcosahedron(p, 1. * icosahedronFactor, 50.);
  // float dodeca = fDodecahedron(p, 1. * dodecahedronFactor, 50.);
  float sphere = sdSphere(p, 1.);
  float cube = sdRoundBox(p, vec3(1.), .2);
  float icosa = fIcosahedron(p, 1., 50.);
  float tetra = sdTetrahedron(p, max(.0001,1.)) - .1;
  float dodeca = fDodecahedron(p, 1., 50.);
  float octa = sdOctahedron(p, 1.25 ) - .1;
  float a = opSmoothUnion(sphere, dodeca, bulgeFactor);
  //a = sphere;
  // a = opSmoothUnion(a, octa, smoothness);
  // a = opSmoothUnion(a, icosa, smoothness);
  // a = opSmoothUnion(a, dodeca, smoothness);
  // a = opSmoothUnion(a, sphere, smoothness);
  a += distortionFactor * voronoi(voronoiScale*p).x;
  a += noiseDistort*fbm(noiseScale*p);
  
  return a;
  
  // //float d = displacement(pp);
  // //return d + ( sdCappedCylinder(pp, 1., .5) - .1);
  // float icosa = fIcosahedron(pp, 1., 50.);
  // //return icosa;
  // float dodeca = fDodecahedron(pp, 1., 50.);
  // //return dodeca;
  // //float pyramid =  sdPyramid(pp, 1., 2.) - .1;
  // float octa = sdOctahedron(pp, 1.25) - .1;
  // //return octa;
  // float sphere = sdSphere(p, 1.1);
  // return sphere;
  // //return sdRoundBox(pp, vec3(.5,.5,.5), .05);
  // float tetra = sdTetrahedron(pp, 1.) - .1;
  // //return tetra;
  // //return  opSmoothUnion(icosa, dodeca, .05);
  // return  opSmoothUnion(sphere, dodeca, .05);
  // //return opSmoothIntersection(dodeca, icosa, .5);
  // return sdPyramid(pp, 1., .75) - .1;
}

vec3 calcNormal (vec3 p, float t) {
    float d = mapPolyhedra (p, t);
    return normalize (vec3 (
        mapPolyhedra (p - vec3 (normalDistance, 0.0, 0.0), t) - d,
        mapPolyhedra (p - vec3 (0.0, normalDistance, 0.0), t) - d,
        mapPolyhedra (p - vec3 (0.0, 0.0, normalDistance), t) - d
    ));
}

float march (vec3 ro, vec3 rd, float time) {
 	float d = EPSILON;
    float t = 0.0;
    for (int i = 0; i < MAXSTEPS; ++i) {
     	vec3 p = ro + rd * d;
       	t = mapPolyhedra(p, time);
        if (t < EPSILON || d >= MAXDIST)
            break;
        d += t;
    }
    return d;
}

void main() {
  vUv = uv;
  
  vec4 distort = map(position);
  vPosition = distort.xyz;
  strength = distort.a;
  //strength = noise(position*5.);
  vec3 t = vec3(0.);
  vec3 b = vec3(0.);
  vNormal = normalMatrix * calcNormal(position, t, b);
  // // vTangent = normalMatrix * t;
  // // vBinormal = normalMatrix * b;
  
  // vec3 ro = 2.*position;
  // vec3 rd = - normalize( position );
  // float d = march( ro, rd, 0. );
  // vPosition = ro + d * rd;
  // //vNormal = normalMatrix* calcNormal(vPosition, 0.) * -1.;
  // vNormal = normalMatrix* rotate(calcNormal (vPosition, 0.) * -1.);
  // vPosition = rotate(vPosition);

  vWorldPosition = modelMatrix * vec4(vPosition, 1. );
  vEyePosition = viewMatrix * vWorldPosition;
  gl_Position = projectionMatrix * vEyePosition;
}`,Cv=`#version 300 es
precision highp float;

in vec4 vEyePosition;
in vec3 vPosition;
in vec4 vWorldPosition;
in float strength;
in vec2 vUv;

in vec3 vTangent;
in vec3 vBinormal;
in vec3 vNormal;

uniform sampler2D matCapMap;
uniform sampler2D matCapMap2;

uniform float curvatureRim;
uniform float stripeFrequency;
uniform float stripeOffset;
uniform float frostFactor;
uniform float slopeFactor;

out vec4 color;

#define M_PI 3.1415926535897932384626433832795
#define M_TAU (2. * M_PI)

float aastep(float threshold, float value) {
  float afwidth = 0.7 * length(vec2(dFdx(value), dFdy(value)));
  return smoothstep(threshold-afwidth, threshold+afwidth, value);
}

float hash(float h) {
	return fract(sin(h) * 43758.5453123);
}

float noise(vec3 x) {
	vec3 p = floor(x);
	vec3 f = fract(x);
	f = f * f * (3.0 - 2.0 * f);

	float n = p.x + p.y * 157.0 + 113.0 * p.z;
	return mix(
			mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
					mix(hash(n + 157.0), hash(n + 158.0), f.x), f.y),
			mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
					mix(hash(n + 270.0), hash(n + 271.0), f.x), f.y), f.z);
}

float rand(vec2 co){
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}


// A single iteration of Bob Jenkins' One-At-A-Time hashing algorithm.
uint hash( uint x ) {
    x += ( x << 10u );
    x ^= ( x >>  6u );
    x += ( x <<  3u );
    x ^= ( x >> 11u );
    x += ( x << 15u );
    return x;
}

// Compound versions of the hashing algorithm I whipped together.
uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

// Construct a float with half-open range [0:1] using low 23 bits.
// All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
float floatConstruct( uint m ) {
    const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
    const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32

    m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
    m |= ieeeOne;                          // Add fractional part to 1.0

    float  f = uintBitsToFloat( m );       // Range [1:2]
    return f - 1.0;                        // Range [0:1]
}

// Pseudo-random value in half-open range [0:1].
float random( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
float random( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
float random( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
float random( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }

float getStripe(in vec2 uv, in float afwidth) {
  float v = stripeOffset + sin(uv.x*2.*M_PI + stripeFrequency*uv.y);
  v = .5 + .5 * v;
  float e = afwidth;
  v = smoothstep(.5-e, .5+e, v);
  return v;
}

float getPattern(in vec2 uv, out float slope) {
  float afwidth = length(vec2(dFdx(uv.x), dFdy(uv.y)));
  float v0 = getStripe(uv, afwidth);
  float e = .0005;//5.*afwidth;
  float v1 = getStripe(vec2(uv.x, uv.y-e), afwidth);
  slope = slopeFactor*(v0 - v1);
  return v0;
}

vec3 cartesianToSpherical(in vec3 p){
  float r = length(p);
  float theta = atan(p.y, p.x);
  float phi = atan(sqrt(p.x*p.x + p.y*p.y), p.z);
  return vec3(r, (theta + M_PI) / M_TAU, phi / M_TAU); 
}

vec2 matCapUV(in vec3 eye, in vec3 normal) {
  vec3 r = reflect(eye, normal);
  float m = 2.82842712474619 * sqrt(r.z + 1.0);
  vec2 vN = r.xy / m + .5;
  return vN;
}

void main() {

  float slope = 0.;
  float pattern = getPattern(cartesianToSpherical(vPosition).yz, slope);
//  float pattern = getPattern(vUv, slope);

  // mat3 tbn = mat3(normalize(vTangent), normalize(vBinormal), normalize(vNormal));
  // vec3 n = normalize(tbn * normalize(vec3(0.,0.,1.)));
  // n = normalize(tbn * vec3(0.,0.,1.));

  // vec3 denormTangent = dFdx(vUv.y)*dFdy(vEyePosition.xyz)-dFdx(vEyePosition.xyz)*dFdy(vUv.y);
  // vec3 tangent = normalize(denormTangent-vNormal*dot(vNormal,denormTangent));
  // vec3 normal = normalize(vNormal);
  // vec3 bitangent = cross(normal,tangent);

  vec3 n = normalize(vNormal);

  if(pattern>.5){
    n.x += frostFactor*rand(vPosition.xy);
    n.y += frostFactor*rand(vPosition.yz);
    n.z += frostFactor*rand(vPosition.xy);
    n = normalize(n);
  }

  // Compute curvature
  vec3 dx = dFdx(vEyePosition.xyz/vEyePosition.w);
  vec3 dy = dFdy(vEyePosition.xyz/vEyePosition.w);
  vec3 xneg = n - dx;
  vec3 xpos = n + dx;
  vec3 yneg = n - dy;
  vec3 ypos = n + dy;
  float depth = length(vEyePosition);
  float curvature = abs((cross(xneg, xpos).y - cross(yneg, ypos).x) *50./depth)* curvatureRim;
  
  vec2 vN = matCapUV(normalize(vEyePosition.xyz), n);
  //float afwidth = length(vec2(dFdx(vPosition.x), dFdy(vPosition.y)));
  vN.y += .1*slope;

  vec4 c1 = texture(matCapMap, vN);
  vec4 c2 = texture(matCapMap2, vN);

  float s = pattern;
  color.rgb = mix(c1.rgb, c2.rgb, s);
  color.rgb += vec3(curvature);
  //color.rgb = vec3(s);
    
//  color = vec4(.5 + .5 * normal, 1.);
  color.a = 1.;//pattern + .5;
  //color.rgb = vec3(slope*100., stripe, 0.);
  //color.rgb = vec3(noise(1000.*vPosition.xyz));
}`,Rv=`#version 300 es
precision highp float;

in vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.);
}
`,Pv=`#version 300 es
precision highp float;

uniform vec2 resolution;

out vec4 color;

void main() {
  float d = 1.-length(gl_FragCoord.xy/resolution-.5);
  color = vec4(d, d, d, 1.);
}`,Ws=new Lr,Dv=Ws.load("./assets/red.jpg"),Iv=Ws.load("./assets/black.jpg");function Nv(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}var Ra={sphereDetail:Nv()?40:160,bulgeFactor:.1,voronoiScaleX:1.7,voronoiScaleY:1.7,voronoiScaleZ:1.7,distortionFactor:-.07,normalDistance:.05,curvatureRim:1,noiseScale:1.78,noiseDistort:.1,stripeFrequency:20,stripeOffset:0,frostFactor:.05,slopeFactor:1,twistX:0,twistY:0,twistZ:0,wireframe:!1};function Fv(){if(window.location.hash)try{return JSON.parse(decodeURIComponent(window.location.hash.substr(1)))}catch(e){}let t=localStorage.getItem("baubles");if(t)try{return JSON.parse(t)}catch(e){return{}}return{}}var Pa=new Ca,Ce=Pa.createProxy({...Ra,...Fv()}),Da=Pa.createProxy({matcap:null,matcap2:null,reset:()=>{let t=Object.keys(Ra);for(let e of t)Ce[e]=Ra[e]}}),$e=Pa.addFolder("Parameters");$e.add(Ce,"sphereDetail",0,200,10).onChange(t=>{Ia.geometry.parameters.detail!==t&&(Ia.geometry=new Fi(1,t))});$e.add(Ce,"bulgeFactor",0,4,.01).onChange(t=>{Qe.uniforms.bulgeFactor.value=t,ct()});$e.add(Ce,"voronoiScaleX",0,10,.01).onChange(t=>{Qe.uniforms.voronoiScale.value.x=t,ct()});$e.add(Ce,"voronoiScaleY",0,10,.01).onChange(t=>{Qe.uniforms.voronoiScale.value.y=t,ct()});$e.add(Ce,"voronoiScaleZ",0,10,.01).onChange(t=>{Qe.uniforms.voronoiScale.value.z=t,ct()});$e.add(Ce,"distortionFactor",-1,1,.01).onChange(t=>{Qe.uniforms.distortionFactor.value=t,ct()});$e.add(Ce,"noiseScale",0,10,.01).onChange(t=>{Qe.uniforms.noiseScale.value=t,ct()});$e.add(Ce,"noiseDistort",-1,1,.01).onChange(t=>{Qe.uniforms.noiseDistort.value=t,ct()});$e.add(Ce,"normalDistance",.001,.1,.001).onChange(t=>{Qe.uniforms.normalDistance.value=t,ct()});$e.add(Ce,"curvatureRim",0,4,.01).onChange(t=>{Qe.uniforms.curvatureRim.value=t,ct()});$e.add(Ce,"stripeFrequency",0,200,1).onChange(t=>{Qe.uniforms.stripeFrequency.value=t,ct()});$e.add(Ce,"stripeOffset",-1.1,1.1,.01).onChange(t=>{Qe.uniforms.stripeOffset.value=t,ct()});$e.add(Ce,"frostFactor",0,.1,.01).onChange(t=>{Qe.uniforms.frostFactor.value=t,ct()});$e.add(Ce,"slopeFactor",-5,5,.01).onChange(t=>{Qe.uniforms.slopeFactor.value=t,ct()});$e.add(Ce,"twistX",-Math.PI,Math.PI,.01).onChange(t=>{Qe.uniforms.twistX.value=t,ct()});$e.add(Ce,"twistY",-Math.PI,Math.PI,.01).onChange(t=>{Qe.uniforms.twistY.value=t,ct()});$e.add(Ce,"twistZ",-Math.PI,Math.PI,.01).onChange(t=>{Qe.uniforms.twistZ.value=t,ct()});$e.addFile(Da,"matcap").setText("MatCap #1").onChange(t=>Qe.uniforms.matCapMap.value=Ws.load(t));$e.addFile(Da,"matcap").setText("MatCap #2").onChange(t=>Qe.uniforms.matCapMap2.value=Ws.load(t));$e.add(Da,"reset");$e.add(Ce,"wireframe").onChange(t=>{Qe.wireframe=t,ct()});window.state=Ce;var Qe=new Cn({uniforms:{matCapMap:{value:Dv},matCapMap2:{value:Iv},bulgeFactor:{value:Ce.bulgeFactor},voronoiScale:{value:new _(Ce.voronoiScaleX,Ce.voronoiScaleY,Ce.voronoiScaleZ)},distortionFactor:{value:Ce.distortionFactor},curvatureRim:{value:Ce.curvatureRim},normalDistance:{value:Ce.normalDistance},noiseScale:{value:Ce.noiseScale},noiseDistort:{value:Ce.noiseDistort},frostFactor:{value:Ce.frostFactor},slopeFactor:{value:Ce.slopeFactor},stripeFrequency:{value:Ce.stripeFrequency},stripeOffset:{value:Ce.stripeOffset},twistX:{value:Ce.twistX},twistY:{value:Ce.twistY},twistZ:{value:Ce.twistZ}},vertexShader:Lv,fragmentShader:Cv});function ct(){let t=JSON.stringify(Ce);localStorage.setItem("baubles",t),window.location.hash=encodeURIComponent(t)}var Na=!0;window.addEventListener("keydown",t=>{t.key===" "&&(Na=!Na)});function bh(){Na&&(vh.group.rotation.y=performance.now()/1e3,dn.render(Vs,Xi),dn.setAnimationLoop(bh))}var wh=new Cn({uniforms:{resolution:{value:new U}},vertexShader:Rv,fragmentShader:Pv,side:tt}),Ov=new Je(new Fi(10,10),wh);Vs.add(Ov);var Ia=new Je(new Fi(1,Ce.sphereDetail),Qe);Vs.add(Ia);async function Bv(){Ma(),bh()}xh(()=>{let t=window.innerWidth,e=window.innerHeight,n=window.devicePixelRatio;wh.uniforms.resolution.value.set(t*n,e*n)});Bv();})();
