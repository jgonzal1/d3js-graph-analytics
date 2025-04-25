/*
"#cc6666" Core Inside
"#de935f" External/Internet
"#f0c674" LAN
"#8c9440" Devices Trusted
"#8abeb7"
"#5e8d87"
"#5f819d" DMZ Messaging
"#707880"
"#b294bb" DMZ Database
"#85678f"
*/

const graph5056 = {"nodes": [
    {"atom":" ", "size":1,                                          "color":"#FFFFFF"},
    {"atom":"X",/*APP-5056.SN117 - Robot arm reporting", */         "color":"#92D050"},
    {"atom":"APP-5056.A008 - External User (EWMS Support)",         "color":"#FFC000"},
    {"atom":"APP-5056.SN011 - External monitoring",                 "color":"#FFC000"},
    {"atom":"APP-5056.SN012 - eController",                         "color":"#00B0F0"},
    {"atom":"APP-5056.SN013 - eController DB (MS SQL)",             "color":"#00B0F0"},
    {"atom":"APP-5056.SN016 - Siemens TIA portal",                  "color":"#00B0F0"},
    {"atom":"APP-5056.SN007 - Global Desktop (Citrix)",             "color":"#FFFFFF"},
    {"atom":"APP-5056.SN003 - C1 - Autostore App Server",           "color":"#FFC000"},
    {"atom":"APP-5056.SN005 - C2 - EWMS Server",                    "color":"#FFC000"},
    {"atom":"APP-5056.SN006 - C3 - EWMS DB (MS SQL)",               "color":"#FFC000"},
    {"atom":"APP-5056.SN004 - C3 - Autostore App DB (MS SQL)",      "color":"#FFC000"},
    {"atom":"APP-4046.SN002 - AIIB (ESB)",                          "color":"#FFFFFF"},
    {"atom":"APP-2367.SN018 - Nagios XI",                           "color":"#FFC000"},
    {"atom":"APP-5056.A009 - Internal DSV user workstation",        "color":"#FFFFFF"},
    {"atom":"APP-5056.SN017 - Conveyor PLC",                        "color":"#00B0F0"},
    {"atom":"APP-5056.SN019 - Label printers",                      "color":"#00B0F0"},
    {"atom":"APP-5056.SN010 - Autostore automation controller",     "color":"#FFC000"},
    {"atom":"APP-5056.SN116 - Robot arm PLC",                       "color":"#92D050"},
    {"atom":"X",/*"APP-5056.SN014 - Autostore Wi-Fi Access Points"*/"color":"#FFC000"},
    {"atom":"X",/*APP-5056.SN015 - Autostore robots"*/              "color":"#FFC000"}
], "links": [
    {"source": 18, "target": 1},
    {"source": 2, "target": 7},
    {"source": 8, "target": 3},
    {"source": 4, "target": 12},
    {"source": 12, "target": 4},
    {"source": 4, "target": 9},
    {"source": 9, "target": 4},
    {"source": 7, "target": 4},
    {"source": 14, "target": 9},
    {"source": 7, "target": 9},
    {"source": 9, "target": 10},
    {"source": 7, "target": 8},
    {"source": 9, "target": 12},
    {"source": 12, "target": 9},
    {"source": 4, "target": 15},
    {"source": 4, "target": 16},
    {"source": 4, "target": 5},
    {"source": 14, "target": 4},
    {"source": 7, "target": 6},
    {"source": 14, "target": 7},
    {"source": 7, "target": 17},
    {"source": 9, "target": 8},
    {"source": 8, "target": 9},
    {"source": 9, "target": 13},
    {"source": 13, "target": 9},
    {"source": 9, "target": 18},
    {"source": 9, "target": 6},
    {"source": 6, "target": 9},
    {"source": 14, "target": 8},
    {"source": 8, "target": 11},
    {"source": 6, "target": 12},
    {"source": 12, "target": 6},
    {"source": 8, "target": 13},
    {"source": 13, "target": 8},
    {"source": 6, "target": 15},
    {"source": 8, "target": 17},
    {"source": 17, "target": 8},
    {"source": 17, "target": 19},
    {"source": 19, "target": 20}
]
}
function getGraph5056(callback) {
    callback(graph5056);
}