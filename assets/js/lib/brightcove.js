/*! @name @brightcove/player-loader @version 1.7.1 @license Apache-2.0 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('global/document'), require('global/window')) :
    typeof define === 'function' && define.amd ? define(['global/document', 'global/window'], factory) :
    (global = global || self, global.brightcovePlayerLoader = factory(global.document, global.window));
  }(this, function (document, window) { 'use strict';
  
    document = document && document.hasOwnProperty('default') ? document['default'] : document;
    window = window && window.hasOwnProperty('default') ? window['default'] : window;
  
    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
  
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
  
        return target;
      };
  
      return _extends.apply(this, arguments);
    }
  
    var version = "1.7.1";
  
    /*! @name @brightcove/player-url @version 1.2.0 @license Apache-2.0 */
    var version$1 = "1.2.0";
  
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  
    // The parameters that may include JSON.
    var JSON_ALLOWED_PARAMS = ['catalogSearch', 'catalogSequence'];
  
    // The parameters that may be set as query string parameters for iframes.
    var IFRAME_ALLOWED_QUERY_PARAMS = ['adConfigId', 'applicationId', 'catalogSearch', 'catalogSequence', 'playlistId', 'playlistVideoId', 'videoId'];
  
    /**
     * Gets the value of a parameter and encodes it as a string.
     *
     * For certain keys, JSON is allowed and will be encoded.
     *
     * @private
     * @param   {Object} params
     *          A parameters object. See README for details.
     *
     * @param   {string} key
     *          The key in the params object.
     *
     * @return  {string|undefined}
     *          The encoded value - or `undefined` if none.
     */
    var getQueryParamValue = function getQueryParamValue(params, key) {
  
      if (!params || params[key] === undefined) {
        return;
      }
  
      // If it's not a string, such as with a catalog search or sequence, we
      // try to encode it as JSON.
      if (typeof params[key] !== 'string' && JSON_ALLOWED_PARAMS.indexOf(key) !== -1) {
        try {
          return encodeURIComponent(JSON.stringify(params[key]));
        } catch (x) {
  
          // If it's not a string and we can't encode as JSON, it's ignored entirely.
          return;
        }
      }
  
      return encodeURIComponent(String(params[key]).trim()) || undefined;
    };
  
    /**
     * In some cases, we need to add query string parameters to an iframe URL.
     *
     * @private
     * @param   {Object} params
     *          An object of query parameters.
     *
     * @return  {string}
     *          A query string starting with `?`. If no valid parameters are given,
     *          returns an empty string.
     */
    var getQueryString = function getQueryString(params) {
      return Object.keys(params).filter(function (k) {
        return IFRAME_ALLOWED_QUERY_PARAMS.indexOf(k) !== -1;
      }).reduce(function (qs, k) {
        var value = getQueryParamValue(params, k);
  
        if (value !== undefined) {
          qs += qs ? '&' : '?';
          qs += encodeURIComponent(k) + '=' + value;
        }
  
        return qs;
      }, '');
    };
  
    /**
     * Generate a URL to a Brightcove Player.
     *
     * @param  {Object}  params
     *         A set of parameters describing the player URL to create.
     *
     * @param  {string}  params.accountId
     *         A Brightcove account ID.
     *
     * @param  {string}  [params.playerId="default"]
     *         A Brightcove player ID.
     *
     * @param  {string}  [params.embedId="default"]
     *         A Brightcove player embed ID.
     *
     * @param  {boolean} [params.iframe=false]
     *         Whether to return a URL for an HTML document to be embedded in
     *         an iframe.
     *
     * @param  {boolean} [params.minified=true]
     *         When the `iframe` argument is `false`, this can be used to control
     *         whether the minified or unminified JavaScript URL is returned.
     *
     * @param  {string} [params.base="https://players.brightcove.net"]
     *         A base CDN protocol and hostname. Mainly used for testing.
     *
     * @return {string}
     *         A URL to a Brightcove Player.
     */
    var brightcovePlayerUrl = function brightcovePlayerUrl(_ref) {
      var accountId = _ref.accountId,
          _ref$base = _ref.base,
          base = _ref$base === undefined ? 'https://players.brightcove.net' : _ref$base,
          _ref$playerId = _ref.playerId,
          playerId = _ref$playerId === undefined ? 'default' : _ref$playerId,
          _ref$embedId = _ref.embedId,
          embedId = _ref$embedId === undefined ? 'default' : _ref$embedId,
          _ref$iframe = _ref.iframe,
          iframe = _ref$iframe === undefined ? false : _ref$iframe,
          _ref$minified = _ref.minified,
          minified = _ref$minified === undefined ? true : _ref$minified,
          _ref$queryParams = _ref.queryParams,
          queryParams = _ref$queryParams === undefined ? null : _ref$queryParams;
  
      var ext = '';
  
      if (iframe) {
        ext += 'html';
      } else {
        if (minified) {
          ext += 'min.';
        }
        ext += 'js';
      }
  
      if (base.charAt(base.length - 1) === '/') {
        base = base.substring(0, base.length - 1);
      }
  
      var qs = '';
  
      if (iframe && queryParams && (typeof queryParams === 'undefined' ? 'undefined' : _typeof(queryParams)) === 'object') {
        qs = getQueryString(queryParams);
      }
  
      accountId = encodeURIComponent(accountId);
      playerId = encodeURIComponent(playerId);
      embedId = encodeURIComponent(embedId);
  
      return base + '/' + accountId + '/' + playerId + '_' + embedId + '/index.' + ext + qs;
    };
  
    /**
     * The version of this module.
     *
     * @type {string}
     */
    brightcovePlayerUrl.VERSION = version$1;
  
    var DEFAULTS = {
      embedId: 'default',
      embedType: 'in-page',
      playerId: 'default',
      Promise: window.Promise,
      refNodeInsert: 'append'
    };
    var DEFAULT_ASPECT_RATIO = '16:9';
    var DEFAULT_IFRAME_HORIZONTAL_PLAYLIST = false;
    var DEFAULT_MAX_WIDTH = '100%';
    var EMBED_TAG_NAME_VIDEO = 'video';
    var EMBED_TAG_NAME_VIDEOJS = 'video-js';
    var EMBED_TYPE_IN_PAGE = 'in-page';
    var EMBED_TYPE_IFRAME = 'iframe';
    var REF_NODE_INSERT_APPEND = 'append';
    var REF_NODE_INSERT_PREPEND = 'prepend';
    var REF_NODE_INSERT_BEFORE = 'before';
    var REF_NODE_INSERT_AFTER = 'after';
    var REF_NODE_INSERT_REPLACE = 'replace';
    var JSON_ALLOWED_ATTRS = ['catalogSearch', 'catalogSequence'];
  
    var BASE_URL = 'https://players.brightcove.net/';
    /**
     * Gets the URL to a player on CDN.
     *
     * @private
     * @param  {Object} params
     *         A parameters object. See README for details.
     *
     * @return {string}
     *         A URL.
     */
  
    var getUrl = function getUrl(params) {
      if (params.playerUrl) {
        return params.playerUrl;
      }
  
      var accountId = params.accountId,
          playerId = params.playerId,
          embedId = params.embedId,
          embedOptions = params.embedOptions;
      var iframe = params.embedType === EMBED_TYPE_IFRAME;
      return brightcovePlayerUrl({
        accountId: accountId,
        playerId: playerId,
        embedId: embedId,
        iframe: iframe,
        base: BASE_URL,
        // The unminified embed option is the exact reverse of the minified option
        // here.
        minified: embedOptions ? !embedOptions.unminified : true,
        // Pass the entire params object as query params. This is safe because
        // @brightcove/player-url only accepts a whitelist of parameters. Anything
        // else will be ignored.
        queryParams: params
      });
    };
    /**
     * Function used to get the base URL - primarily for testing.
     *
     * @private
     * @return {string}
     *         The current base URL.
     */
  
  
    var getBaseUrl = function getBaseUrl() {
      return BASE_URL;
    };
    /**
     * Function used to set the base URL - primarily for testing.
     *
     * @private
     * @param {string} baseUrl
     *        A new base URL (instead of Brightcove CDN).
     */
  
  
    var setBaseUrl = function setBaseUrl(baseUrl) {
      BASE_URL = baseUrl;
    };
  
    var urls = {
      getUrl: getUrl,
      getBaseUrl: getBaseUrl,
      setBaseUrl: setBaseUrl
    };
  
    /**
     * Is this value an element?
     *
     * @param  {Element} el
     *         A maybe element.
     *
     * @return {boolean}
     *         Whether or not the value is a element.
     */
  
    var isEl = function isEl(el) {
      return Boolean(el && el.nodeType === 1);
    };
    /**
     * Is this value an element with a parent node?
     *
     * @param  {Element} el
     *         A maybe element.
     *
     * @return {boolean}
     *         Whether or not the value is a element with a parent node.
     */
  
  
    var isElInDom = function isElInDom(el) {
      return Boolean(isEl(el) && el.parentNode);
    };
    /**
     * Creates an iframe embed code.
     *
     * @private
     * @param  {Object} params
     *         A parameters object. See README for details.
     *
     * @return {Element}
     *         The DOM element that will ultimately be passed to the `bc()` function.
     */
  
  
    var createIframeEmbed = function createIframeEmbed(params) {
      var el = document.createElement('iframe');
      el.setAttribute('allow', 'autoplay;encrypted-media;fullscreen');
      el.setAttribute('allowfullscreen', 'allowfullscreen');
      el.src = urls.getUrl(params);
      return el;
    };
    /**
     * Creates an in-page embed code.
     *
     * @private
     * @param  {Object} params
     *         A parameters object. See README for details.
     *
     * @return {Element}
     *         The DOM element that will ultimately be passed to the `bc()` function.
     */
  
  
    var createInPageEmbed = function createInPageEmbed(params) {
      var embedOptions = params.embedOptions; // We DO NOT include the data-account, data-player, or data-embed attributes
      // here because we will be manually initializing the player.
  
      var paramsToAttrs = {
        adConfigId: 'data-ad-config-id',
        applicationId: 'data-application-id',
        catalogSearch: 'data-catalog-search',
        catalogSequence: 'data-catalog-sequence',
        deliveryConfigId: 'data-delivery-config-id',
        playlistId: 'data-playlist-id',
        playlistVideoId: 'data-playlist-video-id',
        videoId: 'data-video-id'
      };
      var tagName = embedOptions && embedOptions.tagName || EMBED_TAG_NAME_VIDEOJS;
      var el = document.createElement(tagName);
      Object.keys(paramsToAttrs).filter(function (key) {
        return params[key];
      }).forEach(function (key) {
        var value; // If it's not a string, such as with a catalog search or sequence, we
        // try to encode it as JSON.
  
        if (typeof params[key] !== 'string' && JSON_ALLOWED_ATTRS.indexOf(key) !== -1) {
          try {
            value = JSON.stringify(params[key]); // If it fails, don't set anything.
          } catch (x) {
            return;
          }
        } else {
          value = String(params[key]).trim();
        }
  
        el.setAttribute(paramsToAttrs[key], value);
      });
      el.setAttribute('controls', 'controls');
      el.classList.add('video-js');
      return el;
    };
    /**
     * Wraps an element in responsive intrinsic ratio elements.
     *
     * @private
     * @param  {string} embedType
     *         The type of the embed.
     *
     * @param  {Object} embedOptions
     *         Embed options from the params.
     *
     * @param  {Element} el
     *         The DOM element.
     *
     * @return {Element}
     *         A new element (if needed).
     */
  
  
    var wrapResponsive = function wrapResponsive(embedType, embedOptions, el) {
      if (!embedOptions.responsive) {
        return el;
      }
  
      el.style.position = 'absolute';
      el.style.top = '0px';
      el.style.right = '0px';
      el.style.bottom = '0px';
      el.style.left = '0px';
      el.style.width = '100%';
      el.style.height = '100%';
  
      var responsive = _extends({
        aspectRatio: DEFAULT_ASPECT_RATIO,
        iframeHorizontalPlaylist: DEFAULT_IFRAME_HORIZONTAL_PLAYLIST,
        maxWidth: DEFAULT_MAX_WIDTH
      }, embedOptions.responsive); // This value is validate at a higher level, so we can trust that it's in the
      // correct format.
  
  
      var aspectRatio = responsive.aspectRatio.split(':').map(Number);
      var inner = document.createElement('div');
      var paddingTop = aspectRatio[1] / aspectRatio[0] * 100; // For iframes with a horizontal playlist, the playlist takes up 20% of the
      // vertical space (if shown); so, adjust the vertical size of the embed to
      // avoid black bars.
  
      if (embedType === EMBED_TYPE_IFRAME && responsive.iframeHorizontalPlaylist) {
        paddingTop *= 1.25;
      }
  
      inner.style.paddingTop = paddingTop + '%';
      inner.appendChild(el);
      var outer = document.createElement('div');
      outer.style.position = 'relative';
      outer.style.display = 'block';
      outer.style.maxWidth = responsive.maxWidth;
      outer.appendChild(inner);
      return outer;
    };
    /**
     * Wraps an element in a Picture-in-Picture plugin container.
     *
     * @private
     * @param  {Object} embedOptions
     *         Embed options from the params.
     *
     * @param  {Element} el
     *         The DOM element.
     *
     * @return {Element}
     *         A new element (if needed).
     */
  
  
    var wrapPip = function wrapPip(embedOptions, el) {
      if (!embedOptions.pip) {
        return el;
      }
  
      var pip = document.createElement('div');
      pip.classList.add('vjs-pip-container');
      pip.appendChild(el);
      return pip;
    };
    /**
     * Wraps a bare embed element with necessary parent elements, depending on
     * embed options given in params.
     *
     * @private
     * @param  {string} embedType
     *         The type of the embed.
     *
     * @param  {Object} embedOptions
     *         Embed options from the params.
     *
     * @param  {Element} embed
     *         The embed DOM element.
     *
     * @return {Element}
     *         A new element (if needed) or the embed itself.
     */
  
  
    var wrapEmbed = function wrapEmbed(embedType, embedOptions, embed) {
      if (!embedOptions) {
        return embed;
      }
  
      return wrapPip(embedOptions, wrapResponsive(embedType, embedOptions, embed));
    };
    /**
     * Inserts a previously-created embed element into the page based on params.
     *
     * @private
     * @param  {Object} params
     *         A parameters object. See README for details.
     *
     * @param  {Element} embed
     *         The embed DOM element.
     *
     * @return {Element}
     *         The embed DOM element.
     */
  
  
    var insertEmbed = function insertEmbed(params, embed) {
      var refNode = params.refNode,
          refNodeInsert = params.refNodeInsert;
      var refNodeParent = refNode.parentNode; // Wrap the embed, if needed, in container elements to support various
      // plugins.
  
      var wrapped = wrapEmbed(params.embedType, params.embedOptions, embed); // Decide where to insert the wrapped embed.
  
      if (refNodeInsert === REF_NODE_INSERT_BEFORE) {
        refNodeParent.insertBefore(wrapped, refNode);
      } else if (refNodeInsert === REF_NODE_INSERT_AFTER) {
        refNodeParent.insertBefore(wrapped, refNode.nextElementSibling || null);
      } else if (refNodeInsert === REF_NODE_INSERT_REPLACE) {
        refNodeParent.replaceChild(wrapped, refNode);
      } else if (refNodeInsert === REF_NODE_INSERT_PREPEND) {
        refNode.insertBefore(wrapped, refNode.firstChild || null); // Append is the default.
      } else {
        refNode.appendChild(wrapped);
      } // If the playlist embed option is provided, we need to add a playlist element
      // immediately after the embed. This has to happen after the embed is inserted
      // into the DOM (above).
  
  
      if (params.embedOptions && params.embedOptions.playlist) {
        var playlistTagName = params.embedOptions.playlist.legacy ? 'ul' : 'div';
        var playlist = document.createElement(playlistTagName);
        playlist.classList.add('vjs-playlist');
        embed.parentNode.insertBefore(playlist, embed.nextElementSibling || null);
      } // Clean up internal reference to the refNode to avoid potential memory
      // leaks in case the params get persisted somewhere. We won't need it beyond
      // this point.
  
  
      params.refNode = null; // Return the original embed element that can be passed to `bc()`.
  
      return embed;
    };
    /**
     * Handles `onEmbedCreated` callback invocation.
     *
     * @private
     * @param  {Object} params
     *         A parameters object. See README for details.
     *
     * @param  {Element} embed
     *         The embed DOM element.
     *
     * @return {Element}
     *         A possibly-new DOM element.
     */
  
  
    var onEmbedCreated = function onEmbedCreated(params, embed) {
      if (typeof params.onEmbedCreated !== 'function') {
        return embed;
      }
  
      var result = params.onEmbedCreated(embed);
  
      if (isEl(result)) {
        return result;
      }
  
      return embed;
    };
    /**
     * Creates an embed code of the appropriate type, runs any customizations
     * necessary, and inserts it into the DOM.
     *
     * @param  {Object} params
     *         A parameters object. See README for details.
     *
     * @return {Element}
     *         The DOM element that will ultimately be passed to the `bc()`
     *         function. Even when customized or wrapped, the return value will be
     *         the target element.
     */
  
  
    var createEmbed = function createEmbed(params) {
      var embed = params.embedType === EMBED_TYPE_IFRAME ? createIframeEmbed(params) : createInPageEmbed(params);
      return insertEmbed(params, onEmbedCreated(params, embed));
    };
  
    //
    // The keys follow the format "accountId_playerId_embedId" where accountId is
    // optional and defaults to "*". This happens when we detect pre-existing
    // player globals.
  
    var actualCache = new window.Map();
    /**
     * Get the cache key given some properties.
     *
     * @private
     * @param  {Object} props
     *         Properties describing the player record to cache.
     *
     * @param  {string} props.playerId
     *         A player ID.
     *
     * @param  {string} props.embedId
     *         An embed ID.
     *
     * @param  {string} [props.accountId="*"]
     *         An optional account ID. This is optional because when we search for
     *         pre-existing players to avoid downloads, we will not necessarily
     *         know the account ID.
     *
     * @return {string}
     *         A key to be used in the script cache.
     */
  
    var key = function key(_ref) {
      var accountId = _ref.accountId,
          playerId = _ref.playerId,
          embedId = _ref.embedId;
      return (accountId || '*') + "_" + playerId + "_" + embedId;
    };
    /**
     * Add an entry to the script cache.
     *
     * @private
     * @param  {Object} props
     *         Properties describing the player record to cache.
     *
     * @param  {string} props.playerId
     *         A player ID.
     *
     * @param  {string} props.embedId
     *         An embed ID.
     *
     * @param  {string} [props.accountId="*"]
     *         An optional account ID. This is optional because when we search for
     *         pre-existing players to avoid downloads, we will not necessarily
     *         know the account ID. If not given, we assume that no script was
     *         downloaded for this player.
     */
  
  
    var store = function store(props) {
      actualCache.set(key(props), props.accountId ? urls.getUrl(props) : '');
    };
    /**
     * Checks if the script cache has an entry.
     *
     * @private
     * @param  {Object} props
     *         Properties describing the player record to cache.
     *
     * @param  {string} props.playerId
     *         A player ID.
     *
     * @param  {string} props.embedId
     *         An embed ID.
     *
     * @param  {string} [props.accountId="*"]
     *         An optional account ID. This is optional because when we search for
     *         pre-existing players to avoid downloads, we will not necessarily
     *         know the account ID.
     *
     * @return {boolean}
     *         Will be `true` if there is a matching cache entry.
     */
  
  
    var has = function has(props) {
      return actualCache.has(key(props));
    };
    /**
     * Gets a cache entry.
     *
     * @private
     * @param  {Object} props
     *         Properties describing the player record to cache.
     *
     * @param  {string} props.playerId
     *         A player ID.
     *
     * @param  {string} props.embedId
     *         An embed ID.
     *
     * @param  {string} [props.accountId="*"]
     *         An optional account ID. This is optional because when we search for
     *         pre-existing players to avoid downloads, we will not necessarily
     *         know the account ID.
     *
     * @return {string}
     *         A cache entry - a URL or empty string.
     *
     */
  
  
    var get = function get(props) {
      return actualCache.get(key(props));
    };
    /**
     * Clears the cache.
     */
  
  
    var clear = function clear() {
      actualCache.clear();
    };
    /**
     * Iterates over the cache.
     *
     * @param  {Function} fn
     *         A callback function that will be called with a value and a key
     *         for each item in the cache.
     */
  
  
    var forEach = function forEach(fn) {
      actualCache.forEach(fn);
    };
  
    var playerScriptCache = {
      clear: clear,
      forEach: forEach,
      get: get,
      has: has,
      key: key,
      store: store
    };
  
    var REGEX_PLAYER_EMBED = /^([A-Za-z0-9]+)_([A-Za-z0-9]+)$/;
    /**
     * Gets an array of current per-player/per-embed `bc` globals that are
     * attached to the `bc` global (e.g. `bc.abc123xyz_default`).
     *
     * If `bc` is not defined, returns an empty array.
     *
     * @private
     * @return {string[]}
     *         An array of keys.
     */
  
    var getBcGlobalKeys = function getBcGlobalKeys() {
      return window.bc ? Object.keys(window.bc).filter(function (k) {
        return REGEX_PLAYER_EMBED.test(k);
      }) : [];
    };
    /**
     * Gets known global object keys that Brightcove Players may create.
     *
     * @private
     * @return {string[]}
     *         An array of global variables that were added during testing.
     */
  
  
    var getGlobalKeys = function getGlobalKeys() {
      return Object.keys(window).filter(function (k) {
        return /^videojs/i.test(k) || /^(bc)$/.test(k);
      });
    };
    /**
     * Dispose all players from a copy of Video.js.
     *
     * @param  {Function} videojs
     *         A copy of Video.js.
     */
  
  
    var disposeAll = function disposeAll(videojs) {
      if (!videojs) {
        return;
      }
  
      Object.keys(videojs.players).forEach(function (k) {
        var p = videojs.players[k];
  
        if (p) {
          p.dispose();
        }
      });
    };
    /**
     * Resets environment state.
     *
     * This will dispose ALL Video.js players on the page and remove ALL `bc` and
     * `videojs` globals it finds.
     */
  
  
    var reset = function reset() {
      // Remove all script elements from the DOM.
      playerScriptCache.forEach(function (value, key) {
        // If no script URL is associated, skip it.
        if (!value) {
          return;
        } // Find all script elements and remove them.
  
  
        Array.prototype.slice.call(document.querySelectorAll("script[src=\"" + value + "\"]")).forEach(function (el) {
          return el.parentNode.removeChild(el);
        });
      }); // Clear the internal cache that have been downloaded.
  
      playerScriptCache.clear(); // Dispose any remaining players from the `videojs` global.
  
      disposeAll(window.videojs); // There may be other `videojs` instances lurking in the bowels of the
      // `bc` global. This should eliminate any of those.
  
      getBcGlobalKeys().forEach(function (k) {
        return disposeAll(window.bc[k].videojs);
      }); // Delete any global object keys that were created.
  
      getGlobalKeys().forEach(function (k) {
        delete window[k];
      });
    };
    /**
     * At runtime, populate the cache with pre-detected players. This allows
     * people who have bundled their player or included a script tag before this
     * runs to not have to re-download players.
     */
  
  
    var detectPlayers = function detectPlayers() {
      getBcGlobalKeys().forEach(function (k) {
        var matches = k.match(REGEX_PLAYER_EMBED);
        var props = {
          playerId: matches[1],
          embedId: matches[2]
        };
  
        if (!playerScriptCache.has(props)) {
          playerScriptCache.store(props);
        }
      });
    };
  
    var env = {
      detectPlayers: detectPlayers,
      reset: reset
    };
  
    env.detectPlayers();
    /**
     * Is this value a function?
     *
     * @private
     * @param  {Function} fn
     *         A maybe function.
     *
     * @return {boolean}
     *         Whether or not the value is a function.
     */
  
    var isFn = function isFn(fn) {
      return typeof fn === 'function';
    };
    /**
     * Checks whether an embedType parameter is valid.
     *
     * @private
     * @param  {string} embedType
     *         The value to test.
     *
     * @return {boolean}
     *         Whether the value is valid.
     */
  
  
    var isValidEmbedType = function isValidEmbedType(embedType) {
      return embedType === EMBED_TYPE_IN_PAGE || embedType === EMBED_TYPE_IFRAME;
    };
    /**
     * Checks whether an embedOptions.tagName parameter is valid.
     *
     * @private
     * @param  {string} tagName
     *         The value to test.
     *
     * @return {boolean}
     *         Whether the value is valid.
     */
  
  
    var isValidTagName = function isValidTagName(tagName) {
      return tagName === EMBED_TAG_NAME_VIDEOJS || tagName === EMBED_TAG_NAME_VIDEO;
    };
    /**
     * Checks whether a refNodeInsert parameter is valid.
     *
     * @private
     * @param  {string} refNodeInsert
     *         The value to test.
     *
     * @return {boolean}
     *         Whether the value is valid.
     */
  
  
    var isValidRootInsert = function isValidRootInsert(refNodeInsert) {
      return refNodeInsert === REF_NODE_INSERT_APPEND || refNodeInsert === REF_NODE_INSERT_PREPEND || refNodeInsert === REF_NODE_INSERT_BEFORE || refNodeInsert === REF_NODE_INSERT_AFTER || refNodeInsert === REF_NODE_INSERT_REPLACE;
    };
    /**
     * Checks parameters and throws an error on validation problems.
     *
     * @private
     * @param  {Object} params
     *         A parameters object. See README for details.
     *
     * @throws {Error} If accountId is missing.
     * @throws {Error} If refNode is missing or invalid.
     * @throws {Error} If embedType is missing or invalid.
     * @throws {Error} If attempting to use an iframe embed with options.
     * @throws {Error} If attempting to use embedOptions.responsiveIframe with a
     *                 non-iframe embed.
     * @throws {Error} If refNodeInsert is missing or invalid.
     */
  
  
    var checkParams = function checkParams(params) {
      var accountId = params.accountId,
          embedOptions = params.embedOptions,
          embedType = params.embedType,
          options = params.options,
          refNode = params.refNode,
          refNodeInsert = params.refNodeInsert;
  
      if (!accountId) {
        throw new Error('accountId is required');
      } else if (!isElInDom(refNode)) {
        throw new Error('refNode must resolve to a node attached to the DOM');
      } else if (!isValidEmbedType(embedType)) {
        throw new Error('embedType is missing or invalid');
      } else if (embedType === EMBED_TYPE_IFRAME && options) {
        throw new Error('cannot use options with an iframe embed');
      } else if (embedOptions && embedOptions.tagName !== undefined && !isValidTagName(embedOptions.tagName)) {
        throw new Error("embedOptions.tagName is invalid (value: \"" + embedOptions.tagName + "\")");
      } else if (embedOptions && embedOptions.responsive && embedOptions.responsive.aspectRatio && !/^\d+\:\d+$/.test(embedOptions.responsive.aspectRatio)) {
        throw new Error("embedOptions.responsive.aspectRatio must be in the \"n:n\" format (value: \"" + embedOptions.responsive.aspectRatio + "\")");
      } else if (!isValidRootInsert(refNodeInsert)) {
        throw new Error('refNodeInsert is missing or invalid');
      }
    };
    /**
     * Normalizes a `refNode` param to an element - or `null`.
     *
     * @private
     * @param  {Element|string} refNode
     *         The value of a `refNode` param.
     *
     * @return {Element|null}
     *         A DOM element or `null` if the `refNode` was given as a string and
     *         did not match an element.
     */
  
  
    var resolveRefNode = function resolveRefNode(refNode) {
      if (isElInDom(refNode)) {
        return refNode;
      }
  
      if (typeof refNode === 'string') {
        return document.querySelector(refNode);
      }
  
      return null;
    };
    /**
     * Initializes a player and returns it.
     *
     * @private
     * @param  {Object} params
     *         A parameters object. See README for details.
     *
     * @param  {Element} embed
     *         An element that will be passed to the `bc()` function.
     *
     * @param  {Function} resolve
     *         A function to call if a player is successfully initialized.
     *
     * @param  {Function} reject
     *         A function to call if a player fails to be initialized.
     *
     * @return {Object}
     *         A success object whose `ref` is a player.
     */
  
  
    var initPlayer = function initPlayer(params, embed, resolve, reject) {
      var embedId = params.embedId,
          playerId = params.playerId;
      var bc = window.bc[playerId + "_" + embedId] || window.bc;
  
      if (!bc) {
        return reject(new Error("missing bc function for " + playerId));
      }
  
      playerScriptCache.store(params);
      var player;
  
      try {
        player = bc(embed, params.options); // Add a PLAYER_LOADER property to bcinfo to indicate this player was
        // loaded via that mechanism.
  
        if (player.bcinfo) {
          player.bcinfo.PLAYER_LOADER = true;
        }
      } catch (x) {
        var message = 'Could not initialize the Brightcove Player.'; // Update the rejection message based on known conditions that can cause it.
  
        if (params.embedOptions.tagName === EMBED_TAG_NAME_VIDEOJS) {
          message += ' You are attempting to embed using a "video-js" element.' + ' Please ensure that your Player is v6.11.0 or newer in order to' + ' support this embed type. Alternatively, pass `"video"` for' + ' `embedOptions.tagName`.';
        }
  
        return reject(new Error(message));
      }
  
      resolve({
        type: EMBED_TYPE_IN_PAGE,
        ref: player
      });
    };
    /**
     * Loads a player from CDN and embeds it.
     *
     * @private
     * @param  {Object} params
     *         A parameters object. See README for details.
     *
     * @param  {Function} resolve
     *         A function to call if a player is successfully initialized.
     *
     * @param  {Function} reject
     *         A function to call if a player fails to be initialized.
     */
  
  
    var loadPlayer = function loadPlayer(params, resolve, reject) {
      params.refNode = resolveRefNode(params.refNode);
      checkParams(params);
      var refNode = params.refNode,
          refNodeInsert = params.refNodeInsert; // Store a reference to the refNode parent. When we use the replace method,
      // we'll need it as the location to store the script element.
  
      var refNodeParent = refNode.parentNode;
      var embed = createEmbed(params); // If this is an iframe, all we need to do is create the embed code and
      // inject it. Because there is no reliable way to hook into an iframe from
      // the parent page, we simply resolve immediately upon creating the embed.
  
      if (params.embedType === EMBED_TYPE_IFRAME) {
        resolve({
          type: EMBED_TYPE_IFRAME,
          ref: embed
        });
        return;
      } // If we've already downloaded this script or detected a matching global, we
      // should have the proper `bc` global and can bypass the script creation
      // process.
  
  
      if (playerScriptCache.has(params)) {
        return initPlayer(params, embed, resolve, reject);
      }
  
      var script = document.createElement('script');
  
      script.onload = function () {
        return initPlayer(params, embed, resolve, reject);
      };
  
      script.onerror = function () {
        reject(new Error('player script could not be downloaded'));
      };
  
      script.async = true;
      script.charset = 'utf-8';
      script.src = urls.getUrl(params);
  
      if (refNodeInsert === REF_NODE_INSERT_REPLACE) {
        refNodeParent.appendChild(script);
      } else {
        refNode.appendChild(script);
      }
    };
    /**
     * A function for asynchronously loading a Brightcove Player into a web page.
     *
     * @param  {Object} parameters
     *         A parameters object. See README for details.
     *
     * @return {Promise|undefined}
     *         A Promise, if possible.
     */
  
  
    var brightcovePlayerLoader = function brightcovePlayerLoader(parameters) {
      var params = _extends({}, DEFAULTS, parameters);
  
      var Promise = params.Promise,
          onSuccess = params.onSuccess,
          onFailure = params.onFailure; // When Promise is not available or any success/failure callback is given,
      // do not attempt to use Promises.
  
      if (!isFn(Promise) || isFn(onSuccess) || isFn(onFailure)) {
        return loadPlayer(params, isFn(onSuccess) ? onSuccess : function () {}, isFn(onFailure) ? onFailure : function (err) {
          throw err;
        });
      } // Promises are supported, use 'em.
  
  
      return new Promise(function (resolve, reject) {
        return loadPlayer(params, resolve, reject);
      });
    };
    /**
     * Expose a non-writable, non-configurable property on the
     * `brightcovePlayerLoader` function.
     *
     * @private
     * @param  {string} key
     *         The property key.
     *
     * @param  {string|Function} value
     *         The value.
     */
  
  
    var expose = function expose(key, value) {
      Object.defineProperty(brightcovePlayerLoader, key, {
        configurable: false,
        enumerable: true,
        value: value,
        writable: false
      });
    };
    /**
     * Get the base URL for players. By default, this will be the Brightcove CDN.
     *
     * @return {string}
     *         The current base URL.
     */
  
  
    expose('getBaseUrl', function () {
      return urls.getBaseUrl();
    });
    /**
     * Set the base URL for players. By default, this will be the Brightcove CDN,
     * but can be overridden with this function.
     *
     * @param {string} baseUrl
     *        A new base URL (instead of Brightcove CDN).
     */
  
    expose('setBaseUrl', function (baseUrl) {
      urls.setBaseUrl(baseUrl);
    });
    /**
     * Get the URL for a player.
     */
  
    expose('getUrl', function (options) {
      return urls.getUrl(options);
    });
    /**
     * Completely resets global state.
     *
     * This will dispose ALL Video.js players on the page and remove ALL `bc` and
     * `videojs` globals it finds.
     */
  
    expose('reset', function () {
      return env.reset();
    }); // Define some read-only constants on the exported function.
  
    [['EMBED_TAG_NAME_VIDEO', EMBED_TAG_NAME_VIDEO], ['EMBED_TAG_NAME_VIDEOJS', EMBED_TAG_NAME_VIDEOJS], ['EMBED_TYPE_IN_PAGE', EMBED_TYPE_IN_PAGE], ['EMBED_TYPE_IFRAME', EMBED_TYPE_IFRAME], ['REF_NODE_INSERT_APPEND', REF_NODE_INSERT_APPEND], ['REF_NODE_INSERT_PREPEND', REF_NODE_INSERT_PREPEND], ['REF_NODE_INSERT_BEFORE', REF_NODE_INSERT_BEFORE], ['REF_NODE_INSERT_AFTER', REF_NODE_INSERT_AFTER], ['REF_NODE_INSERT_REPLACE', REF_NODE_INSERT_REPLACE], ['VERSION', version]].forEach(function (arr) {
      expose(arr[0], arr[1]);
    });
  
    return brightcovePlayerLoader;
  
  }));