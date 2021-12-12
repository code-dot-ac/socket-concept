"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sidebar_module_css_1 = __importDefault(require("./sidebar.module.css"));
var Sidebar = function (_a) {
    var users = _a.users;
    return (<div className={sidebar_module_css_1.default.sidebar}>
            <h3>Users</h3>
            <ul>
                {users.map(function (user, index) {
        return <li key={index}>{user}</li>;
    })}
              
            </ul>
        </div>);
};
exports.default = Sidebar;
