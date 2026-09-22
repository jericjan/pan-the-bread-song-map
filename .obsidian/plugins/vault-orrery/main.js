/*
 * Vault Orrery — bundled by esbuild. Do not edit main.js directly.
 * Engine source: vault-orrery-v2.html  ->  scripts/build-engine.mjs
 */

var bm=Object.defineProperty;var tE=Object.getOwnPropertyDescriptor;var nE=Object.getOwnPropertyNames;var iE=Object.prototype.hasOwnProperty;var by=(s,e)=>{for(var t in e)bm(s,t,{get:e[t],enumerable:!0})},rE=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of nE(e))!iE.call(s,i)&&i!==t&&bm(s,i,{get:()=>e[i],enumerable:!(n=tE(e,i))||n.enumerable});return s};var sE=s=>rE(bm({},"__esModule",{value:!0}),s);var rL={};by(rL,{default:()=>$f});module.exports=sE(rL);var cr=require("obsidian");var lr=require("obsidian");var dg={};by(dg,{ACESFilmicToneMapping:()=>dw,AddEquation:()=>so,AddOperation:()=>lw,AdditiveAnimationBlendMode:()=>tg,AdditiveBlending:()=>Vt,AlphaFormat:()=>ww,AlwaysDepth:()=>tw,AlwaysStencilFunc:()=>pb,AmbientLight:()=>Ro,AmbientLightProbe:()=>Cf,AnimationClip:()=>bo,AnimationLoader:()=>S0,AnimationMixer:()=>Ff,AnimationObjectGroup:()=>kf,AnimationUtils:()=>vn,ArcCurve:()=>Wh,ArrayCamera:()=>vh,ArrowHelper:()=>Y0,Audio:()=>tu,AudioAnalyser:()=>Df,AudioContext:()=>og,AudioListener:()=>P0,AudioLoader:()=>Rf,AxesHelper:()=>Wf,AxisHelper:()=>UR,BackSide:()=>xn,BasicDepthPacking:()=>ub,BasicShadowMap:()=>cE,BinaryTextureLoader:()=>XR,Bone:()=>Gl,BooleanKeyframeTrack:()=>Os,BoundingBoxHelper:()=>GR,Box2:()=>Ea,Box3:()=>fi,Box3Helper:()=>q0,BoxBufferGeometry:()=>ma,BoxGeometry:()=>ma,BoxHelper:()=>Vf,BufferAttribute:()=>Xe,BufferGeometry:()=>Qe,BufferGeometryLoader:()=>Sf,ByteType:()=>pw,Cache:()=>_o,Camera:()=>Ps,CameraHelper:()=>W0,CanvasRenderer:()=>jR,CanvasTexture:()=>ar,CatmullRomCurve3:()=>qh,CineonToneMapping:()=>uw,CircleBufferGeometry:()=>go,CircleGeometry:()=>go,ClampToEdgeWrapping:()=>xi,Clock:()=>Pf,Color:()=>Pe,ColorKeyframeTrack:()=>Gh,CompressedTexture:()=>wh,CompressedTextureLoader:()=>T0,ConeBufferGeometry:()=>bh,ConeGeometry:()=>bh,CubeCamera:()=>Hl,CubeReflectionMapping:()=>ru,CubeRefractionMapping:()=>su,CubeTexture:()=>ga,CubeTextureLoader:()=>gf,CubeUVReflectionMapping:()=>$l,CubeUVRefractionMapping:()=>au,CubicBezierCurve:()=>Yl,CubicBezierCurve3:()=>Xh,CubicInterpolant:()=>ff,CullFaceBack:()=>i0,CullFaceFront:()=>Gx,CullFaceFrontBack:()=>lE,CullFaceNone:()=>Ux,Curve:()=>Mi,CurvePath:()=>wf,CustomBlending:()=>qf,CustomToneMapping:()=>fw,CylinderBufferGeometry:()=>vo,CylinderGeometry:()=>vo,Cylindrical:()=>O0,DataTexture:()=>va,DataTexture2DArray:()=>mh,DataTexture3D:()=>gh,DataTextureLoader:()=>vf,DataUtils:()=>j0,DecrementStencilOp:()=>wE,DecrementWrapStencilOp:()=>_E,DefaultLoadingManager:()=>kb,DepthFormat:()=>co,DepthStencilFormat:()=>Dl,DepthTexture:()=>df,DirectionalLight:()=>Ma,DirectionalLightHelper:()=>V0,DiscreteInterpolant:()=>pf,DodecahedronBufferGeometry:()=>_h,DodecahedronGeometry:()=>_h,DoubleSide:()=>ii,DstAlphaFactor:()=>Zx,DstColorFactor:()=>Kx,DynamicBufferAttribute:()=>PR,DynamicCopyUsage:()=>NE,DynamicDrawUsage:()=>Li,DynamicReadUsage:()=>IE,EdgesGeometry:()=>Mh,EdgesHelper:()=>VR,EllipseCurve:()=>Mo,EqualDepth:()=>iw,EqualStencilFunc:()=>TE,EquirectangularReflectionMapping:()=>Zd,EquirectangularRefractionMapping:()=>Jd,Euler:()=>Cr,EventDispatcher:()=>jr,ExtrudeBufferGeometry:()=>Kr,ExtrudeGeometry:()=>Kr,FaceColors:()=>wR,FileLoader:()=>or,FlatShading:()=>$0,Float16BufferAttribute:()=>af,Float32Attribute:()=>BR,Float32BufferAttribute:()=>tt,Float64Attribute:()=>zR,Float64BufferAttribute:()=>of,FloatType:()=>Rs,Fog:()=>yh,FogExp2:()=>po,Font:()=>eu,FontLoader:()=>L0,FrontSide:()=>Jl,Frustum:()=>Ds,GLBufferAttribute:()=>Of,GLSL1:()=>OE,GLSL3:()=>y0,GammaEncoding:()=>jf,GreaterDepth:()=>sw,GreaterEqualDepth:()=>rw,GreaterEqualStencilFunc:()=>CE,GreaterStencilFunc:()=>RE,GridHelper:()=>Gf,Group:()=>Hn,HalfFloatType:()=>fo,HemisphereLight:()=>jh,HemisphereLightHelper:()=>U0,HemisphereLightProbe:()=>Lf,IcosahedronBufferGeometry:()=>mi,IcosahedronGeometry:()=>mi,ImageBitmapLoader:()=>Tf,ImageLoader:()=>Xl,ImageUtils:()=>Cs,ImmediateRenderObject:()=>zf,IncrementStencilOp:()=>xE,IncrementWrapStencilOp:()=>bE,InstancedBufferAttribute:()=>wn,InstancedBufferGeometry:()=>Co,InstancedInterleavedBuffer:()=>Hf,InstancedMesh:()=>sr,Int16Attribute:()=>FR,Int16BufferAttribute:()=>rf,Int32Attribute:()=>HR,Int32BufferAttribute:()=>sf,Int8Attribute:()=>DR,Int8BufferAttribute:()=>ef,IntType:()=>gw,InterleavedBuffer:()=>ks,InterleavedBufferAttribute:()=>ya,Interpolant:()=>Pr,InterpolateDiscrete:()=>hh,InterpolateLinear:()=>uh,InterpolateSmooth:()=>Xd,InvertStencilOp:()=>ME,JSONLoader:()=>ZR,KeepStencilOp:()=>Yd,KeyframeTrack:()=>Wi,LOD:()=>cf,LatheBufferGeometry:()=>Ah,LatheGeometry:()=>Ah,Layers:()=>ph,LensFlare:()=>KR,LessDepth:()=>nw,LessEqualDepth:()=>jd,LessEqualStencilFunc:()=>AE,LessStencilFunc:()=>SE,Light:()=>qi,LightProbe:()=>Lo,Line:()=>_i,Line3:()=>Bf,LineBasicMaterial:()=>un,LineCurve:()=>Eo,LineCurve3:()=>xf,LineDashedMaterial:()=>zh,LineLoop:()=>mo,LinePieces:()=>yR,LineSegments:()=>jn,LineStrip:()=>vR,LinearEncoding:()=>wi,LinearFilter:()=>jt,LinearInterpolant:()=>Uh,LinearMipMapLinearFilter:()=>pE,LinearMipMapNearestFilter:()=>fE,LinearMipmapLinearFilter:()=>Sa,LinearMipmapNearestFilter:()=>eg,LinearToneMapping:()=>cw,Loader:()=>ni,LoaderUtils:()=>Qh,LoadingManager:()=>Vh,LogLuvEncoding:()=>hb,LoopOnce:()=>ab,LoopPingPong:()=>lb,LoopRepeat:()=>ob,LuminanceAlphaFormat:()=>_w,LuminanceFormat:()=>bw,MOUSE:()=>aE,Material:()=>Un,MaterialLoader:()=>Ef,Math:()=>$E,MathUtils:()=>$E,Matrix3:()=>Nn,Matrix4:()=>nt,MaxEquation:()=>o0,Mesh:()=>Et,MeshBasicMaterial:()=>Cn,MeshDepthMaterial:()=>Bl,MeshDistanceMaterial:()=>zl,MeshFaceMaterial:()=>_R,MeshLambertMaterial:()=>Oh,MeshMatcapMaterial:()=>Bh,MeshNormalMaterial:()=>Hh,MeshPhongMaterial:()=>ba,MeshPhysicalMaterial:()=>Fh,MeshStandardMaterial:()=>ql,MeshToonMaterial:()=>Nh,MinEquation:()=>a0,MirroredRepeatWrapping:()=>lh,MixOperation:()=>ow,MultiMaterial:()=>MR,MultiplyBlending:()=>s0,MultiplyOperation:()=>iu,NearestFilter:()=>Rn,NearestMipMapLinearFilter:()=>dE,NearestMipMapNearestFilter:()=>uE,NearestMipmapLinearFilter:()=>$d,NearestMipmapNearestFilter:()=>Kd,NeverDepth:()=>ew,NeverStencilFunc:()=>EE,NoBlending:()=>Ls,NoColors:()=>xR,NoToneMapping:()=>lo,NormalAnimationBlendMode:()=>Yf,NormalBlending:()=>Ll,NotEqualDepth:()=>aw,NotEqualStencilFunc:()=>LE,NumberKeyframeTrack:()=>xo,Object3D:()=>zt,ObjectLoader:()=>R0,ObjectSpaceNormalMap:()=>fb,OctahedronBufferGeometry:()=>Vl,OctahedronGeometry:()=>Vl,OneFactor:()=>nu,OneMinusDstAlphaFactor:()=>Jx,OneMinusDstColorFactor:()=>$x,OneMinusSrcAlphaFactor:()=>Kl,OneMinusSrcColorFactor:()=>jx,OrthographicCamera:()=>Ao,PCFShadowMap:()=>K0,PCFSoftShadowMap:()=>Vx,PMREMGenerator:()=>Z0,ParametricBufferGeometry:()=>Rh,ParametricGeometry:()=>Rh,Particle:()=>SR,ParticleBasicMaterial:()=>RR,ParticleSystem:()=>TR,ParticleSystemMaterial:()=>LR,Path:()=>So,PerspectiveCamera:()=>An,Plane:()=>Gi,PlaneBufferGeometry:()=>Jr,PlaneGeometry:()=>Jr,PlaneHelper:()=>X0,PointCloud:()=>ER,PointCloudMaterial:()=>AR,PointLight:()=>To,PointLightHelper:()=>z0,Points:()=>Ci,PointsMaterial:()=>Fs,PolarGridHelper:()=>G0,PolyhedronBufferGeometry:()=>Ns,PolyhedronGeometry:()=>Ns,PositionalAudio:()=>D0,PropertyBinding:()=>rn,PropertyMixer:()=>If,QuadraticBezierCurve:()=>jl,QuadraticBezierCurve3:()=>Yh,Quaternion:()=>mn,QuaternionKeyframeTrack:()=>_a,QuaternionLinearInterpolant:()=>mf,REVISION:()=>J0,RGBADepthPacking:()=>db,RGBAFormat:()=>oi,RGBAIntegerFormat:()=>Lw,RGBA_ASTC_10x10_Format:()=>Gw,RGBA_ASTC_10x5_Format:()=>Bw,RGBA_ASTC_10x6_Format:()=>zw,RGBA_ASTC_10x8_Format:()=>Uw,RGBA_ASTC_12x10_Format:()=>Vw,RGBA_ASTC_12x12_Format:()=>Ww,RGBA_ASTC_4x4_Format:()=>Pw,RGBA_ASTC_5x4_Format:()=>Dw,RGBA_ASTC_5x5_Format:()=>Iw,RGBA_ASTC_6x5_Format:()=>kw,RGBA_ASTC_6x6_Format:()=>Fw,RGBA_ASTC_8x5_Format:()=>Nw,RGBA_ASTC_8x6_Format:()=>Hw,RGBA_ASTC_8x8_Format:()=>Ow,RGBA_BPTC_Format:()=>qw,RGBA_ETC2_EAC_Format:()=>v0,RGBA_PVRTC_2BPPV1_Format:()=>m0,RGBA_PVRTC_4BPPV1_Format:()=>p0,RGBA_S3TC_DXT1_Format:()=>c0,RGBA_S3TC_DXT3_Format:()=>h0,RGBA_S3TC_DXT5_Format:()=>u0,RGBDEncoding:()=>rg,RGBEEncoding:()=>Zf,RGBEFormat:()=>Mw,RGBFormat:()=>da,RGBIntegerFormat:()=>Rw,RGBM16Encoding:()=>ig,RGBM7Encoding:()=>ng,RGB_ETC1_Format:()=>Cw,RGB_ETC2_Format:()=>g0,RGB_PVRTC_2BPPV1_Format:()=>f0,RGB_PVRTC_4BPPV1_Format:()=>d0,RGB_S3TC_DXT1_Format:()=>l0,RGFormat:()=>Tw,RGIntegerFormat:()=>Aw,RawShaderMaterial:()=>wa,Ray:()=>Zr,Raycaster:()=>F0,RectAreaLight:()=>Kh,RedFormat:()=>Ew,RedIntegerFormat:()=>Sw,ReinhardToneMapping:()=>hw,RepeatWrapping:()=>uo,ReplaceStencilOp:()=>yE,ReverseSubtractEquation:()=>qx,RingBufferGeometry:()=>Pi,RingGeometry:()=>Pi,SRGB8_ALPHA8_ASTC_10x10_Format:()=>ib,SRGB8_ALPHA8_ASTC_10x5_Format:()=>eb,SRGB8_ALPHA8_ASTC_10x6_Format:()=>tb,SRGB8_ALPHA8_ASTC_10x8_Format:()=>nb,SRGB8_ALPHA8_ASTC_12x10_Format:()=>rb,SRGB8_ALPHA8_ASTC_12x12_Format:()=>sb,SRGB8_ALPHA8_ASTC_4x4_Format:()=>Xw,SRGB8_ALPHA8_ASTC_5x4_Format:()=>Yw,SRGB8_ALPHA8_ASTC_5x5_Format:()=>jw,SRGB8_ALPHA8_ASTC_6x5_Format:()=>Zw,SRGB8_ALPHA8_ASTC_6x6_Format:()=>Jw,SRGB8_ALPHA8_ASTC_8x5_Format:()=>Kw,SRGB8_ALPHA8_ASTC_8x6_Format:()=>$w,SRGB8_ALPHA8_ASTC_8x8_Format:()=>Qw,Scene:()=>Is,SceneUtils:()=>JR,ShaderChunk:()=>Ht,ShaderLib:()=>Lr,ShaderMaterial:()=>gn,ShadowMaterial:()=>kh,Shape:()=>Yr,ShapeBufferGeometry:()=>Wl,ShapeGeometry:()=>Wl,ShapePath:()=>Af,ShapeUtils:()=>Xr,ShortType:()=>mw,Skeleton:()=>hf,SkeletonHelper:()=>Uf,SkinnedMesh:()=>Ul,SmoothShading:()=>hE,Sphere:()=>nr,SphereBufferGeometry:()=>Hs,SphereGeometry:()=>Hs,Spherical:()=>H0,SphericalHarmonics3:()=>$h,SplineCurve:()=>Zl,SpotLight:()=>Jh,SpotLightHelper:()=>B0,Sprite:()=>rr,SpriteMaterial:()=>ir,SrcAlphaFactor:()=>Q0,SrcAlphaSaturateFactor:()=>Qx,SrcColorFactor:()=>Yx,StaticCopyUsage:()=>FE,StaticDrawUsage:()=>Il,StaticReadUsage:()=>DE,StereoCamera:()=>C0,StreamCopyUsage:()=>HE,StreamDrawUsage:()=>PE,StreamReadUsage:()=>kE,StringKeyframeTrack:()=>Bs,SubtractEquation:()=>Wx,SubtractiveBlending:()=>r0,TOUCH:()=>oE,TangentSpaceNormalMap:()=>Po,TetrahedronBufferGeometry:()=>yo,TetrahedronGeometry:()=>yo,TextBufferGeometry:()=>Lh,TextGeometry:()=>Lh,Texture:()=>ti,TextureLoader:()=>yf,TorusBufferGeometry:()=>Ch,TorusGeometry:()=>Ch,TorusKnotBufferGeometry:()=>Ph,TorusKnotGeometry:()=>Ph,Triangle:()=>li,TriangleFanDrawMode:()=>gE,TriangleStripDrawMode:()=>mE,TrianglesDrawMode:()=>cb,TubeBufferGeometry:()=>Dh,TubeGeometry:()=>Dh,UVMapping:()=>Xf,Uint16Attribute:()=>NR,Uint16BufferAttribute:()=>kl,Uint32Attribute:()=>OR,Uint32BufferAttribute:()=>Fl,Uint8Attribute:()=>IR,Uint8BufferAttribute:()=>tf,Uint8ClampedAttribute:()=>kR,Uint8ClampedBufferAttribute:()=>nf,Uniform:()=>Nf,UniformsLib:()=>qe,UniformsUtils:()=>xb,UnsignedByteType:()=>Ta,UnsignedInt248Type:()=>Cl,UnsignedIntType:()=>ih,UnsignedShort4444Type:()=>vw,UnsignedShort5551Type:()=>yw,UnsignedShort565Type:()=>xw,UnsignedShortType:()=>ch,VSMShadowMap:()=>Al,Vector2:()=>_e,Vector3:()=>L,Vector4:()=>Pt,VectorKeyframeTrack:()=>wo,Vertex:()=>CR,VertexColors:()=>bR,VideoTexture:()=>uf,WebGL1Renderer:()=>lf,WebGLCubeRenderTarget:()=>Ol,WebGLMultisampleRenderTarget:()=>Qd,WebGLRenderTarget:()=>Ln,WebGLRenderTargetCube:()=>YR,WebGLRenderer:()=>Qt,WebGLUtils:()=>Lb,WireframeGeometry:()=>Ih,WireframeHelper:()=>WR,WrapAroundEnding:()=>dh,XHRLoader:()=>qR,ZeroCurvatureEnding:()=>ao,ZeroFactor:()=>Xx,ZeroSlopeEnding:()=>oo,ZeroStencilOp:()=>vE,sRGBEncoding:()=>Aa});var J0="128",aE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},oE={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ux=0,i0=1,Gx=2,lE=3,cE=0,K0=1,Vx=2,Al=3,Jl=0,xn=1,ii=2,$0=1,hE=2,Ls=0,Ll=1,Vt=2,r0=3,s0=4,qf=5,so=100,Wx=101,qx=102,a0=103,o0=104,Xx=200,nu=201,Yx=202,jx=203,Q0=204,Kl=205,Zx=206,Jx=207,Kx=208,$x=209,Qx=210,ew=0,tw=1,nw=2,jd=3,iw=4,rw=5,sw=6,aw=7,iu=0,ow=1,lw=2,lo=0,cw=1,hw=2,uw=3,dw=4,fw=5,Xf=300,ru=301,su=302,Zd=303,Jd=304,$l=306,au=307,uo=1e3,xi=1001,lh=1002,Rn=1003,Kd=1004,uE=1004,$d=1005,dE=1005,jt=1006,eg=1007,fE=1007,Sa=1008,pE=1008,Ta=1009,pw=1010,mw=1011,ch=1012,gw=1013,ih=1014,Rs=1015,fo=1016,vw=1017,yw=1018,xw=1019,Cl=1020,ww=1021,da=1022,oi=1023,bw=1024,_w=1025,Mw=oi,co=1026,Dl=1027,Ew=1028,Sw=1029,Tw=1030,Aw=1031,Rw=1032,Lw=1033,l0=33776,c0=33777,h0=33778,u0=33779,d0=35840,f0=35841,p0=35842,m0=35843,Cw=36196,g0=37492,v0=37496,Pw=37808,Dw=37809,Iw=37810,kw=37811,Fw=37812,Nw=37813,Hw=37814,Ow=37815,Bw=37816,zw=37817,Uw=37818,Gw=37819,Vw=37820,Ww=37821,qw=36492,Xw=37840,Yw=37841,jw=37842,Zw=37843,Jw=37844,Kw=37845,$w=37846,Qw=37847,eb=37848,tb=37849,nb=37850,ib=37851,rb=37852,sb=37853,ab=2200,ob=2201,lb=2202,hh=2300,uh=2301,Xd=2302,ao=2400,oo=2401,dh=2402,Yf=2500,tg=2501,cb=0,mE=1,gE=2,wi=3e3,Aa=3001,jf=3007,Zf=3002,hb=3003,ng=3004,ig=3005,rg=3006,ub=3200,db=3201,Po=0,fb=1,vE=0,Yd=7680,yE=7681,xE=7682,wE=7683,bE=34055,_E=34056,ME=5386,EE=512,SE=513,TE=514,AE=515,RE=516,LE=517,CE=518,pb=519,Il=35044,Li=35048,PE=35040,DE=35045,IE=35049,kE=35041,FE=35046,NE=35050,HE=35042,OE="100",y0="300 es",jr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},si=[];for(let s=0;s<256;s++)si[s]=(s<16?"0":"")+s.toString(16);var sd=1234567,ho=Math.PI/180,fh=180/Math.PI;function Vi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(si[s&255]+si[s>>8&255]+si[s>>16&255]+si[s>>24&255]+"-"+si[e&255]+si[e>>8&255]+"-"+si[e>>16&15|64]+si[e>>24&255]+"-"+si[t&63|128]+si[t>>8&255]+"-"+si[t>>16&255]+si[t>>24&255]+si[n&255]+si[n>>8&255]+si[n>>16&255]+si[n>>24&255]).toUpperCase()}function ai(s,e,t){return Math.max(e,Math.min(t,s))}function sg(s,e){return(s%e+e)%e}function BE(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function zE(s,e,t){return s!==e?(t-s)/(e-s):0}function rh(s,e,t){return(1-t)*s+t*e}function UE(s,e,t,n){return rh(s,e,1-Math.exp(-t*n))}function GE(s,e=1){return e-Math.abs(sg(s,e*2)-e)}function VE(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function WE(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function qE(s,e){return s+Math.floor(Math.random()*(e-s+1))}function XE(s,e){return s+Math.random()*(e-s)}function YE(s){return s*(.5-Math.random())}function jE(s){return s!==void 0&&(sd=s%2147483647),sd=sd*16807%2147483647,(sd-1)/2147483646}function ZE(s){return s*ho}function JE(s){return s*fh}function x0(s){return(s&s-1)===0&&s!==0}function mb(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function gb(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function KE(s,e,t,n,i){let r=Math.cos,a=Math.sin,l=r(t/2),h=a(t/2),c=r((e+n)/2),p=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),g=r((n-e)/2),v=a((n-e)/2);switch(i){case"XYX":s.set(l*p,h*u,h*f,l*c);break;case"YZY":s.set(h*f,l*p,h*u,l*c);break;case"ZXZ":s.set(h*u,h*f,l*p,l*c);break;case"XZX":s.set(l*p,h*v,h*g,l*c);break;case"YXY":s.set(h*g,l*p,h*v,l*c);break;case"ZYZ":s.set(h*v,h*g,l*p,l*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}var $E=Object.freeze({__proto__:null,DEG2RAD:ho,RAD2DEG:fh,generateUUID:Vi,clamp:ai,euclideanModulo:sg,mapLinear:BE,inverseLerp:zE,lerp:rh,damp:UE,pingpong:GE,smoothstep:VE,smootherstep:WE,randInt:qE,randFloat:XE,randFloatSpread:YE,seededRandom:jE,degToRad:ZE,radToDeg:JE,isPowerOfTwo:x0,ceilPowerOfTwo:mb,floorPowerOfTwo:gb,setQuaternionFromProperEuler:KE}),_e=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}};_e.prototype.isVector2=!0;var Nn=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,l,h,c){let p=this.elements;return p[0]=e,p[1]=i,p[2]=l,p[3]=t,p[4]=r,p[5]=h,p[6]=n,p[7]=a,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],l=n[3],h=n[6],c=n[1],p=n[4],u=n[7],f=n[2],g=n[5],v=n[8],M=i[0],S=i[3],b=i[6],x=i[1],A=i[4],F=i[7],z=i[2],C=i[5],W=i[8];return r[0]=a*M+l*x+h*z,r[3]=a*S+l*A+h*C,r[6]=a*b+l*F+h*W,r[1]=c*M+p*x+u*z,r[4]=c*S+p*A+u*C,r[7]=c*b+p*F+u*W,r[2]=f*M+g*x+v*z,r[5]=f*S+g*A+v*C,r[8]=f*b+g*F+v*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],l=e[5],h=e[6],c=e[7],p=e[8];return t*a*p-t*l*c-n*r*p+n*l*h+i*r*c-i*a*h}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],l=e[5],h=e[6],c=e[7],p=e[8],u=p*a-l*c,f=l*h-p*r,g=c*r-a*h,v=t*u+n*f+i*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/v;return e[0]=u*M,e[1]=(i*c-p*n)*M,e[2]=(l*n-i*a)*M,e[3]=f*M,e[4]=(p*t-i*h)*M,e[5]=(i*r-l*t)*M,e[6]=g*M,e[7]=(n*h-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,l){let h=Math.cos(r),c=Math.sin(r);return this.set(n*h,n*c,-n*(h*a+c*l)+a+e,-i*c,i*h,-i*(-c*a+h*l)+l+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],a=i[3],l=i[6],h=i[1],c=i[4],p=i[7];return i[0]=t*r+n*h,i[3]=t*a+n*c,i[6]=t*l+n*p,i[1]=-n*r+t*h,i[4]=-n*a+t*c,i[7]=-n*l+t*p,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nn.prototype.isMatrix3=!0;var ll,Cs=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ll===void 0&&(ll=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),ll.width=e.width,ll.height=e.height;let n=ll.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ll}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}},QE=0,ti=class s extends jr{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=xi,i=xi,r=jt,a=Sa,l=oi,h=Ta,c=1,p=wi){super(),Object.defineProperty(this,"id",{value:QE++}),this.uuid=Vi(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=h,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=p,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let i=this.image;if(i.uuid===void 0&&(i.uuid=Vi()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let a=0,l=i.length;a<l;a++)i[a].isDataTexture?r.push(_m(i[a].image)):r.push(_m(i[a]))}else r=_m(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uo:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uo:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};ti.DEFAULT_IMAGE=void 0;ti.DEFAULT_MAPPING=Xf;ti.prototype.isTexture=!0;function _m(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Cs.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Pt=class{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,h=e.elements,c=h[0],p=h[4],u=h[8],f=h[1],g=h[5],v=h[9],M=h[2],S=h[6],b=h[10];if(Math.abs(p-f)<.01&&Math.abs(u-M)<.01&&Math.abs(v-S)<.01){if(Math.abs(p+f)<.1&&Math.abs(u+M)<.1&&Math.abs(v+S)<.1&&Math.abs(c+g+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,F=(g+1)/2,z=(b+1)/2,C=(p+f)/4,W=(u+M)/4,q=(v+S)/4;return A>F&&A>z?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=C/n,r=W/n):F>z?F<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(F),n=C/i,r=q/i):z<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(z),n=W/r,i=q/r),this.set(n,i,r,t),this}let x=Math.sqrt((S-v)*(S-v)+(u-M)*(u-M)+(f-p)*(f-p));return Math.abs(x)<.001&&(x=1),this.x=(S-v)/x,this.y=(u-M)/x,this.z=(f-p)/x,this.w=Math.acos((c+g+b-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}};Pt.prototype.isVector4=!0;var Ln=class extends jr{constructor(e,t,n){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),n=n||{},this.texture=new ti(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:jt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};Ln.prototype.isWebGLRenderTarget=!0;var Qd=class extends Ln{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}};Qd.prototype.isWebGLMultisampleRenderTarget=!0;var mn=class{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,a,l){let h=n[i+0],c=n[i+1],p=n[i+2],u=n[i+3],f=r[a+0],g=r[a+1],v=r[a+2],M=r[a+3];if(l===0){e[t+0]=h,e[t+1]=c,e[t+2]=p,e[t+3]=u;return}if(l===1){e[t+0]=f,e[t+1]=g,e[t+2]=v,e[t+3]=M;return}if(u!==M||h!==f||c!==g||p!==v){let S=1-l,b=h*f+c*g+p*v+u*M,x=b>=0?1:-1,A=1-b*b;if(A>Number.EPSILON){let z=Math.sqrt(A),C=Math.atan2(z,b*x);S=Math.sin(S*C)/z,l=Math.sin(l*C)/z}let F=l*x;if(h=h*S+f*F,c=c*S+g*F,p=p*S+v*F,u=u*S+M*F,S===1-l){let z=1/Math.sqrt(h*h+c*c+p*p+u*u);h*=z,c*=z,p*=z,u*=z}}e[t]=h,e[t+1]=c,e[t+2]=p,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let l=n[i],h=n[i+1],c=n[i+2],p=n[i+3],u=r[a],f=r[a+1],g=r[a+2],v=r[a+3];return e[t]=l*v+p*u+h*g-c*f,e[t+1]=h*v+p*f+c*u-l*g,e[t+2]=c*v+p*g+l*f-h*u,e[t+3]=p*v-l*u-h*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=e._x,i=e._y,r=e._z,a=e._order,l=Math.cos,h=Math.sin,c=l(n/2),p=l(i/2),u=l(r/2),f=h(n/2),g=h(i/2),v=h(r/2);switch(a){case"XYZ":this._x=f*p*u+c*g*v,this._y=c*g*u-f*p*v,this._z=c*p*v+f*g*u,this._w=c*p*u-f*g*v;break;case"YXZ":this._x=f*p*u+c*g*v,this._y=c*g*u-f*p*v,this._z=c*p*v-f*g*u,this._w=c*p*u+f*g*v;break;case"ZXY":this._x=f*p*u-c*g*v,this._y=c*g*u+f*p*v,this._z=c*p*v+f*g*u,this._w=c*p*u-f*g*v;break;case"ZYX":this._x=f*p*u-c*g*v,this._y=c*g*u+f*p*v,this._z=c*p*v-f*g*u,this._w=c*p*u+f*g*v;break;case"YZX":this._x=f*p*u+c*g*v,this._y=c*g*u+f*p*v,this._z=c*p*v-f*g*u,this._w=c*p*u-f*g*v;break;case"XZY":this._x=f*p*u-c*g*v,this._y=c*g*u-f*p*v,this._z=c*p*v+f*g*u,this._w=c*p*u+f*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],l=t[5],h=t[9],c=t[2],p=t[6],u=t[10],f=n+l+u;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(p-h)*g,this._y=(r-c)*g,this._z=(a-i)*g}else if(n>l&&n>u){let g=2*Math.sqrt(1+n-l-u);this._w=(p-h)/g,this._x=.25*g,this._y=(i+a)/g,this._z=(r+c)/g}else if(l>u){let g=2*Math.sqrt(1+l-n-u);this._w=(r-c)/g,this._x=(i+a)/g,this._y=.25*g,this._z=(h+p)/g}else{let g=2*Math.sqrt(1+u-n-l);this._w=(a-i)/g,this._x=(r+c)/g,this._y=(h+p)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ai(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,l=t._x,h=t._y,c=t._z,p=t._w;return this._x=n*p+a*l+i*c-r*h,this._y=i*p+a*h+r*l-n*c,this._z=r*p+a*c+n*h-i*l,this._w=a*p-n*l-i*h-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,l=a*e._w+n*e._x+i*e._y+r*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let h=1-l*l;if(h<=Number.EPSILON){let g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*r+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(h),p=Math.atan2(c,l),u=Math.sin((1-t)*p)/c,f=Math.sin(t*p)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};mn.prototype.isQuaternion=!0;var L=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(_y.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_y.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,l=e.z,h=e.w,c=h*t+a*i-l*n,p=h*n+l*t-r*i,u=h*i+r*n-a*t,f=-r*t-a*n-l*i;return this.x=c*h+f*-r+p*-l-u*-a,this.y=p*h+f*-a+u*-r-c*-l,this.z=u*h+f*-l+c*-a-p*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,l=t.y,h=t.z;return this.x=i*h-r*l,this.y=r*a-n*h,this.z=n*l-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mm.copy(this).projectOnVector(e),this.sub(Mm)}reflect(e){return this.sub(Mm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ai(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}};L.prototype.isVector3=!0;var Mm=new L,_y=new mn,fi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,l=-1/0;for(let h=0,c=e.length;h<c;h+=3){let p=e[h],u=e[h+1],f=e[h+2];p<t&&(t=p),u<n&&(n=u),f<i&&(i=f),p>r&&(r=p),u>a&&(a=u),f>l&&(l=f)}return this.min.set(t,n,i),this.max.set(r,a,l),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,l=-1/0;for(let h=0,c=e.count;h<c;h++){let p=e.getX(h),u=e.getY(h),f=e.getZ(h);p<t&&(t=p),u<n&&(n=u),f<i&&(i=f),p>r&&(r=p),u>a&&(a=u),f>l&&(l=f)}return this.min.set(t,n,i),this.max.set(r,a,l),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new L),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new L),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Em.copy(t.boundingBox),Em.applyMatrix4(e.matrixWorld),this.union(Em));let n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new L),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wc),Wc.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qc),ad.subVectors(this.max,qc),cl.subVectors(e.a,qc),hl.subVectors(e.b,qc),ul.subVectors(e.c,qc),ra.subVectors(hl,cl),sa.subVectors(ul,hl),Ka.subVectors(cl,ul);let t=[0,-ra.z,ra.y,0,-sa.z,sa.y,0,-Ka.z,Ka.y,ra.z,0,-ra.x,sa.z,0,-sa.x,Ka.z,0,-Ka.x,-ra.y,ra.x,0,-sa.y,sa.x,0,-Ka.y,Ka.x,0];return!Sm(t,cl,hl,ul,ad)||(t=[1,0,0,0,1,0,0,0,1],!Sm(t,cl,hl,ul,ad))?!1:(od.crossVectors(ra,sa),t=[od.x,od.y,od.z],Sm(t,cl,hl,ul,ad))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new L),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Wc.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(Wc).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ms),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};fi.prototype.isBox3=!0;var Ms=[new L,new L,new L,new L,new L,new L,new L,new L],Wc=new L,Em=new fi,cl=new L,hl=new L,ul=new L,ra=new L,sa=new L,Ka=new L,qc=new L,ad=new L,od=new L,$a=new L;function Sm(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){$a.fromArray(s,r);let l=i.x*Math.abs($a.x)+i.y*Math.abs($a.y)+i.z*Math.abs($a.z),h=e.dot($a),c=t.dot($a),p=n.dot($a);if(Math.max(-Math.max(h,c,p),Math.min(h,c,p))>l)return!1}return!0}var eS=new fi,My=new L,Tm=new L,Am=new L,nr=class{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):eS.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new L),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new fi),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Am.subVectors(e,this.center);let t=Am.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Am.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return Tm.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(My.copy(e.center).add(Tm)),this.expandByPoint(My.copy(e.center).sub(Tm)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Es=new L,Rm=new L,ld=new L,aa=new L,Lm=new L,cd=new L,Cm=new L,Zr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new L),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Es)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new L),t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Es.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Es.copy(this.direction).multiplyScalar(t).add(this.origin),Es.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Rm.copy(e).add(t).multiplyScalar(.5),ld.copy(t).sub(e).normalize(),aa.copy(this.origin).sub(Rm);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ld),l=aa.dot(this.direction),h=-aa.dot(ld),c=aa.lengthSq(),p=Math.abs(1-a*a),u,f,g,v;if(p>0)if(u=a*h-l,f=a*l-h,v=r*p,u>=0)if(f>=-v)if(f<=v){let M=1/p;u*=M,f*=M,g=u*(u+a*f+2*l)+f*(a*u+f+2*h)+c}else f=r,u=Math.max(0,-(a*f+l)),g=-u*u+f*(f+2*h)+c;else f=-r,u=Math.max(0,-(a*f+l)),g=-u*u+f*(f+2*h)+c;else f<=-v?(u=Math.max(0,-(-a*r+l)),f=u>0?-r:Math.min(Math.max(-r,-h),r),g=-u*u+f*(f+2*h)+c):f<=v?(u=0,f=Math.min(Math.max(-r,-h),r),g=f*(f+2*h)+c):(u=Math.max(0,-(a*r+l)),f=u>0?r:Math.min(Math.max(-r,-h),r),g=-u*u+f*(f+2*h)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+l)),g=-u*u+f*(f+2*h)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(ld).multiplyScalar(f).add(Rm),g}intersectSphere(e,t){Es.subVectors(e.center,this.origin);let n=Es.dot(this.direction),i=Es.dot(Es)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),l=n-a,h=n+a;return l<0&&h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,l,h,c=1/this.direction.x,p=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),p>=0?(r=(e.min.y-f.y)*p,a=(e.max.y-f.y)*p):(r=(e.max.y-f.y)*p,a=(e.min.y-f.y)*p),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),u>=0?(l=(e.min.z-f.z)*u,h=(e.max.z-f.z)*u):(l=(e.max.z-f.z)*u,h=(e.min.z-f.z)*u),n>h||l>i)||((l>n||n!==n)&&(n=l),(h<i||i!==i)&&(i=h),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Es)!==null}intersectTriangle(e,t,n,i,r){Lm.subVectors(t,e),cd.subVectors(n,e),Cm.crossVectors(Lm,cd);let a=this.direction.dot(Cm),l;if(a>0){if(i)return null;l=1}else if(a<0)l=-1,a=-a;else return null;aa.subVectors(this.origin,e);let h=l*this.direction.dot(cd.crossVectors(aa,cd));if(h<0)return null;let c=l*this.direction.dot(Lm.cross(aa));if(c<0||h+c>a)return null;let p=-l*aa.dot(Cm);return p<0?null:this.at(p/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class s{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,l,h,c,p,u,f,g,v,M,S){let b=this.elements;return b[0]=e,b[4]=t,b[8]=n,b[12]=i,b[1]=r,b[5]=a,b[9]=l,b[13]=h,b[2]=c,b[6]=p,b[10]=u,b[14]=f,b[3]=g,b[7]=v,b[11]=M,b[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/dl.setFromMatrixColumn(e,0).length(),r=1/dl.setFromMatrixColumn(e,1).length(),a=1/dl.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),l=Math.sin(n),h=Math.cos(i),c=Math.sin(i),p=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*p,g=a*u,v=l*p,M=l*u;t[0]=h*p,t[4]=-h*u,t[8]=c,t[1]=g+v*c,t[5]=f-M*c,t[9]=-l*h,t[2]=M-f*c,t[6]=v+g*c,t[10]=a*h}else if(e.order==="YXZ"){let f=h*p,g=h*u,v=c*p,M=c*u;t[0]=f+M*l,t[4]=v*l-g,t[8]=a*c,t[1]=a*u,t[5]=a*p,t[9]=-l,t[2]=g*l-v,t[6]=M+f*l,t[10]=a*h}else if(e.order==="ZXY"){let f=h*p,g=h*u,v=c*p,M=c*u;t[0]=f-M*l,t[4]=-a*u,t[8]=v+g*l,t[1]=g+v*l,t[5]=a*p,t[9]=M-f*l,t[2]=-a*c,t[6]=l,t[10]=a*h}else if(e.order==="ZYX"){let f=a*p,g=a*u,v=l*p,M=l*u;t[0]=h*p,t[4]=v*c-g,t[8]=f*c+M,t[1]=h*u,t[5]=M*c+f,t[9]=g*c-v,t[2]=-c,t[6]=l*h,t[10]=a*h}else if(e.order==="YZX"){let f=a*h,g=a*c,v=l*h,M=l*c;t[0]=h*p,t[4]=M-f*u,t[8]=v*u+g,t[1]=u,t[5]=a*p,t[9]=-l*p,t[2]=-c*p,t[6]=g*u+v,t[10]=f-M*u}else if(e.order==="XZY"){let f=a*h,g=a*c,v=l*h,M=l*c;t[0]=h*p,t[4]=-u,t[8]=c*p,t[1]=f*u+M,t[5]=a*p,t[9]=g*u-v,t[2]=v*u-g,t[6]=l*p,t[10]=M*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tS,e,nS)}lookAt(e,t,n){let i=this.elements;return zi.subVectors(e,t),zi.lengthSq()===0&&(zi.z=1),zi.normalize(),oa.crossVectors(n,zi),oa.lengthSq()===0&&(Math.abs(n.z)===1?zi.x+=1e-4:zi.z+=1e-4,zi.normalize(),oa.crossVectors(n,zi)),oa.normalize(),hd.crossVectors(zi,oa),i[0]=oa.x,i[4]=hd.x,i[8]=zi.x,i[1]=oa.y,i[5]=hd.y,i[9]=zi.y,i[2]=oa.z,i[6]=hd.z,i[10]=zi.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],l=n[4],h=n[8],c=n[12],p=n[1],u=n[5],f=n[9],g=n[13],v=n[2],M=n[6],S=n[10],b=n[14],x=n[3],A=n[7],F=n[11],z=n[15],C=i[0],W=i[4],q=i[8],ee=i[12],ae=i[1],we=i[5],he=i[9],Z=i[13],te=i[2],ie=i[6],Y=i[10],Le=i[14],Be=i[3],Oe=i[7],Ke=i[11],ze=i[15];return r[0]=a*C+l*ae+h*te+c*Be,r[4]=a*W+l*we+h*ie+c*Oe,r[8]=a*q+l*he+h*Y+c*Ke,r[12]=a*ee+l*Z+h*Le+c*ze,r[1]=p*C+u*ae+f*te+g*Be,r[5]=p*W+u*we+f*ie+g*Oe,r[9]=p*q+u*he+f*Y+g*Ke,r[13]=p*ee+u*Z+f*Le+g*ze,r[2]=v*C+M*ae+S*te+b*Be,r[6]=v*W+M*we+S*ie+b*Oe,r[10]=v*q+M*he+S*Y+b*Ke,r[14]=v*ee+M*Z+S*Le+b*ze,r[3]=x*C+A*ae+F*te+z*Be,r[7]=x*W+A*we+F*ie+z*Oe,r[11]=x*q+A*he+F*Y+z*Ke,r[15]=x*ee+A*Z+F*Le+z*ze,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],l=e[5],h=e[9],c=e[13],p=e[2],u=e[6],f=e[10],g=e[14],v=e[3],M=e[7],S=e[11],b=e[15];return v*(+r*h*u-i*c*u-r*l*f+n*c*f+i*l*g-n*h*g)+M*(+t*h*g-t*c*f+r*a*f-i*a*g+i*c*p-r*h*p)+S*(+t*c*u-t*l*g-r*a*u+n*a*g+r*l*p-n*c*p)+b*(-i*l*p-t*h*u+t*l*f+i*a*u-n*a*f+n*h*p)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],l=e[5],h=e[6],c=e[7],p=e[8],u=e[9],f=e[10],g=e[11],v=e[12],M=e[13],S=e[14],b=e[15],x=u*S*c-M*f*c+M*h*g-l*S*g-u*h*b+l*f*b,A=v*f*c-p*S*c-v*h*g+a*S*g+p*h*b-a*f*b,F=p*M*c-v*u*c+v*l*g-a*M*g-p*l*b+a*u*b,z=v*u*h-p*M*h-v*l*f+a*M*f+p*l*S-a*u*S,C=t*x+n*A+i*F+r*z;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/C;return e[0]=x*W,e[1]=(M*f*r-u*S*r-M*i*g+n*S*g+u*i*b-n*f*b)*W,e[2]=(l*S*r-M*h*r+M*i*c-n*S*c-l*i*b+n*h*b)*W,e[3]=(u*h*r-l*f*r-u*i*c+n*f*c+l*i*g-n*h*g)*W,e[4]=A*W,e[5]=(p*S*r-v*f*r+v*i*g-t*S*g-p*i*b+t*f*b)*W,e[6]=(v*h*r-a*S*r-v*i*c+t*S*c+a*i*b-t*h*b)*W,e[7]=(a*f*r-p*h*r+p*i*c-t*f*c-a*i*g+t*h*g)*W,e[8]=F*W,e[9]=(v*u*r-p*M*r-v*n*g+t*M*g+p*n*b-t*u*b)*W,e[10]=(a*M*r-v*l*r+v*n*c-t*M*c-a*n*b+t*l*b)*W,e[11]=(p*l*r-a*u*r-p*n*c+t*u*c+a*n*g-t*l*g)*W,e[12]=z*W,e[13]=(p*M*i-v*u*i+v*n*f-t*M*f-p*n*S+t*u*S)*W,e[14]=(v*l*i-a*M*i-v*n*h+t*M*h+a*n*S-t*l*S)*W,e[15]=(a*u*i-p*l*i+p*n*h-t*u*h-a*n*f+t*l*f)*W,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,l=e.y,h=e.z,c=r*a,p=r*l;return this.set(c*a+n,c*l-i*h,c*h+i*l,0,c*l+i*h,p*l+n,p*h-i*a,0,c*h-i*l,p*h+i*a,r*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,l=t._z,h=t._w,c=r+r,p=a+a,u=l+l,f=r*c,g=r*p,v=r*u,M=a*p,S=a*u,b=l*u,x=h*c,A=h*p,F=h*u,z=n.x,C=n.y,W=n.z;return i[0]=(1-(M+b))*z,i[1]=(g+F)*z,i[2]=(v-A)*z,i[3]=0,i[4]=(g-F)*C,i[5]=(1-(f+b))*C,i[6]=(S+x)*C,i[7]=0,i[8]=(v+A)*W,i[9]=(S-x)*W,i[10]=(1-(f+M))*W,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=dl.set(i[0],i[1],i[2]).length(),a=dl.set(i[4],i[5],i[6]).length(),l=dl.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Sr.copy(this);let c=1/r,p=1/a,u=1/l;return Sr.elements[0]*=c,Sr.elements[1]*=c,Sr.elements[2]*=c,Sr.elements[4]*=p,Sr.elements[5]*=p,Sr.elements[6]*=p,Sr.elements[8]*=u,Sr.elements[9]*=u,Sr.elements[10]*=u,t.setFromRotationMatrix(Sr),n.x=r,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let l=this.elements,h=2*r/(t-e),c=2*r/(n-i),p=(t+e)/(t-e),u=(n+i)/(n-i),f=-(a+r)/(a-r),g=-2*a*r/(a-r);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=c,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a){let l=this.elements,h=1/(t-e),c=1/(n-i),p=1/(a-r),u=(t+e)*h,f=(n+i)*c,g=(a+r)*p;return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=-2*p,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};nt.prototype.isMatrix4=!0;var dl=new L,Sr=new nt,tS=new L(0,0,0),nS=new L(1,1,1),oa=new L,hd=new L,zi=new L,Ey=new nt,Sy=new mn,Cr=class s{constructor(e=0,t=0,n=0,i=s.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,n){let i=e.elements,r=i[0],a=i[4],l=i[8],h=i[1],c=i[5],p=i[9],u=i[2],f=i[6],g=i[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(ai(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ai(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ai(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-ai(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ai(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-ai(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-p,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ey.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ey,t,n)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return Sy.setFromEuler(this),this.setFromQuaternion(Sy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new L(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};Cr.prototype.isEuler=!0;Cr.DefaultOrder="XYZ";Cr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var ph=class{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}},iS=0,Ty=new L,fl=new mn,Ss=new nt,ud=new L,Xc=new L,rS=new L,sS=new mn,Ay=new L(1,0,0),Ry=new L(0,1,0),Ly=new L(0,0,1),aS={type:"added"},Cy={type:"removed"},zt=class s extends jr{constructor(){super(),Object.defineProperty(this,"id",{value:iS++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DefaultUp.clone();let e=new L,t=new Cr,n=new mn,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new Nn}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=s.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fl.setFromAxisAngle(e,t),this.quaternion.multiply(fl),this}rotateOnWorldAxis(e,t){return fl.setFromAxisAngle(e,t),this.quaternion.premultiply(fl),this}rotateX(e){return this.rotateOnAxis(Ay,e)}rotateY(e){return this.rotateOnAxis(Ry,e)}rotateZ(e){return this.rotateOnAxis(Ly,e)}translateOnAxis(e,t){return Ty.copy(e).applyQuaternion(this.quaternion),this.position.add(Ty.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ay,e)}translateY(e){return this.translateOnAxis(Ry,e)}translateZ(e){return this.translateOnAxis(Ly,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Ss.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ud.copy(e):ud.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Xc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ss.lookAt(Xc,ud,this.up):Ss.lookAt(ud,Xc,this.up),this.quaternion.setFromRotationMatrix(Ss),i&&(Ss.extractRotation(i.matrixWorld),fl.setFromRotationMatrix(Ss),this.quaternion.premultiply(fl.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(aS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cy)),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Cy)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ss.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ss.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ss),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new L),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new mn),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xc,e,rS),e}getWorldScale(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new L),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xc,sS,e),e}getWorldDirection(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new L),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let h=l.shapes;if(Array.isArray(h))for(let c=0,p=h.length;c<p;c++){let u=h[c];r(e.shapes,u)}else r(e.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let h=0,c=this.material.length;h<c;h++)l.push(r(e.materials,this.material[h]));i.material=l}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){let h=this.animations[l];i.animations.push(r(e.animations,h))}}if(t){let l=a(e.geometries),h=a(e.materials),c=a(e.textures),p=a(e.images),u=a(e.shapes),f=a(e.skeletons),g=a(e.animations);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),p.length>0&&(n.images=p),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g)}return n.object=i,n;function a(l){let h=[];for(let c in l){let p=l[c];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};zt.DefaultUp=new L(0,1,0);zt.DefaultMatrixAutoUpdate=!0;zt.prototype.isObject3D=!0;var Pm=new L,oS=new L,lS=new Nn,Gi=class{constructor(e=new L(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Pm.subVectors(n,t).cross(oS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new L),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new L);let n=e.delta(Pm),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new L),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||lS.getNormalMatrix(e),i=this.coplanarPoint(Pm).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};Gi.prototype.isPlane=!0;var Tr=new L,Ts=new L,Dm=new L,As=new L,pl=new L,ml=new L,Py=new L,Im=new L,km=new L,Fm=new L,li=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new L),i.subVectors(n,t),Tr.subVectors(e,t),i.cross(Tr);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Tr.subVectors(i,t),Ts.subVectors(n,t),Dm.subVectors(e,t);let a=Tr.dot(Tr),l=Tr.dot(Ts),h=Tr.dot(Dm),c=Ts.dot(Ts),p=Ts.dot(Dm),u=a*c-l*l;if(r===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),r=new L),u===0)return r.set(-2,-1,-1);let f=1/u,g=(c*h-l*p)*f,v=(a*p-l*h)*f;return r.set(1-g-v,v,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,As),As.x>=0&&As.y>=0&&As.x+As.y<=1}static getUV(e,t,n,i,r,a,l,h){return this.getBarycoord(e,t,n,i,As),h.set(0,0),h.addScaledVector(r,As.x),h.addScaledVector(a,As.y),h.addScaledVector(l,As.z),h}static isFrontFacing(e,t,n,i){return Tr.subVectors(n,t),Ts.subVectors(e,t),Tr.cross(Ts).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tr.subVectors(this.c,this.b),Ts.subVectors(this.a,this.b),Tr.cross(Ts).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new L),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Gi),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return s.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new L);let n=this.a,i=this.b,r=this.c,a,l;pl.subVectors(i,n),ml.subVectors(r,n),Im.subVectors(e,n);let h=pl.dot(Im),c=ml.dot(Im);if(h<=0&&c<=0)return t.copy(n);km.subVectors(e,i);let p=pl.dot(km),u=ml.dot(km);if(p>=0&&u<=p)return t.copy(i);let f=h*u-p*c;if(f<=0&&h>=0&&p<=0)return a=h/(h-p),t.copy(n).addScaledVector(pl,a);Fm.subVectors(e,r);let g=pl.dot(Fm),v=ml.dot(Fm);if(v>=0&&g<=v)return t.copy(r);let M=g*c-h*v;if(M<=0&&c>=0&&v<=0)return l=c/(c-v),t.copy(n).addScaledVector(ml,l);let S=p*v-g*u;if(S<=0&&u-p>=0&&g-v>=0)return Py.subVectors(r,i),l=(u-p)/(u-p+(g-v)),t.copy(i).addScaledVector(Py,l);let b=1/(S+M+f);return a=M*b,l=f*b,t.copy(n).addScaledVector(pl,a).addScaledVector(ml,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cS=0;function Un(){Object.defineProperty(this,"id",{value:cS++}),this.uuid=Vi(),this.name="",this.type="Material",this.fog=!0,this.blending=Ll,this.side=Jl,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Q0,this.blendDst=Kl,this.blendEquation=so,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=jd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yd,this.stencilZFail=Yd,this.stencilZPass=Yd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Un.prototype=Object.assign(Object.create(jr.prototype),{constructor:Un,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(s){if(s!==void 0)for(let e in s){let t=s[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===$0;continue}let n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(t):n&&n.isVector3&&t&&t.isVector3?n.copy(t):this[e]=t}},toJSON:function(s){let e=s===void 0||typeof s=="string";e&&(s={textures:{},images:{}});let t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(s).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(s).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(s).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(s).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(s).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(s).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(s).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(s).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(s).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(s).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(s).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(s).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(s).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(s).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(s).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(s).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(s).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==Ll&&(t.blending=this.blending),this.side!==Jl&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function n(i){let r=[];for(let a in i){let l=i[a];delete l.metadata,r.push(l)}return r}if(e){let i=n(s.textures),r=n(s.images);i.length>0&&(t.textures=i),r.length>0&&(t.images=r)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(s){this.name=s.name,this.fog=s.fog,this.blending=s.blending,this.side=s.side,this.vertexColors=s.vertexColors,this.opacity=s.opacity,this.transparent=s.transparent,this.blendSrc=s.blendSrc,this.blendDst=s.blendDst,this.blendEquation=s.blendEquation,this.blendSrcAlpha=s.blendSrcAlpha,this.blendDstAlpha=s.blendDstAlpha,this.blendEquationAlpha=s.blendEquationAlpha,this.depthFunc=s.depthFunc,this.depthTest=s.depthTest,this.depthWrite=s.depthWrite,this.stencilWriteMask=s.stencilWriteMask,this.stencilFunc=s.stencilFunc,this.stencilRef=s.stencilRef,this.stencilFuncMask=s.stencilFuncMask,this.stencilFail=s.stencilFail,this.stencilZFail=s.stencilZFail,this.stencilZPass=s.stencilZPass,this.stencilWrite=s.stencilWrite;let e=s.clippingPlanes,t=null;if(e!==null){let n=e.length;t=new Array(n);for(let i=0;i!==n;++i)t[i]=e[i].clone()}return this.clippingPlanes=t,this.clipIntersection=s.clipIntersection,this.clipShadows=s.clipShadows,this.shadowSide=s.shadowSide,this.colorWrite=s.colorWrite,this.precision=s.precision,this.polygonOffset=s.polygonOffset,this.polygonOffsetFactor=s.polygonOffsetFactor,this.polygonOffsetUnits=s.polygonOffsetUnits,this.dithering=s.dithering,this.alphaTest=s.alphaTest,this.alphaToCoverage=s.alphaToCoverage,this.premultipliedAlpha=s.premultipliedAlpha,this.visible=s.visible,this.toneMapped=s.toneMapped,this.userData=JSON.parse(JSON.stringify(s.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Un.prototype,"needsUpdate",{set:function(s){s===!0&&this.version++}});var vb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},dd={h:0,s:0,l:0};function Nm(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Hm(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Om(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Pe=class{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=sg(e,1),t=ai(t,0,1),n=ai(n,0,1),t===0)this.r=this.g=this.b=n;else{let i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=Nm(r,i,e+1/3),this.g=Nm(r,i,e),this.b=Nm(r,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i,r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){let l=parseFloat(i[1])/360,h=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(l,h,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=vb[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){let n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Hm(e.r),this.g=Hm(e.g),this.b=Hm(e.b),this}copyLinearToSRGB(e){return this.r=Om(e.r),this.g=Om(e.g),this.b=Om(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});let t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),a=Math.min(t,n,i),l,h,c=(a+r)/2;if(a===r)l=0,h=0;else{let p=r-a;switch(h=c<=.5?p/(r+a):p/(2-r-a),r){case t:l=(n-i)/p+(n<i?6:0);break;case n:l=(i-t)/p+2;break;case i:l=(t-n)/p+4;break}l/=6}return e.h=l,e.s=h,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Ar),Ar.h+=e,Ar.s+=t,Ar.l+=n,this.setHSL(Ar.h,Ar.s,Ar.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ar),e.getHSL(dd);let n=rh(Ar.h,dd.h,t),i=rh(Ar.s,dd.s,t),r=rh(Ar.l,dd.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};Pe.NAMES=vb;Pe.prototype.isColor=!0;Pe.prototype.r=1;Pe.prototype.g=1;Pe.prototype.b=1;var Cn=class extends Un{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}};Cn.prototype.isMeshBasicMaterial=!0;var pn=new L,fd=new _e,Xe=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Il,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new Pe),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new _e),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new L),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Pt),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fd.fromBufferAttribute(this,t),fd.applyMatrix3(e),this.setXY(t,fd.x,fd.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pn.x=this.getX(t),pn.y=this.getY(t),pn.z=this.getZ(t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.x=this.getX(t),pn.y=this.getY(t),pn.z=this.getZ(t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.x=this.getX(t),pn.y=this.getY(t),pn.z=this.getZ(t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Il&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};Xe.prototype.isBufferAttribute=!0;var ef=class extends Xe{constructor(e,t,n){super(new Int8Array(e),t,n)}},tf=class extends Xe{constructor(e,t,n){super(new Uint8Array(e),t,n)}},nf=class extends Xe{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}},rf=class extends Xe{constructor(e,t,n){super(new Int16Array(e),t,n)}},kl=class extends Xe{constructor(e,t,n){super(new Uint16Array(e),t,n)}},sf=class extends Xe{constructor(e,t,n){super(new Int32Array(e),t,n)}},Fl=class extends Xe{constructor(e,t,n){super(new Uint32Array(e),t,n)}},af=class extends Xe{constructor(e,t,n){super(new Uint16Array(e),t,n)}};af.prototype.isFloat16BufferAttribute=!0;var tt=class extends Xe{constructor(e,t,n){super(new Float32Array(e),t,n)}},of=class extends Xe{constructor(e,t,n){super(new Float64Array(e),t,n)}};function yb(s){if(s.length===0)return-1/0;let e=s[0];for(let t=1,n=s.length;t<n;++t)s[t]>e&&(e=s[t]);return e}var hS={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function th(s,e){return new hS[s](e)}var uS=0,Vr=new nt,Bm=new zt,gl=new L,Ui=new fi,Yc=new fi,ei=new L,Qe=class s extends jr{constructor(){super(),Object.defineProperty(this,"id",{value:uS++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yb(e)>65535?Fl:kl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Nn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(e){return Vr.makeRotationX(e),this.applyMatrix4(Vr),this}rotateY(e){return Vr.makeRotationY(e),this.applyMatrix4(Vr),this}rotateZ(e){return Vr.makeRotationZ(e),this.applyMatrix4(Vr),this}translate(e,t,n){return Vr.makeTranslation(e,t,n),this.applyMatrix4(Vr),this}scale(e,t,n){return Vr.makeScale(e,t,n),this.applyMatrix4(Vr),this}lookAt(e){return Bm.lookAt(e),Bm.updateMatrix(),this.applyMatrix4(Bm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gl).negate(),this.translate(gl.x,gl.y,gl.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Ui.setFromBufferAttribute(r),this.morphTargetsRelative?(ei.addVectors(this.boundingBox.min,Ui.min),this.boundingBox.expandByPoint(ei),ei.addVectors(this.boundingBox.max,Ui.max),this.boundingBox.expandByPoint(ei)):(this.boundingBox.expandByPoint(Ui.min),this.boundingBox.expandByPoint(Ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Ui.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let l=t[r];Yc.setFromBufferAttribute(l),this.morphTargetsRelative?(ei.addVectors(Ui.min,Yc.min),Ui.expandByPoint(ei),ei.addVectors(Ui.max,Yc.max),Ui.expandByPoint(ei)):(Ui.expandByPoint(Yc.min),Ui.expandByPoint(Yc.max))}Ui.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)ei.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ei));if(t)for(let r=0,a=t.length;r<a;r++){let l=t[r],h=this.morphTargetsRelative;for(let c=0,p=l.count;c<p;c++)ei.fromBufferAttribute(l,c),h&&(gl.fromBufferAttribute(e,c),ei.add(gl)),i=Math.max(i,n.distanceToSquared(ei))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,l=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Xe(new Float32Array(4*l),4));let h=t.tangent.array,c=[],p=[];for(let ae=0;ae<l;ae++)c[ae]=new L,p[ae]=new L;let u=new L,f=new L,g=new L,v=new _e,M=new _e,S=new _e,b=new L,x=new L;function A(ae,we,he){u.fromArray(i,ae*3),f.fromArray(i,we*3),g.fromArray(i,he*3),v.fromArray(a,ae*2),M.fromArray(a,we*2),S.fromArray(a,he*2),f.sub(u),g.sub(u),M.sub(v),S.sub(v);let Z=1/(M.x*S.y-S.x*M.y);isFinite(Z)&&(b.copy(f).multiplyScalar(S.y).addScaledVector(g,-M.y).multiplyScalar(Z),x.copy(g).multiplyScalar(M.x).addScaledVector(f,-S.x).multiplyScalar(Z),c[ae].add(b),c[we].add(b),c[he].add(b),p[ae].add(x),p[we].add(x),p[he].add(x))}let F=this.groups;F.length===0&&(F=[{start:0,count:n.length}]);for(let ae=0,we=F.length;ae<we;++ae){let he=F[ae],Z=he.start,te=he.count;for(let ie=Z,Y=Z+te;ie<Y;ie+=3)A(n[ie+0],n[ie+1],n[ie+2])}let z=new L,C=new L,W=new L,q=new L;function ee(ae){W.fromArray(r,ae*3),q.copy(W);let we=c[ae];z.copy(we),z.sub(W.multiplyScalar(W.dot(we))).normalize(),C.crossVectors(q,we);let Z=C.dot(p[ae])<0?-1:1;h[ae*4]=z.x,h[ae*4+1]=z.y,h[ae*4+2]=z.z,h[ae*4+3]=Z}for(let ae=0,we=F.length;ae<we;++ae){let he=F[ae],Z=he.start,te=he.count;for(let ie=Z,Y=Z+te;ie<Y;ie+=3)ee(n[ie+0]),ee(n[ie+1]),ee(n[ie+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);let i=new L,r=new L,a=new L,l=new L,h=new L,c=new L,p=new L,u=new L;if(e)for(let f=0,g=e.count;f<g;f+=3){let v=e.getX(f+0),M=e.getX(f+1),S=e.getX(f+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,S),p.subVectors(a,r),u.subVectors(i,r),p.cross(u),l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,M),c.fromBufferAttribute(n,S),l.add(p),h.add(p),c.add(p),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(M,h.x,h.y,h.z),n.setXYZ(S,c.x,c.y,c.z)}else for(let f=0,g=t.count;f<g;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),p.subVectors(a,r),u.subVectors(i,r),p.cross(u),n.setXYZ(f+0,p.x,p.y,p.z),n.setXYZ(f+1,p.x,p.y,p.z),n.setXYZ(f+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(e.attributes[i]===void 0)continue;let a=n[i].array,l=e.attributes[i],h=l.array,c=l.itemSize*t,p=Math.min(h.length,a.length-c);for(let u=0,f=c;u<p;u++,f++)a[f]=h[u]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ei.fromBufferAttribute(e,t),ei.normalize(),e.setXYZ(t,ei.x,ei.y,ei.z)}toNonIndexed(){function e(l,h){let c=l.array,p=l.itemSize,u=l.normalized,f=new c.constructor(h.length*p),g=0,v=0;for(let M=0,S=h.length;M<S;M++){g=h[M]*p;for(let b=0;b<p;b++)f[v++]=c[g++]}return new Xe(f,p,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let l in i){let h=i[l],c=e(h,n);t.setAttribute(l,c)}let r=this.morphAttributes;for(let l in r){let h=[],c=r[l];for(let p=0,u=c.length;p<u;p++){let f=c[p],g=e(f,n);h.push(g)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,h=a.length;l<h;l++){let c=a[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let c in h)h[c]!==void 0&&(e[c]=h[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let h in n){let c=n[h];e.data.attributes[h]=c.toJSON(e.data)}let i={},r=!1;for(let h in this.morphAttributes){let c=this.morphAttributes[h],p=[];for(let u=0,f=c.length;u<f;u++){let g=c[u];p.push(g.toJSON(e.data))}p.length>0&&(i[h]=p,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new s().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let p=i[c];this.setAttribute(c,p.clone(t))}let r=e.morphAttributes;for(let c in r){let p=[],u=r[c];for(let f=0,g=u.length;f<g;f++)p.push(u[f].clone(t));this.morphAttributes[c]=p}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,p=a.length;c<p;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};Qe.prototype.isBufferGeometry=!0;var Dy=new nt,vl=new Zr,zm=new nr,la=new L,ca=new L,ha=new L,Um=new L,Gm=new L,Vm=new L,pd=new L,md=new L,gd=new L,vd=new _e,yd=new _e,xd=new _e,Wm=new L,wd=new L,Et=class extends zt{constructor(e=new Qe,t=new Cn){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),zm.copy(n.boundingSphere),zm.applyMatrix4(r),e.ray.intersectsSphere(zm)===!1)||(Dy.copy(r).invert(),vl.copy(e.ray).applyMatrix4(Dy),n.boundingBox!==null&&vl.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){let l=n.index,h=n.attributes.position,c=n.morphAttributes.position,p=n.morphTargetsRelative,u=n.attributes.uv,f=n.attributes.uv2,g=n.groups,v=n.drawRange;if(l!==null)if(Array.isArray(i))for(let M=0,S=g.length;M<S;M++){let b=g[M],x=i[b.materialIndex],A=Math.max(b.start,v.start),F=Math.min(b.start+b.count,v.start+v.count);for(let z=A,C=F;z<C;z+=3){let W=l.getX(z),q=l.getX(z+1),ee=l.getX(z+2);a=bd(this,x,e,vl,h,c,p,u,f,W,q,ee),a&&(a.faceIndex=Math.floor(z/3),a.face.materialIndex=b.materialIndex,t.push(a))}}else{let M=Math.max(0,v.start),S=Math.min(l.count,v.start+v.count);for(let b=M,x=S;b<x;b+=3){let A=l.getX(b),F=l.getX(b+1),z=l.getX(b+2);a=bd(this,i,e,vl,h,c,p,u,f,A,F,z),a&&(a.faceIndex=Math.floor(b/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(i))for(let M=0,S=g.length;M<S;M++){let b=g[M],x=i[b.materialIndex],A=Math.max(b.start,v.start),F=Math.min(b.start+b.count,v.start+v.count);for(let z=A,C=F;z<C;z+=3){let W=z,q=z+1,ee=z+2;a=bd(this,x,e,vl,h,c,p,u,f,W,q,ee),a&&(a.faceIndex=Math.floor(z/3),a.face.materialIndex=b.materialIndex,t.push(a))}}else{let M=Math.max(0,v.start),S=Math.min(h.count,v.start+v.count);for(let b=M,x=S;b<x;b+=3){let A=b,F=b+1,z=b+2;a=bd(this,i,e,vl,h,c,p,u,f,A,F,z),a&&(a.faceIndex=Math.floor(b/3),t.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};Et.prototype.isMesh=!0;function dS(s,e,t,n,i,r,a,l){let h;if(e.side===xn?h=n.intersectTriangle(a,r,i,!0,l):h=n.intersectTriangle(i,r,a,e.side!==ii,l),h===null)return null;wd.copy(l),wd.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(wd);return c<t.near||c>t.far?null:{distance:c,point:wd.clone(),object:s}}function bd(s,e,t,n,i,r,a,l,h,c,p,u){la.fromBufferAttribute(i,c),ca.fromBufferAttribute(i,p),ha.fromBufferAttribute(i,u);let f=s.morphTargetInfluences;if(e.morphTargets&&r&&f){pd.set(0,0,0),md.set(0,0,0),gd.set(0,0,0);for(let v=0,M=r.length;v<M;v++){let S=f[v],b=r[v];S!==0&&(Um.fromBufferAttribute(b,c),Gm.fromBufferAttribute(b,p),Vm.fromBufferAttribute(b,u),a?(pd.addScaledVector(Um,S),md.addScaledVector(Gm,S),gd.addScaledVector(Vm,S)):(pd.addScaledVector(Um.sub(la),S),md.addScaledVector(Gm.sub(ca),S),gd.addScaledVector(Vm.sub(ha),S)))}la.add(pd),ca.add(md),ha.add(gd)}s.isSkinnedMesh&&e.skinning&&(s.boneTransform(c,la),s.boneTransform(p,ca),s.boneTransform(u,ha));let g=dS(s,e,t,n,la,ca,ha,Wm);if(g){l&&(vd.fromBufferAttribute(l,c),yd.fromBufferAttribute(l,p),xd.fromBufferAttribute(l,u),g.uv=li.getUV(Wm,la,ca,ha,vd,yd,xd,new _e)),h&&(vd.fromBufferAttribute(h,c),yd.fromBufferAttribute(h,p),xd.fromBufferAttribute(h,u),g.uv2=li.getUV(Wm,la,ca,ha,vd,yd,xd,new _e));let v={a:c,b:p,c:u,normal:new L,materialIndex:0};li.getNormal(la,ca,ha,v.normal),g.face=v}return g}var ma=class extends Qe{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let l=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let h=[],c=[],p=[],u=[],f=0,g=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,i,a,2),v("x","z","y",1,-1,e,n,-t,i,a,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(h),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(p,3)),this.setAttribute("uv",new tt(u,2));function v(M,S,b,x,A,F,z,C,W,q,ee){let ae=F/W,we=z/q,he=F/2,Z=z/2,te=C/2,ie=W+1,Y=q+1,Le=0,Be=0,Oe=new L;for(let Ke=0;Ke<Y;Ke++){let ze=Ke*we-Z;for(let ut=0;ut<ie;ut++){let xt=ut*ae-he;Oe[M]=xt*x,Oe[S]=ze*A,Oe[b]=te,c.push(Oe.x,Oe.y,Oe.z),Oe[M]=0,Oe[S]=0,Oe[b]=C>0?1:-1,p.push(Oe.x,Oe.y,Oe.z),u.push(ut/W),u.push(1-Ke/q),Le+=1}}for(let Ke=0;Ke<q;Ke++)for(let ze=0;ze<W;ze++){let ut=f+ze+ie*Ke,xt=f+ze+ie*(Ke+1),ye=f+(ze+1)+ie*(Ke+1),en=f+(ze+1)+ie*Ke;h.push(ut,xt,en),h.push(xt,ye,en),Be+=6}l.addGroup(g,Be,ee),g+=Be,f+=Le}}};function Nl(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function di(s){let e={};for(let t=0;t<s.length;t++){let n=Nl(s[t]);for(let i in n)e[i]=n[i]}return e}var xb={clone:Nl,merge:di},fS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends Un{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=fS,this.fragmentShader=pS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nl(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};gn.prototype.isShaderMaterial=!0;var Ps=class extends zt{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new L),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};Ps.prototype.isCamera=!0;var An=class extends Ps{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fh*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ho*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/h,t-=a.offsetY*n/c,i*=a.width/h,n*=a.height/c}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};An.prototype.isPerspectiveCamera=!0;var yl=90,xl=1,Hl=class extends zt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new An(yl,xl,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new L(1,0,0)),this.add(i);let r=new An(yl,xl,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(-1,0,0)),this.add(r);let a=new An(yl,xl,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new L(0,1,0)),this.add(a);let l=new An(yl,xl,e,t);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(new L(0,-1,0)),this.add(l);let h=new An(yl,xl,e,t);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new L(0,0,1)),this.add(h);let c=new An(yl,xl,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,r,a,l,h,c]=this.children,p=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;let f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,l),e.setRenderTarget(n,4),e.render(t,h),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=p}},ga=class extends ti{constructor(e,t,n,i,r,a,l,h,c,p){e=e!==void 0?e:[],t=t!==void 0?t:ru,l=l!==void 0?l:da,super(e,t,n,i,r,a,l,h,c,p),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};ga.prototype.isCubeTexture=!0;var Ol=class extends Ln{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new ga(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=oi,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ma(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:Nl(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Ls});r.uniforms.tEquirect.value=t;let a=new Et(i,r),l=t.minFilter;return t.minFilter===Sa&&(t.minFilter=jt),new Hl(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};Ol.prototype.isWebGLCubeRenderTarget=!0;var va=class extends ti{constructor(e,t,n,i,r,a,l,h,c,p,u,f){super(null,a,l,h,c,p,i,r,u,f),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=c!==void 0?c:Rn,this.minFilter=p!==void 0?p:Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};va.prototype.isDataTexture=!0;var wl=new nr,_d=new L,Ds=class{constructor(e=new Gi,t=new Gi,n=new Gi,i=new Gi,r=new Gi,a=new Gi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(r),l[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],l=n[3],h=n[4],c=n[5],p=n[6],u=n[7],f=n[8],g=n[9],v=n[10],M=n[11],S=n[12],b=n[13],x=n[14],A=n[15];return t[0].setComponents(l-i,u-h,M-f,A-S).normalize(),t[1].setComponents(l+i,u+h,M+f,A+S).normalize(),t[2].setComponents(l+r,u+c,M+g,A+b).normalize(),t[3].setComponents(l-r,u-c,M-g,A-b).normalize(),t[4].setComponents(l-a,u-p,M-v,A-x).normalize(),t[5].setComponents(l+a,u+p,M+v,A+x).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),wl.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(wl)}intersectsSprite(e){return wl.center.set(0,0,0),wl.radius=.7071067811865476,wl.applyMatrix4(e.matrixWorld),this.intersectsSphere(wl)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(_d.x=i.normal.x>0?e.max.x:e.min.x,_d.y=i.normal.y>0?e.max.y:e.min.y,_d.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_d)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function wb(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function mS(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,p){let u=c.array,f=c.usage,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,u,f),c.onUploadCallback();let v=5126;return u instanceof Float32Array?v=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?c.isFloat16BufferAttribute?t?v=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):v=5123:u instanceof Int16Array?v=5122:u instanceof Uint32Array?v=5125:u instanceof Int32Array?v=5124:u instanceof Int8Array?v=5120:u instanceof Uint8Array&&(v=5121),{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,p,u){let f=p.array,g=p.updateRange;s.bindBuffer(u,c),g.count===-1?s.bufferSubData(u,0,f):(t?s.bufferSubData(u,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):s.bufferSubData(u,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function l(c){c.isInterleavedBufferAttribute&&(c=c.data);let p=n.get(c);p&&(s.deleteBuffer(p.buffer),n.delete(c))}function h(c,p){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u===void 0?n.set(c,i(c,p)):u.version<c.version&&(r(u.buffer,c,p),u.version=c.version)}return{get:a,remove:l,update:h}}var Jr=class extends Qe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,l=Math.floor(n),h=Math.floor(i),c=l+1,p=h+1,u=e/l,f=t/h,g=[],v=[],M=[],S=[];for(let b=0;b<p;b++){let x=b*f-a;for(let A=0;A<c;A++){let F=A*u-r;v.push(F,-x,0),M.push(0,0,1),S.push(A/l),S.push(1-b/h)}}for(let b=0;b<h;b++)for(let x=0;x<l;x++){let A=x+c*b,F=x+c*(b+1),z=x+1+c*(b+1),C=x+1+c*b;g.push(A,F,C),g.push(F,z,C)}this.setIndex(g),this.setAttribute("position",new tt(v,3)),this.setAttribute("normal",new tt(M,3)),this.setAttribute("uv",new tt(S,2))}},gS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,vS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yS=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,xS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,wS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bS="vec3 transformed = vec3( position );",_S=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MS=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
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
#endif`,ES=`#ifdef USE_BUMPMAP
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
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,SS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,IS=`#define PI 3.141592653589793
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
}`,kS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,FS=`vec3 transformedNormal = objectNormal;
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
#endif`,NS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zS="gl_FragColor = linearToOutputTexel( gl_FragColor );",US=`
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
}`,GS=`#ifdef USE_ENVMAP
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
#endif`,VS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WS=`#ifdef USE_ENVMAP
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
#endif`,qS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
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
#endif`,YS=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,jS=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,ZS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KS=`#ifdef USE_GRADIENTMAP
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
}`,$S=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,QS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eT=`vec3 diffuse = vec3( 1.0 );
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
#endif`,tT=`uniform bool receiveShadow;
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
#endif`,nT=`#if defined( USE_ENVMAP )
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
#endif`,iT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rT=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,sT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aT=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,oT=`PhysicalMaterial material;
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
#endif`,lT=`struct PhysicalMaterial {
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
}`,cT=`
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
#endif`,hT=`#if defined( RE_IndirectDiffuse )
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
#endif`,uT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,dT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gT=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,vT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_T=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,MT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,ET=`#ifdef USE_MORPHTARGETS
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
#endif`,ST=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,TT=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,RT=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,LT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,CT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,PT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OT=`#ifdef USE_SHADOWMAP
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
#endif`,BT=`#ifdef USE_SHADOWMAP
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
#endif`,zT=`#ifdef USE_SHADOWMAP
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
#endif`,UT=`float getShadowMask() {
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
}`,GT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VT=`#ifdef USE_SKINNING
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
#endif`,WT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qT=`#ifdef USE_SKINNING
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
#endif`,XT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JT=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,KT=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,$T=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,QT=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,e2=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,t2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,n2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,i2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,r2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,s2=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,a2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o2=`#include <envmap_common_pars_fragment>
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
}`,l2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c2=`#if DEPTH_PACKING == 3200
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
}`,h2=`#include <common>
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
}`,u2=`#define DISTANCE
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
}`,d2=`#define DISTANCE
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
}`,f2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,p2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m2=`uniform vec3 diffuse;
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
}`,g2=`uniform float scale;
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
}`,v2=`uniform vec3 diffuse;
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
}`,y2=`#include <common>
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
}`,x2=`uniform vec3 diffuse;
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
}`,w2=`#define LAMBERT
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
}`,b2=`#define MATCAP
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
}`,_2=`#define MATCAP
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
}`,M2=`#define TOON
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
}`,E2=`#define TOON
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
}`,S2=`#define PHONG
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
}`,T2=`#define PHONG
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
}`,A2=`#define STANDARD
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
}`,R2=`#define STANDARD
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
}`,L2=`#define NORMAL
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
}`,C2=`#define NORMAL
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
}`,P2=`uniform vec3 diffuse;
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
}`,D2=`uniform float size;
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
}`,I2=`uniform vec3 color;
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
}`,k2=`#include <common>
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
}`,F2=`uniform vec3 diffuse;
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
}`,N2=`uniform float rotation;
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
}`,Ht={alphamap_fragment:gS,alphamap_pars_fragment:vS,alphatest_fragment:yS,aomap_fragment:xS,aomap_pars_fragment:wS,begin_vertex:bS,beginnormal_vertex:_S,bsdfs:MS,bumpmap_pars_fragment:ES,clipping_planes_fragment:SS,clipping_planes_pars_fragment:TS,clipping_planes_pars_vertex:AS,clipping_planes_vertex:RS,color_fragment:LS,color_pars_fragment:CS,color_pars_vertex:PS,color_vertex:DS,common:IS,cube_uv_reflection_fragment:kS,defaultnormal_vertex:FS,displacementmap_pars_vertex:NS,displacementmap_vertex:HS,emissivemap_fragment:OS,emissivemap_pars_fragment:BS,encodings_fragment:zS,encodings_pars_fragment:US,envmap_fragment:GS,envmap_common_pars_fragment:VS,envmap_pars_fragment:WS,envmap_pars_vertex:qS,envmap_physical_pars_fragment:nT,envmap_vertex:XS,fog_vertex:YS,fog_pars_vertex:jS,fog_fragment:ZS,fog_pars_fragment:JS,gradientmap_pars_fragment:KS,lightmap_fragment:$S,lightmap_pars_fragment:QS,lights_lambert_vertex:eT,lights_pars_begin:tT,lights_toon_fragment:iT,lights_toon_pars_fragment:rT,lights_phong_fragment:sT,lights_phong_pars_fragment:aT,lights_physical_fragment:oT,lights_physical_pars_fragment:lT,lights_fragment_begin:cT,lights_fragment_maps:hT,lights_fragment_end:uT,logdepthbuf_fragment:dT,logdepthbuf_pars_fragment:fT,logdepthbuf_pars_vertex:pT,logdepthbuf_vertex:mT,map_fragment:gT,map_pars_fragment:vT,map_particle_fragment:yT,map_particle_pars_fragment:xT,metalnessmap_fragment:wT,metalnessmap_pars_fragment:bT,morphnormal_vertex:_T,morphtarget_pars_vertex:MT,morphtarget_vertex:ET,normal_fragment_begin:ST,normal_fragment_maps:TT,normalmap_pars_fragment:AT,clearcoat_normal_fragment_begin:RT,clearcoat_normal_fragment_maps:LT,clearcoat_pars_fragment:CT,packing:PT,premultiplied_alpha_fragment:DT,project_vertex:IT,dithering_fragment:kT,dithering_pars_fragment:FT,roughnessmap_fragment:NT,roughnessmap_pars_fragment:HT,shadowmap_pars_fragment:OT,shadowmap_pars_vertex:BT,shadowmap_vertex:zT,shadowmask_pars_fragment:UT,skinbase_vertex:GT,skinning_pars_vertex:VT,skinning_vertex:WT,skinnormal_vertex:qT,specularmap_fragment:XT,specularmap_pars_fragment:YT,tonemapping_fragment:jT,tonemapping_pars_fragment:ZT,transmissionmap_fragment:JT,transmissionmap_pars_fragment:KT,uv_pars_fragment:$T,uv_pars_vertex:QT,uv_vertex:e2,uv2_pars_fragment:t2,uv2_pars_vertex:n2,uv2_vertex:i2,worldpos_vertex:r2,background_frag:s2,background_vert:a2,cube_frag:o2,cube_vert:l2,depth_frag:c2,depth_vert:h2,distanceRGBA_frag:u2,distanceRGBA_vert:d2,equirect_frag:f2,equirect_vert:p2,linedashed_frag:m2,linedashed_vert:g2,meshbasic_frag:v2,meshbasic_vert:y2,meshlambert_frag:x2,meshlambert_vert:w2,meshmatcap_frag:b2,meshmatcap_vert:_2,meshtoon_frag:M2,meshtoon_vert:E2,meshphong_frag:S2,meshphong_vert:T2,meshphysical_frag:A2,meshphysical_vert:R2,normal_frag:L2,normal_vert:C2,points_frag:P2,points_vert:D2,shadow_frag:I2,shadow_vert:k2,sprite_frag:F2,sprite_vert:N2},qe={common:{diffuse:{value:new Pe(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new Nn},uv2Transform:{value:new Nn},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new Nn}},sprite:{diffuse:{value:new Pe(15658734)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new Nn}}},Lr={basic:{uniforms:di([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:di([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.fog,qe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:di([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:di([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:di([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:di([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:di([qe.points,qe.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:di([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:di([qe.common,qe.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:di([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.normal_vert,fragmentShader:Ht.normal_frag},sprite:{uniforms:di([qe.sprite,qe.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Nn},t2D:{value:null}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},cube:{uniforms:di([qe.envmap,{opacity:{value:1}}]),vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:di([qe.common,qe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:di([qe.lights,qe.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Lr.physical={uniforms:di([Lr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new _e(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new Pe(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};function H2(s,e,t,n,i){let r=new Pe(0),a=0,l,h,c=null,p=0,u=null;function f(v,M,S,b){let x=M.isScene===!0?M.background:null;x&&x.isTexture&&(x=e.get(x));let A=s.xr,F=A.getSession&&A.getSession();F&&F.environmentBlendMode==="additive"&&(x=null),x===null?g(r,a):x&&x.isColor&&(g(x,1),b=!0),(s.autoClear||b)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===$l)?(h===void 0&&(h=new Et(new ma(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Nl(Lr.cube.uniforms),vertexShader:Lr.cube.vertexShader,fragmentShader:Lr.cube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,C,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x._needsFlipEnvMap?-1:1,(c!==x||p!==x.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,c=x,p=x.version,u=s.toneMapping),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Et(new Jr(2,2),new gn({name:"BackgroundMaterial",uniforms:Nl(Lr.background.uniforms),vertexShader:Lr.background.vertexShader,fragmentShader:Lr.background.fragmentShader,side:Jl,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||p!==x.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,c=x,p=x.version,u=s.toneMapping),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,M){t.buffers.color.setClear(v.r,v.g,v.b,M,i)}return{getClearColor:function(){return r},setClearColor:function(v,M=1){r.set(v),a=M,g(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(r,a)},render:f}}function O2(s,e,t,n){let i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,l={},h=M(null),c=h;function p(Z,te,ie,Y,Le){let Be=!1;if(a){let Oe=v(Y,ie,te);c!==Oe&&(c=Oe,f(c.object)),Be=S(Y,Le),Be&&b(Y,Le)}else{let Oe=te.wireframe===!0;(c.geometry!==Y.id||c.program!==ie.id||c.wireframe!==Oe)&&(c.geometry=Y.id,c.program=ie.id,c.wireframe=Oe,Be=!0)}Z.isInstancedMesh===!0&&(Be=!0),Le!==null&&t.update(Le,34963),Be&&(W(Z,te,ie,Y),Le!==null&&s.bindBuffer(34963,t.get(Le).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(Z){return n.isWebGL2?s.bindVertexArray(Z):r.bindVertexArrayOES(Z)}function g(Z){return n.isWebGL2?s.deleteVertexArray(Z):r.deleteVertexArrayOES(Z)}function v(Z,te,ie){let Y=ie.wireframe===!0,Le=l[Z.id];Le===void 0&&(Le={},l[Z.id]=Le);let Be=Le[te.id];Be===void 0&&(Be={},Le[te.id]=Be);let Oe=Be[Y];return Oe===void 0&&(Oe=M(u()),Be[Y]=Oe),Oe}function M(Z){let te=[],ie=[],Y=[];for(let Le=0;Le<i;Le++)te[Le]=0,ie[Le]=0,Y[Le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:ie,attributeDivisors:Y,object:Z,attributes:{},index:null}}function S(Z,te){let ie=c.attributes,Y=Z.attributes,Le=0;for(let Be in Y){let Oe=ie[Be],Ke=Y[Be];if(Oe===void 0||Oe.attribute!==Ke||Oe.data!==Ke.data)return!0;Le++}return c.attributesNum!==Le||c.index!==te}function b(Z,te){let ie={},Y=Z.attributes,Le=0;for(let Be in Y){let Oe=Y[Be],Ke={};Ke.attribute=Oe,Oe.data&&(Ke.data=Oe.data),ie[Be]=Ke,Le++}c.attributes=ie,c.attributesNum=Le,c.index=te}function x(){let Z=c.newAttributes;for(let te=0,ie=Z.length;te<ie;te++)Z[te]=0}function A(Z){F(Z,0)}function F(Z,te){let ie=c.newAttributes,Y=c.enabledAttributes,Le=c.attributeDivisors;ie[Z]=1,Y[Z]===0&&(s.enableVertexAttribArray(Z),Y[Z]=1),Le[Z]!==te&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Z,te),Le[Z]=te)}function z(){let Z=c.newAttributes,te=c.enabledAttributes;for(let ie=0,Y=te.length;ie<Y;ie++)te[ie]!==Z[ie]&&(s.disableVertexAttribArray(ie),te[ie]=0)}function C(Z,te,ie,Y,Le,Be){n.isWebGL2===!0&&(ie===5124||ie===5125)?s.vertexAttribIPointer(Z,te,ie,Le,Be):s.vertexAttribPointer(Z,te,ie,Y,Le,Be)}function W(Z,te,ie,Y){if(n.isWebGL2===!1&&(Z.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let Le=Y.attributes,Be=ie.getAttributes(),Oe=te.defaultAttributeValues;for(let Ke in Be){let ze=Be[Ke];if(ze>=0){let ut=Le[Ke];if(ut!==void 0){let xt=ut.normalized,ye=ut.itemSize,en=t.get(ut);if(en===void 0)continue;let Dt=en.buffer,bt=en.type,dt=en.bytesPerElement;if(ut.isInterleavedBufferAttribute){let Wt=ut.data,Rt=Wt.stride,Tt=ut.offset;Wt&&Wt.isInstancedInterleavedBuffer?(F(ze,Wt.meshPerAttribute),Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Wt.meshPerAttribute*Wt.count)):A(ze),s.bindBuffer(34962,Dt),C(ze,ye,bt,xt,Rt*dt,Tt*dt)}else ut.isInstancedBufferAttribute?(F(ze,ut.meshPerAttribute),Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ut.meshPerAttribute*ut.count)):A(ze),s.bindBuffer(34962,Dt),C(ze,ye,bt,xt,0,0)}else if(Ke==="instanceMatrix"){let xt=t.get(Z.instanceMatrix);if(xt===void 0)continue;let ye=xt.buffer,en=xt.type;F(ze+0,1),F(ze+1,1),F(ze+2,1),F(ze+3,1),s.bindBuffer(34962,ye),s.vertexAttribPointer(ze+0,4,en,!1,64,0),s.vertexAttribPointer(ze+1,4,en,!1,64,16),s.vertexAttribPointer(ze+2,4,en,!1,64,32),s.vertexAttribPointer(ze+3,4,en,!1,64,48)}else if(Ke==="instanceColor"){let xt=t.get(Z.instanceColor);if(xt===void 0)continue;let ye=xt.buffer,en=xt.type;F(ze,1),s.bindBuffer(34962,ye),s.vertexAttribPointer(ze,3,en,!1,12,0)}else if(Oe!==void 0){let xt=Oe[Ke];if(xt!==void 0)switch(xt.length){case 2:s.vertexAttrib2fv(ze,xt);break;case 3:s.vertexAttrib3fv(ze,xt);break;case 4:s.vertexAttrib4fv(ze,xt);break;default:s.vertexAttrib1fv(ze,xt)}}}}z()}function q(){we();for(let Z in l){let te=l[Z];for(let ie in te){let Y=te[ie];for(let Le in Y)g(Y[Le].object),delete Y[Le];delete te[ie]}delete l[Z]}}function ee(Z){if(l[Z.id]===void 0)return;let te=l[Z.id];for(let ie in te){let Y=te[ie];for(let Le in Y)g(Y[Le].object),delete Y[Le];delete te[ie]}delete l[Z.id]}function ae(Z){for(let te in l){let ie=l[te];if(ie[Z.id]===void 0)continue;let Y=ie[Z.id];for(let Le in Y)g(Y[Le].object),delete Y[Le];delete ie[Z.id]}}function we(){he(),c!==h&&(c=h,f(c.object))}function he(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:p,reset:we,resetDefaultState:he,dispose:q,releaseStatesOfGeometry:ee,releaseStatesOfProgram:ae,initAttributes:x,enableAttribute:A,disableUnusedAttributes:z}}function B2(s,e,t,n){let i=n.isWebGL2,r;function a(c){r=c}function l(c,p){s.drawArrays(r,c,p),t.update(p,r,1)}function h(c,p,u){if(u===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,c,p,u),t.update(p,r,u)}this.setMode=a,this.render=l,this.renderInstances=h}function z2(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext,l=t.precision!==void 0?t.precision:"highp",h=r(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let c=t.logarithmicDepthBuffer===!0,p=s.getParameter(34930),u=s.getParameter(35660),f=s.getParameter(3379),g=s.getParameter(34076),v=s.getParameter(34921),M=s.getParameter(36347),S=s.getParameter(36348),b=s.getParameter(36349),x=u>0,A=a||e.has("OES_texture_float"),F=x&&A,z=a?s.getParameter(36183):0;return{isWebGL2:a,getMaxAnisotropy:i,getMaxPrecision:r,precision:l,logarithmicDepthBuffer:c,maxTextures:p,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:A,floatVertexTextures:F,maxSamples:z}}function U2(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Gi,l=new Nn,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,g){let v=u.length!==0||f||n!==0||i;return i=f,t=p(u,g,0),n=u.length,v},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1,c()},this.setState=function(u,f,g){let v=u.clippingPlanes,M=u.clipIntersection,S=u.clipShadows,b=s.get(u);if(!i||v===null||v.length===0||r&&!S)r?p(null):c();else{let x=r?0:n,A=x*4,F=b.clippingState||null;h.value=F,F=p(v,f,A,g);for(let z=0;z!==A;++z)F[z]=t[z];b.clippingState=F,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(u,f,g,v){let M=u!==null?u.length:0,S=null;if(M!==0){if(S=h.value,v!==!0||S===null){let b=g+M*4,x=f.matrixWorldInverse;l.getNormalMatrix(x),(S===null||S.length<b)&&(S=new Float32Array(b));for(let A=0,F=g;A!==M;++A,F+=4)a.copy(u[A]).applyMatrix4(x,l),a.normal.toArray(S,F),S[F+3]=a.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function G2(s){let e=new WeakMap;function t(a,l){return l===Zd?a.mapping=ru:l===Jd&&(a.mapping=su),a}function n(a){if(a&&a.isTexture){let l=a.mapping;if(l===Zd||l===Jd)if(e.has(a)){let h=e.get(a).texture;return t(h,a.mapping)}else{let h=a.image;if(h&&h.height>0){let c=s.getRenderTarget(),p=new Ol(h.height/2);return p.fromEquirectangularTexture(s,a),e.set(a,p),s.setRenderTarget(c),a.addEventListener("dispose",i),t(p.texture,a.mapping)}else return null}}return a}function i(a){let l=a.target;l.removeEventListener("dispose",i);let h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function V2(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function W2(s,e,t,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete i[f.id];let g=r.get(f);g&&(e.remove(g),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function l(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function h(u){let f=u.attributes;for(let v in f)e.update(f[v],34962);let g=u.morphAttributes;for(let v in g){let M=g[v];for(let S=0,b=M.length;S<b;S++)e.update(M[S],34962)}}function c(u){let f=[],g=u.index,v=u.attributes.position,M=0;if(g!==null){let x=g.array;M=g.version;for(let A=0,F=x.length;A<F;A+=3){let z=x[A+0],C=x[A+1],W=x[A+2];f.push(z,C,C,W,W,z)}}else{let x=v.array;M=v.version;for(let A=0,F=x.length/3-1;A<F;A+=3){let z=A+0,C=A+1,W=A+2;f.push(z,C,C,W,W,z)}}let S=new(yb(f)>65535?Fl:kl)(f,1);S.version=M;let b=r.get(u);b&&e.remove(b),r.set(u,S)}function p(u){let f=r.get(u);if(f){let g=u.index;g!==null&&f.version<g.version&&c(u)}else c(u);return r.get(u)}return{get:l,update:h,getWireframeAttribute:p}}function q2(s,e,t,n){let i=n.isWebGL2,r;function a(f){r=f}let l,h;function c(f){l=f.type,h=f.bytesPerElement}function p(f,g){s.drawElements(r,g,l,f*h),t.update(g,r,1)}function u(f,g,v){if(v===0)return;let M,S;if(i)M=s,S="drawElementsInstanced";else if(M=e.get("ANGLE_instanced_arrays"),S="drawElementsInstancedANGLE",M===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[S](r,g,l,f*h,v),t.update(g,r,v)}this.setMode=a,this.setIndex=c,this.render=p,this.renderInstances=u}function X2(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(t.calls++,a){case 4:t.triangles+=l*(r/3);break;case 1:t.lines+=l*(r/2);break;case 3:t.lines+=l*(r-1);break;case 2:t.lines+=l*r;break;case 0:t.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Y2(s,e){return s[0]-e[0]}function j2(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Z2(s){let e={},t=new Float32Array(8),n=[];for(let r=0;r<8;r++)n[r]=[r,0];function i(r,a,l,h){let c=r.morphTargetInfluences,p=c===void 0?0:c.length,u=e[a.id];if(u===void 0){u=[];for(let S=0;S<p;S++)u[S]=[S,0];e[a.id]=u}for(let S=0;S<p;S++){let b=u[S];b[0]=S,b[1]=c[S]}u.sort(j2);for(let S=0;S<8;S++)S<p&&u[S][1]?(n[S][0]=u[S][0],n[S][1]=u[S][1]):(n[S][0]=Number.MAX_SAFE_INTEGER,n[S][1]=0);n.sort(Y2);let f=l.morphTargets&&a.morphAttributes.position,g=l.morphNormals&&a.morphAttributes.normal,v=0;for(let S=0;S<8;S++){let b=n[S],x=b[0],A=b[1];x!==Number.MAX_SAFE_INTEGER&&A?(f&&a.getAttribute("morphTarget"+S)!==f[x]&&a.setAttribute("morphTarget"+S,f[x]),g&&a.getAttribute("morphNormal"+S)!==g[x]&&a.setAttribute("morphNormal"+S,g[x]),t[S]=A,v+=A):(f&&a.hasAttribute("morphTarget"+S)===!0&&a.deleteAttribute("morphTarget"+S),g&&a.hasAttribute("morphNormal"+S)===!0&&a.deleteAttribute("morphNormal"+S),t[S]=0)}let M=a.morphTargetsRelative?1:1-v;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",t)}return{update:i}}function J2(s,e,t,n){let i=new WeakMap;function r(h){let c=n.render.frame,p=h.geometry,u=e.get(h,p);return i.get(u)!==c&&(e.update(u),i.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),t.update(h.instanceMatrix,34962),h.instanceColor!==null&&t.update(h.instanceColor,34962)),u}function a(){i=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var mh=class extends ti{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};mh.prototype.isDataTexture2DArray=!0;var gh=class extends ti{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};gh.prototype.isDataTexture3D=!0;var bb=new ti,K2=new mh,$2=new gh,_b=new ga,Iy=[],ky=[],Fy=new Float32Array(16),Ny=new Float32Array(9),Hy=new Float32Array(4);function Ql(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Iy[i];if(r===void 0&&(r=new Float32Array(i),Iy[i]=r),e!==0){n.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,s[a].toArray(r,l)}return r}function bi(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function pi(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Mb(s,e){let t=ky[e];t===void 0&&(t=new Int32Array(e),ky[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Q2(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function e3(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bi(t,e))return;s.uniform2fv(this.addr,e),pi(t,e)}}function t3(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bi(t,e))return;s.uniform3fv(this.addr,e),pi(t,e)}}function n3(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bi(t,e))return;s.uniform4fv(this.addr,e),pi(t,e)}}function i3(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(bi(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pi(t,e)}else{if(bi(t,n))return;Hy.set(n),s.uniformMatrix2fv(this.addr,!1,Hy),pi(t,n)}}function r3(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(bi(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pi(t,e)}else{if(bi(t,n))return;Ny.set(n),s.uniformMatrix3fv(this.addr,!1,Ny),pi(t,n)}}function s3(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(bi(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pi(t,e)}else{if(bi(t,n))return;Fy.set(n),s.uniformMatrix4fv(this.addr,!1,Fy),pi(t,n)}}function a3(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function o3(s,e){let t=this.cache;bi(t,e)||(s.uniform2iv(this.addr,e),pi(t,e))}function l3(s,e){let t=this.cache;bi(t,e)||(s.uniform3iv(this.addr,e),pi(t,e))}function c3(s,e){let t=this.cache;bi(t,e)||(s.uniform4iv(this.addr,e),pi(t,e))}function h3(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function u3(s,e){let t=this.cache;bi(t,e)||(s.uniform2uiv(this.addr,e),pi(t,e))}function d3(s,e){let t=this.cache;bi(t,e)||(s.uniform3uiv(this.addr,e),pi(t,e))}function f3(s,e){let t=this.cache;bi(t,e)||(s.uniform4uiv(this.addr,e),pi(t,e))}function p3(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||bb,i)}function m3(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$2,i)}function g3(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||_b,i)}function v3(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||K2,i)}function y3(s){switch(s){case 5126:return Q2;case 35664:return e3;case 35665:return t3;case 35666:return n3;case 35674:return i3;case 35675:return r3;case 35676:return s3;case 5124:case 35670:return a3;case 35667:case 35671:return o3;case 35668:case 35672:return l3;case 35669:case 35673:return c3;case 5125:return h3;case 36294:return u3;case 36295:return d3;case 36296:return f3;case 35678:case 36198:case 36298:case 36306:case 35682:return p3;case 35679:case 36299:case 36307:return m3;case 35680:case 36300:case 36308:case 36293:return g3;case 36289:case 36303:case 36311:case 36292:return v3}}function x3(s,e){s.uniform1fv(this.addr,e)}function w3(s,e){let t=Ql(e,this.size,2);s.uniform2fv(this.addr,t)}function b3(s,e){let t=Ql(e,this.size,3);s.uniform3fv(this.addr,t)}function _3(s,e){let t=Ql(e,this.size,4);s.uniform4fv(this.addr,t)}function M3(s,e){let t=Ql(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function E3(s,e){let t=Ql(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function S3(s,e){let t=Ql(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function T3(s,e){s.uniform1iv(this.addr,e)}function A3(s,e){s.uniform2iv(this.addr,e)}function R3(s,e){s.uniform3iv(this.addr,e)}function L3(s,e){s.uniform4iv(this.addr,e)}function C3(s,e){s.uniform1uiv(this.addr,e)}function P3(s,e){s.uniform2uiv(this.addr,e)}function D3(s,e){s.uniform3uiv(this.addr,e)}function I3(s,e){s.uniform4uiv(this.addr,e)}function k3(s,e,t){let n=e.length,i=Mb(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTexture2D(e[r]||bb,i[r])}function F3(s,e,t){let n=e.length,i=Mb(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTextureCube(e[r]||_b,i[r])}function N3(s){switch(s){case 5126:return x3;case 35664:return w3;case 35665:return b3;case 35666:return _3;case 35674:return M3;case 35675:return E3;case 35676:return S3;case 5124:case 35670:return T3;case 35667:case 35671:return A3;case 35668:case 35672:return R3;case 35669:case 35673:return L3;case 5125:return C3;case 36294:return P3;case 36295:return D3;case 36296:return I3;case 35678:case 36198:case 36298:case 36306:case 35682:return k3;case 35680:case 36300:case 36308:case 36293:return F3}}function H3(s,e,t){this.id=s,this.addr=t,this.cache=[],this.setValue=y3(e.type)}function Eb(s,e,t){this.id=s,this.addr=t,this.cache=[],this.size=e.size,this.setValue=N3(e.type)}Eb.prototype.updateCache=function(s){let e=this.cache;s instanceof Float32Array&&e.length!==s.length&&(this.cache=new Float32Array(s.length)),pi(e,s)};function Sb(s){this.id=s,this.seq=[],this.map={}}Sb.prototype.setValue=function(s,e,t){let n=this.seq;for(let i=0,r=n.length;i!==r;++i){let a=n[i];a.setValue(s,e[a.id],t)}};var qm=/(\w+)(\])?(\[|\.)?/g;function Oy(s,e){s.seq.push(e),s.map[e.id]=e}function O3(s,e,t){let n=s.name,i=n.length;for(qm.lastIndex=0;;){let r=qm.exec(n),a=qm.lastIndex,l=r[1],h=r[2]==="]",c=r[3];if(h&&(l=l|0),c===void 0||c==="["&&a+2===i){Oy(t,c===void 0?new H3(l,s,e):new Eb(l,s,e));break}else{let u=t.map[l];u===void 0&&(u=new Sb(l),Oy(t,u)),t=u}}}function fa(s,e){this.seq=[],this.map={};let t=s.getProgramParameter(e,35718);for(let n=0;n<t;++n){let i=s.getActiveUniform(e,n),r=s.getUniformLocation(e,i.name);O3(i,r,this)}}fa.prototype.setValue=function(s,e,t,n){let i=this.map[e];i!==void 0&&i.setValue(s,t,n)};fa.prototype.setOptional=function(s,e,t){let n=e[t];n!==void 0&&this.setValue(s,t,n)};fa.upload=function(s,e,t,n){for(let i=0,r=e.length;i!==r;++i){let a=e[i],l=t[a.id];l.needsUpdate!==!1&&a.setValue(s,l.value,n)}};fa.seqWithValue=function(s,e){let t=[];for(let n=0,i=s.length;n!==i;++n){let r=s[n];r.id in e&&t.push(r)}return t};function By(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var B3=0;function z3(s){let e=s.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Tb(s){switch(s){case wi:return["Linear","( value )"];case Aa:return["sRGB","( value )"];case Zf:return["RGBE","( value )"];case ng:return["RGBM","( value, 7.0 )"];case ig:return["RGBM","( value, 16.0 )"];case rg:return["RGBD","( value, 256.0 )"];case jf:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case hb:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function zy(s,e,t){let n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=s.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+i+z3(r)}function jc(s,e){let t=Tb(e);return"vec4 "+s+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function U3(s,e){let t=Tb(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function G3(s,e){let t;switch(e){case cw:t="Linear";break;case hw:t="Reinhard";break;case uw:t="OptimizedCineon";break;case dw:t="ACESFilmic";break;case fw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function V3(s){return[s.extensionDerivatives||s.envMapCubeUV||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(nh).join(`
`)}function W3(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function q3(s,e){let t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){let a=s.getActiveAttrib(e,i).name;t[a]=s.getAttribLocation(e,a)}return t}function nh(s){return s!==""}function Uy(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gy(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var X3=/^[ \t]*#include +<([\w\d./]+)>/gm;function w0(s){return s.replace(X3,Y3)}function Y3(s,e){let t=Ht[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return w0(t)}var j3=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Z3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vy(s){return s.replace(Z3,Ab).replace(j3,J3)}function J3(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Ab(s,e,t,n)}function Ab(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Wy(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function K3(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===K0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Vx?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Al&&(e="SHADOWMAP_TYPE_VSM"),e}function $3(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ru:case su:e="ENVMAP_TYPE_CUBE";break;case $l:case au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q3(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case su:case au:e="ENVMAP_MODE_REFRACTION";break}return e}function eA(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case iu:e="ENVMAP_BLENDING_MULTIPLY";break;case ow:e="ENVMAP_BLENDING_MIX";break;case lw:e="ENVMAP_BLENDING_ADD";break}return e}function tA(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,l=t.fragmentShader,h=K3(t),c=$3(t),p=Q3(t),u=eA(t),f=s.gammaFactor>0?s.gammaFactor:1,g=t.isWebGL2?"":V3(t),v=W3(r),M=i.createProgram(),S,b,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=[v].filter(nh).join(`
`),S.length>0&&(S+=`
`),b=[g,v].filter(nh).join(`
`),b.length>0&&(b+=`
`)):(S=[Wy(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+f,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nh).join(`
`),b=[g,Wy(t),"#define SHADER_NAME "+t.shaderName,v,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+p:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lo?"#define TONE_MAPPING":"",t.toneMapping!==lo?Ht.tonemapping_pars_fragment:"",t.toneMapping!==lo?G3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",Ht.encodings_pars_fragment,t.map?jc("mapTexelToLinear",t.mapEncoding):"",t.matcap?jc("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?jc("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?jc("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?jc("lightMapTexelToLinear",t.lightMapEncoding):"",U3("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nh).join(`
`)),a=w0(a),a=Uy(a,t),a=Gy(a,t),l=w0(l),l=Uy(l,t),l=Gy(l,t),a=Vy(a),l=Vy(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,S=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,b=["#define varying in",t.glslVersion===y0?"":"out highp vec4 pc_fragColor;",t.glslVersion===y0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let A=x+S+a,F=x+b+l,z=By(i,35633,A),C=By(i,35632,F);if(i.attachShader(M,z),i.attachShader(M,C),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M),s.debug.checkShaderErrors){let ee=i.getProgramInfoLog(M).trim(),ae=i.getShaderInfoLog(z).trim(),we=i.getShaderInfoLog(C).trim(),he=!0,Z=!0;if(i.getProgramParameter(M,35714)===!1){he=!1;let te=zy(i,z,"vertex"),ie=zy(i,C,"fragment");console.error("THREE.WebGLProgram: shader error: ",i.getError(),"35715",i.getProgramParameter(M,35715),"gl.getProgramInfoLog",ee,te,ie)}else ee!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",ee):(ae===""||we==="")&&(Z=!1);Z&&(this.diagnostics={runnable:he,programLog:ee,vertexShader:{log:ae,prefix:S},fragmentShader:{log:we,prefix:b}})}i.deleteShader(z),i.deleteShader(C);let W;this.getUniforms=function(){return W===void 0&&(W=new fa(i,M)),W};let q;return this.getAttributes=function(){return q===void 0&&(q=q3(i,M)),q},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.name=t.shaderName,this.id=B3++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=z,this.fragmentShader=C,this}function nA(s,e,t,n,i,r){let a=[],l=n.isWebGL2,h=n.logarithmicDepthBuffer,c=n.floatVertexTextures,p=n.maxVertexUniforms,u=n.vertexTextures,f=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},v=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function M(C){let q=C.skeleton.bones;if(c)return 1024;{let ae=Math.floor((p-20)/4),we=Math.min(ae,q.length);return we<q.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+q.length+" bones. This GPU supports "+we+"."),0):we}}function S(C){let W;return C&&C.isTexture?W=C.encoding:C&&C.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),W=C.texture.encoding):W=wi,W}function b(C,W,q,ee,ae){let we=ee.fog,he=C.isMeshStandardMaterial?ee.environment:null,Z=e.get(C.envMap||he),te=g[C.type],ie=ae.isSkinnedMesh?M(ae):0;C.precision!==null&&(f=n.getMaxPrecision(C.precision),f!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",f,"instead."));let Y,Le;if(te){let Ke=Lr[te];Y=Ke.vertexShader,Le=Ke.fragmentShader}else Y=C.vertexShader,Le=C.fragmentShader;let Be=s.getRenderTarget();return{isWebGL2:l,shaderID:te,shaderName:C.type,vertexShader:Y,fragmentShader:Le,defines:C.defines,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:f,instancing:ae.isInstancedMesh===!0,instancingColor:ae.isInstancedMesh===!0&&ae.instanceColor!==null,supportsVertexTextures:u,outputEncoding:Be!==null?S(Be.texture):s.outputEncoding,map:!!C.map,mapEncoding:S(C.map),matcap:!!C.matcap,matcapEncoding:S(C.matcap),envMap:!!Z,envMapMode:Z&&Z.mapping,envMapEncoding:S(Z),envMapCubeUV:!!Z&&(Z.mapping===$l||Z.mapping===au),lightMap:!!C.lightMap,lightMapEncoding:S(C.lightMap),aoMap:!!C.aoMap,emissiveMap:!!C.emissiveMap,emissiveMapEncoding:S(C.emissiveMap),bumpMap:!!C.bumpMap,normalMap:!!C.normalMap,objectSpaceNormalMap:C.normalMapType===fb,tangentSpaceNormalMap:C.normalMapType===Po,clearcoatMap:!!C.clearcoatMap,clearcoatRoughnessMap:!!C.clearcoatRoughnessMap,clearcoatNormalMap:!!C.clearcoatNormalMap,displacementMap:!!C.displacementMap,roughnessMap:!!C.roughnessMap,metalnessMap:!!C.metalnessMap,specularMap:!!C.specularMap,alphaMap:!!C.alphaMap,gradientMap:!!C.gradientMap,sheen:!!C.sheen,transmissionMap:!!C.transmissionMap,combine:C.combine,vertexTangents:C.normalMap&&C.vertexTangents,vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&ae.geometry&&ae.geometry.attributes.color&&ae.geometry.attributes.color.itemSize===4,vertexUvs:!!C.map||!!C.bumpMap||!!C.normalMap||!!C.specularMap||!!C.alphaMap||!!C.emissiveMap||!!C.roughnessMap||!!C.metalnessMap||!!C.clearcoatMap||!!C.clearcoatRoughnessMap||!!C.clearcoatNormalMap||!!C.displacementMap||!!C.transmissionMap,uvsVertexOnly:!(C.map||C.bumpMap||C.normalMap||C.specularMap||C.alphaMap||C.emissiveMap||C.roughnessMap||C.metalnessMap||C.clearcoatNormalMap||C.transmissionMap)&&!!C.displacementMap,fog:!!we,useFog:C.fog,fogExp2:we&&we.isFogExp2,flatShading:!!C.flatShading,sizeAttenuation:C.sizeAttenuation,logarithmicDepthBuffer:h,skinning:C.skinning&&ie>0,maxBones:ie,useVertexTexture:c,morphTargets:C.morphTargets,morphNormals:C.morphNormals,numDirLights:W.directional.length,numPointLights:W.point.length,numSpotLights:W.spot.length,numRectAreaLights:W.rectArea.length,numHemiLights:W.hemi.length,numDirLightShadows:W.directionalShadowMap.length,numPointLightShadows:W.pointShadowMap.length,numSpotLightShadows:W.spotShadowMap.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:C.toneMapped?s.toneMapping:lo,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:C.premultipliedAlpha,alphaTest:C.alphaTest,doubleSided:C.side===ii,flipSided:C.side===xn,depthPacking:C.depthPacking!==void 0?C.depthPacking:!1,index0AttributeName:C.index0AttributeName,extensionDerivatives:C.extensions&&C.extensions.derivatives,extensionFragDepth:C.extensions&&C.extensions.fragDepth,extensionDrawBuffers:C.extensions&&C.extensions.drawBuffers,extensionShaderTextureLOD:C.extensions&&C.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||t.has("EXT_shader_texture_lod"),customProgramCacheKey:C.customProgramCacheKey()}}function x(C){let W=[];if(C.shaderID?W.push(C.shaderID):(W.push(C.fragmentShader),W.push(C.vertexShader)),C.defines!==void 0)for(let q in C.defines)W.push(q),W.push(C.defines[q]);if(C.isRawShaderMaterial===!1){for(let q=0;q<v.length;q++)W.push(C[v[q]]);W.push(s.outputEncoding),W.push(s.gammaFactor)}return W.push(C.customProgramCacheKey),W.join()}function A(C){let W=g[C.type],q;if(W){let ee=Lr[W];q=xb.clone(ee.uniforms)}else q=C.uniforms;return q}function F(C,W){let q;for(let ee=0,ae=a.length;ee<ae;ee++){let we=a[ee];if(we.cacheKey===W){q=we,++q.usedTimes;break}}return q===void 0&&(q=new tA(s,W,C,i),a.push(q)),q}function z(C){if(--C.usedTimes===0){let W=a.indexOf(C);a[W]=a[a.length-1],a.pop(),C.destroy()}}return{getParameters:b,getProgramCacheKey:x,getUniforms:A,acquireProgram:F,releaseProgram:z,programs:a}}function iA(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,l){s.get(r)[a]=l}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function rA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.program!==e.program?s.program.id-e.program.id:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function sA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qy(s){let e=[],t=0,n=[],i=[],r={id:-1};function a(){t=0,n.length=0,i.length=0}function l(f,g,v,M,S,b){let x=e[t],A=s.get(v);return x===void 0?(x={id:f.id,object:f,geometry:g,material:v,program:A.program||r,groupOrder:M,renderOrder:f.renderOrder,z:S,group:b},e[t]=x):(x.id=f.id,x.object=f,x.geometry=g,x.material=v,x.program=A.program||r,x.groupOrder=M,x.renderOrder=f.renderOrder,x.z=S,x.group=b),t++,x}function h(f,g,v,M,S,b){let x=l(f,g,v,M,S,b);(v.transparent===!0?i:n).push(x)}function c(f,g,v,M,S,b){let x=l(f,g,v,M,S,b);(v.transparent===!0?i:n).unshift(x)}function p(f,g){n.length>1&&n.sort(f||rA),i.length>1&&i.sort(g||sA)}function u(){for(let f=t,g=e.length;f<g;f++){let v=e[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.program=null,v.group=null}}return{opaque:n,transparent:i,init:a,push:h,unshift:c,finish:u,sort:p}}function aA(s){let e=new WeakMap;function t(i,r){let a;return e.has(i)===!1?(a=new qy(s),e.set(i,[a])):r>=e.get(i).length?(a=new qy(s),e.get(i).push(a)):a=e.get(i)[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function oA(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Pe};break;case"SpotLight":t={position:new L,direction:new L,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function lA(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var cA=0;function hA(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function uA(s,e){let t=new oA,n=lA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let p=0;p<9;p++)i.probe.push(new L);let r=new L,a=new nt,l=new nt;function h(p){let u=0,f=0,g=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let v=0,M=0,S=0,b=0,x=0,A=0,F=0,z=0;p.sort(hA);for(let W=0,q=p.length;W<q;W++){let ee=p[W],ae=ee.color,we=ee.intensity,he=ee.distance,Z=ee.shadow&&ee.shadow.map?ee.shadow.map.texture:null;if(ee.isAmbientLight)u+=ae.r*we,f+=ae.g*we,g+=ae.b*we;else if(ee.isLightProbe)for(let te=0;te<9;te++)i.probe[te].addScaledVector(ee.sh.coefficients[te],we);else if(ee.isDirectionalLight){let te=t.get(ee);if(te.color.copy(ee.color).multiplyScalar(ee.intensity),ee.castShadow){let ie=ee.shadow,Y=n.get(ee);Y.shadowBias=ie.bias,Y.shadowNormalBias=ie.normalBias,Y.shadowRadius=ie.radius,Y.shadowMapSize=ie.mapSize,i.directionalShadow[v]=Y,i.directionalShadowMap[v]=Z,i.directionalShadowMatrix[v]=ee.shadow.matrix,A++}i.directional[v]=te,v++}else if(ee.isSpotLight){let te=t.get(ee);if(te.position.setFromMatrixPosition(ee.matrixWorld),te.color.copy(ae).multiplyScalar(we),te.distance=he,te.coneCos=Math.cos(ee.angle),te.penumbraCos=Math.cos(ee.angle*(1-ee.penumbra)),te.decay=ee.decay,ee.castShadow){let ie=ee.shadow,Y=n.get(ee);Y.shadowBias=ie.bias,Y.shadowNormalBias=ie.normalBias,Y.shadowRadius=ie.radius,Y.shadowMapSize=ie.mapSize,i.spotShadow[S]=Y,i.spotShadowMap[S]=Z,i.spotShadowMatrix[S]=ee.shadow.matrix,z++}i.spot[S]=te,S++}else if(ee.isRectAreaLight){let te=t.get(ee);te.color.copy(ae).multiplyScalar(we),te.halfWidth.set(ee.width*.5,0,0),te.halfHeight.set(0,ee.height*.5,0),i.rectArea[b]=te,b++}else if(ee.isPointLight){let te=t.get(ee);if(te.color.copy(ee.color).multiplyScalar(ee.intensity),te.distance=ee.distance,te.decay=ee.decay,ee.castShadow){let ie=ee.shadow,Y=n.get(ee);Y.shadowBias=ie.bias,Y.shadowNormalBias=ie.normalBias,Y.shadowRadius=ie.radius,Y.shadowMapSize=ie.mapSize,Y.shadowCameraNear=ie.camera.near,Y.shadowCameraFar=ie.camera.far,i.pointShadow[M]=Y,i.pointShadowMap[M]=Z,i.pointShadowMatrix[M]=ee.shadow.matrix,F++}i.point[M]=te,M++}else if(ee.isHemisphereLight){let te=t.get(ee);te.skyColor.copy(ee.color).multiplyScalar(we),te.groundColor.copy(ee.groundColor).multiplyScalar(we),i.hemi[x]=te,x++}}b>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=qe.LTC_FLOAT_1,i.rectAreaLTC2=qe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=qe.LTC_HALF_1,i.rectAreaLTC2=qe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;let C=i.hash;(C.directionalLength!==v||C.pointLength!==M||C.spotLength!==S||C.rectAreaLength!==b||C.hemiLength!==x||C.numDirectionalShadows!==A||C.numPointShadows!==F||C.numSpotShadows!==z)&&(i.directional.length=v,i.spot.length=S,i.rectArea.length=b,i.point.length=M,i.hemi.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=F,i.pointShadowMap.length=F,i.spotShadow.length=z,i.spotShadowMap.length=z,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=F,i.spotShadowMatrix.length=z,C.directionalLength=v,C.pointLength=M,C.spotLength=S,C.rectAreaLength=b,C.hemiLength=x,C.numDirectionalShadows=A,C.numPointShadows=F,C.numSpotShadows=z,i.version=cA++)}function c(p,u){let f=0,g=0,v=0,M=0,S=0,b=u.matrixWorldInverse;for(let x=0,A=p.length;x<A;x++){let F=p[x];if(F.isDirectionalLight){let z=i.directional[f];z.direction.setFromMatrixPosition(F.matrixWorld),r.setFromMatrixPosition(F.target.matrixWorld),z.direction.sub(r),z.direction.transformDirection(b),f++}else if(F.isSpotLight){let z=i.spot[v];z.position.setFromMatrixPosition(F.matrixWorld),z.position.applyMatrix4(b),z.direction.setFromMatrixPosition(F.matrixWorld),r.setFromMatrixPosition(F.target.matrixWorld),z.direction.sub(r),z.direction.transformDirection(b),v++}else if(F.isRectAreaLight){let z=i.rectArea[M];z.position.setFromMatrixPosition(F.matrixWorld),z.position.applyMatrix4(b),l.identity(),a.copy(F.matrixWorld),a.premultiply(b),l.extractRotation(a),z.halfWidth.set(F.width*.5,0,0),z.halfHeight.set(0,F.height*.5,0),z.halfWidth.applyMatrix4(l),z.halfHeight.applyMatrix4(l),M++}else if(F.isPointLight){let z=i.point[g];z.position.setFromMatrixPosition(F.matrixWorld),z.position.applyMatrix4(b),g++}else if(F.isHemisphereLight){let z=i.hemi[S];z.direction.setFromMatrixPosition(F.matrixWorld),z.direction.transformDirection(b),z.direction.normalize(),S++}}}return{setup:h,setupView:c,state:i}}function Xy(s,e){let t=new uA(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function l(u){i.push(u)}function h(){t.setup(n)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:h,setupLightsView:c,pushLight:a,pushShadow:l}}function dA(s,e){let t=new WeakMap;function n(r,a=0){let l;return t.has(r)===!1?(l=new Xy(s,e),t.set(r,[l])):a>=t.get(r).length?(l=new Xy(s,e),t.get(r).push(l)):l=t.get(r)[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var Bl=class extends Un{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=ub,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};Bl.prototype.isMeshDepthMaterial=!0;var zl=class extends Un{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};zl.prototype.isMeshDistanceMaterial=!0;var fA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
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
}`,pA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Rb(s,e,t){let n=new Ds,i=new _e,r=new _e,a=new Pt,l=[],h=[],c={},p=t.maxTextureSize,u={0:xn,1:Jl,2:ii},f=new gn({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:pA,fragmentShader:fA}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let v=new Qe;v.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Et(v,f),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=K0,this.render=function(C,W,q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||C.length===0)return;let ee=s.getRenderTarget(),ae=s.getActiveCubeFace(),we=s.getActiveMipmapLevel(),he=s.state;he.setBlending(Ls),he.buffers.color.setClear(1,1,1,1),he.buffers.depth.setTest(!0),he.setScissorTest(!1);for(let Z=0,te=C.length;Z<te;Z++){let ie=C[Z],Y=ie.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let Le=Y.getFrameExtents();if(i.multiply(Le),r.copy(Y.mapSize),(i.x>p||i.y>p)&&(i.x>p&&(r.x=Math.floor(p/Le.x),i.x=r.x*Le.x,Y.mapSize.x=r.x),i.y>p&&(r.y=Math.floor(p/Le.y),i.y=r.y*Le.y,Y.mapSize.y=r.y)),Y.map===null&&!Y.isPointLightShadow&&this.type===Al){let Oe={minFilter:jt,magFilter:jt,format:oi};Y.map=new Ln(i.x,i.y,Oe),Y.map.texture.name=ie.name+".shadowMap",Y.mapPass=new Ln(i.x,i.y,Oe),Y.camera.updateProjectionMatrix()}if(Y.map===null){let Oe={minFilter:Rn,magFilter:Rn,format:oi};Y.map=new Ln(i.x,i.y,Oe),Y.map.texture.name=ie.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();let Be=Y.getViewportCount();for(let Oe=0;Oe<Be;Oe++){let Ke=Y.getViewport(Oe);a.set(r.x*Ke.x,r.y*Ke.y,r.x*Ke.z,r.y*Ke.w),he.viewport(a),Y.updateMatrices(ie,Oe),n=Y.getFrustum(),z(W,q,Y.camera,ie,this.type)}!Y.isPointLightShadow&&this.type===Al&&b(Y,q),Y.needsUpdate=!1}S.needsUpdate=!1,s.setRenderTarget(ee,ae,we)};function b(C,W){let q=e.update(M);f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(W,null,q,f,M,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(W,null,q,g,M,null)}function x(C,W,q){let ee=C<<0|W<<1|q<<2,ae=l[ee];return ae===void 0&&(ae=new Bl({depthPacking:db,morphTargets:C,skinning:W}),l[ee]=ae),ae}function A(C,W,q){let ee=C<<0|W<<1|q<<2,ae=h[ee];return ae===void 0&&(ae=new zl({morphTargets:C,skinning:W}),h[ee]=ae),ae}function F(C,W,q,ee,ae,we,he){let Z=null,te=x,ie=C.customDepthMaterial;if(ee.isPointLight===!0&&(te=A,ie=C.customDistanceMaterial),ie===void 0){let Y=!1;q.morphTargets===!0&&(Y=W.morphAttributes&&W.morphAttributes.position&&W.morphAttributes.position.length>0);let Le=!1;C.isSkinnedMesh===!0&&(q.skinning===!0?Le=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",C));let Be=C.isInstancedMesh===!0;Z=te(Y,Le,Be)}else Z=ie;if(s.localClippingEnabled&&q.clipShadows===!0&&q.clippingPlanes.length!==0){let Y=Z.uuid,Le=q.uuid,Be=c[Y];Be===void 0&&(Be={},c[Y]=Be);let Oe=Be[Le];Oe===void 0&&(Oe=Z.clone(),Be[Le]=Oe),Z=Oe}return Z.visible=q.visible,Z.wireframe=q.wireframe,he===Al?Z.side=q.shadowSide!==null?q.shadowSide:q.side:Z.side=q.shadowSide!==null?q.shadowSide:u[q.side],Z.clipShadows=q.clipShadows,Z.clippingPlanes=q.clippingPlanes,Z.clipIntersection=q.clipIntersection,Z.wireframeLinewidth=q.wireframeLinewidth,Z.linewidth=q.linewidth,ee.isPointLight===!0&&Z.isMeshDistanceMaterial===!0&&(Z.referencePosition.setFromMatrixPosition(ee.matrixWorld),Z.nearDistance=ae,Z.farDistance=we),Z}function z(C,W,q,ee,ae){if(C.visible===!1)return;if(C.layers.test(W.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&ae===Al)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld);let Z=e.update(C),te=C.material;if(Array.isArray(te)){let ie=Z.groups;for(let Y=0,Le=ie.length;Y<Le;Y++){let Be=ie[Y],Oe=te[Be.materialIndex];if(Oe&&Oe.visible){let Ke=F(C,Z,Oe,ee,q.near,q.far,ae);s.renderBufferDirect(q,null,Z,Ke,C,Be)}}}else if(te.visible){let ie=F(C,Z,te,ee,q.near,q.far,ae);s.renderBufferDirect(q,null,Z,ie,C,null)}}let he=C.children;for(let Z=0,te=he.length;Z<te;Z++)z(he[Z],W,q,ee,ae)}}function mA(s,e,t){let n=t.isWebGL2;function i(){let j=!1,ke=new Pt,Ve=null,it=new Pt(0,0,0,0);return{setMask:function(N){Ve!==N&&!j&&(s.colorMask(N,N,N,N),Ve=N)},setLocked:function(N){j=N},setClear:function(N,st,qt,rt,Dr){Dr===!0&&(N*=rt,st*=rt,qt*=rt),ke.set(N,st,qt,rt),it.equals(ke)===!1&&(s.clearColor(N,st,qt,rt),it.copy(ke))},reset:function(){j=!1,Ve=null,it.set(-1,0,0,0)}}}function r(){let j=!1,ke=null,Ve=null,it=null;return{setTest:function(N){N?ut(2929):xt(2929)},setMask:function(N){ke!==N&&!j&&(s.depthMask(N),ke=N)},setFunc:function(N){if(Ve!==N){if(N)switch(N){case ew:s.depthFunc(512);break;case tw:s.depthFunc(519);break;case nw:s.depthFunc(513);break;case jd:s.depthFunc(515);break;case iw:s.depthFunc(514);break;case rw:s.depthFunc(518);break;case sw:s.depthFunc(516);break;case aw:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);Ve=N}},setLocked:function(N){j=N},setClear:function(N){it!==N&&(s.clearDepth(N),it=N)},reset:function(){j=!1,ke=null,Ve=null,it=null}}}function a(){let j=!1,ke=null,Ve=null,it=null,N=null,st=null,qt=null,rt=null,Dr=null;return{setTest:function(bn){j||(bn?ut(2960):xt(2960))},setMask:function(bn){ke!==bn&&!j&&(s.stencilMask(bn),ke=bn)},setFunc:function(bn,Fe,an){(Ve!==bn||it!==Fe||N!==an)&&(s.stencilFunc(bn,Fe,an),Ve=bn,it=Fe,N=an)},setOp:function(bn,Fe,an){(st!==bn||qt!==Fe||rt!==an)&&(s.stencilOp(bn,Fe,an),st=bn,qt=Fe,rt=an)},setLocked:function(bn){j=bn},setClear:function(bn){Dr!==bn&&(s.clearStencil(bn),Dr=bn)},reset:function(){j=!1,ke=null,Ve=null,it=null,N=null,st=null,qt=null,rt=null,Dr=null}}}let l=new i,h=new r,c=new a,p={},u=null,f={},g=null,v=!1,M=null,S=null,b=null,x=null,A=null,F=null,z=null,C=!1,W=null,q=null,ee=null,ae=null,we=null,he=s.getParameter(35661),Z=!1,te=0,ie=s.getParameter(7938);ie.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ie)[1]),Z=te>=1):ie.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),Z=te>=2);let Y=null,Le={},Be=new Pt(0,0,s.canvas.width,s.canvas.height),Oe=new Pt(0,0,s.canvas.width,s.canvas.height);function Ke(j,ke,Ve){let it=new Uint8Array(4),N=s.createTexture();s.bindTexture(j,N),s.texParameteri(j,10241,9728),s.texParameteri(j,10240,9728);for(let st=0;st<Ve;st++)s.texImage2D(ke+st,0,6408,1,1,0,6408,5121,it);return N}let ze={};ze[3553]=Ke(3553,3553,1),ze[34067]=Ke(34067,34069,6),l.setClear(0,0,0,1),h.setClear(1),c.setClear(0),ut(2929),h.setFunc(jd),Tt(!1),Ne(i0),ut(2884),Wt(Ls);function ut(j){p[j]!==!0&&(s.enable(j),p[j]=!0)}function xt(j){p[j]!==!1&&(s.disable(j),p[j]=!1)}function ye(j){j!==u&&(s.bindFramebuffer(36160,j),u=j)}function en(j,ke){ke===null&&u!==null&&(ke=u),f[j]!==ke&&(s.bindFramebuffer(j,ke),f[j]=ke,n&&(j===36009&&(f[36160]=ke),j===36160&&(f[36009]=ke)))}function Dt(j){return g!==j?(s.useProgram(j),g=j,!0):!1}let bt={[so]:32774,[Wx]:32778,[qx]:32779};if(n)bt[a0]=32775,bt[o0]=32776;else{let j=e.get("EXT_blend_minmax");j!==null&&(bt[a0]=j.MIN_EXT,bt[o0]=j.MAX_EXT)}let dt={[Xx]:0,[nu]:1,[Yx]:768,[Q0]:770,[Qx]:776,[Kx]:774,[Zx]:772,[jx]:769,[Kl]:771,[$x]:775,[Jx]:773};function Wt(j,ke,Ve,it,N,st,qt,rt){if(j===Ls){v===!0&&(xt(3042),v=!1);return}if(v===!1&&(ut(3042),v=!0),j!==qf){if(j!==M||rt!==C){if((S!==so||A!==so)&&(s.blendEquation(32774),S=so,A=so),rt)switch(j){case Ll:s.blendFuncSeparate(1,771,1,771);break;case Vt:s.blendFunc(1,1);break;case r0:s.blendFuncSeparate(0,0,769,771);break;case s0:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Ll:s.blendFuncSeparate(770,771,1,771);break;case Vt:s.blendFunc(770,1);break;case r0:s.blendFunc(0,769);break;case s0:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}b=null,x=null,F=null,z=null,M=j,C=rt}return}N=N||ke,st=st||Ve,qt=qt||it,(ke!==S||N!==A)&&(s.blendEquationSeparate(bt[ke],bt[N]),S=ke,A=N),(Ve!==b||it!==x||st!==F||qt!==z)&&(s.blendFuncSeparate(dt[Ve],dt[it],dt[st],dt[qt]),b=Ve,x=it,F=st,z=qt),M=j,C=null}function Rt(j,ke){j.side===ii?xt(2884):ut(2884);let Ve=j.side===xn;ke&&(Ve=!Ve),Tt(Ve),j.blending===Ll&&j.transparent===!1?Wt(Ls):Wt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.premultipliedAlpha),h.setFunc(j.depthFunc),h.setTest(j.depthTest),h.setMask(j.depthWrite),l.setMask(j.colorWrite);let it=j.stencilWrite;c.setTest(it),it&&(c.setMask(j.stencilWriteMask),c.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),c.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),We(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ut(32926):xt(32926)}function Tt(j){W!==j&&(j?s.frontFace(2304):s.frontFace(2305),W=j)}function Ne(j){j!==Ux?(ut(2884),j!==q&&(j===i0?s.cullFace(1029):j===Gx?s.cullFace(1028):s.cullFace(1032))):xt(2884),q=j}function Ge(j){j!==ee&&(Z&&s.lineWidth(j),ee=j)}function We(j,ke,Ve){j?(ut(32823),(ae!==ke||we!==Ve)&&(s.polygonOffset(ke,Ve),ae=ke,we=Ve)):xt(32823)}function at(j){j?ut(3089):xt(3089)}function je(j){j===void 0&&(j=33984+he-1),Y!==j&&(s.activeTexture(j),Y=j)}function V(j,ke){Y===null&&je();let Ve=Le[Y];Ve===void 0&&(Ve={type:void 0,texture:void 0},Le[Y]=Ve),(Ve.type!==j||Ve.texture!==ke)&&(s.bindTexture(j,ke||ze[j]),Ve.type=j,Ve.texture=ke)}function B(){let j=Le[Y];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function be(){try{s.compressedTexImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ge(){try{s.texImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ie(){try{s.texImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ze(j){Be.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),Be.copy(j))}function It(j){Oe.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),Oe.copy(j))}function ft(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},Y=null,Le={},u=null,f={},g=null,v=!1,M=null,S=null,b=null,x=null,A=null,F=null,z=null,C=!1,W=null,q=null,ee=null,ae=null,we=null,Be.set(0,0,s.canvas.width,s.canvas.height),Oe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),h.reset(),c.reset()}return{buffers:{color:l,depth:h,stencil:c},enable:ut,disable:xt,bindFramebuffer:en,bindXRFramebuffer:ye,useProgram:Dt,setBlending:Wt,setMaterial:Rt,setFlipSided:Tt,setCullFace:Ne,setLineWidth:Ge,setPolygonOffset:We,setScissorTest:at,activeTexture:je,bindTexture:V,unbindTexture:B,compressedTexImage2D:be,texImage2D:ge,texImage3D:Ie,scissor:Ze,viewport:It,reset:ft}}function gA(s,e,t,n,i,r,a){let l=i.isWebGL2,h=i.maxTextures,c=i.maxCubemapSize,p=i.maxTextureSize,u=i.maxSamples,f=new WeakMap,g,v=!1;try{v=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(V){}function M(V,B){return v?new OffscreenCanvas(V,B):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function S(V,B,be,ge){let Ie=1;if((V.width>ge||V.height>ge)&&(Ie=ge/Math.max(V.width,V.height)),Ie<1||B===!0)if(typeof HTMLImageElement!="undefined"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&V instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&V instanceof ImageBitmap){let Ze=B?gb:Math.floor,It=Ze(Ie*V.width),ft=Ze(Ie*V.height);g===void 0&&(g=M(It,ft));let j=be?M(It,ft):g;return j.width=It,j.height=ft,j.getContext("2d").drawImage(V,0,0,It,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+It+"x"+ft+")."),j}else return"data"in V&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),V;return V}function b(V){return x0(V.width)&&x0(V.height)}function x(V){return l?!1:V.wrapS!==xi||V.wrapT!==xi||V.minFilter!==Rn&&V.minFilter!==jt}function A(V,B){return V.generateMipmaps&&B&&V.minFilter!==Rn&&V.minFilter!==jt}function F(V,B,be,ge){s.generateMipmap(V);let Ie=n.get(B);Ie.__maxMipLevel=Math.log2(Math.max(be,ge))}function z(V,B,be){if(l===!1)return B;if(V!==null){if(s[V]!==void 0)return s[V];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let ge=B;return B===6403&&(be===5126&&(ge=33326),be===5131&&(ge=33325),be===5121&&(ge=33321)),B===6407&&(be===5126&&(ge=34837),be===5131&&(ge=34843),be===5121&&(ge=32849)),B===6408&&(be===5126&&(ge=34836),be===5131&&(ge=34842),be===5121&&(ge=32856)),(ge===33325||ge===33326||ge===34842||ge===34836)&&e.get("EXT_color_buffer_float"),ge}function C(V){return V===Rn||V===Kd||V===$d?9728:9729}function W(V){let B=V.target;B.removeEventListener("dispose",W),ee(B),B.isVideoTexture&&f.delete(B),a.memory.textures--}function q(V){let B=V.target;B.removeEventListener("dispose",q),ae(B),a.memory.textures--}function ee(V){let B=n.get(V);B.__webglInit!==void 0&&(s.deleteTexture(B.__webglTexture),n.remove(V))}function ae(V){let B=V.texture,be=n.get(V),ge=n.get(B);if(V){if(ge.__webglTexture!==void 0&&s.deleteTexture(ge.__webglTexture),V.depthTexture&&V.depthTexture.dispose(),V.isWebGLCubeRenderTarget)for(let Ie=0;Ie<6;Ie++)s.deleteFramebuffer(be.__webglFramebuffer[Ie]),be.__webglDepthbuffer&&s.deleteRenderbuffer(be.__webglDepthbuffer[Ie]);else s.deleteFramebuffer(be.__webglFramebuffer),be.__webglDepthbuffer&&s.deleteRenderbuffer(be.__webglDepthbuffer),be.__webglMultisampledFramebuffer&&s.deleteFramebuffer(be.__webglMultisampledFramebuffer),be.__webglColorRenderbuffer&&s.deleteRenderbuffer(be.__webglColorRenderbuffer),be.__webglDepthRenderbuffer&&s.deleteRenderbuffer(be.__webglDepthRenderbuffer);n.remove(B),n.remove(V)}}let we=0;function he(){we=0}function Z(){let V=we;return V>=h&&console.warn("THREE.WebGLTextures: Trying to use "+V+" texture units while this GPU supports only "+h),we+=1,V}function te(V,B){let be=n.get(V);if(V.isVideoTexture&&Ne(V),V.version>0&&be.__version!==V.version){let ge=V.image;if(ge===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(be,V,B);return}}t.activeTexture(33984+B),t.bindTexture(3553,be.__webglTexture)}function ie(V,B){let be=n.get(V);if(V.version>0&&be.__version!==V.version){ut(be,V,B);return}t.activeTexture(33984+B),t.bindTexture(35866,be.__webglTexture)}function Y(V,B){let be=n.get(V);if(V.version>0&&be.__version!==V.version){ut(be,V,B);return}t.activeTexture(33984+B),t.bindTexture(32879,be.__webglTexture)}function Le(V,B){let be=n.get(V);if(V.version>0&&be.__version!==V.version){xt(be,V,B);return}t.activeTexture(33984+B),t.bindTexture(34067,be.__webglTexture)}let Be={[uo]:10497,[xi]:33071,[lh]:33648},Oe={[Rn]:9728,[Kd]:9984,[$d]:9986,[jt]:9729,[eg]:9985,[Sa]:9987};function Ke(V,B,be){if(be?(s.texParameteri(V,10242,Be[B.wrapS]),s.texParameteri(V,10243,Be[B.wrapT]),(V===32879||V===35866)&&s.texParameteri(V,32882,Be[B.wrapR]),s.texParameteri(V,10240,Oe[B.magFilter]),s.texParameteri(V,10241,Oe[B.minFilter])):(s.texParameteri(V,10242,33071),s.texParameteri(V,10243,33071),(V===32879||V===35866)&&s.texParameteri(V,32882,33071),(B.wrapS!==xi||B.wrapT!==xi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(V,10240,C(B.magFilter)),s.texParameteri(V,10241,C(B.minFilter)),B.minFilter!==Rn&&B.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let ge=e.get("EXT_texture_filter_anisotropic");if(B.type===Rs&&e.has("OES_texture_float_linear")===!1||l===!1&&B.type===fo&&e.has("OES_texture_half_float_linear")===!1)return;(B.anisotropy>1||n.get(B).__currentAnisotropy)&&(s.texParameterf(V,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(B.anisotropy,i.getMaxAnisotropy())),n.get(B).__currentAnisotropy=B.anisotropy)}}function ze(V,B){V.__webglInit===void 0&&(V.__webglInit=!0,B.addEventListener("dispose",W),V.__webglTexture=s.createTexture(),a.memory.textures++)}function ut(V,B,be){let ge=3553;B.isDataTexture2DArray&&(ge=35866),B.isDataTexture3D&&(ge=32879),ze(V,B),t.activeTexture(33984+be),t.bindTexture(ge,V.__webglTexture),s.pixelStorei(37440,B.flipY),s.pixelStorei(37441,B.premultiplyAlpha),s.pixelStorei(3317,B.unpackAlignment),s.pixelStorei(37443,0);let Ie=x(B)&&b(B.image)===!1,Ze=S(B.image,Ie,!1,p),It=b(Ze)||l,ft=r.convert(B.format),j=r.convert(B.type),ke=z(B.internalFormat,ft,j);Ke(ge,B,It);let Ve,it=B.mipmaps;if(B.isDepthTexture)ke=6402,l?B.type===Rs?ke=36012:B.type===ih?ke=33190:B.type===Cl?ke=35056:ke=33189:B.type===Rs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),B.format===co&&ke===6402&&B.type!==ch&&B.type!==ih&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),B.type=ch,j=r.convert(B.type)),B.format===Dl&&ke===6402&&(ke=34041,B.type!==Cl&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),B.type=Cl,j=r.convert(B.type))),t.texImage2D(3553,0,ke,Ze.width,Ze.height,0,ft,j,null);else if(B.isDataTexture)if(it.length>0&&It){for(let N=0,st=it.length;N<st;N++)Ve=it[N],t.texImage2D(3553,N,ke,Ve.width,Ve.height,0,ft,j,Ve.data);B.generateMipmaps=!1,V.__maxMipLevel=it.length-1}else t.texImage2D(3553,0,ke,Ze.width,Ze.height,0,ft,j,Ze.data),V.__maxMipLevel=0;else if(B.isCompressedTexture){for(let N=0,st=it.length;N<st;N++)Ve=it[N],B.format!==oi&&B.format!==da?ft!==null?t.compressedTexImage2D(3553,N,ke,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,N,ke,Ve.width,Ve.height,0,ft,j,Ve.data);V.__maxMipLevel=it.length-1}else if(B.isDataTexture2DArray)t.texImage3D(35866,0,ke,Ze.width,Ze.height,Ze.depth,0,ft,j,Ze.data),V.__maxMipLevel=0;else if(B.isDataTexture3D)t.texImage3D(32879,0,ke,Ze.width,Ze.height,Ze.depth,0,ft,j,Ze.data),V.__maxMipLevel=0;else if(it.length>0&&It){for(let N=0,st=it.length;N<st;N++)Ve=it[N],t.texImage2D(3553,N,ke,ft,j,Ve);B.generateMipmaps=!1,V.__maxMipLevel=it.length-1}else t.texImage2D(3553,0,ke,ft,j,Ze),V.__maxMipLevel=0;A(B,It)&&F(ge,B,Ze.width,Ze.height),V.__version=B.version,B.onUpdate&&B.onUpdate(B)}function xt(V,B,be){if(B.image.length!==6)return;ze(V,B),t.activeTexture(33984+be),t.bindTexture(34067,V.__webglTexture),s.pixelStorei(37440,B.flipY),s.pixelStorei(37441,B.premultiplyAlpha),s.pixelStorei(3317,B.unpackAlignment),s.pixelStorei(37443,0);let ge=B&&(B.isCompressedTexture||B.image[0].isCompressedTexture),Ie=B.image[0]&&B.image[0].isDataTexture,Ze=[];for(let N=0;N<6;N++)!ge&&!Ie?Ze[N]=S(B.image[N],!1,!0,c):Ze[N]=Ie?B.image[N].image:B.image[N];let It=Ze[0],ft=b(It)||l,j=r.convert(B.format),ke=r.convert(B.type),Ve=z(B.internalFormat,j,ke);Ke(34067,B,ft);let it;if(ge){for(let N=0;N<6;N++){it=Ze[N].mipmaps;for(let st=0;st<it.length;st++){let qt=it[st];B.format!==oi&&B.format!==da?j!==null?t.compressedTexImage2D(34069+N,st,Ve,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+N,st,Ve,qt.width,qt.height,0,j,ke,qt.data)}}V.__maxMipLevel=it.length-1}else{it=B.mipmaps;for(let N=0;N<6;N++)if(Ie){t.texImage2D(34069+N,0,Ve,Ze[N].width,Ze[N].height,0,j,ke,Ze[N].data);for(let st=0;st<it.length;st++){let rt=it[st].image[N].image;t.texImage2D(34069+N,st+1,Ve,rt.width,rt.height,0,j,ke,rt.data)}}else{t.texImage2D(34069+N,0,Ve,j,ke,Ze[N]);for(let st=0;st<it.length;st++){let qt=it[st];t.texImage2D(34069+N,st+1,Ve,j,ke,qt.image[N])}}V.__maxMipLevel=it.length}A(B,ft)&&F(34067,B,It.width,It.height),V.__version=B.version,B.onUpdate&&B.onUpdate(B)}function ye(V,B,be,ge){let Ie=B.texture,Ze=r.convert(Ie.format),It=r.convert(Ie.type),ft=z(Ie.internalFormat,Ze,It);ge===32879||ge===35866?t.texImage3D(ge,0,ft,B.width,B.height,B.depth,0,Ze,It,null):t.texImage2D(ge,0,ft,B.width,B.height,0,Ze,It,null),t.bindFramebuffer(36160,V),s.framebufferTexture2D(36160,be,ge,n.get(Ie).__webglTexture,0),t.bindFramebuffer(36160,null)}function en(V,B,be){if(s.bindRenderbuffer(36161,V),B.depthBuffer&&!B.stencilBuffer){let ge=33189;if(be){let Ie=B.depthTexture;Ie&&Ie.isDepthTexture&&(Ie.type===Rs?ge=36012:Ie.type===ih&&(ge=33190));let Ze=Tt(B);s.renderbufferStorageMultisample(36161,Ze,ge,B.width,B.height)}else s.renderbufferStorage(36161,ge,B.width,B.height);s.framebufferRenderbuffer(36160,36096,36161,V)}else if(B.depthBuffer&&B.stencilBuffer){if(be){let ge=Tt(B);s.renderbufferStorageMultisample(36161,ge,35056,B.width,B.height)}else s.renderbufferStorage(36161,34041,B.width,B.height);s.framebufferRenderbuffer(36160,33306,36161,V)}else{let ge=B.texture,Ie=r.convert(ge.format),Ze=r.convert(ge.type),It=z(ge.internalFormat,Ie,Ze);if(be){let ft=Tt(B);s.renderbufferStorageMultisample(36161,ft,It,B.width,B.height)}else s.renderbufferStorage(36161,It,B.width,B.height)}s.bindRenderbuffer(36161,null)}function Dt(V,B){if(B&&B.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,V),!(B.depthTexture&&B.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(B.depthTexture).__webglTexture||B.depthTexture.image.width!==B.width||B.depthTexture.image.height!==B.height)&&(B.depthTexture.image.width=B.width,B.depthTexture.image.height=B.height,B.depthTexture.needsUpdate=!0),te(B.depthTexture,0);let ge=n.get(B.depthTexture).__webglTexture;if(B.depthTexture.format===co)s.framebufferTexture2D(36160,36096,3553,ge,0);else if(B.depthTexture.format===Dl)s.framebufferTexture2D(36160,33306,3553,ge,0);else throw new Error("Unknown depthTexture format")}function bt(V){let B=n.get(V),be=V.isWebGLCubeRenderTarget===!0;if(V.depthTexture){if(be)throw new Error("target.depthTexture not supported in Cube render targets");Dt(B.__webglFramebuffer,V)}else if(be){B.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(36160,B.__webglFramebuffer[ge]),B.__webglDepthbuffer[ge]=s.createRenderbuffer(),en(B.__webglDepthbuffer[ge],V,!1)}else t.bindFramebuffer(36160,B.__webglFramebuffer),B.__webglDepthbuffer=s.createRenderbuffer(),en(B.__webglDepthbuffer,V,!1);t.bindFramebuffer(36160,null)}function dt(V){let B=V.texture,be=n.get(V),ge=n.get(B);V.addEventListener("dispose",q),ge.__webglTexture=s.createTexture(),ge.__version=B.version,a.memory.textures++;let Ie=V.isWebGLCubeRenderTarget===!0,Ze=V.isWebGLMultisampleRenderTarget===!0,It=B.isDataTexture3D||B.isDataTexture2DArray,ft=b(V)||l;if(l&&B.format===da&&(B.type===Rs||B.type===fo)&&(B.format=oi,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),Ie){be.__webglFramebuffer=[];for(let j=0;j<6;j++)be.__webglFramebuffer[j]=s.createFramebuffer()}else if(be.__webglFramebuffer=s.createFramebuffer(),Ze)if(l){be.__webglMultisampledFramebuffer=s.createFramebuffer(),be.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,be.__webglColorRenderbuffer);let j=r.convert(B.format),ke=r.convert(B.type),Ve=z(B.internalFormat,j,ke),it=Tt(V);s.renderbufferStorageMultisample(36161,it,Ve,V.width,V.height),t.bindFramebuffer(36160,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,be.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),V.depthBuffer&&(be.__webglDepthRenderbuffer=s.createRenderbuffer(),en(be.__webglDepthRenderbuffer,V,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(Ie){t.bindTexture(34067,ge.__webglTexture),Ke(34067,B,ft);for(let j=0;j<6;j++)ye(be.__webglFramebuffer[j],V,36064,34069+j);A(B,ft)&&F(34067,B,V.width,V.height),t.bindTexture(34067,null)}else{let j=3553;It&&(l?j=B.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(j,ge.__webglTexture),Ke(j,B,ft),ye(be.__webglFramebuffer,V,36064,j),A(B,ft)&&F(3553,B,V.width,V.height),t.bindTexture(3553,null)}V.depthBuffer&&bt(V)}function Wt(V){let B=V.texture,be=b(V)||l;if(A(B,be)){let ge=V.isWebGLCubeRenderTarget?34067:3553,Ie=n.get(B).__webglTexture;t.bindTexture(ge,Ie),F(ge,B,V.width,V.height),t.bindTexture(ge,null)}}function Rt(V){if(V.isWebGLMultisampleRenderTarget)if(l){let B=V.width,be=V.height,ge=16384;V.depthBuffer&&(ge|=256),V.stencilBuffer&&(ge|=1024);let Ie=n.get(V);t.bindFramebuffer(36008,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Ie.__webglFramebuffer),s.blitFramebuffer(0,0,B,be,0,0,B,be,ge,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,Ie.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Tt(V){return l&&V.isWebGLMultisampleRenderTarget?Math.min(u,V.samples):0}function Ne(V){let B=a.render.frame;f.get(V)!==B&&(f.set(V,B),V.update())}let Ge=!1,We=!1;function at(V,B){V&&V.isWebGLRenderTarget&&(Ge===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Ge=!0),V=V.texture),te(V,B)}function je(V,B){V&&V.isWebGLCubeRenderTarget&&(We===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),We=!0),V=V.texture),Le(V,B)}this.allocateTextureUnit=Z,this.resetTextureUnits=he,this.setTexture2D=te,this.setTexture2DArray=ie,this.setTexture3D=Y,this.setTextureCube=Le,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Rt,this.safeSetTexture2D=at,this.safeSetTextureCube=je}function Lb(s,e,t){let n=t.isWebGL2;function i(r){let a;if(r===Ta)return 5121;if(r===vw)return 32819;if(r===yw)return 32820;if(r===xw)return 33635;if(r===pw)return 5120;if(r===mw)return 5122;if(r===ch)return 5123;if(r===gw)return 5124;if(r===ih)return 5125;if(r===Rs)return 5126;if(r===fo)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ww)return 6406;if(r===da)return 6407;if(r===oi)return 6408;if(r===bw)return 6409;if(r===_w)return 6410;if(r===co)return 6402;if(r===Dl)return 34041;if(r===Ew)return 6403;if(r===Sw)return 36244;if(r===Tw)return 33319;if(r===Aw)return 33320;if(r===Rw)return 36248;if(r===Lw)return 36249;if(r===l0||r===c0||r===h0||r===u0)if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===l0)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===c0)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===h0)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===u0)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===d0||r===f0||r===p0||r===m0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===d0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===f0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===p0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===m0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cw)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((r===g0||r===v0)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(r===g0)return a.COMPRESSED_RGB8_ETC2;if(r===v0)return a.COMPRESSED_RGBA8_ETC2_EAC}if(r===Pw||r===Dw||r===Iw||r===kw||r===Fw||r===Nw||r===Hw||r===Ow||r===Bw||r===zw||r===Uw||r===Gw||r===Vw||r===Ww||r===Xw||r===Yw||r===jw||r===Zw||r===Jw||r===Kw||r===$w||r===Qw||r===eb||r===tb||r===nb||r===ib||r===rb||r===sb)return a=e.get("WEBGL_compressed_texture_astc"),a!==null?r:null;if(r===qw)return a=e.get("EXT_texture_compression_bptc"),a!==null?r:null;if(r===Cl)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}var vh=class extends An{constructor(e=[]){super(),this.cameras=e}};vh.prototype.isArrayCamera=!0;var Hn=class extends zt{constructor(){super(),this.type="Group"}};Hn.prototype.isGroup=!0;var vA={type:"move"},sh=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,l=this._targetRay,h=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(l!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(vA))),c&&e.hand){a=!0;for(let M of e.hand.values()){let S=t.getJointPose(M,n);if(c.joints[M.jointName]===void 0){let x=new Hn;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[M.jointName]=x,c.add(x)}let b=c.joints[M.jointName];S!==null&&(b.matrix.fromArray(S.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.jointRadius=S.radius),b.visible=S!==null}let p=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=p.position.distanceTo(u.position),g=.02,v=.005;c.inputState.pinching&&f>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));return l!==null&&(l.visible=i!==null),h!==null&&(h.visible=r!==null),c!==null&&(c.visible=a!==null),this}},b0=class extends jr{constructor(e,t){super();let n=this,i=e.state,r=null,a=1,l=null,h="local-floor",c=null,p=[],u=new Map,f=new An;f.layers.enable(1),f.viewport=new Pt;let g=new An;g.layers.enable(2),g.viewport=new Pt;let v=[f,g],M=new vh;M.layers.enable(1),M.layers.enable(2);let S=null,b=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let Z=p[he];return Z===void 0&&(Z=new sh,p[he]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(he){let Z=p[he];return Z===void 0&&(Z=new sh,p[he]=Z),Z.getGripSpace()},this.getHand=function(he){let Z=p[he];return Z===void 0&&(Z=new sh,p[he]=Z),Z.getHandSpace()};function x(he){let Z=u.get(he.inputSource);Z&&Z.dispatchEvent({type:he.type,data:he.inputSource})}function A(){u.forEach(function(he,Z){he.disconnect(Z)}),u.clear(),S=null,b=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),we.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){a=he,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){h=he,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l},this.getSession=function(){return r},this.setSession=async function(he){if(r=he,r!==null){r.addEventListener("select",x),r.addEventListener("selectstart",x),r.addEventListener("selectend",x),r.addEventListener("squeeze",x),r.addEventListener("squeezestart",x),r.addEventListener("squeezeend",x),r.addEventListener("end",A),r.addEventListener("inputsourceschange",F);let Z=t.getContextAttributes();Z.xrCompatible!==!0&&await t.makeXRCompatible();let te={antialias:Z.antialias,alpha:Z.alpha,depth:Z.depth,stencil:Z.stencil,framebufferScaleFactor:a},ie=new XRWebGLLayer(r,t,te);r.updateRenderState({baseLayer:ie}),l=await r.requestReferenceSpace(h),we.setContext(r),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(he){let Z=r.inputSources;for(let te=0;te<p.length;te++)u.set(Z[te],p[te]);for(let te=0;te<he.removed.length;te++){let ie=he.removed[te],Y=u.get(ie);Y&&(Y.dispatchEvent({type:"disconnected",data:ie}),u.delete(ie))}for(let te=0;te<he.added.length;te++){let ie=he.added[te],Y=u.get(ie);Y&&Y.dispatchEvent({type:"connected",data:ie})}}let z=new L,C=new L;function W(he,Z,te){z.setFromMatrixPosition(Z.matrixWorld),C.setFromMatrixPosition(te.matrixWorld);let ie=z.distanceTo(C),Y=Z.projectionMatrix.elements,Le=te.projectionMatrix.elements,Be=Y[14]/(Y[10]-1),Oe=Y[14]/(Y[10]+1),Ke=(Y[9]+1)/Y[5],ze=(Y[9]-1)/Y[5],ut=(Y[8]-1)/Y[0],xt=(Le[8]+1)/Le[0],ye=Be*ut,en=Be*xt,Dt=ie/(-ut+xt),bt=Dt*-ut;Z.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(bt),he.translateZ(Dt),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert();let dt=Be+Dt,Wt=Oe+Dt,Rt=ye-bt,Tt=en+(ie-bt),Ne=Ke*Oe/Wt*dt,Ge=ze*Oe/Wt*dt;he.projectionMatrix.makePerspective(Rt,Tt,Ne,Ge,dt,Wt)}function q(he,Z){Z===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(Z.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.getCamera=function(he){M.near=g.near=f.near=he.near,M.far=g.far=f.far=he.far,(S!==M.near||b!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,b=M.far);let Z=he.parent,te=M.cameras;q(M,Z);for(let Y=0;Y<te.length;Y++)q(te[Y],Z);he.matrixWorld.copy(M.matrixWorld),he.matrix.copy(M.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale);let ie=he.children;for(let Y=0,Le=ie.length;Y<Le;Y++)ie[Y].updateMatrixWorld(!0);return te.length===2?W(M,f,g):M.projectionMatrix.copy(f.projectionMatrix),M};let ee=null;function ae(he,Z){if(c=Z.getViewerPose(l),c!==null){let ie=c.views,Y=r.renderState.baseLayer;i.bindXRFramebuffer(Y.framebuffer);let Le=!1;ie.length!==M.cameras.length&&(M.cameras.length=0,Le=!0);for(let Be=0;Be<ie.length;Be++){let Oe=ie[Be],Ke=Y.getViewport(Oe),ze=v[Be];ze.matrix.fromArray(Oe.transform.matrix),ze.projectionMatrix.fromArray(Oe.projectionMatrix),ze.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Be===0&&M.matrix.copy(ze.matrix),Le===!0&&M.cameras.push(ze)}}let te=r.inputSources;for(let ie=0;ie<p.length;ie++){let Y=p[ie],Le=te[ie];Y.update(Le,Z,l)}ee&&ee(he,Z)}let we=new wb;we.setAnimationLoop(ae),this.setAnimationLoop=function(he){ee=he},this.dispose=function(){}}};function yA(s){function e(b,x){b.fogColor.value.copy(x.color),x.isFog?(b.fogNear.value=x.near,b.fogFar.value=x.far):x.isFogExp2&&(b.fogDensity.value=x.density)}function t(b,x,A,F){x.isMeshBasicMaterial?n(b,x):x.isMeshLambertMaterial?(n(b,x),h(b,x)):x.isMeshToonMaterial?(n(b,x),p(b,x)):x.isMeshPhongMaterial?(n(b,x),c(b,x)):x.isMeshStandardMaterial?(n(b,x),x.isMeshPhysicalMaterial?f(b,x):u(b,x)):x.isMeshMatcapMaterial?(n(b,x),g(b,x)):x.isMeshDepthMaterial?(n(b,x),v(b,x)):x.isMeshDistanceMaterial?(n(b,x),M(b,x)):x.isMeshNormalMaterial?(n(b,x),S(b,x)):x.isLineBasicMaterial?(i(b,x),x.isLineDashedMaterial&&r(b,x)):x.isPointsMaterial?a(b,x,A,F):x.isSpriteMaterial?l(b,x):x.isShadowMaterial?(b.color.value.copy(x.color),b.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function n(b,x){b.opacity.value=x.opacity,x.color&&b.diffuse.value.copy(x.color),x.emissive&&b.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(b.map.value=x.map),x.alphaMap&&(b.alphaMap.value=x.alphaMap),x.specularMap&&(b.specularMap.value=x.specularMap);let A=s.get(x).envMap;if(A){b.envMap.value=A,b.flipEnvMap.value=A.isCubeTexture&&A._needsFlipEnvMap?-1:1,b.reflectivity.value=x.reflectivity,b.refractionRatio.value=x.refractionRatio;let C=s.get(A).__maxMipLevel;C!==void 0&&(b.maxMipLevel.value=C)}x.lightMap&&(b.lightMap.value=x.lightMap,b.lightMapIntensity.value=x.lightMapIntensity),x.aoMap&&(b.aoMap.value=x.aoMap,b.aoMapIntensity.value=x.aoMapIntensity);let F;x.map?F=x.map:x.specularMap?F=x.specularMap:x.displacementMap?F=x.displacementMap:x.normalMap?F=x.normalMap:x.bumpMap?F=x.bumpMap:x.roughnessMap?F=x.roughnessMap:x.metalnessMap?F=x.metalnessMap:x.alphaMap?F=x.alphaMap:x.emissiveMap?F=x.emissiveMap:x.clearcoatMap?F=x.clearcoatMap:x.clearcoatNormalMap?F=x.clearcoatNormalMap:x.clearcoatRoughnessMap&&(F=x.clearcoatRoughnessMap),F!==void 0&&(F.isWebGLRenderTarget&&(F=F.texture),F.matrixAutoUpdate===!0&&F.updateMatrix(),b.uvTransform.value.copy(F.matrix));let z;x.aoMap?z=x.aoMap:x.lightMap&&(z=x.lightMap),z!==void 0&&(z.isWebGLRenderTarget&&(z=z.texture),z.matrixAutoUpdate===!0&&z.updateMatrix(),b.uv2Transform.value.copy(z.matrix))}function i(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity}function r(b,x){b.dashSize.value=x.dashSize,b.totalSize.value=x.dashSize+x.gapSize,b.scale.value=x.scale}function a(b,x,A,F){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.size.value=x.size*A,b.scale.value=F*.5,x.map&&(b.map.value=x.map),x.alphaMap&&(b.alphaMap.value=x.alphaMap);let z;x.map?z=x.map:x.alphaMap&&(z=x.alphaMap),z!==void 0&&(z.matrixAutoUpdate===!0&&z.updateMatrix(),b.uvTransform.value.copy(z.matrix))}function l(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.rotation.value=x.rotation,x.map&&(b.map.value=x.map),x.alphaMap&&(b.alphaMap.value=x.alphaMap);let A;x.map?A=x.map:x.alphaMap&&(A=x.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),b.uvTransform.value.copy(A.matrix))}function h(b,x){x.emissiveMap&&(b.emissiveMap.value=x.emissiveMap)}function c(b,x){b.specular.value.copy(x.specular),b.shininess.value=Math.max(x.shininess,1e-4),x.emissiveMap&&(b.emissiveMap.value=x.emissiveMap),x.bumpMap&&(b.bumpMap.value=x.bumpMap,b.bumpScale.value=x.bumpScale,x.side===xn&&(b.bumpScale.value*=-1)),x.normalMap&&(b.normalMap.value=x.normalMap,b.normalScale.value.copy(x.normalScale),x.side===xn&&b.normalScale.value.negate()),x.displacementMap&&(b.displacementMap.value=x.displacementMap,b.displacementScale.value=x.displacementScale,b.displacementBias.value=x.displacementBias)}function p(b,x){x.gradientMap&&(b.gradientMap.value=x.gradientMap),x.emissiveMap&&(b.emissiveMap.value=x.emissiveMap),x.bumpMap&&(b.bumpMap.value=x.bumpMap,b.bumpScale.value=x.bumpScale,x.side===xn&&(b.bumpScale.value*=-1)),x.normalMap&&(b.normalMap.value=x.normalMap,b.normalScale.value.copy(x.normalScale),x.side===xn&&b.normalScale.value.negate()),x.displacementMap&&(b.displacementMap.value=x.displacementMap,b.displacementScale.value=x.displacementScale,b.displacementBias.value=x.displacementBias)}function u(b,x){b.roughness.value=x.roughness,b.metalness.value=x.metalness,x.roughnessMap&&(b.roughnessMap.value=x.roughnessMap),x.metalnessMap&&(b.metalnessMap.value=x.metalnessMap),x.emissiveMap&&(b.emissiveMap.value=x.emissiveMap),x.bumpMap&&(b.bumpMap.value=x.bumpMap,b.bumpScale.value=x.bumpScale,x.side===xn&&(b.bumpScale.value*=-1)),x.normalMap&&(b.normalMap.value=x.normalMap,b.normalScale.value.copy(x.normalScale),x.side===xn&&b.normalScale.value.negate()),x.displacementMap&&(b.displacementMap.value=x.displacementMap,b.displacementScale.value=x.displacementScale,b.displacementBias.value=x.displacementBias),s.get(x).envMap&&(b.envMapIntensity.value=x.envMapIntensity)}function f(b,x){u(b,x),b.reflectivity.value=x.reflectivity,b.clearcoat.value=x.clearcoat,b.clearcoatRoughness.value=x.clearcoatRoughness,x.sheen&&b.sheen.value.copy(x.sheen),x.clearcoatMap&&(b.clearcoatMap.value=x.clearcoatMap),x.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap),x.clearcoatNormalMap&&(b.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),b.clearcoatNormalMap.value=x.clearcoatNormalMap,x.side===xn&&b.clearcoatNormalScale.value.negate()),b.transmission.value=x.transmission,x.transmissionMap&&(b.transmissionMap.value=x.transmissionMap)}function g(b,x){x.matcap&&(b.matcap.value=x.matcap),x.bumpMap&&(b.bumpMap.value=x.bumpMap,b.bumpScale.value=x.bumpScale,x.side===xn&&(b.bumpScale.value*=-1)),x.normalMap&&(b.normalMap.value=x.normalMap,b.normalScale.value.copy(x.normalScale),x.side===xn&&b.normalScale.value.negate()),x.displacementMap&&(b.displacementMap.value=x.displacementMap,b.displacementScale.value=x.displacementScale,b.displacementBias.value=x.displacementBias)}function v(b,x){x.displacementMap&&(b.displacementMap.value=x.displacementMap,b.displacementScale.value=x.displacementScale,b.displacementBias.value=x.displacementBias)}function M(b,x){x.displacementMap&&(b.displacementMap.value=x.displacementMap,b.displacementScale.value=x.displacementScale,b.displacementBias.value=x.displacementBias),b.referencePosition.value.copy(x.referencePosition),b.nearDistance.value=x.nearDistance,b.farDistance.value=x.farDistance}function S(b,x){x.bumpMap&&(b.bumpMap.value=x.bumpMap,b.bumpScale.value=x.bumpScale,x.side===xn&&(b.bumpScale.value*=-1)),x.normalMap&&(b.normalMap.value=x.normalMap,b.normalScale.value.copy(x.normalScale),x.side===xn&&b.normalScale.value.negate()),x.displacementMap&&(b.displacementMap.value=x.displacementMap,b.displacementScale.value=x.displacementScale,b.displacementBias.value=x.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function xA(){let s=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return s.style.display="block",s}function Qt(s){s=s||{};let e=s.canvas!==void 0?s.canvas:xA(),t=s.context!==void 0?s.context:null,n=s.alpha!==void 0?s.alpha:!1,i=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,a=s.antialias!==void 0?s.antialias:!1,l=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,h=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",p=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1,u=null,f=null,g=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=wi,this.physicallyCorrectLights=!1,this.toneMapping=lo,this.toneMappingExposure=1;let M=this,S=!1,b=0,x=0,A=null,F=-1,z=null,C=new Pt,W=new Pt,q=null,ee=e.width,ae=e.height,we=1,he=null,Z=null,te=new Pt(0,0,ee,ae),ie=new Pt(0,0,ee,ae),Y=!1,Le=new Ds,Be=!1,Oe=!1,Ke=new nt,ze=new L,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xt(){return A===null?we:1}let ye=t;function en(O,ne){for(let ce=0;ce<O.length;ce++){let oe=O[ce],Re=e.getContext(oe,ne);if(Re!==null)return Re}return null}try{let O={alpha:n,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:p};if(e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",qt,!1),ye===null){let ne=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&ne.shift(),ye=en(ne,O),ye===null)throw en(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ye.getShaderPrecisionFormat===void 0&&(ye.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let Dt,bt,dt,Wt,Rt,Tt,Ne,Ge,We,at,je,V,B,be,ge,Ie,Ze,It,ft,j,ke,Ve;function it(){Dt=new V2(ye),bt=new z2(ye,Dt,s),Dt.init(bt),ke=new Lb(ye,Dt,bt),dt=new mA(ye,Dt,bt),Wt=new X2(ye),Rt=new iA,Tt=new gA(ye,Dt,dt,Rt,bt,ke,Wt),Ne=new G2(M),Ge=new mS(ye,bt),Ve=new O2(ye,Dt,Ge,bt),We=new W2(ye,Ge,Wt,Ve),at=new J2(ye,We,Ge,Wt),It=new Z2(ye),ge=new U2(Rt),je=new nA(M,Ne,Dt,bt,Ve,ge),V=new yA(Rt),B=new aA(Rt),be=new dA(Dt,bt),Ze=new H2(M,Ne,dt,at,l),Ie=new Rb(M,at,bt),ft=new B2(ye,Dt,Wt,bt),j=new q2(ye,Dt,Wt,bt),Wt.programs=je.programs,M.capabilities=bt,M.extensions=Dt,M.properties=Rt,M.renderLists=B,M.shadowMap=Ie,M.state=dt,M.info=Wt}it();let N=new b0(M,ye);this.xr=N,this.getContext=function(){return ye},this.getContextAttributes=function(){return ye.getContextAttributes()},this.forceContextLoss=function(){let O=Dt.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){let O=Dt.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(O){O!==void 0&&(we=O,this.setSize(ee,ae,!1))},this.getSize=function(O){return O===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),O=new _e),O.set(ee,ae)},this.setSize=function(O,ne,ce){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=O,ae=ne,e.width=Math.floor(O*we),e.height=Math.floor(ne*we),ce!==!1&&(e.style.width=O+"px",e.style.height=ne+"px"),this.setViewport(0,0,O,ne)},this.getDrawingBufferSize=function(O){return O===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),O=new _e),O.set(ee*we,ae*we).floor()},this.setDrawingBufferSize=function(O,ne,ce){ee=O,ae=ne,we=ce,e.width=Math.floor(O*ce),e.height=Math.floor(ne*ce),this.setViewport(0,0,O,ne)},this.getCurrentViewport=function(O){return O===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),O=new Pt),O.copy(C)},this.getViewport=function(O){return O.copy(te)},this.setViewport=function(O,ne,ce,oe){O.isVector4?te.set(O.x,O.y,O.z,O.w):te.set(O,ne,ce,oe),dt.viewport(C.copy(te).multiplyScalar(we).floor())},this.getScissor=function(O){return O.copy(ie)},this.setScissor=function(O,ne,ce,oe){O.isVector4?ie.set(O.x,O.y,O.z,O.w):ie.set(O,ne,ce,oe),dt.scissor(W.copy(ie).multiplyScalar(we).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(O){dt.setScissorTest(Y=O)},this.setOpaqueSort=function(O){he=O},this.setTransparentSort=function(O){Z=O},this.getClearColor=function(O){return O===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),O=new Pe),O.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(O,ne,ce){let oe=0;(O===void 0||O)&&(oe|=16384),(ne===void 0||ne)&&(oe|=256),(ce===void 0||ce)&&(oe|=1024),ye.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",qt,!1),B.dispose(),be.dispose(),Rt.dispose(),Ne.dispose(),at.dispose(),Ve.dispose(),N.dispose(),N.removeEventListener("sessionstart",At),N.removeEventListener("sessionend",Do),ri.stop()};function st(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function qt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let O=Wt.autoReset,ne=Ie.enabled,ce=Ie.autoUpdate,oe=Ie.needsUpdate,Re=Ie.type;it(),Wt.autoReset=O,Ie.enabled=ne,Ie.autoUpdate=ce,Ie.needsUpdate=oe,Ie.type=Re}function rt(O){let ne=O.target;ne.removeEventListener("dispose",rt),Dr(ne)}function Dr(O){bn(O),Rt.remove(O)}function bn(O){let ne=Rt.get(O).programs;ne!==void 0&&ne.forEach(function(ce){je.releaseProgram(ce)})}function Fe(O,ne){O.render(function(ce){M.renderBufferImmediate(ce,ne)})}this.renderBufferImmediate=function(O,ne){Ve.initAttributes();let ce=Rt.get(O);O.hasPositions&&!ce.position&&(ce.position=ye.createBuffer()),O.hasNormals&&!ce.normal&&(ce.normal=ye.createBuffer()),O.hasUvs&&!ce.uv&&(ce.uv=ye.createBuffer()),O.hasColors&&!ce.color&&(ce.color=ye.createBuffer());let oe=ne.getAttributes();O.hasPositions&&(ye.bindBuffer(34962,ce.position),ye.bufferData(34962,O.positionArray,35048),Ve.enableAttribute(oe.position),ye.vertexAttribPointer(oe.position,3,5126,!1,0,0)),O.hasNormals&&(ye.bindBuffer(34962,ce.normal),ye.bufferData(34962,O.normalArray,35048),Ve.enableAttribute(oe.normal),ye.vertexAttribPointer(oe.normal,3,5126,!1,0,0)),O.hasUvs&&(ye.bindBuffer(34962,ce.uv),ye.bufferData(34962,O.uvArray,35048),Ve.enableAttribute(oe.uv),ye.vertexAttribPointer(oe.uv,2,5126,!1,0,0)),O.hasColors&&(ye.bindBuffer(34962,ce.color),ye.bufferData(34962,O.colorArray,35048),Ve.enableAttribute(oe.color),ye.vertexAttribPointer(oe.color,3,5126,!1,0,0)),Ve.disableUnusedAttributes(),ye.drawArrays(4,0,O.count),O.count=0},this.renderBufferDirect=function(O,ne,ce,oe,Re,pt){ne===null&&(ne=ut);let gt=Re.isMesh&&Re.matrixWorld.determinant()<0,lt=cu(O,ne,oe,Re);dt.setMaterial(oe,gt);let vt=ce.index,wt=ce.attributes.position;if(vt===null){if(wt===void 0||wt.count===0)return}else if(vt.count===0)return;let _t=1;oe.wireframe===!0&&(vt=We.getWireframeAttribute(ce),_t=2),(oe.morphTargets||oe.morphNormals)&&It.update(Re,ce,oe,lt),Ve.setup(Re,oe,lt,ce,vt);let ht,Ot=ft;vt!==null&&(ht=Ge.get(vt),Ot=j,Ot.setIndex(ht));let Zn=vt!==null?vt.count:wt.count,Jn=ce.drawRange.start*_t,Xi=ce.drawRange.count*_t,kt=pt!==null?pt.start*_t:0,Yi=pt!==null?pt.count*_t:1/0,dn=Math.max(Jn,kt),Gn=Math.min(Zn,Jn+Xi,kt+Yi)-1,Kt=Math.max(0,Gn-dn+1);if(Kt!==0){if(Re.isMesh)oe.wireframe===!0?(dt.setLineWidth(oe.wireframeLinewidth*xt()),Ot.setMode(1)):Ot.setMode(4);else if(Re.isLine){let Yt=oe.linewidth;Yt===void 0&&(Yt=1),dt.setLineWidth(Yt*xt()),Re.isLineSegments?Ot.setMode(1):Re.isLineLoop?Ot.setMode(2):Ot.setMode(3)}else Re.isPoints?Ot.setMode(0):Re.isSprite&&Ot.setMode(4);if(Re.isInstancedMesh)Ot.renderInstances(dn,Kt,Re.count);else if(ce.isInstancedBufferGeometry){let Yt=Math.min(ce.instanceCount,ce._maxInstanceCount);Ot.renderInstances(dn,Kt,Yt)}else Ot.render(dn,Kt)}},this.compile=function(O,ne){f=be.get(O),f.init(),O.traverseVisible(function(ce){ce.isLight&&ce.layers.test(ne.layers)&&(f.pushLight(ce),ce.castShadow&&f.pushShadow(ce))}),f.setupLights(),O.traverse(function(ce){let oe=ce.material;if(oe)if(Array.isArray(oe))for(let Re=0;Re<oe.length;Re++){let pt=oe[Re];mt(pt,O,ce)}else mt(oe,O,ce)})};let an=null;function $(O){an&&an(O)}function At(){ri.stop()}function Do(){ri.start()}let ri=new wb;ri.setAnimationLoop($),typeof window!="undefined"&&ri.setContext(window),this.setAnimationLoop=function(O){an=O,N.setAnimationLoop(O),O===null?ri.stop():ri.start()},N.addEventListener("sessionstart",At),N.addEventListener("sessionend",Do),this.render=function(O,ne){let ce,oe;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),ce=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),oe=arguments[3]),ne!==void 0&&ne.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;O.autoUpdate===!0&&O.updateMatrixWorld(),ne.parent===null&&ne.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(ne=N.getCamera(ne)),O.isScene===!0&&O.onBeforeRender(M,O,ne,ce||A),f=be.get(O,v.length),f.init(),v.push(f),Ke.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),Le.setFromProjectionMatrix(Ke),Oe=this.localClippingEnabled,Be=ge.init(this.clippingPlanes,Oe,ne),u=B.get(O,g.length),u.init(),g.push(u),tc(O,ne,0,M.sortObjects),u.finish(),M.sortObjects===!0&&u.sort(he,Z),Be===!0&&ge.beginShadows();let Re=f.state.shadowsArray;Ie.render(Re,O,ne),f.setupLights(),f.setupLightsView(ne),Be===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),ce!==void 0&&this.setRenderTarget(ce),Ze.render(u,O,ne,oe);let pt=u.opaque,gt=u.transparent;pt.length>0&&$r(pt,O,ne),gt.length>0&&$r(gt,O,ne),A!==null&&(Tt.updateRenderTargetMipmap(A),Tt.updateMultisampleRenderTarget(A)),O.isScene===!0&&O.onAfterRender(M,O,ne),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1),Ve.resetDefaultState(),F=-1,z=null,v.pop(),v.length>0?f=v[v.length-1]:f=null,g.pop(),g.length>0?u=g[g.length-1]:u=null};function tc(O,ne,ce,oe){if(O.visible===!1)return;if(O.layers.test(ne.layers)){if(O.isGroup)ce=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(ne);else if(O.isLight)f.pushLight(O),O.castShadow&&f.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||Le.intersectsSprite(O)){oe&&ze.setFromMatrixPosition(O.matrixWorld).applyMatrix4(Ke);let gt=at.update(O),lt=O.material;lt.visible&&u.push(O,gt,lt,ce,ze.z,null)}}else if(O.isImmediateRenderObject)oe&&ze.setFromMatrixPosition(O.matrixWorld).applyMatrix4(Ke),u.push(O,null,O.material,ce,ze.z,null);else if((O.isMesh||O.isLine||O.isPoints)&&(O.isSkinnedMesh&&O.skeleton.frame!==Wt.render.frame&&(O.skeleton.update(),O.skeleton.frame=Wt.render.frame),!O.frustumCulled||Le.intersectsObject(O))){oe&&ze.setFromMatrixPosition(O.matrixWorld).applyMatrix4(Ke);let gt=at.update(O),lt=O.material;if(Array.isArray(lt)){let vt=gt.groups;for(let wt=0,_t=vt.length;wt<_t;wt++){let ht=vt[wt],Ot=lt[ht.materialIndex];Ot&&Ot.visible&&u.push(O,gt,Ot,ce,ze.z,ht)}}else lt.visible&&u.push(O,gt,lt,ce,ze.z,null)}}let pt=O.children;for(let gt=0,lt=pt.length;gt<lt;gt++)tc(pt[gt],ne,ce,oe)}function $r(O,ne,ce){let oe=ne.isScene===!0?ne.overrideMaterial:null;for(let Re=0,pt=O.length;Re<pt;Re++){let gt=O[Re],lt=gt.object,vt=gt.geometry,wt=oe===null?gt.material:oe,_t=gt.group;if(ce.isArrayCamera){let ht=ce.cameras;for(let Ot=0,Zn=ht.length;Ot<Zn;Ot++){let Jn=ht[Ot];lt.layers.test(Jn.layers)&&(dt.viewport(C.copy(Jn.viewport)),f.setupLightsView(Jn),Ir(lt,ne,Jn,vt,wt,_t))}}else Ir(lt,ne,ce,vt,wt,_t)}}function Ir(O,ne,ce,oe,Re,pt){if(O.onBeforeRender(M,ne,ce,oe,Re,pt),O.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),O.isImmediateRenderObject){let gt=cu(ce,ne,Re,O);dt.setMaterial(Re),Ve.reset(),Fe(O,gt)}else M.renderBufferDirect(ce,ne,oe,Re,O,pt);O.onAfterRender(M,ne,ce,oe,Re,pt)}function mt(O,ne,ce){ne.isScene!==!0&&(ne=ut);let oe=Rt.get(O),Re=f.state.lights,pt=f.state.shadowsArray,gt=Re.state.version,lt=je.getParameters(O,Re.state,pt,ne,ce),vt=je.getProgramCacheKey(lt),wt=oe.programs;oe.environment=O.isMeshStandardMaterial?ne.environment:null,oe.fog=ne.fog,oe.envMap=Ne.get(O.envMap||oe.environment),wt===void 0&&(O.addEventListener("dispose",rt),wt=new Map,oe.programs=wt);let _t=wt.get(vt);if(_t!==void 0){if(oe.currentProgram===_t&&oe.lightsStateVersion===gt)return zs(O,lt),_t}else lt.uniforms=je.getUniforms(O),O.onBuild(lt,M),O.onBeforeCompile(lt,M),_t=je.acquireProgram(lt,vt),wt.set(vt,_t),oe.uniforms=lt.uniforms;let ht=oe.uniforms;(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(ht.clippingPlanes=ge.uniform),zs(O,lt),oe.needsLights=ct(O),oe.lightsStateVersion=gt,oe.needsLights&&(ht.ambientLightColor.value=Re.state.ambient,ht.lightProbe.value=Re.state.probe,ht.directionalLights.value=Re.state.directional,ht.directionalLightShadows.value=Re.state.directionalShadow,ht.spotLights.value=Re.state.spot,ht.spotLightShadows.value=Re.state.spotShadow,ht.rectAreaLights.value=Re.state.rectArea,ht.ltc_1.value=Re.state.rectAreaLTC1,ht.ltc_2.value=Re.state.rectAreaLTC2,ht.pointLights.value=Re.state.point,ht.pointLightShadows.value=Re.state.pointShadow,ht.hemisphereLights.value=Re.state.hemi,ht.directionalShadowMap.value=Re.state.directionalShadowMap,ht.directionalShadowMatrix.value=Re.state.directionalShadowMatrix,ht.spotShadowMap.value=Re.state.spotShadowMap,ht.spotShadowMatrix.value=Re.state.spotShadowMatrix,ht.pointShadowMap.value=Re.state.pointShadowMap,ht.pointShadowMatrix.value=Re.state.pointShadowMatrix);let Ot=_t.getUniforms(),Zn=fa.seqWithValue(Ot.seq,ht);return oe.currentProgram=_t,oe.uniformsList=Zn,_t}function zs(O,ne){let ce=Rt.get(O);ce.outputEncoding=ne.outputEncoding,ce.instancing=ne.instancing,ce.numClippingPlanes=ne.numClippingPlanes,ce.numIntersection=ne.numClipIntersection,ce.vertexAlphas=ne.vertexAlphas}function cu(O,ne,ce,oe){ne.isScene!==!0&&(ne=ut),Tt.resetTextureUnits();let Re=ne.fog,pt=ce.isMeshStandardMaterial?ne.environment:null,gt=A===null?M.outputEncoding:A.texture.encoding,lt=Ne.get(ce.envMap||pt),vt=ce.vertexColors===!0&&oe.geometry&&oe.geometry.attributes.color&&oe.geometry.attributes.color.itemSize===4,wt=Rt.get(ce),_t=f.state.lights;if(Be===!0&&(Oe===!0||O!==z)){let dn=O===z&&ce.id===F;ge.setState(ce,O,dn)}let ht=!1;ce.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==_t.state.version||wt.outputEncoding!==gt||oe.isInstancedMesh&&wt.instancing===!1||!oe.isInstancedMesh&&wt.instancing===!0||wt.envMap!==lt||ce.fog&&wt.fog!==Re||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==ge.numPlanes||wt.numIntersection!==ge.numIntersection)||wt.vertexAlphas!==vt)&&(ht=!0):(ht=!0,wt.__version=ce.version);let Ot=wt.currentProgram;ht===!0&&(Ot=mt(ce,ne,oe));let Zn=!1,Jn=!1,Xi=!1,kt=Ot.getUniforms(),Yi=wt.uniforms;if(dt.useProgram(Ot.program)&&(Zn=!0,Jn=!0,Xi=!0),ce.id!==F&&(F=ce.id,Jn=!0),Zn||z!==O){if(kt.setValue(ye,"projectionMatrix",O.projectionMatrix),bt.logarithmicDepthBuffer&&kt.setValue(ye,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),z!==O&&(z=O,Jn=!0,Xi=!0),ce.isShaderMaterial||ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshStandardMaterial||ce.envMap){let dn=kt.map.cameraPosition;dn!==void 0&&dn.setValue(ye,ze.setFromMatrixPosition(O.matrixWorld))}(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&kt.setValue(ye,"isOrthographic",O.isOrthographicCamera===!0),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial||ce.isShadowMaterial||ce.skinning)&&kt.setValue(ye,"viewMatrix",O.matrixWorldInverse)}if(ce.skinning){kt.setOptional(ye,oe,"bindMatrix"),kt.setOptional(ye,oe,"bindMatrixInverse");let dn=oe.skeleton;if(dn){let Gn=dn.bones;if(bt.floatVertexTextures){if(dn.boneTexture===null){let Kt=Math.sqrt(Gn.length*4);Kt=mb(Kt),Kt=Math.max(Kt,4);let Yt=new Float32Array(Kt*Kt*4);Yt.set(dn.boneMatrices);let hr=new va(Yt,Kt,Kt,oi,Rs);dn.boneMatrices=Yt,dn.boneTexture=hr,dn.boneTextureSize=Kt}kt.setValue(ye,"boneTexture",dn.boneTexture,Tt),kt.setValue(ye,"boneTextureSize",dn.boneTextureSize)}else kt.setOptional(ye,dn,"boneMatrices")}}return(Jn||wt.receiveShadow!==oe.receiveShadow)&&(wt.receiveShadow=oe.receiveShadow,kt.setValue(ye,"receiveShadow",oe.receiveShadow)),Jn&&(kt.setValue(ye,"toneMappingExposure",M.toneMappingExposure),wt.needsLights&&xe(Yi,Xi),Re&&ce.fog&&V.refreshFogUniforms(Yi,Re),V.refreshMaterialUniforms(Yi,ce,we,ae),fa.upload(ye,wt.uniformsList,Yi,Tt)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(fa.upload(ye,wt.uniformsList,Yi,Tt),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&kt.setValue(ye,"center",oe.center),kt.setValue(ye,"modelViewMatrix",oe.modelViewMatrix),kt.setValue(ye,"normalMatrix",oe.normalMatrix),kt.setValue(ye,"modelMatrix",oe.matrixWorld),Ot}function xe(O,ne){O.ambientLightColor.needsUpdate=ne,O.lightProbe.needsUpdate=ne,O.directionalLights.needsUpdate=ne,O.directionalLightShadows.needsUpdate=ne,O.pointLights.needsUpdate=ne,O.pointLightShadows.needsUpdate=ne,O.spotLights.needsUpdate=ne,O.spotLightShadows.needsUpdate=ne,O.rectAreaLights.needsUpdate=ne,O.hemisphereLights.needsUpdate=ne}function ct(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return A},this.setRenderTarget=function(O,ne=0,ce=0){A=O,b=ne,x=ce,O&&Rt.get(O).__webglFramebuffer===void 0&&Tt.setupRenderTarget(O);let oe=null,Re=!1,pt=!1;if(O){let gt=O.texture;(gt.isDataTexture3D||gt.isDataTexture2DArray)&&(pt=!0);let lt=Rt.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(oe=lt[ne],Re=!0):O.isWebGLMultisampleRenderTarget?oe=Rt.get(O).__webglMultisampledFramebuffer:oe=lt,C.copy(O.viewport),W.copy(O.scissor),q=O.scissorTest}else C.copy(te).multiplyScalar(we).floor(),W.copy(ie).multiplyScalar(we).floor(),q=Y;if(dt.bindFramebuffer(36160,oe),dt.viewport(C),dt.scissor(W),dt.setScissorTest(q),Re){let gt=Rt.get(O.texture);ye.framebufferTexture2D(36160,36064,34069+ne,gt.__webglTexture,ce)}else if(pt){let gt=Rt.get(O.texture),lt=ne||0;ye.framebufferTextureLayer(36160,36064,gt.__webglTexture,ce||0,lt)}},this.readRenderTargetPixels=function(O,ne,ce,oe,Re,pt,gt){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let lt=Rt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&gt!==void 0&&(lt=lt[gt]),lt){dt.bindFramebuffer(36160,lt);try{let vt=O.texture,wt=vt.format,_t=vt.type;if(wt!==oi&&ke.convert(wt)!==ye.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ht=_t===fo&&(Dt.has("EXT_color_buffer_half_float")||bt.isWebGL2&&Dt.has("EXT_color_buffer_float"));if(_t!==Ta&&ke.convert(_t)!==ye.getParameter(35738)&&!(_t===Rs&&(bt.isWebGL2||Dt.has("OES_texture_float")||Dt.has("WEBGL_color_buffer_float")))&&!ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ye.checkFramebufferStatus(36160)===36053?ne>=0&&ne<=O.width-oe&&ce>=0&&ce<=O.height-Re&&ye.readPixels(ne,ce,oe,Re,ke.convert(wt),ke.convert(_t),pt):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{let vt=A!==null?Rt.get(A).__webglFramebuffer:null;dt.bindFramebuffer(36160,vt)}}},this.copyFramebufferToTexture=function(O,ne,ce=0){let oe=Math.pow(2,-ce),Re=Math.floor(ne.image.width*oe),pt=Math.floor(ne.image.height*oe),gt=ke.convert(ne.format);Tt.setTexture2D(ne,0),ye.copyTexImage2D(3553,ce,gt,O.x,O.y,Re,pt,0),dt.unbindTexture()},this.copyTextureToTexture=function(O,ne,ce,oe=0){let Re=ne.image.width,pt=ne.image.height,gt=ke.convert(ce.format),lt=ke.convert(ce.type);Tt.setTexture2D(ce,0),ye.pixelStorei(37440,ce.flipY),ye.pixelStorei(37441,ce.premultiplyAlpha),ye.pixelStorei(3317,ce.unpackAlignment),ne.isDataTexture?ye.texSubImage2D(3553,oe,O.x,O.y,Re,pt,gt,lt,ne.image.data):ne.isCompressedTexture?ye.compressedTexSubImage2D(3553,oe,O.x,O.y,ne.mipmaps[0].width,ne.mipmaps[0].height,gt,ne.mipmaps[0].data):ye.texSubImage2D(3553,oe,O.x,O.y,gt,lt,ne.image),oe===0&&ce.generateMipmaps&&ye.generateMipmap(3553),dt.unbindTexture()},this.copyTextureToTexture3D=function(O,ne,ce,oe,Re=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let{width:pt,height:gt,data:lt}=ce.image,vt=ke.convert(oe.format),wt=ke.convert(oe.type),_t;if(oe.isDataTexture3D)Tt.setTexture3D(oe,0),_t=32879;else if(oe.isDataTexture2DArray)Tt.setTexture2DArray(oe,0),_t=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ye.pixelStorei(37440,oe.flipY),ye.pixelStorei(37441,oe.premultiplyAlpha),ye.pixelStorei(3317,oe.unpackAlignment);let ht=ye.getParameter(3314),Ot=ye.getParameter(32878),Zn=ye.getParameter(3316),Jn=ye.getParameter(3315),Xi=ye.getParameter(32877);ye.pixelStorei(3314,pt),ye.pixelStorei(32878,gt),ye.pixelStorei(3316,O.min.x),ye.pixelStorei(3315,O.min.y),ye.pixelStorei(32877,O.min.z),ye.texSubImage3D(_t,Re,ne.x,ne.y,ne.z,O.max.x-O.min.x+1,O.max.y-O.min.y+1,O.max.z-O.min.z+1,vt,wt,lt),ye.pixelStorei(3314,ht),ye.pixelStorei(32878,Ot),ye.pixelStorei(3316,Zn),ye.pixelStorei(3315,Jn),ye.pixelStorei(32877,Xi),Re===0&&oe.generateMipmaps&&ye.generateMipmap(_t),dt.unbindTexture()},this.initTexture=function(O){Tt.setTexture2D(O,0),dt.unbindTexture()},this.resetState=function(){b=0,x=0,A=null,dt.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var lf=class extends Qt{};lf.prototype.isWebGL1Renderer=!0;var po=class s{constructor(e,t=25e-5){this.name="",this.color=new Pe(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}};po.prototype.isFogExp2=!0;var yh=class s{constructor(e,t=1,n=1e3){this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}};yh.prototype.isFog=!0;var Is=class extends zt{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};Is.prototype.isScene=!0;var ks=class s{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Il,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Vi(),this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new s(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};ks.prototype.isInterleavedBuffer=!0;var kn=new L,ya=class s{constructor(e,t,n,i){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kn.x=this.getX(t),kn.y=this.getY(t),kn.z=this.getZ(t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kn.x=this.getX(t),kn.y=this.getY(t),kn.z=this.getZ(t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kn.x=this.getX(t),kn.y=this.getY(t),kn.z=this.getZ(t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Xe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};ya.prototype.isInterleavedBufferAttribute=!0;var ir=class extends Un{constructor(e){super(),this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}};ir.prototype.isSpriteMaterial=!0;var bl,Zc=new L,_l=new L,Ml=new L,El=new _e,Jc=new _e,Cb=new nt,Md=new L,Kc=new L,Ed=new L,Yy=new _e,Xm=new _e,jy=new _e,rr=class extends zt{constructor(e){if(super(),this.type="Sprite",bl===void 0){bl=new Qe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ks(t,5);bl.setIndex([0,1,2,0,2,3]),bl.setAttribute("position",new ya(n,3,0,!1)),bl.setAttribute("uv",new ya(n,2,3,!1))}this.geometry=bl,this.material=e!==void 0?e:new ir,this.center=new _e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_l.setFromMatrixScale(this.matrixWorld),Cb.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ml.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_l.multiplyScalar(-Ml.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Sd(Md.set(-.5,-.5,0),Ml,a,_l,i,r),Sd(Kc.set(.5,-.5,0),Ml,a,_l,i,r),Sd(Ed.set(.5,.5,0),Ml,a,_l,i,r),Yy.set(0,0),Xm.set(1,0),jy.set(1,1);let l=e.ray.intersectTriangle(Md,Kc,Ed,!1,Zc);if(l===null&&(Sd(Kc.set(-.5,.5,0),Ml,a,_l,i,r),Xm.set(0,1),l=e.ray.intersectTriangle(Md,Ed,Kc,!1,Zc),l===null))return;let h=e.ray.origin.distanceTo(Zc);h<e.near||h>e.far||t.push({distance:h,point:Zc.clone(),uv:li.getUV(Zc,Md,Kc,Ed,Yy,Xm,jy,new _e),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};rr.prototype.isSprite=!0;function Sd(s,e,t,n,i,r){El.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Jc.x=r*El.x-i*El.y,Jc.y=i*El.x+r*El.y):Jc.copy(El),s.copy(e),s.x+=Jc.x,s.y+=Jc.y,s.applyMatrix4(Cb)}var Td=new L,Zy=new L,cf=class extends zt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,i=t.length;n<i;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0){t=Math.abs(t);let n=this.levels,i;for(i=0;i<n.length&&!(t<n[i].distance);i++);return n.splice(i,0,{distance:t,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i&&!(e<t[n].distance);n++);return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Td.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(Td);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Td.setFromMatrixPosition(e.matrixWorld),Zy.setFromMatrixPosition(this.matrixWorld);let n=Td.distanceTo(Zy)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r&&n>=t[i].distance;i++)t[i-1].object.visible=!1,t[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance})}return t}},Jy=new L,Ky=new Pt,$y=new Pt,wA=new L,Qy=new nt,Ul=class extends Et{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new nt,this.bindMatrixInverse=new nt}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let n=this.skeleton,i=this.geometry;Ky.fromBufferAttribute(i.attributes.skinIndex,e),$y.fromBufferAttribute(i.attributes.skinWeight,e),Jy.fromBufferAttribute(i.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=$y.getComponent(r);if(a!==0){let l=Ky.getComponent(r);Qy.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(wA.copy(Jy).applyMatrix4(Qy),a)}}return t.applyMatrix4(this.bindMatrixInverse)}};Ul.prototype.isSkinnedMesh=!0;var Gl=class extends zt{constructor(){super(),this.type="Bone"}};Gl.prototype.isBone=!0;var ex=new nt,bA=new nt,hf=class s{constructor(e=[],t=[]){this.uuid=Vi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let l=e[r]?e[r].matrixWorld:bA;ex.multiplyMatrices(l,t[r]),ex.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Gl),this.bones.push(a),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let l=n[i];e.boneInverses.push(l.toArray())}return e}},tx=new nt,nx=new nt,Ad=[],$c=new Et,sr=class extends Et{constructor(e,t,n){super(e,t),this.instanceMatrix=new Xe(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if($c.geometry=this.geometry,$c.material=this.material,$c.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,tx),nx.multiplyMatrices(n,tx),$c.matrixWorld=nx,$c.raycast(e,Ad);for(let a=0,l=Ad.length;a<l;a++){let h=Ad[a];h.instanceId=r,h.object=this,t.push(h)}Ad.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xe(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};sr.prototype.isInstancedMesh=!0;var un=class extends Un{constructor(e){super(),this.type="LineBasicMaterial",this.color=new Pe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}};un.prototype.isLineBasicMaterial=!0;var ix=new L,rx=new L,sx=new nt,Ym=new Zr,Rd=new nr,_i=class extends zt{constructor(e=new Qe,t=new un){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ix.fromBufferAttribute(t,i-1),rx.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ix.distanceTo(rx);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rd.copy(n.boundingSphere),Rd.applyMatrix4(i),Rd.radius+=r,e.ray.intersectsSphere(Rd)===!1)return;sx.copy(i).invert(),Ym.copy(e.ray).applyMatrix4(sx);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,c=new L,p=new L,u=new L,f=new L,g=this.isLineSegments?2:1;if(n.isBufferGeometry){let v=n.index,S=n.attributes.position;if(v!==null){let b=Math.max(0,a.start),x=Math.min(v.count,a.start+a.count);for(let A=b,F=x-1;A<F;A+=g){let z=v.getX(A),C=v.getX(A+1);if(c.fromBufferAttribute(S,z),p.fromBufferAttribute(S,C),Ym.distanceSqToSegment(c,p,f,u)>h)continue;f.applyMatrix4(this.matrixWorld);let q=e.ray.origin.distanceTo(f);q<e.near||q>e.far||t.push({distance:q,point:u.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{let b=Math.max(0,a.start),x=Math.min(S.count,a.start+a.count);for(let A=b,F=x-1;A<F;A+=g){if(c.fromBufferAttribute(S,A),p.fromBufferAttribute(S,A+1),Ym.distanceSqToSegment(c,p,f,u)>h)continue;f.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};_i.prototype.isLine=!0;var ax=new L,ox=new L,jn=class extends _i{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ax.fromBufferAttribute(t,i),ox.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ax.distanceTo(ox);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}};jn.prototype.isLineSegments=!0;var mo=class extends _i{constructor(e,t){super(e,t),this.type="LineLoop"}};mo.prototype.isLineLoop=!0;var Fs=class extends Un{constructor(e){super(),this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}};Fs.prototype.isPointsMaterial=!0;var lx=new nt,_0=new Zr,Ld=new nr,Cd=new L,Ci=class extends zt{constructor(e=new Qe,t=new Fs){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ld.copy(n.boundingSphere),Ld.applyMatrix4(i),Ld.radius+=r,e.ray.intersectsSphere(Ld)===!1)return;lx.copy(i).invert(),_0.copy(e.ray).applyMatrix4(lx);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l;if(n.isBufferGeometry){let c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let v=f,M=g;v<M;v++){let S=c.getX(v);Cd.fromBufferAttribute(u,S),cx(Cd,S,h,i,e,t,this)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,M=g;v<M;v++)Cd.fromBufferAttribute(u,v),cx(Cd,v,h,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};Ci.prototype.isPoints=!0;function cx(s,e,t,n,i,r,a){let l=_0.distanceSqToPoint(s);if(l<t){let h=new L;_0.closestPointToPoint(s,h),h.applyMatrix4(n);let c=i.ray.origin.distanceTo(h);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(l),point:h,index:e,face:null,object:a})}}var uf=class extends ti{constructor(e,t,n,i,r,a,l,h,c){super(e,t,n,i,r,a,l,h,c),this.format=l!==void 0?l:da,this.minFilter=a!==void 0?a:jt,this.magFilter=r!==void 0?r:jt,this.generateMipmaps=!1;let p=this;function u(){p.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};uf.prototype.isVideoTexture=!0;var wh=class extends ti{constructor(e,t,n,i,r,a,l,h,c,p,u,f){super(null,a,l,h,c,p,i,r,u,f),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};wh.prototype.isCompressedTexture=!0;var ar=class extends ti{constructor(e,t,n,i,r,a,l,h,c){super(e,t,n,i,r,a,l,h,c),this.needsUpdate=!0}};ar.prototype.isCanvasTexture=!0;var df=class extends ti{constructor(e,t,n,i,r,a,l,h,c,p){if(p=p!==void 0?p:co,p!==co&&p!==Dl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===co&&(n=ch),n===void 0&&p===Dl&&(n=Cl),super(null,i,r,a,l,h,p,n,c),this.image={width:e,height:t},this.magFilter=l!==void 0?l:Rn,this.minFilter=h!==void 0?h:Rn,this.flipY=!1,this.generateMipmaps=!1}};df.prototype.isDepthTexture=!0;var go=class extends Qe{constructor(e=1,t=8,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],l=[],h=[],c=new L,p=new _e;a.push(0,0,0),l.push(0,0,1),h.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let g=n+u/t*i;c.x=e*Math.cos(g),c.y=e*Math.sin(g),a.push(c.x,c.y,c.z),l.push(0,0,1),p.x=(a[f]/e+1)/2,p.y=(a[f+1]/e+1)/2,h.push(p.x,p.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(h,2))}},vo=class extends Qe{constructor(e=1,t=1,n=1,i=8,r=1,a=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:h};let c=this;i=Math.floor(i),r=Math.floor(r);let p=[],u=[],f=[],g=[],v=0,M=[],S=n/2,b=0;x(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(p),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(g,2));function x(){let F=new L,z=new L,C=0,W=(t-e)/n;for(let q=0;q<=r;q++){let ee=[],ae=q/r,we=ae*(t-e)+e;for(let he=0;he<=i;he++){let Z=he/i,te=Z*h+l,ie=Math.sin(te),Y=Math.cos(te);z.x=we*ie,z.y=-ae*n+S,z.z=we*Y,u.push(z.x,z.y,z.z),F.set(ie,W,Y).normalize(),f.push(F.x,F.y,F.z),g.push(Z,1-ae),ee.push(v++)}M.push(ee)}for(let q=0;q<i;q++)for(let ee=0;ee<r;ee++){let ae=M[ee][q],we=M[ee+1][q],he=M[ee+1][q+1],Z=M[ee][q+1];p.push(ae,we,Z),p.push(we,he,Z),C+=6}c.addGroup(b,C,0),b+=C}function A(F){let z=v,C=new _e,W=new L,q=0,ee=F===!0?e:t,ae=F===!0?1:-1;for(let he=1;he<=i;he++)u.push(0,S*ae,0),f.push(0,ae,0),g.push(.5,.5),v++;let we=v;for(let he=0;he<=i;he++){let te=he/i*h+l,ie=Math.cos(te),Y=Math.sin(te);W.x=ee*Y,W.y=S*ae,W.z=ee*ie,u.push(W.x,W.y,W.z),f.push(0,ae,0),C.x=ie*.5+.5,C.y=Y*.5*ae+.5,g.push(C.x,C.y),v++}for(let he=0;he<i;he++){let Z=z+he,te=we+he;F===!0?p.push(te,te+1,Z):p.push(te+1,te,Z),q+=3}c.addGroup(b,q,F===!0?1:2),b+=q}}},bh=class extends vo{constructor(e=1,t=1,n=8,i=1,r=!1,a=0,l=Math.PI*2){super(0,e,t,n,i,r,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:l}}},Ns=class extends Qe{constructor(e,t,n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];l(i),c(n),p(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function l(x){let A=new L,F=new L,z=new L;for(let C=0;C<t.length;C+=3)g(t[C+0],A),g(t[C+1],F),g(t[C+2],z),h(A,F,z,x)}function h(x,A,F,z){let C=z+1,W=[];for(let q=0;q<=C;q++){W[q]=[];let ee=x.clone().lerp(F,q/C),ae=A.clone().lerp(F,q/C),we=C-q;for(let he=0;he<=we;he++)he===0&&q===C?W[q][he]=ee:W[q][he]=ee.clone().lerp(ae,he/we)}for(let q=0;q<C;q++)for(let ee=0;ee<2*(C-q)-1;ee++){let ae=Math.floor(ee/2);ee%2===0?(f(W[q][ae+1]),f(W[q+1][ae]),f(W[q][ae])):(f(W[q][ae+1]),f(W[q+1][ae+1]),f(W[q+1][ae]))}}function c(x){let A=new L;for(let F=0;F<r.length;F+=3)A.x=r[F+0],A.y=r[F+1],A.z=r[F+2],A.normalize().multiplyScalar(x),r[F+0]=A.x,r[F+1]=A.y,r[F+2]=A.z}function p(){let x=new L;for(let A=0;A<r.length;A+=3){x.x=r[A+0],x.y=r[A+1],x.z=r[A+2];let F=S(x)/2/Math.PI+.5,z=b(x)/Math.PI+.5;a.push(F,1-z)}v(),u()}function u(){for(let x=0;x<a.length;x+=6){let A=a[x+0],F=a[x+2],z=a[x+4],C=Math.max(A,F,z),W=Math.min(A,F,z);C>.9&&W<.1&&(A<.2&&(a[x+0]+=1),F<.2&&(a[x+2]+=1),z<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function g(x,A){let F=x*3;A.x=e[F+0],A.y=e[F+1],A.z=e[F+2]}function v(){let x=new L,A=new L,F=new L,z=new L,C=new _e,W=new _e,q=new _e;for(let ee=0,ae=0;ee<r.length;ee+=9,ae+=6){x.set(r[ee+0],r[ee+1],r[ee+2]),A.set(r[ee+3],r[ee+4],r[ee+5]),F.set(r[ee+6],r[ee+7],r[ee+8]),C.set(a[ae+0],a[ae+1]),W.set(a[ae+2],a[ae+3]),q.set(a[ae+4],a[ae+5]),z.copy(x).add(A).add(F).divideScalar(3);let we=S(z);M(C,ae+0,x,we),M(W,ae+2,A,we),M(q,ae+4,F,we)}}function M(x,A,F,z){z<0&&x.x===1&&(a[A]=x.x-1),F.x===0&&F.z===0&&(a[A]=z/2/Math.PI+.5)}function S(x){return Math.atan2(x.z,-x.x)}function b(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}},_h=class extends Ns{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}},Pd=new L,Dd=new L,jm=new L,Id=new li,Mh=class extends Qe{constructor(e,t){if(super(),this.type="EdgesGeometry",this.parameters={thresholdAngle:t},t=t!==void 0?t:1,e.isGeometry===!0){console.error("THREE.EdgesGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return}let i=Math.pow(10,4),r=Math.cos(ho*t),a=e.getIndex(),l=e.getAttribute("position"),h=a?a.count:l.count,c=[0,0,0],p=["a","b","c"],u=new Array(3),f={},g=[];for(let v=0;v<h;v+=3){a?(c[0]=a.getX(v),c[1]=a.getX(v+1),c[2]=a.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);let{a:M,b:S,c:b}=Id;if(M.fromBufferAttribute(l,c[0]),S.fromBufferAttribute(l,c[1]),b.fromBufferAttribute(l,c[2]),Id.getNormal(jm),u[0]=`${Math.round(M.x*i)},${Math.round(M.y*i)},${Math.round(M.z*i)}`,u[1]=`${Math.round(S.x*i)},${Math.round(S.y*i)},${Math.round(S.z*i)}`,u[2]=`${Math.round(b.x*i)},${Math.round(b.y*i)},${Math.round(b.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){let A=(x+1)%3,F=u[x],z=u[A],C=Id[p[x]],W=Id[p[A]],q=`${F}_${z}`,ee=`${z}_${F}`;ee in f&&f[ee]?(jm.dot(f[ee].normal)<=r&&(g.push(C.x,C.y,C.z),g.push(W.x,W.y,W.z)),f[ee]=null):q in f||(f[q]={index0:c[x],index1:c[A],normal:jm.clone()})}}for(let v in f)if(f[v]){let{index0:M,index1:S}=f[v];Pd.fromBufferAttribute(l,M),Dd.fromBufferAttribute(l,S),g.push(Pd.x,Pd.y,Pd.z),g.push(Dd.x,Dd.y,Dd.z)}this.setAttribute("position",new tt(g,3))}},_A={triangulate:function(s,e,t){t=t||2;let n=e&&e.length,i=n?e[0]*t:s.length,r=Pb(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let l,h,c,p,u,f,g;if(n&&(r=AA(s,e,r,t)),s.length>80*t){l=c=s[0],h=p=s[1];for(let v=t;v<i;v+=t)u=s[v],f=s[v+1],u<l&&(l=u),f<h&&(h=f),u>c&&(c=u),f>p&&(p=f);g=Math.max(c-l,p-h),g=g!==0?1/g:0}return Eh(r,a,t,l,h,g),a}};function Pb(s,e,t,n,i){let r,a;if(i===OA(s,e,t,n)>0)for(r=e;r<t;r+=n)a=hx(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=hx(r,s[r],s[r+1],a);return a&&Jf(a,a.next)&&(Th(a),a=a.next),a}function xa(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Jf(t,t.next)||Mn(t.prev,t,t.next)===0)){if(Th(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Eh(s,e,t,n,i,r,a){if(!s)return;!a&&r&&DA(s,n,i,r);let l=s,h,c;for(;s.prev!==s.next;){if(h=s.prev,c=s.next,r?EA(s,n,i,r):MA(s)){e.push(h.i/t),e.push(s.i/t),e.push(c.i/t),Th(s),s=c.next,l=c.next;continue}if(s=c,s===l){a?a===1?(s=SA(xa(s),e,t),Eh(s,e,t,n,i,r,2)):a===2&&TA(s,e,t,n,i,r):Eh(xa(s),e,t,n,i,r,1);break}}}function MA(s){let e=s.prev,t=s,n=s.next;if(Mn(e,t,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(Rl(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&Mn(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function EA(s,e,t,n){let i=s.prev,r=s,a=s.next;if(Mn(i,r,a)>=0)return!1;let l=i.x<r.x?i.x<a.x?i.x:a.x:r.x<a.x?r.x:a.x,h=i.y<r.y?i.y<a.y?i.y:a.y:r.y<a.y?r.y:a.y,c=i.x>r.x?i.x>a.x?i.x:a.x:r.x>a.x?r.x:a.x,p=i.y>r.y?i.y>a.y?i.y:a.y:r.y>a.y?r.y:a.y,u=M0(l,h,e,t,n),f=M0(c,p,e,t,n),g=s.prevZ,v=s.nextZ;for(;g&&g.z>=u&&v&&v.z<=f;){if(g!==s.prev&&g!==s.next&&Rl(i.x,i.y,r.x,r.y,a.x,a.y,g.x,g.y)&&Mn(g.prev,g,g.next)>=0||(g=g.prevZ,v!==s.prev&&v!==s.next&&Rl(i.x,i.y,r.x,r.y,a.x,a.y,v.x,v.y)&&Mn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;g&&g.z>=u;){if(g!==s.prev&&g!==s.next&&Rl(i.x,i.y,r.x,r.y,a.x,a.y,g.x,g.y)&&Mn(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;v&&v.z<=f;){if(v!==s.prev&&v!==s.next&&Rl(i.x,i.y,r.x,r.y,a.x,a.y,v.x,v.y)&&Mn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function SA(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Jf(i,r)&&Db(i,n,n.next,r)&&Sh(i,r)&&Sh(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),Th(n),Th(n.next),n=s=r),n=n.next}while(n!==s);return xa(n)}function TA(s,e,t,n,i,r){let a=s;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&FA(a,l)){let h=Ib(a,l);a=xa(a,a.next),h=xa(h,h.next),Eh(a,e,t,n,i,r),Eh(h,e,t,n,i,r);return}l=l.next}a=a.next}while(a!==s)}function AA(s,e,t,n){let i=[],r,a,l,h,c;for(r=0,a=e.length;r<a;r++)l=e[r]*n,h=r<a-1?e[r+1]*n:s.length,c=Pb(s,l,h,n,!1),c===c.next&&(c.steiner=!0),i.push(kA(c));for(i.sort(RA),r=0;r<i.length;r++)LA(i[r],t),t=xa(t,t.next);return t}function RA(s,e){return s.x-e.x}function LA(s,e){if(e=CA(s,e),e){let t=Ib(e,s);xa(e,e.next),xa(t,t.next)}}function CA(s,e){let t=e,n=s.x,i=s.y,r=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let f=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r){if(r=f,f===n){if(i===t.y)return t;if(i===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(n===r)return a;let l=a,h=a.x,c=a.y,p=1/0,u;t=a;do n>=t.x&&t.x>=h&&n!==t.x&&Rl(i<c?n:r,i,h,c,i<c?r:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),Sh(t,s)&&(u<p||u===p&&(t.x>a.x||t.x===a.x&&PA(a,t)))&&(a=t,p=u)),t=t.next;while(t!==l);return a}function PA(s,e){return Mn(s.prev,s,e.prev)<0&&Mn(e.next,s,s.next)<0}function DA(s,e,t,n){let i=s;do i.z===null&&(i.z=M0(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,IA(i)}function IA(s){let e,t,n,i,r,a,l,h,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,l=0,e=0;e<c&&(l++,n=n.nextZ,!!n);e++);for(h=c;l>0||h>0&&n;)l!==0&&(h===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,l--):(i=n,n=n.nextZ,h--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function M0(s,e,t,n,i){return s=32767*(s-t)*i,e=32767*(e-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function kA(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Rl(s,e,t,n,i,r,a,l){return(i-a)*(e-l)-(s-a)*(r-l)>=0&&(s-a)*(n-l)-(t-a)*(e-l)>=0&&(t-a)*(r-l)-(i-a)*(n-l)>=0}function FA(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!NA(s,e)&&(Sh(s,e)&&Sh(e,s)&&HA(s,e)&&(Mn(s.prev,s,e.prev)||Mn(s,e.prev,e))||Jf(s,e)&&Mn(s.prev,s,s.next)>0&&Mn(e.prev,e,e.next)>0)}function Mn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Jf(s,e){return s.x===e.x&&s.y===e.y}function Db(s,e,t,n){let i=Fd(Mn(s,e,t)),r=Fd(Mn(s,e,n)),a=Fd(Mn(t,n,s)),l=Fd(Mn(t,n,e));return!!(i!==r&&a!==l||i===0&&kd(s,t,e)||r===0&&kd(s,n,e)||a===0&&kd(t,s,n)||l===0&&kd(t,e,n))}function kd(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Fd(s){return s>0?1:s<0?-1:0}function NA(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Db(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Sh(s,e){return Mn(s.prev,s,s.next)<0?Mn(s,e,s.next)>=0&&Mn(s,s.prev,e)>=0:Mn(s,e,s.prev)<0||Mn(s,s.next,e)<0}function HA(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Ib(s,e){let t=new E0(s.i,s.x,s.y),n=new E0(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hx(s,e,t,n){let i=new E0(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Th(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function E0(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function OA(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Xr=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];ux(e),dx(n,e);let a=e.length;t.forEach(ux);for(let h=0;h<t.length;h++)i.push(a),a+=t[h].length,dx(n,t[h]);let l=_A.triangulate(n,i);for(let h=0;h<l.length;h+=3)r.push(l.slice(h,h+3));return r}};function ux(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function dx(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Kr=class extends Qe{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let l=0,h=e.length;l<h;l++){let c=e[l];a(c)}this.setAttribute("position",new tt(i,3)),this.setAttribute("uv",new tt(r,2)),this.computeVertexNormals();function a(l){let h=[],c=t.curveSegments!==void 0?t.curveSegments:12,p=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:100,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:6,v=t.bevelSize!==void 0?t.bevelSize:g-2,M=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3,b=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:BA;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let A,F=!1,z,C,W,q;b&&(A=b.getSpacedPoints(p),F=!0,f=!1,z=b.computeFrenetFrames(p,!1),C=new L,W=new L,q=new L),f||(S=0,g=0,v=0,M=0);let ee=l.extractPoints(c),ae=ee.shape,we=ee.holes;if(!Xr.isClockWise(ae)){ae=ae.reverse();for(let Ne=0,Ge=we.length;Ne<Ge;Ne++){let We=we[Ne];Xr.isClockWise(We)&&(we[Ne]=We.reverse())}}let Z=Xr.triangulateShape(ae,we),te=ae;for(let Ne=0,Ge=we.length;Ne<Ge;Ne++){let We=we[Ne];ae=ae.concat(We)}function ie(Ne,Ge,We){return Ge||console.error("THREE.ExtrudeGeometry: vec does not exist"),Ge.clone().multiplyScalar(We).add(Ne)}let Y=ae.length,Le=Z.length;function Be(Ne,Ge,We){let at,je,V,B=Ne.x-Ge.x,be=Ne.y-Ge.y,ge=We.x-Ne.x,Ie=We.y-Ne.y,Ze=B*B+be*be,It=B*Ie-be*ge;if(Math.abs(It)>Number.EPSILON){let ft=Math.sqrt(Ze),j=Math.sqrt(ge*ge+Ie*Ie),ke=Ge.x-be/ft,Ve=Ge.y+B/ft,it=We.x-Ie/j,N=We.y+ge/j,st=((it-ke)*Ie-(N-Ve)*ge)/(B*Ie-be*ge);at=ke+B*st-Ne.x,je=Ve+be*st-Ne.y;let qt=at*at+je*je;if(qt<=2)return new _e(at,je);V=Math.sqrt(qt/2)}else{let ft=!1;B>Number.EPSILON?ge>Number.EPSILON&&(ft=!0):B<-Number.EPSILON?ge<-Number.EPSILON&&(ft=!0):Math.sign(be)===Math.sign(Ie)&&(ft=!0),ft?(at=-be,je=B,V=Math.sqrt(Ze)):(at=B,je=be,V=Math.sqrt(Ze/2))}return new _e(at/V,je/V)}let Oe=[];for(let Ne=0,Ge=te.length,We=Ge-1,at=Ne+1;Ne<Ge;Ne++,We++,at++)We===Ge&&(We=0),at===Ge&&(at=0),Oe[Ne]=Be(te[Ne],te[We],te[at]);let Ke=[],ze,ut=Oe.concat();for(let Ne=0,Ge=we.length;Ne<Ge;Ne++){let We=we[Ne];ze=[];for(let at=0,je=We.length,V=je-1,B=at+1;at<je;at++,V++,B++)V===je&&(V=0),B===je&&(B=0),ze[at]=Be(We[at],We[V],We[B]);Ke.push(ze),ut=ut.concat(ze)}for(let Ne=0;Ne<S;Ne++){let Ge=Ne/S,We=g*Math.cos(Ge*Math.PI/2),at=v*Math.sin(Ge*Math.PI/2)+M;for(let je=0,V=te.length;je<V;je++){let B=ie(te[je],Oe[je],at);bt(B.x,B.y,-We)}for(let je=0,V=we.length;je<V;je++){let B=we[je];ze=Ke[je];for(let be=0,ge=B.length;be<ge;be++){let Ie=ie(B[be],ze[be],at);bt(Ie.x,Ie.y,-We)}}}let xt=v+M;for(let Ne=0;Ne<Y;Ne++){let Ge=f?ie(ae[Ne],ut[Ne],xt):ae[Ne];F?(W.copy(z.normals[0]).multiplyScalar(Ge.x),C.copy(z.binormals[0]).multiplyScalar(Ge.y),q.copy(A[0]).add(W).add(C),bt(q.x,q.y,q.z)):bt(Ge.x,Ge.y,0)}for(let Ne=1;Ne<=p;Ne++)for(let Ge=0;Ge<Y;Ge++){let We=f?ie(ae[Ge],ut[Ge],xt):ae[Ge];F?(W.copy(z.normals[Ne]).multiplyScalar(We.x),C.copy(z.binormals[Ne]).multiplyScalar(We.y),q.copy(A[Ne]).add(W).add(C),bt(q.x,q.y,q.z)):bt(We.x,We.y,u/p*Ne)}for(let Ne=S-1;Ne>=0;Ne--){let Ge=Ne/S,We=g*Math.cos(Ge*Math.PI/2),at=v*Math.sin(Ge*Math.PI/2)+M;for(let je=0,V=te.length;je<V;je++){let B=ie(te[je],Oe[je],at);bt(B.x,B.y,u+We)}for(let je=0,V=we.length;je<V;je++){let B=we[je];ze=Ke[je];for(let be=0,ge=B.length;be<ge;be++){let Ie=ie(B[be],ze[be],at);F?bt(Ie.x,Ie.y+A[p-1].y,A[p-1].x+We):bt(Ie.x,Ie.y,u+We)}}}ye(),en();function ye(){let Ne=i.length/3;if(f){let Ge=0,We=Y*Ge;for(let at=0;at<Le;at++){let je=Z[at];dt(je[2]+We,je[1]+We,je[0]+We)}Ge=p+S*2,We=Y*Ge;for(let at=0;at<Le;at++){let je=Z[at];dt(je[0]+We,je[1]+We,je[2]+We)}}else{for(let Ge=0;Ge<Le;Ge++){let We=Z[Ge];dt(We[2],We[1],We[0])}for(let Ge=0;Ge<Le;Ge++){let We=Z[Ge];dt(We[0]+Y*p,We[1]+Y*p,We[2]+Y*p)}}n.addGroup(Ne,i.length/3-Ne,0)}function en(){let Ne=i.length/3,Ge=0;Dt(te,Ge),Ge+=te.length;for(let We=0,at=we.length;We<at;We++){let je=we[We];Dt(je,Ge),Ge+=je.length}n.addGroup(Ne,i.length/3-Ne,1)}function Dt(Ne,Ge){let We=Ne.length;for(;--We>=0;){let at=We,je=We-1;je<0&&(je=Ne.length-1);for(let V=0,B=p+S*2;V<B;V++){let be=Y*V,ge=Y*(V+1),Ie=Ge+at+be,Ze=Ge+je+be,It=Ge+je+ge,ft=Ge+at+ge;Wt(Ie,Ze,It,ft)}}}function bt(Ne,Ge,We){h.push(Ne),h.push(Ge),h.push(We)}function dt(Ne,Ge,We){Rt(Ne),Rt(Ge),Rt(We);let at=i.length/3,je=x.generateTopUV(n,i,at-3,at-2,at-1);Tt(je[0]),Tt(je[1]),Tt(je[2])}function Wt(Ne,Ge,We,at){Rt(Ne),Rt(Ge),Rt(at),Rt(Ge),Rt(We),Rt(at);let je=i.length/3,V=x.generateSideWallUV(n,i,je-6,je-3,je-2,je-1);Tt(V[0]),Tt(V[1]),Tt(V[3]),Tt(V[1]),Tt(V[2]),Tt(V[3])}function Rt(Ne){i.push(h[Ne*3+0]),i.push(h[Ne*3+1]),i.push(h[Ne*3+2])}function Tt(Ne){r.push(Ne.x),r.push(Ne.y)}}}toJSON(){let e=Qe.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return zA(t,n,e)}},BA={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],l=e[n*3],h=e[n*3+1],c=e[i*3],p=e[i*3+1];return[new _e(r,a),new _e(l,h),new _e(c,p)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],l=e[t*3+1],h=e[t*3+2],c=e[n*3],p=e[n*3+1],u=e[n*3+2],f=e[i*3],g=e[i*3+1],v=e[i*3+2],M=e[r*3],S=e[r*3+1],b=e[r*3+2];return Math.abs(l-p)<.01?[new _e(a,1-h),new _e(c,1-u),new _e(f,1-v),new _e(M,1-b)]:[new _e(l,1-h),new _e(p,1-u),new _e(g,1-v),new _e(S,1-b)]}};function zA(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var mi=class extends Ns{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}},Ah=class extends Qe{constructor(e,t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ai(i,0,Math.PI*2);let r=[],a=[],l=[],h=1/t,c=new L,p=new _e;for(let u=0;u<=t;u++){let f=n+u*h*i,g=Math.sin(f),v=Math.cos(f);for(let M=0;M<=e.length-1;M++)c.x=e[M].x*g,c.y=e[M].y,c.z=e[M].x*v,a.push(c.x,c.y,c.z),p.x=u/t,p.y=M/(e.length-1),l.push(p.x,p.y)}for(let u=0;u<t;u++)for(let f=0;f<e.length-1;f++){let g=f+u*e.length,v=g,M=g+e.length,S=g+e.length+1,b=g+1;r.push(v,M,b),r.push(M,S,b)}if(this.setIndex(r),this.setAttribute("position",new tt(a,3)),this.setAttribute("uv",new tt(l,2)),this.computeVertexNormals(),i===Math.PI*2){let u=this.attributes.normal.array,f=new L,g=new L,v=new L,M=t*e.length*3;for(let S=0,b=0;S<e.length;S++,b+=3)f.x=u[b+0],f.y=u[b+1],f.z=u[b+2],g.x=u[M+b+0],g.y=u[M+b+1],g.z=u[M+b+2],v.addVectors(f,g).normalize(),u[b+0]=u[M+b+0]=v.x,u[b+1]=u[M+b+1]=v.y,u[b+2]=u[M+b+2]=v.z}}},Vl=class extends Ns{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}},Rh=class extends Qe{constructor(e,t,n){super(),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n};let i=[],r=[],a=[],l=[],h=1e-5,c=new L,p=new L,u=new L,f=new L,g=new L;e.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");let v=t+1;for(let M=0;M<=n;M++){let S=M/n;for(let b=0;b<=t;b++){let x=b/t;e(x,S,p),r.push(p.x,p.y,p.z),x-h>=0?(e(x-h,S,u),f.subVectors(p,u)):(e(x+h,S,u),f.subVectors(u,p)),S-h>=0?(e(x,S-h,u),g.subVectors(p,u)):(e(x,S+h,u),g.subVectors(u,p)),c.crossVectors(f,g).normalize(),a.push(c.x,c.y,c.z),l.push(x,S)}}for(let M=0;M<n;M++)for(let S=0;S<t;S++){let b=M*v+S,x=M*v+S+1,A=(M+1)*v+S+1,F=(M+1)*v+S;i.push(b,x,F),i.push(x,A,F)}this.setIndex(i),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(l,2))}},Pi=class extends Qe{constructor(e=.5,t=1,n=8,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let l=[],h=[],c=[],p=[],u=e,f=(t-e)/i,g=new L,v=new _e;for(let M=0;M<=i;M++){for(let S=0;S<=n;S++){let b=r+S/n*a;g.x=u*Math.cos(b),g.y=u*Math.sin(b),h.push(g.x,g.y,g.z),c.push(0,0,1),v.x=(g.x/t+1)/2,v.y=(g.y/t+1)/2,p.push(v.x,v.y)}u+=f}for(let M=0;M<i;M++){let S=M*(n+1);for(let b=0;b<n;b++){let x=b+S,A=x,F=x+n+1,z=x+n+2,C=x+1;l.push(A,F,C),l.push(F,z,C)}}this.setIndex(l),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(p,2))}},Wl=class extends Qe{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],l=0,h=0;if(Array.isArray(e)===!1)c(e);else for(let p=0;p<e.length;p++)c(e[p]),this.addGroup(l,h,p),l+=h,h=0;this.setIndex(n),this.setAttribute("position",new tt(i,3)),this.setAttribute("normal",new tt(r,3)),this.setAttribute("uv",new tt(a,2));function c(p){let u=i.length/3,f=p.extractPoints(t),g=f.shape,v=f.holes;Xr.isClockWise(g)===!1&&(g=g.reverse());for(let S=0,b=v.length;S<b;S++){let x=v[S];Xr.isClockWise(x)===!0&&(v[S]=x.reverse())}let M=Xr.triangulateShape(g,v);for(let S=0,b=v.length;S<b;S++){let x=v[S];g=g.concat(x)}for(let S=0,b=g.length;S<b;S++){let x=g[S];i.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let S=0,b=M.length;S<b;S++){let x=M[S],A=x[0]+u,F=x[1]+u,z=x[2]+u;n.push(A,F,z),h+=3}}}toJSON(){let e=Qe.prototype.toJSON.call(this),t=this.parameters.shapes;return UA(t,e)}};function UA(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Hs=class extends Qe{constructor(e=1,t=8,n=6,i=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let h=Math.min(a+l,Math.PI),c=0,p=[],u=new L,f=new L,g=[],v=[],M=[],S=[];for(let b=0;b<=n;b++){let x=[],A=b/n,F=0;b==0&&a==0?F=.5/t:b==n&&h==Math.PI&&(F=-.5/t);for(let z=0;z<=t;z++){let C=z/t;u.x=-e*Math.cos(i+C*r)*Math.sin(a+A*l),u.y=e*Math.cos(a+A*l),u.z=e*Math.sin(i+C*r)*Math.sin(a+A*l),v.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),S.push(C+F,1-A),x.push(c++)}p.push(x)}for(let b=0;b<n;b++)for(let x=0;x<t;x++){let A=p[b][x+1],F=p[b][x],z=p[b+1][x],C=p[b+1][x+1];(b!==0||a>0)&&g.push(A,F,C),(b!==n-1||h<Math.PI)&&g.push(F,z,C)}this.setIndex(g),this.setAttribute("position",new tt(v,3)),this.setAttribute("normal",new tt(M,3)),this.setAttribute("uv",new tt(S,2))}},yo=class extends Ns{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}},Lh=class extends Kr{constructor(e,t={}){let n=t.font;if(!(n&&n.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new Qe;let i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t),this.type="TextGeometry"}},Ch=class extends Qe{constructor(e=1,t=.4,n=8,i=6,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],h=[],c=[],p=new L,u=new L,f=new L;for(let g=0;g<=n;g++)for(let v=0;v<=i;v++){let M=v/i*r,S=g/n*Math.PI*2;u.x=(e+t*Math.cos(S))*Math.cos(M),u.y=(e+t*Math.cos(S))*Math.sin(M),u.z=t*Math.sin(S),l.push(u.x,u.y,u.z),p.x=e*Math.cos(M),p.y=e*Math.sin(M),f.subVectors(u,p).normalize(),h.push(f.x,f.y,f.z),c.push(v/i),c.push(g/n)}for(let g=1;g<=n;g++)for(let v=1;v<=i;v++){let M=(i+1)*g+v-1,S=(i+1)*(g-1)+v-1,b=(i+1)*(g-1)+v,x=(i+1)*g+v;a.push(M,S,x),a.push(S,b,x)}this.setIndex(a),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(c,2))}},Ph=class extends Qe{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);let l=[],h=[],c=[],p=[],u=new L,f=new L,g=new L,v=new L,M=new L,S=new L,b=new L;for(let A=0;A<=n;++A){let F=A/n*r*Math.PI*2;x(F,r,a,e,g),x(F+.01,r,a,e,v),S.subVectors(v,g),b.addVectors(v,g),M.crossVectors(S,b),b.crossVectors(M,S),M.normalize(),b.normalize();for(let z=0;z<=i;++z){let C=z/i*Math.PI*2,W=-t*Math.cos(C),q=t*Math.sin(C);u.x=g.x+(W*b.x+q*M.x),u.y=g.y+(W*b.y+q*M.y),u.z=g.z+(W*b.z+q*M.z),h.push(u.x,u.y,u.z),f.subVectors(u,g).normalize(),c.push(f.x,f.y,f.z),p.push(A/n),p.push(z/i)}}for(let A=1;A<=n;A++)for(let F=1;F<=i;F++){let z=(i+1)*(A-1)+(F-1),C=(i+1)*A+(F-1),W=(i+1)*A+F,q=(i+1)*(A-1)+F;l.push(z,C,q),l.push(C,W,q)}this.setIndex(l),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(p,2));function x(A,F,z,C,W){let q=Math.cos(A),ee=Math.sin(A),ae=z/F*A,we=Math.cos(ae);W.x=C*(2+we)*.5*q,W.y=C*(2+we)*ee*.5,W.z=C*Math.sin(ae)*.5}}},Dh=class extends Qe{constructor(e,t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let l=new L,h=new L,c=new _e,p=new L,u=[],f=[],g=[],v=[];M(),this.setIndex(v),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(g,2));function M(){for(let A=0;A<t;A++)S(A);S(r===!1?t:0),x(),b()}function S(A){p=e.getPointAt(A/t,p);let F=a.normals[A],z=a.binormals[A];for(let C=0;C<=i;C++){let W=C/i*Math.PI*2,q=Math.sin(W),ee=-Math.cos(W);h.x=ee*F.x+q*z.x,h.y=ee*F.y+q*z.y,h.z=ee*F.z+q*z.z,h.normalize(),f.push(h.x,h.y,h.z),l.x=p.x+n*h.x,l.y=p.y+n*h.y,l.z=p.z+n*h.z,u.push(l.x,l.y,l.z)}}function b(){for(let A=1;A<=t;A++)for(let F=1;F<=i;F++){let z=(i+1)*(A-1)+(F-1),C=(i+1)*A+(F-1),W=(i+1)*A+F,q=(i+1)*(A-1)+F;v.push(z,C,q),v.push(C,W,q)}}function x(){for(let A=0;A<=t;A++)for(let F=0;F<=i;F++)c.x=A/t,c.y=F/i,g.push(c.x,c.y)}}toJSON(){let e=Qe.prototype.toJSON.call(this);return e.path=this.parameters.path.toJSON(),e}},Ih=class extends Qe{constructor(e){if(super(),this.type="WireframeGeometry",e.isGeometry===!0){console.error("THREE.WireframeGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return}let t=[],n=[0,0],i={},r=new L;if(e.index!==null){let a=e.attributes.position,l=e.index,h=e.groups;h.length===0&&(h=[{start:0,count:l.count,materialIndex:0}]);for(let c=0,p=h.length;c<p;++c){let u=h[c],f=u.start,g=u.count;for(let v=f,M=f+g;v<M;v+=3)for(let S=0;S<3;S++){let b=l.getX(v+S),x=l.getX(v+(S+1)%3);n[0]=Math.min(b,x),n[1]=Math.max(b,x);let A=n[0]+","+n[1];i[A]===void 0&&(i[A]={index1:n[0],index2:n[1]})}}for(let c in i){let p=i[c];r.fromBufferAttribute(a,p.index1),t.push(r.x,r.y,r.z),r.fromBufferAttribute(a,p.index2),t.push(r.x,r.y,r.z)}}else{let a=e.attributes.position;for(let l=0,h=a.count/3;l<h;l++)for(let c=0;c<3;c++){let p=3*l+c;r.fromBufferAttribute(a,p),t.push(r.x,r.y,r.z);let u=3*l+(c+1)%3;r.fromBufferAttribute(a,u),t.push(r.x,r.y,r.z)}}this.setAttribute("position",new tt(t,3))}},yi=Object.freeze({__proto__:null,BoxGeometry:ma,BoxBufferGeometry:ma,CircleGeometry:go,CircleBufferGeometry:go,ConeGeometry:bh,ConeBufferGeometry:bh,CylinderGeometry:vo,CylinderBufferGeometry:vo,DodecahedronGeometry:_h,DodecahedronBufferGeometry:_h,EdgesGeometry:Mh,ExtrudeGeometry:Kr,ExtrudeBufferGeometry:Kr,IcosahedronGeometry:mi,IcosahedronBufferGeometry:mi,LatheGeometry:Ah,LatheBufferGeometry:Ah,OctahedronGeometry:Vl,OctahedronBufferGeometry:Vl,ParametricGeometry:Rh,ParametricBufferGeometry:Rh,PlaneGeometry:Jr,PlaneBufferGeometry:Jr,PolyhedronGeometry:Ns,PolyhedronBufferGeometry:Ns,RingGeometry:Pi,RingBufferGeometry:Pi,ShapeGeometry:Wl,ShapeBufferGeometry:Wl,SphereGeometry:Hs,SphereBufferGeometry:Hs,TetrahedronGeometry:yo,TetrahedronBufferGeometry:yo,TextGeometry:Lh,TextBufferGeometry:Lh,TorusGeometry:Ch,TorusBufferGeometry:Ch,TorusKnotGeometry:Ph,TorusKnotBufferGeometry:Ph,TubeGeometry:Dh,TubeBufferGeometry:Dh,WireframeGeometry:Ih}),kh=class extends Un{constructor(e){super(),this.type="ShadowMaterial",this.color=new Pe(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}};kh.prototype.isShadowMaterial=!0;var wa=class extends gn{constructor(e){super(e),this.type="RawShaderMaterial"}};wa.prototype.isRawShaderMaterial=!0;var ql=class extends Un{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this.vertexTangents=e.vertexTangents,this}};ql.prototype.isMeshStandardMaterial=!0;var Fh=class extends ql{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=ai(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new Pe).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this}};Fh.prototype.isMeshPhysicalMaterial=!0;var ba=class extends Un{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new Pe(16777215),this.specular=new Pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};ba.prototype.isMeshPhongMaterial=!0;var Nh=class extends Un{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}};Nh.prototype.isMeshToonMaterial=!0;var Hh=class extends Un{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};Hh.prototype.isMeshNormalMaterial=!0;var Oh=class extends Un{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}};Oh.prototype.isMeshLambertMaterial=!0;var Bh=class extends Un{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Pe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};Bh.prototype.isMeshMatcapMaterial=!0;var zh=class extends un{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};zh.prototype.isLineDashedMaterial=!0;var GA=Object.freeze({__proto__:null,ShadowMaterial:kh,SpriteMaterial:ir,RawShaderMaterial:wa,ShaderMaterial:gn,PointsMaterial:Fs,MeshPhysicalMaterial:Fh,MeshStandardMaterial:ql,MeshPhongMaterial:ba,MeshToonMaterial:Nh,MeshNormalMaterial:Hh,MeshLambertMaterial:Oh,MeshDepthMaterial:Bl,MeshDistanceMaterial:zl,MeshBasicMaterial:Cn,MeshMatcapMaterial:Bh,LineDashedMaterial:zh,LineBasicMaterial:un,Material:Un}),vn={arraySlice:function(s,e,t){return vn.isTypedArray(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)},convertArray:function(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let l=t[r]*e;for(let h=0;h!==e;++h)i[a++]=s[l+h]}return i},flattenJSON:function(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)},subclip:function(s,e,t,n,i=30){let r=s.clone();r.name=e;let a=[];for(let h=0;h<r.tracks.length;++h){let c=r.tracks[h],p=c.getValueSize(),u=[],f=[];for(let g=0;g<c.times.length;++g){let v=c.times[g]*i;if(!(v<t||v>=n)){u.push(c.times[g]);for(let M=0;M<p;++M)f.push(c.values[g*p+M])}}u.length!==0&&(c.times=vn.convertArray(u,c.times.constructor),c.values=vn.convertArray(f,c.values.constructor),a.push(c))}r.tracks=a;let l=1/0;for(let h=0;h<r.tracks.length;++h)l>r.tracks[h].times[0]&&(l=r.tracks[h].times[0]);for(let h=0;h<r.tracks.length;++h)r.tracks[h].shift(-1*l);return r.resetDuration(),r},makeClipAdditive:function(s,e=0,t=s,n=30){n<=0&&(n=30);let i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){let l=t.tracks[a],h=l.ValueTypeName;if(h==="bool"||h==="string")continue;let c=s.tracks.find(function(b){return b.name===l.name&&b.ValueTypeName===h});if(c===void 0)continue;let p=0,u=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(p=u/3);let f=0,g=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=g/3);let v=l.times.length-1,M;if(r<=l.times[0]){let b=p,x=u-p;M=vn.arraySlice(l.values,b,x)}else if(r>=l.times[v]){let b=v*u+p,x=b+u-p;M=vn.arraySlice(l.values,b,x)}else{let b=l.createInterpolant(),x=p,A=u-p;b.evaluate(r),M=vn.arraySlice(b.resultBuffer,x,A)}h==="quaternion"&&new mn().fromArray(M).normalize().conjugate().toArray(M);let S=c.times.length;for(let b=0;b<S;++b){let x=b*g+f;if(h==="quaternion")mn.multiplyQuaternionsFlat(c.values,x,M,0,c.values,x);else{let A=g-f*2;for(let F=0;F<A;++F)c.values[x+F]-=M[F]}}}return s.blendMode=tg,s}},Pr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===l)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===h)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let l=n+a>>>1;e<t[l]?a=l:n=l+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}};Pr.prototype.beforeStart_=Pr.prototype.copySampleValue_;Pr.prototype.afterEnd_=Pr.prototype.copySampleValue_;var ff=class extends Pr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ao,endingEnd:ao}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,l=i[r],h=i[a];if(l===void 0)switch(this.getSettings_().endingStart){case oo:r=e,l=2*t-n;break;case dh:r=i.length-2,l=t+i[r]-i[r+1];break;default:r=e,l=n}if(h===void 0)switch(this.getSettings_().endingEnd){case oo:a=e,h=2*n-t;break;case dh:a=1,h=n+i[1]-i[0];break;default:a=e-1,h=t}let c=(n-t)*.5,p=this.valueSize;this._weightPrev=c/(t-l),this._weightNext=c/(h-n),this._offsetPrev=r*p,this._offsetNext=a*p}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=e*l,c=h-l,p=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,g=this._weightNext,v=(n-t)/(i-t),M=v*v,S=M*v,b=-f*S+2*f*M-f*v,x=(1+f)*S+(-1.5-2*f)*M+(-.5+f)*v+1,A=(-1-g)*S+(1.5+g)*M+.5*v,F=g*S-g*M;for(let z=0;z!==l;++z)r[z]=b*a[p+z]+x*a[c+z]+A*a[h+z]+F*a[u+z];return r}},Uh=class extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=e*l,c=h-l,p=(n-t)/(i-t),u=1-p;for(let f=0;f!==l;++f)r[f]=a[c+f]*u+a[h+f]*p;return r}},pf=class extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Wi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vn.convertArray(t,this.TimeBufferType),this.values=vn.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vn.convertArray(e.times,Array),values:vn.convertArray(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Uh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ff(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case hh:t=this.InterpolantFactoryMethodDiscrete;break;case uh:t=this.InterpolantFactoryMethodLinear;break;case Xd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hh;case this.InterpolantFactoryMethodLinear:return uh;case this.InterpolantFactoryMethodSmooth:return Xd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=vn.arraySlice(n,r,a),this.values=vn.arraySlice(this.values,r*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==r;l++){let h=n[l];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,h),e=!1;break}if(a!==null&&a>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,h,a),e=!1;break}a=h}if(i!==void 0&&vn.isTypedArray(i))for(let l=0,h=i.length;l!==h;++l){let c=i[l];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,c),e=!1;break}}return e}optimize(){let e=vn.arraySlice(this.times),t=vn.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Xd,r=e.length-1,a=1;for(let l=1;l<r;++l){let h=!1,c=e[l],p=e[l+1];if(c!==p&&(l!==1||c!==e[0]))if(i)h=!0;else{let u=l*n,f=u-n,g=u+n;for(let v=0;v!==n;++v){let M=t[u+v];if(M!==t[f+v]||M!==t[g+v]){h=!0;break}}}if(h){if(l!==a){e[a]=e[l];let u=l*n,f=a*n;for(let g=0;g!==n;++g)t[f+g]=t[u+g]}++a}}if(r>0){e[a]=e[r];for(let l=r*n,h=a*n,c=0;c!==n;++c)t[h+c]=t[l+c];++a}return a!==e.length?(this.times=vn.arraySlice(e,0,a),this.values=vn.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){let e=vn.arraySlice(this.times,0),t=vn.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Wi.prototype.TimeBufferType=Float32Array;Wi.prototype.ValueBufferType=Float32Array;Wi.prototype.DefaultInterpolation=uh;var Os=class extends Wi{};Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=hh;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var Gh=class extends Wi{};Gh.prototype.ValueTypeName="color";var xo=class extends Wi{};xo.prototype.ValueTypeName="number";var mf=class extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=(n-t)/(i-t),c=e*l;for(let p=c+l;c!==p;c+=4)mn.slerpFlat(r,0,a,c-l,a,c,h);return r}},_a=class extends Wi{InterpolantFactoryMethodLinear(e){return new mf(this.times,this.values,this.getValueSize(),e)}};_a.prototype.ValueTypeName="quaternion";_a.prototype.DefaultInterpolation=uh;_a.prototype.InterpolantFactoryMethodSmooth=void 0;var Bs=class extends Wi{};Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=hh;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends Wi{};wo.prototype.ValueTypeName="vector";var bo=class{constructor(e,t=-1,n,i=Yf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Vi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,l=n.length;a!==l;++a)t.push(WA(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Wi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let l=0;l<r;l++){let h=[],c=[];h.push((l+r-1)%r,l,(l+1)%r),c.push(0,1,0);let p=vn.getKeyframeOrder(h);h=vn.sortedArray(h,1,p),c=vn.sortedArray(c,1,p),!i&&h[0]===0&&(h.push(r),c.push(c[0])),a.push(new xo(".morphTargetInfluences["+t[l].name+"]",h,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let l=0,h=e.length;l<h;l++){let c=e[l],p=c.name.match(r);if(p&&p.length>1){let u=p[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let a=[];for(let l in i)a.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,g,v,M){if(g.length!==0){let S=[],b=[];vn.flattenJSON(g,S,b,v),S.length!==0&&M.push(new u(f,S,b))}},i=[],r=e.name||"default",a=e.fps||30,l=e.blendMode,h=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let g={},v;for(v=0;v<f.length;v++)if(f[v].morphTargets)for(let M=0;M<f[v].morphTargets.length;M++)g[f[v].morphTargets[M]]=-1;for(let M in g){let S=[],b=[];for(let x=0;x!==f[v].morphTargets.length;++x){let A=f[v];S.push(A.time),b.push(A.morphTarget===M?1:0)}i.push(new xo(".morphTargetInfluence["+M+"]",S,b))}h=g.length*(a||1)}else{let g=".bones["+t[u].name+"]";n(wo,g+".position",f,"pos",i),n(_a,g+".quaternion",f,"rot",i),n(wo,g+".scale",f,"scl",i)}}return i.length===0?null:new this(r,h,i,l)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function VA(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xo;case"vector":case"vector2":case"vector3":case"vector4":return wo;case"color":return Gh;case"quaternion":return _a;case"bool":case"boolean":return Os;case"string":return Bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function WA(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=VA(s.type);if(s.times===void 0){let t=[],n=[];vn.flattenJSON(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var _o={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Vh=class{constructor(e,t,n){let i=this,r=!1,a=0,l=0,h,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){l++,r===!1&&i.onStart!==void 0&&i.onStart(p,a,l),r=!0},this.itemEnd=function(p){a++,i.onProgress!==void 0&&i.onProgress(p,a,l),a===l&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(p){i.onError!==void 0&&i.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,u){return c.push(p,u),this},this.removeHandler=function(p){let u=c.indexOf(p);return u!==-1&&c.splice(u,2),this},this.getHandler=function(p){for(let u=0,f=c.length;u<f;u+=2){let g=c[u],v=c[u+1];if(g.global&&(g.lastIndex=0),g.test(p))return v}return null}}},kb=new Vh,ni=class{constructor(e){this.manager=e!==void 0?e:kb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},Rr={},or=class extends ni{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=_o.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;if(Rr[e]!==void 0){Rr[e].push({onLoad:t,onProgress:n,onError:i});return}let l=/^data:(.*?)(;base64)?,(.*)$/,h=e.match(l),c;if(h){let p=h[1],u=!!h[2],f=h[3];f=decodeURIComponent(f),u&&(f=atob(f));try{let g,v=(this.responseType||"").toLowerCase();switch(v){case"arraybuffer":case"blob":let M=new Uint8Array(f.length);for(let b=0;b<f.length;b++)M[b]=f.charCodeAt(b);v==="blob"?g=new Blob([M.buffer],{type:p}):g=M.buffer;break;case"document":g=new DOMParser().parseFromString(f,p);break;case"json":g=JSON.parse(f);break;default:g=f;break}setTimeout(function(){t&&t(g),r.manager.itemEnd(e)},0)}catch(g){setTimeout(function(){i&&i(g),r.manager.itemError(e),r.manager.itemEnd(e)},0)}}else{Rr[e]=[],Rr[e].push({onLoad:t,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(p){let u=this.response,f=Rr[e];if(delete Rr[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),_o.add(e,u);for(let g=0,v=f.length;g<v;g++){let M=f[g];M.onLoad&&M.onLoad(u)}r.manager.itemEnd(e)}else{for(let g=0,v=f.length;g<v;g++){let M=f[g];M.onError&&M.onError(p)}r.manager.itemError(e),r.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(p){let u=Rr[e];for(let f=0,g=u.length;f<g;f++){let v=u[f];v.onProgress&&v.onProgress(p)}},!1),c.addEventListener("error",function(p){let u=Rr[e];delete Rr[e];for(let f=0,g=u.length;f<g;f++){let v=u[f];v.onError&&v.onError(p)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),c.addEventListener("abort",function(p){let u=Rr[e];delete Rr[e];for(let f=0,g=u.length;f<g;f++){let v=u[f];v.onError&&v.onError(p)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(let p in this.requestHeader)c.setRequestHeader(p,this.requestHeader[p]);c.send(null)}return r.manager.itemStart(e),c}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},S0=class extends ni{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new or(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{t(r.parse(JSON.parse(l)))}catch(h){i?i(h):console.error(h),r.manager.itemError(e)}},n,i)}parse(e){let t=[];for(let n=0;n<e.length;n++){let i=bo.parse(e[n]);t.push(i)}return t}},T0=class extends ni{constructor(e){super(e)}load(e,t,n,i){let r=this,a=[],l=new wh,h=new or(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(r.withCredentials);let c=0;function p(u){h.load(e[u],function(f){let g=r.parse(f,!0);a[u]={width:g.width,height:g.height,format:g.format,mipmaps:g.mipmaps},c+=1,c===6&&(g.mipmapCount===1&&(l.minFilter=jt),l.image=a,l.format=g.format,l.needsUpdate=!0,t&&t(l))},n,i)}if(Array.isArray(e))for(let u=0,f=e.length;u<f;++u)p(u);else h.load(e,function(u){let f=r.parse(u,!0);if(f.isCubemap){let g=f.mipmaps.length/f.mipmapCount;for(let v=0;v<g;v++){a[v]={mipmaps:[]};for(let M=0;M<f.mipmapCount;M++)a[v].mipmaps.push(f.mipmaps[v*f.mipmapCount+M]),a[v].format=f.format,a[v].width=f.width,a[v].height=f.height}l.image=a}else l.image.width=f.width,l.image.height=f.height,l.mipmaps=f.mipmaps;f.mipmapCount===1&&(l.minFilter=jt),l.format=f.format,l.needsUpdate=!0,t&&t(l)},n,i);return l}},Xl=class extends ni{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=_o.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let l=document.createElementNS("http://www.w3.org/1999/xhtml","img");function h(){l.removeEventListener("load",h,!1),l.removeEventListener("error",c,!1),_o.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(p){l.removeEventListener("load",h,!1),l.removeEventListener("error",c,!1),i&&i(p),r.manager.itemError(e),r.manager.itemEnd(e)}return l.addEventListener("load",h,!1),l.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),r.manager.itemStart(e),l.src=e,l}},gf=class extends ni{constructor(e){super(e)}load(e,t,n,i){let r=new ga,a=new Xl(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let l=0;function h(c){a.load(e[c],function(p){r.images[c]=p,l++,l===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)h(c);return r}},vf=class extends ni{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new va,l=new or(this.manager);return l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(r.withCredentials),l.load(e,function(h){let c=r.parse(h);c&&(c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:xi,a.wrapT=c.wrapT!==void 0?c.wrapT:xi,a.magFilter=c.magFilter!==void 0?c.magFilter:jt,a.minFilter=c.minFilter!==void 0?c.minFilter:jt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Sa),c.mipmapCount===1&&(a.minFilter=jt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c))},n,i),a}},yf=class extends ni{constructor(e){super(e)}load(e,t,n,i){let r=new ti,a=new Xl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){r.image=l;let h=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;r.format=h?da:oi,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let l=0,h=r-1,c;for(;l<=h;)if(i=Math.floor(l+(h-l)/2),c=n[i]-a,c<0)l=i+1;else if(c>0)h=i-1;else{h=i;break}if(i=h,n[i]===a)return i/(r-1);let p=n[i],f=n[i+1]-p,g=(a-p)/f;return(i+g)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),l=this.getPoint(r),h=t||(a.isVector2?new _e:new L);return h.copy(l).sub(a).normalize(),h}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,i=[],r=[],a=[],l=new L,h=new nt;for(let g=0;g<=e;g++){let v=g/e;i[g]=this.getTangentAt(v,new L),i[g].normalize()}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,p=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);p<=c&&(c=p,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),l.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],l),a[0].crossVectors(i[0],r[0]);for(let g=1;g<=e;g++){if(r[g]=r[g-1].clone(),a[g]=a[g-1].clone(),l.crossVectors(i[g-1],i[g]),l.length()>Number.EPSILON){l.normalize();let v=Math.acos(ai(i[g-1].dot(i[g]),-1,1));r[g].applyMatrix4(h.makeRotationAxis(l,v))}a[g].crossVectors(i[g],r[g])}if(t===!0){let g=Math.acos(ai(r[0].dot(r[e]),-1,1));g/=e,i[0].dot(l.crossVectors(r[0],r[e]))>0&&(g=-g);for(let v=1;v<=e;v++)r[v].applyMatrix4(h.makeRotationAxis(i[v],g*v)),a[v].crossVectors(i[v],r[v])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Mo=class extends Mi{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,l=!1,h=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=h}getPoint(e,t){let n=t||new _e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let l=this.aStartAngle+e*r,h=this.aX+this.xRadius*Math.cos(l),c=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let p=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=h-this.aX,g=c-this.aY;h=f*p-g*u+this.aX,c=f*u+g*p+this.aY}return n.set(h,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};Mo.prototype.isEllipseCurve=!0;var Wh=class extends Mo{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.type="ArcCurve"}};Wh.prototype.isArcCurve=!0;function ag(){let s=0,e=0,t=0,n=0;function i(r,a,l,h){s=r,e=l,t=-3*r+3*a-2*l-h,n=2*r-2*a+l+h}return{initCatmullRom:function(r,a,l,h,c){i(a,l,c*(l-r),c*(h-a))},initNonuniformCatmullRom:function(r,a,l,h,c,p,u){let f=(a-r)/c-(l-r)/(c+p)+(l-a)/p,g=(l-a)/p-(h-a)/(p+u)+(h-l)/u;f*=p,g*=p,i(a,l,f,g)},calc:function(r){let a=r*r,l=a*r;return s+e*r+t*a+n*l}}}var Nd=new L,Zm=new ag,Jm=new ag,Km=new ag,qh=class extends Mi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:h===0&&l===r-1&&(l=r-2,h=1);let c,p;this.closed||l>0?c=i[(l-1)%r]:(Nd.subVectors(i[0],i[1]).add(i[0]),c=Nd);let u=i[l%r],f=i[(l+1)%r];if(this.closed||l+2<r?p=i[(l+2)%r]:(Nd.subVectors(i[r-1],i[r-2]).add(i[r-1]),p=Nd),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,v=Math.pow(c.distanceToSquared(u),g),M=Math.pow(u.distanceToSquared(f),g),S=Math.pow(f.distanceToSquared(p),g);M<1e-4&&(M=1),v<1e-4&&(v=M),S<1e-4&&(S=M),Zm.initNonuniformCatmullRom(c.x,u.x,f.x,p.x,v,M,S),Jm.initNonuniformCatmullRom(c.y,u.y,f.y,p.y,v,M,S),Km.initNonuniformCatmullRom(c.z,u.z,f.z,p.z,v,M,S)}else this.curveType==="catmullrom"&&(Zm.initCatmullRom(c.x,u.x,f.x,p.x,this.tension),Jm.initCatmullRom(c.y,u.y,f.y,p.y,this.tension),Km.initCatmullRom(c.z,u.z,f.z,p.z,this.tension));return n.set(Zm.calc(h),Jm.calc(h),Km.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};qh.prototype.isCatmullRomCurve3=!0;function fx(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,l=s*s,h=s*l;return(2*t-2*n+r+a)*h+(-3*t+3*n-2*r-a)*l+r*s+t}function qA(s,e){let t=1-s;return t*t*e}function XA(s,e){return 2*(1-s)*s*e}function YA(s,e){return s*s*e}function ah(s,e,t,n){return qA(s,e)+XA(s,t)+YA(s,n)}function jA(s,e){let t=1-s;return t*t*t*e}function ZA(s,e){let t=1-s;return 3*t*t*s*e}function JA(s,e){return 3*(1-s)*s*s*e}function KA(s,e){return s*s*s*e}function oh(s,e,t,n,i){return jA(s,e)+ZA(s,t)+JA(s,n)+KA(s,i)}var Yl=class extends Mi{constructor(e=new _e,t=new _e,n=new _e,i=new _e){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new _e){let n=t,i=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(oh(e,i.x,r.x,a.x,l.x),oh(e,i.y,r.y,a.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};Yl.prototype.isCubicBezierCurve=!0;var Xh=class extends Mi{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(oh(e,i.x,r.x,a.x,l.x),oh(e,i.y,r.y,a.y,l.y),oh(e,i.z,r.z,a.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};Xh.prototype.isCubicBezierCurve3=!0;var Eo=class extends Mi{constructor(e=new _e,t=new _e){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let n=t||new _e;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Eo.prototype.isLineCurve=!0;var xf=class extends Mi{constructor(e=new L,t=new L){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jl=class extends Mi{constructor(e=new _e,t=new _e,n=new _e){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ah(e,i.x,r.x,a.x),ah(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};jl.prototype.isQuadraticBezierCurve=!0;var Yh=class extends Mi{constructor(e=new L,t=new L,n=new L){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ah(e,i.x,r.x,a.x),ah(e,i.y,r.y,a.y),ah(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Yh.prototype.isQuadraticBezierCurve3=!0;var Zl=class extends Mi{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),l=r-a,h=i[a===0?a:a-1],c=i[a],p=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(fx(l,h.x,c.x,p.x,u.x),fx(l,h.y,c.y,p.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new _e().fromArray(i))}return this}};Zl.prototype.isSplineCurve=!0;var A0=Object.freeze({__proto__:null,ArcCurve:Wh,CatmullRomCurve3:qh,CubicBezierCurve:Yl,CubicBezierCurve3:Xh,EllipseCurve:Mo,LineCurve:Eo,LineCurve3:xf,QuadraticBezierCurve:jl,QuadraticBezierCurve3:Yh,SplineCurve:Zl}),wf=class extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Eo(t,e))}getPoint(e){let t=e*this.getLength(),n=this.getCurveLengths(),i=0;for(;i<n.length;){if(n[i]>=t){let r=n[i]-t,a=this.curves[i],l=a.getLength(),h=l===0?0:1-r/l;return a.getPointAt(h)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],l=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,h=a.getPoints(l);for(let c=0;c<h.length;c++){let p=h[c];n&&n.equals(p)||(t.push(p),n=p)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new A0[i.type]().fromJSON(i))}return this}},So=class extends wf{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Eo(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new jl(this.currentPoint.clone(),new _e(e,t),new _e(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let l=new Yl(this.currentPoint.clone(),new _e(e,t),new _e(n,i),new _e(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Zl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+l,t+h,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,l,h){let c=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(e+c,t+p,n,i,r,a,l,h),this}absellipse(e,t,n,i,r,a,l,h){let c=new Mo(e,t,n,i,r,a,l,h);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let p=c.getPoint(1);return this.currentPoint.copy(p),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Yr=class extends So{constructor(e){super(e),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new So().fromJSON(i))}return this}},qi=class extends zt{constructor(e,t=1){super(),this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};qi.prototype.isLight=!0;var jh=class extends qi{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(zt.DefaultUp),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e){return qi.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}};jh.prototype.isHemisphereLight=!0;var px=new nt,mx=new L,gx=new L,Zh=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;mx.setFromMatrixPosition(e.matrixWorld),t.position.copy(mx),gx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gx),t.updateMatrixWorld(),px.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(px),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bf=class extends Zh{constructor(){super(new An(50,1,.5,500)),this.focus=1}updateMatrices(e){let t=this.camera,n=fh*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};bf.prototype.isSpotLightShadow=!0;var Jh=class extends qi{constructor(e,t,n=0,i=Math.PI/3,r=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(zt.DefaultUp),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.shadow=new bf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};Jh.prototype.isSpotLight=!0;var vx=new nt,Qc=new L,$m=new L,_f=class extends Zh{constructor(){super(new An(90,1,.5,500)),this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Qc.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qc),$m.copy(n.position),$m.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($m),n.updateMatrixWorld(),i.makeTranslation(-Qc.x,-Qc.y,-Qc.z),vx.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vx)}};_f.prototype.isPointLightShadow=!0;var To=class extends qi{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _f}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};To.prototype.isPointLight=!0;var Ao=class extends Ps{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,l=i+t,h=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,l-=p*this.view.offsetY,h=l-p*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,h,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};Ao.prototype.isOrthographicCamera=!0;var Mf=class extends Zh{constructor(){super(new Ao(-5,5,5,-5,.5,500))}};Mf.prototype.isDirectionalLightShadow=!0;var Ma=class extends qi{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(zt.DefaultUp),this.updateMatrix(),this.target=new zt,this.shadow=new Mf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};Ma.prototype.isDirectionalLight=!0;var Ro=class extends qi{constructor(e,t){super(e,t),this.type="AmbientLight"}};Ro.prototype.isAmbientLight=!0;var Kh=class extends qi{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}};Kh.prototype.isRectAreaLight=!0;var $h=class{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){let n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){let n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}};$h.prototype.isSphericalHarmonics3=!0;var Lo=class extends qi{constructor(e=new $h,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}};Lo.prototype.isLightProbe=!0;var Ef=class extends ni{constructor(e){super(e),this.textures={}}load(e,t,n,i){let r=this,a=new or(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(JSON.parse(l)))}catch(h){i?i(h):console.error(h),r.manager.itemError(e)}},n,i)}parse(e){let t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}let i=new GA[e.type];if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=new Pe().setHex(e.sheen)),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.skinning!==void 0&&(i.skinning=e.skinning),e.morphTargets!==void 0&&(i.morphTargets=e.morphTargets),e.morphNormals!==void 0&&(i.morphNormals=e.morphNormals),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.vertexTangents!==void 0&&(i.vertexTangents=e.vertexTangents),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(let r in e.uniforms){let a=e.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new Pe().setHex(a.value);break;case"v2":i.uniforms[r].value=new _e().fromArray(a.value);break;case"v3":i.uniforms[r].value=new L().fromArray(a.value);break;case"v4":i.uniforms[r].value=new Pt().fromArray(a.value);break;case"m3":i.uniforms[r].value=new Nn().fromArray(a.value);break;case"m4":i.uniforms[r].value=new nt().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(let r in e.extensions)i.extensions[r]=e.extensions[r];if(e.shading!==void 0&&(i.flatShading=e.shading===1),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new _e().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.transmission!==void 0&&(i.transmission=e.transmission),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),i}setTextures(e){return this.textures=e,this}},Qh=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}},Co=class extends Qe{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){let e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};Co.prototype.isInstancedBufferGeometry=!0;var wn=class extends Xe{constructor(e,t,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};wn.prototype.isInstancedBufferAttribute=!0;var Sf=class extends ni{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new or(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(JSON.parse(l)))}catch(h){i?i(h):console.error(h),r.manager.itemError(e)}},n,i)}parse(e){let t={},n={};function i(g,v){if(t[v]!==void 0)return t[v];let S=g.interleavedBuffers[v],b=r(g,S.buffer),x=th(S.type,b),A=new ks(x,S.stride);return A.uuid=S.uuid,t[v]=A,A}function r(g,v){if(n[v]!==void 0)return n[v];let S=g.arrayBuffers[v],b=new Uint32Array(S).buffer;return n[v]=b,b}let a=e.isInstancedBufferGeometry?new Co:new Qe,l=e.data.index;if(l!==void 0){let g=th(l.type,l.array);a.setIndex(new Xe(g,1))}let h=e.data.attributes;for(let g in h){let v=h[g],M;if(v.isInterleavedBufferAttribute){let S=i(e.data,v.data);M=new ya(S,v.itemSize,v.offset,v.normalized)}else{let S=th(v.type,v.array),b=v.isInstancedBufferAttribute?wn:Xe;M=new b(S,v.itemSize,v.normalized)}v.name!==void 0&&(M.name=v.name),v.usage!==void 0&&M.setUsage(v.usage),v.updateRange!==void 0&&(M.updateRange.offset=v.updateRange.offset,M.updateRange.count=v.updateRange.count),a.setAttribute(g,M)}let c=e.data.morphAttributes;if(c)for(let g in c){let v=c[g],M=[];for(let S=0,b=v.length;S<b;S++){let x=v[S],A;if(x.isInterleavedBufferAttribute){let F=i(e.data,x.data);A=new ya(F,x.itemSize,x.offset,x.normalized)}else{let F=th(x.type,x.array);A=new Xe(F,x.itemSize,x.normalized)}x.name!==void 0&&(A.name=x.name),M.push(A)}a.morphAttributes[g]=M}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let g=0,v=u.length;g!==v;++g){let M=u[g];a.addGroup(M.start,M.count,M.materialIndex)}let f=e.data.boundingSphere;if(f!==void 0){let g=new L;f.center!==void 0&&g.fromArray(f.center),a.boundingSphere=new nr(g,f.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}},R0=class extends ni{constructor(e){super(e)}load(e,t,n,i){let r=this,a=this.path===""?Qh.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;let l=new or(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){let c=null;try{c=JSON.parse(h)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}let p=c.metadata;if(p===void 0||p.type===void 0||p.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)}parse(e,t){let n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),l=this.parseTextures(e.textures,a),h=this.parseMaterials(e.materials,l),c=this.parseObject(e.object,r,h,n),p=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,p),t!==void 0){let u=!1;for(let f in a)if(a[f]instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}parseShapes(e){let t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){let r=new Yr().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){let n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){let l=new hf().fromJSON(e[r],i);n[l.uuid]=l}return n}parseGeometries(e,t){let n={},i;if(e!==void 0){let r=new Sf;for(let a=0,l=e.length;a<l;a++){let h,c=e[a];switch(c.type){case"PlaneGeometry":case"PlaneBufferGeometry":h=new yi[c.type](c.width,c.height,c.widthSegments,c.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":h=new yi[c.type](c.width,c.height,c.depth,c.widthSegments,c.heightSegments,c.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":h=new yi[c.type](c.radius,c.segments,c.thetaStart,c.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":h=new yi[c.type](c.radiusTop,c.radiusBottom,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":h=new yi[c.type](c.radius,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":h=new yi[c.type](c.radius,c.widthSegments,c.heightSegments,c.phiStart,c.phiLength,c.thetaStart,c.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":h=new yi[c.type](c.radius,c.detail);break;case"RingGeometry":case"RingBufferGeometry":h=new yi[c.type](c.innerRadius,c.outerRadius,c.thetaSegments,c.phiSegments,c.thetaStart,c.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":h=new yi[c.type](c.radius,c.tube,c.radialSegments,c.tubularSegments,c.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":h=new yi[c.type](c.radius,c.tube,c.tubularSegments,c.radialSegments,c.p,c.q);break;case"TubeGeometry":case"TubeBufferGeometry":h=new yi[c.type](new A0[c.path.type]().fromJSON(c.path),c.tubularSegments,c.radius,c.radialSegments,c.closed);break;case"LatheGeometry":case"LatheBufferGeometry":h=new yi[c.type](c.points,c.segments,c.phiStart,c.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":h=new yi[c.type](c.vertices,c.indices,c.radius,c.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":i=[];for(let u=0,f=c.shapes.length;u<f;u++){let g=t[c.shapes[u]];i.push(g)}h=new yi[c.type](i,c.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":i=[];for(let u=0,f=c.shapes.length;u<f;u++){let g=t[c.shapes[u]];i.push(g)}let p=c.options.extrudePath;p!==void 0&&(c.options.extrudePath=new A0[p.type]().fromJSON(p)),h=new yi[c.type](i,c.options);break;case"BufferGeometry":case"InstancedBufferGeometry":h=r.parse(c);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+c.type+'"');continue}h.uuid=c.uuid,c.name!==void 0&&(h.name=c.name),h.isBufferGeometry===!0&&c.userData!==void 0&&(h.userData=c.userData),n[c.uuid]=h}}return n}parseMaterials(e,t){let n={},i={};if(e!==void 0){let r=new Ef;r.setTextures(t);for(let a=0,l=e.length;a<l;a++){let h=e[a];if(h.type==="MultiMaterial"){let c=[];for(let p=0;p<h.materials.length;p++){let u=h.materials[p];n[u.uuid]===void 0&&(n[u.uuid]=r.parse(u)),c.push(n[u.uuid])}i[h.uuid]=c}else n[h.uuid]===void 0&&(n[h.uuid]=r.parse(h)),i[h.uuid]=n[h.uuid]}}return i}parseAnimations(e){let t={};if(e!==void 0)for(let n=0;n<e.length;n++){let i=e[n],r=bo.parse(i);t[r.uuid]=r}return t}parseImages(e,t){let n=this,i={},r;function a(h){return n.manager.itemStart(h),r.load(h,function(){n.manager.itemEnd(h)},void 0,function(){n.manager.itemError(h),n.manager.itemEnd(h)})}function l(h){if(typeof h=="string"){let c=h,p=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(p)}else return h.data?{data:th(h.type,h.data),width:h.width,height:h.height}:null}if(e!==void 0&&e.length>0){let h=new Vh(t);r=new Xl(h),r.setCrossOrigin(this.crossOrigin);for(let c=0,p=e.length;c<p;c++){let u=e[c],f=u.url;if(Array.isArray(f)){i[u.uuid]=[];for(let g=0,v=f.length;g<v;g++){let M=f[g],S=l(M);S!==null&&(S instanceof HTMLImageElement?i[u.uuid].push(S):i[u.uuid].push(new va(S.data,S.width,S.height)))}}else{let g=l(u.url);g!==null&&(i[u.uuid]=g)}}}return i}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}let i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){let l=e[r];l.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',l.uuid),t[l.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",l.image);let h,c=t[l.image];Array.isArray(c)?(h=new ga(c),c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new va(c.data,c.width,c.height):h=new ti(c),c&&(h.needsUpdate=!0)),h.uuid=l.uuid,l.name!==void 0&&(h.name=l.name),l.mapping!==void 0&&(h.mapping=n(l.mapping,$A)),l.offset!==void 0&&h.offset.fromArray(l.offset),l.repeat!==void 0&&h.repeat.fromArray(l.repeat),l.center!==void 0&&h.center.fromArray(l.center),l.rotation!==void 0&&(h.rotation=l.rotation),l.wrap!==void 0&&(h.wrapS=n(l.wrap[0],yx),h.wrapT=n(l.wrap[1],yx)),l.format!==void 0&&(h.format=l.format),l.type!==void 0&&(h.type=l.type),l.encoding!==void 0&&(h.encoding=l.encoding),l.minFilter!==void 0&&(h.minFilter=n(l.minFilter,xx)),l.magFilter!==void 0&&(h.magFilter=n(l.magFilter,xx)),l.anisotropy!==void 0&&(h.anisotropy=l.anisotropy),l.flipY!==void 0&&(h.flipY=l.flipY),l.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=l.premultiplyAlpha),l.unpackAlignment!==void 0&&(h.unpackAlignment=l.unpackAlignment),i[l.uuid]=h}return i}parseObject(e,t,n,i){let r;function a(p){return t[p]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",p),t[p]}function l(p){if(p!==void 0){if(Array.isArray(p)){let u=[];for(let f=0,g=p.length;f<g;f++){let v=p[f];n[v]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",v),u.push(n[v])}return u}return n[p]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",p),n[p]}}let h,c;switch(e.type){case"Scene":r=new Is,e.background!==void 0&&Number.isInteger(e.background)&&(r.background=new Pe(e.background)),e.fog!==void 0&&(e.fog.type==="Fog"?r.fog=new yh(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(r.fog=new po(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":r=new An(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(r.focus=e.focus),e.zoom!==void 0&&(r.zoom=e.zoom),e.filmGauge!==void 0&&(r.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(r.filmOffset=e.filmOffset),e.view!==void 0&&(r.view=Object.assign({},e.view));break;case"OrthographicCamera":r=new Ao(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(r.zoom=e.zoom),e.view!==void 0&&(r.view=Object.assign({},e.view));break;case"AmbientLight":r=new Ro(e.color,e.intensity);break;case"DirectionalLight":r=new Ma(e.color,e.intensity);break;case"PointLight":r=new To(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":r=new Kh(e.color,e.intensity,e.width,e.height);break;case"SpotLight":r=new Jh(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":r=new jh(e.color,e.groundColor,e.intensity);break;case"LightProbe":r=new Lo().fromJSON(e);break;case"SkinnedMesh":h=a(e.geometry),c=l(e.material),r=new Ul(h,c),e.bindMode!==void 0&&(r.bindMode=e.bindMode),e.bindMatrix!==void 0&&r.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(r.skeleton=e.skeleton);break;case"Mesh":h=a(e.geometry),c=l(e.material),r=new Et(h,c);break;case"InstancedMesh":h=a(e.geometry),c=l(e.material);let p=e.count,u=e.instanceMatrix,f=e.instanceColor;r=new sr(h,c,p),r.instanceMatrix=new Xe(new Float32Array(u.array),16),f!==void 0&&(r.instanceColor=new Xe(new Float32Array(f.array),f.itemSize));break;case"LOD":r=new cf;break;case"Line":r=new _i(a(e.geometry),l(e.material));break;case"LineLoop":r=new mo(a(e.geometry),l(e.material));break;case"LineSegments":r=new jn(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":r=new Ci(a(e.geometry),l(e.material));break;case"Sprite":r=new rr(l(e.material));break;case"Group":r=new Hn;break;case"Bone":r=new Gl;break;default:r=new zt}if(r.uuid=e.uuid,e.name!==void 0&&(r.name=e.name),e.matrix!==void 0?(r.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(r.matrixAutoUpdate=e.matrixAutoUpdate),r.matrixAutoUpdate&&r.matrix.decompose(r.position,r.quaternion,r.scale)):(e.position!==void 0&&r.position.fromArray(e.position),e.rotation!==void 0&&r.rotation.fromArray(e.rotation),e.quaternion!==void 0&&r.quaternion.fromArray(e.quaternion),e.scale!==void 0&&r.scale.fromArray(e.scale)),e.castShadow!==void 0&&(r.castShadow=e.castShadow),e.receiveShadow!==void 0&&(r.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(r.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(r.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(r.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&r.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(r.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(r.visible=e.visible),e.frustumCulled!==void 0&&(r.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(r.renderOrder=e.renderOrder),e.userData!==void 0&&(r.userData=e.userData),e.layers!==void 0&&(r.layers.mask=e.layers),e.children!==void 0){let p=e.children;for(let u=0;u<p.length;u++)r.add(this.parseObject(p[u],t,n,i))}if(e.animations!==void 0){let p=e.animations;for(let u=0;u<p.length;u++){let f=p[u];r.animations.push(i[f])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(r.autoUpdate=e.autoUpdate);let p=e.levels;for(let u=0;u<p.length;u++){let f=p[u],g=r.getObjectByProperty("uuid",f.object);g!==void 0&&r.addLevel(g,f.distance)}}return r}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}setTexturePath(e){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(e)}},$A={UVMapping:Xf,CubeReflectionMapping:ru,CubeRefractionMapping:su,EquirectangularReflectionMapping:Zd,EquirectangularRefractionMapping:Jd,CubeUVReflectionMapping:$l,CubeUVRefractionMapping:au},yx={RepeatWrapping:uo,ClampToEdgeWrapping:xi,MirroredRepeatWrapping:lh},xx={NearestFilter:Rn,NearestMipmapNearestFilter:Kd,NearestMipmapLinearFilter:$d,LinearFilter:jt,LinearMipmapNearestFilter:eg,LinearMipmapLinearFilter:Sa},Tf=class extends ni{constructor(e){super(e),typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=_o.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader,fetch(e,l).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){_o.add(e,h),t&&t(h),r.manager.itemEnd(e)}).catch(function(h){i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}};Tf.prototype.isImageBitmapLoader=!0;var Af=class{constructor(){this.type="ShapePath",this.color=new Pe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new So,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function n(x){let A=[];for(let F=0,z=x.length;F<z;F++){let C=x[F],W=new Yr;W.curves=C.curves,A.push(W)}return A}function i(x,A){let F=A.length,z=!1;for(let C=F-1,W=0;W<F;C=W++){let q=A[C],ee=A[W],ae=ee.x-q.x,we=ee.y-q.y;if(Math.abs(we)>Number.EPSILON){if(we<0&&(q=A[W],ae=-ae,ee=A[C],we=-we),x.y<q.y||x.y>ee.y)continue;if(x.y===q.y){if(x.x===q.x)return!0}else{let he=we*(x.x-q.x)-ae*(x.y-q.y);if(he===0)return!0;if(he<0)continue;z=!z}}else{if(x.y!==q.y)continue;if(ee.x<=x.x&&x.x<=q.x||q.x<=x.x&&x.x<=ee.x)return!0}}return z}let r=Xr.isClockWise,a=this.subPaths;if(a.length===0)return[];if(t===!0)return n(a);let l,h,c,p=[];if(a.length===1)return h=a[0],c=new Yr,c.curves=h.curves,p.push(c),p;let u=!r(a[0].getPoints());u=e?!u:u;let f=[],g=[],v=[],M=0,S;g[M]=void 0,v[M]=[];for(let x=0,A=a.length;x<A;x++)h=a[x],S=h.getPoints(),l=r(S),l=e?!l:l,l?(!u&&g[M]&&M++,g[M]={s:new Yr,p:S},g[M].s.curves=h.curves,u&&M++,v[M]=[]):v[M].push({h,p:S[0]});if(!g[0])return n(a);if(g.length>1){let x=!1,A=[];for(let F=0,z=g.length;F<z;F++)f[F]=[];for(let F=0,z=g.length;F<z;F++){let C=v[F];for(let W=0;W<C.length;W++){let q=C[W],ee=!0;for(let ae=0;ae<g.length;ae++)i(q.p,g[ae].p)&&(F!==ae&&A.push({froms:F,tos:ae,hole:W}),ee?(ee=!1,f[ae].push(q)):x=!0);ee&&f[F].push(q)}}A.length>0&&(x||(v=f))}let b;for(let x=0,A=g.length;x<A;x++){c=g[x].s,p.push(c),b=v[x];for(let F=0,z=b.length;F<z;F++)c.holes.push(b[F].h)}return p}},eu=class{constructor(e){this.type="Font",this.data=e}generateShapes(e,t=100){let n=[],i=QA(e,t,this.data);for(let r=0,a=i.length;r<a;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}};function QA(s,e,t){let n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,a=[],l=0,h=0;for(let c=0;c<n.length;c++){let p=n[c];if(p===`
`)l=0,h-=r;else{let u=eR(p,i,l,h,t);l+=u.offsetX,a.push(u.path)}}return a}function eR(s,e,t,n,i){let r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}let a=new Af,l,h,c,p,u,f,g,v;if(r.o){let M=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let S=0,b=M.length;S<b;)switch(M[S++]){case"m":l=M[S++]*e+t,h=M[S++]*e+n,a.moveTo(l,h);break;case"l":l=M[S++]*e+t,h=M[S++]*e+n,a.lineTo(l,h);break;case"q":c=M[S++]*e+t,p=M[S++]*e+n,u=M[S++]*e+t,f=M[S++]*e+n,a.quadraticCurveTo(u,f,c,p);break;case"b":c=M[S++]*e+t,p=M[S++]*e+n,u=M[S++]*e+t,f=M[S++]*e+n,g=M[S++]*e+t,v=M[S++]*e+n,a.bezierCurveTo(u,f,g,v,c,p);break}}return{offsetX:r.ha*e,path:a}}eu.prototype.isFont=!0;var L0=class extends ni{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new or(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let h;try{h=JSON.parse(l)}catch(p){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),h=JSON.parse(l.substring(65,l.length-2))}let c=r.parse(h);t&&t(c)},n,i)}parse(e){return new eu(e)}},Hd,og={getContext:function(){return Hd===void 0&&(Hd=new(window.AudioContext||window.webkitAudioContext)),Hd},setContext:function(s){Hd=s}},Rf=class extends ni{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new or(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{let h=l.slice(0);og.getContext().decodeAudioData(h,function(p){t(p)})}catch(h){i?i(h):console.error(h),r.manager.itemError(e)}},n,i)}},Lf=class extends Lo{constructor(e,t,n=1){super(void 0,n);let i=new Pe().set(e),r=new Pe().set(t),a=new L(i.r,i.g,i.b),l=new L(r.r,r.g,r.b),h=Math.sqrt(Math.PI),c=h*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(l).multiplyScalar(h),this.sh.coefficients[1].copy(a).sub(l).multiplyScalar(c)}};Lf.prototype.isHemisphereLightProbe=!0;var Cf=class extends Lo{constructor(e,t=1){super(void 0,t);let n=new Pe().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}};Cf.prototype.isAmbientLightProbe=!0;var wx=new nt,bx=new nt,C0=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new An,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new An,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep;let i=e.projectionMatrix.clone(),r=t.eyeSep/2,a=r*t.near/t.focus,l=t.near*Math.tan(ho*t.fov*.5)/t.zoom,h,c;bx.elements[12]=-r,wx.elements[12]=r,h=-l*t.aspect+a,c=l*t.aspect+a,i.elements[0]=2*t.near/(c-h),i.elements[8]=(c+h)/(c-h),this.cameraL.projectionMatrix.copy(i),h=-l*t.aspect-a,c=l*t.aspect-a,i.elements[0]=2*t.near/(c-h),i.elements[8]=(c+h)/(c-h),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(bx),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(wx)}},Pf=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_x(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=_x();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function _x(){return(typeof performance=="undefined"?Date:performance).now()}var Qa=new L,Mx=new mn,tR=new L,eo=new L,P0=class extends zt{constructor(){super(),this.type="AudioListener",this.context=og.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Pf}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Qa,Mx,tR),eo.set(0,0,-1).applyQuaternion(Mx),t.positionX){let i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Qa.x,i),t.positionY.linearRampToValueAtTime(Qa.y,i),t.positionZ.linearRampToValueAtTime(Qa.z,i),t.forwardX.linearRampToValueAtTime(eo.x,i),t.forwardY.linearRampToValueAtTime(eo.y,i),t.forwardZ.linearRampToValueAtTime(eo.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Qa.x,Qa.y,Qa.z),t.setOrientation(eo.x,eo.y,eo.z,n.x,n.y,n.z)}},tu=class extends zt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}},to=new L,Ex=new mn,nR=new L,no=new L,D0=class extends tu{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(to,Ex,nR),no.set(0,0,1).applyQuaternion(Ex);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(to.x,n),t.positionY.linearRampToValueAtTime(to.y,n),t.positionZ.linearRampToValueAtTime(to.z,n),t.orientationX.linearRampToValueAtTime(no.x,n),t.orientationY.linearRampToValueAtTime(no.y,n),t.orientationZ.linearRampToValueAtTime(no.z,n)}else t.setPosition(to.x,to.y,to.z),t.setOrientation(no.x,no.y,no.z)}},Df=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},If=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let l=0;l!==i;++l)n[r+l]=n[l];a=t}else{a+=t;let l=t/a;this._mixBufferRegion(n,r,0,l,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,l=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let h=t*this._origIndex;this._mixBufferRegion(n,i,h,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let h=t,c=t+t;h!==c;++h)if(n[h]!==n[h+t]){l.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){mn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;mn.multiplyQuaternionsFlat(e,a,e,t,e,n),mn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let l=0;l!==r;++l){let h=t+l;e[h]=e[h]*a+e[n+l]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]+e[n+a]*i}}},lg="\\[\\]\\.:\\/",iR=new RegExp("["+lg+"]","g"),cg="[^"+lg+"]",rR="[^"+lg.replace("\\.","")+"]",sR=/((?:WC+[\/:])*)/.source.replace("WC",cg),aR=/(WCOD+)?/.source.replace("WCOD",rR),oR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cg),lR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cg),cR=new RegExp("^"+sR+aR+oR+lR+"$"),hR=["material","materials","bones"],I0=class{constructor(e,t,n){let i=n||rn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rn=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iR,"")}static parseTrackName(e){let t=cR.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);hR.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===t||l.uuid===t)return l;let h=n(l.children);if(h)return h}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.node[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===c){c=p;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rn.Composite=I0;rn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rn.prototype.GetterByBindingType=[rn.prototype._getValue_direct,rn.prototype._getValue_array,rn.prototype._getValue_arrayElement,rn.prototype._getValue_toArray];rn.prototype.SetterByBindingTypeAndVersioning=[[rn.prototype._setValue_direct,rn.prototype._setValue_direct_setNeedsUpdate,rn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_array,rn.prototype._setValue_array_setNeedsUpdate,rn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_arrayElement,rn.prototype._setValue_arrayElement_setNeedsUpdate,rn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_fromArray,rn.prototype._setValue_fromArray_setNeedsUpdate,rn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kf=class{constructor(){this.uuid=Vi(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length,l,h=e.length,c=this.nCachedObjects_;for(let p=0,u=arguments.length;p!==u;++p){let f=arguments[p],g=f.uuid,v=t[g];if(v===void 0){v=h++,t[g]=v,e.push(f);for(let M=0,S=a;M!==S;++M)r[M].push(new rn(f,n[M],i[M]))}else if(v<c){l=e[v];let M=--c,S=e[M];t[S.uuid]=v,e[v]=S,t[g]=M,e[M]=f;for(let b=0,x=a;b!==x;++b){let A=r[b],F=A[M],z=A[v];A[v]=F,z===void 0&&(z=new rn(f,n[b],i[b])),A[M]=z}}else e[v]!==l&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let a=0,l=arguments.length;a!==l;++a){let h=arguments[a],c=h.uuid,p=t[c];if(p!==void 0&&p>=r){let u=r++,f=e[u];t[f.uuid]=p,e[p]=f,t[c]=u,e[u]=h;for(let g=0,v=i;g!==v;++g){let M=n[g],S=M[u],b=M[p];M[p]=S,M[u]=b}}}this.nCachedObjects_=r}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,a=e.length;for(let l=0,h=arguments.length;l!==h;++l){let c=arguments[l],p=c.uuid,u=t[p];if(u!==void 0)if(delete t[p],u<r){let f=--r,g=e[f],v=--a,M=e[v];t[g.uuid]=u,e[u]=g,t[M.uuid]=f,e[f]=M,e.pop();for(let S=0,b=i;S!==b;++S){let x=n[S],A=x[f],F=x[v];x[u]=A,x[f]=F,x.pop()}}else{let f=--a,g=e[f];f>0&&(t[g.uuid]=u),e[u]=g,e.pop();for(let v=0,M=i;v!==M;++v){let S=n[v];S[u]=S[f],S.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){let n=this._bindingsIndicesByPath,i=n[e],r=this._bindings;if(i!==void 0)return r[i];let a=this._paths,l=this._parsedPaths,h=this._objects,c=h.length,p=this.nCachedObjects_,u=new Array(c);i=r.length,n[e]=i,a.push(e),l.push(t),r.push(u);for(let f=p,g=h.length;f!==g;++f){let v=h[f];u[f]=new rn(v,e,t)}return u}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let i=this._paths,r=this._parsedPaths,a=this._bindings,l=a.length-1,h=a[l],c=e[l];t[c]=n,a[n]=h,a.pop(),r[n]=r[l],r.pop(),i[n]=i[l],i.pop()}}};kf.prototype.isAnimationObjectGroup=!0;var k0=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,l=new Array(a),h={endingStart:ao,endingEnd:ao};for(let c=0;c!==a;++c){let p=r[c].createInterpolant(null);l[c]=p,p.settings=h}this._interpolantSettings=h,this._interpolants=l,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ob,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,a=r/i,l=i/r;e.warp(1,a,t),this.warp(l,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,l=this._timeScaleInterpolant;l===null&&(l=i._lendControlInterpolant(),this._timeScaleInterpolant=l);let h=l.parameterPositions,c=l.sampleValues;return h[0]=r,h[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let h=(e-r)*n;if(h<0||n===0)return;this._startTime=null,t=n*h}t*=this._updateTimeScale(e);let a=this._updateTime(t),l=this._updateWeight(e);if(l>0){let h=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case tg:for(let p=0,u=h.length;p!==u;++p)h[p].evaluate(a),c[p].accumulateAdditive(l);break;case Yf:default:for(let p=0,u=h.length;p!==u;++p)h[p].evaluate(a),c[p].accumulate(i,l)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===lb;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===ab){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let l=Math.floor(i/t);i-=t*l,r+=Math.abs(l);let h=this.repetitions-r;if(h<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(h===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:l})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=oo,i.endingEnd=oo):(e?i.endingStart=this.zeroSlopeAtStart?oo:ao:i.endingStart=dh,t?i.endingEnd=this.zeroSlopeAtEnd?oo:ao:i.endingEnd=dh)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let l=a.parameterPositions,h=a.sampleValues;return l[0]=r,h[0]=t,l[1]=r+e,h[1]=n,this}},Ff=class extends jr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,l=e._interpolants,h=n.uuid,c=this._bindingsByRootAndName,p=c[h];p===void 0&&(p={},c[h]=p);for(let u=0;u!==r;++u){let f=i[u],g=f.name,v=p[g];if(v!==void 0)a[u]=v;else{if(v=a[u],v!==void 0){v._cacheIndex===null&&(++v.referenceCount,this._addInactiveBinding(v,h,g));continue}let M=t&&t._propertyBindings[u].binding.parsedPath;v=new If(rn.create(n,g,M),f.ValueTypeName,f.getValueSize()),++v.referenceCount,this._addInactiveBinding(v,h,g),a[u]=v}l[u].resultBuffer=v.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let l=a.knownActions;e._byClipCacheIndex=l.length,l.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,l=a[r],h=l.knownActions,c=h[h.length-1],p=e._byClipCacheIndex;c._byClipCacheIndex=p,h[p]=c,h.pop(),e._byClipCacheIndex=null;let u=l.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],h.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,l=a[i],h=t[t.length-1],c=e._cacheIndex;h._cacheIndex=c,t[c]=h,t.pop(),delete l[r],Object.keys(l).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Uh(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?bo.findByName(i,e):e,l=a!==null?a.uuid:e,h=this._actionsByClip[l],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Yf),h!==void 0){let u=h.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=h.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let p=new k0(this,a,t,n);return this._bindAction(p,c),this._addInactiveAction(p,l,r),p}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?bo.findByName(n,e):e,a=r?r.uuid:e,l=this._actionsByClip[a];return l!==void 0&&l.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);let l=this._bindings,h=this._nActiveBindings;for(let c=0;c!==h;++c)l[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let l=0,h=a.length;l!==h;++l){let c=a[l];this._deactivateAction(c);let p=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=p,t[p]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let l=n[a].actionByRoot,h=l[t];h!==void 0&&(this._deactivateAction(h),this._removeInactiveAction(h))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let l=r[a];l.restoreOriginalState(),this._removeInactiveBinding(l)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};Ff.prototype._controlInterpolantsResultBuffer=new Float32Array(1);var Nf=class s{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},Hf=class extends ks{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};Hf.prototype.isInstancedInterleavedBuffer=!0;var Of=class{constructor(e,t,n,i,r){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}};Of.prototype.isGLBufferAttribute=!0;var F0=class{constructor(e,t,n=0,i=1/0){this.ray=new Zr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ph,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!1,n=[]){return N0(e,this,n,t),n.sort(Sx),n}intersectObjects(e,t=!1,n=[]){for(let i=0,r=e.length;i<r;i++)N0(e[i],this,n,t);return n.sort(Sx),n}};function Sx(s,e){return s.distance-e.distance}function N0(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,a=i.length;r<a;r++)N0(i[r],e,t,!0)}}var H0=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ai(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},O0=class{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}},Tx=new _e,Ea=class{constructor(e=new _e(1/0,1/0),t=new _e(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tx.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new _e),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new _e),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new _e),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new _e),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Tx.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};Ea.prototype.isBox2=!0;var Ax=new L,Od=new L,Bf=class{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new L),e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new L),e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return t===void 0&&(console.warn("THREE.Line3: .at() target is now required"),t=new L),this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ax.subVectors(e,this.start),Od.subVectors(this.end,this.start);let n=Od.dot(Od),r=Od.dot(Ax)/n;return t&&(r=ai(r,0,1)),r}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return n===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),n=new L),this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},zf=class extends zt{constructor(e){super(),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}};zf.prototype.isImmediateRenderObject=!0;var Rx=new L,B0=class extends zt{constructor(e,t){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;let n=new Qe,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,l=1,h=32;a<h;a++,l++){let c=a/h*Math.PI*2,p=l/h*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(p),Math.sin(p),1)}n.setAttribute("position",new tt(i,3));let r=new un({fog:!1,toneMapped:!1});this.cone=new jn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Rx.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Rx),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},ua=new L,Bd=new nt,Qm=new nt,Uf=class extends jn{constructor(e){let t=Fb(e),n=new Qe,i=[],r=[],a=new Pe(0,0,1),l=new Pe(0,1,0);for(let c=0;c<t.length;c++){let p=t[c];p.parent&&p.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(l.r,l.g,l.b))}n.setAttribute("position",new tt(i,3)),n.setAttribute("color",new tt(r,3));let h=new un({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,h),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,i=n.getAttribute("position");Qm.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){let l=t[r];l.parent&&l.parent.isBone&&(Bd.multiplyMatrices(Qm,l.matrixWorld),ua.setFromMatrixPosition(Bd),i.setXYZ(a,ua.x,ua.y,ua.z),Bd.multiplyMatrices(Qm,l.parent.matrixWorld),ua.setFromMatrixPosition(Bd),i.setXYZ(a+1,ua.x,ua.y,ua.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}};function Fb(s){let e=[];s&&s.isBone&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,Fb(s.children[t]));return e}var z0=class extends Et{constructor(e,t,n){let i=new Hs(t,4,2),r=new Cn({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.light.updateMatrixWorld(),this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},uR=new L,Lx=new Pe,Cx=new Pe,U0=class extends zt{constructor(e,t,n){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n;let i=new Vl(t);i.rotateY(Math.PI*.5),this.material=new Cn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new Xe(a,3)),this.add(new Et(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");Lx.copy(this.light.color),Cx.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){let r=n<i/2?Lx:Cx;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}e.lookAt(uR.setFromMatrixPosition(this.light.matrixWorld).negate())}},Gf=class extends jn{constructor(e=10,t=10,n=4473924,i=8947848){n=new Pe(n),i=new Pe(i);let r=t/2,a=e/t,l=e/2,h=[],c=[];for(let f=0,g=0,v=-l;f<=t;f++,v+=a){h.push(-l,0,v,l,0,v),h.push(v,0,-l,v,0,l);let M=f===r?n:i;M.toArray(c,g),g+=3,M.toArray(c,g),g+=3,M.toArray(c,g),g+=3,M.toArray(c,g),g+=3}let p=new Qe;p.setAttribute("position",new tt(h,3)),p.setAttribute("color",new tt(c,3));let u=new un({vertexColors:!0,toneMapped:!1});super(p,u),this.type="GridHelper"}},G0=class extends jn{constructor(e=10,t=16,n=8,i=64,r=4473924,a=8947848){r=new Pe(r),a=new Pe(a);let l=[],h=[];for(let u=0;u<=t;u++){let f=u/t*(Math.PI*2),g=Math.sin(f)*e,v=Math.cos(f)*e;l.push(0,0,0),l.push(g,0,v);let M=u&1?r:a;h.push(M.r,M.g,M.b),h.push(M.r,M.g,M.b)}for(let u=0;u<=n;u++){let f=u&1?r:a,g=e-e/n*u;for(let v=0;v<i;v++){let M=v/i*(Math.PI*2),S=Math.sin(M)*g,b=Math.cos(M)*g;l.push(S,0,b),h.push(f.r,f.g,f.b),M=(v+1)/i*(Math.PI*2),S=Math.sin(M)*g,b=Math.cos(M)*g,l.push(S,0,b),h.push(f.r,f.g,f.b)}}let c=new Qe;c.setAttribute("position",new tt(l,3)),c.setAttribute("color",new tt(h,3));let p=new un({vertexColors:!0,toneMapped:!1});super(c,p),this.type="PolarGridHelper"}},Px=new L,zd=new L,Dx=new L,V0=class extends zt{constructor(e,t,n){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,t===void 0&&(t=1);let i=new Qe;i.setAttribute("position",new tt([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let r=new un({fog:!1,toneMapped:!1});this.lightPlane=new _i(i,r),this.add(this.lightPlane),i=new Qe,i.setAttribute("position",new tt([0,0,0,0,0,1],3)),this.targetLine=new _i(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){Px.setFromMatrixPosition(this.light.matrixWorld),zd.setFromMatrixPosition(this.light.target.matrixWorld),Dx.subVectors(zd,Px),this.lightPlane.lookAt(zd),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(zd),this.targetLine.scale.z=Dx.length()}},Ud=new L,Tn=new Ps,W0=class extends jn{constructor(e){let t=new Qe,n=new un({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={},l=new Pe(16755200),h=new Pe(16711680),c=new Pe(43775),p=new Pe(16777215),u=new Pe(3355443);f("n1","n2",l),f("n2","n4",l),f("n4","n3",l),f("n3","n1",l),f("f1","f2",l),f("f2","f4",l),f("f4","f3",l),f("f3","f1",l),f("n1","f1",l),f("n2","f2",l),f("n3","f3",l),f("n4","f4",l),f("p","n1",h),f("p","n2",h),f("p","n3",h),f("p","n4",h),f("u1","u2",c),f("u2","u3",c),f("u3","u1",c),f("c","t",p),f("p","c",u),f("cn1","cn2",u),f("cn3","cn4",u),f("cf1","cf2",u),f("cf3","cf4",u);function f(v,M,S){g(v,S),g(M,S)}function g(v,M){i.push(0,0,0),r.push(M.r,M.g,M.b),a[v]===void 0&&(a[v]=[]),a[v].push(i.length/3-1)}t.setAttribute("position",new tt(i,3)),t.setAttribute("color",new tt(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update()}update(){let e=this.geometry,t=this.pointMap,n=1,i=1;Tn.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Fn("c",t,e,Tn,0,0,-1),Fn("t",t,e,Tn,0,0,1),Fn("n1",t,e,Tn,-n,-i,-1),Fn("n2",t,e,Tn,n,-i,-1),Fn("n3",t,e,Tn,-n,i,-1),Fn("n4",t,e,Tn,n,i,-1),Fn("f1",t,e,Tn,-n,-i,1),Fn("f2",t,e,Tn,n,-i,1),Fn("f3",t,e,Tn,-n,i,1),Fn("f4",t,e,Tn,n,i,1),Fn("u1",t,e,Tn,n*.7,i*1.1,-1),Fn("u2",t,e,Tn,-n*.7,i*1.1,-1),Fn("u3",t,e,Tn,0,i*2,-1),Fn("cf1",t,e,Tn,-n,0,1),Fn("cf2",t,e,Tn,n,0,1),Fn("cf3",t,e,Tn,0,-i,1),Fn("cf4",t,e,Tn,0,i,1),Fn("cn1",t,e,Tn,-n,0,-1),Fn("cn2",t,e,Tn,n,0,-1),Fn("cn3",t,e,Tn,0,-i,-1),Fn("cn4",t,e,Tn,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function Fn(s,e,t,n,i,r,a){Ud.set(i,r,a).unproject(n);let l=e[s];if(l!==void 0){let h=t.getAttribute("position");for(let c=0,p=l.length;c<p;c++)h.setXYZ(l[c],Ud.x,Ud.y,Ud.z)}}var Gd=new fi,Vf=class extends jn{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new Qe;r.setIndex(new Xe(n,1)),r.setAttribute("position",new Xe(i,3)),super(r,new un({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Gd.setFromObject(this.object),Gd.isEmpty())return;let t=Gd.min,n=Gd.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e){return jn.prototype.copy.call(this,e),this.object=e.object,this}},q0=class extends jn{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Qe;r.setIndex(new Xe(n,1)),r.setAttribute("position",new tt(i,3)),super(r,new un({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}},X0=class extends _i{constructor(e,t=1,n=16776960){let i=n,r=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],a=new Qe;a.setAttribute("position",new tt(r,3)),a.computeBoundingSphere(),super(a,new un({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let l=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],h=new Qe;h.setAttribute("position",new tt(l,3)),h.computeBoundingSphere(),this.add(new Et(h,new Cn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){let t=-this.plane.constant;Math.abs(t)<1e-8&&(t=1e-8),this.scale.set(.5*this.size,.5*this.size,t),this.children[0].material.side=t<0?xn:Jl,this.lookAt(this.plane.normal),super.updateMatrixWorld(e)}},Ix=new L,Vd,e0,Y0=class extends zt{constructor(e=new L(0,0,1),t=new L(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Vd===void 0&&(Vd=new Qe,Vd.setAttribute("position",new tt([0,0,0,0,1,0],3)),e0=new vo(0,.5,1,5,1),e0.translate(0,-.5,0)),this.position.copy(t),this.line=new _i(Vd,new un({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Et(e0,new Cn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Ix.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Ix,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}},Wf=class extends jn{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Qe;i.setAttribute("position",new tt(t,3)),i.setAttribute("color",new tt(n,3));let r=new un({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},Nb=new Float32Array(1),dR=new Int32Array(Nb.buffer),j0=class{static toHalfFloat(e){Nb[0]=e;let t=dR[0],n=t>>16&32768,i=t>>12&2047,r=t>>23&255;return r<103?n:r>142?(n|=31744,n|=(r==255?0:1)&&t&8388607,n):r<113?(i|=2048,n|=(i>>114-r)+(i>>113-r&1),n):(n|=r-112<<10|i>>1,n+=i&1,n)}},Pl=4,pa=8,Wr=Math.pow(2,pa),Hb=[.125,.215,.35,.446,.526,.582],Ob=pa-Pl+1+Hb.length,Sl=20,qr={[wi]:0,[Aa]:1,[Zf]:2,[ng]:3,[ig]:4,[rg]:5,[jf]:6},io=new Cn({side:xn,depthWrite:!1,depthTest:!1}),fR=new Et(new ma,io),t0=new Ao,{_lodPlanes:eh,_sizeLods:kx,_sigmas:Wd}=mR(),Fx=new Pe,n0=null,ro=(1+Math.sqrt(5))/2,Tl=1/ro,Nx=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,ro,Tl),new L(0,ro,-Tl),new L(Tl,0,ro),new L(-Tl,0,ro),new L(ro,Tl,0),new L(-ro,Tl,0)];function Hx(s){let e=Math.max(s.r,s.g,s.b),t=Math.min(Math.max(Math.ceil(Math.log2(e)),-128),127);return s.multiplyScalar(Math.pow(2,-t)),(t+128)/255}var Z0=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=gR(Sl),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){n0=this._renderer.getRenderTarget();let r=this._allocateTargets();return this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=zx(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Bx(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<eh.length;e++)eh[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(n0),e.scissorTest=!1,qd(e,0,0,e.width,e.height)}_fromTexture(e){n0=this._renderer.getRenderTarget();let t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){let t={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Ta,format:Mw,encoding:pR(e)?e.encoding:Zf,depthBuffer:!1},n=Ox(t);return n.depthBuffer=!e,this._pingPongRenderTarget=Ox(t),n}_compileMaterial(e){let t=new Et(eh[0],e);this._renderer.compile(t,t0)}_sceneToCubeUV(e,t,n,i){let l=new An(90,1,t,n),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,f=p.outputEncoding,g=p.toneMapping;p.getClearColor(Fx),p.toneMapping=lo,p.outputEncoding=wi,p.autoClear=!1;let v=!1,M=e.background;if(M){if(M.isColor){io.color.copy(M).convertSRGBToLinear(),e.background=null;let S=Hx(io.color);io.opacity=S,v=!0}}else{io.color.copy(Fx).convertSRGBToLinear();let S=Hx(io.color);io.opacity=S,v=!0}for(let S=0;S<6;S++){let b=S%3;b==0?(l.up.set(0,h[S],0),l.lookAt(c[S],0,0)):b==1?(l.up.set(0,0,h[S]),l.lookAt(0,c[S],0)):(l.up.set(0,h[S],0),l.lookAt(0,0,c[S])),qd(i,b*Wr,S>2?Wr:0,Wr,Wr),p.setRenderTarget(i),v&&p.render(fR,l),p.render(e,l)}p.toneMapping=g,p.outputEncoding=f,p.autoClear=u}_textureToCubeUV(e,t){let n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=zx()):this._equirectShader==null&&(this._equirectShader=Bx());let i=e.isCubeTexture?this._cubemapShader:this._equirectShader,r=new Et(eh[0],i),a=i.uniforms;a.envMap.value=e,e.isCubeTexture||a.texelSize.value.set(1/e.image.width,1/e.image.height),a.inputEncoding.value=qr[e.encoding],a.outputEncoding.value=qr[t.texture.encoding],qd(t,0,0,3*Wr,2*Wr),n.setRenderTarget(t),n.render(r,t0)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<Ob;i++){let r=Math.sqrt(Wd[i]*Wd[i]-Wd[i-1]*Wd[i-1]),a=Nx[(i-1)%Nx.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,l){let h=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let p=3,u=new Et(eh[i],c),f=c.uniforms,g=kx[n]-1,v=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Sl-1),M=r/v,S=isFinite(r)?1+Math.floor(p*M):Sl;S>Sl&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Sl}`);let b=[],x=0;for(let C=0;C<Sl;++C){let W=C/M,q=Math.exp(-W*W/2);b.push(q),C==0?x+=q:C<S&&(x+=2*q)}for(let C=0;C<b.length;C++)b[C]=b[C]/x;f.envMap.value=e.texture,f.samples.value=S,f.weights.value=b,f.latitudinal.value=a==="latitudinal",l&&(f.poleAxis.value=l),f.dTheta.value=v,f.mipInt.value=pa-n,f.inputEncoding.value=qr[e.texture.encoding],f.outputEncoding.value=qr[e.texture.encoding];let A=kx[i],F=3*Math.max(0,Wr-2*A),z=(i===0?0:2*Wr)+2*A*(i>pa-Pl?i-pa+Pl:0);qd(t,F,z,3*A,2*A),h.setRenderTarget(t),h.render(u,t0)}};function pR(s){return s===void 0||s.type!==Ta?!1:s.encoding===wi||s.encoding===Aa||s.encoding===jf}function mR(){let s=[],e=[],t=[],n=pa;for(let i=0;i<Ob;i++){let r=Math.pow(2,n);e.push(r);let a=1/r;i>pa-Pl?a=Hb[i-pa+Pl-1]:i==0&&(a=0),t.push(a);let l=1/(r-1),h=-l/2,c=1+l/2,p=[h,h,c,h,c,c,h,h,c,c,h,c],u=6,f=6,g=3,v=2,M=1,S=new Float32Array(g*f*u),b=new Float32Array(v*f*u),x=new Float32Array(M*f*u);for(let F=0;F<u;F++){let z=F%3*2/3-1,C=F>2?0:-1,W=[z,C,0,z+2/3,C,0,z+2/3,C+1,0,z,C,0,z+2/3,C+1,0,z,C+1,0];S.set(W,g*f*F),b.set(p,v*f*F);let q=[F,F,F,F,F,F];x.set(q,M*f*F)}let A=new Qe;A.setAttribute("position",new Xe(S,g)),A.setAttribute("uv",new Xe(b,v)),A.setAttribute("faceIndex",new Xe(x,M)),s.push(A),n>Pl&&n--}return{_lodPlanes:s,_sizeLods:e,_sigmas:t}}function Ox(s){let e=new Ln(3*Wr,3*Wr,s);return e.texture.mapping=$l,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function qd(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function gR(s){let e=new Float32Array(s),t=new L(0,1,0);return new wa({name:"SphericalGaussianBlur",defines:{n:s},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:qr[wi]},outputEncoding:{value:qr[wi]}},vertexShader:hg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${ug()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Ls,depthTest:!1,depthWrite:!1})}function Bx(){let s=new _e(1,1);return new wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:s},inputEncoding:{value:qr[wi]},outputEncoding:{value:qr[wi]}},vertexShader:hg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${ug()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Ls,depthTest:!1,depthWrite:!1})}function zx(){return new wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:qr[wi]},outputEncoding:{value:qr[wi]}},vertexShader:hg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${ug()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Ls,depthTest:!1,depthWrite:!1})}function hg(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ug(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}var vR=0,yR=1,xR=0,wR=1,bR=2;function _R(s){return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),s}function MR(s=[]){return console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),s.isMultiMaterial=!0,s.materials=s,s.clone=function(){return s.slice()},s}function ER(s,e){return console.warn("THREE.PointCloud has been renamed to THREE.Points."),new Ci(s,e)}function SR(s){return console.warn("THREE.Particle has been renamed to THREE.Sprite."),new rr(s)}function TR(s,e){return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new Ci(s,e)}function AR(s){return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new Fs(s)}function RR(s){return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new Fs(s)}function LR(s){return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new Fs(s)}function CR(s,e,t){return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new L(s,e,t)}function PR(s,e){return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."),new Xe(s,e).setUsage(Li)}function DR(s,e){return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),new ef(s,e)}function IR(s,e){return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),new tf(s,e)}function kR(s,e){return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new nf(s,e)}function FR(s,e){return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),new rf(s,e)}function NR(s,e){return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),new kl(s,e)}function HR(s,e){return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),new sf(s,e)}function OR(s,e){return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),new Fl(s,e)}function BR(s,e){return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),new tt(s,e)}function zR(s,e){return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),new of(s,e)}Mi.create=function(s,e){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(Mi.prototype),s.prototype.constructor=s,s.prototype.getPoint=e,s};So.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)};function UR(s){return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),new Wf(s)}function GR(s,e){return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),new Vf(s,e)}function VR(s,e){return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),new jn(new Mh(s.geometry),new un({color:e!==void 0?e:16777215}))}Gf.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Uf.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};function WR(s,e){return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),new jn(new Ih(s.geometry),new un({color:e!==void 0?e:16777215}))}ni.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Qh.extractUrlBase(s)};ni.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};function qR(s){return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),new or(s)}function XR(s){return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),new vf(s)}Ea.prototype.center=function(s){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(s)};Ea.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ea.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Ea.prototype.size=function(s){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(s)};fi.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)};fi.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};fi.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};fi.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};fi.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)};nr.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ds.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)};Bf.prototype.center=function(s){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(s)};Nn.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};Nn.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};Nn.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};Nn.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};Nn.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};Nn.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};nt.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)};nt.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};nt.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new L().setFromMatrixColumn(this,3)};nt.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)};nt.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};nt.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};nt.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};nt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};nt.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)};nt.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};nt.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};nt.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};nt.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};nt.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};nt.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};nt.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};nt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};nt.prototype.makeFrustum=function(s,e,t,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,e,n,t,i,r)};nt.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};Gi.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)};mn.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)};mn.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Zr.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Zr.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)};Zr.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};li.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};li.prototype.barycoordFromPoint=function(s,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,e)};li.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)};li.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)};li.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)};li.barycoordFromPoint=function(s,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),li.getBarycoord(s,e,t,n,i)};li.normal=function(s,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),li.getNormal(s,e,t,n)};Yr.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)};Yr.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Kr(this,s)};Yr.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Wl(this,s)};_e.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};_e.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};_e.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};L.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};L.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};L.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)};L.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)};L.prototype.getColumnFromMatrix=function(s,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,s)};L.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)};L.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};L.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};L.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Pt.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};Pt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};zt.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)};zt.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};zt.prototype.translate=function(s,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,s)};zt.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};zt.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(zt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Et.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Et.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),cb},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Ul.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};An.prototype.setLens=function(s,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(s)};Object.defineProperties(qi.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}});Object.defineProperties(Xe.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Li},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Li)}}});Xe.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Li:Il),this};Xe.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Xe.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Qe.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)};Qe.prototype.addAttribute=function(s,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new Xe(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(s,e)};Qe.prototype.addDrawCall=function(s,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,e)};Qe.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Qe.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Qe.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)};Qe.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Qe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});ks.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Li:Il),this};ks.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Kr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Kr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Kr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Is.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Nf.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this};Object.defineProperties(Un.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Pe}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===$0}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}}});Object.defineProperties(gn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}});Qt.prototype.clearTarget=function(s,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(e,t,n)};Qt.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)};Qt.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Qt.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Qt.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Qt.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Qt.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Qt.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Qt.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Qt.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Qt.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Qt.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Qt.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Qt.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Qt.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)};Qt.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Qt.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Qt.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Qt.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Qt.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Qt.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Qt.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Qt.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Qt.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Qt.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Qt.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?Aa:wi}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Rb.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});function YR(s,e,t){return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."),new Ol(s,t)}Object.defineProperties(Ln.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}});tu.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let e=this;return new Rf().load(s,function(n){e.setBuffer(n)}),this};Df.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Hl.prototype.updateCubeMap=function(s,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,e)};Hl.prototype.clear=function(s,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,e,t,n)};Cs.crossOrigin=void 0;Cs.loadTexture=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let i=new yf;i.setCrossOrigin(this.crossOrigin);let r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};Cs.loadTextureCube=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let i=new gf;i.setCrossOrigin(this.crossOrigin);let r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};Cs.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Cs.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};function jR(){console.error("THREE.CanvasRenderer has been removed")}function ZR(){console.error("THREE.JSONLoader has been removed.")}var JR={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")}};function KR(){console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js")}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:J0}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=J0);var Bb=`<canvas id="gl"></canvas>

<div id="hud">

  <!-- the scale bar, sized by writeHUD to a round number of units -->
  <div id="sbar"><i></i><span id="sbar-t">\u2014</span></div>

  <div class="pane glass" id="idp">
    <div class="ttl"><b>VAULT ORRERY</b><span id="mode">MOUSE</span></div>
    <div class="bd">
      <div class="big" id="vault-name">EMPTY SPACE</div>
      <div class="sub">KNOWLEDGE COSMOS \xB7 V2</div>
      <div class="row"><span>NODES</span><span id="s-nodes">0</span></div>
      <div class="row"><span>EDGES</span><span id="s-edges">0</span></div>
      <div class="row"><span>SYSTEMS</span><span id="s-sys">0</span></div>
      <!-- Collected since the host metadata went in and never shown until now.
           Clickable, because a count of dead links is a job rather than a
           statistic: it filters the cosmos down to the notes carrying them. -->
      <div class="row brk" id="r-broken" title=""><span data-i18n="hud.broken">\uB04A\uC5B4\uC9C4 \uB9C1\uD06C</span><span id="s-broken">0</span></div>
      <div class="row"><span>SPAN</span><span id="s-span">\u2014</span></div>
      <!-- which link types are drawn, cycled with L. It used to sit in the
           gesture panel, which is gone; it is vault state, not hand state. -->
      <div class="row"><span>LINK LAYER</span><span id="g-layer">ALL</span></div>
      <!-- the three link types now differ in stroke as well as in colour, and
           a convention nobody is told is not a convention. Tinted to the
           EDGE_TINT entries they stand for, so the key and the cosmos cannot
           drift apart without it being visible here. -->
      <div class="row lk">
        <span style="color:#53d8ff">\u2501\u2501 WIKI</span>
        <span style="color:#ff9d3c">\u2501 \u2501 SRC</span>
      </div>
      <div class="row"><span>RANGE</span><span id="s-dist">\u2014</span></div>
      <!-- what one pixel is worth at the range the camera is focused on; the
           bar at the bottom of the frame is the same number drawn -->
      <div class="row"><span>SCALE</span><span id="s-scale">\u2014</span></div>
      <div class="row"><span>FPS</span><span id="s-fps" title="click for frame budget">\u2014</span></div>
      <div class="bar"><i style="width:100%"></i></div>
      <!-- opened by clicking FPS; see the PERF block for what fills it -->
      <div id="perf">
        <div class="hd">FRAME BUDGET \xB7 MS</div>
        <div class="row"><span>SIM</span><span id="p-sim">\u2014</span></div>
        <div class="row"><span>PICK</span><span id="p-pick">\u2014</span></div>
        <div class="row"><span>BODIES</span><span id="p-inst">\u2014</span></div>
        <div class="row"><span>LINKS</span><span id="p-link">\u2014</span></div>
        <div class="row"><span>TRAILS</span><span id="p-trlms">\u2014</span></div>
        <div class="row"><span>SPRITES</span><span id="p-spr">\u2014</span></div>
        <div class="row"><span>SUBMIT</span><span id="p-draw">\u2014</span></div>
        <div class="row"><span>CPU TOTAL</span><span id="p-tot">\u2014</span></div>
        <div class="hd" style="margin-top:5px">GEOMETRY</div>
        <div class="row"><span>LINK PTS</span><span id="p-lv">\u2014</span></div>
        <div class="row"><span>OFF SCREEN</span><span id="p-cull">\u2014</span></div>
        <div class="row"><span>TRAILS</span><span id="p-trl">\u2014</span></div>
        <div class="row"><span>DRAW CALLS</span><span id="p-dc">\u2014</span></div>
      </div>
    </div>
  </div>

  <div class="pane glass foldable" id="leg">
    <div class="ttl"><b>STAR SYSTEMS</b>
      <span class="tr"><i id="l-cnt">0</i><i class="fx" id="legfold">[ \u2212 ]</i></span>
    </div>
    <div class="bd" id="legbody"></div>
  </div>

  <div class="pane glass" id="ctl">
    <div class="ttl" id="ctltl"><b>ORRERY CONTROL</b><span id="ctlfold">[ \u2212 ]</span></div>
    <div class="bd">
      <!-- Both shelves are filled by the CONTROL DECK block from the KNOBS
           table, not written out here. Thirty-odd sliders spelt in markup is
           thirty chances for an id to disagree with the code that reads it,
           and \u2014 the reason it changed \u2014 which shelf a knob sits on is the
           reader's to decide and cannot be a fact about the document. -->
      <div id="ctlknobs">
        <div id="ctlgrid"></div>
        <div id="advtog">\u25B8 ADVANCED</div>
        <div id="ctladv"></div>
      </div>
      <div class="sep"></div>
      <div class="vs">
        <div class="langsel" id="langsel">
          <u data-l="ko">\uD55C</u><u data-l="en">EN</u><u data-l="ja">\u65E5</u><u data-l="zh">\u4E2D</u>
        </div>
        <div class="mini" id="b-load" data-i18n="btn.load">\u25A3 \uBCFC\uD2B8 \uD3F4\uB354 \uC5F4\uAE30</div>
        <div class="mini am" id="b-clear" style="display:none" data-i18n="btn.clear">\u2715 \uBCFC\uD2B8 \uBE44\uC6B0\uAE30</div>
        <div class="mini" id="b-gen" data-i18n="btn.gen" data-i18n-title="btn.gen.t">\u25CC \uD56D\uC131\uACC4 \uC0DD\uC131</div>
        <div class="mini" id="b-post" data-i18n="btn.post" data-i18n-title="btn.post.t">\u2913 \uD3EC\uC2A4\uD130</div>
        <div class="mini" id="b-snd" data-i18n="btn.snd" data-i18n-title="btn.snd.t">\u266A \uC0AC\uC6B4\uB4DC</div>
        <div class="mini" id="b-rst" data-i18n="btn.rst">\u21BA \uC124\uC815 \uCD08\uAE30\uD654</div>
      </div>
    </div>
  </div>

  <div class="pane glass foldable" id="keys">
    <div class="ttl"><b>SHORTCUTS</b>
      <span class="tr"><i class="fx" id="keyshelp" data-i18n-title="guide.open">[ ? ]</i><i class="fx" id="keysfold">[ \u2212 ]</i></span>
    </div>
    <div class="bd" style="padding:7px 10px">
      <div class="row" id="k-open" style="display:none"><span>OPEN NOTE</span><span>O \xB7 CTRL-CLICK</span></div>
      <div class="row"><span>COMMAND</span><span>/ \xB7 CTRL-K</span></div>
      <div class="row"><span>MIND MAP</span><span>M \xB7 DBL-CLICK</span></div>
      <div class="row"><span>GENESIS</span><span>G</span></div>
      <div class="row"><span>RIPPLE \xB7 POSTER</span><span>SPACE \xB7 P</span></div>
      <div class="row"><span>LINK LAYER</span><span>L</span></div>
      <div class="row"><span>REFERENCE PLANE</span><span>X</span></div>
      <div class="row"><span>RESET \xB7 HIDE HUD</span><span>R \xB7 H</span></div>
      <div class="row"><span>GUIDE</span><span>?</span></div>
      <div class="row"><span>DRAG / WHEEL</span><span>ORBIT \xB7 ZOOM</span></div>
      <div class="row"><span>RIGHT-DRAG</span><span>PAN</span></div>
      <div class="row"><span>SHIFT+DRAG</span><span>MOVE NODE</span></div>
    </div>
  </div>

  <div class="pane glass" id="insp">
    <div class="ttl"><b>NODE INSPECTOR</b><span id="i-kind">\u2014</span></div>
    <div class="bd">
      <div id="i-empty" data-i18n="insp.empty">\uB300\uC0C1\uC744 \uC9C0\uC815\uD558\uC2ED\uC2DC\uC624<br><span style="opacity:.6">\uB178\uB4DC\uB97C \uD074\uB9AD</span></div>
      <div id="i-real" style="display:none">
        <div id="i-name"></div>
        <div id="i-path"></div>
        <div class="cbox">
          <div><u id="c-pl">0</u><s data-i18n="cnt.links">\uC5F0\uACB0 \uD589\uC131</s></div>
          <div><u id="c-mo">0</u><s data-i18n="cnt.moons">\uC9C1\uC18D \uC704\uC131</s></div>
          <div><u id="c-mo2">0</u><s data-i18n="cnt.far">\uC5F0\uACB0 \uC704\uC131</s></div>
        </div>
        <!-- the orbit this body is actually on \u2014 see orbitReadout() -->
        <div class="cbox orb">
          <div><u id="o-a">\u2014</u><s data-i18n="orb.a">\uC7A5\uBC18\uACBD</s></div>
          <div><u id="o-e">\u2014</u><s data-i18n="orb.e">\uC774\uC2EC\uB960</s></div>
          <div><u id="o-p">\u2014</u><s data-i18n="orb.p">\uACF5\uC804 \uC8FC\uAE30</s></div>
          <div><u id="o-i">\u2014</u><s data-i18n="orb.i">\uADA4\uB3C4 \uACBD\uC0AC</s></div>
        </div>
        <!-- the note's own front-matter properties; see propsOf -->
        <div id="i-props"></div>
        <div id="i-tags"></div>
        <div id="i-x"></div>
        <div id="i-links"></div>
        <div class="mini host vio" id="i-open" style="margin-top:10px;display:none" data-i18n="insp.open">\u2197 \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30 [O]</div>
        <div class="mini am" id="i-go" style="margin-top:10px" data-i18n="insp.go">\u25CE \uC774\uB3D9\uD558\uAE30</div>
        <div class="mini" id="i-mm" data-i18n="insp.mm">\u25C8 \uB9C8\uC778\uB4DC\uB9F5 \uC5F4\uAE30 [M]</div>
        <div class="mini" id="i-ripple" data-i18n="insp.ripple">\u25C9 \uC5EC\uAE30\uC11C \uD30C\uBB38 \uC77C\uC73C\uD0A4\uAE30 [SPACE]</div>
        <div class="mini" id="i-route" data-i18n="insp.route">\u25C7 \uC5EC\uAE30\uC11C \uACBD\uB85C \uCC3E\uAE30</div>
        <div class="mini" id="i-core" data-i18n="insp.core">\u2605 \uC774 \uB178\uD2B8\uB97C \uC911\uC2EC \uD56D\uC131\uC73C\uB85C</div>
      </div>
    </div>
  </div>

  <div class="pane glass" id="gen">
    <div class="ttl"><b data-i18n="gen.ttl">GENESIS \xB7 \uD56D\uC131\uACC4 \uC0DD\uC131</b><span id="gen-date">\u2014</span><span class="fx" id="gen-x" data-i18n-title="gen.close.t">[ \u2715 ]</span></div>
    <div class="bd">
      <div id="genstage"><u id="gen-ph">VOID</u><s id="gen-desc" data-i18n="gen.p0">\uC544\uC9C1 \uC544\uBB34\uAC83\uB3C4 \uC5C6\uC2B5\uB2C8\uB2E4</s></div>
      <div id="genrow">
        <u id="gen-play" data-i18n-title="gen.play.t">\u25B6</u>
        <u id="gen-rst" data-i18n-title="gen.rst.t">\u21BA</u>
        <input type="range" id="gen-r" min="0" max="1000" step="1" value="0">
        <u id="gen-spd" data-i18n-title="gen.spd.t">1\xD7</u>
        <s id="gen-cnt">0</s>
      </div>
      <div id="genmarks"></div>
    </div>
  </div>

</div>


<div id="tgt"></div>

<div class="glass" id="srch">
  <input id="sin" data-i18n-ph="search.ph" placeholder="\uB178\uD2B8 \uAC80\uC0C9 \u2026" autocomplete="off" spellcheck="false">
  <div id="sres"></div>
</div>

<div id="mind">
  <div class="glass" id="mindbox">
    <div class="ttl">
      <b style="flex:0 0 auto">MIND MAP</b>
      <div id="mmnav">
        <div id="mmback" data-i18n="mm.back">\u2190 \uB4A4\uB85C</div>
        <div id="mmcrumbs"></div>
      </div>
      <s id="mm-close" data-i18n="mm.close">\uB2EB\uAE30 [ ESC ]</s>
    </div>
    <div id="mindbody">
      <div id="mmside">
        <div class="mmsec">
          <div id="mm-kind">\u2014</div>
          <div id="mm-name"></div>
          <div id="mm-path"></div>
        </div>
        <div class="mmsec">
          <h4 data-i18n="mm.sec.conn">\uC5F0\uACB0</h4>
          <div class="cbox" style="margin-bottom:0">
            <div><u id="m-pl">0</u><s data-i18n="cnt.links">\uC5F0\uACB0 \uD589\uC131</s></div>
            <div><u id="m-mo">0</u><s data-i18n="cnt.moons">\uC9C1\uC18D \uC704\uC131</s></div>
            <div><u id="m-mo2">0</u><s data-i18n="cnt.far">\uC5F0\uACB0 \uC704\uC131</s></div>
          </div>
        </div>
        <div class="mmsec" id="mm-tagsec">
          <h4 data-i18n="mm.sec.tags">\uD0DC\uADF8</h4>
          <div id="mm-tags" style="display:flex;flex-wrap:wrap;gap:4px"></div>
        </div>
        <div class="mmsec">
          <h4 data-i18n="mm.sec.excerpt">\uBC1C\uCDCC</h4>
          <div id="mm-x"></div>
        </div>
        <div class="mmsec">
          <h4 data-i18n="mm.sec.links">\uB9C1\uD06C</h4>
          <div id="mm-links"></div>
        </div>
        <div class="mmsec act">
          <div class="mini host vio" id="mm-open" style="display:none" data-i18n="mm.open">\u2197 \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30</div>
          <div class="mini am" id="mm-go" data-i18n="mm.go">\u25CE \uC774 \uB178\uB4DC\uB85C \uC774\uB3D9</div>
          <div class="mini" id="mm-center" data-i18n="mm.center">\u25C8 \uC774 \uB178\uB4DC\uB97C \uC911\uC2EC\uC73C\uB85C</div>
        </div>
      </div>
    </div>
    <div id="mmfoot">
      <div id="mmview">
        <u id="mm-hop" data-i18n="mm.hop" data-i18n-title="mm.hop.t">\u25CC 2\uD649</u>
        <i id="mmkeys" data-i18n="mm.keys"></i>
      </div>
      <div id="mmlegend">
        <b><u style="background:#5cd8ff"></u><i data-i18n="leg.wiki" style="font-style:normal">\uC704\uD0A4\uB9C1\uD06C</i></b>
        <b><u style="background:repeating-linear-gradient(90deg,#ff9d3c 0 4px,transparent 4px 7px)"></u><i data-i18n="leg.src" style="font-style:normal">\uCD9C\uCC98</i></b>
        <b id="mmleg2" style="display:none"><u style="background:rgba(150,210,255,.4)"></u><i data-i18n="mm.hop2" style="font-style:normal">2\uD649</i></b>
      </div>
      <div id="mmhint" data-i18n="mm.hint">\uD074\uB9AD = \uC120\uD0DD \xB7 \uB354\uBE14\uD074\uB9AD = \uC911\uC2EC \uC774\uB3D9<br>\uB04C\uAE30 = \uC2DC\uC810 \uD68C\uC804 \xB7 \uD720 = \uD655\uB300</div>
    </div>
  </div>
</div>

<div id="hint">
  <u>EMPTY SPACE</u>
  <b data-i18n="hint.body">\uC544\uC9C1 \uBCFC\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD3F4\uB354\uB97C \uC774 \uCC3D\uC5D0 \uB04C\uC5B4\uB2E4 \uB193\uAC70\uB098 \uC544\uB798 \uBC84\uD2BC\uC744 \uB204\uB974\uC138\uC694.</b>
  <em id="hint-btn" data-i18n="btn.load">\u25A3 \uBCFC\uD2B8 \uD3F4\uB354 \uC5F4\uAE30</em>
</div>

<div id="intro">
  <div class="glass" id="introcard">
    <!-- The title stays English with every other pane's: it is what this card
         is identified by, and see the I18N block on why chrome does not move. -->
    <div class="ttl"><b>FIRST FLIGHT</b><span class="fx" id="introx">[ \u2715 ]</span></div>
    <div class="bd">
      <p id="introlede" data-i18n="intro.lede">\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131\uC785\uB2C8\uB2E4. \uC544\uB798 \uB137\uC774\uBA74 \uCDA9\uBD84\uD788 \uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>
      <div class="introrow"><u data-i18n="intro.k1">\uB04C\uAE30 \xB7 \uD720</u><b data-i18n="intro.d1">\uB458\uB7EC\uBCF4\uAE30 \u2014 \uADA4\uB3C4 \uD68C\uC804\uACFC \uD655\uB300</b></div>
      <div class="introrow"><u>/</u><b data-i18n="intro.d2">\uB178\uD2B8 \uC774\uB984\uC73C\uB85C \uCC3E\uC544\uAC00\uAE30</b></div>
      <div class="introrow"><u>M</u><b data-i18n="intro.d3">\uB178\uD2B8 \uD558\uB098\uC758 \uC774\uC6C3\uC744 \uB9C8\uC778\uB4DC\uB9F5\uC73C\uB85C \uD3BC\uCE58\uAE30</b></div>
      <div class="introrow" id="introopen"><u>O</u><b data-i18n="intro.d4">\uACE0\uB978 \uB178\uD2B8\uB97C \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30</b></div>
      <p id="introfoot" data-i18n="intro.foot">\uB098\uBA38\uC9C0\uB294 \uC67C\uCABD \uC544\uB798 SHORTCUTS \uBAA9\uB85D\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. [ ? ] \uB97C \uB204\uB974\uBA74 \uC774 \uC548\uB0B4\uAC00 \uB2E4\uC2DC \uC5F4\uB9BD\uB2C8\uB2E4.</p>
      <div class="btn" id="introgo" data-i18n="intro.go">\u25B6 \uB458\uB7EC\uBCF4\uAE30</div>
    </div>
  </div>
</div>

<div id="guide">
  <div class="glass" id="guidecard">
    <!-- Titles stay English with the rest of the HUD chrome; see the I18N
         block on why the panes do not move and the prose does. -->
    <div class="ttl"><b>GUIDE</b><span class="fx" id="guidex">[ \u2715 ]</span></div>
    <div class="bd">
      <p id="guidelede" data-i18n="guide.lede">\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131, \uC778\uC6A9\uB41C \uCD9C\uCC98\uB294 \uC704\uC131\uC785\uB2C8\uB2E4. \uC544\uB798\uB294 \uD654\uBA74\uC774 \uD560 \uC218 \uC788\uB294 \uC77C \uC804\uBD80\uC785\uB2C8\uB2E4.</p>
      <div id="guidebody"></div>
      <p id="guidefoot"></p>
    </div>
  </div>
</div>

<div id="toast"></div>

<input type="file" id="fpick" webkitdirectory directory multiple
       accept=".md,.markdown,.txt" style="display:none">
<input type="file" id="fpick2" webkitdirectory directory multiple
       accept=".md,.markdown,.txt" style="display:none">

<div id="drop"><u>VAULT DROP<b data-i18n="drop.body">\uD3F4\uB354\uB098 \uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC744 \uB193\uC73C\uBA74 \uADF8 \uBCFC\uD2B8\uB85C \uC6B0\uC8FC\uB97C \uB9CC\uB4ED\uB2C8\uB2E4</b></u></div>

<div id="load">
  <div id="loadmsg">READING VAULT</div>
  <div id="loadbar"><i></i></div>
  <div id="loadsub"></div>
</div>

<div id="boot">
  <h1>VAULT ORRERY</h1>
  <h2>KNOWLEDGE COSMOS \xB7 II</h2>
  <div id="blog"></div>
  <div class="langsel" id="blangsel">
    <u data-l="ko">\uD55C\uAD6D\uC5B4</u><u data-l="en">English</u><u data-l="ja">\u65E5\u672C\u8A9E</u><u data-l="zh">\u4E2D\u6587</u>
  </div>
  <div id="bpick" data-i18n="boot.pick">\uBCFC\uD2B8 \uD3F4\uB354\uB97C \uC9C0\uC815\uD558\uBA74 \uADF8 \uADDC\uBAA8\uC5D0 \uB9DE\uB294 \uD589\uC131\uACC4\uAC00 \uB9CC\uB4E4\uC5B4\uC9D1\uB2C8\uB2E4.</div>
  <div id="bbtns">
    <div class="btn" id="b-folder" data-i18n="boot.upload">\u25A3 \uD30C\uC77C \uC5C5\uB85C\uB4DC \uD558\uAE30</div>
    <div class="btn alt" id="b-go" data-i18n="boot.start">\u25B6 \uC2DC\uC791\uD558\uAE30</div>
  </div>
  <div id="bnote" data-i18n="boot.note">
    \uD3F4\uB354\uB97C \uC9C0\uC815\uD558\uC9C0 \uC54A\uACE0 \uC2DC\uC791\uD558\uBA74 \uBE48 \uC6B0\uC8FC\uC5D0\uC11C \uCD9C\uBC1C\uD569\uB2C8\uB2E4 \u2014 \uC5B8\uC81C\uB4E0 \uCC3D\uC5D0 \uB04C\uC5B4\uB2E4 \uB193\uC73C\uBA74 \uB429\uB2C8\uB2E4.
  </div>
</div>

<!-- Loaded from disk, never from a CDN: Obsidian's community plugin policy
     forbids fetching remote code at runtime. See THIRD-PARTY-NOTICES.md for
     what belongs in vendor/. -->`;function zb(s,e){let t=()=>s.clientWidth||1,n=()=>s.clientHeight||1;function i(o){let d=s.getBoundingClientRect();return(o.clientX-d.left)/(d.width||1)*2-1}function r(o){let d=s.getBoundingClientRect();return-((o.clientY-d.top)/(d.height||1))*2+1}let a=[];function l(o,d,m){window.addEventListener(o,d,m),a.push(()=>window.removeEventListener(o,d,m))}function h(o,d,m){document.addEventListener(o,d,m),a.push(()=>document.removeEventListener(o,d,m))}function c(o,d,m){window.removeEventListener(o,d,m)}let p=e&&typeof e.get=="function"?e:(()=>{let o=new Map;return{get:d=>o.has(d)?o.get(d):null,set:(d,m)=>{o.set(d,String(m))}}})(),u=o=>s.querySelector("#"+o),f=Math.PI*2,g=(o,d,m)=>o<d?d:o>m?m:o,v=(o,d,m)=>o+(d-o)*m,M=o=>String(o).replace(/[&<>]/g,d=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[d]),S=["ko","en","ja","zh"],b={"btn.load":["\u25A3 \uBCFC\uD2B8 \uD3F4\uB354 \uC5F4\uAE30","\u25A3 OPEN VAULT","\u25A3 \u30DC\u30EB\u30C8\u3092\u958B\u304F","\u25A3 \u6253\u5F00\u4ED3\u5E93"],"btn.clear":["\u2715 \uBCFC\uD2B8 \uBE44\uC6B0\uAE30","\u2715 CLEAR VAULT","\u2715 \u30DC\u30EB\u30C8\u3092\u7A7A\u306B","\u2715 \u6E05\u7A7A\u4ED3\u5E93"],"btn.gen":["\u25CC \uD56D\uC131\uACC4 \uC0DD\uC131","\u25CC GENESIS","\u25CC \u661F\u7CFB\u751F\u6210","\u25CC \u661F\u7CFB\u751F\u6210"],"btn.gen.t":["\uBB34\uC5D0\uC11C \uD56D\uC131\uACC4\uAE4C\uC9C0 \u2014 \uC9C0\uC2DD\uCCB4\uACC4\uAC00 \uB9CC\uB4E4\uC5B4\uC9C0\uB294 \uACFC\uC815 [G]","From void to star system \u2014 the knowledge base being made [G]","\u7121\u304B\u3089\u661F\u7CFB\u307E\u3067 \u2014 \u77E5\u8B58\u4F53\u7CFB\u304C\u5F62\u3065\u304F\u3089\u308C\u308B\u904E\u7A0B [G]","\u4ECE\u865A\u65E0\u5230\u661F\u7CFB \u2014 \u77E5\u8BC6\u4F53\u7CFB\u7684\u5F62\u6210\u8FC7\u7A0B [G]"],"btn.post":["\u2913 \uD3EC\uC2A4\uD130","\u2913 POSTER","\u2913 \u30DD\u30B9\u30BF\u30FC","\u2913 \u6D77\u62A5"],"btn.post.t":["HUD \uC5C6\uC774 \uACE0\uD574\uC0C1\uB3C4 PNG \uC800\uC7A5 [P]","Save a high-resolution PNG with no HUD [P]","HUD\u306A\u3057\u3067\u9AD8\u89E3\u50CF\u5EA6PNG\u3092\u4FDD\u5B58 [P]","\u4FDD\u5B58\u65E0HUD\u7684\u9AD8\u5206\u8FA8\u7387PNG [P]"],"btn.snd":["\u266A \uC0AC\uC6B4\uB4DC","\u266A SOUND","\u266A \u30B5\u30A6\u30F3\u30C9","\u266A \u58F0\u97F3"],"btn.snd.t":["\uC570\uBE44\uC5B8\uD2B8 \uC0AC\uC6B4\uB4DC \uCF1C\uAE30 / \uB044\uAE30 [U]","Ambient sound on / off [U]","\u30A2\u30F3\u30D3\u30A8\u30F3\u30C8\u30B5\u30A6\u30F3\u30C9 \u30AA\u30F3 / \u30AA\u30D5 [U]","\u73AF\u5883\u97F3\u6548 \u5F00 / \u5173 [U]"],"btn.rst":["\u21BA \uC124\uC815 \uCD08\uAE30\uD654","\u21BA RESET","\u21BA \u8A2D\u5B9A\u30EA\u30BB\u30C3\u30C8","\u21BA \u91CD\u7F6E\u8BBE\u7F6E"],"boot.l1":["\uB80C\uB354 \uD30C\uC774\uD504\uB77C\uC778 \uCD08\uAE30\uD654","render pipeline","\u30EC\u30F3\u30C0\u30FC\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u521D\u671F\u5316","\u6E32\u67D3\u7BA1\u7EBF\u521D\u59CB\u5316"],"boot.l2":["\uC2EC\uC6B0\uC8FC \uBC30\uACBD \uC0DD\uC131","deep-space backdrop","\u6DF1\u5B87\u5B99\u80CC\u666F\u306E\u751F\u6210","\u6DF1\u7A7A\u80CC\u666F\u751F\u6210"],"boot.l3":["\uD56D\uC131\uACC4 \uADA4\uB3C4 \uC5D4\uC9C4 \uB300\uAE30","orbital engine","\u661F\u7CFB\u8ECC\u9053\u30A8\u30F3\u30B8\u30F3\u5F85\u6A5F","\u661F\u7CFB\u8F68\u9053\u5F15\u64CE\u5F85\u673A"],"boot.l4":["\uC870\uBA85 \xB7 \uADF8\uB808\uC774\uB4DC","light and grade","\u7167\u660E \xB7 \u30B0\u30EC\u30FC\u30C9","\u5149\u7167 \xB7 \u8C03\u8272"],"boot.l5":["\uBCFC\uD2B8 \uC778\uB371\uC2A4","vault index","\u30DC\u30EB\u30C8\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9","\u4ED3\u5E93\u7D22\u5F15"],"boot.wait":["\uB300\uAE30 \uC911","WAITING","\u5F85\u6A5F\u4E2D","\u7B49\u5F85\u4E2D"],"boot.pick":["\uBCFC\uD2B8 \uD3F4\uB354\uB97C \uC9C0\uC815\uD558\uBA74 \uADF8 \uADDC\uBAA8\uC5D0 \uB9DE\uB294 \uD589\uC131\uACC4\uAC00 \uB9CC\uB4E4\uC5B4\uC9D1\uB2C8\uB2E4.","Point this at a vault folder and a star system is built to its scale.","\u30DC\u30EB\u30C8\u30D5\u30A9\u30EB\u30C0\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u305D\u306E\u898F\u6A21\u306B\u5408\u3063\u305F\u60D1\u661F\u7CFB\u304C\u4F5C\u3089\u308C\u307E\u3059\u3002","\u6307\u5B9A\u4ED3\u5E93\u6587\u4EF6\u5939\u540E\uFF0C\u4F1A\u751F\u6210\u4E0E\u5176\u89C4\u6A21\u76F8\u79F0\u7684\u884C\u661F\u7CFB\u3002"],"boot.upload":["\u25A3 \uD30C\uC77C \uC5C5\uB85C\uB4DC \uD558\uAE30","\u25A3 UPLOAD FOLDER","\u25A3 \u30D5\u30A9\u30EB\u30C0\u3092\u9078\u629E","\u25A3 \u4E0A\u4F20\u6587\u4EF6\u5939"],"boot.start":["\u25B6 \uC2DC\uC791\uD558\uAE30","\u25B6 START","\u25B6 \u30B9\u30BF\u30FC\u30C8","\u25B6 \u5F00\u59CB"],"boot.note":["\uD3F4\uB354\uB97C \uC9C0\uC815\uD558\uC9C0 \uC54A\uACE0 \uC2DC\uC791\uD558\uBA74 \uBE48 \uC6B0\uC8FC\uC5D0\uC11C \uCD9C\uBC1C\uD569\uB2C8\uB2E4 \u2014 \uC5B8\uC81C\uB4E0 \uCC3D\uC5D0 \uB04C\uC5B4\uB2E4 \uB193\uC73C\uBA74 \uB429\uB2C8\uB2E4.<br>\uC870\uC791\uC740 \uC804\uBD80 \uB9C8\uC6B0\uC2A4\uC640 \uD0A4\uBCF4\uB4DC\uB85C \uAC00\uB2A5\uD569\uB2C8\uB2E4.<br>\uD30C\uC77C\uC740 \uBE0C\uB77C\uC6B0\uC800 \uC548\uC5D0\uC11C\uB9CC \uCC98\uB9AC\uB418\uBA70 \uC5B4\uB514\uC5D0\uB3C4 \uC804\uC1A1\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","Start without a folder and you begin in empty space \u2014 drop one on the window whenever you like.<br>Everything is reachable with the mouse and keyboard.<br>Files are processed inside the browser and are never sent anywhere.","\u30D5\u30A9\u30EB\u30C0\u3092\u6307\u5B9A\u305B\u305A\u306B\u59CB\u3081\u308B\u3068\u3001\u7A7A\u306E\u5B87\u5B99\u304B\u3089\u51FA\u767A\u3057\u307E\u3059 \u2014 \u3044\u3064\u3067\u3082\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u30C9\u30ED\u30C3\u30D7\u3067\u304D\u307E\u3059\u3002<br>\u64CD\u4F5C\u306F\u3059\u3079\u3066\u30DE\u30A6\u30B9\u3068\u30AD\u30FC\u30DC\u30FC\u30C9\u3067\u53EF\u80FD\u3067\u3059\u3002<br>\u30D5\u30A1\u30A4\u30EB\u306F\u30D6\u30E9\u30A6\u30B6\u5185\u3067\u306E\u307F\u51E6\u7406\u3055\u308C\u3001\u3069\u3053\u306B\u3082\u9001\u4FE1\u3055\u308C\u307E\u305B\u3093\u3002","\u4E0D\u6307\u5B9A\u6587\u4EF6\u5939\u76F4\u63A5\u5F00\u59CB\uFF0C\u5C06\u4ECE\u7A7A\u767D\u5B87\u5B99\u51FA\u53D1 \u2014 \u968F\u65F6\u53EF\u4EE5\u628A\u6587\u4EF6\u5939\u62D6\u5230\u7A97\u53E3\u4E0A\u3002<br>\u6240\u6709\u64CD\u4F5C\u90FD\u80FD\u7528\u9F20\u6807\u548C\u952E\u76D8\u5B8C\u6210\u3002<br>\u6587\u4EF6\u4EC5\u5728\u6D4F\u89C8\u5668\u5185\u5904\u7406\uFF0C\u4E0D\u4F1A\u53D1\u9001\u5230\u4EFB\u4F55\u5730\u65B9\u3002"],"boot.staged":["\u2713 {name} \xB7 \uB178\uD2B8 {n}\uAC1C \uC900\uBE44\uB428","\u2713 {name} \xB7 {n} notes ready","\u2713 {name} \xB7 \u30CE\u30FC\u30C8 {n} \u4EF6 \u6E96\u5099\u5B8C\u4E86","\u2713 {name} \xB7 \u5DF2\u51C6\u5907 {n} \u7BC7\u7B14\u8BB0"],"boot.nofold":["\uC120\uD0DD\uB41C \uD3F4\uB354","the selected folder","\u9078\u629E\u3055\u308C\u305F\u30D5\u30A9\u30EB\u30C0","\u6240\u9009\u6587\u4EF6\u5939"],"boot.nomd":["\uADF8 \uD3F4\uB354\uC5D0\uC11C \uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","No markdown files in that folder.","\u305D\u306E\u30D5\u30A9\u30EB\u30C0\u306B\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002","\u5728\u8BE5\u6587\u4EF6\u5939\u4E2D\u672A\u627E\u5230 Markdown \u6587\u4EF6\u3002"],"insp.empty":['\uB300\uC0C1\uC744 \uC9C0\uC815\uD558\uC2ED\uC2DC\uC624<br><span style="opacity:.6">\uB178\uB4DC\uB97C \uD074\uB9AD</span>','Select a target<br><span style="opacity:.6">Click a node</span>','\u5BFE\u8C61\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044<br><span style="opacity:.6">\u30CE\u30FC\u30C9\u3092\u30AF\u30EA\u30C3\u30AF</span>','\u8BF7\u6307\u5B9A\u76EE\u6807<br><span style="opacity:.6">\u70B9\u51FB\u8282\u70B9</span>'],"cnt.links":["\uC5F0\uACB0 \uD589\uC131","LINKED","\u63A5\u7D9A\u60D1\u661F","\u8FDE\u63A5\u884C\u661F"],"cnt.moons":["\uC9C1\uC18D \uC704\uC131","MOONS","\u76F4\u5C5E\u885B\u661F","\u76F4\u5C5E\u536B\u661F"],"cnt.far":["\uC5F0\uACB0 \uC704\uC131","FAR MOONS","\u63A5\u7D9A\u885B\u661F","\u8FDE\u63A5\u536B\u661F"],"insp.go":["\u25CE \uC774\uB3D9\uD558\uAE30","\u25CE TRAVEL","\u25CE \u79FB\u52D5\u3059\u308B","\u25CE \u524D\u5F80"],"insp.mm":["\u25C8 \uB9C8\uC778\uB4DC\uB9F5 \uC5F4\uAE30 [M]","\u25C8 MIND MAP [M]","\u25C8 \u30DE\u30A4\u30F3\u30C9\u30DE\u30C3\u30D7 [M]","\u25C8 \u601D\u7EF4\u5BFC\u56FE [M]"],"insp.core":["\u2605 \uC774 \uB178\uD2B8\uB97C \uC911\uC2EC \uD56D\uC131\uC73C\uB85C","\u2605 MAKE THIS THE CENTRAL STAR","\u2605 \u3053\u306E\u30CE\u30FC\u30C8\u3092\u4E2D\u5FC3\u6052\u661F\u306B","\u2605 \u5C06\u8FD9\u7BC7\u7B14\u8BB0\u8BBE\u4E3A\u4E2D\u5FC3\u6052\u661F"],"insp.core.on":["\u2606 \uC911\uC2EC \uD56D\uC131 \uD574\uC81C (\uC790\uB3D9 \uC120\uD0DD)","\u2606 RELEASE THE CENTRE (AUTO)","\u2606 \u4E2D\u5FC3\u6052\u661F\u3092\u89E3\u9664 (\u81EA\u52D5)","\u2606 \u89E3\u9664\u4E2D\u5FC3\u6052\u661F (\u81EA\u52A8)"],"core.set":["{n} \xB7 \uC774\uC81C \uC774 \uD56D\uC131\uACC4\uC758 \uC911\uC2EC\uC785\uB2C8\uB2E4","{n} is the centre now","{n} \xB7 \u3053\u306E\u661F\u7CFB\u306E\u4E2D\u5FC3\u306B\u306A\u308A\u307E\u3057\u305F","{n} \xB7 \u73B0\u5728\u662F\u8FD9\u4E2A\u661F\u7CFB\u7684\u4E2D\u5FC3"],"core.auto":["\uC911\uC2EC \uD56D\uC131\uC744 \uC790\uB3D9\uC73C\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4","The centre is chosen automatically again","\u4E2D\u5FC3\u6052\u661F\u3092\u81EA\u52D5\u9078\u629E\u306B\u623B\u3057\u307E\u3057\u305F","\u5DF2\u6062\u590D\u81EA\u52A8\u9009\u62E9\u4E2D\u5FC3\u6052\u661F"],"insp.ripple":["\u25C9 \uC5EC\uAE30\uC11C \uD30C\uBB38 \uC77C\uC73C\uD0A4\uAE30 [SPACE]","\u25C9 RIPPLE FROM HERE [SPACE]","\u25C9 \u3053\u3053\u304B\u3089\u6CE2\u7D0B [SPACE]","\u25C9 \u4ECE\u6B64\u5904\u6CDB\u8D77\u6D9F\u6F2A [SPACE]"],"insp.route":["\u25C7 \uC5EC\uAE30\uC11C \uACBD\uB85C \uCC3E\uAE30","\u25C7 ROUTE FROM HERE","\u25C7 \u3053\u3053\u304B\u3089\u7D4C\u8DEF","\u25C7 \u4ECE\u6B64\u5904\u67E5\u627E\u8DEF\u5F84"],"insp.route.p":["\u25C7 \uB2E4\uB978 \uCABD \uB05D\uC744 \uACE0\uB974\uC2ED\uC2DC\uC624","\u25C7 NOW PICK THE OTHER END","\u25C7 \u3082\u3046\u4E00\u65B9\u306E\u7AEF\u3092\u9078\u629E","\u25C7 \u8BF7\u9009\u62E9\u53E6\u4E00\u7AEF"],"insp.route.c":["\u25C7 \uACBD\uB85C \uC9C0\uC6B0\uAE30","\u25C7 CLEAR THE ROUTE","\u25C7 \u7D4C\u8DEF\u3092\u6D88\u3059","\u25C7 \u6E05\u9664\u8DEF\u5F84"],"route.pick":["\uB2E4\uB978 \uCABD \uB05D\uC774 \uB420 \uB178\uD2B8\uB97C \uACE0\uB974\uC2ED\uC2DC\uC624","Pick the note at the other end","\u3082\u3046\u4E00\u65B9\u306E\u7AEF\u306E\u30CE\u30FC\u30C8\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044","\u8BF7\u9009\u62E9\u53E6\u4E00\u7AEF\u7684\u7B14\u8BB0"],"route.hops":["{n}\uD649","{n} hops","{n} \u30DB\u30C3\u30D7","{n} \u8DF3"],"route.none":["\uB450 \uB178\uD2B8\uB294 \uC774\uC5B4\uC838 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4","These two are not connected","\u3053\u306E2\u3064\u306F\u3064\u306A\u304C\u3063\u3066\u3044\u307E\u305B\u3093","\u8FD9\u4E24\u7BC7\u7B14\u8BB0\u6CA1\u6709\u8FDE\u63A5"],"route.clear":["\uACBD\uB85C\uB97C \uC9C0\uC6E0\uC2B5\uB2C8\uB2E4","Route cleared","\u7D4C\u8DEF\u3092\u6D88\u3057\u307E\u3057\u305F","\u5DF2\u6E05\u9664\u8DEF\u5F84"],"insp.nobody":["(\uBCF8\uBB38 \uC5C6\uC74C)","(no body text)","\uFF08\u672C\u6587\u306A\u3057\uFF09","\uFF08\u65E0\u6B63\u6587\uFF09"],"insp.broken":["\uB04A\uC5B4\uC9C4 \uB9C1\uD06C","BROKEN","\u30EA\u30F3\u30AF\u5207\u308C","\u65AD\u5F00\u7684\u94FE\u63A5"],"hud.broken":["\uB04A\uC5B4\uC9C4 \uB9C1\uD06C","BROKEN","\u30EA\u30F3\u30AF\u5207\u308C","\u65AD\u5F00\u7684\u94FE\u63A5"],"hud.off":["HUD \uC228\uAE40 \xB7 H \uB85C \uB2E4\uC2DC \uD45C\uC2DC","HUD hidden \xB7 H brings it back","HUD \u975E\u8868\u793A \xB7 H \u3067\u623B\u308B","HUD \u5DF2\u9690\u85CF \xB7 \u6309 H \u6062\u590D"],"broken.on":["\uB04A\uC5B4\uC9C4 \uB9C1\uD06C\uAC00 \uC788\uB294 \uB178\uD2B8\uB9CC","Only notes with broken links","\u30EA\u30F3\u30AF\u5207\u308C\u306E\u3042\u308B\u30CE\u30FC\u30C8\u306E\u307F","\u4EC5\u663E\u793A\u6709\u65AD\u5F00\u94FE\u63A5\u7684\u7B14\u8BB0"],"broken.off":["\uD544\uD130 \uD574\uC81C","Filter cleared","\u30D5\u30A3\u30EB\u30BF\u30FC\u89E3\u9664","\u5DF2\u6E05\u9664\u7B5B\u9009"],"broken.none":["\uB04A\uC5B4\uC9C4 \uB9C1\uD06C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4","No broken links in this vault","\u30EA\u30F3\u30AF\u5207\u308C\u306F\u3042\u308A\u307E\u305B\u3093","\u6B64\u4ED3\u5E93\u6CA1\u6709\u65AD\u5F00\u7684\u94FE\u63A5"],"orb.a":["\uC7A5\uBC18\uACBD","SEMI-MAJOR","\u8ECC\u9053\u9577\u534A\u5F84","\u534A\u957F\u8F74"],"orb.e":["\uC774\uC2EC\uB960","ECCENTRICITY","\u96E2\u5FC3\u7387","\u504F\u5FC3\u7387"],"orb.p":["\uACF5\uC804 \uC8FC\uAE30","PERIOD","\u516C\u8EE2\u5468\u671F","\u516C\u8F6C\u5468\u671F"],"orb.i":["\uADA4\uB3C4 \uACBD\uC0AC","INCLINATION","\u8ECC\u9053\u50BE\u659C","\u8F68\u9053\u503E\u89D2"],"insp.touched":["\uC218\uC815 {t}","touched {t}","\u66F4\u65B0 {t}","\u4FEE\u6539 {t}"],"ago.today":["\uC624\uB298","today","\u4ECA\u65E5","\u4ECA\u5929"],"ago.d":["{n}\uC77C \uC804","{n}d ago","{n}\u65E5\u524D","{n}\u5929\u524D"],"ago.w":["{n}\uC8FC \uC804","{n}w ago","{n}\u9031\u524D","{n}\u5468\u524D"],"ago.mo":["{n}\uAC1C\uC6D4 \uC804","{n}mo ago","{n}\u304B\u6708\u524D","{n}\u4E2A\u6708\u524D"],"ago.y":["{n}\uB144 \uC804","{n}y ago","{n}\u5E74\u524D","{n}\u5E74\u524D"],"insp.open":["\u2197 \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30 [O]","\u2197 OPEN IN OBSIDIAN [O]","\u2197 Obsidian\u3067\u958B\u304F [O]","\u2197 \u5728 Obsidian \u4E2D\u6253\u5F00 [O]"],"mm.open":["\u2197 \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30","\u2197 OPEN IN OBSIDIAN","\u2197 Obsidian\u3067\u958B\u304F","\u2197 \u5728 Obsidian \u4E2D\u6253\u5F00"],"open.none":["\uBA3C\uC800 \uB178\uD2B8\uB97C \uC120\uD0DD\uD558\uC2ED\uC2DC\uC624","Select a note first","\u5148\u306B\u30CE\u30FC\u30C8\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044","\u8BF7\u5148\u9009\u62E9\u4E00\u7BC7\u7B14\u8BB0"],"open.fail":["\uADF8 \uB178\uD2B8\uB97C \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4","Could not open that note","\u305D\u306E\u30CE\u30FC\u30C8\u3092\u958B\u3051\u307E\u305B\u3093\u3067\u3057\u305F","\u65E0\u6CD5\u6253\u5F00\u8BE5\u7B14\u8BB0"],"sync.done":["\uBCFC\uD2B8 \uAC31\uC2E0 \xB7 \uB178\uD2B8 {n}\uAC1C","Vault updated \xB7 {n} notes","\u30DC\u30EB\u30C8\u66F4\u65B0 \xB7 \u30CE\u30FC\u30C8 {n} \u4EF6","\u4ED3\u5E93\u5DF2\u66F4\u65B0 \xB7 {n} \u7BC7\u7B14\u8BB0"],"ev.nova":["\u2726 {n} \u2014 \uC0AC\uB77C\uC84C\uC2B5\uB2C8\uB2E4","\u2726 {n} \u2014 gone","\u2726 {n} \u2014 \u6D88\u3048\u307E\u3057\u305F","\u2726 {n} \u2014 \u5DF2\u6D88\u5931"],"ev.comet":["\u2604 {n} \uC5D0 \uD61C\uC131\uC774 \uB2FF\uC558\uC2B5\uB2C8\uB2E4","\u2604 comet down on {n}","\u2604 \u5F57\u661F\u304C {n} \u306B\u5230\u9054","\u2604 \u5F57\u661F\u62B5\u8FBE {n}"],"cls.giant":["\uAC00\uC2A4 \uAC70\uC131","GAS GIANT","\u30AC\u30B9\u60D1\u661F","\u6C14\u6001\u5DE8\u884C\u661F"],"cls.terr":["\uC9C0\uAD6C\uD615 \uD589\uC131","TERRESTRIAL","\u5730\u7403\u578B\u60D1\u661F","\u7C7B\u5730\u884C\u661F"],"cls.rock":["\uC554\uC11D \uCC9C\uCCB4","ROCK","\u5CA9\u77F3\u5929\u4F53","\u5CA9\u8D28\u5929\u4F53"],"cls.ringed":["\uACE0\uB9AC","RINGED","\u74B0\u3042\u308A","\u6709\u73AF"],"cls.star":["{s}\uD615 \uBCC4 \xB7 {t} K","{s}-type star \xB7 {t} K","{s}\u578B\u661F \xB7 {t} K","{s}\u578B\u6052\u661F \xB7 {t} K"],"guide.sky":["\uD61C\uC131\uC740 \uBC29\uAE08 \uC190\uB304 \uB178\uD2B8\uC5D0 \uB0B4\uB824\uC549\uACE0, \uCD08\uC2E0\uC131\uC740 \uBCF4\uB294 \uB3D9\uC548 \uC0AD\uC81C\uB41C \uB178\uD2B8\uC785\uB2C8\uB2E4.","A comet lands on the note you just touched; a supernova is a note deleted while you were watching.","\u5F57\u661F\u306F\u4ECA\u89E6\u308C\u305F\u30CE\u30FC\u30C8\u306B\u964D\u308A\u7ACB\u3061\u3001\u8D85\u65B0\u661F\u306F\u898B\u3066\u3044\u308B\u9593\u306B\u524A\u9664\u3055\u308C\u305F\u30CE\u30FC\u30C8\u3067\u3059\u3002","\u5F57\u661F\u964D\u843D\u5728\u4F60\u521A\u89E6\u78B0\u7684\u7B14\u8BB0\u4E0A\uFF0C\u8D85\u65B0\u661F\u662F\u4F60\u89C2\u770B\u65F6\u88AB\u5220\u9664\u7684\u7B14\u8BB0\u3002"],"go.travel":["","\u25CE GO TO {n}","\u25CE {n} \u3078\u79FB\u52D5","\u25CE \u524D\u5F80 {n}"],"gen.close.t":["\uC0DD\uC131 \uC885\uB8CC [G]","Leave Genesis [G]","\u751F\u6210\u3092\u7D42\u4E86 [G]","\u7ED3\u675F\u751F\u6210 [G]"],"gen.ttl":["GENESIS \xB7 \uD56D\uC131\uACC4 \uC0DD\uC131","GENESIS \xB7 STAR SYSTEM","GENESIS \xB7 \u661F\u7CFB\u751F\u6210","GENESIS \xB7 \u661F\u7CFB\u751F\u6210"],"gen.play.t":["\uC7AC\uC0DD / \uC815\uC9C0","Play / pause","\u518D\u751F / \u505C\u6B62","\u64AD\u653E / \u6682\u505C"],"gen.rst.t":["\uCC98\uC74C(\uBB34)\uC73C\uB85C","Back to the void","\u6700\u521D\uFF08\u7121\uFF09\u3078","\u56DE\u5230\u8D77\u70B9\uFF08\u865A\u65E0\uFF09"],"gen.spd.t":["\uC7AC\uC0DD \uC18D\uB3C4","Playback speed","\u518D\u751F\u901F\u5EA6","\u64AD\u653E\u901F\u5EA6"],"gen.p0":["\uBB34 \u2014 \uC544\uC9C1 \uC544\uBB34\uAC83\uB3C4 \uC5C6\uC2B5\uB2C8\uB2E4","Void \u2014 nothing yet","\u7121 \u2014 \u307E\u3060\u4F55\u3082\u3042\u308A\u307E\u305B\u3093","\u865A\u65E0 \u2014 \u5C1A\u4E14\u7A7A\u65E0\u4E00\u7269"],"gen.p1":["\uC810\uD654 \u2014 \uC911\uC2EC \uAC1C\uB150\uC774 \uBD88\uC744 \uCF2D\uB2C8\uB2E4","Ignition \u2014 the central concept lights up","\u70B9\u706B \u2014 \u4E2D\u5FC3\u6982\u5FF5\u304C\u706F\u308A\u307E\u3059","\u70B9\u706B \u2014 \u4E2D\u5FC3\u6982\u5FF5\u4EAE\u8D77"],"gen.p2":["\uC751\uCD95 \u2014 \uD3F4\uB354\uAC00 \uD56D\uC131\uC73C\uB85C \uBB49\uCE69\uB2C8\uB2E4","Condensation \u2014 folders gather into stars","\u51DD\u7E2E \u2014 \u30D5\u30A9\u30EB\u30C0\u304C\u6052\u661F\u306B\u96C6\u307E\u308A\u307E\u3059","\u51DD\u805A \u2014 \u6587\u4EF6\u5939\u805A\u6210\u6052\u661F"],"gen.p3":["\uAC15\uCC29 \u2014 \uB178\uD2B8\uAC00 \uADA4\uB3C4\uB97C \uC7A1\uC2B5\uB2C8\uB2E4","Accretion \u2014 notes settle into orbit","\u964D\u7740 \u2014 \u30CE\u30FC\u30C8\u304C\u8ECC\u9053\u306B\u4E57\u308A\u307E\u3059","\u5438\u79EF \u2014 \u7B14\u8BB0\u8FDB\u5165\u8F68\u9053"],"gen.p4":["\uD3EC\uD68D \u2014 \uC6D0\uBB38\uC774 \uC704\uC131\uC774 \uB429\uB2C8\uB2E4","Capture \u2014 source material becomes moons","\u6355\u7372 \u2014 \u539F\u6587\u304C\u885B\u661F\u306B\u306A\u308A\u307E\u3059","\u6355\u83B7 \u2014 \u539F\u59CB\u6750\u6599\u5316\u4F5C\u536B\u661F"],"gen.p5":["\uC5F0\uACB0 \u2014 \uB9C1\uD06C\uAC00 \uC810\uD654\uD558\uBA70 \uC9C0\uC2DD\uCCB4\uACC4\uAC00 \uB429\uB2C8\uB2E4","Network \u2014 links ignite into a knowledge base","\u63A5\u7D9A \u2014 \u30EA\u30F3\u30AF\u304C\u70B9\u706B\u3057\u77E5\u8B58\u4F53\u7CFB\u306B\u306A\u308A\u307E\u3059","\u8FDE\u63A5 \u2014 \u94FE\u63A5\u70B9\u4EAE\uFF0C\u6210\u4E3A\u77E5\u8BC6\u4F53\u7CFB"],"gen.p6":["\uD604\uC7AC \u2014 \uC9C0\uAE08\uC758 \uD56D\uC131\uACC4","Present \u2014 the system as it stands","\u73FE\u5728 \u2014 \u4ECA\u306E\u661F\u7CFB","\u5F53\u4E0B \u2014 \u6B64\u523B\u7684\u661F\u7CFB"],"gen.play":["\uBB34\uC5D0\uC11C \uD56D\uC131\uACC4\uB85C \u2014 \uD615\uC131 \uC7AC\uC0DD","From void to star system \u2014 replaying the formation","\u7121\u304B\u3089\u661F\u7CFB\u3078 \u2014 \u5F62\u6210\u3092\u518D\u751F","\u4ECE\u865A\u65E0\u5230\u661F\u7CFB \u2014 \u91CD\u653E\u5F62\u6210\u8FC7\u7A0B"],"gen.done":["\uD56D\uC131\uACC4 \uC644\uC131","STAR SYSTEM COMPLETE","\u661F\u7CFB\u5B8C\u6210","\u661F\u7CFB\u5F62\u6210\u5B8C\u6BD5"],"gen.undated":["\uBB34\uC5F0\uB3C4","UNDATED","\u5E74\u4E0D\u660E","\u65E0\u65E5\u671F"],"gen.sys":["\uACC4 {n}","{n} SYS","\u7CFB {n}","\u7CFB {n}"],"mm.back":["\u2190 \uB4A4\uB85C","\u2190 BACK","\u2190 \u623B\u308B","\u2190 \u8FD4\u56DE"],"mm.close":["\uB2EB\uAE30 [ ESC ]","CLOSE [ ESC ]","\u9589\u3058\u308B [ ESC ]","\u5173\u95ED [ ESC ]"],"mm.hop":["\u25CC 2\uD649","\u25CC 2 HOPS","\u25CC 2\u30DB\u30C3\u30D7","\u25CC 2\u8DF3"],"mm.keys":["\u2190 \u2192 \uC774\uC6C3 \xB7 ENTER \uC911\uC2EC\uC73C\uB85C \xB7 \u232B \uB4A4\uB85C \xB7 2 \uB450 \uD649 \xB7 F \uD654\uBA74 \uB9DE\uCDA4 \xB7 G \uC774\uB3D9 \xB7 ESC \uB2EB\uAE30","\u2190 \u2192 STEP \xB7 ENTER CENTRE \xB7 \u232B BACK \xB7 2 HOPS \xB7 F FRAME \xB7 G GO TO \xB7 ESC CLOSE","\u2190 \u2192 \u96A3\u3078 \xB7 ENTER \u4E2D\u5FC3\u306B \xB7 \u232B \u623B\u308B \xB7 2 \u30DB\u30C3\u30D7 \xB7 F \u5168\u4F53 \xB7 G \u79FB\u52D5 \xB7 ESC \u9589\u3058\u308B","\u2190 \u2192 \u90BB\u5C45 \xB7 ENTER \u5C45\u4E2D \xB7 \u232B \u8FD4\u56DE \xB7 2 \u4E24\u8DF3 \xB7 F \u9002\u914D \xB7 G \u524D\u5F80 \xB7 ESC \u5173\u95ED"],"mm.hop2":["2\uD649","2 HOPS","2\u30DB\u30C3\u30D7","2\u8DF3"],"mm.hop.t":["\uC774\uC6C3\uC758 \uC774\uC6C3\uAE4C\uC9C0 \uD55C \uACB9 \uB354 [2]","One more ring \u2014 neighbours of neighbours [2]","\u96A3\u306E\u96A3\u307E\u3067\u3082\u3046\u4E00\u5C64 [2]","\u518D\u52A0\u4E00\u5C42 \u2014 \u90BB\u5C45\u7684\u90BB\u5C45 [2]"],"leg.wiki":["\uC704\uD0A4\uB9C1\uD06C","WIKILINK","\u30A6\u30A3\u30AD\u30EA\u30F3\u30AF","\u7EF4\u57FA\u94FE\u63A5"],"leg.src":["\uCD9C\uCC98","SOURCE","\u51FA\u5178","\u6765\u6E90"],"mm.hint":["\uD074\uB9AD = \uC120\uD0DD \xB7 \uB354\uBE14\uD074\uB9AD = \uC911\uC2EC \uC774\uB3D9<br>\uB04C\uAE30 = \uC2DC\uC810 \uD68C\uC804 \xB7 \uD720 = \uD655\uB300","CLICK = SELECT \xB7 DOUBLE-CLICK = RECENTRE<br>DRAG = ORBIT THE VIEW \xB7 WHEEL = ZOOM","\u30AF\u30EA\u30C3\u30AF = \u9078\u629E \xB7 \u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF = \u4E2D\u5FC3\u79FB\u52D5<br>\u30C9\u30E9\u30C3\u30B0 = \u8996\u70B9\u56DE\u8EE2 \xB7 \u30DB\u30A4\u30FC\u30EB = \u62E1\u5927","\u5355\u51FB = \u9009\u62E9 \xB7 \u53CC\u51FB = \u79FB\u52A8\u4E2D\u5FC3<br>\u62D6\u52A8 = \u65CB\u8F6C\u89C6\u89D2 \xB7 \u6EDA\u8F6E = \u7F29\u653E"],"mm.trunc":["\uC5F0\uACB0 {t}\uAC1C \uC911 \uC0C1\uC704 {n}\uAC1C","TOP {n} OF {t} LINKS","\u63A5\u7D9A {t} \u4EF6\u4E2D \u4E0A\u4F4D {n} \u4EF6","{t} \u6761\u8FDE\u63A5\u4E2D\u7684\u524D {n} \u6761"],"mm.trunc2":["2\uD649 {t}\uAC1C \uC911 \uC0C1\uC704 {n}\uAC1C","TOP {n} OF {t} SECOND-HOP","2\u30DB\u30C3\u30D7 {t} \u4EF6\u4E2D \u4E0A\u4F4D {n} \u4EF6","{t} \u4E2A\u4E8C\u8DF3\u4E2D\u7684\u524D {n} \u4E2A"],"mm.hintfull":["\uD074\uB9AD = \uC120\uD0DD \xB7 \uB354\uBE14\uD074\uB9AD = \uC911\uC2EC \uC774\uB3D9 \xB7 \uB04C\uAE30 = \uC2DC\uC810 \uD68C\uC804<br><b>\u2190 \u2192</b> \uC120\uD0DD \xB7 <b>ENTER</b> \uC911\uC2EC \xB7 <b>F</b> \uB9DE\uCDA4 \xB7 <b>2</b> 2\uD649","CLICK = SELECT \xB7 DOUBLE-CLICK = RECENTRE \xB7 DRAG = ORBIT<br><b>\u2190 \u2192</b> SELECT \xB7 <b>ENTER</b> CENTRE \xB7 <b>F</b> FIT \xB7 <b>2</b> 2 HOPS","\u30AF\u30EA\u30C3\u30AF = \u9078\u629E \xB7 \u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF = \u4E2D\u5FC3\u79FB\u52D5 \xB7 \u30C9\u30E9\u30C3\u30B0 = \u8996\u70B9\u56DE\u8EE2<br><b>\u2190 \u2192</b> \u9078\u629E \xB7 <b>ENTER</b> \u4E2D\u5FC3 \xB7 <b>F</b> \u30D5\u30A3\u30C3\u30C8 \xB7 <b>2</b> 2\u30DB\u30C3\u30D7","\u5355\u51FB = \u9009\u62E9 \xB7 \u53CC\u51FB = \u79FB\u52A8\u4E2D\u5FC3 \xB7 \u62D6\u52A8 = \u65CB\u8F6C\u89C6\u89D2<br><b>\u2190 \u2192</b> \u9009\u62E9 \xB7 <b>ENTER</b> \u5C45\u4E2D \xB7 <b>F</b> \u9002\u5E94 \xB7 <b>2</b> \u4E8C\u8DF3"],"mm.hintopen":["<b>CTRL+ENTER</b> \uB178\uD2B8 \uC5F4\uAE30","<b>CTRL+ENTER</b> OPEN NOTE","<b>CTRL+ENTER</b> \u30CE\u30FC\u30C8\u3092\u958B\u304F","<b>CTRL+ENTER</b> \u6253\u5F00\u7B14\u8BB0"],"mm.sec.conn":["\uC5F0\uACB0","CONNECTIONS","\u63A5\u7D9A","\u8FDE\u63A5"],"mm.sec.tags":["\uD0DC\uADF8","TAGS","\u30BF\u30B0","\u6807\u7B7E"],"mm.sec.excerpt":["\uBC1C\uCDCC","EXCERPT","\u629C\u7C8B","\u6458\u5F55"],"mm.sec.links":["\uB9C1\uD06C","LINKS","\u30EA\u30F3\u30AF","\u94FE\u63A5"],"mm.go":["\u25CE \uC774 \uB178\uB4DC\uB85C \uC774\uB3D9","\u25CE GO TO THIS NODE","\u25CE \u3053\u306E\u30CE\u30FC\u30C9\u3078\u79FB\u52D5","\u25CE \u524D\u5F80\u6B64\u8282\u70B9"],"mm.center":["\u25C8 \uC774 \uB178\uB4DC\uB97C \uC911\uC2EC\uC73C\uB85C","\u25C8 CENTRE ON THIS NODE","\u25C8 \u3053\u306E\u30CE\u30FC\u30C9\u3092\u4E2D\u5FC3\u306B","\u25C8 \u4EE5\u6B64\u8282\u70B9\u4E3A\u4E2D\u5FC3"],"mm.isroot":["\uC911\uC2EC","CENTRE","\u4E2D\u5FC3","\u4E2D\u5FC3"],"mm.nobody":["\uBCF8\uBB38\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.","No body text.","\u672C\u6587\u304C\u3042\u308A\u307E\u305B\u3093\u3002","\u6CA1\u6709\u6B63\u6587\u3002"],"hint.body":["\uC544\uC9C1 \uBCFC\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD3F4\uB354\uB97C \uC774 \uCC3D\uC5D0 \uB04C\uC5B4\uB2E4 \uB193\uAC70\uB098 \uC544\uB798 \uBC84\uD2BC\uC744 \uB204\uB974\uC138\uC694.","No vault yet. Drop a folder on this window, or use the button below.","\u307E\u3060\u30DC\u30EB\u30C8\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u30D5\u30A9\u30EB\u30C0\u3092\u3053\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u30C9\u30ED\u30C3\u30D7\u3059\u308B\u304B\u3001\u4E0B\u306E\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002","\u8FD8\u6CA1\u6709\u4ED3\u5E93\u3002\u628A\u6587\u4EF6\u5939\u62D6\u5230\u8FD9\u4E2A\u7A97\u53E3\uFF0C\u6216\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u3002"],"drop.body":["\uD3F4\uB354\uB098 \uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC744 \uB193\uC73C\uBA74 \uADF8 \uBCFC\uD2B8\uB85C \uC6B0\uC8FC\uB97C \uB9CC\uB4ED\uB2C8\uB2E4","Drop a folder or markdown files and a cosmos is built from that vault","\u30D5\u30A9\u30EB\u30C0\u3084\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u30D5\u30A1\u30A4\u30EB\u3092\u7F6E\u304F\u3068\u3001\u305D\u306E\u30DC\u30EB\u30C8\u304B\u3089\u5B87\u5B99\u3092\u4F5C\u308A\u307E\u3059","\u653E\u4E0B\u6587\u4EF6\u5939\u6216 Markdown \u6587\u4EF6\uFF0C\u5C31\u7528\u90A3\u4E2A\u4ED3\u5E93\u9020\u4E00\u4E2A\u5B87\u5B99"],"search.ph":["\uB178\uD2B8 \xB7 \uC124\uC815 \xB7 \uAE30\uB2A5 \uAC80\uC0C9 \u2026","Search notes, settings, actions \u2026","\u30CE\u30FC\u30C8\u30FB\u8A2D\u5B9A\u30FB\u6A5F\u80FD\u3092\u691C\u7D22 \u2026","\u641C\u7D22\u7B14\u8BB0 \xB7 \u8BBE\u7F6E \xB7 \u529F\u80FD \u2026"],"insp.more":["+ {n}\uAC1C \uB354 \uBCF4\uAE30","+ {n} more","+ \u4ED6 {n} \u4EF6","+ \u8FD8\u6709 {n} \u9879"],"find.knob":["\uC124\uC815","SETTING","\u8A2D\u5B9A","\u8BBE\u7F6E"],"find.act":["\uAE30\uB2A5","ACTION","\u6A5F\u80FD","\u529F\u80FD"],"load.notes":["{n}\uAC1C \uB178\uD2B8","{n} notes","\u30CE\u30FC\u30C8 {n} \u4EF6","{n} \u7BC7\u7B14\u8BB0"],"load.graph":["\uB9C1\uD06C \xB7 \uD0DC\uADF8 \uADF8\uB798\uD504 \uAD6C\uC131","Building the link and tag graph","\u30EA\u30F3\u30AF \xB7 \u30BF\u30B0\u306E\u30B0\u30E9\u30D5\u3092\u69CB\u6210","\u6784\u5EFA\u94FE\u63A5\u4E0E\u6807\u7B7E\u56FE\u8C31"],"load.orbit":["\uADA4\uB3C4 \uACC4\uC0B0","Computing orbits","\u8ECC\u9053\u3092\u8A08\u7B97","\u8BA1\u7B97\u8F68\u9053"],"load.nomd":["\uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4","No markdown files found","\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093","\u672A\u627E\u5230 Markdown \u6587\u4EF6"],"load.failed":["\uBCFC\uD2B8 \uD574\uC11D \uC2E4\uD328","Could not parse the vault","\u30DC\u30EB\u30C8\u306E\u89E3\u6790\u306B\u5931\u6557","\u4ED3\u5E93\u89E3\u6790\u5931\u8D25"],"load.empty":["\uC77D\uC744 \uB178\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4","No notes to read","\u8AAD\u3081\u308B\u30CE\u30FC\u30C8\u304C\u3042\u308A\u307E\u305B\u3093","\u6CA1\u6709\u53EF\u8BFB\u7684\u7B14\u8BB0"],"load.render":["\uB80C\uB354 \uC2E4\uD328 \u2014 \uBE48 \uC6B0\uC8FC\uB85C \uBCF5\uADC0","Render failed \u2014 back to empty space","\u30EC\u30F3\u30C0\u30FC\u5931\u6557 \u2014 \u7A7A\u306E\u5B87\u5B99\u306B\u623B\u308A\u307E\u3059","\u6E32\u67D3\u5931\u8D25 \u2014 \u8FD4\u56DE\u7A7A\u767D\u5B87\u5B99"],"gl.lost":["\uADF8\uB798\uD53D \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uC783\uC5C8\uC2B5\uB2C8\uB2E4 \u2014 \uBCF5\uAD6C\uB97C \uAE30\uB2E4\uB9AC\uB294 \uC911","Lost the graphics context \u2014 waiting for the browser to give it back","\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u5931\u3044\u307E\u3057\u305F \u2014 \u5FA9\u5E30\u3092\u5F85\u3063\u3066\u3044\u307E\u3059","\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E22\u5931 \u2014 \u6B63\u5728\u7B49\u5F85\u6062\u590D"],"gl.restored":["\uADF8\uB798\uD53D \uCEE8\uD14D\uC2A4\uD2B8 \uBCF5\uAD6C\uB428","Graphics context restored","\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u304C\u5FA9\u5E30\u3057\u307E\u3057\u305F","\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u6062\u590D"],"vault.empty":["\uBE48 \uC6B0\uC8FC","EMPTY SPACE","\u7A7A\u306E\u5B87\u5B99","\u7A7A\u767D\u5B87\u5B99"],"cat.rawYear":["{y} \uC6D0\uBB38","{y} SOURCES","{y} \u539F\u6587","{y} \u539F\u59CB\u6750\u6599"],"cat.rawUndated":["\uBB34\uC5F0\uB3C4 \uC6D0\uBB38","UNDATED SOURCES","\u5E74\u4E0D\u660E\u306E\u539F\u6587","\u65E0\u65E5\u671F\u539F\u59CB\u6750\u6599"],"cat.hub":["\uD5C8\uBE0C","HUB","\u30CF\u30D6","\u67A2\u7EBD"],"need.vault":["\uBA3C\uC800 \uBCFC\uD2B8\uB97C \uBD88\uB7EC\uC624\uC138\uC694","Load a vault first","\u307E\u305A\u30DC\u30EB\u30C8\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u304F\u3060\u3055\u3044","\u8BF7\u5148\u8F7D\u5165\u4ED3\u5E93"],"need.node":["\uBA3C\uC800 \uB178\uB4DC\uB97C \uC120\uD0DD\uD558\uC138\uC694","Select a node first","\u307E\u305A\u30CE\u30FC\u30C9\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044","\u8BF7\u5148\u9009\u62E9\u8282\u70B9"],ripple:["\uD30C\uBB38 \xB7 {n}","RIPPLE \xB7 {n}","\u6CE2\u7D0B \xB7 {n}","\u6D9F\u6F2A \xB7 {n}"],"poster.fail":["\uD3EC\uC2A4\uD130 \uC800\uC7A5 \uC2E4\uD328","Poster export failed","\u30DD\u30B9\u30BF\u30FC\u306E\u4FDD\u5B58\u306B\u5931\u6557","\u6D77\u62A5\u4FDD\u5B58\u5931\u8D25"],"poster.ok":["\uD3EC\uC2A4\uD130 \uC800\uC7A5 \xB7 {w}\xD7{h}","POSTER SAVED \xB7 {w}\xD7{h}","\u30DD\u30B9\u30BF\u30FC\u4FDD\u5B58 \xB7 {w}\xD7{h}","\u6D77\u62A5\u5DF2\u4FDD\u5B58 \xB7 {w}\xD7{h}"],"audio.no":["\uC624\uB514\uC624\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4","Audio is unavailable","\u30AA\u30FC\u30C7\u30A3\u30AA\u3092\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093","\u97F3\u9891\u4E0D\u53EF\u7528"],"audio.on":["\uC570\uBE44\uC5B8\uD2B8 \uC0AC\uC6B4\uB4DC ON","AMBIENT SOUND ON","\u30A2\u30F3\u30D3\u30A8\u30F3\u30C8\u30B5\u30A6\u30F3\u30C9 ON","\u73AF\u5883\u97F3\u6548 \u5F00"],"audio.off":["\uC570\uBE44\uC5B8\uD2B8 \uC0AC\uC6B4\uB4DC OFF","AMBIENT SOUND OFF","\u30A2\u30F3\u30D3\u30A8\u30F3\u30C8\u30B5\u30A6\u30F3\u30C9 OFF","\u73AF\u5883\u97F3\u6548 \u5173"],"pin.hint":["\uC870\uC808\uAE30 \uC704\uC5D0 \uCEE4\uC11C\uB97C \uC62C\uB9AC\uBA74 \u25C7 \uAC00 \uB098\uD0C0\uB0A9\uB2C8\uB2E4 \u2014 \uB204\uB974\uBA74 \uC704 \uAE30\uBCF8 \uBC14\uC640 \uC774 \uC11C\uB78D \uC0AC\uC774\uB97C \uC624\uAC11\uB2C8\uB2E4.","Hover a control and a \u25C7 appears \u2014 click it to move that control between the bar above and this drawer.","\u3064\u307E\u307F\u306B\u30AB\u30FC\u30BD\u30EB\u3092\u5408\u308F\u305B\u308B\u3068 \u25C7 \u304C\u73FE\u308C\u307E\u3059 \u2014 \u62BC\u3059\u3068\u4E0A\u306E\u30D0\u30FC\u3068\u3053\u306E\u5F15\u304D\u51FA\u3057\u306E\u9593\u3092\u79FB\u52D5\u3057\u307E\u3059\u3002","\u5C06\u5149\u6807\u79FB\u5230\u63A7\u5236\u9879\u4E0A\u4F1A\u51FA\u73B0 \u25C7 \u2014 \u70B9\u51FB\u53EF\u5728\u4E0A\u65B9\u57FA\u672C\u680F\u4E0E\u6B64\u62BD\u5C49\u4E4B\u95F4\u79FB\u52A8\u3002"],"pin.on":["{n} \xB7 \uAE30\uBCF8 \uBC14\uC5D0 \uACE0\uC815","{n} \xB7 pinned to the bar","{n} \xB7 \u30D0\u30FC\u306B\u56FA\u5B9A","{n} \xB7 \u5DF2\u56FA\u5B9A\u5230\u57FA\u672C\u680F"],"pin.off":["{n} \xB7 \uC11C\uB78D\uC73C\uB85C \uB0B4\uB9BC","{n} \xB7 moved to the drawer","{n} \xB7 \u5F15\u304D\u51FA\u3057\u3078","{n} \xB7 \u5DF2\u79FB\u5165\u62BD\u5C49"],"grp.cosmos":["\uC6B4\uB3D9","MOTION","\u904B\u52D5","\u8FD0\u52A8"],"deck.reset":["\uC81C\uC5B4\uD310 \uC704\uCE58\uB97C \uC790\uB3D9\uC73C\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4","Deck placement handed back to the layout","\u30D1\u30CD\u30EB\u4F4D\u7F6E\u3092\u81EA\u52D5\u306B\u623B\u3057\u307E\u3057\u305F","\u5DF2\u6062\u590D\u9762\u677F\u7684\u81EA\u52A8\u5E03\u5C40"],"ctl.find":["\uCEE8\uD2B8\uB864 \uCC3E\uAE30","FIND A CONTROL","\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u691C\u7D22","\u67E5\u627E\u63A7\u4EF6"],"ctl.none":["\uD574\uB2F9\uD558\uB294 \uCEE8\uD2B8\uB864\uC774 \uC5C6\uC2B5\uB2C8\uB2E4","Nothing by that name","\u8A72\u5F53\u3059\u308B\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u304C\u3042\u308A\u307E\u305B\u3093","\u6CA1\u6709\u627E\u5230\u76F8\u5E94\u7684\u63A7\u4EF6"],"grid.on":["\uAE30\uC900 \uD3C9\uBA74 \uCF1C\uC9D0","REFERENCE PLANE ON","\u57FA\u6E96\u5E73\u9762 \u30AA\u30F3","\u57FA\u51C6\u5E73\u9762 \u5F00"],"grid.off":["\uAE30\uC900 \uD3C9\uBA74 \uAEBC\uC9D0","REFERENCE PLANE OFF","\u57FA\u6E96\u5E73\u9762 \u30AA\u30D5","\u57FA\u51C6\u5E73\u9762 \u5173"],"grp.bodies":["\uCC9C\uCCB4","BODIES","\u5929\u4F53","\u5929\u4F53"],"grp.light":["\uBE5B","LIGHT","\u5149","\u5149"],"grp.sound":["\uC18C\uB9AC","SOUND","\u30B5\u30A6\u30F3\u30C9","\u58F0\u97F3"],"vendor.missing":["three.js\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774 \uC571\uC740 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC6D0\uACA9\uC5D0\uC11C \uBC1B\uC544\uC624\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4 \u2014 <b>vendor/three.min.js</b> \uC5D0 \uC9C1\uC811 \uB123\uC5B4 \uC8FC\uC138\uC694. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 THIRD-PARTY-NOTICES.md \uB97C \uBCF4\uC138\uC694.","three.js was not found. This app never fetches libraries remotely \u2014 place it at <b>vendor/three.min.js</b>. See THIRD-PARTY-NOTICES.md.","three.js \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u30A2\u30D7\u30EA\u306F\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u9060\u9694\u304B\u3089\u53D6\u5F97\u3057\u307E\u305B\u3093 \u2014 <b>vendor/three.min.js</b> \u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u8A73\u7D30\u306F THIRD-PARTY-NOTICES.md \u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002","\u672A\u627E\u5230 three.js\u3002\u672C\u5E94\u7528\u4E0D\u4F1A\u8FDC\u7A0B\u83B7\u53D6\u5E93\u6587\u4EF6 \u2014 \u8BF7\u5C06\u5176\u653E\u5728 <b>vendor/three.min.js</b>\u3002\u8BE6\u60C5\u8BF7\u89C1 THIRD-PARTY-NOTICES.md\u3002"],"cap.label":["\uCD5C\uB300 \uB178\uB4DC","MAX NODES","\u6700\u5927\u30CE\u30FC\u30C9\u6570","\u6700\u5927\u8282\u70B9\u6570"],"cap.off":["\uC81C\uD55C \uC5C6\uC74C","NO LIMIT","\u5236\u9650\u306A\u3057","\u65E0\u9650\u5236"],"cap.hit":["\uB178\uD2B8 {total}\uAC1C \uC911 {n}\uAC1C\uB9CC \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4 \xB7 \uCD5C\uB300 \uB178\uB4DC \uC124\uC815\uC5D0\uC11C \uC870\uC815\uD558\uC138\uC694","Loaded {n} of {total} notes \xB7 raise the MAX NODES limit to see more","{total} \u4EF6\u4E2D {n} \u4EF6\u306E\u307F\u8AAD\u307F\u8FBC\u307F\u307E\u3057\u305F \xB7 \u6700\u5927\u30CE\u30FC\u30C9\u6570\u306E\u8A2D\u5B9A\u3067\u5909\u66F4\u3067\u304D\u307E\u3059","\u4EC5\u8F7D\u5165 {total} \u7BC7\u4E2D\u7684 {n} \u7BC7 \xB7 \u53EF\u5728\u6700\u5927\u8282\u70B9\u6570\u8BBE\u7F6E\u4E2D\u8C03\u6574"],"excl.some":["\uC81C\uC678 \uC124\uC815\uC73C\uB85C {n}\uAC1C \uC81C\uC678\uB428","{n} excluded by your filters","\u9664\u5916\u8A2D\u5B9A\u306B\u3088\u308A {n} \u4EF6\u3092\u9664\u5916","\u6839\u636E\u6392\u9664\u8BBE\u7F6E\u5DF2\u6392\u9664 {n} \u9879"],"excl.all":["\uC81C\uC678 \uC124\uC815\uC774 \uBAA8\uB4E0 \uB178\uD2B8\uB97C \uAC78\uB7EC\uB0C8\uC2B5\uB2C8\uB2E4","Your exclusion filters removed every note","\u9664\u5916\u8A2D\u5B9A\u306B\u3088\u308A\u3059\u3079\u3066\u306E\u30CE\u30FC\u30C8\u304C\u9664\u304B\u308C\u307E\u3057\u305F","\u6392\u9664\u8BBE\u7F6E\u8FC7\u6EE4\u6389\u4E86\u5168\u90E8\u7B14\u8BB0"],"intro.lede":["\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131\uC785\uB2C8\uB2E4. \uC544\uB798 \uB137\uC774\uBA74 \uCDA9\uBD84\uD788 \uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","Folders are stars, notes are planets. These four are enough to fly.","\u30D5\u30A9\u30EB\u30C0\u306F\u6052\u661F\u3001\u30CE\u30FC\u30C8\u306F\u60D1\u661F\u3067\u3059\u3002\u3053\u306E\u56DB\u3064\u3067\u5341\u5206\u306B\u98DB\u3079\u307E\u3059\u3002","\u6587\u4EF6\u5939\u662F\u6052\u661F\uFF0C\u7B14\u8BB0\u662F\u884C\u661F\u3002\u638C\u63E1\u4EE5\u4E0B\u56DB\u9879\u5373\u53EF\u8D77\u98DE\u3002"],"intro.k1":["\uB04C\uAE30 \xB7 \uD720","DRAG \xB7 WHEEL","\u30C9\u30E9\u30C3\u30B0 \xB7 \u30DB\u30A4\u30FC\u30EB","\u62D6\u52A8 \xB7 \u6EDA\u8F6E"],"intro.d1":["\uB458\uB7EC\uBCF4\uAE30 \u2014 \uADA4\uB3C4 \uD68C\uC804\uACFC \uD655\uB300","Look around \u2014 orbit and zoom","\u898B\u56DE\u3059 \u2014 \u8ECC\u9053\u56DE\u8EE2\u3068\u30BA\u30FC\u30E0","\u73AF\u89C6 \u2014 \u8F68\u9053\u65CB\u8F6C\u4E0E\u7F29\u653E"],"intro.d2":["\uB178\uD2B8 \uC774\uB984\uC73C\uB85C \uCC3E\uC544\uAC00\uAE30","Find a note by name","\u30CE\u30FC\u30C8\u540D\u3067\u63A2\u3057\u3066\u79FB\u52D5","\u6309\u7B14\u8BB0\u540D\u79F0\u67E5\u627E"],"intro.d3":["\uB178\uD2B8 \uD558\uB098\uC758 \uC774\uC6C3\uC744 \uB9C8\uC778\uB4DC\uB9F5\uC73C\uB85C \uD3BC\uCE58\uAE30","Open one note's neighbourhood as a mind map","\u30CE\u30FC\u30C8\u4E00\u3064\u306E\u96A3\u4EBA\u3092\u30DE\u30A4\u30F3\u30C9\u30DE\u30C3\u30D7\u3067\u958B\u304F","\u628A\u4E00\u7BC7\u7B14\u8BB0\u7684\u90BB\u5C45\u5C55\u5F00\u4E3A\u601D\u7EF4\u5BFC\u56FE"],"intro.d4":["\uACE0\uB978 \uB178\uD2B8\uB97C \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30","Open the selected note in Obsidian","\u9078\u3093\u3060\u30CE\u30FC\u30C8\u3092Obsidian\u3067\u958B\u304F","\u5728 Obsidian \u4E2D\u6253\u5F00\u6240\u9009\u7B14\u8BB0"],"intro.foot":["\uB098\uBA38\uC9C0\uB294 \uC67C\uCABD \uC544\uB798 SHORTCUTS \uBAA9\uB85D\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. \uC81C\uBAA9\uC904\uC758 [ ? ] \uB97C \uB204\uB974\uBA74 \uD558\uB098\uD558\uB098 \uC124\uBA85\uC774 \uBD99\uC740 \uC804\uCCB4 \uC548\uB0B4\uAC00 \uC5F4\uB9BD\uB2C8\uB2E4.","The rest are in the SHORTCUTS list, lower left. The [ ? ] in its title bar opens the full guide, with a line on each of them.","\u6B8B\u308A\u306F\u5DE6\u4E0B\u306E SHORTCUTS \u4E00\u89A7\u306B\u3042\u308A\u307E\u3059\u3002\u898B\u51FA\u3057\u306E [ ? ] \u3092\u62BC\u3059\u3068\u3001\u4E00\u3064\u305A\u3064\u8AAC\u660E\u306E\u3064\u3044\u305F\u5168\u4F53\u30AC\u30A4\u30C9\u304C\u958B\u304D\u307E\u3059\u3002","\u5176\u4F59\u5185\u5BB9\u89C1\u5DE6\u4E0B\u89D2 SHORTCUTS \u5217\u8868\u3002\u70B9\u51FB\u6807\u9898\u680F\u7684 [ ? ] \u4F1A\u6253\u5F00\u9010\u6761\u8BF4\u660E\u7684\u5B8C\u6574\u6307\u5357\u3002"],"intro.go":["\u25B6 \uB458\uB7EC\uBCF4\uAE30","\u25B6 START LOOKING","\u25B6 \u898B\u3066\u307E\u308F\u308B","\u25B6 \u5F00\u59CB\u6D4F\u89C8"],"intro.reopen":["\uCCAB \uBE44\uD589 \uC548\uB0B4 \uB2E4\uC2DC \uBCF4\uAE30","Show the first-flight guide again","\u306F\u3058\u3081\u3066\u306E\u98DB\u884C\u306E\u6848\u5185\u3092\u518D\u8868\u793A","\u91CD\u65B0\u663E\u793A\u9996\u6B21\u98DE\u884C\u6307\u5F15"],"guide.open":["\uC804\uCCB4 \uC548\uB0B4 \uC5F4\uAE30","Open the guide","\u30AC\u30A4\u30C9\u3092\u958B\u304F","\u6253\u5F00\u6307\u5357"],"guide.lede":["\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131, \uC778\uC6A9\uB41C \uCD9C\uCC98\uB294 \uC704\uC131\uC785\uB2C8\uB2E4. \uC544\uB798\uAC00 \uC774 \uD654\uBA74\uC774 \uD560 \uC218 \uC788\uB294 \uC77C \uC804\uBD80\uC785\uB2C8\uB2E4.","Folders are stars, notes are planets, cited sources are moons. Below is everything this screen can do.","\u30D5\u30A9\u30EB\u30C0\u306F\u6052\u661F\u3001\u30CE\u30FC\u30C8\u306F\u60D1\u661F\u3001\u5F15\u7528\u3055\u308C\u305F\u51FA\u5178\u306F\u885B\u661F\u3067\u3059\u3002\u4EE5\u4E0B\u304C\u3053\u306E\u753B\u9762\u306B\u3067\u304D\u308B\u3053\u3068\u306E\u3059\u3079\u3066\u3067\u3059\u3002","\u6587\u4EF6\u5939\u662F\u6052\u661F\uFF0C\u7B14\u8BB0\u662F\u884C\u661F\uFF0C\u88AB\u5F15\u7528\u7684\u6765\u6E90\u662F\u536B\u661F\u3002\u4EE5\u4E0B\u662F\u8FD9\u4E2A\u753B\u9762\u80FD\u505A\u7684\u5168\u90E8\u4E8B\u60C5\u3002"],"guide.s.move":["\uC6C0\uC9C1\uC774\uAE30","MOVING","\u79FB\u52D5","\u79FB\u52A8"],"guide.s.find":["\uCC3E\uAE30","FINDING","\u63A2\u3059","\u67E5\u627E"],"guide.s.read":["\uADF8\uB9BC \uC77D\uAE30","READING THE PICTURE","\u56F3\u3092\u8AAD\u3080","\u8BFB\u56FE"],"guide.s.mode":["\uBAA8\uB4DC","MODES","\u30E2\u30FC\u30C9","\u6A21\u5F0F"],"guide.s.rest":["\uB098\uBA38\uC9C0","THE REST","\u305D\u306E\u4ED6","\u5176\u4ED6"],"guide.look":["\uBCFC\uD2B8 \uD55C\uAC00\uC6B4\uB370\uB97C \uCD95\uC73C\uB85C \uC2DC\uC810\uC774 \uB3CC\uACE0, \uD720\uC740 \uADF8 \uCD95\uC744 \uD5A5\uD574 \uB2E4\uAC00\uAC11\uB2C8\uB2E4.","The view turns about the middle of the vault, and the wheel moves in toward it.","\u8996\u70B9\u306F\u30DC\u30EB\u30C8\u306E\u4E2D\u5FC3\u3092\u8EF8\u306B\u56DE\u308A\u3001\u30DB\u30A4\u30FC\u30EB\u306F\u305D\u306E\u8EF8\u3078\u5BC4\u3063\u3066\u3044\u304D\u307E\u3059\u3002","\u89C6\u89D2\u7ED5\u4ED3\u5E93\u4E2D\u5FC3\u65CB\u8F6C\uFF0C\u6EDA\u8F6E\u671D\u90A3\u4E2A\u4E2D\u5FC3\u63A8\u8FD1\u3002"],"guide.pan":["\uADF8 \uCD95 \uC790\uCCB4\uB97C \uC62E\uAE41\uB2C8\uB2E4. \uD56D\uC131 \uD558\uB098\uB97C \uD654\uBA74 \uD55C\uAC00\uC6B4\uB370\uC5D0 \uB450\uACE0 \uC2F6\uC744 \uB54C.","Moves that centre. For putting one star in the middle of the frame.","\u305D\u306E\u4E2D\u5FC3\u305D\u306E\u3082\u306E\u3092\u52D5\u304B\u3057\u307E\u3059\u3002\u6052\u661F\u3072\u3068\u3064\u3092\u753B\u9762\u4E2D\u592E\u306B\u7F6E\u304D\u305F\u3044\u3068\u304D\u306B\u3002","\u79FB\u52A8\u90A3\u4E2A\u4E2D\u5FC3\u3002\u60F3\u628A\u67D0\u9897\u6052\u661F\u6446\u5728\u753B\u9762\u6B63\u4E2D\u65F6\u7528\u5B83\u3002"],"guide.drag":["\uCC9C\uCCB4 \uD558\uB098\uB97C \uB04C\uC5B4\uB0C5\uB2C8\uB2E4. \uB193\uC73C\uBA74 \uC81C\uC790\uB9AC\uB85C \uB3CC\uC544\uAC00\uACE0, \uB3CC\uC544\uAC00\uB294 \uD798\uC740 NODE GRAVITY\uAC00 \uC815\uD569\uB2C8\uB2E4.","Pulls one body out of place. It springs back when you let go, and NODE GRAVITY decides how hard.","\u5929\u4F53\u3092\u4E00\u3064\u5F15\u304D\u51FA\u3057\u307E\u3059\u3002\u96E2\u3059\u3068\u5143\u306B\u623B\u308A\u3001\u305D\u306E\u5F37\u3055\u306F NODE GRAVITY \u304C\u6C7A\u3081\u307E\u3059\u3002","\u628A\u67D0\u4E2A\u5929\u4F53\u62C9\u51FA\u539F\u4F4D\u3002\u677E\u624B\u540E\u4F1A\u5F39\u56DE\uFF0C\u56DE\u5F39\u7684\u529B\u5EA6\u7531 NODE GRAVITY \u51B3\u5B9A\u3002"],"guide.reset":["\uC2DC\uC810\uC744 \uCC98\uC74C \uC790\uB9AC\uB85C \uB418\uB3CC\uB9BD\uB2C8\uB2E4. \uC120\uD0DD\uACFC \uBAA8\uB4DC\uB294 \uAC74\uB4DC\uB9AC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","Puts the camera back where it started. Leaves the selection and the modes alone.","\u8996\u70B9\u3092\u6700\u521D\u306E\u4F4D\u7F6E\u306B\u623B\u3057\u307E\u3059\u3002\u9078\u629E\u3068\u30E2\u30FC\u30C9\u306B\u306F\u89E6\u308C\u307E\u305B\u3093\u3002","\u628A\u89C6\u89D2\u6062\u590D\u5230\u521D\u59CB\u4F4D\u7F6E\u3002\u4E0D\u6539\u52A8\u9009\u62E9\u4E0E\u6A21\u5F0F\u3002"],"guide.search":["\uB178\uD2B8\uC640 \uC870\uC808\uAE30\uC640 \uB3D9\uC791\uC774 \uD55C \uC0C1\uC790\uC5D0 \uB4E4\uC5B4\uC635\uB2C8\uB2E4. \uB178\uD2B8\uB294 \uC774\uB984\xB7\uACBD\uB85C\xB7\uD0DC\uADF8\xB7\uC18D\uC131 \uC5B4\uB290 \uCABD\uC73C\uB85C\uB3C4 \uAC78\uB9BD\uB2C8\uB2E4.","Notes, controls and actions in one box. A note matches on its name, its path, its tags or its properties.","\u30CE\u30FC\u30C8\u3082\u3064\u307E\u307F\u3082\u52D5\u4F5C\u3082\u4E00\u3064\u306E\u7BB1\u306B\u5165\u308A\u307E\u3059\u3002\u30CE\u30FC\u30C8\u306F\u540D\u524D\u30FB\u30D1\u30B9\u30FB\u30BF\u30B0\u30FB\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u3069\u308C\u3067\u3082\u5F15\u3063\u304B\u304B\u308A\u307E\u3059\u3002","\u7B14\u8BB0\u3001\u63A7\u4EF6\u4E0E\u52A8\u4F5C\u90FD\u5728\u540C\u4E00\u4E2A\u6846\u91CC\u3002\u7B14\u8BB0\u53EF\u6309\u540D\u79F0\u3001\u8DEF\u5F84\u3001\u6807\u7B7E\u6216\u5C5E\u6027\u547D\u4E2D\u3002"],"guide.note":["\uACE0\uB978 \uB178\uD2B8\uB97C \uC624\uB7EC\uB9AC \uC606\uC5D0 \uC5FD\uB2C8\uB2E4. \uC6B0\uC8FC\uB294 \uADF8 \uC790\uB9AC\uC5D0 \uADF8\uB300\uB85C \uB0A8\uC2B5\uB2C8\uB2E4.","Opens the selected note beside the orrery. The cosmos stays exactly where it was.","\u9078\u3093\u3060\u30CE\u30FC\u30C8\u3092\u30AA\u30FC\u30E9\u30EA\u30FC\u306E\u96A3\u306B\u958B\u304D\u307E\u3059\u3002\u5B87\u5B99\u306F\u305D\u306E\u307E\u307E\u6B8B\u308A\u307E\u3059\u3002","\u5728\u661F\u4EEA\u65C1\u8FB9\u6253\u5F00\u6240\u9009\u7B14\u8BB0\uFF0C\u661F\u56FE\u4ECD\u7559\u5728\u539F\u5904\u3002"],"guide.broken":["\uC67C\uCABD \uC704 BROKEN \uC22B\uC790\uB97C \uB204\uB974\uBA74 \uB04A\uC5B4\uC9C4 \uB9C1\uD06C\uB97C \uAC00\uC9C4 \uB178\uD2B8\uB9CC \uB0A8\uC2B5\uB2C8\uB2E4. \uBB34\uC5C7\uC744 \uD5A5\uD588\uB294\uC9C0\uB294 \uC778\uC2A4\uD399\uD130\uAC00 \uC774\uB984\uC73C\uB85C \uC54C\uB824\uC90D\uB2C8\uB2E4.","Click the BROKEN count, upper left, to keep only the notes carrying dead links. The inspector names what each one was reaching for.","\u5DE6\u4E0A\u306E BROKEN \u306E\u6570\u3092\u62BC\u3059\u3068\u3001\u5207\u308C\u305F\u30EA\u30F3\u30AF\u3092\u6301\u3064\u30CE\u30FC\u30C8\u3060\u3051\u304C\u6B8B\u308A\u307E\u3059\u3002\u4F55\u3092\u6307\u3057\u3066\u3044\u305F\u304B\u306F\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u304C\u540D\u524D\u3067\u793A\u3057\u307E\u3059\u3002","\u70B9\u51FB\u5DE6\u4E0A\u89D2\u7684 BROKEN \u6570\u5B57\uFF0C\u53EA\u4FDD\u7559\u5E26\u6709\u5931\u6548\u94FE\u63A5\u7684\u7B14\u8BB0\u3002\u6307\u5411\u7684\u76EE\u6807\u7531\u68C0\u67E5\u5668\u6309\u540D\u79F0\u5217\u51FA\u3002"],"guide.route":["\uC778\uC2A4\uD399\uD130\uC758 \uBC84\uD2BC\uC785\uB2C8\uB2E4. \uD55C\uCABD\uC5D0\uC11C \uB204\uB974\uACE0 \uB2E4\uB978 \uCABD\uC744 \uACE0\uB974\uBA74 \uB450 \uB178\uD2B8 \uC0AC\uC774 \uCD5C\uB2E8 \uACBD\uB85C\uAC00 \uCF1C\uC9C0\uACE0, \uB098\uBA38\uC9C0 \uBCFC\uD2B8\uB294 \uD754\uC801\uC73C\uB85C \uB0B4\uB824\uAC11\uB2C8\uB2E4.","The inspector button. Press it on one note, pick the other, and the shortest way between them lights up with the rest of the vault held down to a trace.","\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u306E\u30DC\u30BF\u30F3\u3067\u3059\u3002\u7247\u65B9\u3067\u62BC\u3057\u3066\u3082\u3046\u7247\u65B9\u3092\u9078\u3076\u3068\u3001\u4E8C\u3064\u306E\u30CE\u30FC\u30C8\u306E\u6700\u77ED\u7D4C\u8DEF\u304C\u706F\u308A\u3001\u6B8B\u308A\u306F\u75D5\u8DE1\u307E\u3067\u843D\u3061\u307E\u3059\u3002","\u68C0\u67E5\u5668\u4E0A\u7684\u6309\u94AE\u3002\u5728\u4E00\u7AEF\u6309\u4E0B\uFF0C\u518D\u9009\u53E6\u4E00\u7AEF\uFF0C\u4E24\u7BC7\u7B14\u8BB0\u4E4B\u95F4\u7684\u6700\u77ED\u8DEF\u5F84\u4F1A\u4EAE\u8D77\uFF0C\u5176\u4F59\u90E8\u5206\u5219\u538B\u6697\u6210\u75D5\u8FF9\u3002"],"guide.layer":["ALL \xB7 WIKI \xB7 SOURCE \xB7 BRIDGE \xB7 OFF \uB97C \uB3D5\uB2C8\uB2E4. BRIDGE\uB294 \uC790\uAE30 \uD3F4\uB354\uB97C \uBC97\uC5B4\uB098\uB294 \uB9C1\uD06C\uB9CC \uB0A8\uAE30\uB294 \uCE35\uC774\uACE0, \uB0A8\uB294 \uAC83\uC774 \uACE7 \uC2DC\uC2A4\uD15C \uC0AC\uC774\uC758 \uC655\uB798\uC785\uB2C8\uB2E4.","Cycles ALL \xB7 WIKI \xB7 SOURCE \xB7 BRIDGE \xB7 OFF. BRIDGE keeps only the links that leave their own folder, and what is left is the traffic between systems.","ALL \xB7 WIKI \xB7 SOURCE \xB7 BRIDGE \xB7 OFF \u3092\u9806\u306B\u5207\u308A\u66FF\u3048\u307E\u3059\u3002BRIDGE \u306F\u81EA\u5206\u306E\u30D5\u30A9\u30EB\u30C0\u3092\u51FA\u308B\u30EA\u30F3\u30AF\u3060\u3051\u3092\u6B8B\u3059\u5C64\u3067\u3001\u6B8B\u308B\u3082\u306E\u304C\u30B7\u30B9\u30C6\u30E0\u9593\u306E\u5F80\u6765\u3067\u3059\u3002","\u4F9D\u6B21\u5207\u6362 ALL \xB7 WIKI \xB7 SOURCE \xB7 BRIDGE \xB7 OFF\u3002BRIDGE \u53EA\u4FDD\u7559\u8DE8\u51FA\u81EA\u8EAB\u6587\u4EF6\u5939\u7684\u94FE\u63A5\uFF0C\u5269\u4E0B\u7684\u6B63\u662F\u5404\u661F\u7CFB\u4E4B\u95F4\u7684\u5F80\u6765\u3002"],"guide.grid":["\uCC9C\uCCB4\uB4E4\uC774 \uB193\uC778 \uBC14\uB85C \uADF8 \uD3C9\uBA74\uC5D0 \uAE30\uC900\uBA74\uC744 \uAE5D\uB2C8\uB2E4. \uBB34\uC5C7\uC774 \uC704\uC5D0 \uC788\uACE0 \uBB34\uC5C7\uC774 \uC544\uB798\uC778\uC9C0 \uC77D\uC73C\uB824\uBA74 \uBC14\uB2E5\uC774 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.","Lays a reference plane on the plane the bodies are arranged in. Reading what is above and what is below takes a floor.","\u5929\u4F53\u304C\u4E26\u3093\u3067\u3044\u308B\u305D\u306E\u5E73\u9762\u306B\u57FA\u6E96\u9762\u3092\u6577\u304D\u307E\u3059\u3002\u4F55\u304C\u4E0A\u3067\u4F55\u304C\u4E0B\u304B\u3092\u8AAD\u3080\u306B\u306F\u5E8A\u304C\u8981\u308A\u307E\u3059\u3002","\u5728\u5929\u4F53\u6240\u5728\u7684\u90A3\u4E2A\u5E73\u9762\u4E0A\u94FA\u4E00\u5C42\u57FA\u51C6\u9762\u3002\u8981\u8BFB\u51FA\u9AD8\u4F4E\uFF0C\u5148\u5F97\u6709\u4E2A\u5730\u9762\u3002"],"guide.ripple":["\uACE0\uB978 \uB178\uD2B8\uC5D0\uC11C \uB9C1\uD06C\uB97C \uB530\uB77C \uD30C\uBB38\uC774 \uBC88\uC9D1\uB2C8\uB2E4. \uBA87 \uD649 \uB9CC\uC5D0 \uC5B4\uB514\uAE4C\uC9C0 \uB2FF\uB294\uC9C0\uAC00 \uBCF4\uC785\uB2C8\uB2E4.","A wave runs out from the selected note along its links, so you can see how far it reaches and in how many hops.","\u9078\u3093\u3060\u30CE\u30FC\u30C8\u304B\u3089\u30EA\u30F3\u30AF\u3092\u4F1D\u3063\u3066\u6CE2\u7D0B\u304C\u5E83\u304C\u308A\u307E\u3059\u3002\u4F55\u30DB\u30C3\u30D7\u3067\u3069\u3053\u307E\u3067\u5C4A\u304F\u304B\u304C\u898B\u3048\u307E\u3059\u3002","\u6D9F\u6F2A\u4ECE\u6240\u9009\u7B14\u8BB0\u6CBF\u7740\u94FE\u63A5\u6269\u6563\uFF0C\u80FD\u770B\u51FA\u5B83\u7ECF\u8FC7\u51E0\u8DF3\u3001\u80FD\u4F20\u5230\u591A\u8FDC\u3002"],"guide.mind":["\uB178\uD2B8 \uD558\uB098\uC758 \uC774\uC6C3\uC744 \uB450 \uD649\uAE4C\uC9C0 \uC81C\uC790\uB9AC\uC5D0 \uD3BC\uCE69\uB2C8\uB2E4. \uC6B0\uC8FC\uAC00 \uADF8 \uB178\uD2B8\uB97C \uC911\uC2EC\uC73C\uB85C \uB2E4\uC2DC \uBC30\uC5F4\uB429\uB2C8\uB2E4.","One note and its neighbourhood, two hops out, laid out in place \u2014 the cosmos rearranges itself around it.","\u30CE\u30FC\u30C8\u4E00\u3064\u306E\u96A3\u4EBA\u3092\u4E8C\u30DB\u30C3\u30D7\u307E\u3067\u305D\u306E\u5834\u306B\u5E83\u3052\u307E\u3059\u3002\u5B87\u5B99\u304C\u305D\u306E\u30CE\u30FC\u30C8\u3092\u4E2D\u5FC3\u306B\u4E26\u3073\u76F4\u3057\u307E\u3059\u3002","\u628A\u4E00\u7BC7\u7B14\u8BB0\u7684\u90BB\u5C45\u5C55\u5F00\u4E24\u8DF3\uFF0C\u5C31\u5730\u94FA\u5F00\u2014\u2014\u661F\u56FE\u4F1A\u56F4\u7ED5\u5B83\u91CD\u65B0\u6392\u5217\u3002"],"guide.gen":["\uBCFC\uD2B8\uB97C \uBB34(\u7121)\uAE4C\uC9C0 \uB418\uAC10\uC558\uB2E4\uAC00 \uC624\uB298\uAE4C\uC9C0 \uB2E4\uC2DC \uB9CC\uB4ED\uB2C8\uB2E4. \uC644\uC131\uB41C \uADF8\uB798\uD504\uC758 \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uC544\uB2C8\uB77C \uB178\uD2B8\uAC00 \uC2E4\uC81C\uB85C \uC4F0\uC778 \uC21C\uC11C\uC774\uACE0, \uB208\uAE08\uC744 \uC9C1\uC811 \uB04C \uC218 \uC788\uC2B5\uB2C8\uB2E4.","Rewinds the vault to nothing and builds it forward to today. Not an animation of the finished graph \u2014 the order the notes were actually written, with a scrubber on it.","\u30DC\u30EB\u30C8\u3092\u7121\u307E\u3067\u5DFB\u304D\u623B\u3057\u3001\u4ECA\u65E5\u307E\u3067\u4F5C\u308A\u76F4\u3057\u307E\u3059\u3002\u5B8C\u6210\u3057\u305F\u30B0\u30E9\u30D5\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u306A\u304F\u3001\u30CE\u30FC\u30C8\u304C\u5B9F\u969B\u306B\u66F8\u304B\u308C\u305F\u9806\u5E8F\u3067\u3001\u76EE\u76DB\u308A\u3092\u81EA\u5206\u3067\u52D5\u304B\u305B\u307E\u3059\u3002","\u628A\u4ED3\u5E93\u5012\u56DE\u865A\u65E0\uFF0C\u518D\u4E00\u8DEF\u5EFA\u5230\u4ECA\u5929\u3002\u8FD9\u4E0D\u662F\u6210\u54C1\u56FE\u7684\u52A8\u753B\uFF0C\u800C\u662F\u7B14\u8BB0\u771F\u6B63\u88AB\u5199\u4E0B\u7684\u987A\u5E8F\uFF0C\u5E76\u4E14\u53EF\u4EE5\u624B\u52A8\u62D6\u52A8\u8FDB\u5EA6\u3002"],"guide.poster":["HUD \uC5C6\uB294 \uACE0\uD574\uC0C1\uB3C4 PNG \uD55C \uC7A5. \uD654\uBA74\uC758 \uBCF5\uC81C\uAC00 \uC544\uB2C8\uB77C \uD654\uBA74\uBCF4\uB2E4 \uD06C\uAC8C \uADF8\uB824\uC9D1\uB2C8\uB2E4.","One high-resolution PNG of the cosmos with no HUD on it \u2014 drawn larger than the screen, not copied from it.","HUD \u306E\u306A\u3044\u9AD8\u89E3\u50CF\u5EA6 PNG \u3092\u4E00\u679A\u3002\u753B\u9762\u306E\u8907\u88FD\u3067\u306F\u306A\u304F\u3001\u753B\u9762\u3088\u308A\u5927\u304D\u304F\u63CF\u304B\u308C\u307E\u3059\u3002","\u4E00\u5F20\u4E0D\u542B HUD \u7684\u9AD8\u5206\u8FA8\u7387 PNG\u2014\u2014\u6BD4\u5C4F\u5E55\u66F4\u5927\uFF0C\u800C\u4E0D\u662F\u5C4F\u5E55\u7684\u590D\u5236\u3002"],"guide.sound":["\uB178\uD2B8\uB9C8\uB2E4 \uC790\uAE30 \uC74C\uB192\uC774\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uBB3C\uC5B4\uBCF4\uAE30 \uC804\uC5D0\uB294 \uC6B8\uB9AC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","Every note has a pitch of its own. Silent until you ask for it.","\u30CE\u30FC\u30C8\u306B\u306F\u305D\u308C\u305E\u308C\u306E\u97F3\u9AD8\u304C\u3042\u308A\u307E\u3059\u3002\u6C42\u3081\u308B\u307E\u3067\u306F\u9CF4\u308A\u307E\u305B\u3093\u3002","\u6BCF\u7BC7\u7B14\u8BB0\u90FD\u6709\u81EA\u5DF1\u7684\u97F3\u9AD8\u3002\u4F60\u4E0D\u5F00\u53E3\uFF0C\u5B83\u5C31\u4E0D\u54CD\u3002"],"guide.hud":["\uD328\uB110\uC744 \uC804\uBD80 \uAC10\uCDA5\uB2C8\uB2E4. \uC6B0\uC8FC\uB294 \uB4A4\uC5D0\uC11C \uADF8\uB300\uB85C \uB3D5\uB2C8\uB2E4.","Hides every panel. The cosmos keeps turning behind it.","\u30D1\u30CD\u30EB\u3092\u3059\u3079\u3066\u96A0\u3057\u307E\u3059\u3002\u5B87\u5B99\u306F\u305D\u306E\u307E\u307E\u56DE\u308A\u7D9A\u3051\u307E\u3059\u3002","\u9690\u85CF\u5168\u90E8\u9762\u677F\u3002\u661F\u56FE\u7167\u65E7\u8FD0\u8F6C\u3002"],"guide.help":["\uC774 \uC548\uB0B4\uC785\uB2C8\uB2E4. \uC67C\uCABD \uC544\uB798 SHORTCUTS \uC81C\uBAA9\uC904\uC758 [ ? ] \uB3C4 \uAC19\uC740 \uAC83\uC744 \uC5FD\uB2C8\uB2E4.","This card. So does the [ ? ] in the SHORTCUTS title bar, lower left.","\u3053\u306E\u6848\u5185\u3067\u3059\u3002\u5DE6\u4E0B SHORTCUTS \u306E\u898B\u51FA\u3057\u306B\u3042\u308B [ ? ] \u3082\u540C\u3058\u3082\u306E\u3092\u958B\u304D\u307E\u3059\u3002","\u5C31\u662F\u8FD9\u5F20\u5361\u7247\u3002\u5DE6\u4E0B\u89D2 SHORTCUTS \u6807\u9898\u680F\u91CC\u7684 [ ? ] \u6253\u5F00\u7684\u4E5F\u662F\u5B83\u3002"],"guide.foot":["\uC870\uC808\uAE30\uB294 \uC624\uB978\uCABD \uC704 \uC11C\uB78D \uC548\uC5D0 \uC788\uACE0, \uAC80\uC0C9 \uC0C1\uC790\uC5D0\uC11C \uC774\uB984\uC73C\uB85C \uBC14\uB85C \uBD80\uB97C \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \xB7 ","Every control lives in the drawer, upper right, and the search box will call one up by name. \xB7 ","\u3064\u307E\u307F\u306F\u53F3\u4E0A\u306E\u5F15\u304D\u51FA\u3057\u306E\u4E2D\u306B\u3042\u308A\u3001\u691C\u7D22\u30DC\u30C3\u30AF\u30B9\u304B\u3089\u540D\u524D\u3067\u547C\u3073\u51FA\u3059\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \xB7 ","\u6240\u6709\u63A7\u4EF6\u90FD\u5728\u53F3\u4E0A\u89D2\u7684\u62BD\u5C49\u91CC\uFF0C\u4E5F\u53EF\u4EE5\u5728\u641C\u7D22\u6846\u4E2D\u6309\u540D\u79F0\u76F4\u63A5\u8C03\u51FA\u3002 \xB7 "],"kd.spd":["\uADA4\uB3C4 \uC2DC\uACC4\uC758 \uC18D\uB3C4. 0\uC774\uBA74 \uD558\uB298 \uC804\uCCB4\uAC00 \uBA48\uCDA5\uB2C8\uB2E4 \u2014 \uD61C\uC131\uB3C4, \uBCC4\uC758 \uD45C\uBA74\uB3C4.","The orbital clock. At zero the whole sky stops, the comet and the star's own face with it.","\u8ECC\u9053\u6642\u8A08\u306E\u901F\u3055\u30020 \u3067\u7A7A\u5168\u4F53\u304C\u6B62\u307E\u308A\u307E\u3059 \u2014 \u5F57\u661F\u3082\u661F\u306E\u8868\u9762\u3082\u3002","\u8F68\u9053\u65F6\u949F\u7684\u5FEB\u6162\u3002\u5F52\u96F6\u65F6\u6574\u7247\u5929\u7A7A\u9759\u6B62\u2014\u2014\u5F57\u661F\u4E0E\u6052\u661F\u8868\u9762\u4E5F\u4E00\u6837\u3002"],"kd.bri":["\uBAA8\uB4E0 \uCC9C\uCCB4\uC758 \uD6C4\uAD11\uC744 \uD55C\uAEBC\uBC88\uC5D0 \uC62C\uB9BD\uB2C8\uB2E4. \uC885\uB958\uBCC4 \uBC30\uBD84\uC740 BODIES \uCABD\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.","Raises every body's halo at once. The balance between the kinds is under BODIES.","\u3059\u3079\u3066\u306E\u5929\u4F53\u306E\u5149\u8F2A\u3092\u4E00\u5EA6\u306B\u4E0A\u3052\u307E\u3059\u3002\u7A2E\u985E\u3054\u3068\u306E\u914D\u5206\u306F BODIES \u306B\u3042\u308A\u307E\u3059\u3002","\u4E00\u6B21\u62AC\u5347\u6240\u6709\u5929\u4F53\u7684\u5149\u6655\u3002\u5404\u7C7B\u4E4B\u95F4\u7684\u914D\u6BD4\u5728 BODIES \u91CC\u3002"],"kd.lnk":["\uB9C1\uD06C\uAC00 \uB0B4\uB294 \uBE5B\uC758 \uC591. \uAD75\uAE30\uB294 LINE WIDTH\uAC00 \uB530\uB85C \uB9E1\uC2B5\uB2C8\uB2E4.","How much light a link gives off. How thick it is drawn is LINE WIDTH's job.","\u30EA\u30F3\u30AF\u304C\u653E\u3064\u5149\u306E\u91CF\u3002\u592A\u3055\u306F LINE WIDTH \u304C\u5225\u306B\u53D7\u3051\u6301\u3061\u307E\u3059\u3002","\u94FE\u63A5\u53D1\u51FA\u7684\u5149\u91CF\u3002\u7C97\u7EC6\u7531 LINE WIDTH \u5355\u72EC\u8D1F\u8D23\u3002"],"kd.gap":["\uD56D\uC131\uACC4 \uC0AC\uC774\uC758 \uAC04\uACA9. \uBCFC\uD2B8\uAC00 \uB113\uC5B4\uC9C8 \uBFD0, \uBB34\uC5C7\uC774 \uC5B4\uB514\uC5D0 \uC788\uB294\uC9C0\uB294 \uADF8\uB300\uB85C\uC785\uB2C8\uB2E4.","The room between systems. The vault opens out; what sits where does not change.","\u6052\u661F\u7CFB\u306E\u3042\u3044\u3060\u306E\u9593\u9694\u3002\u30DC\u30EB\u30C8\u304C\u5E83\u304C\u308B\u3060\u3051\u3067\u3001\u4F55\u304C\u3069\u3053\u306B\u3042\u308B\u304B\u306F\u5909\u308F\u308A\u307E\u305B\u3093\u3002","\u5404\u661F\u7CFB\u4E4B\u95F4\u7684\u95F4\u8DDD\u3002\u4ED3\u5E93\u53EA\u662F\u53D8\u5BBD\uFF0C\u4EC0\u4E48\u5728\u54EA\u91CC\u5E76\u4E0D\u6539\u53D8\u3002"],"kd.maxNodes":["\uADF8\uB9B4 \uB178\uD2B8 \uC218\uC758 \uCC9C\uC7A5. \uAEBC\uC9C4 \uCC44\uB85C \uB098\uAC11\uB2C8\uB2E4 \u2014 \uBCFC\uD2B8 \uC808\uBC18\uC744 \uC870\uC6A9\uD788 \uBC84\uB9AC\uB290\uB2C8 \uCCAB 1\uBD84\uC774 \uB290\uB9B0 \uD3B8\uC774 \uB0AB\uC2B5\uB2C8\uB2E4.","A ceiling on how many notes are drawn. Ships off: a slow first minute beats silently dropping half a vault.","\u63CF\u304F\u30CE\u30FC\u30C8\u6570\u306E\u4E0A\u9650\u3002\u65E2\u5B9A\u306F\u30AA\u30D5 \u2014 \u30DC\u30EB\u30C8\u306E\u534A\u5206\u3092\u9ED9\u3063\u3066\u6368\u3066\u308B\u3088\u308A\u3001\u6700\u521D\u306E\u4E00\u5206\u304C\u9045\u3044\u307B\u3046\u304C\u307E\u3057\u3067\u3059\u3002","\u7ED8\u5236\u7B14\u8BB0\u6570\u91CF\u7684\u4E0A\u9650\u3002\u9ED8\u8BA4\u5173\u95ED\uFF1A\u5B81\u53EF\u7B2C\u4E00\u5206\u949F\u6162\uFF0C\u4E5F\u4E0D\u8981\u6084\u6084\u4E22\u6389\u534A\u4E2A\u4ED3\u5E93\u3002"],"kd.arc":["\uB9C1\uD06C\uAC00 \uADA4\uB3C4\uBA74 \uC704\uB85C \uC5BC\uB9C8\uB098 \uC19F\uB294\uC9C0. 0\uC774\uBA74 \uD3C9\uBA74 \uC548\uC5D0 \uB215\uC2B5\uB2C8\uB2E4.","How high a link stands out of the plane the bodies orbit in. At zero it lies flat inside it.","\u30EA\u30F3\u30AF\u304C\u8ECC\u9053\u9762\u304B\u3089\u3069\u308C\u3060\u3051\u7ACB\u3061\u4E0A\u304C\u308B\u304B\u30020 \u3067\u305D\u306E\u9762\u306B\u5BDD\u307E\u3059\u3002","\u94FE\u63A5\u4ECE\u8F68\u9053\u5E73\u9762\u4E0A\u62F1\u8D77\u591A\u9AD8\u3002\u5F52\u96F6\u65F6\u5C31\u5E73\u8EBA\u5728\u9762\u5185\u3002"],"kd.ten":["\uB9C1\uD06C\uC5D0 \uACE1\uB960\uC774 \uC5BC\uB9C8\uB098 \uC788\uB294\uC9C0. 1\uC774\uBA74 \uD33D\uD33D\uD558\uACE0 0\uC774\uBA74 \uB298\uC5B4\uC9D1\uB2C8\uB2E4.","How much curve a link has at all. Taut at one, slack at zero.","\u30EA\u30F3\u30AF\u306B\u3069\u308C\u3060\u3051\u66F2\u7387\u304C\u3042\u308B\u304B\u30021 \u3067\u5F35\u308A\u30010 \u3067\u305F\u308B\u307F\u307E\u3059\u3002","\u94FE\u63A5\u7A76\u7ADF\u6709\u591A\u5C11\u5F27\u5EA6\u3002\u4E3A\u4E00\u5219\u7EF7\u7D27\uFF0C\u4E3A\u96F6\u5219\u677E\u5782\u3002"],"kd.bnd":["\uB9C1\uD06C\uC758 \uC591 \uB05D\uC744 \uAC01\uC790\uC758 \uD56D\uC131 \uCABD\uC73C\uB85C \uB2F9\uAE41\uB2C8\uB2E4. \uAC19\uC740 \uAE38\uC744 \uAC00\uB294 \uB9C1\uD06C\uB4E4\uC774 \uD55C \uAC00\uB2E5\uC73C\uB85C \uB54B\uC785\uB2C8\uB2E4.","Draws each end of a link toward its own star, so links going the same way braid into one strand.","\u30EA\u30F3\u30AF\u306E\u4E21\u7AEF\u3092\u305D\u308C\u305E\u308C\u306E\u6052\u661F\u3078\u5BC4\u305B\u307E\u3059\u3002\u540C\u3058\u9053\u3092\u884C\u304F\u30EA\u30F3\u30AF\u304C\u4E00\u672C\u306B\u7DE8\u307E\u308C\u307E\u3059\u3002","\u628A\u94FE\u63A5\u4E24\u7AEF\u5404\u81EA\u62C9\u5411\u81EA\u5DF1\u7684\u6052\u661F\uFF0C\u540C\u8DEF\u7684\u94FE\u63A5\u4FBF\u7F16\u6210\u4E00\u80A1\u3002"],"kd.lwd":["\uB9C1\uD06C\uC640 \uADA4\uB3C4 \uC790\uAD6D\uACFC \uD61C\uC131 \uAF2C\uB9AC\uC758 \uAD75\uAE30. \uD53D\uC140\uC774 \uB2E8\uC704\uC785\uB2C8\uB2E4.","How thick the links, the wakes and the comet's tails are drawn, counted in pixels.","\u30EA\u30F3\u30AF\u3068\u8ECC\u9053\u306E\u8DE1\u3068\u5F57\u661F\u306E\u5C3E\u306E\u592A\u3055\u3002\u5358\u4F4D\u306F\u30D4\u30AF\u30BB\u30EB\u3067\u3059\u3002","\u94FE\u63A5\u3001\u8F68\u8FF9\u4E0E\u5F57\u5C3E\u7684\u7C97\u7EC6\uFF0C\u4EE5\u50CF\u7D20\u4E3A\u5355\u4F4D\u3002"],"kd.spr":["\uD55C \uD56D\uC131\uACC4 \uC548\uC5D0\uC11C \uADA4\uB3C4\uAC00 \uC5BC\uB9C8\uB098 \uBC8C\uC5B4\uC9C0\uB294\uC9C0. \uACC4 \uC0AC\uC774\uC758 \uAC04\uACA9\uC740 ORBIT GAP\uC785\uB2C8\uB2E4.","How far apart the orbits inside one system sit. The room between systems is ORBIT GAP.","\u4E00\u3064\u306E\u6052\u661F\u7CFB\u306E\u4E2D\u3067\u8ECC\u9053\u304C\u3069\u308C\u3060\u3051\u958B\u304F\u304B\u3002\u7CFB\u306E\u3042\u3044\u3060\u306F ORBIT GAP \u3067\u3059\u3002","\u540C\u4E00\u661F\u7CFB\u5185\u5404\u6761\u8F68\u9053\u4E4B\u95F4\u7684\u758F\u5BC6\u3002\u661F\u7CFB\u4E4B\u95F4\u7684\u95F4\u8DDD\u662F ORBIT GAP\u3002"],"kd.sph":["\uB0A9\uC791\uD55C \uC6D0\uBC18\uC744 \uAD6C\uB85C \uC5FD\uB2C8\uB2E4. 1\uC774\uBA74 \uC6D0\uBC18, 0\uC774\uBA74 \uAECD\uC9C8.","Opens the flat disc into a sphere. A disc at one, a shell at zero.","\u5E73\u3089\u306A\u5186\u76E4\u3092\u7403\u3078\u958B\u304D\u307E\u3059\u30021 \u3067\u5186\u76E4\u30010 \u3067\u6BBB\u3002","\u628A\u6241\u5E73\u7684\u5706\u76D8\u5C55\u5F00\u6210\u7403\u3002\u4E3A\u4E00\u662F\u76D8\uFF0C\u4E3A\u96F6\u662F\u58F3\u3002"],"kd.str":["\uD558\uB298 \uC804\uCCB4: \uBC30\uACBD \uBCC4, \uC131\uC6B4, \uADF8 \uB4A4\uC758 \uC740\uD558\uC218, \uB80C\uC988 \uC55E\uC758 \uBA3C\uC9C0. OFF\uBA74 \uBCFC\uD2B8\uB9CC \uB0A8\uC2B5\uB2C8\uB2E4.","The whole sky: the stars, the gas, the band behind them and the dust near the lens. OFF is the vault alone.","\u7A7A\u306E\u3059\u3079\u3066\uFF1A\u80CC\u666F\u306E\u661F\u3001\u661F\u96F2\u3001\u305D\u306E\u5965\u306E\u5929\u306E\u5DDD\u3001\u30EC\u30F3\u30BA\u524D\u306E\u5875\u3002OFF \u306A\u3089\u30DC\u30EB\u30C8\u3060\u3051\u304C\u6B8B\u308A\u307E\u3059\u3002","\u6574\u4E2A\u5929\u7A7A\uFF1A\u80CC\u666F\u661F\u8FB0\u3001\u661F\u4E91\u3001\u5176\u540E\u7684\u94F6\u6CB3\u5E26\u548C\u955C\u5934\u524D\u7684\u5C18\u57C3\u3002OFF \u65F6\u53EA\u5269\u4ED3\u5E93\u3002"],"kd.zod":["\uD56D\uC131\uACC4 \uD3C9\uBA74\uC5D0 \uAE54\uB9B0 \uBA3C\uC9C0\uAC00 \uC911\uC2EC \uBCC4\uBE5B\uC744 \uBC1B\uC544 \uB0B4\uB294 \uBE5B. \uBCFC\uD2B8\uAC00 \uC5B4\uB290 \uBA74\uC5D0 \uB193\uC600\uB294\uC9C0\uB97C \uB9D0\uD569\uB2C8\uB2E4.","The dust lying in the system's own plane, lit by the star in the middle of it \u2014 it says which plane the vault is laid out on.","\u6052\u661F\u7CFB\u306E\u9762\u306B\u6A2A\u305F\u308F\u308B\u5875\u304C\u3001\u4E2D\u5FC3\u306E\u661F\u306E\u5149\u3092\u53D7\u3051\u3066\u8FD4\u3059\u5149\u3002\u30DC\u30EB\u30C8\u304C\u3069\u306E\u9762\u306B\u7F6E\u304B\u308C\u3066\u3044\u308B\u304B\u3092\u793A\u3057\u307E\u3059\u3002","\u94FA\u5728\u661F\u7CFB\u5E73\u9762\u4E0A\u7684\u5C18\u57C3\uFF0C\u53D7\u4E2D\u5FC3\u661F\u5149\u7167\u4EAE\u2014\u2014\u5B83\u8BF4\u660E\u4ED3\u5E93\u94FA\u5728\u54EA\u4E00\u4E2A\u5E73\u9762\u4E0A\u3002"],"kd.szSun":["\uD5C8\uBE0C \uD56D\uC131\uC758 \uBC18\uC9C0\uB984. \uCF54\uB85C\uB098\uB3C4 \uC7A0\uAE08 \uC6D0\uBFD4\uB3C4 \uC774 \uAC12\uC744 \uB530\uB77C\uAC11\uB2C8\uB2E4.","The hub star's radius. The corona and the lock cone both follow it.","\u30CF\u30D6\u6052\u661F\u306E\u534A\u5F84\u3002\u30B3\u30ED\u30CA\u3082\u30ED\u30C3\u30AF\u5186\u9310\u3082\u3053\u308C\u306B\u5F93\u3044\u307E\u3059\u3002","\u67A2\u7EBD\u6052\u661F\u7684\u534A\u5F84\u3002\u65E5\u5195\u4E0E\u9501\u5B9A\u9525\u90FD\u968F\u5B83\u800C\u53D8\u3002"],"kd.szSys":["\uD3F4\uB354 \uD56D\uC131\uC774 \uC5BC\uB9C8\uB098 \uD06C\uAC8C \uADF8\uB824\uC9C0\uB294\uC9C0.","How large the folder stars are drawn.","\u30D5\u30A9\u30EB\u30C0\u6052\u661F\u3092\u3069\u308C\u3060\u3051\u5927\u304D\u304F\u63CF\u304F\u304B\u3002","\u6587\u4EF6\u5939\u6052\u661F\u753B\u5F97\u591A\u5927\u3002"],"kd.szPl":["\uB178\uD2B8\uC758 \uD06C\uAE30. \uD06C\uAE30 \uC790\uCCB4\uB294 \uC778\uC6A9\uB41C \uD69F\uC218\uB97C \uB73B\uD558\uBBC0\uB85C, \uC774 \uB178\uBE0C\uB294 \uB73B\uC774 \uC544\uB2C8\uB77C \uBC30\uC728\uC744 \uC6C0\uC9C1\uC785\uB2C8\uB2E4.","How large the notes are. Size itself means how often a note is cited, so this moves the scale and not the meaning.","\u30CE\u30FC\u30C8\u306E\u5927\u304D\u3055\u3002\u5927\u304D\u3055\u81EA\u4F53\u306F\u5F15\u7528\u3055\u308C\u305F\u56DE\u6570\u3092\u610F\u5473\u3059\u308B\u306E\u3067\u3001\u3053\u308C\u306F\u610F\u5473\u3067\u306F\u306A\u304F\u500D\u7387\u3092\u52D5\u304B\u3057\u307E\u3059\u3002","\u7B14\u8BB0\u7684\u5927\u5C0F\u3002\u5927\u5C0F\u672C\u8EAB\u8868\u793A\u88AB\u5F15\u7528\u7684\u6B21\u6570\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u65CB\u94AE\u6539\u53D8\u7684\u662F\u6BD4\u4F8B\u800C\u975E\u542B\u4E49\u3002"],"kd.szMn":["\uC778\uC6A9\uB41C \uCD9C\uCC98\uAC00 \uC5BC\uB9C8\uB098 \uD06C\uAC8C \uADF8\uB824\uC9C0\uB294\uC9C0.","How large the cited sources are drawn.","\u5F15\u7528\u3055\u308C\u305F\u51FA\u5178\u3092\u3069\u308C\u3060\u3051\u5927\u304D\u304F\u63CF\u304F\u304B\u3002","\u88AB\u5F15\u7528\u7684\u6765\u6E90\u753B\u5F97\u591A\u5927\u3002"],"kd.briSun":["\uD5C8\uBE0C\uC758 \uBC1D\uAE30 \u2014 \uADF8\uB9AC\uACE0 \uD5C8\uBE0C\uAC00 \uBE44\uCD94\uB294 \uBAA8\uB4E0 \uAC83\uC758 \uBC1D\uAE30. \uC774 \uBCC4\uC774 \uBCFC\uD2B8\uC758 \uAD11\uC6D0\uC774\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.","The hub's brightness, and therefore everything it lights: this star is the vault's light source.","\u30CF\u30D6\u306E\u660E\u308B\u3055 \u2014 \u305D\u3057\u3066\u30CF\u30D6\u304C\u7167\u3089\u3059\u3059\u3079\u3066\u306E\u660E\u308B\u3055\u3002\u3053\u306E\u661F\u304C\u30DC\u30EB\u30C8\u306E\u5149\u6E90\u3060\u304B\u3089\u3067\u3059\u3002","\u67A2\u7EBD\u7684\u4EAE\u5EA6\u2014\u2014\u4EE5\u53CA\u5B83\u6240\u7167\u4EAE\u7684\u4E00\u5207\u7684\u4EAE\u5EA6\uFF0C\u56E0\u4E3A\u8FD9\u9897\u661F\u5C31\u662F\u4ED3\u5E93\u7684\u5149\u6E90\u3002"],"kd.briSys":["\uD3F4\uB354 \uD56D\uC131\uC758 \uD6C4\uAD11.","The folder stars' halo.","\u30D5\u30A9\u30EB\u30C0\u6052\u661F\u306E\u5149\u8F2A\u3002","\u6587\u4EF6\u5939\u6052\u661F\u7684\u5149\u6655\u3002"],"kd.briPl":["\uB178\uD2B8\uC758 \uD6C4\uAD11.","The notes' halo.","\u30CE\u30FC\u30C8\u306E\u5149\u8F2A\u3002","\u7B14\u8BB0\u7684\u5149\u6655\u3002"],"kd.briMn":["\uC704\uC131\uC758 \uD6C4\uAD11.","The moons' halo.","\u885B\u661F\u306E\u5149\u8F2A\u3002","\u536B\u661F\u7684\u5149\u6655\u3002"],"kd.blm":["\uBC1D\uC740 \uAC83 \uC8FC\uC704\uB85C \uBC88\uC9C0\uB294 \uBE5B. \uBC88\uC9D0\uC774 \uC5C6\uB294 \uBC1D\uC740 \uC810\uC740 \uBC1D\uAC8C \uC77D\uD788\uC9C0 \uC54A\uACE0 \uADF8\uC800 \uD770 \uD53D\uC140\uC774 \uB429\uB2C8\uB2E4.","The spill around bright things. A bright point without spill does not read as bright \u2014 it reads as a pale pixel.","\u660E\u308B\u3044\u3082\u306E\u306E\u5468\u308A\u306B\u6EF2\u3080\u5149\u3002\u6EF2\u307F\u306E\u306A\u3044\u8F1D\u70B9\u306F\u660E\u308B\u304F\u306F\u8AAD\u3081\u305A\u3001\u305F\u3060\u306E\u767D\u3044\u753B\u7D20\u306B\u306A\u308A\u307E\u3059\u3002","\u660E\u4EAE\u4E4B\u7269\u5468\u56F4\u7684\u6EA2\u5149\u3002\u6CA1\u6709\u6EA2\u5149\u7684\u4EAE\u70B9\u8BFB\u4E0D\u51FA\u4EAE\u5EA6\uFF0C\u53EA\u662F\u4E00\u4E2A\u767D\u50CF\u7D20\u3002"],"kd.ray":["\uBCC4\uC5D0\uC11C \uBED7\uC5B4 \uB098\uC624\uB294 \uBE5B\uC904\uAE30. \uAC00\uAE4C\uC774 \uB2E4\uAC00\uAC00\uBA74 \uC2A4\uC2A4\uB85C \uBB3C\uB7EC\uB098\uACE0 \uC6D0\uBC18\uC774 \uB300\uC2E0 \uB9D0\uD569\uB2C8\uB2E4.","Shafts thrown out from the star. They stand back as you approach and let the disc speak for itself.","\u661F\u304B\u3089\u4F38\u3073\u308B\u5149\u6761\u3002\u8FD1\u3065\u304F\u3068\u81EA\u3089\u9000\u304D\u3001\u5186\u76E4\u81EA\u8EAB\u306B\u8A9E\u3089\u305B\u307E\u3059\u3002","\u4ECE\u6052\u661F\u5C04\u51FA\u7684\u5149\u67F1\u3002\u9760\u8FD1\u65F6\u5B83\u81EA\u884C\u9000\u573A\uFF0C\u8BA9\u661F\u76D8\u81EA\u5DF1\u8BF4\u8BDD\u3002"],"kd.glare":["\uBCC4\uC774 \uC810\uC774 \uB418\uC5C8\uC744 \uB54C \uB300\uC2E0 \uB098\uD0C0\uB098\uB294 \uC0B0\uB780 \uBB34\uB9AC. \uC808\uBC18\uC744 \uB118\uAE30\uBA74 \uACF5\uAE30\uAC00 \uC5BC\uC74C\uC774 \uB418\uACE0 \uBB34\uB9AC\uC5D0 \uAD6C\uC870\uAC00 \uC0DD\uAE41\uB2C8\uB2E4.","The scattering halo that takes over once the disc stops being a disc. Past halfway the air becomes ice and the halo gains structure.","\u661F\u304C\u70B9\u306B\u306A\u3063\u305F\u3068\u304D\u4EE3\u308F\u308A\u306B\u73FE\u308C\u308B\u6563\u4E71\u306E\u6688\u3002\u534A\u3070\u3092\u8D8A\u3048\u308B\u3068\u7A7A\u6C17\u306F\u6C37\u306B\u306A\u308A\u3001\u6688\u306B\u69CB\u9020\u304C\u751F\u307E\u308C\u307E\u3059\u3002","\u5F53\u661F\u76D8\u4E0D\u518D\u662F\u76D8\u65F6\u63A5\u7BA1\u753B\u9762\u7684\u6563\u5C04\u6655\u3002\u8FC7\u534A\u4E4B\u540E\u7A7A\u6C14\u5316\u4E3A\u51B0\uFF0C\u6655\u4FBF\u6709\u4E86\u7ED3\u6784\u3002"],"kd.flr":["\uB80C\uC988\uAC00 \uBE5B\uC5D0 \uD558\uB294 \uC77C: \uD654\uBA74 \uC911\uC2EC\uC744 \uC9C0\uB098\uB294 \uACE0\uC2A4\uD2B8, \uD5E4\uC77C\uB85C, \uAC00\uB85C \uC2A4\uD2B8\uB9AD, \uBC88\uC9D0\uC758 \uC0C9\uBD84\uC0B0, \uC55E \uC720\uB9AC\uC758 \uC5BC\uB8E9.","What the glass does with a source: ghosts through the centre of the frame, the halo, the horizontal streak, colour separating on the spill, and the smudges on the front element.","\u30EC\u30F3\u30BA\u304C\u5149\u306B\u3059\u308B\u3053\u3068\uFF1A\u753B\u9762\u4E2D\u5FC3\u3092\u901A\u308B\u30B4\u30FC\u30B9\u30C8\u3001\u30CF\u30ED\u30FC\u3001\u6A2A\u65B9\u5411\u306E\u30B9\u30C8\u30EA\u30FC\u30AF\u3001\u306B\u3058\u307F\u306E\u8272\u5206\u6563\u3001\u524D\u7389\u306E\u6C5A\u308C\u3002","\u955C\u5934\u5BF9\u5149\u505A\u7684\u4E8B\uFF1A\u7A7F\u8FC7\u753B\u9762\u4E2D\u5FC3\u7684\u9B3C\u5F71\u3001\u5149\u6655\u3001\u6A2A\u5411\u62C9\u4E1D\u3001\u6EA2\u5149\u7684\u8272\u6563\u3001\u524D\u955C\u7247\u7684\u6C61\u8FF9\u3002"],"kd.vei":["\uD654\uBA74 \uC804\uCCB4\uC5D0 \uC587\uAC8C \uAE54\uB9AC\uB294 \uB300\uAE30.","A thin air laid over the whole frame.","\u753B\u9762\u5168\u4F53\u306B\u8584\u304F\u6577\u304B\u308C\u308B\u5927\u6C17\u3002","\u94FA\u5728\u6574\u5E45\u753B\u9762\u4E0A\u7684\u4E00\u5C42\u8584\u8584\u5927\u6C14\u3002"],"kd.cur":["\uBC1D\uC740 \uCABD\uC744 \uB20C\uB7EC \uC8FC\uB294 \uC5B4\uAE68. \uC13C\uC11C\uC5D0\uB294 \uC788\uACE0 8\uBE44\uD2B8\uC5D0\uB294 \uC5C6\uB294 \uAC83\uC785\uB2C8\uB2E4.","The shoulder that holds the highlights back \u2014 the thing a sensor has and eight bits do not.","\u660E\u90E8\u3092\u6291\u3048\u308B\u80A9\u306E\u7279\u6027\u3002\u30BB\u30F3\u30B5\u30FC\u306B\u306F\u3042\u308A\u30018\u30D3\u30C3\u30C8\u306B\u306F\u306A\u3044\u3082\u306E\u3067\u3059\u3002","\u538B\u4F4F\u9AD8\u5149\u7684\u90A3\u9053\u80A9\u90E8\u2014\u2014\u4F20\u611F\u5668\u6709\u800C\u516B\u4F4D\u6CA1\u6709\u7684\u4E1C\u897F\u3002"],"kd.sVol":["\uC804\uCCB4 \uC74C\uB7C9.","The level of everything.","\u5168\u4F53\u306E\u97F3\u91CF\u3002","\u5168\u90E8\u58F0\u97F3\u7684\u97F3\u91CF\u3002"],"kd.sScale":["\uB178\uD2B8\uAC00 \uACE0\uB97C \uC218 \uC788\uB294 \uC5F4 \uAC1C\uC758 \uC74C. \uADF8\uC911 \uC5B4\uB290 \uC74C\uC774 \uB418\uB294\uC9C0\uB294 \uB178\uD2B8 \uC790\uC2E0\uC774 \uC815\uD569\uB2C8\uB2E4.","The ten notes a note may land on. Which one it lands on is the note's own business.","\u30CE\u30FC\u30C8\u304C\u9078\u3079\u308B\u5341\u306E\u97F3\u3002\u305D\u306E\u3069\u308C\u306B\u306A\u308B\u304B\u306F\u30CE\u30FC\u30C8\u81EA\u8EAB\u304C\u6C7A\u3081\u307E\u3059\u3002","\u4E00\u7BC7\u7B14\u8BB0\u53EF\u4EE5\u843D\u5728\u7684\u5341\u4E2A\u97F3\u3002\u843D\u5728\u54EA\u4E00\u4E2A\u7531\u7B14\u8BB0\u81EA\u5DF1\u51B3\u5B9A\u3002"],"kd.sDrone":["\uC544\uBB34 \uC77C\uB3C4 \uC77C\uC5B4\uB098\uC9C0 \uC54A\uC744 \uB54C \uAE54\uB824 \uC788\uB294 \uC800\uC74C. \uAEBC\uC9C4 \uCC44\uB85C \uC2DC\uC791\uD569\uB2C8\uB2E4.","The low hum under everything when nothing is happening. It starts off.","\u4F55\u3082\u8D77\u304D\u3066\u3044\u306A\u3044\u3068\u304D\u306B\u4E0B\u306B\u6D41\u308C\u308B\u4F4E\u3044\u97F3\u3002\u65E2\u5B9A\u3067\u306F\u30AA\u30D5\u3067\u3059\u3002","\u4EC0\u4E48\u90FD\u6CA1\u53D1\u751F\u65F6\u57AB\u5728\u5E95\u4E0B\u7684\u4F4E\u9E23\u3002\u9ED8\u8BA4\u5173\u95ED\u3002"],"kd.sRip":["\uD30C\uBB38\uC774 \uB178\uD2B8\uC5D0 \uB2FF\uB294 \uC21C\uAC04 \uADF8 \uB178\uD2B8\uAC00 \uB0B4\uB294 \uC18C\uB9AC\uC758 \uD06C\uAE30.","How loud a note sounds at the moment the wave reaches it.","\u6CE2\u7D0B\u304C\u30CE\u30FC\u30C8\u306B\u5C4A\u3044\u305F\u77AC\u9593\u3001\u305D\u306E\u30CE\u30FC\u30C8\u304C\u9CF4\u308B\u5927\u304D\u3055\u3002","\u6D9F\u6F2A\u62B5\u8FBE\u4E00\u7BC7\u7B14\u8BB0\u65F6\uFF0C\u5B83\u54CD\u8D77\u7684\u97F3\u91CF\u3002"]},x=null;try{let o=p.get("orrery2.lang");S.indexOf(o)>=0&&(x=o)}catch(o){}if(!x){let o=(navigator.language||"").toLowerCase();x=/^ko/.test(o)?"ko":/^ja/.test(o)?"ja":/^zh/.test(o)?"zh":"en"}function A(o,d){let m=b[o],y=m?m[S.indexOf(x)]||m[0]:o;return d&&(y=y.replace(/\{(\w+)\}/g,(_,E)=>E in d?d[E]:_)),y}function F(){document.documentElement.lang=x,s.querySelectorAll("[data-i18n]").forEach(o=>{o.innerHTML=A(o.dataset.i18n)}),s.querySelectorAll("[data-i18n-title]").forEach(o=>{o.title=A(o.dataset.i18nTitle)}),s.querySelectorAll("[data-i18n-ph]").forEach(o=>{o.placeholder=A(o.dataset.i18nPh)}),s.querySelectorAll(".langsel u").forEach(o=>o.classList.toggle("on",o.dataset.l===x))}function z(o){if(!(S.indexOf(o)<0||o===x)){x=o;try{p.set("orrery2.lang",o)}catch(d){}F(),OM()}}s.querySelectorAll(".langsel u").forEach(o=>{o.onclick=()=>z(o.dataset.l)}),F();function C(o){let d=String(o).trim().slice(-1).charCodeAt(0);if(!(d>=44032&&d<=55203))return"\uB85C";let m=(d-44032)%28;return m===0||m===8?"\uB85C":"\uC73C\uB85C"}function W(o){return x==="ko"?"\u25CE "+o+C(o)+" \uC774\uB3D9":A("go.travel",{n:o})}let q=!1;function ee(o){if(q=!!o,!q)return;let d=u("boot");d.classList.add("gone"),d.style.display="none",["b-load","hint","b-clear"].forEach(m=>{u(m).style.display="none"})}let ae={open:null,hover:null};function we(o){ae.open=o&&typeof o.open=="function"?o.open:null,ae.hover=o&&typeof o.hover=="function"?o.hover:null,Z()}function he(){return!!ae.open}function Z(){let o=he();["i-open","mm-open","k-open","introopen"].forEach(d=>{let m=u(d);m&&(m.style.display=o?"":"none")})}function te(o){let d=Fe&&Fe[o];return d?d.fp||d.p:""}function ie(o,d){if(!he())return!1;if(o<0||o>=$)return rt(A("open.none")),!1;let m=!!(d&&(d.ctrlKey||d.metaKey));try{ae.open(te(o),{newLeaf:m,newWindow:m&&!!(d&&d.shiftKey)})}catch(y){return console.error("vault-orrery: host could not open note",y),rt(A("open.fail")),!1}return!0}let Y=null;function Le(){Y={exact:new Map,lower:new Map};for(let o=0;o<$;o++){let d=Fe[o];[d.fp,d.p].forEach(m=>{if(!m)return;Y.exact.has(m)||Y.exact.set(m,o);let y=m.toLowerCase();Y.lower.has(y)||Y.lower.set(y,o)})}}function Be(o){if(!o||!$)return-1;Y||Le();let d=String(o).replace(/\\/g,"/").replace(/^\.?\//,"");if(Y.exact.has(d))return Y.exact.get(d);let m=d.toLowerCase();if(Y.lower.has(m))return Y.lower.get(m);let y=d.indexOf("/");if(y>0){let _=d.slice(y+1).toLowerCase();if(Y.lower.has(_))return Y.lower.get(_)}return-1}function Oe(o,d){let m=Be(o);return m<0?!1:(d&&d.select===!0?ui(m):Lt?K.has.has(m)?ui(m):hs(m):Cu(m,!0),!0)}let Ke="",ze=-1;function ut(o){Ke=o?String(o).replace(/\\/g,"/"):"",ze=Ke?Be(Ke):-1}if(typeof dg=="undefined")throw s.querySelector("#boot").innerHTML='<h1>VAULT ORRERY</h1><h2>MISSING DEPENDENCY</h2><div id="bpick" class="ok" style="max-width:560px;line-height:1.9">'+A("vendor.missing")+"</div>",new Error("three.js not found at vendor/three.min.js");let xt={meta:{vault:"",files:0,edges:0,wiki:0,raw:0,broken:0,years:[]},cats:[],nodes:[],edges:[]},ye=xt,en=u("blog");function Dt(o,d){let m=A(o),y="\u2026".repeat(Math.max(2,30-Array.from(m).length));return"<b>\u203A</b> "+m+" "+y+" <em>"+d+"</em>"}let bt=[Dt("boot.l1","OK"),Dt("boot.l2","OK"),Dt("boot.l3","OK"),Dt("boot.l4","READY"),Dt("boot.l5",A("boot.wait"))],dt=0,Wt=setInterval(()=>{if(dt>=bt.length){clearInterval(Wt);return}en.innerHTML+=bt[dt++]+"<br>"},190),Rt=3,Tt=1e4,Ne=2.5,Ge=1.5,We=.95,at=1700,je=320,V=1,B=2.4,be=[{n:"PENTATONIC",s:[0,2,4,7,9,12,14,16,19,21]},{n:"MINOR",s:[0,2,3,5,7,8,10,12,14,15]},{n:"LYDIAN",s:[0,2,4,6,7,9,11,12,14,16]},{n:"WHOLE TONE",s:[0,2,4,6,8,10,12,14,16,18]},{n:"OPEN FIFTHS",s:[0,7,12,19,24,26,31,36,38,43]}],ge=o=>o.toFixed(2)+"\xD7",Ie=(o,d)=>o<.02?"OFF":d,Ze=[{k:"spd",g:"cosmos",label:"ORBIT SPEED",min:0,max:400,sc:100,def:.1,pin:1,fmt:ge},{k:"bri",g:"cosmos",label:"NODE GLOW",min:10,max:260,sc:100,def:1.11,pin:1,fmt:ge},{k:"lnk",g:"cosmos",label:"LINK GLOW",min:0,max:Rt*100,sc:100,def:.3,pin:1,fmt:o=>Ie(o,ge(o))},{k:"gap",g:"cosmos",label:"ORBIT GAP",min:50,max:1200,sc:100,def:5,pin:1,fmt:ge},{k:"maxNodes",g:"cosmos",label:"MAX NODES",min:500,max:Tt+500,step:500,sc:1,def:0,pin:1,i18n:"cap.label",get:()=>N.maxNodes>0?N.maxNodes:Tt+500,set:o=>{N.maxNodes=o>Tt?0:o},fmt:()=>N.maxNodes>0?String(N.maxNodes):A("cap.off")},{k:"arc",g:"cosmos",label:"ARC HEIGHT",min:0,max:Ne*100,sc:100,def:.6,fmt:o=>o<.02?"FLAT":ge(o)},{k:"ten",g:"cosmos",label:"LINK TENSION",min:0,max:100,sc:100,def:.7,fmt:o=>o.toFixed(2)},{k:"bnd",g:"cosmos",label:"LINK ROUTING",min:0,max:100,sc:100,def:.62,fmt:o=>Ie(o,o.toFixed(2))},{k:"lwd",g:"cosmos",label:"LINE WIDTH",min:60,max:400,sc:100,def:.6,fmt:o=>o.toFixed(1)+" px"},{k:"spr",g:"cosmos",label:"ORBIT SPREAD",min:30,max:800,sc:100,def:3.2,fmt:ge},{k:"sph",g:"cosmos",label:"ORBIT SHELL",min:0,max:100,sc:100,def:1,fmt:o=>o<.005?"DISC":o>.995?"SPHERE":o.toFixed(2)},{k:"szSun",g:"bodies",label:"SUN SIZE",min:30,max:300,sc:100,def:1.72,fmt:ge,apply:Ha},{k:"szSys",g:"bodies",label:"SYSTEM SIZE",min:30,max:400,sc:100,def:.98,fmt:ge,apply:Ha},{k:"szPl",g:"bodies",label:"PLANET SIZE",min:30,max:300,sc:100,def:.96,fmt:ge,apply:Ha},{k:"szMn",g:"bodies",label:"MOON SIZE",min:30,max:300,sc:100,def:.57,fmt:ge,apply:Ha},{k:"briSun",g:"bodies",label:"SUN GLOW",min:15,max:300,sc:100,def:.15,fmt:ge},{k:"briSys",g:"bodies",label:"SYSTEM GLOW",min:0,max:300,sc:100,def:.3,fmt:o=>Ie(o,ge(o))},{k:"briPl",g:"bodies",label:"PLANET GLOW",min:0,max:800,sc:100,def:.4,fmt:o=>Ie(o,ge(o))},{k:"briMn",g:"bodies",label:"MOON GLOW",min:0,max:800,sc:100,def:5.08,fmt:o=>Ie(o,ge(o))},{k:"str",g:"cosmos",label:"STARFIELD",min:0,max:200,sc:100,def:0,fmt:o=>Ie(o,ge(o)),apply:hm},{k:"zod",g:"cosmos",label:"ZODIACAL LIGHT",min:0,max:300,sc:100,def:2,fmt:o=>Ie(o,ge(o))},{k:"blm",g:"light",label:"BLOOM",min:0,max:Ge*100,sc:100,def:.55,fmt:o=>Ie(o,ge(o))},{k:"ray",g:"light",label:"SUN RAYS",min:0,max:150,sc:100,def:.53,fmt:o=>Ie(o,ge(o))},{k:"glare",g:"light",label:"SUN HALO",min:0,max:300,sc:100,def:1,fmt:o=>Ie(o,ge(o))},{k:"flr",g:"light",label:"LENS FLARE",min:0,max:200,sc:100,def:.55,fmt:o=>Ie(o,ge(o))},{k:"vei",g:"light",label:"SKY VEIL",min:0,max:120,sc:100,def:0,fmt:o=>Ie(o,ge(o)),apply:vp},{k:"cur",g:"light",label:"FILM CURVE",min:0,max:100,sc:100,def:.38,fmt:o=>Ie(o,ge(o))},{k:"sVol",g:"sound",label:"MASTER",min:0,max:150,sc:100,def:.55,fmt:o=>Ie(o,Math.round(o*100)+"%"),apply:Bp},{k:"sScale",g:"sound",label:"SCALE",min:0,max:be.length-1,sc:1,def:0,fmt:o=>be[g(o|0,0,be.length-1)].n},{k:"sDrone",g:"sound",label:"AMBIENT",min:0,max:200,sc:100,def:.35,fmt:o=>Ie(o,ge(o)),apply:Bp},{k:"sRip",g:"sound",label:"RIPPLE",min:0,max:150,sc:100,def:.5,fmt:o=>Ie(o,ge(o))}],It={};Ze.forEach(o=>{It[o.k]=o});let ft=[["cosmos","grp.cosmos"],["bodies","grp.bodies"],["light","grp.light"],["sound","grp.sound"]],j=Ze.filter(o=>o.pin).map(o=>o.k),ke={mmHop:!1,snd:!1,coreNote:"",grid:!1,tab:"cosmos",deckAt:null,litV1:1,adv:!1,legFold:!1,keysFold:!1,pin:j};Ze.forEach(o=>{ke[o.k]=o.def});let Ve={spl:.26,len:.3,grn:.14,aex:.5,sTune:0,sRoom:7.5,sEcho:.36,sEchoT:.62,grv:1.5,trl:1,tlt:0,det:1,frs:14};Object.assign(ke,Ve);let it={};try{it=JSON.parse(p.get("orrery2.set")||"{}")||{}}catch(o){}let N=Object.assign({},ke,{pin:j.slice()},it,Ve);Ze.forEach(o=>{if(o.get)return;let d=+N[o.k];N[o.k]=Number.isFinite(d)?g(d,o.min/o.sc,o.max/o.sc):o.def}),N.maxNodes=Number.isFinite(+N.maxNodes)?g(+N.maxNodes,0,Tt):ke.maxNodes,!it.litV1&&!(+it.blm||+it.cur||+it.spl||+it.len||+it.grn)&&["blm","cur"].forEach(o=>{N[o]=It[o].def}),N.litV1=1,[["lnk",.42],["str",1.2],["lnk",.2],["gap",2.81],["str",.4],["zod",1],["sDrone",0],["briSys",.59],["vei",.2]].forEach(([o,d])=>{o in it&&Math.abs(+it[o]-d)<.005&&(N[o]=It[o].def)}),typeof N.coreNote!="string"&&(N.coreNote=""),N.deckAt&&!(Number.isFinite(+N.deckAt.x)&&Number.isFinite(+N.deckAt.y)&&+N.deckAt.w>0)&&(N.deckAt=null),N.pin=Array.isArray(N.pin)?Ze.filter(o=>N.pin.indexOf(o.k)>=0).map(o=>o.k):j.slice();function st(){try{p.set("orrery2.set",JSON.stringify(N))}catch(o){}}let qt=0;function rt(o,d){let m=u("toast");m.textContent=o,m.classList.add("on"),qt=performance.now()+(d||1300)}let Dr=Math.PI*(3-Math.sqrt(5));function bn(o){let d=0;for(let m=0;m<o.length;m++)o.charCodeAt(m)===47&&d++;return d}let Fe,an,$,At,Do,ri,tc,$r,Ir,mt,zs,cu,xe,ct,O,ne,ce,oe,Re,pt,gt,lt,vt,wt,_t,ht,Ot,Zn,Jn=0,Xi=!1,kt,Yi,dn,Gn,Kt,Yt,hr,Qf,Us,ur=[],Di,nc,hu=!1,ep,pg,Gs,Ii,Ei,dr,La,Qr,Ca,Gt,Vs,Pa,Da,Ia,uu,du,fu,pu,ji,mu,En,fr,ic,Ws,qs,ka,gu,Fa,Xs,Ys,Si,vu,ci,On,mg,gg,rc,vg,yu,yg=0,tp,np,js,Io,xg,xu,Gb=0,wg=0,sc,ko,ip,ac,rp,oc,wu,pr,lc,kr,bu,mr,Ti,cc,Fo,Na,Kn,Ai=[],_u=[],No=null,hc=null,es,tn=null,bg={pos:new L(0,0,0)},uc={r0:1010,dr:430,a0:1.2,da:.108},Ho={gap:1,rg:1,step:34,cats:[]},ki=1,Zs=0,Zi=1;function Vb(o){let d=60;for(let m=0;m<Ho.cats.length;m++){let y=Ho.cats[m],_=y.a+y.b*o;_>d&&(d=_)}return Math.max((d*2.3+40)*.92,150)}function Wb(o){let d=N.gap;if(ki===d&&Zs===0)return;let m=Math.min(.05,o);Zs+=(d-ki)*42*m-Zs*8.6*m,ki+=Zs*m,Math.abs(d-ki)<5e-4&&Math.abs(Zs)<.003&&(ki=d,Zs=0),Zi=Vb(ki)/(Ho.rg||1),Mg()}let qb=26e-5,Xb=6e3,_g=4e4,sp=_g;function Mg(){let o=Math.max(600,(lt||1600)*Zi);Ft.fog.density=qb*Math.min(1,Xb/o);let d=Math.max(_g,o*3+2e4);Math.abs(d-sp)>sp*.02&&(sp=d,Ue.far=d,Ue.updateProjectionMatrix())}function Ha(){if(At&&At.forEach(o=>{if(o.R===void 0)return;let d=o.tier===0?N.szSys:1;if(o.sR=o.R*d,o.gz0!==void 0&&Ii){let m=Ii.geometry.attributes.aSize;m&&o.si!==void 0&&(m.array[o.si]=o.gz0*d,m.needsUpdate=!0)}}),!(!$||!O||!ct)){for(let o=0;o<$;o++){let d=oe[o]?oe[o].kind:"wiki";ct[o]=O[o]*(d==="core"?N.szSun:d==="moon"?N.szMn:N.szPl)}for(let o=0;o<$;o++){let d=oe[o];if(d&&d.kind==="wiki"&&d.inner0){let m=d.inner0*N.szSys;d.r0=d.r00+(m-d.inner0),d.inner=m}}for(let o=0;o<$;o++){let d=oe[o];d&&d.kind==="moon"&&d.pr&&(d.r=d.r0=d.pr*N.szPl*(3.4+d.mk*1.15))}if(qs&&Ws)for(let o=0;o<$;o++){let d=oe[o].kind;qs[o]=ct[o]*(d==="core"?16:d==="wiki"?9:7.5),Ws[o]=qs[o]}Lt&&L_()}}let dc=9;function Yb(o,d){if(!(o>.8))return 2;let m=1+Math.ceil(1.5*Math.sqrt(o));return m<2?2:m>d?d:m}let Fr=320,Nr=4,$t=new Float32Array(32*3),Mu=300,Oa=9,jb=.16,Eg=[new Pe(5495039),new Pe(16751932)],fc=[{name:"ALL",mask:[1,1]},{name:"WIKI",mask:[1,0]},{name:"SOURCE",mask:[0,1]},{name:"BRIDGE",mask:[1,1],cross:1},{name:"OFF",mask:[0,0]}],pc=0,Ce={on:!1,play:!1,u:0,rate:1,lo:0,hi:0,dated:0,playSec:42,grow:.022,flash:.05,stage:-1,marksFor:null},Js=[{u0:0,code:"VOID",k:"gen.p0"},{u0:.045,code:"IGNITION",k:"gen.p1"},{u0:.13,code:"CONDENSATION",k:"gen.p2"},{u0:.3,code:"ACCRETION",k:"gen.p3"},{u0:.6,code:"CAPTURE",k:"gen.p4"},{u0:.855,code:"NETWORK",k:"gen.p5"},{u0:.985,code:"PRESENT",k:"gen.p6"}],ap=.1,Sg=.93;function gr(o,d,m){return new Pe().setHSL(o/360,d,m)}let Tg=152,Zb=300;function Jb(o){let d=[];if(o<=0)return d;let m=(_,E)=>E?m(E,_%E):_,y=Math.max(1,Math.round(o*.382));for(;y>1&&m(y,o)!==1;)y--;for(let _=0;_<o;_++){let E=_*y%o,w=o===1?.29:E/(o-1);d.push(gr(Tg+(Zb-Tg)*w,.88-E%3*.09,.62+(E%2?.07:-.05)))}return d}function op(o){let d=(D,R,k,U)=>{let X=(D-R)*(D<R?1/k:1/U);return Math.exp(-.5*X*X)},m=0,y=0,_=0;for(let D=360;D<=830;D+=5){let R=D*1e-9,k=374183e-21/(Math.pow(R,5)*(Math.exp(.014388/(R*o))-1));m+=k*(1.056*d(D,599.8,37.9,31)+.362*d(D,442,16,26.7)-.065*d(D,501.1,20.4,26.2)),y+=k*(.821*d(D,568.8,46.9,40.5)+.286*d(D,530.9,16.3,31.1)),_+=k*(1.217*d(D,437,11.8,36)+.681*d(D,459,26,13.8))}let E=Math.max(0,3.2406*m-1.5372*y-.4986*_),w=Math.max(0,-.9689*m+1.8758*y+.0415*_),T=Math.max(0,.0557*m-.204*y+1.057*_),P=Math.max(E,w,T)||1,I=D=>(D/=P)<=.0031308?12.92*D:1.055*Math.pow(D,1/2.4)-.055;return[I(E),I(w),I(T)]}function Ba(o){let[d,m,y]=op(o),_=E=>E<=.04045?E/12.92:Math.pow((E+.055)/1.055,2.4);return[_(d),_(m),_(y)]}let Eu=[15200,8200,6600,5772,4400,3550].map(op);function Kb(){if($){if(En&&En.instanceColor){for(let o=0;o<$;o++)En.setColorAt(o,Rg.setRGB(ne[o*3],ne[o*3+1],ne[o*3+2]));En.instanceColor.needsUpdate=!0}if(Fa&&ka){for(let o=0;o<$*3;o++)ka[o]=ne[o];Fa.geometry.attributes.aColor.needsUpdate=!0}Kn&&Kn.instanceColor&&(Ai.forEach((o,d)=>Kn.setColorAt(d,Rg.setRGB(v(ne[o*3],1,.3),v(ne[o*3+1],1,.3),v(ne[o*3+2],1,.3)))),Kn.instanceColor.needsUpdate=!0)}}function $b(o){let d=Math.floor((Date.now()-o)/864e5);return d<=0?A("ago.today"):d<7?A("ago.d",{n:d}):d<31?A("ago.w",{n:Math.floor(d/7)}):d<365?A("ago.mo",{n:Math.floor(d/30)}):A("ago.y",{n:Math.floor(d/365)})}let Qb=3e4;function Ag(){let o=Date.now();if(Jn=o,!$||!Zn)return;let d=N.frs||0;if(d<.5){Zn.fill(0);return}let m=d*864e5;for(let y=0;y<$;y++){let _=Ot[y];if(!_){Zn[y]=0;continue}let E=o-_;Zn[y]=E<=0?1:E>=m?0:1-E/m}}function sL(){return Xi}let Rg=new Pe;function lp(o,d){let m=g(o,0,1)*(Eu.length-1),y=Math.min(Eu.length-2,Math.floor(m)),_=m-y,E=Eu[y],w=Eu[y+1];return(d||new Pe).setRGB(v(E[0],w[0],_),v(E[1],w[1],_),v(E[2],w[2],_))}function Lg(){let o=Math.random();return o<.62?o/.62*.52:.52+Math.pow((o-.62)/.38,1.6)*.48}let Cg={2022:gr(18,.85,.52),2023:gr(30,.88,.55),2024:gr(41,.92,.57),2025:gr(50,.9,.6),2026:gr(58,.85,.64),0:gr(258,.45,.58)},cp=gr(45,1,.72),Oo=new Set,Su=-1;function e1(o){if(!Oo.size||N.grv<.02)return;let d=Math.min(o,1/40);Oo.forEach(m=>{if(m===Su)return;let y=(6+Qf[m]*3)*N.grv,_=.7*Math.sqrt(y),E=!0;for(let w=0;w<3;w++){let T=m*3+w;hr[T]+=(-y*Yt[T]-_*hr[T])*d,Yt[T]+=hr[T]*d,(Math.abs(Yt[T])>.06||Math.abs(hr[T])>.06)&&(E=!1)}E&&(Yt[m*3]=Yt[m*3+1]=Yt[m*3+2]=0,hr[m*3]=hr[m*3+1]=hr[m*3+2]=0,Oo.delete(m))})}function Pg(o){ye=o,Fe=o.nodes,an=o.edges,$=Fe.length,wt=new Array($);for(let H=0;H<$;H++){let J=Fe[H];wt[H]=(J.n+" "+J.p+" "+(J.t||[]).join(" ")+" "+(J.pr||[]).map(Me=>Me[0]+" "+Me[1]).join(" ")).toLowerCase()}At=o.cats.filter(H=>H.dom!=="root"),Do={},At.forEach((H,J)=>{Do[H.key]=J});let d=Jb(At.reduce((H,J)=>H+(J.dom==="wiki"?1:0),0)),m=0;At.forEach(H=>{if(H.dom==="wiki")H.color=d[m],H.tier=0,m++;else{let J=parseInt(H.key.split(":")[1],10)||0;H.color=Cg[J]||Cg[0],H.tier=1,H.year=J}H.on=!0}),ri=At.filter(H=>H.tier===0),tc=At.filter(H=>H.tier===1).sort((H,J)=>(H.year||9999)-(J.year||9999)),$r=new Array($).fill(-1),Ir=Array.from({length:$},()=>[]),an.forEach(([H,J,Me])=>{Me===1&&$r[H]<0&&($r[H]=J,Ir[J].push(H))}),vt=Array.from({length:$},()=>new Set),an.forEach(([H,J])=>{H!==J&&(vt[H].add(J),vt[J].add(H))});let y=/(^|\/)(index|readme|home|moc|인덱스|목차)\.md$/i,_=H=>(Fe[H].inb|0)*40+(Fe[H].w|0)-bn(Fe[H].p)*500;if(mt=-1,N.coreNote&&(mt=Fe.findIndex(H=>H.p===N.coreNote)),mt<0&&$){let H=-1;for(let J=0;J<$;J++)y.test(Fe[J].p)&&(H<0||_(J)>_(H))&&(H=J);mt=H}if(mt<0&&$){let H=0;for(let J=1;J<$;J++)(Fe[J].inb|0)>(Fe[H].inb|0)&&(H=J);mt=H}let E={};for(let H=0;H<$;H++)H===mt||Fe[H].k==="raw"||(E[Fe[H].c]=(E[Fe[H].c]||0)+1);let w=34;ri.forEach(H=>{H.R=5.5+Math.sqrt(H.n)*1.7,H.planets=E[H.key]||0,H.orbRings=Math.max(1,Math.ceil(H.planets/6)),H.reach=H.R*3.2+H.orbRings*w*N.gap+16,H.reachA=H.R*3.2+16,H.reachB=H.orbRings*w});let P=(ri.length?Math.max.apply(null,ri.map(H=>H.reach)):60)*2.3+40,I=Math.max(P*.92,150);Ho={gap:N.gap,rg:I,step:w,cats:ri.map(H=>({a:H.R*3.2+16,b:H.orbRings*w}))},ki=N.gap,Zs=0,Zi=1;let D=0,R=0,k=I;for(;D<ri.length;){let H=I*(R+1),J=Math.max(1,Math.floor(f*H/P)),Me=Math.min(J,ri.length-D);for(let Te=0;Te<Me;Te++){let ve=ri[D+Te],re=Te/Me*f+R*.7+.3,Ee=Math.sin(re*2+R*1.3)*Math.min(30,H*.022);ve.pos=new L(Math.cos(re)*H,Ee,Math.sin(re)*H),ve.ringNo=R,ve.ringR=H}D+=Me,k=H,R++}ur=[];for(let H=0;H<R;H++)ur.push(I*(H+1));let U=[];for(let H=0;H<$;H++)Fe[H].k==="raw"&&$r[H]<0&&U.push(H);let X=U.filter(H=>Fe[H].y).sort((H,J)=>(Fe[H].d||"").localeCompare(Fe[J].d||"")),G=U.filter(H=>!Fe[H].y),Q=k+I*.85;uc={r0:Q,dr:Q*.4,a0:1.2,da:f*3.5/Math.max(24,X.length)},lt=Q+I*.9,zs={},cu=X,function(){let J=Math.max(1,X.length),Me=Math.max(3,I*.03);X.forEach((Te,ve)=>{let re=ve/J;zs[Te]={kind:"spiral",anchor:bg,r:uc.r0-re*uc.dr+(ve*17%11-5)*Me,ph:uc.a0+ve*uc.da,sp:55e-6,inc:.04+(ve*13%9-4)*.009,y:(ve*29%17-8)*Me*.55}}),G.forEach((Te,ve)=>{let re=(ve+.5)/Math.max(1,G.length);zs[Te]={kind:"shell",anchor:bg,r:lt+(ve*23%13-6)*Me*2,ph:ve*Dr,sp:24e-6,inc:Math.acos(1-2*re)*.58,y:0}}),tc.forEach(Te=>{let ve=(Te.year?X:G).filter(He=>Fe[He].c===Te.key),re=ve.length?zs[ve[Math.floor(ve.length/2)]]:null,Ee=re?re.r:lt,Ae=re?re.ph:0;Te.pos=new L(Math.cos(Ae)*Ee,(re?re.y:0)+34,Math.sin(Ae)*Ee),Te.R=3.4+Math.sqrt(Te.n)*.5})}();let le=I||400;At.forEach(H=>{let J=H.pos||new L;H.oR=Math.hypot(J.x,J.z),H.oA0=Math.atan2(J.z,J.x),H.oY=J.y,H.oSp=H.tier===1?H.year?55e-6:24e-6:48e-6*Math.pow(le/Math.max(1,H.oR),1.5)}),xe=new Float32Array($*3),ct=new Float32Array($),Di=new Float64Array($),nc=new Float32Array($),hu=!1,ne=new Float32Array($*3),oe=new Array($),Re=new Array($),pt=new Float32Array($).fill(1);let de={};for(let H=0;H<$;H++){let J=Fe[H],Me=At[Do[J.c]]||ri[0]||At[0]||{color:cp,R:6,on:!0,reach:60,orbRings:1};Re[H]=Me;let Te=Me.color,ve,re;if(H===mt)ve=34+Math.min(16,Math.log(1+J.inb)*4.5),re={kind:"core",anchor:null,r:0,y:0,sp:0,ph:0,inc:0},cp.toArray(ne,H*3);else if(J.k!=="raw"){let Ee=(de[Me.key]=(de[Me.key]||0)+1)-1,Ae=Math.floor(Ee/6),He=Ee%6,$e=(Me.R||6)*3.2,se=((Me.reach||$e+40)-$e)/Math.max(1,Me.orbRings||1);ve=2.6+Math.log(1+J.inb)*1.55+Math.log(1+J.w/120)*.7;let me=$e+.5*se,Se=$e+(Ae+.5)*se,et=Go(Me.key+"#ecc"+Ae),Ye=$e+(Ae+.5)*se+He%2*se*.16;re={kind:"wiki",anchor:Me,r:Ye,ph:He/6*f+Ae*.62,sp:22e-5*Math.pow(me/Se,1.5),ecc:Math.min(.03+(et&1023)/1024*.13,.38*se/Math.max(1,Ye)),aop:(et>>>10&1023)/1024*f,inc:Math.max(.012,.11-Ae*.016),y:(He%3-1)*4,inner:$e,step0:se,gapA:se-w*N.gap,inner0:$e,r00:$e+(Ae+.5)*se+He%2*se*.16},Te.toArray(ne,H*3)}else if($r[H]>=0){let Ee=$r[H],Ae=Ir[Ee],He=Ae.indexOf(H);ve=1.05+Math.log(1+J.w/90)*.42;let $e=2.6+Math.log(1+Fe[Ee].inb)*1.55+Math.log(1+Fe[Ee].w/120)*.7,se=Go(J.p+"#ecc"),me=$e*3.4+He%4*$e*1.15;re={kind:"moon",anchorNode:Ee,ecc:Math.min(.02+(se&1023)/1024*.12,.38*$e*1.15/Math.max(1,me)),aop:(se>>>10&1023)/1024*f,pr:$e,mk:He%4,r:$e*3.4+He%4*$e*1.15,ph:He/Math.max(3,Ae.length)*f,sp:.0016*Math.pow(3.4/(3.4+He%4*1.15),1.5),inc:-(((Go(Fe[Ee].p+"#r")&255)/255-.5)*.62)+((se>>>20&63)/64-.5)*.055,y:0},Te.clone().lerp(new Pe(16773328),.18).toArray(ne,H*3)}else ve=1.5+Math.log(1+J.w/90)*.5,re=zs[H],Te.toArray(ne,H*3);ct[H]=ve,re.r0=re.r,Di[H]=re.ph||0,oe[H]=re}{let H=new Map;for(let Me=0;Me<$;Me++){let Te=oe[Me];if(!Te||Te.kind==="core")continue;let ve=Te.kind==="moon"?"m"+Te.anchorNode:Te.kind==="wiki"?"w"+(Te.anchor&&Te.anchor.key):"a",re=H.get(ve)||0;H.set(ve,re+1),Te.sK=re}let J=new Map;H.forEach((Me,Te)=>J.set(Te,Me));for(let Me=0;Me<$;Me++){let Te=oe[Me];if(!Te||Te.kind==="core")continue;let ve=Te.kind==="moon"?"m"+Te.anchorNode:Te.kind==="wiki"?"w"+(Te.anchor&&Te.anchor.key):"a";Te.sN=J.get(ve)||1,iM(Te,Te.sK)}}O=ct.slice(),Yt=new Float32Array($*3),hr=new Float32Array($*3),Qf=new Float32Array($);for(let H=0;H<$;H++){let J=oe[H];Qf[H]=J.kind==="core"?26:J.kind==="moon"?2.4+ct[J.anchorNode]*1.9:J.kind==="wiki"?2+(Re[H].R||6)*.9:1}_t=new Float64Array($),ht=new Uint8Array($);let fe=H=>{let J=/(\d{4})-(\d{2})-(\d{2})/.exec(H||"");return J?Date.UTC(+J[1],+J[2]-1,+J[3]):0};for(let H=0;H<$;H++)_t[H]=fe(Fe[H].d);for(let H=0;H<$;H++){if(_t[H])continue;let J=0,Me=Te=>{let ve=_t[Te];ve&&(!J||ve<J)&&(J=ve)};(Ir[H]||[]).forEach(Me),!J&&vt[H]&&vt[H].forEach(Me),_t[H]=J}Ce.lo=1/0,Ce.hi=-1/0;for(let H=0;H<$;H++)_t[H]&&(_t[H]<Ce.lo&&(Ce.lo=_t[H]),_t[H]>Ce.hi&&(Ce.hi=_t[H]));isFinite(Ce.lo)||(Ce.lo=0,Ce.hi=0),Ce.dated=0;for(let H=0;H<$;H++)_t[H]&&Ce.dated++;Ot=new Float64Array($),Zn=new Float32Array($),Xi=!1;for(let H=0;H<$;H++)Ot[H]=+Fe[H].mt||0,Ot[H]&&(Xi=!0);Ag(),ce=ne.slice(),Ce.u=0,Ce.play=!1,Ce.stage=-1,Ce.marksFor=null,kt=new Float32Array($),Gn=new Float32Array($).fill(1),Kt=new Float32Array($);{let H=Math.max(1,Ce.hi-Ce.lo),J=new Float64Array($);for(let re=0;re<$;re++)J[re]=_t[re]||Ce.lo+($>1?re/($-1):0)*H;dn=[];for(let re=0;re<$;re++)re!==mt&&dn.push(re);dn.sort((re,Ee)=>J[re]-J[Ee]||re-Ee);let Me=dn.length,Te=Sg-ap;dn.forEach((re,Ee)=>{let Ae=Me>1?Ee/(Me-1):0,He=(J[re]-Ce.lo)/H;kt[re]=ap+Te*(Ae*.66+He*.34)}),mt>=0&&mt<$&&(kt[mt]=.052),At.forEach(re=>{re.genT=1});for(let re=0;re<$;re++){if(re===mt)continue;let Ee=Re[re];Ee&&kt[re]<Ee.genT&&(Ee.genT=kt[re])}At.forEach(re=>{re.genT=re.genT>=1?ap:Math.max(.078,re.genT-.014)});for(let re=0;re<$;re++){if(re===mt)continue;oe[re].kind==="wiki"&&Re[re]&&(kt[re]=Math.max(kt[re],Re[re].genT+.006))}for(let re=0;re<$;re++){let Ee=oe[re];Ee.kind==="moon"&&(kt[re]=Math.max(kt[re],kt[Ee.anchorNode]+.009))}for(let re=0;re<$;re++)kt[re]=Math.min(kt[re],Sg);let ve=an.length;Yi=new Float32Array(Math.max(1,ve));for(let re=0;re<ve;re++){let Ee=an[re][0],Ae=an[re][1],He=Math.max(kt[Ee]||0,kt[Ae]||0);Yi[re]=Math.min(.995,He+(.965-He)*.34+re%11*.0016)}}Oo.clear(),Su=-1}function Dg(o){let d=vt[o]?vt[o].size:0,m=Ir[o]?Ir[o].length:0,y=0;return vt[o]&&vt[o].forEach(_=>{y+=Ir[_].length}),{links:d,moons:m,far:y}}let Hr=u("gl"),Xt=new Qt({canvas:Hr,antialias:!0,alpha:!1,powerPreference:"high-performance"});Xt.setPixelRatio(Math.min(devicePixelRatio,2)),Xt.setClearColor(132106,1),Xt.outputEncoding=Aa,Xt.info.autoReset=!1;let pe={ok:!1,rt:null,a:null,a2:null,a3:null,b:null,c:null,bright:null,blur:null,comp:null,ray:null,quad:null,cam:null,scene:null,w:0,h:0},t1=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,n1=`
uniform sampler2D tSrc; uniform float uThresh; uniform float uKnee;
varying vec2 vUv;
void main(){
  vec3 c = min(texture2D(tSrc, vUv).rgb, vec3(3.0));
  float l = max(c.r, max(c.g, c.b));
  float k = smoothstep(uThresh, uThresh + uKnee, l);
  /* ---- only the part that is over, not the whole pixel ----
     The mask alone was the bug that kept this switched off by default, and
     it took turning it on over a real vault to see it. "c * k" passes the
     *entire* pixel once it crosses, so a mid-grey region that gets over the
     line contributes all of itself \u2014 and the sky is full of exactly that:
     the galaxy's band, a nebula complex, the dust disk, four thousand
     starfield points. None of them is bright, all of them are over, and
     three chained blurs spread their sum across the whole frame. What came
     out was empty space lifted to grey \u2014 the one thing this picture cannot
     have, and worse the further the effect was turned up.

     What a lens actually spills is the light in excess of what the sensor
     could hold, so subtract the threshold rather than gate on it. A pixel
     just over the line now contributes almost nothing and a star's core
     still contributes most of itself, which is the difference between
     veiling glare and a grey wash. The knee stays on top of it, doing the
     job it was always for: no visible edge where the two regimes meet. */
  float over = max(l - uThresh, 0.0);
  gl_FragColor = vec4(c * (k * over / max(l, 1e-4)), 1.0);
}`,i1=`
uniform sampler2D tSrc; uniform vec2 uDir;
varying vec2 vUv;
void main(){
  vec3 s = texture2D(tSrc, vUv).rgb * 0.2270270270;
  s += texture2D(tSrc, vUv + uDir * 1.3846153846).rgb * 0.3162162162;
  s += texture2D(tSrc, vUv - uDir * 1.3846153846).rgb * 0.3162162162;
  s += texture2D(tSrc, vUv + uDir * 3.2307692308).rgb * 0.0702702703;
  s += texture2D(tSrc, vUv - uDir * 3.2307692308).rgb * 0.0702702703;
  gl_FragColor = vec4(s, 1.0);
}`,r1=`
uniform sampler2D tSrc; uniform vec2 uSun; uniform float uDecay, uWeight;
varying vec2 vUv;
void main(){
  vec2 uv = vUv;
  /* not named "step": that is a built-in, and a variable shadowing one is
     legal GLSL that some drivers still refuse to compile */
  vec2 dlt = (uv - uSun) * 0.0355;
  float ill = 1.0;
  vec3 s = vec3(0.0);
  for (int i = 0; i < 24; i++) {
    uv -= dlt;
    s += texture2D(tSrc, clamp(uv, 0.0, 1.0)).rgb * ill;
    ill *= uDecay;
  }
  /* the far side of the frame is not lit by a source at the near side */
  float fall = clamp(1.0 - length(vUv - uSun) * 0.62, 0.0, 1.0);
  gl_FragColor = vec4(s * uWeight * fall * fall, 1.0);
}`,s1=`
uniform sampler2D tSrc; uniform vec2 uRes;
varying vec2 vUv;
float luma(vec3 c){ return dot(c, vec3(0.299, 0.587, 0.114)); }
void main(){
  vec2 px = 1.0 / uRes;
  vec3 rgbM = texture2D(tSrc, vUv).rgb;
  float lM  = luma(rgbM);
  float lNW = luma(texture2D(tSrc, vUv + vec2(-1.0, -1.0) * px).rgb);
  float lNE = luma(texture2D(tSrc, vUv + vec2( 1.0, -1.0) * px).rgb);
  float lSW = luma(texture2D(tSrc, vUv + vec2(-1.0,  1.0) * px).rgb);
  float lSE = luma(texture2D(tSrc, vUv + vec2( 1.0,  1.0) * px).rgb);
  float lMin = min(lM, min(min(lNW, lNE), min(lSW, lSE)));
  float lMax = max(lM, max(max(lNW, lNE), max(lSW, lSE)));
  if (lMax - lMin < max(0.0312, lMax * 0.125)) { gl_FragColor = vec4(rgbM, 1.0); return; }
  vec2 dir = vec2(-((lNW + lNE) - (lSW + lSE)), ((lNW + lSW) - (lNE + lSE)));
  float dirReduce = max((lNW + lNE + lSW + lSE) * 0.03125, 0.0078125);
  float rcp = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
  dir = clamp(dir * rcp, -8.0, 8.0) * px;
  vec3 rgbA = 0.5 * (texture2D(tSrc, vUv + dir * (1.0 / 3.0 - 0.5)).rgb
                   + texture2D(tSrc, vUv + dir * (2.0 / 3.0 - 0.5)).rgb);
  vec3 rgbB = rgbA * 0.5 + 0.25 * (texture2D(tSrc, vUv + dir * -0.5).rgb
                                 + texture2D(tSrc, vUv + dir *  0.5).rgb);
  float lB = luma(rgbB);
  gl_FragColor = vec4((lB < lMin || lB > lMax) ? rgbA : rgbB, 1.0);
}`,a1=`
uniform sampler2D tSrc; uniform vec2 uRes;
varying vec2 vUv;
vec3 chroma(vec2 uv, vec2 dir, float amt) {
  return vec3(texture2D(tSrc, uv + dir * amt).r,
              texture2D(tSrc, uv).g,
              texture2D(tSrc, uv - dir * amt).b);
}
void main(){
  vec2 asp = vec2(uRes.x / uRes.y, 1.0);
  vec2 uv = 1.0 - vUv;
  vec2 toC = (0.5 - uv);
  vec2 dir = normalize(toC * asp + 1e-5);
  vec3 acc = vec3(0.0);
  vec2 g = uv;
  const float spacing = 0.30;
  vec3 tints[4];
  tints[0] = vec3(0.55, 0.85, 1.00);
  tints[1] = vec3(0.70, 1.00, 0.75);
  tints[2] = vec3(1.00, 0.75, 0.55);
  tints[3] = vec3(0.80, 0.65, 1.00);
  for (int i = 0; i < 4; i++) {
    g = uv + toC * spacing * float(i);
    float w = pow(max(0.0, 1.0 - length((0.5 - g) * asp) / 0.75), 5.0);
    acc += chroma(g, dir, 0.004 + 0.003 * float(i)) * w * tints[i] * (0.9 - 0.15 * float(i));
  }
  /* the halo: the source seen at a fixed angle off the axis, brightest
     where the ring crosses the frame's own middle distance */
  vec2 hv = dir * 0.36 / asp;
  vec2 hp = uv + hv;
  float hw = pow(max(0.0, 1.0 - abs(length((0.5 - hp) * asp) - 0.36) / 0.09), 3.0);
  acc += chroma(hp, dir, 0.010) * hw * vec3(0.75, 0.85, 1.0) * 0.9;
  gl_FragColor = vec4(acc, 1.0);
}`,o1=`
uniform sampler2D tSrc; uniform vec2 uDir; uniform vec3 uTint;
varying vec2 vUv;
void main(){
  vec3 s = vec3(0.0);
  float wsum = 0.0;
  for (int i = -8; i <= 8; i++) {
    float w = 1.0 - abs(float(i)) / 9.0;
    s += texture2D(tSrc, vUv + uDir * float(i)).rgb * w;
    wsum += w;
  }
  gl_FragColor = vec4(s / wsum * uTint, 1.0);
}`,l1=`
uniform sampler2D tScene; uniform sampler2D tRay;
uniform sampler2D tB1; uniform sampler2D tB2; uniform sampler2D tB3;
uniform sampler2D tFlare; uniform sampler2D tAnam; uniform sampler2D tNoise;
uniform float uAmt, uRay, uFlare;
uniform float uCurve, uSplit, uLens, uGrain, uTime, uExpo;
uniform vec2 uRes;
varying vec2 vUv;
void main(){
  vec2 d = vUv - 0.5;
  /* ---- the lens, and why half of it is up here ----
     A real lens cannot bring three wavelengths to the same ring of glass, so
     the corners of every photograph have colour separating in them and the
     centre does not. The separation is cubic in radius rather than linear:
     it is nothing at all across the middle half of the frame and then
     arrives quickly, which is what keeps it reading as glass rather than as
     a broken decoder.

     It samples the *scene*, before the bloom is added, because that is where
     a lens sits \u2014 light goes through the glass and then into the sensor, and
     the glow is something the sensor does. Doing it at the end would put the
     fringe on the bloom's own edges, which are already soft and have no
     edges to fringe. The other half of the lens \u2014 the vignette \u2014 is at the
     bottom for the same reason in reverse: falloff is the aperture cutting
     light, so it takes everything with it. */
  vec3 c;
  if (uLens > 0.001) {
    vec2 off = d * dot(d, d) * uLens * 0.0035;
    c = vec3(texture2D(tScene, vUv + off).r,
             texture2D(tScene, vUv).g,
             texture2D(tScene, vUv - off).b);
  } else c = texture2D(tScene, vUv).rgb;
  /* ---- three widths, added ----
     The chain used to keep only its last and widest stage, and a chain of
     gaussians is a gaussian: a soft round mound with nothing outside it.
     That is not what a lens does. Veiling glare is a power law \u2014 the same
     one the star's own glare sprite is drawn from, because it is the same
     physics \u2014 and a power law has a bright centre *and* a tail that carries
     a long way, which is exactly what a single gaussian of any width cannot
     have at once. Widen it and the core goes soft; tighten it and the light
     stops at the object.

     A sum of gaussians of increasing width is the standard way to build one,
     and the chain was already computing them: it just threw the first two
     away. Keeping all three costs two render targets and nothing in passes.
     The weights sum to one, so the total light added is what it always was
     and only its distribution has moved \u2014 a hot centre, a soft middle, and a
     spill that reaches across the frame. */
  /* The widest stage separates by colour toward the corners: the spill
     that travelled furthest through the glass is the spill the glass has
     dispersed most, red outside and blue inside, which is what the rim of
     a real glare looks like. The tight stages stay put. */
  vec2 rd = d * 0.018 * uFlare;
  vec3 b3 = vec3(texture2D(tB3, vUv + rd).r, texture2D(tB3, vUv).g, texture2D(tB3, vUv - rd).b);
  vec3 spill = texture2D(tB1, vUv).rgb * 0.34
             + texture2D(tB2, vUv).rgb * 0.30
             + b3 * 0.36;
  /* the front element is not clean. Two octaves of the sky's own noise,
     multiplied, so the smudges are sparse and sharp-edged, and they catch
     the spill and nothing else: a dark frame stays dark. */
  float dirt = texture2D(tNoise, vUv * vec2(2.6, 1.5) + 0.13).r
             * texture2D(tNoise, vUv * vec2(0.9, 0.6) + 0.71).g;
  dirt = smoothstep(0.30, 0.62, dirt);
  c += spill * uAmt * (1.0 + dirt * uFlare * 2.6);
  c += texture2D(tRay,   vUv).rgb * uRay;
  c += (texture2D(tFlare, vUv).rgb + texture2D(tAnam, vUv).rgb) * uFlare;
  /* ---- the exposure ----
     Everything that reached the sensor, scaled by how long the shutter was
     open. Before the curve, because the curve is the sensor's shoulder and
     the shoulder is what a longer exposure runs into; after the glow and
     the shafts, because they are light too and a camera cannot open up on
     the scene without opening up on the glare. One for a frame with a
     source in it \u2014 see exposureStep. */
  c *= uExpo;
  /* ---- the curve ----
     Everything above is additive, and additive light in an eight-bit buffer
     ends at 1.0 whether it arrived there gently or at four times over. That
     hard stop is the single thing that made this read as rendered: a star
     core, a dense knot of links and the sun's own disc all clip to the same
     flat white, and a flat white patch is paint, not light. A sensor has a
     shoulder instead \u2014 the brighter it gets the less each further photon
     moves it, so highlights keep their shape all the way up.

     Below the knee nothing happens at all. That is the point of doing it
     this way rather than with one of the filmic curves that lift the blacks
     as well: the dark here is not a lack of exposure, it is empty space, and
     a curve that greys it out is describing a room with the lights off.
     The shoulder is exponential, which is the one shape that meets the
     straight part with the same slope \u2014 so there is no visible seam at the
     knee for something drifting across it to pop through.

     It cannot reach 1.0, only approach it, so the clip is gone rather than
     moved: no amount of light coming in produces a flat patch going out. */
  if (uCurve > 0.001) {
    /* ---- the film ----
       The shoulder used to be an exponential above a knee, which kept the
       dark untouched and folded the top. It is the ACES fitted curve now
       (Narkowicz 2015), the response the film industry standardised on
       because it is the closest short formula to how a print reacts:
       a toe that keeps black black, a straight middle, and a shoulder that
       takes four times over-exposure to a highlight with shape. It is
       applied to the half-float signal, which is what it was made for, and
       the knob is still how far toward it the picture goes. */
    const float A = 2.51, B = 0.03, C = 2.43, D = 0.59, E = 0.14;
    vec3 x = c * 0.92;
    vec3 film = clamp((x * (A * x + B)) / (x * (C * x + D) + E), 0.0, 1.0);
    c = mix(c, film, uCurve);
    vec3 k = vec3(0.72);
    vec3 over = max(c - k, 0.0);
    /* min(c, k) and not k. Below the knee "over" is zero, so the shoulder
       term is zero and the whole expression is whatever the straight part
       says \u2014 which has to be the pixel itself, and was the knee. Every value
       under 0.72 came out *at* 0.72 and was then mixed back toward itself by
       uCurve, so empty space at rgb(3,5,12) left this at rgb(72,73,77): the
       curve that was written to leave the blacks alone was lifting them, and
       the further it was turned up the greyer the sky got.

       It never showed because the knob shipped at zero. Turning the grade on
       by default is what found it, which is the argument for shipping the
       look you mean people to see rather than the one that cannot be wrong.

       Both halves have slope one where they meet \u2014 d/dc of min(c,k) is 1
       below and 0 above, and the shoulder's is 0 below and 1 at the knee \u2014
       so the join is still seamless, which is the property the exponential
       was chosen for. */
    vec3 rolled = min(c, k) + (1.0 - k) * (1.0 - exp(-over / (1.0 - k)));
    c = mix(c, rolled, uCurve);
  }
  /* ---- the ceiling ----
     The scene buffer is half float now, so light arrives here above 1.0,
     and the curve at less than full strength leaves some of that through.
     A second shoulder, high and always on: nothing under 0.86 is touched,
     and nothing coming in produces a flat patch going out \u2014 a core at four
     lands under a core at two, which is the point of having the bits. The
     same exponential as the curve, so the join has slope one. */
  {
    vec3 k2 = vec3(0.86);
    vec3 ov = max(c - k2, 0.0);
    c = min(c, k2) + (1.0 - k2) * (1.0 - exp(-ov / (1.0 - k2)));
  }
  /* ---- the split ----
     Shadows cold, highlights warm. Every emulsion ever made does this and
     every colourist since has kept doing it, because the eye reads warm-near
     and cool-far without being told \u2014 it is the same inference it makes
     about a fire in a blue dusk, and it separates two things at the same
     distance on the screen into two distances in the head.

     A multiply rather than a mix toward a colour, so it cannot add light to
     something that has none. Empty space has luminance zero, gets a tint of
     one times zero, and stays exactly as black as it was. */
  if (uSplit > 0.001) {
    float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
    vec3 tint = mix(vec3(0.90, 0.97, 1.10), vec3(1.09, 1.01, 0.90),
                    smoothstep(0.05, 0.62, lum));
    c *= mix(vec3(1.0), tint, uSplit);
  }
  /* ---- the lens, part two: the falloff ----
     Quadratic and quartic together rather than either alone. The quadratic
     term is the gentle darkening across the whole frame that nobody notices
     and everybody feels; the quartic only arrives in the corners, which is
     where a real aperture actually runs out of glass. One term on its own is
     either a barely-there wash or a black ring. */
  if (uLens > 0.001) {
    float r2 = dot(d, d);
    c *= 1.0 - uLens * (r2 * 0.34 + r2 * r2 * 0.55);
  }
  /* ---- the grain ----
     A floor of noise, and it is here to stop banding rather than to be seen.
     A dark gradient across eight bits is a staircase of flat steps, and the
     steps are exactly what the eye is best at finding; a little noise makes
     the boundary between two levels a dithered edge instead of a line, and
     the picture reads as having more levels than it has.

     Strongest in the shadows and gone by the highlights \u2014 which is both
     where the banding is and, as it happens, where film's own grain shows.
     Signed and centred on zero, so it dithers rather than fogs: the average
     of the noise is nothing added, which keeps empty space empty.

     Scaled by the pixel grid rather than by the uv, so the grain is the same
     size on a small window and a large one instead of being stretched into
     blotches, and moved by the clock so it is film rather than a dirty
     sensor \u2014 a static pattern reads as something wrong with the screen. */
  if (uGrain > 0.001) {
    float n = fract(sin(dot(vUv * uRes + uTime, vec2(12.9898, 78.233))) * 43758.5453);
    float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
    c += (n - 0.5) * uGrain * 0.048 * (1.0 - smoothstep(0.0, 0.60, lum));
  }
  gl_FragColor = vec4(c, 1.0);
}`,c1=`
uniform sampler2D tSrc; uniform vec2 uCell;
varying vec2 vUv;
void main(){
  vec2 o = floor(vUv / uCell) * uCell;
  float s = 0.0, m = 0.0;
  for (int y = 0; y < 8; y++)
    for (int x = 0; x < 8; x++) {
      vec2 uv = o + uCell * (vec2(float(x), float(y)) + 0.5) / 8.0;
      vec3 c = texture2D(tSrc, uv).rgb;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      s += l; m = max(m, l);
    }
  gl_FragColor = vec4(m, s / 64.0, 0.0, 1.0);
}`,Fi={gain:1,target:1,buf:new Uint8Array(16*16*4),at:0,lastT:0};function h1(o){let d=N.aex;if(d<=.02||!pe.probe){Fi.gain=Fi.target=1;return}let m=Math.min(.1,(o-(Fi.lastT||o))*.001);if(Fi.lastT=o,!(Fi.at++&3)){pe.probe.uniforms.tSrc.value=pe.rt.texture,ts(pe.probe,pe.pr),Xt.readRenderTargetPixels(pe.pr,0,0,16,16,Fi.buf);let y=0;for(let E=0;E<256;E++)Fi.buf[E*4]>y&&(y=Fi.buf[E*4]);let _=y/255;Fi.target=g(.62/Math.max(_,.01),1,1+2.4*d)}Fi.gain=v(Fi.gain,Fi.target,1-Math.exp(-m/.9))}function u1(){if(pe.scene)return;let o=d=>new gn({vertexShader:t1,fragmentShader:d,depthTest:!1,depthWrite:!1,uniforms:{}});pe.bright=o(n1),pe.bright.uniforms={tSrc:{value:null},uThresh:{value:.48},uKnee:{value:.4}},pe.blur=o(i1),pe.blur.uniforms={tSrc:{value:null},uDir:{value:new _e}},pe.ray=o(r1),pe.ray.uniforms={tSrc:{value:null},uSun:{value:new _e(.5,.5)},uDecay:{value:.945},uWeight:{value:.052}},pe.comp=o(l1),pe.comp.uniforms={tScene:{value:null},tRay:{value:null},tB1:{value:null},tB2:{value:null},tB3:{value:null},tFlare:{value:null},tAnam:{value:null},tNoise:{value:null},uAmt:{value:.6},uRay:{value:0},uFlare:{value:0},uCurve:{value:0},uSplit:{value:0},uLens:{value:0},uGrain:{value:0},uTime:{value:0},uExpo:{value:1},uRes:{value:new _e(1,1)}},pe.flare=o(a1),pe.flare.uniforms={tSrc:{value:null},uRes:{value:new _e(1,1)}},pe.anam=o(o1),pe.anam.uniforms={tSrc:{value:null},uDir:{value:new _e},uTint:{value:new L(.45,.68,1)}},pe.fxaa=o(s1),pe.fxaa.uniforms={tSrc:{value:null},uRes:{value:new _e(1,1)}},pe.probe=o(c1),pe.probe.uniforms={tSrc:{value:null},uCell:{value:new _e(1/16,1/16)}},pe.pr=new Ln(16,16,{minFilter:Rn,magFilter:Rn,format:oi,depthBuffer:!1,stencilBuffer:!1}),pe.quad=new Et(new Jr(2,2),pe.bright),pe.quad.frustumCulled=!1,pe.scene=new Is,pe.scene.add(pe.quad),pe.cam=new Ps}function Ig(o,d){if(u1(),pe.w===o&&pe.h===d&&pe.rt)return;[pe.rt,pe.a,pe.a2,pe.a3,pe.b,pe.c,pe.f,pe.g,pe.out].forEach(E=>{E&&E.dispose()}),pe.hdr=!!(Xt.capabilities&&Xt.capabilities.isWebGL2);let m={minFilter:jt,magFilter:jt,format:oi,depthBuffer:!0,stencilBuffer:!1,type:pe.hdr?fo:Ta};pe.rt=new Ln(o,d,m),pe.rt.texture.encoding=Aa;let y=Math.max(1,o>>1),_=Math.max(1,d>>1);pe.a=new Ln(y,_,Object.assign({depthBuffer:!1},m)),pe.a2=new Ln(y,_,Object.assign({depthBuffer:!1},m)),pe.a3=new Ln(y,_,Object.assign({depthBuffer:!1},m)),pe.b=new Ln(y,_,Object.assign({depthBuffer:!1},m)),pe.c=new Ln(y,_,Object.assign({depthBuffer:!1},m)),pe.f=new Ln(y,_,Object.assign({depthBuffer:!1},m)),pe.g=new Ln(y,_,Object.assign({depthBuffer:!1},m)),pe.out=new Ln(o,d,{minFilter:jt,magFilter:jt,format:oi,depthBuffer:!1,stencilBuffer:!1}),pe.w=o,pe.h=d,pe.ok=!0,[pe.a,pe.a2,pe.a3,pe.b,pe.c,pe.f,pe.g].forEach(E=>{Xt.setRenderTarget(E),Xt.clear()}),Xt.setRenderTarget(null)}function ts(o,d){pe.quad.material=o,Xt.setRenderTarget(d),Xt.clear(),Xt.render(pe.scene,pe.cam)}let hp=new L;function d1(){return!$||!Gt||!Gt.visible||(hp.copy(Gt.position).project(Ue),hp.z>1)?null:hp}function up(){Xt.info.reset();let o=N.blm,d=N.ray>.02?d1():null,m=0;if(d){let T=g(1.9-Math.max(Math.abs(d.x),Math.abs(d.y)),0,1),P=g(Ue.position.distanceTo(Gt.position)/((ct[mt]||17)*34)-.12,0,1);m=N.ray*T*P*P}let y=Math.max(N.cur,N.spl,N.len,N.grn,N.aex);if(o<=.02&&m<=.02&&y<=.02||!pe.ok)return Xt.setRenderTarget(null),Xt.render(Ft,Ue),!1;Xt.setRenderTarget(pe.rt),Xt.clear(),Xt.render(Ft,Ue),h1(performance.now());let _=o>.02||m>.02;if(_){pe.bright.uniforms.tSrc.value=pe.rt.texture,ts(pe.bright,pe.a);let T=pe.a.width,P=pe.a.height,I=[1,3,7],D=[pe.a,pe.a2,pe.a3],R=pe.a;for(let k=0;k<I.length;k++){let U=I[k];pe.blur.uniforms.tSrc.value=R.texture,pe.blur.uniforms.uDir.value.set(U/T,0),ts(pe.blur,pe.b),pe.blur.uniforms.tSrc.value=pe.b.texture,pe.blur.uniforms.uDir.value.set(0,U/P),ts(pe.blur,D[k]),R=D[k]}}let E=_&&N.flr>.02?N.flr:0;if(E>0){let T=pe.a.width,P=pe.a.height;pe.flare.uniforms.tSrc.value=pe.a3.texture,pe.flare.uniforms.uRes.value.set(T,P),ts(pe.flare,pe.f),pe.anam.uniforms.tSrc.value=pe.a.texture,pe.anam.uniforms.uDir.value.set(2.2/T,0),ts(pe.anam,pe.b),pe.anam.uniforms.tSrc.value=pe.b.texture,pe.anam.uniforms.uDir.value.set(7/T,0),ts(pe.anam,pe.g)}m>.02&&(pe.ray.uniforms.tSrc.value=pe.a3.texture,pe.ray.uniforms.uSun.value.set(d.x*.5+.5,d.y*.5+.5),ts(pe.ray,pe.c));let w=pe.comp.uniforms;return w.tScene.value=pe.rt.texture,w.tB1.value=pe.a.texture,w.tB2.value=pe.a2.texture,w.tB3.value=pe.a3.texture,w.tRay.value=pe.c.texture,w.uAmt.value=_?o:0,w.uRay.value=m>.02?m:0,w.tFlare.value=pe.f.texture,w.tAnam.value=pe.g.texture,w.tNoise.value=gp(),w.uFlare.value=E,w.uCurve.value=N.cur,w.uSplit.value=N.spl,w.uLens.value=N.len,w.uGrain.value=N.grn,w.uExpo.value=Fi.gain,w.uTime.value=performance.now()*.001%100,w.uRes.value.set(pe.w||1,pe.h||1),ts(pe.comp,pe.out),pe.fxaa.uniforms.tSrc.value=pe.out.texture,pe.fxaa.uniforms.uRes.value.set(pe.w||1,pe.h||1),pe.quad.material=pe.fxaa,Xt.setRenderTarget(null),Xt.render(pe.scene,pe.cam),!0}let Ft=new Is;Ft.fog=new po(132106,26e-5);let Ue=new An(52,1,.6,4e4),f1=`
attribute float aSide;
attribute vec3 aColor;
varying vec3 vCol;
varying float vS;
varying float vZ;
void main(){
  vCol = aColor; vS = aSide;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vZ = -mv.z;
  gl_Position = projectionMatrix * mv;
}`,kg=2.2,p1=`
uniform float uOpacity, uFogD;
varying vec3 vCol;
varying float vS;
varying float vZ;
void main(){
  /* distance across the ribbon in units of the half-width that was asked
     for, so s = 1.0 is the edge of the line the knob describes and the strip
     itself runs out at s = RIB_PAD */
  float s = abs(vS) * ${kg.toFixed(3)};
  /* flat-topped, and through half at s = 1: a sixth power is square enough
     to read as a line with an edge rather than as a smear with a middle */
  float core  = 1.0 / (1.0 + pow(s, 6.0));
  float glare = exp(-s * s * 0.55);
  float a = (core * ${.4181.toFixed(4)} + glare * ${.2832.toFixed(4)}) * uOpacity;
  /* the pad is there for the glare to fall off inside, not to be shaded to
     the last thousandth: past this the fragment costs more than it shows */
  if (a < 0.0015) discard;
  float f = clamp(1.0 - exp(-uFogD * uFogD * vZ * vZ), 0.0, 1.0);
  gl_FragColor = vec4(vCol * a * (1.0 - f), 1.0);
}`,mc=[];function dp(o){let d=new gn({uniforms:{uOpacity:{value:o},uFogD:{value:0}},vertexShader:f1,fragmentShader:p1,transparent:!0,depthWrite:!1,blending:Vt,side:ii});return mc.push(d),d}function m1(){let o=Ft.fog?Ft.fog.density:0;for(let d=0;d<mc.length;d++)mc[d].uniforms.uFogD.value=o}function fp(o,d){let m=o*d*2,y=new Float32Array(m*3),_=new Float32Array(m*3),E=new Float32Array(m);for(let D=0;D<m;D++)E[D]=D&1?1:-1;let w=m>65535?Uint32Array:Uint16Array,T=new w(o*(d-1)*6),P=0;for(let D=0;D<o;D++){let R=D*d*2;for(let k=0;k<d-1;k++){let U=R+k*2;T[P++]=U,T[P++]=U+1,T[P++]=U+2,T[P++]=U+1,T[P++]=U+3,T[P++]=U+2}}let I=new Qe;return I.setAttribute("position",new Xe(y,3)),I.setAttribute("aColor",new Xe(_,3)),I.setAttribute("aSide",new Xe(E,1)),I.setIndex(new Xe(T,1)),{geo:I,pos:y,col:_,verts:m,perStrip:d*2,idxPerStrip:(d-1)*6}}function Tu(o,d,m,y,_,E,w,T,P,I,D,R,k,U,X,G){let Q=T*R-P*D,le=P*I-w*R,de=w*D-T*I,fe=Math.sqrt(Q*Q+le*le+de*de),H=k*kg;if(fe>1e-9){let Me=H/fe;Q*=Me,le*=Me,de*=Me}else Q=H,le=0,de=0;let J=m*3;o[J]=y-Q,o[J+1]=_-le,o[J+2]=E-de,d[J]=U,d[J+1]=X,d[J+2]=G,o[J+3]=y+Q,o[J+4]=_+le,o[J+5]=E+de,d[J+3]=U,d[J+4]=X,d[J+5]=G}let g1=()=>N.lwd/ke.lwd,v1=new Ro(4219007,.13);Ft.add(v1);let Au=new To(16767392,.55,0,1.6);Au.position.set(0,0,0),Ft.add(Au);let pp=new Ma(7851263,.12);pp.position.set(1,.6,.4),Ft.add(pp);let Fg=new Ma(2375775,.06);Fg.position.set(-.6,-.8,-.3),Ft.add(Fg);let y1=1.55;function Ng(o,d){o.vertexShader=(d?`attribute vec4 aStar; attribute vec4 aStarCol; attribute vec4 aOcc; attribute float aOccS; attribute vec4 aRingS;
`:`uniform vec4 uStar; uniform vec4 uStarCol; uniform vec4 uOcc; uniform float uOccS; uniform vec4 uRingS;
`)+`varying vec4 vStar; varying vec4 vStarCol; varying vec4 vOcc; varying float vOccS;
varying vec4 vRingS; varying vec3 vCen;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+(d?`  vStar = vec4((viewMatrix * modelMatrix * vec4(aStar.xyz, 1.0)).xyz, aStar.w);
  vStarCol = aStarCol;
  vOcc = vec4((viewMatrix * modelMatrix * vec4(aOcc.xyz, 1.0)).xyz, aOcc.w);
  vOccS = aOccS;
  vRingS = vec4(normalize(mat3(viewMatrix) * mat3(modelMatrix) * aRingS.xyz), aRingS.w);
  vCen = (modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;`:`  vStar = vec4((viewMatrix * vec4(uStar.xyz, 1.0)).xyz, uStar.w);
  vStarCol = uStarCol;
  vOcc = vec4((viewMatrix * vec4(uOcc.xyz, 1.0)).xyz, uOcc.w);
  vOccS = uOccS;
  vRingS = vec4(normalize(mat3(viewMatrix) * uRingS.xyz), uRingS.w);
  vCen = (modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;`)),o.fragmentShader=`varying vec4 vStar; varying vec4 vStarCol; varying vec4 vOcc; varying float vOccS;
varying vec4 vRingS; varying vec3 vCen;
vec3 sDir; float sInt; vec3 sTint;
float rBand(float x, float a, float b){
  return smoothstep(a - 0.010, a + 0.010, x) * (1.0 - smoothstep(b - 0.010, b + 0.010, x));
}
float ringTrans(float x){
  if (x < 0.99 || x > 1.84) return 1.0;
  float o = 0.10 * rBand(x, 1.000, 1.232)
          + 0.78 * rBand(x, 1.232, 1.574)
          + 0.08 * rBand(x, 1.574, 1.634)
          + 0.39 * rBand(x, 1.634, 1.830);
  return 1.0 - clamp(o, 0.0, 0.86);
}
`+o.fragmentShader,o.fragmentShader=o.fragmentShader.replace("#include <lights_fragment_begin>",`#include <lights_fragment_begin>
  {
    vec3 lv = vStar.xyz - geometry.position;
    float ld2 = dot(lv, lv);
    sDir = lv * inversesqrt(max(ld2, 1e-6));
    float s2 = max(vStar.w * vStar.w, 1e-3);
    sInt = `+y1.toFixed(2)+` / (1.0 + ld2 / s2);
    sTint = vec3(1.0);
    if (vRingS.w > 0.0) {
      float dn = dot(sDir, vRingS.xyz);
      if (abs(dn) > 1e-4) {
        vec3 rel = geometry.position - vCen;
        float tt = -dot(rel, vRingS.xyz) / dn;
        if (tt > 0.0) sInt *= ringTrans(length(rel + sDir * tt) / vRingS.w);
      }
    }
    if (vOcc.w > 0.0) {
      vec3 oc = vOcc.xyz - geometry.position;
      float ot = dot(oc, sDir);
      if (ot > 0.0) {
        float od = length(oc - sDir * ot);
        float oD = max(length(vStar.xyz - vOcc.xyz), 1e-3);
        float ru = max(vOcc.w - ot * (vOccS - vOcc.w) / oD, 0.0);
        float rp = max(vOcc.w + ot * (vOccS + vOcc.w) / oD, ru + 1e-4);
        float ec = smoothstep(ru, rp, od);
        sInt *= mix(0.055, 1.0, ec);
        sTint = mix(vec3(1.0, 0.33, 0.11), vec3(1.0), ec);
      }
    }
    IncidentLight sl;
    sl.direction = sDir;
    sl.color = vStarCol.rgb * sTint * sInt;
    if (mRock > 0.5) {
      float mu0 = max(dot(geometry.normal, sDir), 0.0);
      float muv = max(dot(geometry.normal, geometry.viewDir), 0.0);
      sl.color *= clamp(2.0 / max(mu0 + muv, 0.30), 0.0, 2.4);
    }
    sl.visible = true;
    RE_Direct(sl, geometry, material, reflectedLight);
  }`),o.fragmentShader=o.fragmentShader.replace("#include <output_fragment>",`  {
    vec3 nn = normalize(normal);
    vec3 vv = normalize(vViewPosition);
    float fr = pow(1.0 - max(dot(nn, vv), 0.0), 3.0);
    float mul = dot(nn, sDir);
    float day = smoothstep(-0.30, 0.45, mul);
    const vec3 BR = vec3(0.176, 0.410, 1.000);
    float mass = max(1.0, min(1.0 / max(mul + 0.14, 0.05), 10.0));
    vec3 tr = exp(-BR * (mass - 1.0) * 0.42);
    float cth = clamp(dot(-sDir, vv), -1.0, 1.0);
    float phR = 0.75 * (1.0 + cth * cth);
    float den = 1.5776 - 1.52 * cth;
    float phM = min(0.06 * 0.4224 / max(den * sqrt(max(den, 1e-4)), 0.01), 2.2);
    vec3 air = BR * phR * 0.62 + vec3(0.86, 0.90, 1.0) * phM;
    air = (air * tr + diffuseColor.rgb * 0.22) * sTint;
    outgoingLight += air * fr * day * sInt * vStarCol.a * 1.5;
  }
#include <output_fragment>`)}let mp,gc,x1=new Pe(16767392);function Ru(o,d,m,y){if(Lt&&K.has.has(o)){y[0]=K.anchor.x,y[1]=K.anchor.y,y[2]=K.anchor.z,y[3]=Pc[0]*N.szPl;return}let _=mp[o];_?(y[0]=_.pos.x,y[1]=_.pos.y,y[2]=_.pos.z,y[3]=gc[o]*d):mt>=0?(y[0]=xe[mt*3],y[1]=xe[mt*3+1],y[2]=xe[mt*3+2],y[3]=gc[o]*m):(y[0]=y[1]=y[2]=0,y[3]=gc[o]*m)}let w1=`
attribute float aSize; attribute vec3 aColor; attribute float aAlpha;
attribute float aPhase;
varying vec3 vC; varying float vA; varying float vF;
uniform float uScale; uniform float uTime; uniform float uTwinkle;
uniform float uFlare; uniform float uBright; uniform float uMinPx;
void main(){
  float tw = 1.0 + uTwinkle * 0.42 * sin(uTime * 1.35 + aPhase * 63.0);
  vC = aColor;
  vA = aAlpha * tw * uBright;
  vF = uFlare;
  vec4 mv = modelViewMatrix * vec4(position,1.0);
  float sz = aSize * (1.0 + uTwinkle * 0.10 * sin(uTime * 0.95 + aPhase * 41.0));
  /* ---- the floor ----
     A sprite scales with range, and past a few thousand units every planet
     in the vault had scaled to under a pixel and gone. The opening frame was
     ten folder stars and nothing else \u2014 a vault of four hundred notes
     reading as a vault of ten. A star in a photograph is never smaller than
     the seeing lets it be, whatever its distance, and the same floor here
     keeps every note a point of light from as far as the camera goes. Zero
     for the sky, which is meant to fall away. */
  float px = sz * (uScale / max(1.0, -mv.z));
  gl_PointSize = max(px, uMinPx);
  gl_Position = projectionMatrix * mv;
}`,b1=`
varying vec3 vC; varying float vA; varying float vF;

float sinc2(float u){
  if (u < 1e-3) return 1.0;
  float s = sin(u);
  return (s * s) / (u * u);
}
/* The same pattern with its own decay divided back out: one at the centre,
   zero at every null, one at every secondary peak. Which is the fringes on
   their own, and the fringes on their own are what a spike needs \u2014 see the
   note in main(). */
float fringe(float u){ return sinc2(u) * max(1.0, u * u); }
void main(){
  vec2 d = gl_PointCoord - 0.5;
  float r = length(d) * 2.0;
  float a = 0.0;
  if (r <= 1.0) a = pow(1.0 - r, 2.4) + pow(1.0 - r, 9.0) * 0.85;
  vec3 sp = vec3(0.0);
  if (vF > 0.001) {
    float ax = abs(d.x) * 2.0, ay = abs(d.y) * 2.0;
    /* A spike is not a wedge.

       It is the Fraunhofer pattern of a straight edge \u2014 one vane of the
       spider holding the secondary in place \u2014 and that pattern is sinc
       squared: a bright centre, then a run of secondary maxima falling off
       as the inverse square of their order. Which is why a real spike is
       *beaded* rather than ruled, and it is what every long exposure of a
       bright star shows that a linear taper cannot.

       Drawn as fringes on an envelope rather than as the raw law, and that
       split is the honest description of what a photograph is. Sinc
       squared falls off so fast that by a fifth of the way along the arm
       it is at a tenth \u2014 put it on screen literally and the spike is a
       stub. It does not look like a stub in any photograph because the arm
       is grossly overexposed for most of its length: the law is far above
       the sensor ceiling out to where it finally is not, so the 1/u\xB2 decay
       reads as a slow taper and what you actually see is the interference.
       So the taper carries the decay and fringe() carries the pattern,
       which is sinc squared with its own envelope divided back out.

       And the fringes are chromatic. Their spacing goes as the wavelength,
       so at any distance along an arm the red maxima sit further out than
       the blue, and the arm breaks into colour toward its tip. Three
       scales, one per channel, at 680 : 550 : 440 nm \u2014 the same three the
       atmospheres are scattered at, for the same reason: that is where the
       eye keeps its three answers. */
    float uh = ax * 15.0, uv = ay * 15.0;
    vec3 fh = vec3(fringe(uh * 0.809), fringe(uh), fringe(uh * 1.250));
    vec3 fv = vec3(fringe(uv * 0.809), fringe(uv), fringe(uv * 1.250));
    float eh = max(0.0, 1.0 - ax * 1.15) * max(0.0, 1.0 - ay * 11.0);
    float ev = max(0.0, 1.0 - ay * 1.15) * max(0.0, 1.0 - ax * 11.0);
    sp = ((0.52 + 0.48 * fh) * eh + (0.52 + 0.48 * fv) * ev) * vF * 0.44;
  }
  /* The spike carries its own colour now, so the fragment can no longer be
     one colour and one alpha. Summed per channel and then split back into
     the pair additive blending multiplies together again, which leaves the
     result identical for anything that has no spike on it. */
  vec3 sum = vC * ((1.0 + a * 1.1) * a + sp);
  float t = max(sum.r, max(sum.g, sum.b));
  if (t < 0.0025) discard;
  gl_FragColor = vec4(sum / t, t * vA);
}`,Or=[],Bo=[];function Ni(o,d,m,y){let _=new gn({uniforms:{uScale:{value:o},uTime:{value:0},uTwinkle:{value:d||0},uFlare:{value:m||0},uBright:{value:1},uMinPx:{value:0}},vertexShader:w1,fragmentShader:b1,transparent:!0,depthWrite:!1,blending:Vt});return _.userData.twinkle=d||0,Or.push(_),y&&Bo.push(_),_}function vc(o){if(!o)return;Ft.remove(o),o.geometry&&o.geometry.dispose();let d=o.material;if(d){let m=Or.indexOf(d);m>=0&&Or.splice(m,1),m=Bo.indexOf(d),m>=0&&Bo.splice(m,1),d.dispose()}}function yc(o,d){let m=new Float32Array(d);for(let y=0;y<d;y++)m[y]=Math.random();o.setAttribute("aPhase",new Xe(m,1))}function ns(o,d,m){let y=new Float32Array(o*3),_=new Float32Array(o),E=new Float32Array(o*3),w=new Float32Array(o);for(let I=0;I<o;I++)d(I,y,_,E,w);let T=new Qe;T.setAttribute("position",new Xe(y,3)),T.setAttribute("aSize",new Xe(_,1)),T.setAttribute("aColor",new Xe(E,3)),T.setAttribute("aAlpha",new Xe(w,1)),yc(T,o);let P=new Ci(T,m);return P.frustumCulled=!1,Ft.add(P),P}let zo=14e3,is=null,za=null,rs=null,xc=null,wc=null,Hi=null,bc=null,Ua=null,$n=null,hi=null,Vn=null,ss=null;xc=ns(13e3,(o,d,m,y,_)=>{let E=zo*(.62+Math.random()*.38),w=Math.random()*f,T=Math.acos(2*Math.random()-1);d[o*3]=E*Math.sin(T)*Math.cos(w),d[o*3+1]=E*Math.cos(T),d[o*3+2]=E*Math.sin(T)*Math.sin(w);let P=Math.pow(Math.random(),1.9);m[o]=(.8+P*3.6)*2.4,_[o]=.24+P*.72,lp(Lg()).toArray(y,o*3)},Ni(700,.02,0,!0)),wc=ns(150,(o,d,m,y,_)=>{let E=zo*(.7+Math.random()*.3),w=Math.random()*f,T=Math.acos(2*Math.random()-1);d[o*3]=E*Math.sin(T)*Math.cos(w),d[o*3+1]=E*Math.cos(T),d[o*3+2]=E*Math.sin(T)*Math.sin(w),m[o]=(6+Math.random()*12)*2.4,_[o]=.4+Math.random()*.42,lp(Lg()).toArray(y,o*3)},Ni(700,.05,1,!0));let Ga=.42,Uo=1.1,Br=new L(-Math.cos(Ga)*Math.sin(Uo),Math.cos(Ga)*Math.cos(Uo),Math.sin(Ga)),_1=2.1,Hg=[[.1,-.02,.15,2.1],[.47,.04,.11,1.3],[-.52,-.03,.12,.85],[1.4,.02,.21,1.05],[-1.31,-.05,.16,.7]];bc=ns(9e3,(o,d,m,y,_)=>{let E=Math.random()*f,w=E-_1;w>Math.PI&&(w-=f),w<-Math.PI&&(w+=f);let T=Math.abs(w),P=.3*(.44+.9*Math.exp(-(T*T)/(2*1.05*1.05))),I=(Math.random()+Math.random()+Math.random()-1.5)*P,D=zo*(.72+Math.random()*.26),R=Math.cos(E)*Math.cos(I)*D,k=Math.sin(I)*D,U=Math.sin(E)*Math.cos(I)*D,X=k*Math.cos(Ga)-U*Math.sin(Ga),G=k*Math.sin(Ga)+U*Math.cos(Ga),Q=R*Math.cos(Uo)-X*Math.sin(Uo),le=R*Math.sin(Uo)+X*Math.cos(Uo);d[o*3]=Q,d[o*3+1]=le,d[o*3+2]=G,m[o]=(2+Math.random()*8)*2.4;let de=1+2.2*Math.exp(-(T*T)/(2*.85*.85)),fe=1;for(let Te=0;Te<Hg.length;Te++){let ve=Hg[Te],re=w-ve[0],Ee=I-ve[1];fe+=ve[3]*Math.exp(-(re*re)/(2*ve[2]*ve[2])-Ee*Ee/(2*.11*.11))}fe*=.88+.24*Math.sin(E*23.7+2.3)*Math.cos(E*13.3-.9);let H=Math.sin(E*1.7+.6)*.048+Math.sin(E*3.9)*.018,J=Math.exp(-Math.pow(Math.max(0,Math.abs(w-.7)-.7)/.42,2)),Me=Math.exp(-Math.pow((I-H)/(.062*(.7+1.3*P/.3)),2))*(.62+.3*Math.sin(E*2.6+1.1))*J;_[o]=(.022+Math.random()*.052)*de*fe*Math.max(.12,1-Me),lp(.3+Math.random()*.45+.22*Math.exp(-(T*T)/(2*.9*.9))).toArray(y,o*3)},Ni(700,0,0,!0));function Og(o){vc(Ua);let d=Math.max(900,o*1.25);Ua=ns(14e3,(m,y,_,E,w)=>{let T=Math.pow(Math.random(),.62),P=d*.05+T*d,I=Math.random(),D=(I<.33?0:I<.66?2:I<.83?1:3)*(f/4),R=d*.2,k=Math.random()*2-1,U=D+Math.log(Math.max(P,R)/R)/.2126+k*(.25+.8/(1+P*(11/d))),X=k>.14&&k<.58,G=k<-.1&&Math.random()<.22;y[m*3]=Math.cos(U)*P+(Math.random()-.5)*d*.026,y[m*3+1]=(Math.random()-.5)*(d*.015+P*.045),y[m*3+2]=Math.sin(U)*P+(Math.random()-.5)*d*.026,_[m]=(G?1.4+Math.random()*2.4:.8+Math.random()*2.4)*2.2,w[m]=(.02+Math.random()*.07)*(X?.22:1)*(G?1.5:1),G?gr(212+Math.random()*22,.46,.6).toArray(E,m*3):gr(26+Math.random()*18,.22+Math.random()*.18,.46+Math.random()*.18).toArray(E,m*3)},Ni(700,0,0,!0)),Ua.name="dust"}function gp(){if(rs)return rs;let o=256,d=(D,R)=>{let k=new Float32Array(R*R),U=D>>>0;for(let X=0;X<R*R;X++)U=Math.imul(U,1664525)+1013904223>>>0,k[X]=U/4294967296;return k},m=D=>D*D*(3-2*D),y=(D,R)=>{let k=d(D,R),U=new Float32Array(o*o),X=o/R;for(let G=0;G<o;G++)for(let Q=0;Q<o;Q++){let le=Q/X,de=G/X,fe=Math.floor(le),H=Math.floor(de),J=m(le-fe),Me=m(de-H),Te=fe%R,ve=(fe+1)%R,re=H%R,Ee=(H+1)%R,Ae=k[re*R+Te],He=k[re*R+ve],$e=k[Ee*R+Te],se=k[Ee*R+ve];U[G*o+Q]=(Ae*(1-J)+He*J)*(1-Me)+($e*(1-J)+se*J)*Me}return U},_=(D,R)=>{let k=new Float32Array(o*o),U=.5,X=0;for(let G=0;G<R;G++,U*=.5){let Q=y(D+G*7919,4<<G);for(let le=0;le<o*o;le++)k[le]+=Q[le]*U;X+=U}for(let G=0;G<o*o;G++)k[G]/=X;return k},E=[_(11,5),_(23,5),y(37,8),_(41,3)],w=document.createElement("canvas");w.width=w.height=o;let T=w.getContext("2d"),P=T.createImageData(o,o),I=P.data;for(let D=0;D<o*o;D++)for(let R=0;R<4;R++)I[D*4+R]=Math.max(0,Math.min(255,Math.round(E[R][D]*255)));return T.putImageData(P,0,0),rs=new ar(w),rs.wrapS=rs.wrapT=uo,rs.minFilter=jt,rs.magFilter=jt,rs.generateMipmaps=!1,rs}let Bg=`
uniform sampler2D uNoise;
float n3(vec3 p) {
  float z = floor(p.z), f = fract(p.z);
  f = f * f * (3.0 - 2.0 * f);
  vec2 o1 = texture2D(uNoise, vec2(z * 0.0137, z * 0.0291)).bb * 7.31;
  vec2 o2 = texture2D(uNoise, vec2((z + 1.0) * 0.0137, (z + 1.0) * 0.0291)).bb * 7.31;
  float a = texture2D(uNoise, p.xy * 0.25 + o1).r;
  float b = texture2D(uNoise, p.xy * 0.25 + o2).r;
  return mix(a, b, f);
}
float n3b(vec3 p) {
  float z = floor(p.z), f = fract(p.z);
  f = f * f * (3.0 - 2.0 * f);
  vec2 o1 = texture2D(uNoise, vec2(z * 0.0171, z * 0.0113)).bb * 5.17;
  vec2 o2 = texture2D(uNoise, vec2((z + 1.0) * 0.0171, (z + 1.0) * 0.0113)).bb * 5.17;
  float a = texture2D(uNoise, p.xy * 0.25 + o1).g;
  float b = texture2D(uNoise, p.xy * 0.25 + o2).g;
  return mix(a, b, f);
}`,M1=`
attribute vec3 iCenter; attribute vec3 iE1; attribute vec3 iAxes; attribute vec4 iSeed;
varying vec3 vPos; varying vec3 vC; varying vec3 vA1; varying vec3 vA2; varying vec3 vA3;
varying vec3 vS; varying vec4 vSeed;
void main(){
  mat3 mv3 = mat3(modelViewMatrix);
  float sc = length(mv3[0]);
  vec3 c = (modelViewMatrix * vec4(iCenter, 1.0)).xyz;
  vec3 e1 = normalize(mv3 * iE1);
  vec3 e3 = normalize(mv3 * vec3(0.0, 1.0, 0.0));
  vec3 e2 = normalize(cross(e3, e1));
  vS = iAxes * sc;
  float R = max(vS.x, max(vS.y, vS.z)) * 1.06;
  /* A cloud the eye is inside is faded to nothing in the fragment, and its
     quad would cover the whole frame \u2014 sixteen full-screen marches for
     sixteen invisible clouds is what made the boot screen take seconds a
     frame. Collapse the quad here instead, at the same threshold the fade
     reaches zero. */
  vec3 b = vec3(dot(c, e1) / vS.x, dot(c, e2) / vS.y, dot(c, e3) / vS.z);
  if (length(b) < 0.92) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  /* a billboard big enough to hold the ellipsoid from any angle */
  vec3 p = c + vec3(position.xy * R, 0.0);
  vPos = p; vC = c; vA1 = e1; vA2 = e2; vA3 = e3; vSeed = iSeed;
  gl_Position = projectionMatrix * vec4(p, 1.0);
}`,E1=`
precision highp float;
uniform float uBright; uniform float uTime;
uniform vec3 uSunV; uniform vec3 uSunCol; uniform float uSunR;
varying vec3 vPos; varying vec3 vC; varying vec3 vA1; varying vec3 vA2; varying vec3 vA3;
varying vec3 vS; varying vec4 vSeed;
${Bg}
void main(){
  vec3 d = normalize(vPos);
  /* the ellipsoid, as a unit sphere in its own frame: q = M (p - C) */
  vec3 a = vec3(dot(d, vA1) / vS.x, dot(d, vA2) / vS.y, dot(d, vA3) / vS.z);
  vec3 b = vec3(dot(vC, vA1) / vS.x, dot(vC, vA2) / vS.y, dot(vC, vA3) / vS.z);
  float A = dot(a, a), B = dot(a, b), Cc = dot(b, b) - 1.0;
  float disc = B * B - A * Cc;
  if (disc <= 0.0) discard;
  float sq = sqrt(disc);
  float t0 = max((B - sq) / A, 0.0), t1 = (B + sq) / A;
  if (t1 <= t0) discard;
  const int STEPS = 8;
  float dl = (t1 - t0) / float(STEPS);
  float jit = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  float t = t0 + dl * jit;
  float sMax = max(vS.x, max(vS.y, vS.z));
  float drift = uTime * 0.004;
  /* The gas the eye is in is not seen: it is spread across the whole sky
     and thin in every direction, and drawing it is drawing a tint over the
     frame. A cloud fades as the camera comes within half a radius of its
     surface and is gone by the time the camera is inside, so what is seen
     is always the gas beyond \u2014 which is what a nebula looks like from a
     planet inside one. */
  float inside = smoothstep(0.9, 1.9, length(b));
  /* the warp field once per ray, at the middle: it is the slow term and
     does not need re-reading eight times */
  vec3 qm = a * (t0 + t1) * 0.5 - b;
  float wm = n3b(qm * vec3(1.9, 2.4, 2.4) + vec3(vSeed.w * 4.0, vSeed.x, vSeed.w * 1.3) + drift) - 0.5;
  float ph = vSeed.x, emis = vSeed.y, lit = vSeed.z, seed = vSeed.w;
  vec3 L = vec3(0.0);
  float T = 1.0;
  for (int i = 0; i < STEPS; i++) {
    vec3 q = a * t - b;
    float r2 = dot(q, q);
    if (r2 < 1.0) {
      /* the envelope, and the gas inside it: a base field warped by a
         second one, and a ridged term on top so the density runs in strands
         rather than lumps \u2014 the same three filaments per cloud the sprites
         carried, made out of the field instead of placed by hand */
      float env = 1.0 - r2;
      env *= env;
      vec3 sp = q * vec3(4.2, 5.4, 5.4) + vec3(seed * 9.0, ph, seed * 3.0);
      float n = n3(sp + wm * 1.3);
      float ridge = 1.0 - abs(n * 2.0 - 1.0);
      ridge *= ridge * ridge;
      float dens = env * max(0.0, 0.42 * n + 0.80 * ridge - 0.40) * 2.0;
      if (dens > 0.0) {
        float r = sqrt(r2);
        /* the ionisation front: teal inside it, red outside, the crossing
           a few tenths of the cloud; a reflection cloud is blue all through */
        float iz = smoothstep(0.12, 0.46, r);
        vec3 emCol = mix(vec3(0.20, 0.62, 0.58), vec3(0.66, 0.11, 0.15), iz);
        vec3 col = mix(vec3(0.28, 0.47, 0.64), emCol, emis);
        /* the gas near the star is lit by it \u2014 reflection, which is the
           star's own colour, falling off with the square of the distance
           and never quite reaching zero */
        float sd = distance(d * t, uSunV);
        float lit = uSunR * uSunR / (uSunR * uSunR + sd * sd);
        col += uSunCol * lit * 1.8;
        float step_ = dens * dl / sMax;
        L += T * col * step_ * 2.4;
        T *= exp(-step_ * 0.85);
      }
    }
    t += dl;
  }
  float gain = uBright * lit * inside * 1.0;
  vec3 rgb = L * gain;
  /* absorption held short of black, and scaled with the knob so turning
     the sky down takes the lanes with the light */
  float alpha = (1.0 - T) * 0.16 * inside * clamp(uBright * 1.4, 0.0, 1.0);
  gl_FragColor = vec4(rgb, alpha);
}`;function S1(){return new gn({uniforms:{uNoise:{value:gp()},uBright:{value:1},uTime:{value:0},uSunV:{value:new L(0,0,-1e9)},uSunCol:{value:new Pe(1,.85,.6)},uSunR:{value:900}},vertexShader:M1,fragmentShader:E1,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,blending:qf,blendSrc:nu,blendDst:Kl,blendSrcAlpha:nu,blendDstAlpha:Kl})}let T1=`
varying vec3 vDir;
void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,A1=`
precision highp float;
uniform float uBright; uniform vec3 uN; uniform vec3 uX; uniform vec3 uY;
uniform vec4 uGal[6]; uniform vec4 uGalU[6];
varying vec3 vDir;
${Bg}
void main(){
  vec3 d = normalize(vDir);
  float b = dot(d, uN);                       // sine of galactic latitude
  float x = dot(d, uX), y = dot(d, uY);
  float lon = atan(y, x);
  /* the band: a gaussian in latitude, narrower toward the anticentre, and
     lumpy along its length */
  float wid = 0.13 + 0.07 * (0.5 + 0.5 * x);
  float band = exp(-b * b / (2.0 * wid * wid)) + 0.25 * exp(-b * b / (2.0 * 0.32 * 0.32));
  float lump = n3(vec3(lon * 2.2, b * 9.0, 1.7));
  float lump2 = n3b(vec3(lon * 5.0, b * 18.0, 4.1));
  band *= 0.45 + 0.55 * lump + 0.25 * lump2;
  /* the bulge toward the centre */
  float bulge = pow(max(x, 0.0), 6.0) * exp(-b * b / (2.0 * 0.20 * 0.20)) * 0.55;
  /* the rift: one side only, wandering, and it takes the light away */
  float rw = 0.038 + 0.030 * n3(vec3(lon * 3.0, 2.3, 8.8));
  float rift = exp(-pow((b - 0.015 * (lump2 - 0.5) * 2.0) / rw, 2.0)) * smoothstep(-0.2, 0.6, y);
  float light = (band + bulge) * (1.0 - 0.55 * rift);
  vec3 col = vec3(0.58, 0.54, 0.50) * light * 0.34;
  /* a few galaxies: an elliptical gaussian on each one's tangent plane, a
     warm core in a cool disc */
  for (int i = 0; i < 6; i++) {
    vec3 g = uGal[i].xyz; float s = uGal[i].w;
    float dd = dot(d, g);
    if (dd > 0.9) {
      vec3 off = d - g * dd;
      vec3 u = uGalU[i].xyz; vec3 v = cross(g, u);
      float px = dot(off, u) / s, py = dot(off, v) / (s * uGalU[i].w);
      float r2 = px * px + py * py;
      float disc = exp(-r2 * 2.6);
      float core = exp(-r2 * 26.0);
      col += vec3(0.50, 0.58, 0.82) * disc * 0.22 + vec3(1.0, 0.86, 0.66) * core * 0.55;
    }
  }
  gl_FragColor = vec4(col * uBright * 1.4, 1.0);
}`;function R1(){vc(is);let o=[],d=[];for(let E=0;E<6;E++){let w=new L(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize();w.addScaledVector(Br,-w.dot(Br)*.6).normalize();let T=new L(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1);T.addScaledVector(w,-T.dot(w)).normalize(),o.push(new Pt(w.x,w.y,w.z,.01+Math.random()*.016)),d.push(new Pt(T.x,T.y,T.z,.28+Math.random()*.55))}let m=new L(0,1,0);Math.abs(Br.y)>.9&&m.set(1,0,0),m.addScaledVector(Br,-m.dot(Br)).normalize();let y=new L().crossVectors(Br,m).normalize(),_=new gn({uniforms:{uNoise:{value:gp()},uBright:{value:1},uN:{value:Br.clone()},uX:{value:m},uY:{value:y},uGal:{value:o},uGalU:{value:d}},vertexShader:T1,fragmentShader:A1,side:xn,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1,blending:Vt});is=new Et(new Hs(zo*1.08,48,24),_),is.frustumCulled=!1,is.renderOrder=-20,Ft.add(is)}let L1=`
attribute float aSize; attribute float aPhase;
uniform vec3 uCam; uniform float uTime; uniform float uBox;
varying float vA;
void main(){
  vec3 drift = vec3(sin(aPhase * 6.28 + uTime * 0.11), cos(aPhase * 4.1 + uTime * 0.07), sin(aPhase * 2.7 - uTime * 0.09)) * 4.0;
  vec3 p = mod(position + drift - uCam + uBox * 0.5, uBox) - uBox * 0.5 + uCam;
  vec4 mv = viewMatrix * vec4(p, 1.0);
  float z = -mv.z;
  float px = aSize * 220.0 / max(1.0, z);
  gl_PointSize = clamp(px, 0.7, 3.2);
  /* fade at the near plane and at the far wall of the box, so nothing pops */
  vA = smoothstep(1.5, 18.0, z) * smoothstep(uBox * 0.55, uBox * 0.22, length(p - uCam)) * clamp(px / 1.6, 0.35, 1.0);
  gl_Position = projectionMatrix * mv;
}`,C1=`
uniform float uBright;
varying float vA;
void main(){
  vec2 d = gl_PointCoord - 0.5;
  float r = length(d) * 2.0;
  if (r > 1.0) discard;
  float a = (1.0 - r * r) * vA * uBright;
  gl_FragColor = vec4(vec3(0.72, 0.80, 0.92) * a, a);
}`;function P1(){vc(za);let o=720,d=340,m=new Float32Array(o*3),y=new Float32Array(o),_=new Float32Array(o);for(let T=0;T<o;T++)m[T*3]=(Math.random()-.5)*d,m[T*3+1]=(Math.random()-.5)*d,m[T*3+2]=(Math.random()-.5)*d,y[T]=.6+Math.random()*1.6,_[T]=Math.random();let E=new Qe;E.setAttribute("position",new Xe(m,3)),E.setAttribute("aSize",new Xe(y,1)),E.setAttribute("aPhase",new Xe(_,1));let w=new gn({uniforms:{uCam:{value:new L},uTime:{value:0},uBox:{value:d},uBright:{value:.5}},vertexShader:L1,fragmentShader:C1,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,blending:Vt});za=new Ci(E,w),za.frustumCulled=!1,za.renderOrder=6,Ft.add(za)}function zg(o){vc(Hi);let d=Math.max(900,o*1.15),m=16,y=90,_=[];for(let R=0;R<m;R++){let k=Math.random()*f,U=d*.2+Math.pow(Math.random(),.75)*d,X=Math.random()*f;_.push({x:Math.cos(k)*U,y:(Math.random()-.5)*d*.34,z:Math.sin(k)*U,w:d*(.08+Math.random()*.16),h:d*(.08+Math.random()*.1),e1x:Math.cos(X),e1z:Math.sin(X),e2x:-Math.sin(X),e2z:Math.cos(X),el:1.35+Math.random()*1.15,ph:Math.random()*f,emission:Math.random()<.72,lit:.55+Math.random()*.75})}let E=new Co,w=new Jr(2,2);E.setAttribute("position",w.getAttribute("position")),E.setAttribute("uv",w.getAttribute("uv")),E.setIndex(w.getIndex());let T=new Float32Array(m*3),P=new Float32Array(m*3),I=new Float32Array(m*3),D=new Float32Array(m*4);_.forEach((R,k)=>{T[k*3]=R.x,T[k*3+1]=R.y,T[k*3+2]=R.z,P[k*3]=R.e1x,P[k*3+1]=0,P[k*3+2]=R.e1z,I[k*3]=R.w*R.el*.85,I[k*3+1]=R.w*.95,I[k*3+2]=R.h*1.15,D[k*4]=R.ph,D[k*4+1]=R.emission?1:0,D[k*4+2]=R.lit,D[k*4+3]=Math.random()}),E.setAttribute("iCenter",new wn(T,3)),E.setAttribute("iE1",new wn(P,3)),E.setAttribute("iAxes",new wn(I,3)),E.setAttribute("iSeed",new wn(D,4)),E.instanceCount=m,Hi=new Et(E,S1()),Hi.frustumCulled=!1,Hi.renderOrder=-2,Ft.add(Hi)}let Ug=186,D1=352;function I1(){vc(ss);let o=9,d=300,m=[],y=.3+Math.random()*.45;for(let E=0;E<o;E++){let w;if(E<o-2){let k=.1+Math.random()*.45,U=new L(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1);U.addScaledVector(Br,-U.dot(Br)).normalize(),w=Br.clone().multiplyScalar(Math.cos(k)).addScaledVector(U,Math.sin(k)).normalize()}else w=new L(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize();let T=new L(0,1,0);Math.abs(w.y)>.9&&T.set(1,0,0);let P=new L().crossVectors(w,T).normalize(),I=new L().crossVectors(w,P).normalize(),D=[],R=Math.random()<.55?Math.random()<.35?2:1:0;for(let k=0;k<R;k++)D.push({at:.18+Math.random()*.64,w:.045+Math.random()*.075,d:.45+Math.random()*.42});m.push({e1:P,e2:I,e3:new L().crossVectors(P,I),a0:Math.random()*f,span:1.1+Math.random()*1.9,hue:Ug+(D1-Ug)*g(y+(Math.random()-.5)*.3,0,1),dh:(Math.random()-.5)*26,skew:.55+Math.random()*1.3,lanes:D,lit:.55+Math.random()*.9,thick:.055+Math.random()*.1})}let _=new L;ss=ns(o*d,(E,w,T,P,I)=>{let D=m[E/d|0],R=E%d/d,k=D.a0+(R-.5)*D.span,U=(Math.random()+Math.random()+Math.random()-1.5)*.8,X=zo*(.86+Math.random()*.1);_.copy(D.e1).multiplyScalar(Math.cos(k)).addScaledVector(D.e2,Math.sin(k)).addScaledVector(D.e3,U*D.thick).normalize().multiplyScalar(X),w[E*3]=_.x,w[E*3+1]=_.y,w[E*3+2]=_.z;let G=Math.sin(Math.pow(R,D.skew)*Math.PI),Q=Math.exp(-U*U*.9),le=1;for(let fe=0;fe<D.lanes.length;fe++){let H=D.lanes[fe],J=(R-H.at)/H.w;le*=1-H.d*Math.exp(-J*J)}T[E]=(900+Math.random()*1700)*(.45+Q*.75)*(zo/14e3),I[E]=(.07+Math.random()*.115)*D.lit*G*le*(.25+Q);let de=1+(1-le)*.55;gr((D.hue+D.dh*(R-.5)+360)%360,(.15+Math.random()*.13)*de,.38+Math.random()*.14).toArray(P,E*3)},Ni(700,0,0,!1)),ss.name="veil",ss.renderOrder=-1,vp()}function vp(){ss&&ss.material.uniforms&&(ss.material.uniforms.uBright.value=N.vei)}Og(1600),zg(1600),I1(),R1(),P1();function Go(o){let d=2166136261;for(let m=0;m<o.length;m++)d^=o.charCodeAt(m),d=Math.imul(d,16777619)>>>0;return d>>>0}let k1=o=>o*o*(3-2*o),Gg=o=>o&&o.lkey?A(o.lkey,o.larg):o?o.label:"\u2014",F1=`
/* A hash with no transcendental in it. The crater field below evaluates this
   up to thirty times per fragment, and a sin() there is the difference
   between a moon that costs nothing and a moon that costs the frame. */
float wH(vec3 p){
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
/* One hash, three uses. Three separate ones read better and cost three times
   as much inside a loop that is already the most expensive thing here; the
   components are correlated and nothing in the picture can tell. */
vec3 wH3(vec3 p){ float h = wH(p); return fract(vec3(h, h * 13.71, h * 57.29)); }
float wNoise(vec3 p){
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(wH(i),              wH(i + vec3(1,0,0)), f.x),
                 mix(wH(i + vec3(0,1,0)), wH(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(wH(i + vec3(0,0,1)), wH(i + vec3(1,0,1)), f.x),
                 mix(wH(i + vec3(0,1,1)), wH(i + vec3(1,1,1)), f.x), f.y), f.z);
}
/* Three octaves and two, rather than one function with a count. Every one of
   these is eight hashes, and every one of them is paid on every fragment of
   every body in the vault \u2014 the first draft asked for four octaves four
   times over on one branch and took a laptop's integrated GPU from fifty
   frames a second to one. Fractal detail is worth exactly as many octaves as
   are visible and not one more. */
float wFbm3(vec3 p){
  float s = 0.0, a = 0.5;
  for (int k = 0; k < 3; k++){ s += a * wNoise(p); p *= 2.07; a *= 0.5; }
  return s * 1.143;
}
float wFbm2(vec3 p){
  float s = wNoise(p) * 0.5 + wNoise(p * 2.07) * 0.25;
  return s * 1.333;
}
float mGlow;       // what this world emits on its own \u2014 see the aurora
float mH;          // the surface's own height, for the relief below
float mWater;      // how much of this fragment is open sea \u2014 see the glint
float mRock;       // 1 on an airless surface \u2014 see the opposition surge
uniform float uDetail;   // SURFACE DETAIL: how far below a pixel to bother
vec3  mTint;       // the folder colour, kept for the light to find
`,Vg={value:1};function Wg(o,d){o.uniforms.uDetail=Vg;let m=d?"attribute vec4 aSurf;":"uniform vec4 aSurf;";o.vertexShader=m+`
varying vec4 vSurf;
varying vec3 vObj;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vSurf = aSurf;
  vObj = normalize(position);`),o.fragmentShader=`varying vec4 vSurf;
varying vec3 vObj;
`+F1+o.fragmentShader,o.fragmentShader=o.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  {
    vec3 dpx = dFdx(-vViewPosition), dpy = dFdy(-vViewPosition);
    float dhx = dFdx(mH), dhy = dFdy(mH);
    if (abs(dhx) + abs(dhy) > 1e-7) {
      vec3 r1 = cross(dpy, normal), r2 = cross(normal, dpx);
      float det = dot(dpx, r1);
      vec3 grad = sign(det) * (dhx * r1 + dhy * r2);
      normal = normalize(abs(det) * normal - grad * 0.55);
    }
  }`),o.fragmentShader=o.fragmentShader.replace("#include <map_fragment>",`
  {
    vec3 nd = normalize(vObj);
    float sd = vSurf.x;
    vec3 alb;
    mGlow = 0.0; mWater = 0.0; mRock = 0.0;
    /* ---- how much of this world one pixel covers ----
       Taken before anything branches, because a derivative asked for inside
       divergent control flow is undefined \u2014 the rasteriser answers it by
       differencing neighbouring fragments, and neighbours that took the
       other branch have no answer to give.

       On a body filling the screen this is a few thousandths; on one four
       pixels across it is a half. It is the honest measure of how much of
       what is computed below could possibly be seen, and the two expensive
       things here \u2014 the crater field and the third octave of every fractal \u2014
       are skipped once it says they would land inside a pixel. SURFACE
       DETAIL scales the threshold, for a machine that would rather have the
       frame than the grain. */
    float pxo = length(fwidth(nd)) / max(uDetail, 0.05);
    bool fine = pxo < 0.035;
    if (vSurf.w < 0.5) {
      /* ---------------------------------------------------- a giant -------
         Zonal bands, which are not stripes painted on a ball: a giant's
         atmosphere is organised by its own rotation. Coriolis turns
         convection into east-west jets, and what the eye reads is the
         alternation between them \u2014 zones, where gas is rising and the
         ammonia deck sits high and bright, and belts, where it is sinking
         and you are seeing deeper, warmer and darker. Jupiter carries about
         eight of each per hemisphere and Saturn's are the same structure
         under a haze that softens them.

         The jets meander rather than ruling straight lines, so the latitude
         the band pattern is read at is displaced by a turbulence field
         first. That one displacement is also what puts the curls and
         festoons on the boundary between a belt and the zone beside it \u2014
         which is exactly where the shear between two opposed jets is, and
         exactly where every photograph shows them. */
      float turb = wFbm3(nd * 2.6 + sd * 31.0);
      /* Gas has no relief: a cloud deck is not a landscape, and there is
         nothing on a giant for a shadow to fall across. Flat, so the
         derivative below is zero and the normal is left alone. */
      mH = 0.0;
      float lat2 = nd.y + (turb - 0.5) * 0.17;
      /* the bands are not evenly spaced in latitude: they are widest at the
         equator and crowd together toward the poles, because the jets are
         set by the depth of the convecting shell against the local spin and
         both of those change with latitude. The cubic term is that crowding
         and nothing more principled than the right shape for it. */
      float bz = (lat2 + 0.42 * lat2 * lat2 * lat2) * (7.0 + vSurf.y * 5.0);
      float band = sin(bz * 3.0 + vSurf.y * 6.28) * 0.46
                 + sin(bz * 5.1 + 1.7) * 0.33
                 + sin(bz * 9.7 + 3.9) * 0.21;
      float belt = smoothstep(-0.24, 0.24, band);
      alb = mix(vec3(0.44, 0.29, 0.20), vec3(0.90, 0.83, 0.67), belt);
      /* the poles are colder, hazier and bluer \u2014 a hood, not a cap: there is
         no surface up there for ice to sit on */
      alb = mix(alb, vec3(0.38, 0.42, 0.50), smoothstep(0.70, 0.99, abs(nd.y)));
      /* fine shear drawn out along the jets rather than across them */
      if (fine) alb *= 0.88 + 0.24 * wNoise(nd * vec3(9.0, 34.0, 9.0) + sd * 13.0);
      /* One long-lived oval on the bodies whose seed asks for one. A vortex
         caught between two opposed jets is stable for the same reason it is
         there at all: the shear that would tear it apart is what spins it.
         Jupiter's has been turning since somebody first drew it. */
      if (vSurf.y > 0.52) {
        float lonf = atan(nd.z, nd.x) - sd * 6.2831853;
        lonf = atan(sin(lonf), cos(lonf));
        float sq = length(vec2(lonf * 0.40, (nd.y + 0.30 - vSurf.y * 0.34) * 1.9));
        alb = mix(alb, vec3(0.70, 0.33, 0.21), (1.0 - smoothstep(0.05, 0.14, sq)) * 0.85);
      }
      /* Aurorae, and only here. A giant has a magnetic field big enough to
         put a permanent oval of them round each pole, and they are the one
         thing on a world that is visible on the night side because it is not
         reflected light at all \u2014 it is the atmosphere itself emitting where
         the field lines come down. Which is the job the machined shell's lit
         strips were doing, done by something that is actually there. */
      /* On the magnetic axis, which is not the spin axis. Jupiter's is
         about ten degrees off and displaced from the centre besides, so its
         auroral ovals are visibly off-centre \u2014 one of them reaches further
         from the pole than the other. Saturn is the odd one out at under a
         degree, and being the exception is what makes it worth saying that
         the rule is a tilt. Seeded, so a body's ovals are where they are
         every time the vault is opened. */
      float mt = 0.10 + vSurf.y * 0.16;
      float ma = sd * 6.2831853;
      vec3 mag = vec3(sin(mt) * cos(ma), cos(mt), sin(mt) * sin(ma));
      float md = abs(dot(nd, mag));
      float pole = smoothstep(0.86, 0.94, md) * (1.0 - smoothstep(0.94, 0.985, md));
      mGlow = pole * (0.40 + 0.90 * turb);
    } else if (vSurf.w < 1.5) {
      /* ---------------------------------------------------- a world -------
         Land, sea and ice. The split is one threshold on a fractal height
         field, which is the standard way of saying "this surface has been
         eroded" \u2014 and it is why the coastlines come out crenulated at every
         scale rather than smooth at one of them. A coast is a fractal, and
         that is not a figure of speech about it. */
      float hgt = wFbm3(nd * 1.7 + sd * 47.0);
      vec3 sea = mix(vec3(0.018, 0.050, 0.125), vec3(0.045, 0.135, 0.255),
                     smoothstep(0.28, 0.47, hgt));
      float det = wNoise(nd * 6.0 + sd * 3.0);
      vec3 land = mix(vec3(0.19, 0.25, 0.13), vec3(0.42, 0.35, 0.22), det);
      land = mix(land, vec3(0.54, 0.49, 0.36), smoothstep(0.60, 0.76, hgt));
      float shore = smoothstep(0.465, 0.515, hgt);
      alb = mix(sea, land, shore);
      /* Ice where it is cold, which is the poles *and* the high ground, and
         the line between them wanders \u2014 because what it follows is a
         temperature contour over terrain and not a parallel. */
      /* Land has relief and water does not, which is the whole of why a
         coastline reads: the sea is a level surface by definition and the
         ground behind it is not. Squared above the shoreline so the
         mountains are where the land is highest rather than everywhere. */
      float above = max(hgt - 0.49, 0.0);
      mH = above * above * 2.6 + det * 0.05;
      float cold = abs(nd.y) + (hgt - 0.5) * 0.34 + (det - 0.5) * 0.20;
      float ice = smoothstep(0.66, 0.83, cold);
      alb = mix(alb, vec3(0.82, 0.86, 0.90), ice);
      /* and weather over the lot of it. A world with air has cloud on
         somewhere near two thirds of it at any moment, and cloud is most of
         what makes its albedo the 0.31 it is. */
      float cld = smoothstep(0.48, 0.67, wFbm2(nd * 2.9 + sd * 71.0)) * 0.78;
      alb = mix(alb, vec3(0.90, 0.92, 0.95), cld);
      /* Where there is open sea to catch the star: not under cloud, not
         under ice, and not on land. A specular highlight off water is the
         one thing on a world that is genuinely mirror-like, and it is the
         reason every photograph of an ocean from orbit has a blazing patch
         in it exactly opposite the sun. */
      mWater = (1.0 - shore) * (1.0 - ice) * (1.0 - cld);
    } else {
      /* ----------------------------------------------------- a rock -------
         Craters, and the sizes of them come out of a power law. The
         size-frequency distribution of impact craters is the most-measured
         thing about any airless surface \u2014 many small, few large, a straight
         line on a log-log plot \u2014 so the radius drawn for each cell of the
         field is a power of a uniform rather than a uniform. What that
         produces is a handful of basins with fine pitting between them,
         which is what an airless surface looks like; an even field of
         equal circles is what it never looks like.

         Nearest in units of its *own* radius rather than in distance, so a
         large crater further off still wins over a small one nearby. That is
         what "the big one is on top of the small ones" means, and getting it
         the other way round gives a surface where nothing ever overlaps. */
      vec3 cp = nd * (2.4 + vSurf.z * 0.34);
      vec3 ci = floor(cp), cf = fract(cp);
      vec3 half8 = step(vec3(0.5), cf);
      /* Two above the largest crater radius means every distance test comes
         out as no crater, which is the right answer once a crater is smaller
         than the pixel that would have to show it. The maria below are not
         skipped: those are the size of the body and are the last thing to
         go. What is dropped is never the shape of the world, only detail
         finer than the picture can hold \u2014 a rule the generated worlds this
         replaced could not keep, which is why they were taken out. */
      float q = 2.0;
      if (fine) {
        for (int x = 0; x < 2; x++)
        for (int y = 0; y < 2; y++)
        for (int z = 0; z < 2; z++) {
          vec3 g = vec3(float(x), float(y), float(z)) - 1.0 + half8;
          vec3 o = wH3(ci + g + sd * 27.0);
          float u = o.x * o.y;
          float R = 0.13 + 0.37 * u * u;
          q = min(q, length(g + o - cf) / R);
        }
      }
      /* the bowl is shadowed and the rim is fresh material thrown up out of
         it, so one is darker than the ground and the other brighter */
      float bowl = 1.0 - smoothstep(0.0, 0.92, q);
      float rim  = smoothstep(0.78, 0.97, q) * (1.0 - smoothstep(0.97, 1.14, q));
      /* ---- and the shape of it ----
         A crater drawn as a change of colour is a stain. What the eye
         actually recognises is the shading on a bowl and the shadow under a
         rim, so the profile below is a height and the normal is bent by it:
         a floor well under the plain, a wall climbing to a rim raised above
         it, and the ejecta blanket falling away outside. That is the
         measured profile of a simple crater, and it is why a terminator
         crossing a cratered surface is the most legible thing in astronomy.
         The fine term is regolith \u2014 the metre of broken rock every airless
         surface is buried under, because nothing has ever swept it away. */
      float grain = fine ? wNoise(nd * 11.0 + sd * 5.0) : 0.5;
      mH = fine ? (1.0 - bowl) * 0.72 + rim * 0.55 + grain * 0.06 : 0.0;
      alb = vec3(0.128) * (0.80 + 0.40 * grain);
      alb *= 1.0 - bowl * 0.42;
      /* a fresh rim is excavated rock that has not been darkened by four
         billion years of space weathering yet, and it is genuinely brighter
         than the plain \u2014 Copernicus and its rays against the mare */
      alb += vec3(0.085) * rim;
      /* and the maria: low ground flooded long ago and darker than the
         highlands around it, which is the other half of every bare surface
         anyone has ever looked at */
      alb *= 1.0 - smoothstep(0.54, 0.63, wFbm3(nd * 1.6 + sd * 61.0)) * 0.45;
      mRock = 1.0;
    }
    /* The folder colour is what the legend promises, and a world still has
       to say which system it belongs to. It rides as a tint over the world's
       own albedo rather than as the paint \u2014 a third of the way, which is
       enough to tell two systems apart at a glance and not enough to turn a
       giant's belts into a monochrome. The rest of the folder's identity is
       carried where it always was: in the halo, and in the lit gradient
       below. */
    /* ---- and the folder's colour is not applied here ----
       Which looks like an omission and is the opposite of one. A body's
       folder colour already arrives as the colour of the *light*: the star
       that lights it is its own folder's star and carries that folder's hue
       \u2014 see starLit, and the note there about a planet's day side matching
       the thing lighting it. Tinting the albedo as well would count one fact
       twice, and multiplying an albedo by a saturated cyan does not tint it
       anyway: it deletes the red channel, which takes a giant's cream and
       brown to grey-green and a rock's grey to navy.

       So the division is the one every photograph makes. What a surface owns
       is its albedo. What a system owns is its light. */
    mTint = diffuseColor.rgb;
    diffuseColor.rgb = alb;
  }`),o.fragmentShader=o.fragmentShader.replace("#include <output_fragment>",`  {
    vec3 nn2 = normalize(normal);
    float dp = dot(nn2, sDir);
    float day = smoothstep(-0.45, 0.85, dp);
    float lit = day * day * sInt * vStarCol.a;
    outgoingLight += mix(mTint, vStarCol.rgb, 0.34) * sTint * lit * 0.17;
    float edge = pow(1.0 - max(dot(nn2, normalize(vViewPosition)), 0.0), 4.0);
    outgoingLight += mix(mTint, vec3(1.0), 0.45) * edge * smoothstep(-0.15, 0.6, dp)
                     * sInt * vStarCol.a * 0.85;
    if (mWater > 0.01) {
      vec3 hv = normalize(sDir + normalize(vViewPosition));
      float sp = pow(max(dot(nn2, hv), 0.0), 120.0);
      outgoingLight += vStarCol.rgb * sTint * sp * mWater * sInt * vStarCol.a * 1.35;
    }
    if (mRock > 0.5) {
      float ph = dot(sDir, normalize(vViewPosition));
      outgoingLight *= 1.0 + 0.95 * exp(-(1.0 - ph) * 55.0);
    }
  }
  outgoingLight += mix(vec3(0.42, 0.52, 1.0), vec3(1.0, 0.42, 0.62), 0.22)
                   * mGlow * 0.85;
#include <output_fragment>`)}let qg=[.068,.006,0],Vo=null,Wo=null,Ri=null,Lu=null;function N1(){Ri=new Float32Array(Math.max(1,$)*4),Lu=new Uint8Array(Math.max(1,$));for(let o=0;o<$;o++){let d=Go((Fe[o]?Fe[o].p:"")+"#r"),m=oe&&oe[o]&&oe[o].kind==="moon"?1:0;Lu[o]=m;let y=m?.2:1;Ri[o*4]=((d&255)/255-.5)*.62*y,Ri[o*4+1]=((d>>>8&255)/255-.5)*.42*y,Ri[o*4+2]=(d>>>16&1023)/1024*6.2831853,Ri[o*4+3]=48e-6*Math.pow(Math.max(.5,ct[o]||3)/4,.38)}}let Xg=new Cr;function Yg(o,d){if(!Ri||o<0||o>=$)return d.set(0,0,0,1),d;let m=Lu&&Lu[o]?Ri[o*4+2]+(Di?Di[o]:0):Ri[o*4+2]+on*Ri[o*4+3];return Xg.set(Ri[o*4],m,Ri[o*4+1]),d.setFromEuler(Xg)}function jg(o,d,m){let y=Fe[o]||{},_=Go((y.p||"")+"#m");d[m]=(_&4095)/4096,d[m+1]=(_>>>12&1023)/1024;let E=Math.log(1+(y.inb|0))*1.55+Math.log(1+(y.w||0)/120)*.7;d[m+2]=5+Math.min(9,Math.round(E*1.4))+(_>>>22&3);let w=oe&&oe[o]?oe[o].kind:"wiki";d[m+3]=w==="moon"||w==="spiral"||w==="shell"?2:E>=3.6?0:1}let qo=`
#ifdef USE_INSTANCING
attribute float aSeed;
attribute vec3 aCore;
attribute vec3 aEdge;
attribute float aAlpha;
#endif
uniform vec3 uCore; uniform vec3 uEdge;
varying vec3 vN; varying vec3 vE; varying vec3 vQ;
/* the raw object position, which the chromosphere and the prominences read:
   they compile against this same vertex shader and want the sphere's own
   coordinate rather than the seeded one the photosphere samples at */
varying vec3 vP;
varying vec3 vCore; varying vec3 vEdge;
varying float vSeed; varying float vA;
void main(){
  vP = position;
  vec3 p = normalize(position);
#ifdef USE_INSTANCING
  vSeed = aSeed; vCore = aCore; vEdge = aEdge; vA = aAlpha;
#else
  vSeed = 0.0; vCore = uCore; vEdge = uEdge; vA = 1.0;
#endif
  /* about the spin axis, so what changes between two stars is which side of
     itself each is showing and not where its equator is */
  float ca = cos(vSeed * 6.2831853), sa = sin(vSeed * 6.2831853);
  vQ = vec3(p.x * ca - p.z * sa, p.y, p.x * sa + p.z * ca);
#ifdef USE_INSTANCING
  vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  /* the instance carries the rotation, so the outward direction has to go
     through it before the normal matrix \u2014 and the scale is uniform on every
     one of these, which is what lets the same mat3 serve for both */
  vN = normalize(normalMatrix * mat3(instanceMatrix) * p);
#else
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  /* the geometry is a sphere about its own origin, so the outward direction
     is the position \u2014 no dependence on whatever normals the subdivision left */
  vN = normalize(normalMatrix * p);
#endif
  vE = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`,yp=`
float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
float noise(vec3 p){
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash(i),                 hash(i + vec3(1,0,0)), f.x),
                 mix(hash(i + vec3(0,1,0)),    hash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(hash(i + vec3(0,0,1)),    hash(i + vec3(1,0,1)), f.x),
                 mix(hash(i + vec3(0,1,1)),    hash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p){
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++){ s += a * noise(p); p *= 2.03; a *= 0.5; }
  return s;
}
/* the star turns, and the things that belong to the star turn with it: the
   spots, the streamers, the loops. Granulation does not \u2014 it boils in place.

   And it does not turn as one piece. A star is a gas, so there is nothing to
   make one latitude keep step with another, and the Sun's equator goes round
   in 24.5 days while its poles take 34. The law is measured and fitted:

     Omega(phi) = A + B sin\xB2phi + C sin\u2074phi

   with A = 14.713, B = -2.396, C = -1.787 degrees a day (Snodgrass and
   Ulrich, 1990). Divided through by A that is the factor below, one at the
   equator and 0.716 at the pole.

   This is not a detail. Differential rotation is *why* a star has spots at
   all: it drags the frozen-in magnetic field round faster at the equator
   than at the poles, winding a poloidal field into a toroidal one turn by
   turn until the tubes are strong enough to become buoyant and break the
   surface, which is what a sunspot is. Drawing spots on a rigidly rotating
   ball is drawing the effect without the cause \u2014 and it also looks wrong,
   because the one thing a long timelapse of the Sun shows is the high
   latitudes falling behind. */
float omega(float y){
  float s2 = y * y;
  return 1.0 - 0.1629 * s2 - 0.1215 * s2 * s2;
}
vec3 spin(vec3 q, float a){
  float c = cos(a), s = sin(a);
  return vec3(q.x * c - q.z * s, q.y, q.x * s + q.z * c);
}
vec3 spinDiff(vec3 q, float a){ return spin(q, a * omega(q.y)); }`,xp=`
uniform float uTime;
/* ---- how brightly this star burns, which is not the same as how opaque ----
   SYSTEM GLOW used to arrive as the disc's alpha, and a star turned down that
   way does not get dimmer: it gets see-through, and the nebula behind it
   comes up through the photosphere. What alpha is for here is the legend \u2014
   a system switched off has to be able to take its star with it \u2014 and what
   brightness is for is brightness. */
uniform float uBright;
/* fed by the vertex shader from a uniform on the hub and from an instanced
   attribute on every folder star \u2014 see SUN_V */
varying vec3 vCore; varying vec3 vEdge;
varying float vSeed; varying float vA;
varying vec3 vN; varying vec3 vE; varying vec3 vQ;
float sT;
${yp}
void main(){
  /* 137 is only a number with no factors in common with anything below:
     what it has to do is put two stars at different points of their own
     cycles rather than at the same one. */
  sT = uTime + vSeed * 137.0;
  vec3 uCore = vCore, uEdge = vEdge;
  /* mu, the cosine between the surface and the line of sight: 1 in the middle
     of the disc, 0 at the limb */
  float mu = clamp(dot(normalize(vN), normalize(vE)), 0.0, 1.0);
  /* The linear law, I(mu) = 1 - u(1 - mu), which is what limb darkening is
     actually measured and tabulated as; u is near 0.6 for our own sun in
     visible light and is pushed to 0.80 here because this disc is a few
     hundred pixels across rather than half a degree of sky.

     A power law was tried first \u2014 pow(mu, 0.55) \u2014 and it is the wrong shape.
     mu is not the radius: it is sqrt(1 - r\xB2), so it stays above 0.85 across
     the whole inner half of the disc and then falls off a cliff. Any function
     of mu that is gentle near 1 therefore puts the entire visible gradient
     into the last few per cent of the radius, and the disc reads flat with a
     thin dark ring \u2014 which is exactly what it did. Linear in mu spends the
     gradient across the face, where it can be seen. */
  float ld = 1.0 - 0.80 * (1.0 - mu);

  /* Granulation, drawn as the *lanes* and not as the cells.

     Convection on a star is a honeycomb: rising gas fills almost the whole
     surface and it is bright, and the thin network of cooler gas sinking back
     down between the cells is dark. So the face is mostly light with a dark
     web on it \u2014 and taking the noise field directly gives the opposite
     impression, broad bright blobs next to broad dark blobs of the same size,
     which reads as a bruised moon. That is what the first attempt looked like.

     A level set of a noise field \u2014 the places where it passes through its own
     middle \u2014 is a set of thin closed curves, and a field of them is exactly
     that honeycomb, for one noise call. Granulation also turns over in place
     rather than being carried round, so the sample point drifts through the
     field instead of the sphere spinning under it.

     The width of the level set and how dark it goes are the two numbers that
     decide whether this is granulation or brain coral: a wide, high-contrast
     lane is a vein, and the first pass at these had both. Thin and shallow. */
  /* already unit, already turned to this star's own longitude */
  vec3 q = vQ;
  /* Domain warp, which is the difference between a honeycomb and granulation.
     A level set of an unwarped noise field gives cells that are all the same
     size and all the same roundness, and a regular tiling on a star is as
     much of a tell as the wireframes were. Displacing the sample point by a
     slower copy of the same field stretches the cells along the flow, so they
     come out uneven, elongated near the lanes they are draining into, and
     never twice alike.

     The amplitude is small and the warp field is nearly as fine as the thing
     it is warping, and both numbers had to come down to get there. A warp
     that is broad and strong does not distort cells, it *transports* them:
     the level set stops closing into a honeycomb and turns into long
     meandering veins across the whole face \u2014 marble, which is the same
     failure as the brain coral by another route. Warping by a shade under a
     cell's own width is the most that still reads as a cell. */
  vec3 w = vec3(noise(q * 9.0 + vec3(0.0, sT * 0.031, 0.0)),
                noise(q * 9.0 + vec3(19.3, 0.0, sT * 0.026)),
                noise(q * 9.0 + vec3(0.0, 7.7, sT * 0.023))) - 0.5;
  vec3 qg = q + w * 0.075;
  /* Frequency is the difference between granulation and a net. Seventeen
     cells across the sphere is about ten across the disc, and ten cells the
     width of a fingernail apiece are not granules \u2014 they are a pattern, and
     the eye reads a pattern as decoration on a ball rather than as the ball's
     own material. The real ratio is nearer a thousand granules across the
     disc; the two scales here go as fine as the noise can be sampled per
     fragment without sparkling, which lands the primary web at a size the eye
     reads as texture and not as motif. */
  float g1 = noise(qg * 34.0 + vec3(0.0, sT * 0.055, 0.0));
  float g2 = noise(qg * 74.0 - vec3(sT * 0.080, 0.0, sT * 0.050));
  /* Supergranulation: the same honeycomb three times the size and a fifth of
     the contrast. The photosphere has both, on scales an order apart, and one
     scale alone is what makes a procedural surface read as a texture \u2014 the
     eye finds the repeat because there is only one thing to find. */
  float g0 = noise(qg * 6.2 + vec3(sT * 0.013, 0.0, 0.0));
  float lane  = 1.0 - smoothstep(0.0, 0.11, abs(g1 - 0.5));
  /* The finest scale is dropped along the limb rather than drawn there. At a
     grazing angle a whole cell falls inside one fragment, and sampling a
     high-frequency field per pixel across that is not detail, it is a band of
     sparkle that crawls as the camera moves \u2014 the classic shimmer, and the
     more so under bloom. Fading it out with mu costs nothing that can be
     seen: the limb is where the darkening owns the picture anyway. */
  float fine  = (1.0 - smoothstep(0.0, 0.15, abs(g2 - 0.5)))
              * smoothstep(0.0, 0.28, mu);
  float super = 1.0 - smoothstep(0.0, 0.27, abs(g0 - 0.5));
  /* a slow unevenness across the whole face, so the web is not a uniform
     texture laid over a uniform ball */
  float broad = noise(q * 3.4 + vec3(sT * 0.020, 0.0, sT * 0.030));
  float cell = 1.03 - 0.19 * lane - 0.06 * fine - 0.045 * super
                    + 0.10 * (broad - 0.5);

  /* ---- sunspots ----
     The one feature of the sun a person can name without being an astronomer,
     and the disc had none. They are not scattered at random: they belong to
     two bands either side of the equator \u2014 the poles never have them and the
     equator itself rarely does \u2014 and each is a dark umbra inside a lighter,
     visibly *fibrous* penumbra. The penumbra is what makes a spot read as a
     hole in a boiling surface rather than as a smudge on a ball, so it gets
     its own high-frequency break-up. A slow rotation carries them, which is
     also the only cue on screen that the star is turning at all. */
  vec3 qr = spinDiff(q, sT * 0.021);
  float lat  = abs(qr.y);
  /* ---- the butterfly ----
     The two bands are not fixed. A cycle opens with spots appearing around
     thirty degrees either side of the equator and closes with the last of
     them at eight, and there are most of them halfway through \u2014 plot
     latitude against time for a century and the result is a row of wings,
     which is what the diagram has been called since Maunder drew it in
     1904. Both halves of that are here: the band walks down toward the
     equator over the cycle, and the number of spots rises and falls with
     it, to almost nothing at minimum.

     The clock is compressed, and it has to be said plainly. This star
     already turns in about half an hour rather than in twenty-seven days,
     so every period on it is a compression; the cycle is compressed harder
     still, to some fourteen rotations rather than a hundred and forty
     eight, because a butterfly that took three days of real time to open
     would be a constant nobody could ever catch moving. */
  float cyc  = fract(sT * 0.00024);
  float c0   = mix(0.52, 0.14, cyc);
  float amp  = 0.06 + 0.94 * pow(sin(cyc * 3.14159265), 1.4);
  float bl   = (lat - c0) / 0.155;
  float band = exp(-bl * bl) * amp;
  float grp  = fbm(qr * 2.7 + vec3(0.0, sT * 0.004, 0.0));
  float pen  = smoothstep(0.545, 0.640, grp) * band;
  float umb  = smoothstep(0.605, 0.665, grp) * band;
  pen *= 0.72 + 0.42 * noise(qr * 44.0);

  /* ---- faculae ----
     Bright patches that show only near the limb \u2014 they lie in the magnetic
     network, in the lanes, and they are visible there and not in the middle
     of the disc because at a shallow angle you are seeing down the side of a
     hot wall. Which means the same term that darkens the edge has something
     brightening it, and that quarrel across the limb is a good part of why a
     photograph of the sun does not look like an airbrushed ball. */
  float fac = lane * (1.0 - smoothstep(0.05, 0.62, mu)) * (1.0 - clamp(pen, 0.0, 1.0));

  /* The colour follows the *angle*, not the brightness. Mixing by the lit
     value instead made every dark lane in the middle of the disc go amber, as
     though the cool gas were somewhere other than where it is: the limb is
     cooler because you are seeing a shallower layer there, and a lane is
     dimmer because the gas in it is sinking. Two different facts, and only one
     of them is about temperature. */
  vec3 tint = mix(uEdge, uCore, pow(mu, 0.85));
  /* a spot is cooler gas, so it goes the way the limb goes and then further:
     down the same amber into rust. Tinting rather than only darkening is what
     stops it looking like a grey sticker. */
  tint = mix(tint, tint * vec3(0.94, 0.60, 0.34), clamp(pen, 0.0, 1.0));

  /* The middle of the disc is meant to clip and the rest of it is not. A star
     should saturate somewhere \u2014 that is what makes it read as a source rather
     than as a lit ball \u2014 but at 1.16, with the old flat falloff, it saturated
     everywhere and every term above was computed and thrown away by the
     clamp.

     1.14 rather than 1.22, now that there is something to lose. The extra
     stop bought nothing but a wider white hole in the middle, and it took the
     granulation, the faculae and the near edge of every spot with it \u2014 the
     terms are all multiplicative, so anything past the clamp is not "bright",
     it is simply not drawn. The disc still saturates; it just does it over
     the inner quarter instead of the inner half. */
  float v = ld * cell * 1.14;
  /* An umbra is about a fifth of the photosphere's brightness, and the floor
     here says so rather than letting the two terms drive it to black: a spot
     that reaches zero is a hole punched in the star, and the thing that makes
     one look real is that you can still see it is made of the same gas. */
  v *= clamp(1.0 - 0.55 * pen - 0.30 * umb, 0.15, 1.0);
  v += fac * 0.30;
  /* a system switched off in the legend has to be able to take its star
     with it, and an opaque disc cannot be dimmed */
  if (vA < 0.003) discard;
  gl_FragColor = vec4(pow(clamp(tint * v * uBright, 0.0, 1.0), vec3(0.4545)), vA);
}`,Zg=`
uniform vec3 uCol; uniform float uAmt; uniform float uTime;
varying vec3 vN; varying vec3 vE; varying vec3 vP;
${yp}
void main(){
  vec3 q = normalize(vP);
  float f = 1.0 - abs(dot(normalize(vN), normalize(vE)));
  /* Spicules. The chromosphere is not a layer, it is a forest \u2014 hundreds of
     thousands of jets standing off the limb, each a few hundred kilometres
     across and each lasting minutes. Drawn as an even ring it comes out as a
     pencil line round the disc, which is the one shape it never has. Breaking
     the alpha with a fast, fine field turns that line into a fringe, and the
     motion is quick because a spicule's whole life is quick. */
  float sp = 0.70 + 0.54 * noise(q * 42.0 + vec3(0.0, uTime * 0.34, 0.0));
  float a = pow(f, 3.4) * uAmt * sp;
  if (a < 0.002) discard;
  gl_FragColor = vec4(pow(uCol * (0.55 + f * 0.75), vec3(0.4545)), a);
}`,H1=`
uniform vec3 uCol; uniform float uAmt; uniform float uTime;
varying vec3 vN; varying vec3 vE; varying vec3 vP;
${yp}
void main(){
  float f = 1.0 - abs(dot(normalize(vN), normalize(vE)));
  float ring = smoothstep(0.66, 0.99, f);
  if (ring < 0.003) discard;
  /* the same shear the spots ride, because a prominence is held out along
     the same field the shear is winding up \u2014 the two would drift apart
     within one rotation if only one of them knew about it */
  vec3 qr = spinDiff(normalize(vP), uTime * 0.021);
  float m = fbm(qr * 3.3 + vec3(0.0, uTime * 0.010, 0.0));
  float loop = smoothstep(0.600, 0.760, m);
  /* fibrous along its length, the way a loop is a bundle of threads */
  loop *= 0.50 + 0.80 * noise(qr * 26.0 + vec3(uTime * 0.09, 0.0, 0.0));
  float a = ring * loop * uAmt;
  if (a < 0.003) discard;
  gl_FragColor = vec4(pow(uCol * (0.90 + ring * 0.90), vec3(0.4545)), a);
}`;(function(){let m=document.createElement("canvas");m.width=m.height=256;let y=m.getContext("2d"),_=.255,E=Ae=>.0532*Math.pow(Ae,-2.5)+1.425*Math.pow(Ae,-7)+2.565*Math.pow(Ae,-17),w=.32,T=Math.pow(E(1),w),P=Math.pow(E(1/_),w),I=[[9,.7,.42],[13,2.3,.3],[17,4.1,.2],[23,1.2,.13]],D=y.createImageData(256,256),R=D.data;for(let Ae=0;Ae<256;Ae++){let He=(Ae+.5)/256*2-1;for(let $e=0;$e<256;$e++){let se=($e+.5)/256*2-1,me=Math.sqrt(se*se+He*He),Se=(Ae*256+$e)*4;if(me>=1){R[Se+3]=0;continue}let et=Math.max(1,me/_),Ye=(Math.pow(E(et),w)-P)/(T-P);if(!(Ye>0)){R[Se+3]=0;continue}let Je=Math.atan2(He,se),yt=0;for(let Yn=0;Yn<I.length;Yn++){let Bn=Math.cos(Je*I[Yn][0]+I[Yn][1]);yt+=I[Yn][2]*(Bn>0?Bn*Bn*Bn*Bn*Bn*Bn:0)}let Ct=Math.min(1,Math.max(0,(et-1.04)/.85));Ye*=1+Ct*(yt*1.9-.42);let Nt=Math.min(1,Math.max(0,(me-.84)/.16));Ye*=1-Nt*Nt*(3-2*Nt);let Mt=Math.round(Math.min(1,Math.max(0,Ye))*242);if(!Mt){R[Se+3]=0;continue}let yn=Math.min(1,(et-1)/1.6);R[Se]=255,R[Se+1]=Math.round(246+yn*6),R[Se+2]=Math.round(228+yn*26),R[Se+3]=Mt}}y.putImageData(D,0,0);let k=new ar(m);k.minFilter=jt,$n=new rr(new ir({map:k,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,blending:Vt,opacity:.85})),$n.scale.setScalar(260),$n.renderOrder=2,$n.visible=!1,Ft.add($n);let U=512,X=document.createElement("canvas");X.width=X.height=U;let G=X.getContext("2d"),Q=G.createImageData(U,U),le=Q.data,de=U/2,fe=10/(14*14*14)+5/(14*14)+.0025,H=10/(.9*.9*.9)+5/(.9*.9)+.0025-fe;for(let Ae=0;Ae<U;Ae++)for(let He=0;He<U;He++){let $e=(He-de)/de,se=(Ae-de)/de,me=Math.sqrt($e*$e+se*se),Se=0;if(me<1){let Ye=Math.max(.315,me*14);Se=((Ct=>10/(Ct*Ct*Ct)+5/(Ct*Ct)+.0025)(Ye)-fe)/H,Se=Se>0?Math.pow(Se,.42):0,Se+=.03*Math.exp(-Math.pow((me-.46)*7,2));let yt=Math.min(1,Math.max(0,(me-.8)/.2));Se*=1-yt*yt*(3-2*yt)}let et=(Ae*U+He)*4;le[et]=255,le[et+1]=240-Math.min(88,me*92),le[et+2]=214-Math.min(150,me*168),le[et+3]=Math.max(0,Math.min(255,Se*255))|0}G.putImageData(Q,0,0);let J=new ar(X);J.minFilter=jt,Vn=new rr(new ir({map:J,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1,blending:Vt,opacity:0})),Vn.scale.setScalar(600),Vn.renderOrder=4,Vn.visible=!1,Ft.add(Vn);let Me=256,Te=document.createElement("canvas");Te.width=Te.height=Me*2;let ve=Te.getContext("2d");ve.translate(Me,Me);let re=46;for(let Ae=0;Ae<re;Ae++){let He=Ae/re*f,$e=(Math.sin(Ae*2.31)+Math.sin(Ae*.73)+Math.sin(Ae*5.7)*.4)/2.4,se=Me*(.34+.62*Math.pow(Math.abs($e),.85)),me=.01+.02*Math.abs(Math.sin(Ae*1.7)),Se=ve.createLinearGradient(0,0,Math.cos(He)*se,Math.sin(He)*se);Se.addColorStop(0,"rgba(255,240,205,0.42)"),Se.addColorStop(.22,"rgba(255,206,138,0.16)"),Se.addColorStop(.6,"rgba(255,164,86,0.045)"),Se.addColorStop(1,"rgba(255,140,60,0)"),ve.fillStyle=Se,ve.beginPath(),ve.moveTo(0,0),ve.lineTo(Math.cos(He-me)*se,Math.sin(He-me)*se),ve.lineTo(Math.cos(He)*se*1.04,Math.sin(He)*se*1.04),ve.lineTo(Math.cos(He+me)*se,Math.sin(He+me)*se),ve.closePath(),ve.fill()}let Ee=new ar(Te);Ee.minFilter=jt,hi=new rr(new ir({map:Ee,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,blending:Vt,opacity:.6})),hi.scale.setScalar(420),hi.renderOrder=2,hi.visible=!1,Ft.add(hi)})();let Xo=null;function O1(){if(Xo)return Xo;let o=256,d=document.createElement("canvas");d.width=d.height=o;let m=d.getContext("2d"),y=m.createRadialGradient(o/2,o/2,0,o/2,o/2,o/2);return[[0,0],[.543,0],[.547,.16],[.6,.2],[.67,.24],[.676,.72],[.72,.95],[.775,.86],[.82,.97],[.856,.88],[.862,.1],[.886,.08],[.894,.66],[.94,.61],[.973,.56],[.9765,.06],[.98,.58],[.997,.44],[1,0]].forEach(([E,w])=>y.addColorStop(E,`rgba(255,255,255,${w})`)),m.fillStyle=y,m.fillRect(0,0,o,o),Xo=new ar(d),Xo.minFilter=jt,Xo}function wp(o,d){let m=new Cn(Object.assign({color:16777215,transparent:!0,opacity:1},o));return m.onBeforeCompile=y=>{y.vertexShader=`attribute float aAlpha;
varying float vStarA;
`+(d?`varying float vFres;
`:"")+y.vertexShader.replace("void main() {",`void main() {
	vStarA = aAlpha;`),d&&(y.vertexShader=y.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
	vec3 sNrm = normal;
#ifdef USE_INSTANCING
	sNrm = mat3( instanceMatrix ) * sNrm;
#endif
	vFres = 1.0 - abs( dot( normalize( normalMatrix * sNrm ),
	                       normalize( -mvPosition.xyz ) ) );`)),y.fragmentShader=`varying float vStarA;
`+(d?`varying float vFres;
`:"")+y.fragmentShader.replace("vec4 diffuseColor = vec4( diffuse, opacity );",`vec4 diffuseColor = vec4( diffuse, opacity * vStarA );
	if ( diffuseColor.a < 0.002 ) discard;`+(d?`
	float sHot = pow( 1.0 - vFres, 0.55 );
	diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 1.0 ), sHot );
	diffuseColor.rgb *= 1.0 + sHot * sHot * 1.9;`:""))},m.customProgramCacheKey=()=>d?"starHot":"starAlpha",m}let Pn=null;function B1(){if(Pn)return Pn;let o=768,d=o/2,m=.4,y=m*(46/22),_=document.createElement("canvas");_.width=_.height=o;let E=_.getContext("2d"),w=E.createImageData(o,o),T=w.data,P=new Float32Array(o*o*3),I=1e-6,D=(de,fe)=>Math.exp(-(de*de)/(2*fe*fe)),R=de=>de<0?0:de>1?1:de,k=(de,fe)=>Math.max(.34,.78+.46*(.54*Math.sin(de*1+fe)+.29*Math.sin(de*2.3+fe*1.7+1.1)+.17*Math.sin(de*4.1-fe*.9+2.7))),U=(de,fe)=>.7+.3*k(de,fe),X=(de,fe)=>.84+.22*Math.sin(de*17+fe*41)+.13*Math.sin(de*31-fe*23+2),G=[0,0,0],Q=(de,fe)=>{if(de=R(de),G[0]=1,G[1]=.4+.6*R((de-.02)/.38),G[2]=.14+.86*R((de-.1)/.48),fe){let H=R((de-.66)/.34);G[0]-=.74*H,G[1]-=.24*H}return G};for(let de=0;de<o;de++){let fe=(de-d)/d;for(let H=0;H<o;H++){let J=(H-d)/d,Me=Math.sqrt(J*J+fe*fe);if(Me>=1)continue;let Te=(de*o+H)*3,ve=0,re=0,Ee=0,Ae=(Ye,Je)=>{ve+=Ye*Je[0],re+=Ye*Je[1],Ee+=Ye*Je[2]},He=Math.atan2(fe,J),$e=Me>1e-4?-fe/Me:0,se=k(He,0),me=X(He,Me),Se=Me-m;{let Ye=.0155*(.8+.38*k(He,2.2)),Je=D(Se,Ye)*(Se<0?.34:1);Se>0&&(Je+=.17*Math.exp(-Se/.14)),Je*=.46*se*me,Je>.002&&Ae(Je,Q((Se+.016)/.052,!1))}{let Ye=D(Se,.019)*Math.pow(R($e),5)*.6*se;Ye>.002&&Ae(Ye,Q((Se+.02)/.062,!1));let Je=D(Se,.025)*Math.pow(R(-$e),6)*.28*se;Je>.002&&Ae(Je,Q((Se+.024)/.07,!1))}{let Ye=Math.min(Math.abs(He),Math.abs(Math.abs(He)-Math.PI)),Je=Math.abs(He)<Math.PI*.5,yt=k(Je?.6:3.4,1.3),Ct=D(Ye,.145)*D(Se,.028)*.84*yt;if(Ct>.002&&Ae(Ct,Q((Se+.02)/.075,!1)),Se>0){let Nt=.4*D(Ye,.082)*Math.exp(-Se/.115)*yt;Nt>.002&&Ae(Nt,Q(.72+.28*R(Se/.2),!0))}}{let Ye=.024+.032*Math.abs(fe),Je=D(J,Ye)*Math.max(0,1-Math.abs(fe)/.94);Je=Je*Je*.92*U(fe*3,4.1),Je>.002&&Ae(Je,[1,.93,.77])}{let Ye=D(fe,.012)*Math.max(0,1-Math.abs(J)/.99)*.3*U(J*2.6,5.7);Ye>.002&&Ae(Ye,[.93,.97,1])}{let Ye=Me-y,Je=D(Ye,.024)*(Ye<0?.4:1)*.2*k(He,3.9)*me;Je>.002&&Ae(Je,Q((Ye+.022)/.068,!1))}{let Ye=Math.hypot(J,fe+y+.55)-.55,Je=D(Ye,.016)*Math.pow(R($e),2.4)*D(J,.22)*.66*k(1.9,6.3);Je>.002&&Ae(Je,Q(R(.5-Ye/.042),!0))}if(ve+re+Ee<1e-4)continue;P[Te]=ve,P[Te+1]=re,P[Te+2]=Ee;let et=Math.max(ve,Math.max(re,Ee));et>I&&(I=et)}}for(let de=0;de<o;de++){let fe=(de-d)/d;for(let H=0;H<o;H++){let J=(H-d)/d,Me=Math.sqrt(J*J+fe*fe),Te=(de*o+H)*3,ve=(de*o+H)*4,re=P[Te],Ee=P[Te+1],Ae=P[Te+2],He=Math.max(re,Math.max(Ee,Ae));if(He<1e-4)continue;let $e=He/I,se=R((Me-.86)/.14);if($e*=1-se*se*(3-2*se),$e<.0016)continue;let me=1/He;T[ve]=Math.min(255,re*me*255)|0,T[ve+1]=Math.min(255,Ee*me*255)|0,T[ve+2]=Math.min(255,Ae*me*255)|0,T[ve+3]=Math.max(0,Math.min(255,$e*255))|0}}E.putImageData(w,0,0);let le=new ar(_);return le.minFilter=jt,Pn=new rr(new ir({map:le,transparent:!0,depthWrite:!1,depthTest:!1,blending:Vt,opacity:0})),Pn.scale.setScalar(600),Pn.renderOrder=5,Pn.visible=!1,Ft.add(Pn),Pn}function Jg(){if(tn=new Hn,Ft.add(tn),ep=new Hn,tn.add(ep),pg=[],At.length){let w=At.length,T=new mi(1,4),P=new mi(1.42,2),I=new Pi(2.2,2.235,128),D=new Pi(2.86,2.882,128),R=new Float32Array(w),k=new Float32Array(w*3),U=new Float32Array(w*3);uu=new Float32Array(w).fill(1),du=new Float32Array(w).fill(1),fu=new Float32Array(w).fill(1),pu=new Float32Array(w).fill(1),T.setAttribute("aAlpha",new wn(uu,1)),T.setAttribute("aSeed",new wn(R,1)),T.setAttribute("aCore",new wn(k,3)),T.setAttribute("aEdge",new wn(U,3)),P.setAttribute("aAlpha",new wn(du,1)),I.setAttribute("aAlpha",new wn(fu,1)),D.setAttribute("aAlpha",new wn(pu,1)),Wo=new gn({vertexShader:qo,fragmentShader:xp,uniforms:{uTime:{value:0},uBright:{value:1},uCore:{value:new Pe(1,1,1)},uEdge:{value:new Pe(1,1,1)}},transparent:!0,depthWrite:!0}),Vs=new sr(T,Wo,w),Pa=new sr(P,wp({side:xn,blending:Vt,depthWrite:!1}),w),Da=new sr(I,wp({side:ii,blending:Vt,depthWrite:!1}),w),Ia=new sr(D,wp({side:ii,blending:Vt,depthWrite:!1}),w),[Vs,Pa,Da,Ia].forEach(G=>{G.instanceMatrix.setUsage(Li),G.frustumCulled=!1,ep.add(G)});let X=1;At.forEach(G=>{(G.n|0)>X&&(X=G.n|0)}),At.forEach((G,Q)=>{G.si=Q,G.sR=G.R||(G.tier===0?8:5),G.sx=0,G.sy=0,G.rz=Math.random()*f,G.rx=Math.PI/2-(G.tier?.1:.36);let le=Math.log(1+(G.n|0))/Math.log(1+X),de=3400+le*le*3600;G.temp=de,R[Q]=(Go(G.key||String(Q))&4095)/4096;let fe=Ba(de),H=Ba(de*.762);k[Q*3]=fe[0],k[Q*3+1]=fe[1],k[Q*3+2]=fe[2],U[Q*3]=H[0],U[Q*3+1]=H[1],U[Q*3+2]=H[2];let J=op(de);G.starCol=new Pe(J[0],J[1],J[2]),Pa.setColorAt(Q,G.color),Da.setColorAt(Q,G.color),Ia.setColorAt(Q,G.color),G.op0={core:1,shell:.055,ring:.115,ring2:.055,glow:G.tier===0?1.05:.58},G.vis=1,pg.push(G)}),[Vs,Pa,Da,Ia].forEach(G=>{G.instanceColor&&(G.instanceColor.needsUpdate=!0)})}Gs=null,dr=new Et(new mi((lt||1200)+120,3),new Cn({color:4216427,wireframe:!0,transparent:!0,opacity:.016,blending:Vt,depthWrite:!1,side:ii})),dr.scale.y=.68,dr.visible=$>0,tn.add(dr),Qr=function(){if(!$||!ur.length)return null;let T=ur[ur.length-1]*1.35,P=128,I=12,D=[],R=[],k=[.3,.62,.85],U=(le,de,fe,H,J,Me)=>{D.push(le,0,de,fe,0,H),R.push(k[0]*J,k[1]*J,k[2]*J,k[0]*Me,k[1]*Me,k[2]*Me)},X=ur.slice();X.push(T),X.forEach((le,de)=>{let fe=de===X.length-1?.11:.2;for(let H=0;H<P;H++){let J=H/P*f,Me=(H+1)/P*f;U(Math.cos(J)*le,Math.sin(J)*le,Math.cos(Me)*le,Math.sin(Me)*le,fe,fe)}});for(let le=0;le<I;le++){let de=le/I*f,fe=Math.cos(de),H=Math.sin(de),J=ur[0]*.28;U(fe*J,H*J,fe*T,H*T,.2,.02)}for(let le=0;le<36;le++){let de=le/36*f,fe=Math.cos(de),H=Math.sin(de),J=le%9===0?T*.045:T*.018;U(fe*T,H*T,fe*(T+J),H*(T+J),.24,.05)}let G=new Qe;G.setAttribute("position",new Xe(new Float32Array(D),3)),G.setAttribute("color",new Xe(new Float32Array(R),3));let Q=new jn(G,new un({vertexColors:!0,transparent:!0,opacity:.85,blending:Vt,depthWrite:!1}));return Q.frustumCulled=!1,Q.visible=!!N.grid,tn.add(Q),Q}();let o=`
varying vec3 vW;
void main(){
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,d=`
uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uCol;
uniform float uR0, uR1, uAmt;
varying vec3 vW;
void main(){
  vec3 rel = vW - uSun;
  float r = length(rel);
  float x = r / uR0;
  /* the radial law, held off the star: inside 0.9 r0 the corona and the
     glare sprite are what a reader sees, and a sheet running to r^-2.3
     under them is a white hole */
  float rad = pow(max(x, 0.35), -2.3);
  float hole = smoothstep(0.30, 1.0, x);
  float edge = 1.0 - smoothstep(uR1 * 0.55, uR1, r);
  vec3 toCam = normalize(uCam - vW);
  vec3 toSun = normalize(uSun - vW);
  /* c = 1: the star is behind the camera, the dust is seen full and lit
     from the front. c = -1: the star is beyond the dust, seen through it. */
  float c = clamp(dot(toCam, toSun), -1.0, 1.0);
  /* Henyey\u2013Greenstein with the scattering angle's cosine, which is -c: the
     light came *from* the star and leaves *toward* the camera */
  float g = 0.55;
  float fwd = (1.0 - g * g) / pow(1.0 + g * g + 2.0 * g * c, 1.5);
  /* the gegenschein: a backscatter peak a few degrees across */
  float back = 0.55 * exp(-(1.0 - c) * 28.0);
  float ph = 0.28 + 0.12 * fwd + back;
  float I = rad * hole * edge * ph * uAmt;
  gl_FragColor = vec4(uCol * I, 1.0);
}`;if(Ca=function(){if(!$||!ur.length||mt<0)return null;let T=ur[0]*.34,P=ur[ur.length-1]*1.15,I=new Jr(P*2,P*2,1,1);I.rotateX(-Math.PI/2);let D=new gn({uniforms:{uSun:{value:new L},uCam:{value:new L},uCol:{value:new Pe(1,.9,.76)},uR0:{value:T},uR1:{value:P},uAmt:{value:0}},vertexShader:o,fragmentShader:d,transparent:!0,depthWrite:!1,depthTest:!0,side:ii,blending:Vt}),R=new Et(I,D);return R.frustumCulled=!1,R.renderOrder=-2,tn.add(R),R}(),function(){let T=At.length;if(!T){Ii=Ei=null;return}let P=new Float32Array(T*3),I=new Float32Array(T),D=new Float32Array(T*3),R=new Float32Array(T);At.forEach((fe,H)=>{fe.pos.toArray(P,H*3),fe.gz0=fe.R*(fe.tier===0?17:10),I[H]=fe.gz0,R[H]=fe.tier===0?.85:.5,fe.color.clone().lerp(new Pe(16777215),.44).toArray(D,H*3)});let k=new Qe;k.setAttribute("position",new Xe(P,3)),k.setAttribute("aSize",new Xe(I,1)),k.setAttribute("aColor",new Xe(D,3)),k.setAttribute("aAlpha",new Xe(R,1)),yc(k,T),Ii=new Ci(k,Ni(600,.07,.62)),Ii.material.uniforms.uMinPx.value=3.2,Ii.frustumCulled=!1,tn.add(Ii);let U=3,X=new Float32Array(T*U*3),G=new Float32Array(T*U),Q=new Float32Array(T*U*3),le=new Float32Array(T*U);At.forEach((fe,H)=>{fe.hzA=fe.oA0*2.7+H*1.9;let J=fe.reachA!==void 0?fe.reachA+fe.reachB*N.gap:fe.reach||120,Me=fe.color.clone().lerp(new Pe(4880584),.22);for(let Te=0;Te<U;Te++){let ve=H*U+Te;fe.pos.toArray(X,ve*3),G[ve]=fe.tier===0?J*(Te?3.4:5):0,le[ve]=0,Me.toArray(Q,ve*3)}});let de=new Qe;de.setAttribute("position",new Xe(X,3)),de.setAttribute("aSize",new Xe(G,1)),de.setAttribute("aColor",new Xe(Q,3)),de.setAttribute("aAlpha",new Xe(le,1)),yc(de,T*U),Ei=new Ci(de,Ni(600,0,0)),Ei.frustumCulled=!1,Ei.renderOrder=-1,tn.add(Ei)}(),Gt=null,$&&mt>=0){let w=ct[mt];Gt=new Hn;let T=new gn({vertexShader:qo,fragmentShader:xp,uniforms:{uTime:{value:0},uBright:{value:1},uCore:{value:new Pe().fromArray(Ba(6300))},uEdge:{value:new Pe().fromArray(Ba(4800))}}}),P=new Et(new mi(w,5),T);Gt.add(P);let I=new gn({vertexShader:qo,fragmentShader:Zg,transparent:!0,depthWrite:!1,blending:Vt,uniforms:{uCol:{value:new Pe(16742986)},uAmt:{value:.95},uTime:{value:0}}}),D=new Et(new mi(w*1.04,4),I);Gt.add(D);let R=new gn({vertexShader:qo,fragmentShader:H1,transparent:!0,depthWrite:!1,blending:Vt,uniforms:{uCol:{value:new Pe(16738874)},uAmt:{value:2},uTime:{value:0}}}),k=new Et(new mi(w*1.18,4),R);Gt.add(k);let U=new Et(new mi(w*1.55,3),new Cn({color:16764810,transparent:!0,opacity:.085,blending:Vt,depthWrite:!1,side:xn}));Gt.add(U);let X=3.6+Math.min(2.2,w*.03);Gt.userData={surface:P,rim:D,pro:k,halo:U,R:w,lit:X,surfMat:T,rimMat:I,proMat:R},tn.add(Gt),Au.intensity=X}ji=new mi(1,$>900?2:3),mu=new ba({emissive:132620,emissiveIntensity:1,shininess:18,specular:725014,flatShading:!1}),mu.extensions={derivatives:!0},mu.onBeforeCompile=w=>{Wg(w,!0),Ng(w,!0)},En=new sr(ji,mu,Math.max(1,$)),En.count=$,En.instanceMatrix.setUsage(Li),En.frustumCulled=!1,tn.add(En);for(let w=0;w<$;w++)En.setColorAt(w,new Pe(ne[w*3],ne[w*3+1],ne[w*3+2]));En.instanceColor&&(En.instanceColor.setUsage(Li),En.instanceColor.needsUpdate=!0);{let w=new Float32Array(Math.max(1,$)*4);Vo=new Uint8Array(Math.max(1,$));for(let T=0;T<$;T++)jg(T,w,T*4),Vo[T]=w[T*4+3];ji.setAttribute("aSurf",new wn(w,4)),N1()}{mp=new Array($),gc=new Float32Array(Math.max(1,$)),Xs=new Float32Array(Math.max(1,$)*4),Ys=new Float32Array(Math.max(1,$)*4),Si=new Float32Array(Math.max(1,$)*4),vu=new Float32Array(Math.max(1,$)),ci=new Float32Array(Math.max(1,$)*4);let w=new Pe(16777215),T=new Pe;for(let I=0;I<$;I++){let D=oe[I],R=null;if(D.kind==="wiki")R=D.anchor;else if(D.kind==="moon"){let k=oe[D.anchorNode];R=k&&k.kind==="wiki"?k.anchor:null}mp[I]=R,gc[I]=R?Math.max(20,(R.reach||60)*.55):Math.max(300,(lt||1600)*.9),R?T.copy(R.starCol||R.color):T.copy(x1),T.toArray(Ys,I*4),Ys[I*4+3]=D.kind==="wiki"?1:D.kind==="moon"?.18:D.kind==="core"?0:.4,D.kind==="moon"&&(Si[I*4+3]=ct[D.anchorNode]||0,vu[I]=R?R.R||6:mt>=0?ct[mt]:34),Ru(I,N.spr,1,Xs.subarray(I*4,I*4+4))}let P=new wn(Xs,4);P.setUsage(Li),ji.setAttribute("aStar",P),ji.setAttribute("aStarCol",new wn(Ys,4));{let I=new wn(Si,4);I.setUsage(Li),ji.setAttribute("aOcc",I),ji.setAttribute("aOccS",new wn(vu,1)),ji.setAttribute("aRingS",new wn(ci,4))}}fr=new Qe,ic=new Float32Array(Math.max(1,$)*3),Ws=new Float32Array(Math.max(1,$)),ka=new Float32Array(Math.max(1,$)*3),gu=new Float32Array(Math.max(1,$)),qs=new Float32Array(Math.max(1,$));for(let w=0;w<$;w++)qs[w]=Ws[w]=ct[w]*(oe[w].kind==="core"?16:oe[w].kind==="wiki"?9:7.5),gu[w]=oe[w].kind==="wiki"?.8:oe[w].kind==="core"?1:.58,ka[w*3]=ne[w*3],ka[w*3+1]=ne[w*3+1],ka[w*3+2]=ne[w*3+2];fr.setAttribute("position",new Xe(ic,3)),fr.setAttribute("aSize",new Xe(Ws,1)),fr.setAttribute("aColor",new Xe(ka,3)),fr.setAttribute("aAlpha",new Xe(gu,1)),yc(fr,Math.max(1,$)),fr.setDrawRange(0,$),Fa=new Ci(fr,Ni(600,.06,0)),Fa.material.uniforms.uMinPx.value=1.8,Fa.frustumCulled=!1,tn.add(Fa);let m=40;Ai=[];{let w=D=>D!==mt&&Fe[D].k!=="raw"&&(Fe[D].inb|0)>=3,T=new Map,P=[];for(let D=0;D<$;D++){if(!w(D))continue;P.push(D);let R=Fe[D].c,k=T.get(R);(k===void 0||(Fe[D].inb|0)>(Fe[k].inb|0))&&T.set(R,D)}P.sort((D,R)=>(Fe[R].inb|0)-(Fe[D].inb|0));let I=new Set(T.values());P.slice(0,Math.max(1,Math.ceil(P.length*.01))).forEach(D=>I.add(D)),Ai=P.filter(D=>I.has(D)).slice(0,m)}if(Ai.length){let w=Math.max.apply(null,Ai.map(I=>Fe[I].inb|0)),T=new Pi(1,1.8297,128,1),P=new Cn({map:O1(),transparent:!0,opacity:.72,side:ii,blending:Vt,depthWrite:!1});P.customProgramCacheKey=()=>"vo-ring-shadow",P.onBeforeCompile=I=>{I.vertexShader=`attribute vec4 aRing;
varying vec3 vRP; varying vec3 vRC; varying vec3 vRS; varying float vRR;
`+I.vertexShader,I.vertexShader=I.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
  vRP = mvPosition.xyz;
  vRC = (modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  vRS = (viewMatrix * modelMatrix * vec4(aRing.xyz, 1.0)).xyz;
  vRR = aRing.w;`),I.fragmentShader=`varying vec3 vRP; varying vec3 vRC; varying vec3 vRS; varying float vRR;
`+I.fragmentShader,I.fragmentShader=I.fragmentShader.replace("#include <output_fragment>",`  {
    vec3 L = normalize(vRS - vRC);
    vec3 rel = vRP - vRC;
    float tt = dot(rel, L);
    float sh = 1.0;
    if (tt < 0.0 && vRR > 0.0) {
      float d = length(rel - L * tt);
      sh = 0.07 + 0.93 * smoothstep(vRR * 0.80, vRR * 1.30, d);
    }
    vec3 vw = normalize(-vRP);
    float cth = clamp(dot(-L, vw), -1.0, 1.0);
    float den = 1.3844 - 1.24 * cth;
    float fw = min(0.6156 / max(den * sqrt(max(den, 1e-4)), 0.02), 4.0);
    outgoingLight *= sh * (0.70 + 0.32 * fw);
    diffuseColor.a *= sh;
  }
#include <output_fragment>`)},Kn=new sr(T,P,Ai.length),Kn.instanceMatrix.setUsage(Li),Kn.frustumCulled=!1,tn.add(Kn),_u=[],No=new Float32Array(Ai.length),hc=new Float32Array(Ai.length*4);{let I=new wn(hc,4);I.setUsage(Li),T.setAttribute("aRing",I)}Ai.forEach((I,D)=>{_u.push(new mn().setFromEuler(new Cr(Ri[I*4]+Math.PI*.5,0,0))),No[D]=1.185+(Fe[I].inb|0)/w*.135,ci[I*4]=0,ci[I*4+1]=Math.cos(Ri[I*4]),ci[I*4+2]=Math.sin(Ri[I*4]),ci[I*4+3]=ct[I]*No[D],Kn.setColorAt(D,new Pe(v(ne[I*3],1,.3),v(ne[I*3+1],1,.3),v(ne[I*3+2],1,.3)))}),Kn.instanceColor&&(Kn.instanceColor.needsUpdate=!0)}On=an.length,dc=On>4e3?10:On>1500?14:24,gt=new Array(On),Us=new Float32Array(Math.max(1,On)).fill(1);{let w=fp(Math.max(1,On),dc);rc=w.geo,mg=w.pos,gg=w.col,yg=w.perStrip,rc.setDrawRange(0,On*w.idxPerStrip),vg=dp(1),yu=new Et(rc,vg),yu.frustumCulled=!1,tn.add(yu)}xg=new Int32Array(Mu),xu=new Int32Array($);for(let w=0;w<$;w++)xu[w]=w;xu.sort((w,T)=>ct[T]-ct[w]);{let w=fp(Mu,Oa);js=w.geo,tp=w.pos,np=w.col,Gb=w.perStrip,wg=w.idxPerStrip,js.setDrawRange(0,0),Io=new Et(js,dp(1.45)),Io.frustumCulled=!1,tn.add(Io)}sc=new Int32Array(Fr),ko=new Float32Array(Fr),ip=new Float32Array(Fr);for(let w=0;w<Fr;w++)sc[w]=Math.floor(Math.random()*Math.max(1,On)),ko[w]=Math.random(),ip[w]=.0024+Math.random()*.005;ac=new Float32Array(Fr*Nr*3),rp=new Float32Array(Fr*Nr),oc=new Float32Array(Fr*Nr*3),wu=new Float32Array(Fr*Nr),pr=new Qe,pr.setAttribute("position",new Xe(ac,3)),pr.setAttribute("aSize",new Xe(rp,1)),pr.setAttribute("aColor",new Xe(oc,3)),pr.setAttribute("aAlpha",new Xe(wu,1)),yc(pr,Fr*Nr),lc=new Ci(pr,Ni(600)),lc.frustumCulled=!1,lc.visible=On>0,tn.add(lc),kr=new Hn,kr.visible=!1,tn.add(kr),bu=new Et(new Pi(1,1.02,96),new Cn({color:16758344,transparent:!0,opacity:.85,side:ii,blending:Vt,depthWrite:!1})),kr.add(bu),mr=new Et(new Pi(1,1.05,48),new Cn({color:6087167,transparent:!0,opacity:.75,side:ii,blending:Vt,depthWrite:!1})),mr.visible=!1,tn.add(mr),Ti=new Hn,Ti.visible=!1,tn.add(Ti);let y=10980346;cc=new Et(new Pi(1,1.045,84),new Cn({color:y,transparent:!0,opacity:.85,side:ii,blending:Vt,depthWrite:!1})),Ti.add(cc),Fo=new Et(new Pi(1,1.1,64,1,0,f*.34),new Cn({color:y,transparent:!0,opacity:.6,side:ii,blending:Vt,depthWrite:!1})),Ti.add(Fo),Na=new Et(new yo(1,0),new Cn({color:y,transparent:!0,opacity:.75,blending:Vt,depthWrite:!1})),Ti.add(Na),es=[],At.forEach(w=>{let T=$g(w.code,"#5ce1ff",w.tier===0?22:17,!0);tn.add(T),es.push({sprite:T,get:()=>w.pos,far:(w.tier===0?1.6:2.8)*Math.max(600,(lt||1200)*.8),cat:w})});let _=220,E=[];for(let w=0;w<$;w++)Fe[w].k!=="raw"&&E.push(w);E.sort((w,T)=>(Fe[T].inb|0)-(Fe[w].inb|0)),E.slice(0,_).forEach(w=>{let T=$g(Fe[w].n,"#9beaff",12+Math.min(7,Fe[w].inb*.12));T.material.opacity=0,tn.add(T),es.push({sprite:T,idx:w,far:Math.max(420,(lt||1200)*.42),node:!0})}),Og(lt||1600),zg(lt||1600),hm(),$n&&($n.visible=$>0,$n.scale.setScalar(Math.max(120,(ct[mt]||17)*15))),hi&&(hi.visible=$>0,hi.scale.setScalar(Math.max(120,(ct[mt]||17)*15)*1.62)),Vn&&(Vn.visible=!1,Vn.material.opacity=0),Pn&&(Pn.visible=!1,Pn.material.opacity=0),Mg(),Ha()}let z1='"Malgun Gothic","Apple SD Gothic Neo","Yu Gothic UI","Microsoft YaHei UI","Segoe UI",sans-serif',Kg=26;function $g(o,d,m,y){let _=String(o),E=_.length>Kg?_.slice(0,Kg-1)+"\u2026":_,w=46,T=15,P=Math.round(w*.15),I=document.createElement("canvas"),D=I.getContext("2d"),R=(y?"700 ":"600 ")+w+"px "+z1,k=y&&"letterSpacing"in D?Math.round(w*.13)+"px":"";k&&(D.letterSpacing=k),D.font=R,I.width=Math.ceil(D.measureText(E).width)+T*2+(k?w*.13:0),I.height=w+T*2,D.font=R,k&&(D.letterSpacing=k),D.textBaseline="middle",D.lineJoin="round",D.miterLimit=2;let U=I.height/2;D.shadowColor=d,D.shadowBlur=24,D.strokeStyle=d,D.lineWidth=P*.55,D.strokeText(E,T,U),D.shadowBlur=0,D.strokeStyle="rgba(2,7,14,.93)",D.lineWidth=P,D.strokeText(E,T,U),D.fillStyle="#eaf9ff",D.fillText(E,T,U);let X=new ar(I),G=Xt.capabilities.isWebGL2;X.generateMipmaps=G,X.minFilter=G?Sa:jt,X.magFilter=jt,X.anisotropy=Math.max(1,Math.min(8,Xt.capabilities.getMaxAnisotropy()));let Q=new rr(new ir({map:X,transparent:!0,depthWrite:!1,depthTest:!0,opacity:.9}));return Q.scale.set(m*I.width/I.height,m,1),Q.renderOrder=5,Q}function U1(){tn&&(tn.traverse(o=>{o.geometry&&o.geometry.dispose(),(Array.isArray(o.material)?o.material:o.material?[o.material]:[]).forEach(m=>{m.map&&m.map.dispose();let y=Or.indexOf(m);y>=0&&Or.splice(y,1),y=Bo.indexOf(m),y>=0&&Bo.splice(y,1),y=mc.indexOf(m),y>=0&&mc.splice(y,1),m.dispose()})}),Ft.remove(tn),tn=null,Gs=Ii=Ei=dr=En=Fa=yu=lc=null,Qr=Ca=null,Io=js=tp=np=null,kr=mr=Ti=La=Gt=null,Vs=Pa=Da=Ia=null,Wo=null,uu=du=fu=pu=null,Kn=null,Ai=[],_u=[],No=null,hc=null,Xo=null,es=[])}let ue={tgt:new L(0,0,0),tgtD:new L(0,0,0),dist:2400,distD:1250,th:.7,thD:.7,ph:1.06,phD:1.06,roll:0,rollD:0,thV:0,phV:0,aX:0,aY:0,idle:0,follow:-1};function as(){ue.idle=0}let Yo={th:.62,ph:.95,dist:1250};function G1(){ue.follow=-1,ue.tgtD.set(0,0,0),ue.thD=Yo.th,ue.phD=Yo.ph,ue.distD=Yo.dist,ue.rollD=0,ue.thV=0,ue.phV=0,as()}function V1(o){if(ue.follow>=0&&(ue.follow<$?ue.tgtD.set(xe[ue.follow*3],xe[ue.follow*3+1],xe[ue.follow*3+2]):ue.follow=-1),wr===1&&us<0){let P=g(o>1e-4?.016666666666666666/o:1,.25,4);ue.thV=ue.thV*.45+ue.aX*P*.14,ue.phV=ue.phV*.45+ue.aY*P*.14}else if(ue.thV||ue.phV){ue.thD-=ue.thV*o*60,ue.phD=g(ue.phD-ue.phV*o*60,.12,Math.PI-.12);let P=Math.pow(.045,o);ue.thV*=P,ue.phV*=P,Math.abs(ue.thV)<2e-5&&(ue.thV=0),Math.abs(ue.phV)<2e-5&&(ue.phV=0)}ue.aX=0,ue.aY=0,ue.idle+=o,ue.idle>7&&(ue.thD-=o*.019*g((ue.idle-7)/4,0,1));let d=1-Math.pow(.0012,o);ue.dist=v(ue.dist,ue.distD,d),ue.th=v(ue.th,ue.thD,d),ue.ph=v(ue.ph,ue.phD,d),ue.roll=v(ue.roll,ue.rollD,d*.7),ue.tgt.lerp(ue.tgtD,d);let m=ue.th,y=ue.ph,_=ue.dist,E=ue.roll,w=Math.sin(y),T=Math.cos(y);if(Ue.position.set(ue.tgt.x+_*w*Math.sin(m),ue.tgt.y+_*T,ue.tgt.z+_*w*Math.cos(m)),Ue.up.set(Math.sin(E),Math.cos(E),0),Ue.lookAt(ue.tgt),Lt){let P=u("mindbox").offsetWidth;if(P>1){let I=2*_*Math.tan(Ue.fov*Math.PI/360)*Ue.aspect;Qg.set(1,0,0).applyQuaternion(Ue.quaternion).multiplyScalar(I*(P*.5/Math.max(1,t()))),Ue.position.add(Qg)}}}let Qg=new L;function W1(o,d,m){ue.thD-=o,ue.phD=g(ue.phD-d,.12,Math.PI-.12),m&&(ue.aX+=o,ue.aY+=d),as()}function q1(o){ue.distD=g(ue.distD*o,12,24e3),as()}function X1(o,d){let m=new L().setFromMatrixColumn(Ue.matrix,0),y=new L().setFromMatrixColumn(Ue.matrix,1),_=ue.distD*.0016;ue.follow=-1,ue.tgtD.addScaledVector(m,-o*_).addScaledVector(y,d*_),as()}function bp(){G1(),rt("VIEW RESET")}function Cu(o,d){o<0||o>=$||(ui(o),ue.follow=o,ue.tgtD.set(xe[o*3],xe[o*3+1],xe[o*3+2]),ue.distD=g(ct[o]*(d?9:20)+34,34,900),ue.thV=0,ue.phV=0,as())}function ev(){if(!$)return 0;let o=new Float64Array($);for(let d=0;d<$;d++)o[d]=Math.hypot(xe[d*3],xe[d*3+1],xe[d*3+2]);return o.sort(),$<12?o[$-1]:o[Math.min($-1,Math.floor($*.93))]}function _p(){if(!tn)return;am(0);let o=ev();ue.follow=-1,ue.tgtD.set(0,0,0),ue.rollD=0,ue.thD=.62,ue.phD=.95,ue.thV=0,ue.phV=0,ue.distD=$?g(o*1.25+120,200,22e3):1250,ue.dist=ue.distD*1.35,ue.tgt.set(0,0,0),Yo.th=ue.thD,Yo.ph=ue.phD,Yo.dist=ue.distD,as()}let Pu=new L,tv=new L,nv=12,Y1=2.2,j1=1.18,Va=[];function Mp(o,d,m){if(!$)return-1;Ue.updateMatrixWorld();let y=t(),_=n(),E=(o*.5+.5)*y,w=(-d*.5+.5)*_,T=_*.5/Math.tan(Ue.fov*Math.PI/360);Va.length=0;let P=9;for(let U=0;U<$;U++){if(pt[U]<.12)continue;tv.set(xe[U*3]-Ue.position.x,xe[U*3+1]-Ue.position.y,xe[U*3+2]-Ue.position.z);let X=tv.length();if(X<.001||(Pu.set(xe[U*3],xe[U*3+1],xe[U*3+2]).project(Ue),Pu.z>1))continue;let G=(Pu.x*.5+.5)*y,Q=(-Pu.y*.5+.5)*_,le=Math.hypot(G-E,Q-w),de=Math.max(.6,ct[U]*T/X),fe=Math.max(de,ct[U]*Y1*T/X);if(le>Math.max(fe,nv))continue;let H=le<=de?0:le<=fe?1:2,J=H===0?X:H===1?le/fe:le/nv;H<P&&(P=H),Va.push(U,H,J)}if(!Va.length)return-1;let I=-1,D=1e30,R=-1,k=0;for(let U=0;U<Va.length;U+=3){if(Va[U+1]!==P)continue;let X=Va[U],G=Va[U+2];G<D&&(D=G,I=X),X===m&&(R=X,k=G)}return R>=0&&R!==I&&k<=D*j1?R:I}let ot=-1,_n=-1,Ks="",os=!1,vr=-1,Wa=new Set,jo=new Set;function Zo(){return Wa.size>1}function iv(o){vr=-1,(Wa.size||jo.size)&&(Wa=new Set,jo=new Set,o||rt(A("route.clear"))),Mc()}function Z1(o,d){if(Wa=new Set,jo=new Set,o<0||d<0||o>=$||d>=$||o===d||!vt)return 0;let m=new Int32Array($).fill(-1),y=new Uint8Array($);y[o]=1;let _=[o],E=!1;for(let P=0;P<_.length&&!E;P++){let I=_[P],D=vt[I];D&&D.forEach(R=>{y[R]||(y[R]=1,m[R]=I,_.push(R),R===d&&(E=!0))})}if(!E)return 0;let w=[];for(let P=d;P>=0&&(w.push(P),P!==o);P=m[P]);w.forEach(P=>Wa.add(P));let T=new Set;for(let P=0;P+1<w.length;P++){let I=w[P],D=w[P+1];T.add(I<D?I+":"+D:D+":"+I)}for(let P=0;P<On;P++){let I=an[P],D=I[0],R=I[1];T.has(D<R?D+":"+R:R+":"+D)&&jo.add(P)}return w.length-1}let _c=new Set,rv=new Set;function ui(o,d){let m=ot;if(ot=o,_c.clear(),o>=0&&(rv.add(o),o!==m&&!d&&(E_(o),Ce.on||Sc(o,1))),ue.follow=Lt?-1:o,vr>=0&&o>=0&&o!==vr){let y=Z1(vr,o);vr=-1,rt(y?A("route.hops",{n:y}):A("route.none"))}o>=0&&vt[o]&&vt[o].forEach(y=>_c.add(y)),Mc(),Lt&&o>=0&&Xp(o)}function sv(){let o=(ye.meta.years||[]).filter(Boolean);u("s-nodes").textContent=ye.meta.files||0,u("s-edges").textContent=ye.meta.edges||0,u("s-sys").textContent=At.length;{let m=ye.meta.broken|0;u("s-broken").textContent=m;let y=u("r-broken");y.classList.toggle("live",m>0),y.classList.toggle("on",os),y.title=m>0?A("broken.on"):A("broken.none")}u("s-span").textContent=o.length?o[0]+"\u2013"+o[o.length-1]:"\u2014",u("l-cnt").textContent=At.length,u("vault-name").textContent=ye.meta.vault||"EMPTY SPACE",u("hint").classList.toggle("on",$===0&&!q),u("b-clear").style.display=$&&!q?"":"none";let d=u("legbody");if(d.innerHTML="",!At.length){d.innerHTML='<div style="opacity:.3;font-size:9.5px;letter-spacing:.14em;padding:8px 0;text-align:center">NO VAULT LOADED</div>';return}At.forEach(m=>{let y=document.createElement("div");y.className="lrow",y.innerHTML='<span class="dot" style="color:#'+m.color.getHexString()+'"></span><em>'+M(Gg(m))+"</em><i>"+(m.temp?Op(m.temp)+" \xB7 ":"")+m.n+"</i>",m.temp&&(y.title=A("cls.star",{s:Op(m.temp),t:Math.round(m.temp/100)*100})),y.onclick=()=>{m.on=!m.on,y.classList.toggle("off",!m.on)},d.appendChild(y),m.el=y})}let Ep=14;function av(o){let d=[],m=[],y=[];an.forEach(([P,I,D])=>{P===o?d.push([I,D]):I===o&&(D===1?y:m).push([P,D])});let _=(P,I)=>{if(!I.length)return"";let D=new Set,R=I.filter(([X])=>!D.has(X)&&D.add(X)),k=([X,G])=>'<a data-i="'+X+'">'+(G===2?"\u2248 ":G===1?"\u2934 ":"\u2192 ")+M(Fe[X].n)+"</a>",U=R.slice(Ep);return"<b>"+P+" ("+R.length+")</b>"+R.slice(0,Ep).map(k).join("")+(U.length?'<span class="rest">'+U.map(k).join("")+'</span><u class="more">'+A("insp.more",{n:U.length})+"</u>":"")},E=Fe[o],w="",T=E.bk|0;if(T>0){let P=E.bn||[],I=P.slice(0,Ep);w='<b class="warn">'+A("insp.broken")+" ("+T+")</b>"+I.map(D=>'<i class="dead">\u2715 '+M(D)+"</i>").join("")+(P.length>I.length||T>P.length?'<u class="more">'+A("insp.more",{n:T-I.length})+"</u>":"")}return _("OUTBOUND",d)+_("BACKLINKS",m)+_("SOURCE MATERIAL",y)+w}function ov(o,d){o.querySelectorAll("a").forEach(m=>{m.onclick=()=>d(+m.dataset.i)}),o.querySelectorAll("u.more").forEach(m=>{m.onclick=()=>{let y=m.previousElementSibling;y&&y.classList.contains("rest")&&y.classList.add("on"),m.remove()}})}function Mc(){if(ot<0||ot>=$){u("i-empty").style.display="",u("i-real").style.display="none",u("i-kind").textContent="\u2014";return}let o=Fe[ot];u("i-empty").style.display="none",u("i-real").style.display="",u("i-kind").textContent=(o.k==="raw"?"RAW":"WIKI")+(o.d?" \xB7 "+o.d:""),u("i-name").textContent=o.n,u("i-path").textContent=o.p+"   \xB7   "+o.w+" words   \xB7   \u2190"+o.inb+(o.mt?"   \xB7   "+A("insp.touched",{t:$b(o.mt)}):"");{let T=x_(ot);T&&(u("i-path").textContent+="   \xB7   "+T)}let d=Dg(ot);u("c-pl").textContent=d.links,u("c-mo").textContent=d.moons,u("c-mo2").textContent=d.far,lv(),u("i-props").innerHTML=(o.pr||[]).slice(0,12).map(T=>"<b>"+M(T[0])+"</b><s>"+M(T[1])+"</s>").join(""),u("i-tags").innerHTML=(o.t||[]).slice(0,10).map(T=>'<span class="tag">'+M(T)+"</span>").join(""),u("i-x").textContent=o.x||A("insp.nobody");let m=u("i-links");m.innerHTML=av(ot),ov(m,T=>ui(T));let y=u("i-go"),_=o.n.length>12?o.n.slice(0,12)+"\u2026":o.n;y.textContent=W(_),u("i-route").textContent=A(Zo()?"insp.route.c":vr>=0?"insp.route.p":"insp.route"),u("i-route").classList.toggle("am",Zo()||vr>=0);let E=u("i-core"),w=ot===mt;E.textContent=A(w&&N.coreNote?"insp.core.on":"insp.core"),E.style.display=w&&!N.coreNote?"none":""}function lv(){let o=u("o-a"),d=u("o-e"),m=u("o-p"),y=u("o-i");if(!o)return;if(ot<0||ot>=$||!oe[ot]||oe[ot].kind==="core"){o.textContent=d.textContent=m.textContent=y.textContent="\u2014";return}let _=oe[ot],E=_.aNow||_.r0||0;o.textContent=E>=1e3?(E/1e3).toFixed(2)+"k":E.toFixed(0),d.textContent=(_.ecc||0).toFixed(3);let T=(nc&&hu?nc[ot]:E)/(E>1e-4?E:1e-4),P=T<.06?.06:T>6?6:T,I=(_.sp||0)*P*Math.sqrt(P)*N.spd;if(I<=1e-12)m.textContent="\u221E";else{let R=f/I/1e3;m.textContent=R<100?R.toFixed(1)+"s":R<6e3?(R/60).toFixed(1)+"m":(R/3600).toFixed(1)+"h"}Wu(_);let D=Wn[2]*qn[0]-Wn[0]*qn[2];y.textContent=(Math.acos(g(Math.abs(D),0,1))*180/Math.PI).toFixed(1)+"\xB0"}u("i-go").onclick=()=>{ot<0||Cu(ot,!0)},u("i-core").onclick=()=>{if(!ym)return;let o=ot>=0&&ot!==mt?Fe[ot].p:"",d=ot>=0?Fe[ot].n:"";N.coreNote=o,st();let m=oy();try{Ku(ym,m)}catch(y){console.error(y),rt(A("load.render"))}rt(o?A("core.set",{n:d}):A("core.auto"))},u("i-open").onclick=o=>ie(ot,o),u("i-name").addEventListener("mouseover",o=>{if(!(!ae.hover||ot<0))try{ae.hover(te(ot),o,u("i-name"))}catch(d){console.error("vault-orrery: host preview",d)}});let Du=!1,Ec=0,qa=[],cv=0,Iu=()=>{cv=performance.now()};l("pointermove",Iu,{passive:!0}),l("pointerdown",Iu,{passive:!0}),l("keydown",Iu,{passive:!0}),l("wheel",Iu,{passive:!0});let J1=[{label:"MIND MAP",key:"M",run:()=>jp()},{label:"GENESIS",key:"G",run:()=>Fu()},{label:"RIPPLE",key:"SPACE",run:()=>Nu()},{label:"POSTER",key:"P",run:()=>Bu()},{label:"LINK LAYER",key:"L",run:()=>Ap()},{label:"REFERENCE PLANE",key:"X",run:()=>Rp()},{label:"RESET VIEW",key:"R",run:()=>bp()},{label:"SOUND",key:"U",run:()=>Lc(!De.on)},{label:"GUIDE",key:"?",run:()=>ed()},{label:"OPEN NOTE",key:"O",run:o=>ie(ot,o),live:()=>he()&&ot>=0}];function Sp(){Du=!0,u("srch").style.display="block",u("sin").value="",u("sin").focus(),hv("")}function Tp(){Du=!1,u("srch").style.display="none"}function K1(o){let d=It[o];if(!d)return;N.adv=!0,u("ctl").classList.add("adv"),u("advtog").textContent="\u25BE ADVANCED",vi&&(vi.value=d.label),br=d.label.toLowerCase(),sl(),ps(),st(),Oi();let m=Ya.get(o);if(m){try{m.wrap.scrollIntoView({block:"nearest"})}catch(y){}m.wrap.classList.remove("found"),requestAnimationFrame(()=>m.wrap.classList.add("found")),setTimeout(()=>m.wrap.classList.remove("found"),1600)}}function hv(o){Ks=o.trim().toLowerCase();let m=Ks;if(qa=[],m){let y=[];for(let _=0;_<$;_++){let E=Fe[_];(wt[_]||(E.n+" "+E.p).toLowerCase()).includes(m)&&y.push(_)}y.sort((_,E)=>Fe[E].inb-Fe[_].inb),y.forEach(_=>qa.push({kind:"note",i:_})),Ze.forEach(_=>{(_.label.toLowerCase().includes(m)||_.k.toLowerCase()===m)&&qa.push({kind:"knob",kn:_})}),J1.forEach(_=>{_.live&&!_.live()||_.label.toLowerCase().includes(m)&&qa.push({kind:"act",a:_})})}Ec=0,u("sres").innerHTML=qa.slice(0,40).map((y,_)=>{let E=_===0?' class="sel"':"";if(y.kind==="note"){let w=Fe[y.i];return'<div data-k="'+_+'"'+E+">"+M(w.n)+"<i>"+(w.k==="raw"?"RAW":"WIKI")+(w.d?" "+w.d:"")+"</i></div>"}return y.kind==="knob"?'<div data-k="'+_+'"'+E+">"+M(y.kn.label)+"<i>"+A("find.knob")+" \xB7 "+y.kn.g.toUpperCase()+"</i></div>":'<div data-k="'+_+'"'+E+">"+M(y.a.label)+"<i>"+A("find.act")+" \xB7 "+y.a.key+"</i></div>"}).join(""),u("sres").querySelectorAll("div").forEach(y=>{y.onclick=_=>uv(+y.dataset.k,_)})}function uv(o,d){let m=qa[o];if(m){if(Tp(),m.kind==="note"){he()&&(d.ctrlKey||d.metaKey)?(ui(m.i),ie(m.i,d)):Cu(m.i,!0);return}Ks="",m.kind==="knob"?K1(m.kn.k):m.a.run(d)}}u("sin").addEventListener("input",o=>hv(o.target.value)),u("sin").addEventListener("keydown",o=>{if(o.key==="Escape")Ks="",Tp();else if(o.key==="Enter")o.preventDefault(),uv(Ec,o);else if(o.key==="ArrowDown"||o.key==="ArrowUp"){o.preventDefault(),Ec=g(Ec+(o.key==="ArrowDown"?1:-1),0,Math.min(39,qa.length-1)),u("sres").querySelectorAll("div").forEach((m,y)=>m.classList.toggle("sel",y===Ec));let d=u("sres").querySelector("div.sel");if(d)try{d.scrollIntoView({block:"nearest"})}catch(m){}}});function Ap(){pc=(pc+1)%fc.length,u("g-layer").textContent=fc[pc].name,rt("LINK LAYER \xB7 "+fc[pc].name)}let $1=o=>{let d=new Date(o);return d.getUTCFullYear()+"-"+String(d.getUTCMonth()+1).padStart(2,"0")+"-"+String(d.getUTCDate()).padStart(2,"0")};function Q1(o){let d=0;for(let m=0;m<Js.length;m++)o>=Js[m].u0&&(d=m);return d}function ku(o){Ce.on=!!o&&$>0,Ce.on||(Ce.play=!1,Ce.u=1),u("gen").classList.toggle("on",Ce.on),u("b-gen").classList.toggle("am",Ce.on),Ce.on&&(Ce.u=0,Ce.play=!0,Ce.stage=-1,De.on&&Gt&&vv(Gt.position.x,Gt.position.y,Gt.position.z),e_(),ui(-1),_p()),ls(!0),Oi()}function Rp(){N.grid=!N.grid,st(),Qr&&(Qr.visible=N.grid),rt(A(N.grid?"grid.on":"grid.off"))}function Fu(){if(!$){rt(A("need.vault"));return}if(Ce.on&&Ce.u>=1){Ce.u=0,Ce.play=!0,ls(!0);return}ku(!Ce.on),Ce.on&&rt(A("gen.play"))}function e_(){let o=u("genmarks");Ce.marksFor!==Js&&(o.innerHTML="",Js.forEach((d,m)=>{if(m===0||m===Js.length-1)return;let y=document.createElement("i");y.textContent=d.code,y.style.left=g(d.u0*100,2,96).toFixed(2)+"%",y.dataset.k=m,o.appendChild(y)}),Ce.marksFor=Js)}function ls(o){if(!Ce.on)return;u("gen-r").value=Math.round(Ce.u*1e3),u("gen-play").textContent=Ce.play?"\u275A\u275A":"\u25B6",u("gen-spd").textContent=(Ce.rate<1?"\xBD":Ce.rate)+"\xD7";let d=0,m=0,y=0;for(let E=0;E<$;E++)if(kt[E]<=Ce.u){d++;let w=_t[E];w&&w>m&&(m=w)}At.forEach(E=>{E.genT<=Ce.u&&y++}),u("gen-cnt").textContent=d+" / "+$,u("gen-date").textContent=d===0?"\u2014":(m?$1(m):A("gen.undated"))+"  \xB7  "+A("gen.sys",{n:y});let _=Q1(Ce.u);if(_!==Ce.stage||o){let E=_!==Ce.stage&&Ce.stage>=0;if(Ce.stage=_,u("gen-ph").textContent=Js[_].code,u("gen-desc").textContent=A(Js[_].k),u("genmarks").querySelectorAll("i").forEach(w=>w.classList.toggle("now",+w.dataset.k===_)),E){let w=u("genstage");w.classList.remove("step"),requestAnimationFrame(()=>w.classList.add("step"))}}}function t_(o){if(!Ce.on||!Ce.play)return;let d=Ce.u;if(Ce.u+=o*Ce.rate/Ce.playSec,Ce.u>=1){Ce.u=1,Ce.play=!1,ls(!0),rt(A("gen.done"));return}At.forEach(m=>{if(m.genT>d&&m.genT<=Ce.u){let y=-1,_=1e9;for(let E=0;E<$;E++)Re[E]===m&&kt[E]<_&&(_=kt[E],y=E);y>=0&&Sc(y,.55)}}),tl%4===0&&ls(!1)}u("gen-r").addEventListener("input",o=>{Ce.play=!1,Ce.u=g(+o.target.value/1e3,0,1),ls(!0)}),u("gen-play").onclick=()=>{!Ce.play&&Ce.u>=.999&&(Ce.u=0),Ce.play=!Ce.play,ls(!0)},u("gen-rst").onclick=()=>{Ce.u=0,Ce.play=!0,ls(!0)},u("gen-spd").onclick=()=>{let o=[.5,1,2,4];Ce.rate=o[(o.indexOf(Ce.rate)+1)%o.length],ls(!0)},u("b-gen").onclick=Fu;let Lp=!1,Cp=!1,dv=-1;function n_(){let o=Ce.on?g((Ce.u-.06)/.26,0,1):1;if(o===dv)return;dv=o;let d=m=>{let y=m&&m.material;y&&(y.userData.op0===void 0&&(y.userData.op0=y.opacity),y.opacity=y.userData.op0*o)};La&&La.children.forEach(d),d(Gs),d(dr)}function i_(){if(!Ce.on){Lp&&Gn&&(Gn.fill(1),ht.fill(0),Lp=!1);return}Lp=!0;let o=Ce.u,d=Ce.grow,m=Ce.flash;for(let y=0;y<$;y++){let _=kt[y];if(o<_){Gn[y]=0,ht[y]=0;continue}let E=(o-_)/d;if(E>=1){Gn[y]=1;let w=(o-_-d)/m;ht[y]=w<1?1:0}else{Gn[y]===0&&Ce.play&&Up(y,.6);let w=1-Math.pow(1-E,3);Gn[y]=.06+.94*w+Math.sin(E*Math.PI)*.26*(1-E*.3),ht[y]=1}}}let r_=3,yr=[],Pp=!1;function Sc(o,d){if(o<0||o>=$||!vt)return;let m=new Int16Array($).fill(-1);m[o]=0;let y=[o],_=0;for(let w=0;w<y.length;w++){let T=y[w],P=vt[T];if(!P)continue;let I=m[T]+1;I>9||P.forEach(D=>{m[D]<0&&(m[D]=I,y.push(D),I>_&&(_=I))})}let E=3.1;yr.length>=r_&&yr.shift(),yr.push({dist:m,src:o,reach:_,age:0,speed:E,life:_/E+.62,gain:d===void 0?1:d})}function fv(){yr.length=0,Kt&&Kt.fill(0)}function s_(o){if(!(!$||!Kt)){if(!yr.length){(Kt[0]||Pp)&&(Kt.fill(0),Pp=!1);return}Kt.fill(0),Pp=!0;for(let d=yr.length-1;d>=0;d--){let m=yr[d];if(m.age+=o,m.age>m.life){yr.splice(d,1);continue}let y=m.age*m.speed,_=1-m.age/m.life,E=m.gain*(.32+.68*_),w=m.dist,T=De.on&&N.sRip>=.02;T&&!m.hit&&(m.hit=new Uint8Array($));for(let P=0;P<$;P++){let I=w[P];if(I<0)continue;let D=(I-y)/.62;if(D>2.4||D<-2.4)continue;let R=Math.exp(-D*D)*E/(1+I*.3);R>Kt[P]&&(Kt[P]=R),T&&D<=0&&!m.hit[P]&&I>0&&(m.hit[P]=1,pt[P]>.12&&Up(P,E/(1+I*.45)))}}}}function Nu(){if(ot<0){rt(A("need.node"));return}Sc(ot,1),rt(A("ripple",{n:Fe[ot].n}))}u("i-ripple").onclick=Nu,u("i-route").onclick=()=>{if(Zo()||vr>=0){iv();return}ot<0||(vr=ot,rt(A("route.pick")),Mc())};let Dp=9+Math.random()*8;function a_(o){if(!$||Ce.on||(Dp-=o,Dp>0))return;Dp=16+Math.random()*16;let d=-1,m=-1;for(let y=0;y<7;y++){let _=Math.floor(Math.random()*$),E=(vt[_]?vt[_].size:0)*(pt[_]>.4?1:.1);E>m&&(m=E,d=_)}d>=0&&m>0&&Sc(d,.42)}let Jo=52,Ip=42,kp=Jo+1,o_=kp*2,Ut=new Float32Array(kp*3),Zt=null,xr=null,cs=null,Fp=null,Np=null,Hp=14,$s=[],Tc=0,Hu=new L;function l_(){if(!xr){xr=ns(3,(o,d,m,y,_)=>{m[o]=[26,60,130][o],_[o]=[1,.34,.11][o],y[o*3]=.8,y[o*3+1]=.95,y[o*3+2]=1},Ni(700,.25,1,!1)),xr.visible=!1,xr.renderOrder=3;{let o=fp(2,kp);Fp=o.pos,Np=o.col,cs=new Et(o.geo,dp(1)),cs.frustumCulled=!1,cs.visible=!1,Ft.add(cs)}}}function pv(o){l_();let d=Math.max(900,(lt||1200)*1.55),m=o>=0&&o<$?o:-1,y,_;if(m>=0){let E=xe[m*3],w=xe[m*3+1],T=xe[m*3+2],P=Math.atan2(T,E)+(Math.random()-.5)*1.4,I=g(ev()*.85,400,d);y=new L(Math.cos(P)*I,w*.4+(Math.random()-.5)*I*.3,Math.sin(P)*I),_=new L(E,w,T).sub(y).multiplyScalar(1/6)}else{let E=Math.random()*f,w=(Math.random()-.5)*.8;y=new L(Math.cos(E)*d,Math.sin(w)*d*.55,Math.sin(E)*d),_=new L(Math.random()-.5,(Math.random()-.5)*.5,Math.random()-.5).multiplyScalar(d*(.1+Math.random()*.2)).clone().sub(y).normalize().multiplyScalar(d*.052)}Zt={pos:y,vel:_,life:0,R:d,target:m,dusty:.35+Math.random()*.9,trail:[]},xr.visible=!0,cs.visible=!0}function Ko(){Zt=null,xr&&(xr.visible=!1),cs&&(cs.visible=!1),Hp=45+Math.random()*70}function c_(o){if(!$)return;if(!Zt){if(Tc>0)Tc-=o;else if($s.length){let le=Be($s.shift());if(le>=0){pv(le);return}}Hp-=o*Math.max(.15,N.spd),Hp<=0&&pv(-1);return}let d=Zt.target;if(d>=$){Ko();return}let m=d>=0?Math.min(.05,o):Math.min(.05,o)*Math.max(0,N.spd);if(Zt.life+=o,m>0){let le=Zt.pos,de=Math.max(Zt.R*.05,le.length()),fe=Zt.R*Zt.R*.3;if(Zt.vel.addScaledVector(le,-fe/(de*de*de)*m*(d>=0?.08:1)),d>=0){Hu.set(xe[d*3],xe[d*3+1],xe[d*3+2]);let H=Hu.distanceTo(le),J=Zt.vel.length();if(H<Math.max((ct[d]||2)*3.5,10)+J*m*1.5){p_(d);return}Hu.sub(le).normalize().multiplyScalar(J),Zt.vel.lerp(Hu,1-Math.pow(.3,m))}le.addScaledVector(Zt.vel,m),Zt.trail.unshift(le.clone()),Zt.trail.length>Jo+1&&(Zt.trail.length=Jo+1)}if(d<0&&Zt.life>6&&Zt.pos.length()>Zt.R*2.1){Ko();return}if(Zt.life>(d>=0?30:150)){Ko();return}let y=xr.geometry.attributes.position.array;for(let le=0;le<3;le++)y[le*3]=Zt.pos.x,y[le*3+1]=Zt.pos.y,y[le*3+2]=Zt.pos.z;xr.geometry.attributes.position.needsUpdate=!0;let _=g(Zt.R*.55/Math.max(1,Zt.pos.length()),.25,2.2),E=xr.geometry.attributes.aAlpha.array;E[0]=1*_,E[1]=.34*_,E[2]=.11*_,xr.geometry.attributes.aAlpha.needsUpdate=!0;let w=Zt.trail,T=w.length,P=Zt.dusty,I=Ue.position,D=I.x,R=I.y,k=I.z,U=n()*.5/Math.tan(Ue.fov*Math.PI/360),G=Math.max(1,I.distanceTo(Zt.pos))/U,Q=g1();{let le=Zt.R*.34*_,de=Jo+1,fe=0;for(let ve=0;ve<de;ve++){let re=ve*3;if(ve<T){let Ee=w[ve],Ae=Ee.length()||1,He=ve/Jo,$e=le*He*He;Ut[re]=Ee.x+Ee.x/Ae*$e,Ut[re+1]=Ee.y+Ee.y/Ae*$e,Ut[re+2]=Ee.z+Ee.z/Ae*$e,fe=ve}else Ut[re]=Ut[fe*3],Ut[re+1]=Ut[fe*3+1],Ut[re+2]=Ut[fe*3+2]}let H=1,J=.87,Me=.66,Te=0;for(let ve=0;ve<de;ve++){let re=ve*3,Ee=ve/Jo,Ae=(ve>0?ve-1:0)*3,He=(ve<de-1?ve+1:de-1)*3,$e=ve<T?(1-Ee)*(1-Ee*.72)*_*1.15*P:0;Tu(Fp,Np,Te,Ut[re],Ut[re+1],Ut[re+2],Ut[He]-Ut[Ae],Ut[He+1]-Ut[Ae+1],Ut[He+2]-Ut[Ae+2],Ut[re]-D,Ut[re+1]-R,Ut[re+2]-k,$e>0?(1.6+13*Ee)*Q*.5*G:0,H*$e,J*$e,Me*$e),Te+=2}}{let le=Zt.pos,de=le.length()||1,fe=le.x/de,H=le.y/de,J=le.z/de,Me=Math.abs(fe)<.9?1:0,Te=Math.abs(fe)<.9?0:1,ve=Te*J,re=-Me*J,Ee=Me*H-Te*fe,Ae=Math.hypot(ve,re,Ee)||1;ve/=Ae,re/=Ae,Ee/=Ae;let He=H*Ee-J*re,$e=J*ve-fe*Ee,se=fe*re-H*ve,me=Zt.R*.62*_,Se=_*1.25*(1.35-P*.55),et=Zt.life,Ye=(Mt,yn)=>{let Yn=Math.sin(Mt*7.4+et*1.9)*.055*Mt+Math.sin(Mt*3.1-et*1.1)*.03*Mt,Bn=Math.sin(Mt*5.3-et*1.5)*.048*Mt,_r=me*Mt;yn[0]=le.x+fe*_r+(ve*Yn+He*Bn)*me,yn[1]=le.y+H*_r+(re*Yn+$e*Bn)*me,yn[2]=le.z+J*_r+(Ee*Yn+se*Bn)*me},Je=h_,yt=Mt=>.72+.55*Math.abs(Math.sin(Mt*9.1+et*2.3)),Ct=Ip+1;for(let Mt=0;Mt<Ct;Mt++)Ye(Mt/Ip,Je),Ut[Mt*3]=Je[0],Ut[Mt*3+1]=Je[1],Ut[Mt*3+2]=Je[2];let Nt=o_;for(let Mt=0;Mt<Ct;Mt++){let yn=Mt*3,Yn=Mt/Ip,Bn=(Mt>0?Mt-1:0)*3,_r=(Mt<Ct-1?Mt+1:Ct-1)*3,er=(1-Yn)*(1-Yn*.55)*Se*yt(Yn);Tu(Fp,Np,Nt,Ut[yn],Ut[yn+1],Ut[yn+2],Ut[_r]-Ut[Bn],Ut[_r+1]-Ut[Bn+1],Ut[_r+2]-Ut[Bn+2],Ut[yn]-D,Ut[yn+1]-R,Ut[yn+2]-k,(1.1+2.4*Yn)*Q*.5*G,.42*er,.72*er,1*er),Nt+=2}}cs.geometry.attributes.position.needsUpdate=!0,cs.geometry.attributes.aColor.needsUpdate=!0}let h_=[0,0,0];function u_(){let o=new Map;if(!$||!xe)return o;for(let d=0;d<$;d++){let m=Fe[d];o.set(m.fp||m.p,{x:xe[d*3],y:xe[d*3+1],z:xe[d*3+2],r:ct[d]||2,cr:ne[d*3],cg:ne[d*3+1],cb:ne[d*3+2],mt:+m.mt||0,ct:+m.ct||0,n:m.n})}return o}let Ac=6;function d_(o){if(!o||!$)return;let d=new Set,m=new Map;for(let _=0;_<$;_++){let E=Fe[_],w=E.fp||E.p;d.add(w);let T=o.get(w),P=+E.mt||0;T?P&&T.mt&&P>T.mt+500&&$s.push(w):(E.ct&&m.set(+E.ct,w),P&&$s.push(w))}let y=0;return o.forEach((_,E)=>{d.has(E)||_.ct&&m.has(_.ct)||y++<Ac&&gv(_,"nova")}),$s.length>6&&($s.length=6),y}function f_(){if(!$||!Xi||!Ot)return;let o=-1,d=0;for(let m=0;m<$;m++)Ot[m]>d&&(d=Ot[m],o=m);o<0||Date.now()-d>14*864e5||($s.push(te(o)),Tc=2.5)}function p_(o){let d=Fe[o];gv({x:xe[o*3],y:xe[o*3+1],z:xe[o*3+2],r:ct[o]||2,cr:.8,cg:.95,cb:1,n:d?d.n:""},"strike"),Ce.on||Sc(o,.9),Up(o,1.3),d&&rt(A("ev.comet",{n:d.n})),Ko(),Tc=1.4}let Rc=[],Ji=null,mv=[];function m_(){if(Ji)return;Ji=ns(Ac,(d,m,y,_,E)=>{y[d]=0,E[d]=0,_[d*3]=_[d*3+1]=_[d*3+2]=1},Ni(900,0,1,!1)),Ji.renderOrder=4;let o=new Pi(.8,1,72,1);for(let d=0;d<Ac;d++){let m=new Et(o,new Cn({color:16777215,transparent:!0,opacity:0,fog:!1,blending:Vt,depthWrite:!1,side:ii}));m.visible=!1,m.frustumCulled=!1,m.renderOrder=4,Ft.add(m),mv.push(m)}}function gv(o,d){m_(),Rc.length>=Ac&&Rc.shift();let m=d==="nova";Rc.push({x:o.x,y:o.y,z:o.z,r:Math.max(1.5,o.r),t:0,life:m?4.6:1.5,size:m?g(o.r*34,110,460):g(o.r*16,50,200),reach:m?34:9,cr:o.cr,cg:o.cg,cb:o.cb}),m&&(o.n&&rt(A("ev.nova",{n:o.n})),vv(o.x,o.y,o.z))}let Ou=new L;function g_(o){if(!Ji)return;let d=Ji.geometry.attributes.position.array,m=Ji.geometry.attributes.aSize.array,y=Ji.geometry.attributes.aColor.array,_=Ji.geometry.attributes.aAlpha.array;for(let E=0;E<Ac;E++){let w=Rc[E],T=mv[E];if(!w){_[E]=0,m[E]=0,T.visible=!1;continue}if(w.t+=o,w.t>=w.life){Rc.splice(E,1),E--;continue}let P=w.t/w.life,I=Math.min(1,w.t/.16),D=I*Math.exp(-Math.max(0,w.t-.16)*(5.1/w.life)),R=1-I*.55;d[E*3]=w.x,d[E*3+1]=w.y,d[E*3+2]=w.z,m[E]=w.size*(.55+.45*I),_[E]=D*1.4,y[E*3]=v(w.cr,1,R),y[E*3+1]=v(w.cg,1,R),y[E*3+2]=v(w.cb,1,R);let k=1-Math.pow(1-P,2.2),U=w.r*(2+w.reach*k);T.visible=!0,T.position.set(w.x,w.y,w.z),T.scale.set(U,U,U),T.lookAt(Ue.position),T.material.opacity=Math.pow(1-P,1.7)*.85,T.material.color.setRGB(v(w.cr,1,.45),v(w.cg,1,.45),v(w.cb,1,.45))}Ji.geometry.attributes.position.needsUpdate=!0,Ji.geometry.attributes.aSize.needsUpdate=!0,Ji.geometry.attributes.aColor.needsUpdate=!0,Ji.geometry.attributes.aAlpha.needsUpdate=!0}function vv(o,d,m){if(!De.on||!De.ctx||N.sRip<.02)return;let y=De.ctx,_=y.currentTime,E=g(.32*N.sRip,.001,.5),w=y.createGain();w.gain.setValueAtTime(1e-4,_),w.gain.exponentialRampToValueAtTime(E,_+.04),w.gain.exponentialRampToValueAtTime(3e-4,_+2.4);let T=w;try{if(y.createStereoPanner){let G=y.createStereoPanner();Ou.set(o,d,m).project(Ue),G.pan.value=Ou.z<1&&Number.isFinite(Ou.x)?g(Ou.x,-1,1)*.72:0,w.connect(G),T=G}}catch(G){T=w}T.connect(De.bus||De.master),De.echo&&T.connect(De.echo);let P=y.createOscillator();P.type="sine",P.frequency.setValueAtTime(96,_),P.frequency.exponentialRampToValueAtTime(34,_+1.8),P.connect(w),P.start(_),P.stop(_+2.5);let I=y.createBufferSource(),D=Math.floor(y.sampleRate*1.6),R=y.createBuffer(1,D,y.sampleRate),k=R.getChannelData(0);for(let G=0;G<D;G++)k[G]=(Math.random()*2-1)*(1-G/D);I.buffer=R;let U=y.createBiquadFilter();U.type="lowpass",U.frequency.setValueAtTime(900,_),U.frequency.exponentialRampToValueAtTime(70,_+1.6);let X=y.createGain();X.gain.value=.55,I.connect(U),U.connect(X),X.connect(w),I.start(_),I.stop(_+1.7)}function v_(o){g_(o)}function y_(o){let d=Fe[o],m=oe&&oe[o]?oe[o].kind:"wiki";return m==="core"?null:m==="moon"||m==="spiral"||m==="shell"?"cls.rock":Math.log(1+(d.inb|0))*1.55+Math.log(1+(d.w||0)/120)*.7>=3.6?"cls.giant":"cls.terr"}function Op(o){return o>=6e3?"F":o>=5200?"G":o>=3700?"K":"M"}function x_(o){let d=[],m=y_(o);m&&d.push(A(m)),Ai&&Ai.indexOf(o)>=0&&d.push(A("cls.ringed"));let y=Re&&Re[o];return y&&y.temp&&d.push(A("cls.star",{s:Op(y.temp),t:Math.round(y.temp/100)*100})),d.join("   \xB7   ")}function Bu(){if(!$){rt(A("need.vault"));return}let o=u("hud"),d=o.style.display,m=Xt.getPixelRatio(),y=g(Math.round(3840/Math.max(1,t())),1,4);try{o.style.display="none",Xt.setPixelRatio(y),Xt.setSize(t(),n(),!1),Ue.aspect=t()/n(),Ue.updateProjectionMatrix();let _=n()/(2*Math.tan(Ue.fov*Math.PI/360))*y;Or.forEach(I=>{I.uniforms&&(I.uniforms.uScale.value=_)}),Ig(Math.max(1,t()*y),Math.max(1,n()*y)),up();let E=Xt.domElement,w=document.createElement("canvas");w.width=E.width,w.height=E.height;let T=w.getContext("2d");T.drawImage(E,0,0);let P=Math.max(11,Math.round(w.height*.014));T.font="500 "+P+"px ui-monospace,Consolas,monospace",T.textBaseline="alphabetic",T.fillStyle="rgba(150,225,255,.62)",T.fillText((ye.meta.vault||"VAULT").toUpperCase(),P*1.6,w.height-P*2.6),T.fillStyle="rgba(200,235,255,.30)",T.fillText($+" NOTES \xB7 "+(ye.meta.edges|0)+" LINKS \xB7 "+At.length+" SYSTEMS",P*1.6,w.height-P*1.1),w.toBlob(I=>{if(!I){rt(A("poster.fail"));return}let D=URL.createObjectURL(I),R=document.createElement("a");R.href=D,R.download=(ye.meta.vault||"vault").replace(/[^\w가-힣ぁ-んァ-ヶー一-龥.-]+/g,"_")+"-orrery-"+w.width+"x"+w.height+".png",R.click(),setTimeout(()=>URL.revokeObjectURL(D),3e4),rt(A("poster.ok",{w:w.width,h:w.height}))},"image/png")}catch(_){console.error(_),rt(A("poster.fail"))}finally{Xt.setPixelRatio(m),o.style.display=d[0],xh.style.display=d[1],Xa()}}u("b-post").onclick=Bu;let De={on:!1,ctx:null,master:null,wind:null,move:null,holo:null,bus:null,echo:null,wetIn:null,dry:null,wet:null,wetLP:null,conv:null,dl:null,dlLP:null,fb:null,droneFilt:null,drone:[],irSecs:0},w_=[{f:41.2,w:"sine",lvl:.42,swing:.1,lf:.021},{f:55,w:"triangle",lvl:.3,swing:.12,lf:.031},{f:82.4,w:"sawtooth",lvl:.1,swing:.05,lf:.043,det:-6},{f:82.4,w:"sawtooth",lvl:.1,swing:.05,lf:.037,det:7},{f:164.8,w:"triangle",lvl:.09,swing:.05,lf:.027,det:4},{f:659.3,w:"sine",lvl:.03,swing:.028,lf:.019}];function yv(o,d){let m=Math.floor(o.sampleRate*d),y=o.createBuffer(1,m,o.sampleRate),_=y.getChannelData(0),E=0;for(let w=0;w<m;w++)E=E*.985+(Math.random()*2-1)*.12,_[w]=E;return y}function xv(o,d,m){let y=Math.max(1,Math.floor(o.sampleRate*d)),_=o.createBuffer(2,y,o.sampleRate),E=Math.floor(o.sampleRate*.028);for(let w=0;w<2;w++){let T=_.getChannelData(w),P=0;for(let I=0;I<y;I++){let D=I/y;P+=(Math.random()*2-1-P)*(.3-D*.24);let R=Math.pow(1-D,m);T[I]=P*R*(I<E?I/E*(I/E):1)}for(let I=0;I<7;I++){let D=Math.floor(o.sampleRate*(.03+Math.random()*.11));D<y&&(T[D]+=(Math.random()*2-1)*.3*(1-I/7))}}return _}function b_(){if(De.ctx)return!0;let o=window.AudioContext||window.webkitAudioContext;if(!o)return!1;try{let d=new o,m=d.createGain();m.gain.value=0,m.connect(d.destination);let y=d.createGain(),_=d.createGain();_.gain.value=.52,y.connect(_),_.connect(m);let E=d.createDelay(.5);E.delayTime.value=.045;let w=d.createConvolver();w.buffer=xv(d,N.sRoom,2.7),De.irSecs=N.sRoom;let T=d.createBiquadFilter();T.type="lowpass",T.frequency.value=at,T.Q.value=.4;let P=d.createGain();P.gain.value=We,y.connect(E),E.connect(w),w.connect(T),T.connect(P),P.connect(m);let I=d.createGain(),D=d.createDelay(4);D.delayTime.value=N.sEchoT;let R=d.createBiquadFilter();R.type="lowpass",R.frequency.value=1150;let k=d.createGain();k.gain.value=N.sEcho,I.connect(D),D.connect(R),R.connect(k),k.connect(D),R.connect(y);let U=d.createBiquadFilter();U.type="lowpass",U.frequency.value=je,U.Q.value=.7;let X=d.createBiquadFilter();X.type="highpass",X.frequency.value=34,X.Q.value=.5,U.connect(X),X.connect(y);let G=d.createOscillator();G.frequency.value=.023;let Q=d.createGain();Q.gain.value=90,G.connect(Q),Q.connect(U.frequency),G.start(),De.drone.length=0,w_.forEach((Se,et)=>{let Ye=Se.f,Je=d.createOscillator();Je.type=Se.w,Je.frequency.value=Ye,Se.det&&(Je.detune.value=Se.det);let yt=d.createGain();yt.gain.value=Se.lvl;let Ct=d.createOscillator();Ct.frequency.value=Se.lf;let Nt=d.createGain();Nt.gain.value=Se.swing,Ct.connect(Nt),Nt.connect(yt.gain),Ct.start(),Je.connect(yt),yt.connect(U),Je.start(),De.drone.push({o:Je,g:yt,lg:Nt,base:Ye,lvl:Se.lvl,swing:Se.swing})});let le=yv(d,4),de=d.createBufferSource();de.buffer=le,de.loop=!0;let fe=d.createBiquadFilter();fe.type="bandpass",fe.frequency.value=420,fe.Q.value=.9;let H=d.createOscillator();H.frequency.value=.017;let J=d.createGain();J.gain.value=260,H.connect(J),J.connect(fe.frequency),H.start();let Me=d.createGain();Me.gain.value=0;let Te=d.createOscillator();Te.frequency.value=.045;let ve=d.createGain();ve.gain.value=0,Te.connect(ve),ve.connect(Me.gain),Te.start(),de.connect(fe),fe.connect(Me),Me.connect(y),de.start(),De.wind={g:Me,lg:ve,lvl:.1};let re=d.createBufferSource();re.buffer=le,re.loop=!0;let Ee=d.createBiquadFilter();Ee.type="lowpass",Ee.frequency.value=260,Ee.Q.value=.6;let Ae=d.createGain();Ae.gain.value=0,re.connect(Ee),Ee.connect(Ae),Ae.connect(y),re.start(),De.move={g:Ae,lp:Ee};let He=d.createOscillator();He.type="sine",He.frequency.value=1318.5;let $e=d.createGain();$e.gain.value=0;let se=d.createOscillator();se.frequency.value=5.3;let me=d.createGain();return me.gain.value=.004,se.connect(me),me.connect($e.gain),se.start(),He.connect($e),$e.connect(y),He.start(),De.holo={o:He,g:$e},De.ctx=d,De.master=m,De.bus=y,De.echo=I,De.wetIn=E,De.dry=_,De.wet=P,De.wetLP=T,De.conv=w,De.dl=D,De.dlLP=R,De.fb=k,De.droneFilt=U,!0}catch(d){return console.error(d),!1}}function Bp(){let o=De;if(!o.ctx)return;let d=o.ctx.currentTime,m=(_,E,w)=>_.setTargetAtTime(E,d,w||.06);o.master.gain.cancelScheduledValues(d),m(o.master.gain,o.on?.28*N.sVol:0,.35),m(o.wet.gain,We,.12),o.wetLP.frequency.setTargetAtTime(at,d,.1),o.dlLP.frequency.setTargetAtTime(g(at*.68,200,6e3),d,.1),m(o.fb.gain,N.sEcho,.1),o.dl.delayTime.setTargetAtTime(N.sEchoT,d,.2),o.droneFilt.frequency.setTargetAtTime(je,d,.12);let y=Math.pow(2,N.sTune/12);o.drone.forEach(_=>{_.o.frequency.setTargetAtTime(_.base*y,d,.3),m(_.g.gain,_.lvl*N.sDrone,1.4),m(_.lg.gain,_.swing*N.sDrone,1.4)}),o.wind&&(m(o.wind.g.gain,o.wind.lvl*N.sDrone,1.4),m(o.wind.lg.gain,o.wind.lvl*.45*N.sDrone,1.4)),__()}let wv=0;function __(){!De.ctx||!De.conv||Math.abs(N.sRoom-De.irSecs)<.05||(clearTimeout(wv),wv=setTimeout(()=>{!De.ctx||!De.conv||(De.irSecs=N.sRoom,De.conv.buffer=xv(De.ctx,N.sRoom,2.7))},260))}function Lc(o){if(o&&!b_()){rt(A("audio.no"));return}De.on=!!o,N.snd=De.on,st(),u("b-snd").classList.toggle("am",De.on),De.ctx&&(De.on&&De.ctx.state==="suspended"&&De.ctx.resume(),Bp()),rt(A(De.on?"audio.on":"audio.off"))}function zp(o){let d=be[g(N.sScale|0,0,be.length-1)].s,m=d[Math.abs(o*7+Fe[o].n.length)%d.length];return 220*Math.pow(2,(m+(Fe[o].k==="raw"?0:12)+N.sTune)/12)}let zu=new L;function bv(o){return o<0||o>=$||!xe||(zu.set(xe[o*3],xe[o*3+1],xe[o*3+2]).project(Ue),!(zu.z<1)||!Number.isFinite(zu.x))?0:g(zu.x,-1,1)*.72}function _v(o,d,m,y){let _=De.ctx,E=zp(o),w=_.createGain();w.gain.setValueAtTime(1e-4,d),w.gain.exponentialRampToValueAtTime(m,d+.04),w.gain.exponentialRampToValueAtTime(4e-4,d+y);let T=w;try{if(_.createStereoPanner){let P=_.createStereoPanner();P.pan.value=bv(o),w.connect(P),T=P}}catch(P){T=w}T.connect(De.bus||De.master),De.echo&&T.connect(De.echo),[[E,1,1],[E*1.0035,.45,1],[E*2,.26,.8],[E*2.76,.12,.55],[E*3.98,.07,.4],[E*5.4,.04,.3]].forEach(([P,I,D])=>{let R=_.createOscillator();R.type="sine",R.frequency.value=P;let k=_.createGain();k.gain.setValueAtTime(I,d),k.gain.exponentialRampToValueAtTime(I*.02+1e-5,d+Math.max(.15,y*D)),R.connect(k),k.connect(w),R.start(d),R.stop(d+y+.2)})}function M_(o,d,m){let y=De.ctx,_=zp(o)*2,E=y.createGain();E.gain.setValueAtTime(1e-4,d),E.gain.exponentialRampToValueAtTime(m,d+.004),E.gain.exponentialRampToValueAtTime(m*.35,d+.09),E.gain.exponentialRampToValueAtTime(3e-4,d+.95);let w=E;try{if(y.createStereoPanner){let P=y.createStereoPanner();P.pan.value=bv(o),E.connect(P),w=P}}catch(P){w=E}w.connect(De.bus||De.master),De.echo&&w.connect(De.echo);let T=y.createOscillator();T.type="sine",T.frequency.setValueAtTime(_*.75,d),T.frequency.exponentialRampToValueAtTime(_,d+.05),T.connect(E),T.start(d),T.stop(d+1.15),[[2.756,.24,.42],[5.404,.1,.2]].forEach(([P,I,D])=>{let R=y.createOscillator();R.type="sine",R.frequency.setValueAtTime(_*P*.97,d),R.frequency.exponentialRampToValueAtTime(_*P,d+.035);let k=y.createGain();k.gain.setValueAtTime(1e-4,d),k.gain.exponentialRampToValueAtTime(I,d+.003),k.gain.exponentialRampToValueAtTime(1e-4,d+D),R.connect(k),k.connect(E),R.start(d),R.stop(d+D+.1)})}function E_(o){!De.on||!De.ctx||o<0||o>=$||V<.02||_v(o,De.ctx.currentTime,.15*V,B)}let Cc=0;function Up(o,d){if(!De.on||!De.ctx||o<0||o>=$||N.sRip<.02)return;let m=De.ctx.currentTime;if(Cc<m&&(Cc=m),Cc-m>.6)return;let y=Cc;Cc+=.056+Math.random()*.042,M_(o,y,g(.11*d*N.sRip,5e-4,.26))}function S_(){if(!De.on||!De.ctx||!De.droneFilt)return;let o=De.ctx.currentTime,d=Math.max(600,(lt||1200)*2.2),m=g((ue.dist-160)/d,0,1),y=m*m*(3-2*m);if(De.droneFilt.frequency.setTargetAtTime(je*(1.25-.6*y),o,.35),De.wet.gain.setTargetAtTime(We*(.82+.34*y),o,.35),De.dry.gain.setTargetAtTime(.52*(1.12-.3*y),o,.35),De.move){let _=Ue.position.distanceTo(Mv);Mv.copy(Ue.position);let E=g(_/Math.max(30,ue.dist*.02),0,1);De.move.g.gain.setTargetAtTime(E*.14*(.45+.55*N.sDrone),o,.18),De.move.lp.frequency.setTargetAtTime(200+E*520,o,.25)}De.holo&&De.holo.g.gain.setTargetAtTime(Lt?.011:0,o,.7)}let Mv=new L;function Ev(o,d){if(!De.on||!De.ctx)return;let m=De.ctx,y=m.currentTime,_=m.createBufferSource();_.buffer=yv(m,1.2);let E=m.createBiquadFilter();E.type="bandpass",E.Q.value=1.4,E.frequency.setValueAtTime(o?260:2400,y),E.frequency.exponentialRampToValueAtTime(o?2400:260,y+.7);let w=m.createGain();w.gain.setValueAtTime(1e-4,y),w.gain.exponentialRampToValueAtTime(.13,y+.12),w.gain.exponentialRampToValueAtTime(3e-4,y+.85),_.connect(E),E.connect(w),w.connect(De.bus),De.echo&&w.connect(De.echo),_.start(y),_.stop(y+1),o&&d>=0&&d<$&&(_v(d,y+.1,.07,3.2),De.holo.o.frequency.setTargetAtTime(zp(d)*4,y,.3))}if(u("b-snd").onclick=()=>Lc(!De.on),N.snd){let o=()=>{c("pointerdown",o),c("keydown",o),Lc(!0)};l("pointerdown",o),l("keydown",o)}let K={root:-1,sel:-1,trail:[],hint:null,hop2:!1,list:[],has:new Set,cnt:[0,0,0],rr:[0,0,0],anchor:new L,guide:null,sect:null,star:null,holo:null,retic:null,pRoot:[],pCross:[]},Gp=26,T_=34,Pc=[19,10.5,6.6],Vp=[0,250,460],A_=[0,36,24],Sv=[0,.062,-.094],Tv=[0,0,1.95],R_=7e-5,Lt=!1;K.hop2=!!N.mmHop;let $o=[],Qo=[];for(let o=0;o<3;o++){let d=Math.cos(Sv[o]),m=Math.sin(Sv[o]),y=Math.cos(Tv[o]),_=Math.sin(Tv[o]);$o.push([y,0,-_]),Qo.push([_*d,-m,y*d])}function Wp(){let o=N.spr/3.2,d=N.szPl;for(let m=1;m<3;m++){let y=K.cnt[m]*(Pc[m]*d*2+A_[m])/f;K.rr[m]=Math.max(Vp[m],y)*o}K.rr[2]<K.rr[1]*1.85&&(K.rr[2]=K.rr[1]*1.85)}function L_(){if(!K.list.length||!ct)return;let o=N.szPl;for(let d=0;d<K.list.length;d++){let m=K.list[d],y=m.i;ct[y]=Pc[m.hop]*o,qs&&Ws&&(qs[y]=Ws[y]=ct[y]*9)}}function C_(o){Wp();let d=K.anchor;for(let m=0;m<K.list.length;m++){let y=K.list[m],_=y.i;if(!y.hop){xe[_*3]=d.x,xe[_*3+1]=d.y,xe[_*3+2]=d.z;continue}y.ma+=o*y.sp;let E=K.rr[y.hop],w=$o[y.hop],T=Qo[y.hop],P=y.ang+y.ma,I=Math.cos(P),D=Math.sin(P);xe[_*3]=d.x+(I*w[0]+D*T[0])*E,xe[_*3+1]=d.y+(I*w[1]+D*T[1])*E,xe[_*3+2]=d.z+(I*w[2]+D*T[2])*E}}function P_(){if(K.guide)return K.guide;let o=K.guide=new Hn;o.renderOrder=1;for(let d=1;d<3;d++){let y=new Float32Array(720),_=$o[d],E=Qo[d];for(let T=0;T<240;T++){let P=T/240*f,I=Math.cos(P),D=Math.sin(P);y[T*3]=I*_[0]+D*E[0],y[T*3+1]=I*_[1]+D*E[1],y[T*3+2]=I*_[2]+D*E[2]}let w=new Qe;w.setAttribute("position",new Xe(y,3)),o.add(new mo(w,new un({color:6084863,transparent:!0,opacity:d===1?.15:.09,depthWrite:!1,blending:Vt})))}return Ft.add(o),o}function D_(){if(U_(1/60),!!K.guide&&(K.guide.visible=!1,!!Lt&&(K.guide.position.copy(K.anchor),K.guide.children[0].scale.setScalar(K.rr[1]),K.guide.children[1].scale.setScalar(K.rr[2]),K.guide.children[1].visible=K.cnt[2]>0,K.sect&&(K.sect.visible=!0,K.sect.position.copy(K.anchor),K.sect.scale.setScalar(K.rr[1]*1.13)),K.star))){K.star.visible=!0,K.star.position.copy(K.anchor);let o=performance.now()*.001;K.star.userData.surfMat.uniforms.uTime.value=o,K.star.userData.rimMat.uniforms.uTime.value=o}}let Dc=null;function Av(o){if(dr&&(dr.visible=o?!1:$>0),Gs&&(Gs.visible=!o),La&&(La.visible=!o),Qr&&(Qr.visible=o?!1:N.grid),Kn&&(Kn.visible=!o),o&&($n&&($n.visible=!1),hi&&(hi.visible=!1),Vn&&(Vn.visible=!1),Pn&&(Pn.visible=!1)),ci&&ji&&ji.attributes.aRingS){if(o){Dc||(Dc=ci.slice());for(let d=3;d<ci.length;d+=4)ci[d]=0}else if(Dc)ci.set(Dc),Dc=null;else return;ji.attributes.aRingS.needsUpdate=!0}}function qp(o){Wp();let d=Math.max(K.rr[1],K.cnt[2]?K.rr[2]:0)+Pc[1]*N.szPl*6;ue.follow=-1,ue.tgtD.copy(K.anchor),ue.distD=g(d*1.85+90,120,9e3),ue.thV=0,ue.phV=0,o&&(ue.phD=.46,ue.rollD=0),as()}function I_(o){K.sect&&(Ft.remove(K.sect),K.sect.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&_.material.dispose()}));let d=K.sect=new Hn;d.renderOrder=1;let m=$o[1],y=Qo[1];o.forEach(_=>{let E=_.a1-_.a0,w=Math.max(6,Math.ceil(E/f*160)),T=new Float32Array((w+1)*3),P=Math.min(.06,E*.18);for(let D=0;D<=w;D++){let R=_.a0+P+(E-P*2)*(D/w),k=Math.cos(R),U=Math.sin(R);T[D*3]=k*m[0]+U*y[0],T[D*3+1]=k*m[1]+U*y[1],T[D*3+2]=k*m[2]+U*y[2]}let I=new Qe;I.setAttribute("position",new Xe(T,3)),d.add(new _i(I,new un({color:_.c.color,transparent:!0,opacity:.42,depthWrite:!1,blending:Vt})))}),Ft.add(d)}function k_(o){K.star&&(Ft.remove(K.star),K.star.traverse(T=>{T.geometry&&T.geometry.dispose(),T.material&&T.material.dispose()}),K.star=null);let d=Re&&Re[o],m=d&&d.temp||6300,y=Pc[0]*N.szPl*1.03,_=K.star=new Hn,E=new gn({vertexShader:qo,fragmentShader:xp,uniforms:{uTime:{value:0},uBright:{value:1},uCore:{value:new Pe().fromArray(Ba(m))},uEdge:{value:new Pe().fromArray(Ba(m*.762))}}});_.add(new Et(new mi(y,4),E));let w=new gn({vertexShader:qo,fragmentShader:Zg,transparent:!0,depthWrite:!1,blending:Vt,uniforms:{uCol:{value:new Pe().fromArray(Ba(m*.7))},uAmt:{value:.8},uTime:{value:0}}});_.add(new Et(new mi(y*1.04,3),w)),_.userData={surfMat:E,rimMat:w},_.renderOrder=2,Ft.add(_)}function F_(o){if(K.pRoot=[],K.pCross=[],!!an)for(let d=0;d<On;d++){let m=an[d][0],y=an[d][1];!K.has.has(m)||!K.has.has(y)||(m===o||y===o?K.pRoot:K.pCross).push(d)}}let N_=`
varying vec2 vP;
void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,H_=`
precision highp float;
uniform float uSweep; uniform float uBright; uniform float uLane1; uniform float uLane2;
varying vec2 vP;
void main(){
  float r = length(vP);
  if (r > 1.0) discard;
  float ang = atan(vP.y, vP.x);
  /* the graduations: rings at a tenth of the plate, radials every fifteen
     degrees, both hairlines that fade with the plate toward its rim */
  /* Hairlines, and few of them. Rings at a fifth of the plate, radials
     every thirty degrees, both thin and both dim: the graduations of an
     instrument are read, not looked at, and a plate that glows is a toy.
     The two lanes are the only firm lines on it. */
  float rg = abs(fract(r * 5.0 + 0.5) - 0.5);
  float ring = smoothstep(0.018, 0.0, rg) * 0.22;
  float ag = abs(fract(ang / 6.2831853 * 12.0 + 0.5) - 0.5);
  float radial = smoothstep(0.03, 0.0, ag / max(r * 6.0, 0.35)) * 0.16;
  float lane = smoothstep(0.008, 0.0, abs(r - uLane1)) * 0.7
             + smoothstep(0.007, 0.0, abs(r - uLane2)) * 0.45;
  /* the sweep is a slow, faint brightening of the graduations as it passes
     \u2014 not a radar's beam, a scan the eye notices only when it is looking */
  float d = mod(uSweep - ang, 6.2831853);
  float sweep = exp(-d * 1.6) * 0.30;
  /* the plate itself, barely, gone at the rim and gone at the star */
  float plate = 0.045 * (1.0 - r) * smoothstep(0.03, 0.12, r);
  float a = (plate + ring + radial + lane + sweep * (0.6 * ring + 0.5 * radial))
          * pow(1.0 - r, 0.6) * uBright;
  gl_FragColor = vec4(vec3(0.62, 0.82, 0.94) * a, a);
}`;function O_(){if(K.holo)return K.holo;let o=K.holo=new Hn,d=new L().fromArray($o[1]),m=new L().fromArray(Qo[1]),y=new L().crossVectors(d,m).normalize();o.quaternion.setFromRotationMatrix(new nt().makeBasis(d,m,y)),K.holoN=y,K.holoQ=o.quaternion.clone();let _=new Et(new go(1,96),new gn({vertexShader:N_,fragmentShader:H_,uniforms:{uSweep:{value:0},uBright:{value:1},uLane1:{value:.4},uLane2:{value:.8}},transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,blending:Vt,side:ii}));_.renderOrder=0,o.add(_);let E=new un({color:10470616,transparent:!0,opacity:.22,depthWrite:!1,blending:Vt}),w=[];for(let R=0;R<2;R++){let U=new Float32Array(216);for(let Q=0;Q<36;Q++){let le=Q/36*f,de=Math.cos(le),fe=Math.sin(le),H=Q%3===0?.028:.012;U[Q*6]=de*(1-H),U[Q*6+1]=fe*(1-H),U[Q*6+2]=0,U[Q*6+3]=de*(1+H),U[Q*6+4]=fe*(1+H),U[Q*6+5]=0}let X=new Qe;X.setAttribute("position",new Xe(U,3));let G=new jn(X,E);G.renderOrder=1,o.add(G),w.push(G)}let T=new Hn;for(let R=0;R<3;R++){let U=new Float32Array(123);for(let G=0;G<=40;G++){let Q=R*f/3+G/40*(f/9);U[G*3]=Math.cos(Q)*.92,U[G*3+1]=Math.sin(Q)*.92,U[G*3+2]=0}let X=new Qe;X.setAttribute("position",new Xe(U,3)),T.add(new _i(X,new un({color:10479871,transparent:!0,opacity:.8,depthWrite:!1,blending:Vt})))}T.renderOrder=1,T.visible=!1,o.add(T);let I=ns(300,(R,k,U,X,G)=>{let Q=Math.sqrt(Math.random())*1.05,le=Math.random()*f;k[R*3]=Math.cos(le)*Q,k[R*3+1]=Math.sin(le)*Q,k[R*3+2]=(Math.random()-.5)*.02,U[R]=.8+Math.random()*1.4,G[R]=.05+Math.random()*.12,X[R*3]=.7,X[R*3+1]=.82,X[R*3+2]=.92},Ni(600,.3,0,!1));Ft.remove(I),I.renderOrder=1,o.add(I);let D=ns(2,(R,k,U,X,G)=>{k[R*3]=k[R*3+1]=k[R*3+2]=0,U[R]=R===0?110:300,G[R]=R===0?.38:.06,X[R*3]=1,X[R*3+1]=.93,X[R*3+2]=.8},Ni(900,.15,1,!1));return Ft.remove(D),D.renderOrder=3,o.userData={plate:_,ticks:w,seg:T,dust:I,flare:D},Ft.add(o),Ft.add(D),o}function B_(o){K.retic&&(Ft.remove(K.retic),K.retic.traverse(P=>{P.geometry&&P.geometry.dispose(),P.material&&P.material.dispose()}));let d=K.retic=new Hn,m=new L().fromArray($o[1]),y=new L().fromArray(Qo[1]),_=new mn().setFromRotationMatrix(new nt().makeBasis(m,y,new L().crossVectors(m,y).normalize())),E=64,w=new Float32Array((E+1)*3);for(let P=0;P<=E;P++){let I=P/E*f;w[P*3]=Math.cos(I),w[P*3+1]=Math.sin(I),w[P*3+2]=0}let T=new Qe;T.setAttribute("position",new Xe(w,3)),o.forEach(P=>{if(P.hop!==1)return;let I=Re&&Re[P.i],D=new _i(T,new un({color:I?I.color:6084863,transparent:!0,opacity:.34,depthWrite:!1,blending:Vt}));D.quaternion.copy(_),D.userData={i:P.i,spin:Math.random()*f,dir:Math.random()<.5?1:-1},D.renderOrder=2,d.add(D)}),Ft.add(d)}let Rv=new mn,z_=new L(0,0,1);function U_(o){let d=K.holo;if(!d)return;let m=Lt&&K.list.length>0;if(d.visible=m,d.userData.flare.visible=m,K.retic&&(K.retic.visible=m),!m)return;let y=performance.now()*.001,_=(K.cnt[2]>0?K.rr[2]:K.rr[1]*1.6)*1.12;d.position.copy(K.anchor),d.scale.setScalar(_);let E=d.userData;if(E.plate.material.uniforms.uLane1.value=K.rr[1]/_,E.plate.material.uniforms.uLane2.value=K.cnt[2]>0?K.rr[2]/_:-1,E.plate.material.uniforms.uSweep.value=y*.18,E.ticks[0].scale.setScalar(K.rr[1]/_),E.ticks[1].scale.setScalar(K.rr[2]/_),E.ticks[1].visible=K.cnt[2]>0,E.seg.scale.setScalar(K.rr[1]/_),E.seg.rotation.z=-y*.12,E.dust.rotation.z=y*.02,E.flare.position.copy(K.anchor),K.star){let w=K.star.userData.surfMat.uniforms.uCore.value,T=E.flare.geometry.attributes.aColor.array;for(let P=0;P<2;P++)T[P*3]=w.r,T[P*3+1]=w.g,T[P*3+2]=w.b;E.flare.geometry.attributes.aColor.needsUpdate=!0}K.retic&&K.retic.children.forEach(w=>{let T=w.userData.i;w.position.set(xe[T*3],xe[T*3+1],xe[T*3+2]),w.scale.setScalar((ct[T]||8)*1.7),w.userData.spin+=0,Rv.setFromAxisAngle(z_,w.userData.spin),w.quaternion.copy(K.holoQ).multiply(Rv)})}function hs(o,d){if(o<0||o>=$)return;if(!d||d.push!==!1){let X=K.trail.indexOf(o);X>=0?K.trail.length=X+1:K.trail.push(o)}K.root=o,K.sel=o;let y=vt[o]?Array.from(vt[o]):[];y.sort((X,G)=>(Fe[G].inb|0)-(Fe[X].inb|0));let _=y.length>Gp;y=y.slice(0,Gp);let E=new Map;y.forEach(X=>{let G=Re&&Re[X],Q=G?G.key:"";E.has(Q)||E.set(Q,{c:G,list:[]}),E.get(Q).list.push(X)});let w=[...E.values()].sort((X,G)=>G.list.length-X.list.length),T=new Map,P=[],I=[],D=0;w.forEach(X=>{let G=D/Math.max(1,y.length)*f;X.list.forEach(le=>{let de=D/Math.max(1,y.length)*f;T.set(le,de),P.push({j:le,a:de}),D++});let Q=D/Math.max(1,y.length)*f;X.c&&X.list.length&&I.push({c:X.c,a0:G,a1:Q})});let R=[],k=0;if(K.hop2&&y.length){let X=new Set(y);X.add(o);let G=new Map;y.forEach(Q=>{let le=T.get(Q),de=vt[Q];de&&de.forEach(fe=>{if(X.has(fe))return;let H=G.get(fe);H||(H={i:fe,s:0,vx:0,vy:0},G.set(fe,H)),H.s++,H.vx+=Math.cos(le),H.vy+=Math.sin(le)})}),R=[...G.values()],k=R.length,R.sort((Q,le)=>le.s-Q.s||(Fe[le.i].inb|0)-(Fe[Q.i].inb|0)),R=R.slice(0,T_),R.forEach(Q=>{Q.a=Math.atan2(Q.vy,Q.vx)}),R.sort((Q,le)=>Q.a-le.a)}K.list=[],K.has=new Set,K.cnt[0]=1,K.cnt[1]=y.length,K.cnt[2]=R.length;let U=(X,G,Q)=>{K.list.push({i:X,hop:G,ang:Q,ma:0,sp:G?R_*Math.pow(Vp[1]/Vp[G],1.5):0}),K.has.add(X)};U(o,0,0),P.forEach(X=>U(X.j,1,X.a));{let X=-1/0,G=R.map(le=>{let de=le.a;for(;de<X;)de+=f;return X=de,de}),Q=G.length?G[0]:0;R.forEach((le,de)=>{let fe=Q+(de+.5)/R.length*f;U(le.i,2,.55*G[de]+.45*fe)})}K.hint={trunc:_?vt[o].size:0,hop2total:k,hop2n:R.length},Lv(),u("mmleg2").style.display=R.length?"":"none",Wp(),Ha(),I_(I),k_(o),F_(o),O_(),B_(K.list),qp(!1),G_(),ui(o,!0),Xp(o)}function Lv(){let o=K.hint||{};u("mmhint").innerHTML=(o.trunc?A("mm.trunc",{t:o.trunc,n:Gp})+"<br>":"")+(o.hop2total>o.hop2n?A("mm.trunc2",{t:o.hop2total,n:o.hop2n})+"<br>":"")+A("mm.hintfull")+(he()?" \xB7 "+A("mm.hintopen"):"")}function G_(){let o=u("mmcrumbs");o.innerHTML="",K.trail.slice(-8).forEach((d,m,y)=>{if(m){let E=document.createElement("i");E.textContent="\u203A",o.appendChild(E)}let _=document.createElement("span");_.textContent=Fe[d].n,m===y.length-1?_.className="here":_.onclick=()=>hs(d),o.appendChild(_)}),u("mmback").classList.toggle("live",K.trail.length>1)}u("mmback").onclick=()=>{K.trail.length<2||(K.trail.pop(),hs(K.trail[K.trail.length-1],{push:!1}))};function Xp(o){let d=K.sel;K.sel=o;let m=Fe[o],y=Re[o]&&Re[o].color||cp;u("mmside").style.setProperty("--nodec","#"+y.getHexString()),u("mm-kind").textContent=(m.k==="raw"?"RAW ARCHIVE":"WIKI CONCEPT")+(m.d?" \xB7 "+m.d:"")+(o===K.root?" \xB7 "+A("mm.isroot"):""),u("mm-name").textContent=m.n,u("mm-path").textContent=m.p+"  \xB7  "+m.w+" words  \xB7  \u2190"+m.inb;let _=Dg(o);u("m-pl").textContent=_.links,u("m-mo").textContent=_.moons,u("m-mo2").textContent=_.far;let E=(m.t||[]).slice(0,12);u("mm-tagsec").style.display=E.length?"":"none",u("mm-tags").innerHTML=E.map(I=>'<span class="tag">'+M(I)+"</span>").join("");let w=u("mm-x");w.textContent=m.x||A("mm.nobody"),w.classList.toggle("none",!m.x);let T=u("mm-links");T.innerHTML=av(o),ov(T,I=>hs(I));let P=m.n.length>10?m.n.slice(0,10)+"\u2026":m.n;u("mm-go").textContent=W(P),u("mm-center").style.display=o===K.root?"none":"",d!==o&&(u("mmside").scrollTop=0)}function Cv(o){K.hop2=!!o,N.mmHop=K.hop2,st(),u("mm-hop").classList.toggle("on",K.hop2),Lt&&K.root>=0&&hs(K.root,{push:!1})}u("mm-hop").onclick=()=>Cv(!K.hop2),u("mm-hop").classList.toggle("on",K.hop2);function Pv(o){if(K.list.length<2)return;let d=K.list.findIndex(y=>y.i===K.sel);d<0&&(d=0);let m=(d+o+K.list.length)%K.list.length;ui(K.list[m].i,!0)}function Yp(o){let d=o!==void 0&&o>=0?o:ot;if(d<0||d>=$){rt(A("need.node"));return}Lt=!0,K.anchor.set(xe[d*3],xe[d*3+1],xe[d*3+2]),Av(!0),P_(),Ko(),_n=-1,wr=0,u("mind").classList.add("on"),K.trail=[],hs(d),qp(!0),Ev(!0,d)}function Ic(){Lt&&(Lt=!1,Ev(!1,-1),u("mind").classList.remove("on"),Av(!1),K.guide&&(K.guide.visible=!1),K.sect&&(K.sect.visible=!1),K.star&&(K.star.visible=!1),K.holo&&(K.holo.visible=!1,K.holo.userData.flare.visible=!1),K.retic&&(K.retic.visible=!1),K.pRoot=[],K.pCross=[],K.list.length=0,K.has.clear(),K.cnt[0]=K.cnt[1]=K.cnt[2]=0,Ha(),tn&&K.root>=0&&K.root<$&&(am(0),ue.follow=K.root,ue.tgtD.set(xe[K.root*3],xe[K.root*3+1],xe[K.root*3+2]),ue.distD=g(ct[K.root]*34+240,240,3e3),as()))}function jp(){Lt?Ic():Yp()}u("mm-close").onclick=Ic,u("mm-go").onclick=()=>{let o=K.sel;Ic(),ui(o),Cu(o,!0)},u("mm-center").onclick=()=>{K.sel!==K.root&&hs(K.sel)},u("mm-open").onclick=o=>ie(K.sel,o),u("i-mm").onclick=()=>Yp(ot);let wr=0,Zp=0,Jp=0,Kp=0,us=-1,kc=!1,zr=new _e(0,0),$p=0,Qp=-1,em=-1e4,tm=-1e4,Dv=0,Iv=0,V_=7,W_=30,q_=420,X_=20;Hr.addEventListener("pointerdown",o=>{if(wr=o.button===2?2:1,Zp=o.clientX,Jp=o.clientY,Kp=0,us=-1,Dv=o.clientX,Iv=o.clientY,kc=!0,zr.x=i(o),zr.y=r(o),wr===1&&o.shiftKey){let d=Mp(zr.x,zr.y,_n);d>=0&&(us=d,Su=d,Oo.add(d))}try{Hr.setPointerCapture(o.pointerId)}catch(d){}}),Hr.addEventListener("pointermove",o=>{let d=o.clientX-Zp,m=o.clientY-Jp;Zp=o.clientX,Jp=o.clientY,zr.x=i(o),zr.y=r(o),kc=!0,wr&&(Kp+=Math.abs(d)+Math.abs(m),us>=0?Y_(us,zr.x,zr.y,1/60):wr===2?X1(d,m):W1(d*.0104,m*.0104,!0))}),Hr.addEventListener("pointerenter",()=>{kc=!0}),Hr.addEventListener("pointerleave",()=>{wr||(kc=!1,_n=-1)}),l("pointerup",o=>{if(!wr)return;let d=Math.hypot(o.clientX-Dv,o.clientY-Iv)<=V_&&Kp<W_;if(us>=0)Oo.add(us),Su=-1,d&&kv(us,o),us=-1;else if(wr===1&&d){let m=Mp(i(o),r(o),_n);m>=0?(_n=m,kv(m,o)):ui(-1)}wr=0});function kv(o,d){if(he()&&(d.ctrlKey||d.metaKey)){ui(o),ie(o,d);return}let m=performance.now(),y=Math.hypot(d.clientX-em,d.clientY-tm)<X_;if(m-$p<q_&&(Qp===o||y)){if($p=0,Qp=-1,em=tm=-1e4,Lt){hs(o);return}ui(o),Yp(o);return}$p=m,Qp=o,em=d.clientX,tm=d.clientY,ui(o)}Hr.addEventListener("contextmenu",o=>o.preventDefault());let nm=new L,Fv=new L,Nv=new L;Hr.addEventListener("wheel",o=>{o.preventDefault();let d=Math.exp(o.deltaY*.0011);if(d<1&&ue.follow<0&&!Lt){let m=i(o),y=r(o);nm.set(m,y,.5).unproject(Ue).sub(Ue.position).normalize(),Fv.set(0,0,-1).applyQuaternion(Ue.quaternion);let _=nm.dot(Fv);if(_>.2){let E=Ue.position.distanceTo(ue.tgtD);Nv.copy(Ue.position).addScaledVector(nm,E/_),ue.tgtD.lerp(Nv,1-d)}}q1(d)},{passive:!1});let Uu=new L,Hv=new L;function Y_(o,d,m,y){Hv.set(xe[o*3],xe[o*3+1],xe[o*3+2]);let _=Ue.position.distanceTo(Hv);Uu.set(d,m,.5).unproject(Ue).sub(Ue.position).normalize().multiplyScalar(_).add(Ue.position);let E=g(ue.dist*.3,30,420),w=1-Math.pow(6e-4,Math.min(y,.05)),T=1/Math.max(.001,y);for(let P=0;P<3;P++){let I=o*3+P,D=xe[I]-Yt[I],R=(P===0?Uu.x:P===1?Uu.y:Uu.z)-D,k=Yt[I];Yt[I]=v(k,g(R,-E,E),w),hr[I]=(Yt[I]-k)*T*.35}}function j_(o){return!o||o.nodeType!==1?!1:/^(INPUT|TEXTAREA|SELECT)$/.test(o.tagName)||o.isContentEditable?!0:!!(o.closest&&o.closest('input,textarea,select,[contenteditable="true"],[contenteditable=""],.cm-editor'))}l("keydown",o=>{if(Du||j_(o.target))return;let d=o.key.toLowerCase();if(GM()){o.preventDefault(),nd();return}if(UM()){o.preventDefault(),(d==="escape"||o.key==="?")&&td();return}if(o.key==="?"){o.preventDefault(),ed();return}if(Lt){if(d==="enter"&&(o.ctrlKey||o.metaKey)){o.preventDefault(),ie(K.sel,o);return}if(d==="escape"||d==="m")o.preventDefault(),Ic();else if(d==="arrowright"||d==="arrowdown"||d==="tab")o.preventDefault(),Pv(o.shiftKey&&d==="tab"?-1:1);else if(d==="arrowleft"||d==="arrowup")o.preventDefault(),Pv(-1);else if(d==="enter")o.preventDefault(),K.sel!==K.root&&hs(K.sel);else if(d==="backspace")o.preventDefault(),u("mmback").onclick();else if(d==="f")o.preventDefault(),qp(!0);else if(d==="g")o.preventDefault(),u("mm-go").onclick();else if(d==="2")o.preventDefault(),Cv(!K.hop2);else return;return}if(d==="o"&&he()&&!o.ctrlKey&&!o.metaKey&&!o.altKey){o.preventDefault(),ie(ot,o);return}if((o.ctrlKey||o.metaKey)&&d==="k"){o.preventDefault(),Sp();return}if(d==="/")o.preventDefault(),Sp();else if(d==="m")o.preventDefault(),jp();else if(d==="r")bp();else if(d==="l")Ap();else if(d==="x")Rp();else if(d==="g")o.preventDefault(),Fu();else if(d===" ")o.preventDefault(),o.repeat||Nu();else if(d==="p")o.preventDefault(),Bu();else if(d==="u")o.preventDefault(),Lc(!De.on);else if(d==="h"){let m=u("hud").style.display!=="none";u("hud").style.display=m?"none":"",m&&rt(A("hud.off"),2600)}else d==="escape"&&(Ce.on?ku(!1):yr.length?fv():Zo()||vr>=0?iv():os?(os=!1,u("r-broken").classList.remove("on")):(ui(-1),Ks=""))});let gi=null,nn=-1,el=!1,Ki={uStar:{value:new Pt(0,0,0,100)},uStarCol:{value:new Pt(1,1,1,1)},uOcc:{value:new Pt(0,0,0,0)},uOccS:{value:6},uRingS:{value:new Pt(0,1,0,0)},aSurf:{value:new Pt(0,0,8,1)}},Fc=new Float32Array(4),Nc=new Float32Array(4);function Z_(){if(gi)return;let o=new ba({shininess:18,specular:725014,emissive:132620});o.extensions={derivatives:!0},o.onBeforeCompile=d=>{d.uniforms.uStar=Ki.uStar,d.uniforms.uStarCol=Ki.uStarCol,d.uniforms.uOcc=Ki.uOcc,d.uniforms.uOccS=Ki.uOccS,d.uniforms.uRingS=Ki.uRingS,d.uniforms.aSurf=Ki.aSurf,Wg(d,!1),Ng(d,!1)},gi=new Et(new Hs(1,96,64),o),gi.visible=!1,Ft.add(gi)}function J_(){return!$||Ce.on?-1:(d=>{if(d<0||d>=$||d===mt)return!1;let m=xe[d*3]-Ue.position.x,y=xe[d*3+1]-Ue.position.y,_=xe[d*3+2]-Ue.position.z;return Math.sqrt(m*m+y*y+_*_)<ct[d]*70})(ot)?ot:-1}function K_(o){return Z_(),jg(o,Nc,0),Ki.aSurf.value.set(Nc[0],Nc[1],Nc[2],Nc[3]),!0}function $_(o){let d=J_();if(d!==nn&&(nn=d,el=!1),nn>=0&&!el&&(el=K_(nn)),!!gi){if(nn<0||!el){gi.visible=!1;return}gi.visible=!0,gi.position.set(xe[nn*3],xe[nn*3+1],xe[nn*3+2]);{let m=Vo?qg[Vo[nn]]:0;gi.scale.set(ct[nn],ct[nn]*(1-m),ct[nn])}Xs&&(Ru(nn,N.spr,Zi,Fc),Ki.uStar.value.set(Fc[0],Fc[1],Fc[2],Fc[3]),Ki.uStarCol.value.set(Ys[nn*4],Ys[nn*4+1],Ys[nn*4+2],Ys[nn*4+3]),Ki.uOcc.value.set(Si[nn*4],Si[nn*4+1],Si[nn*4+2],Si[nn*4+3]),Ki.uOccS.value=vu[nn]||6,ci&&Ki.uRingS.value.set(ci[nn*4],ci[nn*4+1],ci[nn*4+2],ci[nn*4+3])),Yg(nn,gi.quaternion)}}function Q_(){gi&&(Ft.remove(gi),gi.geometry.dispose(),gi.material.dispose(),gi=null,nn=-1,el=!1)}let im=performance.now(),Gu=60,on=0,tl=0,$i=new nt,Ov=new mn,ds=new L,Qi=new L,Bv=new L,Bt={base:Math.min(devicePixelRatio||1,2),now:1,want:1,still:0,hold:0,ceil:2,px:0,py:0,pz:0,fx:0,fy:0,fz:0,had:!1},zv=13e6,eM=1.6,Vu=0;function rm(){return Bt.still<.45?1:Bt.still<1.1?Math.min(1.45,Bt.ceil):Bt.ceil}function tM(o){let d=Ue.matrixWorld.elements,m=d[12],y=d[13],_=d[14],E=-d[8],w=-d[9],T=-d[10],P=!Bt.had;if(!P){let X=n()*.5/Math.tan(Ue.fov*Math.PI/360),G=Math.max(1,ue.dist),Q=Math.hypot(m-Bt.px,y-Bt.py,_-Bt.pz),le=Math.hypot(E-Bt.fx,w-Bt.fy,T-Bt.fz);P=(Q/G+le)*X>.0625}Bt.px=m,Bt.py=y,Bt.pz=_,Bt.fx=E,Bt.fy=w,Bt.fz=T,Bt.had=!0,Vu=tn?Vu+o:0;let I=Vu<eM||Zs!==0||ki!==N.gap;P||I||!tn||Lt?Bt.still=0:Bt.still+=o;let D=rm();if(Bt.hold+=o,Bt.now>1&&Bt.hold>1&&Gu<42){Bt.ceil=Math.max(1,Bt.now-.55),Bt.now=1,Bt.hold=0,Uv();return}if(Math.abs(D-Bt.now)<.01)return;let R=t(),k=n(),U=Bt.base;D>Bt.now&&R*k*U*U*D*D>zv&&(Bt.ceil=Math.max(1,Math.sqrt(zv/(R*k*U*U))),Math.abs(rm()-Bt.now)<.01)||(Bt.now=rm(),Bt.hold=0,Uv())}function Uv(){Xt.setPixelRatio(Bt.base*Bt.now),Xa()}function Xa(){let o=t(),d=n();Xt.setSize(o,d,!1),Ue.aspect=o/d,Ue.updateProjectionMatrix();let m=d/(2*Math.tan(Ue.fov*Math.PI/360))*(Xt.getPixelRatio()/Bt.base);Or.forEach(_=>{_.uniforms&&(_.uniforms.uScale.value=m)});let y=Xt.getPixelRatio();Ig(Math.max(1,Math.round(o*y)),Math.max(1,Math.round(d*y))),Oi()}l("resize",Xa);let nM=o=>o.kind==="shell"?o.inc:o.inc*N.tlt,Wn=new Float32Array(3),qn=new Float32Array(3);function iM(o,d){let m=1-2*(d+.5)/Math.max(1,o.sN||1),y=Math.sqrt(Math.max(0,1-m*m)),_=d*Dr,E=Math.cos(_)*y,w=m,T=Math.sin(_)*y,P=Math.abs(E)<.9?1:0,I=Math.abs(E)<.9?0:1,D=I*T-0*w,R=0*E-P*T,k=P*w-I*E,U=Math.hypot(D,R,k)||1;D/=U,R/=U,k/=U,o.su=[D,R,k],o.sv=[w*k-T*R,T*D-E*k,E*R-w*D]}let Ur=new Float32Array(2);function sm(o,d){if(!(o>1e-4)){Ur[0]=Math.cos(d),Ur[1]=Math.sin(d);return}let m=Math.sin(d),y=d+o*m*(1+o*Math.cos(d));for(let _=0;_<2;_++){let E=Math.cos(y);y-=(y-o*Math.sin(y)-d)/(1-o*E||1e-6)}Ur[0]=Math.cos(y)-o,Ur[1]=Math.sqrt(1-o*o)*Math.sin(y)}function Wu(o){let d=nM(o),m=Math.cos(d),y=Math.sin(d),_=N.sph;if(_<.001||!o.su)return Wn[0]=1,Wn[1]=0,Wn[2]=0,qn[0]=0,qn[1]=y,qn[2]=m,Gv(o);let E=o.su,w=o.sv,T=E[0]<0?-1:1,P=1+(E[0]*T-1)*_,I=E[1]*T*_,D=E[2]*T*_,R=w[0]*T*_,k=y+(w[1]*T-y)*_,U=m+(w[2]*T-m)*_,X=Math.hypot(P,I,D)||1,G=Math.hypot(R,k,U)||1;Wn[0]=P/X,Wn[1]=I/X,Wn[2]=D/X,qn[0]=R/G,qn[1]=k/G,qn[2]=U/G,Gv(o)}function Gv(o){let d=o.aop;if(!d)return;let m=Math.cos(d),y=Math.sin(d);for(let _=0;_<3;_++){let E=Wn[_],w=qn[_];Wn[_]=E*m+w*y,qn[_]=w*m-E*y}}function Vv(o,d,m,y){hu||(nc[o]=m);let _=Di[o];if(y){let E=nc[o]/(m>1e-4?m:1e-4),w=E<.06?.06:E>6?6:E;_+=y*d.sp*w*Math.sqrt(w),Di[o]=_}return _}function am(o){let d=o*N.spd;on+=d;let m=!1,y=Zi,_=y>.001?Math.pow(y,-1.5):1;if(At.forEach((w,T)=>{if(w.oR===void 0)return;w.oMA===void 0&&(w.oMA=w.oA0),w.oMA+=d*w.oSp*_;let P=w.oMA,I=w.oR*y;if(w.pos.set(Math.cos(P)*I,w.oY*y,Math.sin(P)*I),Ii){let D=Ii.geometry.attributes.position.array;if(D[T*3]=w.pos.x,D[T*3+1]=w.pos.y,D[T*3+2]=w.pos.z,Ei){let R=Ei.geometry.attributes.position.array,U=(w.reachA!==void 0?w.reachA+w.reachB*ki:w.reach||120)*.42*N.spr,X=Math.cos(w.hzA||0)*U,G=Math.sin(w.hzA||0)*U,Q=T*9;R[Q]=w.pos.x,R[Q+1]=w.pos.y,R[Q+2]=w.pos.z,R[Q+3]=w.pos.x+X,R[Q+4]=w.pos.y+U*.18,R[Q+5]=w.pos.z+G,R[Q+6]=w.pos.x-X,R[Q+7]=w.pos.y-U*.18,R[Q+8]=w.pos.z-G}m=!0}}),m&&(Ii.geometry.attributes.position.needsUpdate=!0,Ei&&(Ei.geometry.attributes.position.needsUpdate=!0)),At.forEach(w=>{w.si!==void 0&&(w.sy+=.0016,w.sx+=7e-4,w.rz+=.0021)}),dr&&(dr.rotation.y=on*85e-7,dr.scale.set(y,.68*y,y)),Gs&&(Gs.rotation.y=-on*55e-6,Gs.scale.setScalar(y)),La&&La.scale.setScalar(y),Qr&&Qr.visible&&Qr.scale.setScalar(y),Gt){let w=Gt.userData;Gt.position.set(xe[mt*3],xe[mt*3+1],xe[mt*3+2]),w.surfMat.uniforms.uTime.value=on*.001,w.rimMat.uniforms.uTime.value=on*.001,w.proMat.uniforms.uTime.value=on*.001,w.rimMat.uniforms.uAmt.value=.8+.28*Math.sin(on*.0017+.4)+.1*Math.sin(on*.0043);let T=1+Math.sin(on*85e-5)*.022,P=Ce.on?Gn[mt]:1;Gt.visible=P>.001&&!Lt;let I=N.briSun;w.halo.material.opacity=.085*I,w.rimMat.uniforms.uAmt.value*=g(I,.15,2.4),Gt.scale.setScalar(P*(ct[mt]/(w.R||1))),w.surface.scale.setScalar(T),w.halo.scale.setScalar(1+Math.sin(on*61e-5+1.4)*.05),Au.intensity=w.lit*g(P,0,1)*N.briSun}let E=N.spr;for(let w=0;w<$;w++){let T=oe[w];if(T.kind==="moon")continue;if(T.kind==="core"){xe[w*3]=Yt[w*3],xe[w*3+1]=Yt[w*3+1],xe[w*3+2]=Yt[w*3+2];continue}Wu(T);let P,I=T.y;if(T.kind==="wiki"){let k=Math.max(.05,(Ho.step*ki+T.gapA)/(T.step0||1));P=(T.inner+(T.r0-T.inner)*k)*E}else P=T.r0*y,I*=y;T.aNow=P,I*=1-N.sph,sm(T.ecc,Vv(w,T,P,d));let D=Ur[0],R=Ur[1];xe[w*3]=T.anchor.pos.x+(D*Wn[0]+R*qn[0])*P+Yt[w*3],xe[w*3+1]=T.anchor.pos.y+(D*Wn[1]+R*qn[1])*P+I+Yt[w*3+1],xe[w*3+2]=T.anchor.pos.z+(D*Wn[2]+R*qn[2])*P+Yt[w*3+2]}for(let w=0;w<$;w++){let T=oe[w];if(T.kind!=="moon")continue;let P=T.anchorNode;Wu(T);let I=T.r0*E;T.aNow=I,sm(T.ecc,Vv(w,T,I,d));let D=Ur[0],R=Ur[1];xe[w*3]=xe[P*3]+(D*Wn[0]+R*qn[0])*I+Yt[w*3],xe[w*3+1]=xe[P*3+1]+(D*Wn[1]+R*qn[1])*I+Yt[w*3+1],xe[w*3+2]=xe[P*3+2]+(D*Wn[2]+R*qn[2])*I+Yt[w*3+2]}Lt&&(C_(d),D_()),hu=!0}function rM(o){let d=1-Math.pow(.004,o);if(Lt){for(let m=0;m<$;m++)pt[m]=v(pt[m],K.has.has(m)?1:0,d);Wv(o);return}for(let m=0;m<$;m++){let y=Re[m],_=y.on?1:.02;if(Ks&&(_*=wt[m].includes(Ks)?1:.07),os&&(_*=(Fe[m].bk|0)>0?1:.05),Zo()?_*=Wa.has(m)?1:.05:ot>=0&&(m===ot?_*=1:_c.has(m)?_*=.92:_*=.24),Ce.on){_=Gn[m]>0?y.on?1:.02:0,pt[m]=_?Math.min(_,pt[m]+o*9):0;continue}pt[m]=v(pt[m],_,d)}Wv(o)}let Qs=new mn,om=new Cr;function Wv(o){if(Wo&&(Wo.uniforms.uTime.value=on*.001,Wo.uniforms.uBright.value=g(N.briSys*1.6,0,2.2)),!At||!At.length)return;let d=1-Math.pow(.004,o),m=Ii?Ii.geometry.attributes.aAlpha:null,y=Ei?Ei.geometry.attributes.aAlpha:null,_=Ei?Ei.geometry.attributes.aSize:null,E=!1;At.forEach((w,T)=>{if(!w.op0)return;if(y&&w.tier===0){let X=Math.max(60,(w.reachA!==void 0?w.reachA+w.reachB*ki:w.reach||120)*N.spr),G=Ue.position.distanceTo(w.pos),Q=g((G/X-1.5)/2.5,0,1),le=(Lt?0:w.on?1:0)*Q*Q*N.briSys,de=1+.04*Math.sin(on*19e-5+w.oA0*1.7);for(let fe=0;fe<3;fe++){let H=T*3+fe;y.array[H]=v(y.array[H],le*(fe?.045:.075),d),_.array[H]=X*(fe?3.4:5)*de}y.needsUpdate=!0,_.needsUpdate=!0}let P=Lt?0:w.on?1:0;Ce.on&&(P*=Ce.u>=w.genT?g((Ce.u-w.genT)/Ce.grow,0,1):0);let I=w.vis=v(w.vis===void 0?P:w.vis,P,d),D=w.tier===0?N.briSys:1;m&&(m.array[T]=w.op0.glow*I*D,E=!0);let R=w.si;if(R===void 0||!Vs)return;let k=I>.006?w.sR:0,U=1+Math.sin(on*.0011+w.oA0*3.1)*.035;Qs.identity(),ds.set(k*U,k*U,k*U),$i.compose(w.pos,Qs,ds),Vs.setMatrixAt(R,$i),uu[R]=w.op0.core*I*g(D*2.2,0,1),Qs.setFromEuler(om.set(w.sx,w.sy,0)),ds.set(k,k,k),$i.compose(w.pos,Qs,ds),Pa.setMatrixAt(R,$i),du[R]=w.op0.shell*I*D,Qs.setFromEuler(om.set(w.rx,0,w.rz)),$i.compose(w.pos,Qs,ds),Da.setMatrixAt(R,$i),fu[R]=w.op0.ring*I*D,Qs.setFromEuler(om.set(w.rx*.72,w.rz*.3,-w.rz*.86)),$i.compose(w.pos,Qs,ds),Ia.setMatrixAt(R,$i),pu[R]=w.op0.ring2*I*D*(.72+.38*Math.sin(on*52e-5+w.oA0*2.3))}),E&&(m.needsUpdate=!0),Vs&&[Vs,Pa,Da,Ia].forEach(w=>{w.instanceMatrix.needsUpdate=!0,w.geometry.attributes.aAlpha.needsUpdate=!0})}let Hc={ref:1,k:1.15,floor:.3},qv=new Ds,sM=new nt,lm=new nr;function aM(){if(!Ca)return;let o=Ca.material.uniforms,d=Gt?Gt.position:Qi.set(0,0,0),m=Ue.position.distanceTo(d),y=g((m/o.uR0.value-1.6)/2.4,0,1),_=N.zod*y*y*.16;(Lt||!Gt||!Gt.visible)&&(_=0),Ce.on&&mt>=0&&(_*=g(Gn[mt],0,1)),o.uAmt.value=_,Ca.visible=_>5e-4,Ca.visible&&(Ca.position.copy(d),o.uSun.value.copy(d),o.uCam.value.copy(Ue.position))}function cm(o){let d=1-(o/Hc.ref-1)*Hc.k;return d>1?1:d<Hc.floor?Hc.floor:d}function oM(){Hc.ref=Math.max(60,ue.dist),m1(),Ue.updateMatrixWorld(),qv.setFromProjectionMatrix(sM.multiplyMatrices(Ue.projectionMatrix,Ue.matrixWorldInverse))}let nl={core:1,wiki:1,moon:1,spiral:1,shell:1};function lM(){nl.core=N.briSun,nl.wiki=N.briPl,nl.moon=N.briMn,nl.spiral=nl.shell=N.briPl}function cM(){if(!$||!En||!En.instanceColor)return;let o=En.instanceColor.array,d=N.bri;lM();let m=Ce.on,y=yr.length>0,_=Ue.position,E=_.x,w=_.y,T=_.z,P=N.spr,I=Zi,D=n()*.5/Math.tan(Ue.fov*Math.PI/360),R=ji.attributes.aStar;for(let k=0;k<$;k++){let U=Lt&&!K.has.has(k),X=U?oe[k].kind:Lt?"wiki":oe[k].kind,G=X!==oe[k].kind&&k===mt;if(Qi.set(xe[k*3],xe[k*3+1],xe[k*3+2]),Ru(k,P,I,Xs.subarray(k*4,k*4+4)),Si[k*4+3]>0)if(Lt)Si[k*4]=0,Si[k*4+1]=1e7,Si[k*4+2]=0;else{let Ee=oe[k].anchorNode;Si[k*4]=xe[Ee*3],Si[k*4+1]=xe[Ee*3+1],Si[k*4+2]=xe[Ee*3+2]}let Q=k===mt&&Gt&&!Lt?0:ct[k];U&&(Q=0),k===nn&&el&&(Q=0),m&&(Q*=Gn[k]),y&&Kt[k]>.004&&(Q*=1+Kt[k]*.16),Yg(k,Ov);let le=Vo?qg[Vo[k]]:0;ds.set(Q,Q*(1-le),Q),$i.compose(Qi,Ov,ds),En.setMatrixAt(k,$i);let de=.1+pt[k]*.9;k===ot?de=1:k===_n&&(de=Math.min(1,de*1.35)),y&&Kt[k]>.004&&(de+=Kt[k]*.9);let fe=nl[X]||1,H=Math.min(1.8,de*(.55+d*fe*.45));o[k*3]=ne[k*3]*H,o[k*3+1]=ne[k*3+1]*H,o[k*3+2]=ne[k*3+2]*H,ic[k*3]=xe[k*3],ic[k*3+1]=xe[k*3+1],ic[k*3+2]=xe[k*3+2];let J=pt[k]*(X==="wiki"?.62:X==="core"?1:.38);G&&(J*=.5);let Me=xe[k*3]-E,Te=xe[k*3+1]-w,ve=xe[k*3+2]-T,re=Math.sqrt(Me*Me+Te*Te+ve*ve);if(X!=="core"){let Ee=Xs[k*4]-xe[k*3],Ae=Xs[k*4+1]-xe[k*3+1],He=Xs[k*4+2]-xe[k*3+2],$e=Math.sqrt(Ee*Ee+Ae*Ae+He*He),se=.5*(1+(Ee*Me+Ae*Te+He*ve)/($e*re+1e-6));J*=.12+.88*se;let me=oe[k].aNow;if(me>1&&!Lt){let et=me/($e+1e-6);J*=et*et<.45?.45:et*et>2.2?2.2:et*et}let Se=ct[k]*D/Math.max(1,re);Se>5&&(J*=Math.max(.15,1-(Se-5)/12))}k===ot?J=Math.min(1.6,J*2.1):_c.has(k)&&(J*=1.5),m&&ht[k]&&(J*=2.6),!m&&!Lt&&Zn[k]>.002&&(J+=Zn[k]*1.9),y&&Kt[k]>.004&&(J+=Kt[k]*2.2),J*=cm(re),U&&(J=0),gu[k]=Math.min(2.6,J*d*fe),(m||Cp)&&(Ws[k]=qs[k]*(m?Gn[k]:1))}if(Kn){for(let k=0;k<Ai.length;k++){let U=Ai[k];Qi.set(xe[U*3],xe[U*3+1],xe[U*3+2]);let X=ct[U]*No[k],G=X/Math.max(1,Ue.position.distanceTo(Qi));X*=k1(g((G-.0052)/.0123,0,1)),m&&(X*=Gn[U]),$i.compose(Qi,_u[k],ds.set(X,X,X)),Kn.setMatrixAt(k,$i),Ru(U,P,I,hc.subarray(k*4,k*4+4)),hc[k*4+3]=X/(No[k]||1)}Kn.instanceMatrix.needsUpdate=!0,Kn.geometry.attributes.aRing.needsUpdate=!0}(m||Cp)&&(fr.attributes.aSize.needsUpdate=!0,Cp=m),En.instanceMatrix.needsUpdate=!0,En.instanceColor.needsUpdate=!0,R&&(R.needsUpdate=!0),En.geometry.attributes.aOcc&&(En.geometry.attributes.aOcc.needsUpdate=!0),fr.attributes.position.needsUpdate=!0,fr.attributes.aAlpha.needsUpdate=!0}function hM(o){let d=fc[pc],m=d.mask,y=!!d.cross;if(Ce.on){let E=Ce.u,w=.016;for(let T=0;T<On;T++){let P=an[T];if(!m[P[2]]||y&&Re[P[0]]===Re[P[1]]){Us[T]=0;continue}Us[T]=E<=Yi[T]?0:g((E-Yi[T])/w,0,1)}return}let _=Math.min(1,o*5.2);for(let E=0;E<On;E++){let w=an[E],T=m[w[2]]&&!(y&&Re[w[0]]===Re[w[1]])?1:0,P=1-E%17*.028;Us[E]+=(T-Us[E])*_*P,Math.abs(T-Us[E])<.004&&(Us[E]=T)}}let fs=new Float32Array(3);function Xv(o){let d,m,y;if(o===mt)d=xe[o*3],m=xe[o*3+1],y=xe[o*3+2];else{let T=Re[o];if(!T||!T.pos)return-1;d=T.pos.x,m=T.pos.y,y=T.pos.z}fs[0]=d,fs[1]=m,fs[2]=y;let _=d-xe[o*3],E=m-xe[o*3+1],w=y-xe[o*3+2];return Math.sqrt(_*_+E*E+w*w)}function uM(){if(!On)return;let o=(.2+.34*(1-N.ten))*N.arc,d=.05+.09*(1-N.ten),m=Lt?0:N.bnd,y=N.lnk,_=ot,E=Zo(),w=yr.length>0?Kt:null,T=xe,P=mg,I=gg,D=pt,R=yg,k=N.lwd,U=0,X=!1,G=0,Q=Ue.position,le=Q.x,de=Q.y,fe=Q.z,H=n()*.5/Math.tan(Ue.fov*Math.PI/360),J=0;for(let Me=0;Me<On;Me++){let Te=an[Me],ve=Te[0],re=Te[1],Ee=Te[2],Ae=Us[Me],He=D[ve],$e=D[re],se=(He<$e?He:$e)*(Ee===0?.55:.4)*y;if(Lt&&(se*=ve===K.root||re===K.root?1.7:.3),E?se*=jo.has(Me)?4.2:.05:_>=0&&(se*=ve===_||re===_?3.4:.22),w){let St=w[ve]>w[re]?w[ve]:w[re];St>.004&&(se+=St*1.5*y)}Ae<1&&(se*=Ae>0?Ae:0);let me=gt[Me];me||(me=gt[Me]={});let Se=T[ve*3],et=T[ve*3+1],Ye=T[ve*3+2],Je=T[re*3],yt=T[re*3+1],Ct=T[re*3+2],Nt=(Se+Je)*.5,Mt=(et+yt)*.5,yn=(Ye+Ct)*.5,Yn=Nt-le,Bn=Mt-de,_r=yn-fe,er=Math.sqrt(Yn*Yn+Bn*Bn+_r*_r);se*=cm(er);let cn=Se-Je,tr=et-yt,ms=Ye-Ct,hn=Math.sqrt(cn*cn+tr*tr+ms*ms),al=0,Za=0,fy=0,id=Math.sqrt(Nt*Nt+Mt*Mt+yn*yn);if(id>1e-4&&hn>1e-4){let St=Nt/id,sn=Mt/id,Jt=yn/id,Dn=(St*cn+sn*tr+Jt*ms)/(hn*hn),In=St-Dn*cn,Sn=sn-Dn*tr,zn=Jt-Dn*ms,Qn=Math.sqrt(In*In+Sn*Sn+zn*zn);if(Qn>.08){let Bi=hn*d/Qn;al+=In*Bi,Za+=Sn*Bi,fy+=zn*Bi}}Za+=hn*o;let py=Nt+al,my=Mt+Za,gy=yn+fy,gs=Se+(py-Se)*(2/3),vs=et+(my-et)*(2/3),ys=Ye+(gy-Ye)*(2/3),xs=Je+(py-Je)*(2/3),ws=yt+(my-yt)*(2/3),bs=Ct+(gy-Ct)*(2/3);if(m>.002){let St=Xv(ve);if(St>=0){let Jt=m*(hn<St?hn/(St>.001?St:.001):1);gs+=(fs[0]-gs)*Jt,vs+=(fs[1]-vs)*Jt,ys+=(fs[2]-ys)*Jt}let sn=Xv(re);if(sn>=0){let Jt=m*(hn<sn?hn/(sn>.001?sn:.001):1);xs+=(fs[0]-xs)*Jt,ws+=(fs[1]-ws)*Jt,bs+=(fs[2]-bs)*Jt}if(hn>1e-4){let Jt=-cn/hn,Dn=-tr/hn,In=-ms/hn,Sn=(gs-Se)*Jt+(vs-et)*Dn+(ys-Ye)*In,zn=Sn<hn*.08?hn*.08:Sn>hn*.45?hn*.45:Sn;if(zn!==Sn){let Er=zn-Sn;gs+=Jt*Er,vs+=Dn*Er,ys+=In*Er}let Qn=(xs-Se)*Jt+(ws-et)*Dn+(bs-Ye)*In,Bi=Qn<hn*.55?hn*.55:Qn>hn*.92?hn*.92:Qn;if(Bi!==Qn){let Er=Bi-Qn;xs+=Jt*Er,ws+=Dn*Er,bs+=In*Er}}}let vy=0;{let St=Se-2*gs+xs,sn=et-2*vs+ws,Jt=Ye-2*ys+bs,Dn=gs-2*xs+Je,In=vs-2*ws+yt,Sn=ys-2*bs+Ct,zn=St*St+sn*sn+Jt*Jt,Qn=Dn*Dn+In*In+Sn*Sn;vy=Math.sqrt(zn>Qn?zn:Qn)}let yy=!1;if(Ae>.002&&se>.002){lm.center.set(Nt,Mt,yn);let St=hn*.5,sn=gs-Nt,Jt=vs-Mt,Dn=ys-yn,In=Math.sqrt(sn*sn+Jt*Jt+Dn*Dn);In>St&&(St=In);let Sn=xs-Nt,zn=ws-Mt,Qn=bs-yn,Bi=Math.sqrt(Sn*Sn+zn*zn+Qn*Qn);Bi>St&&(St=Bi),lm.radius=St,qv.intersectsSphere(lm)||(yy=!0,J++)}if(Ae<=.002||se<=.002||yy){if(me.zero){U+=R,me.str=0,me.ty=Ee;continue}for(let St=0;St<R;St++)P[U*3]=Se,P[U*3+1]=et,P[U*3+2]=Ye,I[U*3]=0,I[U*3+1]=0,I[U*3+2]=0,U++;me.str=0,me.ty=Ee,me.zero=!0,X=!0;continue}me.zero=!1,X=!0;let Mr=Yb(vy*H/(er>1?er:1),dc),Ja=0;if(Mr>=6&&Ee!==0){let St=hn*H/(er>1?er:1)/(Mr-1);Ja=Math.round(26/(St>.01?St:.01)),Ja=Ja<2?2:Ja>7?7:Ja}let xy=k*(Ee===0?1:.86);_>=0&&(ve===_||re===_)&&(xy*=1.5);let _s=Eg[Ee],ol=.5,qM=_s.r*se,XM=_s.g*se,YM=_s.b*se,jM=(ne[ve*3]-_s.r)*ol*se,ZM=(ne[ve*3+1]-_s.g)*ol*se,JM=(ne[ve*3+2]-_s.b)*ol*se,KM=(ne[re*3]-_s.r)*ol*se,$M=(ne[re*3+1]-_s.g)*ol*se,QM=(ne[re*3+2]-_s.b)*ol*se,wy=1/(Mr-1);$t[0]=Se,$t[1]=et,$t[2]=Ye;for(let St=1;St<Mr;St++){let sn=St*wy*Ae,Jt=1-sn,Dn=Jt*Jt*Jt,In=3*Jt*Jt*sn,Sn=3*Jt*sn*sn,zn=sn*sn*sn;$t[St*3]=Dn*Se+In*gs+Sn*xs+zn*Je,$t[St*3+1]=Dn*et+In*vs+Sn*ws+zn*yt,$t[St*3+2]=Dn*Ye+In*ys+Sn*bs+zn*Ct}let eE=xy*.5*er/H;for(let St=0;St<dc;St++){let sn=St<Mr?St:Mr-1,Jt=sn*3,Dn=$t[Jt],In=$t[Jt+1],Sn=$t[Jt+2],zn=(sn>0?sn-1:0)*3,Qn=(sn<Mr-1?sn+1:Mr-1)*3,Bi=St>=Mr||Ja&&St>0&&St<Mr-1&&St%Ja===0,Er=Bi?0:Ae<1&&St>=Mr-2?2.6:1,rd=2*sn*wy-1,xm=rd<0?-rd:0,wm=rd>0?rd:0;Tu(P,I,U,Dn,In,Sn,$t[Qn]-$t[zn],$t[Qn+1]-$t[zn+1],$t[Qn+2]-$t[zn+2],Dn-le,In-de,Sn-fe,Bi?0:eE,(qM+jM*xm+KM*wm)*Er,(XM+ZM*xm+$M*wm)*Er,(YM+JM*xm+QM*wm)*Er),U+=2,Bi||G++}me.ax=Se,me.ay=et,me.az=Ye,me.bx=Je,me.by=yt,me.bz=Ct,me.c1x=gs,me.c1y=vs,me.c1z=ys,me.c2x=xs,me.c2y=ws,me.c2z=bs,me.str=se,me.ty=Ee,me.prog=Ae}fn.linkLive=G,fn.linkCap=On*dc,fn.linkCull=J,X&&(rc.attributes.position.needsUpdate=!0,rc.attributes.aColor.needsUpdate=!0)}function dM(){if(!Io)return;let o=N.trl>.02&&$>0&&!Lt;if(Io.visible=o,!o){js.setDrawRange(0,0);return}let d=Ue.position,m=d.x,y=d.y,_=d.z,E=n()*.5/Math.tan(Ue.fov*Math.PI/360),w=tp,T=np,P=xe,I=Zi,D=N.spr,R=N.trl,k=0,U=0;for(let X=0;X<$&&k<Mu;X++){let G=xu[X],Q=oe[G];if(!Q||Q.kind==="core"||!Q.sp)continue;let le=pt[G];if(le<.06)continue;let de=P[G*3]-m,fe=P[G*3+1]-y,H=P[G*3+2]-_,J=de*de+fe*fe+H*H;if(J<1)continue;let Me=Math.sqrt(J),Te=ct[G]*E/Me;if(Te<.9)continue;let ve=Te>4?1:(Te-.9)/3.1,re,Ee,Ae=Q.y;if(Q.kind==="moon"){let cn=Q.anchorNode;re=Q.r0*D,Yv.set(P[cn*3],P[cn*3+1],P[cn*3+2]),Ee=Yv,Ae=0}else if(Q.kind==="wiki"){let cn=Math.max(.05,(Ho.step*ki+Q.gapA)/(Q.step0||1));re=(Q.inner+(Q.r0-Q.inner)*cn)*D,Ee=Q.anchor.pos}else re=Q.r0*I,Ae*=I,Ee=Q.anchor.pos;if(!Ee||!(re>.01))continue;let He=Di[G];Wu(Q);let $e=Wn[0],se=Wn[1],me=Wn[2],Se=qn[0],et=qn[1],Ye=qn[2];Ae*=1-N.sph;let Je=-jb/(Oa-1)*(Q.sp<0?-1:1),yt=Q.ecc||0,Ct=0,Nt=0,Mt=ne[G*3],yn=ne[G*3+1],Yn=ne[G*3+2],Bn=R*ve*g(le,0,1)*(G===ot?1.7:1)*cm(Me)*.55;for(let cn=0;cn<Oa;cn++)sm(yt,He+cn*Je),Ct=Ur[0],Nt=Ur[1],$t[cn*3]=Ee.x+(Ct*$e+Nt*Se)*re+Yt[G*3],$t[cn*3+1]=Ee.y+(Ct*se+Nt*et)*re+Ae+Yt[G*3+1],$t[cn*3+2]=Ee.z+(Ct*me+Nt*Ye)*re+Yt[G*3+2];let er=g(Te*.2*N.lwd,.8,5)*.5*Me/E;for(let cn=0;cn<Oa;cn++){let tr=cn*3,ms=(cn>0?cn-1:0)*3,hn=(cn<Oa-1?cn+1:Oa-1)*3,al=1-cn/(Oa-1),Za=Bn*al*al;Tu(w,T,U,$t[tr],$t[tr+1],$t[tr+2],$t[hn]-$t[ms],$t[hn+1]-$t[ms+1],$t[hn+2]-$t[ms+2],$t[tr]-m,$t[tr+1]-y,$t[tr+2]-_,er*al,Mt*Za,yn*Za,Yn*Za),U+=2}xg[k++]=G}js.setDrawRange(0,k*wg),js.attributes.position.needsUpdate=!0,js.attributes.aColor.needsUpdate=!0,fn.trails=k}let Yv=new L;function fM(o){if(On){for(let d=0;d<Fr;d++){if(ko[d]+=ip[d]*o*60*Math.max(.15,N.spd),ko[d]>1)if(ko[d]=0,Lt&&(K.pRoot.length||K.pCross.length)){let w=Math.random()<.8&&K.pRoot.length||!K.pCross.length?K.pRoot:K.pCross;sc[d]=w[Math.floor(Math.random()*w.length)]}else sc[d]=Math.floor(Math.random()*On);let m=gt[sc[d]];if(!m||m.str<.03||m.c1x===void 0){for(let w=0;w<Nr;w++)wu[d*Nr+w]=0;continue}let y=m.prog===void 0?1:m.prog,_=Eg[m.ty],E=Math.min(1,m.str*2.4);for(let w=0;w<Nr;w++){let T=d*Nr+w,P=Math.max(0,ko[d]-w*.022)*y,I=1-P,D=I*I*I,R=3*I*I*P,k=3*I*P*P,U=P*P*P;ac[T*3]=D*m.ax+R*m.c1x+k*m.c2x+U*m.bx,ac[T*3+1]=D*m.ay+R*m.c1y+k*m.c2y+U*m.by,ac[T*3+2]=D*m.az+R*m.c1z+k*m.c2z+U*m.bz;let X=1-w/Nr;rp[T]=(2.4+m.str*5)*(.55+.45*X),oc[T*3]=_.r,oc[T*3+1]=_.g,oc[T*3+2]=_.b,wu[T]=E*Math.sin(P*Math.PI)*X*X}}pr.attributes.position.needsUpdate=!0,pr.attributes.aSize.needsUpdate=!0,pr.attributes.aColor.needsUpdate=!0,pr.attributes.aAlpha.needsUpdate=!0}}let ln={i:[],x:[],y:[],w:[],h:[],p:[],o:[],ok:[],ord:[],keep:[]},qu=new L;function pM(){if(!es||!es.length)return;let o=Ue.position,d=t(),m=n(),y=m*.5/Math.tan(Ue.fov*Math.PI/360),_=Ue.matrixWorld.elements,E=_[4],w=_[5],T=_[6],P=0;for(let D=0;D<es.length;D++){let R=es[D];R.vis===void 0&&(R.vis=1);let k=R.node?Qi.set(xe[R.idx*3],xe[R.idx*3+1],xe[R.idx*3+2]):Qi.copy(R.get()),U=o.distanceTo(k),X,G;if(R.node){let me=Fe[R.idx];X=g((R.far-U)/R.far,0,1)*(pt[R.idx]<.05?0:pt[R.idx]>.5?1:.12),X*=R.idx===ot?1.4:me.inb>12?1:.55,G=me.inb|0,R.idx===ot?G+=4e5:R.idx===ze?G+=2e5:R.idx===_n&&(G+=1e5)}else{let me=R.cat.vis===void 0?R.cat.on?1:0:R.cat.vis;X=g((R.far-U)/(R.far*.55),0,1)*(.12+me*.83)*(me<.05?0:1),U<130&&(X*=g(U/130,0,1)),G=5e5+(R.cat.tier===0?4e5:0)+(R.cat.n|0)}if(X=g(X,0,1),X<=.012){R.sprite.visible=!1;continue}let Q=g(U*.0016,.55,5.2),de=(R.node?12+Math.min(7,Fe[R.idx].inb*.12):R.cat.tier===0?22:17)*Q,fe=R.sprite.material.map.image,H=fe.width/fe.height,J=de*y/U,Te=((R.node?ct[R.idx]:R.cat.sR||R.cat.R||6)*y/U*1.3+J*.62+5)*U/y,ve=k.x+E*Te,re=k.y+w*Te,Ee=k.z+T*Te;if(qu.set(ve,re,Ee).project(Ue),qu.z>1){R.sprite.visible=!1;continue}let Ae=(qu.x*.5+.5)*d,He=(-qu.y*.5+.5)*m,$e=J*H*.5,se=J*.5;if(Ae+$e<0||Ae-$e>d||He+se<0||He-se>m){R.sprite.visible=!1;continue}R.sprite.position.set(ve,re,Ee),R.sprite.scale.set(de*H,de,1),ln.i[P]=D,ln.x[P]=Ae,ln.y[P]=He,ln.w[P]=$e,ln.h[P]=se,ln.p[P]=G,ln.o[P]=X,ln.ord[P]=P,P++}ln.ord.length=P,ln.ord.sort((D,R)=>ln.p[R]-ln.p[D]);let I=0;for(let D=0;D<P;D++){let R=ln.ord[D],k=!0;for(let U=0;U<I;U++){let X=ln.keep[U];if(Math.abs(ln.x[R]-ln.x[X])<(ln.w[R]+ln.w[X])*.96&&Math.abs(ln.y[R]-ln.y[X])<(ln.h[R]+ln.h[X])*1.15){k=!1;break}}k&&(ln.keep[I++]=R),ln.ok[R]=k}for(let D=0;D<P;D++){let R=es[ln.i[D]];R.vis+=((ln.ok[D]?1:0)-R.vis)*.16;let k=ln.o[D]*R.vis;R.sprite.material.opacity=k,R.sprite.visible=k>.012}}let mM=16.7;function ea(o,d,m){let y=u(o);y.textContent=d<.1?"<0.1":d.toFixed(d<10?1:0),y.parentElement.classList.toggle("hot",d>mM*m)}function gM(o){if(tl%6)return;u("s-fps").textContent=Gu.toFixed(0),fn.on&&(ea("p-sim",fn.sim,.35),ea("p-pick",fn.pick,.12),ea("p-inst",fn.inst,.2),ea("p-link",fn.link,.25),ea("p-trlms",fn.trl,.15),ea("p-spr",fn.spr,.15),ea("p-draw",fn.draw,.3),ea("p-tot",fn.tot,.9),u("p-lv").textContent=fn.linkCap?fn.linkLive+" / "+fn.linkCap:"\u2014",u("p-cull").textContent=On?fn.linkCull+" / "+On:"\u2014",u("p-trl").textContent=fn.trails+" / "+Mu,u("p-dc").textContent=Xt.info.render.calls),u("s-dist").textContent=ue.dist.toFixed(0)+" U";{let m=n()*.5/Math.tan(Ue.fov*Math.PI/360),y=ue.dist/m;u("s-scale").textContent=$?(y>=10?y.toFixed(0):y>=1?y.toFixed(1):y.toFixed(2))+" U/PX":"\u2014";let _=u("sbar");if(_)if(!$||y<=0)_.style.display="none";else{let E=y*130,w=Math.pow(10,Math.floor(Math.log10(E))),T=E/w,P=(T<1.5?1:T<3.5?2:T<7.5?5:10)*w;_.style.display="block",_.firstElementChild.style.width=(P/y).toFixed(1)+"px",u("sbar-t").textContent=(P>=1e3?P/1e3+"k":P)+" U"}}ot>=0&&!(tl&7)&&lv(),u("hud").classList.toggle("idle",performance.now()-cv>9e3&&!Du&&!Ce.on&&!Lt&&!ia);let d=u("tgt");_n>=0&&_n<$?(Qi.set(xe[_n*3],xe[_n*3+1],xe[_n*3+2]).project(Ue),Qi.z<1?(d.style.display="block",d.style.left=(Qi.x*.5+.5)*t()+"px",d.style.top=(-Qi.y*.5+.5)*n()+"px",d.textContent=Fe[_n].n):d.style.display="none"):d.style.display="none",qt&&performance.now()>qt&&(u("toast").classList.remove("on"),qt=0)}let Xn={host:!0,running:!1,raf:0,lost:!1},fn={on:!1,sim:0,pick:0,inst:0,link:0,trl:0,spr:0,draw:0,tot:0,linkLive:0,linkCap:0,linkCull:0,trails:0,t0:0};function ta(o,d){fn[o]=fn[o]*.9+d*.1}function na(){return fn.on?performance.now():0}function vM(){return Xn.host&&!document.hidden&&!Xn.lost}function Xu(){vM()?Zv():jv()}function jv(){Xn.running=!1,Xn.raf&&(cancelAnimationFrame(Xn.raf),Xn.raf=0),De.ctx&&De.ctx.state==="running"&&De.ctx.suspend().catch(()=>{})}function Zv(){Xn.running=!0,im=performance.now(),Xn.raf&&cancelAnimationFrame(Xn.raf),Xn.raf=requestAnimationFrame(Jv),De.on&&De.ctx&&De.ctx.state==="suspended"&&De.ctx.resume().catch(()=>{})}h("visibilitychange",Xu),Hr.addEventListener("webglcontextlost",()=>{Xn.lost=!0,Xu(),rt(A("gl.lost"),8e3)},!1),Hr.addEventListener("webglcontextrestored",()=>{Xn.lost=!1,Xa(),Xu(),rt(A("gl.restored"))},!1);function Jv(o){Xn.raf=requestAnimationFrame(Jv);let d=Math.min(64,o-im);im=o;let m=d/1e3;if(Gu=Gu*.92+1e3/Math.max(1,d)*.08,tl++,!tn){up();return}N.frs>=.5&&Date.now()-Jn>Qb&&Ag();let y=na();t_(m),i_(),n_(),a_(m),s_(m),V1(m),e1(m),Wb(m),am(d),Lt||c_(m),v_(m),rM(m),$_(m);let _=na();kc&&!wr&&(_n=Mp(zr.x,zr.y,_n));let E=na();hM(m),oM(),aM(),cM();let w=na();uM();let T=na();dM();let P=na();fM(m),pM();let I=na();S_();let D=o*.001;for(let G=0;G<Or.length;G++)Or[G].uniforms&&(Or[G].uniforms.uTime.value=D);if(Vg.value=N.det,ot>=0&&ot<$&&kr?(kr.visible=!0,kr.position.set(xe[ot*3],xe[ot*3+1],xe[ot*3+2]),bu.scale.setScalar(ct[ot]*2.9),bu.quaternion.copy(Ue.quaternion)):kr&&(kr.visible=!1),ze>=0&&ze<$&&Ti){let G=Ce.on?g(Gn[ze],0,1):1;if(Ti.visible=G>.03,Ti.visible){Ti.position.set(xe[ze*3],xe[ze*3+1],xe[ze*3+2]);let Q=.5+.5*Math.sin(on*.0031),le=ct[ze]*(3.6+Q*.5);cc.scale.setScalar(le),cc.quaternion.copy(Ue.quaternion),cc.material.opacity=(.45+Q*.42)*G,Fo.scale.setScalar(le*1.3),Fo.quaternion.copy(Ue.quaternion),Fo.rotateZ(on*.0012),Fo.material.opacity=(.28+(1-Q)*.36)*G;let de=Ue.position.distanceTo(Ti.position),fe=g(de*.011,ct[ze]*.5,ct[ze]*2.6);Bv.set(0,1,0).applyQuaternion(Ue.quaternion),Na.position.copy(Bv).multiplyScalar(le*1.9+fe*1.6),Na.scale.setScalar(fe),Na.quaternion.copy(Ue.quaternion),Na.rotateZ(Math.PI*.25),Na.material.opacity=(.45+Q*.4)*G}}else Ti&&(Ti.visible=!1);_n>=0&&_n<$&&_n!==ot&&mr?(mr.visible=!0,mr.position.set(xe[_n*3],xe[_n*3+1],xe[_n*3+2]),mr.scale.setScalar(ct[_n]*2.2),mr.quaternion.copy(Ue.quaternion)):mr&&(mr.visible=!1),pp.position.copy(Ue.position).normalize();let R=n()*.5/Math.tan(Ue.fov*Math.PI/360);if($n&&$&&!Lt){let G=Ue.position.length(),Q=(Ce.on?g(Gn[mt],0,1):1)*(Lt?0:1),le=g((ct[mt]||17)*9+G*.05,90,900)*Q;Gt&&$n.position.copy(Gt.position),$n.visible=Q>.02;let de=g(G/((ct[mt]||17)*40),0,1),fe=Gt?Ue.position.distanceTo(Gt.position):G,H=Ft.fog?Ft.fog.density*fe:0,J=Math.exp(-H*H),Me=J>.3?J:.3,Te=J>.2?J:.2,ve=J>.08?J:.08;if($n.material.opacity=.85*Q*(.38+.62*de)*Me,$n.scale.setScalar(le),hi){hi.visible=Q>.02,hi.position.copy($n.position),hi.material.rotation=on*21e-6;let re=1+Math.sin(on*43e-5+.8)*.075;hi.scale.setScalar(le*1.62*re),hi.material.opacity=(.34+.16*Math.sin(on*67e-5))*Q*Te}if(Vn){let re=(ct[mt]||17)*R/Math.max(1,G),Ee=g((90-re)/80,0,1),Ae=N.glare*Ee*Q;if(Vn.visible=Ae>.004,Vn.visible){Vn.position.copy($n.position);let He=g(G*.52,le*2.2,G*.88);Vn.scale.setScalar(He),Vn.material.opacity=Math.min(.95,Ae*.78)*ve;let $e=g((N.glare-.5)/1.9,0,1)*Ee*Q;if($e>.008){let se=B1();se.visible=!0,se.position.copy($n.position),se.scale.setScalar(He*1.45),se.material.opacity=Math.min(.95,$e*1.24)}else Pn&&(Pn.visible=!1)}else Pn&&(Pn.visible=!1)}}let k=g(Zi*Zi,.02,3);if(Ua&&(Ua.rotation.y=on*75e-7,Ua.scale.setScalar(Zi),Ua.material.uniforms.uBright.value=N.str*k),Hi){Hi.rotation.y=-on*42e-7,Hi.scale.setScalar(Zi),Hi.material.uniforms.uBright.value=N.str*k,Hi.material.uniforms.uTime.value=on*.001;let G=Hi.material.uniforms;Gt&&$?(G.uSunV.value.copy(Gt.position).applyMatrix4(Ue.matrixWorldInverse),G.uSunR.value=Math.max(400,(ct[mt]||17)*40),Gt.userData.surfMat&&G.uSunCol.value.copy(Gt.userData.surfMat.uniforms.uCore.value)):G.uSunV.value.set(0,0,-1e9)}if(is&&(is.material.uniforms.uBright.value=N.str),za){let G=za.material.uniforms;G.uCam.value.copy(Ue.position),G.uTime.value=on*.001,G.uBright.value=N.str*.55}xc&&(xc.rotation.y=on*11e-7),wc&&(wc.rotation.y=on*11e-7),bc&&(bc.rotation.y=on*8e-7);{let G=Ue.position;xc&&xc.position.copy(G),wc&&wc.position.copy(G),bc&&bc.position.copy(G),Hi&&Hi.position.copy(G),ss&&ss.position.copy(G),is&&is.position.copy(G)}gM(o),tM(m);let U=na(),X=up();if(fn.on){let G=performance.now();ta("sim",_-y),ta("pick",E-_),ta("inst",w-E),ta("link",T-w),ta("trl",P-T),ta("spr",I-P),ta("draw",G-U),ta("tot",G-y)}}function hm(){let o=N.str;Bo.forEach(d=>{d.uniforms.uBright.value=o,d.uniforms.uTwinkle.value=(d.userData.twinkle||0)*g(o,0,1.2)})}function Kv(){u("ctl").classList.toggle("adv",!!N.adv),u("advtog").textContent=(N.adv?"\u25BE ":"\u25B8 ")+"ADVANCED"}let $v=[["leg","legFold","legfold"],["keys","keysFold","keysfold"]];function Qv(){$v.forEach(([o,d,m])=>{let y=!!N[d];u(o).classList.toggle("fold",y),u(m).textContent=y?"[ + ]":"[ \u2212 ]"})}$v.forEach(([o,d])=>{u(o).firstElementChild.onclick=()=>{N[d]=!N[d],Qv(),st(),Oi()}});let Ya=new Map;function yM(o){return o.get?o.get():Math.round(N[o.k]*o.sc)}function xM(o,d){if(o.set){o.set(d);return}N[o.k]=g(d,o.min,o.max)/o.sc}function wM(o){return o.get?o.get():N[o.k]}function Oc(o){return N.pin.indexOf(o)>=0}function bM(){let o=document.createElement("div");return o.id="ctltabs",ft.forEach(([d])=>{let m=document.createElement("u");m.dataset.g=d,m.onclick=()=>{N.tab=d,vi&&(vi.value=""),br="",sl(),ps(),st(),Oi()},o.appendChild(m),um.set(d,m)}),vi=document.createElement("input"),vi.id="ctlfind",vi.type="text",vi.spellcheck=!1,vi.oninput=()=>{br=vi.value.trim().toLowerCase(),sl(),ps(),Oi()},o.appendChild(vi),o}let il=null;function ey(o){il=o||null,ty()}function ty(){if(!rl)return;let o=il?"kd."+il.k:"",d=!!(o&&b[o]);rl.classList.toggle("desc",d),rl.textContent=d?A(o):br&&!Ze.some(ny)?A("ctl.none"):A("pin.hint")}function _M(){Ze.forEach(o=>{let d=document.createElement("div");d.className="sl";let m=document.createElement("b"),y=document.createElement("span");y.className="nm";let _=document.createElement("u");_.className="pin";let E=document.createElement("span"),w=document.createElement("i");y.append(_,E),m.append(y,w);let T=document.createElement("input");T.type="range",T.min=o.min,T.max=o.max,T.step=o.step||1,d.append(m,T),_.onclick=()=>MM(o.k),d.addEventListener("pointerenter",()=>ey(o)),d.addEventListener("pointerleave",()=>{il===o&&ey(null)}),T.addEventListener("input",P=>{xM(o,+P.target.value),o.apply&&o.apply(),ps(),st()}),Ya.set(o.k,{wrap:d,lab:E,val:w,inp:T,pin:_})}),rl=document.createElement("div"),rl.id="ctlhint",u("ctladv").parentNode.insertBefore(bM(),u("ctladv")),sl()}let um=new Map,rl=null,vi=null,br="";function ny(o){if(!br)return!1;let d=o.label.toLowerCase(),m=(o.i18n?A(o.i18n):"").toLowerCase();return d.indexOf(br)>=0||!!m&&m.indexOf(br)>=0}function sl(){let o=u("ctlgrid"),d=u("ctladv");Ze.forEach(_=>{let E=Ya.get(_.k),w=Oc(_.k);E.wrap.classList.toggle("pinned",w),w&&o.appendChild(E.wrap)});let m=ft.some(([_])=>_===N.tab)?N.tab:ft[0][0],y=Ze.filter(_=>!Oc(_.k)&&(br?ny(_):_.g===m));y.forEach(_=>d.appendChild(Ya.get(_.k).wrap)),Ze.forEach(_=>{let E=Ya.get(_.k);!Oc(_.k)&&y.indexOf(_)<0&&E.wrap.parentNode===d&&(d.removeChild(E.wrap),il===_&&(il=null))}),ft.forEach(([_])=>{let E=um.get(_);E&&(E.classList.toggle("on",!br&&_===m),E.classList.toggle("empty",!Ze.some(w=>w.g===_&&!Oc(w.k))))}),d.classList.toggle("found",!!br),d.appendChild(rl)}function MM(o){let d=N.pin.indexOf(o);d>=0?N.pin.splice(d,1):N.pin.push(o),d>=0&&(N.adv=!0),sl(),ps(),st(),Oi(),rt(A(d>=0?"pin.off":"pin.on",{n:(It[o]||{}).label||o}))}let dm=0;function iy(){dm||(dm=requestAnimationFrame(()=>{dm=0;let o=0,d=(y,_)=>{y.classList.remove("scan");let E=y.scrollWidth-y.clientWidth;_&&E>2?(y.style.setProperty("--nmx",-E-3+"px"),y.style.setProperty("--nmd",(o%7*1.8).toFixed(1)+"s"),y.classList.add("scan")):y.style.removeProperty("--nmx"),o++};Ya.forEach(y=>{y.lab&&y.lab.parentNode&&d(y.lab.parentNode,!0)});let m=u("ctl");m&&m.querySelectorAll(".mini").forEach(y=>{if(!y.firstElementChild&&y.firstChild){let E=document.createElement("span");for(;y.firstChild;)E.appendChild(y.firstChild);y.appendChild(E)}let _=y.firstElementChild;d(y,!!_&&_.tagName==="SPAN"&&y.children.length===1)})}))}function ps(){Kv(),Qv(),Ze.forEach(o=>{let d=Ya.get(o.k);if(!d)return;let m=Oc(o.k);d.inp.value=yM(o),d.lab.textContent=o.i18n?A(o.i18n):o.label,d.val.textContent=o.fmt(wM(o)),d.pin.textContent=m?"\u25C6":"\u25C7",d.pin.title=A(m?"pin.off":"pin.on",{n:o.label})}),ft.forEach(([o,d])=>{let m=um.get(o);m&&(m.textContent=A(d))}),vi&&(vi.placeholder=A("ctl.find")),ty(),hm(),vp()}u("r-broken").onclick=()=>{!$||!(ye.meta.broken|0)||(os=!os,u("r-broken").classList.toggle("on",os),rt(A(os?"broken.on":"broken.off")))},u("s-fps").onclick=()=>{fn.on=!fn.on,u("perf").classList.toggle("on",fn.on),fn.on&&(tl=0),Oi()},u("advtog").onclick=()=>{N.adv=u("ctl").classList.toggle("adv"),Kv(),st(),Oi()},u("b-rst").onclick=()=>{Object.assign(N,ke),N.pin=j.slice();let o=new Set;Ze.forEach(d=>{if(!(!d.apply||o.has(d.apply))){o.add(d.apply);try{d.apply()}catch(m){console.error("vault-orrery: reset "+d.k,m)}}}),br="",vi&&(vi.value=""),N.deckAt=null,sl(),ps(),Kb(),st(),rt("CONTROLS RESET"),Oi()};let fm=!1;u("ctltl").onclick=()=>{fm=!0;let o=u("ctl").classList.toggle("fold");u("ctlfold").textContent=o?"[ + ]":"[ \u2212 ]",iy()};let ja=240,pm=null,Bc=null;function ry(o,d,m){N.deckAt={x:Math.round(o),y:Math.round(d),w:Math.round(g(m,ja,Math.max(ja,t()-24)))},Oi()}let EM=[["nw",-1,-1],["ne",1,-1],["sw",-1,1],["se",1,1]];{let o=u("ctl"),d=u("ctltl"),m=()=>({x:o.offsetLeft-(N.deckAt?0:o.offsetWidth/2),y:o.offsetTop,w:o.offsetWidth}),y=0,_=0,E=0,w=null,T=0,P=1,I=1;EM.forEach(([R,k,U])=>{let X=document.createElement("div");X.className="ctlgrip "+R,X.title="DRAG TO RESIZE",X.addEventListener("pointerdown",G=>{P=k,I=U,D(G,2)}),o.appendChild(X)}),pm=R=>{if(!y)return;let k=R.clientX-_,U=R.clientY-E;if(y===1){T=Math.max(T,Math.abs(k)+Math.abs(U)),ry(w.x+k,w.y+U,w.w);return}let X=w.w+k*P,G=g(X,ja,Math.max(ja,t()-24)),Q=P<0?w.x+(w.w-G):w.x,le=I<0?w.y+U:w.y;ry(Q,le,G)},Bc=()=>{y&&(y=0,s.classList.remove("dragdeck"),st())};let D=(R,k)=>{R.button===0&&(y=k,k===1&&(T=0),w=m(),_=R.clientX,E=R.clientY,s.classList.add("dragdeck"),R.preventDefault())};d.addEventListener("pointerdown",R=>{R.target!==u("ctlfold")&&D(R,1)}),d.onclick=()=>{if(T>4){T=0;return}fm=!0;let R=o.classList.toggle("fold");u("ctlfold").textContent=R?"[ + ]":"[ \u2212 ]"},d.addEventListener("dblclick",()=>{N.deckAt=null,st(),Oi(),rt(A("deck.reset"))})}l("pointermove",o=>{pm&&pm(o)}),l("pointerup",()=>{Bc&&Bc()}),l("pointercancel",()=>{Bc&&Bc()});function Oi(){let o=u("idp"),d=u("leg"),m=u("keys"),y=u("insp"),_=t(),E=n(),w=o.offsetTop+o.offsetHeight+12;d.style.top=w+"px",m.style.display="";let T=E-w-34-(m.offsetHeight||130),P=d.classList.contains("fold")?30:74;T<P&&(m.style.display="none",T=E-w-34),d.style.display=T<P?"none":"",d.style.maxHeight=Math.max(P,T)+"px";let I=o.offsetLeft+o.offsetWidth+14,D=u("ctl"),R=Math.max(180,_-32-I),k;N.deckAt?(k=g(N.deckAt.w,ja,Math.max(ja,_-24)),D.style.width=k+"px",D.style.left=Math.round(g(N.deckAt.x,8,Math.max(8,_-k-8)))+"px",D.style.top=Math.round(g(N.deckAt.y,8,Math.max(8,E-46)))+"px",D.style.transform="none"):(k=g(ja,180,Math.max(180,_-32)),D.style.width=k+"px",D.style.left=Math.round(Math.max(8,_-k-16))+"px",D.style.top="16px",D.style.transform="none"),D.classList.toggle("tight",k<430);let U=D.querySelector(".bd");if(U){let Q=N.deckAt?g(N.deckAt.y,8,Math.max(8,E-46)):16;U.style.maxHeight=Math.max(90,Math.min(E*.62,E-Q-46))+"px"}fm||(D.classList.toggle("fold",E<240),u("ctlfold").textContent=D.classList.contains("fold")?"[ + ]":"[ \u2212 ]"),iy(),y.style.display=_<620?"none":"",y.style.maxHeight=Math.max(96,Math.min(E*.64,E-(16+D.offsetHeight)-26))+"px";let X=Math.max(120,_-16-(y.offsetWidth||312)-14-I),G=u("gen");G.style.width=Math.min(660,X)+"px",G.style.left=Math.round(I+X/2)+"px",u("genmarks").style.display=X<380?"none":""}let zc=/\.(md|markdown|txt)$/i,SM=/(^|\/)(\.obsidian|\.smart-env|\.claude|\.git|\.trash|node_modules|assets)(\/|$)/i,sy=/(\d{4})-(\d{2})-(\d{2})/,Yu=[],ju=[];try{let o=JSON.parse(p.get("orrery2.ignore")||"[]");Array.isArray(o)&&(Yu=o.filter(d=>typeof d=="string"))}catch(o){}function ay(){ju=[],Yu.forEach(o=>{let d=String(o).trim();if(d)if(d.length>1&&d[0]==="/"&&d[d.length-1]==="/")try{ju.push(new RegExp(d.slice(1,-1),"i"))}catch(m){console.warn("vault-orrery: bad ignore pattern",d,m)}else{let m=d.replace(/^\/+/,"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&");m&&ju.push(new RegExp("^"+m,"i"))}})}ay();function TM(o){Yu=Array.isArray(o)?o.filter(d=>typeof d=="string"):[],ay();try{p.set("orrery2.ignore",JSON.stringify(Yu))}catch(d){}}let mm=o=>SM.test("/"+o),gm=o=>ju.some(d=>d.test(String(o).replace(/^\/+/,"")));function vm(o){return String(o).trim().replace(/^[\["']+|[\]"']+$/g,"").trim()}function AM(o){o.charCodeAt(0)===65279&&(o=o.slice(1));let d=/^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(\r?\n|$)/.exec(o);if(!d)return{fm:{},body:o};let m={},y=null;return d[1].split(/\r?\n/).forEach(_=>{let E=/^[ \t]*-[ \t]+(.*)$/.exec(_);if(E){y&&(Array.isArray(m[y])||(m[y]=[]),m[y].push(vm(E[1])));return}let w=/^([^:#][^:]*):[ \t]*(.*)$/.exec(_);if(!w)return;y=w[1].trim().toLowerCase();let T=w[2].trim();if(!T){m[y]=[];return}m[y]=T[0]==="["?T.slice(1).replace(/\]\s*$/,"").split(",").map(vm).filter(Boolean):vm(T)}),{fm:m,body:o.slice(d[0].length)}}let RM=new Set(["tags","\uD0DC\uADF8","tag","keywords","date","created","\uB0A0\uC9DC","datetime","sources","\uCD9C\uCC98","source","aliases","alias","cssclasses","cssclass","position"]);function LM(o){if(!o||typeof o!="object")return null;let d=[];for(let m in o){if(d.length>=16)break;let y=String(m).trim();if(!y||RM.has(y.toLowerCase()))continue;let _=o[m];if(_==null||_==="")continue;let E;if(Array.isArray(_)){let w=_.map(T=>String(T).trim()).filter(Boolean).slice(0,8);if(!w.length)continue;E=w.join(", ")}else{if(typeof _=="object")continue;E=String(_).trim()}E&&d.push([y,E.length>90?E.slice(0,89)+"\u2026":E])}return d.length?d:null}function CM(o){let d=o.tags||o.\uD0DC\uADF8||o.tag||o.keywords||[];return typeof d=="string"&&(d=d.split(/[,\s]+/)),(Array.isArray(d)?d:[]).map(m=>String(m).replace(/^#/,"").trim()).filter(Boolean).slice(0,24)}function PM(o,d){let m=[],y=new Set;return[].concat(o||[],Array.isArray(d)?d:[]).forEach(_=>{let E=String(_).replace(/^#/,"").trim();if(!E)return;let w=E.toLowerCase();y.has(w)||(y.add(w),m.push(E))}),m.slice(0,24)}function DM(o,d){let m=o.date||o.created||o.\uB0A0\uC9DC||o.datetime||"";Array.isArray(m)&&(m=m[0]||"");let y=sy.exec(String(m))||sy.exec(d.split("/").pop());return y?y[0]:""}function IM(o){return o.replace(/```[\s\S]*?```/g," ").replace(/^\s*>\s?/gm,"").replace(/^#{1,6}\s*/gm,"").replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/\[\[([^\]|#^]+)(?:[#^][^\]|]*)?(?:\|([^\]]*))?\]\]/g,(d,m,y)=>(y||m).trim()).replace(/\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/[*_`~]/g,"").replace(/^\s*[-*+]\s+/gm,"").replace(/[ \t]+/g," ").replace(/\n{2,}/g,`
`).trim().slice(0,620)}function kM(o,d){let m=o.map(se=>se.path.replace(/\\/g,"/").split("/")),y="";if(m.length&&m[0].length>1){let se=m[0][0];m.every(me=>me.length>1&&me[0]===se)&&(y=se)}let _=o.map((se,me)=>{let Se=m[me].slice(y?1:0),et=Se.join("/"),{fm:Ye,body:Je}=AM(se.text),yt=se.meta&&typeof se.meta=="object"?se.meta:null;return{rel:et,fp:se.path.replace(/\\/g,"/"),dir:Se.slice(0,-1).join("/"),name:Se[Se.length-1].replace(zc,""),fm:Ye,body:Je,hm:yt,t:PM(CM(Ye),yt&&yt.tags),pr:LM(yt&&yt.props||Ye),d:DM(Ye,et),mt:yt&&+yt.mtime>0?+yt.mtime:0,ct:yt&&+yt.ctime>0?+yt.ctime:0,w:(Je.match(/\S+/g)||[]).length,sz:se.text.length,x:IM(Je)}}),E=_.length,w=new Map,T=new Map;_.forEach((se,me)=>{let Se=se.name.toLowerCase();w.has(Se)||w.set(Se,me),T.set(se.rel.toLowerCase().replace(zc,""),me)});let P=se=>{let me=String(se).split("#")[0].split("|")[0].trim().replace(/^\[+|\]+$/g,"").replace(/^[.\/]+/,"").replace(zc,"").toLowerCase();if(!me)return-1;if(T.has(me))return T.get(me);let Se=me.split("/").pop();return w.has(Se)?w.get(Se):-1},I=/\[\[([^\]\[|#^]+)(?:[#^][^\]|]*)?(?:\|[^\]]*)?\]\]/g,D=/\]\(([^)\s]+\.(?:md|markdown))\)/gi,R=0,k=new Int32Array(E),U=new Array(E).fill(null),X=new Int32Array(E),G=new Map;_.forEach((se,me)=>{G.set(se.fp.toLowerCase(),me),G.set(se.rel.toLowerCase(),me)});let Q=se=>{let me=String(se).replace(/\\/g,"/").replace(/^\.?\//,"").toLowerCase();return G.has(me)?G.get(me):P(me)},le=_.map((se,me)=>{if(se.hm&&se.hm.links){let Ye=new Set;Object.keys(se.hm.links).forEach(yt=>{let Ct=Q(yt);Ct>=0&&(Ye.add(Ct),X[Ct]+=Math.max(1,se.hm.links[yt]|0))});let Je=Math.max(0,se.hm.broken|0);return R+=Je,k[me]=Je,Array.isArray(se.hm.brokenNames)&&se.hm.brokenNames.length&&(U[me]=se.hm.brokenNames.map(String)),Ye}let Se=new Set,et;for(I.lastIndex=0;et=I.exec(se.body);){let Ye=P(et[1]);if(Ye>=0)Se.add(Ye),X[Ye]++;else{R++,k[me]++;let Je=et[1].trim();U[me]||(U[me]=[]),U[me].length<24&&U[me].indexOf(Je)<0&&U[me].push(Je)}}for(D.lastIndex=0;et=D.exec(se.body);){let Ye=et[1];try{Ye=decodeURIComponent(Ye)}catch(yt){}let Je=P(Ye);Je>=0&&(Se.add(Je),X[Je]++)}return Se}),de=_.map(se=>{let me=se.fm.sources||se.fm.\uCD9C\uCC98||se.fm.source||[],Se=Array.isArray(me)?me:me?[me]:[],et=new Set;return Se.forEach(Ye=>{let Je=P(Ye);Je>=0&&et.add(Je)}),et}),fe=_.some(se=>/^(wiki|raw)\//i.test(se.rel)),H=new Uint8Array(E);le.forEach((se,me)=>{se.size&&(H[me]=1),se.forEach(Se=>H[Se]=1)});let J=_.map((se,me)=>fe?/^raw\//i.test(se.rel)?"raw":/^wiki\//i.test(se.rel)||se.dir?"wiki":"root":H[me]?"wiki":"raw"),Me=new Map,Te=_.map((se,me)=>{let Se,et,Ye,Je,yt=null,Ct=null;if(J[me]==="raw"){let Nt=se.d?+se.d.slice(0,4):0;Se="raw:"+Nt,et="raw",yt=Nt?"cat.rawYear":"cat.rawUndated",Ct=Nt?{y:Nt}:null,Ye=A(yt,Ct),Je=Nt?"ARCHIVE-"+Nt:"ARCHIVE-UNDATED"}else{let Nt=se.dir.replace(/^wiki(\/|$)/i,"");Se="wiki:"+Nt,et="wiki";let Mt=Nt.split("/").filter(Boolean).pop();Mt?Ye=Mt:(yt="cat.hub",Ye=A(yt)),Je=Mt?(/^[\x20-\x7E]+$/.test(Mt)?Mt.toUpperCase():Mt).slice(0,14):"HELM"}return Me.has(Se)||Me.set(Se,{key:Se,dom:et,code:Je,label:Ye,lkey:yt,larg:Ct,n:0}),Me.get(Se).n++,Se}),ve=[...Me.values()];ve.sort((se,me)=>se.dom===me.dom?me.n-se.n:se.dom==="wiki"?-1:1);let re=[],Ee=new Set,Ae=(se,me,Se)=>{if(se===me||se<0||me<0)return!1;let et=se+":"+me+":"+Se;return Ee.has(et)?!1:(Ee.add(et),re.push([se,me,Se]),!0)};_.forEach((se,me)=>{if(J[me]==="raw")return;let Se=new Set(de[me]);le[me].forEach(et=>{J[et]==="raw"&&Se.add(et)}),Se.forEach(et=>{J[et]==="raw"&&Ae(et,me,1)})}),le.forEach((se,me)=>se.forEach(Se=>{Ee.has(Se+":"+me+":1")||Ae(me,Se,0)}));let He=_.map((se,me)=>({p:se.rel,fp:se.fp,n:se.name,k:J[me],f:se.rel.split("/")[0]||"",d:se.d,y:se.d?+se.d.slice(0,4):0,t:se.t,mt:se.mt,ct:se.ct,w:se.w,sz:se.sz,x:se.x,inb:X[me],c:Te[me],pr:se.pr,bk:k[me],bn:U[me]||null})),$e=[...new Set(He.map(se=>se.y).filter(Boolean))].sort();return{meta:{vault:d||y||"DROPPED VAULT",files:He.length,edges:re.length,wiki:He.filter(se=>se.k!=="raw").length,raw:He.filter(se=>se.k==="raw").length,broken:R,years:$e},cats:ve,nodes:He,edges:re}}let Zu=()=>new Promise(o=>setTimeout(o,0));function Ju(o,d){u("load").classList.toggle("on",!!o),d&&(u("loadmsg").textContent=d),o||(u("loadbar").firstElementChild.style.width="0%",u("loadsub").textContent="")}function Uc(o,d){u("loadbar").firstElementChild.style.width=Math.round(o*100)+"%",d!==void 0&&(u("loadsub").textContent=d)}function oy(){return{sel:ot>=0?te(ot):"",follow:ue.follow>=0?te(ue.follow):"",tgt:ue.tgtD.clone(),dist:ue.distD,th:ue.thD,ph:ue.phD,roll:ue.rollD}}function FM(o){if(!o)return;ue.tgtD.copy(o.tgt),ue.distD=o.dist,ue.thD=o.th,ue.phD=o.ph,ue.rollD=o.roll,ue.tgt.copy(o.tgt),ue.dist=o.dist,ue.th=o.th,ue.ph=o.ph,ue.roll=o.roll,ue.thV=0,ue.phV=0;let d=o.sel?Be(o.sel):-1;d>=0&&ui(d,!0);let m=o.follow?Be(o.follow):-1;ue.follow=m,as()}function NM(){let o=new Map,d=new Map;try{if(Di&&Fe){let m=Math.min($,Di.length,Fe.length);for(let y=0;y<m;y++){let _=Fe[y];if(!_)continue;let E=_.fp||_.p;E&&o.set(E,Di[y])}}At&&At.forEach(m=>{!m||m.key===void 0||(m.oMA!==void 0||m.rz!==void 0)&&d.set(m.key,{oMA:m.oMA,sx:m.sx,sy:m.sy,rz:m.rz})})}catch(m){return console.warn("vault-orrery: orbital phases not carried",m),null}return o.size||d.size?{ph:o,sys:d}:null}function HM(o){if(!o||!Di||!Fe)return;let d=Math.min($,Di.length,Fe.length);for(let m=0;m<d;m++){let y=Fe[m];if(!y)continue;let _=o.ph.get(y.fp||y.p);_!==void 0&&Number.isFinite(_)&&(Di[m]=_)}At&&At.forEach(m=>{if(!m||m.key===void 0)return;let y=o.sys.get(m.key);y&&(Number.isFinite(y.oMA)&&(m.oMA=y.oMA),Number.isFinite(y.sx)&&(m.sx=y.sx),Number.isFinite(y.sy)&&(m.sy=y.sy),Number.isFinite(y.rz)&&(m.rz=y.rz))})}let ym=null;function Ku(o,d){ym=o;let m=NM();Tp(),Ic(),Q_(),fv(),rv.clear(),Ko(),$s.length=0,Tc=0,ku(!1),ot=-1,_n=-1,Ks="",os=!1,_c.clear(),vr=-1,Wa=new Set,jo=new Set,U1(),Pg(o),Y=null,Jg(),HM(m),sv(),Mc(),Xa(),Vu=0,d?FM(d):_p(),ut(Ke)}let ia=!1;async function $u(o,d,m){if(ia)return;let y=!!(m&&m.quiet),_=$,E=o.filter(le=>zc.test(le.path)&&!mm(le.path)),w=E.filter(le=>!gm(le.path)),T=E.length-w.length;if(!w.length){y||rt(A(T?"excl.all":"load.nomd"));return}let P=N.maxNodes|0,I=w.length,D=P>0&&I>P?w.slice(0,P):w,R=I-D.length;ia=!0,y||(Ju(!0,"READING VAULT"),Uc(0,R?A("cap.hit",{n:D.length,total:I}):A("load.notes",{n:D.length})));let k=[];for(let le=0;le<D.length;le++){try{k.push({path:D[le].path,text:await D[le].file.text(),meta:D[le].meta||null})}catch(de){}le%16===0&&(y||Uc(le/D.length*.7,D[le].path),await Zu())}y||Uc(.78,A("load.graph")),await Zu();let U=null;try{U=kM(k,d)}catch(le){console.error(le),rt(A("load.failed")),Ju(!1),ia=!1;return}if(!U.nodes.length){rt(A("load.empty")),Ju(!1),ia=!1;return}y||Uc(.9,A("load.orbit")),await Zu();let X=y?oy():null,G=y&&_?u_():null;try{Ku(U,X)}catch(le){console.error(le),rt(A("load.render")),Ku(xt)}let Q=G?d_(G):0;if(!G&&!_&&f_(),y||(Uc(1),await Zu(),Ju(!1)),ia=!1,y){$!==_&&!Q&&rt(A("sync.done",{n:$}));return}rt(U.meta.vault+" \xB7 "+U.meta.files+" NOTES \xB7 "+U.meta.edges+" LINKS"),T&&setTimeout(()=>rt(A("excl.some",{n:T})),2600),R&&setTimeout(()=>rt(A("cap.hit",{n:D.length,total:I})),5200),VM()}u("b-load").onclick=()=>u("fpick").click(),u("hint-btn").onclick=()=>u("fpick").click(),u("fpick").addEventListener("change",o=>{let d=Array.from(o.target.files||[]);d.length&&$u(d.map(m=>({path:m.webkitRelativePath||m.name,file:m}))),o.target.value=""}),u("b-clear").onclick=()=>{Ku(xt),rt(A("vault.empty"))};function ly(o,d,m){return new Promise(y=>{if(!o)return y();if(o.isFile){o.file(P=>{d.push({path:m+o.name,file:P}),y()},()=>y());return}if(!o.isDirectory)return y();let _=m+o.name+"/";if(mm(_)||gm(_))return y();let E=o.createReader(),w=[],T=()=>E.readEntries(P=>{if(!P.length){Promise.all(w.map(I=>ly(I,d,_))).then(()=>y());return}w.push(...P),T()},()=>y());T()})}let Gc=0,cy=o=>{let d=o.dataTransfer&&o.dataTransfer.types;return d?d.indexOf?d.indexOf("Files")>=0:Array.prototype.indexOf.call(d,"Files")>=0:!1};l("dragenter",o=>{q||!cy(o)||(o.preventDefault(),++Gc===1&&!ia&&u("drop").classList.add("on"))}),l("dragover",o=>{q||!cy(o)||(o.preventDefault(),o.dataTransfer.dropEffect="copy")}),l("dragleave",o=>{q||!Gc||--Gc<=0&&(Gc=0,u("drop").classList.remove("on"))}),l("drop",async o=>{if(q)return;o.preventDefault(),Gc=0,u("drop").classList.remove("on");let d=Array.from(o.dataTransfer.items||[]).map(_=>_.webkitGetAsEntry&&_.webkitGetAsEntry()).filter(Boolean),m=[],y="";if(d.length){d.length===1&&d[0].isDirectory&&(y=d[0].name);for(let _ of d)await ly(_,m,"")}else Array.from(o.dataTransfer.files||[]).forEach(_=>m.push({path:_.name,file:_}));$u(m,y)});function OM(){ps(),At.forEach(o=>{o.el&&(o.el.querySelector("em").textContent=Gg(o))}),Mc(),Ce.on&&ls(!0),Lt&&K.sel>=0&&(Lv(),Xp(K.sel)),typeof Gr!="undefined"&&Gr&&hy()}function hy(){Gr&&(delete u("bpick").dataset.i18n,u("bpick").textContent=A("boot.staged",{name:Gr.name||A("boot.nofold"),n:Gr.list.length}))}let Qu=!1;try{Qu=p.get("orrery2.intro")==="1"}catch(o){}function uy(){$&&u("intro").classList.add("on")}let BM=[["guide.s.move",[["DRAG \xB7 WHEEL","guide.look"],["RIGHT-DRAG","guide.pan"],["SHIFT-DRAG","guide.drag"],["R","guide.reset"]]],["guide.s.find",[["/ \xB7 CTRL-K","guide.search"],["O \xB7 CTRL-CLICK","guide.note",()=>he()],["BROKEN","guide.broken"],["ROUTE FROM HERE","guide.route"]]],["guide.s.read",[["L","guide.layer"],["X","guide.grid"],["SPACE","guide.ripple"],["SKY","guide.sky"]]],["guide.s.mode",[["M \xB7 DBL-CLICK","guide.mind"],["G","guide.gen"],["P","guide.poster"]]],["guide.s.rest",[["U","guide.sound"],["H","guide.hud"],["?","guide.help"]]]];function zM(){u("guidebody").innerHTML=BM.map(([d,m])=>{let y=m.filter(_=>!_[2]||_[2]());return y.length?'<div class="gsec">'+M(A(d))+"</div>"+y.map(_=>'<div class="grow"><u>'+M(_[0])+"</u><b>"+M(A(_[1]))+"</b></div>").join(""):""}).join(""),u("guidefoot").innerHTML=M(A("guide.foot"))+"<u>"+M(A("intro.reopen"))+"</u>";let o=u("guidefoot").querySelector("u");o&&(o.onclick=()=>{td(),uy()})}function ed(){zM(),u("guide").classList.add("on"),u("guidebody").scrollTop=0}function td(){u("guide").classList.remove("on")}function UM(){return u("guide").classList.contains("on")}function nd(){if(u("intro").classList.contains("on")&&(u("intro").classList.remove("on"),!Qu)){Qu=!0;try{p.set("orrery2.intro","1")}catch(o){}}}function GM(){return u("intro").classList.contains("on")}function VM(){Qu||setTimeout(uy,900)}u("introgo").onclick=nd,u("gen-x").onclick=()=>ku(!1),u("introx").onclick=nd,u("intro").onclick=o=>{o.target===u("intro")&&nd()},u("guidex").onclick=td,u("guide").onclick=o=>{o.target===u("guide")&&td()},u("keyshelp").onclick=o=>{o.stopPropagation(),ed()},Pg(xt),Jg(),sv(),_M(),ps(),Xa(),u("g-layer").textContent=fc[0].name,ui(-1),_p();let Gr=null;u("b-folder").onclick=()=>u("fpick2").click(),u("fpick2").addEventListener("change",o=>{let m=Array.from(o.target.files||[]).filter(_=>{let E=_.webkitRelativePath||_.name;return zc.test(E)&&!mm(E)&&!gm(E)});if(!m.length){u("bpick").dataset.i18n="boot.nomd",u("bpick").textContent=A("boot.nomd"),u("bpick").classList.remove("ok"),Gr=null;return}let y=(m[0].webkitRelativePath||"").split("/")[0]||"";Gr={list:m.map(_=>({path:_.webkitRelativePath||_.name,file:_})),name:y},hy(),u("bpick").classList.add("ok"),u("b-go").classList.remove("alt"),o.target.value=""}),u("b-go").onclick=()=>{if(u("boot").classList.add("gone"),setTimeout(()=>u("boot").style.display="none",950),Gr){let o=Gr;Gr=null,setTimeout(()=>$u(o.list,o.name),320)}},Zv();let dy={search:Sp,mindmap:jp,genesis:Fu,ripple:Nu,poster:Bu,layer:Ap,grid:Rp,sound:()=>Lc(!De.on),reset:bp,hud:()=>{let o=u("hud");o.style.display=o.style.display==="none"?"":"none"},open:()=>ie(ot,null),help:ed},Vc={debug:()=>({running:Xn.running,host:Xn.host,raf:Xn.raf,glLost:Xn.lost,hidden:document.hidden,frames:tl,nodes:$,gap:{knob:N.gap,now:ki,sys:Zi},cam:{th:ue.thD,ph:ue.phD,dist:ue.distD,thV:ue.thV,phV:ue.phV,idle:ue.idle},selected:ot,active:ze,halo:{glare:Vn&&Vn.visible?+Vn.material.opacity.toFixed(3):0,ice:Pn&&Pn.visible?+Pn.material.opacity.toFixed(3):0,built:!!Pn},mind:Lt?{root:K.root,lit:K.has.size,lanes:K.rr.map(o=>+o.toFixed(1)),hopRadii:[0,1,2].map(o=>{let d=K.list.filter(y=>y.hop===o);if(!d.length)return 0;let m=ct[d[0].i];return d.every(y=>ct[y.i]===m)?+m.toFixed(3):null})}:null,radiiRestored:!!($&&O&&ct.every((o,d)=>Math.abs(o-O[d]*(oe[d].kind==="core"?N.szSun:oe[d].kind==="moon"?N.szMn:N.szPl))<.001))}),setHosted:ee,setVisible(o){Xn.host=!!o,Xu()},setIgnoreFilters:TM,setLang:z,setMaxNodes(o){N.maxNodes=Math.max(0,o|0),ps(),st()},load:$u,setHostHooks:we,revealPath:Oe,setActivePath:ut,busy:()=>ia,commands:()=>Object.keys(dy),command(o){let d=dy[o];return d?(d(),!0):!1},destroy(){if(Xn.host=!1,jv(),[pe.rt,pe.a,pe.b].forEach(o=>{if(o)try{o.dispose()}catch(d){}}),pe.rt=pe.a=pe.b=null,pe.ok=!1,De.ctx){try{De.ctx.close()}catch(o){}De.ctx=null}try{Xt.dispose()}catch(o){}}};Vc.resize=()=>{Xa(),Oi()},Vc.root=s;let WM=Vc.destroy;return Vc.destroy=()=>{try{WM()}catch(o){console.error("vault-orrery: teardown",o)}a.splice(0).forEach(o=>{try{o()}catch(d){}}),s.replaceChildren()},Vc}var ec="vault-orrery-view",Ub=2500,$R=24,QR=24,ou=class extends lr.ItemView{constructor(t,n){super(t);this.plugin=n;this.api=null;this.io=null;this.ro=null;this.syncPending=!1;this.scheduleSync=(0,lr.debounce)(()=>{this.syncVault()},Ub,!1)}getViewType(){return ec}getDisplayText(){return"Vault Orrery"}getIcon(){return"orbit"}async onOpen(){let t=this.contentEl;t.empty(),t.addClass("vault-orrery-host");let n=t.createDiv({cls:"vo-root"}),i=new DOMParser().parseFromString(Bb,"text/html");for(;i.body.firstChild;)n.appendChild(i.body.firstChild);try{this.api=zb(n,this.plugin.engineStore())}catch(a){console.error("Vault Orrery: engine failed to start",a),t.empty(),t.createEl("p",{text:"Vault Orrery could not start. See the developer console for details."});return}this.api.setHosted(!0),this.api.setHostHooks({open:(a,l)=>{this.openNote(a,l)},hover:(a,l,h)=>this.hoverNote(a,l,h)}),this.plugin.applySettingsTo(this.api),this.io=new IntersectionObserver(a=>{var l;for(let h of a){let c=h.boundingClientRect;!c.width||!c.height||(l=this.api)==null||l.setVisible(h.isIntersecting)}},{threshold:0}),this.io.observe(n),this.ro=new ResizeObserver(()=>{var a,l;(a=this.api)==null||a.resize(),(l=this.api)==null||l.setVisible(n.offsetWidth>0&&n.offsetHeight>0)}),this.ro.observe(n);let r=()=>this.scheduleSync();this.registerEvent(this.app.vault.on("create",r)),this.registerEvent(this.app.vault.on("delete",r)),this.registerEvent(this.app.vault.on("rename",r)),this.registerEvent(this.app.vault.on("modify",r)),this.registerEvent(this.app.metadataCache.on("resolved",r)),this.registerEvent(this.app.workspace.on("file-open",a=>this.syncActive(a))),this.syncActive(this.app.workspace.getActiveFile()),await this.loadVault()}async openNote(t,n){let i=this.app.vault.getAbstractFileByPath(t);if(!(i instanceof lr.TFile)){new lr.Notice(`Vault Orrery: ${t} is no longer in the vault.`);return}let r=this.app.workspace,a;if(n.newWindow)a=r.getLeaf("window");else if(n.newLeaf)a=r.getLeaf("tab");else{let l=r.getMostRecentLeaf(r.rootSplit);a=l&&l!==this.leaf?l:r.getLeaf("tab")}await a.openFile(i,{active:!0})}hoverNote(t,n,i){this.app.workspace.trigger("hover-link",{event:n,source:fg,hoverParent:this,targetEl:i,linktext:t})}syncActive(t){if(!this.api)return;let n=t&&t.extension==="md"?t.path:"";this.api.setActivePath(n),n&&this.plugin.settings.followActiveNote&&this.api.revealPath(n)}reveal(t,n=!1){if(!this.api)return!1;let i=this.api.revealPath(t.path);return!i&&!n&&new lr.Notice(`Vault Orrery: ${t.basename} is not in the cosmos on screen \u2014 it may be excluded, or past the maximum-notes ceiling.`),i}async syncVault(){if(!(!this.api||!this.plugin.settings.liveSync)){if(this.api.busy()){if(this.syncPending)return;this.syncPending=!0,window.setTimeout(()=>{this.syncPending=!1,this.syncVault()},Ub);return}await this.loadVault(!0)}}async onClose(){var t,n,i;this.scheduleSync.cancel(),(t=this.io)==null||t.disconnect(),this.io=null,(n=this.ro)==null||n.disconnect(),this.ro=null,(i=this.api)==null||i.destroy(),this.api=null,this.contentEl.empty()}onResize(){var t;(t=this.api)==null||t.resize()}getApi(){return this.api}diagnostics(){var p,u,f,g,v,M,S,b;let t=(u=(p=this.api)==null?void 0:p.root)!=null?u:this.contentEl.querySelector(".vo-root");if(!t)return"no engine mounted in this leaf";let n=x=>t.querySelector("#"+x),i=t.querySelector("#gl"),r=t.getBoundingClientRect(),a=i?getComputedStyle(i):null,l=i?i.getContext("webgl2")||i.getContext("webgl"):null,h="n/a";if(r.width&&r.height){let x=document.elementFromPoint(r.left+r.width/2,r.top+r.height/2);h=x?`${x.tagName.toLowerCase()}#${x.id||"-"}.${x.className||"-"}`:"nothing"}let c=(g=(f=n("s-fps"))==null?void 0:f.textContent)!=null?g:"?";return[`leaf box      ${Math.round(r.width)} x ${Math.round(r.height)}`,`root client   ${t.clientWidth} x ${t.clientHeight}`,`canvas buffer ${i?i.width+" x "+i.height:"NO CANVAS"}`,`canvas css    ${a?`${a.width} x ${a.height} display:${a.display} vis:${a.visibility} op:${a.opacity} z:${a.zIndex}`:"-"}`,`webgl         ${l?l.isContextLost()?"CONTEXT LOST":"ok":"no context"}`,`at leaf centre ${h}`,`nodes ${(M=(v=n("s-nodes"))==null?void 0:v.textContent)!=null?M:"?"}   fps ${c}   range ${(b=(S=n("s-dist"))==null?void 0:S.textContent)!=null?b:"?"}`,`run gate      ${this.api?JSON.stringify(this.api.debug()):"-"}`,`root classes  ${t.className}`].join(`
`)}async loadVault(t=!1){if(!this.api)return;let n=this.app.vault.getMarkdownFiles();if(!n.length){t||new lr.Notice("Vault Orrery: no markdown files in this vault.");return}let i=n.map(r=>({path:r.path,file:{text:()=>this.app.vault.cachedRead(r)},meta:this.metaFor(r)}));await this.api.load(i,this.app.vault.getName(),{quiet:t})}metaFor(t){let n=this.app.metadataCache,i=n.resolvedLinks[t.path],r=n.unresolvedLinks[t.path],a=0,l=[];if(r)for(let f in r)a+=r[f],l.length<$R&&l.push(f);let h=n.getFileCache(t),c=h?(0,lr.getAllTags)(h):null,p={},u=h==null?void 0:h.frontmatter;if(u){let f=0;for(let g in u){if(g==="position"||f>=QR)continue;let v=u[g];v==null||!(typeof v!="object"||Array.isArray(v)&&v.every(S=>S===null||typeof S!="object"))||(p[g]=v,f++)}}return{links:i?{...i}:{},broken:a,brokenNames:l,tags:c?c.map(f=>f.replace(/^#/,"")):[],props:p,mtime:t.stat.mtime,ctime:t.stat.ctime}}},fg="vault-orrery";var lu=require("obsidian"),eL=["auto","ko","en","ja","zh"],tL=s=>typeof s=="string"&&eL.includes(s),Ra={language:"auto",maxNodes:0,liveSync:!0,followActiveNote:!1,followExcludedFiles:!0,extraIgnoreFilters:[],engineStore:{}},Kf=class extends lu.PluginSettingTab{constructor(t,n){super(t,n);this.plugin=n}getSettingDefinitions(){return[{name:"Language",desc:"Interface language. Your note and folder names are never translated.",aliases:["\uD55C\uAD6D\uC5B4","\u65E5\u672C\u8A9E","\u4E2D\u6587","locale","translation"],control:{type:"dropdown",key:"language",options:{auto:"Match Obsidian",ko:"\uD55C\uAD6D\uC5B4",en:"English",ja:"\u65E5\u672C\u8A9E",zh:"\u4E2D\u6587"},defaultValue:Ra.language}},{name:"Maximum notes",desc:"A ceiling on how many notes are drawn at once. Large vaults run a spring simulation over every body, so this is where performance is traded for completeness. Set to 0 for no limit. When the ceiling truncates a vault, the view says so rather than showing a partial cosmos as if it were the whole one.",aliases:["performance","limit","large vault"],control:{type:"slider",key:"maxNodes",min:0,max:1e4,step:500,defaultValue:Ra.maxNodes}},{type:"group",heading:"The editor",items:[{name:"Keep up with the vault",desc:"Re-derive the cosmos when notes are written, created, renamed or deleted while the view is open. The camera and the selection stay where they are. Turn this off on a very large vault, where each rebuild reads every note again; the Reload vault command then does it on request.",aliases:["live","refresh","update","watch"],control:{type:"toggle",key:"liveSync",defaultValue:Ra.liveSync}},{name:"Follow the active note",desc:'Move the camera to whichever note you open in the editor. Left off, the note being edited is still marked in the sky \u2014 the camera simply stays where you put it, and "Reveal the active note in the orrery" flies to it on request.',aliases:["sync","active file","follow"],control:{type:"toggle",key:"followActiveNote",defaultValue:Ra.followActiveNote}}]},{type:"group",heading:"Exclusions",cls:"vault-orrery-exclusions",items:[{name:"Respect excluded files",desc:"Hide the notes listed under Settings \u2192 Files & Links \u2192 Excluded files, exactly as Obsidian's own graph does. Turning this off will show notes you have hidden elsewhere.",aliases:["hidden","ignore","userIgnoreFilters"],control:{type:"toggle",key:"followExcludedFiles",defaultValue:Ra.followExcludedFiles}},{name:"Additional exclusions",desc:"One pattern per line, on top of Obsidian's. A plain path is treated as a prefix (archive hides archive/ and archive.md); a pattern wrapped in slashes is a regular expression (/^\\d{4}-/).",aliases:["ignore","filter","regex"],control:{type:"textarea",key:"extraIgnoreFilters",placeholder:`archive
/^\\d{4}-/`,rows:4,defaultValue:""}}]},{type:"group",heading:"Privacy",items:[{name:"Network access",desc:"This plugin makes no network requests of any kind \u2014 no telemetry, no update check, no remote fonts or scripts. Your notes are read, laid out and drawn entirely on this machine, and nothing about them is stored outside the vault.",aliases:["telemetry","offline","analytics"]}]}]}getControlValue(t){let n=this.plugin.settings;switch(t){case"language":return n.language;case"maxNodes":return n.maxNodes;case"liveSync":return n.liveSync;case"followActiveNote":return n.followActiveNote;case"followExcludedFiles":return n.followExcludedFiles;case"extraIgnoreFilters":return n.extraIgnoreFilters.join(`
`);default:return}}async setControlValue(t,n){let i=this.plugin.settings;switch(t){case"language":if(!tL(n))return;i.language=n;break;case"maxNodes":{let r=Number(n);if(!Number.isFinite(r))return;i.maxNodes=r;break}case"liveSync":i.liveSync=!!n;break;case"followActiveNote":i.followActiveNote=!!n;break;case"followExcludedFiles":i.followExcludedFiles=!!n;break;case"extraIgnoreFilters":i.extraIgnoreFilters=String(n).split(`
`).map(r=>r.trim()).filter(Boolean);break;default:return}await this.plugin.saveSettings(),this.plugin.pushSettingsToViews()}display(){var n;let{containerEl:t}=this;t.empty();for(let i of this.getSettingDefinitions())if("type"in i&&i.type==="group"){i.heading&&new lu.Setting(t).setName(i.heading).setHeading();let r=i.cls?t.createDiv({cls:i.cls}):t;for(let a of(n=i.items)!=null?n:[])this.renderFallback(r,a)}else"type"in i||this.renderFallback(t,i)}renderFallback(t,n){if("type"in n)return;let i=new lu.Setting(t).setName(n.name);typeof n.desc=="string"&&i.setDesc(n.desc);let r=n.control;if(!r)return;let a=this.getControlValue(r.key),l=h=>{this.setControlValue(r.key,h)};switch(r.type){case"dropdown":i.addDropdown(h=>h.addOptions(r.options).setValue(String(a)).onChange(l));break;case"slider":i.addSlider(h=>h.setLimits(r.min,r.max,r.step).setValue(Number(a)).onChange(l));break;case"toggle":i.addToggle(h=>h.setValue(!!a).onChange(l));break;case"textarea":i.addTextArea(h=>{r.placeholder&&h.setPlaceholder(r.placeholder),h.setValue(String(a)).onChange(l),r.rows&&(h.inputEl.rows=r.rows)});break}}};var nL='<circle cx="50" cy="50" r="12" fill="currentColor"/><ellipse cx="50" cy="50" rx="44" ry="18" fill="none" stroke="currentColor" stroke-width="6"/><circle cx="94" cy="50" r="8" fill="currentColor"/>',iL=[["open","Open the selected note"],["search","Search the cosmos"],["mindmap","Mind map of the selected note"],["genesis","Genesis \u2014 play the vault's formation"],["ripple","Ripple from the selected note"],["poster","Save a poster"],["layer","Cycle the link layer"],["grid","Show or hide the reference plane"],["sound","Ambient sound"],["reset","Reset the view"],["hud","Show or hide the HUD"],["help","Show the first-flight guide"]],$f=class extends cr.Plugin{constructor(){super(...arguments);this.settings=Ra;this.flushStore=(0,cr.debounce)(()=>{this.saveSettings()},800,!1);this.pushed=new WeakMap}async onload(){await this.loadSettings(),(0,cr.addIcon)("orbit",nL),this.registerView(ec,t=>new ou(t,this)),this.addRibbonIcon("orbit","Open Vault Orrery",()=>this.activateView()),this.addCommand({id:"open",name:"Open",callback:()=>this.activateView()}),this.addCommand({id:"reload-vault",name:"Reload vault",checkCallback:t=>{let n=this.views();return n.length?(t||n.forEach(i=>void i.loadVault()),!0):!1}}),this.addCommand({id:"diagnostics",name:"Show render diagnostics",checkCallback:t=>{let n=this.views();return n.length?(t||new cr.Notice(n[0].diagnostics(),6e4),!0):!1}}),this.addCommand({id:"reveal-active",name:"Reveal the active note in the orrery",checkCallback:t=>{let n=this.app.workspace.getActiveFile();return!n||n.extension!=="md"?!1:(t||this.revealFile(n),!0)}});for(let[t,n]of iL)this.addCommand({id:"mode-"+t,name:n,checkCallback:i=>{var a;let r=this.views();return r.length?(i||(a=r[0].getApi())==null||a.command(t),!0):!1}});this.registerEvent(this.app.workspace.on("file-menu",(t,n)=>{!(n instanceof cr.TFile)||n.extension!=="md"||t.addItem(i=>i.setTitle("Show in Vault Orrery").setIcon("orbit").onClick(()=>{this.revealFile(n)}))})),this.registerHoverLinkSource(fg,{display:"Vault Orrery",defaultMod:!0}),this.addSettingTab(new Kf(this.app,this)),this.registerEvent(this.app.workspace.on("layout-change",()=>this.pushSettingsToViews()))}onunload(){this.flushStore.cancel(),this.saveSettings()}views(){return this.app.workspace.getLeavesOfType(ec).map(t=>t.view).filter(t=>t instanceof ou)}async revealFile(t){var r;await this.activateView();let n=this.views()[0];if(!n)return;let i=a=>{n.reveal(t,a>0)||a>0&&window.setTimeout(()=>i(a-1),400)};i((r=n.getApi())!=null&&r.busy()?25:0)}async activateView(){let t=this.app.workspace.getLeavesOfType(ec);if(t.length){await this.app.workspace.revealLeaf(t[0]);return}let n=this.app.workspace.getLeaf("tab");await n.setViewState({type:ec,active:!0}),await this.app.workspace.revealLeaf(n)}async loadSettings(){let t=await this.loadData();this.settings=Object.assign({},Ra,t!=null?t:{}),this.settings.engineStore=Object.assign({},this.settings.engineStore)}async saveSettings(){await this.saveData(this.settings)}engineStore(){return{get:t=>{var n;return(n=this.settings.engineStore[t])!=null?n:null},set:(t,n)=>{this.settings.engineStore[t]=String(n),this.flushStore()}}}pushSettingsToViews(){this.views().forEach(t=>{let n=t.getApi();n&&this.applySettingsTo(n)})}applySettingsTo(t){let n=this.pushed.get(t),i=this.resolveLang(),r=this.ignoreFilters(),a=JSON.stringify(r);(!n||n.lang!==i)&&(this.settings.language!=="auto"||!this.engineHasLang())&&t.setLang(i),(!n||n.maxNodes!==this.settings.maxNodes)&&t.setMaxNodes(this.settings.maxNodes),(!n||n.filters!==a)&&t.setIgnoreFilters(r),this.pushed.set(t,{lang:i,maxNodes:this.settings.maxNodes,filters:a})}engineHasLang(){let t=this.settings.engineStore["orrery2.lang"];return t==="ko"||t==="en"||t==="ja"||t==="zh"}resolveLang(){let n=(r=>r==="auto"?null:r)(this.settings.language);if(n)return n;let i=(cr.moment.locale()||"en").toLowerCase();return i.startsWith("ko")?"ko":i.startsWith("ja")?"ja":i.startsWith("zh")?"zh":"en"}ignoreFilters(){var i;let t=this.settings.extraIgnoreFilters.slice();if(!this.settings.followExcludedFiles)return t;let n=null;try{let r=this.app.vault;n=(i=r.getConfig)==null?void 0:i.call(r,"userIgnoreFilters")}catch(r){console.warn("Vault Orrery: could not read userIgnoreFilters",r)}return Array.isArray(n)?[...n.filter(r=>typeof r=="string"),...t]:(n!=null&&console.warn("Vault Orrery: unexpected userIgnoreFilters shape",n),t)}};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2021 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

/* nosourcemap */