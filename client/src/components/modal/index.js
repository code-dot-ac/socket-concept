"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var modal_module_css_1 = __importDefault(require("./modal.module.css"));
var Modal = function (_a) {
    var setUsername = _a.setUsername;
    var _b = react_1.useState(""), name = _b[0], setName = _b[1];
    var handleClick = function () {
        setUsername(name);
    };
    var handleChange = function (e) {
        setName(e.target.value);
    };
    return (<div className={modal_module_css_1.default.backdrop}>
      <div className={modal_module_css_1.default.modal}>
        <h1>Who are you?</h1>
        <input type="text" placeholder="Username" value={name} onChange={handleChange}/>
        <button onClick={handleClick}>Enter</button>
      </div>
    </div>);
};
exports.default = Modal;
