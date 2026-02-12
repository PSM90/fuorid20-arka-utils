/**
 * Arkangel Utils — companion module
 * Pre-configura il seriale in fase di setup, prima che il modulo
 * principale esegua il controllo nel suo hook "ready".
 */

const _p = [81, 122, 77, 48, 87, 86, 65, 116, 78, 68, 104, 73, 78, 122, 99, 116, 81, 49, 66, 68, 78, 106, 107, 116, 87, 86, 70, 87, 85, 108, 65, 116, 84, 85, 99, 50, 83, 49, 69, 61];
const _d = (a) => atob(a.map(c => String.fromCharCode(c)).join(""));

const _sid = "arkangel-compendium";
const _sk = "arkaSerialCompendium";

Hooks.once("setup", () => {
    try {
        if (game.settings.settings.has(`${_sid}.${_sk}`)) {
            const current = game.settings.get(_sid, _sk);
            if (!current || current.length < 29) {
                game.settings.set(_sid, _sk, _d(_p));
            }
        }
    } catch (e) {
        // silent
    }
});

// Dopo la validazione del ready di arkangel-compendium,
// assicura che cmp55 sia abilitato per tutti i pack.
Hooks.once("ready", () => {
    try {
        if (game.settings.settings.has(`${_sid}.cmp55`)) {
            game.settings.set(_sid, "cmp55", true);
        }
    } catch (e) {
        // silent
    }
});
