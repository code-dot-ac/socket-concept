"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var message_module_css_1 = __importDefault(require("./message.module.css"));
var Message = function (_a) {
    var message = _a.message;
    return (<div className={message_module_css_1.default.message}>
      <p>{message.username}</p>
      <p>{message.message}</p>
    </div>);
};
exports.default = Message;
