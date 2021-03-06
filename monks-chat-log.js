import { registerSettings } from "./settings.js";
import { WithMonksChatLog } from "./apps/chatlog.js"

export let debug = (...args) => {
    if (debugEnabled > 1) console.log("DEBUG: monks-chat-log | ", ...args);
};
export let log = (...args) => console.log("monks-chat-log | ", ...args);
export let warn = (...args) => {
    if (debugEnabled > 0) console.warn("monks-chat-log | ", ...args);
};
export let error = (...args) => console.error("monks-chat-log | ", ...args);
export let i18n = key => {
    return game.i18n.localize(key);
};
export let setting = key => {
    return game.settings.get("monks-chat-log", key);
};

export class MonksChatLog {
    static init() {

        MonksChatLog.SOCKET = "module.monks-chat-log";

        registerSettings();

        CONFIG.ui.chat = WithMonksChatLog(CONFIG.ui.chat);
    }
}

