exports.mod = (mod_info) => {
	logger.logInfo("[MOD] Estams Ironman Mod Part 1");

	let userconfig = fileIO.readParsed(internal.path.resolve(__dirname, "../USER_CONFIG.json"));
	
	//Tweaks Mod
	let base = db.base ? db.base : db.cacheBase;
	let globals = fileIO.readParsed(base.globals);
	let IronmanTweaks = internal.path.resolve(__dirname, "globals.json");
	let tweaks;
	
	if(server.version == "1.2.0" || server.version == "0.12.2-0409-Alpha" || server.version == "0.12.3-1010-Beta" || server.version == "0.12.4-1012-Dev"){ 
		tweaks = globals.config; 
	}

	if(server.version == "1.1.0" || server.version == "1.1.1"){ 
		tweaks = globals.data.config; 
	}

	if(userconfig.disableRegeneration){
		tweaks.Health.Effects.Regeneration.MinimumHealthPercentage = 0;
		tweaks.Health.Effects.Regeneration.Energy = 0;
		tweaks.Health.Effects.Regeneration.Hydration = 0;
		tweaks.Health.Effects.Regeneration.BodyHealth.Head.Value = 0;
		tweaks.Health.Effects.Regeneration.BodyHealth.Chest.Value = 0;
		tweaks.Health.Effects.Regeneration.BodyHealth.Stomach.Value = 0;
		tweaks.Health.Effects.Regeneration.BodyHealth.LeftArm.Value = 0;
		tweaks.Health.Effects.Regeneration.BodyHealth.RightArm.Value = 0;
		tweaks.Health.Effects.Regeneration.BodyHealth.LeftLeg.Value = 0;
		tweaks.Health.Effects.Regeneration.BodyHealth.RightLeg.Value = 0;
	}
	
	if(userconfig.disableTrialHeal){
		tweaks.Health.HealPrice.HealthPointPrice = 100;
		tweaks.Health.HealPrice.TrialLevels = 0;
		tweaks.Health.HealPrice.TrialRaids = 0;
	}
	
	tweaks.RagFair.enabled = !userconfig.disableRagfair;

	base.globals = IronmanTweaks;
	fileIO.write(IronmanTweaks, globals);

	//Profile Mod
	let version;
	if(server.version == "1.1.0" || server.version == "1.1.1"){ 
		version = "12.9/Ironman"
	}
	if(server.version == "1.2.0" || server.version == "0.12.2-0409-Alpha" || server.version == "0.12.3-1010-Beta"){ 
		version = "12.11/Ironman"
	}
	let profileDir = internal.path.resolve(__dirname, version);
	let files = fileIO.readDir(profileDir);
	let profile = {};
	for(let index in files){
		let file = files[index];
		let fileName = file.split('.')[0];
		let fullPath = internal.path.resolve(profileDir, file);
		profile[fileName] = fullPath;
	}
	db.profile[version] = profile;

	//Stashes Mod
	if(userconfig.smallStashes){
		let items = fileIO.readParsed(db.user.cache.items);
		let stashIds = ["5811ce772459770e9e5f9532", "5811ce572459770cba1a34ea", "5811ce662459770f6f490f32", "566abbc34bdc2d92178b4576"];
		for(index in stashIds){
			let eod = "5811ce772459770e9e5f9532";
			let standard = "566abbc34bdc2d92178b4576";
			let prepare = "5811ce662459770f6f490f32";
			let behind = "5811ce572459770cba1a34ea";

			items.data[standard]._props.Grids[0]._props.cellsV = 4;
			items.data[behind]._props.Grids[0]._props.cellsV = 8;
			items.data[prepare]._props.Grids[0]._props.cellsV = 12;
			items.data[eod]._props.Grids[0]._props.cellsV = 16;
		}
		fileIO.write(db.user.cache.items, items);
	}

	if(server.version == "1.1.0"){
		
		//Hideout Mod
		if(userconfig.disableTraders){

		let HideoutTweaks = internal.path.resolve(db.user.cache.hideout_areas);
		let HideoutAreas = fileIO.readParsed(HideoutTweaks);

			HideoutAreas.data[0].stages[1].requirements[0].count = 2500;
			HideoutAreas.data[0].stages[2].requirements[0].count = 5000;
			HideoutAreas.data[1].stages[1].requirements[0].count = 10000;
			HideoutAreas.data[2].stages[1].requirements[0].count = 2500;
			HideoutAreas.data[3].stages[1].requirements[0].count = 2000;
			HideoutAreas.data[3].stages[2].requirements[2].count = 4500;
			HideoutAreas.data[5].stages[2].requirements[4].count = 20000;
			HideoutAreas.data[5].stages[3].requirements[4].count = 40000;
			HideoutAreas.data[5].stages[4].requirements[3].count = 10000;
			HideoutAreas.data[6].stages[3].requirements[0].count = 12500;
			HideoutAreas.data[7].stages[1].requirements[0].count = 7000;
			HideoutAreas.data[7].stages[2].requirements[1].count = 5000;
			HideoutAreas.data[7].stages[3].requirements[0].count = 15000;
			HideoutAreas.data[8].stages[1].requirements[1].count = 2500;
			HideoutAreas.data[8].stages[3].requirements[3].count = 12500;
			HideoutAreas.data[9].stages[1].requirements[1].count = 1000;
			HideoutAreas.data[9].stages[2].requirements[2].count = 3500;
			HideoutAreas.data[9].stages[3].requirements[5].count = 300;
			HideoutAreas.data[10].stages[3].requirements[2].count = 19500;
			HideoutAreas.data[13].stages[1].requirements[1].count = 40000;
			HideoutAreas.data[15].stages[1].requirements[0].count = 1000;
			HideoutAreas.data[15].stages[3].requirements[4].count = 5000;
			HideoutAreas.data[16].stages[1].requirements[3].count = 100000;
			HideoutAreas.data[17].stages[1].requirements[2].count = 2500;
			HideoutAreas.data[18].stages[1].requirements[2].count = 2500;
			HideoutAreas.data[21].stages[1].requirements[1].count = 1000;

		
		fileIO.write(HideoutTweaks, HideoutAreas);

		}
	}

	//Traders Mod
	if(userconfig.disableTraders){
		let tpath = db.traders ? db.traders : db.cacheBase.traders;
		let keys = Object.keys(tpath);
		let TraderCache = internal.path.resolve(__dirname, "categories.json");
		for(index in keys){
			let id = keys[index];
			if(id.toLowerCase() == "ragfair") continue;
			let traders = fileIO.readParsed(tpath[id].base);
			let IronmanTraders = internal.path.resolve(__dirname,id + "base.json");
			
			traders.sell_category = [];
			tpath[id].base = IronmanTraders;
			tpath[id].categories = TraderCache;
			fileIO.write(IronmanTraders, traders);
		
		}
		fileIO.write(TraderCache, []);
		keys = Object.keys(db.user.cache).filter(x => x.includes("assort_"));
		for(index in keys){
			let id = keys[index];
			if(id.toLowerCase() .includes("ragfair")) continue;
			let assort = fileIO.readParsed(db.user.cache[id]);

			 assort.data.items = [{
				"_id": "5c13cd2486f774072c757944",
				"_tpl": "5c13cd2486f774072c757944",
				"parentId": "hideout",
				"slotId": "hideout",
				"upd": {
				  "UnlimitedCount": true,
				  "StackObjectsCount": 999999999
				}
			  }];
			 assort.data.barter_scheme = {};
			 assort.data.loyal_level_items = {};	

			fileIO.write(db.user.cache[id],assort);
		}
	}
	
	//Nightmares
	if(!userconfig.disableNightmares){
		let Locations = fileIO.readParsed(db.user.cache.locations);
		let Maps = Object.keys(Locations);
		for(let index in Maps){
			let map = Maps[index];
			let base = Locations[map].base;
			for(let I in base.waves){
				base.waves[I].WildSpawnType = "bossKilla";
			}
			for(let I in base.BossLocationSpawn){
				base.BossLocationSpawn[I].BossName = "bossKilla";
			}
		
		}
		fileIO.write(db.user.cache.locations, Locations);
	}

	fileIO.write("user/cache/db.json", db);
	
	logger.logSuccess("[MOD] Estams Ironman Mod Part 1; Applied");
}
