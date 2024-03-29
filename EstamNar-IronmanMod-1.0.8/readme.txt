Created by Estam Nar

Special thanks to AppeaseTheCheese for being the patient engine that pulled this mod along in development.

ESTAMS IRONMAN MOD - Based on his custom personal server build.

The purpose of this mod is to dramatically increase the difficulty of the vanilla JET experience with changes in non-raid systems, rather than bot AI or loot generation. With the included Ironman profile(selectable in the editions dropdown on profile created/wipe), you start with only a 9mm pistol. You will find no rest or relaxation while not in a raid, storage space is at a premium, all the traders have closed up shop and taken your Flea Market access with them... And if you die... it really is game over, resetting you back to day 1.

There is a USER_CONFIG you can enable or disable each of these "features" with, however they were designed to work together, and may become very unbalanced if mixed and matched. (Some people just cant live without the Flea though...)

SPECIAL NOTE: This mod is designed to be used with a new profile(ideally the included Ironman one). I do NOT recommend using on an existing profile, as it may PERMANENTLY DELETE all existing items that do not fit in the reduced stash size. It also causes "disableTraders" to not function as intended(as your character.json overrides the global setting this mod edits). If you choose to use an existing profile anyway, I HIGHLY RECOMMEND you back that profile up, just in case you decide the mod isn't for you, or if it deletes something important to you. You've been warned.

COMPATIBILITY: This mod should be compatible with most mods currently released(I haven't tested them all, lol). Kovacs Altered Escape 2.1.0 is confirmed compatible, as well as EFT: Rebirth v0.12.3-1010-Beta, and either recommended for an even more brutal, single-player-focused experience. Any future mod that modifies any of the same files or values as my mod, or tampers with the offraid.js, may have compatibility issues. If you find any mods that don't play nice with mine, let me know on any of the Emu discords, or DM me directly.

INSTALL: Extract folder "EstamNar-IronmanMod-1.0.7" into your (server)/user/mods folder. Delete the "cache" folder in (server)/user, and restart the server.

UNINSTALL: Delete folder "EstamNar-IronmanMod-1.0.7" from your (server)/user/mods folder. Delete the "cache" folder in (server)/user, and restart the server.

CONFIGURE: To enable or disable portions of the mod, open the USER_CONFIG file in the mod folder with any basic code editor(notepad++, VS Code ect.). All options are enabled("true") by default. Setting them to "false" disables them. Delete cache folder and restart the server after a change. (NOTE: once traders are enabled on a profile, they may not turn off again without wiping the profile)

FEATURES / CHANGELOG:
Update 1.0.8

Patched for compatibility with EFT: Rebirth v0.12.4-1012-Dev
Added config option to wipe that will allow you to keep your secure container on death
Update 1.0.7

Patched for compatibility with EFT: Rebirth v0.12.3-1010-Beta
Update 1.0.6

Added config options which allow you to choose which parts of your profile you want wiped on death, if wipe on death is enabled.
Update 1.0.5

Patched for compatibility with Kovacs Altered Escape v2.1.0
Patched for compatibility with EFT: Rebirth v0.12.2-0409-Alpha
Update 1.0.4

Patched for compatibility with Kovacs Altered Escape v2.0.7
Update 1.0.3

Fixed wipe on death not working correctly.
Fixed Hideout stash upgrades not applying correctly.
Made Hideout cash costs more reasonable when traders are disabled. (does not apply in EFT: Rebirth)
Update 1.0.2

Patched for compatibility with Kovacs Altered Escape v2.0.2
"disableRagfair" - Enable/Disable the Flea Market.
"disableTraders" - Enable/Disable all Traders.
"disableRegeneration" - Enable/Disable all passive Health, Energy, and Hydration regeneration when not in raid.
"disableTrialHeal" - Enable/Disable the Therapist's free healing services after a raid.
"smallStashes" - Enable/Disable setting all stashes to 10x4. Hideout upgrades add 10x4 each.
"disableNightmares" - Disables the Nightmares. Obviously.
"softWipeOnDeath" - Enable/Disable the resetting of the profile to its new-start state upon death:

WIPE OPTIONS

"wipeInventory" - Enables/Disables the deathwipe to include the player inventory/stash, including quest and special inventories.
	"saveCase" - Enables/Disables the saving of the secure container on death.
"wipeSkills" - Enables/Disables the deathwipe to include all your accrued skills. Profile starting skills are not affected.
"wipeHideout" - Enables/Disables the deathwipe to include all hideout progress.
"wipeQuests" - Enables/Disables the deathwipe to include all quest progress.
"wipeTraderStandings" - Enables/Disables the deathwipe to include all trader standings. 
Thanks for checking the mod out! Feel free to let me know how it goes or report any bugs or issues to me on any of the Emu discords, or DM me directly.

And good luck! (you're going to need it...)