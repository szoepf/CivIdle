import { L, t } from "../utilities/i18n";
import type { ITechAgeDefinition, ITechDefinition } from "./ITechDefinition";

export class TechAgeDefinitions {
   StoneAge: ITechAgeDefinition = { idx: 0, from: 0, to: 1, name: () => t(L.StoneAge) };
   BronzeAge: ITechAgeDefinition = { idx: 1, from: 2, to: 3, name: () => t(L.BronzeAge) };
   IronAge: ITechAgeDefinition = { idx: 2, from: 4, to: 5, name: () => t(L.IronAge) };
   ClassicalAge: ITechAgeDefinition = { idx: 3, from: 6, to: 8, name: () => t(L.ClassicalAge) };
   MiddleAge: ITechAgeDefinition = { idx: 4, from: 9, to: 10, name: () => t(L.MiddleAge) };
   RenaissanceAge: ITechAgeDefinition = {
      idx: 5,
      from: 11,
      to: 13,
      name: () => t(L.RenaissanceAge),
   };
   IndustrialAge: ITechAgeDefinition = { idx: 6, from: 14, to: 17, name: () => t(L.IndustrialAge) };
   WorldWarAge: ITechAgeDefinition = { idx: 7, from: 18, to: 20, name: () => t(L.WorldWarAge) };
   ColdWarAge: ITechAgeDefinition = { idx: 8, from: 21, to: 22, name: () => t(L.ColdWarAge) };
   InformationAge: ITechAgeDefinition = {
      idx: 9,
      from: 23,
      to: 25,
      name: () => t(L.InformationAge),
   };
}

export type TechAge = keyof TechAgeDefinitions;

export class TechDefinitions {
   Fire: ITechDefinition = {
      name: () => t(L.Fire),
      column: 0,
      revealDeposit: ["Water"],
      unlockBuilding: ["Aqueduct"],
      requireTech: [],
   };

   StoneTools: ITechDefinition = {
      name: () => t(L.StoneTools),
      column: 0,
      revealDeposit: ["Stone"],
      unlockBuilding: ["StoneQuarry"],
      requireTech: [],
   };

   Logging: ITechDefinition = {
      name: () => t(L.Logging),
      column: 0,
      revealDeposit: ["Wood"],
      unlockBuilding: ["LoggingCamp"],
      requireTech: [],
   };

   Shelter: ITechDefinition = {
      name: () => t(L.Shelter),
      column: 0,
      unlockBuilding: ["Hut"],
      requireTech: [],
   };

   Masonry: ITechDefinition = {
      name: () => t(L.Masonry),
      column: 1,
      requireTech: ["Fire", "StoneTools"],
      unlockBuilding: ["Brickworks", "PyramidOfGiza"],
   };

   Counting: ITechDefinition = {
      name: () => t(L.Counting),
      column: 1,
      requireTech: ["Logging", "StoneTools"],
      unlockBuilding: ["LumberMill"],
   };

   Farming: ITechDefinition = {
      name: () => t(L.Farming),
      column: 1,
      unlockBuilding: ["WheatFarm"],
      requireTech: ["Shelter", "Logging"],
   };

   Bronze: ITechDefinition = {
      name: () => t(L.BronzeTech),
      column: 2,
      unlockBuilding: ["CopperMiningCamp"],
      revealDeposit: ["Copper"],
      requireTech: ["Masonry"],
   };

   Housing: ITechDefinition = {
      name: () => t(L.Housing),
      column: 2,
      unlockBuilding: ["House"],
      requireTech: ["Masonry", "Counting"],
      buildingMultiplier: { Hut: { output: 1 } },
      additionalUpgrades: [() => t(L.TechResourceTransportPreference)],
   };

   Herding: ITechDefinition = {
      name: () => t(L.Herding),
      column: 2,
      unlockBuilding: ["LivestockFarm"],
      requireTech: ["Counting", "Farming"],
      additionalUpgrades: [() => t(L.TechProductionPriority)],
   };

   HorsebackRiding: ITechDefinition = {
      name: () => t(L.HorsebackRiding),
      column: 2,
      additionalUpgrades: [() => t(L.TechStockpileMode)],
      unlockBuilding: ["Stable", "Sandpit"],
      requireTech: ["Farming"],
   };

   Metallurgy: ITechDefinition = {
      name: () => t(L.Metallurgy),
      column: 3,
      requireTech: ["Bronze"],
      unlockBuilding: ["HatshepsutTemple", "Blacksmith"],
   };

   Stateship: ITechDefinition = {
      name: () => t(L.Stateship),
      column: 3,
      requireTech: ["Housing"],
      unlockBuilding: ["FlourMill", "CottonPlantation"],
   };

   Market: ITechDefinition = {
      name: () => t(L.Market),
      column: 3,
      requireTech: ["Housing", "Herding"],
      unlockBuilding: ["Market", "ColossusOfRhodes"],
   };

   Arithmetic: ITechDefinition = {
      name: () => t(L.Arithmetic),
      column: 3,
      requireTech: ["Herding", "HorsebackRiding"],
      unlockBuilding: ["Statistics"],
   };

   Writing: ITechDefinition = {
      name: () => t(L.Writing),
      column: 3,
      requireTech: ["HorsebackRiding"],
      unlockBuilding: ["PaperMaker"],
   };

   Iron: ITechDefinition = {
      name: () => t(L.IronTech),
      column: 4,
      revealDeposit: ["Iron"],
      unlockBuilding: ["IronMiningCamp"],
      requireTech: ["Metallurgy", "Stateship"],
   };

   RoadAndWheel: ITechDefinition = {
      name: () => t(L.RoadAndWheel),
      column: 4,
      requireTech: ["Market", "Stateship"],
      unlockBuilding: ["Warehouse", "GreatMosqueOfSamarra"],
      buildingMultiplier: { House: { worker: 1 } },
   };

   LandTrade: ITechDefinition = {
      name: () => t(L.LandTrade),
      column: 4,
      requireTech: ["Market", "Arithmetic"],
      unlockBuilding: ["Caravansary"],
      globalMultiplier: { transportCapacity: 1 },
   };

   Astronomy: ITechDefinition = {
      name: () => t(L.Astronomy),
      column: 4,
      requireTech: ["Arithmetic", "Writing"],
      unlockBuilding: ["Brewery", "Stonehenge"],
   };

   Shamanism: ITechDefinition = {
      name: () => t(L.Shamanism),
      column: 5,
      requireTech: ["Iron", "RoadAndWheel"],
      unlockBuilding: ["ChariotWorkshop", "Persepolis"],
   };

   Construction: ITechDefinition = {
      name: () => t(L.Construction),
      column: 5,
      requireTech: ["RoadAndWheel"],
      unlockBuilding: ["IronForge", "Marbleworks"],
   };

   Music: ITechDefinition = {
      name: () => t(L.Music),
      column: 5,
      requireTech: ["LandTrade", "RoadAndWheel"],
      unlockBuilding: ["MusiciansGuild", "PaintersGuild"],
   };

   Calendar: ITechDefinition = {
      name: () => t(L.Calendar),
      column: 5,
      requireTech: ["Astronomy", "LandTrade"],
      unlockBuilding: ["CottonMill", "HangingGarden"],
   };

   Engineering: ITechDefinition = {
      name: () => t(L.Engineering),
      column: 6,
      requireTech: ["Shamanism", "Construction"],
      unlockBuilding: ["Armory", "LighthouseOfAlexandria"],
   };

   PreciousMetal: ITechDefinition = {
      name: () => t(L.PreciousMetal),
      column: 6,
      requireTech: ["Construction"],
      revealDeposit: ["Gold"],
      unlockBuilding: ["GoldMiningCamp"],
   };

   CityState: ITechDefinition = {
      name: () => t(L.CityState),
      column: 6,
      requireTech: ["Construction", "Music"],
      unlockBuilding: ["Bakery", "MausoleumAtHalicarnassus"],
   };

   Literature: ITechDefinition = {
      name: () => t(L.Literature),
      column: 6,
      requireTech: ["Calendar", "Music"],
      unlockBuilding: ["CheeseMaker", "WritersGuild"],
   };

   Machinery: ITechDefinition = {
      name: () => t(L.Machinery),
      column: 7,
      requireTech: ["PreciousMetal", "Engineering"],
      unlockBuilding: ["SiegeWorkshop", "TerracottaArmy"],
      additionalUpgrades: [() => t(L.WarehouseUpgrade)],
   };

   Politics: ITechDefinition = {
      name: () => t(L.Politics),
      column: 7,
      requireTech: ["CityState", "PreciousMetal"],
      unlockBuilding: ["FurnitureWorkshop", "Petra"],
   };

   Theater: ITechDefinition = {
      name: () => t(L.Theater),
      column: 7,
      requireTech: ["Literature"],
      unlockBuilding: ["ActorsGuild"],
   };

   Library: ITechDefinition = {
      name: () => t(L.Library),
      column: 7,
      requireTech: ["Literature"],
      unlockBuilding: ["Library", "Glassworks"],
   };

   Architecture: ITechDefinition = {
      name: () => t(L.Architecture),
      column: 8,
      requireTech: ["Machinery"],
      unlockBuilding: ["SwordForge", "ChichenItza"],
      globalMultiplier: { builderCapacity: 1 },
   };

   Democracy: ITechDefinition = {
      name: () => t(L.Democracy),
      column: 8,
      requireTech: ["Politics"],
      unlockBuilding: ["Apartment"],
   };

   Autocracy: ITechDefinition = {
      name: () => t(L.Autocracy),
      column: 8,
      requireTech: ["Politics", "Library", "Theater"],
      unlockBuilding: ["CoinMint", "TempleOfHeaven"],
   };

   Religion: ITechDefinition = {
      name: () => t(L.Religion),
      column: 8,
      requireTech: ["Library"],
      unlockBuilding: ["Shrine", "LuxorTemple"],
   };

   Geography: ITechDefinition = {
      name: () => t(L.Geography),
      column: 9,
      requireTech: ["Architecture"],
      unlockBuilding: ["CaravelBuilder"],
      buildingMultiplier: {
         Library: { output: 10, input: 10 },
      },
   };

   Physics: ITechDefinition = {
      name: () => t(L.Physics),
      column: 9,
      requireTech: ["Architecture"],
      unlockBuilding: ["GarmentWorkshop"],
   };

   Feudalism: ITechDefinition = {
      name: () => t(L.Feudalism),
      column: 9,
      requireTech: ["Autocracy", "Democracy"],
      unlockBuilding: ["KnightCamp", "TempleOfArtemis"],
   };

   Theocracy: ITechDefinition = {
      name: () => t(L.Theocracy),
      column: 9,
      requireTech: ["Autocracy", "Religion"],
      unlockBuilding: ["Church", "Mosque", "MogaoCaves"],
   };

   Navigation: ITechDefinition = {
      name: () => t(L.Navigation),
      column: 10,
      requireTech: ["Geography", "Physics"],
      unlockBuilding: ["GalleonBuilder"],
   };

   CivilService: ITechDefinition = {
      name: () => t(L.CivilService),
      column: 10,
      requireTech: ["Feudalism"],
      unlockBuilding: ["AngkorWat"],
   };

   HolyEmpire: ITechDefinition = {
      name: () => t(L.HolyEmpire),
      column: 10,
      requireTech: ["Feudalism", "Theocracy"],
      unlockBuilding: ["Cathedral", "HagiaSophia"],
   };

   Education: ITechDefinition = {
      name: () => t(L.Education),
      column: 10,
      requireTech: ["Theocracy"],
      unlockBuilding: ["School"],
   };

   Optics: ITechDefinition = {
      name: () => t(L.Optics),
      column: 11,
      requireTech: ["Navigation"],
      unlockBuilding: ["LensWorkshop"],
      globalMultiplier: { builderCapacity: 1 },
      buildingMultiplier: {
         Library: { output: 10, input: 10 },
         School: { output: 10, input: 10 },
      },
   };

   Banking: ITechDefinition = {
      name: () => t(L.Banking),
      column: 11,
      requireTech: ["CivilService", "Navigation"],
      unlockBuilding: ["Bank"],
      additionalUpgrades: [() => t(L.BankingAdditionalUpgrade)],
   };

   University: ITechDefinition = {
      name: () => t(L.University),
      column: 11,
      requireTech: ["HolyEmpire", "Education", "CivilService"],
      unlockBuilding: ["University", "OxfordUniversity"],
      globalMultiplier: { sciencePerBusyWorker: 1 },
   };

   Chemistry: ITechDefinition = {
      name: () => t(L.Chemistry),
      column: 11,
      requireTech: ["Education"],
      revealDeposit: ["Coal"],
      unlockBuilding: ["CoalMine"],
      buildingMultiplier: {
         StoneQuarry: { storage: 1, output: 1 },
         LoggingCamp: { storage: 1, output: 1 },
         IronMiningCamp: { storage: 1, output: 1 },
         CopperMiningCamp: { storage: 1, output: 1 },
         Sandpit: { storage: 1, output: 1 },
      },
   };

   Exploration: ITechDefinition = {
      name: () => t(L.Exploration),
      column: 12,
      requireTech: ["Optics"],
      unlockBuilding: ["CannonWorkshop"],
   };

   PrintingPress: ITechDefinition = {
      name: () => t(L.PrintingPress),
      column: 12,
      requireTech: ["Banking", "University", "Optics"],
      unlockBuilding: ["PrintingHouse", "ForbiddenCity"],
   };

   Enlightenment: ITechDefinition = {
      name: () => t(L.Enlightenment),
      column: 12,
      requireTech: ["University", "Chemistry"],
      unlockBuilding: ["Museum", "StPetersBasilica"],
   };

   Firearm: ITechDefinition = {
      name: () => t(L.Firearm),
      column: 12,
      requireTech: ["Chemistry"],
      unlockBuilding: ["GunpowderMill", "SaintBasilsCathedral"],
   };

   Colonialism: ITechDefinition = {
      name: () => t(L.Colonialism),
      column: 13,
      requireTech: ["Exploration", "PrintingPress"],
      unlockBuilding: ["FrigateBuilder", "HimejiCastle"],
   };

   PrivateOwnership: ITechDefinition = {
      name: () => t(L.PrivateOwnership),
      column: 13,
      requireTech: ["PrintingPress"],
      unlockBuilding: ["BondMarket"],
   };

   Constitution: ITechDefinition = {
      name: () => t(L.Constitution),
      column: 13,
      requireTech: ["Enlightenment", "PrintingPress"],
      unlockBuilding: ["Courthouse", "TajMahal"],
   };

   Revolution: ITechDefinition = {
      name: () => t(L.Revolution),
      column: 13,
      requireTech: ["Enlightenment", "Firearm"],
      unlockBuilding: ["DynamiteWorkshop"],
   };

   Rifling: ITechDefinition = {
      name: () => t(L.Rifling),
      column: 14,
      requireTech: ["PrivateOwnership", "Colonialism"],
      unlockBuilding: ["RifleFactory", "Neuschwanstein"],
   };

   Alloy: ITechDefinition = {
      name: () => t(L.Alloy),
      column: 14,
      requireTech: ["PrivateOwnership"],
      unlockBuilding: ["SteelMill", "EiffelTower"],
   };

   SteamEngine: ITechDefinition = {
      name: () => t(L.SteamEngine),
      column: 14,
      requireTech: ["PrivateOwnership"],
      unlockBuilding: ["Steamworks"],
   };

   Capitalism: ITechDefinition = {
      name: () => t(L.Capitalism),
      column: 14,
      requireTech: ["Constitution", "Revolution"],
      globalMultiplier: {
         builderCapacity: 1,
      },
      unlockBuilding: ["Parliament"],
   };

   RapidFire: ITechDefinition = {
      name: () => t(L.RapidFire),
      column: 15,
      requireTech: ["Rifling", "Alloy"],
      unlockBuilding: ["GatlingGunFactory"],
   };

   Railway: ITechDefinition = {
      name: () => t(L.Railway),
      column: 15,
      requireTech: ["Alloy", "SteamEngine"],
      unlockBuilding: ["LocomotiveFactory"],
      globalMultiplier: {
         transportCapacity: 1,
      },
   };

   Drilling: ITechDefinition = {
      name: () => t(L.Drilling),
      column: 15,
      requireTech: ["Capitalism", "SteamEngine"],
      unlockBuilding: ["OilWell"],
      revealDeposit: ["Oil"],
   };

   Journalism: ITechDefinition = {
      name: () => t(L.Journalism),
      column: 15,
      requireTech: ["Capitalism"],
      unlockBuilding: ["PublishingHouse", "Rijksmuseum"],
      globalMultiplier: {
         sciencePerBusyWorker: 1,
      },
   };

   Imperialism: ITechDefinition = {
      name: () => t(L.Imperialism),
      column: 16,
      requireTech: ["Railway", "RapidFire"],
      unlockBuilding: ["IroncladBuilder", "SummerPalace"],
   };

   Electricity: ITechDefinition = {
      name: () => t(L.Electricity),
      column: 16,
      requireTech: ["Railway", "Drilling"],
      unlockBuilding: ["CoalPowerPlant"],
      additionalUpgrades: [() => t(L.ElectrificationUpgrade)],
   };

   StockMarket: ITechDefinition = {
      name: () => t(L.StockMarket),
      column: 16,
      requireTech: ["Journalism"],
      unlockBuilding: ["StockExchange", "StatueOfLiberty"],
      globalMultiplier: {
         storage: 1,
      },
   };

   Olympics: ITechDefinition = {
      name: () => t(L.Olympics),
      column: 16,
      requireTech: ["Journalism"],
      unlockBuilding: ["Stadium"],
      globalMultiplier: {
         happiness: 5,
      },
   };

   Combustion: ITechDefinition = {
      name: () => t(L.Combustion),
      column: 17,
      requireTech: ["Imperialism", "Electricity"],
      unlockBuilding: ["TankFactory"],
   };

   Electrolysis: ITechDefinition = {
      name: () => t(L.Electrolysis),
      column: 17,
      requireTech: ["Electricity"],
      revealDeposit: ["Aluminum"],
      unlockBuilding: ["AluminumSmelter"],
   };

   Refinery: ITechDefinition = {
      name: () => t(L.Refinery),
      column: 17,
      requireTech: ["Electricity"],
      unlockBuilding: ["OilRefinery", "BrandenburgGate"],
   };

   GasPipeline: ITechDefinition = {
      name: () => t(L.GasPipeline),
      column: 17,
      requireTech: ["Electricity"],
      unlockBuilding: ["NaturalGasWell"],
      revealDeposit: ["NaturalGas"],
   };

   Urbanization: ITechDefinition = {
      name: () => t(L.Urbanization),
      column: 17,
      requireTech: ["Olympics", "StockMarket"],
      unlockBuilding: ["Pizzeria", "MagazinePublisher"],
   };

   Assembly: ITechDefinition = {
      name: () => t(L.Assembly),
      column: 18,
      requireTech: ["Combustion", "Electrolysis"],
   };

   AtomTheory: ITechDefinition = {
      name: () => t(L.AtomTheory),
      column: 18,
      requireTech: ["Refinery", "Electrolysis"],
   };

   Synthetics: ITechDefinition = {
      name: () => t(L.Synthetics),
      column: 18,
      requireTech: ["Refinery", "GasPipeline"],
   };

   MotionPicture: ITechDefinition = {
      name: () => t(L.MotionPicture),
      column: 18,
      requireTech: ["Urbanization"],
   };

   Aeroplane: ITechDefinition = {
      name: () => t(L.Aeroplane),
      column: 19,
      requireTech: ["Assembly", "AtomTheory"],
   };
   Medicine: ITechDefinition = {
      name: () => t(L.Medicine),
      column: 19,
      requireTech: ["AtomTheory"],
   };
   Hospital: ITechDefinition = {
      name: () => t(L.Hospital),
      column: 19,
      requireTech: ["AtomTheory", "Synthetics"],
   };
   Greenhouse: ITechDefinition = {
      name: () => t(L.Greenhouse),
      column: 19,
      requireTech: ["Synthetics", "MotionPicture"],
   };

   Rocketry: ITechDefinition = { name: () => t(L.Rocketry), column: 20, requireTech: ["Aeroplane"] };
   Semiconductor: ITechDefinition = {
      name: () => t(L.Semiconductor),
      column: 20,
      requireTech: ["Aeroplane", "Medicine"],
   };
   Vaccine: ITechDefinition = {
      name: () => t(L.Vaccine),
      column: 20,
      requireTech: ["Hospital", "Medicine", "Greenhouse"],
   };
   Refrigeration: ITechDefinition = {
      name: () => t(L.Refrigeration),
      column: 20,
      requireTech: ["Greenhouse"],
   };

   SpaceProgram: ITechDefinition = {
      name: () => t(L.SpaceProgram),
      column: 21,
      requireTech: ["Rocketry", "Semiconductor"],
   };
   Television: ITechDefinition = {
      name: () => t(L.Television),
      column: 21,
      requireTech: ["Semiconductor"],
   };
   Tourism: ITechDefinition = {
      name: () => t(L.Tourism),
      column: 21,
      requireTech: ["Vaccine", "Semiconductor"],
   };
   Skyscrapper: ITechDefinition = {
      name: () => t(L.Skyscrapper),
      column: 21,
      requireTech: ["Vaccine", "Refrigeration"],
   };

   Computer: ITechDefinition = {
      name: () => t(L.Computer),
      column: 22,
      requireTech: ["SpaceProgram", "Television"],
   };
   Globalization: ITechDefinition = {
      name: () => t(L.Globalization),
      column: 22,
      requireTech: ["Tourism", "Television"],
   };
   UnitedNation: ITechDefinition = {
      name: () => t(L.UnitedNation),
      column: 22,
      requireTech: ["Tourism"],
   };
   Metropolitan: ITechDefinition = {
      name: () => t(L.Metropolitan),
      column: 22,
      requireTech: ["Skyscrapper"],
   };

   NuclearFission: ITechDefinition = {
      name: () => t(L.NuclearFission),
      column: 23,
      requireTech: ["Computer"],
   };
   Internet: ITechDefinition = {
      name: () => t(L.Internet),
      column: 23,
      requireTech: ["Computer", "Globalization"],
   };
   Nanotechnology: ITechDefinition = {
      name: () => t(L.Nanotechnology),
      column: 23,
      requireTech: ["Globalization"],
   };
   Genetics: ITechDefinition = {
      name: () => t(L.Genetics),
      column: 23,
      requireTech: ["UnitedNation"],
   };
   Conglomerate: ITechDefinition = {
      name: () => t(L.Conglomerate),
      column: 23,
      requireTech: ["UnitedNation", "Metropolitan"],
   };

   Robotics: ITechDefinition = {
      name: () => t(L.Robotics),
      column: 24,
      requireTech: ["NuclearFission", "Internet"],
   };
   SocialNetwork: ITechDefinition = {
      name: () => t(L.SocialNetwork),
      column: 24,
      requireTech: ["Internet"],
   };
   Smartphone: ITechDefinition = {
      name: () => t(L.Smartphone),
      column: 24,
      requireTech: ["Internet", "Nanotechnology"],
   };
   UniversalHealthcare: ITechDefinition = {
      name: () => t(L.UniversalHealthcare),
      column: 24,
      requireTech: ["Genetics"],
   };
   VentureCapital: ITechDefinition = {
      name: () => t(L.VentureCapital),
      column: 24,
      requireTech: ["Conglomerate"],
   };

   ArtificialIntelligence: ITechDefinition = {
      name: () => t(L.ArtificialIntelligence),
      column: 25,
      unlockBuilding: [],
      requireTech: ["Robotics", "SocialNetwork"],
   };

   CloudComputing: ITechDefinition = {
      name: () => t(L.CloudComputing),
      column: 25,
      requireTech: ["SocialNetwork"],
   };
   VirtualReality: ITechDefinition = {
      name: () => t(L.VirtualReality),
      column: 25,
      requireTech: ["SocialNetwork", "Smartphone"],
   };
   Cryptocurrency: ITechDefinition = {
      name: () => t(L.Cryptocurrency),
      column: 25,
      requireTech: ["VentureCapital"],
   };
}

export type Tech = keyof TechDefinitions;
