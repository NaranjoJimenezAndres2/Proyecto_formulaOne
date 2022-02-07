db.granpremios.insertMany([
{"_idGranPremio": "001", 
"_nombre" : "Spa Francochamps", 
"_temporada": 2021,
"_pais": "Belgica",
"_clasificacion":[{"ALO" : 25},{"VER" :18 },{"HAM" : 15},{"PER" : 10},{"NOR" : 8},{"LEC" :6 },{"OCO" : 5},{"RIC" : 3},{"GAS" : 2},{"VET" : 1}],
"_vueltaRapida": {"ALO": 1}, 
"_abandonos": [{"KIM": 1},{"GER":1}]
},
{"_idGranPremio": "002", 
"_nombre" : "GP de Monaco", 
"_temporada": 2021,
"_pais": "Monaco",
"_clasificacion":[{"ALO" : 25},{"VER" :18 },{"HAM" : 15},{"PER" : 10},{"SAI" : 8},{"LEC" :6 },{"OCO" : 5},{"RUS" : 3},{"GAS" : 2},{"VET" : 1}],
"_vueltaRapida": {"HAM": 1}, 
"_abandonos": [{"KIM": 1},{"GER":1}]
}

]);

db.personals.insertMany([
    {"_idPersonal": "aaa",
    "_nombre":"Estevan",
    "_apellidos":"Ocon",
    "_fechaContratacion": new Date ("2021-05-09"),
    "_salario":50000,
    "_idEscuderia":"ALP",
    "_idPiloto":"OCO",
   "_nacionalidad":"FRA"},

    {"_idPersonal": "aaa",
    "_nombre":"Max",
    "_apellidos":"Verstappen",
    "_fechaContratacion": new Date ("2021-05-09"),
    "_salario":60000,
    "_idEscuderia":"RBR",
    "_idPiloto":"VER",
   "_nacionalidad":"NLD"

    },
    {"_idPersonal": "aaa",
    "_nombre":"Lewis",
    "_apellidos":"Hamilton",
    "_fechaContratacion": new Date ("2021-05-09"),
    "_salario":55000,
    "_idEscuderia":"MER",
    "_idPiloto":"HAM",
   "_nacionalidad":"ENG"

    },

    {"_idPersonal": "aaa",
    "_nombre":"Sergio",
    "_apellidos":"Perez",
    "_fechaContratacion": new Date ("2021-05-09"),
    "_salario":45000,
    "_idEscuderia":"RBR",
    "_idPiloto":"PER",
   "_nacionalidad":"MEX"

    },

    {"_idPersonal": "aaa",
    "_nombre":"Lando",
    "_apellidos":"Norris",
    "_fechaContratacion": new Date ("2021-05-09"),
    "_salario":55000,
    "_idEscuderia":"MCL",
    "_idPiloto":"NOR",
   "_nacionalidad":"ENG"

    },

    {"_idPersonal": "aaa",
    "_nombre":"Charles",
    "_apellidos":"Leclerc",
    "_fechaContratacion": new Date ("2021-05-09"),
    "_salario":55000,
    "_idEscuderia":"FER",
    "_idPiloto":"LEC",
   "_nacionalidad":"MON"

    },

    {"_idPersonal": "aaa",
    "_nombre":"Daniel",
    "_apellidos":"Ricciardo",
    "_fechaContratacion": new Date ("2021-05-09"),
    "_salario":55000,
    "_idEscuderia":"MCL",
    "_idPiloto":"RIC",
   "_nacionalidad":"AUS"

    },

    {"_idPersonal": "aaa",
    "_nombre":"Pierre",
    "_apellidos":"Gasly",
    "_fechaContratacion": new Date ("2021-05-09"),
    "_salario":55000,
    "_idEscuderia":"TAU",
    "_idPiloto":"GAS",
    "_nacionalidad":"FRA"},

    {"_idPersonal": "aaa",
    "_nombre":"George",
    "_apellidos":"Russell",
    "_fechaContratacion": new Date ("2021-05-09"),
    "_salario":55000,
    "_idEscuderia":"WIL",
    "_idPiloto":"RUS",
    "_nacionalidad":"ENG"},

    {"_idPersonal": "aaa",
    "_nombre":"Carlos",
    "_apellidos":"Sainz",
    "_fechaContratacion": new Date ("2021-05-09"),
    "_salario":55000,
    "_idEscuderia":"FER",
    "_idPiloto":"SAI",
    "_nacionalidad":"ESP"},

    {"_idPersonal": "aaa",
    "_nombre":"Fernando",
    "_apellidos":"Alonso",
    "_fechaContratacion": new Date ("2021-05-09"),
    "_salario":55000,
    "_idEscuderia":"ALP",
    "_idPiloto":"ALO",
    "_nacionalidad":"ESP"},

    {"_idPersonal": "aaa",
    "_nombre":"Sebastian",
    "_apellidos":"Vettel",
    "_fechaContratacion": new Date ("2021-05-09"),
    "_salario":55000,
    "_idEscuderia":"AST",
    "_idPiloto":"VET",
    "_nacionalidad":"GER"},




    ]);
