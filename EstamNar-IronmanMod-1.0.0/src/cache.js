exports.mod = (mod_info) => {
	logger.logInfo("[MOD] Estams Ironman Mod Part 1");

	let config = fileIO.readParsed(internal.path.resolve(__dirname, "../USER_CONFIG.json"))
	
	//Tweaks Mod
	let globals = fileIO.readParsed(db.cacheBase.globals);
	let IronmanTweaks = internal.path.resolve(__dirname, "globals.json");

	if(config.disableRegeneration){
		globals.data.config.Health.Effects.Regeneration.MinimumHealthPercentage = 0;
		globals.data.config.Health.Effects.Regeneration.Energy = 0;
		globals.data.config.Health.Effects.Regeneration.Hydration = 0;
		globals.data.config.Health.Effects.Regeneration.BodyHealth.Head.Value = 0;
		globals.data.config.Health.Effects.Regeneration.BodyHealth.Chest.Value = 0;
		globals.data.config.Health.Effects.Regeneration.BodyHealth.Stomach.Value = 0;
		globals.data.config.Health.Effects.Regeneration.BodyHealth.LeftArm.Value = 0;
		globals.data.config.Health.Effects.Regeneration.BodyHealth.RightArm.Value = 0;
		globals.data.config.Health.Effects.Regeneration.BodyHealth.LeftLeg.Value = 0;
		globals.data.config.Health.Effects.Regeneration.BodyHealth.RightLeg.Value = 0;
	}
	
	if(config.disableTrialHeal){
		globals.data.config.Health.HealPrice.TrialLevels = 0
		globals.data.config.Health.HealPrice.TrialRaids = 0
	}
	
	globals.data.config.RagFair.enabled = !config.disableRagfair

	db.cacheBase.globals = IronmanTweaks;
	fileIO.write(IronmanTweaks, globals);

	//Profile Mod
	let profileDir = internal.path.resolve(__dirname, "Ironman");
	let files = fileIO.readDir(profileDir);
	let profile = {}
	for(let index in files){
		let file = files[index]
		let fileName = file.split('.')[0]
		let fullPath = internal.path.resolve(profileDir, file)
		profile[fileName] = fullPath
	}
	db.profile["Ironman"] = profile

	//Stashes Mod
	if(config.smallStashes){
		let items = fileIO.readParsed(db.user.cache.items);
		let stashIds = ["5811ce772459770e9e5f9532", "5811ce572459770cba1a34ea", "5811ce662459770f6f490f32", "566abbc34bdc2d92178b4576"];
		for(index in stashIds){
			let id = stashIds[index];
			items.data[id]._props.Grids[0]._props.cellsV = 4
		}
		fileIO.write(db.user.cache.items, items);
	}

	//Traders Mod
	if(config.disableTraders){
		let keys = Object.keys(db.cacheBase.traders)
		let TraderCache = internal.path.resolve(__dirname, "categories.json");
		for(index in keys){
			let id = keys[index];
			if(id.toLowerCase() == "ragfair") continue;
			let traders = fileIO.readParsed(db.cacheBase.traders[id].base);
			let IronmanTraders = internal.path.resolve(__dirname,id + "base.json");
			
			traders.sell_category = [];

			db.cacheBase.traders[id].base = IronmanTraders;
			db.cacheBase.traders[id].categories = TraderCache
			fileIO.write(IronmanTraders, traders);
		
		}
		fileIO.write(TraderCache, [])
		keys = Object.keys(db.user.cache).filter(x => x.includes("assort_"));
		for(index in keys){
			let id = keys[index];
			if(id.toLowerCase() .includes("ragfair")) continue;
			let assort = fileIO.readParsed(db.user.cache[id]);

			 assort.data.items = []
			 assort.data.barter_scheme = {}
			 assort.data.loyal_level_items = {}			

			fileIO.write(db.user.cache[id],assort)
		}
	}
	
	//Nightmares
	if(!config.disableNightmares){
		let Locations = fileIO.readParsed(db.user.cache.locations)
		let Maps = Object.keys(Locations)
		for(let index in Maps){
			let map = Maps[index]
			let base = Locations[map].base
			for(let I in base.waves){
				base.waves[I].WildSpawnType = "bossKilla"
			}
		}
		fileIO.write(db.user.cache.locations, Locations)
	}

	fileIO.write("user/cache/db.json", db);
	
	logger.logSuccess("[MOD] Estams Ironman Mod Part 1; Applied");
}
