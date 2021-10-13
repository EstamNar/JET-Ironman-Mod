exports.mod = (mod_info) => {
	logger.logInfo("[MOD] Estams Ironman Mod Part 2");

    let config = fileIO.readParsed(internal.path.resolve(__dirname, "../USER_CONFIG.json"))

    //Softwipe Mod
    if(config.softWipeOnDeath)
    
        if(server.version == "1.1.1" || server.version == "1.2.0" || server.version == "0.12.2-0409-Alpha" || server.version == "0.12.3-1010-Beta") offraid_f.saveProgress = require("./offraidchanges1.1.1").saveProgress;
        else offraid_f.saveProgress = require("./offraidchanges1.1.0").saveProgress;
    
    logger.logSuccess("[MOD] Estams Ironman Mod Part 2; Applied");
}