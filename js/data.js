window.WikiData = {
  site: {
    name: 'Starsector Wiki',
    shortName: 'Starsector Wiki',
    baseUrl: 'https://starsector.gamewikihub.com',
    titleSuffix: 'Starsector Wiki',
    defaultDescription: 'A tactical Starsector wiki for ships, weapons, factions, colonies, fleet doctrine, combat systems, exploration, mods and survival across the Persean Sector.',
    defaultOgImage: '/assets/images/hero/sector-command.svg',
    lastUpdated: '2026-05-24',
    buildStatus: 'General strategy guidance; verify exact stats against your installed Starsector version and mod list.'
  },

  sourceRegistry: {
    officialSite: { label: 'Fractal Softworks', url: 'https://fractalsoftworks.com/', note: 'Official Starsector site and development source.' },
    officialForums: { label: 'Fractal Softworks Forums', url: 'https://fractalsoftworks.com/forum/', note: 'Official forum for releases, mods and community strategy discussion.' },
    wikiGG: { label: 'Starsector Wiki.gg', url: 'https://starsector.wiki.gg/', note: 'Community mechanics reference for ships, weapons, factions and systems.' },
    modIndex: { label: 'Starsector Mod Index', url: 'https://fractalsoftworks.com/forum/index.php?topic=177.0', note: 'Community mod discovery and compatibility starting point.' }
  },

  categories: [
    { id: 'beginner-guides', title: 'Beginner Guides', icon: 'beacon', accent: 'cyan', summary: 'Starting guide, money routes, first fleet, fuel, supplies and early survival.' },
    { id: 'ships', title: 'Ships', icon: 'ship', accent: 'blue', summary: 'Frigates, destroyers, cruisers, capitals, carriers, phase ships and logistics hulls.' },
    { id: 'weapons', title: 'Weapons', icon: 'turret', accent: 'orange', summary: 'Ballistic, energy, missile, PD, beam, strike and torpedo weapon references.' },
    { id: 'fighters', title: 'Fighters', icon: 'wing', accent: 'cyan', summary: 'Fighter wings, bomber wings, interceptors, carrier doctrine and replacement rate.' },
    { id: 'hullmods', title: 'Hullmods', icon: 'module', accent: 'green', summary: 'Built-in hullmods, combat hullmods, logistics hullmods and S-mod planning.' },
    { id: 'skills', title: 'Skills & Officers', icon: 'officer', accent: 'green', summary: 'Player skills, officer training, elite skills, personalities and AI officer builds.' },
    { id: 'factions', title: 'Factions', icon: 'faction', accent: 'orange', summary: 'Hegemony, Tri-Tachyon, Persean League, Sindrian Diktat, Luddics, pirates and Remnants.' },
    { id: 'colonies', title: 'Colonies', icon: 'colony', accent: 'green', summary: 'Colony setup, best worlds, hazard, industries, stability, defenses, AI cores and threats.' },
    { id: 'exploration', title: 'Exploration', icon: 'scan', accent: 'cyan', summary: 'Ruins, derelicts, research stations, warning beacons, probes, storms, salvaging and fuel.' },
    { id: 'fleet-building', title: 'Fleet Building', icon: 'fleet', accent: 'blue', summary: 'Early, midgame, endgame, exploration, smuggling, carrier, phase and doctrine fleets.' },
    { id: 'combat', title: 'Combat', icon: 'target', accent: 'red', summary: 'Flux, shields, armor, EMP, missiles, fighters, carrier warfare and battle positioning.' },
    { id: 'economy', title: 'Economy', icon: 'credits', accent: 'orange', summary: 'Trading, smuggling, bounties, commissions, black markets and credit routes.' },
    { id: 'mods', title: 'Mods', icon: 'mod', accent: 'cyan', summary: 'Nexerelin, Industrial Evolution, ship packs, faction mods, compatibility and load order.' },
    { id: 'guides', title: 'Guides', icon: 'manual', accent: 'green', summary: 'Beginner survival, money, colonies, flux warfare, officers and endgame optimization.' },
    { id: 'maps-sector', title: 'Maps & Sector', icon: 'map', accent: 'blue', summary: 'Core worlds, hyperspace, gates, Domain-era structures, resource worlds and hazards.' },
    { id: 'patch-notes', title: 'Patch Notes', icon: 'signal', accent: 'orange', summary: 'Version changes, major mod updates, development notes and compatibility watchpoints.' }
  ],

  pages: [
    entry('beginner-guides', 'beginner-survival-guide', 'Beginner Survival Guide', 'A starting captain needs supplies, fuel, salvage discipline and a fleet that can disengage before it needs heroics.', ['Early route', 'Transponder discipline', 'Supplies', 'Fuel', 'Retreat planning']),
    entry('beginner-guides', 'make-credits-fast', 'How to Make Credits Fast', 'Reliable credits come from low-risk contracts before you bet the fleet on bounty heroics.', ['Survey missions', 'Delivery contracts', 'Bounties', 'Trading', 'Salvage']),
    entry('beginner-guides', 'best-starting-ships', 'Best Starting Ships', 'The best starting ships are forgiving, cheap to maintain and strong enough to teach combat without bankrupting you.', ['Wolf', 'Hammerhead', 'Lasher', 'Condor', 'Wayfarer']),
    entry('beginner-guides', 'supply-fuel-basics', 'Supply & Fuel Basics', 'Logistics kill fleets more quietly than combat.', ['Fuel range', 'Supply drain', 'Recovery costs', 'Tankers', 'Cargo holds']),
    entry('beginner-guides', 'exploration-basics', 'Exploration Basics', 'Exploration is profitable when you plan range, sensor profile and cargo space before jumping out.', ['Surveying', 'Ruins', 'Derelicts', 'Warning beacons', 'Salvage rigs']),

    entry('ships', 'frigates', 'Frigates', 'Frigates win through speed, pressure, capture points and cheap deployment.', ['Harassers', 'Point capture', 'Wolfpack', 'Low DP', 'Fragility']),
    entry('ships', 'destroyers', 'Destroyers', 'Destroyers are the first true line ships, but they punish overextension.', ['Hammerhead', 'Sunder', 'Enforcer', 'Escort duty', 'Flux pressure']),
    entry('ships', 'cruisers', 'Cruisers', 'Cruisers decide many midgame fights by combining staying power with specialized roles.', ['Eagle', 'Dominator', 'Aurora', 'Mora', 'Line anchor']),
    entry('ships', 'capital-ships', 'Capital Ships', 'Capital ships are fleet centerpieces, not automatic victories.', ['Onslaught', 'Paragon', 'Conquest', 'Astral', 'Deployment cost']),
    entry('ships', 'phase-ships', 'Phase Ships', 'Phase ships trade normal durability for timing, burst and positional abuse.', ['Afflictor', 'Harbinger', 'Doom', 'Phase cloak', 'Peak time']),
    entry('ships', 'carriers', 'Carriers', 'Carriers project pressure through fighters, replacement rate and battle tempo.', ['Condor', 'Mora', 'Heron', 'Astral', 'Fighter doctrine']),
    entry('ships', 'logistics-ships', 'Logistics Ships', 'Logistics ships are the reason combat ships reach the battlefield.', ['Tankers', 'Freighters', 'Salvage rigs', 'Tugs', 'Civilian hulls']),
    entry('ships', 'best-ships', 'Best Ships in Starsector', 'The best ship is the one your doctrine, officers and logistics can support.', ['DP efficiency', 'Officer fit', 'Fleet role', 'Skill support', 'Availability']),

    entry('weapons', 'ballistic-weapons', 'Ballistic Weapons', 'Ballistics excel at pressure, armor cracking and efficient sustained fire.', ['Kinetic', 'High explosive', 'Ammo', 'Range', 'Flux efficiency']),
    entry('weapons', 'energy-weapons', 'Energy Weapons', 'Energy weapons offer flexible damage packages at the cost of flux pressure.', ['Pulse lasers', 'Beams', 'High tech', 'Flux load', 'Shield pressure']),
    entry('weapons', 'missile-weapons', 'Missile Weapons', 'Missiles create burst windows that must be timed, protected and followed up.', ['Harpoons', 'Sabots', 'Torpedoes', 'Ammo limits', 'Finisher role']),
    entry('weapons', 'pd-weapons', 'Point Defense Weapons', 'Point defense decides whether missiles and fighters become damage or background noise.', ['PD lasers', 'Flak', 'Vulcans', 'Coverage arcs', 'Escort ships']),
    entry('weapons', 'beam-weapons', 'Beam Weapons', 'Beams create constant pressure, control and finishing power against overloaded targets.', ['Tactical lasers', 'HIL', 'Range', 'Soft flux', 'Target pressure']),
    entry('weapons', 'best-weapons', 'Best Weapons in Starsector', 'Weapon tiering depends on mount size, range, flux, target armor and fleet doctrine.', ['Needlers', 'Heavy maulers', 'Sabots', 'Autopulse', 'HIL']),

    entry('fighters', 'fighter-wings', 'Fighter Wings', 'Fighters create continuous pressure, distraction and PD tax.', ['Interceptors', 'Fighters', 'Bombers', 'Replacement rate', 'Carrier skills']),
    entry('fighters', 'bomber-wings', 'Bomber Wings', 'Bombers turn carrier decks into strike threats when timed with pressure.', ['Daggers', 'Tridents', 'Longbows', 'Torpedoes', 'Strike timing']),
    entry('fighters', 'carrier-doctrine', 'Carrier Doctrine', 'Carrier fleets win by controlling tempo and forcing enemies to defend in every direction.', ['Deck count', 'Escort screen', 'Fighter mix', 'Missile support', 'Recovery']),

    entry('hullmods', 'best-hullmods', 'Best Hullmods', 'Hullmods define what a ship is allowed to be good at.', ['Integrated Targeting Unit', 'Hardened Shields', 'Expanded Missile Racks', 'Resistant Flux Conduits', 'S-mods']),
    entry('hullmods', 'logistics-hullmods', 'Logistics Hullmods', 'Logistics hullmods reduce the quiet costs that end campaigns.', ['Efficiency Overhaul', 'Augmented Drive Field', 'Insulated Engine Assembly', 'Surveying Equipment', 'Expanded Cargo Holds']),
    entry('hullmods', 's-mod-planning', 'S-Mod Planning', 'Story-point hullmods should solve permanent doctrine problems, not passing annoyances.', ['Story points', 'Ordnance points', 'Build identity', 'Officer synergy', 'Long-term value']),

    entry('skills', 'best-combat-skills', 'Best Combat Skills', 'Combat skills turn one flagship from useful to battle-defining.', ['Helmsmanship', 'Combat Endurance', 'Target Analysis', 'Systems Expertise', 'Impact Mitigation']),
    entry('skills', 'best-industry-skills', 'Best Industry Skills', 'Industry skills make exploration, recovery and colonies more forgiving.', ['Bulk Transport', 'Salvaging', 'Field Repairs', 'Colony skills', 'Logistics']),
    entry('skills', 'best-leadership-skills', 'Best Leadership Skills', 'Leadership skills make officers, coordinated fleets and carriers scale harder.', ['Officer Management', 'Coordinated Maneuvers', 'Carrier Group', 'Wolfpack Tactics', 'Support Doctrine']),
    entry('skills', 'officer-training', 'Officer Training', 'Officers should be trained for roles, not random stat piles.', ['Aggressive', 'Steady', 'Cautious', 'Elite skills', 'Ship pairing']),
    entry('skills', 'ai-officer-builds', 'AI Officer Builds', 'AI officers need ships that match their personality and tolerance for danger.', ['Personality', 'Flux stats', 'Range control', 'Missile timing', 'Survivability']),

    entry('factions', 'hegemony', 'Hegemony', 'The Hegemony is armored doctrine, inspections, low-tech fleets and old Domain authority.', ['Low-tech ships', 'Heavy armor', 'AI inspections', 'Military markets', 'Hostility risk']),
    entry('factions', 'tri-tachyon', 'Tri-Tachyon', 'Tri-Tachyon favors high-tech ships, advanced markets and corporate deniability.', ['High-tech ships', 'Energy weapons', 'Phase ships', 'AI cores', 'Markets']),
    entry('factions', 'persean-league', 'Persean League', 'The Persean League is midline doctrine and political opposition to Hegemony control.', ['Midline ships', 'Trade', 'League worlds', 'Mixed fleets', 'Diplomacy']),
    entry('factions', 'sindrian-diktat', 'Sindrian Diktat', 'The Diktat is fuel politics, propaganda and bright-orange military pride.', ['Fuel production', 'Sindria', 'Lions Guard', 'Energy weapons', 'Relations']),
    entry('factions', 'luddic-church', 'Luddic Church', 'The Luddic Church fields rugged low-tech fleets and ideological gravity.', ['Low tech', 'Faith', 'Pilgrimage worlds', 'Relations', 'Doctrine']),
    entry('factions', 'luddic-path', 'Luddic Path', 'The Luddic Path is asymmetric pressure, cells, raids and colony disruption.', ['Pather cells', 'Raids', 'Low-tech ships', 'Colony threat', 'Hostility']),
    entry('factions', 'pirates', 'Pirates', 'Pirates are opportunity, instability and cheap hulls with knives taped on.', ['Raids', 'Black markets', 'Low-quality fleets', 'Bases', 'Bounties']),
    entry('factions', 'remnants', 'Remnants', 'Remnants are high-tech automated fleets that punish casual exploration.', ['Warning beacons', 'Automated ships', 'High danger', 'AI cores', 'Endgame combat']),

    entry('colonies', 'colony-setup-guide', 'Colony Setup Guide', 'A good colony starts with the right world, enough capital and a threat plan.', ['Hazard rating', 'Accessibility', 'Industries', 'Defenses', 'Growth']),
    entry('colonies', 'best-colony-locations', 'Best Colony Locations', 'The best colony location balances resources, hazard, access and strategic risk.', ['Habitable worlds', 'Ore', 'Volatiles', 'Farmland', 'System quality']),
    entry('colonies', 'hazard-rating', 'Hazard Rating', 'Hazard rating quietly decides whether your colony prints credits or eats them.', ['Upkeep', 'Growth', 'Accessibility', 'Industry profit', 'Terraforming mods']),
    entry('colonies', 'industries', 'Industries', 'Industries define colony identity, exports and what enemies care about.', ['Farming', 'Mining', 'Fuel Production', 'Heavy Industry', 'Commerce']),
    entry('colonies', 'ai-cores', 'AI Cores', 'AI cores are profit, efficiency and Hegemony attention bundled together.', ['Alpha cores', 'Beta cores', 'Gamma cores', 'Inspections', 'Risk']),
    entry('colonies', 'colony-threats', 'Colony Threats', 'Colonies invite pirates, Pathers, inspections and expedition pressure.', ['Pirates', 'Pather cells', 'Raids', 'Expeditions', 'Defenses']),

    entry('exploration', 'domain-era-ruins', 'Domain-era Ruins', 'Ruins are the sector paying captains who prepared cargo, fuel and survey gear.', ['Artifacts', 'Blueprints', 'AI cores', 'Surveying', 'Salvage']),
    entry('exploration', 'research-stations', 'Research Stations', 'Research stations are high-value exploration targets worth detours.', ['Blueprints', 'Rare loot', 'Danger', 'Scanning', 'Salvage']),
    entry('exploration', 'warning-beacons', 'Warning Beacons', 'Warning beacons are not decoration. They are combat forecasts.', ['Low danger', 'Medium danger', 'High danger', 'Remnants', 'Risk']),
    entry('exploration', 'hyperspace-storms', 'Hyperspace Storms', 'Storms trade time for fuel, damage and emergency decisions.', ['Fuel cost', 'CR damage', 'Slipstreams', 'Navigation', 'Avoidance']),
    entry('exploration', 'salvaging', 'Salvaging', 'Salvaging is most profitable when the fleet is built to recover value efficiently.', ['Salvage rigs', 'Skills', 'Derelicts', 'Cargo', 'Supply cost']),

    entry('fleet-building', 'early-game-fleets', 'Early Game Fleets', 'Early fleets should be cheap, fast and able to retreat from bad contracts.', ['Frigates', 'Destroyers', 'Tankers', 'Cargo', 'Low upkeep']),
    entry('fleet-building', 'mid-game-fleets', 'Mid Game Fleets', 'Midgame fleets need anchors, pursuit ships and logistics that keep pace.', ['Cruisers', 'Carriers', 'Officers', 'Logistics', 'Doctrine']),
    entry('fleet-building', 'endgame-fleets', 'Endgame Fleets', 'Endgame fleets are built around doctrine, officer quality and DP-efficient anchors.', ['Capitals', 'Elite officers', 'Support ships', 'Automated threats', 'Colony defense']),
    entry('fleet-building', 'exploration-fleets', 'Exploration Fleets', 'Exploration fleets need sensor control, range and cargo more than raw DP.', ['Fuel tankers', 'Freighters', 'Salvage rigs', 'Survey gear', 'Burn speed']),
    entry('fleet-building', 'carrier-fleets', 'Carrier Fleets', 'Carrier fleets work when fighters have a screen, not when decks are left alone to solve everything.', ['Deck count', 'Escort screen', 'Bombers', 'Interceptors', 'Leadership skills']),
    entry('fleet-building', 'phase-fleets', 'Phase Fleets', 'Phase fleets demand timing, officer support and good target selection.', ['Phase ships', 'Peak time', 'Burst damage', 'Harassment', 'Skill support']),

    entry('combat', 'flux-management', 'Flux Management', 'Flux is the combat economy: ships die when they spend it badly.', ['Soft flux', 'Hard flux', 'Venting', 'Overload', 'Pressure']),
    entry('combat', 'shield-mechanics', 'Shield Mechanics', 'Shield arcs, efficiency and upkeep decide how long a ship can stay in the line.', ['Shield arc', 'Efficiency', 'Upkeep', 'Hard flux', 'Flickering']),
    entry('combat', 'armor-mechanics', 'Armor Mechanics', 'Armor rewards angled pressure, high-explosive follow-up and patience.', ['Armor grid', 'HE damage', 'Kinetics', 'Hull damage', 'Armor tanks']),
    entry('combat', 'missile-saturation', 'Missile Saturation', 'Missiles win when PD is overloaded or pointed elsewhere.', ['Sabots', 'Harpoons', 'Torpedoes', 'PD tax', 'Strike timing']),
    entry('combat', 'fighter-control', 'Fighter Control', 'Fighter control is about timing, replacement rate and target pressure.', ['Engage orders', 'Regroup', 'Bombers', 'Interceptors', 'Carrier safety']),
    entry('combat', 'battle-positioning', 'Battle Positioning', 'Positioning decides which fleet fights together and which dies in pieces.', ['Capture points', 'Nav buoys', 'Flanks', 'Retreats', 'Command points']),

    entry('economy', 'trading-guide', 'Trading Guide', 'Trading is information arbitrage plus cargo discipline.', ['Shortages', 'Surpluses', 'Legal markets', 'Tariffs', 'Cargo space']),
    entry('economy', 'smuggling-guide', 'Smuggling Guide', 'Smuggling pays for stealth, speed and knowing when to turn the transponder off.', ['Black markets', 'Sensor profile', 'Patrols', 'Contraband', 'Reputation']),
    entry('economy', 'bounty-guide', 'Bounty Guide', 'Bounties are profitable when threat estimates are honest.', ['Fleet rating', 'Officers', 'Recovery cost', 'Deployment points', 'Escape route']),
    entry('economy', 'commissions', 'Commissions', 'Commissions trade steady income for faction entanglement.', ['Monthly pay', 'Relations', 'Enemies', 'Military markets', 'Strategic cost']),

    entry('mods', 'nexerelin', 'Nexerelin', 'Nexerelin turns Starsector into a more dynamic faction war sandbox.', ['Faction invasions', 'Diplomacy', 'Agents', 'Start options', 'Compatibility']),
    entry('mods', 'industrial-evolution', 'Industrial Evolution', 'Industrial Evolution expands colony infrastructure, artifacts and campaign texture.', ['Colony structures', 'Artifacts', 'Industry options', 'Compatibility', 'Balance']),
    entry('mods', 'ship-weapon-pack', 'Ship/Weapon Pack', 'Ship/Weapon Pack adds a large set of hulls and weapons for expanded fleet building.', ['Ships', 'Weapons', 'Balance', 'Compatibility', 'Fleet variety']),
    entry('mods', 'unknown-skies', 'Unknown Skies', 'Unknown Skies expands planetary variety and exploration flavor.', ['Planet types', 'Visual variety', 'Exploration', 'Compatibility', 'Colonies']),
    entry('mods', 'tahlan-shipworks', 'Tahlan Shipworks', 'Tahlan Shipworks adds distinctive hulls and faction-flavored threats.', ['Ships', 'Factions', 'Weapons', 'Balance', 'Compatibility']),
    entry('mods', 'starship-legends', 'Starship Legends', 'Starship Legends gives ships histories, reputations and personality.', ['Ship traits', 'Reputation', 'Campaign flavor', 'Fleet attachment', 'Compatibility']),
    entry('mods', 'iron-shell', 'Iron Shell', 'Iron Shell adds Hegemony-adjacent military flavor and content.', ['Faction content', 'Ships', 'Missions', 'Hegemony theme', 'Compatibility']),
    entry('mods', 'best-mods', 'Best Mods for Starsector', 'The best mods expand the sector without breaking the campaign you meant to play.', ['Nexerelin', 'Industrial Evolution', 'Ship packs', 'QoL mods', 'Compatibility']),

    entry('guides', 'colony-guide', 'Colony Guide', 'Colonies become profitable when world choice, industries and defense mature together.', ['World selection', 'Industries', 'Stability', 'Defenses', 'AI cores']),
    entry('guides', 'flux-warfare', 'Flux Warfare', 'Flux warfare is the art of making the enemy spend badly before you commit.', ['Pressure', 'Venting windows', 'Kinetic damage', 'Overload', 'Follow-up']),
    entry('guides', 'fleet-doctrine-theory', 'Fleet Doctrine Theory', 'Doctrine is how ships, officers, weapons and logistics agree with each other.', ['Low tech', 'Midline', 'High tech', 'Carrier', 'Phase']),
    entry('guides', 'ai-manipulation', 'AI Manipulation', 'The combat AI is predictable enough to support plans and dangerous enough to punish lazy ones.', ['Range control', 'Officer personality', 'Orders', 'Threat zones', 'Retreat logic']),
    entry('guides', 'officer-min-maxing', 'Min-Maxing Officers', 'Min-maxed officers make specific hulls behave like doctrine pieces instead of stat blocks.', ['Elite skills', 'Personality', 'Ship role', 'Skill trees', 'Assignment']),
    entry('guides', 'best-ship-tier-list', 'Best Ship Tier List', 'Ship tier lists only matter when they explain fleet role and support requirements.', ['DP value', 'Officer scaling', 'Availability', 'Autopilot', 'Endgame']),

    entry('maps-sector', 'core-worlds', 'Core Worlds', 'The Core Worlds are markets, patrols, politics and opportunity compressed into known space.', ['Markets', 'Factions', 'Patrols', 'Trade', 'Missions']),
    entry('maps-sector', 'hyperspace', 'Hyperspace', 'Hyperspace is travel, storms, sensor decisions and fuel math.', ['Storms', 'Terrain', 'Slipstreams', 'Sensor profile', 'Range']),
    entry('maps-sector', 'gates', 'Gates', 'Gates reshape campaign travel once the right story systems unlock.', ['Gate network', 'Story progress', 'Travel time', 'Strategic value', 'Exploration']),
    entry('maps-sector', 'resource-worlds', 'Resource Worlds', 'Resource worlds decide whether colonies grow into empires or expensive flags.', ['Ore', 'Rare ore', 'Volatiles', 'Farmland', 'Organics']),
    entry('maps-sector', 'cryosleepers', 'Cryosleepers', 'Cryosleepers can transform nearby colony growth and strategic value.', ['Population growth', 'System planning', 'Exploration', 'Colony value', 'Defense']),

    entry('patch-notes', 'patch-notes', 'Patch Notes', 'Patch notes matter because balance, ship stats and campaign systems can shift doctrine.', ['Version changes', 'Balance', 'Ships', 'Campaign changes', 'Compatibility']),
    entry('patch-notes', 'mod-compatibility', 'Mod Compatibility Notes', 'Compatibility notes keep the sector from collapsing under its own modlist.', ['Load order', 'Dependencies', 'Version match', 'Save safety', 'Known issues'])
  ],

  transmissions: [
    'Burn speed wins campaigns before the first shot is fired.',
    'A fleet that cannot disengage is not exploring. It is gambling.',
    'Flux is not a bar. It is the battle economy.',
    'Colonies invite attention. Build patrols before pride.',
    'The transponder is a diplomatic weapon and a liability.',
    'Missiles are not damage. They are timing.',
    'If the warning beacon says high danger, believe the beacon.'
  ],

  infoPages: {
    about: {
      title: 'About Starsector Wiki',
      body: '<p><strong>Starsector Wiki</strong> is an unofficial GameWikiHub command database for ships, weapons, factions, colonies, combat, exploration, fleet doctrine and mods across the Persean Sector.</p><p>The site is built as a fast static archive with structured pages, tactical summaries, search, SEO metadata and non-invasive ad placements.</p><h3>Editorial approach</h3><p>Articles are written for captains who want practical decisions: what to fly, what to avoid, how to build colonies and how to keep a campaign alive.</p><h3>Unofficial notice</h3><p>This site is not affiliated with, endorsed by, or sponsored by Fractal Softworks.</p>'
    },
    'privacy-policy': {
      title: 'Privacy Policy',
      body: '<p><strong>Effective date:</strong> May 24, 2026</p><p>This static wiki does not require user accounts and does not intentionally collect names, passwords, payment information or private account details.</p><h3>Automatically processed information</h3><p>Hosting, analytics, security and advertising providers may process technical information such as IP address, browser type, device type, pages visited, referring pages, approximate location and timestamps.</p><h3>Cookies and advertising</h3><p>This site may use cookies, local storage, analytics tools and advertising providers such as Google AdSense. Advertising partners may use cookies or similar technologies to serve ads, measure performance, prevent fraud and personalize or limit advertising according to user settings and applicable law.</p><h3>Third-party links</h3><p>External links to official resources, forums, wikis, mod pages or community sites are governed by those sites&apos; own policies.</p><h3>Contact</h3><p>Questions about this policy can be sent through the contact page.</p>'
    },
    contact: {
      title: 'Contact',
      body: '<p>Use this page to report corrections, suggest guide topics, request removals or ask about the Starsector Wiki project.</p><h3>Email</h3><p><a href="mailto:contact@gamewikihub.com">contact@gamewikihub.com</a></p><h3>What to include</h3><ul><li>The page URL or title.</li><li>What information is wrong, missing or outdated.</li><li>A source, screenshot, patch note or clear explanation when available.</li></ul><h3>Official support</h3><p>For official support, purchases, bug reports or account issues, contact Fractal Softworks through official channels.</p>'
    }
  }
};

function entry(category, id, title, summary, stats) {
  return {
    category,
    id,
    title,
    summary,
    stats,
    tags: stats.concat([category, title]),
    sections: [
      { h: 'Command Summary', body: '<p>' + summary + '</p>' },
      { h: 'Tactical Readout', list: stats },
      { h: 'Operational Use', body: '<p>Use this entry as a campaign decision aid. Starsector rewards matching ship roles, officer behavior, logistics and risk level before the battle starts.</p>' },
      { h: 'Common Failure Modes', list: ['Overcommitting before flux advantage exists', 'Ignoring logistics costs', 'Taking fights without a retreat route', 'Building around a single trick the AI can disrupt', 'Letting reputation or colony threats drift unattended'] },
      { h: 'Veteran Notes', body: '<p>Compare the cost of a plan against the recovery cost if it fails. A good captain wins battles; a great one chooses which battles become profitable.</p>' }
    ],
    related: stats.slice(0, 3).map((s) => ({ label: s, href: '/' + category })),
    sources: ['wikiGG', 'officialSite']
  };
}
