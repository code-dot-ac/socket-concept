"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_client_1 = require("socket.io-client");
var react_1 = require("react");
var App_module_css_1 = __importDefault(require("./App.module.css"));
var message_1 = __importDefault(require("./components/message"));
var modal_1 = __importDefault(require("./components/modal"));
var messageBox_1 = __importDefault(require("./components/messageBox"));
var sidebar_1 = __importDefault(require("./components/sidebar"));
var App = function () {
    var _a = react_1.useState(), socket = _a[0], setSocket = _a[1];
    var _b = react_1.useState(""), username = _b[0], setUsername = _b[1];
    var _c = react_1.useState([]), messages = _c[0], setMessages = _c[1];
    var _d = react_1.useState([]), users = _d[0], setUsers = _d[1];
    var _e = react_1.useState(true), isOpen = _e[0], setIsOpen = _e[1];
    react_1.useEffect(function () {
        var socket = socket_io_client_1.io("http://localhost:4001");
        setSocket(socket);
    }, []);
    react_1.useEffect(function () {
        if (username.length && socket) {
            socket.emit("set:username", username);
            socket.emit("get:usernames");
            socket.on("user:list", function (connectedUsers) {
                var users = connectedUsers.map(function (userObj) { var _a; return (_a = userObj.username) !== null && _a !== void 0 ? _a : "Anonymous"; });
                setUsers(users);
            });
            socket.on("send:message", function (payload) {
                console.log("payload: ", payload);
                setMessages(function (prev) { return __spreadArrays(prev, [payload]); });
            });
        }
    }, [username]);
    var handleAddMessage = function (message) {
        setMessages(function (prev) { return __spreadArrays(prev, [{ message: message, username: username }]); });
        socket === null || socket === void 0 ? void 0 : socket.emit("send:message", message);
    };
    return (<div className={App_module_css_1.default.app}>
      {!(username === null || username === void 0 ? void 0 : username.length) && <modal_1.default setUsername={setUsername}/>}
      <sidebar_1.default users={users}/>
      <div className={App_module_css_1.default.container}>
        <div className={App_module_css_1.default.messages}>
          {messages.map(function (message, index) { return (<message_1.default key={index} message={message}/>); })}
        </div>
        <messageBox_1.default onNewMessage={handleAddMessage}/>
      </div>
    </div>);
};
exports.default = App;
