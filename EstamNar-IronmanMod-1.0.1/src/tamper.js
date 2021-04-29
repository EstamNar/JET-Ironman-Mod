exports.mod = (mod_info) => {
	logger.logInfo("[MOD] Estams Ironman Mod Part 2");

    let config = fileIO.readParsed(internal.path.resolve(__dirname, "../USER_CONFIG.json"))

    //Softwipe Mod
    if(config.softWipeOnDeath)
        offraid_f.saveProgress = require("./offraidchanges").saveProgress;

    logger.logSuccess("[MOD] Estams Ironman Mod Part 2; Applied");
}