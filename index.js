const { Plugin } = require("powercord/entities");

module.exports = class TextReact extends Plugin {
	async startPlugin() {
		powercord.api.commands.registerCommand({
			command: "annoiler",
			aliases: ["annoil"],
			description:
				"Makes you send messages with spoilers around every single character.",
			usage: "{c} [message]",
			executor: async (args) => {
				return {
					send: true,
					result: args.join(" ").split("").map((char) => {
						return `||${char}||`;
					}).join(""),
				};
			},
		});
	}

	pluginWillUnload() {
		powercord.api.commands.unregisterCommand("annoiler");
	}
};
