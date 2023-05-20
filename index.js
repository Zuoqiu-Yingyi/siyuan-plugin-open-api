"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const siyuan = require("siyuan");
const _OpenApiPlugin = class extends siyuan.Plugin {
  onload() {
    _OpenApiPlugin.GLOBAL[_OpenApiPlugin.PROPERTY_NAME] = {
      plugin: this,
      siyuan
    };
  }
  onunload() {
    delete _OpenApiPlugin.GLOBAL[_OpenApiPlugin.PROPERTY_NAME];
  }
};
let OpenApiPlugin = _OpenApiPlugin;
__publicField(OpenApiPlugin, "GLOBAL", globalThis);
__publicField(OpenApiPlugin, "PROPERTY_NAME", "openAPI");
module.exports = OpenApiPlugin;
