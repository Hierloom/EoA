import { GameEoA } from "foundry-extensions"
import "../src/scss/eoa.scss"
// Import document classes.
import { EoAActor } from "./documents/actor.ts"
import { EoAItem } from "./documents/item.ts"
// Import sheet classes.
import { EoAActorSheet } from "./sheets/actor-sheet.ts"
import { EoAItemSheet } from "./sheets/item-sheet.ts"
// Import helper/utility classes and constants.
import { preloadHandlebarsTemplates } from "./helpers/templates.js"
import { EoA } from "./helpers/config.ts"

Hooks.once("init", function () {
    console.log('updated v2');
    // Add utility classes to the global game object so that they're more easily
    // accessible in global contexts.
    (game as GameEoA).eoa = {
        EoAActor,
        EoAItem
    };

    // Add custom constants for configuration.
    CONFIG.EoA = EoA;

    /**
     * Set an initiative formula for the system
     * @type {String}
     */
    CONFIG.Combat.initiative = {
        formula: "1d20 + @abilities.dex.mod",
        decimals: 2,
    };

    // Define custom Document classes
    CONFIG.Actor.documentClass = EoAActor;
    CONFIG.Item.documentClass = EoAItem;

    // Active Effects are never copied to the Actor,
    // but will still apply to the Actor from within the Item
    // if the transfer property on the Active Effect is true.
/*     CONFIG.ActiveEffect.legacyTransferral = false */

    // Register sheet application classes
    Actors.unregisterSheet("core", ActorSheet)
    Actors.registerSheet("eoa", EoAActorSheet, {
        makeDefault: true,
        label: "EOA.SheetLabels.Actor",
    });
    Items.unregisterSheet('core', ItemSheet);
    Items.registerSheet('echoes-of-the-arcane', EoAItemSheet, {
      makeDefault: true,
      label: 'EOA.SheetLabels.Item',
    });

    // Preload Handlebars templates.
    return preloadHandlebarsTemplates()
})


/* -------------------------------------------- */
/*  Handlebars Helpers                          */
/* -------------------------------------------- */

// If you need to add Handlebars helpers, here is a useful example:
Handlebars.registerHelper('toLowerCase', function (str) {
    return str.toLowerCase();
  });
  