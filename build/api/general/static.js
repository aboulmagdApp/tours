"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStaticHome(env) {
    switch (env) {
        case "development":
            return "http://localhost:5039/static/";
        case "production":
        //....CDN....        
    }
}
exports.getStaticHome = getStaticHome;
function fileMapper(env) {
    return function (filename) { return getStaticHome(env) + filename; };
}
exports.fileMapper = fileMapper;
