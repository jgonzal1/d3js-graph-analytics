const graphI1 = {
  "nodes": [
    // se aceptaría en cada elemento el valor icon para meter imagen con referencia relativa
    //#region Tablas
    {"atom":"Otros"                        ,"size":4  ,"color":"#CCCFCD"}
    ,{"atom":"AltasBajas_Brutas"           ,"size":68 ,"color":"#CC6666"}
    ,{"atom":"Conversiones"                ,"size":3  ,"color":"#81A2BE"}
    ,{"atom":"Parametrica_Municipios"      ,"size":6  ,"color":"#DE935F"}
    ,{"atom":"Presupuesto"                 ,"size":20 ,"color":"#F0C674"}
    ,{"atom":"Puntos_Suministro_Act"       ,"size":5  ,"color":"#B5BD68"}
    ,{"atom":"Salesforce_InformeContratac" ,"size":33 ,"color":"#B5BD68"}
    //#endregion
    //#region Columnas generadas en Power BI - Informe Diario
    ,{"atom":"Adquisiciones.TotalAdquisicionesYTDAñoActual"               ,"size":1  ,"color":"#B5BD68"}

    ,{"atom":"▲#AltasBDGT"                                                ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲#AltasBDGTInorgTotal"                                      ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲#AltasNetas2018"                                           ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲#AltasNetasBDGT2019"                                       ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲#AltasNetasBDGTTotal2019"                                  ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲#AltasOrganicasAñoPrevio"                                  ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲#AltasOrganicasBDGT"                                       ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲#AltasOrgánicasBDGTMensual"                                ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲#AltasOrgánicasBDGTTotal"                                  ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲#AltasOrgánicasBDGTTotalMensual"                           ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲#AltasOrganicasNetasAñoPrevio"                             ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲#AltasOrganicasNetasBDGT"                                  ,"size":2  ,"color":"#CC6666"}
    ,{"atom":"▲#AltasOrgánicasNetasBDGTTotal"                             ,"size":2  ,"color":"#CC6666"}
    ,{"atom":"▲#BajasAñoPrevio"                                           ,"size":2  ,"color":"#CC6666"}
    ,{"atom":"▲#BajasBDGT"                                                ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲#BajasBDGTInorgTotal"                                      ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲#BajasOrganicasBDGT"                                       ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲#BajasOrgánicasBDGTTotal"                                  ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲%Altas2018"                                                ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲%AltasBDGT"                                                ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲%AltasBDGTInorgTotal"                                      ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲%AltasNetas2018"                                           ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲%AltasNetas2019"                                           ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲%AltasNetasBDGTTotal2019"                                  ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲%AltasOrganicasAñoPrevio"                                  ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲%AltasOrgánicasAñoPrevio"                                  ,"size":2  ,"color":"#CC6666"}
    ,{"atom":"▲%AltasOrganicasBDGT"                                       ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲%AltasOrgánicasBDGTMensual"                                ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲%AltasOrgánicasBDGTTotal"                                  ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲%AltasOrganicasNetasAñoPrevio"                             ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲%BajasAñoPrevio"                                           ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲%BajasBDGT"                                                ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲%BajasBDGTInorgTotal"                                      ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲%BajasOrganicasAñoPrevio"                                  ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲%BajasOrganicasBDGT"                                       ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲%BajasOrgánicasBDGTTotal"                                  ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"▲AltasYTDVsAñoPrevio"                                       ,"size":1  ,"color":"#CC6666"}

    ,{"atom":"Adqui.Baja"                                                 ,"size":1  ,"color":"#CC6666"}

    ,{"atom":"AltasBrutasAñoyMesActualYTD"                                ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"AltasBrutasTotalesYTDañoactual"                             ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"AltasBrutasTotalesYTDañoprevio"                             ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"AltasNetasMesyAñoActual"                                    ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"AltasNetasOrgánicasAñoActual"                               ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"AltasNetasOrgánicasAñoPrevio"                               ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"AltasNetasOrgánicasMesActual"                               ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"AltasNetasTotalesdelAñoCurso"                               ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"AltasNetasTotalesdelAñoPrevio"                              ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"AltasOrgánicasAñoPrevioMesActualYTD"                        ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"AltasOrgánicasAñoPrevioYTD"                                 ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"AltasOrgánicasMesActual"                                    ,"size":4  ,"color":"#CC6666"}
    ,{"atom":"AltasOrgánicasTotalesAñoActualYTD"                          ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"BajasBrutasAñoyMesActual"                                   ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"BajasBrutasTotalesYTDañoactual"                             ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"BajasBrutasTotalesYTDañoprevio"                             ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"BajasOrgánicasMesActual"                                    ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"BajasOrgánicasTotalesAñoActual"                             ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"BajasOrgánicasTotalesAñoPrevio"                             ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"BDGTNetoProrrateado"                                        ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"BDGTNetoTotal"                                              ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"BDGTNetoTotalOrgánico"                                      ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"BDGTTotalAltasOrgInorg"                                     ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"BDGTTotalBajasOrgInorg"                                     ,"size":2  ,"color":"#CC6666"}
    ,{"atom":"BDGTTotalOrg"                                               ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"BDGTYTDOrganicoNeto"                                        ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"CarteraNeta"                                                ,"size":2  ,"color":"#CC6666"}
    ,{"atom":"Test"                                                       ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"TotalYTDAltas"                                              ,"size":1  ,"color":"#CC6666"}
    ,{"atom":"TotalYTDAltasAñoPrevio"                                     ,"size":1  ,"color":"#CC6666"}

    ,{"atom":"Calendario.DayofMonth"                                      ,"size":4  ,"color":"#81A2BE"}

    ,{"atom":"TotalConversionesFinalizadasNetasYTDAñoActual"              ,"size":1  ,"color":"#81A2BE"}
    ,{"atom":"TotalConversionesFinalizadasYTDAñoActual"                   ,"size":1  ,"color":"#81A2BE"}
    ,{"atom":"TotalConversionessincontratoYTD"                            ,"size":1  ,"color":"#81A2BE"}

    ,{"atom":"Historico_Cartera_AltasBa.CarteraAltasAñoCurso"             ,"size":2  ,"color":"#CC6666"}
    ,{"atom":"Historico_Cartera_AltasBa.CarteraBajasAñoCurso"             ,"size":2  ,"color":"#CC6666"}

    ,{"atom":"AgrupacionZonas"                                            ,"size":8  ,"color":"#DE935F"}
    ,{"atom":"MunicipiosCRM(INE)"                                         ,"size":14 ,"color":"#DE935F"}
    ,{"atom":"MunicipiosSAP"                                              ,"size":6  ,"color":"#DE935F"}
    ,{"atom":"Provincia"                                                  ,"size":6  ,"color":"#DE935F"}
    ,{"atom":"ProvinciaCRM"                                               ,"size":15 ,"color":"#DE935F"}
    ,{"atom":"Zonas"                                                      ,"size":5  ,"color":"#DE935F"}

    ,{"atom":"Ppto_AltasOrg_Calend"                                       ,"size":1  ,"color":"#F0C674"}
    ,{"atom":"Ppto_Contr.BDGTMensual"                                     ,"size":1  ,"color":"#F0C674"}
    ,{"atom":"Ppto_Contr.BDGTMensualEH"                                   ,"size":1  ,"color":"#F0C674"}
    ,{"atom":"Ppto_Contr.BDGTMensualProrrateado"                          ,"size":1  ,"color":"#F0C674"}
    ,{"atom":"Ppto_Contr.BDGTMensualProrrateadoEH"                        ,"size":1  ,"color":"#F0C674"}
    ,{"atom":"Ppto_Contr.BDGTYTDCDs"                                      ,"size":1  ,"color":"#F0C674"}
    ,{"atom":"Ppto_Contr.BDGTYTDContrataciones"                           ,"size":1  ,"color":"#F0C674"}
    ,{"atom":"Ppto_Contr.BDGTYTDEH"                                       ,"size":1  ,"color":"#F0C674"}
    ,{"atom":"Ppto_Contr.TotalPresupuesto"                                ,"size":1  ,"color":"#F0C674"}
    ,{"atom":"Ppto_Contr.TotalPresupuestoCDs"                             ,"size":1  ,"color":"#F0C674"}
    ,{"atom":"Ppto_Contr.TotalPresupuestoEH"                              ,"size":1  ,"color":"#F0C674"}

    ,{"atom":"PptoAltasOrg.BDGTMensualOrg"                                ,"size":1  ,"color":"#F0C674"}
    ,{"atom":"PptoAltasOrg.BDGTMensualOrgProrrateado"                     ,"size":2  ,"color":"#F0C674"}
    ,{"atom":"PptoAltasOrg.BDGTYTDOrg"                                    ,"size":1  ,"color":"#F0C674"}

    ,{"atom":"PptoAltasOrganicas_Calendarizado.Total_BDGT_Dia"            ,"size":1  ,"color":"#F0C674"}

    ,{"atom":"PptoAltasOrgIn"                                             ,"size":1  ,"color":"#F0C674"}
    ,{"atom":"PptoAltasOrgIn.BDGTAltasYTDOrgInorg"                        ,"size":2  ,"color":"#F0C674"}

    ,{"atom":"PptoBajas.BDGTBajasYTDOrgInorg"                             ,"size":1  ,"color":"#F0C674"}

    ,{"atom":"PptoCalend_Co"                                              ,"size":1  ,"color":"#F0C674"}
    ,{"atom":"PptoCalend_Co.Total_BDGT_DiaC"                              ,"size":1  ,"color":"#F0C674"}

    ,{"atom":"AgrupacionZonas"                                            ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"AgrupaciónZonas"                                            ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"Municipio"                                                  ,"size":2  ,"color":"#B5BD68"}
    ,{"atom":"Provincia"                                                  ,"size":2  ,"color":"#B5BD68"}
    ,{"atom":"Recuento__PS"                                               ,"size":2  ,"color":"#B5BD68"}

    ,{"atom":"▲#CD'sAñoPrevio"                                            ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"▲#CDsBDGT"                                                  ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"▲#CDsBDGTTotal"                                             ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"▲#ContratosAñoPrevio"                                       ,"size":2  ,"color":"#B5BD68"}
    ,{"atom":"▲#ContratosAñoPrevioMensual"                                ,"size":3  ,"color":"#B5BD68"}
    ,{"atom":"▲#ContratosBDGT"                                            ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"▲#ContratosBDGTEH"                                          ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"▲#ContratosBDGTMensual"                                     ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"▲#ContratosBDGTMensualEH"                                   ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"▲#ContratosBDGTRealMes"                                     ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"▲#ContratosBDGTRealMesEH"                                   ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"▲#ContratosBDGTTotal"                                       ,"size":2  ,"color":"#B5BD68"}
    ,{"atom":"▲%CD'sAñoPrevio"                                            ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"▲%CDsBDGT"                                                  ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"▲%CDsBDGTTotal"                                             ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"▲%ContratosAñoPrevio"                                       ,"size":2  ,"color":"#B5BD68"}
    ,{"atom":"▲%ContratosAñoPrevioMensual"                                ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"▲%ContratosBDGT"                                            ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"▲%ContratosBDGTEH"                                          ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"▲%ContratosBDGTMensualEH_"                                  ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"▲%ContratosBDGTTotal"                                       ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"▲%ContratosBDGTTotalEH"                                     ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"CD'sAñoActual"                                              ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"CD'sAñoPrevio"                                              ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"CD'sMesActual"                                              ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"CP'sAcumuladoMesActualañoprevio"                            ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"CP'sAñoActual"                                              ,"size":2  ,"color":"#B5BD68"}
    ,{"atom":"CP'sAñoPrevio"                                              ,"size":2  ,"color":"#B5BD68"}
    ,{"atom":"CP'sMesActual"                                              ,"size":5  ,"color":"#B5BD68"}
    ,{"atom":"CP'sMesActualAñoPrevio"                                     ,"size":2  ,"color":"#B5BD68"}
    ,{"atom":"OportGestorComercNomComp"                                   ,"size":10 ,"color":"#B5BD68"}
    ,{"atom":"RitmoDiarioConsecuciónObjetivos"                            ,"size":1  ,"color":"#B5BD68"}
    ,{"atom":"TotalYTDCPs"                                                ,"size":1  ,"color":"#B5BD68"}
    //#endregion
    //#region Informes Power BI - Informe Diario
    ,{"atom":"⊞-01-📝-AltasOrgánicas" ,"size": 4  ,"color":"#CCCFCD"}
    ,{"atom":"⊞-02-📝-AltasOrgánicas" ,"size": 15 ,"color":"#CCCFCD"}
    ,{"atom":"⊞-03-📝-AltasOrgánicas" ,"size": 15 ,"color":"#CCCFCD"}
    ,{"atom":"⊞-04-📝-AltasOrgánicas" ,"size": 15 ,"color":"#CCCFCD"}
    ,{"atom":"⊞-05-🔎-AltasOrgánicas" ,"size": 5  ,"color":"#BEC1BF"}
    ,{"atom":"⊞-06-🔎-AltasOrgánicas" ,"size": 4  ,"color":"#BEC1BF"}
    ,{"atom":"⊞-07-🔎-AltasOrgánicas" ,"size": 12 ,"color":"#BEC1BF"}
    ,{"atom":"⊞-08-📝-AltasOrg&Inorg" ,"size": 4  ,"color":"#CCCFCD"}
    ,{"atom":"⊞-09-📝-AltasOrg&Inorg" ,"size": 16 ,"color":"#CCCFCD"}
    ,{"atom":"⊞-10-📝-AltasOrg&Inorg" ,"size": 18 ,"color":"#CCCFCD"}
    ,{"atom":"⊞-11-📝-AltasOrg&Inorg" ,"size": 17 ,"color":"#CCCFCD"}
    ,{"atom":"⊞-12-📝-Contratación"   ,"size": 5  ,"color":"#BEC1BF"}
    ,{"atom":"⊞-13-📝-Contratación"   ,"size": 14 ,"color":"#BEC1BF"}
    ,{"atom":"⊞-14-📝-Contratación"   ,"size": 5  ,"color":"#BEC1BF"}
    ,{"atom":"⊞-15-📝-Contratación"   ,"size": 14 ,"color":"#BEC1BF"}
    ,{"atom":"⊞-16-📝-Contratación"   ,"size": 5  ,"color":"#BEC1BF"}
    ,{"atom":"⊞-17-📝-Contratación"   ,"size": 14 ,"color":"#BEC1BF"}
    ,{"atom":"⊞-18-🔎-Contrataciones" ,"size": 6  ,"color":"#CCCFCD"}
    ,{"atom":"⊞-19-🔎-Contrataciones" ,"size": 5  ,"color":"#CCCFCD"}
    ,{"atom":"⊞-20-🔎-Contrataciones" ,"size": 12 ,"color":"#CCCFCD"}
    ,{"atom":"⊞-21-🔎-Contrataciones" ,"size": 13 ,"color":"#CCCFCD"}
    ,{"atom":"📈-01-🔎-AltasOrgánicas" ,"size": 6  ,"color":"#BEC1BF"}
    ,{"atom":"📈-02-🔎-Contrataciones" ,"size": 5  ,"color":"#CCCFCD"}
    ,{"atom":"📊-01-🔎-AltasOrgánicas" ,"size": 5  ,"color":"#BEC1BF"}
    //#endregion
  ],
  "links": [
    //#region Power BI (10-) - Informe Diario
    {"source": 109 ,"target":146 ,"bond":1}
    ,{"source":110 ,"target":146 ,"bond":1}
    ,{"source":111 ,"target":146 ,"bond":1}
    ,{"source":112 ,"target":146 ,"bond":1}
    ,{"source":18  ,"target":147 ,"bond":1}
    ,{"source":19  ,"target":147 ,"bond":1}
    ,{"source":19  ,"target":147 ,"bond":1}
    ,{"source":20  ,"target":147 ,"bond":1}
    ,{"source":20  ,"target":147 ,"bond":1}
    ,{"source":37  ,"target":147 ,"bond":1}
    ,{"source":50  ,"target":147 ,"bond":1}
    ,{"source":51  ,"target":147 ,"bond":1}
    ,{"source":52  ,"target":147 ,"bond":1}
    ,{"source":67  ,"target":147 ,"bond":1}
    ,{"source":71  ,"target":147 ,"bond":1}
    ,{"source":72  ,"target":147 ,"bond":1}
    ,{"source":82  ,"target":147 ,"bond":1}
    ,{"source":84  ,"target":147 ,"bond":1}
    ,{"source":85  ,"target":147 ,"bond":1}
    ,{"source":13  ,"target":148 ,"bond":1}
    ,{"source":14  ,"target":148 ,"bond":1}
    ,{"source":16  ,"target":148 ,"bond":1}
    ,{"source":32  ,"target":148 ,"bond":1}
    ,{"source":34  ,"target":148 ,"bond":1}
    ,{"source":36  ,"target":148 ,"bond":1}
    ,{"source":56  ,"target":148 ,"bond":1}
    ,{"source":57  ,"target":148 ,"bond":1}
    ,{"source":58  ,"target":148 ,"bond":1}
    ,{"source":70  ,"target":148 ,"bond":1}
    ,{"source":80  ,"target":148 ,"bond":1}
    ,{"source":82  ,"target":148 ,"bond":1}
    ,{"source":84  ,"target":148 ,"bond":1}
    ,{"source":85  ,"target":148 ,"bond":1}
    ,{"source":101 ,"target":148 ,"bond":1}
    ,{"source":21  ,"target":149 ,"bond":1}
    ,{"source":24  ,"target":149 ,"bond":1}
    ,{"source":25  ,"target":149 ,"bond":1}
    ,{"source":41  ,"target":149 ,"bond":1}
    ,{"source":42  ,"target":149 ,"bond":1}
    ,{"source":43  ,"target":149 ,"bond":1}
    ,{"source":62  ,"target":149 ,"bond":1}
    ,{"source":63  ,"target":149 ,"bond":1}
    ,{"source":64  ,"target":149 ,"bond":1}
    ,{"source":69  ,"target":149 ,"bond":1}
    ,{"source":81  ,"target":149 ,"bond":1}
    ,{"source":82  ,"target":149 ,"bond":1}
    ,{"source":84  ,"target":149 ,"bond":1}
    ,{"source":85  ,"target":149 ,"bond":1}
    ,{"source":105 ,"target":149 ,"bond":1}
    ,{"source":57  ,"target":150 ,"bond":1}
    ,{"source":76  ,"target":150 ,"bond":1}
    ,{"source":82  ,"target":150 ,"bond":1}
    ,{"source":83  ,"target":150 ,"bond":1}
    ,{"source":86  ,"target":150 ,"bond":1}
    ,{"source":73  ,"target":151 ,"bond":1}
    ,{"source":83  ,"target":151 ,"bond":1}
    ,{"source":86  ,"target":151 ,"bond":1}
    ,{"source":87  ,"target":151 ,"bond":1}
    ,{"source":15  ,"target":152 ,"bond":1}
    ,{"source":17  ,"target":152 ,"bond":1}
    ,{"source":33  ,"target":152 ,"bond":1}
    ,{"source":33  ,"target":152 ,"bond":1}
    ,{"source":35  ,"target":152 ,"bond":1}
    ,{"source":55  ,"target":152 ,"bond":1}
    ,{"source":57  ,"target":152 ,"bond":1}
    ,{"source":82  ,"target":152 ,"bond":1}
    ,{"source":83  ,"target":152 ,"bond":1}
    ,{"source":86  ,"target":152 ,"bond":1}
    ,{"source":99  ,"target":152 ,"bond":1}
    ,{"source":100 ,"target":152 ,"bond":1}
    ,{"source":109 ,"target":153 ,"bond":1}
    ,{"source":110 ,"target":153 ,"bond":1}
    ,{"source":111 ,"target":153 ,"bond":1}
    ,{"source":112 ,"target":153 ,"bond":1}
    ,{"source":10  ,"target":154 ,"bond":1}
    ,{"source":11  ,"target":154 ,"bond":1}
    ,{"source":12  ,"target":154 ,"bond":1}
    ,{"source":29  ,"target":154 ,"bond":1}
    ,{"source":30  ,"target":154 ,"bond":1}
    ,{"source":31  ,"target":154 ,"bond":1}
    ,{"source":49  ,"target":154 ,"bond":1}
    ,{"source":53  ,"target":154 ,"bond":1}
    ,{"source":54  ,"target":154 ,"bond":1}
    ,{"source":65  ,"target":154 ,"bond":1}
    ,{"source":66  ,"target":154 ,"bond":1}
    ,{"source":72  ,"target":154 ,"bond":1}
    ,{"source":77  ,"target":154 ,"bond":1}
    ,{"source":82  ,"target":154 ,"bond":1}
    ,{"source":84  ,"target":154 ,"bond":1}
    ,{"source":85  ,"target":154 ,"bond":1}
    ,{"source":7   ,"target":155 ,"bond":1}
    ,{"source":8   ,"target":155 ,"bond":1}
    ,{"source":9   ,"target":155 ,"bond":1}
    ,{"source":26  ,"target":155 ,"bond":1}
    ,{"source":27  ,"target":155 ,"bond":1}
    ,{"source":28  ,"target":155 ,"bond":1}
    ,{"source":44  ,"target":155 ,"bond":1}
    ,{"source":46  ,"target":155 ,"bond":1}
    ,{"source":47  ,"target":155 ,"bond":1}
    ,{"source":48  ,"target":155 ,"bond":1}
    ,{"source":68  ,"target":155 ,"bond":1}
    ,{"source":78  ,"target":155 ,"bond":1}
    ,{"source":80  ,"target":155 ,"bond":1}
    ,{"source":82  ,"target":155 ,"bond":1}
    ,{"source":84  ,"target":155 ,"bond":1}
    ,{"source":85  ,"target":155 ,"bond":1}
    ,{"source":103 ,"target":155 ,"bond":1}
    ,{"source":104 ,"target":155 ,"bond":1}
    ,{"source":21  ,"target":156 ,"bond":1}
    ,{"source":22  ,"target":156 ,"bond":1}
    ,{"source":23  ,"target":156 ,"bond":1}
    ,{"source":38  ,"target":156 ,"bond":1}
    ,{"source":39  ,"target":156 ,"bond":1}
    ,{"source":40  ,"target":156 ,"bond":1}
    ,{"source":45  ,"target":156 ,"bond":1}
    ,{"source":59  ,"target":156 ,"bond":1}
    ,{"source":60  ,"target":156 ,"bond":1}
    ,{"source":61  ,"target":156 ,"bond":1}
    ,{"source":69  ,"target":156 ,"bond":1}
    ,{"source":79  ,"target":156 ,"bond":1}
    ,{"source":81  ,"target":156 ,"bond":1}
    ,{"source":82  ,"target":156 ,"bond":1}
    ,{"source":84  ,"target":156 ,"bond":1}
    ,{"source":85  ,"target":156 ,"bond":1}
    ,{"source":104 ,"target":156 ,"bond":1}
    ,{"source":82  ,"target":157 ,"bond":1}
    ,{"source":83  ,"target":157 ,"bond":1}
    ,{"source":86  ,"target":157 ,"bond":1}
    ,{"source":141 ,"target":157 ,"bond":1}
    ,{"source":143 ,"target":157 ,"bond":1}
    ,{"source":82  ,"target":158 ,"bond":1}
    ,{"source":83  ,"target":158 ,"bond":1}
    ,{"source":86  ,"target":158 ,"bond":1}
    ,{"source":95  ,"target":158 ,"bond":1}
    ,{"source":98  ,"target":158 ,"bond":1}
    ,{"source":116 ,"target":158 ,"bond":1}
    ,{"source":119 ,"target":158 ,"bond":1}
    ,{"source":124 ,"target":158 ,"bond":1}
    ,{"source":128 ,"target":158 ,"bond":1}
    ,{"source":131 ,"target":158 ,"bond":1}
    ,{"source":134 ,"target":158 ,"bond":1}
    ,{"source":139 ,"target":158 ,"bond":1}
    ,{"source":140 ,"target":158 ,"bond":1}
    ,{"source":143 ,"target":158 ,"bond":1}
    ,{"source":82  ,"target":159 ,"bond":1}
    ,{"source":83  ,"target":159 ,"bond":1}
    ,{"source":86  ,"target":159 ,"bond":1}
    ,{"source":141 ,"target":159 ,"bond":1}
    ,{"source":143 ,"target":159 ,"bond":1}
    ,{"source":82  ,"target":160 ,"bond":1}
    ,{"source":83  ,"target":160 ,"bond":1}
    ,{"source":86  ,"target":160 ,"bond":1}
    ,{"source":94  ,"target":160 ,"bond":1}
    ,{"source":96  ,"target":160 ,"bond":1}
    ,{"source":116 ,"target":160 ,"bond":1}
    ,{"source":118 ,"target":160 ,"bond":1}
    ,{"source":124 ,"target":160 ,"bond":1}
    ,{"source":128 ,"target":160 ,"bond":1}
    ,{"source":130 ,"target":160 ,"bond":1}
    ,{"source":133 ,"target":160 ,"bond":1}
    ,{"source":139 ,"target":160 ,"bond":1}
    ,{"source":140 ,"target":160 ,"bond":1}
    ,{"source":143 ,"target":160 ,"bond":1}
    ,{"source":82  ,"target":161 ,"bond":1}
    ,{"source":83  ,"target":161 ,"bond":1}
    ,{"source":86  ,"target":161 ,"bond":1}
    ,{"source":137 ,"target":161 ,"bond":1}
    ,{"source":143 ,"target":161 ,"bond":1}
    ,{"source":82  ,"target":162 ,"bond":1}
    ,{"source":83  ,"target":162 ,"bond":1}
    ,{"source":86  ,"target":162 ,"bond":1}
    ,{"source":93  ,"target":162 ,"bond":1}
    ,{"source":97  ,"target":162 ,"bond":1}
    ,{"source":113 ,"target":162 ,"bond":1}
    ,{"source":114 ,"target":162 ,"bond":1}
    ,{"source":115 ,"target":162 ,"bond":1}
    ,{"source":125 ,"target":162 ,"bond":1}
    ,{"source":126 ,"target":162 ,"bond":1}
    ,{"source":127 ,"target":162 ,"bond":1}
    ,{"source":135 ,"target":162 ,"bond":1}
    ,{"source":136 ,"target":162 ,"bond":1}
    ,{"source":143 ,"target":162 ,"bond":1}
    ,{"source":76  ,"target":163 ,"bond":1}
    ,{"source":82  ,"target":163 ,"bond":1}
    ,{"source":83  ,"target":163 ,"bond":1}
    ,{"source":86  ,"target":163 ,"bond":1}
    ,{"source":141 ,"target":163 ,"bond":1}
    ,{"source":143 ,"target":163 ,"bond":1}
    ,{"source":83  ,"target":164 ,"bond":1}
    ,{"source":86  ,"target":164 ,"bond":1}
    ,{"source":87  ,"target":164 ,"bond":1}
    ,{"source":143 ,"target":164 ,"bond":1}
    ,{"source":144 ,"target":164 ,"bond":1}
    ,{"source":83  ,"target":165 ,"bond":1}
    ,{"source":86  ,"target":165 ,"bond":1}
    ,{"source":87  ,"target":165 ,"bond":1}
    ,{"source":89  ,"target":165 ,"bond":1}
    ,{"source":91  ,"target":165 ,"bond":1}
    ,{"source":117 ,"target":165 ,"bond":1}
    ,{"source":120 ,"target":165 ,"bond":1}
    ,{"source":122 ,"target":165 ,"bond":1}
    ,{"source":129 ,"target":165 ,"bond":1}
    ,{"source":141 ,"target":165 ,"bond":1}
    ,{"source":142 ,"target":165 ,"bond":1}
    ,{"source":143 ,"target":165 ,"bond":1}
    ,{"source":83  ,"target":166 ,"bond":1}
    ,{"source":86  ,"target":166 ,"bond":1}
    ,{"source":87  ,"target":166 ,"bond":1}
    ,{"source":90  ,"target":166 ,"bond":1}
    ,{"source":92  ,"target":166 ,"bond":1}
    ,{"source":117 ,"target":166 ,"bond":1}
    ,{"source":117 ,"target":166 ,"bond":1}
    ,{"source":121 ,"target":166 ,"bond":1}
    ,{"source":123 ,"target":166 ,"bond":1}
    ,{"source":132 ,"target":166 ,"bond":1}
    ,{"source":141 ,"target":166 ,"bond":1}
    ,{"source":142 ,"target":166 ,"bond":1}
    ,{"source":143 ,"target":166 ,"bond":1}
    ,{"source":74  ,"target":167 ,"bond":1}
    ,{"source":75  ,"target":167 ,"bond":1}
    ,{"source":76  ,"target":167 ,"bond":1}
    ,{"source":86  ,"target":167 ,"bond":1}
    ,{"source":88  ,"target":167 ,"bond":1}
    ,{"source":102 ,"target":167 ,"bond":1}
    ,{"source":76  ,"target":168 ,"bond":1}
    ,{"source":106 ,"target":168 ,"bond":1}
    ,{"source":107 ,"target":168 ,"bond":1}
    ,{"source":138 ,"target":168 ,"bond":1}
    ,{"source":145 ,"target":168 ,"bond":1}
    ,{"source":57  ,"target":169 ,"bond":1}
    ,{"source":83  ,"target":169 ,"bond":1}
    ,{"source":86  ,"target":169 ,"bond":1}
    ,{"source":87  ,"target":169 ,"bond":1}
    ,{"source":100 ,"target":169 ,"bond":1}
   //#endregion
    //#region Columnas - Tablas
    
    ,{"source":7   ,"target": 0   ,"bond":1}
    ,{"source":8   ,"target": 1   ,"bond":1}
    ,{"source":9   ,"target": 1   ,"bond":1}
    ,{"source":10  ,"target": 1   ,"bond":1}
    ,{"source":11  ,"target": 1   ,"bond":1}
    ,{"source":12  ,"target": 1   ,"bond":1}
    ,{"source":13  ,"target": 1   ,"bond":1}
    ,{"source":14  ,"target": 1   ,"bond":1}
    ,{"source":15  ,"target": 1   ,"bond":1}
    ,{"source":16  ,"target": 1   ,"bond":1}
    ,{"source":17  ,"target": 1   ,"bond":1}
    ,{"source":18  ,"target": 1   ,"bond":1}
    ,{"source":19  ,"target": 1   ,"bond":1}
    ,{"source":20  ,"target": 1   ,"bond":1}
    ,{"source":21  ,"target": 1   ,"bond":1}
    ,{"source":22  ,"target": 1   ,"bond":1}
    ,{"source":23  ,"target": 1   ,"bond":1}
    ,{"source":24  ,"target": 1   ,"bond":1}
    ,{"source":25  ,"target": 1   ,"bond":1}
    ,{"source":26  ,"target": 1   ,"bond":1}
    ,{"source":27  ,"target": 1   ,"bond":1}
    ,{"source":28  ,"target": 1   ,"bond":1}
    ,{"source":29  ,"target": 1   ,"bond":1}
    ,{"source":30  ,"target": 1   ,"bond":1}
    ,{"source":31  ,"target": 1   ,"bond":1}
    ,{"source":32  ,"target": 1   ,"bond":1}
    ,{"source":33  ,"target": 1   ,"bond":1}
    ,{"source":34  ,"target": 1   ,"bond":1}
    ,{"source":35  ,"target": 1   ,"bond":1}
    ,{"source":36  ,"target": 1   ,"bond":1}
    ,{"source":37  ,"target": 1   ,"bond":1}
    ,{"source":38  ,"target": 1   ,"bond":1}
    ,{"source":39  ,"target": 1   ,"bond":1}
    ,{"source":40  ,"target": 1   ,"bond":1}
    ,{"source":41  ,"target": 1   ,"bond":1}
    ,{"source":42  ,"target": 1   ,"bond":1}
    ,{"source":43  ,"target": 1   ,"bond":1}
    ,{"source":44  ,"target": 1   ,"bond":1}
    ,{"source":45  ,"target": 1   ,"bond":1}
    ,{"source":46  ,"target": 1   ,"bond":1}
    ,{"source":47  ,"target": 1   ,"bond":1}
    ,{"source":48  ,"target": 1   ,"bond":1}
    ,{"source":49  ,"target": 1   ,"bond":1}
    ,{"source":50  ,"target": 1   ,"bond":1}
    ,{"source":51  ,"target": 1   ,"bond":1}
    ,{"source":52  ,"target": 1   ,"bond":1}
    ,{"source":53  ,"target": 1   ,"bond":1}
    ,{"source":54  ,"target": 1   ,"bond":1}
    ,{"source":55  ,"target": 1   ,"bond":1}
    ,{"source":56  ,"target": 1   ,"bond":1}
    ,{"source":57  ,"target": 1   ,"bond":1}
    ,{"source":58  ,"target": 1   ,"bond":1}
    ,{"source":59  ,"target": 1   ,"bond":1}
    ,{"source":60  ,"target": 1   ,"bond":1}
    ,{"source":61  ,"target": 1   ,"bond":1}
    ,{"source":62  ,"target": 1   ,"bond":1}
    ,{"source":63  ,"target": 1   ,"bond":1}
    ,{"source":64  ,"target": 1   ,"bond":1}
    ,{"source":65  ,"target": 1   ,"bond":1}
    ,{"source":66  ,"target": 1   ,"bond":1}
    ,{"source":67  ,"target": 1   ,"bond":1}
    ,{"source":68  ,"target": 1   ,"bond":1}
    ,{"source":69  ,"target": 1   ,"bond":1}
    ,{"source":70  ,"target": 1   ,"bond":1}
    ,{"source":71  ,"target": 1   ,"bond":1}
    ,{"source":72  ,"target": 1   ,"bond":1}
    ,{"source":73  ,"target": 1   ,"bond":1}
    ,{"source":74  ,"target": 1   ,"bond":1}
    ,{"source":75  ,"target": 1   ,"bond":1}
    ,{"source":76  ,"target": 0   ,"bond":1}
    ,{"source":77  ,"target": 2   ,"bond":1}
    ,{"source":78  ,"target": 2   ,"bond":1}
    ,{"source":79  ,"target": 2   ,"bond":1}
    ,{"source":80  ,"target": 0   ,"bond":1}
    ,{"source":81  ,"target": 0   ,"bond":1}
    ,{"source":82  ,"target": 3   ,"bond":1}
    ,{"source":83  ,"target": 3   ,"bond":1}
    ,{"source":84  ,"target": 3   ,"bond":1}
    ,{"source":85  ,"target": 3   ,"bond":1}
    ,{"source":86  ,"target": 3   ,"bond":1}
    ,{"source":87  ,"target": 3   ,"bond":1}
    ,{"source":88  ,"target": 4   ,"bond":1}
    ,{"source":89  ,"target": 4   ,"bond":1}
    ,{"source":90  ,"target": 4   ,"bond":1}
    ,{"source":91  ,"target": 4   ,"bond":1}
    ,{"source":92  ,"target": 4   ,"bond":1}
    ,{"source":93  ,"target": 4   ,"bond":1}
    ,{"source":94  ,"target": 4   ,"bond":1}
    ,{"source":95  ,"target": 4   ,"bond":1}
    ,{"source":96  ,"target": 4   ,"bond":1}
    ,{"source":97  ,"target": 4   ,"bond":1}
    ,{"source":98  ,"target": 4   ,"bond":1}
    ,{"source":99  ,"target": 4   ,"bond":1}
    ,{"source":100 ,"target": 4   ,"bond":1}
    ,{"source":101 ,"target": 4   ,"bond":1}
    ,{"source":102 ,"target": 4   ,"bond":1}
    ,{"source":103 ,"target": 4   ,"bond":1}
    ,{"source":104 ,"target": 4   ,"bond":1}
    ,{"source":105 ,"target": 4   ,"bond":1}
    ,{"source":106 ,"target": 4   ,"bond":1}
    ,{"source":107 ,"target": 4   ,"bond":1}
    ,{"source":108 ,"target": 5   ,"bond":1}
    ,{"source":109 ,"target": 5   ,"bond":1}
    ,{"source":110 ,"target": 5   ,"bond":1}
    ,{"source":111 ,"target": 5   ,"bond":1}
    ,{"source":112 ,"target": 5   ,"bond":1}
    ,{"source":113 ,"target": 6   ,"bond":1}
    ,{"source":114 ,"target": 6   ,"bond":1}
    ,{"source":115 ,"target": 6   ,"bond":1}
    ,{"source":116 ,"target": 6   ,"bond":1}
    ,{"source":117 ,"target": 6   ,"bond":1}
    ,{"source":118 ,"target": 6   ,"bond":1}
    ,{"source":119 ,"target": 6   ,"bond":1}
    ,{"source":120 ,"target": 6   ,"bond":1}
    ,{"source":121 ,"target": 6   ,"bond":1}
    ,{"source":122 ,"target": 6   ,"bond":1}
    ,{"source":123 ,"target": 6   ,"bond":1}
    ,{"source":124 ,"target": 6   ,"bond":1}
    ,{"source":125 ,"target": 6   ,"bond":1}
    ,{"source":126 ,"target": 6   ,"bond":1}
    ,{"source":127 ,"target": 6   ,"bond":1}
    ,{"source":128 ,"target": 6   ,"bond":1}
    ,{"source":129 ,"target": 6   ,"bond":1}
    ,{"source":130 ,"target": 6   ,"bond":1}
    ,{"source":131 ,"target": 6   ,"bond":1}
    ,{"source":132 ,"target": 6   ,"bond":1}
    ,{"source":133 ,"target": 6   ,"bond":1}
    ,{"source":134 ,"target": 6   ,"bond":1}
    ,{"source":135 ,"target": 6   ,"bond":1}
    ,{"source":136 ,"target": 6   ,"bond":1}
    ,{"source":137 ,"target": 6   ,"bond":1}
    ,{"source":138 ,"target": 6   ,"bond":1}
    ,{"source":139 ,"target": 6   ,"bond":1}
    ,{"source":140 ,"target": 6   ,"bond":1}
    ,{"source":141 ,"target": 6   ,"bond":1}
    ,{"source":142 ,"target": 6   ,"bond":1}
    ,{"source":143 ,"target": 6   ,"bond":1}
    ,{"source":144 ,"target": 6   ,"bond":1}
    ,{"source":145 ,"target": 6   ,"bond":1}
    //*/
    //#endregion 
  ]
}
function getGraphI1(callback) {
  callback(graphI1);
}