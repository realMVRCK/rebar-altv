import * as alt from 'alt-server';
import { useRebar } from '@Server/index.js';
alt.logError('Test');

const Rebar = useRebar();
const Messenger = Rebar.messenger.useMessenger();
Messenger.commands.register({
    name: 'Test',
    desc: '- Test befehl',
    callback: async (player) => {
        const rPlayer = Rebar.usePlayer(player);
        rPlayer.notify.showNotification('Test befehl!');
    },
});
