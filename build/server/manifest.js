const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","Qatar2022Arabic-Bold.ttf","favicon.png","flags/ARG.svg","flags/AUS.svg","flags/BEL.svg","flags/BRA.svg","flags/CAN.svg","flags/CMR.svg","flags/CRC.svg","flags/CRO.svg","flags/DEN.svg","flags/ECU.svg","flags/ENG.svg","flags/ESP.svg","flags/FRA.svg","flags/GER.svg","flags/GHA.svg","flags/IRN.svg","flags/JPN.svg","flags/KOR.svg","flags/KSA.svg","flags/MAR.svg","flags/MEX.svg","flags/NED.svg","flags/POL.svg","flags/POR.svg","flags/QAT.svg","flags/SEN.svg","flags/SRB.svg","flags/SUI.svg","flags/TUN.svg","flags/URU.svg","flags/USA.svg","flags/WAL.svg","logo.svg","stadiums/.DS_Store","stadiums/Ahmad Bin Ali Stadium.jpg","stadiums/Al Bayt Stadium.jpg","stadiums/Al Janoub Stadium.jpg","stadiums/Al Thumama Stadium.jpg","stadiums/Education City Stadium.jpg","stadiums/Khalifa International Stadium.jpg","stadiums/Lusail Stadium.jpg","stadiums/Stadium 974.jpg"]),
	mimeTypes: {".ttf":"font/ttf",".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"_app/immutable/start-a752abc6.js","imports":["_app/immutable/start-a752abc6.js","_app/immutable/chunks/index-25fdf90a.js","_app/immutable/chunks/singletons-f3864333.js","_app/immutable/chunks/index-0f07bc57.js","_app/immutable/chunks/paths-6cd3a76e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-8a6fb86a.js'),
			() => import('./chunks/1-ea629ba9.js'),
			() => import('./chunks/2-fab5d41e.js'),
			() => import('./chunks/3-1e76a46f.js'),
			() => import('./chunks/4-084329de.js'),
			() => import('./chunks/5-3805b4aa.js'),
			() => import('./chunks/6-5d2544d0.js'),
			() => import('./chunks/7-fdc725cd.js'),
			() => import('./chunks/8-4cff29f8.js'),
			() => import('./chunks/9-ac0e55b4.js'),
			() => import('./chunks/10-c336c61c.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/update",
				pattern: /^\/api\/update\/?$/,
				names: [],
				types: [],
				optional: [],
				page: null,
				endpoint: () => import('./chunks/_server-0cad7611.js')
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				names: [],
				types: [],
				optional: [],
				page: null,
				endpoint: () => import('./chunks/_server-f614e0bd.js')
			},
			{
				id: "/partidos/cuartos-de-final",
				pattern: /^\/partidos\/cuartos-de-final\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/partidos/final",
				pattern: /^\/partidos\/final\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/partidos/primera-fase",
				pattern: /^\/partidos\/primera-fase\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/partidos/ronda-de-16",
				pattern: /^\/partidos\/ronda-de-16\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/partidos/semifinal",
				pattern: /^\/partidos\/semifinal\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/tabla",
				pattern: /^\/tabla\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
