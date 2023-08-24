// --------------------------------------
// 
//    _  _ _/ .  _  _/ /_ _  _  _        
//   /_|/_ / /|//_  / / //_ /_// /_/     
//   https://activetheory.net    _/      
// 
// --------------------------------------
//   4/25/21 6:19p
// --------------------------------------

window.ASSETS = ["assets/js/lib/hls.js","assets/data/uil.json","assets/images/avatar_bake.jpg","assets/images/avatar_bake_2.jpg","assets/images/landing/dreamwave.png","assets/images/landing/left.jpg","assets/images/landing/logo.jpg","assets/images/landing/right.jpg","assets/images/settings-black.png","assets/images/settings-white.png","assets/images/tree.jpg","assets/geometry/avatar/character_4k.json","assets/geometry/avatar/character_4k_run.json","assets/geometry/avatar/character_4k_wave.json","assets/geometry/controller/controller.json","assets/geometry/controller/controller2.json","assets/fonts/AdobeMyungjoStd-Medium-Alphabetic.woff","assets/fonts/AdobeMyungjoStd-Medium-Alphabetic.woff2","assets/fonts/AdobeMyungjoStd-Medium.json","assets/fonts/AdobeMyungjoStd-Medium.otf","assets/fonts/AdobeMyungjoStd-Medium.png","assets/fonts/AdobeMyungjoStd.json","assets/fonts/AdobeMyungjoStd.otf","assets/fonts/AdobeMyungjoStd.png","assets/fonts/Helvetica.dfont","assets/fonts/HelveticaNeue-Medium.json","assets/fonts/HelveticaNeue-Medium.png","assets/fonts/HelveticaNeue.ttc","assets/fonts/Sun-ExtA.ttf","assets/fonts/Times.ttc","assets/shaders/compiled.vs"];
ASSETS.SW = ["assets/fonts/AdobeMyungjoStd-Medium-Alphabetic.woff","assets/fonts/AdobeMyungjoStd-Medium-Alphabetic.woff2","assets/fonts/AdobeMyungjoStd-Medium.json","assets/fonts/AdobeMyungjoStd-Medium.otf","assets/fonts/AdobeMyungjoStd-Medium.png","assets/fonts/AdobeMyungjoStd.json","assets/fonts/AdobeMyungjoStd.otf","assets/fonts/AdobeMyungjoStd.png","assets/fonts/Helvetica.dfont","assets/fonts/HelveticaNeue-Medium.json","assets/fonts/HelveticaNeue-Medium.png","assets/fonts/HelveticaNeue.ttc","assets/fonts/Sun-ExtA.ttf","assets/fonts/Times.ttc","assets/css/style-scss.css","assets/css/style.css","assets/js/app.js"];
Class(function TextureAnimationShader(_shader, _paths, speeds) {

    TextureAnimationShader.applyTo(_shader, _paths, speeds);

}, _ => {

    let pending = {};
    let cache = {};

    function applyFromTo(a, b) {
        b.uniforms.uAnimationTexture = a.uniforms.uAnimationTexture;
        b.uniforms.uTextureHeight = a.uniforms.uTextureHeight;
        b.uniforms.uAnimationLength = a.uniforms.uAnimationLength;
        b.uniforms.uOffsets = a.uniforms.uOffsets;
        b.uniforms.uHzMultiplier = a.uniforms.uHzMultiplier;
        b.uniforms.uSpeed = a.uniforms.uSpeed;
    }

    TextureAnimationShader.applyTo = async function(shader, paths, speeds = null) {
        shader.waitForPromise = Promise.create();
        if (cache[shader.UILPrefix]) {
            applyFromTo(cache[shader.UILPrefix], shader);
            shader.waitForPromise.resolve();
            return;
        }

        if (pending[shader.UILPrefix]) {
            pending[shader.UILPrefix].then(_ => {
                applyFromTo(cache[shader.UILPrefix], shader);
                shader.waitForPromise.resolve();
            });
            return;
        }

        pending[shader.UILPrefix] = Promise.create();

        var promises = {};
        var promisesArray = [];
        var animations = [];

        if(paths.length > 10) {
            console.error("Avatars allow up to 10 texture animations");
            return
        }

        if(speeds == null) {
            speeds = [];
        }

        for(let i = 0; i < paths.length; i++) speeds.push(1);

        let buildTexture = function() {

            if(animations.length < paths.length) return;

            animations.sort((a, b) => a.animationIndex - b.animationIndex);
            let filteredAnimations = animations.map(el => el.data);
            let rawData = [];
            filteredAnimations.map(el => {
                for(let i = 0; i < el.length; i ++) rawData.push(el[i]);
            })
            let width = animations[0].totalVertices;

            let animationLength = animations.map(el => el.animationLength);
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            let height = animationLength.reduce(reducer);

            let textureAnimation = new DataTexture(new Float32Array(rawData), width, height);

            textureAnimation.minFilter = Texture.NEAREST;
            textureAnimation.magFilter = Texture.NEAREST;
            textureAnimation.upload();

            let animationOffsets = [];
            let partial = 0;
            for(let i = 0; i < animations.length; i ++) {
                animationOffsets.push(partial);
                partial += animations[i].animationLength;
            }

            shader.addUniforms({
                uAnimationTexture: {value: textureAnimation},
                uTextureHeight: {value: height},
                uAnimationLength: {value: animationLength},
                uOffsets: {value: animationOffsets},
                uHzMultiplier: {value: Render.REFRESH_RATE > 60 ? Render.HZ_MULTIPLIER : 1},
                uSpeed: {value: speeds}
            });

            shader.uniforms.uAnimationLength.type = 'fv';
            shader.uniforms.uOffsets.type = 'fv';
            shader.uniforms.uSpeed.type = 'fv';
        }

        //make sure every instance of shader gets it incase they get added out of order
        paths.map((path, index) => {

            if (promises[path]) {

                promises[path].then(_ => {
                    buildTexture();
                });

                return Promise.all(promisesArray);

            }

            let promise = Promise.create();
            promises[path] = promise;
            promisesArray.push(promise);

            Thread.shared().setupTextureAnimation({path: Thread.absolutePath(Assets.getPath(path))}, function(response) {

                animations.push({
                    data: response.data,
                    totalVertices: response.length0 / 3,
                    animationLength: response.length,
                    animationIndex: index
                })

                buildTexture();

                promise.resolve();
            });

        });

        await Promise.all(promisesArray);
        cache[shader.UILPrefix] = shader;
        pending[shader.UILPrefix].resolve();
        shader.waitForPromise.resolve();
    }

    function setupTextureAnimation(e, id) {
        (async function() {
            let json = await get(e.path);
            let data = [];
            let vectors = [];
            let repeatedData = 0;
            json.map(row => {

                for (let i = 0; i < row.length; i += 3) {

                    let vector = new Vector3(row[i], row[i + 1], row[i + 2]);

                    // let repeated = false;
                    //
                    // for(let j = 0; j < vectors.length; j ++) {
                    //
                    //     let d = vectors[j].clone().sub(vector).length();
                    //
                    //     if(d < 0.01) {
                    //         vector = vectors[j].clone();
                    //         repeated = true;
                    //         repeatedData ++;
                    //         break;
                    //     }
                    //
                    // }
                    //
                    // if(!repeated) vectors.push(vector);
                    data.push(vector.x, vector.y, vector.z, 1);
                }

            });

            let textureData = new Float32Array(data);
            resolve({data: textureData, length0: json[0].length, length: json.length}, id, [textureData.buffer]);
        })();
    }

    Thread.upload(setupTextureAnimation);
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

Namespace('DreamUI');

DreamUI.Class(function AdBlocker({
    icon = 'adblocker',
    copy = DreamUI.AdBlockerCopy,
    styles = DreamUI.AdBlockerStyles
}) {
    Inherit(this, DreamUI.DreamElement);

    const _this = this;
    const $this = _this.element;

    //*** Constructor
    (function () {
        initElement();
        initIcon();
        initTitle();
        initDescription();
        initButton();
    })();

    function initElement() {
        $this.css(styles.element);
    }

    function initIcon() {
        _this.icon = _this.initClass(Sprite, icon, styles.icon);
    }

    function initTitle() {
        _this.title = $this.create(_this.getPrefix('title'));
        _this.title.css(styles.title);
        _this.title.text(copy.title);
    }

    function initDescription() {
        _this.description = $this.create(_this.getPrefix('description'));
        _this.description.css(styles.description);
        _this.description.text(copy.description);
    }

    function initButton() {
        _this.button = _this.initClass(DreamUI.Button, {
            preset: 'pill',
            styles: styles.button,
            text: copy.button
        });

        _this.events.sub(_this.button, DreamUI.Button.CLICK, handleClick);
    }

    function handleClick() {
        location.reload();
    }
});

Namespace('DreamUI');

DreamUI.Class(function AdBlockerCopy() {
    Inherit(this, Component);

    this.title = 'Turn off AdbBocker!';
    this.description = 'Your AdBlocker blocks WebSockets which are key to the experience. Please disable your adblocker and refresh the page to continue.';
    this.button = 'Refresh page';
}, 'static');

Namespace('DreamUI');

DreamUI.Class(function AdBlockerStyles() {
    Inherit(this, Component);

    const _this = this;

    (async function () {
        await DreamColors.instance().ready();

        _this.element = {
            background: DreamColors.instance().white,
            borderRadius: '0.8rem',
            padding: '3.2rem 4rem',
            textAlign: 'center',
        };

        _this.icon = {
            color: DreamColors.instance().red500,
            height: '5rem',
            width: '5rem'
        }

        _this.title = {
            ...DreamStyleguide.instance().h5,
            margin: '2.5rem auto 0',
        };

        _this.description = {
            ...DreamStyleguide.instance().bodySmall,
            margin: '1.5rem auto 0',
            maxWidth: '29rem',
        };

        _this.button = {
            element: {
                background: DreamColors.instance().red500,
                margin: '2.5rem auto 0',
            },
            text: {
                fontSize: '1.2rem',
                textTransform: 'uppercase'
            }
        };

        _this.flag('isReady', true);
    })();

    _this.ready = function () {
        return _this.wait('isReady');
    };
}, 'static');

Namespace('DreamUI');

/**
 * <pre>
 * CoreUI button for the dream platform
 * </pre>
 *
 * @module Button
 * @class
 * @name Button
 *
 * @example
 * // Create a flat Button.
 *  _this.button = _this.initClass(DreamUI.Button, {
 *      preset: 'flat',
 *      text: 'Test Button'
 *  });
 *
 * @param animations
 * @param styles {object}
 * @param disabled {boolean}
 * @param icon {string}
 * @param text {string}
 * @param preset {string} basic | stroked | raised | flat | icon | fab | minFab | pill
 * @param iconPosition {string} left | right
 * @param type {string} button type attribute ("button" | "submit") - useful if button used in Form
 * @param {boolean} iconUseSvgData
 */
DreamUI.Class(function Button({
    animations = DreamUI.ButtonAnimations,
    disabled,
    icon,
    styles = {},
    text,
    preset = "basic",
    iconPosition = "right",
    type,
    iconUseSvgData = false
}) {
    Inherit(this, DreamUI.DreamElement, 'button');

    const _this = this;
    const $this = _this.element;

    //*** Constructor
    (async function () {
        await DreamUI.ButtonStyles.ready();
        _this.disabled = disabled;

        initElement();

        if (text) initText();
        if (icon) initIcon();

        addHandlers();

        _this.flag('isReady', true);
    })();

    function initElement() {
        $this.attr('aria-label', text);
        $this.css(_this.combineStyles([DreamUI.ButtonStyles[preset].element, styles.element]));

        if (type) $this.attr('type', type);
        if (disabled) $this.attr('disabled', 'disabled');
    }

    function initText() {
        _this.text = $this.create(`${_this.constructorName}__text`);
        _this.text.css(_this.combineStyles([DreamUI.ButtonStyles[preset].text, styles.text]));
        _this.text.text(text);
    }

    function initIcon() {
        _this.icon = _this.initClass(Sprite, icon, styles.icon, icon, true, iconUseSvgData);

        if (iconPosition === 'left') {
            _this.icon.element.css(_this.combineStyles([DreamUI.ButtonStyles[preset].iconLeft, styles.iconLeft]));
        } else {
            _this.icon.element.css(_this.combineStyles([DreamUI.ButtonStyles[preset].iconRight, styles.iconRight]));
        }

        _this.icon.element.css(_this.combineStyles([DreamUI.ButtonStyles[preset].icon, styles.icon]));
    }

    //*** Event handlers
    function addHandlers() {
        $this.interact(handleHover, handleClick);
        if (disabled) $this.disableInteract();

        DreamUI.AccessibilityService
            .instance()
            .enableTabNavigation(
                $this,
                handleClick
            );
    }

    function handleHover(event) {
        animations.onHover(event, _this);
    }

    function handleClick() {
        _this.events.fire(DreamUI.Button.CLICK);
    }

    //*** Public methods
    _this.setText = async (value) => {
        await _this.wait('text');

        _this.text.text(value);
    };

    /**
     * Enable the button
     *
     * @function
     * @name enable
     * @memberof Button
     * @instance
     */
    _this.enable = async _ => {
        await _this.wait('isReady');
        _this.disabled = false;
        $this.enableInteract();
        animations.onEnabled(_this);
        $this.attr('disabled', null);
    };

    /**
     * Disable the button
     *
     * @function
     * @name disable
     * @memberof Button
     * @instance
     */
    _this.disable = async _ => {
        await _this.wait('isReady');
        _this.disabled = true;
        $this.disableInteract();
        animations.onDisabled(_this);
        $this.attr('disabled', 'disabled');
    };

    _this.ready = _ =>{
        return _this.wait('isReady')
    }

    /**
     * Sets custom button styles
     *
     * @function
     * @name setStyles
     * @memberof Button
     * @instance
     */
    _this.setStyles = async replacedStyles => {
        await _this.wait('isReady');

        if (!replacedStyles) return;

        if ($this && replacedStyles.element) {
            $this.css(replacedStyles.element);
        }

        if (_this.text && replacedStyles.text) {
            _this.text.css(replacedStyles.text);
        }

        if (_this.icon && replacedStyles.icon) {
            _this.icon.element.css(replacedStyles.icon);
        }
    };
}, _ => {
    /**
     * @fires Button.CLICK
     */
    DreamUI.Button.CLICK = 'DreamUI.Button.CLICK';
});

Namespace('DreamUI');

/**
 * <pre>
 * CoreUI button animations for the dream platform
 * </pre>
 *
 * @module ButtonAnimations
 * @class
 * @name ButtonAnimations
 *
 */
DreamUI.Class(function ButtonAnimations() {
    Inherit(this, Component);

    /**
     * onHover
     *
     * @name onHover
     * @memberof ButtonAnimations
     * @instance
     */
    this.onHover = function ({ action }, button) {
        switch (action) {
            case 'over': button.element.tween({ opacity: 0.75 }, 400, 'easeOutCubic'); break;
            case 'out': button.element.tween({ opacity: 1 }, 400, 'easeOutCubic'); break;
        }
    };

    /**
     * onClick
     *
     * @name onClick
     * @memberof ButtonAnimations
     * @instance
     */
    this.onClick = function(button) {
        button.element.tween({ opacity: 1 }, 400, 'easeOutCubic');
    };

    /**
     * onEnabled
     *
     * @name onEnabled
     * @memberof ButtonAnimations
     * @instance
     */
    this.onEnabled = function(button) {
        button.element.css({ opacity: 1 });
        button.element.hit.css({ cursor: 'pointer' });
    };

    /**
     * onDisabled
     *
     * @name onDisabled
     * @memberof ButtonAnimations
     * @instance
     */
    this.onDisabled = function(button) {
        button.element.css({ opacity: 0.5, cursor: 'not-allowed' });
        if (button.element.hit) button.element.hit.css({ cursor: 'not-allowed' });
    };
}, 'static');

Namespace('DreamUI');

/**
 * <pre>
 * CoreUI button styles for the dream platform
 * </pre>
 *
 * @module ButtonStyles
 * @class
 * @name ButtonStyles
 *
 */
DreamUI.Class(function ButtonStyles() {
    Inherit(this, Component);

    const _this = this;

    const BASE_ELEMENT = {
        'align-items': 'center',
        'appearance': 'none',
        'display': 'flex',
        '-webkit-appearance': 'none',
        'background': 'none',
        'border': 'none',
        'borderRadius': '0.4rem',
        'outline': 'none',
        'position': 'relative',
        'textAlign': 'center',
        'whiteSpace': 'nowrap',
    };

    let BASE_TEXT = {};

    const BASE_ICON = {
        height: '2.4rem',
        width: '2.4rem'
    };

    (async function () {
        await DreamColors.instance().ready();
        await DreamStyleguide.instance().ready();

        BASE_TEXT = {
            ...DreamStyleguide.instance().buttonMedium,
            position:'relative',
            fontWeight: 'bold'
        };

        _this.basic = {
            element: {
                ...BASE_ELEMENT,
                background: 'transparent',
                color: DreamColors.instance().black,
                padding: '1.25rem 3.5rem'
            },

            text: {
                ...BASE_TEXT
            },

            icon: {
                ...BASE_ICON
            },

            iconRight: {
                marginLeft: '1rem'
            },

            iconLeft: {
                marginRight: '1rem'
            }
        };

        _this.fab = {
            element: {
                ...BASE_ELEMENT,
                background: DreamColors.instance().primary,
                color: DreamColors.instance().white,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 2px 4px ${DreamColors.instance().black}`,
                height: '6rem',
                width: '6rem',
                borderRadius: '100%'
            },

            text: {
                ...DreamStyleguide.instance().visuallyHidden
            },

            icon: {
                ...BASE_ICON
            }
        };

        _this.flat = {
            element: {
                ...BASE_ELEMENT,
                background: DreamColors.instance().primary,
                color: DreamColors.instance().white,
                padding: '1.25rem 3.5rem'
            },

            text: {
                ...BASE_TEXT
            },

            icon: {
                ...BASE_ICON
            }
        };


        _this.icon = {
            element: {
                ...BASE_ELEMENT,
                background: 'transparent',
                color: DreamColors.instance().white,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '4rem',
                width: '4rem',
                borderRadius: '100%'
            },

            text: {
                ...DreamStyleguide.instance().visuallyHidden
            },

            icon: {
                ...BASE_ICON
            }
        };

        _this.miniFab = {
            element: {
                ...BASE_ELEMENT,
                background: DreamColors.instance().primary,
                color: DreamColors.instance().white,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 2px 4px ${DreamColors.instance().black}`,
                height: '4rem',
                width: '4rem',
                borderRadius: '100%'
            },

            text: {
                ...DreamStyleguide.instance().visuallyHidden
            },

            icon: {
                ...BASE_ICON
            }
        };

        _this.pill = {
            element: {
                ...BASE_ELEMENT,
                background: DreamColors.instance().primary,
                color: DreamColors.instance().white,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '3rem',
                padding: '0.7rem 2.2rem'
            },

            text: {
                ...BASE_TEXT,
                fontSize: '1.7rem'
            },

            icon: {
                ...BASE_ICON
            }
        };

        _this.raised = {
            element: {
                ...BASE_ELEMENT,
                background: DreamColors.instance().primary,
                color: DreamColors.instance().white,
                padding: '1.25rem 3.5rem',
                boxShadow: '0 2px 4px'
            },

            text: {
                ...BASE_TEXT
            },

            icon: {
                ...BASE_ICON,
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)'
            }
        };

        _this.roundedStroked = {
            element: {
                ...BASE_ELEMENT,
                background: DreamColors.instance().blue500,
                border: `2px solid ${DreamColors.instance().blue500}`,
                borderRadius: '5rem',
                color: DreamColors.instance().white,
                justifyContent: 'center',
                padding: '1rem 2rem'
            },

            text: {
                ...BASE_TEXT
            },

            icon: {
                ...BASE_ICON
            }
        };

        _this.stroked = {
            element: {
                ...BASE_ELEMENT,
                background: DreamColors.instance().white,
                border: `1px solid ${DreamColors.instance().gray300}`,
                color: DreamColors.instance().blue600,
                justifyContent: 'center',
                padding: '1.2rem 1.8rem'
            },

            text: {
                ...BASE_TEXT
            },

            icon: {
                ...BASE_ICON
            }
        };

        _this.flag('isReady', true);
    })();

    /**
     * Await until the styles are ready
     *
     * @name ready
     * @memberof ButtonStyles
     * @instance
     */
    _this.ready = function () {
        return _this.wait('isReady');
    };
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


    //*** Public method
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

Class(function JsonNotifier(options) {
    Inherit(this, Model);
    const _this = this;

    let cache = new Map();
    let state = new StateArray();

    let _initialState;

    let _query;
    let _path;

    //*** Constructor
    !(async function () {
        await Hydra.ready();
        await PlatformDB.ready();

        if (!options.path) console.error('JsonNotifier: Missing json request path');
        _initialState = true;

        _query = options.query;
        _path = options.path;

        await addHandlers();

        _this.dataReady = true;
    })();

    function isEmpty(obj) {
        return [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;
    }

    function sleep(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms);
        });
    }

    function flattenObj(ob) {
        var toReturn = {};

        for (var i in ob) {
            if (!ob.hasOwnProperty(i)) continue;

            if ((typeof ob[i]) === 'object' && ob[i] !== null) {
                var flatObject = flattenObj(ob[i]);
                for (var x in flatObject) {
                    if (!flatObject.hasOwnProperty(x)) continue;

                    toReturn[`${i}_${x}`] = flatObject[x];
                }
            } else {
                toReturn[i] = ob[i];
            }
        }
        return toReturn;
    }

    async function addHandlers() {
        let data = await Data.request(_path);

        if (Array.isArray(data)) throw new Error('JsonNotifier: json data must be an object');

        if (_query) {
            notifier = PlatformDB.ref(_query);
            notifier.on('value', updateData, (error) => {
                console.error('Error:', error);
            });
        }

        for (let key in data) {
            let item = options.flatten ? flattenObj(data[key]) : data[key];
            item.id = key;

            if (isEmpty(item)) return;
            if (!cache.has(key)) cache.set(key, state.push(item));
        }
    }

    async function updateData() {
        if (!_initialState) {
            if (options.delay) await sleep(options.delay);
            let data = await Data.request(_path, { nocache: true });

            for (let key in data) {
                let item = options.flatten ? flattenObj(data[key]) : data[key];
                item.id = key;
                if (isEmpty(item)) return;
                if (cache.has(key)) cache.get(key).setAll(item);
                else cache.set(key, state.push(item));
            }

            // When an item formerly in the data is removed, we need to find it in the cache and the state and remove there as well:
            cache.forEach((value, key) => {
                if (!data[key]) {
                    state.remove(value);
                    cache.delete(key);
                }
            });
        } else {
            _initialState = false;
        }
    }

    function removeHandlers() {
        cache = new Map();
        state = new StateArray();
        notifier.off('value', updateData);
    }

    _this.values = function () {
        return state;
    };

    _this.teardown = function () {
        removeHandlers();
    };
});

Namespace('DreamUI');

DreamUI.Class(function VideoChatZoneAVSettings({
    styles = DreamUI.VideoChatZoneAVSettingsStyles,
    audioOnly = false,
    toggleButtonStyles = {},
    toggleButtonAnimations = UIAVToggleAnimations,
    avSettingsButtonStyles = UIAVSettingsButtonStyles,
}={}) {
    Inherit(this, DreamUI.DreamElement);

    const _this = this;
    const $this = _this.element;

    //*** Constructor
    (async function () {
        console.log(styles)
        console.log(avSettingsButtonStyles)
        await styles.ready();
        initElement();
        initAudioVideo();
    })();

    function initElement() {
        $this.css(styles.element);

        _this.content = $this.create(`${_this.constructorName}__content`);
        _this.content.css(styles.content)
    }

    function initAudioVideo() {
        _this.settingsButton = _this.initClass(UIAVSettingsButton, { type: 'video-chat-zone', styles: avSettingsButtonStyles}, [_this.content]);

        _this.audioVideoWrapper = _this.content.create(`${_this.constructorName}__av-wrapper`);
        _this.audioVideoWrapper.css(styles.audioVideoWrapper)

        _this.audioToggle = _this.initClass(UIAVAudioToggle, { preset: 'video-chat-zone', styles: toggleButtonStyles, animations: toggleButtonAnimations}, [_this.audioVideoWrapper]);
        if (!audioOnly) {
            _this.videoToggle = _this.initClass(UIAVVideoToggle, { preset: 'video-chat-zone', styles:toggleButtonStyles, animations: toggleButtonAnimations}, [_this.audioVideoWrapper]);
        }
    }
});

Namespace('DreamUI');

DreamUI.Class(function VideoChatZoneAVSettingsStyles() {
    Inherit(this, Component);

    const _this = this;

    (async function () {
        await DreamColors.instance().ready();

        _this.element = {
            position: 'relative',
            background: 'black',
            alignItems: 'center',
            padding: '1.3rem 1.8rem',
            borderRadius: '0.5rem',
            transform:'scale(.95)'
        }

        _this.content = {
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative'
        }

        _this.audioVideoWrapper = {
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridColumnGap: '1.6rem',
            alignItems: 'center',
            justifyContent: 'center',
        }

        _this.audioVideoWrapperAudioOnly = {
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridColumnGap: '1.6rem',
            alignItems: 'center',
            justifyContent: 'center',
        }
        _this.flag('isReady', true);
    })();

    _this.ready = function () {
        return _this.wait('isReady');
    };
}, 'static');

Namespace('DreamUI');

DreamUI.Class(function VideoChatZonesUI({
    styles = DreamUI.VideoChatZoneUIStyles,
    videoPreviewStyles =  DreamUI.VideoChatZoneVideoPreviewStyles,
    videoPreviewAnimations =  DreamUI.VideoChatZoneVideoPreviewAnimations,
    avSettingsStyles = DreamUI.VideoChatZoneAVSettingsStyles,
    avSettingsToggleButtonStyles = {},
    avSettingsButtonStyles=  UIAVSettingsButtonStyles,
    avSettingsToggleButtonAnimations = UIAVToggleAnimations,
    audioOnly = false
}={}) {
    Inherit(this, DreamUI.DreamElement);

    const _this = this;
    const $this = _this.element;
    var _video;
    var _startTime;

    //*** Constructor
    (async function () {
        await styles.ready();
        initElement();
        initPreview();
        initSettings();
        addListeners();
    })();

    function initElement() {
        $this.css(styles.element);

        _this.wrapper = $this.create(`${_this.constructorName}__wrapper`);
        _this.wrapper.css(styles.wrapper)
    }

    function initPreview() {
        if (!audioOnly) {
            _this.videoUI = _this.initClass(DreamUI.VideoChatZoneVideoPreview, {styles: videoPreviewStyles, animations: videoPreviewAnimations},[_this.wrapper]);
        }
    }

    function initSettings() {
        _this.avSettings = _this.initClass(DreamUI.VideoChatZoneAVSettings, {
            audioOnly,
            styles: avSettingsStyles,
            toggleButtonStyles: avSettingsToggleButtonStyles,
            toggleButtonAnimations: avSettingsToggleButtonAnimations,
            avSettingsButtonStyles: avSettingsButtonStyles
        }, [_this.wrapper]);
    }
    
    function addListeners() {
        _this.onResize(resize);
    }

    function resize() {
        $this.css({ width: Stage.width, height: Stage.height });
    }

    function determineTimeElapsed(startTime) {
        let timeDiff = Date.now() - startTime;
        timeDiff /= 1000;
        const seconds = Math.round(timeDiff);
        return parseFloat(seconds / 60).toFixed(2);
    }

    //*** Public methods
    this.connect = async function() {
        Track.event('chatzone', 'start');
        _startTime = Date.now();
        _video = await GameCenterMedia.getUserVideo(true);
        _this.videoUI?.updateVideo(_video);
        if ($this && $this.css) $this.css({ opacity: 1, display: 'block' });
    };

    this.disconnect = function() {
        let timeElapsed = determineTimeElapsed(_startTime);
        Track.event('chatzone', 'end', null, timeElapsed);
        if ($this && $this.css) $this.css({ opacity: 0, display: 'none' });
    };

});

Namespace('DreamUI');

DreamUI.Class(function VideoChatZoneUIStyles() {
    Inherit(this, Component);

    const _this = this;

    (async function () {
        await DreamColors.instance().ready();

        _this.element = {
            opacity: 0,
            display: 'none',
            width:'100%',
            height:'100%'
        };

        _this.wrapper = {
            bottom: '3rem',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            pointerEvents: 'auto'
        }
        _this.flag('isReady', true);
    })();

    _this.ready = function () {
        return _this.wait('isReady');
    };
}, 'static');

Namespace('DreamUI');

DreamUI.Class(function VideoChatZoneVideoPreview({
    animations = DreamUI.VideoChatZoneVideoPreviewAnimations,
    styles = DreamUI.VideoChatZoneVideoPreviewStyles,
}={}) {
    Inherit(this, DreamUI.DreamElement);

    const _this = this;
    const $this = _this.element;

    //*** Constructor
    (async function () {
        await styles.ready();
        initElement();
        addHandlers();
    })();

    function initElement() {
        $this.css(styles.element);
        _this.avatar = $this.create(`${_this.constructorName}__avatar`, 'img');
        _this.avatar.css(styles.avatar)
        const path = PlayerModel.get('profileImage') || '~assets/images/icon/user.svg';
        _this.avatar.attr('src', Assets.getPath(path));
    }

    function addHandlers() {
        _this.events.sub(AVSettingsController.VIDEO_STATE_CHANGE, handleStateChange);
    }

    function handleStateChange({ isEnabled }) {
        if (!_this.video) return;
        if (isEnabled) {
            animations.animateIn(_this.video)
        } else {
            animations.animateIn(_this.video)
        }
    }

    //*** Public methods

    _this.updateVideo = function(video) {
        if (!video) return;
        _this.video = $(video);
        _this.video.attr('width', '100%').attr('height', '100%').css(styles.video);
        $this.add(video);
    };
});

Namespace('DreamUI');

DreamUI.Class(function VideoChatZoneVideoPreviewAnimations() {
    Inherit(this, Component);
    
    this.animateIn = function (video) {
        video.tween({ opacity: 1, scaleX: -1, x: '-50%', y: '-50%' }, 10, 'easeInOut'); 
    }

    this.animateOut = function (video) {
        video.tween({ opacity: 0, scaleX: -1, x: '-50%', y: '-50%' }, 10, 'easeInOut'); 
    };

}, 'static');

Namespace('DreamUI');

DreamUI.Class(function VideoChatZoneVideoPreviewStyles() {
    Inherit(this, Component);

    const _this = this;

    (async function () {
        await DreamColors.instance().ready();

        _this.element = {
            height: '10rem',
            width: '10rem',
            border: '2px solid white',
            borderRadius: '50%',
            background: 'lightblue',
            position: 'relative',
            marginBottom: '2rem',
            overflow: 'hidden',
            "-webkit-mask-image": '-webkit-radial-gradient(white, black)'
        };

        _this.avatar = {
            objectFit: 'cover',
            left: '50%',
            top: '50%',
            width: '100%',
            height: '100%',
            transform:'translate(-50%, -50%)'
        }

        _this.video = {
            borderRadius: '50%',
            left: '50%',
            top: '50%',
            width: '20rem',
            height: '10rem',
            transform: 'translate(-50%, -50%) scaleX(-1)'
        }
        _this.flag('isReady', true);
    })();

    _this.ready = function () {
        return _this.wait('isReady');
    };
}, 'static');

Class(function SecretSkyGlobal() {
    Inherit(this, Component);

    const _this = this;

    //*** Constructor
    !(async function initSS() {
        Global.AERIAL = Utils.query('aerial') && (Hydra.LOCAL || location.hostname == 'secretsky-stage.web.app');
//        AppState.bind(GameCenter.BLOCKED_ERROR, gameCenterBlocked);

        if (!Global.AERIAL) Router.useInternal();
        Worlds.instance().blockFirstLoad();
        await Platform.require('hlshelper');
        await SecretData.ready();
        await UILStorage.ready();

        PlayerControlsVR.setTeleportColor?.('#48dff6');
        PlayerControlsVR.setLineColor?.('#48dff6');
        PlayerControlsVR.registerWristMenu(SettingsMenuVR);
        VRInput.setControllerObject(VRController);

        PlayerModel.state.bind('SecretSkyAvatar_uColor', value => {
            let color = new Color().fromArray(value).getHexString();
            PlayerControlsVR.setTeleportColor?.(color);
            PlayerControlsVR.setLineColor?.(color);
        });

        if (!Global.PLAYGROUND) {
            await UIController.instance().init();
            UIController.instance().hide();
            initRoutes();
            initTransitions();
            initNavigation();
            await loadRequired();
            initAVStyles();

            Worlds.instance().unblockFirstLoad();

            _this.flag('isReady', true);
        } else {
            Worlds.instance().unblockFirstLoad();
        }
    })();

    async function gameCenterBlocked() {
        await DreamUI.AdBlockerStyles.ready();

        UIController.instance().modal.openModal(DreamUI.AdBlocker, {
            disableClose: true
        });
    }

    async function initAVStyles() {
        await UIAVSettingsPanelStyles.ready();
        await UIAVSettingsHeaderStyles.ready();
        await UIAVSettingsFooterStyles.ready();
        await UIAVSettingsSectionHeaderStyles.ready();
        await UIAVAudioBarsStyles.ready();

        await DreamUI.VideoChatZoneAVSettingsStyles.ready();
        await UIAVSettingsButtonStyles.ready();

        UIAVSettingsButtonStyles['video-chat-zone'].element.marginLeft = 0;

        DreamUI.VideoChatZoneAVSettingsStyles.audioVideoWrapper.marginLeft = '1rem';
        DreamUI.VideoChatZoneAVSettingsStyles.audioVideoWrapper.gridTemplateColumns = '1fr';

        UIAVSettingsPanelStyles.container.background = DreamColors.instance().black;
        UIAVSettingsPanelStyles.tabStyles = {
            element: {
                height: 90,
                marginTop: 15,
            },
            header: {
                display: 'none'
            }
        };

        UIAVSettingsHeaderStyles.heading.color = DreamColors.instance().white;

        UIAVSettingsFooterStyles.buttonStyles = {
            ...UIAVSettingsFooterStyles.buttonStyles,
            element: {
                ...UIAVSettingsFooterStyles.buttonStyles.element,
                border: `2px solid ${DreamColors.instance().white}`,
                background: 'none',
                color: DreamColors.instance().white
            }
        };

        UIAVSettingsSectionHeaderStyles.rowLayout.actions.justifyContent = 'flex-end';
        UIAVSettingsSectionHeaderStyles.rowLayout.icon.marginRight = 0;
        UIAVSettingsSectionHeaderStyles.rowLayout.label.color = DreamColors.instance().white;

        UIAVAudioBarsStyles.element.display = 'none';
    }

    function initRoutes() {
        let routes = [{ path: '', world: 'default' }];

        Platform.registerRoutes(routes);
    }

    function initTransitions() {
    }

    async function initNavigation() {
    }

    async function loadRequired() {
        DreamColors.instance().setColors(SecretSkyColors);
        await DreamColors.instance().ready();

        DreamStyleguide.instance().init(SecretSkyStyleguide.getStyles());
    }

    //*** Event handlers
    function handleViewGuard(path) {
        return path;
    }

    ///** Public methods
    _this.ready = function () {
        return _this.wait('isReady');
    };
}, 'static');

Class(function SecretSkyColors() {
    const _this = this;

    Object.assign(this, {
        black: '#202124',
        primary: '#fff',
        blue: '#fff'
    });

    _this.accessibility = DreamColors.instance().hexToRgba(_this.black, 0.6);
}, 'static');

Class(function SecretSkyStyleguide() {
    Inherit(this, Component);
    const _this = this;

    (function() {
        _this.fonts = {
            primary: 'courier',
        };

        _this.styles = {
            h1: {
                fontSize: '3.4rem'
            },
            h2: {
                fontSize: '2.8rem'
            },
            h3: {
                fontSize: '2.4rem'
            },
            h4: {
                fontSize: '2.4rem'
            }
        };

        _this.flag('isReady', true);
    })();

    this.getStyles = _ => {
        _this.wait('isReady');
        
        return {
            fonts: _this.fonts,
            styles: _this.styles
        };
    };
}, 'static');

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
Class(function SSTransition() {
    Inherit(this, Element);
    const _this = this;
    var $this, $inner, $wrapper, $spinner, $tree;

    //*** Constructor
    (function () {
        initHTML();
        initSpinner();
    })();

    function initHTML() {
        $this = _this.element;
        $this.size('100%').setZ(200);

        $inner = $this.create('.inner');
        $inner.size('100%').bg('#000000');

        $wrapper = $this.create('.wrapper');
        $wrapper.size(200,200).center();
        $wrapper.css({ opacity: 0 });

        $tree = $wrapper.create('.tree');
        $tree.size(120,120).center().bg('assets/images/tree.jpg');
    }

    function initSpinner() {
        let size = 200;
        $spinner = $wrapper.create('.spinner-anim-alt');
        $spinner.size(size,size).center();
    }


    //*** Event handlers

    //*** Public methods
    this.cover = async function() {
        $inner.transformPoint('100%', '50%').transform({ scaleX: 0 }).tween({ scaleX: 1 }, 700, 'easeOutCubic').promise();
        return $wrapper.tween({ opacity: 1 }, 1000, 'easeInOutSine').promise();
    }

    this.reveal = async function() {
        await _this.wait(500);
        $wrapper.tween({ opacity: 0 }, 700, 'easeOutSine');
        return $inner.transformPoint('0%', '50%').tween({ scaleX: 0 }, 1300, 'easeInOutCubic').promise();
    }
});
Class(function SecretSkyAvatar() {
    Inherit(this, OptimizedAvatar);
    const _this = this;

    var _data;

    //*** Constructor
    (async function () {
        _data = new Vector4(0, 1, 0, _this.parent?.isVR ? 0 : 2);

        avatarTexture = Utils3D.getTexture(Assets.getPath('assets/images/avatar_bake.jpg'));

        _this.shader = _this.initClass(Shader, 'SecretSkyAvatar', {
            uAvatarData: { value: _data, ignoreUIL: true, packedIndex: 0 },
            uVRLHand: { value: _this.parent?.isVR ? _this.parent.vrHandL.pos4 : new Vector4(0.), ignoreUIL: true, packedIndex: 1 },
            uVRRHand: { value: _this.parent?.isVR ? _this.parent.vrHandR.pos4 : new Vector4(0.), ignoreUIL: true, packedIndex: 2 },
            uColor: {value: new Color('#777777'), batchUnique: true},
            uAdmin: { value: 0, ignoreUIL: true, batchUnique: true },
            uIsTalking: { value: 0, ignoreUIL: true, batchUnique: true },

            speedMultiplier: {value: 1},
            uVelocityRange: { value: new Vector2(0.0, 0.04) },
            uRightShoulder: {value: new Vector3(0.148822, 1.04244, -0.05)},
            uRightElbow: {value: new Vector3(0.343822, 1.04244, -0.05)},
            uRightHand: {value: new Vector3(0.606822, 1.04244, -0.05)},
            uLeftShoulder: {value: new Vector3(-0.148822, 1.04244, -0.05)},
            uLeftElbow: {value: new Vector3(-0.343822, 1.04244, -0.05)},
            uLeftHand: {value: new Vector3(-0.606822, 1.04244, -0.05)},
            uWindDirection: {value: new Vector3(1, 0, 0)},
            uNeckHeight: {value: 1.13244},
            //uWaving: { value: 0, batchUnique: true, ignoreUIL: true },
            uFresnelColor: {value: new Color('#727272')},
            uClampFrom: {value: new Vector2(0.0, 1.0)},
            uClampTo: {value: new Vector2(0.0, 1.0)},
            tMap: {value: avatarTexture},
            side: Shader.DOUBLE_SIDE
        });

        let animations = ["assets/geometry/avatar/character_4k_run.json"];

        await TextureAnimationShader.applyTo(_this.shader, animations, [0.9, 1]);
        _this.trackVelocity = true;

        await _this.create([], _this.shader);

        if ((Hydra.LOCAL || location.hostname == 'secretsky-stage.web.app') && _this.parent.isLocal) {
            _this.setUniform('uAdmin', Utils.query('gg') ? 1 : 0);
            let name = Utils.query('gg');
            if (typeof name === 'string') PlayerModel.set('country', name);
        }
    })();

    //*** Event handlers

    //*** Public methods
}, _ => {
    // SecretSkyAvatar.USER_COLOR = { value: new Color('#777777'), batchUnique: true };
});
Class(function VRController() {
    Inherit(this, Object3D);
    const _this = this;

    //*** Constructor
    (async function() {
        initScene();
    })();

    async function initScene() {
        _this.layout = _this.initClass(SceneLayout, `VRController`, {baseRenderOrder: 9999});
    }

    //*** Event handlers

    //*** Public methods
});

Class(function TestLayout(_name = Utils.query('name')) {
    Inherit(this, Object3D);
    const _this = this;
    
    //*** Constructor
    (function () {
        _this.layout = _this.initClass(SceneLayout, `testlayout_${_name}`);
    })();
    
    //*** Event handlers
    
    //*** Public methods
    
});
Class(function Main() {
    Inherit(this, DreamWorld);
    const _this = this;

    //*** Public methods
    this.init = async function($obj) {
        let env = await _this.createGroupEnvironment(DefaultOptimizedAvatar, TestEnvironment);
        return env.activate();

        //add custom UI to $obj
        //return first scene to be displayed
    }

    this.onRouteChange = function(route, split) {
        //fire an event and update the project
    }

    this.onDestroy = function() {
        //clean everything up!
    }
});

window._BUILT_ = true;