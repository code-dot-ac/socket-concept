"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var messagebox_module_css_1 = __importDefault(require("./messagebox.module.css"));
var MessageBox = function (_a) {
    var onNewMessage = _a.onNewMessage;
    var _b = react_1.useState(''), message = _b[0], setMessage = _b[1];
    var handleInput = function (e) {
        setMessage(e.target.value);
    };
    var handleEnter = function (e) {
        if (e.key === 'Enter') {
            console.log(message);
            onNewMessage(message);
            setMessage('');
        }
    };
    return (<div className={messagebox_module_css_1.default.messageBox}>
      <input placeholder="Message..." value={message} onKeyDown={handleEnter} onChange={handleInput} type="text"/>
    </div>);
};
exports.default = MessageBox;
