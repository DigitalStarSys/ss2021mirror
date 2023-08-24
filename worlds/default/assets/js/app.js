// --------------------------------------
// 
//    _  _ _/ .  _  _/ /_ _  _  _        
//   /_|/_ / /|//_  / / //_ /_// /_/     
//   https://activetheory.net    _/      
// 
// --------------------------------------
//   4/25/21 6:19p
// --------------------------------------

window.ASSETS = ["assets/js/lib/hls.js","assets/data/uil.json","assets/images/addons/campfire_brush/campfire_brush-astc.ktx","assets/images/addons/campfire_brush/campfire_brush-dxt.ktx","assets/images/addons/campfire_brush/campfire_brush-pvrtc.ktx","assets/images/addons/campfire_brush.jpg","assets/images/birds/birdanimation.jpg","assets/images/bridge/rock_bridge_uved_BaseColor/rock_bridge_uved_BaseColor-astc.ktx","assets/images/bridge/rock_bridge_uved_BaseColor/rock_bridge_uved_BaseColor-dxt.ktx","assets/images/bridge/rock_bridge_uved_BaseColor/rock_bridge_uved_BaseColor-pvrtc.ktx","assets/images/bridge/rock_bridge_uved_BaseColor.jpg","assets/images/bridge/rock_bridge_uved_MRO/rock_bridge_uved_MRO-astc.ktx","assets/images/bridge/rock_bridge_uved_MRO/rock_bridge_uved_MRO-dxt.ktx","assets/images/bridge/rock_bridge_uved_MRO/rock_bridge_uved_MRO-pvrtc.ktx","assets/images/bridge/rock_bridge_uved_MRO.jpg","assets/images/cliff/cliff_BaseColor/cliff_BaseColor-astc.ktx","assets/images/cliff/cliff_BaseColor/cliff_BaseColor-dxt.ktx","assets/images/cliff/cliff_BaseColor/cliff_BaseColor-pvrtc.ktx","assets/images/cliff/cliff_BaseColor.jpg","assets/images/cliff/cliff_BaseColor_painted.jpeg","assets/images/cliff/cliff_MRO/cliff_MRO-astc.ktx","assets/images/cliff/cliff_MRO/cliff_MRO-dxt.ktx","assets/images/cliff/cliff_MRO/cliff_MRO-pvrtc.ktx","assets/images/cliff/cliff_MRO.jpg","assets/images/cloudbake/cloudbake_left-top-right-alpha_4.png","assets/images/cloudbake/flow4.png","assets/images/cloudbake/front-bottom-back.png","assets/images/common/white.jpg","assets/images/edge/rock_brush/rock_brush-astc.ktx","assets/images/edge/rock_brush/rock_brush-dxt.ktx","assets/images/edge/rock_brush/rock_brush-pvrtc.ktx","assets/images/edge/rock_brush.jpg","assets/images/edge/rock_edge.jpg","assets/images/edge/rock_edge_mro.jpg","assets/images/fire/noise.png","assets/images/fire/particle.png","assets/images/floor/floor_normal.jpg","assets/images/floor/floor_roughness.jpg","assets/images/global/tutorial-chat-camera.png","assets/images/global/tutorial-chat-mute.png","assets/images/global/tutorial-chat-settings.png","assets/images/global/tutorial-chat.png","assets/images/global/tutorial-cinema-vr.png","assets/images/global/tutorial-move-joystick.png","assets/images/global/tutorial-move-transport.png","assets/images/global/tutorial-move-vr.png","assets/images/global/tutorial-move.png","assets/images/global/tutorial-perspective.png","assets/images/global/tutorial-settings-vr.png","assets/images/intro/floor.jpg","assets/images/intro/flowers.jpg","assets/images/intro/welcome.jpg","assets/images/landing/close.png","assets/images/landing/dreamwave-white.png","assets/images/landing/dreamwave.png","assets/images/landing/left.jpg","assets/images/landing/logo.jpg","assets/images/landing/right.jpg","assets/images/mtg/banners/banners-astc.ktx","assets/images/mtg/banners/banners-dxt.ktx","assets/images/mtg/banners/banners-pvrtc.ktx","assets/images/mtg/banners.png","assets/images/mtg/cloudnoise.jpg","assets/images/mtg/grassfloor/grassfloor-astc.ktx","assets/images/mtg/grassfloor/grassfloor-dxt.ktx","assets/images/mtg/grassfloor/grassfloor-pvrtc.ktx","assets/images/mtg/grassfloor.jpg","assets/images/mtg/grasstile.jpg","assets/images/mtg/keyart/keyart-astc.ktx","assets/images/mtg/keyart/keyart-dxt.ktx","assets/images/mtg/keyart/keyart-pvrtc.ktx","assets/images/mtg/keyart.jpg","assets/images/mtg/keyart_MRO.jpg","assets/images/mtg/keyart_bake.jpg","assets/images/mtg/logo_BaseColor/logo_BaseColor-astc.ktx","assets/images/mtg/logo_BaseColor/logo_BaseColor-dxt.ktx","assets/images/mtg/logo_BaseColor/logo_BaseColor-pvrtc.ktx","assets/images/mtg/logo_BaseColor.jpg","assets/images/mtg/plant/plant-astc.ktx","assets/images/mtg/plant/plant-dxt.ktx","assets/images/mtg/plant/plant-pvrtc.ktx","assets/images/mtg/plant.jpg","assets/images/mtg/platforms/platforms-astc.ktx","assets/images/mtg/platforms/platforms-dxt.ktx","assets/images/mtg/platforms/platforms-pvrtc.ktx","assets/images/mtg/platforms.jpg","assets/images/mtg/platforms_MRO/platforms_MRO-astc.ktx","assets/images/mtg/platforms_MRO/platforms_MRO-dxt.ktx","assets/images/mtg/platforms_MRO/platforms_MRO-pvrtc.ktx","assets/images/mtg/platforms_MRO.jpg","assets/images/mtg/tower_BaseColor.jpg","assets/images/mtg/tower_MRO/tower_MRO-astc.ktx","assets/images/mtg/tower_MRO/tower_MRO-dxt.ktx","assets/images/mtg/tower_MRO/tower_MRO-pvrtc.ktx","assets/images/mtg/tower_MRO.jpg","assets/images/mtg/tower_brush/tower_brush-astc.ktx","assets/images/mtg/tower_brush/tower_brush-dxt.ktx","assets/images/mtg/tower_brush/tower_brush-pvrtc.ktx","assets/images/mtg/tower_brush.jpg","assets/images/mtg/water_BaseColor.jpg","assets/images/noise/clouds.jpg","assets/images/noise/fbm-128.png","assets/images/noise/fbm-256.png","assets/images/noise/fbm-64.png","assets/images/noise/fbm.png","assets/images/noise/grass_noise/grass_noise-astc.ktx","assets/images/noise/grass_noise/grass_noise-dxt.ktx","assets/images/noise/grass_noise/grass_noise-pvrtc.ktx","assets/images/noise/grass_noise.jpg","assets/images/noise/grass_wind/grass_wind-astc.ktx","assets/images/noise/grass_wind/grass_wind-dxt.ktx","assets/images/noise/grass_wind/grass_wind-pvrtc.ktx","assets/images/noise/grass_wind.jpg","assets/images/noise/random256.jpg","assets/images/noise/stars.jpg","assets/images/npc/potaro.png","assets/images/particles/butterfly_animation.png","assets/images/particles/leaf-spritesheet.png","assets/images/particles/leafalpha.jpg","assets/images/portal/cube/cube-astc.ktx","assets/images/portal/cube/cube-dxt.ktx","assets/images/portal/cube/cube-pvrtc.ktx","assets/images/portal/cube.jpg","assets/images/portal/cube_mro/cube_mro-astc.ktx","assets/images/portal/cube_mro/cube_mro-dxt.ktx","assets/images/portal/cube_mro/cube_mro-pvrtc.ktx","assets/images/portal/cube_mro.jpg","assets/images/portal/mtg/mtg-astc.ktx","assets/images/portal/mtg/mtg-dxt.ktx","assets/images/portal/mtg/mtg-pvrtc.ktx","assets/images/portal/mtg.jpg","assets/images/portal/mtg_mro/mtg_mro-astc.ktx","assets/images/portal/mtg_mro/mtg_mro-dxt.ktx","assets/images/portal/mtg_mro/mtg_mro-pvrtc.ktx","assets/images/portal/mtg_mro.jpg","assets/images/portal/tree/tree-astc.ktx","assets/images/portal/tree/tree-dxt.ktx","assets/images/portal/tree/tree-pvrtc.ktx","assets/images/portal/tree.jpg","assets/images/portal/tree_mro/tree_mro-astc.ktx","assets/images/portal/tree_mro/tree_mro-dxt.ktx","assets/images/portal/tree_mro/tree_mro-pvrtc.ktx","assets/images/portal/tree_mro.jpg","assets/images/potaro/potaro_BaseColor.jpg","assets/images/potaro/potaro_MRO.jpg","assets/images/repeatnormals/brush_normal_512.jpg","assets/images/repeatnormals/carpet_normal_512.jpg","assets/images/repeatnormals/gold_normal_512.jpg","assets/images/repeatnormals/rock_normal_256.jpg","assets/images/repeatnormals/rock_normal_512.jpg","assets/images/repeatnormals/water-repeat.jpg","assets/images/repeatnormals/wood_normal_512.jpg","assets/images/river/river_MRO/river_MRO-astc.ktx","assets/images/river/river_MRO/river_MRO-dxt.ktx","assets/images/river/river_MRO/river_MRO-pvrtc.ktx","assets/images/river/river_MRO.jpg","assets/images/river/water_BaseColor.jpg","assets/images/rocks/rocks_BaseColor/rocks_BaseColor-astc.ktx","assets/images/rocks/rocks_BaseColor/rocks_BaseColor-dxt.ktx","assets/images/rocks/rocks_BaseColor/rocks_BaseColor-pvrtc.ktx","assets/images/rocks/rocks_BaseColor.jpg","assets/images/rocks/rocks_BaseColor_brush.jpeg","assets/images/rocks/rocks_merged_MRO/rocks_merged_MRO-astc.ktx","assets/images/rocks/rocks_merged_MRO/rocks_merged_MRO-dxt.ktx","assets/images/rocks/rocks_merged_MRO/rocks_merged_MRO-pvrtc.ktx","assets/images/rocks/rocks_merged_MRO.jpg","assets/images/spring/spring_geo_BaseColor/spring_geo_BaseColor-astc.ktx","assets/images/spring/spring_geo_BaseColor/spring_geo_BaseColor-dxt.ktx","assets/images/spring/spring_geo_BaseColor/spring_geo_BaseColor-pvrtc.ktx","assets/images/spring/spring_geo_BaseColor.jpg","assets/images/spring/spring_geo_MRO/spring_geo_MRO-astc.ktx","assets/images/spring/spring_geo_MRO/spring_geo_MRO-dxt.ktx","assets/images/spring/spring_geo_MRO/spring_geo_MRO-pvrtc.ktx","assets/images/spring/spring_geo_MRO.jpg","assets/images/stage/default.jpg","assets/images/stage/normal.jpg","assets/images/stage/stage/stage-astc.ktx","assets/images/stage/stage/stage-dxt.ktx","assets/images/stage/stage/stage-pvrtc.ktx","assets/images/stage/stage_1.jpg","assets/images/stage/stage_MRO.jpg","assets/images/stage2/cube_BaseColor.jpg","assets/images/stage2/cube_MRO.jpg","assets/images/stage2/stage2_baked.jpg","assets/images/stage2/stage2_baked_brush.jpg","assets/images/stage2/stage_baked_brush.jpg","assets/images/tent/signs_BaseColor.jpg","assets/images/tent/tent/tent-astc.ktx","assets/images/tent/tent/tent-dxt.ktx","assets/images/tent/tent/tent-pvrtc.ktx","assets/images/tent/tent.jpg","assets/images/tree/brush.jpg","assets/images/tree/canopy_BaseColor/canopy_BaseColor-astc.ktx","assets/images/tree/canopy_BaseColor/canopy_BaseColor-dxt.ktx","assets/images/tree/canopy_BaseColor/canopy_BaseColor-pvrtc.ktx","assets/images/tree/canopy_BaseColor.jpg","assets/images/tree/canopy_MRO/canopy_MRO-astc.ktx","assets/images/tree/canopy_MRO/canopy_MRO-dxt.ktx","assets/images/tree/canopy_MRO/canopy_MRO-pvrtc.ktx","assets/images/tree/canopy_MRO.jpg","assets/images/tree/carpet_BaseColor.jpg","assets/images/tree/grass.jpg","assets/images/tree/leaf.jpg","assets/images/tree/normal.jpg","assets/images/tree/particle.png","assets/images/tree/paths/paths-astc.ktx","assets/images/tree/paths/paths-dxt.ktx","assets/images/tree/paths/paths-pvrtc.ktx","assets/images/tree/paths.jpg","assets/images/tree/paths_MRO/paths_MRO-astc.ktx","assets/images/tree/paths_MRO/paths_MRO-dxt.ktx","assets/images/tree/paths_MRO/paths_MRO-pvrtc.ktx","assets/images/tree/paths_MRO.jpg","assets/images/tree/sign_BaseColor-studio.jpg","assets/images/tree/sign_MRO.jpg","assets/images/tree/tree-studio.jpg","assets/images/tree/tree_MRO/tree_MRO-astc.ktx","assets/images/tree/tree_MRO/tree_MRO-dxt.ktx","assets/images/tree/tree_MRO/tree_MRO-pvrtc.ktx","assets/images/tree/tree_MRO.jpg","assets/images/tree/tree_brush/tree_brush-astc.ktx","assets/images/tree/tree_brush/tree_brush-dxt.ktx","assets/images/tree/tree_brush/tree_brush-pvrtc.ktx","assets/images/tree/tree_brush.jpg","assets/images/tree/treeleaves/treeleaves-astc.ktx","assets/images/tree/treeleaves/treeleaves-dxt.ktx","assets/images/tree/treeleaves/treeleaves-pvrtc.ktx","assets/images/tree/treeleaves.jpg","assets/images/tree/wheat1.png","assets/images/treestump/repeatgrass.jpg","assets/images/treestump/repeatwood.jpg","assets/images/treestump/treestump/treestump-astc.ktx","assets/images/treestump/treestump/treestump-dxt.ktx","assets/images/treestump/treestump/treestump-pvrtc.ktx","assets/images/treestump/treestump.jpg","assets/images/treestump/treestump_mro_2/treestump_mro_2-astc.ktx","assets/images/treestump/treestump_mro_2/treestump_mro_2-dxt.ktx","assets/images/treestump/treestump_mro_2/treestump_mro_2-pvrtc.ktx","assets/images/treestump/treestump_mro_2.jpg","assets/geometry/birds/simplebird2.json","assets/geometry/cube/hitmesh.json","assets/geometry/main/bridge.json","assets/geometry/main/campfire.json","assets/geometry/main/cliff.json","assets/geometry/main/cloud0.json","assets/geometry/main/cloud_instances.json","assets/geometry/main/cloud_instances2.json","assets/geometry/main/cloud_tree_instances.json","assets/geometry/main/disc.json","assets/geometry/main/grass/grass.json","assets/geometry/main/grass/grass_instances.json","assets/geometry/main/grass/grass_landscape.json","assets/geometry/main/grass/grass_landscape_instance.json","assets/geometry/main/hitmesh.json","assets/geometry/main/map.json","assets/geometry/main/objects.json","assets/geometry/main/particles/butterfly_rest.json","assets/geometry/main/portal.json","assets/geometry/main/portal_cube.json","assets/geometry/main/portal_mtg.json","assets/geometry/main/potaro.json","assets/geometry/main/river.json","assets/geometry/main/river2.json","assets/geometry/main/rock_edge.json","assets/geometry/main/rock_edge_instances.json","assets/geometry/main/rockgrass.json","assets/geometry/main/rockgrass_instances.json","assets/geometry/main/rocks.json","assets/geometry/main/spring.json","assets/geometry/main/stage.json","assets/geometry/main/stage2.json","assets/geometry/main/stage3.json","assets/geometry/main/tent.json","assets/geometry/main/tent_signs.json","assets/geometry/main/test.json","assets/geometry/main/treestump.json","assets/geometry/main/water.json","assets/geometry/main/welcome_border.json","assets/geometry/main/wheat.json","assets/geometry/main/wheat_instances.json","assets/geometry/mtg/banner.json","assets/geometry/mtg/banners.json","assets/geometry/mtg/cloud_instance.json","assets/geometry/mtg/grass.json","assets/geometry/mtg/grass_color_instance.json","assets/geometry/mtg/grass_instance.json","assets/geometry/mtg/grassfloor.json","assets/geometry/mtg/hitmesh.json","assets/geometry/mtg/keyart.json","assets/geometry/mtg/leaf.json","assets/geometry/mtg/leaf_color_instance.json","assets/geometry/mtg/leaf_instance.json","assets/geometry/mtg/plant.json","assets/geometry/mtg/plant_instance.json","assets/geometry/mtg/platforms.json","assets/geometry/mtg/tower_base.json","assets/geometry/mtg/tower_extra.json","assets/geometry/mtg/tower_instance.json","assets/geometry/mtg/tower_spheres.json","assets/geometry/mtg/water.json","assets/geometry/tree/bridges.json","assets/geometry/tree/canopy.json","assets/geometry/tree/carpet.json","assets/geometry/tree/cloud_instances.json","assets/geometry/tree/flower.json","assets/geometry/tree/flower2_instance.json","assets/geometry/tree/flower_instance.json","assets/geometry/tree/grass.json","assets/geometry/tree/grass_instance.json","assets/geometry/tree/hitmesh.json","assets/geometry/tree/houses.json","assets/geometry/tree/leaf.json","assets/geometry/tree/leaf_color_instance.json","assets/geometry/tree/leaf_instance.json","assets/geometry/tree/plank.json","assets/geometry/tree/platforms2.json","assets/geometry/tree/sign.json","assets/geometry/tree/sign_instance.json","assets/geometry/tree/tree.json","assets/geometry/tree/treeleaves.json","assets/fonts/AdobeMyungjoStd-Medium-Alphabetic.woff","assets/fonts/AdobeMyungjoStd-Medium-Alphabetic.woff2","assets/fonts/AdobeMyungjoStd-Medium.json","assets/fonts/AdobeMyungjoStd-Medium.otf","assets/fonts/AdobeMyungjoStd-Medium.png","assets/fonts/AdobeMyungjoStd.json","assets/fonts/AdobeMyungjoStd.otf","assets/fonts/AdobeMyungjoStd.png","assets/fonts/Helvetica.dfont","assets/fonts/HelveticaNeue-Medium.json","assets/fonts/HelveticaNeue-Medium.png","assets/fonts/HelveticaNeue.ttc","assets/fonts/Sun-ExtA.ttf","assets/fonts/Times.ttc","assets/shaders/compiled.vs"];
ASSETS.SW = ["assets/fonts/AdobeMyungjoStd-Medium-Alphabetic.woff","assets/fonts/AdobeMyungjoStd-Medium-Alphabetic.woff2","assets/fonts/AdobeMyungjoStd-Medium.json","assets/fonts/AdobeMyungjoStd-Medium.otf","assets/fonts/AdobeMyungjoStd-Medium.png","assets/fonts/AdobeMyungjoStd.json","assets/fonts/AdobeMyungjoStd.otf","assets/fonts/AdobeMyungjoStd.png","assets/fonts/Helvetica.dfont","assets/fonts/HelveticaNeue-Medium.json","assets/fonts/HelveticaNeue-Medium.png","assets/fonts/HelveticaNeue.ttc","assets/fonts/Sun-ExtA.ttf","assets/fonts/Times.ttc","assets/css/style-scss.css","assets/css/style.css","assets/js/app.js"];
Class(function Antimatter(_num, _config, _renderer = World.RENDERER) {
    Inherit(this, AntimatterFBO);
    var _this = this;
    var _buffer, _geometry;
    var _cursor = 0;

    var _drawLimit = _num;
    var _size = findSize();

    //*** Constructor
    (function () {
        defer(createBuffer);
    })();

    function findSize() {
        /*if (false) { //just incase some version of safari requires power of 2
            return Math.pow(2, Math.ceil(Math.log(Math.sqrt(_num))/Math.log(2)))
        } else {*/
            return Math.ceil(Math.sqrt(_num));
        // }
    }

    async function createBuffer() {
        let {geometry, vertices, attribs, usedDepth} = await AntimatterUtil.createBufferArray(_size, _num, _config);
        _this.vertices = _this.cloneVertices ? vertices.clone() : vertices;

        _geometry = geometry.clone(true);
        _geometry.drawRange.end = _drawLimit;

        _this.vertices.geometry = _geometry;

        _this.attribs = _this.random = attribs;
        _this.textureUsedDepth = usedDepth;

        _this.init(_geometry, _renderer, _size);
    }

    //*** Event handlers

    //*** Public methods
    this.createFloatArray = function(components = 3) {
        return new Float32Array(_size * _size * components);
    }

    this.createFloatArrayAsync = async function(components = 3, freshCopy) {
        let {array} = await AntimatterUtil.createFloatArray(_size * _size * components, freshCopy);
        return array;
    }

    this.ready = function(callback) {
        return _this.wait(_this, 'vertices');
    }

    this.useShader = function(vs, fs, params) {
        if (typeof fs === 'object') {
            params = fs;
            fs = null;
        }

        this.vertexShader = vs;
        this.fragmentShader = fs || vs;
        this.uniforms = params;
    }

    this.createMesh = this.getMesh = function() {
        let shader = _this.createShader(_this.fragmentShader || 'AntimatterBasicFrag');
        _this.mesh = new Points(_geometry, shader);
        _this.mesh.frustumCulled = false;

        _this.shader = shader;
        _this.geometry = _geometry;
        return _this.mesh;
    }

    this.createShader = function(fs) {
        let uniforms = _this.uniforms || {};

        let obj = {
            tPos: {type: 't', value: _this.vertices.texture, ignoreUIL: true},
            tPrevPos: {type: 't', value: _this.vertices.texture, ignoreUIL: true},
        };

        for (let key in uniforms) {
            obj[key] = uniforms[key];
        }

        let shader = new Shader(_this.vertexShader || 'AntimatterPosition', fs, obj);
        let vs = shader.vertexShader;
        if (vs && !vs.includes('uniform sampler2D tPos')) {
            let split = vs.split('__ACTIVE_THEORY_LIGHTS__');
            let defined = `uniform sampler2D tPos;`;
            shader.vertexShader = split[0] + '\n' + defined + '\n__ACTIVE_THEORY_LIGHTS__\n' + split[1];
        }

        return shader;
    }

    this.getLookupArray = function() {
        return new Float32Array(_this.vertices.geometry.attributes.position.array);
    }

    this.getRandomArray = function() {
        return _geometry.attributes.random.array;
    }

    this.overrideShader = function(original) {
        let shader = original.clone();
        original.copyUniformsTo(shader);
        shader.uniforms.tPos = {type: 't', value: _this.vertices.texture, ignoreUIL: true};
        shader.uniforms.tPrevPos = {type: 't', value: _this.vertices.texture, ignoreUIL: true};

        _this.shader = shader;
        _this.mesh.shader = shader;
    }

    this.upload = async function() {
        _this.preventRender = true;
        _geometry.distributeBufferData = true;
        await _this.ready();
        await _this.vertices.uploadAsync();
        await defer();
        await _this.random.uploadAsync();
        await defer();

        if (_this.mesh) {
            _this.mesh.upload();
            await _geometry.uploadBuffersAsync();
        }

        for (let key in _this.shader.uniforms) {
            let uniform = _this.shader.uniforms[key];
            if (!uniform.value) continue;

            if (uniform.value.uploadAsync) await uniform.value.uploadAsync();
            else if (uniform.value.upload) {
                uniform.value.upload();
                await defer();
            }
        }

        await _this.wait(100);
        for (let i = 0; i < _this.passes.length; i++) {
            await _this.passes[i].upload();
        }
        _this.preventRender = false;
    }

    this.uploadSync = async function() {
        await _this.ready();
        if (_this.customClass && _this.customClass.loaded) await _this.customClass.loaded();
        if (_this.mesh) _this.mesh.upload();
        for (let i = 0; i < 4; i++) _this.update();
    }

    this.get('particleCount', _ => _num);
    this.get('textureSize', _ => _size);
    this.get('powerOf2', _ => Math.pow(2, Math.ceil(Math.log(Math.sqrt(_num))/Math.log(2))));
});

Class(function AntimatterAttribute(_data, _components) {
    Inherit(this, Component);
    var _this = this;

    var _size = Math.sqrt(_data.length / (_components || 3));

    this.size = _size;
    this.count = _size * _size;
    this.buffer = _data;
    this.texture = new DataTexture(_data, _size, _size, _components == 4 ? Texture.RGBAFormat : Texture.RGBFormat, Texture.FLOAT);

    this.set('needsUpdate', function() {
        if (_this.texture) _this.texture.needsUpdate = true;
    });

    this.bufferData = function(data, components) {
        _this.buffer = data;
        if (components != _components) {
            _this.texture.destroy();
            _this.texture = new DataTexture(data, _size, _size, components == 4 ? Texture.RGBAFormat : Texture.RGBFormat, Texture.FLOAT);
        } else {
            _this.texture.data = data;
            _this.texture.needsUpdate = true;
        }

        _components = components;
        _data = data;
    }

    this.upload = function() {
        _this.texture.upload();
    }

    this.uploadAsync = function() {
        _this.texture.distributeTextureData = true;
        _this.texture.upload();
        return _this.texture.uploadAsync();
    }

    this.clone = function() {
        return new AntimatterAttribute(_data, _components);
    }

    this.onDestroy = function() {
        _this.texture && _this.texture.destroy && _this.texture.destroy();
    }
});
Class(function AntimatterSpawn(_proton, _group, _input) {
    Inherit(this, Component);
    const _this = this;
    var _life, _pass, _velocity, _color;

    var _index = -1;
    var _total = _proton.particleCount;

    var _releasedA = [];
    var _releasedB = [];
    var _temp0 = [];
    var _temp1 = [];
    var _temp2 = [];
    var _vec = new Vector3();

    //*** Constructor
    (async function () {
        await initPass();
        _this.startRender(loop);
    })();

    function loop() {
        let count = _releasedA.length;
        for (let i = count-1; i > -1; i--) {
            let index = _releasedA[i];
            _life.buffer[index * 4 + 0] = 0;
        }

        _releasedA.length = 0;

        if (count) _life.needsUpdate = true;

        let hold = _releasedA;
        _releasedA = _releasedB;
        _releasedB = hold;
    }

    async function initPass() {
        let [lifeBuffer, velocityBuffer] = await Promise.all([_proton.antimatter.createFloatArrayAsync(4, true), _proton.antimatter.createFloatArrayAsync(3, true)]);
        _life = _this.initClass(AntimatterAttribute, lifeBuffer, 4);
        _velocity = _this.initClass(AntimatterAttribute, velocityBuffer, 3);

        _pass = _this.initClass(AntimatterPass, 'AntimatterSpawn', {
            unique: _input.prefix,
            uMaxCount: _proton.behavior.uniforms.uMaxCount,
            tAttribs: _proton.behavior.uniforms.tAttribs,
            tLife: {value: _life, ignoreUIL: true},
            uSetup: {value: 1, ignoreUIL: true},
            decay: {value: 1},
            HZ: {value: Render.HZ_MULTIPLIER, ignoreUIL: true},
            decayRandom: {value: new Vector2(1, 1)}
        });

        ShaderUIL.add(_pass, _group).setLabel('Life Shader');

        _pass.onInit = _ => {
            _pass.setUniform('uSetup', 0);
            _this.canEmit = true;
        };

        _proton.behavior.addInput('tSpawn', _pass);
        _proton.behavior.addInput('tVelocity', _velocity);
        _proton.shader.addUniforms({
            tLife: {value: _pass.output}
        });

        _proton.antimatter.addPass(_pass, 0);
        _this.lifeOutput = _pass.output;
    }

    //*** Event handlers

    //*** Public methods
    this.emit = function(position, velocity, color) {
        if (!_this.canEmit) return;
        if (velocity && position.length != velocity.length) throw 'Position and velocity need to be the same length';
        if (color && position.length != color.length) throw 'Position and color need to be the same length';

        let count = position.length/3;
        for (let i = 0; i < count; i++) {
            let index = ++_index;
            if (_index >= _total) _index = -1;

            _life.buffer[index * 4 + 0] = 1;
            _life.buffer[index * 4 + 1] = position[i * 3 + 0];
            _life.buffer[index * 4 + 2] = position[i * 3 + 1];
            _life.buffer[index * 4 + 3] = position[i * 3 + 2];

            if (velocity) {
                _velocity.buffer[index * 3 + 0] = velocity[i * 3 + 0];
                _velocity.buffer[index * 3 + 1] = velocity[i * 3 + 1];
                _velocity.buffer[index * 3 + 2] = velocity[i * 3 + 2];
            }

            if (color && _color) {
                _color.buffer[index * 3 + 0] = color[i * 3 + 0];
                _color.buffer[index * 3 + 1] = color[i * 3 + 1];
                _color.buffer[index * 3 + 2] = color[i * 3 + 2];
            }

            _releasedB.push(index);
        }

        _life.needsUpdate = true;
        if (velocity) _velocity.needsUpdate = true;
        if (color && _color) _color.needsUpdate = true;
    }

    this.release = function(pos, count = 1, radius = 0, velocity, color) {
        if (!_this.canEmit) return;
        let positions = _temp0;
        let velocities = velocity ? _temp1 : null;
        let colors = color ? _temp2 : null;
        let radX = Array.isArray(radius) ? radius[0] : radius;
        let radY = Array.isArray(radius) ? radius[1] : radius;
        let radZ = Array.isArray(radius) ? radius[2] : radius;

        for (let i = 0; i < count; i++) {
            if (pos.spherical) {
                _vec.set(Math.random(-1, 1, 4), Math.random(-1, 1, 4), Math.random(-1, 1, 4)).normalize().multiplyScalar(radX);
                positions[i * 3 + 0] = pos.x + _vec.x;
                positions[i * 3 + 1] = pos.y + _vec.y;
                positions[i * 3 + 2] = pos.z + _vec.z;
            } else {
                positions[i * 3 + 0] = pos.x + (Math.random(-1, 1, 4) * radX);
                positions[i * 3 + 1] = pos.y + (Math.random(-1, 1, 4) * radY);
                positions[i * 3 + 2] = pos.z + (Math.random(-1, 1, 4) * radZ);
            }

            if (velocities) {
                velocities[i * 3 + 0] = velocity.x;
                velocities[i * 3 + 1] = velocity.y;
                velocities[i * 3 + 2] = velocity.z;
            }

            if (colors) {
                colors[i * 3 + 0] = color.r;
                colors[i * 3 + 1] = color.g;
                colors[i * 3 + 2] = color.b;
            }
        }
        _this.emit(positions, velocities, colors);

        _temp0.length = 0;
        _temp1.length = 0;
        _temp2.length = 0;
    }

    this.upload = async function() {
        await _life?.uploadAsync();
        await _velocity?.uploadAsync();
    }

    this.useColor = async function(shader) {
        let colorBuffer = await _proton.antimatter.createFloatArrayAsync(3, true);
        _color = _this.initClass(AntimatterAttribute, colorBuffer, 3);

        if (!shader) shader = _proton.shader;
        shader.addUniforms({
            tColor: {value: _color}
        });

        _proton.behavior.addInput('tColor', _color);
    }

    this.applyToShader = function(shader) {
        shader.uniforms.tLife = _proton.shader.uniforms.tLife;
        if (_velocity) shader.uniforms.tVelocity = {value: _velocity};
        if (_color) shader.uniforms.tColor = {value: _color};
    }

    this.ready = function() {
        return this.wait('canEmit');
    }

    this.get('total', _ => _total);
    this.get('index', _ => _index);
    this.set('index', i => _index = i);
});
Class(function AntimatterUtil() {
    Inherit(this, Component);
    var _this = this;
    var _thread;

    var _promises = {};

    this.cache = true;

    function initThread() {
        _thread = true;
        Thread.upload(createBufferArrayAntimatter);
        Thread.upload(createFloatArrayAntimatter);
    }

    function createBufferArrayAntimatter(e, id) {
        let size = e.size;
        let num = e.num;
        let position = new Float32Array(size * size * 3);

        if (window.NativeUtils) {
            NativeUtils.fillBufferUV(position, num, size);
        } else {
            for (let i = 0; i < num; i++) {
                position[i * 3 + 0] = (i % size) / size;
                position[i * 3 + 1] = Math.floor(i / size) / size;
                position[i * 3 + 2] = i;
            }
        }

        let {w, h, d} = e.dimensions;
        let usedDepth = num / (size * size);

        let grid = w[0] == 0 && w[1] == 0 && h[0] == 0 && h[1] == 0;

        var vertices = new Float32Array(size * size * 4);

        if (window.NativeUtils) {
            if (!grid) {
                NativeUtils.fillBufferRange(vertices, num, w[0], w[1], h[0], h[1], d[0], d[1]);
            } else {
                NativeUtils.fillBufferGrid(vertices, num, size, usedDepth);
            }
        } else {
            for (let i = 0; i < num; i++) {
                if (!grid) {
                    vertices[i * 4 + 0] = Math.random(w[0], w[1], 10);
                    vertices[i * 4 + 1] = Math.random(h[0], h[1], 10);
                    vertices[i * 4 + 2] = Math.random(d[0], d[1], 10);
                } else {
                    vertices[i * 4 + 0] = Math.range(i % size, 0, size, -1, 1);
                    vertices[i * 4 + 1] = Math.range(i / size, size * usedDepth * usedDepth, 0, -1, 1);
                }

                vertices[i * 4 + 3] = 1;
            }
        }

        var attribs = new Float32Array(size * size * 4);
        if (window.NativeUtils) {
            NativeUtils.fillBufferRandom(attribs, attribs.length);
        } else {
            for (let i = 0; i < num; i++) {
                attribs[i * 4 + 0] = Math.random(0, 1, 10);
                attribs[i * 4 + 1] = Math.random(0, 1, 10);
                attribs[i * 4 + 2] = Math.random(0, 1, 10);
                attribs[i * 4 + 3] = Math.random(0, 1, 10);
            }
        }

        resolve({geometry: position, vertices, attribs, usedDepth}, id, [position.buffer, vertices.buffer, attribs.buffer]);
    }

    function createFloatArrayAntimatter({size}, id) {
        let array = new Float32Array(size);
        resolve({array}, id, [array.buffer]);
    }

    //*** Event handlers

    //*** Public methods
    this.createBufferArray = function(size, num, config = {}) {
        if (!_thread) initThread();

        let key;
        if (_this.cache) {
            key = `buffer_${JSON.stringify(config)}_${size}_${num}`;
            if (_promises[key]) return _promises[key];
        }

        let promise = Promise.create();
        if (key) _promises[key] = promise;

        Thread.shared().createBufferArrayAntimatter({size: size, num: num, dimensions: config}).then(data => {
            data.attribs = new AntimatterAttribute(data.attribs, 4);
            data.vertices = new AntimatterAttribute(data.vertices, 4);

            let geometry = data.geometry;
            data.geometry = new Geometry();
            data.geometry.addAttribute('position', new GeometryAttribute(geometry, 3));
            data.geometry.addAttribute('random', new GeometryAttribute(data.attribs.buffer, 4));

            promise.resolve(data);
        });
        return promise;
    }

    this.createFloatArray = function(size, freshCopy) {
        if (freshCopy || !_this.cache) return Thread.shared().createFloatArrayAntimatter({size});

        if (_promises[`float_size${size}`]) return _promises[`float_size${size}`];

        let promise = _promises[`float_size${size}`] = Thread.shared().createFloatArrayAntimatter({size});
        return promise;
    }
}, 'static');
Class(function CameraTrack(_name, _group, _customFields) {
    Inherit(this, Object3D);
    const _this = this;
    var _list, _panel, _range, _line, _timeline, _customFields, _originalFields, _unlockView, _tween;
    var _holdArray, _loop;

    this.camera = new BaseCamera();
    this.elapsed = 0;

    var _config = InputUIL.create(`cameraTrack_${_name}`, null);
    var _count = _config.getNumber('count') || 0;
    var _data = _config.get('data') || [];
    var _array = [];
    var _map = {};
    var _target = new Group();
    var _target2 = new Group();

    var _sort = 0;

    const EDIT = Utils.query('orbit') && Utils.query('editTrack');
    const RANGE = Utils.query('editTrack');
    const SHOW = Utils.query('showAllPaths');

    //*** Constructor
    (function () {
        if (_group && !(_group instanceof UILFolder)) {
            _customFields = _group;
            _group = undefined;
        }

        if (_customFields) _originalFields = Utils.cloneObject(_customFields);

        if (RANGE && !UIL.global) console.error('Editing CameraTrack requires &uil');
        addListeners();

        _this.editing = EDIT;

        _timeline = TimelineUIL.create(`${_name}_cameraTrack`, RANGE ? _group || undefined : null);
        _timeline.model.lock().rails();
        _timeline.setLabel('Timeline');
        _timeline.data = _timeline.model.getData();

        _list = ListUIL.create(`${_name}_cameraTrack`, RANGE ? _group || undefined : null);
        _list.setLabel(`Keyframes`);

        _list.onAdd(addKeyframe);
        _list.onRemove(removeKeyframe);
        _list.onSort(sortKeyframes);

        _data.forEach(createCamera);

        if (EDIT) initDebugLine();

        _panel = InputUIL.create(`${_name}_camera_config`, RANGE ? _group || undefined : null);
        _panel.setLabel('Camera Config');
        _panel.add('duration', 5000);
        _panel.add('lerp', 0.07);
        _panel.add('ease', 'linear');
        _panel.addButton('play', {actions: [{title: 'Play', callback: btnPlay}], hideLabel:true});

        _this.duration = _panel.getNumber('duration');

        if (EDIT) {
            defer(_ => {
                _this.onCreatePanel && _this.onCreatePanel(_panel);
            });
        }

        if (RANGE) {
            _this.camera.lock();
            _range = new UILControlRange('Track Progress', {min: 0, max: 1, step: 0.001});
            _range.onChange(val => {
                if (!_this.flag('playing') && _tween) _tween.setElapsed(val);
                _this.elapsed = val;
            });

            _range.onFinishChange(val => {
                if (!_this.flag('playing')) {
                    _this.onRangeDrag && _this.onRangeDrag(val);
                    _this.camera.group.position.copy(_target.position);
                    _this.camera.group.quaternion.copy(_target.quaternion);
                }
            });
            _panel.group.add(_range);
        }

        defer(_ => {
            if (!_array.length) return;
            _this.camera.group.position.copy(_array[0].group.position);
            _this.camera.group.quaternion.copy(_array[0].group.quaternion);
        });

        _this.startRender(loop);
    })();

    function initDebugLine() {
        if (!_array.length) return;
        if (_line) _this.remove(_line);

        let points = [];
        _array.forEach(c => {
            c.group.updateMatrixWorld(true);
            points.push(new Vector3().copy(c.camera.getWorldPosition()));
        });

        let geometry = new Geometry().setFromPoints(points);
        let shader = Utils3D.getTestShader(0xff0000);
        _line = new Line(geometry, shader);
        _this.add(_line);
    }

    function play() {
        if (!_array || !_array[0]) return;
        TweenManager.clearTween(_this);
        _this.camera.group.position.copy(_array[0].group.position);
        _this.camera.group.quaternion.copy(_array[0].group.quaternion);
        _this.elapsed = 0;
        _tween = tween(_this, {elapsed: 1}, _this.duration, _panel.get('ease'), 0, null, null, true).onUpdate(_ => {
            if (_range) _range.force(_this.elapsed, true);
        });
        return _tween.promise();
    }

    function getNextStep(elapsed) {
        let next = 999;
        let index = 0;
        for (let i = 0; i < _timeline.data.length; i++) {
            let d = _timeline.data[i];
            if (d.value >= elapsed && d.value <= next) {
                next = d.value;
                index = i;
            }
        }
        return index;
    }

    function lerpCustom(f, t, a, ptr) {
        if (Array.isArray(f)) {
            for (let i = 0; i < f.length; i++) {
                ptr[i] = Math.mix(f[i], t[i], a);
            }
        } else {
            ptr = Math.mix(f, t, a);
        }

        return ptr;
    }

    function toRadians(array) {
        if (!array) return [0, 0, 0];
        array.length = 3;
        return array.map(x => Math.radians(x));
    }

    function loop() {
        if (!_array.length || !_timeline.data.length) return;

        if (_loop) {
            _this.elapsed += _loop;
            _this.elapsed %= 1;
        }

        let elapsed = _this.elapsed;
        let subdivide = 1 / (_array.length-1);
        let t = getNextStep(elapsed);
        let f = Math.max(0, t-1);
        let mix = Math.range(elapsed, _timeline.data[f].value, _timeline.data[t].value, 0, 1, true) || 0;

        if (!_array[f] || !_array[t]) return;

        if (!_this.flag('firstFrame')) {
            _this.flag('firstFrame', true);
            _target.position.copy(_array[0].camera.getWorldPosition());
            _target.quaternion.copy(_array[0].camera.getWorldQuaternion());
            _target2.position.copy(_target.position);
            _target2.quaternion.copy(_target.quaternion);
            _this.camera.group.position.copy(_target2.position);
            _this.camera.group.quaternion.copy(_target2.quaternion);
        }

        _target.position.copy(_array[f].camera.getWorldPosition()).lerp(_array[t].camera.getWorldPosition(), mix, false);
        _target.quaternion.copy(_array[f].camera.getWorldQuaternion()).slerp(_array[t].camera.getWorldQuaternion(), mix, false);

        let lerp = _panel.getNumber('lerp');
        _target2.position.lerp(_target.position, lerp);
        _target2.quaternion.slerp(_target.quaternion, lerp*0.5);

        _this.camera.group.position.lerp(_target2.position, lerp);
        _this.camera.group.quaternion.slerp(_target2.quaternion, lerp*0.5);

        if (!EDIT) {
            for (let key in _customFields) {
                _customFields[key] = lerpCustom(_array[f].customFields[key], _array[t].customFields[key], mix, _customFields[key]);
            }
        }
    }

    function createCamera(postfix) {
        let camera = new BaseCamera();
        _this.add(camera);

        camera.sortIndex = _sort++;

        let storeData, locked, debug, input;

        if (EDIT || SHOW) {
            debug = new Mesh(new BoxGeometry(0.25, 0.25, 0.5, 1, 1, 5), new Shader('DebugCamera', { uColor: {value: new Color()} }));
            _this.startRender(_ => {
                debug.position.copy(camera.camera.getWorldPosition());
                debug.quaternion.copy(camera.camera.getWorldQuaternion());
            });
            World.SCENE.add(debug);
        }

        let lock = _ => {
            World.CAMERA.position.copy(camera.camera.getWorldPosition());
            World.CAMERA.quaternion.copy(camera.camera.getWorldQuaternion());
            World.CAMERA.fov = camera.fov;
            World.CAMERA.updateProjectionMatrix();

            if (_customFields) {
                for (let key in _customFields) {
                    _customFields[key] = input.get(key);
                    if (!Array.isArray(_customFields[key])) _customFields[key] = Number(_customFields[key]);
                }
            }

            _this.events.fire(CameraTrack.LOCK_VIEW, {type: 'lock', fields: _customFields});
        };

        let cameraView = _ => {
            if (_unlockView && _unlockView != orbitView) _unlockView = _unlockView();
            _unlockView = orbitView;
            if (locked) return;
            locked = true;
            storeData = World.CAMERA.clone();
            World.CONTROLS.enabled = false;
            _this.startRender(lock);
        };

        let orbitView = _ => {
            if (!locked) {
                if (_unlockView && _unlockView != orbitView) {
                    _unlockView = _unlockView();
                    return;
                }
            }
            locked = false;
            World.CONTROLS.enabled = true;
            _this.stopRender(lock);

            World.CAMERA.position.copy(storeData.position);
            World.CAMERA.quaternion.copy(storeData.quaternion);
            World.CAMERA.fov = storeData.fov;
            World.CAMERA.updateProjectionMatrix();

            _this.events.fire(CameraTrack.LOCK_VIEW, {type: 'release', fields: _originalFields});
        };

        let editRotation = _ => {
            let c = World.CAMERA.clone();
            let controls = new DebugControls(c, World.ELEMENT.div);

            camera.camera.rotation.set(0, 0, 0);
            input.setValue('rotation', [0, 0, 0]);

            World.CONTROLS.enabled = false;

            let update = _ => {
                controls.update();
                debug.quaternion.copy(c.quaternion);
                camera.group.quaternion.copy(c.quaternion);
            };
            _this.startRender(update);

            let up = _ => {
                if (!locked) World.CONTROLS.enabled = true;
                _this.stopRender(update);
                controls.dispose();
                input.setValue('quaternion', camera.group.quaternion.toArray());
                Stage.unbind('mouseup', up);
            };
            Stage.bind('mouseup', up);
        };

        let snapshot = _ => {
            camera.group.position.copy(World.CAMERA.position);
            camera.group.quaternion.copy(World.CAMERA.quaternion);
            input.setValue('quaternion', camera.group.quaternion.toArray());
            input.setValue('position', camera.group.position.toArray());
            input.setValue('rotation', [0, 0, 0]);
        };

        input = InputUIL.create(`${_name}_cameraTrack_${postfix}`, UIL.global, true);
        input.setLabel('Keyframe');
        input.addColor('colorCode');
        input.add('label');
        input.add('quaternion', 'hidden');
        input.add('mapped', 'hidden');
        input.addNumber('fov', World.CAMERA.fov);
        input.addVector('position', [0, 0, 0]);
        input.addVector('rotation', [0, 0, 0], {step: 1});

        if (_customFields) {
            camera.customFields = {};
            for (let key in _customFields) {
                let value = _customFields[key];
                if (typeof value === 'number') {
                    input.addNumber(key, value);
                    camera.customFields[key] = input.getNumber(key);
                }
                if (Array.isArray(value)) {
                    input.addVector(key, value);
                    camera.customFields[key] = input.get(key);
                }
            }
        }

        input.addButton('editrot', {actions: [{title: 'Edit Rotation', callback: editRotation}], hideLabel:true});
        input.addButton('cameraview', {actions: [{title: 'Camera View', callback: cameraView}], hideLabel:true});
        input.addButton('orbitview', {actions: [{title: 'Orbit View', callback: orbitView}], hideLabel:true});
        input.addButton('snapshot', {actions: [{title: 'Snapshot from Orbit', callback: snapshot}], hideLabel:true});
        camera.postfix = postfix;
        camera.input = input;

        input.onUpdate = key => {
            if (key == 'position') {
                camera.group.position.fromArray(input.get(key));
                if (_line) {
                    camera.group.updateMatrixWorld(true);
                    let array = _line.geometry.attributes.position.array;
                    let {x, y, z} = camera.camera.getWorldPosition();
                    array[camera.sortIndex * 3 + 0] = x;
                    array[camera.sortIndex * 3 + 1] = y;
                    array[camera.sortIndex * 3 + 2] = z;
                    _line.geometry.attributes.position.needsUpdate = true;
                }
            };

            if (key == 'rotation') camera.camera.rotation.fromArray(toRadians(input.get(key)));
            if (key == 'quaternion') camera.group.quaternion.fromArray(input.get(key) || [0, 0, 0, 1]);
            if (key == 'fov') camera.fov = input.get(key);
            if (key == 'colorCode') debug && debug.shader.uniforms.uColor.value.set(input.get(key));
            if (key == 'label') {
                if (camera && camera.oInput) camera.oInput.setLabel(input.get(key) || 'Keyframe');
                input.setLabel(input.get(key) || 'Keyframe');
            }
        };

        ['position', 'rotation', 'fov', 'colorCode', 'label', 'quaternion'].forEach(input.onUpdate);

        _array.push(camera);

        if (EDIT) {
            _this.events.sub(_list, ListUIL.OPEN, _ => {
                input.onUpdate('label');
            });
        }
    }

    function create() {
        _count++;
        _data.push(`c${_count}`);
        _config.setValue('data', JSON.stringify(_data));
        _config.setValue('count', _count);
        createCamera(`c${_count}`);
        initDebugLine();
    }

    //*** Event handlers
    function addListeners() {
        _this.events.sub(UILStorage.SAVE, uilSave);
        _this.events.sub(Keyboard.UP, keyUp);
        if (window.UILSocket) _this.events.sub(UILSocket, 'cameraTrack', socketEvent);
    }

    function socketEvent(e) {
        switch (e.action) {
            case 'play': play(); break;
            case 'pause': _tween.pause(); break;
            case 'resume': _tween.resume(); break;
        }
    }

    function keyUp(e) {
        switch (e.key) {
            case 'k':
                let panel = ListUIL.getPanel();
                _this.flag('kAdd', true, 50);
                if (panel) panel.add();
                break;
        }
    }

    function btnPlay() {
        if (_this.flag('playing')) {
            _this.flag('playing', false);
            _panel.getField('play').setTitle('Play');
            if (_tween && _tween.pause) _tween.pause();
            _this.onBtnPlay && _this.onBtnPlay('pause');
            UILSocket.send('cameraTrack', {action: 'pause'});
        } else {
            _this.flag('playing', true);
            _panel.getField('play').setTitle('Pause');

            if (_this.flag('inPlay')) {
                if (_tween && _tween.resume) _tween.resume();
                _this.onBtnPlay && _this.onBtnPlay('resume');
                UILSocket.send('cameraTrack', {action: 'resume'});
            } else {
                UILSocket.send('cameraTrack', {action: 'play'});
                _this.onBtnPlay && _this.onBtnPlay('play');
                _this.flag('inPlay', true);
                play().then(_ => {
                    _this.flag('playing', false);
                    _this.flag('inPlay', false);
                    _panel.getField('play').setTitle('Play');
                });
            }
        }
    }

    function uilSave() {
        if (!_timeline) return;

        let timeline = [];
        _array.forEach(camera => {
            let data = {};
            data.label = camera.input.get('label') || 'Keyframe';
            if (!camera.input.get('mapped')) {
                data.percent = 1;
                camera.input.setValue('mapped', true);
            }
            timeline.push(data);
        });

        _timeline.model.setState(timeline);
    }

    function addKeyframe(name, input, index) {
        _holdArray = _array.slice(0);

        if (!_array[index]) create();
        input.group.add(_array[index].input.group);
        _array[index].mapId = name;
        _map[name] = _array[index];
        _map[name].oInput = input;

        if (_this.flag('kAdd')) {
            defer(_ => {
                for (let key in _map) {
                    let input = _map[key].oInput;
                    input.listUILItem.close();
                }

                let sort = getAutoSortIndex();
                if (sort > -1) input.listUILItem.forceSort(sort);
                input.listUILItem.open();
            });
        }
    }

    function removeKeyframe(name) {
        let postfix = _map[name].postfix;
        _array.remove(_map[name]);
        _data.remove(postfix);
        _config.setValue('data', JSON.stringify(_data));
    }

    function sortKeyframes(array) {
        let arr = [];
        array.forEach((name, i) => {
            _map[name].sortIndex = i;
            arr.push(_map[name].postfix);
        });

        _array.sort((a, b) => a.sortIndex - b.sortIndex);

        _data = arr;
        _config.setValue('data', JSON.stringify(_data));

        if (EDIT) initDebugLine();
    }

    function getAutoSortIndex() {
        if (_this.elapsed == 1) return -1;
        if (_this.elapsed == 0) return 0;

        let index = 0;
        for (let i = 0; i < _holdArray.length; i++) {
            if (_this.elapsed >= Math.range(i, 0, _holdArray.length-1, 0, 1)) index = i+1;
            if (index == i && i == _holdArray.length-1) index = -1;
        }

        return index;
    }

    //*** Public methods
    this.addCustomFields = function(fields) {
        _customFields = fields;
    }

    this.play = function() {
        return play();
    }

    this.loop = function(speed) {
        _loop = speed * Render.HZ_MULTIPLIER;
    }
}, _ => {
    CameraTrack.LOCK_VIEW = 'camera_track_lock_view';
});
Class(function Fireworks() {
    Inherit(this, Object3D);
    const _this = this;
    var _layout, _proton;

    //*** Constructor
    (async function () {
        //_this.create(World.NUKE, null, {format: Texture.RGBAFormat});

        if (Tests.fireworksEnabled()) {
            await initLayout();

            if (_this.isPlayground()) {
                _this.events.fire(Fireworks.START);
            }
        }
        
    })();

    async function initLayout() {
        _layout = _this.initClass(SceneLayout, 'fireworks');
        _this.layers = await _layout.getAllLayers();

        for (var i in _this.layers) {
            let layer = _this.layers[i];
            layer.renderOrder = 99999;
        }
    }

    //*** Event handlers

    //*** Public methods

}, _ => {
    Fireworks.START = 'fireworks_emit';
    Fireworks.STOP = 'fireworks_stop_emit';

    Hydra.ready().then(_ => {
        Shaders.ready().then(_ => {
            ProtonPresets.register('Fireworks', input => {
                let uniforms = `
                    uCurlNoiseScale: 2
                    uCurlTimeScale: 1
                    uCurlNoiseSpeed: 2
                    uGravity: 0.8
                    uVelocityFade: 0.3
                    uRadiusStrength: 30
                `;
                input.setValue('uniforms', uniforms);

                let shader1 = Shaders.getShader('FireworksPreset.fs');
                shader1 = shader1.split('void main() {')[1].slice(0, -1);

                let shader2 = Shaders.getShader('FireworksPresetCurl.fs');
                shader2 = shader2.split('void main() {')[1].slice(0, -1);

                let code = '#require(curl.glsl)\n' + shader1 + '\n' + shader2;
                if (!input.get('code')) input.setValue('code', code);
            });
        });
    });


});

Class(function FireworksEmitter(_proton, _input, _group) {
    Inherit(this, Component);
    const _this = this;
    var _config;
    var _origin = new Vector3();

    var _radius = 200;
    var _rangeX = 10;
    var _rangeY = 20;
    var _horizon = 40;
    var _amount = 300;

    let _theta = [0, Math.PI / 6, Math.PI / 4, Math.PI / 3, Math.PI / 2, 2 * (Math.PI / 3), 3 * (Math.PI / 4), 5 * (Math.PI / 6), Math.PI, 7 * (Math.PI / 6), 5 * (Math.PI / 4), 4 * (Math.PI / 3), 3 * (Math.PI / 2), 5 * (Math.PI / 3), 7 * (Math.PI / 4), 11 * (Math.PI / 6)];

    var _color = new Color();

    //*** Constructor
    (async function () {
        _config = InputUIL.create('FireworksEmitter');
        _config.setLabel('Emitter');
        _config.add('radius', _radius);
        _config.add('rangeX', _rangeX);
        _config.add('rangeY', _rangeY);
        _config.add('horizon', _horizon);
        _config.add('amount', _amount);

        _config.onUpdate = updateConfig;
        updateConfig();

        await _proton.ready();
        _proton.spawn.useColor();
        
        _proton.shader.uniforms.uSize.value = Platform.usingVR() ? 0.5 : Device.mobile ? 7 : 5;
        
        _proton.shader.addUniforms({
            uRave: MainEnvironment.RAVE
        });

        if (Utils.query('emit')) {
            _this.forceEmit = true;
            startEmit();
        }

        _this.events.sub(Fireworks.START, startEmit);
        _this.events.sub(Fireworks.STOP, stopEmit);
    })();

    function updateConfig() {
        _radius = Number(_config.get('radius'));
        _rangeX = Number(_config.get('rangeX'));
        _rangeY = Number(_config.get('rangeY'));
        _horizon = Number(_config.get('horizon'));
        _amount = Number(_config.get('amount'));
    }


    function emit() {
        let layout = _this.parent.parent;
        if (!layout) return;

        let radius = Math.random(_radius*0.5,_radius*1.5);
        let index = _theta.random(_theta.length-1);

        let x = radius * (Math.cos(index));
        x += Math.random(-_rangeX, _rangeX, 5);

        let y = _horizon + Math.random(-_rangeY, _rangeY, 5);

        let z = radius * (Math.sin(index));
        z += Math.random(-_rangeX,_rangeX, 5);

        //if (scene.playerActivated) return;

        _origin.set(x, y, z);
        _color.setHSL(Math.random(0,1,4),1.0,0.2+MainEnvironment.RAVE.value*0.75);
        let release = Math.random(Math.round(_amount*0.5), Math.round(_amount*1.5));

        _proton.spawn.release(_origin, release, 0.5, null, _color);
    }

    //*** Event handlers

    function startEmit() {
        if (_this.isEmitting && !_this.forceEmit) return;
        _this.isEmitting = true;
        let emitTimout = _ => {
            if (!_this.isEmitting) return;
            clearTimeout(_this.nextEmit);
            _this.nextEmit = _this.delayedCall(()=>{
                if (_this.isEmitting) {
                    emit();
                    emitTimout();
                }
            }, Math.random(50, 100));
        }
        emitTimout();
    }


    function stopEmit() {
        if (!_this.isEmitting || _this.forceEmit) return;
        _this.isEmitting = false;
        clearTimeout(_this.nextEmit);
    }

    //*** Public methods

});
Class(function FireworksParticle(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (function () {
        _shader.addUniforms({
            uSize: { value: 5 },
            uColor0: { value: new Color('#ff0000') },
            uColor1: { value: new Color('#ffff00') },
            uHueShift: { value: 2 },
            uRave: MainEnvironment.RAVE
        });


    })();

    //*** Event handlers

    //*** Public methods

});
Class(function GLScreenProjection(_camera = World.CAMERA, _target = new Vector2()) {
    Inherit(this, Object3D);
    var _this = this;

    var _projection = new ScreenProjection(_camera);
    var _m0 = new Matrix4();
    var _m1 = new Matrix4();

    this.resolution = new Vector2();
    this.pos = new Vector2();
    this.pos3D = new Vector3();
    this.matrix = new Matrix4();

    this.uniforms = {
        projMatrix: {type: 'm4', value: this.matrix},
        pos: {type: 'v2', value: this.pos},
        pos3D: {type: 'v3', value: this.pos3D},
        normalMatrix: {type: 'm4', value: new Matrix4()},
        modelMatrix: {type: 'm4', value: new Matrix4()}
    };

    function loop() {
        _this.pos.set(_target.x, _target.y);
        _this.pos3D.copy(_projection.unproject(_this.pos));

        _this.group.updateMatrixWorld();

        _m0.copy(_camera.projectionMatrix);
        _m1.getInverse(_camera.matrixWorld);

        _this.matrix.multiplyMatrices(_m0, _m1);

        _this.uniforms.normalMatrix.value.copy(_camera.matrixWorld);
        _this.uniforms.modelMatrix.value.copy(_this.group.matrixWorld);
    }

    //*** Public methods
    this.set('camera', v => {
        _camera = v;
        _projection.camera = _camera;
    });

    this.set('target', v => {
        _target = v;
    });

    this.update = loop;

    this.start = function() {
        _this.startRender(loop);
    }

    this.stop = function() {
        _this.stopRender(loop);
    }
});
Class(function Webcam(_width, _height, _audio) {
    Inherit(this, Component);
    var _this = this;

    let _stream, _cameras = {}, _config = {};
    let _back = false, _attempts = 0;

    _this.facing = 'back';

    //*** Constructor
    (function() {
        createVideo();
        initNavigator();
    })();

    function createVideo() {
        _this.div = window.AURA ? document.createElement() : document.createElement('video');
        _this.div.width = _width;
        _this.div.height = _height;
        _this.div.autoplay = true;
        _this.div.controls = true;
        _this.div.playsinline = true;
        _this.div.setAttribute("playsinline", true);
        _this.div.setAttribute("controls", true);

        Stage.add(_this.div);

        _this.element = $(_this.div);
        _this.element.transformPoint(0,0).transform({ scaleX: !Device.mobile ? -1 : 1, scale: 0.25 }).setZ(-1);
    }

    function initNavigator() {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    }

    function establishWebcam() {
        if (_attempts >= 2 || !navigator.mediaDevices) return error();

        lookupDevices().then( () => {
            if (_stream && _config.back) _stream.getTracks()[0].stop();
            if (Device.mobile.phone) {
                if (_cameras && _cameras.back) _cameras.back.frameRate = { ideal: 60 };
                if (_cameras && _cameras.front) _cameras.front.frameRate = { ideal: 60 };
            }

            navigator.mediaDevices.getUserMedia({video: _config.back ? _cameras.back : _cameras.front || true, audio: _audio }).then(success).catch(error);
        });
        _attempts += 1;
    }

    function lookupDevices() {
        let promise = Promise.create();
        if (!Device.mobile) return Promise.resolve();

        navigator.mediaDevices.enumerateDevices().then(devices => {

            devices.forEach(device => {
                if (device.label.includes('front')) _cameras.front = {deviceId: {exact: device.deviceId} };
                if (device.label.includes('back')) {
                    _cameras.back = {deviceId: { exact: device.deviceId} };
                    _back = true;
                }
            });

            if (!_cameras.front) _cameras.front = { facingMode: "user" };
            if (!_cameras.back) {
                _cameras.back = { facingMode:  "environment" };
                _back = false;
            }

            promise.resolve();
        });

        return promise;
    }


    //*** Event handlers
    function success(stream) {
        _this.denied = false;
        _stream = stream;

        if (_config.back && !_back) {
            establishWebcam();
        } else {
            _this.div.srcObject = stream;
            _this.events.fire(Events.READY, null, true);
        }
    }

    function error() {
        _this.denied = true;
        _this.events.fire(Events.ERROR, null, true);
    }

    //*** Public Methods
    this.createStream = function(config = {}) {
        _attempts = 0;
        _config = config;
        establishWebcam();
    }

    this.flip = function() {
        if (!_back) return;
        let direction;

        if (_this.facing === 'front') {
            _this.facing = 'back';
            direction = _cameras.back;
        } else {
            _this.facing = 'front';
            direction = _cameras.front;
        }

        _stream.getTracks()[0].stop();
        navigator.getUserMedia({video: direction || true, audio: _audio}, success, error);
    }

    this.get('width', function() {
        return _width;
    });

    this.get('height', function() {
        return _height;
    });

    this.size = function(w, h) {
        _this.div.width = _width = w;
        _this.div.height = _height = h;
        _this.element.size(w, h);
    }

    this.getPixels = function(width = _width, height = _height) {
        if (!_this.canvas) {
            _this.canvas = document.createElement('canvas');
            _this.canvas.width = width;
            _this.canvas.height = height;
            _this.canvas.context = _this.canvas.getContext('2d');
        }

        _this.canvas.context.drawImage(_this.div, 0, 0, width, height);
        return _this.canvas.context.getImageData(0, 0, width, height);
    }

    this.getCanvas = function() {
        if (!_this.canvas) {
            _this.canvas = document.createElement('canvas');
            _this.canvas.width = _width;
            _this.canvas.height = _height;
            _this.canvas.context = _this.canvas.getContext('2d');
        }

        _this.canvas.context.drawImage(_this.div, 0, 0, _width, _height);
        return _this.canvas;
    }

    this.ready = function() {
        return _this.div.readyState > 0;
    }

    this.end = function() {
        _this.active = false;
        _this.div.pause();
        if (_stream) _stream.getTracks()[0].enabled = false;
    }

    this.restart = function() {
        _this.div.play();
        if (_stream) _stream.getTracks()[0].enabled = true;
        _this.active = true;
    }

    this.deviceCount = async function(kind) {
        if (!navigator.mediaDevices) return 0;

        let devices = await navigator.mediaDevices.enumerateDevices();
        let count = 0;
        devices.forEach(d => {
            if (d.kind.includes(kind)) count++;
        });
        return count;
    }

});
Namespace('FX');
FX.Class(function Mirror(_mesh, _params = {}) {
    Inherit(this, FXScene);
    const _this = this;
    var _renderer, _camera;

    var _frustum = new Frustum();

    this.visible = true;
    this.enabled = typeof _params.enabled == 'boolean' ? _params.enabled : true;
    this.frustumCulled = true;

    //*** Constructor
    (function () {
        if (_mesh && _mesh.isGroup) {
            _mesh.traverse(obj => {
                if (obj.shader && obj.shader.fsName !== 'TestMaterial') _mesh = obj;
            });
        }
        if (_mesh && !_params.shader) _params.shader = _mesh.shader;
        _params.nuke = _params.nuke || World.NUKE;
        _this.create(_params.nuke);
        _this.preventRTDraw = true;
        initMirror();
        decorateShader();
    })();

    function initMirror() {
        let width = _params.width || 512;
        let height = _params.height || 512;
        if (_params.size) width = height = _params.size;
        _renderer = new MirrorRenderer(_params.nuke.camera, {width, height, clipBias: _params.clipBias || 0.01, format: _params.format});
        if (_params.normal) _renderer.normalDir = _params.normal;
    }

    function loop({stage, camera, view}) {
        if (!_this.visible || !_this.enabled || !_mesh) return;

        if (stage) {
            if (view > 0) return;
            _renderer.camera = camera;
            _this.nuke.camera = camera;
            _this.nuke.stage = stage;
        } else {
            if (_this.nuke.camera != _renderer.camera) _renderer.camera = _this.nuke.camera;
        }

        if (_this.frustumCulled) {
            _frustum.setFromCamera(_this.nuke.camera);
            if (!_frustum.intersectsObject(_mesh)) return;
        }

        _this.draw();
        _mesh.matrixWorld.decompose(_renderer.position, _renderer.quaternion, _renderer.scale);

        let clearColor = null;
        if (_this.clearColor) {
            clearColor = World.RENDERER.getClearColor().getHex();
            World.RENDERER.setClearColor(_this.clearColor);
        }
        World.RENDERER.overridePreventShadows = true;
        _renderer.render(_this.scene);
        World.RENDERER.overridePreventShadows = false;

        if (_this.clearColor) {
            World.RENDERER.setClearColor(clearColor);
        }

        _this.postRender && _this.postRender();
    }

    function decorateShader() {
        if (!_mesh) return;
        _params.shader.uniforms.tMirrorReflection = {value: _renderer.renderTarget.texture, ignoreUIL: true};
        _params.shader.uniforms.uMirrorMatrix = {value: _renderer.textureMatrix, ignoreUIL: true};
    }

    //*** Event handlers

    //*** Public methods
    this.onDestroy = function() {
        _renderer.destroy();
    }

    this.start = function(nuke = _params.nuke) {
        _this.startRender(loop, RenderManager.type != RenderManager.VR ? nuke : RenderManager.EYE_RENDER);
    }

    this.stop = function() {
        _this.stopRender(loop, RenderManager.type != RenderManager.VR ? nuke : RenderManager.EYE_RENDER);
    }

    this.decorate = function(shader) {
        shader.uniforms.tMirrorReflection = {value: _renderer.renderTarget.texture, ignoreUIL: true};
        shader.uniforms.uMirrorMatrix = {value: _renderer.textureMatrix, ignoreUIL: true};
    }

    this.useMesh = function(mesh) {
        _mesh = mesh;
        if (!_params.shader) _params.shader = _mesh.shader;
        decorateShader();
    }

    this.useCamera = function(camera) {
        camera = camera.camera || camera;
        _renderer.camera = camera;
        _this.nuke.camera = camera;
    }

    this.add = function(obj) {
        if (_params.nuke.attachments > 1) {
            if (obj.shader._gl) _this.addObject(obj);
            else {
                obj.shader.preCompile = code => {
                    _this.addObject(obj);
                    return code;
                };
            }
        } else {
            _this.addObject(obj);
        }
    }

    this.render = loop;

    this.set('clipBias', v => _renderer.clipBias = v);
});

class MirrorRenderer extends Base3D {
    constructor(camera, options = {}) {
        super();
        this._camera = camera;
        this.width = options.width || 512;
        this.height = options.height || 512;
        this.clipBias = options.clipBias || 0;
        this.renderer = World.RENDERER;

        this.mirrorPlane = new Plane();
        this.normalDir = new Vector3(0, 0, 1);
        this.normal = new Vector3(0, 0, 1);
        this.mirrorWorldPosition = new Vector3();
        this.cameraWorldPosition = new Vector3();
        this.rotationMatrix = new Matrix4();
        this.lookAtPosition = new Vector3(0, 0, -1);
        this.clipPlane = new Vector4();

        this.textureMatrix = new Matrix4();
        this.mirrorCamera = this._camera.clone();
        this.renderTarget = new RenderTarget(this.width, this.height, {minFilter: Texture.LINEAR, magFilter: Texture.LINEAR, format: options.format || Texture.RGBFormat});

        this.viewVec = new Vector3();
        this.targetVec = new Vector3();
        this.q = new Quaternion();

        this.updateTextureMatrix();
    }

    updateTextureMatrix() {
        this.updateMatrixWorld();
        this._camera.updateMatrixWorld();

        this.mirrorWorldPosition.setFromMatrixPosition(this.matrixWorld);
        this.cameraWorldPosition.setFromMatrixPosition(this._camera.matrixWorld);

        this.rotationMatrix.extractRotation(this.matrixWorld);

        this.normal.copy(this.normalDir);
        this.normal.applyMatrix4(this.rotationMatrix);

        this.viewVec.copy(this.mirrorWorldPosition).sub(this.cameraWorldPosition);
        this.viewVec.reflect(this.normal).negate();
        this.viewVec.add(this.mirrorWorldPosition);

        this.rotationMatrix.extractRotation(this._camera.matrixWorld);

        this.lookAtPosition.set(0, 0, -1);
        this.lookAtPosition.applyMatrix4(this.rotationMatrix);
        this.lookAtPosition.add(this.cameraWorldPosition);

        this.targetVec.copy(this.mirrorWorldPosition).sub(this.lookAtPosition);
        this.targetVec.reflect(this.normal).negate();
        this.targetVec.add(this.mirrorWorldPosition);

        this.up.set(0, -1, 0);
        this.up.applyMatrix4(this.rotationMatrix);
        this.up.reflect(this.normal).negate();

        this.mirrorCamera.position.copy(this.viewVec);
        this.mirrorCamera.up = this.up;
        this.mirrorCamera.lookAt(this.targetVec);

        // this.mirrorCamera.updateProjectionMatrix();
        this.mirrorCamera.updateMatrixWorld();
        this.mirrorCamera.projectionMatrix.copy(this._camera.projectionMatrix);

        this.textureMatrix.set(
            0.5, 0.0, 0.0, 0.5,
            0.0, 0.5, 0.0, 0.5,
            0.0, 0.0, 0.5, 0.5,
            0.0, 0.0, 0.0, 1.0
        );
        this.textureMatrix.multiply(this.mirrorCamera.projectionMatrix);
        this.textureMatrix.multiply(this.mirrorCamera.matrixWorldInverse);

        this.mirrorPlane.setFromNormalAndCoplanarPoint(this.normal, this.mirrorWorldPosition);
        this.mirrorPlane.applyMatrix4(this.mirrorCamera.matrixWorldInverse);

        this.clipPlane.set(this.mirrorPlane.normal.x, this.mirrorPlane.normal.y, this.mirrorPlane.normal.z, this.mirrorPlane.constant);

        let projectionMatrix = this.mirrorCamera.projectionMatrix;
        let q = this.q;

        q.x = ( Math.sign( this.clipPlane.x ) + projectionMatrix.elements[ 8 ] ) / projectionMatrix.elements[ 0 ];
        q.y = ( Math.sign( this.clipPlane.y ) + projectionMatrix.elements[ 9 ] ) / projectionMatrix.elements[ 5 ];
        q.z = - 1.0;
        q.w = ( 1.0 + projectionMatrix.elements[ 10 ] ) / projectionMatrix.elements[ 14 ];

        let c = this.clipPlane.multiplyScalar(2.0 / this.clipPlane.dot(q));
        projectionMatrix.elements[2] = c.x;
        projectionMatrix.elements[6] = c.y;
        projectionMatrix.elements[10] = c.z + 1.0 - this.clipBias;
        projectionMatrix.elements[14] = c.w;
    }

    render(scene) {
        this.updateTextureMatrix();
        this.renderer.render(scene, this.mirrorCamera, this.renderTarget);
    }

    destroy() {
        this.renderTarget.destroy();
    }

    set camera(c) {
        this._camera = c;
        this.mirrorCamera = c.clone();
    }

    get camera() {
        return this._camera;
    }
}
Class(function ParticleDistributor() {
    Inherit(this, Component);
    const _this = this;

    function init() {
        if (!_this.flag('initGenerate')) {
            _this.flag('initGenerate', true);
            Thread.upload(distributeParticles);
            Thread.upload(generatePointCloud);
            Thread.upload(generatePointGrid);
        }
    }

    function distributeParticles(e, id) {
        let { position, count, normal, uv, skinIndex, skinWeight, offset, scale, orientation } = e;
        let vertices = position.length / 3;
        let v3 = new Vector3();
        let v32 = new Vector3();
        let v33 = new Vector3();
        let q = new Quaternion();
        let outputPosition = new Float32Array(count * 3);
        let outputNormal = normal ? new Float32Array(count * 3) : null;
        let outputUV = uv ? new Float32Array(count * 3) : null;
        let outputSkinIndex = skinIndex ? new Float32Array(count * 4) : null;
        let outputSkinWeight = skinWeight ? new Float32Array(count * 4) : null;

        for (let i = 0; i < count; i++) {
            let j = Math.random(0, vertices / 3) * 3;

            v3.set(Math.random(0, 100), Math.random(0, 100), Math.random(0, 100));
            let m = 1 / (v3.x + v3.y + v3.z);
            v3.set(v3.x * m, v3.y * m, v3.z * m);

            outputPosition[i * 3 + 0] = position[j * 3 + 0] * v3.x + position[j * 3 + 3] * v3.y + position[j * 3 + 6] * v3.z;
            outputPosition[i * 3 + 1] = position[j * 3 + 1] * v3.x + position[j * 3 + 4] * v3.y + position[j * 3 + 7] * v3.z;
            outputPosition[i * 3 + 2] = position[j * 3 + 2] * v3.x + position[j * 3 + 5] * v3.y + position[j * 3 + 8] * v3.z;

            if (offset) {
                let randomInstance = Math.random(0, (offset.length / 3)-1);
                v32.fromArray(outputPosition, i * 3);
                v33.fromArray(scale, randomInstance * 3);
                v32.multiplyScalar(v33);

                q.fromArray(orientation, randomInstance * 4);
                v32.applyQuaternion(q);

                v33.fromArray(offset, randomInstance * 3);
                v32.add(v33);

                v32.toArray(outputPosition, i * 3);
            }

            if (outputNormal) {
                outputNormal[i * 3 + 0] = normal[j * 3 + 0] * v3.x + normal[j * 3 + 3] * v3.y + normal[j * 3 + 6] * v3.z;
                outputNormal[i * 3 + 1] = normal[j * 3 + 1] * v3.x + normal[j * 3 + 4] * v3.y + normal[j * 3 + 7] * v3.z;
                outputNormal[i * 3 + 2] = normal[j * 3 + 2] * v3.x + normal[j * 3 + 5] * v3.y + normal[j * 3 + 8] * v3.z;
            }

            if (outputUV) {
                outputUV[i * 3 + 0] = uv[j * 2 + 0] * v3.x + uv[j * 2 + 2] * v3.y + uv[j * 2 + 4] * v3.z;
                outputUV[i * 3 + 1] = uv[j * 2 + 1] * v3.x + uv[j * 2 + 3] * v3.y + uv[j * 2 + 5] * v3.z;
            }

            if (outputSkinIndex) {
                let skinCluster1 = {};
                skinCluster1[skinIndex[j * 4 + 0]] = skinWeight[j * 4 + 0];
                skinCluster1[skinIndex[j * 4 + 1]] = skinWeight[j * 4 + 1];
                skinCluster1[skinIndex[j * 4 + 2]] = skinWeight[j * 4 + 2];
                skinCluster1[skinIndex[j * 4 + 3]] = skinWeight[j * 4 + 3];

                let skinCluster2 = {};
                skinCluster2[skinIndex[j * 4 + 4]] = skinWeight[j * 4 + 4];
                skinCluster2[skinIndex[j * 4 + 5]] = skinWeight[j * 4 + 5];
                skinCluster2[skinIndex[j * 4 + 6]] = skinWeight[j * 4 + 6];
                skinCluster2[skinIndex[j * 4 + 7]] = skinWeight[j * 4 + 7];

                let skinCluster3 = {};
                skinCluster3[skinIndex[j * 4 + 8]] = skinWeight[j * 4 + 8];
                skinCluster3[skinIndex[j * 4 + 9]] = skinWeight[j * 4 + 9];
                skinCluster3[skinIndex[j * 4 + 10]] = skinWeight[j * 4 + 10];
                skinCluster3[skinIndex[j * 4 + 11]] = skinWeight[j * 4 + 11];

                let indices = [];
                for (let k = 0; k < 12; k++) {
                    let index = skinIndex[j * 4 + k];
                    if (indices.indexOf(index) === -1) indices.push(index);
                }

                let clusters = [];
                for (let k = 0; k < indices.length; k++) {
                    let index = indices[k];
                    clusters.push([index, (skinCluster1[index] || 0) * v3.x + (skinCluster2[index] || 0) * v3.y + (skinCluster3[index] || 0) * v3.z]);
                }

                clusters.sort(function (a, b) {
                    return b[1] - a[1];
                });

                for (let l = clusters.length - 1; l < 4; l++) {
                    clusters.push([0, 0]);
                }

                let sum = clusters[0][1] + clusters[1][1] + clusters[2][1] + clusters[3][1];

                outputSkinIndex[i * 4 + 0] = clusters[0][0];
                outputSkinIndex[i * 4 + 1] = clusters[1][0];
                outputSkinIndex[i * 4 + 2] = clusters[2][0];
                outputSkinIndex[i * 4 + 3] = clusters[3][0];

                outputSkinWeight[i * 4 + 0] = clusters[0][1] * (1 / sum);
                outputSkinWeight[i * 4 + 1] = clusters[1][1] * (1 / sum);
                outputSkinWeight[i * 4 + 2] = clusters[2][1] * (1 / sum);
                outputSkinWeight[i * 4 + 3] = clusters[3][1] * (1 / sum);
            }
        }

        let output = {};
        let buffer = [];

        output.position = outputPosition;
        buffer.push(outputPosition.buffer);

        if (outputNormal) {
            output.normal = outputNormal;
            buffer.push(outputNormal.buffer);
        }

        if (outputUV) {
            output.uv = outputUV;
            buffer.push(outputUV.buffer);
        }

        if (outputSkinIndex) {
            output.skinIndex = outputSkinIndex;
            output.skinWeight = outputSkinWeight;

            buffer.push(outputSkinIndex.buffer);
            buffer.push(outputSkinWeight.buffer);
        }

        resolve(output, id, buffer);
    }

    function generatePointCloud({ path, particleCount }, id) {
        (async function () {
            try {
                let data = await get(path);
                let totalParticles = particleCount;
                if (data.colors.length > totalParticles) {
                    let buffer = new Float32Array(totalParticles * 3);
                    for (let i = 0; i < totalParticles; i++) {
                        buffer[i * 3 + 0] = data.positions[i * 3 + 0];
                        buffer[i * 3 + 1] = data.positions[i * 3 + 1];
                        buffer[i * 3 + 2] = data.positions[i * 3 + 2];
                    }

                    data.colors = data.colors.slice(0, totalParticles);
                    data.positions = buffer;
                } else {
                    if (data.colors.length == totalParticles) data.positions = new Float32Array(data.positions);
                    else throw `Point Cloud particle size mismatch, got ${data.colors.length} for ${totalParticles} ${path}`;
                }

                let colors = new Float32Array(totalParticles * 3);
                for (let i = 0; i < data.colors.length; i++) {
                    let hex = Math.floor(Number('0x' + data.colors[i]));
                    let r = (hex >> 16 & 255) / 255;
                    let g = (hex >> 8 & 255) / 255;
                    let b = (hex & 255) / 255;
                    colors[i * 3 + 0] = r;
                    colors[i * 3 + 1] = g;
                    colors[i * 3 + 2] = b;
                }

                data.colors = colors;

                resolve(data, id, [data.positions.buffer, data.colors.buffer]);
            } catch (e) {
                console.log(e);
                throw `Could not load Point Cloud for ${path}`;
            }
        })();
    }

    function generatePointGrid({ path, particleCount }, id) {
        let split = path.split('generateGrid-')[1].split('-');
        let dir = split[0];
        let scale = Number(split[1]);
        let s0 = Number(split[2]) || 1;

        let textureSize = Number(split[split.length-1].split('.')[0]);
        let totalParticles = particleCount;
        let positions = new Float32Array(totalParticles * 3);
        let colors = new Float32Array(totalParticles * 3);
        for (let i = 0; i < totalParticles; i++) {
            let p0 = i / textureSize;
            let y = Math.floor(p0);
            let x = p0 - y;
            y /= textureSize;

            x = Math.range(x, 0, 1, -scale/2, scale/2);
            y = Math.range(y, 0, 1, -scale/2, scale/2);

            if (dir == 'xz') {
                positions[i * 3 + 0] = x;
                positions[i * 3 + 1] = 0;
                positions[i * 3 + 2] = y;
            } else {
                positions[i * 3 + 0] = x;
                positions[i * 3 + 1] = y;
                positions[i * 3 + 2] = 0;
            }

            colors[i * 3 + 0] = 1;
            colors[i * 3 + 1] = 1;
            colors[i * 3 + 2] = 1;
        }

        resolve({colors, positions}, id, [colors.buffer, positions.buffer]);
    }

    //*** Event handlers

    //*** Public methods
    this.generate = async function (geom, count) {
        init();

        let position = new Float32Array(geom.attributes.position.array);

        let data = await Thread.shared().distributeParticles({ position, count }, [position.buffer]);
        return data.position;
    }

    this.generateInstanced = async function (geom, count) {
        init();

        let position = new Float32Array(geom.attributes.position.array);
        let offset = new Float32Array(geom.attributes.offset.array);
        let scale = new Float32Array(geom.attributes.scale.array);
        let orientation = new Float32Array(geom.attributes.orientation.array);

        let data = await Thread.shared().distributeParticles({ position, offset, scale, orientation, count }, [position.buffer, offset.buffer, scale.buffer, orientation.buffer]);
        return data.position;
    }

    this.generateAll = async function (geom, count) {
        init();

        let position = new Float32Array(geom.attributes.position.array);
        let normal = new Float32Array(geom.attributes.normal.array);
        let uv = new Float32Array(geom.attributes.uv.array);

        let data = await Thread.shared().distributeParticles({ position, normal, uv, count }, [position.buffer, normal.buffer, uv.buffer]);
        return data;
    }

    this.generateSkinned = async function (geom, count) {
        init();

        let position = new Float32Array(geom.attributes.position.array);
        let normal = new Float32Array(geom.attributes.normal.array);
        let uv = new Float32Array(geom.attributes.uv.array);
        let skinIndex = new Float32Array(geom.attributes.skinIndex.array);
        let skinWeight = new Float32Array(geom.attributes.skinWeight.array);

        let data = await Thread.shared().distributeParticles({ position, normal, uv, skinIndex, skinWeight, count }, [position.buffer, normal.buffer, uv.buffer, skinIndex.buffer, skinWeight.buffer]);
        return data;
    }

    this.generatePointCloud = async function (path, particleCount) {
        if (!path.includes('assets/geometry')) path = 'assets/geometry/' + path;
        if (!path.includes('.json')) path += '.json';

        init();

        let fn = path.includes('generateGrid') ? Thread.shared().generatePointGrid : Thread.shared().generatePointCloud;
        let data = await fn({ path: Thread.absolutePath(path), particleCount });
        let positions = new AntimatterAttribute(data.positions, 3);
        let colors = new AntimatterAttribute(data.colors, 3);
        return { positions, colors };
    }
}, 'static');

Class(function Proton(_input, _group) {
    Inherit(this, Object3D);
    const _this = this;
    var _config, _size, _antimatter, _behaviorInput;

    const prefix = this.prefix = `P_${_input.prefix}`;

    this.uilInput = _input;
    this.uilGroup = _group;
    this.prefix = prefix;

    //*** Constructor
    (function () {
        initConfig();
    })();

    async function initConfig() {
        _config = _this.uilConfig = InputUIL.create(prefix + '_config', _group);
        _config.setLabel('Config');


        _config
        .addButton('load-values', {label: 'Values', actions: [
            {title:'Load', callback: loadValues},
            {title:'Save', callback: saveValues},
        ]})
        .addButton('save', {label: 'Configuration', actions: [
            {title:'Load', callback: loadConfig},
            {title:'Save', callback: saveConfig},
        ]})
        .addButton('load-shader', {label: 'Shader', actions: [
            {title:'Load', callback: () => loadShader()},
        ]})
        .addButton('load-behavior', {label: 'Behavior', actions: [
            {title:'Load', callback: () => loadBehavior()},
        ]});

        let types = [
            {label: 'Permanent', value: 'permanent'},
            {label: 'Lifecycle', value: 'lifecycle'},
        ];
        _config.addSelect('type', types);

        _config.add('particleCount', 1000);

        let output = [
            {label: 'Particles', value: 'particles'},
            {label: 'Custom', value: 'custom'},
        ];
        if (window.ProtonTubes) output.push({label: 'Tubes', value: 'tubes'});
        _config.addSelect('output', output);

        _config.add('shader');
        if (_config.get('shader')) _config.addTextarea('uniforms');
        _config.add('class');

        let type = _config.get('type');
        try {
            if (_input.get('visible') === false) throw 'Layer set to invisible';
            _this.particleCount = _size = getSize();
            initAntimatter();
        } catch(e) {
            console.warn('Proton skipped', e);
            _this.disabled = true;
        }
    }

    function loadValues() {
        const name = prompt('Name of values to be loaded');
        if (name === null) return;

        let data = UILStorage.get(`proton_values_${name}`);
        if (!data) alert(`No values ${name} found`);
        data = JSON.parse(data);

        let apply = (shader, obj) => {
            for (let key in obj) {
                UILStorage.set(shader.UILPrefix + key, obj[key]);
            }
        };

        apply(_this.behavior, data.behavior);
        apply(_this.shader, data.shader);

        if (_this.customClass && _this.customClass.saveValues) {
            apply(_this.customClass.saveValues(), data.custom);
        }

        alert('Values imported. Save and refresh.');
    }

    function saveValues() {
        const name = prompt('Name of values to be saved');
        if (name === null) return;

        let store = (shader, to) => {
            for (let key in shader.uniforms) {
                let value = shader.uniforms[key];
                if (value.ignoreUIL) continue;

                let uilValue = UILStorage.get(shader.UILPrefix + key);
                if (uilValue !== undefined) to[key] = uilValue;
            }
        };

        let output = {};
        output.behavior = {};
        output.shader = {};
        store(_this.behavior, output.behavior);
        store(_this.shader, output.shader);
        if (_this.customClass && _this.customClass.saveValues) {
            output.custom = {};
            store(_this.customClass.saveValues(), output.custom);
        }

        UILStorage.setWrite(`proton_values_${name}`, JSON.stringify(output));
    }

    function loadConfig() {
        const name = prompt('Name of configuration to be loaded');
        if (name === null) return;

        let toLoad = UILStorage.get(`proton_config_${name}`);

        loadBehavior(toLoad);
        loadShader(toLoad);

        alert('Loaded. Save and refresh');
    }

    function saveConfig() {
        let name = prompt('Name of configuration to be saved');
        if (name === null) return;

        UILStorage.setWrite(`proton_config_${name}`, prefix);
    }

    function loadShader(toLoad) {
        let shouldNotify = !toLoad;

        if (!toLoad) {
            const name = prompt('Name of shader to be loaded');
            if (name === null) return;

            toLoad = UILStorage.get(`proton_config_${name}`);
        }

        let copyConfig = InputUIL.create(toLoad + '_config', null);
        _config.copyFrom(copyConfig, ['shader', 'uniforms']);

        let suniformString = _config.get('uniforms') || '';
        suniformString.split('\n').forEach(line => {
            if (!line.includes(':')) return;
            line = line.replace(/ /g, '');
            let name = line.split(':')[0];

            let shaderName = copyConfig.get('shader');

            let store = `${shaderName}/${shaderName}/${prefix}/`;
            let lookup = `${shaderName}/${shaderName}/${toLoad}/`;
            let val = UILStorage.get(lookup + name);
            if (!val) { //texture
                val = UILStorage.get(lookup + '_tx_' + name);
                if (val) UILStorage.set(store + '_tx_' + name, val);
            } else {
                UILStorage.set(store + name, val);
            }
        });

        if (shouldNotify) alert('Loaded. Save and refresh');
    }

    function loadBehavior(toLoad) {
        let shouldNotify = !toLoad;

        if (!toLoad) {
            const name = prompt('Name of behavior to be loaded');
            if (name === null) return;

            toLoad = UILStorage.get(`proton_config_${name}`);
        }

        let copyConfig = InputUIL.create(toLoad + '_config', null);
        _config.copyFrom(copyConfig, ['type', 'particleCount', 'output', 'class']);
        // if (!_config.get('type')) return alert(`No config ${name} found`);

        let copyBehavior = InputUIL.create(toLoad + '_behavior', null);
        InputUIL.create(prefix + '_behavior', null).copyFrom(copyBehavior, ['uniforms', 'data', 'codeCount']);

        let data = copyBehavior.get('data') || [];

        let buniformString = copyBehavior.get('uniforms') + '\n';

        let createCode = postfix => {
            let toCode = InputUIL.create(prefix + postfix, null);
            let fromCode = InputUIL.create(toLoad + postfix, null);
            toCode.copyFrom(fromCode, ['name', 'code', 'uniforms', 'preset']);

            buniformString += fromCode.get('uniforms') + '\n';
        };

        let editor = ListUIL.create(prefix + '_code', null);
        editor.internalAddItems(data.length);

        data.forEach(createCode);

        buniformString.split('\n').forEach(line => {
            if (!line.includes(':')) return;
            line = line.replace(/ /g, '');
            let name = line.split(':')[0];

            let lookup = `am_ProtonAntimatter_` + toLoad;
            let store = `am_ProtonAntimatter_` + prefix;
            let val = UILStorage.get(lookup + name);
            if (val) UILStorage.set(store + name, val);
        });

        let className = copyConfig.get('class');
        if (className) {
            _this.customClass = _this.parent.initClass(window[className], _this, _group, _input);
            if (_this.customClass.loadConfig) _this.customClass.loadConfig(toLoad, prefix);
        }

        if (shouldNotify) alert('Loaded. Save and refresh');
    }

    function getSize() {
        if (_this.parent.data && _this.parent.data.particleCount) {
            if (typeof _this.parent.data.particleCount === 'string') return eval(_this.parent.data.particleCount);
            return _this.parent.data.particleCount;
        }

        let size = _config.getNumber('particleCount');
        if (isNaN(size)) {
            try {
                size = eval(_config.get('particleCount'));
            } catch(e) {
                throw `Proton particleCount is not a number or valid test function`;
            }
        }

        if (isNaN(size)) throw 'Proton particleCount is falsy!';

        _this.particleCount = size;
        return size;
    }

    async function initCustomClass() {
        _this.shader.addUniforms({
            DPR: {value: World.DPR, ignoreUIL: true},
        });

        let className = _config.get('class');
        if (className) _this.customClass = _this.parent.initClass(window[className], _this, _group, _input);
    }

    function parseUniforms(text, predefined) {
        if (!text) return {};

        let split = text.split('\n');
        let output = {};

        split.forEach(line => {
            line = line.replace(/ /g, '');
            if (!line.length || !line.includes(':')) return;
            let split = line.split(':');
            let name = split[0];
            let val = split[1];

            if (val.includes('[')) {
                let array = JSON.parse(val);
                switch (array.length) {
                    case 2: output[name] = {value: new Vector2().fromArray(array)};break;
                    case 3: output[name] = {value: new Vector3().fromArray(array)}; break;
                    case 4: output[name] = {value: new Vector4().fromArray(array)}; break;
                    default: throw `Unknown uniform type ${line}`; break;
                }
            } else {
                if (val.charAt(0) == 'C') predefined[name] = val.slice(1);
                else if (val === 'T') output[name] = {value: null};
                else if (val === 'OEST') output[name] = {value: null, oes: true};
                else if (val.includes(['0x', '#'])) output[name] = {value: new Color(val)};
                else output[name] = {value: Number(val)};
            }
        });

        return output;
    }

    function getUniformGLSLType(obj) {
        if (typeof obj.value === 'number') return 'float';
        if (obj.oes) return 'samplerExternalOES';
        if (obj.value === null || obj.value instanceof Texture) return 'sampler2D';
        if (obj.value instanceof Vector2) return 'vec2';
        if (obj.value instanceof Vector3) return 'vec3';
        if (obj.value instanceof Vector3D) return 'vec3';
        if (obj.value instanceof Vector4) return 'vec4';
        if (obj.value instanceof Color) return 'vec3';
    }

    async function initBehavior(behavior) {
        let glsl = [];
        let predefinedUniforms = {'HZ': 'float'};
        let input;
        if (!_behaviorInput) {
            input = InputUIL.create(prefix + '_behavior', _group);
            input.setLabel('Behavior Uniforms');
            input.addTextarea('uniforms');
            input.add('data', 'hidden');
            input.add('codeCount', 'hidden');
            _behaviorInput = input;
        } else {
            input = _behaviorInput;
        }

        let map = {};
        let list = [];
        let count = input.getNumber('codeCount') || 0;
        let data = input.get('data') || [];

        let panel = ListUIL.create(prefix + '_code', _group);
        panel.setLabel('Behavior Code');

        panel.onAdd((name, input, index) => {
            if (!list[index]) addCode();
            input.group.add(list[index].group);
            list[index].mapId = name;
            map[name] = list[index];

            input.setLabel(map[name].get('name') || 'Code');
        });

        panel.onRemove(name => {
            let postfix = map[name].postfix;
            list.remove(map[name]);
            data.remove(postfix);
            input.setValue('data', JSON.stringify(data));
        });

        panel.onSort(array => {
            let arr = [];
            array.forEach(name => {
                arr.push(map[name].postfix);
            });

            data = arr;
            input.setValue('data', JSON.stringify(data));
        });

        let uniforms = parseUniforms(input.get('uniforms'));
        let createCode = postfix => {
            let input = InputUIL.create(prefix + postfix, _group, true);
            input.prefix = prefix + postfix;
            input.postfix = postfix;

            input.setLabel('Editor');
            input.add('name', 'hidden');

            if (Proton.ignorePresets) {
                if (Proton.ignorePresets.includes(input.get('name'))) return;
            }

            ProtonPresets.bind(input);

            if (input.customPresetCallback) input.customPresetCallback(_this);

            let code = input.get('code') || '';
            if (!input.disabled && code.length) {
                uniforms = Utils.mergeObject(uniforms, parseUniforms(input.get('uniforms'), predefinedUniforms));

                while (code.includes('#test ')) {
                    try {
                        let test = code.split('#test ')[1];
                        let name = test.split('\n')[0];
                        let glsl = code.split('#test ' + name + '\n')[1].split('#endtest')[0];

                        if (!eval(name)) {
                            code = code.replace(glsl, '');
                        }

                        code = code.replace('#test ' + name + '\n', '');
                        code = code.replace('#endtest', '');
                    } catch (e) {
                        throw 'Error parsing test :: ' + e;
                    }
                }

                glsl.push(code);
            }

            list.push(input);
        };

        data.forEach(createCode);

        let addCode = _ => {
            count++;
            data.push(`code_${count}`);
            input.setValue('data', JSON.stringify(data));
            input.setValue('codeCount', count);
            createCode(`code_${count}`)
        };

        if (behavior instanceof AntimatterPass) {
            behavior.addInput('tOrigin', _antimatter.vertices);
            behavior.addInput('tAttribs', _antimatter.attribs);
            behavior.addUniforms(uniforms);
        }

        let filledRequire = [];

        let insertUniform = (code, line) => code.split('//uniforms').join(line+'\n//uniforms');
        let insertCode = (code, line) => code.split('//code').join(line+'\n//code');
        let insertRequire = (code, line) => {
            let name = line.split('require(')[1].split(')')[0];
            if (filledRequire.includes(name)) return code;
            filledRequire.push(name);
            return code.split('//require').join(Shaders.getShader(name)+'\n//require');
        };
        let insertGLSL = (code, line) => {
            if (line.includes('#require')) {
                let split = line.split('\n');
                for (let l of split) {
                    if (l.includes('#require')) code = insertRequire(code, l);
                    else code = insertCode(code, l);
                }
                return code;
            } else {
                return insertCode(code, line);
            }
        };

        behavior.onCreateShader = code => {
            for (let name in uniforms) {
                code = insertUniform(code, `uniform ${getUniformGLSLType(uniforms[name])} ${name};`);
            }

            for (let name in predefinedUniforms) {
                code = insertUniform(code, `uniform ${predefinedUniforms[name]} ${name};`);
            }

            for (let str of glsl) {
                code = insertGLSL(code, str);
            }

            if (_this.tubes) code = _this.tubes.overrideShader(code);

            if (Renderer.type == Renderer.WEBGL2) code = code.replace(/gl_FragColor/g, 'FragColor');

            if (code.includes('samplerExternalOES') && window.AURA && Device.system.os == 'android') {
                code = '#version 300 es\n#extension GL_OES_EGL_image_external_essl3 : require\n' + code.replace('#version 300 es', '');
            }

            return code;
        };

        behavior.uniforms.uMaxCount = {value: _this.particleCount, ignoreUIL: true};
        ShaderUIL.add(behavior, _group).setLabel('Behavior Shader');

        behavior.uniforms.HZ = {value: 1};
        _this.startRender(_ => {
            behavior.uniforms.HZ.value = Render.HZ_MULTIPLIER;
        }, 10);

        ProtonPresets.onCodeEdit = rebuildShader;
    }

    async function rebuildShader() {
        let lifecycle = _config.get('type') == 'lifecycle';
        let behavior = _this.initClass(AntimatterPass, `ProtonAntimatter${lifecycle ? 'Lifecycle' : ''}`, {unique: prefix, customCompile: prefix + Utils.uuid()});
        await initBehavior(behavior);
        behavior.initialize(64);
        behavior.upload();
        if (_this.behavior.shader._gl) _this.behavior.shader._gl = behavior.shader._gl;
        if (_this.behavior.shader._metal) _this.behavior.shader._metal = behavior.shader._metal;
        if (_this.behavior.shader._gpu) _this.behavior.shader._gpu = behavior.shader._gpu;
    }

    function completeShader(shader) {
        let transparent = _input.get('transparent');
        let depthWrite = _input.get('depthWrite');
        let depthTest = _input.get('depthTest');
        let blending = _input.get('blending');
        let castShadow = _input.get('castShadow');
        let receiveShadow = _input.get('receiveShadow');

        if (typeof depthWrite === 'boolean') shader.depthWrite = depthWrite;
        if (typeof depthTest === 'boolean') shader.depthTest = depthTest;
        if (typeof transparent === 'boolean') shader.transparent = transparent;
        if (typeof castShadow === 'boolean') _this.mesh.castShadow = castShadow;
        if (typeof receiveShadow === 'boolean') shader.receiveShadow = receiveShadow;
        if (blending) shader.blending = blending;

        shader.uniforms.tRandom = {value:_antimatter.attribs};
    }

    function update() {
        if (!_this.preventUpdate) _antimatter.update();
    }

    async function initAntimatter() {
        let lifecycle = _config.get('type') == 'lifecycle';

        _config.addVector('width', [-1, 1]);
        _config.addVector('height', [-1, 1]);
        _config.addVector('depth', [-1, 1]);

        let dimensions = {w: _config.get('width') || [-1, 1], h: _config.get('height') || [-1, 1], d: _config.get('depth') || [-1, 1]};
        _antimatter = _this.initClass(Antimatter, _size, dimensions);

        if (Proton.forceCloneVertices.includes(_config.get('class'))) _antimatter.cloneVertices = true;

        _this.antimatter = _antimatter;
        await _antimatter.ready();

        let output = _config.get('output');
        if (output == 'tubes') _this.tubes = _this.initClass(ProtonTubes, _this);

        let wildcard = _input.get('wildcard');
        if (wildcard && wildcard.includes('.behavior')) {
            let layer = await _this.parent.getLayer(wildcard.split('.')[0]);
            await _this.wait(layer, 'behavior');
            _this.behavior = layer.behavior;
        } else {
            let behavior = _this.initClass(AntimatterPass, `ProtonAntimatter${lifecycle ? 'Lifecycle' : ''}`, {unique: prefix, customCompile: prefix});
            _this.behavior = behavior;
            initBehavior(behavior);
        }

        let overrideShader;
        let shaderName = _config.get('shader');
        if (shaderName) {
            if (shaderName.includes('.shader')) {
                let layer = await _this.parent.getLayer(shaderName.split('.')[0]);
                await _this.wait(layer, 'shader');
                overrideShader = layer.shader;
            } else {
                let uniforms = parseUniforms(_config.get('uniforms'));
                uniforms.unique = prefix + (_this.onGenerateUniqueShader ? _this.onGenerateUniqueShader() : '');
                _antimatter.useShader(shaderName, uniforms);
            }
        }

        _antimatter.addPass(_this.behavior);
        _this.mesh = _antimatter.getMesh();
        if (_this.onCreateMesh) _this.onCreateMesh(_this.mesh);

        if (!output || output == 'particles') {
            _this.delayedCall(_ => {
                _this.add(_antimatter.mesh);
            }, 16 * 30);
        }
        if (!Utils.query('uilOnly')) _this.startRender(update, RenderManager.AFTER_LOOPS);

        if (shaderName && !shaderName.includes('.shader')) {
            ShaderUIL.add(_antimatter.shader, _group).setLabel('Shader');
            completeShader(_antimatter.shader);
        }

        if (overrideShader) _antimatter.overrideShader(overrideShader);
        _this.shader = _antimatter.shader;

        _this.initialized = true;
        if (lifecycle) _this.spawn = _this.initClass(AntimatterSpawn, _this, _group, _input);
        initCustomClass();
    }

    //*** Event handlers

    //*** Public methods
    this.parseUniforms = parseUniforms;

    this.ready = function() {
        return this.wait(this, 'initialized');
    }

    this.applyToInstancedGeometry = function(geometry) {
        geometry.addAttribute('lookup', new GeometryAttribute(_antimatter.getLookupArray(), 3, 1));
        geometry.addAttribute('random', new GeometryAttribute(_antimatter.getRandomArray(), 4, 1));
    }

    this.applyToShader = function(shader) {
        shader.addUniforms({
            tPos: _antimatter.getOutput(),
            tPrevPos: _antimatter.getPrevOutput()
        });
    }

    this.upload = async function() {
        if (_this.disabled) return;
        _this.group.visible = false;
        await this.ready();
        await _antimatter.upload();
        if (_this.spawn) await _this.spawn.upload();
        if (_this.tubes) await _this.tubes.upload();
        _this.group.visible = true;
    }

    this.uploadSync = async function() {
        if (_this.disabled) return;
        // Dev.startTimer();
        await this.ready();
        await _antimatter.uploadSync();
        if (_this.spawn) await _this.spawn.upload();
        if (_this.tubes) await _this.tubes.uploadSync();
        // Dev.stopTimer();
    }

    this.stopUpdating = function() {
        _this.stopRender(update);
    }

    this.set('renderOrder', async v => {
        await _this.ready();
        await _antimatter.ready();
        _antimatter.mesh.renderOrder = v;
    });

    this.get('renderOrder', v => {
       return _antimatter.mesh.renderOrder;
    });

}, _ => {
    Proton.forceCloneVertices = [];
    Proton.ignore = function(name) {
        if (!Proton.ignorePresets) Proton.ignorePresets = [];
        Proton.ignorePresets.push(name);
    }
});
Class(function ProtonPresets() {
    const _this = this;

    const LIST = [
        {label: 'Custom Code', value: 'custom'},
        {label: 'Curl Noise', value: 'curl'},
        {label: 'Sine Move', value: 'sine'},
        {label: 'Plane Shape', value: 'planeshape'},
        {label: '3D Shape', value: '3dshape'},
        {label: 'Point Cloud', value: 'pointcloud'},
        {label: 'Force', value: 'force'},
        {label: 'Follow', value: 'follow'},
        {label: 'Mouse Fluid', value: 'fluid'}
    ];

    const CALLBACKS = {
        'custom': customCode,
        'curl': curlNoise,
        'sine': sineMove,
        'planeshape': planeShape,
        '3dshape': shape3D,
        'pointcloud': pointCloud,
        'force': force,
        'follow': follow,
        'fluid': fluid,
    };

    function customCode(input) {
        input.setValue('name', 'Custom Code');
        input.setLabel('Custom Code');
    }

    function sineMove(input) {
        input.setValue('name', 'Sine Move');
        input.setLabel('Sine Move');

        let uniforms = `
        uSinSpeed: 1
        uSinMovement: 0
        `;

        let code = `pos = origin;
pos.x += sin(time*uSinSpeed + radians(360.0 * random.x)) * 0.03 * random.z * uSinMovement;
pos.y += sin(time*uSinSpeed + radians(360.0 * random.y)) * 0.03 * random.w * uSinMovement;
pos.z += sin(time*uSinSpeed + radians(360.0 * random.w)) * 0.03 * random.x * uSinMovement;`;

        input.setValue('uniforms', uniforms);
        setPresetCodeIfRequired(input, code, 'uSinSpeed');
    }

    function curlNoise(input) {
        input.setValue('name', 'Curl Noise');
        input.setLabel('Curl Noise');

        let uniforms = `
        uCurlNoiseScale: 1
        uCurlTimeScale: 0
        uCurlNoiseSpeed: 0
        `;

        let code = `#require(curl.glsl)

vec3 curl = curlNoise(pos * uCurlNoiseScale*0.1 + (time * uCurlTimeScale * 0.1));
pos += curl * uCurlNoiseSpeed * 0.01 * HZ;`;

        input.setValue('uniforms', uniforms);
        setPresetCodeIfRequired(input, code, 'uCurlNoise');
    }

    function fluid(input) {
        input.setValue('name', 'Mouse Fluid');
        input.setLabel('Mouse Fluid');

        let code = `#require(glscreenprojection.glsl)

vec3 mpos = vec3(uModelMatrix * vec4(pos, 1.0));
vec2 screenUV = getProjection(mpos, uProjMatrix);
vec3 flow = vec3(texture2D(tFluid, screenUV).xy, 0.0);
applyNormal(flow, uProjNormalMatrix);
pos += flow * 0.0001 * uMouseStrength * texture2D(tFluidMask, screenUV).r;`;

        let uniforms = `
        uProjMatrix: Cmat4
        uProjNormalMatrix: Cmat4
        uModelMatrix: Cmat4
        tFluidMask: Csampler2D
        tFluid: Csampler2D
        uMouseStrength: 1
        `;

        input.setValue('uniforms', uniforms);
        setPresetCodeIfRequired(input, code, 'glscreenprojection');

        let findCamera = proton => {
            let camera = World.CAMERA;
            let p = proton.group._parent;
            while (p) {
                if (p instanceof Scene) {
                    if (p.nuke) camera = p.nuke.camera;
                }
                p = p._parent;
            }
            return camera;
        };

        input.customPresetCallback = async proton => {
            if (!('MouseFluid' in window)) {
                alert(`'mousefluid' module not found. To use Mouse Fluid preset, import module, load the MouseFluid \
class, and add a layer named 'fluid' with customCLass FluidLayer.`)
                return;
            }

            let camera = findCamera(proton);
            let projection = proton.initClass(GLScreenProjection, camera);
            projection.start();
            proton.projection = projection;

            proton.wait('behavior').then(_ => {
                proton.behavior.addUniforms({
                    uProjMatrix: projection.uniforms.projMatrix,
                    uModelMatrix: projection.uniforms.modelMatrix,
                    uProjNormalMatrix: projection.uniforms.normalMatrix,
                });

                MouseFluid.instance().applyTo(proton.behavior);
            });
        };
    }

    function planeShape(input) {
        input.setValue('name', 'Plane Shape');
        input.setLabel('Plane Shape');

        let uniforms = `
        uTakePlaneShape: 1
        uPlaneScale: 1
        tPlaneTexture: Csampler2D
        `;

        let code = `vec2 planeLookup = texture2D(tPlaneTexture, uv).xy;
vec3 plane;
plane.x = uPlaneScale * 0.5 * range(planeLookup.x, 0.0, 1.0, -1.0, 1.0);
plane.y = uPlaneScale * 0.5 * -range(planeLookup.y, 0.0, 1.0, -1.0, 1.0);
if (uTakePlaneShape > 0.5) pos = plane;`;

        input.setValue('uniforms', uniforms);
        setPresetCodeIfRequired(input, code, 'uPlaneScale');

        input.customPresetCallback = proton => {
            proton.behavior.addUniforms({
                tPlaneTexture: {value: null}
            });
        };
    }

    function shape3D(input) {
        input.setValue('name', '3D Shape');
        input.setLabel('3D Shape');

        input.add('geometry');
        let geometry = input.get('geometry');

        let uniforms = `
        tShape3D: Csampler2D
        `;
        let code = `vec3 shape3d = texture2D(tShape3D, uv).xyz;`

        input.setValue('uniforms', uniforms);
        setPresetCodeIfRequired(input, code, 'tShape3D');

        input.customPresetCallback = proton => {
            let create = async g => {
                let geom = await GeomThread.loadGeometry(g);
                let distribution = await ParticleDistributor.generate(geom, proton.antimatter.particleCount);
                let attribute = new AntimatterAttribute(distribution, 3);
                proton.behavior.addInput('tShape3D', attribute);
            };

            if (geometry) create(geometry);
            proton.set3DShape = create;
        };
    }

    function pointCloud(input) {
        input.setValue('name', 'Point Cloud');
        input.setLabel('Point Cloud');

        input.add('file');
        let file = input.get('file');

        let uniforms = `
        tPointCloud: Csampler2D
        `;
        let code = `vec3 pointShape = texture2D(tPointCloud, uv).xyz;`;

        input.setValue('uniforms', uniforms);
        setPresetCodeIfRequired(input, code, 'tPointCloud');

        input.customPresetCallback = proton => {
            let create = async filePath => {
                let data;
                if (typeof filePath === 'string') {
                    filePath += '-' +  proton.antimatter.powerOf2;
                    data = await ParticleDistributor.generatePointCloud(filePath, proton.antimatter.particleCount);
                } else {
                    data = filePath;
                }

                if (proton.behavior.shader.uniforms.tPointCloud) {
                    proton.behavior.shader.uniforms.tPointCloud.value.destroy();
                    proton.shader.uniforms.tPointColor.value.destroy();
                }

                proton.behavior.addInput('tPointCloud', data.positions);
                proton.shader.addUniforms({
                    tPointColor: { value: data.colors },
                });
            };

            if (!file) file = proton.parent.data ? proton.parent.data.pointCloudFile : undefined;
            if (file) create(file);
            proton.setPointCloud = create;
        };
    }

    function force(input) {
        input.setValue('name', 'Force');
        input.setLabel('Force');

        let uniforms = `
        uForceDir: [0, 1, 0]
        uForceScale: 1
        `;

        let code = `vec3 force = normalize(uForceDir) * uForceScale * 0.1;
pos += force * HZ;`;

        input.setValue('uniforms', uniforms);
        setPresetCodeIfRequired(input, code, 'uForceDir');
    }

    function follow(input) {
        input.setValue('name', 'Follow');
        input.setLabel('Follow');

        let uniforms = `
        uFollowPos: [0, 0, 0]
        uFollowRadius: 2
        uFollowLerp: 0.7
        `;

        let code = `float speed = range(random.x, 0.0, 1.0, 0.5, 1.5);
vec3 followPos = uFollowPos;
followPos.x += range(random.y, 0.0, 1.0, -1.0, 1.0) * uFollowRadius;
followPos.y += range(random.z, 0.0, 1.0, -1.0, 1.0) * uFollowRadius;
followPos.z += range(random.w, 0.0, 1.0, -1.0, 1.0) * uFollowRadius;
pos += (followPos - pos) * (uFollowLerp*0.1*speed*HZ);`;

        input.setValue('uniforms', uniforms);
        setPresetCodeIfRequired(input, code, 'followPos');
    }

    function setPresetCodeIfRequired(input, presetCode, keyShaderComponentString) {
        const editorCode = input.get('code');
        if (!editorCode || !editorCode.includes(keyShaderComponentString)) {
            input.setValue('code', presetCode);
        }
    }

    //*** Event handlers

    //*** Public methods
    this.register = function(name, callback) {
        let key = name.replace(/ /g, '').toLowerCase();
        LIST.push({label: name, value: key});
        CALLBACKS[key] = callback;
    }

    this.bind = function(input) {
        input.add('code', 'hidden');

        let editCode = _ => {
            let editor = new UILExternalEditor(input.get('name') || 'Code', 300);
            editor.setCode(input.get('code'), 'c');
            editor.onSave = value => {
                input.setValue('code', value);
                _this.onCodeEdit?.();
            };
            UIL.add(editor);
        };

        input.add('uniforms', 'hidden');

        input.addSelect('preset', LIST);

        let callback = CALLBACKS[input.get('preset')];
        if (callback) callback(input);

        input.addButton('btn', {actions: [{title:'Edit Code', callback: editCode}], hideLabel:true});
    }
}, 'static');
Class(function Text3D(_input, _group) {
    Inherit(this, Object3D);
    const _this = this;
    var _config, _fontObject;
    var $text;

    this.translate = new Vector3();
    this.rotate = new Vector3();

    _this.wildcard = _input.get('wildcard');

    //*** Constructor
    (async function () {
        _this.group.text = _this;

        initUIL();
        initText();

        if (Text3D.onCreate) Text3D.onCreate(_this);
    })();

    function initUIL() {
        _config = InputUIL.create(_input.prefix + '_text3d', _group);
        _config.setLabel('Text3D');
        _config.addTextarea('text').addTextarea('fontStyle');
        _config.addToggle('anchor2D', false);
        _config.addToggle('renderRetina', false);
        _config.add('data', 'hidden');

        if (UIL.sidebar) {
            _config.onUpdate = key => {
                if (key != 'data') {
                    let text = parseData(_config.get('text'));
                    let obj = getFontObject();
                    _config.setValue('data', JSON.stringify(obj));
                    if ($text) {
                        $text.setText(text, obj);
                        if (obj.color) $text.setColor(obj.color);
                    }
                    if (_this.onUpdate) _this.onUpdate();
                }
            };
        }
    }

    function parseData(text) {
        if (!text || !text.includes('$DATA')) return text;
        while (text.includes('$DATA')) {
            let code = text.split('$DATA')[1].split(' ')[0].split('\n')[0];
            let line = '$DATA' + code;
            text = text.replace(line, eval(line.replace('$DATA', '_this.parent.data')));
        }
        return text;
    }

    function getFontObject() {
        let font = _config.get('fontStyle') || '';
        let obj = {};
        font = font.split('\n');
        font.forEach(line => {
            line = line.split(':');
            let key = line[0];
            let val = line[1];
            if (val) val = val.replace(/ /g, '');
            if (key.length) {
                obj[key] = isNaN(Number(val)) ? val : Number(val);
                if (val === 'false') obj[key] = false;
                if (val === 'true') obj[key] = true;
            }
        });
        return obj;
    }

    function initText() {
        _fontObject = JSON.parse(_config.get('data') || '{}');
        if (!_fontObject.size) return;

        if (Text3D.FONT_CONFIG) {
            _fontObject.config = Text3D.FONT_CONFIG;
        }

        if (Text3D.LANG_BREAK) {
            _fontObject.langBreak = Text3D.LANG_BREAK;
        }

        if (!_fontObject.shader) _fontObject.shader = 'Text3D';

        let text = parseData(_config.get('text'));
        if (!text) return;

        createText(text, _fontObject);
    }

    async function overrideLocalize(text, fontObject, cb) {
        if (!text) return;

        _this.localized = true;

        fontObject.text = text;

        if (_this.text && _this.text.destroy) _this.text.destroy();

        _this.text = new Text3D.FallbackText();
        _this.text.setColor(_fontObject.color);
        _this.text.onSetText = text => _this.setText(text);

        let createMesh = texture => {
            _this.text.setColor(fontObject.color);
            let geom = new PlaneGeometry(texture.width, texture.height);
            geom.computeBoundingBox();
            if (fontObject.align != 'center') geom.applyMatrix(new Matrix4().makeTranslation(texture.width/2, 0, 0));

            while (_this.group.children.length) _this.group.remove(_this.group.children[0]);

            _this.text.createMesh(geom, texture);
            _this.add(_this.text.group);

            return _this.text;
        };

        Text3D.createFallbackTexture(text, fontObject).then(createMesh);
    }

    function createText(text, fontObject) {
        if (fontObject.localize || _input.forceLocalize) {
            if (Text3D.missingChars(text, fontObject)) return overrideLocalize(text, fontObject);
        }

        $text = $glText(text, null, null, fontObject);
        $text.enable3D(_config.get('anchor2D'));
        if (_config.get('renderRetina')) {
            if (!$text.anchor) $text.anchor = new Group();
            _this.add($text.anchor);
            GLUI.Scene.add($text);
        } else {
            _this.add($text.group);
        }

        $text.text.onCreateShader = shader => {
            let shaderName = _input.get('shader');
            if (shaderName) {
                if (shader.fragmentShader?.length) shader.fragmentShader = shader.fragmentShader.split('void main')[0] + '\n' + Shaders.getShader(shaderName+'.fs');
                shader.customCompile = shaderName;
            }

            $text.text3d = _this;

            if (window[shaderName]) {
                _this.shaderClass = _this.parent.initClass(window[shaderName], $text, shader, _group, _input);
                ShaderUIL.add(shader, _group).setLabel('Shader');
            }
        };

        _this.text = $text;

        let setText = $text.setText.bind($text);
        $text.setText = function(text, obj) {
            if (obj) {
                for (let key in obj) _fontObject[key] = obj[key];
            }

            _fontObject.text = text;
            setText(text, _fontObject);
            _this.events.fire(Events.UPDATE);
            defer( setUniforms );
        };

        $text.loaded().then(_ => {
            if (!$text) return;
            _this.shader = $text.mesh.shader;
            _this.shader.addUniforms({
                uTransition: {value: 5, ignoreUIL: true},
                uTranslate: {value: _this.translate, ignoreUIL: true},
                uRotate: {value: _this.rotate, ignoreUIL: true},
                uWordCount: {value: 0, ignoreUIL: true},
                uLetterCount: {value: 0, ignoreUIL: true},
                uLineCount: {value: 0, ignoreUIL: true},
                uByWord: {value: 0, ignoreUIL: true},
                uByLine: {value: 0, ignoreUIL: true},
                uPadding: {value: 0.3, ignoreUIL: true},
                uBoundingMin: {value: new Vector3().copy($text.dimensions.min), ignoreUIL: true},
                uBoundingMax: {value: new Vector3().copy($text.dimensions.max), ignoreUIL: true},
            });


            Text3D.onCreateShader && Text3D.onCreateShader(_this.shader);
        });

        setUniforms();
    }

    async function setUniforms() {
        await _this.wait(_this, 'shader');
        await $text.loaded();
        if (_input && _input.get) {
            let depthWrite = _input.get('depthWrite');
            let depthTest = _input.get('depthTest');
            if (typeof depthWrite === 'boolean') $text.mesh.shader.depthWrite = depthWrite;
            if (typeof depthTest === 'boolean') $text.mesh.shader.depthTest = depthTest;

            let blending = _input.get('blending');
            if (blending) $text.mesh.shader.blending = blending;
        }
        _this.shader.set('uWordCount', $text.mesh.geometry.wordCount);
        _this.shader.set('uLetterCount', $text.mesh.geometry.letterCount);
        _this.shader.set('uLineCount', $text.mesh.geometry.lineCount);
        _this.shader.set('uBoundingMin', new Vector3().copy($text.dimensions.min));
        _this.shader.set('uBoundingMax', new Vector3().copy($text.dimensions.max));
    }

    //*** Event handlers

    //*** Public methods
    this.get('fontObject', _ => {
        return _fontObject;
    });

    this.setProperties = function(obj = _fontObject) {
        if (!$text) {
            createText(obj.text, obj);
        } else {
            $text.setText(obj.text, obj);
            setUniforms();
        }
        return _this.text.loaded();
    }

    this.setPropertiesCheck = function(obj, force) {
        let applyProperties = false;
        for (const key in obj) {
            if (_fontObject[key] !== obj[key]) {
                applyProperties = true;
                _fontObject[key] = obj[key];
            }
        }

        if (applyProperties || force) {
            return _this.setProperties();
        } else {
            return Promise.resolve();
        }
    }

    this.setText = function(text) {
        _fontObject.text = text;
        if ($text) {
            if (_fontObject.localize && Text3D.missingChars(text, _fontObject)) {
                _this.group.remove($text.group);
                _this.shader = undefined;
                $text = null;
                createText(text, _fontObject);
                return;
            }

            $text.setText(text);
            setUniforms();
            if ($text.mesh) {
                $text.mesh.onBeforeRender();
                $text.mesh.updateMatrixWorld(true);
            }
        } else {
            createText(text, _fontObject);
        }
    }

    this.setColor = function(color) {
        _fontObject.color = color;
        if (_this.text) _this.text.setColor(color);
    }

    this.set('animateByWord', async bool => {
        if (_this.localized) return;
        await _this.wait(_this, 'shader');
        _this.shader.set('uByWord', bool ? 1 : 0);
    });

    this.set('animateByLine', async bool => {
        if (_this.localized) return;
        await _this.wait(_this, 'shader');
        _this.shader.set('uByLine', bool ? 1 : 0);
    });

    this.set('animationPadding', async p => {
        if (_this.localized) return;
        await _this.wait(_this, 'shader');
        _this.shader.set('uPadding', p);
    });

    this.set('transition', async v => {
        if (_this.localized) return _this.text.alpha = v;
        await _this.wait(_this, 'shader');
        _this.shader.set('uTransition', v > 0 ? 1.5 : -0.5);
    });

    this.tween = async function(val, time, ease, delay) {
        if (_this.localized) return _this.text.tween(val, time, ease, delay);
        await _this.wait(_this, 'shader');
        return _this.shader.tween('uTransition', val > 0 ? 1.5 : -0.5, time, ease, delay);
    }

    this.upload = function() {
        if ($text) $text.upload();
    }

    this.ready = function() {
        return _this.wait(_this, 'shader');
    }

    this.set('renderOrder', v => {
        if ($text) $text.setZ(v);
    });

    this.getDimensions = async _ => {
        await $text.loaded();
        await $text.text.ready();
        return $text.dimensions;
    }

}, _ => {
    var _projection;

    Text3D.missingChars = function() {
        return false;
    }

    Text3D.measureScreen = async function($text, camera = World.CAMERA, z = 0) {
        if (!_projection) _projection = new ScreenProjection(World.CAMERA);

        if ($text instanceof Text3D) $text = $text.text;
        await $text.loaded();

        $text.mesh.onBeforeRender();
        $text.mesh.updateMatrixWorld(true);
        await defer();

        _projection.camera = camera;

        let bb = new Box3();
        bb.setFromObject($text.mesh);
        bb.min.z = bb.max.z = z;
        let min = _projection.project(bb.min).clone();
        let max = _projection.project(bb.max).clone();

        return {width: Math.abs(min.x - max.x), height: Math.abs(min.y - max.y)};
    }
});
Namespace('FX');
FX.Class(function UnrealBloom(_nuke, options, _unique) {
    Inherit(this, Component);
    var _this = this;

    if (typeof options === 'string') {
        _unique = _params;
        options = {};
        _nuke = World.NUKE;
    } else if (typeof _nuke === 'string') {
        _unique = _nuke;
        options = {};
        _nuke = World.NUKE;
    } else if (_nuke && !(_nuke instanceof Nuke)) {
        options = _nuke;
        _nuke = World.NUKE;
    } else {
        _nuke = _nuke || World.NUKE;
        options = options || {};
        _unique = _unique || '';
    }

    var _triangleGeometry, _luminosityShader, _compositeShader, _mesh, _inputTexture;
    var _oldClearColor = new Color();
    var _oldClearAlpha = 1;
    var _renderTargetsHorizontal = [];
    var _renderTargetsVertical = [];
    var _separableBlurShaders = [];
    var _nMips = options.nMips || 5;
    var _DPR = _nuke.dpr;
    var _blurDirectionX = new Vector2(_DPR, 0.0);
    var _blurDirectionY = new Vector2(0.0, _DPR);
    var _kernelSizeArray = options.kernelSizeArray || [3, 5, 7, 9, 11];
    var _bloomFactors = options.bloomFactors || [1.0, 0.8, 0.6, 0.4, 0.2];
    var _useRTPool = options.useRTPool || false;

    this.uniforms = { tUnrealBloom: { value: null, ignoreUIL: true }, unique: _unique };
    this.resolution = new Vector2(_nuke.stage.width * _DPR, _nuke.stage.height * _DPR);
    this.clearColor = new Color(0, 0, 0);

    this.enabled = typeof options.enabled == 'boolean' ? options.enabled : true;
    this.outputTexture = null;

    //*** Constructor
    (function() {
        initRTs();
        initScene();
        initBlurShaders();
        initCompositeShader();
        initPass();
        addListeners();

        if (!options.noUIL) {
            ShaderUIL.add(_luminosityShader).setLabel('UnrealBloom Luminosity');
            ShaderUIL.add(_compositeShader).setLabel('UnrealBloom Composite');
        }
    })();

    function initRTs() {
        if (_useRTPool) {
            RTPool.instance(null, 3, Texture.RGBAFormat).disableResize();
            return;
        }

        let pars = { minFilter: Texture.LINEAR, magFilter: Texture.LINEAR, format: Texture.RGBAFormat };
        let resx = Math.round(_this.resolution.x / 2);
        let resy = Math.round(_this.resolution.y / 2);

        _this.renderTargetBright = new RenderTarget(resx, resy, pars);
        _this.renderTargetBright.texture.generateMipmaps = false;

        for (let i = 0; i < _nMips; i++) {
            let renderTargetHorizonal = new RenderTarget(resx, resy, pars);
            renderTargetHorizonal.texture.generateMipmaps = false;
            _renderTargetsHorizontal.push(renderTargetHorizonal);

            let renderTargetVertical = new RenderTarget(resx, resy, pars);
            renderTargetVertical.texture.generateMipmaps = false;
            _renderTargetsVertical.push(renderTargetVertical);

            resx = Math.round(resx / 2);
            resy = Math.round(resy / 2);
        }

        _this.outputTexture = _renderTargetsHorizontal[0].texture;
        _this.uniforms.tUnrealBloom.value = _renderTargetsHorizontal[0].texture;
    }

    function initScene() {
        _triangleGeometry = World.QUAD;

        _luminosityShader = _this.initClass(Shader, 'UnrealBloomLuminosity', {
            tDiffuse: { value: null, ignoreUIL: true },
            luminosityThreshold: { value: 1.0 },
            smoothWidth: { value: 0.01, ignoreUIL: true },
            defaultColor: { value: new Color(0x000000), ignoreUIL: true },
            defaultOpacity: { value: 0.0, ignoreUIL: true },
            unique: _unique,
        });

        _mesh = new Mesh(_triangleGeometry, _luminosityShader);
        _mesh.frustumCulled = false;
    }

    function initBlurShaders() {
        // Gaussian Blur Shaders
        let resx = Math.round(_this.resolution.x / 2);
        let resy = Math.round(_this.resolution.y / 2);

        for (let i = 0; i < _nMips; i++) {
            let shader = _this.initClass(Shader, 'UnrealBloomGaussian', {
                unique: _unique,
                colorTexture: { value: null },
                texSize: { value: new Vector2(resx, resy) },
                direction: { value: new Vector2(0.5, 0.5) },
            }, null, glsl => `\n#define KERNEL_RADIUS ${_kernelSizeArray[i]}\n#define SIGMA ${_kernelSizeArray[i]}\n${glsl}`, `gaussian${i}`);
            _separableBlurShaders.push(shader);

            resx = Math.round(resx / 2);
            resy = Math.round(resy / 2);
        }
    }

    function initCompositeShader() {
        let uniforms = {
            bloomStrength: { value: 1 },
            bloomTintColor: { value: new Color('#ffffff') },
            bloomRadius: { value: 0 },
            unique: _unique
        };

        for (let i = 0; i < _nMips; i++) {
            uniforms[`blurTexture${i + 1}`] = { value: _useRTPool ? null : _renderTargetsVertical[i].texture, ignoreUIL: true };
        }

        _compositeShader = _this.initClass(Shader, 'UnrealBloomComposite', uniforms, null, (glsl, type) => {
            if (type === 'vs') return glsl;

            let compositeUniforms = '';
            let compositeMain = '';
            for (let i = 0; i < _nMips; i++) {
                compositeUniforms += `uniform sampler2D blurTexture${i + 1};\n`;
                compositeMain += `lerpBloomFactor(${_bloomFactors[i].toFixed(4)}) * vec4(bloomTintColor, 1.0) * texture2D(blurTexture${i + 1}, vUv) ${(i < (_nMips - 1) ? '+ ' : '')}`;
            }

            glsl = glsl.replace('uniform sampler2D blurTexture1;', compositeUniforms);
            return glsl.replace('lerpBloomFactor(1.0) * vec4(bloomTintColor, 1.0) * texture2D(blurTexture1, vUv)', compositeMain);
        });
        _compositeShader.needsUpdate = true;
    }

    function initPass() {
        _this.pass = _this.initClass(NukePass, 'UnrealBloomPass', _this.uniforms);
    }

    function render() {
        if (!_this.enabled || _this.visible === false) return;

        let renderer = _nuke.renderer;

        _oldClearColor.copy(renderer.getClearColor());
        _oldClearAlpha = renderer.getClearAlpha();
        let oldAutoClear = renderer.autoClear;
        renderer.autoClear = true;

        renderer.setClearColor(_this.clearColor, 0);

        // 1. Extract Bright Areas
        _luminosityShader.uniforms.tDiffuse.value = _inputTexture || _nuke.rttBuffer.texture;
        _mesh.shader = _luminosityShader;
        renderer.renderSingle(_mesh, _nuke.camera, _this.renderTargetBright);

        // 2. Blur All the mips progressively
        let inputRenderTarget = _this.renderTargetBright;

        for (let i = 0; i < _nMips; i++) {
            _mesh.shader = _separableBlurShaders[i];

            _separableBlurShaders[i].uniforms.colorTexture.value = inputRenderTarget.texture;
            _separableBlurShaders[i].uniforms.direction.value = _blurDirectionX;
            renderer.renderSingle(_mesh, _nuke.camera, _renderTargetsHorizontal[i]);

            _separableBlurShaders[i].uniforms.colorTexture.value = _renderTargetsHorizontal[i].texture;
            _separableBlurShaders[i].uniforms.direction.value = _blurDirectionY;
            renderer.renderSingle(_mesh, _nuke.camera, _renderTargetsVertical[i]);

            inputRenderTarget = _renderTargetsVertical[i];
        }

        // 3. Composite all the mips
        _mesh.shader = _compositeShader;
        renderer.renderSingle(_mesh, _nuke.camera, _renderTargetsHorizontal[0]);

        renderer.setClearColor(_oldClearColor, _oldClearAlpha);
        renderer.autoClear = oldAutoClear;
    }

    function resizeHandler() {
        _this.resolution.set(_nuke.stage.width, _nuke.stage.height).multiplyScalar(_DPR);

        _blurDirectionX.x = _DPR;
        _blurDirectionY.y = _DPR;

        let resx = Math.round(_this.resolution.x / 2);
        let resy = Math.round(_this.resolution.y / 2);

        if (_this.renderTargetBright) _this.renderTargetBright.setSize(resx, resy);

        for (var i = 0; i < _renderTargetsHorizontal.length; i++) {
            _renderTargetsHorizontal[i].setSize(resx, resy);
            _renderTargetsVertical[i].setSize(resx, resy);

            _separableBlurShaders[i].uniforms['texSize'].value = new Vector2(resx, resy);

            resx = Math.round(resx / 2);
            resy = Math.round(resy / 2);
        }
    }

    //*** Event handlers

    function addListeners() {
        _this.events.sub(Events.RESIZE, resizeHandler);
        _this.startRender(render, RenderManager.POST_RENDER);
    }

    //*** Public methods

    this.set('texture', texture => {
        _inputTexture = texture;
    });

    this.get('luminosityShader', _ => _luminosityShader);
    this.get('compositeShader', _ => _compositeShader);

    this.set('dpr', dpr => {
        _DPR = dpr;
        resizeHandler();
    });

    this.renderBloom = render;
    this.renderMesh = _mesh;

    this.onDestroy = function() {
        _renderTargetsHorizontal.forEach(r => r.destroy());
        _renderTargetsVertical.forEach(r => r.destroy());
        _this.renderTargetBright && _this.renderTargetBright.destroy();
    };

    this.getRTs = function() {
        _this.renderTargetBright = RTPool.instance().getRT();

        for (let i = 0; i < _nMips; i++) {
            _renderTargetsHorizontal.push(RTPool.instance().getRT());
            _renderTargetsVertical.push(RTPool.instance().getRT());
            _compositeShader.uniforms[`blurTexture${i + 1}`].value = _renderTargetsVertical[i].texture;
        }

        _this.outputTexture = _renderTargetsHorizontal[0].texture;
        _this.uniforms.tUnrealBloom.value = _renderTargetsHorizontal[0].texture;

        resizeHandler();
    };

    this.putRTs = function() {
        if (_this.renderTargetBright) RTPool.instance().putRT(_this.renderTargetBright);

        _this.renderTargetBright = null;

        for (let i = 0; i < _renderTargetsHorizontal.length; i++) {
            RTPool.instance().putRT(_renderTargetsHorizontal[i]);
            RTPool.instance().putRT(_renderTargetsVertical[i]);
        }

        _renderTargetsHorizontal = [];
        _renderTargetsVertical = [];
    };
});

Class(function Video(_params) {
    Inherit(this, Component);
    const _this = this;
    let $video;
    let _video;
    let _ready = Promise.create();
    let _loaded = Promise.create();
    let _loadingState;
    let _handlers;
    let _initialPlay = true;

    (function() {
        initParam();
        init();
        addHandlers();
    })();

    function initParam() {
        let defaults = {
            muted: true,
            loop: false,
            autoplay: false,
            inline: true,
            controls: false,
            currentTime: 0,
            playback: 1,
            preload: false,
            width: 640,
            height: 360,
            events: []
        };
        _params = Object.assign(defaults, _params);
    }

    function init() {
        _video = document.createElement('video');
        _video.src = getSource(_params.src);
        _video.setAttribute('crossorigin', 'anonymous');
        _video.autoplay = _params.autoplay;
        _video.loop = _params.loop;
        _video.controls = _params.controls;
        _video.height = _params.height;
        _video.width = _params.width;
        _video.defaultMuted = _params.muted;
        _video.defaultPlaybackRate = _params.playback;
        _video.preload = _params.preload ? 'auto' : 'none';
        _video.muted = _params.autoplay || _params.muted;
        _video.setAttribute('webkit-playsinline', _params.inline);
        _video.setAttribute('playsinline', _params.inline);

        if(_video.autoplay) {
            _video.setAttribute('autoplay', _params.autoplay);
        }
        _video.setAttribute('muted', _params.muted);
        if (_params.loop) _video.setAttribute('loop', _params.loop);

        _this.div = _video;
        $video = $(_video);

        if (_params.autoplay) return startPlayback();
        if (_params.preload) return startPreload();
    }

    function addHandlers() {
        ['loadeddata', 'error'].forEach(ev => {
            if (!_params.events.includes(ev)) _params.events.push(ev);
        });
        _handlers = { play, pause, ended, playing, progress, waiting, timeupdate, loadeddata, canplay, error };
        _params.events.forEach(ev => _video.addEventListener(ev, _handlers[ev], true));
    }

    function startPreload() {
        _loadingState = true;
        _video.load();
        return _ready;
    }

    async function startPlayback() {
        if (_this.playing) return;
        _loadingState = false;
        _video.load();
        if (_video.readyState < 2) await _ready;
        if (_this.playing) return;
        if (_initialPlay) {
            _initialPlay = false;
            _video.currentTime = _params.currentTime; // start from timecode given as param
        }
        _this.playing = true;
        try {
            return await _video.play();
        } catch (error) {
            _this.playing = false;
            throw error;
        }
    }

    //*** Utils

    function getSource(src = '') {
        if (!src.includes(['webm', 'mp4', 'ogv', 'blob'])) src += '.' + Device.media.video;
        return src;
    }

    function removeListeners() {
        _params.events.forEach(ev => _video.removeEventListener(ev, _handlers[ev], true));
    }

    //*** Event Handlers

    function progress(e) {
        _this.events.fire(Video.PROGRESS, e);
    }

    function timeupdate(e) {
        _this.events.fire(Video.UPDATE, e);
    }

    function play(e) {
        // don't fire event if we trigger play() to init the load
        if (_loadingState) return _loadingState = false;
        _this.events.fire(Video.PLAY, e);
    }

    function pause(e) {
        _this.events.fire(Video.PAUSE, e);
    }

    function playing(e) {
        _this.events.fire(Video.PLAYING, e);
    }

    function ended(e) {
        _this.events.fire(Video.ENDED, e);
    }

    function waiting(e) {
        _this.events.fire(Video.WAITING, e);
    }

    function canplay(e) {
        loadeddata();
        _this.events.fire(Video.CANPLAY, e);
    }

    function loadeddata(e) {
        if (_video.readyState >= 2) {
            _ready.resolve();
        }
        if (_video.readyState >= 4) {
            _loaded.resolve();
        }
    }

    function error() {
        if (_this.playing) {
            _this.playing = false;
        }
        _this.events.fire(Video.ERROR, _video.error);
    }

    //*** Getter/Setters

    this.set('loop', bool => _video.loop = bool);
    this.get('loop', () => _video.loop);

    this.set('src', src => {
        src = getSource(src);
        if (src === _video.src) return;
        _ready = Promise.create();
        _loaded = Promise.create();
        _video.src = src;
        if (_this.playing) {
            _this.playing = false;
            startPlayback();
        } else if (_params.preload) {
            startPreload();
        }
    });
    this.get('src', () => _video.currentSrc);

    this.set('volume', v => {
        _video.muted = v === 0;
        _video.volume = v;
    });
    this.get('volume', () => _video.volume);

    this.set('muted', bool => _video.muted = bool);
    this.get('muted', () => _video.muted);

    this.set('controls', bool => _video.controls = bool);
    this.get('controls', () => _video.controls);

    this.get('duration', () => _video.duration);
    this.get('ended', () => _video.ended);
    this.get('playback', () => _video.playbackRate);
    this.get('time', () => _video.currentTime);
    this.get('error', () => _video.error);

    this.get('canRender', () => _video.readyState >= 2);
    this.get('canPlayThrough', () => _video.readyState >= 4);
    this.get('paused', () => _video.paused);

    this.get('element', () => $video);
    this.get('object', () => $video);
    this.get('video', () => _video);

    this.get('bufferedSeconds', _ => {
        if (_video.readyState < 2) return 0;
        return _video.buffered.end(0) - _video.buffered.start(0);
    });

    //*** Public Methods

    this.load = async function() {
        return startPreload();
    }

    this.play = async function() {
        return startPlayback();
    };

    this.pause = function() {
        _this.playing = false;
        _video.pause();
    };

    this.stop = function() {
        _this.playing = false;
        _video.pause();
        _this.seek(0);
    };

    this.seek = function(t) {
        if (_video.fastSeek) return _video.fastSeek(t);
        _video.currentTime = t;
    };

    this.seekExact = function(t) {
        _video.currentTime = t;
    }

    // As soon as media can play (You want this!)
    this.ready = function() {
        //return _this.wait(_this, 'readyEvent');
        return _ready;
    }

    // can be played through to the end without interruption
    this.loaded = function() {
        return _loaded;
    }

    this.onDestroy = function() {
        _this.stop();
        _video.src = '';
        removeListeners();
        _video = null;
    };

}, () => {
    Video.PLAY = 'hydra_video_play';
    Video.CANPLAY = 'hydra_video_can_play';
    Video.PAUSE = 'hydra_video_pause';
    Video.PROGRESS = 'hydra_video_progress';
    Video.UPDATE = 'hydra_video_update';
    Video.PLAYING = 'hydra_video_playing';
    Video.ENDED = 'hydra_video_ended';
    Video.WAITING = 'hydra_video_waiting';
    Video.ERROR = 'hydra_video_error';
});
Class(function VideoTexture(_path, {loop = true, preload = true, autoplay = true, muted = true, firstFrame = false, parseColor = false} = {}) {
    Inherit(this, Component);
    const _this = this;
    let _video, _hasRequestCallback = false;

    //*** Constructor
    (function () {
        let src = _path.includes(['blob', 'http']) ? _path : Assets.getPath(_path);
        if (_path.includes(['jpg', 'png'])) {
            let noop = _ => {};
            _this.texture = Utils3D.getTexture(src);
            _this.video = {play: noop, pause: noop};
            if (parseColor) _this.colorParser = _this.initClass(VideoTextureColorParser, src, true);
        } else {
            _video = _this.initClass(Video, {src, loop, preload, autoplay, muted, events: ['timeupdate', 'playing', 'ended']});
            _this.texture = new Texture();
            _this.texture.format = Texture.RGBFormat;
            _this.texture.minFilter = _this.texture.magFilter = Texture.LINEAR;
            _this.texture.generateMipmaps = false;
            _this.texture.loaded = false;
            _this.video = _video;
            _this.events.bubble(_video, Video.PLAYING);
            if (parseColor) _this.colorParser = _this.initClass(VideoTextureColorParser, src, false);

            if (firstFrame) {
                _this.videoTexture = _this.texture;
                _this.texture = Utils3D.getTexture(firstFrame);
            }
        }

        _hasRequestCallback = ('requestVideoFrameCallback' in HTMLVideoElement.prototype);
        //if (Device.system.os == 'mac') _hasRequestCallback = false;
        if (!_hasRequestCallback) _this.startRender(update, 30);
    })();

    function update() {
        if (_video.canRender) {
            if (_this.videoTexture) {
                _this.texture.destroy();
                _this.texture = _this.videoTexture;
                delete _this.videoTexture;
            }

            if (!_this.texture.image) {
                _this.texture.image = _video.video;
                _this.texture.upload();
            }

            if (_this.colorParser) _this.colorParser.update(_video.time);

            _this.texture.loaded = _this.texture.needsUpdate = true;
        }

        if(_hasRequestCallback) {
            _video.element.div.requestVideoFrameCallback(update);
        }
    }

    //*** Event handlers

    //*** Public methods
    this.set('loop', loop => _video.loop = loop);
    this.set('muted', muted => _video.muted = muted);
    this.set('src', src => {
        _video.src = src.includes(['blob', 'http']) ? src : Assets.getPath(src);
        if(_hasRequestCallback) {
            _video.element.div.requestVideoFrameCallback(update);
        }
    });

    this.start = async function() {
        if (_video) {
            _this.active = true;
            await _video.play();

            if(_hasRequestCallback) {
                _video.element.div.requestVideoFrameCallback(update);
            }else{
                _this.startRender(update, 30);
            }
        }
    }

    this.stop = function() {
        if (_video) {
            _this.active = false;
            _video.pause();

            if(_hasRequestCallback) {
                _video.element.div.cancelVideoFrameCallback(update)
            }else{
                _this.stopRender(update);
            }
        }
    }

    this.seek = function(time) {
        if (_video) _video.seek(time);
    }

    this.onInvisible = function() {
        if (_this.active) _video.pause();
        VideoTexture.element().removeChild(_this.video.object, true);
    }

    this.onVisible = function() {
        if (_this.active) _video.play();
        VideoTexture.element().add(_this.video.object);
    }

    this.onDestroy = function() {
        _this.texture.destroy();
        VideoTexture.element().removeChild(_this.video.object, true);
    }
}, _ => {
    var $element;
    VideoTexture.element = function() {
        if (!$element) {
            $element = Stage.create('VideoTextures');
            $element.size(0,0).setZ(-1);
            Stage.add($element);
        }

        return $element;
    }
});
Class(function VideoTextureColorParser(_path, _static) {
    Inherit(this, Component);
    const _this = this;
    var _colorData, _lumData;

    var _color = new Color();

    this.color = new Color();
    this.lerp = 1;

    //*** Constructor
    (async function () {
        let split = _path.split('.')[0];
        let path = split + '.json';

        _colorData = await get(path);
    })();

    //*** Event handlers

    //*** Public methods
    this.update = function(time) {
        if (!_colorData) return;

        for (let key in _colorData) {
            if (time <= key) {
                _color.set('#' + _colorData[key]);
                _this.color.lerp(_color, _this.lerp);
                break;
            }
        }
    }
});
Namespace('DreamUI');

/**
 * <pre>
 * Accessibility Service
 * </pre>
 *
 * @module AccessibilityService
 * @class
 * @name AccessibilityService
 *
 * @example
 * // TODO
 */
DreamUI.Class(function AccessibilityService() {
    Inherit(this, Component);
    const _this = this;

    /**
     * @memberOf AccessibilityService
     * @property {boolean} - determines whether this has keyboard nav
     * @type {boolean}
     */
    _this.isKeyboardNav = false;

    (async function () {
        _this.events.sub(Keyboard.DOWN, (e) => {
            if (e.keyCode === 9) {
                _this.isKeyboardNav = true;
            }
        });

        _this.events.sub(Mouse.input, Interaction.CLICK, () => {
            if (_this.isKeyboardNav) _this.isKeyboardNav = false;
        });

        await DreamStyleguide.instance().ready();
        HydraCSS.style('.use-keyboard', {
            ...DreamStyleguide.instance().withAccessibility
        });

        _this.flag('isReady', true);
    })();

    /**
     * Adds keyboard focus to an element (assumes element is already accessible otherwise)
     * @memberOf AccessibilityService
     * @param el
     * @param hoverFunction
     */
    _this.enableKeyboardFocus = function (el, hoverFunction) {
        el.div.onfocus = () => {
            if (_this.isKeyboardNav) {
                if (!el.div.classList.contains('use-keyboard')) {
                    el.div.classList.add('use-keyboard');
                }
            }
            if (hoverFunction && typeof hoverFunction === 'function') hoverFunction({ action: 'over' });
        };
        el.div.onblur = () => {
            if (el.div.classList.contains('use-keyboard')) {
                el.div.classList.remove('use-keyboard');
            }
            if (hoverFunction && typeof hoverFunction === 'function') hoverFunction({ action: 'out' });
        };
    };

    /**
     * Use to add a tabindes, aria label, and keyboard focus to an element
     * @memberOf AccessibilityService
     * @param el
     * @param clickFunction
     * @param hoverFunction
     * @param ariaLabel
     * @param num
     */
    _this.enableTabNavigation = function(el, clickFunction, hoverFunction, ariaLabel, num = 0) {
        el.attr('tabindex', `${num}`);
        if (ariaLabel) el.attr('aria-label', ariaLabel);

        if (clickFunction) {
            el.keydown((e) => {
                if (e.keyCode === 13 || e.code === 'Enter' || e.key === 'Enter') clickFunction(e);
                if (e.keyCode === 32 || e.code === 'Space' || e.key === ' ') clickFunction(e);
            });
        }

        _this.enableKeyboardFocus(el, hoverFunction);
    };

    this.ready = function() {
        return _this.wait('isReady');
    };
}, 'singleton');

Namespace("DreamUI");

/**
 * <pre>
 * Provides a badge that displays a number either before or after an element
 *
 * Absolutley positioned, should be used with an item with relative positioning
 * </pre>
 *
 * @module Badge
 * @class
 * @name Badge
 *
 * @example
 * // Create a badge
 * _this.badge = _this.initClass(DreamUI.Badge, {
 *     count: '3',
 *     size: 'small',
 *     position: 'after'
 * });
 *
 * @param count {string}
 * @param styles {object}
 * @param size {string} medium | small | large
 * @param position {string} after | before
 * @param {object} [parent] Parent to attach badge to
 */
 DreamUI.Class(function Badge({
    parent,
    styles = {},
    count = "",
    size = "medium",
    position = "after"
}) {
    Inherit(this, DreamUI.DreamElement, 'span');

    const _this = this;
    const $this = _this.element;

    /**
     * Postition of the Badge
     *
     * @name position
     * @memberof Badge
     * @instance
     * @private
     * @type {string}
     */
    _this.position = position;

    /**
     * Size of the Badge
     *
     * @name size
     * @memberof Badge
     * @instance
     * @private
     * @type {string}
     */
    _this.size = size;

    /**
     * Badge count
     *
     * @name count
     * @memberof Badge
     * @instance
     * @private
     * @type {string}
     */
    _this.count = count;


    //*** Constructor
    (async function() {
        await DreamUI.BadgeStylesheet.ready();

        initElement();
        initText();
    })();

    //** Private methods
    function initElement() {
        if (parent.element) parent.element.div.insertAdjacentElement("beforeend", $this.div);
        else if (parent) parent.div.insertAdjacentElement("beforeend", $this.div);

        $this.css(_this.combineStyles([DreamUI.BadgeStylesheet[size].element, styles.element]));
        if (_this.position === "before") $this.css({ left: 0, transform: 'translate(-50%,-50%)' });
    }

    function initText() {
        _this.text = $this.create(`${_this.constructorName}__text`);
        _this.text.css(_this.combineStyles([DreamUI.BadgeStylesheet[size].text, styles.text]));
        _this.text.text(count);
    }

    //** public methods

    /**
     * updates the styles of the badge
     *
     * @function
     * @name setStyle
     * @memberof Badge
     * @instance
     * @param replacedStyles {object}
     */
    _this.setStyle = replacedStyles => {
        if (replacedStyles.element) $this.css(replacedStyles.element);

        if (replacedStyles.text) _this.text.css(replacedStyles.text);
    };
    /**
     * updates the count visible on the badge
     *
     * @function
     * @name updateCount
     * @memberof Badge
     * @instance
     * @param count {string}
     */
    _this.updateCount = count => {
        _this.text.text(count);
    };
    /**
     * Remove the Badge
     *
     * @function
     * @name clearBadge
     * @memberof Badge
     * @instance
     */
    _this.clearBadge = _ => {
        _this.destroy();
    };
});

Namespace('DreamUI');

/**
*
* @name BadgeStyles
* @memberOf DreamUI
*/
DreamUI.Class(function BadgeStylesheet() {
    Inherit(this, Component);

    const _this = this;

   	const BASE_ELEMENT = {
    	display: 'flex',
    	alignItems: 'center',
    	justifyContent: 'center',
    	height: '24px',
    	width: '24px',
    	borderRadius: '50%',
    	textAlign: 'center',
    	position: 'absolute',
    	top: 0,
    	right: 0,
    	transform: 'translate(50%, -50%)',
    };

    const BASE_TEXT = {
    	fontSize: '14px',
    	color: DreamColors.instance().white,
    };

    (async function () {
        await DreamColors.instance().ready();
 
        _this.medium = {
        	element : {
        		...BASE_ELEMENT,
        		background: DreamColors.instance().black
        	},

        	text: {
        		...BASE_TEXT
        	}

        },

        _this.large = {
        	element : {
        		...BASE_ELEMENT,
        		height: '32px',
        		width: '32px',
        		background: DreamColors.instance().black
        	},

        	text: {
        		...BASE_TEXT,
        		fontSize: '18px',
        	}

        },

    	_this.small = {
        	element : {
        		...BASE_ELEMENT,
        		height: '16px',
        		width: '16px',
        		background: DreamColors.instance().black,
        	},

        	text: {
        		...BASE_TEXT,
        		fontSize: '11px',
        	}

        },

        _this.flag('isReady', true);
    })();

    /**
    * @memberOf BadgeStyles
    *
    */
    _this.ready = function() {
        return _this.wait('isReady');
    };
}, 'static');
Namespace('DreamUI');

/**
 * Core RadioButton component of Dream UI.
 * /**
 * @name RadioButton
 * @memberOf DreamUI
 *
 *
 * @param animations
 * @param styles
 * @param text {string} - used as label for radio button
 * @param name {string} - used for identifier/accesibility
 * @param checked {boolean} - whether or not the radio button is checked by default
 * @param value {string} - check associated with the radio button
 * @param icon {string}
 * @param preset {string}
 * @param required {boolean}
 */
DreamUI.Class(function Checkbox({
    animations = DreamUI.CheckboxAnimations,
    styles = {},
    checked,
    disabled,
    text,
    id,
    name,
    value,
    icon = 'checkmark',
    preset = 'default',
    required
} = {}) {
    Inherit(this, DreamUI.FormControl);

    const _this = this;
    const $this = _this.element;


    //*** Constructor
    (async function () {
        await DreamUI.CheckboxStyles.ready();
        _this.value = value;
        _this.id = id || `cb-${Utils.uuid()}`;
        _this.preset = preset;
        _this.disabled = disabled;


        initElement();
        initInput();
        initText();
        initEmulatedInput();

        if (preset !== 'tag') initCheckmark();
        else setTagColors();

        setFocusTarget();

        addHandlers();

        if (checked) {
            _this.input.div.checked = true;
            handleChange();
        }

        Dev.expose(`checker`, _this);
    })();

    function setTagColors() {
        _this.tagTextColor = styles?.tagTextColor || DreamUI.CheckboxStyles[preset].tagTextColor;
        _this.tagActiveTextColor = styles?.tagActiveTextColor || DreamUI.CheckboxStyles[preset].tagActiveTextColor;
    }

    function initElement() {
        $this.css(_this.combineStyles([DreamUI.CheckboxStyles[preset].element, styles.element]));
    }

    function initInput() {
        _this.input = _this.element.create(`${_this.constructorName}__input`, 'input');
        _this.input.css(_this.combineStyles([DreamUI.CheckboxStyles[preset].input, styles.input]));
        _this.input.attr('type', 'checkbox');
        _this.input.attr('id', _this.id);
        _this.input.attr('name', name);
        _this.input.attr('value', value ? value : text);
        if (disabled) _this.input.attr('disabled', 'disabled');
        if (required) _this.input.attr('required', 'required');
    }

    function initText() {
        _this.text = _this.element.create(`${_this.constructorName}__text`, 'label');
        _this.text.attr('for', _this.id);
        _this.text.css(_this.combineStyles([DreamUI.CheckboxStyles[preset].text, styles.text]));
        _this.text.text(text);
    }

    function initEmulatedInput() {
        _this.emulatedInput = _this.element.create(`${_this.constructorName}__emulated`);
        _this.emulatedInput.css(_this.combineStyles([DreamUI.CheckboxStyles[preset].emulatedInput, styles.emulatedInput]));

        if (preset !== 'tag') {
            _this.emulatedInputBackground = _this.emulatedInput.create(`${_this.constructorName}__background`);
            _this.emulatedInputBackground.css(_this.combineStyles([DreamUI.CheckboxStyles[preset].emulatedInputBackground, styles.emulatedInputBackground]));
        }
    }

    function initCheckmark() {
        _this.checkmark = _this.initClass(
            Sprite,
            icon,
            _this.combineStyles([DreamUI.CheckboxStyles[preset].checkmark, styles.checkmark]),
            'checkmark',
            [_this.emulatedInputBackground]
        );
        _this.checkmark.element.attr('aria-hidden', 'true');
    }

    //*** Event handlers

    function addHandlers() {
        _this.input.bind('click', handleChange);
        _this.input.bind('focus', _this.handleFocus);
        _this.input.bind('blur', handleBlur);
        $this.bind('mouseenter', _ => handleHover({ action: 'over' }));
        $this.bind('mouseleave', _ => handleHover({ action: 'out' }));
    }

    function setFocusTarget() {
        _this.focusTarget = preset === 'tag' ? _this.element : _this.emulatedInput;
    }

    function handleBlur() {
        _this.focusTarget.css(_this.combineStyles([DreamUI.CheckboxStyles[preset].unFocused, styles.unFocused]));
    }

    function handleHover(e) {
        animations.onHover(e, _this);
    }

    function handleChange() {
        animations.onToggled(_this.input.div.checked, _this);
        _this.events.fire(DreamUI.Checkbox.TOGGLE, { object: _this, value: _this.input.div.checked });
    }

    //*** Public methods
    _this.keyboardFocusStyles = _ => {
        _this.focusTarget.css(
            _this.combineStyles([DreamUI.CheckboxStyles[preset].focused, styles.focused])
        );
    };

    _this.mouseFocusStyles = _ => {
        _this.focusTarget.css(
            _this.combineStyles([DreamUI.CheckboxStyles[preset].unFocused, styles.unFocused])
        );
    };

    _this.setStyles = replacedStyles => {
        if (replacedStyles.element) $this.css(replacedStyles.element);

        if (replacedStyles.emulatedInput) _this.emulatedInput.css(replacedStyles.emulatedInput);
        if (replacedStyles.emulatedInputBackground) _this.emulatedInputBackground.css(replacedStyles.emulatedInputBackground);
        if (replacedStyles.checkmark) _this.checkmark.element.css(replacedStyles.checkmark);
        if (replacedStyles.input) _this.input.css(replacedStyles.input);
        if (replacedStyles.text) _this.text.css(replacedStyles.text);

        if (replacedStyles.focused) styles.focues = replacedStyles.focused;
        if (replacedStyles.unFocused) styles.unFocused = replacedStyles.unFocused;
    };

    /**
     * This method is used to get the status of the checkbox - either true or false
     */
    _this.get('checked', () => {
        if (!_this.input) return checked;
        return _this.input.div.checked;
    });


    _this.focus = () => {
        if (!_this.input) return;
        _this.input.div.focus();
        _this.emulatedInput.css(styles.focused);
    };

    _this.toggle = () => {
        if (!_this.input) return;
        _this.input.div.checked = !_this.input.div.checked;
        handleChange();
    };

    /**
     * Enables the input field.
     */
    _this.enable = _ => {
        _this.disabled = false;
        _this.input.attr('disabled', null);
        _this.element.css({ opacity: 1 });
        _this.text.css({ cursor: 'pointer' });
    };

    /**
     * Disables the input field.
     */
    _this.disable = _ => {
        _this.disabled = true;
        _this.input.attr('disabled', 'disabled');
        _this.element.css({ opacity: 0.5 });
        _this.text.css({ cursor: 'not-allowed' });
    };
}, _ => {
    DreamUI.Checkbox.TOGGLE = 'DreamUI.Checkbox.TOGGLE';
    DreamUI.Checkbox.DISABLED = 'DreamUI.Checkbox.DISABLED';
    DreamUI.Checkbox.ENABLED = 'DreamUI.Checkbox.ENABLED';
});

Namespace('DreamUI');

DreamUI.Class(function CheckboxAnimations() {
    Inherit(this, Component);

    (async function () {
        await DreamColors.instance().ready();
    })();


    this.onToggled = function (checked, checkbox) {
        switch (checked) {
            case true: {
                if (checkbox.preset === 'tag') {
                    checkbox.emulatedInput.tween({ opacity: 1 }, 250, 'easeOutCubic');
                    checkbox.text.tween({ color: checkbox.tagActiveTextColor }, 250, 'easeOutCubic');
                } else {
                    checkbox.emulatedInputBackground.tween({ opacity: 1 }, 250, 'easeOutCubic');
                }
                break;
            }
            case false: {
                if (checkbox.preset === 'tag') {
                    checkbox.emulatedInput.tween({ opacity: 0 }, 250, 'easeOutCubic');
                    checkbox.text.tween({ color: checkbox.tagTextColor }, 250, 'easeOutCubic');
                } else {
                    checkbox.emulatedInputBackground.tween({ opacity: 0 }, 250, 'easeOutCubic');
                }
                break;
            }
        }
    };


    this.onHover = function ({ action }, checkbox) {
        switch (action) {
            case 'over': {
                if (checkbox.preset === 'tag') {
                    if (checkbox.checked) return;
                    checkbox.emulatedInput.tween({ opacity: 0.3 }, 250, 'easeOutCubic');
                }
                break;
            }
            case 'out': {
                if (checkbox.preset === 'tag') {
                    if (checkbox.checked) return;
                    checkbox.emulatedInput.tween({ opacity: 0 }, 250, 'easeOutCubic');
                }
                break;
            }
        }
    };
}, 'static');

Namespace('DreamUI');
/**
 *
 * <pre>
 * Core CheckboxGroup component of Dream UI.
 * </pre>
 *
 * @module CheckboxGroup
 * @class
 * @name CheckboxGroup
 * @memberOf DreamUI
 *
 * @example
 * //TODO
 *
 * @param animations
 * @param styles
 * @param text {string} - used as label for checkbox group
 * @param name {string} - used for identifier/accesibility
 * @param options {array}- array of objects containing `text` and `value` pairs used to create individual DreamUICheckbox instances
 * @param required {boolean} - whether or not a value is required
 * @param errorMessage {string}
 * @param min {{min: {number}, message: {string}}}
 * @param max {{max: {number}, message: {string}}}
 */
DreamUI.Class(function CheckboxGroup({
    animations = DreamUI.CheckboxGroupAnimations,
    styles = {},
    text = '',
    id = '',
    name = '',
    required = false,
    options = [],
    errorMessage,
    validations,
    preset = 'default',
    max
} = {}) {
    Inherit(this, DreamUI.DreamElement);

    const _this = this;
    const $this = _this.element;

    _this.options = [];
    _this.checkedOptions = [];


    //*** Constructor
    (async function () {
        await DreamUI.CheckboxGroupStyles.ready();

        initElement();
        initLabel();
        initContainer();
        if (required) initError();
    })();

    function initElement() {
        $this.css(_this.combineStyles([DreamUI.CheckboxGroupStyles[preset].element, styles.element]));
    }

    function initLabel() {
        let id = `l-${Utils.uuid()}`;

        _this.text = $this.create(`${_this.constructorName}__text`);
        _this.text.css(_this.combineStyles([DreamUI.CheckboxGroupStyles[preset].text, styles.text]));

        _this.text.text(text);
        _this.text.attr('id', id);
        // hide b/c we have hidden <legend> that is read by screen reader
        _this.text.attr('aria-hidden', 'true');

        if (required) {
            _this.text.inner = _this.text.create('required', 'span');
            _this.text.inner.text(' *');
            _this.text.inner.attr('aria-hidden', 'true');
            _this.text.inner.css({ color: DreamColors.instance().red });
        }
    }

    function initError() {
        _this.error = $this.create(`${_this.constructorName}__error`);
        _this.error.css(_this.combineStyles([DreamUI.CheckboxGroupStyles[preset].error, styles.error]));
    }

    function initContainer() {
        _this.container = $this.create(`${_this.constructorName}__container`, 'fieldset');
        _this.container.create(`${_this.constructorName}__legend`, 'legend')
            .text(text)
            .css(_this.combineStyles([DreamUI.CheckboxGroupStyles[preset].legend, styles.legend]));

        _this.container.css(_this.combineStyles([DreamUI.CheckboxGroupStyles[preset].container, styles.container]));

        _this.options = options.map(createOption);
        _this.flag('isReady', true);
    }

    function createOption(option, i) {
        let control = _this.initClass(DreamUI.Checkbox, {
            ...option,
            preset,
            name
        }, [_this.container]);

        _this.events.sub(control, DreamUI.Checkbox.TOGGLE, handleChange);

        return control;
    }

    function handleChange() {
        _this.checkedOptions = _this.options
            .filter(option => option.checked)
            .map(option => option.value);

        if (max) handleMax();
        _this.validate();
        _this.events.fire(DreamUI.CheckboxGroup.CHANGE, { checkedOptions: _this.checkedOptions });
    }

    function disableCheckboxes() {
        _this.options.forEach(option => {
            if (!option.checked) {
                option.disable();
            }
        });
    }

    function enableCheckboxes() {
        _this.options.forEach(option => {
            option.enable();
        });
    }


    function handleMax() {
        if (_this.checkedOptions.length && _this.checkedOptions.length >= max) {
            disableCheckboxes();
        } else {
            enableCheckboxes();
        }
    }

    //*** Public methods

    /**
     * This method is used to replace styles of the entire component.
     *
     * @function
     * @name setStyles
     * @memberof CheckboxGroup
     * @instance
     * @param {object} replacedStyles object of styles.
     */
    _this.setStyles = replacedStyles => {
        $this.css(replacedStyles.element);

        _this.container.css(replacedStyles.container);

        _this.text.css(replacedStyles.text);
    };

    /**
     * Validates the input field.
     *
     * @function
     * @name validate
     * @memberof CheckboxGroup
     * @instance
     */
    _this.validate = function() {
        _this.isValid = true;

        if (!required) return _this.isValid;

        if (!_this.checkedOptions.length) {
            _this.isValid = false;
        }

        if (!_this.isValid) {
            animations.onError(_this);
            _this.error.text(errorMessage);
        } else {
            animations.onValid(_this);
            _this.error.text('');
        }

        return _this.isValid;
    };

    _this.deselectAllCheckboxes = async function () {
        _this.options.forEach(option => {
            if (option.checked) option.toggle();
        });
        handleChange();
    };

    _this.ready = _ => _this.wait('isReady');
}, _ => {
    /**
     * @fires CheckboxGroup.CHANGE
     */
    DreamUI.CheckboxGroup.CHANGE = 'DreamUI.CheckboxGroup.CHANGE';
});

Namespace('DreamUI');

/**
 * @name CheckboxGroupAnimations
 * @memberOf DreamUI
 */
DreamUI.Class(function CheckboxGroupAnimations() {
    Inherit(this, Component);

    (async function () {
        await DreamColors.instance().ready();
    })();

    this.onError = function (group) {
        group.error.tween({ opacity: 1 }, 400, 'easeOutCubic');
    };

    this.onValid = function (group) {
        group.error.tween({ opacity: 0 }, 400, 'easeOutCubic');
    };
}, 'static');

Namespace('DreamUI');

/**
 * @name CheckboxGroupStyles
 * @memberOf DreamUI
 */
DreamUI.Class(function CheckboxGroupStyles() {
    Inherit(this, Component);
    const _this = this;

    (async function () {
        await DreamColors.instance().ready();
        await DreamStyleguide.instance().ready();

        _this.setBaseStyles();

        _this.default = {
            element: {
                ..._this.ELEMENT_BASE
            },
            text: {
                ..._this.TEXT_BASE
            },
            container: {
                ..._this.CONTAINER_BASE,
                position: 'relative',
                display: 'grid',
                gridGap: '.75rem'
            },
            error: {
                ..._this.ERROR_BASE
            },
            legend: _this.LEGEND_BASE
        };

        _this.tag = {
            element: {
                ..._this.ELEMENT_BASE
            },
            text: {
                ..._this.TEXT_BASE
            },
            container: {
                ..._this.CONTAINER_BASE
            },
            error: {
                ..._this.ERROR_BASE
            },
            legend: _this.LEGEND_BASE
        };

        _this.flag('isReady', true);
    })();

    _this.ready = function() {
        return _this.wait('isReady');
    };

    _this.setBaseStyles = _ => {
        _this.ELEMENT_BASE = {
            position: 'relative',
            display: 'grid',
            gridGap: '1rem',
            alignItems: 'center',
            height: 'fit-content'
        };
    
        _this.TEXT_BASE = {
            font: `1.3rem ${DreamStyleguide.instance().fonts.primary}`
        };
    
        _this.CONTAINER_BASE = {
            margin: 0,
            border: 'none'
        };
    
        _this.ERROR_BASE = {
            color: DreamColors.instance().red,
            font: `1rem/2rem ${DreamStyleguide.instance().fonts.primary}`,
            height: '2rem',
            opacity: 0
        };
    
        _this.LEGEND_BASE = DreamStyleguide.instance().visuallyHidden;
    }

    
}, 'static');


Namespace('DreamUI');

/**
 * @name CheckboxStyles
 * @memberOf DreamUI
 */
DreamUI.Class(function CheckboxStyles() {
    Inherit(this, Component);
    const _this = this;


    (async function () {
        await DreamColors.instance().ready();
        await DreamStyleguide.instance().ready();

        _this.setBaseStyles();

        _this.default = {
            element: _this.ELEMENT_BASE,
            emulatedInput: _this.EMULATED_INPUT_BASE,
            emulatedInputBackground: _this.EMULATED_BG_BASE,
            input: _this.INPUT_BASE,
            checkmark: _this.CHECKMARK_BASE,
            focused: _this.FOCUSED_BASE,
            unFocused: _this.UNFOCUSED_BASE,
            disabled: _this.DISABLED_BASE,
            enabled: _this.ENABLED_BASE,
            text: _this.TEXT_BASE
        };

        _this.tag = {
            element: {
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: '3rem',
                margin: '0 0.5rem 0.5rem 0'
            },
            emulatedInput: {
                ..._this.EMULATED_INPUT_BASE,
                border: 'none',
                height: '100%',
                width: '100%',
                opacity: 0,
                background: DreamColors.instance().primary
            },
            input: {
                ..._this.INPUT_BASE,
                clip: 'rect(0 0 0 0)'
            },
            focused: { ..._this.FOCUSED_BASE },
            unFocused: { ..._this.UNFOCUSED_BASE },
            disabled: { ..._this.DISABLED_BASE },
            enabled: { ..._this.ENABLED_BASE },
            text: {
                ..._this.TEXT_BASE,
                borderRadius: '3rem',
                border: `solid 2px ${DreamColors.instance().primary}`,
                padding: '0.5rem 1.3rem'
            },
            tagTextColor: DreamColors.instance().black,
            tagActiveTextColor: DreamColors.instance().white
        };

        _this.flag('isReady', true);
    })();

    _this.ready = function() {
        return _this.wait('isReady');
    };

    _this.setBaseStyles = _ => {

         _this.INPUT_SIZE = {
            height: '2rem',
            width: '2rem'
        };
    
    
         _this.ELEMENT_BASE = {
            position: 'relative',
            display: 'grid',
            gridAutoFlow: 'column',
            gridAutoColumns: 'max-content',
            alignItems: 'center',
            gridGap: '1rem'
        };
    
    
         _this.EMULATED_INPUT_BASE = {
            ..._this.INPUT_SIZE,
            position: 'absolute',
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '0.2rem',
            border: `2px solid ${DreamColors.instance().primary}`,
            height: '2rem',
            width: '2rem',
            zIndex: -1
        };
    
         _this.EMULATED_BG_BASE = {
            height: '1.4rem',
            width: '1.4rem',
            background: DreamColors.instance().primary,
            opacity: 0
        };
    
         _this.INPUT_BASE = {
            ..._this.INPUT_SIZE,
            position: 'absolute',
            opacity: 0
        };
    
         _this.CHECKMARK_BASE = {
            height: '100%',
            width: '100%'
        };
    
         _this.FOCUSED_BASE =  DreamStyleguide.instance().withAccessibility;
    
         _this.UNFOCUSED_BASE = DreamStyleguide.instance().withoutAccessibility;
    
         _this.DISABLED_BASE = {
            opacity: 0.5,
            cursor: 'not-allowed'
        };
    
         _this.ENABLED_BASE = {
            opacity: 1
    
        };
    
         _this.TEXT_BASE = {
            paddingLeft: `calc(${_this.INPUT_SIZE.width} + 1rem)`,
            cursor: 'pointer',
            font: `1.4rem ${DreamStyleguide.instance().fonts.primary}`
        }; 
    }


}, 'static');


/**
 * @name DreamUI
 */
Namespace('DreamUI');

Namespace('DreamUI');

/**
 * <pre>
 * CoreUI element for the dream platform
 * </pre>
 *
 * @module DreamElement
 * @class
 * @name DreamElement
 *
 * @example
 * // TODO
 *
 * @param type {string} element type
 */
DreamUI.Class(function DreamElement(type) {
    Inherit(this, Element, type);

    const _this = this;
    const $this = _this.element;

    //*** Constructor
    (async function () {
        _this.constructorName = Utils.getConstructorName(_this);
        _this.styleguide = DreamStyleguide.instance();
        _this.colors = DreamColors.instance();
    })();

    function flatten(list) {
        var value, jlen, j;
        var result = [];
        var idx = 0;
        var ilen = list.length;

        const flatt = (list) => {
            while (idx < ilen) {
                if (_isArrayLike(list[idx])) {
                    value = flatt(list[idx]);
                    j = 0;
                    jlen = value.length;
                    while (j < jlen) {
                        result[result.length] = value[j];
                        j += 1;
                    }
                } else {
                    result[result.length] = list[idx];
                }
                idx += 1;
            }
            return result;
        };

        return flatt(list);
    }

    function _isArrayLike(possibleArray) {
        if (_isArray(possibleArray)) {
            return true;
        }
        if (!possibleArray) {
            return false;
        }
        if (typeof possibleArray !== "object") {
            return false;
        }
        if (possibleArray.length === 0) {
            return true;
        }
        if (possibleArray.length > 0) {
            return possibleArray.hasOwnProperty(0) && x.hasOwnProperty(possibleArray.length - 1);
        }

        return false;
    }

    function _isArray(val) {
        return (
            val != null &&
            val.length >= 0 &&
            Object.prototype.toString.call(val) === "[object Array]"
        );
    }

    function _mergeAll(target) {
        if (target == null) {
            throw new TypeError("Cannot convert undefined or null to object");
        }
        var output = Object();
        var idx = 0;
        var length = target.length;
        while (idx < length) {
            var source = target[idx];
            if (source != null) {
                for (var nextKey in source) {
                    output[nextKey] = source[nextKey];
                }
            }
            idx += 1;
        }
        return output;
    }

    this.combineStyles = function (objArray) {
        let list;
        list = flatten(objArray);
        let combinedStyles = _mergeAll(list);

        return combinedStyles;
    };


    //*** Public methods
    this.parseConfig = function (config) {
        for (let key in config) {
            _this[key] = config[key];
        }
    };

    this.getPrefix = function (className) {
        return `${Utils.getConstructorName(this)}__${className}`;
    };

    this.hideLoader = () => {
        UIController.instance().layout.modal.closeModal();
    };

    this.showLoader = (view, config) => {
        UIController.instance().layout.modal.openModal(view, {
            ...config
        });
    };
});

Namespace('DreamUI');

/**
 * <pre>
 * Helper component to work with Input and data serialization.
 * </pre>
 *
 * @module Form
 * @class
 * @name Form
 *
 * @example
 * // TODO
 *
 */
DreamUI.Class(function Form() {
    Inherit(this, DreamUI.DreamElement, 'form');

    const _this = this;
    const $this = _this.element;

    /**
     * @memberOf Form
     * @type {array}
     */
    _this.fields = [];

    //*** Constructor
    (function () {
        $this.bind('submit', e => e.preventDefault());
    })();

    /**
     * Add field
     * @memberOf Form
     */
    _this.add = (field, isAppended = true) => {
        if (isAppended) {
            $this.add(field);
        }

        _this.fields.push(field);
    };

    /**
     * Remove field
     * @memberOf Form
     */
    _this.remove = (field, isAppended = true) => {
        if (isAppended) {
            $this.remove(field);
        }

        _this.fields.remove(field);
    };

    /**
     * Validate fields
     * @memberOf Form
     */
    _this.validate = async _ => {
        const promises = await Promise.all(_this.fields.map(field => field.validate()));

        return promises.indexOf(false) === -1;
    };

    /**
     * Validate fields and returns serialized object
     * @memberOf Form
     */
    _this.submit = async _ => {
        let values = {};
        let isValid = await _this.validate();

        if (isValid) {
            _this.fields.forEach(field => {
                values[field.id] = field.value;
            });

            _this.events.fire(DreamUI.Form.VALID, { values });
            _this.events.fire(DreamUI.Form.SUBMIT, { values });
        } else {
            _this.events.fire(DreamUI.Form.INVALID, { values });
        }

        return values;
    };
}, _ => {
    DreamUI.Form.SUBMIT = 'DreamUI.Form.SUBMIT';
    DreamUI.Form.INVALID = 'DreamUI.Form.INVALID';
    DreamUI.Form.VALID = 'DreamUI.Form.VALID';
});

Namespace('DreamUI');

/**
 * @name FormControl
 * @memberOf DreamUI
 *
 * Helper component to work with Input and data serialization.
 */
DreamUI.Class(function FormControl() {
    Inherit(this, DreamUI.DreamElement);
    const _this = this;
    const $this = _this.element;

    //*** Constructor
    (function () {
        // init so keyboard listener is ready before focus
        DreamUI.AccessibilityService.instance();
    })();

    _this.handleFocus = async function () {
        await _this.wait(1);
        if (DreamUI.AccessibilityService.instance().isKeyboardNav) {
            _this.keyboardFocusStyles();
        } else {
            _this.mouseFocusStyles();
        }
    };


    _this.keyboardFocusStyles = function () {};
    _this.mouseFocusStyles = function () {};
});

Namespace('DreamUI');

/**
 * <pre>
 * Core Input component of Dream UI.
 * </pre>
 *
 * @module Input
 * @class
 * @name Input
 *
 * @example
 * // TODO
 *
 * @param animations
 * @param disabled
 * @param icon
 * @param id {string}
 * @param maxLength {number}
 * @param label {string}
 * @param placeholder {string}
 * @param styles {}
 * @param type {string}
 * // TODO: find out the proper syntax for this parameter
 * // @param validations [{regex: RegEx; message: string}]
 * @param value
 * @param preset {string} default | borderedBottom | floatingLabel | alwaysFloatingLabel | labelAsPlaceholder
 */
DreamUI.Class(function Input({
    animations = DreamUI.InputAnimations,
    disabled,
    icon,
    id,
    maxlength,
    label = '',
    placeholder = '',
    styles = {},
    type = 'text',
    validations = [],
    value = null,
    preset = 'default'
}) {
    Inherit(this, DreamUI.FormControl);

    const _this = this;
    const $this = _this.element;

    //*** Constructor
    (async function () {
        if (!id) {
            return console.error(`${_this.constructorName} requires an ID.`);
        }

        _this.id = id;
        _this.preset = preset;

        $this.css(_this.combineStyles([DreamUI.InputStyles[preset].element, styles.element]));
        initInput();

        if (icon) initIcon();
        if (validations.length) initError();

        addHandlers();
    })();

    function initInput() {
        _this.inputWrapper = $this.create(`${_this.constructorName}__input-wrapper`);

        if (label) {
            _this.label = _this.inputWrapper.create(`${_this.constructorName}__input`, 'label');
            _this.label.attr('for', _this.id);
            _this.label.text(label);
            _this.label.css(_this.combineStyles([DreamUI.InputStyles[preset].label, styles.label]));

            if (validations.length) {
                _this.label.inner = _this.label.create('required', 'span');
                _this.label.inner.html('&nbsp;*', true);
                _this.label.inner.attr('aria-hidden', 'true');
                _this.label.inner.css({ color: DreamColors.instance().red });
            }
        }

        _this.input = _this.inputWrapper.create(`${_this.constructorName}__input`, 'input');
        _this.input.attr('type', type);
        _this.input.attr('id', _this.id);
        _this.input.css(_this.combineStyles([DreamUI.InputStyles[preset].input, styles.input]));

        if (preset !== 'floatingLabel') _this.input.attr('placeholder', placeholder);
        if (disabled) _this.input.attr('disabled', 'disabled');
        if (maxlength) _this.input.attr('maxlength', maxlength);
        if (validations.length) _this.input.attr('required', 'required');
        handlePrepopulatedValue();
    }

    function handlePrepopulatedValue() {
        if (!value) return;
        _this.input.div.value = value;
        animations.onFocus(_this);
    }

    function initError() {
        _this.error = $this.create(`${_this.constructorName}__error`);
        _this.error.css(_this.combineStyles([DreamUI.InputStyles[preset].error, styles.error]));
    }

    function initIcon() {
        _this.icon = _this.initClass(Sprite, icon, styles.icon);
    }

    //*** Event handlers
    function addHandlers() {
        _this.input.bind('blur', handleBlur);
        _this.input.bind('change', handleChange);
        _this.input.bind('focus', handleFocus);
        _this.input.bind('input', handleInput);
    }

    function handleBlur() {
        _this.input.css(_this.combineStyles([DreamUI.InputStyles[preset].unFocused, styles.unFocused]));
        animations.onBlur(_this);
        if (preset === 'floatingLabel') _this.input.attr('placeholder', '');
        _this.events.fire(DreamUI.Input.BLUR, { value: _this.input.div.value });
    }

    function handleChange() {
        handleValidate();

        _this.events.fire(DreamUI.Input.CHANGE, { value: _this.input.div.value });
    }

    function handleFocus() {
        // FormControl keyboard focus
        _this.handleFocus();
        animations.onFocus(_this);
        if (preset === 'floatingLabel') _this.input.attr('placeholder', placeholder);
        _this.events.fire(DreamUI.Input.FOCUS, { value: _this.input.div.value });
    }

    function handleInput() {
        animations.onInput(_this);
        _this.events.fire(DreamUI.Input.INPUT, { value: _this.input.div.value });
    }

    async function handleValidate() {
        _this.isValid = true;

        for (let i = 0; i < validations.length; i++) {
            const { regex, message } = validations[i];

            const validation = new RegExp(regex);
            const isValid = validation.test(_this.input.div.value);

            if (isValid) {
                await animations.onErrorHide(_this);

                _this.error.text('');
            } else {
                await animations.onErrorShow(_this);

                _this.error.text(message);

                _this.isShowingError = true;
                _this.isValid = false;

                break;
            }
        }

        return _this.isValid;
    }

    function validateWithoutErrors() {
        _this.isValid = true;

        for (let i = 0; i < validations.length; i++) {
            const { regex } = validations[i];

            const validation = new RegExp(regex);
            const isValid = validation.test(_this.input.div.value);

            if (!isValid) {
                _this.isValid = false;
                break;
            }
        }

        return _this.isValid;
    }

    _this.keyboardFocusStyles = _ => _this.input.css(
        _this.combineStyles([DreamUI.InputStyles[preset].focused, styles.focused])
    );

    _this.mouseFocusStyles = _ => _this.input.css(
        _this.combineStyles([DreamUI.InputStyles[preset].unFocused, styles.unFocused])
    );

    /**
     * Enables the input field.
     */
    _this.enable = _ => _this.input.attr('disabled', null);

    /**
     * Disables the input field.
     */
    _this.disable = _ => _this.input.attr('disabled', 'disabled');

    /**
     * Validates the input field.
     */
    _this.validate = _ => handleValidate();


    /**
     * Validate the field without showing the error
     * @returns boolean
     */
    _this.validateWithoutErrors = _ => validateWithoutErrors();

    /**
     * Reset the input field.
     */
    _this.reset = _ => _this.input.div.value = '';

    /**
     * Focus on field
     * @param _
     * @return {*}
     */
    _this.focus = _ => _this.input.div.focus();

    /**
     * This method is used to replace styles of the entire component.
     * @param {object} replacedStyles object of styles.
     */
    _this.setStyles = replacedStyles => {
        if (!replacedStyles) return;

        if ($this && replacedStyles.element) {
            $this.css(replacedStyles.element);
        }

        if (_this.label && replacedStyles.label) {
            _this.label.css(replacedStyles.label);
        }

        if (_this.input && replacedStyles.input) {
            _this.input.css(replacedStyles.input);
        }

        if (_this.error && replacedStyles.error) {
            _this.error.css(replacedStyles.error);
        }

        if (_this.icon && replacedStyles.icon) {
            _this.icon.css(replacedStyles.icon);
        }

        if (_this.label && replacedStyles.label) {
            _this.label.css(replacedStyles.label);
        }
    };

    /**
     * Return the value of the input field.
     */
    _this.get('value', _ => _this.input.div.value);

    _this.set('value', val => _this.input.div.value = val);
}, _ => {
    DreamUI.Input.BLUR = 'DreamUI.Input.BLUR';
    DreamUI.Input.CHANGE = 'DreamUI.Input.CHANGE';
    DreamUI.Input.FOCUS = 'DreamUI.Input.FOCUS';
    DreamUI.Input.INPUT = 'DreamUI.Input.INPUT';
});

Namespace('DreamUI');

DreamUI.Class(function InputAnimations() {
    Inherit(this, Component);

    this.onFocus = input => {
        switch (input.preset) {
            case "floatingLabel": {
                input.label.css({ top: '0%' }, 400, 'easeOutCubic');
                break;
            }
            default:
                break;
        }
    };

    this.onInput = input => {
        switch (input.preset) {
            case "labelAsPlaceholder": {
                input.label.css({ opacity: input.value ? 0 : 1 }, 400, 'easeOutCubic');
                break;
            }
            default:
                break;
        }
    };

    this.onBlur = input => {
        switch (input.preset) {
            case "floatingLabel": {
                if (input.value) return;
                input.label.css({ top: '50%' }, 400, 'easeOutCubic');
                break;
            }
            case "labelAsPlaceholder": {
                if (input.value) return;
                input.label.css({ opacity: 1 }, 400, 'easeOutCubic');
                break;
            }
            default:
                break;
        }
    };

    this.onErrorShow = function (button) {
        button.error.tween({ opacity: 1 }, 400, 'easeOutCubic');
    };

    this.onErrorHide = function (button) {
        return button.error.tween({ opacity: 0 }, 400, 'easeOutCubic').promise();
    };
}, 'static');

Namespace('DreamUI');

/**
 * @name InputStyles
 * @memberOf DreamUI
 */
DreamUI.Class(function InputStyles() {
    Inherit(this, Component);

    const _this = this;

    (async function () {
        await DreamColors.instance().ready();

        _this.setBaseStyles();

        _this.default = {
            label: {
                ..._this.LABEL_BASE
            },

            input: {
                ..._this.INPUT_BASE
            },

            error: {
                ..._this.ERROR_BASE
            },

            icon: {
                ..._this.ICON_BASE
            },

            focused: _this.FOCUSED_BASE,
            unFocused: _this.UNFOCUSED_BASE

        };

        _this.borderedBottom = {
            label: {
                ..._this.LABEL_BASE
            },

            input: {
                ..._this.INPUT_BASE,
                border: 'none',
                borderBottom: `1px solid ${DreamColors.instance().gray}`
            },

            error: {
                ..._this.ERROR_BASE
            },

            icon: {
                ..._this.ICON_BASE
            },

            focused: _this.FOCUSED_BASE,
            unFocused: _this.UNFOCUSED_BASE
        };

        _this.floatingLabel = {
            ..._this.default,
            element: {
                position: 'relative'
            },
            input: {
                ..._this.INPUT_BASE,
                zIndex: 0
            },
            label: {
                ..._this.LABEL_BASE,
                position: 'absolute',
                color: 'rgba(0, 0, 0, 0.5)',
                background: DreamColors.instance().white,
                pointerEvents: 'none',
                padding: '0.1rem 0.5rem',
                transition: '0.2s ease all',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1
            }
        };

        _this.alwaysFloatingLabel = {
            ..._this.floatingLabel,
            label: {
                ..._this.floatingLabel.label,
                top: 0
            }
        };

        // gives a label that can have required *, but looks and acts like placeholder
        _this.labelAsPlaceholder = {
            ..._this.floatingLabel
        };

        _this.flag('isReady', true);
    })();

    _this.setBaseStyles = () => {
        _this.LABEL_BASE = {
            display: 'flex',
            font: `1.3rem ${DreamStyleguide.instance().fonts.primary}`,
            marginBottom: '0.5rem'
        };

        _this.INPUT_BASE = {
            background: 'none',
            border: `1px solid ${DreamColors.instance().gray}`,
            color: DreamColors.instance().black,
            font: `1.3rem ${DreamStyleguide.instance().fonts.primary}`,
            height: '4.5rem',
            outline: 'none',
            padding: '0 1.8rem',
            position: 'relative',
            width: '100%'
        };

        _this.ERROR_BASE = {
            color: DreamColors.instance().red,
            font: `1rem/2rem ${DreamStyleguide.instance().fonts.primary}`,
            height: '2rem',
            opacity: 0
        };

        _this.ICON_BASE = {
            position: 'absolute',
            right: '1rem',
            top: '50%',
            transform: 'translateY(-50%)'
        };

        _this.FOCUSED_BASE = DreamStyleguide.instance().withAccessibility;

        _this.UNFOCUSED_BASE = DreamStyleguide.instance().withoutAccessibility;
    };

    _this.ready = function () {
        return _this.wait('isReady');
    };
}, 'static');


Namespace('DreamUI');

/**
 * Core RadioButton component of Dream UI.
 * /**
 * @name RadioButton
 * @memberOf DreamUI
 *
 *
 * @param animations
 * @param styles
 * @param text {string} - used as label for radio button
 * @param name {string} - used for identifier/accesibility
 * @param checked {boolean} - whether or not the radio button is checked by default
 * @param value {string} - check associated with the radio button
 * @param required {boolean}
 */
DreamUI.Class(function RadioButton({
    animations = DreamUI.RadioButtonAnimations,
    styles = DreamUI.RadioButtonStyles,
    text = '',
    checked = false,
    required,
    name = '',
    value
} = {}) {
    Inherit(this, DreamUI.FormControl);

    const _this = this;
    const $this = _this.element;
    let id = `cb-${Utils.uuid()}`;
    let labelId = `${id}-label`;

    _this.value = value;

    //*** Constructor
    (async function () {
        // await styles.ready();
        initElement();
        initInput();
        initText();
        initCircle();
        addHandlers();

        if (checked) {
            _this.input.div.checked = true;
            handleChange();
        }
    })();

    function initElement() {
        $this.css(styles.element);
    }

    function initInput() {
        _this.input = _this.element.create(`${_this.constructorName}__input`, 'input');
        _this.input.css(styles.input);
        _this.input.attr('type', 'radio');
        _this.input.attr('id', id);
        _this.input.attr('name', name);
        _this.input.attr('value', value ? value : text);
        if (required) _this.input.attr('required', 'required');
    }

    function initText() {
        _this.text = _this.element.create(`${_this.constructorName}__label`, 'label');
        _this.text.attr('for', id);
        _this.text.css(styles.text);
        _this.text.text(text);
    }

    function initCircle() {
        _this.emulatedInput = _this.element.create(`${_this.constructorName}__emulatedInput`);
        _this.emulatedInput.css(styles.emulatedInput);

        _this.emulatedInputBackground = _this.emulatedInput.create(`${_this.constructorName}__emulatedInputBackground`);
        _this.emulatedInputBackground.css(styles.emulatedInputBackground);
    }

    //*** Event handlers

    function addHandlers() {
        _this.input.bind('click', handleChange);
        _this.input.bind('focus', _this.handleFocus);
        _this.input.bind('blur', handleBlur);
        $this.bind('mouseenter', _ => handleHover({ action: 'over' }));
        $this.bind('mouseleave', _ => handleHover({ action: 'out' }));
    }

    function handleBlur() {
        _this.emulatedInput.css(styles.unFocused);
    }

    function handleHover(e) {
        animations.onHover(e, _this);
    }

    function handleChange() {
        animations.onToggled(_this.input.div.checked, _this);
        _this.events.fire(DreamUI.RadioButton.TOGGLE, { object: _this, value: _this.input.div.checked });
    }

    //*** Public methods

    _this.keyboardFocusStyles = _ => _this.emulatedInput.css(styles.focused);
    _this.mouseFocusStyles = _ => _this.emulatedInput.css(styles.unFocused);

    _this.setStyles = replacedStyles => {
        if (replacedStyles.element) $this.css(replacedStyles.element);

        if (replacedStyles.emulatedInput) _this.emulatedInput.css(replacedStyles.emulatedInput);

        if (replacedStyles.emulatedInputBackground) _this.emulatedInputBackground.css(replacedStyles.emulatedInputBackground);

        if (replacedStyles.input) _this.input.css(replacedStyles.input);

        if (replacedStyles.text) _this.text.css(replacedStyles.text);
    };

    /**
     * This method is used to get the status of the checkbox - either true or false
     */
    _this.get('checked', () => {
        if (!_this.input) return checked;
        return _this.input.div.checked;
    });

    /**
     * @param {boolean} checked parameter to set the status of the button
     */
    _this.set('checked', (checked) => {
        if (!_this.input) return;
        _this.input.div.checked = checked;
        handleChange();
    });
}, _ => {
    DreamUI.RadioButton.TOGGLE = 'DreamUI.RadioButton.TOGGLE';
    DreamUI.RadioButton.BLUR = 'DreamUI.RadioButton.BLUR';
});

Namespace('DreamUI');

DreamUI.Class(function RadioButtonAnimations() {
    Inherit(this, Component);

    (async function () {
        await DreamColors.instance().ready();
    })();


    this.onToggled = function (checked, button) {
        switch (checked) {
            case true: button.emulatedInputBackground.tween({ opacity: 1 }, 400, 'easeOutCubic'); break;
            case false: button.emulatedInputBackground.tween({ opacity: 0 }, 400, 'easeOutCubic'); break;
        }
    };


    this.onHover = function ({ action }, button) {
        switch (action) {
            case 'over': break;
            case 'out': break;
        }
    };
}, 'static');

Namespace('DreamUI');

DreamUI.Class(function RadioButtonStyles() {
    Inherit(this, Component);
    const _this = this;

    const INPUT_SIZE = {
        height: '2rem',
        width: '2rem'
    };

    (async function () {
        await DreamColors.instance().ready();
        await DreamStyleguide.instance().ready();

        _this.element = {
            position: 'relative',
            display: 'grid',
            gridAutoFlow: 'column',
            gridAutoColumns: 'max-content',
            alignItems: 'center',
            gridGap: '1rem'
        };

        _this.emulatedInput = {
            ...INPUT_SIZE,
            position: 'absolute',
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            border: `2px solid ${DreamColors.instance().primary}`,
            height: '2rem',
            width: '2rem',
            zIndex: -1
        };

        _this.emulatedInputBackground = {
            background: `${DreamColors.instance().primary}`,
            height: '1.4rem',
            width: '1.4rem',
            opacity: 0,
            borderRadius: '50%'
        };

        _this.input = {
            ...INPUT_SIZE,
            position: 'absolute',
            opacity: 0
        };

        _this.focused = DreamStyleguide.instance().withAccessibility;

        _this.unFocused = DreamStyleguide.instance().withoutAccessibility;

        _this.text = {
            // position: 'relative',
            // alignSelf: 'center',
            // lineHeight: 'unset',
            // color: _this.color,
            // cursor: 'pointer',
            // font: `1.4rem ${DreamStyleguide.instance().fonts.primary}`,
            paddingLeft: `calc(${INPUT_SIZE.width} + 1rem)`,
            cursor: 'pointer',
            font: `1.4rem ${DreamStyleguide.instance().fonts.primary}`
        };

        _this.flag('isReady', true);
    })();

    _this.ready = function() {
        return _this.wait('isReady');
    };
}, 'static');

Namespace('DreamUI');
/**
 * Core RadioGroup component of Dream UI.
 * /**
 * @name RadioGroup
 * @memberOf DreamUI
 *
 *
 * @param animations
 * @param styles
 * @param text {string} - used as label for radio button
 * @param name {string} - used for identifier/accesibility
 * @param options {array}- array of objects containing `text` and `value` pairs used to create individual DreamUIRadioButton instances
 * @param required {boolean} - whether or not a value is required
 * @param errorMessage {string}
 */
DreamUI.Class(function RadioGroup({
    animations = DreamUI.RadioGroupAnimations,
    styles = DreamUI.RadioGroupStyles,
    text = '',
    id = '',
    name = '',
    required = false,
    options = [],
    errorMessage
} = {}) {
    Inherit(this, DreamUI.DreamElement);

    const _this = this;
    const $this = _this.element;

    var _value = null;
    _this.options = [];

    //*** Constructor
    (async function () {
        await styles.ready();

        initElement();
        initLabel();
        initContainer();
        if (required) initError();
    })();

    function initElement() {
        $this.css(styles.element);
    }

    function initLabel() {
        let id = `l-${Utils.uuid()}`;

        _this.text = $this.create(`${_this.constructorName}__text`);
        _this.text.css(styles.text);

        _this.text.text(text);
        _this.text.attr('id', id);
        // hide b/c we have hidden <legend> that is read by screen reader
        _this.text.attr('aria-hidden', 'true');

        if (required) {
            _this.text.inner = _this.text.create('required', 'span');
            _this.text.inner.text(' *').attr('aria-hidden', 'true');
            _this.text.inner.css({ color: DreamColors.instance().red });
        }
    }

    function initError() {
        _this.error = $this.create(`${_this.constructorName}__error`);
        _this.error.css(styles.error);
    }

    function initContainer() {
        _this.container = $this.create(`${_this.constructorName}__container`, 'fieldset');
        _this.container.create(`${_this.constructorName}__legend`, 'legend').text(text).css(DreamStyleguide.instance().visuallyHidden);
        _this.container.css(styles.container);

        _this.options = options.map(createOption);
        _this.flag('isReady', true);
    }

    function createOption(option, i) {
        let control = _this.initClass(DreamUI.RadioButton, {
            ...option,
            name
        }, [_this.container]);

        _this.events.sub(control, DreamUI.RadioButton.TOGGLE, handleChange);

        return control;
    }

    function handleChange({ object }) {
        _this.validate();
        if (object.checked) {
            _value = object.value;
            _this.events.fire(DreamUI.RadioGroup.CHANGE, { value: _value });
            _this.options.forEach((option) => {
                if (option.value !== _value) {
                    option.checked = false;
                }
            });
        }
    }

    //*** Public methods

    /**
     * This method is used to replace styles of the entire component.
     * @param {object} replacedStyles object of styles.
     */
    _this.setStyles = replacedStyles => {
        if (replacedStyles.element) $this.css(replacedStyles.element);

        if (replacedStyles.container) _this.container.css(replacedStyles.container);

        if (replacedStyles.text) _this.text.css(replacedStyles.text);
    };

    /**
     * Validates the input field.
    */
    _this.validate = function() {
        _this.isValid = true;

        if (!required) return _this.isValid;

        if (_value === null) {
            _this.isValid = false;
        }

        if (!_this.isValid) {
            animations.onError(_this);
            _this.error.text(errorMessage);
        } else {
            animations.onValid(_this);
            _this.error.text('');
        }

        return _this.isValid;
    };

    _this.ready = _ => _this.wait('isReady');
}, _ => {
    DreamUI.RadioGroup.CHANGE = 'DreamUI.RadioGroup.CHANGE';
    DreamUI.RadioGroup.FOCUS_IN = 'DreamUI.RadioGroup.FOCUS_IN';
    DreamUI.RadioGroup.FOCUS_OUT = 'DreamUI.RadioGroup.FOCUS_OUT';
});

Namespace('DreamUI');

DreamUI.Class(function RadioGroupAnimations() {
    Inherit(this, Component);

    (async function () {
        await DreamColors.instance().ready();
    })();

    this.onError = function (group) {
        group.error.tween({ opacity: 1 }, 400, 'easeOutCubic');
    };

    this.onValid = function (group) {
        group.error.tween({ opacity: 0 }, 400, 'easeOutCubic');
    };
}, 'static');

Namespace('DreamUI');

DreamUI.Class(function RadioGroupStyles() {
    Inherit(this, Component);
    const _this = this;

    (async function () {
        await DreamColors.instance().ready();
        await DreamStyleguide.instance().ready();

        _this.element = {
            position: 'relative',
            display: 'grid',
            gridGap: '1rem',
            alignItems: 'center',
            height: 'fit-content'
        };

        _this.text = {
            font: `1.3rem ${DreamStyleguide.instance().fonts.primary}`
        };

        _this.container = {
            position: 'relative',
            display: 'grid',
            gridGap: '.75rem',
            border: 'none',
            margin: 0
        };

        _this.error = {
            color: DreamColors.instance().red,
            font: `1rem/2rem ${DreamStyleguide.instance().fonts.primary}`,
            height: '2rem',
            opacity: 0
        };

        _this.legend = DreamStyleguide.instance().visuallyHidden;

        _this.flag('isReady', true);
    })();

    _this.ready = function() {
        return _this.wait('isReady');
    };
}, 'static');

Namespace('DreamUI');

/**
 * Core Select component of Dream UI.
 * /**
 * @name Select
 * @memberOf DreamUI
 *
 *
 * @param animations
 * @param styles
 * @param options {array} - array of objects with `text` and `value` string properties used to create options for the select
 * @param label {string} - used as label for select
 * @param required {boolean} - whether or not a value must be selected
 * @param value {string} - default value
 * @param errorMessage {string}
 * @param placeholder {string} visible in "default" preset
 * @param icon {string} visible in "default" preset
 * @preset {string} default | material
 */
DreamUI.Class(function Select({
    styles = DreamUI.SelectStyles,
    animations = DreamUI.SelectAnimations,
    id,
    text = '',
    options = [],
    required = false,
    icon = 'chevron-bottom',
    value = null,
    errorMessage = 'This field is required',
    placeholder = 'Select',
    preset = 'default'
}) {
    Inherit(this, DreamUI.FormControl);

    const _this = this;
    const $this = _this.element;


    //*** Constructor
    (function () {
        if (!id) {
            return console.error(`${_this.constructorName} requires an ID.`);
        }
        _this.id = id;
        _this.value = value;
        _this.preset = preset;

        initElement();
        initLabel();
        initInput();
        if (preset === 'default') setIcon();
        createOptions();
        if (required) initError();
        addHandlers();
    })();

    function initElement() {
        $this.css(_this.combineStyles([DreamUI.SelectStyles[preset].element, styles.element]));
    }

    function setIcon() {
        _this.icon = _this.initClass(Sprite,
            icon,
            _this.combineStyles([DreamUI.SelectStyles[preset].icon, styles.icon]),
            'down arrow',
            [_this.inputWrapper]);
    }

    function initLabel() {
        let stripped = text.replace(' ', '');

        _this.text = $this.create(`${_this.constructorName}__label`, 'label');
        _this.text.css(_this.combineStyles([DreamUI.SelectStyles[preset].text, styles.text]));

        _this.text.text(text);
        _this.text.attr('for', stripped);
        _this.text.attr('id', `${stripped}_label`);

        if (required) {
            _this.text.inner = _this.text.create('required', 'span');
            _this.text.inner.text(' *');
            _this.text.inner.css({ color: DreamColors.instance().red });
        }
    }

    function initInput() {
        _this.inputWrapper = $this.create(`${_this.constructorName}__inputWrapper`).css({ position: 'relative' });
        let stripped = text.replace(' ', '');
        _this.input = _this.inputWrapper.create(`${_this.constructorName}__input`, 'select');
        _this.input.css(_this.combineStyles([DreamUI.SelectStyles[preset].input, styles.input]));

        _this.input.attr('name', stripped);
        _this.input.attr('aria-labeledby', `${stripped}_label`);
        _this.input.attr('role', 'button');
        _this.input.attr('tabindex', '0');

        if (preset === 'default') {
            _this.input.css({ color: styles.unselectedColor || DreamUI.SelectStyles[preset].unselectedColor });
        }

        if (preset === 'material') {
            _this.focusBar = $this.create(`${_this.constructorName}__focus`, 'span');
            _this.focusBar.css(_this.combineStyles([DreamUI.SelectStyles[preset].focusBar, styles.focusBar]));
        }
    }

    function initError() {
        _this.error = $this.create(`${_this.constructorName}__error`);
        _this.error.css(_this.combineStyles([DreamUI.SelectStyles[preset].error, styles.error]));
    }

    function createOptions() {
        //Blank option to not have default
        _this.blankOption = _this.input.create(`${_this.constructorName}__option`, 'option');
        _this.blankOption.attr('disabled', "");
        _this.blankOption.attr('value', false);
        _this.blankOption.attr('hidden', "");
        _this.blankOption.attr('selected', true);
        // if material preset, blank option b/c label lies over it
        _this.blankOption.text(preset === 'material' ? '' : placeholder);

        _this.options = options.map(createOption);

        if (!_this.options || _this.options.length === 0) {
            _this.disabled = true;
            _this.text.attr('disabled', 'true');
            _this.text.text('No options are available.');
        }
    }

    function createOption(option) {
        let $option = _this.input.create(`${_this.constructorName}__option`, 'option');
        $option.attr('value', option.value);
        $option.text(option.text);
        $option.css(DreamUI.SelectStyles[preset].option);
        if (_this.value) {
            if (option.value == _this.value) {
                $option.div.selected = true;
                handlePrepopulatedValue();
            }
        }
        return $option;
    }

    function addHandlers() {
        _this.input.bind('focusin', handleFocus);
        _this.input.bind('focusout', handleFocusLoss);
        _this.input.bind('change', handleValueChange);
    }

    function handleFocus() {
        _this.handleFocus(); // adds keyboard focus
        animations.onFocus(_this);
    }

    function handleFocusLoss() {
        _this.input.css(_this.combineStyles([DreamUI.SelectStyles[preset].unFocused, styles.unFocused])); // removes keyboard focus
        animations.onFocusLoss(_this);
    }

    function handleValueChange(e) {
        _this.value = _this.input.div.value;
        if (preset === 'default') {
            _this.input.css({ color: styles.selectedColor || DreamUI.SelectStyles[preset].selectedColor });
        }
        if (_this.value) {
            handlePrepopulatedValue();
        }
        _this.events.fire(DreamUI.Select.CHANGE, { value: _this.value });
    }

    function handlePrepopulatedValue() {
        // _this.text.css(styles.prepopulated);
        _this.text.css(_this.combineStyles([DreamUI.SelectStyles[preset].prepopulated, styles.prepopulated]));
    }

    /**
     * This method is used to replace styles of the entire component.
     * @param {object} replacedStyles object of styles.
     */
    _this.setStyles = replacedStyles => {
        if (!replacedStyles) return;

        if ($this && replacedStyles.element) {
            $this.css(replacedStyles.element);
        }

        if (_this.input && replacedStyles.input) {
            _this.input.css(replacedStyles.input);
        }

        if (_this.focusBar && replacedStyles.focusBar) {
            _this.focusBar.css(replacedStyles.focusBar);
        }

        if (_this.text && replacedStyles.text) {
            _this.text.css(replacedStyles.text);
        }

        if (_this.options && replacedStyles.option) {
            _this.options.forEach(($option) => {
                $option.css(replacedStyles.option);
            });
        }
    };

    _this.keyboardFocusStyles = _ => _this.input.css(
        _this.combineStyles([DreamUI.SelectStyles[preset].focused, styles.focused])
    );

    _this.mouseFocusStyles = _ => _this.input.css(
        _this.combineStyles([DreamUI.SelectStyles[preset].unFocused, styles.unFocused])
    );

    /**
     * Validates the input field.
     */
    _this.validate = () => {
        _this.value = _this.input.div.value;
        let valid = false;
        if (required && _this.value && _this.value.length > 0) {
            valid = true;
        } else if (required && (!_this.value || (_this.value && _this.value.length > 0))) {
            valid = false;
        } else {
            valid = true;
        }

        if (!valid) {
            animations.onErrorShow(_this);

            if (_this.error) _this.error.text(errorMessage);
        } else {
            animations.onErrorHide(_this);

            if (_this.error) _this.error.text('');
        }
        return valid;
    };
}, () => {
    DreamUI.Select.CHANGE = 'DreamUI.Select.CHANGE';
});

Namespace('DreamUI');

DreamUI.Class(function SelectAnimations() {
    Inherit(this, Component);

    (async function () {
        await DreamColors.instance().ready();
    })();


    this.onFocus = function(object) {
        if (object.preset !== 'material') return;
        object.text.css({
            top: '5%',
            color: DreamColors.instance().primary,
            opacity: 1
        });
        object.focusBar.tween({ width: '100%', x: '-50%' }, 500, 'easeOutCubic');
    };

    this.onFocusLoss = function(object) {
        if (object.preset !== 'material') return;
        object.text.css({
            color: DreamColors.instance().grey
        });
        object.focusBar.tween({ width: '0%', x: '-50%' }, 500, 'easeOutCubic');
        if (!object.value || object.value.length == 0) {
            object.text.css({
                top: '50%',
                background: 'transparent'
            });
        }
    };

    this.onErrorShow = function (select) {
        select.error && select.error.tween({ opacity: 1 }, 400, 'easeOutCubic');
    };

    this.onErrorHide = function (select) {
        return select.error && select.error.tween({ opacity: 0 }, 400, 'easeOutCubic').promise();
    };
}, 'static');

Namespace('DreamUI');

DreamUI.Class(function SelectStyles() {
    Inherit(this, Component);
    const _this = this;

    (async function () {
        await DreamColors.instance().ready();
        await DreamStyleguide.instance().ready();

        _this.setBaseStyles();

        _this.default = {

            selectedColor: DreamColors.instance().black,
            unselectedColor: DreamColors.instance().hexToRgba(DreamColors.instance().black, 0.5),

            element: {
                position: 'relative'
            },

            input: {
                ..._this.INPUT_BASE
            },

            image: {
                right: '2rem',
                zIndex: 10,
                width: '2.4rem',
                height: '2.4rem',
                transform: 'translate(-50%, -50%)',
                top: '50%',
                pointerEvents: 'none'
            },

            error: {
                ..._this.ERROR_BASE
            },

            text: {
                color: DreamColors.instance().black,
                font: `1.4rem ${DreamStyleguide.instance().fonts.primary}`
            },

            option: {
                position: 'relative',
                padding: '1.5rem',
                font: `1.4rem ${DreamStyleguide.instance().fonts.primary}`
            },

            prepopulated: {
                top: '5%',
                opacity: 1
            },

            icon: {
                "position": 'absolute',
                "right": '1rem',
                "top": '50%',
                "transform": 'translateY(-50%)',
                "pointerEvents": 'none',
                "width": '1rem',
                "height": '1rem',
                "color": DreamColors.instance().black
            },

            focused: _this.FOCUSED_BASE,
            unFocused: _this.UNFOCUSED_BASE
        };

        _this.material = {
            element: {
                position: 'relative'
            },

            input: {
                '-webkit-appearance': 'none',
                '-moz-appearance': 'none',
                "appearance": 'none',
                "display": 'flex',
                "justifyContent": 'space-between',
                "alignItems": 'center',
                "position": 'relative',
                "background": 'none',
                "width": '100%',
                "border": 'none',
                "borderBottom": `1px solid ${DreamColors.instance().gray}`,
                "outline": 'none',
                "padding": '1.5rem 0rem',
                "paddingBottom": '1rem',
                "color": DreamColors.instance().black,
                "font": `1.4rem ${DreamStyleguide.instance().fonts.primary}`
            },

            image: {
                right: '2rem',
                zIndex: 10,
                width: '2.4rem',
                height: '2.4rem',
                transform: 'translate(-50%, -50%)',
                top: '50%',
                pointerEvents: 'none'
            },

            focusBar: {
                transformOrigin: 'center center',
                position: 'absolute',
                bottom: 0,
                width: '0%',
                left: '50%',
                height: '.2rem',
                background: DreamColors.instance().primary
            },

            error: {
                color: DreamColors.instance().red,
                font: `1rem/2rem ${DreamStyleguide.instance().fonts.primary}`,
                height: '2rem',
                padding: '0.5rem 0',
                opacity: 0
            },

            text: {
                left: '0rem',
                color: DreamColors.instance().primary,
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                transition: '0.2s ease all',
                padding: '.25rem',
                paddingLeft: '0rem',
                pointerEvents: 'none',
                font: `1.4rem ${DreamStyleguide.instance().fonts.primary}`
            },

            option: {
                position: 'relative',
                padding: '1.5rem',
                font: `1.4rem ${DreamStyleguide.instance().fonts.primary}`
            },

            prepopulated: {
                top: '5%',
                opacity: 1
            }
        };



        _this.flag('isReady', true);
    })();

    _this.setBaseStyles = _ => {
        _this.INPUT_BASE = {
            '-webkit-appearance': 'none',
            '-moz-appearance': 'none',
            "appearance": 'none',
            "position": 'relative',
            "padding": '1rem',
            "width": '100%',
            "border": 'none',
            "outline": 'none',
            "font": `1.4rem ${DreamStyleguide.instance().fonts.primary}`
        };

        _this.ERROR_BASE = {
            color: DreamColors.instance().red,
            font: `1rem/2rem ${DreamStyleguide.instance().fonts.primary}`,
            height: '2rem',
            padding: '0.5rem 0',
            opacity: 0
        };

        _this.FOCUSED_BASE = DreamStyleguide.instance().withAccessibility;

        _this.UNFOCUSED_BASE = DreamStyleguide.instance().withoutAccessibility;
    };

    _this.ready = function() {
        return _this.wait('isReady');
    };
}, 'static');

Namespace('DreamUI');

/**
 * Core Slide Toggle component of Dream UI.
 */
DreamUI.Class(function SlideToggle({
    animations = DreamUI.SlideToggleAnimations,
    styles = DreamUI.SlideToggleStyles,
    activeText = '',
    inactiveText = '',
    active = false,
    activeColor,
    activeBgColor,
    inactiveColor,
    inactiveBgColor
}) {
    Inherit(this, DreamUI.DreamElement);

    const _this = this;
    const $this = _this.element;
    
    _this.active = active;
    _this.activeColor = activeColor;
    _this.activeBgColor = activeBgColor;
    _this.inactiveColor = inactiveColor;
    _this.inactiveBgColor = inactiveBgColor;

    //*** Constructor
    (async function () {
        initElement();
        initToggle();
        initLabel();
        addHandlers();
    })();

    function initElement() {
        _this.element.css(styles.element);
    }

    function initToggle() {
        _this.container = $this.create(`${_this.constructorName}__container`);
        _this.container.css(styles.container);

        _this.toggle = _this.container.create(`${_this.constructorName}__toggle`);
        _this.toggle.css(styles.toggle(_this))

        _this.toggleBg = _this.toggle.create(`${_this.constructorName}__toggle-bg`);
        _this.toggleBg.css(styles.toggleBg(_this))

        _this.toggleCircle = _this.toggleBg.create(`${_this.constructorName}__toggle-circle`);
        _this.toggleCircle.css(styles.toggleCircle(_this)).transform({
            x: _this.active ? '180%' : '0%'
        });
    }

    function initLabel() {
        _this.text = _this.container.create(`${_this.constructorName}__text`);
        _this.text.css(styles.text(_this))

        if(_this.active) {
            _this.text.text(activeText)
        }else{
            _this.text.text(inactiveText)
        }
    }

    //*** Event handlers
    function addHandlers() {
        _this.toggle.interact(onHover, onClick, '#');
    }

    function onHover(e) {
        animations.onHover(e, _this, _this.active)
    }

    async function onClick() {
        _this.active = !_this.active;

        animations.onClick(_this, _this.active);
        if(_this.active){
            _this.text.text(activeText)
        }else{
            _this.text.text(inactiveText)
        }

        _this.events.fire(DreamUI.SlideToggle.TOGGLED, {active: _this.active})
    }
}, _ => {
    DreamUI.SlideToggle.TOGGLED = 'DreamUI.SlideToggle.TOGGLED';
});

Namespace('DreamUI');

DreamUI.Class(function SlideToggleAnimations() {
    Inherit(this, Component);

    this.onHover = function ({action}, object, active) {
        if(action == 'over'){
            object.toggleCircle.tween({scale: .75, x: active ? '180%' : '0%'}, 300, 'easeOutCubic');
        }else{
            object.toggleCircle.tween({scale: 1., x: active ? '180%' : '0%'}, 300, 'easeOutCubic');
        } 
    }

    this.onClick = function (object, active) {
        if(active) {
            object.toggle.tween({borderColor:object.activeColor}, 300, 'easeOutCubic')
            object.toggleCircle.tween({x:'180%', background: object.activeColor}, 300, 'easeOutCubic');
            object.toggleBg.tween({background: object.activeBgColor}, 300, 'easeOutCubic');
            
            object.text.tween({color:object.activeColor}, 300, 'easeOutCubic');
        }else{
            object.toggle.tween({borderColor:object.inactiveColor}, 300, 'easeOutCubic')
            object.toggleCircle.tween({x:'0%', background: object.inactiveColor}, 300, 'easeOutCubic');
            object.toggleBg.tween({background: object.inactiveBgColor}, 300, 'easeOutCubic');
           
            object.text.tween({color:object.inactiveColor}, 300, 'easeOutCubic');
        }
    };
}, 'static');

Namespace('DreamUI');

DreamUI.Class(function SlideToggleStyles() {
    Inherit(this, Component);

    const _this = this;

    (async function () {
        await DreamColors.instance().ready();

        _this.element = {
            position:'relative'
        }

        _this.container = {
            position:'relative',
            display:'flex',
            alignItems:'center'
        };

        _this.toggle = (object) => {
            return {
                position:'relative',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                border:`1px solid ${object.active ? object.activeColor : object.inactiveColor}`,
            };
        }

        _this.toggleBg = (object) => {
            return {
                position:'relative',
                width:'3.5rem',
                height:'1.25rem',
                background:object.active ? object.activeBgColor : object.inactiveBgColor,
                margin:'.5rem',
                borderRadius:'5rem'
            }
        }

        _this.toggleCircle = (object) => {
            return {
                width:'1.25rem',
                height:'1.25rem',
                background:object.active ? object.activeColor : object.inactiveColor,
                borderRadius:'50%'
            }
        }

        _this.text = (object) =>{
            return {
                paddingLeft:'1rem',
                color: object.active ? object.activeColor : object.inactiveColor,
                fontWeight:'300',
                position:'relative',
                font: `1.5rem ${DreamStyleguide.instance().fonts.primary}`,
            };
        }

        _this.flag('isReady', true);
    })();

    _this.ready = function () {
        return _this.wait('isReady');
    };
}, 'static');

Namespace("DreamUI");
/**
*
* @name Tab
* @memberOf DreamUI
*
* @param {Object[]} tabs - the tab panels that will be shown in the component
* @param {Class} tabs[].view - the view that will be shown in the panel
* @param {string} tabs[].label - the text that will be shown on the tab control
* @param {Object} tabs[].viewOptions - options/data to be passed into a panel view on initialization
* @param styles {Object}
* @param styles.element styling for the whole tab element
* @param styles.header styling for the tab controls
* @param styles.headerTabActive styling for the tab active state
* @param styles.headerTabInactive styling for the tab inactive state
* @param styles.content styling for the panel that holds views
* @param animation
* @param transitionDuration {number} [600]
* @param {string} [preset] - choice of preset for component
*/

DreamUI.Class(function Tab({
    persist = true,
    tabs = [],
    styles = {},
    animation = DreamUI.TabAnimations,
    preset = 'material'
}) {
    Inherit(this, DreamUI.DreamElement, 'div');

    const _this = this;
    const $this = _this.element;

    /**
	* @memberOf Tab
	* @type {StateArray}
	*/
    _this.tabs = new StateArray(tabs);
    /**
	* @memberOf Tab
	* @type {number}
	*/
    _this.activeIndex = 0;
    /**
	* @memberOf Tab
	* @type {array}
	*/
    _this.headerTabs = [];
    /**
	* @memberOf Tab
	* @type {array}
	*/
    _this.contentTabs = [];
    /**
	* @memberOf Tab
	*
	*/
    _this.bar = null;
    /**
	*
	* @memberOf Tab
	* @type {array} array to store badges added to tabs
	*/
    _this.headerTabsBadges = [];

    //*** Constructor
    (async function() {
        await DreamUI.TabStyles.ready();

        initElement();
        initBar();
        initTabs();

        animateBar();
    })();

    //** Private methods

    function initElement() {
        $this.css(_this.combineStyles([DreamUI.TabStyles[preset].element, styles.element]));

        _this.header = $this.create(`${_this.constructorName}__header`, 'ul');
        _this.header.css(_this.combineStyles([DreamUI.TabStyles[preset].header, styles.header]));

        _this.headerWrapper = _this.header.create(`${_this.constructorName}__header__wrapper`);
        _this.headerWrapper.css(_this.combineStyles([DreamUI.TabStyles[preset].headerWrapper, styles.headerWrapper]));

        _this.content = $this.create(`${_this.constructorName}__content`);
        _this.content.css(_this.combineStyles([DreamUI.TabStyles[preset].content, styles.content]));
    }

    function initBar() {
        _this.bar = _this.header.create(`${_this.constructorName}__bar`);
        _this.bar.css(_this.combineStyles([DreamUI.TabStyles[preset].bar, styles.bar]));
    }

    function initTabs() {
        _this.headerTabs = _this.tabs.map((tab, index) => {
            let label = tab.get('label');
            let isActiveTab = index === _this.activeIndex;
            let tabElement = _this.headerWrapper.create(`${_this.constructorName}__tab`);

            tabElement.attr('aria-controls', label);
            tabElement.attr('aria-selected', isActiveTab);
            tabElement.attr('id', `tab-${label}`);
            tabElement.attr('role', 'tab');
            tabElement.attr('data-index', index);
            tabElement.text(label);
            tabElement.index = index;

            if (isActiveTab) {
                tabElement.css(_this.combineStyles([DreamUI.TabStyles[preset].headerTabActive, styles.headerTabActive]));
            } else {
                tabElement.css(_this.combineStyles([DreamUI.TabStyles[preset].headerTabInactive, styles.headerTabInactive]));
            }

            if (index !== _this.tabs.length - 1) {
                tabElement.css(_this.combineStyles([DreamUI.TabStyles[preset].headerTabSpacing, styles.headerTabSpacing]));
            }

            tabElement.interact(handleTabHover, handleTabClick, label, label);

            return tabElement;
        });

        _this.content.css({
            width: `${_this.tabs.length * 100}%`
        });

        _this.contentTabs = _this.tabs.map((data, index) => {
            let tab = _this.content.create(`${_this.constructorName}__tab`);

            tab.css(_this.combineStyles([DreamUI.TabStyles[preset].contentTab, styles.contentTab]));
            tab.data = data;

            if (persist) {
                tab.view = _this.initClass(data.get('view'), {
                    ...data.get('viewOptions'),
                    tab: _this
                }, [tab]);

                let viewNotifications = data.get('notifications');

                if (viewNotifications) {
                    viewNotifications.forEach(event => {
                        _this.events.sub(event, _ => handleNotification(index));
                    });
                }
            } else if (_this.activeIndex === index) {
                _this.contentTabClass = _this.initClass(data.get('view'), {
                    ...data.get('viewOptions'),
                    tab: _this
                }, [tab]);
            }

            if (_this.activeIndex !== index) {
                tab.invisible();
            }

            return tab;
        });
    }

    async function switchTab(selectedIndex) {
        if (selectedIndex === _this.activeIndex) return;

        _this.tab = _this.tabs[selectedIndex];
        _this.headerTab = _this.headerTabs[selectedIndex];
        _this.contentTab = _this.contentTabs[selectedIndex];

        /* updated selected atrr for accesibility */
        _this.headerTab.attr('aria-selected', true);
        _this.headerTab.css(_this.combineStyles([DreamUI.TabStyles[preset].headerTabActive, styles.headerTabActive]));

        _this.headerTabs[_this.activeIndex].attr('aria-selected', false);
        _this.headerTabs[_this.activeIndex].css(_this.combineStyles([DreamUI.TabStyles[preset].headerTabInactive, styles.headerTabInactive]));

        _this.clearBadge(selectedIndex);

        /* now update the active index to the selected tab*/
        _this.activeIndex = selectedIndex;

        let promise = animation.animateChange(_this, selectedIndex);

        if (persist) {
            _this.contentTabClass = _this.contentTab.view;
        } else {
            let contentTabClass = _this.initClass(_this.contentTab.data.get('view'), {
                ..._this.contentTab.data.get('viewOptions'),
                tab: _this
            }, [_this.contentTab]);

            await promise;

            if (_this.contentTabClass) {
                _this.contentTabClass.destroy();
                _this.contentTabClass = null;
            }

            _this.contentTabClass = contentTabClass;
        }

        addPanelAccessibility(_this.contentTabClass.element, _this.tab.get('label'));

        animateBar();
    }

    function animateBar() {
        if (!$this || !$this.div) return;

        animation.animateBar(_this);
    }

    function addPanelAccessibility(element, label) {
        element.attr('id', `${label}`);
        element.attr('role', 'tabpanel');
        element.attr('aria-labeledby', `tab-${label}`);
    }

    //** Event handlers
    function handleNotification(index) {
        _this.addBadge(index);
    }

    function handleTabClick(event) {
        switchTab(event.object.index);
    }

    function handleTabHover(event) {
        animation.onHover(event);
    }

    //** Pubilc methods
    /**
	*
	* @memberOf Tab
	* @param replacedStyles {object}
	*
	*/
    _this.setStyles = replacedStyles => {
        $this.css(replacedStyles.element);

        _this.header.css(replacedStyles.header);
        _this.content.css(replacedStyles.content);
        _this.bar.css(replacedStyles.bar);
    };
    /**
	*
	* @memberOf Tab
	* @param tabIndex {number}
	* @param count {string} -text to be displayed on badge
	* @param badgeStyles {object} provide styles to the badge
	* @param badgeStyles.element - general element styling
	* @param badgeStyles.text - styling for the badges text
	*/
    _this.addBadge = (index, count = "", badgeStyles = {}) => {
        _this.clearBadge(index);

        _this.headerTabsBadges[index] = _this.initClass(DreamUI.Badge, {
            count,
            size: "small",
            styles: _this.combineStyles([DreamUI.TabStyles[preset].badge, styles.badge]),
            parent: _this.headerTabs[index]
        });
    };
    /**
	*
	* @memberOf Tab
	* @param tabIndex {number} -index of the tab badge you want cleared
	*/

    _this.clearBadge = (tabIndex) => {
        if (_this.headerTabsBadges[tabIndex]) {
            _this.headerTabsBadges[tabIndex].destroy();
            _this.headerTabsBadges[tabIndex] = null;
        }
    };
});

Namespace("DreamUI");

/**
 *
 * @name TabAnimations
 * @memberOf DreamUI
 */
DreamUI.Class(function TabAnimations() {
    Inherit(this, Component);

    const _this = this;

    const DURATION = 600;
    const EASE = 'easeInOutCubic';

    /**
    * @memberOf TabAnimations
    * @param action {string}
    * @param tab {element}
    */
    this.onHover = function({ action, object }, tab) {
        switch (action) {
            case 'over': object?.tween({ opacity: 0.5 }, DURATION, EASE); break;
            case 'out': object?.tween({ opacity: 1 }, DURATION, EASE); break;
        }
    };

    this.onClick = function() {

    };

    /**
    * @memberOf TabAnimations
    * @param view {element}
    * @param transitionDirection {string}
    */
    this.animateIn = function(view, transitionDirection) {
        if (transitionDirection === 'ltr') {
            view.css({ opacity: 0 }).transform({ x: '-100%' });

            return view.tween({ opacity: 1, x: 0 }, DURATION, EASE).promise();
        }

        view.css({ opacity: 0 }).transform({ x: '100%' });

        return view.tween({ opacity: 1, x: 0 }, DURATION, EASE).promise();
    };

    /**
    * @memberOf TabAnimations
    * @param view {element}
    * @param transitionDirection {string}
    */
    this.animateOut = function(view, transitionDirection) {
        if (transitionDirection === 'ltr') {
            return view.tween({ opacity: 0, x: '100%' }, DURATION, EASE).promise();
        }

        return view.tween({ opacity: 1, x: '-100%' }, DURATION, EASE).promise();
    };

    /**
    * @memberOf TabAnimations
    * @param bar {element}
    * @param tab - the tab class that we are working with
    */
    this.animateBar = async function(tab) {
        await this.wait(200);

        let scroll = tab.header.div.scrollLeft || 0;
        let padding = parseInt(getComputedStyle(tab.header.div).paddingLeft);

        let { left, width } = tab.headerTabs[tab.activeIndex].div.getBoundingClientRect();

        const fullWidth = tab.element.div.getBoundingClientRect().left;

        left += scroll;

        tab.bar.tween({ width, x: left - fullWidth - padding, y: '0' }, DURATION, EASE);
    };

    this.animateChange = function({ content, contentTabs, header, headerWrapper, headerTabs, headerTab }, index) {
        let headerStyles = getComputedStyle(header.div);
        let headerPadding = parseInt(headerStyles.paddingLeft);

        let xLimit = headerWrapper.div.clientWidth - header.div.clientWidth + headerPadding * 2;
        let x = Math.clamp(headerTab.div.offsetLeft, xLimit, 0);

        headerWrapper.tween({ x: -x }, DURATION, EASE);

        content.tween({ x: `-${index / headerTabs.length * 100}%` }, DURATION, EASE);
        contentTabs.forEach((tab, tabIndex) => {
            if (index === tabIndex) {
                tab.css({ height: '100%' });
                tab.visible();
                tab.tween({ opacity: 1 }, DURATION * 0.5, EASE);
            } else {
                tab.tween({ opacity: 0 }, DURATION * 0.5, EASE, _ => {
                    tab.invisible();
                    tab.css({ height: 0 });
                });
            }
        });

        return _this.wait(DURATION);
    };
}, 'static');

Namespace('DreamUI');

/**
 *
 * @name TabStyles
 * @memberOf DreamUI
 */
DreamUI.Class(function TabStyles() {
    Inherit(this, Component);

    const _this = this;

    (async function () {
        await DreamColors.instance().ready();
        await DreamStyleguide.instance().ready();

        const BASE_ELEMENT = {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'hidden',
            width: '100%'
        };

        const BASE_HEADER = {
            alignItems: 'center',
            display: 'flex',
            padding: '0 3rem',
            whiteSpace: 'nowrap',
            width: '100%'
        };

        const BASE_HEADER_CONTENT = {
            alignItems: 'center',
            display: 'flex',
        };

        const BASE_HEADER_TAB = {
            ...DreamStyleguide.instance().label3,
            alignItems: 'center',
            cursor: 'pointer',
            display: 'flex',
            fontWeight: 'bold',
            justifyContent: 'center',
            outline: 'none',
            padding: '0 0 2rem'
        };

        const BASE_BORDERED_TAB = {
            ...DreamStyleguide.instance().buttonMedium,
            alignItems: 'center',
            border: `0.2rem solid ${DreamColors.instance().blue500}`,
            borderRadius: '5rem',
            cursor: 'pointer',
            display: 'flex',
            fontWeight: 'bold',
            justifyContent: 'center',
            outline: 'none',
            padding: '1.1rem 2rem'
        };

        const BASE_CONTENT = {
            display: 'flex',
            height: '100%',
            overflow: 'hidden',
            width: '100%'
        };

        const BASE_CONTENT_TAB = {
            height: '100%',
            overflow: 'hidden',
            position: 'relative',
            width: '100%'
        };

        const BASE_BADGE = {
            height: '0.7rem',
            right: '1.3rem',
            top: '1.3rem',
            width: '0.7rem'
        };

        _this.material = {
            element: {
                ...BASE_ELEMENT
            },

            header: {
                ...BASE_HEADER,
                borderBottom: `1px solid ${DreamColors.instance().gray300}`
            },
            headerWrapper: {
                ...BASE_HEADER_CONTENT
            },

            headerTabActive: {
                ...BASE_HEADER_TAB,
                color: DreamColors.instance().black
            },
            headerTabInactive: {
                ...BASE_HEADER_TAB,
                color: DreamColors.instance().gray500
            },
            headerTabSpacing: {
                marginRight: '2.5rem'
            },

            content: {
                ...BASE_CONTENT
            },
            contentTab: {
                ...BASE_CONTENT_TAB
            },

            bar: {
                background: DreamColors.instance().blue500,
                border: 'none',
                bottom: 0,
                height: 2,
                position: 'absolute',
                width: 'auto',
                zIndex: 1
            },

            badge: {
                element: {
                    ...BASE_BADGE
                }
            }
        };

        _this.rounded = {
            element: {
                ...BASE_ELEMENT
            },

            header: {
                ...BASE_HEADER,
                paddingBottom: '2rem'
            },
            headerWrapper: {
                ...BASE_HEADER_CONTENT
            },

            headerTabActive: {
                ...BASE_BORDERED_TAB,
                background: DreamColors.instance().blue500,
                color: `${DreamColors.instance().white}`
            },
            headerTabInactive: {
                ...BASE_BORDERED_TAB,
                background: 'transparent',
                color: DreamColors.instance().blue500
            },
            headerTabSpacing: {
                marginRight: '1.2rem'
            },

            content: {
                ...BASE_CONTENT
            },
            contentTab: {
                ...BASE_CONTENT_TAB
            },

            bar: {
                display: 'none'
            },

            badge: {
                element: {
                    ...BASE_BADGE
                }
            }
        };

        _this.flag('isReady', true);
    })();

    _this.ready = function () {
        return _this.wait('isReady');
    };
}, 'static');

/**
 * User moderation
 * @name DreamModeration
 *
 * @example
 *
 */
Class(function DreamModeration() {
    Inherit(this, Model);
    const _this = this;

    let _unsubscribe;
    let _data;

    const PLATFORM_BANNED_MESSAGE = `There's an issue with your account. Please get in touch with us.`;

    //*** Constructor
    !(async function () {
        await PlatformFirestore.ready();
        await User.ready();

        if (await User.checkLoginStatusOnce()) loggedIn();
        User.loggedIn(loggedIn);
        User.loggedOut(loggedOut);
    })();

    function loggedIn() {
        addHandlers();
    }

    function loggedOut() {
        removeHandlers();
    }

    function addHandlers() {
        removeHandlers();
        // update local reference to doc if changes are made
        // listen for new database events to user moderation doc
        _unsubscribe = PlatformFirestore.collection('moderation').doc(User.uid).onSnapshot(async (snapshot) => {
            let doc = snapshot.data();
            if (doc) _data = doc;
            else _data = {};
            if (_this.isPlatformBanned()) {
                alert(PLATFORM_BANNED_MESSAGE);
                Track.event('moderation', 'platformBanned_loggedOut');
                await PlatformAuth.logout();
                window.location.reload();
            }
            if (_data.blocked) PlayerModel.set('blocked', _data.blocked);
            _this.dataReady = true;
            _this.events.fire(Events.UPDATE);
        }, error => { });
    }

    function removeHandlers() {
        return _unsubscribe && _unsubscribe();
    }

    _this.removeHandlers = function () {
        return removeHandlers();
    };

    // log to firestore/spreadsheet
    function log(type, uid, params = {}) {
        let data = { type, uid, reported_by: User.uid, date: Firestore.FieldValue.serverTimestamp(), recorded: false };
        if (params.reason) data.reason = params.reason;
        if (params.message) data.message = params.message;
        data.link = location.href;
        PlatformFirestore.collection('moderation_logs').add(data);
    }

    // validation
    function valid(uid, moderatorOnly = true) {
        if (!uid) return false;
        if (!User.uid) return false;
        if (moderatorOnly && !_this.isModerator()) return false;
        return true;
    }

    _this.log = function (type, uid) {
        log(type, uid);
    };

    /**
     * Ban another user by uid
     * @name ban
     * @memberof DreamModeration
     *
     * @param {string} uid
    */
    _this.ban = async function (uid) {
        if (!valid(uid)) return;
        if (!Hydra.LOCAL && User.uid === uid) return; // cannot ban/unban self
        await PlatformFirestore.collection('moderation').doc(uid).set({ banned: true }, { merge: true });
        log('ban', uid);
        Track.event('moderation', 'ban');
    };

    /**
     * Unban another user by uid
     * @name unban
     * @memberof DreamModeration
     *
     * @param {string} uid
    */
    _this.unban = async function (uid) {
        if (!valid(uid)) return;
        if (!Hydra.LOCAL && User.uid === uid) return; // cannot ban/unban self
        await PlatformFirestore.collection('moderation').doc(uid).set({ banned: false }, { merge: true });
        log('unban', uid);
        Track.event('moderation', 'unban');
    };

    /**
     * Platform ban another user by uid. Must be Moderator.
     * @name platformBan
     * @memberof DreamModeration
     *
     * @param {string} uid
    */
    _this.platformBan = async function (uid) {
        if (!valid(uid)) return;
        await PlatformFirestore.collection('moderation').doc(uid).set({ platformBanned: true }, { merge: true });
        log('platform_ban', uid);
        Track.event('moderation', 'platformBan');
    };

    /**
     * Remove platform ban for another user by uid.
     * @name platformUnban
     * @memberof DreamModeration
     *
     * @param {string} uid
    */
    _this.platformUnban = async function (uid) {
        if (!valid(uid)) return;
        await PlatformFirestore.collection('moderation').doc(uid).set({ platformBanned: false }, { merge: true });
        log('platform_unban', uid);
        Track.event('moderation', 'platformUnban');
    };

    /**
     * Block another user
     * @name block
     * @memberof DreamModeration
     *
     * @param {string} uid
    */
    _this.block = async function (uid) {
        if (!valid(uid, false)) return;

        if (!_data) _data = {};
        if (!_data.blocked) _data.blocked = [];
        if (!_data.blocked.includes(uid)) _data.blocked.push(uid);

        await PlatformFirestore.collection('moderation').doc(User.uid).set({ blocked: _data.blocked }, { merge: true });
        log('block', uid);
        Track.event('moderation', 'block');
    };

    /**
    * Unblock another user
    * @name unblock
    * @memberof DreamModeration
    *
    * @param {string} uid
   */
    _this.unblock = async function (uid) {
        if (!valid(uid, false)) return;

        // remove user from blocked list
        if (!_data.blocked) _data.blocked = [];
        _data.blocked = _data.blocked.filter((_uid) => _uid !== uid);

        await PlatformFirestore.collection('moderation').doc(User.uid).set({ blocked: _data.blocked }, { merge: true });
        log('unblock', uid);
        Track.event('moderation', 'unblock');
    };

    /**
     * Report another user
     * @name reportUser
     * @memberof DreamModeration
     *
     * @param {string} uid
    */
    _this.reportUser = async function (uid, reason = '') {
        if (!valid(uid, false)) return;
        log('report_user', uid, { reason });
        Track.event('moderation', 'report_user');
    };

    /**
     * Report a chat message
     * @name reportMessage
     * @memberof DreamModeration
     *
     * @param {string} uid
     * @param {string} message
     * @param {string} reason
    */
    _this.reportMessage = async function (uid, message = '', reason = '') {
        if (!valid(uid, false)) return;
        log('report_message', uid, { message, reason });
        Track.event('moderation', 'report_message');
    };

    /**
     * Remove a chat message
     * @name removeMessage
     * @memberof DreamModeration
     *
     * @param {string} uid
     * @param {string} message
    */
    _this.removeMessage = function (uid, message = '') {
        if (!valid(uid)) return;
        log('remove_message', uid, { message });
        Track.event('moderation', 'remove_message');
    };

    /**
     * Block message, called when a message is blocked because of profanity
     * @name blockMessage
     * @memberof DreamModeration
     *
     * @param {string} uid
     * @param {string} message
    */
    _this.blockMessage = async function (uid, message = '') {
        if (!valid(uid, false)) return;
        log('block_message', uid, { message });
        Track.event('moderation', 'block_message');
    };

    /**
    * Return list of blocked users
    * @name blocked
    * @memberof DreamModeration
    *
    * @returns {array} array of uids of blocked users
   */
    _this.blocked = function () {
        if (_data && _data.blocked && _data.blocked.length) return _data.blocked;
        return null;
    };

    /**
     * Check if uid is blocked
     * @name isBlocked
     * @memberof DreamModeration
     *
     * @param {string} uid to check
     * @returns {array} array of uids of blocked users
    */
    _this.isBlocked = function (uid) {
        if (_data && _data.blocked && _data.blocked.length && _data.blocked.includes(uid)) return true;
        return false;
    };

    /**
     * Check if current user is blocked by list of users
     * @name isBlockedByUsers
     * @memberof DreamModeration
     *
     * @param {array} users list of users to check if current user is blocked by
     * @returns {boolean} returns true if any of the users has blocked current user, otherwise false
    */
    _this.isBlockedByUsers = function (users) {
        if (users && users.length && _data && _data.blockedBy && _data.blockedBy.length) {
            return users.some(item => _data.blockedBy.includes(item));
        }
        return false;
    };

    /**
     * Check if current user is banned
     * @name isBanned
     * @memberof DreamModeration
     *
     * @returns {boolean} returns true if current user is banned
    */
    _this.isBanned = function () {
        if (_data && _data.banned) return true;
        return false;
    };

    /**
     * Check if current user is banned
     * @name isPlatformBanned
     * @memberof DreamModeration
     *
     * @returns {boolean} returns true if current user is platform banned
    */
    _this.isPlatformBanned = function () {
        if (_data && _data.platformBanned) return true;
        return false;
    };

    /**
     * Check if current user is a moderator
     * @name isModerator
     * @memberof DreamModeration
     *
     * @returns {boolean} returns true if current user is a moderator
    */
    _this.isModerator = function () {
        if (User.profile?.claims?.admin) return true;
        return false;
    };
}, 'static');

/**
 * Dream bad words utility to obscure bad words and block phrases with really bad words
 * @name DreamWords
 *
 * @example
 * // clean phrase with bad words
 * let phrase = 'a phrase that includes a bad word like shit';
 * let clean = DreamWords.clean(phrase);
 * console.log(clean);
 * // "phrase with bad word like ****""
 *
 * // block word with really bad word
 * let block = DreamWords.block('really bad word');
 * if (block) return; // block message, don't let through
 *
 */
Class(function DreamWords() {
    Inherit(this, Model);
    const _this = this;

    /**
     * The following list of words will be starred out in a phrase
     *
     * Bad words are hardcoded here and encoded with btoa()
     * To update the words list: update commented words array and then run `btoa(['the','array'])`,
     * paste in the encoded string below as const
     * `["ahole","anus","ash0le","ash0les","asholes","ass","Ass Monkey","Assface","assh0le","assh0lez","asshole","assholes","assholz","asswipe","azzhole","bassterds","bastard","bastards","bastardz","basterds","basterdz","Biatch","bitch","bitches","Blow Job","boffing","butthole","buttwipe","c0ck","c0cks","c0k","Carpet Muncher","cawk","cawks","Clit","cnts","cntz","cock","cockhead","cock-head","cocks","CockSucker","cock-sucker","cum","dild0","dild0s","dildo","dildos","dilld0","dilld0s","enema","f u c k","f u c k e r","fuck","fucker","fuckin","fucking","fucks","Fudge Packer","fuk","Fukah","Fuken","fuker","Fukin","Fukk","Fukkah","Fukken","Fukker","Fukkin","God-damned","h00r","h0ar","h0re","hoar","hoor","hoore","jackoff","jerk-off","jisim","jiss","jizm","jizz","knobz","kunt","kunts","kuntz","Lezzian","massterbait","masstrbait","masstrbate","masterbaiter","masterbate","masterbates","Motha Fucker","Motha Fuker","Motha Fukkah","Motha Fukker","Mother Fucker","Mother Fukah","Mother Fuker","Mother Fukkah","Mother Fukker","mother-fucker","Mutha Fucker","Mutha Fukah","Mutha Fuker","Mutha Fukkah","Mutha Fukker","nastt","orafis","orgasim;","orgasm","orgasum","packi","paki","pakie","paky","pecker","peeenus","peeenusss","peenus","peinus","pen1s","penas","penis","penis-breath","penus","penuus","polac","polack","polak","Poonani","pr1c","pr1ck","pr1k","pusse","pussee","pussy","puuke","puuker","recktum","rectum","scank","schlong","semen","Sh!t","sh1t","sh1ter","sh1ts","sh1tter","sh1tz","shit","shits","shitter","Shitty","Shity","shitz","Shyt","Shyte","Shytty","Shyty","skanck","skank","skankee","skankey","skanks","Skanky","slag","slut","sluts","Slutty","slutz","son-of-a-bitch","tit","va1jina","vag1na","vagiina","vagina","vaj1na","vajina","vullva","vulva","w0p","wh00r","wh0re","whore","b!+ch","bitch","blowjob","clit","arschloch","fuck","shit","ass","asshole","b!tch","b17ch","b1tch","bastard","bi+ch","boiolas","buceta","c0ck","cawk","cipa","clits","cock","cum","cunt","dildo","dirsa","ejakulate","fcuk","fuk","fux0r","hoer","hore","jism","kawk","l3itch","l3i+ch","masturbate","masterbat*","masterbat3","motherfucker","nutsack","phuck","pimpis","pusse","pussy","scrotum","sh!t","shi+","sh!+","slut","smut","teets","tits","boobs","b00bs","teez","testical","testicle","titt","w00se","jackoff","wank","whoar","whore","*damn","*fuck*","*shit*","@$$","amcik","andskota","arse*","assrammer","ayir","bi7ch","bitch*","bollock*","butt-pirate","cabron","cazzo","chraa","chuj","Cock*","daygo","dego","dick*","dike*","dupa","dziwka","ejackulate","Ekrem*","Ekto","enculer","faen","fanculo","fanny","feces","feg","Felcher","ficken","fitt*","Flikker","foreskin","Fu(*","fuk*","futkretzn","guiena","h0r","h4x0r","hell","helvete","hoer*","honkey","Huevon","hui","jizz","kanker*","klootzak","knulle","kuk","kuksuger","Kurac","kurwa","kusi*","kyrpa*","lesbo","mamhoon","masturbat*","mibun","monkleigh","mouliewop","muie","mulkku","muschi","nepesaurio","orospu","paska*","perse","picka","pierdol*","pillu*","pimmel","pizda","poontsee","porn","p0rn","pr0n","pula","pule","puta","puto","qahbeh","queef*","rautenberg","schaffer","scheiss*","schlampe","sh!t*","sharmuta","sharmute","shipal","shiz","skribz","skurwysyn","sphencter","spierdalaj","splooge","b00b*","testicle*","titt*","twat","vittu","wank*","wichser","wop*","yed","zabourah","damn"]`
     *
     * @constant
     * @memberof DreamWords
     * @type {string}
     * @example
     * // input: this is shit
     * // output: this is ****
    */
    const BAD_WORDS = atob('YWhvbGUsYW51cyxhc2gwbGUsYXNoMGxlcyxhc2hvbGVzLGFzcyxBc3MgTW9ua2V5LEFzc2ZhY2UsYXNzaDBsZSxhc3NoMGxleixhc3Nob2xlLGFzc2hvbGVzLGFzc2hvbHosYXNzd2lwZSxhenpob2xlLGJhc3N0ZXJkcyxiYXN0YXJkLGJhc3RhcmRzLGJhc3RhcmR6LGJhc3RlcmRzLGJhc3RlcmR6LEJpYXRjaCxiaXRjaCxiaXRjaGVzLEJsb3cgSm9iLGJvZmZpbmcsYnV0dGhvbGUsYnV0dHdpcGUsYzBjayxjMGNrcyxjMGssQ2FycGV0IE11bmNoZXIsY2F3ayxjYXdrcyxDbGl0LGNudHMsY250eixjb2NrLGNvY2toZWFkLGNvY2staGVhZCxjb2NrcyxDb2NrU3Vja2VyLGNvY2stc3Vja2VyLGN1bSxkaWxkMCxkaWxkMHMsZGlsZG8sZGlsZG9zLGRpbGxkMCxkaWxsZDBzLGVuZW1hLGYgdSBjIGssZiB1IGMgayBlIHIsZnVjayxmdWNrZXIsZnVja2luLGZ1Y2tpbmcsZnVja3MsRnVkZ2UgUGFja2VyLGZ1ayxGdWthaCxGdWtlbixmdWtlcixGdWtpbixGdWtrLEZ1a2thaCxGdWtrZW4sRnVra2VyLEZ1a2tpbixHb2QtZGFtbmVkLGgwMHIsaDBhcixoMHJlLGhvYXIsaG9vcixob29yZSxqYWNrb2ZmLGplcmstb2ZmLGppc2ltLGppc3Msaml6bSxqaXp6LGtub2J6LGt1bnQsa3VudHMsa3VudHosTGV6emlhbixtYXNzdGVyYmFpdCxtYXNzdHJiYWl0LG1hc3N0cmJhdGUsbWFzdGVyYmFpdGVyLG1hc3RlcmJhdGUsbWFzdGVyYmF0ZXMsTW90aGEgRnVja2VyLE1vdGhhIEZ1a2VyLE1vdGhhIEZ1a2thaCxNb3RoYSBGdWtrZXIsTW90aGVyIEZ1Y2tlcixNb3RoZXIgRnVrYWgsTW90aGVyIEZ1a2VyLE1vdGhlciBGdWtrYWgsTW90aGVyIEZ1a2tlcixtb3RoZXItZnVja2VyLE11dGhhIEZ1Y2tlcixNdXRoYSBGdWthaCxNdXRoYSBGdWtlcixNdXRoYSBGdWtrYWgsTXV0aGEgRnVra2VyLG5hc3R0LG9yYWZpcyxvcmdhc2ltOyxvcmdhc20sb3JnYXN1bSxwYWNraSxwYWtpLHBha2llLHBha3kscGVja2VyLHBlZWVudXMscGVlZW51c3NzLHBlZW51cyxwZWludXMscGVuMXMscGVuYXMscGVuaXMscGVuaXMtYnJlYXRoLHBlbnVzLHBlbnV1cyxwb2xhYyxwb2xhY2sscG9sYWssUG9vbmFuaSxwcjFjLHByMWNrLHByMWsscHVzc2UscHVzc2VlLHB1c3N5LHB1dWtlLHB1dWtlcixyZWNrdHVtLHJlY3R1bSxzY2FuayxzY2hsb25nLHNlbWVuLFNoIXQsc2gxdCxzaDF0ZXIsc2gxdHMsc2gxdHRlcixzaDF0eixzaGl0LHNoaXRzLHNoaXR0ZXIsU2hpdHR5LFNoaXR5LHNoaXR6LFNoeXQsU2h5dGUsU2h5dHR5LFNoeXR5LHNrYW5jayxza2Fuayxza2Fua2VlLHNrYW5rZXksc2thbmtzLFNrYW5reSxzbGFnLHNsdXQsc2x1dHMsU2x1dHR5LHNsdXR6LHNvbi1vZi1hLWJpdGNoLHRpdCx2YTFqaW5hLHZhZzFuYSx2YWdpaW5hLHZhZ2luYSx2YWoxbmEsdmFqaW5hLHZ1bGx2YSx2dWx2YSx3MHAsd2gwMHIsd2gwcmUsd2hvcmUsYiErY2gsYml0Y2gsYmxvd2pvYixjbGl0LGFyc2NobG9jaCxmdWNrLHNoaXQsYXNzLGFzc2hvbGUsYiF0Y2gsYjE3Y2gsYjF0Y2gsYmFzdGFyZCxiaStjaCxib2lvbGFzLGJ1Y2V0YSxjMGNrLGNhd2ssY2lwYSxjbGl0cyxjb2NrLGN1bSxjdW50LGRpbGRvLGRpcnNhLGVqYWt1bGF0ZSxmY3VrLGZ1ayxmdXgwcixob2VyLGhvcmUsamlzbSxrYXdrLGwzaXRjaCxsM2krY2gsbWFzdHVyYmF0ZSxtYXN0ZXJiYXQqLG1hc3RlcmJhdDMsbW90aGVyZnVja2VyLG51dHNhY2sscGh1Y2sscGltcGlzLHB1c3NlLHB1c3N5LHNjcm90dW0sc2ghdCxzaGkrLHNoISssc2x1dCxzbXV0LHRlZXRzLHRpdHMsYm9vYnMsYjAwYnMsdGVleix0ZXN0aWNhbCx0ZXN0aWNsZSx0aXR0LHcwMHNlLGphY2tvZmYsd2Fuayx3aG9hcix3aG9yZSwqZGFtbiwqZnVjayosKnNoaXQqLEAkJCxhbWNpayxhbmRza290YSxhcnNlKixhc3NyYW1tZXIsYXlpcixiaTdjaCxiaXRjaCosYm9sbG9jayosYnV0dC1waXJhdGUsY2Ficm9uLGNhenpvLGNocmFhLGNodWosQ29jayosZGF5Z28sZGVnbyxkaWNrKixkaWtlKixkdXBhLGR6aXdrYSxlamFja3VsYXRlLEVrcmVtKixFa3RvLGVuY3VsZXIsZmFlbixmYW5jdWxvLGZhbm55LGZlY2VzLGZlZyxGZWxjaGVyLGZpY2tlbixmaXR0KixGbGlra2VyLGZvcmVza2luLEZ1KCosZnVrKixmdXRrcmV0em4sZ3VpZW5hLGgwcixoNHgwcixoZWxsLGhlbHZldGUsaG9lciosaG9ua2V5LEh1ZXZvbixodWksaml6eixrYW5rZXIqLGtsb290emFrLGtudWxsZSxrdWssa3Vrc3VnZXIsS3VyYWMsa3Vyd2Esa3VzaSosa3lycGEqLGxlc2JvLG1hbWhvb24sbWFzdHVyYmF0KixtaWJ1bixtb25rbGVpZ2gsbW91bGlld29wLG11aWUsbXVsa2t1LG11c2NoaSxuZXBlc2F1cmlvLG9yb3NwdSxwYXNrYSoscGVyc2UscGlja2EscGllcmRvbCoscGlsbHUqLHBpbW1lbCxwaXpkYSxwb29udHNlZSxwb3JuLHAwcm4scHIwbixwdWxhLHB1bGUscHV0YSxwdXRvLHFhaGJlaCxxdWVlZioscmF1dGVuYmVyZyxzY2hhZmZlcixzY2hlaXNzKixzY2hsYW1wZSxzaCF0KixzaGFybXV0YSxzaGFybXV0ZSxzaGlwYWwsc2hpeixza3JpYnosc2t1cnd5c3luLHNwaGVuY3RlcixzcGllcmRhbGFqLHNwbG9vZ2UsYjAwYiosdGVzdGljbGUqLHRpdHQqLHR3YXQsdml0dHUsd2Fuayosd2ljaHNlcix3b3AqLHllZCx6YWJvdXJhaCxkYW1u').split(',');

    /**
     * The following list of words will star out the entire word that it's included in.
     * To update the words list: update commented words array and then run `btoa(['the','array'])`,
     * paste in the encoded string below as const
     * `["fuck","bitch","assface","cunt","shit","nigger"]`
     *
     * @constant
     * @memberof DreamWords
     * @type {string}
     * @example
     * // input: this is shitty!!!
     * // output: this is *********
     *
    */
    const BAD_WORDS_INCLUDES = atob('ZnVjayxiaXRjaCxhc3NmYWNlLGN1bnQsc2hpdCxuaWdnZXI=').split(',');

    /**
     * the following list of very bad words will block the message from being sent entirely
     * To update the words list: update commented words array and then run `btoa(['the','array'])`,
     * paste in the encoded string below as const
     * `["bastard","twat","fucker","cunt*","cunts","cuntz","dyke","fag","fag*","fag1t","faget","fagg1t","faggit","faggot","fagg0t","f@ggot","f@gg0t","f@g","f@gs","fagit","fags","fagz","faig","faigs","gook","g00k","jap","japs","n1gr","nigger","n1gger","*nigger*","nigger*","nigur;","niiger;","niigr;","retard","nigga","niglet","n1glet","nigglet","n1gglet","chink","fatass","shemale","tranny","tr@nny","spic","spick","injun","kike","k1ke","kyke","wetback*","Fotze"]`
     *
     * @constant
     * @memberof DreamWords
     * @type {string}
     * @example
     * // input: this is shitty!!!
     * // output: this is *********
    */

    const BLOCK_WORDS = atob('YmFzdGFyZCx0d2F0LGZ1Y2tlcixjdW50KixjdW50cyxjdW50eixkeWtlLGZhZyxmYWcqLGZhZzF0LGZhZ2V0LGZhZ2cxdCxmYWdnaXQsZmFnZ290LGZhZ2cwdCxmQGdnb3QsZkBnZzB0LGZAZyxmQGdzLGZhZ2l0LGZhZ3MsZmFneixmYWlnLGZhaWdzLGdvb2ssZzAwayxqYXAsamFwcyxuMWdyLG5pZ2dlcixuMWdnZXIsKm5pZ2dlciosbmlnZ2VyKixuaWd1cjssbmlpZ2VyOyxuaWlncjsscmV0YXJkLG5pZ2dhLG5pZ2xldCxuMWdsZXQsbmlnZ2xldCxuMWdnbGV0LGNoaW5rLGZhdGFzcyxzaGVtYWxlLHRyYW5ueSx0ckBubnksc3BpYyxzcGljayxpbmp1bixraWtlLGsxa2Usa3lrZSx3ZXRiYWNrKixGb3R6ZQ==').split(',');

    var splitRegex = /\b/;
    var regex = /[^a-zA-Z0-9|\$|\@]|\^/g;
    var replaceRegex = /\w/g;
    var placeHolder = '*';

    //*** Constructor
    !(async function () {
        await Hydra.ready();
        _this.dataReady = true;
    })();

    function bad(string) {
        return BAD_WORDS.filter((word) => {
            const wordExp = new RegExp(`\\b${word.replace(/(\W)/g, '\\$1')}\\b`, 'gi');
            return wordExp.test(string);
        }).length > 0 || false;
    }

    function block(string) {
        return BLOCK_WORDS.filter((word) => {
            const wordExp = new RegExp(`\\b${word.replace(/(\W)/g, '\\$1')}\\b`, 'gi');
            return wordExp.test(string);
        }).length > 0 || false;
    }

    function replaceWord(string) {
        return string
            .replace(regex, '')
            .replace(replaceRegex, placeHolder);
    }

    /**
     * Check if phrase contains word in blocked list
     * @memberof DreamWords
     * @param string phrase to check whether blocked word exists
     * @returns {Boolean} true if phrase contains word from blocked list
    */
    this.block = (string) => {
        if (!BLOCK_WORDS) return false;
        try {
            let isBlock = false;
            string.split(splitRegex).map((word) => {
                if (block(word)) isBlock = true;
            });
            return isBlock;
        } catch (error) {
            return false;
        }
    };

    /**
     * Clean phrase with any words in bad words list
     * @memberof DreamWords
     * @param string phrase to clean and return censored version
     * @returns {String} phrase with bad words censored with *
    */
    this.clean = (string) => {
        if (!BAD_WORDS) return string;
        try {
            let pass1 = string.split(splitRegex).map((word) => (bad(word) ? replaceWord(word) : word)).join(splitRegex.exec(string)[0]);
            const isMatch = BAD_WORDS_INCLUDES.some(word => pass1.toLowerCase().includes(word));
            return isMatch ? "*".repeat(pass1.length) : pass1;
        } catch (error) {
            return string;
        }
    };
}, 'static');

Class(function SSTests() {
    const _this = this;

    this.mirrorSize = function() {
        if (GPU.mobileLT(0)) return 256 / 2;
        if (GPU.mobileLT(1)) return 256 / 2;
        if (GPU.mobileLT(2)) return 256;
        if (GPU.mobileLT(3)) return 512;
        if (GPU.lt(0)) return 256 / 2;
        if (GPU.lt(1)) return 256 / 2;
        if (GPU.lt(2)) return 256;
        // if (GPU.lt(3)) return 512;
        // return 1024;
        return 512;
    }

    this.renderMirror = function() {
        if (Platform.usingVR()) return false;
        if (GPU.mobileLT(2)) return false;
        if (GPU.lt(1)) return false;
        return true;
    }

    this.hasBirds = function() {
        if (GPU.lt(1)) return false;
        if (GPU.mobileLT(2)) return false;
        return true;
    }

}, 'static');

Class(function ScheduleUtil() {
    Inherit(this, Component);
    const _this = this;
    var _save = Render.TIME;
    var _now = new Date();
    var _start = getUTC();
    var _current = 0;

    //*** Constructor
    (async function () {
        await SecretData.ready();
        _this.startRender(loop);
    })();

    function loop() {
        // if (_this.split) {
        //     let time = _start + (Render.TIME - _save);
        //     _current = (time/1000) % _this.split;

        //     let remaining = _this.split - _current;
        //     var minutes = Math.floor(remaining / 60);
        //     var seconds = Math.floor(remaining - minutes * 60);
        //     if (seconds < 10) seconds = '0'+seconds;
        //     var text = '-' + minutes + ':' +seconds;

        //     _this.SYNC_TIME = _current;
        //     _this.TIME_TEXT = text;
        //     _this.TIME_COUNTDOWN = seconds;
        // }
    }

    function getUTC() {
        return Date.UTC(_now.getUTCFullYear(),_now.getUTCMonth(), _now.getUTCDate() ,
            _now.getUTCHours(), _now.getUTCMinutes(), _now.getUTCSeconds(), _now.getUTCMilliseconds());
    }

    //*** Event handlers

    //*** Public methods

    _this.getTime = function(split) {
        if (split) _this.split = split;
        loop();
        return _current;
    }

}, 'static');
Class(function Tests() {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (function () {

    })();

    //*** Event handlers

    //*** Public methods
    this.renderMirror = function() {
        if (Platform.usingVR()) return false;
        if (GPU.mobileLT(2)) return false;
        if (GPU.lt(1)) return false;
        return true;
    }

    this.hasBirds = function() {
        if (GPU.lt(1)) return false;
        if (GPU.mobileLT(2)) return false;
        return true;
    }

    this.getBirdsCount = function() {
        if (GPU.mobileLT(3)) return 30;
        if (GPU.lt(2)) return 30;

        return 40;
    }

    this.fireworksCount = function() {
        if (GPU.mobileLT(3)) return 128*128;
        if (GPU.lt(2)) return 128*128;
        return 256*256;
    }

    

    this.fireworksEnabled = function() {
        return true;
    }

    this.renderBloom = function() {
        if (GPU.lt(1)) return false;
        if (GPU.mobileGT(2)) return false;
        return true;
    }

    this.getLeafCount = function() {
        if (GPU.mobileLT(3)) return 256;
        if (GPU.lt(2)) return 256;

        return 512;
    }

    this.getTreeLeafCount = function() {
        if (GPU.mobileLT(3)) return 64;
        if (GPU.lt(2)) return 64;

        return 128;
    }

    this.getTreeParticleCount = function() {
        if (GPU.mobileLT(3)) return 256;
        if (GPU.lt(2)) return 256;

        return 1000;
    }

    this.simplifiedClouds = function() {
        if (GPU.lt(1)) return true;
        if (GPU.mobileLT(2)) return true;
        if (Platform.usingVR() && Device.detect('oculus')) return true;
        return false;
    }

    this.simplifiedSimpleFresnelShader = function() {
        if (Platform.usingVR() && Device.detect('oculus')) return true;
        return false;
    }

    this.renderMirrorBlur = function() {
        if (!_this.renderMirror()) return false;
        if (GPU.gt(2)) return true;
        return false;
    }

    this.grassHide = function() {
        if (GPU.lt(0)) return 0.1;
        if (GPU.lt(1)) return 0.2;
        if (GPU.lt(2)) return 0.5;
        if (GPU.lt(3)) return 0.8;

        if (Platform.usingVR() && Device.mobile) return 0.1;

        if (GPU.mobileLT(2)) return 0.1;
        if (GPU.mobileLT(3)) return 0.3;
        if (GPU.mobileLT(4)) return 0.3;

        return 1;
    }

    this.hasBlowingLeaves = function() {
        if (GPU.lt(1)) return false;
        if (GPU.mobileLT(2)) return false;

        return true;
    }

    this.blockTeleport = function() {
        // if (Device.mobile) return true;
        // if (!Hydra.LOCAL && !Platform.usingVR()) return true;
        return false;
    }

    this.mobileControlsOffset = function() {
        return { x: 80, y: 90 };
    }

    this.controlsConfig = function() {
        return { xMax: 40 };
    }

    this.controlsFOV = function() {
        return Device.mobile.phone ? 1.2 : 1;
    }

    this.maxMouseTeleport = function() {
        // if (Hydra.LOCAL) return 9999;
        return 10;
    }

    this.videoChat = function() {
        //return null;
        if (Device.mobile && !Device.detect('oculus')) return false;

        return {
            audioOnly: true,
            playerDistance: 1.5,
            maxUsers: 20,
            color: '#ffffff',
            radius: 4,
            prompt: { fontColor: '#ffffff', fontSize: 66, lineHeight: 1.2, bgColor: '#000000', font: 'HelveticaNeue-Medium' },
            joinText: 'join voice chat'
        };
    }

}, 'static');
Class(function VideoUtil() {
    Inherit(this, Component);
    const _this = this;
    var _video, _backup;

    var _data = {
        porter: 'https://player.vimeo.com/external/501116390.sd.mp4?s=d195e05349a82cd497bcaec202a8d10b4e0f25dc&profile_id=174',
        madeon: 'https://player.vimeo.com/external/509278822.sd.mp4?s=fe864b909ded5dfa069a8d26bf89d0433b21952f&profile_id=165',
        jaiwolf: 'https://player.vimeo.com/external/520788473.hd.mp4?s=b24ccf7b6dad535e2e333fbb1945ed5e2e8d4582&profile_id=174'
    };

    var _demo = Utils.query('demo') || false;
    if (Utils.query('live')) _demo = false;

    _this.VIDEO_TEXTURE = { value: HLSStream.texture, ignoreUIL: true };
    _this.VISUALS_TEXTURE = { value: HLSStream.texture, ignoreUIL: true };
    _this.VIDEO_PLAYING = { value: 0, ignoreUIL: true };

    //*** Constructor
    (function () {
        Hydra.ready(init);
    })();

    async function init() {
        _video = HLSStream.texture.video;
        _this.video = _video;

        if (!HLSStream.usingHLS()) {
            //_video.stop();

            _backup = new VideoTexture('assets/videos/interstitial.mp4', { muted: true });
            //_backup.src = 'https://player.vimeo.com/external/541081534.sd.mp4?s=046a1e3c22b5415283b2d64a838ccc0a180d67e3&profile_id=164&download=1';
            _backup.start();
            _backup.volume = 0;

            _this.VIDEO_TEXTURE.value = _backup.texture;
            _this.VISUALS_TEXTURE.value = _backup.texture;

            _backup.video.div.crossorigin = 'anonymous';
            _backup.video.div.setAttribute("playsinline", "");
            _backup.video.div.setAttribute("webkit-playsinline", "");

            _this.VIDEO_PLAYING.value = 1;

            _this.events.sub(_backup, Video.PLAYING, _ => {
                _this.isPlaying = true;
                tween(_this.VIDEO_PLAYING, { value: 0 }, 2000, 'easeInOutSine', 1000);
                console.log('video playing');
            });

            //_this.video = _backup;
        }

        addHandlers();
        _this.ready = true;
    }

    //*** Event handlers
    function addHandlers() {
        _this.events.sub(Mouse.input, Interaction.START, start);
        _this.events.sub(Mouse.input, Interaction.END, end);

        _this.events.sub(VideoChatZones.CONNECTED, enterChat);
        _this.events.sub(VideoChatZones.DISCONNECTED, exitChat);
    }

    async function start() {
        _this.events.unsub(Mouse.input, Interaction.START, start);

        if (_demo) {
            let labels = [];
            for (var i in _data) labels.push(i);
            let url = _data[labels.random()];
            _video.src = _data['porter'];//url;
            // _video.volume = 0;
        }

        if (_backup) {
            _backup.start();
            _video.volume = 0;
        }

        await _this.wait(1000);
        if (_backup) _backup.volume = 0;

        _this.touched = true;
        // if (HLSStream.usingHLS()) tween(_video, { volume: 0.3 }, 3000, 'easeInOutSine');
    }

    async function end() {
        _this.events.unsub(Mouse.input, Interaction.END, end);

        if (_backup) {
            _backup.start();
            _backup.video.play();
            _backup.volume = 0;
//            _video.volume = 0;
        }
    }

    async function getMediaURLForTrack(passed_url) {
        let url = passed_url;
        await fetch(passed_url, { method: 'HEAD' }).then((response) => { url = response.url });
        return url;
    }

    function enterChat() {
        if (_video && HLSStream.usingHLS()) tween(_video, { volume: Platform.usingVR() ? 0.1 : 0.1 }, 2000, 'easeOutSine');
    }

    function exitChat() {
        if (_video && HLSStream.usingHLS()) tween(_video, { volume: 0.4 }, 2000, 'easeOutSine');
    }

    //*** Public methods
    _this.getVideo = async function() {
        await _this.wait('ready');
        return _backup || _video;
    }

    _this.change = async function(url) {
        if (!_backup) return;
        await _this.wait('isPlaying');
        await _this.wait('touched');

        if (!url) {
            _backup.src = 'assets/videos/interstitial.mp4';
        } else {
            _backup.src = await getMediaURLForTrack(url);//Hydra.LOCAL ? await getMediaURLForTrack(url) : url;
        }
    };



}, 'static');
Class(function AerialCamera(_env) {
    Inherit(this, Component);
    const _this = this;
    var _track;

    const NAME = Utils.getConstructorName(_env);

    //*** Constructor
    (function () {
        _track = _this.initClass(CameraTrack, NAME);
        if (!Global.PLAYGROUND) {
            _track.loop(0.0002);
        }
        _this.delayedCall(_ => {
            _env.setCamera(_track.camera);
        }, 5000);
    })();

    //*** Event handlers

    //*** Public methods

});
Class(function ControllerShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);

    var _this = this;

    //*** Constructor
    (function() {
        _shader.addUniforms({
            tMap: {value: null},
            uColor: {value: new Color()},
            uGradient: {value: new Vector2(0.0, 1.0)},
            uAlphaCutoff: {value: 0.0},
            transparent: true
        });

        PlayerModel.state.bind('SecretSkyAvatar_uColor', value => {
            if (Array.isArray(value)) _shader.get('uColor').fromArray(value);
        });

        _mesh.renderOrder = 99999999;
    })();

    //*** Event handlers

    //*** Public methods
});
Class(function LandingEnvironment() {
    Inherit(this, AbstractEnvironment);
    const _this = this;
    var _ui;

    //*** Constructor
    (function () {
        // let $square = _this.getDOMElement().create('square');
        // $square.size('100%').bg('#ff0000');
        initUI();
    })();

    function initUI() {
        _ui = _this.initClass(LandingUI, [_this.getDOMElement()]);
    }

    //*** Event handlers

    //*** Public methods
    this.onActivate = function() {
        _ui.animateIn();
    }
});
Class(function VFX() {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (function () {

    })();


    //*** Event handlers

    //*** Public methods
    this.setup = function(fxScene, env) {
        if (!fxScene) return;

        fxScene.scene.opaqueSortOrder = World.SCENE.opaqueSortOrder = Scene.FRONT_TO_BACK;

        if (Tests.renderBloom()) new VFXRunner(fxScene.nuke, env);
    }
}, 'singleton');
Class(function VFXRunner(_nuke, _env) {
    Inherit(this, Component);
    const _this = this;
    var _bloom, _composite, _combined, _default, _target;

    var _overrides = {};
    var _lerp = 0.01;

    const NAME = Utils.getConstructorName(_env);

    //*** Constructor
    (function () {
        initPass();
        setupOverrides();
        _this.startRender(loop);
        createOverride('night');
        createOverride('default');

        _this.startRender(loop, 24);
    })();

    function loop() {
        if (MainEnvironment.RAVE.value > 0.5) _target = _overrides.night;
        else _target = _overrides.default;
    }

    function initPass() {
        let unique = NAME;
        _bloom = _this.initClass(FX.UnrealBloom, _nuke, {nMips: 3, enabled: true, noUIL: true}, unique);

        _composite = _this.initClass(NukePass, 'Composite', Utils.mergeObject({
            unique,
            uRGBStrength: {value: 0.25},
            uBloomStrength: {value: 1}
        }, _bloom.uniforms));

        if (RenderManager.type == RenderManager.NORMAL) _nuke.add(_composite);
        ShaderUIL.add(_composite, null);
    }

    function setupOverrides() {
        _combined = ShaderUIL.createOverride('globalVFX'+NAME, [
            _composite,
            _bloom.luminosityShader,
            _bloom.compositeShader,
        ], null, null);

        _default = ShaderUIL.createClone('globalVFXDefault'+NAME, _combined);
        _target = _default;
    }

    function loop() {
        ShaderUIL.lerpShader(_target, _combined, _lerp);
    }

    function createOverride(key) {
        _overrides[key] = ShaderUIL.createClone('globalVFX'+NAME+key, _combined);
        ShaderUIL.add(_overrides[key]).setLabel(Utils.getConstructorName(_env) + key+' VFX');
        _target = _overrides[key];
    }

    //*** Event handlers

    //*** Public methods
});
Class(function AnimatedBird(_mesh, _shader, _group, _input) {
    Inherit(this, Component);

    var _this = this;

    //*** Constructor
    (function() {
        _shader.addUniforms({
            tAnimation: { value: null }
        });
    })();

    //*** Event handlers

    //*** Public methods
});

Class(function Bird(_input, _group) {
    Inherit(this, Object3D);
    const _this = this;

    (async function() {
        initScene();
    })();

    async function initScene() {
        _this.layout = _this.initClass(SceneLayout, `birdlayout`);
    }
});

Class(function BirdFlockLayout() {
    Inherit(this, Object3D);
    const _this = this;

    var _flock1, _flock2, _flock3, _flock4;

    //*** Constructor
    (async function () {
        if (!Tests.hasBirds()) return;
        await initScene();

        _this.startRender(_ => {
            _flock1.position.z = Math.sin(Render.TIME * -0.00015 + 0.5) * 20.0;
            _flock1.position.x = Math.cos(Render.TIME * -0.00015 + 0.5) * 28.0;

            _flock2.position.z = Math.sin(Render.TIME * -0.00015 + 1.0) * 22.0;
            _flock2.position.x = Math.cos(Render.TIME * -0.00015 + 1.0) * 25.0;

            _flock3.position.z = Math.sin(Render.TIME * 0.00015 + 1.5) * 22.0;
            _flock3.position.x = Math.cos(Render.TIME * 0.00015 + 1.5) * 28.0;

            _flock4.position.z = Math.sin(Render.TIME * 0.00015 + 0.75) * 25.0;
            _flock4.position.x = Math.cos(Render.TIME * 0.00015 + 0.75) * 25.0;
        });
    })();

    async function initScene() {
        if (!_this) return;

        _this.layout = _this.initClass(SceneLayout, `birdflocklayout_flocking`);
        await _this.layout.getAllLayers();

        _flock1 = _this.layout.layers.flock_1;
        _flock2 = _this.layout.layers.flock_2;
        _flock3 = _this.layout.layers.flock_3;
        _flock4 = _this.layout.layers.flock_4;

        _flock1.shader.visible = false;
        _flock2.shader.visible = false;
        _flock3.shader.visible = false;
        _flock4.shader.visible = false;

        let proton = _this.layout.layers.particles;
        await proton.ready();

        proton.behavior.shader.addUniforms({
            uFlock1: {value: new Vector3()},
            uFlock2: {value: new Vector3()},
            uFlock3: {value: new Vector3()},
            uFlock4: {value: new Vector3()},
        });

        _this.proton = proton;
        
        proton.behavior.shader.uniforms.uFlock1.value = _flock1.position;
        proton.behavior.shader.uniforms.uFlock2.value = _flock2.position;
        proton.behavior.shader.uniforms.uFlock3.value = _flock3.position;
        proton.behavior.shader.uniforms.uFlock4.value = _flock4.position;
    }

    //*** Event handlers

    //*** Public methods


});
Class(function InstancedBirds(_proton, _group) {
    Inherit(this, Object3D);
    const _this = this;

    //*** Constructor
    (function () {
        initMesh();
    })();

    async function initMesh() {
        _proton.antimatter.storeVelocity = true;

        let birdGeometry = await GeomThread.loadGeometry('assets/geometry/birds/simplebird2.json');
        let geom = new Geometry().instanceFrom(birdGeometry);
        _proton.applyToInstancedGeometry(geom);

        let shader = _this.initClass(Shader, 'InstancedBirdParticles', {
            tAnimation: {value: Utils3D.getLookupTexture('assets/images/birds/birdanimation.jpg')},
            uColor1: {value: new Color()},
            uColor2: {value: new Color()},
            uAltColor1: {value: new Color()},
            uAltColor2: {value: new Color()},
            uEnabled: {value: 0}
        });

        _this.shader = shader;

        ShaderUIL.add(shader, _group).setLabel('Shader');

        _proton.applyToShader(shader);

        let mesh = new Mesh(geom, shader);
        mesh.frustumCulled = false;
        _this.add(mesh);
    }

    //*** Event handlers

    //*** Public methods


});
Class(function CubeFloorShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (async function () {
        _shader.addUniforms({
            tMap: VideoUtil.VISUALS_TEXTURE,
            uGridScale: { value: 300 },
            uGridClamp: { value: 0.5 },
            uTimeOffset: { value: 0, batchUnique: true },
            uAlpha: {value: 1, batchUnique: true },
            uFadeRange: { value: new Vector2(0,0) }
        });
    })();

    //*** Event handlers

    //*** Public methods

});
Class(function GlassFloorShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (function () {
        _shader.addUniforms({
            uAlpha: {value: 1},
            uColor: { value: new Color() },
            uNoiseMix: { value: 0 },
            uNoiseScale: { value: 3.0 },
            uNoiseTime: { value: 0.2 },
        });


    })();

    //*** Event handlers

    //*** Public methods

});
Class(function GrassFloorShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (async function () {
        _shader.addUniforms({
            tWind: {value: null, getTexture: Utils3D.getRepeatTexture},
            tGrass: {value: null, getTexture: Utils3D.getRepeatTexture},
            tVideo: VideoUtil.VISUALS_TEXTURE,

            uWindParams: {value: new Vector4(1, 2, -0.06, 0)},
            uWindDirection: {value: new Vector2(0.02, 0.1)},
            uGrassParams: {value: new Vector4(7, 7, 0.03, 0.06)},

            uWindStrength: {value: new Vector4(1.98, 0.32, 0, 0)},
            uGrassStrength: {value: new Vector4(0.42, 4, 0.39, 1.2)},
            uNoiseStrength: {value: new Vector4(0, 2.12, 7, 0.76)},

            uFresnelParams: {value: new Vector4(0.04, 1.83, 3.33, 0)},
            uFogParams: {value: new Vector4(-80, -400, 0, 0)},

            uColor0: {value: new Color('#2d5f46')},
            uColor1: {value: new Color('#2f593e')},
            uColor2: {value: new Color('#41874a')},
            uColor3: {value: new Color('#28653d')},
            uPathColor0: {value: new Color('#e7dec6')},
            uFogColor: {value: new Color('#affffc')},

            uFadeBack: { value: new Vector2() },

            uRave: MainEnvironment.RAVE,
            uRavePos: BigScreenVideoShader.WORLD_POSITION,
            uRaveRange: BigScreenVideoShader.LIGHT_RANGE,
            uSunsetColor: MainEnvironment.SUNSET_COLOR

        });
    })();
});
Class(function GridFloorShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (function () {
        _shader.addUniforms({
            uScale: { value: 10.0 },
            uAlpha: {value: 1}
        });

    })();

    //*** Event handlers

    //*** Public methods

});
Class(function VideoFloorShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (async function () {
        _shader.addUniforms({
            tMap: VideoUtil.VISUALS_TEXTURE,
            uGridScale: { value: 300 },
            uGridClamp: { value: 0.5 },
            uTimeOffset: { value: 0, batchUnique: true },
            uAlpha: {value: 1, batchUnique: true }
        });


    })();

    //*** Event handlers

    //*** Public methods

});
Class(function GreyboxShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (async function () {
        _shader.addUniforms({
            tMap: VideoUtil.VISUALS_TEXTURE,
            tVideo: { value: null, ignoreUIL: true },
            uFresnelParams: {value: new Vector4()},
            uRave: MainEnvironment.RAVE,
        });
    })();
});
Class(function RockShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    var _this = this;
    //*** Constructor
    (function() {
        _shader.addUniforms({
            tMap: {value: null},
            uMultiColor: {value: new Color()},
            tNormal: { value: null},
            tMRO: { value: null},
            uTile: {value: 1.0},
            uNormalIntensity: {value: 1.0},
            uBrightness: { value: 1 },
            uSaturation: {value: 1},
            uHue: {value: 0},
            uAOMix: {value: 0},
            uFresnelColor: {value: new Color()},
            uClampFrom: {value: new Vector2(0.0, 1.0)},
            uClampTo: {value: new Vector2(0.0, 1.0)},
            uFogParams: {value: new Vector4(-80, -400, 0, 0)},
            uFogColor: {value: new Color('#affffc')},
        });
    })();
    //*** Event handlers
    //*** Public methods
});
Class(function MirrorFloor(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    var _this = this;

    //*** Constructor
    (function () {
        _shader.addUniforms({
            uWarp: { value: 4 },
            uWarpSpeed: { value: 0.15 },
            uWarpScale: { value: 10 },

            tNormal: { value: Utils3D.getRepeatTexture('assets/images/floor/floor_normal.jpg'), ignoreUIL: true },
            tRoughness: { value: Utils3D.getRepeatTexture('assets/images/floor/floor_roughness.jpg'), ignoreUIL: true },
            uNormalRange: { value: new Vector2(0,1) },
            uRoughnessRange: { value: new Vector2(0.5,200) },
            uNormalIntensity:  { value: 30 },
            uDarken: { value:  0},
            uTile:  { value: 15 },

            uScale: { value: 0 },
            uAlpha: { value: 0.12 },
            uFade: { value: 0 },
        });

        _mesh.renderOrder = -1;
    })();

});
Class(function BannerShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    var _this = this;

    //*** Constructor
    (async function() {
        _shader.addUniforms({
            tMap: {value: null, getTexture: Utils3D.getRepeatTexture},
            tNormal: {value: null, getTexture: Utils3D.getRepeatTexture},
            uMultiplyColor: {value: new Color()},
            tVideo: VideoUtil.VIDEO_TEXTURE,
            uTile: {value: 1.0},
            uNormalTile: {value: new Vector2(1.0, 1.0)},
            uNormalIntensity: {value: 1.0},
            uBrightness: { value: 1 },
            uFresnelColor: {value: new Color()},
            uClampFrom: {value: new Vector2(0.0, 1.0)},
            uClampTo: {value: new Vector2(0.0, 1.0)},
            uFogParams: {value: new Vector4(-80, -140, 0, 0)},
            uFogColor: {value: new Color('#E2F5FF')},
            uFresnelBakeMix: {value: new Vector2(0.0, 1.3)},
            uRave: MainEnvironment.RAVE,
            uRavePos: { value: new Vector3() },
            uRaveRange: { value: new Vector2(1,0) },
            uRaveInvert: { value: 0 },
            uRaveVideoScale: { value: 50 },

            uNoiseStrength: {value: 0.150},
            uNoiseScale: {value: 0.900},
            uNoiseSpeed: {value: 1.300},

            uDistortSpeed: { value: 3.000 },
            uDistortStrength: { value: new Vector3(0.300, 0.3, 0.3) },
            uDistortFrequency: { value: new Vector3(0.300, 0.3, 0.3) },
            uDistortSpeed2: { value: 8.0 },
            uDistortStrength2: { value: new Vector3(0.1, 0.1, 0.1) },
            uDistortFrequency2: { value: new Vector3(0.300, 0.3, 0.3) },
        });
    })();
    //*** Event handlers
    //*** Public methods
});
Class(function KeyArtShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    var _this = this;

    //*** Constructor
    (async function() {
        _shader.addUniforms({
            tMap: {value: null, getTexture: Utils3D.getRepeatTexture},
            tKeyart: {value: null},
            tNormal: {value: null, getTexture: Utils3D.getRepeatTexture},
            tBrush: {value: null, getTexture: Utils3D.getRepeatTexture},
            uMultiplyColor: {value: new Color()},
            tVideo: VideoUtil.VIDEO_TEXTURE,
            tMRO: { value: null},
            uTile: {value: 1.0},
            uBrushTile: {value: new Vector2(8.0, 8.0)},
            uNormalTile: {value: new Vector2(1.0, 1.0)},
            uNormalIntensity: {value: 1.0},
            uBrightness: { value: 1 },
            uSaturation: {value: 1},
            uHue: {value: 0},
            uAOMix: {value: 0.65},
            uFresnelColor: {value: new Color()},
            uClampFrom: {value: new Vector2(0.0, 1.0)},
            uClampTo: {value: new Vector2(0.0, 1.0)},
            uFogParams: {value: new Vector4(-80, -140, 0, 0)},
            uFogColor: {value: new Color('#E2F5FF')},
            uBrushMix: {value: 1.2},
            uBrushGradient: {value: new Vector2(0.5, 1.0)},
            uFresnelBakeMix: {value: new Vector2(0.0, 1.3)},
            uRave: MainEnvironment.RAVE,
            uRavePos: { value: new Vector3() },
            uRaveRange: { value: new Vector2(1,0) },
            uRaveInvert: { value: 0 },
            uRaveVideoScale: { value: 50 },
        });
    })();
    //*** Event handlers
    //*** Public methods
});
Class(function MTGGrassFloorShader(_mesh, _shader) {
    Inherit(this, Object3D);
    const _this = this;

    //*** Constructor
    (function () {
        _shader.addUniforms({
            tMap: { value: null },
            tGrass: {value: null, getTexture: Utils3D.getRepeatTexture},
            uBrightness: {value: 1},
            uGrassMix: {value: 0.900},
            uTile: {value: new Vector2(1.0, 1.0)},
            uGrassTile: {value: new Vector2(1.0, 1.0)},
            uFogParams: {value: new Vector4(-80, -140, 0, 0)},
            uFogColor: {value: new Color('#E2F5FF')},
            uNoiseStrength: {value: 0.150},
            uNoiseScale: {value: 0.900},
            uNoiseSpeed: {value: 1.300},
            uTint2: {value: new Color('#71D979')},
            uAlphaCutoff: {value: 0.050},
            uDistortSpeed: { value: 3.000 },
            uDistortStrength: { value: new Vector3(0.300, 0.3, 0.3) },
            uDistortFrequency: { value: 0.200 },
            uDistortSpeed2: { value: 8.0 },
            uDistortStrength2: { value: new Vector3(0.1, 0.1, 0.1) },
            uDistortFrequency2: { value: 0.5 },
            uAlphaClip: {value: new Vector4(0.5, 1.0, -0.25, 1.0)},
            uGradientRange: {value: new Vector2(-1.6, 1.0)},
            uHue: {value: 1},
            uSaturation: {value: 1},

            uRave: MainEnvironment.RAVE,
            uRavePos: { value: new Vector3() },
            uRaveRange: { value: new Vector2(1,0) },
            uRaveInvert: { value: 0 },
            uSunsetColor: MainEnvironment.SUNSET_COLOR
        });

    })();

    //*** Event handlers

    //*** Public methods

});
Class(function MTGGrassShader(_mesh, _shader) {
    Inherit(this, Object3D);
    const _this = this;

    //*** Constructor
    (function () {
        _shader.addUniforms({
            tMap: { value: null },
            uBrightness: {value: 1},
            uHue: {value: 1},
            uSaturation: {value: 1},
            uTile: {value: new Vector2(1.0, 1.0)},
            uFogParams: {value: new Vector4(-80, -140, 0, 0)},
            uFogColor: {value: new Color('#E2F5FF')},
            uNoiseStrength: {value: 0.150},
            uNoiseScale: {value: 0.900},
            uNoiseSpeed: {value: 1.300},
            uTint1: {value: new Color('#00936B')},
            uTint2: {value: new Color('#71D979')},
            uAlphaCutoff: {value: 0.050},
            uDistortSpeed: { value: 3.000 },
            uDistortStrength: { value: new Vector3(0.300, 0.3, 0.3) },
            uDistortFrequency: { value: 0.200 },
            uDistortSpeed2: { value: 8.0 },
            uDistortStrength2: { value: new Vector3(0.1, 0.1, 0.1) },
            uDistortFrequency2: { value: 0.5 },
            uAlphaClip: {value: new Vector4(0.5, 1.0, -0.25, 1.0)},
            uGradientRange: {value: new Vector2(-1.6, 1.0)},
            uSunsetColor: MainEnvironment.SUNSET_COLOR,

            uBakeMix: {value: 0},

            uRave: MainEnvironment.RAVE,
            uRavePos: { value: new Vector3() },
            uRaveRange: { value: new Vector2(1,0) },
            uRaveInvert: { value: 0 }
        });

    })();

    //*** Event handlers

    //*** Public methods

});
Class(function MTGSphereShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    var _this = this;

    //*** Constructor
    (async function() {
        _shader.addUniforms({
            uSphereColor: {value: new Color('#E2F5FF')},
            uSphereColor2: {value: new Color('#E2F5FF')},
            tVideo: VideoUtil.VISUALS_TEXTURE,
            uFresnelColor: {value: new Color()},
            uClampFrom: {value: new Vector2(0.0, 1.0)},
            uClampTo: {value: new Vector2(0.0, 1.0)},
            uFogParams: {value: new Vector4(-80, -140, 0, 0)},
            uFogColor: {value: new Color('#E2F5FF')},
            uFresnelBakeMix: {value: new Vector2(0.0, 1.3)},
            uRave: MainEnvironment.RAVE,
            uRavePos: { value: new Vector3() },
            uRaveRange: { value: new Vector2(1,0) },
            uRaveInvert: { value: 0 },
            uRaveVideoScale: { value: 50 },
        });
    })();
    //*** Event handlers
    //*** Public methods
});
Class(function MTGTowerShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    var _this = this;

    //*** Constructor
    (async function() {
        _shader.addUniforms({
            tMap: {value: null, getTexture: Utils3D.getRepeatTexture},               
            tNormal: {value: null, getTexture: Utils3D.getRepeatTexture},
            tBrush: {value: null, getTexture: Utils3D.getRepeatTexture},
            uGlowColor: {value: new Color('#E2F5FF')},
            uTowerColor: {value: new Color('#E2F5FF')},
            tVideo: VideoUtil.VISUALS_TEXTURE,
            tMRO: { value: null},
            uTile: {value: 1.0},
            uBrushTile: {value: new Vector2(8.0, 8.0)},
            uNormalTile: {value: new Vector2(1.0, 1.0)},
            uNormalIntensity: {value: 1.0},
            uAOMix: {value: 0.65},
            uFresnelColor: {value: new Color()},
            uClampFrom: {value: new Vector2(0.0, 1.0)},
            uClampTo: {value: new Vector2(0.0, 1.0)},
            uFogParams: {value: new Vector4(-80, -140, 0, 0)},
            uFogColor: {value: new Color('#E2F5FF')},
            uBrushMix: {value: 1.2},
            uBrushGradient: {value: new Vector2(0.5, 1.0)},
            uFresnelBakeMix: {value: new Vector2(0.0, 1.3)},
            uRave: MainEnvironment.RAVE,
            uRavePos: { value: new Vector3() },
            uRaveRange: { value: new Vector2(1,0) },
            uRaveInvert: { value: 0 },
            uRaveVideoScale: { value: 50 },
        });
    })();
    //*** Event handlers
    //*** Public methods
});
Class(function MTGWaterShader(_mesh, _shader) {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (function() {
        _shader.addUniforms({
            tMap: {value: null, getTexture: Utils3D.getRepeatTexture},
            tDistort: {value: null, getTexture: Utils3D.getRepeatTexture},
            tKeyart: {value: null},
            uKeyartTile: {value: new Vector2(1.0, 1.0)},
            uKeyartStrength: {value: 1},
            uMirrorColorStrength: {value: 1},
            uMirrorRoughness: {value: 1},
            uBrightness: { value: 1 },
            uMultiplyColor: {value: new Color()},
            uTint1: {value: new Color()},
            uTint2: {value: new Color()},
            uSpeed: {value: 0.0},
            uCutoff: {value: 0.00},
            uDistort: {value: 0},
            uDistortTile: {value: 1},
            TransformTile: {value: new Vector2(0.0, 0.0)},

            uDistortSpeed: { value: 3.000 },
            uDistortStrength: { value: new Vector3(0.300, 0.3, 0.3) },
            uDistortFrequency: { value: 0.200 },
            uDistortSpeed2: { value: 8.0 },
            uDistortStrength2: { value: new Vector3(0.1, 0.1, 0.1) },
            uDistortFrequency2: { value: 0.5 },
        });
    })();
    //*** Event handlers
    //*** Public methods
});
Class(function BlowingLeaves(_proton) {
    Inherit(this, Object3D);
    const _this = this;

    var _origin = new Vector3();

    //*** Constructor
    (async function () {
        await _proton.ready();
        
        _this.startRender(_ => {
            if (Math.random() > 0.2) return;
            _proton.spawn.release(_origin, 1.0, 6.0, 0.1);
        }, 10);
    })();

    //*** Event handlers

    //*** Public methods


});
Class(function BlowingLeavesLayout() {
    Inherit(this, Object3D);
    const _this = this;

    //*** Constructor
    (function () {
        initScene();
    })();

    async function initScene() {
        if (!_this) return;
        
        if (!Tests.hasBlowingLeaves()) return;
        let layout = _this.initClass(SceneLayout, `blowingleaveslayout`);
        _this.layers = await layout.getAllLayers();
        _this.proton = _this.layers.particles;
    }

    //*** Event handlers

    //*** Public methods

});
Class(function Portal() {
    Inherit(this, Object3D);
    const _this = this;

    //*** Constructor
    (async function () {
        _this.layout = _this.initClass(SceneLayout, 'Portal_layout');
        _this.add(_this.layout.group);

        _this.layers = await _this.layout.getAllLayers();

        //_this.startRender(loop);
        //addHandlers();
    })();

    //*** Animations & Loops
    function loop() {

    }

    //*** Event Handlers
    function addHandlers() {

    }

    //*** Public methods
    this.animateIn = function () {

    }
});
Class(function PortalShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (function () {
        _shader.addUniforms({
            uAlpha: {value: 1},
            uColor: { value: new Color('#ffffff') },
            uNoiseScale: { value: 1 },
            uNoiseTime: { value: 0.1 },
        });

        _mesh.renderOrder += 1000;


    })();

    //*** Event handlers

    //*** Public methods

});
Class(function PotaroShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    var _this = this;

    //*** Constructor
    (async function() {
        _shader.addUniforms({
            tMap: {value: null, getTexture: Utils3D.getRepeatTexture},               
            tNormal: {value: null, getTexture: Utils3D.getRepeatTexture},
            tMRO: { value: null},
            tVideo: VideoUtil.VISUALS_TEXTURE,
            uTile: {value: 1.0},
            uNormalTile: {value: new Vector2(1.0, 1.0)},
            uNormalIntensity: {value: 1.0},
            uBrightness: { value: 1 },
            uSaturation: {value: 1},
            uHue: {value: 0},
            uFresnelColor: {value: new Color()},
            uGrassColor: {value: new Color()},
            uClampFrom: {value: new Vector2(0.0, 1.0)},
            uClampTo: {value: new Vector2(0.0, 1.0)},
            uFogParams: {value: new Vector4(-80, -140, 0, 0)},
            uFogColor: {value: new Color('#E2F5FF')},

            uArmSpeed: { value: 3.000 },
            uArmStrength: { value: new Vector3(0.300, 0.3, 0.3) },
            uArmFrequency: { value: 0.200 },
            uBodySpeed: { value: 3.000 },
            uBodyStrength: { value: new Vector3(0.300, 0.3, 0.3) },
            uBodyFrequency: { value: 0.200 },

            uRave: MainEnvironment.RAVE,
            uRavePos: { value: new Vector3() },
            uRaveRange: { value: new Vector2(1,0) },
            uRaveInvert: { value: 0 },
            uSunsetColor: MainEnvironment.SUNSET_COLOR,
        });
    })();
    //*** Event handlers
    //*** Public methods
});
Class(function RiverMirror(_mesh, _shader) {
    Inherit(this, Component);
    const _this = this;
    var _mirror;

    //*** Constructor
    (function () {
        _mirror = _this.initClass(FX.Mirror, _mesh, {normal: new Vector3(0,0,1), size: 1024, enabled: Tests.renderMirror(), format: Texture.RGBAFormat,});
        _mirror.start();
        _this.mirror = _mirror;

        initLayers();
    })();

    async function initLayers() {
        let [plant, dome, platforms, tower_base, tower_extra, logo, banners] = await _this.parent.getLayers('plant', 'dome', 'platforms', 'tower_base', 'tower_extra', 'logo', 'banners');
        _mirror.add(plant);
        _mirror.add(dome);
        _mirror.add(platforms);
        _mirror.add(tower_base);
        _mirror.add(tower_extra);
        _mirror.add(logo);
        _mirror.add(banners);
    }

    //*** Event handlers

    //*** Public methods

});

Class(function RiverShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (async function () {
        _shader.addUniforms({
            tVideo: VideoUtil.VISUALS_TEXTURE,
            //uAlpha: {value: 1},
            tNormal: { value: null, getTexture: Utils3D.getRepeatTexture },
            tMRO: { value: null },
            uNormalIntensity: {value: 1.0},
            uNormalScale: {value: new Vector2(1.0, 1.0)},
            uNormalSpeed: {value: 1.0},
            uGlowSpeed: { value: 3.000 },
            uGlowStrength: { value: 1.000 },
            uGlowScale: { value: 1.000 },

            uColor: { value: new Color() },
            uColor2: { value: new Color() },
            uFogParams: {value: new Vector4(-80, -400, 0, 0)},
            uFogColor: { value: new Color('#9cd5ff') },
            uNoiseScale: { value: 1 },
            uRave: MainEnvironment.RAVE,
            uRavePos: BigScreenVideoShader.WORLD_POSITION,
            uSunsetColor: MainEnvironment.SUNSET_COLOR,
            uRaveRange: BigScreenVideoShader.LIGHT_RANGE,

            uFresnelColor: {value: new Color()},
            uClampFrom: {value: new Vector2(0.0, 1.0)},
            uClampTo: {value: new Vector2(0.0, 1.0)},
            uFresnelAlphaRange: {value: new Vector2(0.0, 1.0)},
            
            uNoiseTime: { value: 1 },
            uNoiseStrength: { value: 1 },

            uDistortSpeed: { value: 3.000 },
            uDistortStrength: { value: new Vector3(0.300, 0.3, 0.3) },
            uDistortFrequency: { value: 0.200 },
            uDistortSpeed2: { value: 8.0 },
            uDistortStrength2: { value: new Vector3(0.1, 0.1, 0.1) },
            uDistortFrequency2: { value: 0.5 },
        });

    })();

    //*** Event handlers

    //*** Public methods

});
Class(function CloudBakeShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (async function () {
        _shader.addUniforms({
            uRave: MainEnvironment.RAVE,
            tMap: VideoUtil.VISUALS_TEXTURE,
            tFlow: {value: null, getTexture: Utils3D.getRepeatTexture},
            tMap0: {value: null},
            tMap1: {value: null},
            uLightPos: {value: new Vector3()},
            uColor0: {value: new Color('#FFFFFF')},
            uColor1: {value: new Color('#5699d3')},
            uColor2: {value: new Color('#4198dd')},
            uColor3: {value: new Color('#FF0000')},
            uFogRange: {value: new Vector4(-20, -2000, 0.0, 0.0)},
            uStep: {value: 0.5},
            uParams: {value: new Vector4(0.1, 0.12, 1, 1)},
            uStageLightStrength: {value: 0},
            uLightDistance: {value: 15.0},
            uLightSpeed: {value: 11.0},
            uRavePos: BigScreenVideoShader.WORLD_POSITION,
            uRaveRange: BigScreenVideoShader.LIGHT_RANGE,
            uSunsetColor: MainEnvironment.SUNSET_COLOR,
        });
    })();
});
Class(function SkyShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (async function () {
        _shader.addUniforms({
            tMap: VideoUtil.VISUALS_TEXTURE,
            uColor: { value: new Color('#000000') },
            uColor1: { value: new Color('#333333') },
            uColor2: { value: new Color('#333333') },
            uColor3: { value: new Color('#333333') },
            uGradient: {value: new Vector4(0.0, 0.3, 0.3, 1.0)},
            tClouds: { value: Utils3D.getRepeatTexture('assets/images/noise/clouds.jpg'), ignoreUIL: true },
            tStars: { value: Utils3D.getRepeatTexture('assets/images/noise/stars.jpg'), ignoreUIL: true},
            uStars: { value: 1 },
            uRave: MainEnvironment.RAVE,
            uCldScale: { value: 15.0 },
            uCldSpeed: { value: 0.01 },
            uCldAlpha: { value: 1.0 },
            uCldColor: { value: new Color('#ffffff') },
            uRavePos: { value: new Vector3() },
            uRaveFade: { value: new Vector2(1,0) },
            uFogParams: {value: new Vector4(-80, -600, 0, 0)},
            uFogColor: {value: new Color('#affffc')},
            uSunsetColor: MainEnvironment.SUNSET_COLOR
        });

        _mesh.frustumCulled = false;
        _shader.frustumCulled = false;
    })();

    //*** Event handlers

    //*** Public methods

});
Class(function TreeSkyShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (async function () {
        _shader.addUniforms({
            tMap: VideoUtil.VISUALS_TEXTURE,
            uColor: { value: new Color('#000000') },
            uColor2: { value: new Color('#333333') },
            uColor3: { value: new Color('#333333') },
            uGradientPos: {value: new Vector3(0.35, 0.5, 0.8)},
            tClouds: { value: Utils3D.getRepeatTexture('assets/images/noise/clouds.jpg'), ignoreUIL: true },
            tStars: { value: Utils3D.getRepeatTexture('assets/images/noise/stars.jpg'), ignoreUIL: true},
            uStars: { value: 1 },
            uRave: MainEnvironment.RAVE,
            uSunsetColor: MainEnvironment.SUNSET_COLOR,
            
            uCldScale: { value: 15.0 },
            uCldSpeed: { value: 0.01 },
            uCldAlpha: { value: 1.0 },
            uCldColor: { value: new Color('#ffffff') },

            uFogParams: {value: new Vector4(-80, -600, 0, 0)},
            uFogColor: {value: new Color('#affffc')},
        });
    })();

    //*** Event handlers

    //*** Public methods

});
Class(function SponsorTentShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (async function () {
        _shader.addUniforms({
            tVideo: VideoUtil.VISUALS_TEXTURE,
            tMap: {value: null},
            tNormal: {value: null, getTexture: Utils3D.getRepeatTexture},
            tBrush: {value: null, getTexture: Utils3D.getRepeatTexture},
            uNormalTile: {value: new Vector2(1.0, 1.0)},
            uNormalIntensity: {value: 1.0},
            uBrightness: {value: 1.0},
            uGrassColor: {value: new Color()},
            uWireColor: {value: new Color("#FFFFFF")},
            uColor1: {value: new Color("#FFFFFF")},
            uColor2: {value: new Color("#FFFFFF")},
            uColor3: {value: new Color("#FFFFFF")},
            uFresnelColor: {value: new Color()},
            uClampFrom: {value: new Vector2(0.0, 1.0)},
            uClampTo: {value: new Vector2(0.0, 1.0)},
            uFogParams: {value: new Vector4(-80, -140, 0, 0)},
            uFogColor: {value: new Color('#E2F5FF')},
            uBrushTile: {value: new Vector2(8.0, 8.0)},
            uBrushMix: {value: 1.2},
            uBrushGradient: {value: new Vector2(0.5, 1.0)},
            uRave: MainEnvironment.RAVE,
            uRavePos: BigScreenVideoShader.WORLD_POSITION,
            uRaveRange: BigScreenVideoShader.LIGHT_RANGE,
            uSunsetColor: MainEnvironment.SUNSET_COLOR,
        });
    })();
});
Class(function CarpetShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    var _this = this;

    //*** Constructor
    (async function() {
        _shader.addUniforms({
            tMap: {value: null, getTexture: Utils3D.getRepeatTexture},               
            tNormal: {value: null, getTexture: Utils3D.getRepeatTexture},
            tBrush: {value: null, getTexture: Utils3D.getRepeatTexture},
            uMultiplyColor: {value: new Color()},
            tVideo: VideoUtil.VISUALS_TEXTURE,
            uTile: {value: 1.0},
            uBrushTile: {value: new Vector2(8.0, 8.0)},
            uNormalTile: {value: new Vector2(1.0, 1.0)},
            uNormalIntensity: {value: 1.0},
            uBrightness: { value: 1 },
            uSaturation: {value: 1},
            uHue: {value: 0},
            uFresnelColor: {value: new Color()},
            uClampFrom: {value: new Vector2(0.0, 1.0)},
            uClampTo: {value: new Vector2(0.0, 1.0)},
            uFogParams: {value: new Vector4(-80, -140, 0, 0)},
            uFogColor: {value: new Color('#E2F5FF')},
            uBrushMix: {value: 1.2},
            uBrushGradient: {value: new Vector2(0.5, 1.0)},
            uFresnelBakeMix: {value: new Vector2(0.0, 1.3)},
            uRave: MainEnvironment.RAVE,
            uRavePos: { value: new Vector3() },
            uRaveRange: { value: new Vector2(1,0) },
            uRaveInvert: { value: 0 },
            uRaveVideoScale: { value: 50 },
            uSunsetColor: MainEnvironment.SUNSET_COLOR,

            uNoiseStrength: {value: 0.150},
            uNoiseScale: {value: 0.900},
            uNoiseSpeed: {value: 1.300},
        });
    })();
    //*** Event handlers
    //*** Public methods
});
Class(function MeshLeafShader(_mesh, _shader) {
    Inherit(this, Object3D);
    const _this = this;

    //*** Constructor
    (function () {
        _shader.addUniforms({
            tMap: { value: null },
            uBrightness: {value: 1},
            uSaturation: {value: 1},
            uHue: {value: 0},
            uFresnelColor: {value: new Color()},
            uClampFrom: {value: new Vector2(0.0, 1.0)},
            uClampTo: {value: new Vector2(0.0, 1.0)},
            uTile: {value: new Vector2(1.0, 1.0)},
            uFogParams: {value: new Vector4(-80, -140, 0, 0)},
            uFogColor: {value: new Color('#E2F5FF')},
            uNoiseStrength: {value: 0.150},
            uNoiseScale: {value: 0.900},
            uNoiseSpeed: {value: 1.300},
            uAlphaCutoff: {value: 0.050},
            uDistortSpeed: { value: 3.000 },
            uDistortStrength: { value: new Vector3(0.300, 0.3, 0.3) },
            uDistortFrequency: { value: 0.200 },
            uDistortSpeed2: { value: 8.0 },
            uDistortStrength2: { value: new Vector3(0.1, 0.1, 0.1) },
            uDistortFrequency2: { value: 0.5 },

            uRave: MainEnvironment.RAVE,
            uRavePos: { value: new Vector3() },
            uRaveRange: { value: new Vector2(1,0) },
            uRaveInvert: { value: 0 }
        });

    })();

    //*** Event handlers

    //*** Public methods

});
Class(function PlankShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    var _this = this;

    //*** Constructor
    (async function() {
        _shader.addUniforms({
            tMap: {value: null},
            uMultiplyColor: {value: new Color()},
            tVideo: VideoUtil.VISUALS_TEXTURE,
            uNormalIntensity: {value: 1.0},
            uBrightness: { value: 1 },
            uAOMix: {value: 0.65},
            uFresnelColor: {value: new Color()},
            uClampFrom: {value: new Vector2(0.0, 1.0)},
            uClampTo: {value: new Vector2(0.0, 1.0)},
            uFogParams: {value: new Vector4(-80, -140, 0, 0)},
            uFogColor: {value: new Color('#E2F5FF')},
            uAlphaMultiply: {value: 0.65},

            uNoiseStrength: {value: 0.150},
            uNoiseScale: {value: 0.900},
            uNoiseSpeed: {value: 1.300},

            uRave: MainEnvironment.RAVE,
            uRavePos: { value: new Vector3() },
            uRaveRange: { value: new Vector2(1,0) },
            uRaveInvert: { value: 0 },
            uRaveVideoScale: { value: 50 },

            uDistortSpeed: { value: 3.000 },
            uDistortStrength: { value: new Vector3(0.300, 0.3, 0.3) },
            uDistortFrequency: { value: new Vector3(0.300, 0.3, 0.3) },
            uDistortSpeed2: { value: 8.0 },
            uDistortStrength2: { value: new Vector3(0.1, 0.1, 0.1) },
            uDistortFrequency2: { value: new Vector3(0.300, 0.3, 0.3) },
        });
    })();
    //*** Event handlers
    //*** Public methods
});
Class(function SimpleFresnelShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    var _this = this;

    //*** Constructor
    (async function() {
        _shader.addUniforms({
            tMap: {value: null, getTexture: Utils3D.getRepeatTexture},               
            tNormal: {value: null, getTexture: Utils3D.getRepeatTexture},
            tBrush: {value: null, getTexture: Utils3D.getRepeatTexture},
            uMultiplyColor: {value: new Color()},
            tVideo: VideoUtil.VISUALS_TEXTURE,
            tMRO: { value: null},
            uTile: {value: 1.0},
            uBrushTile: {value: new Vector2(8.0, 8.0)},
            uNormalTile: {value: new Vector2(1.0, 1.0)},
            uNormalIntensity: {value: 1.0},
            uRaveMultiplier: {value: 1.0},
            uBrightness: { value: 1 },
            uSaturation: {value: 1},
            uHue: {value: 0},
            uAOMix: {value: 0.65},
            uFresnelColor: {value: new Color()},
            uClampFrom: {value: new Vector2(0.0, 1.0)},
            uClampTo: {value: new Vector2(0.0, 1.0)},
            uFogParams: {value: new Vector4(-80, -140, 0, 0)},
            uFogColor: {value: new Color('#E2F5FF')},
            uBrushMix: {value: 1.2},
            uBrushGradient: {value: new Vector2(0.5, 1.0)},
            uFresnelBakeMix: {value: new Vector2(0.0, 1.3)},
            uRave: MainEnvironment.RAVE,
            uRavePos: BigScreenVideoShader.WORLD_POSITION,
            uRavePosOffset: { value: new Vector3() },
            uRaveRange: BigScreenVideoShader.LIGHT_RANGE,
            uSunsetColor: MainEnvironment.SUNSET_COLOR,
            uRaveInvert: { value: 0 },
            uRaveVideoScale: { value: 50 },
            uRaveUseUV2: { value: 0 },
            uAlpha: { value: 1 },
            uDisableDotFade: { value: 0 }
        });
    })();
    //*** Event handlers
    //*** Public methods
});
Class(function StageShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    var _this = this;

    //*** Constructor
    (async function() {
        _shader.addUniforms({
            tMap: {value: null, getTexture: Utils3D.getRepeatTexture},               
            tNormal: {value: null, getTexture: Utils3D.getRepeatTexture},
            tBrush: {value: null, getTexture: Utils3D.getRepeatTexture},
            uMultiplyColor: {value: new Color()},
            tVideo: VideoUtil.VISUALS_TEXTURE,
            tMRO: { value: null},
            uTile: {value: 1.0},
            uBrushTile: {value: new Vector2(8.0, 8.0)},
            uNormalTile: {value: new Vector2(1.0, 1.0)},
            uNormalIntensity: {value: 1.0},
            uBrightness: { value: 1 },
            uSaturation: {value: 1},
            uHue: {value: 0},
            uAOMix: {value: 0.65},
            uFresnelColor: {value: new Color()},
            uClampFrom: {value: new Vector2(0.0, 1.0)},
            uClampTo: {value: new Vector2(0.0, 1.0)},
            uFogParams: {value: new Vector4(-80, -140, 0, 0)},
            uFogColor: {value: new Color('#E2F5FF')},
            uBrushMix: {value: 1.2},
            uBrushGradient: {value: new Vector2(0.5, 1.0)},
            uFresnelBakeMix: {value: new Vector2(0.0, 1.3)},
            uRave: MainEnvironment.RAVE,
            uRavePos: BigScreenVideoShader.WORLD_POSITION,
            uRaveRange: BigScreenVideoShader.LIGHT_RANGE,
            uSunsetColor: MainEnvironment.SUNSET_COLOR,
            uRaveInvert: { value: 0 },
            uRaveVideoScale: { value: 50 },
            uRaveUseUV2: { value: 0 },
            uAlpha: { value: 1 },
        });
    })();
    //*** Event handlers
    //*** Public methods
});
Class(function TreeGrassShader(_mesh, _shader) {
    Inherit(this, Object3D);
    const _this = this;

    //*** Constructor
    (function () {
        _shader.addUniforms({
            tMap: { value: null },
            uBrightness: {value: 1},
            uTile: {value: new Vector2(1.0, 1.0)},
            uFogParams: {value: new Vector4(-80, -140, 0, 0)},
            uFogColor: {value: new Color('#E2F5FF')},
            uNoiseStrength: {value: 0.150},
            uNoiseScale: {value: 0.900},
            uNoiseSpeed: {value: 1.300},
            uTint1: {value: new Color('#00936B')},
            uTint2: {value: new Color('#71D979')},
            uAlphaCutoff: {value: 0.050},
            uDistortSpeed: { value: 3.000 },
            uDistortStrength: { value: new Vector3(0.300, 0.3, 0.3) },
            uDistortFrequency: { value: 0.200 },
            uDistortSpeed2: { value: 8.0 },
            uDistortStrength2: { value: new Vector3(0.1, 0.1, 0.1) },
            uDistortFrequency2: { value: 0.5 },
            uAlphaClip: {value: new Vector4(0.5, 1.0, -0.25, 1.0)},
            uGradientRange: {value: new Vector2(-1.6, 1.0)},

            uRave: MainEnvironment.RAVE,
            uRavePos: { value: new Vector3() },
            uRaveRange: { value: new Vector2(1,0) },
            uRaveInvert: { value: 0 },
            uSunsetColor: MainEnvironment.SUNSET_COLOR,
        });

    })();

    //*** Event handlers

    //*** Public methods

});
Class(function TreeLeafShader(_mesh, _shader) {
    Inherit(this, Object3D);
    const _this = this;

    //*** Constructor
    (function () {
        _shader.addUniforms({
            tMap: { value: null },
            uBrightness: {value: 1},
            uSaturation: {value: 1},
            uHue: {value: 0},
            uTile: {value: new Vector2(1.0, 1.0)},
            uFogParams: {value: new Vector4(-80, -140, 0, 0)},
            uFogColor: {value: new Color('#E2F5FF')},
            uNoiseStrength: {value: 0.150},
            uNoiseScale: {value: 0.900},
            uNoiseSpeed: {value: 1.300},
            uTint1: {value: new Color('#00936B')},
            uTint2: {value: new Color('#71D979')},
            uAlphaCutoff: {value: 0.050},
            uDistortSpeed: { value: 3.000 },
            uDistortStrength: { value: new Vector3(0.300, 0.3, 0.3) },
            uDistortFrequency: { value: 0.200 },
            uDistortSpeed2: { value: 8.0 },
            uDistortStrength2: { value: new Vector3(0.1, 0.1, 0.1) },
            uDistortFrequency2: { value: 0.5 },
            uGradientRange: {value: new Vector2(-1.6, 1.0)},
            uBakeMix: {value: 0},

            uRave: MainEnvironment.RAVE,
            uRavePos: { value: new Vector3() },
            uRaveRange: { value: new Vector2(1,0) },
            uRaveInvert: { value: 0 }
        });

    })();

    //*** Event handlers

    //*** Public methods

});
Class(function TreeStumpShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    var _this = this;

    //*** Constructor
    (async function() {
        _shader.addUniforms({
            tMap: {value: null, getTexture: Utils3D.getRepeatTexture},               
            tNormal: {value: null, getTexture: Utils3D.getRepeatTexture},
            tBrush: {value: null, getTexture: Utils3D.getRepeatTexture},
            tRepeatGrass: {value: null, getTexture: Utils3D.getRepeatTexture},
            tRepeatWood: {value: null, getTexture: Utils3D.getRepeatTexture},
            tVideo: VideoUtil.VISUALS_TEXTURE,
            tMRO: { value: null},
            uRepeatGrassColor: {value: new Color()},
            uGrassTile: {value: 1.0},
            uRepeatGrassStrength: {value: 1.0},
            uRepeatWoodColor: {value: new Color()},
            uWoodTile: {value: 1.0},
            uRepeatWoodStrength: {value: 1.0},
            uTile: {value: 1.0},
            uBrushTile: {value: new Vector2(8.0, 8.0)},
            uNormalTile: {value: new Vector2(1.0, 1.0)},
            uNormalIntensity: {value: 1.0},
            uBrightness: { value: 1 },
            uSaturation: {value: 1},
            uHue: {value: 0},
            uAOMix: {value: 0.65},
            uGrassFresnelColor: {value: new Color()},
            uWoodFresnelColor: {value: new Color()},
            uClampFrom: {value: new Vector2(0.0, 1.0)},
            uClampTo: {value: new Vector2(0.0, 1.0)},
            uFogParams: {value: new Vector4(-80, -140, 0, 0)},
            uFogColor: {value: new Color('#E2F5FF')},
            uBrushMix: {value: 1.2},
            uBrushGradient: {value: new Vector2(0.5, 1.0)},
            uFresnelBakeMix: {value: new Vector2(0.0, 1.3)},
            uRave: MainEnvironment.RAVE,
            uRavePos: { value: new Vector3() },
            uRaveRange: { value: new Vector2(1,0) },
            uRaveInvert: { value: 0 },
            uSunsetColor: MainEnvironment.SUNSET_COLOR
        });
    })();
    //*** Event handlers
    //*** Public methods
});
Class(function VideoColorShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (async function () {
        _shader.addUniforms({
            tMap: VideoUtil.VISUALS_TEXTURE,
            uFresnelParams: { value: new Vector4(0.38, 0.48, 0.57, 0), batchUnique: true },
            uUVScale: { value: 100000000.0, batchUnique: true },
            uUVPosition: { value: new Vector2(0.5, 0.5), batchUnique: true },
            uAlpha: {value: 1}
        });
    })();

    //*** Event handlers

    //*** Public methods

});
Class(function VideoTest() {
    Inherit(this, Object3D);
    const _this = this;
    
    //*** Constructor
    (function () {
        let shader = new Shader('BigScreenVideoShader', {
            tMap: VideoUtil.VISUALS_TEXTURE,
            uAlpha: {value: 1},
            uFogParams: {value: new Vector4(-80, -400, 0, 0)},
            uFogColor: {value: new Color('#affffc')},
            transparent: true,
            blending: Shader.ADDITIVE_BLENDING
        });

        let mesh = new Mesh(World.PLANE, shader);
        mesh.position.z = -3;
        World.SCENE.add(mesh);
        
     })();
    
    //*** Event handlers
    
    //*** Public methods
    
});
Class(function WaterShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (async function () {
        _shader.addUniforms({
            tVideo: VideoUtil.VISUALS_TEXTURE,
            tNormal: { value: null, getTexture: Utils3D.getRepeatTexture },
            tMRO: { value: null },
            uNormalIntensity: {value: 1.0},
            uNormalScale: {value: new Vector2(1.0, 1.0)},
            uNormalSpeed: {value: 1.0},
            uAlpha: {value: 1},
            uColor: { value: new Color() },
            uColorEdge: { value: new Color() },
            uEdgeStrength: { value: 1.0 },
            uFogParams: {value: new Vector4(-80, -400, 0, 0)},
            uFogColor: { value: new Color('#9cd5ff') },
            uNoiseScale: { value: 1 },
            uRave: MainEnvironment.RAVE,
            uRavePos: BigScreenVideoShader.WORLD_POSITION,
            uRaveRange: BigScreenVideoShader.LIGHT_RANGE,
            uSunsetColor: MainEnvironment.SUNSET_COLOR,

            uGlowSpeed: { value: 3.000 },
            uGlowStrength: { value: 1.000 },
            uGlowScale: { value: 1.000 },
            
            uNoiseTime: { value: 1 },
            uNoiseStrength: { value: 1 },

            uFresnelColor: {value: new Color()},
            uClampFrom: {value: new Vector2(0.0, 1.0)},
            uClampTo: {value: new Vector2(0.0, 1.0)},

            uDistortSpeed: { value: 3.000 },
            uDistortStrength: { value: new Vector3(0.300, 0.3, 0.3) },
            uDistortFrequency: { value: 0.200 },
            uDistortSpeed2: { value: 8.0 },
            uDistortStrength2: { value: new Vector3(0.1, 0.1, 0.1) },
            uDistortFrequency2: { value: 0.5 },
        });

    })();

    //*** Event handlers

    //*** Public methods

});
Class(function WelcomeBlockShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (function () {
        _shader.addUniforms({
            uColor: { value: new Color('#000000') },
            uDistanceFade: { value: new Vector2(1.0, 5.0) },
            uNoiseSpeed: { value: 0.1 },
            uNoiseScale2: { value: new Vector3(1.0) },
            uNoiseStrength: { value: 0.2 },
            uNoiseFade2: { value: new Vector3(0, 0, 0) },
            uNoiseFadeRange: { value: new Vector2(0, 0) },
        });

        _mesh.renderOrder = 999;
    })();
});
Class(function WelcomeLogoShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (function () {
        _shader.addUniforms({
            tMap: { value: null },
            uDistanceFade: { value: new Vector2(1.0, 5.0) },
        });

        _mesh.renderOrder = 1000;

    })();
});
Class(function ConcertCamera(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    var _this = this;
    var _webcam;

    //*** Constructor
    (function () {
        _shader.addUniforms({
            tMap: {value: null},
            uDepth: { value: 0.2 },
            uDepthContrast: { value: 1.0 },
            uColor: { value: new Color() },
            uColorBlend: { value: 0.0 }


        });

        //_mesh.wireframe = true;
        //_mesh.isLine = true;
        _shader.wireframe = true;

        initWebcam();

        _this.startRender(loop);
    })();

    function initWebcam() {
        _webcam = _this.initClass(Webcam, 512, 512);
        _webcam.createStream();

        // let canvas = _webcam.getCanvas();
        // Stage.add(canvas);
        // _webcamTexture = new Texture(canvas);

        _webcam.texture = new Texture(_webcam.div);
        _webcam.texture.format = Texture.RGBFormat;
        _webcam.texture.minFilter = _webcam.texture.magFilter = Texture.LINEAR;
        _webcam.texture.generateMipmaps = false;

        _shader.set('tMap', _webcam.texture);
    }


    function loop() {
        if (_webcam && _webcam.div.readyState > 2 && _webcam.texture) _webcam.texture.needsUpdate = true;
    }


});
Class(function ConcertConnections() {
    Inherit(this, Object3D);
    let _this = this;
    let $count, $title;
    let _items = [];
    let _order = [];
    var $vrWrapper = new Group();

    _this.count = 0;

    //*** Constructor
    (async function () {
        initItems();
        initTitle();
        updateCount();
        _this.startRender(loop, 10);
        initGeo();
        addHandlers();
    })();

    function initTitle() {
        $count = $glText('12,500', null, null, {
            font: 'AdobeMyungjoStd',
            size: 0.22,
            align: 'center',
        });

        $count.number = _this.count;
        $count.y = 0.5;
        $count.alpha = 1;
        if (!$count.anchor) $count.anchor = new Group();
        _this.add($count.anchor);

        $title = $glText('attendees visited from', null, null, {
            font: 'AdobeMyungjoStd',
            size: 0.07,
            align: 'center',
        });

        $title.y = 0.3;
        $title.alpha = 1;
        if (!$title.anchor) $title.anchor = new Group();
        _this.add($title.anchor);

        if (Platform.usingVR()) {
            _this.startRender(_ => {
                $vrWrapper.position.copy(_this.group.position);
                $vrWrapper.scale.copy(_this.group.scale);
                $vrWrapper.rotation.copy(_this.group.rotation);
            })


            World.SCENE.add($vrWrapper);
            $vrWrapper.add($count.group);
            $vrWrapper.add($title.group);
        } else {
            GLUI.Scene.add($title);
            GLUI.Scene.add($count);
        }
    }

    function initItems() {
        let length = 7;
        for (var i = 0; i < length; i++) {
            let size = 0.08;

            let $item = $glText('', null, null, {
                font: 'AdobeMyungjoStd',
                size,
                align: 'center',
            });

            $item.y = -i*size*2;
            $item.alpha = 0;
            if (!$item.anchor) $item.anchor = new Group();
            _this.add($item.anchor);

            if (Platform.usingVR()) {
                $vrWrapper.add($item.group);
            } else {
                GLUI.Scene.add($item);
            }

            _items.push($item);
        }
    }

    async function initGeo() {
        await Geo.ready();
        let geo = Geo.data().geo;
        // 10 most recent locations
        if (geo && geo.length) geo.forEach( location => {
            updateConnection(location, true);
        });
        // my location
        let location = Geo.data().location;
        playerLocation(location, true) 
    }

    //*** Animations & Loops
    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }

    function loop() {
        if (_this.count === 0) return;
        $count.number += (_this.count - $count.number) * 0.1;
        if ($count.number > _this.count) $count.number = Math.max(_this.count);
        $count.setText(numberWithCommas(Math.round($count.number)));
    }

    function updateConnection(location, bypassCount) {
        if (!bypassCount) {
            if (_this.disabled) return;
            _this.disabled = true;
            _this.delayedCall(_ => { _this.disabled = false; }, 1100);
        }

        let $item = _items[_items.length-1];
        $item.setText(location);
        $item.alpha = 0;
        _items.unshift(_items.splice(_items.length-1, 1)[0]);

        let size = 0.09;
        let gap = 1.9;
        _items.forEach(($item, i) => {
            $item.y = -i*size*gap+size*gap;
            $item.tween({ y: -i*size*gap, alpha: Math.range(i, 0, _items.length-1, 1, 0) }, 1000, 'easeInOutCubic');
        });

        if (!bypassCount) _this.count++;
    }

    async function updateCount(count) {
        _this.count = await Count.get();
         _this.delayedCall(updateCount, 60000);
    }

    //*** Event Handlers

    function addHandlers(e) {
        _this.events.sub(ConcertConnections.CONNECT_PLAYER_LOCATION, playerLocation);
    }

    function playerLocation(e, bypassCount) {
        updateConnection(e, bypassCount);
    }

    //*** Public Methods
    this.animateIn = function () {

    };

}, _ => {
    ConcertConnections.CONNECT_PLAYER_LOCATION = 'connections_new_player';
});

Class(function DreamwaveLogo() {
    Inherit(this, Object3D);
    var _this = this;
    var _shader, _mesh, _wireframe;

    var _wrapper = new Group();
    var _distance = new Vector3();

    //*** Constructor
    (function () {
        _this.add(_wrapper);
        initShader();
        initMesh();
        if (Tests.layeredDreamwaveLogo()) initBatch();
        addHandlers();
        _this.startRender(loop);
    })();

    function initShader() {
        _shader = _this.initClass(Shader, 'DreamwaveLogo', {
            tMap: {value: Utils3D.getTexture('assets/images/dreamwave/dreamwave-logo.png')},
            uAlpha: {value: 0.001, batchUnique: Tests.layeredDreamwaveLogo() },
            uHover: {value: 0.001, batchUnique: Tests.layeredDreamwaveLogo() },
            uUseBatch: { value: Tests.layeredDreamwaveLogo() ? 1 : 0 },
            transparent: true,
            depthTest: false,
            depthWrite: false,
        });
    }

    function initMesh() {
        _mesh = new Mesh(World.PLANE, _shader);
        _mesh.scale.x = 2;
        _mesh.frustumCulled = false;
        _mesh.scale.y = 0.5;
        _wrapper.add(_mesh);

        _this.mesh = _mesh;
    }

    function initBatch() {
        batch = _this.initClass(MeshBatch);
        batch.frustumCulled = false;
        batch.renderOrder = 50;
        _wrapper.add(batch.group);
        _this.id = World.BATCH_ID; World.BATCH_ID++;

        let count = 10;
        for (var i = 0; i < count; i++) {
            let mesh = new Mesh(World.PLANE, _shader);
            mesh.scale.x = 2;
            mesh.scale.y = 0.5;
            mesh.position.z = Math.range(i, 0, count-1, 0.0, -0.2, true);
            mesh.attributes = { alpha: i == 0 ? 1 : i == count-1 ? 0.15 : 0.06, index: i };
            mesh.frustumCulled = false;
            batch.add(mesh);
        }
    }

    //*** Animations & Loops
    function loop() {
        if (Global.PLAYER_POSITION) {
            _distance.subVectors(Global.PLAYER_POSITION, _this.group.position);
            _this.close = _distance.length() < 60;
        }

        let alpha = Global.INTRO_ALPHA < 0.2 ? 1 : 0.001;
        _shader.uniforms.uAlpha.value += (alpha - _shader.uniforms.uAlpha.value) * 0.02;

    }

    //*** Event Handlers
    function addHandlers() {
        Interaction3D.find(World.CAMERA).add(_mesh, hover, click);
    }

    function hover(e) {
        //if (!_this.close) return;
        switch (e.action) {
            case 'over':
                tween(_wrapper.scale, { z: 1.1 }, 500, 'easeOutCubic');
                tween(_wrapper.position, { z: 0.05 }, 500, 'easeOutCubic');
                _shader.tween('uHover', 1, 500, 'easeOutCubic');
                break;
            case 'out':
                tween(_wrapper.scale, { z: 1 }, 800, 'easeOutCubic');
                tween(_wrapper.position, { z: 0 }, 800, 'easeOutCubic');
                _shader.tween('uHover', 0.001, 800, 'easeOutCubic');
                break;
        }
    }

    function click(e) {
        //if (!_this.close) return;

        //var r = confirm("Learn more about Dreamwave");
        //if (r == true) {


        Track.event('link', 'click', 'dreamwave')
        open('https://dreamwave.tech/');


        //} else {

        //}


    }

    //*** Public Methods
    this.animateIn = function () {

    }

});
Class(function ConcertSchedule() {
    Inherit(this, Object3D);
    let _this = this;
    var _batch;
    var $vrWrapper = new Group();
    let $clock, $pst, $container;
    let _date = new Date();
    let _names = [];
    let _times = [];

    //*** Constructor
    (async function () {
        await Hydra.ready();
        await Data.ready();
        await Data.Copy.isReady();
        await _this.wait(500);

        _batch = _this.initClass(GLUIBatchText);
        $container = $gl();
        $container.anchor = new Group();
        $container.add(_batch);
        $container.enable3D(true);

        if (Platform.usingVR()) {
            $vrWrapper.position.copy(_this.group.position);
            $vrWrapper.scale.copy(_this.group.scale);
            $vrWrapper.rotation.copy(_this.group.rotation);
            World.SCENE.add($vrWrapper);
            $vrWrapper.add(_batch.group);
        } else {
            GLUI.Scene.add($container);
            _this.startRender(_ => {
                $container.group.position.copy(_this.group.position);
                $container.group.scale.copy(_this.group.scale);
                $container.group.rotation.copy(_this.group.rotation);
            });
        }

        initItems();
        addHandlers();
        updateTime();
        setInterval(updateTime, 1000);
    })();

    function convertArmyTime(time) {
        let hours = time >= 1300 ? (time-1200) : time;
        hours = Math.floor(hours/100);

        let mins = time.toString().slice(-2);
        let ampm = time > 1200 && time < 2400 ? 'pm' : 'am';

        return hours + ':' + mins + ampm;
    }

    function initItems() {
        data = [];

        for (var i in Artists.data) {
            let artist = Artists.data[i];

            if (artist.time && i !== 'default') {

                let d = {
                    name: i,
                    title: artist.displayName,
                    time: convertArmyTime(artist.time.start) + ' - ' + convertArmyTime(artist.time.end),
                    data: artist
                }

                data.push(d);
            }
        }

        data.sort((a, b) => (a.data.time.start > b.data.time.start) ? -1 : 1);

        let size = 0.08;
        let y = -data.length*size;

        data.forEach((d, i) => {
            if (d.title) {
                let $name = $glText(d.title, null, null, {
                    font: 'AdobeMyungjoStd',
                    size,
                    letterSpacing: 0.02,
                    align: 'right',
                });

                $name.name = d.name;
                $name.y = y + i*size*2;
                $name.x = -0.05;
                $name.alpha = 0.5;
                _batch.add($name);
                _names.push($name);

                let $time = $glText(d.time.toUpperCase(), null, null, {
                    font: 'AdobeMyungjoStd',
                    size: size*0.75,
                    align: 'left',
                    letterSpacing: 0.05
                });

                $time.y = y + i*size*2 - size*0.1;
                $time.x = 0.05;
                $time.alpha = 0.5;
                _batch.add($time);
                _times.push($time);
            }
        });

        $clock = $glText('9:35pm', null, null, {
            font: 'AdobeMyungjoStd',
            size: 0.2,
            letterSpacing: 0.05,
            align: 'right',
        });

        $clock.y = 0;
        $clock.x = -2;
        $clock.alpha = 1;
        //_batch.add($clock);

        if (Platform.usingVR()) {
            $clock.group.scale.setScalar(5);
           // $clock.group.position.copy(_this.group.position);
            //$clock.group.rotation.copy(_this.group.rotation);
            $vrWrapper.add($clock.group);
        } else {
            if (!$clock.anchor) $clock.anchor = new Group();
            _this.add($clock.anchor);
            GLUI.Scene.add($clock);
        }

        $pst = $glText('(pdt)', null, null, {
            font: 'AdobeMyungjoStd',
            size: 0.1,
            letterSpacing: 0.05,
            align: 'left',
        });

        $pst.y = 0.015;
        $pst.x = -1.92;
        $pst.alpha = 1;
        //_batch.add($clock);

        if (!$pst.anchor) $pst.anchor = new Group();

        if (Platform.usingVR()) {
            // $pst.group.scale.copy(_this.group.scale);
            // $pst.group.position.copy(_this.group.position);
            // $pst.group.rotation.copy(_this.group.rotation);
            $vrWrapper.add($pst.group);
        } else {
            _this.add($pst.anchor);
            GLUI.Scene.add($pst);
        }

        // _names[3].alpha = 1;
        // _times[3].alpha = 1;
    }



    //*** Animations & Loops
    function updateTime() {
        _date = new Date();
        let hours = _date.getUTCHours();
        hours -= 7;//_date.getTimezoneOffset()/60;
        if (hours == 0) hours = 24;
        if (hours < 0) hours += 24;

        let mins = _date.getUTCMinutes();
        let ampm = hours >= 12 && hours < 24 ? 'pm' : 'am';
        if (hours > 12) hours -= 12;
        if (mins < 10) mins = '0'+mins;

        let time = hours + ':' + mins + ampm;
        $clock.setText(time.toUpperCase());
    }

    //*** Event Handlers
    function addHandlers() {
        _this.events.sub(ConcertStream.CHANGE_ARTIST, changeArtist);
    }

    function changeArtist(e) {
        _names.forEach((name, i) => {
            if (name.name == e.name) {
                _names[i].tween({ alpha: 1, x: -0.06 }, 1000, 'easeOutCubic');
                _times[i].tween({ alpha: 1, x: 0.05 }, 1000, 'easeOutCubic');
            } else {
                _names[i].tween({ alpha: 0.5, x: -0.15 }, 1000, 'easeOutCubic');
                _times[i].tween({ alpha: 0.5, x: 0.05 }, 1000, 'easeOutCubic');
            }
        })
    }

    //*** Public Methods
    this.animateIn = function () {

    };

});

Class(function CubeEnvironment(_fxScene) {
    Inherit(this, AbstractEnvironment);
    Inherit(this, TutorialEnvironment);

    const _this = this;

    //*** Constructor
    (async function () {
        VFX.instance().setup(_fxScene, _this);

        _this.layers = await _this.layout.getAllLayers();

        if (Global.AERIAL) _this.initClass(AerialCamera, _this);

        _this.setupMultiplayer({
            roomKey: 'cube',
            maxInRoom: 50,
            roomId: SecretSkyUtils.getRoomId(),
            community: true
        });

        _this.configureSpace({
            avatarInteraction: !Utils.query('flyover'),
            hideAvatar: Utils.query('flyover') || Platform.usingVR(),
            preventMovement: Utils.query('flyover'),
            mobileControlsOffset: Tests.mobileControlsOffset(),
            blockTeleport: Tests.blockTeleport(),
            controlsConfig: Tests.controlsConfig(),
            maxMouseTeleport: Tests.maxMouseTeleport(),
            controlsFOV: Tests.controlsFOV(),
            freeMove: 1.5,
            moveMultiplier: 1.7,
            joystickSpeed: 2.8,
            vrTransitionWaitTime: 1000,
            videoChatZones: SecretSkyUtils.getVideoChatZones(_this),
            avatarNameLabels: {font: 'HelveticaNeue-Medium', size: Device.mobile?.phone ? 0.13 : 0.1, stateKey: 'country'}
        });

        if (_this.layers.mirror) {
            if (SSTests.renderMirror()) initMirrorFloor();
            else _this.layers.mirror.visible = false;
        }

        _this.startRender(loop);
    })();

    function initMirrorFloor() {
        _this.mirror = _this.initClass(FX.Mirror, _this.layers.mirror, {
            size: SSTests.mirrorSize(),
            enabled: SSTests.renderMirror(),
            nuke: _fxScene?.nuke || World.NUKE
        });

        if (_this.layers.cubes) {
            _this.mirror.add(_this.layers.cubes.batch.mesh);
        }

        if (_this.layers.screen) {
            _this.mirror.add(_this.layers.screen);
        }

        _this.mirror.start();
    }

    //*** Animations & Loops
    function loop() {
        if (_this.layers && _this.layers.time) _this.layers.time.text.setText(TimeUtil.TIME_TEXT);
    }

    //*** Event Handlers

    //*** Public methods
    this.onActivate = async function() {
        _this.videoChatZones?.setSpeakingUniform('uIsTalking');
        HLSStream.lockLevel(0);

        let avatar = _this.getBatch('avatar');
        await avatar.ready();
        avatar.mesh.shader.set('speedMultiplier', 1.15);
    };

    this.animateIn = function () {

    }
});
Class(function MTGEnvironment(_fxScene) {
    Inherit(this, AbstractEnvironment);
    Inherit(this, TutorialEnvironment);

    const _this = this;

    //*** Constructor
    (async function () {
        VFX.instance().setup(_fxScene, _this);
        _this.layers = await _this.layout.getAllLayers();

        let track = [];
        let grassMultiplier = Tests.grassHide();
        for (let key in _this.layers) {
            let layer = _this.layers[key];
            if (key.includes(['grass', 'leaf'])) {
                if (layer.instanceMeshReady) layer.instanceMeshReady.then(_ => {
                    layer.scriptClass.instanceMultiplier = grassMultiplier;
                    track.push(layer.instanceMesh);
                });
            }
        }

        if (Global.AERIAL) _this.initClass(AerialCamera, _this);

        if (!Platform.usingVR()) _this.layers.grassfloor.shader.side = Shader.DOUBLE_SIDE;

        _this.setupMultiplayer({
            roomKey: 'mtg',
            roomId: SecretSkyUtils.getRoomId(),
            maxInRoom: 100,
            community: true
        });

        _this.configureSpace({
            avatarInteraction: !Utils.query('flyover'),
            hideAvatar: Utils.query('flyover') || Platform.usingVR(),
            preventMovement: Utils.query('flyover'),
            mobileControlsOffset: Tests.mobileControlsOffset(),
            blockTeleport: Tests.blockTeleport(),
            maxMouseTeleport: Tests.maxMouseTeleport(),
            controlsConfig: Tests.controlsConfig(),
            controlsFOV: Tests.controlsFOV(),
            freeMove: 1.5,
            moveMultiplier: 1.75,
            joystickSpeed: 3,
            vrTransitionWaitTime: 1000,
            videoChatZones: SecretSkyUtils.getVideoChatZones(_this),
            avatarNameLabels: {font: 'HelveticaNeue-Medium', size: Device.mobile?.phone ? 0.15 : 0.1, stateKey: 'country'}
        });

        _this.startRender(loop);
    })();

    //*** Animations & Loops
    function loop() {
        if (_this.layers && _this.layers.time) _this.layers.time.text.setText(TimeUtil.TIME_TEXT);
    }

    //*** Event Handlers

    //*** Public methods
    this.onActivate = async function() {
        _this.videoChatZones?.setSpeakingUniform('uIsTalking');
        let avatar = _this.getBatch('avatar');
        await avatar.ready();
        avatar.mesh.shader.set('speedMultiplier', 1.2);
    };

    this.animateIn = function () {

    }
});
Class(function MainEnvironment(_fxScene) {
    Inherit(this, AbstractEnvironment);
    Inherit(this, TutorialEnvironment);

    const _this = this;

    var _batch;

    //*** Constructor
    (async function () {
        VFX.instance().setup(_fxScene, _this);

        _this.layers = await _this.layout.getAllLayers();

        let track = [];
        let grassMultiplier = Tests.grassHide();
        for (let key in _this.layers) {
            let layer = _this.layers[key];
            if (key.includes(['grass'])) {
                if (layer.instanceMeshReady) layer.instanceMeshReady.then(_ => {
                    layer.scriptClass.frustumCulled = true;
                    layer.scriptClass.instanceMultiplier = grassMultiplier;
                    track.push(layer.instanceMesh);
                });
            }
        }

        if (Global.AERIAL) _this.initClass(AerialCamera, _this);

        if (!Platform.usingVR()) _this.layers.floor.shader.side = Shader.DOUBLE_SIDE;

        let v3 = new Vector3();
        _this.startRender(_ => {
            for (let i = 0; i < track.length; i++) {
                let mesh = track[i];
                if (!mesh.geometry.boundingSphere) continue;
                v3.copy(mesh.geometry.boundingSphere.center).applyMatrix4(mesh.matrixWorld);
                let distance = World.CAMERA.position.distanceTo(v3);
                mesh.visible = distance < mesh.geometry.boundingSphere.radius*4;
            }
        }, 24);

        _this.setupMultiplayer({
            roomKey: 'main',
            roomId: SecretSkyUtils.getRoomId(),
            maxInRoom: 150,
            community: true
        });

        _this.configureSpace({
            avatarInteraction: !Utils.query('flyover'),
            hideAvatar: Utils.query('flyover') || Platform.usingVR(),
            preventMovement: Utils.query('flyover'),
            persistAvatarLocation: true,
            mobileControlsOffset: Tests.mobileControlsOffset(),
            blockTeleport: Tests.blockTeleport(),
            maxMouseTeleport: Tests.maxMouseTeleport(),
            controlsConfig: Tests.controlsConfig(),
            controlsFOV: Tests.controlsFOV(),
            freeMove: 1.5,
            moveMultiplier: 2,
            joystickSpeed: 3.5,
            vrTransitionWaitTime: 2000,
            videoChatZones: SecretSkyUtils.getVideoChatZones(_this, 20),
            avatarNameLabels: {font: 'HelveticaNeue-Medium', size: Device.mobile?.phone ? 0.13 : 0.1, stateKey: 'country'}
        });

        _batch = _this.initClass(MeshBatch);
        _batch.renderOrder = 99999;

        _this.layout.group.add(_batch.group);

        MainEnvironment.MAIN_STAGE = _this.layers.stage2;
        MainEnvironment.MAIN_STAGE.visible = false;

        for (let i = 1; i < 30; i++) {
            let fire = _this.layers.campfire_fire.clone();
            fire.rotation.y += Math.PI / 30 * i;
            _batch.add(fire);
        }

        _this.startRender(loop, 10);
    })();

    //*** Animations & Loops
    function loop() {
        if (_this.layers && _this.layers.time) _this.layers.time.text.setText(TimeUtil.TIME_TEXT);
    }

    //*** Event Handlers

    //*** Public methodsd
    this.onActivate = async function() {
        if (!Global.AERIAL) {
            if (Platform.usingVR()) {
                _this.showTutorial('environment-move-vr-teleport');
                _this.showTutorial('environment-move-vr-loco');
                _this.showTutorial('environment-settings-vr');
            } else {
                if (Device.mobile) _this.showTutorial('environment-move-joystick');
                else _this.showTutorial('environment-move');
            }
    
            if (Tests.videoChat()) _this.showTutorial('environment-chat');
        }

        _this.videoChatZones?.setSpeakingUniform('uIsTalking');

        let avatar = _this.getBatch('avatar');
        await avatar.ready();
        avatar.mesh.shader.set('speedMultiplier', 1.2);
    };

    this.animateIn = function () {

    };
}, _ => {
    MainEnvironment.RAVE = { toggle: Utils.query('rave') ? 1 : 0, set: Utils.query('rave') ? 1 : 0, value: Utils.query('rave') ? 1 : 0, ignoreUIL: true };
    MainEnvironment.SUNSET_COLOR = { value: new Color('#ffffff'), set1: new Color('#f3ddab'), set2: new Color('#e3a3cc'), set3: new Color('#8591b5'), ignoreUIL: true };
    MainEnvironment.MAIN_STAGE = null;
});

Class(function TutorialEnvironment() {
    Inherit(this, Component);

    const _this = this;

    _this.create = function() {
        AssetLoader.loadAssets([
            'assets/images/global/tutorial-move.png',
            'assets/images/global/tutorial-move-transport.png',
            'assets/images/global/tutorial-move-vr.png',
            'assets/images/global/tutorial-move-joystick.png',
            'assets/images/global/tutorial-chat.png',
            'assets/images/global/tutorial-chat-mute.png',
            'assets/images/global/tutorial-chat-camera.png',
            'assets/images/global/tutorial-chat-settings.png',
            'assets/images/global/tutorial-perspective.png',
            'assets/images/global/tutorial-settings-vr.png',
        ]);
    };

    function createTutorial(obj) {
        let defaults = {
            fontColor: '#ffffff',
            bgColor: '#000000',
            font: 'AdobeMyungjoStd-Medium',
            type: 'timer',
            // time: false, // Pause for dev
        };
        return Utils.mergeObject(defaults, obj);
    }

    _this.showTutorial = function (id) {
        let obj;
        switch (id) {
            case 'environment-move': {
                obj = createTutorial({
                    delay: 2000,
                    id,
                    icon: 'assets/images/global/tutorial-move.png',
                    title: 'MOVE YOUR AVATAR',
                    text: 'Use arrows keys to move.',
                    eventType: 'keyboard'
                });
                break;
            }
            case 'environment-move-joystick': {
                obj = createTutorial({
                    delay: 2000,
                    id,
                    icon: 'assets/images/global/tutorial-move-joystick.png',
                    title: 'MOVE YOUR AVATAR',
                    text: 'Use the joystick to move.',
                    eventType: 'transport'
                });
                break;
            }
            case 'environment-move-vr-loco': {
                obj = createTutorial({
                    delay: 2000,
                    id,
                    icon: 'assets/images/global/tutorial-move-joystick.png',
                    title: 'MOVE YOUR AVATAR',
                    text: 'Use your left joystick \nfor locomotion.',
                    eventType: 'move-vr'
                });
                break;
            }
            case 'environment-move-vr-teleport': {
                obj = createTutorial({
                    delay: 2000,
                    id,
                    icon: 'assets/images/global/tutorial-move-vr.png',
                    title: 'MOVE YOUR AVATAR',
                    text: 'Point and hold right \ntrigger to teleport.',
                    eventType: 'move-vr'
                });
                break;
            }
            case 'environment-chat': {
                if (Tests.videoChat()) {
                    obj = createTutorial({
                        delay: 2000,
                        id,
                        icon: 'assets/images/global/tutorial-chat.png',
                        title: 'CHAT ZONES',
                        text: 'Approach avatars to chat.',
                        eventType: 'chat'
                    });
                }
                break;
            }
            case 'environment-chat-mute': {
                if (Tests.videoChat()) {
                    obj = createTutorial({
                        delay: 2000,
                        id,
                        icon: 'assets/images/global/tutorial-chat-mute.png',
                        title: 'MUTE / UNMUTE',
                        text: 'Click the microphone icon to mute.'
                    });
                }
                break;
            }
            case 'environment-chat-settings': {
                if (Tests.videoChat()) {
                    obj = createTutorial({
                        id,
                        icon: 'assets/images/global/tutorial-chat-settings.png',
                        title: 'AUDIO / VIDEO SETTINGS',
                        text: 'Click the gear icon \nto adjust AV settings.'
                    });
                }
                break;
            }
            case 'environment-settings-vr': {
                obj = createTutorial({
                    id,
                    icon: 'assets/images/global/tutorial-settings-vr.png',
                    title: 'MENU',
                    text: 'Press and hold any button\nto access settings.',
                    eventType: 'settings-vr'
                });
                break;
            }
            default:
                return;
        }

        DreamWorld.active.showTutorial(obj);
    }
});
Class(function WorldTreeEnvironment(_fxScene) {
    Inherit(this, AbstractEnvironment);
    Inherit(this, TutorialEnvironment);

    const _this = this;

    //*** Constructor
    (async function () {
        VFX.instance().setup(_fxScene, _this);

        _this.layers = await _this.layout.getAllLayers();

        let track = [];
        let grassMultiplier = Tests.grassHide();
        for (let key in _this.layers) {
            let layer = _this.layers[key];
            if (key.includes(['grass', 'leaves', 'flowers'])) {
                if (layer.instanceMeshReady) layer.instanceMeshReady.then(_ => {
                    layer.scriptClass.instanceMultiplier = grassMultiplier;
                    track.push(layer.instanceMesh);
                });
            }
        }

        if (Global.AERIAL) _this.initClass(AerialCamera, _this);

        _this.setupMultiplayer({
            roomKey: 'world-tree',
            maxInRoom: 50,
            roomId: SecretSkyUtils.getRoomId(),
            community: true
        });

        _this.configureSpace({
            avatarInteraction: !Utils.query('flyover'),
            hideAvatar: Utils.query('flyover') || Platform.usingVR(),
            preventMovement: Utils.query('flyover'),
            mobileControlsOffset: Tests.mobileControlsOffset(),
            // blockTeleport: Tests.blockTeleport(),
            controlsConfig: Tests.controlsConfig(),
            controlsFOV: Tests.controlsFOV(),
            maxMouseTeleport: Tests.maxMouseTeleport(),
            freeMove: 1.5,
            moveMultiplier: 1.75,
            joystickSpeed: 3,
            vrTransitionWaitTime: 1000,
            videoChatZones: SecretSkyUtils.getVideoChatZones(_this),
            avatarNameLabels: {font: 'HelveticaNeue-Medium', size: Device.mobile?.phone ? 0.13 : 0.1, stateKey: 'country'}
        });

        _this.startRender(loop);
        addHandlers();
    })();

    //*** Animations & Loops
    function loop() {
        if (_this.layers && _this.layers.time) _this.layers.time.text.setText(TimeUtil.TIME_TEXT);
    }

    //*** Event Handlers
    function addHandlers() {
        _this.events.sub(TriggerZone.TRIGGERED, insideZone);
    }

    function insideZone(e) {
        switch (e.id) {
            case 'home':
                DreamWorld.active.setRoute('');
                break;
        }
    }

    //*** Public methods
    this.onActivate = async function() {
        _this.videoChatZones?.setSpeakingUniform('uIsTalking');

        let avatar = _this.getBatch('avatar');
        await avatar.ready();
        avatar.mesh.shader.set('speedMultiplier', 1.2);
    };

    this.animateIn = function () {

    }
});
Class(function Cubes() {
    Inherit(this, Object3D);
    const _this = this;
    var _cubes, _batch;

    //*** Constructor
    (async function () {
        initCubes();
        setInterval(switchCube, 1000);
        setInterval(switchAll, 60000);
    })();

    async function initCubes() {
        _batch = _this.initClass(MeshBatch);
        _this.batch = _batch;

        _cubes = [];

        for (var i = 0; i < 200; i++) {
            let shader = new Shader('VideoCubeShader', {
                tMap: VideoUtil.VIDEO_TEXTURE,
                tMap2: VideoUtil.VISUALS_TEXTURE,
                uFresnelParams: { value: new Vector4(0.38, 0.48, 0.58, 0), batchUnique: true },
                uUVScale: { value: Math.random(1,6,3), batchUnique: true },
                uUVPosition: { value: new Vector2(Math.random(0.1,0.9,3), Math.random(0.1,0.9,3)), batchUnique: true },
                uWhite: { value: 0, batchUnique: true },
                uBig: { value: 0, batchUnique: true },
                side: Shader.DOUBLE_SIDE,
                //blending: Shader.ADDITIVE_BLENDING,
                transparent: true,
                uAlpha: {value: 1}
            });


            let cube = new Mesh(World.BOX, shader);
            cube.shader = shader;
            randomValues(cube);


            _batch.add(cube);
            _cubes.push(cube);
        }
    }

    function switchCube() {
        let cube = _cubes.random();
        randomValues(cube);

        cube.shader.set('uWhite', 1);
        cube.shader.tween('uWhite', 0, 500, 'easeInQuart');
    }

    function switchAll() {
        for (var i = 0; i < _cubes.length; i++) {
            randomValues(_cubes[i], true);
            _cubes[i].shader.set('uWhite', 1);
            _cubes[i].shader.tween('uWhite', 0, 500, 'easeInQuart', Math.random(0,2000));
        }
    }

    function randomValues(cube, noPosition) {

        //if (!noPosition) {
        let onFloor = Math.random(0,1,3) > 0.92;

        let scale = Math.random(4,8,2);
        cube.scale.setScalar(Math.random(4,8,2));

        cube.position.x = Math.random(scale,45,2) * Utils.headsTails(-1,1);
        cube.position.z = Math.random(scale,45,2) * Utils.headsTails(-1,1);
        cube.position.y = onFloor ? cube.scale.y*0.5 : Math.random(cube.scale.y+1,50,3);
        //}


        cube.rotation.x = Math.random(0,4)*Math.radians(90);
        cube.rotation.y = Math.random(0,4)*Math.radians(90);
        cube.rotation.z = Math.random(0,4)*Math.radians(90);


        let big = Math.random(0,1,3) > 0.7;

        //cube.shader.blending = Math.random(0,1,3) > 0.1 ? Shader.NORMAL_BLENDING : Shader.ADDITIVE_BLENDING;
        cube.shader.uniforms.uBig.value = big ? 1 : 0;

        cube.shader.uniforms.uUVScale.value = big ? 500 : Math.random(2,5,3);
        let bounds = big ? 0.1 : Math.range(cube.shader.uniforms.uUVScale.value, 1, 6, 0, 0.45, true);

        let offset = big ? 0.25 : 0.5;
        cube.shader.uniforms.uUVPosition.value.x = Math.random(offset-bounds,offset+bounds,3);
        cube.shader.uniforms.uUVPosition.value.y = Math.random(offset-bounds,offset+bounds,3);
    }


    //*** Animations & Loops
    function loop() {

    }

    //*** Event Handlers
    function addHandlers() {

    }

    //*** Public methods
    this.animateIn = function () {

    }
});
Class(function FireShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);

    const _this = this;

    //*** Constructor
    (async function () {
        _shader.addUniforms({
            uRave: MainEnvironment.RAVE,
            tMap: VideoUtil.VISUALS_TEXTURE,
            tFireMap: { value: null },
            tNoiseMap: { value: null, getTexture: Utils3D.getRepeatTexture },
            uAlpha: { value: 1 },
            uColor: { value: new Color('#ff0000') },
            uDistortAmount: { value: 0.5 },
            uDistortSpeed: { value: 0.7 },
            transparent: true,
            blending: Shader.ADDITIVE_BLENDING
        });
    })();

    //*** Event handlers


    //*** Public methods

});
Class(function Butterflies() {
    Inherit(this, Object3D);
    const _this = this;

    var _proton, _geometry, _shader;
    
    //*** Constructor
    (async function() {
        initScene();
        await initProton();
        await initGeometry();
        initShader();
        initMesh();
    })();

    async function initProton() {
        _proton = await _this.layout.getLayer('particles');
        await _proton.ready();
        _proton.antimatter.storeVelocity = true;
    }

    async function initGeometry() {
        _geometry = await GeomThread.loadGeometry('assets/geometry/main/particles/butterfly_rest.json');
        _geometry = new Geometry().instanceFrom(_geometry);
        _proton.applyToInstancedGeometry(_geometry);
    }

    function initShader() {
        _shader = _this.initClass(Shader, 'BakedAnimationShader', {
            tAnimation: {value: null},
            uFrames: {value: 7},
            uBoundingBoxMin: {value: new Vector3(-1, 0, -1)},
            uBoundingBoxMax: {value: new Vector3(1, 3, 1)},
            uVelocityRange: {value: new Vector2(0.0, 0.005)},
            uSpeed: {value: 4},
            uScale: {value: 0.033}
        });

        _shader.side = Shader.BACK_SIDE;
        ShaderUIL.add(_shader, _proton.uilGroup).setLabel('Shader');
        _proton.applyToShader(_shader);
    }

    function initMesh() {
        let mesh = new Mesh(_geometry, _shader);
        _this.add(mesh);
    }

    async function initScene() {
        if (!_this) return;

        _this.layout = _this.initClass(SceneLayout, `butterflies`);
    }

    //*** Event handlers

    //*** Public methods
});

Class(function BigScreen() {
    Inherit(this, Object3D);
    const _this = this;

    //*** Constructor
    (async function () {
        _this.layout = _this.initClass(SceneLayout, 'BigScreen_layout');
        _this.add(_this.layout.group);

        _this.layers = await _this.layout.getAllLayers();

        //_this.startRender(loop);
        //addHandlers();
    })();

    //*** Animations & Loops
    function loop() {

    }

    //*** Event Handlers
    function addHandlers() {

    }

    //*** Public methods
    this.animateIn = function () {

    }
});
Class(function StageSimple() {
    Inherit(this, Object3D);
    const _this = this;

    //*** Constructor
    (async function () {
        _this.layout = _this.initClass(SceneLayout, "MainEnvironment_env");


        _this.layers = await _this.layout.getAllLayers();

        let layers = ['dome', 'river', 'rocks', 'fireworks', 'water', 'cliff', 'stage', 'screen', 'cloud', 'clouds', 'floor', 'rock_edge'];


        function doesntMatch(key) {
            for (let i = 0; i < layers.length; i++) {
                if (key == layers[i]) return false;
            }
            return true;
        }

        // _this.layers.dome.position.x = -_this.group.position.x;
        // _this.layers.dome.position.y = -_this.group.position.y;
        // _this.layers.dome.position.z = -_this.group.position.z;

        if (_this.parent?.name?.toLowerCase().includes('mtg')) {
            // layers.push('tree');
            layers.push('cl0ud');
        }

        for (let key in _this.layers) {
            if (doesntMatch(key)) {
                let layer = _this.layers[key];
                layer.visible = false;
                if (layer.group) layer.group.visible = false;
                if (layer.instanceMeshReady) {
                    layer.instanceMeshReady.then(_ => layer.instanceMesh.visible = false);
                }
            }
        }

    })();

    //*** Event handlers

    //*** Public methods

});
Class(function BigScreenVideoShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (async function () {
        _shader.addUniforms({
            tMap: VideoUtil.VIDEO_TEXTURE,
            tDefault: { value: null },
            uUseDefault: VideoUtil.VIDEO_PLAYING,
            uAlpha: {value: 1},
            uFogParams: {value: new Vector4(-80, -400, 0, 0)},
            uFogColor: {value: new Color('#affffc')},
            transparent: true,
            blending: Shader.ADDITIVE_BLENDING
        });

        _this.startRender(_ => {
            //BigScreenVideoShader.WORLD_POSITION.value = _mesh.getWorldPosition();
            //console.log(BigScreenVideoShader.WORLD_POSITION.value);
        });
    })();

    //*** Event handlers


    //*** Public methods
    this.onVisible = function() {
        HLSStream.registerScreen(_mesh);
    }
}, _ => {
    BigScreenVideoShader.WORLD_POSITION = { value: new Vector3(0,10,-215), ignoreUIL: true };
    BigScreenVideoShader.LIGHT_RANGE = { value: new Vector2(200,70), ignoreUIL: true };
});
Class(function WirescreenVideoShader(_mesh, _shader, _group, _input) {
    Inherit(this, Component);
    const _this = this;

    //*** Constructor
    (async function () {
        _shader.addUniforms({
            tMap: VideoUtil.VIDEO_TEXTURE,
            tDefault: { value: null },
            uUseDefault: VideoUtil.VIDEO_PLAYING,
            uAlpha: {value: 1},
            uFogParams: {value: new Vector4(-80, -400, 0, 0)},
            uFogColor: {value: new Color('#affffc')},
            transparent: true,
            blending: Shader.ADDITIVE_BLENDING
        });

        _shader.wireframe = true;
        _this.startRender(_ => {});
    })();

    //*** Event handlers


    //*** Public methods
    // this.onVisible = function() {
    //     HLSStream.registerScreen(_mesh);
    // }
});
Class(function Main() {
    Inherit(this, DreamWorld);
    const _this = this;
    var _main, _cubes, _worldTree, _mtg, _landing;

    World.TELEPORT_CYLINDER = new CylinderGeometry(1,1,3,50);
    World.PLANE_HI = new PlaneGeometry(1,1,200,Math.round(200*(9/16)));
    World.CAMERA.far = 2000;

    //*** Public methods
    this.init = async function() {
        if (!Hydra.LOCAL) {
            let info = 'Welcome to ( Secret Sky. )';
            info += '\n' + 'A virtual music festival hosted by Porter Robinson';
            info += '\n' + 'Powered by Dreamwave technology https://dreamwave.tech/';
            info += '\n' + 'Designed by https://activetheory.net/';
            console.log(info);
        }

        fetch(Assets.getPath("assets/geometry/avatar/character_4k_run.json"));

        if (!HLSStream.usingHLS()) YTPlayer.instance();
        Transition.instance().registerView(SSTransition, 'internal');
        Transition.instance().registerView(SSTransition, 'external');

        _main = await _this.createGroupEnvironment(SecretSkyAvatar, MainEnvironment);
        _cubes = await _this.createGroupEnvironment(SecretSkyAvatar, CubeEnvironment);
        _worldTree = await _this.createGroupEnvironment(SecretSkyAvatar, WorldTreeEnvironment);
        _mtg = await _this.createGroupEnvironment(SecretSkyAvatar, MTGEnvironment);
        _landing = await _this.createCustomEnvironment(LandingEnvironment);

        UIController.instance().element.setZ(GameCenter.BLOCKED ? 101 : 99);

        initTriggers();
        addHandlers();

        return this.onRouteChange(_this.route);
    }

    function initTriggers() {
        let styles = { fontColor: '#ffffff', fontSize: 60, lineHeight: 1.2, bgColor: '#000000', font: 'HelveticaNeue-Medium' }

        TriggerZone.registerDialogClass('rave', UI3DPrompt, Utils.mergeObject({
            text: 'hi there! want to\ntoggle night mode?' }, styles));

        TriggerZone.registerDialogClass('potaro-welcome', UI3DPrompt, Utils.mergeObject({
            text: 'welcome! find the portals to travel to other areas', singleOption: true, yesButton: 'Ok' }, styles));

        TriggerZone.registerDialogClass('potaro-tree', UI3DPrompt, Utils.mergeObject({
            text: 'you made it! this is a great spot for fireworks', singleOption: true, yesButton: 'Ok' }, styles));

        TriggerZone.registerDialogClass('potaro-mtg', UI3DPrompt, Utils.mergeObject({
            text: 'hi, welcome to Strixhaven! have you seen the pools?', singleOption: true, yesButton: 'Ok' }, styles));

        TriggerZone.registerDialogClass('cubes', UI3DPrompt, Utils.mergeObject({
            text: 'go to cube world?\n(seizure warning)' }, styles));

        TriggerZone.registerDialogClass('mtg', UI3DPrompt, Utils.mergeObject({
            text: 'travel to Strixhaven?' }, styles));

        TriggerZone.registerDialogClass('tree', UI3DPrompt, Utils.mergeObject({
            text: 'climb the tree?' }, styles));

        TriggerZone.registerDialogClass('home', UI3DPrompt, Utils.mergeObject({
            text: 'go back home?' }, styles));
    }

    function addHandlers() {
        _this.events.sub(TriggerZone.TRIGGERED, insideZone);
        _this.events.sub(VideoChatZone.JOIN, onJoinVideoChatZone);
    }

    function onJoinVideoChatZone() {
        if (!Platform.usingVR()) {
            let defaults = {
                fontColor: '#ffffff',
                bgColor: '#000000',
                font: 'AdobeMyungjoStd-Medium',
                type: 'timer',
                // time: false, // Pause for dev
            };

            _this.showTutorial(Utils.mergeObject(defaults, {
                delay: 2000,
                id: 'chat-mute',
                icon: 'assets/images/global/tutorial-chat-mute.png',
                title: 'MUTE / UNMUTE',
                text: 'Click the microphone icon to mute.'
            }));

            _this.showTutorial(Utils.mergeObject(defaults, {
                delay: 2000,
                id: 'chat-settings',
                icon: 'assets/images/global/tutorial-chat-settings.png',
                title: 'AUDIO / VIDEO SETTINGS',
                text: 'Click the gear icon to adjust AV settings.'
            }));
        }
    }

    function insideZone(e) {
        console.log(e);
        switch (e.id) {
            case 'rave':
                MainEnvironment.RAVE.toggle = !MainEnvironment.RAVE.toggle;
                AppState.set('rave', MainEnvironment.RAVE.toggle);
                if (MainEnvironment.RAVE.toggle) {
                    tween(MainEnvironment.RAVE, { value: 1 }, 3000, 'easeInOutCubic');
                } else {
                    tween(MainEnvironment.RAVE, { value: 0 }, 1000, 'easeOutCubic');
                }
                break;
            case 'cubes':
                DreamWorld.active.setRoute('cubes');
                break;
            case 'tree':
                DreamWorld.active.setRoute('tree');
                break;
            case 'home':
                DreamWorld.active.setRoute('home');
                break;
            case 'mtg':
                DreamWorld.active.setRoute('mtg');
                break;
        }
    }


    this.onRouteChange = function(route, split) {
        //fire an event and update the project
        if (!_this.flag('doneLanding') && !Platform.usingVR() && !Utils.query('flyover') && !Utils.query('skip')) {
            _this.flag('doneLanding', true);
            if (!HLSStream.usingHLS()) YTPlayer.instance().togglePosition(false);

            if (!Global.AERIAL) return _landing.activate();
        } else {
            if (!HLSStream.usingHLS()) YTPlayer.instance().togglePosition(true);
            if (!Platform.usingVR()) SettingsButton.instance();
        }
        switch (route[0]) {
            case 'cubes': return _cubes.activate(); break;
            case 'tree': return _worldTree.activate(); break;
            case 'mtg': return _mtg.activate(); break;
            default: return _main.activate(); break;
        }
    }

    this.onDestroy = function() {
        //clean everything up!
    }

    // this.shouldTransition = function(route) {
    //     return false;
    // }
});

window._BUILT_ = true;