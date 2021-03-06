const commando = require('discord.js-commando');

module.exports = class refreshLibrariesCommand extends commando.Command {
	constructor (client) {
		super(client, {
			'name': 'refreshlibraries',
			'memberName': 'refreshlibraries',
			'group': 'tautulli',
			'description': 'refresh all libraries in tautulli',
			'examples': ['refreshlibraries'],
			'guildOnly': true
		});
    }
    
    run (msg) {
		this.client.API.tautulli.refreshLibraries().then(() => {
			this.client.deleteCommandMessages(msg);
			return msg.reply('Refreshed all libraries in Tautulli.');
		}).catch(() => {
			return msg.reply('Something went wrong! Couldn\'t refresh libraries.');
		});
    }
};
