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
Messenger.commands.register({
    name: 'giveweapon',
    desc: '- /giveweapon (weaponid)',
    callback: async (player, ...args: string[]) => {
        const rPlayer = Rebar.usePlayer(player);
        player.giveWeapon(args[0], 50, true);
        rPlayer.notify.showNotification('Waffe wurde erfolgreich gegeben!');
    },
});
Messenger.commands.register({
    name: 'car',
    desc: '- /car (carid)',
    callback: async (player, ...args: string[]) => {
        const rPlayer = Rebar.usePlayer(player);
        const pos = player.pos;
        const vehicle = new alt.Vehicle(
            args[0],
            new alt.Vector3(pos.x + 2.5, pos.y + 2.5, pos.z),
            new alt.Vector3(0, 0, 0),
        );
        vehicle.numberPlateText = 'Test';
        vehicle.engineOn = true;
        rPlayer.notify.showNotification('Fahrzeug wurde erfolgreich gegeben!');
    },
});
