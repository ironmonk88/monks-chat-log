export const WithMonksChatLog = (BaseLog) => {
    class MonksChatLog extends BaseLog {
        constructor(...args) {
            super(...args);

            
        }
    }

    const constructorName = isNewerVersion(game.data.version, "0.7.0")
        ? "MonksChatLog"
        : "ChatLog";
    Object.defineProperty(MonksChatLog.prototype.constructor, "name", { value: constructorName });
    return MonksChatLog;
};