const graphRS = {
  "nodes": [
    // se aceptaría en cada elemento el valor icon para meter imagen con referencia relativa
    //#region Tablas origen en Redshift
    {"atom":"Adquisiciones"                       ,"size":24  ,"color":"#B5BD68"}
    ,{"atom":"Agregado_Puntos_Suministro_"        ,"size":14  ,"color":"#B5BD68"}
    ,{"atom":"Agrupacion_Territorios"             ,"size":2   ,"color":"#DE935F"}
    ,{"atom":"AltasBajas_Brutas"                  ,"size":109 ,"color":"#CC6666"}
    ,{"atom":"Calendario"                         ,"size":15  ,"color":"#81A2BE"}
    ,{"atom":"Cartera_AltasBajas"                 ,"size":18  ,"color":"#CC6666"}
    ,{"atom":"Codigo_INE"                         ,"size":14  ,"color":"#DE935F"}
    ,{"atom":"Comercializadoras"                  ,"size":3   ,"color":"#B5BD68"}
    ,{"atom":"Conversiones"                       ,"size":22  ,"color":"#81A2BE"}
    ,{"atom":"dbo.Conversiones_Sin_C"             ,"size":30  ,"color":"#81A2BE"}
    ,{"atom":"dbo.DiasFestivosFinSem"             ,"size":5   ,"color":"#B294BB"}
    ,{"atom":"dbo.Presupuesto_Altas_Ba"           ,"size":4   ,"color":"#F0C674"}
    ,{"atom":"Festividades"                       ,"size":4   ,"color":"#B294BB"}
    ,{"atom":"Historico_Cartera_AltasBa"          ,"size":20  ,"color":"#CC6666"}
    ,{"atom":"Landa"                              ,"size":68  ,"color":"#81A2BE"}
    ,{"atom":"Landa_CUPS_Duplic"                  ,"size":67  ,"color":"#81A2BE"}
    ,{"atom":"Landa_Inmuebles_Duplic"             ,"size":4   ,"color":"#DE935F"}
    ,{"atom":"Presupuesto_AltasOrg_C"             ,"size":38  ,"color":"#F0C674"}
    ,{"atom":"Presupuesto_CDs"                    ,"size":3   ,"color":"#F0C674"}
    ,{"atom":"Presupuesto_Contr"                  ,"size":62  ,"color":"#F0C674"}
    ,{"atom":"Presupuesto_GestorCom"              ,"size":11  ,"color":"#F0C674"}
    ,{"atom":"PresupuestoAltasOrg"                ,"size":32  ,"color":"#F0C674"}
    ,{"atom":"PresupuestoAltasOrgIn"              ,"size":31  ,"color":"#F0C674"}
    ,{"atom":"PresupuestoBajas"                   ,"size":20  ,"color":"#F0C674"}
    ,{"atom":"PresupuestoCalend_Co"               ,"size":6   ,"color":"#F0C674"}
    ,{"atom":"Presupuestos_Gestores_Comer"        ,"size":23  ,"color":"#F0C674"}
    ,{"atom":"Puntos_Suministro_Act"              ,"size":48  ,"color":"#B5BD68"}
    ,{"atom":"Relacion_CodPostal_INE"             ,"size":9   ,"color":"#DE935F"}
    ,{"atom":"Salesforce_InformeContratac"        ,"size":106 ,"color":"#B5BD68"}
    ,{"atom":"Tipo_Obra"                          ,"size":10  ,"color":"#8ABEB7"}
    ,{"atom":"TipoGasificacion_Munic"             ,"size":8   ,"color":"#8ABEB7"}
    ,{"atom":"TipoRetribucion_Tarifa"             ,"size":6   ,"color":"#B5BD68"}
    //#endregion
    //#region Columnas origen en Redshift
    ,{"atom":"AbrTipoVia"                         ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"Aclarador"	                        ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"AclaradorPuntoSuministro"	          ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"Acometida"	                        ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"Activo"	                            ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"Adquisicion"	                      ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"AgrupacionZonas"	                  ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"AltaanoprevioValidadaanoactual"	    ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"AltasBrutas"	                      ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"Ano"	                              ,"size":1   ,"color":"#B5BD68"} // <-----  Agregado_Puntos_Suministro_
    ,{"atom":"AnoAlta"	                          ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"AnoContrato"	                      ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"AnoCurso"	                          ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"AnoFloat"	                          ,"size":1   ,"color":"#B294BB"} // <-----  Festividades
    ,{"atom":"AyudaInstalacion"	                  ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"AyudaInstalacionCampanaEspecif"     ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"Calle"	                            ,"size":4   ,"color":"#C5C8C6"}
    ,{"atom":"Campana"	                          ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"CampanaOfPubNConcepOfPub"	          ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"CaudalAnual"	                      ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"CDs"	                              ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"CertificacionId"	                  ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"CifNifEmpresaDeLaCertific"	        ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"ClaseDeTarifa"	                    ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"CodBdiAcometida"	                  ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"CodCalle"	                          ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"Codigo"	                            ,"size":1   ,"color":"#F0C674"} // <-----  Presupuesto_GestorCom
    ,{"atom":"CodigoIne"	                        ,"size":1   ,"color":"#DE935F"} // <----- 
    ,{"atom":"CodigoIneCrm"	                      ,"size":1   ,"color":"#DE935F"} // <-----  Codigo_INE
    ,{"atom":"CodigoPostal"	                      ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"Codigopostalid"	                    ,"size":1   ,"color":"#DE935F"} // <-----  Relacion_CodPostal_INE
    ,{"atom":"CodInmuebleRg"	                    ,"size":4   ,"color":"#C5C8C6"}
    ,{"atom":"CodPortalRg"	                      ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"CodPostal"	                        ,"size":8   ,"color":"#C5C8C6"}
    ,{"atom":"CodProv"	                          ,"size":1   ,"color":"#DE935F"} // <-----  Codigo_INE
    ,{"atom":"CodTipoRetribucion"	                ,"size":1   ,"color":"#B5BD68"} // <-----  TipoRetribucion_Tarifa
    ,{"atom":"Comercializadora"	                  ,"size":4   ,"color":"#C5C8C6"}
    ,{"atom":"ComercializadoraNombre"	            ,"size":1   ,"color":"#81A2BE"} // <-----  Landa
    ,{"atom":"ComunidadAutonoma"	                ,"size":9   ,"color":"#C5C8C6"}
    ,{"atom":"ConCampana"	                        ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"ContratosLcYtd"	                    ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"ContratosPpiYtd"	                  ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"ContratosShYtd"	                    ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"ContratosSvYtd"	                    ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"ControlLectura"	                    ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"Conversion"	                        ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"ConversionPendiente"	              ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"CPs"	                              ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"CreadoEl"	                          ,"size":1   ,"color":"#B5BD68"} // <-----  Adquisiciones
    ,{"atom":"CreadoPor"	                        ,"size":1   ,"color":"#B5BD68"} // <-----  Adquisiciones
    ,{"atom":"CreadoPorNombreCompleto"	          ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"CUPS"	                              ,"size":9   ,"color":"#C5C8C6"}
    ,{"atom":"CupsSinInmueble"	                  ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"Date"	                              ,"size":1   ,"color":"#81A2BE"} // <-----  Calendario
    ,{"atom":"Day"	                              ,"size":1   ,"color":"#81A2BE"} // <-----  Calendario
    ,{"atom":"DayofMonth"	                        ,"size":1   ,"color":"#81A2BE"} // <-----  Calendario
    ,{"atom":"DayofWeek"	                        ,"size":1   ,"color":"#81A2BE"} // <-----  Calendario
    ,{"atom":"DenomContador"	                    ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"DenominacionDeObjetoTécnico"	      ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"DenomProductServ"	                  ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"DepositoGlp"	                      ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"Dia"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"DiaTodosMeses"	                    ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"EH"	                                ,"size":1   ,"color":"#F0C674"} // <-----  PresupuestoBajas
    ,{"atom":"Empresa"	                          ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"EmpresaColaboradoraCertific"	      ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"Equipo"	                            ,"size":1   ,"color":"#B5BD68"} // <-----  Adquisiciones
    ,{"atom":"EquipoIri"	                        ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"Escalera"	                          ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"EsFestivo"	                        ,"size":1   ,"color":"#B294BB"} // <-----  dbo.DiasFestivosFinSem
    ,{"atom":"EsFinSemana"	                      ,"size":1   ,"color":"#B294BB"} // <-----  dbo.DiasFestivosFinSem
    ,{"atom":"Espontanea"	                        ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"EspontaneasEh"	                    ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"EspontaneasPpi"	                    ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"EspontaneasSh"	                    ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"EspontaneasSv"	                    ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"Estado"	                            ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"EstadoContrato"	                    ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"EstadoDeConversion"	                ,"size":1   ,"color":"#81A2BE"} // <-----  dbo.Conversiones_Sin_C
    ,{"atom":"EstadoÚltimoContrato"	              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"ExisteIrc"	                        ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"FAltaCont"	                        ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"FBajaContAnt"	                      ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"FBajaUltCont"	                      ,"size":4   ,"color":"#C5C8C6"}
    ,{"atom":"Fecha"	                            ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"FechaAdquisicion"	                  ,"size":1   ,"color":"#B5BD68"} // <-----  Adquisiciones
    ,{"atom":"FechaAltaContrato"	                ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"FechaBajaContratoanterior"	        ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"FechaCarga"	                        ,"size":1   ,"color":"#B5BD68"} // <-----  Agregado_Puntos_Suministro_
    ,{"atom":"FechaCartera"	                      ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"FechaContrato"	                    ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"FechaConversion"	                  ,"size":1   ,"color":"#81A2BE"} // <-----  Conversiones
    ,{"atom":"FechaCreacionOrdenDeTransf"	        ,"size":1   ,"color":"#81A2BE"} // <-----  dbo.Conversiones_Sin_C
    ,{"atom":"FechaDeCreacionDelRegistro"	        ,"size":1   ,"color":"#81A2BE"} // <-----  dbo.Conversiones_Sin_C
    ,{"atom":"FechaEntrada"	                      ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"FechaFestivo"	                      ,"size":1   ,"color":"#B294BB"} // <-----  Festividades
    ,{"atom":"FechaFinCanon"	                    ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"FechaFinGasReciente"	              ,"size":1   ,"color":"#DE935F"} // <-----  Codigo_INE
    ,{"atom":"FechaFinRecienteGasificacion"	      ,"size":1   ,"color":"#8ABEB7"} // <-----  TipoGasificacion_Munic
    ,{"atom":"FechaFurIrc"	                      ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"FechaFurIri"	                      ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"FechaInicioDeTrabajos"	            ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"Fechainiciogasificacion"	          ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"FechaPesAcometida"	                ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"FechaPlanificadaDeConversion"	      ,"size":1   ,"color":"#81A2BE"} // <-----  dbo.Conversiones_Sin_C
    ,{"atom":"FechaPuestaServicioIrc"	            ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"FechaRealDeConversion"	            ,"size":1   ,"color":"#81A2BE"} // <-----  dbo.Conversiones_Sin_C
    ,{"atom":"FechaÚltimaModificacion"	          ,"size":1   ,"color":"#81A2BE"} // <-----  dbo.Conversiones_Sin_C
    ,{"atom":"FechaValidacion"	                  ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"Festivo"	                          ,"size":1   ,"color":"#B294BB"} // <-----  Festividades
    ,{"atom":"Finca"	                            ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"FInicio1cont"	                      ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"Gestor2019"	                        ,"size":1   ,"color":"#F0C674"} // <-----  Presupuesto_GestorCom
    ,{"atom":"GestoraComercial"	                  ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"GLP"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"GlpTotal"	                          ,"size":1   ,"color":"#F0C674"} // <-----  PresupuestoBajas
    ,{"atom":"GN"	                                ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"GnGr31Y32"	                        ,"size":1   ,"color":"#F0C674"} // <-----  PresupuestoBajas
    ,{"atom":"GnGr33Y34"	                        ,"size":1   ,"color":"#F0C674"} // <-----  PresupuestoBajas
    ,{"atom":"GnMg31Y32"	                        ,"size":1   ,"color":"#F0C674"} // <-----  PresupuestoBajas
    ,{"atom":"GnMg33Y34"	                        ,"size":1   ,"color":"#F0C674"} // <-----  PresupuestoBajas
    ,{"atom":"GnPsNoRetribuídos31Y32"	            ,"size":1   ,"color":"#F0C674"} // <-----  PresupuestoBajas
    ,{"atom":"GnPsNoRetribuídos35"	              ,"size":1   ,"color":"#F0C674"} // <-----  PresupuestoBajas
    ,{"atom":"GnTotal"	                          ,"size":1   ,"color":"#F0C674"} // <-----  PresupuestoBajas
    ,{"atom":"GrupoTarifario"	                    ,"size":1   ,"color":"#B5BD68"} // <-----  TipoRetribucion_Tarifa
    ,{"atom":"ID"	                                ,"size":1   ,"color":"#B5BD68"} // <-----  TipoRetribucion_Tarifa
    ,{"atom":"ImportePrecioIrc"	                  ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"Industrial"	                        ,"size":4   ,"color":"#C5C8C6"}
    ,{"atom":"IneId"	                            ,"size":1   ,"color":"#DE935F"} // <-----  Relacion_CodPostal_INE
    ,{"atom":"InicTrab"	                          ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"Instalacion"	                      ,"size":1   ,"color":"#81A2BE"} // <-----  dbo.Conversiones_Sin_C
    ,{"atom":"IntComerc"	                        ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"IRC"	                              ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"IRI"	                              ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"Lat"	                              ,"size":1   ,"color":"#DE935F"} // <-----  Relacion_CodPostal_INE
    ,{"atom":"Localidad"	                        ,"size":1   ,"color":"#DE935F"} // <-----  Codigo_INE
    ,{"atom":"Lon"	                              ,"size":1   ,"color":"#DE935F"} // <-----  Relacion_CodPostal_INE
    ,{"atom":"Mes"	                              ,"size":8   ,"color":"#C5C8C6"}
    ,{"atom":"MesAdquisicion"	                    ,"size":1   ,"color":"#B5BD68"} // <-----  Adquisiciones
    ,{"atom":"MesAltas"	                          ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"MesCartera"	                        ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"MesCierre"	                        ,"size":1   ,"color":"#B5BD68"} // <-----  Agregado_Puntos_Suministro_
    ,{"atom":"MesContrato"	                      ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"MesConversion"	                    ,"size":1   ,"color":"#81A2BE"} // <-----  Conversiones
    ,{"atom":"Month"	                            ,"size":1   ,"color":"#81A2BE"} // <-----  Calendario
    ,{"atom":"MonthofYear"	                      ,"size":1   ,"color":"#81A2BE"} // <-----  Calendario
    ,{"atom":"Municipio"	                        ,"size":1   ,"color":"#DE935F"} // <----- 
    ,{"atom":"MunicipioCodigo"	                  ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"MunicipioCrmIne"	                  ,"size":1   ,"color":"#DE935F"} // <-----  Codigo_INE
    ,{"atom":"MunicipioSap"	                      ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"MunRed"	                            ,"size":1   ,"color":"#81A2BE"} // <-----  dbo.Conversiones_Sin_C
    ,{"atom":"MVs"	                              ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    //#endregion
    //#region
    ,{"atom":"N1"	                                ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N10"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N11"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N12"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N13"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N14"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N15"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N16"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N17"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N18"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N19"	                              ,"size":2   ,"color":"#C5C8C6"}
    //#endregion
    //#region
    ,{"atom":"N1a2aOcupacion"	                    ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    //#endregion
    //#region
    ,{"atom":"N2"	                                ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N20"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N21"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N22"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N23"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N24"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N25"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N26"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N27"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N28"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N29"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N3"	                                ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N30"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N31"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N4"	                                ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N5"	                                ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N6"	                                ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N7"	                                ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N8"	                                ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"N9"	                                ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"Negocio"	                          ,"size":4   ,"color":"#C5C8C6"}
    //#endregion
    //#region
    ,{"atom":"NegocioCrm"	                        ,"size":1   ,"color":"#8ABEB7"} // <-----  Tipo_Obra
    ,{"atom":"NegocioSap"	                        ,"size":1   ,"color":"#8ABEB7"} // <-----  Tipo_Obra
    ,{"atom":"NegocioTyrion"	                    ,"size":5   ,"color":"#C5C8C6"}
    ,{"atom":"NombreCalle"	                      ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"NombreCertificacion"	              ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"NombreconceptoOp"	                  ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"NombreDeCertificacion"	            ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"NombreDeProductorDeServicios"	      ,"size":1   ,"color":"#B5BD68"} // <-----  Comercializadoras
    ,{"atom":"NombreEmpresa"	                    ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"NombreProvincia"	                  ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"NotaUbicacionAparato"	              ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"NumDirec"	                          ,"size":1   ,"color":"#B5BD68"} // <-----  Adquisiciones
    ,{"atom":"NumFinca"	                          ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"NumSerieContador"	                  ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"ObjetivoLc"	                        ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"ObjetivoPpi"	                      ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"ObjetivoSh"	                        ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"ObjetivoSv"	                        ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"ON"	                                ,"size":5   ,"color":"#C5C8C6"}
    ,{"atom":"OportGestorComercNomComp"	          ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"OportOrigCampPrincNCamp"	          ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"OportunidadContratoCanalAsoc"	      ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"OportunidadEtapa"	                  ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"OportunidadFechaDeCreacion"	        ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"OportunidadFechaFirmaContrato"	    ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"OportunidadFechaValidacionGc"	      ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"OportunidadIdOportunidad"	          ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"OportunidadNombrecampana"	          ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"OportunidadNombreDeLaOportun"	      ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"OportunidadSubtipoFinca"	          ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"OportunidadSubtipoFincaFirma"	      ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"OportunidadTipoDeFinca"	            ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"OportunidadTipoFincaEnFirma"	      ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"OportunidadTipoRegistroOportun"	    ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"Orden"	                            ,"size":5   ,"color":"#C5C8C6"}
    ,{"atom":"OrdinalDate"	                      ,"size":1   ,"color":"#81A2BE"} // <-----  Calendario
    ,{"atom":"P"	                                ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"PercAtlasYtd"	                      ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"PercConsecucionPpi"	                ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"PercConsecucionSh"	                ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"PercConsecucionSv"	                ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"PercContratosLc"	                  ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"PercContratosYtd"	                  ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"Piso"	                              ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"Poblacion"	                        ,"size":8   ,"color":"#C5C8C6"}
    ,{"atom":"Poblacionid"	                      ,"size":1   ,"color":"#DE935F"} // <-----  Relacion_CodPostal_INE
    ,{"atom":"Portal"	                            ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"PotencialAclarador"	                ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialCampanaEspecíficaPrim"	    ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialCodigoCandidato"	          ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialCodigoPostal"	            ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialCodigoÚnicoPortal"	        ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialConexionAIrcExist"	        ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialConsumoAnualEstimado"	    ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialConsumoAnualEstimKwh"	    ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialCorreccionDireccion"	      ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialCups"	                    ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialDireccionCompleta"	        ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialEstado"	                  ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialEstructuraFinca"           ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialFechaAltaContratoAct"      ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialFechaEstimadaAltaGas"      ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialFechaPuestaServIrc"        ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialFincaCodUnicPortal"        ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialFincaTotalInmMatriz"       ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialFincaTotalInmReales"       ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialIdDeLaCuenta"              ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialLead"                      ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialNegocio"                   ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialNombreComercial"           ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialNombreDeLaCuenta"          ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialNombreMunicipio"           ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialNumInmsSegunCatastro"      ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialPotenciaInstalada"         ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialProvincia"                 ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialProyectoIntegral"          ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialReferenciaFinca"           ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialServicioActual"            ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialTarifa"                    ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialTipoActividad"             ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialTipoGas"                   ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialTipoRegCuenta"             ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialTipoServicioCentraliz"     ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotencialZonaRedexisGas"            ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PotnclCodUnicInmPtoSumin"           ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"PPI"                                ,"size":1   ,"color":"#F0C674"} // <-----  Presupuesto_GestorCom
    ,{"atom":"PpiCc"                              ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"PpiPluri"                           ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"PpiUni"                             ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"Pr"                                 ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"PresionAparato"                     ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"PresionContajeIri"                  ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"PresionIrc"                         ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"PresupuestoAltas"                   ,"size":1   ,"color":"#F0C674"} // <-----  dbo.Presupuesto_Altas_Ba
    ,{"atom":"PresupuestoCds"                     ,"size":1   ,"color":"#F0C674"} // <-----  Presupuesto_CDs
    ,{"atom":"PrimeraOcupacion"                   ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"PropIrc"                            ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"Provincia"                          ,"size":1   ,"color":"#DE935F"} // <----- 
    ,{"atom":"ProvinciaCrm"                       ,"size":1   ,"color":"#DE935F"} // <-----  Codigo_INE
    ,{"atom":"Provinciaid"                        ,"size":1   ,"color":"#DE935F"} // <-----  Relacion_CodPostal_INE
    ,{"atom":"ProvinciaNombre"                    ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"PtoSuministro"                      ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"Puerta"                             ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"PuntoDeSuministro"                  ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"Quarter"                            ,"size":1   ,"color":"#81A2BE"} // <-----  Calendario
    ,{"atom":"QuarterofYear"                      ,"size":1   ,"color":"#81A2BE"} // <-----  Calendario
    ,{"atom":"Rank"                               ,"size":1   ,"color":"#B5BD68"} // <-----  Comercializadoras
    ,{"atom":"RankPresupuesto"                    ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"RankPresupuestoGestor"              ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"RecuentoPs"                         ,"size":1   ,"color":"#B5BD68"} // <-----  Agregado_Puntos_Suministro_
    ,{"atom":"RedencionPpi"                       ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"RedencionSh"                        ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"RedencionSv"                        ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"RefCatastral"                       ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"RefCatastralParcela"                ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"Region"                             ,"size":8   ,"color":"#C5C8C6"}
    ,{"atom":"RowNumber"                          ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"SegundaOcupacion"                   ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"Seleccion"                          ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"ServicioActual"                     ,"size":4   ,"color":"#C5C8C6"}
    ,{"atom":"ServicioactualCrm"                  ,"size":1   ,"color":"#8ABEB7"} // <-----  Tipo_Obra
    ,{"atom":"ServicioactualSap"                  ,"size":1   ,"color":"#8ABEB7"} // <-----  Tipo_Obra
    ,{"atom":"ServicioactualTyrion"               ,"size":5   ,"color":"#C5C8C6"}
    ,{"atom":"SH"                                 ,"size":1   ,"color":"#F0C674"} // <-----  Presupuesto_GestorCom
    //#endregion
    //#region
    ,{"atom":"ShCc"                               ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"ShPluri"                            ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"ShUni"                              ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"SinCampana"                         ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"Sociedad"                           ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"StatusAcometida"                    ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"StatusDelSistema"                   ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"StatusIrc"                          ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"StatusIri"                          ,"size":3   ,"color":"#C5C8C6"}
    //#endregion
    //#region
    ,{"atom":"StatusSistema"                      ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"StatUsu"                            ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"StatusUsuario"                      ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"SubtipoFinca"                       ,"size":4   ,"color":"#C5C8C6"}
    ,{"atom":"SumaDeTotalAltasYtd"                ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"SumaDeTotalObjetivoAltas"           ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"SV"                                 ,"size":4   ,"color":"#C5C8C6"}
    ,{"atom":"Tarifa"                             ,"size":6   ,"color":"#C5C8C6"}
    ,{"atom":"TC"                                 ,"size":4   ,"color":"#C5C8C6"}
    ,{"atom":"Terciario"                          ,"size":1   ,"color":"#F0C674"} // <-----  Presupuesto_GestorCom
    ,{"atom":"Territoio"                          ,"size":1   ,"color":"#C5C8C6"} // <-----  Agrupacion_Territorios
    ,{"atom":"TGC"                                ,"size":4   ,"color":"#C5C8C6"}
    ,{"atom":"Tipo"                               ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"TipoDeAlta"                         ,"size":1   ,"color":"#CC6666"} // <-----  Altas_Bajas_Brutas
    ,{"atom":"TipoDeGas"                          ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"TipoDeMunicipio"                    ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"TipoFestivo"                        ,"size":1   ,"color":"#B294BB"} // <-----  Festividades
    ,{"atom":"TipoFinca"                          ,"size":6   ,"color":"#C5C8C6"}
    ,{"atom":"TipoGas"                            ,"size":7   ,"color":"#C5C8C6"}
    ,{"atom":"TipoIrc"                            ,"size":3   ,"color":"#C5C8C6"}
    ,{"atom":"TipoMunicipioTyrion"                ,"size":1   ,"color":"#DE935F"} // <-----  Codigo_INE
    ,{"atom":"TipoObra"                           ,"size":1   ,"color":"#B5BD68"} // <-----  Salesforce_InformeContratac
    ,{"atom":"TipoobraCrm"                        ,"size":1   ,"color":"#8ABEB7"} // <-----  Tipo_Obra
    ,{"atom":"TipoobraSap"                        ,"size":1   ,"color":"#8ABEB7"} // <-----  Tipo_Obra
    ,{"atom":"TipoobraTyrion"                     ,"size":5   ,"color":"#C5C8C6"}
    ,{"atom":"TipoPreci"                          ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"TipoPresupuesto"                    ,"size":1   ,"color":"#F0C674"} // <-----  dbo.Presupuesto_Altas_Ba
    ,{"atom":"TipoRetribucion"                    ,"size":1   ,"color":"#B5BD68"} // <-----  TipoRetribucion_Tarifa
    ,{"atom":"TOT"                                ,"size":5   ,"color":"#C5C8C6"}
    ,{"atom":"TOTAL"                              ,"size":1   ,"color":"#F0C674"} // <-----  Presupuesto_GestorCom
    ,{"atom":"TotalContratosYtd"                  ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"TotalEh"                            ,"size":1   ,"color":"#F0C674"} // <-----  Presupuesto_GestorCom
    ,{"atom":"TotalObjetivo"                      ,"size":1   ,"color":"#F0C674"} // <-----  Presupuestos_Gestores_Comer
    ,{"atom":"TotalPpi"                           ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"TotalSh"                            ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"UbicacionAparato"                   ,"size":2   ,"color":"#C5C8C6"}
    ,{"atom":"UsuarioCreadorDelRegistro"          ,"size":1   ,"color":"#81A2BE"} // <-----  dbo.Conversiones_Sin_C
    ,{"atom":"UsuarioQueHaModificadoElReg"        ,"size":1   ,"color":"#81A2BE"} // <-----  dbo.Conversiones_Sin_C
    ,{"atom":"Value"                              ,"size":1   ,"color":"#F0C674"} // <-----  PresupuestoCalend_Co
    ,{"atom":"Week"                               ,"size":1   ,"color":"#81A2BE"} // <-----  Calendario
    ,{"atom":"WeekEnding"                         ,"size":1   ,"color":"#81A2BE"} // <-----  Calendario
    ,{"atom":"WeekNumber"                         ,"size":1   ,"color":"#81A2BE"} // <-----  Calendario
    ,{"atom":"WeekStarting"                       ,"size":1   ,"color":"#81A2BE"} // <-----  Calendario
    ,{"atom":"Year"                               ,"size":1   ,"color":"#81A2BE"} // <-----  Calendario
    ,{"atom":"ZonaRedexis"                        ,"size":1   ,"color":"#F0C674"} // <-----  Presupuesto_GestorCom
    ,{"atom":"ZonaRg"                             ,"size":6   ,"color":"#C5C8C6"}
    ,{"atom":"ZonasAgregadas"                     ,"size":1   ,"color":"#8ABEB7"} // <-----  TipoGasificacion_Munic>>
    ,{"atom":"" ,"size":0 ,"color":"#C5C8C6"}
    /*
    "▦ bigMatrix"     "▥ bigTable"      "⦺ pieChart"       "⊞ matriz"
    "⊟ tabla"         "📈 lineGraph"    "📊 colStackGraph"  "⏲ time"           
    "⛓⛼❑⧰⧲⧮⸕🎢🢩"  "ParametricaMunicipios"                "#DE935F"
    */
    //#endregion

    
    //#region Columnas generadas en Power BI - Informe Diario
    /*
    ,{"atom":"Adquisiciones.TotalAdquisicionesYTDAñoActual"                 ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"ABB.▲#AltasBDGT"                                              ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲#AltasBDGTInorgTotal"                                    ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲#AltasNetas2018"                                         ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲#AltasNetasBDGT2019"                                     ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲#AltasNetasBDGTTotal2019"                                ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲#AltasOrganicasAñoPrevio"                                ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲#AltasOrganicasBDGT"                                     ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲#AltasOrgánicasBDGTMensual"                              ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲#AltasOrgánicasBDGTTotal"                                ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲#AltasOrgánicasBDGTTotalMensual"                         ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲#AltasOrganicasNetasAñoPrevio"                           ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲#AltasOrganicasNetasBDGT"                                ,"size":2    ,"color":"#CC6666"}
    ,{"atom":"ABB.▲#AltasOrgánicasNetasBDGTTotal"                           ,"size":2    ,"color":"#CC6666"}
    ,{"atom":"ABB.▲#BajasAñoPrevio"                                         ,"size":2    ,"color":"#CC6666"}
    ,{"atom":"ABB.▲#BajasBDGT"                                              ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲#BajasBDGTInorgTotal"                                    ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲#BajasOrganicasBDGT"                                     ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲#BajasOrgánicasBDGTTotal"                                ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲%Altas2018"                                              ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲%AltasBDGT"                                              ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲%AltasBDGTInorgTotal"                                    ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲%AltasNetas2018"                                         ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲%AltasNetas2019"                                         ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲%AltasNetasBDGTTotal2019"                                ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲%AltasOrganicasAñoPrevio"                                ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲%AltasOrgánicasAñoPrevio"                                ,"size":2    ,"color":"#CC6666"}
    ,{"atom":"ABB.▲%AltasOrganicasBDGT"                                     ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲%AltasOrgánicasBDGTMensual"                              ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲%AltasOrgánicasBDGTTotal"                                ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲%AltasOrganicasNetasAñoPrevio"                           ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲%BajasAñoPrevio"                                         ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲%BajasBDGT"                                              ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲%BajasBDGTInorgTotal"                                    ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲%BajasOrganicasAñoPrevio"                                ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲%BajasOrganicasBDGT"                                     ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲%BajasOrgánicasBDGTTotal"                                ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.▲AltasYTDVsAñoPrevio"                                     ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.Adqui.Baja"                                               ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.AltasBrutasAñoyMesActualYTD"                              ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.AltasBrutasTotalesYTDañoactual"                           ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.AltasBrutasTotalesYTDañoprevio"                           ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.AltasNetasMesyAñoActual"                                  ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.AltasNetasOrgánicasAñoActual"                             ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.AltasNetasOrgánicasAñoPrevio"                             ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.AltasNetasOrgánicasMesActual"                             ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.AltasNetasTotalesdelAñoCurso"                             ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.AltasNetasTotalesdelAñoPrevio"                            ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.AltasOrgánicasAñoPrevioMesActualYTD"                      ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.AltasOrgánicasAñoPrevioYTD"                               ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.AltasOrgánicasMesActual"                                  ,"size":4    ,"color":"#CC6666"}
    ,{"atom":"ABB.AltasOrgánicasTotalesAñoActualYTD"                        ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.BajasBrutasAñoyMesActual"                                 ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.BajasBrutasTotalesYTDañoactual"                           ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.BajasBrutasTotalesYTDañoprevio"                           ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.BajasOrgánicasMesActual"                                  ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.BajasOrgánicasTotalesAñoActual"                           ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.BajasOrgánicasTotalesAñoPrevio"                           ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.BDGTNetoProrrateado"                                      ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.BDGTNetoTotal"                                            ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.BDGTNetoTotalOrgánico"                                    ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.BDGTTotalAltasOrgInorg"                                   ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.BDGTTotalBajasOrgInorg"                                   ,"size":2    ,"color":"#CC6666"}
    ,{"atom":"ABB.BDGTTotalOrg"                                             ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.BDGTYTDOrganicoNeto"                                      ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.CarteraNeta"                                              ,"size":2    ,"color":"#CC6666"}
    ,{"atom":"ABB.Test"                                                     ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.TotalYTDAltas"                                            ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"ABB.TotalYTDAltasAñoPrevio"                                   ,"size":1    ,"color":"#CC6666"} // <-----
    ,{"atom":"Calendario.DayofMonth"                                        ,"size":4    ,"color":"#81A2BE"}
    ,{"atom":"Conversiones.TotalConversionesFinalizadasNetasYTDAñoActual"   ,"size":1    ,"color":"#81A2BE"} // <-----
    ,{"atom":"Conversiones.TotalConversionesFinalizadasYTDAñoActual"        ,"size":1    ,"color":"#81A2BE"} // <-----
    ,{"atom":"Conversiones.TotalConversionessincontratoYTD"                 ,"size":1    ,"color":"#81A2BE"} // <-----
    ,{"atom":"Historico_Cartera_AltasBa.CarteraAltasAñoCurso"               ,"size":2    ,"color":"#CC6666"}
    ,{"atom":"Historico_Cartera_AltasBa.CarteraBajasAñoCurso"               ,"size":2    ,"color":"#CC6666"}
    ,{"atom":"ParamMunic.AgrupacionZonas"                                   ,"size":8    ,"color":"#DE935F"}
    ,{"atom":"ParamMunic.MunicipiosCRM(INE)"                                ,"size":14   ,"color":"#DE935F"} // <-----
    ,{"atom":"ParamMunic.MunicipiosSAP"                                     ,"size":6    ,"color":"#DE935F"}
    ,{"atom":"ParamMunic.Provincia"                                         ,"size":6    ,"color":"#DE935F"}
    ,{"atom":"ParamMunic.ProvinciaCRM"                                      ,"size":15   ,"color":"#DE935F"} // <-----
    ,{"atom":"ParamMunic.Zonas"                                             ,"size":5    ,"color":"#DE935F"}
    ,{"atom":"Ppto_AltasOrg_Calend"                                         ,"size":1    ,"color":"#F0C674"} // <-----
    ,{"atom":"Ppto_Contr.BDGTMensual"                                       ,"size":1    ,"color":"#F0C674"} // <-----
    ,{"atom":"Ppto_Contr.BDGTMensualEH"                                     ,"size":1    ,"color":"#F0C674"} // <-----
    ,{"atom":"Ppto_Contr.BDGTMensualProrrateado"                            ,"size":1    ,"color":"#F0C674"} // <-----
    ,{"atom":"Ppto_Contr.BDGTMensualProrrateadoEH"                          ,"size":1    ,"color":"#F0C674"} // <-----
    ,{"atom":"Ppto_Contr.BDGTYTDCDs"                                        ,"size":1    ,"color":"#F0C674"} // <-----
    ,{"atom":"Ppto_Contr.BDGTYTDContrataciones"                             ,"size":1    ,"color":"#F0C674"} // <-----
    ,{"atom":"Ppto_Contr.BDGTYTDEH"                                         ,"size":1    ,"color":"#F0C674"} // <-----
    ,{"atom":"Ppto_Contr.TotalPresupuesto"                                  ,"size":1    ,"color":"#F0C674"} // <-----
    ,{"atom":"Ppto_Contr.TotalPresupuestoCDs"                               ,"size":1    ,"color":"#F0C674"} // <-----
    ,{"atom":"Ppto_Contr.TotalPresupuestoEH"                                ,"size":1    ,"color":"#F0C674"} // <-----
    ,{"atom":"PptoAltasOrg.BDGTMensualOrg"                                  ,"size":1    ,"color":"#F0C674"} // <-----
    ,{"atom":"PptoAltasOrg.BDGTMensualOrgProrrateado"                       ,"size":2    ,"color":"#F0C674"}
    ,{"atom":"PptoAltasOrg.BDGTYTDOrg"                                      ,"size":1    ,"color":"#F0C674"} // <-----
    ,{"atom":"PptoAltasOrganicas_Calendarizado.Total_BDGT_Dia"              ,"size":1    ,"color":"#F0C674"} // <-----
    ,{"atom":"PptoAltasOrgIn"                                               ,"size":1    ,"color":"#F0C674"} // <-----
    ,{"atom":"PptoAltasOrgIn.BDGTAltasYTDOrgInorg"                          ,"size":2    ,"color":"#F0C674"}
    ,{"atom":"PptoBajas.BDGTBajasYTDOrgInorg"                               ,"size":1    ,"color":"#F0C674"} // <-----
    ,{"atom":"PptoCalend_Co"                                                ,"size":1    ,"color":"#F0C674"} // <-----
    ,{"atom":"PptoCalend_Co.Total_BDGT_DiaC"                                ,"size":1    ,"color":"#F0C674"} // <-----
    ,{"atom":"PtsSumA.AgrupacionZonas"                                      ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"PtsSumA.AgrupaciónZonas"                                      ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"PtsSumA.Municipio"                                            ,"size":2    ,"color":"#B5BD68"}
    ,{"atom":"PtsSumA.Provincia"                                            ,"size":2    ,"color":"#B5BD68"}
    ,{"atom":"PtsSumA.Recuento__PS"                                         ,"size":2    ,"color":"#B5BD68"}
    ,{"atom":"SfInfCtr.▲#CDsAñoPrevio"                                      ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.▲#CDsBDGT"                                           ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.▲#CDsBDGTTotal"                                      ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.▲#ContratosAñoPrevio"                                ,"size":2    ,"color":"#B5BD68"}
    ,{"atom":"SfInfCtr.▲#ContratosAñoPrevioMensual"                         ,"size":3    ,"color":"#B5BD68"}
    ,{"atom":"SfInfCtr.▲#ContratosBDGT"                                     ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.▲#ContratosBDGTEH"                                   ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.▲#ContratosBDGTMensual"                              ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.▲#ContratosBDGTMensualEH"                            ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.▲#ContratosBDGTRealMes"                              ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.▲#ContratosBDGTRealMesEH"                            ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.▲#ContratosBDGTTotal"                                ,"size":2    ,"color":"#B5BD68"}
    ,{"atom":"SfInfCtr.▲%CDsAñoPrevio"                                      ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.▲%CDsBDGT"                                           ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.▲%CDsBDGTTotal"                                      ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.▲%ContratosAñoPrevio"                                ,"size":2    ,"color":"#B5BD68"}
    ,{"atom":"SfInfCtr.▲%ContratosAñoPrevioMensual"                         ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.▲%ContratosBDGT"                                     ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.▲%ContratosBDGTEH"                                   ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.▲%ContratosBDGTMensualEH_"                           ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.▲%ContratosBDGTTotal"                                ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.▲%ContratosBDGTTotalEH"                              ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.CDsAñoActual"                                        ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.CDsAñoPrevio"                                        ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.CDsMesActual"                                        ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.CPsAcumuladoMesActualañoprevio"                      ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.CPsAñoActual"                                        ,"size":2    ,"color":"#B5BD68"}
    ,{"atom":"SfInfCtr.CPsAñoPrevio"                                        ,"size":2    ,"color":"#B5BD68"}
    ,{"atom":"SfInfCtr.CPsMesActual"                                        ,"size":5    ,"color":"#B5BD68"}
    ,{"atom":"SfInfCtr.CPsMesActualAñoPrevio"                               ,"size":2    ,"color":"#B5BD68"}
    ,{"atom":"SfInfCtr.OportGestorComercNomComp"                            ,"size":10   ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.RitmoDiarioConsecuciónObjetivos"                     ,"size":1    ,"color":"#B5BD68"} // <-----
    ,{"atom":"SfInfCtr.TotalYTDCPs"                                         ,"size":1    ,"color":"#B5BD68"} // <-----
    */
    //#endregion
    //#region Informes Power BI - Informe Diario
    /*
    ,{"atom":"⊞-01-📝-AltasOrgánicas"             ,"size": 4            ,"color":"#C5C8C6"}
    ,{"atom":"⊞-02-📝-AltasOrgánicas"             ,"size": 15           ,"color":"#C5C8C6"} // <-----
    ,{"atom":"⊞-03-📝-AltasOrgánicas"             ,"size": 15           ,"color":"#C5C8C6"} // <-----
    ,{"atom":"⊞-04-📝-AltasOrgánicas"             ,"size": 15           ,"color":"#C5C8C6"} // <-----
    ,{"atom":"⊞-05-🔎-AltasOrgánicas"             ,"size": 5            ,"color":"#707880"}
    ,{"atom":"⊞-06-🔎-AltasOrgánicas"             ,"size": 4            ,"color":"#707880"}
    ,{"atom":"⊞-07-🔎-AltasOrgánicas"             ,"size": 12           ,"color":"#707880"} // <-----
    ,{"atom":"⊞-08-📝-AltasOrg&Inorg"             ,"size": 4            ,"color":"#C5C8C6"}
    ,{"atom":"⊞-09-📝-AltasOrg&Inorg"             ,"size": 16           ,"color":"#C5C8C6"} // <-----
    ,{"atom":"⊞-10-📝-AltasOrg&Inorg"             ,"size": 18           ,"color":"#C5C8C6"} // <-----
    ,{"atom":"⊞-11-📝-AltasOrg&Inorg"             ,"size": 17           ,"color":"#C5C8C6"} // <-----
    ,{"atom":"⊞-12-📝-Contratación"               ,"size": 5            ,"color":"#707880"}
    ,{"atom":"⊞-13-📝-Contratación"               ,"size": 14           ,"color":"#707880"} // <-----
    ,{"atom":"⊞-14-📝-Contratación"               ,"size": 5            ,"color":"#707880"}
    ,{"atom":"⊞-15-📝-Contratación"               ,"size": 14           ,"color":"#707880"} // <-----
    ,{"atom":"⊞-16-📝-Contratación"               ,"size": 5            ,"color":"#707880"}
    ,{"atom":"⊞-17-📝-Contratación"               ,"size": 14           ,"color":"#707880"} // <-----
    ,{"atom":"⊞-18-🔎-Contrataciones"             ,"size": 6            ,"color":"#C5C8C6"}
    ,{"atom":"⊞-19-🔎-Contrataciones"             ,"size": 5            ,"color":"#C5C8C6"}
    ,{"atom":"⊞-20-🔎-Contrataciones"             ,"size": 12           ,"color":"#C5C8C6"} // <-----
    ,{"atom":"⊞-21-🔎-Contrataciones"             ,"size": 13           ,"color":"#C5C8C6"} // <-----
    ,{"atom":"📈-01-🔎-AltasOrgánicas"            ,"size": 6            ,"color":"#707880"}
    ,{"atom":"📈-02-🔎-Contrataciones"            ,"size": 5            ,"color":"#C5C8C6"}
    ,{"atom":"📊-01-🔎-AltasOrgánicas"            ,"size": 5            ,"color":"#707880"}
    */
    //#endregion
  ],
  "links": [
    //#region Redshift
    {"source":0,"target":55,"bond":1}
    ,{"source":0,"target":59,"bond":1}
    ,{"source":0,"target":65,"bond":1}
    ,{"source":0,"target":80,"bond":1}
    ,{"source":0,"target":81,"bond":1}
    ,{"source":0,"target":83,"bond":1}
    ,{"source":0,"target":96,"bond":1}
    ,{"source":0,"target":98,"bond":1}
    ,{"source":0,"target":117,"bond":1}
    ,{"source":0,"target":170,"bond":1}
    ,{"source":0,"target":178,"bond":1}
    ,{"source":0,"target":219,"bond":1}
    ,{"source":0,"target":228,"bond":1}
    ,{"source":0,"target":261,"bond":1}
    ,{"source":0,"target":314,"bond":1}
    ,{"source":0,"target":317,"bond":1}
    ,{"source":0,"target":320,"bond":1}
    ,{"source":0,"target":332,"bond":1}
    ,{"source":0,"target":339,"bond":1}
    ,{"source":0,"target":362,"bond":1}
    ,{"source":0,"target":364,"bond":1}
    ,{"source":0,"target":367,"bond":1}
    ,{"source":0,"target":374,"bond":1}
    ,{"source":1,"target":41,"bond":1}
    ,{"source":1,"target":68,"bond":1}
    ,{"source":1,"target":70,"bond":1}
    ,{"source":1,"target":120,"bond":1}
    ,{"source":1,"target":173,"bond":1}
    ,{"source":1,"target":178,"bond":1}
    ,{"source":1,"target":216,"bond":1}
    ,{"source":1,"target":314,"bond":1}
    ,{"source":1,"target":326,"bond":1}
    ,{"source":1,"target":336,"bond":1}
    ,{"source":1,"target":353,"bond":1}
    ,{"source":1,"target":357,"bond":1}
    ,{"source":1,"target":367,"bond":1}
    ,{"source":1,"target":368,"bond":1}
    ,{"source":2,"target":314,"bond":1}
    ,{"source":2,"target":360,"bond":1}
    ,{"source":3,"target":37,"bond":1}
    ,{"source":3,"target":39,"bond":1}
    ,{"source":3,"target":40,"bond":1}
    ,{"source":3,"target":42,"bond":1}
    ,{"source":3,"target":48,"bond":1}
    ,{"source":3,"target":49,"bond":1}
    ,{"source":3,"target":59,"bond":1}
    ,{"source":3,"target":61,"bond":1}
    ,{"source":3,"target":68,"bond":1}
    ,{"source":3,"target":77,"bond":1}
    ,{"source":3,"target":78,"bond":1}
    ,{"source":3,"target":83,"bond":1}
    ,{"source":3,"target":99,"bond":1}
    ,{"source":3,"target":103,"bond":1}
    ,{"source":3,"target":116,"bond":1}
    ,{"source":3,"target":118,"bond":1}
    ,{"source":3,"target":119,"bond":1}
    ,{"source":3,"target":126,"bond":1}
    ,{"source":3,"target":133,"bond":1}
    ,{"source":3,"target":140,"bond":1}
    ,{"source":3,"target":171,"bond":1}
    ,{"source":3,"target":178,"bond":1}
    ,{"source":3,"target":195,"bond":1}
    ,{"source":3,"target":219,"bond":1}
    ,{"source":3,"target":221,"bond":1}
    ,{"source":3,"target":222,"bond":1}
    ,{"source":3,"target":244,"bond":1}
    ,{"source":3,"target":251,"bond":1}
    ,{"source":3,"target":261,"bond":1}
    ,{"source":3,"target":314,"bond":1}
    ,{"source":3,"target":332,"bond":1}
    ,{"source":3,"target":335,"bond":1}
    ,{"source":3,"target":339,"bond":1}
    ,{"source":3,"target":345,"bond":1}
    ,{"source":3,"target":350,"bond":1}
    ,{"source":3,"target":352,"bond":1}
    ,{"source":3,"target":357,"bond":1}
    ,{"source":3,"target":362,"bond":1}
    ,{"source":3,"target":363,"bond":1}
    ,{"source":3,"target":367,"bond":1}
    ,{"source":3,"target":374,"bond":1}
    ,{"source":4,"target":85,"bond":1}
    ,{"source":4,"target":86,"bond":1}
    ,{"source":4,"target":87,"bond":1}
    ,{"source":4,"target":88,"bond":1}
    ,{"source":4,"target":176,"bond":1}
    ,{"source":4,"target":177,"bond":1}
    ,{"source":4,"target":252,"bond":1}
    ,{"source":4,"target":321,"bond":1}
    ,{"source":4,"target":322,"bond":1}
    ,{"source":4,"target":389,"bond":1}
    ,{"source":4,"target":390,"bond":1}
    ,{"source":4,"target":391,"bond":1}
    ,{"source":4,"target":392,"bond":1}
    ,{"source":4,"target":393,"bond":1}
    ,{"source":5,"target":48,"bond":1}
    ,{"source":5,"target":59,"bond":1}
    ,{"source":5,"target":65,"bond":1}
    ,{"source":5,"target":70,"bond":1}
    ,{"source":5,"target":90,"bond":1}
    ,{"source":5,"target":91,"bond":1}
    ,{"source":5,"target":111,"bond":1}
    ,{"source":5,"target":121,"bond":1}
    ,{"source":5,"target":161,"bond":1}
    ,{"source":5,"target":172,"bond":1}
    ,{"source":5,"target":178,"bond":1}
    ,{"source":5,"target":251,"bond":1}
    ,{"source":5,"target":261,"bond":1}
    ,{"source":5,"target":306,"bond":1}
    ,{"source":5,"target":317,"bond":1}
    ,{"source":5,"target":332,"bond":1}
    ,{"source":5,"target":347,"bond":1}
    ,{"source":5,"target":351,"bond":1}
    ,{"source":6,"target":38,"bond":1}
    ,{"source":6,"target":59,"bond":1}
    ,{"source":6,"target":60,"bond":1}
    ,{"source":6,"target":66,"bond":1}
    ,{"source":6,"target":70,"bond":1}
    ,{"source":6,"target":129,"bond":1}
    ,{"source":6,"target":134,"bond":1}
    ,{"source":6,"target":167,"bond":1}
    ,{"source":6,"target":180,"bond":1}
    ,{"source":6,"target":181,"bond":1}
    ,{"source":6,"target":314,"bond":1}
    ,{"source":6,"target":315,"bond":1}
    ,{"source":6,"target":365,"bond":1}
    ,{"source":6,"target":370,"bond":1}
    ,{"source":7,"target":96,"bond":1}
    ,{"source":7,"target":224,"bond":1}
    ,{"source":7,"target":323,"bond":1}
    ,{"source":8,"target":55,"bond":1}
    ,{"source":8,"target":59,"bond":1}
    ,{"source":8,"target":65,"bond":1}
    ,{"source":8,"target":83,"bond":1}
    ,{"source":8,"target":109,"bond":1}
    ,{"source":8,"target":123,"bond":1}
    ,{"source":8,"target":140,"bond":1}
    ,{"source":8,"target":175,"bond":1}
    ,{"source":8,"target":178,"bond":1}
    ,{"source":8,"target":219,"bond":1}
    ,{"source":8,"target":226,"bond":1}
    ,{"source":8,"target":251,"bond":1}
    ,{"source":8,"target":314,"bond":1}
    ,{"source":8,"target":332,"bond":1}
    ,{"source":8,"target":339,"bond":1}
    ,{"source":8,"target":362,"bond":1}
    ,{"source":8,"target":364,"bond":1}
    ,{"source":8,"target":368,"bond":1}
    ,{"source":8,"target":374,"bond":1}
    ,{"source":9,"target":48,"bond":1}
    ,{"source":9,"target":55,"bond":1}
    ,{"source":9,"target":59,"bond":1}
    ,{"source":9,"target":65,"bond":1}
    ,{"source":9,"target":70,"bond":1}
    ,{"source":9,"target":83,"bond":1}
    ,{"source":9,"target":109,"bond":1}
    ,{"source":9,"target":110,"bond":1}
    ,{"source":9,"target":124,"bond":1}
    ,{"source":9,"target":125,"bond":1}
    ,{"source":9,"target":136,"bond":1}
    ,{"source":9,"target":138,"bond":1}
    ,{"source":9,"target":139,"bond":1}
    ,{"source":9,"target":140,"bond":1}
    ,{"source":9,"target":162,"bond":1}
    ,{"source":9,"target":178,"bond":1}
    ,{"source":9,"target":182,"bond":1}
    ,{"source":9,"target":219,"bond":1}
    ,{"source":9,"target":226,"bond":1}
    ,{"source":9,"target":251,"bond":1}
    ,{"source":9,"target":314,"bond":1}
    ,{"source":9,"target":320,"bond":1}
    ,{"source":9,"target":332,"bond":1}
    ,{"source":9,"target":339,"bond":1}
    ,{"source":9,"target":345,"bond":1}
    ,{"source":9,"target":364,"bond":1}
    ,{"source":9,"target":368,"bond":1}
    ,{"source":9,"target":374,"bond":1}
    ,{"source":9,"target":386,"bond":1}
    ,{"source":9,"target":387,"bond":1}
    ,{"source":10,"target":93,"bond":1}
    ,{"source":10,"target":101,"bond":1}
    ,{"source":10,"target":102,"bond":1}
    ,{"source":10,"target":116,"bond":1}
    ,{"source":10,"target":169,"bond":1}
    ,{"source":11,"target":169,"bond":1}
    ,{"source":11,"target":310,"bond":1}
    ,{"source":11,"target":332,"bond":1}
    ,{"source":11,"target":376,"bond":1}
    ,{"source":12,"target":45,"bond":1}
    ,{"source":12,"target":127,"bond":1}
    ,{"source":12,"target":141,"bond":1}
    ,{"source":12,"target":366,"bond":1}
    ,{"source":13,"target":48,"bond":1}
    ,{"source":13,"target":59,"bond":1}
    ,{"source":13,"target":65,"bond":1}
    ,{"source":13,"target":70,"bond":1}
    ,{"source":13,"target":90,"bond":1}
    ,{"source":13,"target":91,"bond":1}
    ,{"source":13,"target":111,"bond":1}
    ,{"source":13,"target":121,"bond":1}
    ,{"source":13,"target":161,"bond":1}
    ,{"source":13,"target":172,"bond":1}
    ,{"source":13,"target":178,"bond":1}
    ,{"source":13,"target":251,"bond":1}
    ,{"source":13,"target":261,"bond":1}
    ,{"source":13,"target":306,"bond":1}
    ,{"source":13,"target":317,"bond":1}
    ,{"source":13,"target":332,"bond":1}
    ,{"source":13,"target":347,"bond":1}
    ,{"source":13,"target":351,"bond":1}
    ,{"source":14,"target":32,"bond":1}
    ,{"source":14,"target":33,"bond":1}
    ,{"source":14,"target":34,"bond":1}
    ,{"source":14,"target":35,"bond":1}
    ,{"source":14,"target":36,"bond":1}
    ,{"source":14,"target":51,"bond":1}
    ,{"source":14,"target":56,"bond":1}
    ,{"source":14,"target":57,"bond":1}
    ,{"source":14,"target":63,"bond":1}
    ,{"source":14,"target":64,"bond":1}
    ,{"source":14,"target":65,"bond":1}
    ,{"source":14,"target":68,"bond":1}
    ,{"source":14,"target":69,"bond":1}
    ,{"source":14,"target":70,"bond":1}
    ,{"source":14,"target":76,"bond":1}
    ,{"source":14,"target":83,"bond":1}
    ,{"source":14,"target":84,"bond":1}
    ,{"source":14,"target":89,"bond":1}
    ,{"source":14,"target":92,"bond":1}
    ,{"source":14,"target":100,"bond":1}
    ,{"source":14,"target":108,"bond":1}
    ,{"source":14,"target":112,"bond":1}
    ,{"source":14,"target":113,"bond":1}
    ,{"source":14,"target":114,"bond":1}
    ,{"source":14,"target":115,"bond":1}
    ,{"source":14,"target":128,"bond":1}
    ,{"source":14,"target":131,"bond":1}
    ,{"source":14,"target":132,"bond":1}
    ,{"source":14,"target":135,"bond":1}
    ,{"source":14,"target":137,"bond":1}
    ,{"source":14,"target":142,"bond":1}
    ,{"source":14,"target":143,"bond":1}
    ,{"source":14,"target":158,"bond":1}
    ,{"source":14,"target":163,"bond":1}
    ,{"source":14,"target":164,"bond":1}
    ,{"source":14,"target":165,"bond":1}
    ,{"source":14,"target":178,"bond":1}
    ,{"source":14,"target":216,"bond":1}
    ,{"source":14,"target":220,"bond":1}
    ,{"source":14,"target":225,"bond":1}
    ,{"source":14,"target":227,"bond":1}
    ,{"source":14,"target":229,"bond":1}
    ,{"source":14,"target":230,"bond":1}
    ,{"source":14,"target":253,"bond":1}
    ,{"source":14,"target":260,"bond":1}
    ,{"source":14,"target":261,"bond":1}
    ,{"source":14,"target":263,"bond":1}
    ,{"source":14,"target":307,"bond":1}
    ,{"source":14,"target":308,"bond":1}
    ,{"source":14,"target":309,"bond":1}
    ,{"source":14,"target":313,"bond":1}
    ,{"source":14,"target":314,"bond":1}
    ,{"source":14,"target":318,"bond":1}
    ,{"source":14,"target":319,"bond":1}
    ,{"source":14,"target":330,"bond":1}
    ,{"source":14,"target":331,"bond":1}
    ,{"source":14,"target":333,"bond":1}
    ,{"source":14,"target":336,"bond":1}
    ,{"source":14,"target":346,"bond":1}
    ,{"source":14,"target":348,"bond":1}
    ,{"source":14,"target":349,"bond":1}
    ,{"source":14,"target":353,"bond":1}
    ,{"source":14,"target":357,"bond":1}
    ,{"source":14,"target":367,"bond":1}
    ,{"source":14,"target":368,"bond":1}
    ,{"source":14,"target":369,"bond":1}
    ,{"source":14,"target":375,"bond":1}
    ,{"source":14,"target":385,"bond":1}
    ,{"source":15,"target":32,"bond":1}
    ,{"source":15,"target":33,"bond":1}
    ,{"source":15,"target":34,"bond":1}
    ,{"source":15,"target":35,"bond":1}
    ,{"source":15,"target":36,"bond":1}
    ,{"source":15,"target":51,"bond":1}
    ,{"source":15,"target":56,"bond":1}
    ,{"source":15,"target":57,"bond":1}
    ,{"source":15,"target":63,"bond":1}
    ,{"source":15,"target":64,"bond":1}
    ,{"source":15,"target":65,"bond":1}
    ,{"source":15,"target":68,"bond":1}
    ,{"source":15,"target":70,"bond":1}
    ,{"source":15,"target":76,"bond":1}
    ,{"source":15,"target":83,"bond":1}
    ,{"source":15,"target":84,"bond":1}
    ,{"source":15,"target":89,"bond":1}
    ,{"source":15,"target":92,"bond":1}
    ,{"source":15,"target":100,"bond":1}
    ,{"source":15,"target":108,"bond":1}
    ,{"source":15,"target":112,"bond":1}
    ,{"source":15,"target":113,"bond":1}
    ,{"source":15,"target":114,"bond":1}
    ,{"source":15,"target":115,"bond":1}
    ,{"source":15,"target":128,"bond":1}
    ,{"source":15,"target":131,"bond":1}
    ,{"source":15,"target":132,"bond":1}
    ,{"source":15,"target":135,"bond":1}
    ,{"source":15,"target":137,"bond":1}
    ,{"source":15,"target":142,"bond":1}
    ,{"source":15,"target":143,"bond":1}
    ,{"source":15,"target":158,"bond":1}
    ,{"source":15,"target":163,"bond":1}
    ,{"source":15,"target":164,"bond":1}
    ,{"source":15,"target":165,"bond":1}
    ,{"source":15,"target":178,"bond":1}
    ,{"source":15,"target":216,"bond":1}
    ,{"source":15,"target":220,"bond":1}
    ,{"source":15,"target":225,"bond":1}
    ,{"source":15,"target":227,"bond":1}
    ,{"source":15,"target":229,"bond":1}
    ,{"source":15,"target":230,"bond":1}
    ,{"source":15,"target":253,"bond":1}
    ,{"source":15,"target":260,"bond":1}
    ,{"source":15,"target":261,"bond":1}
    ,{"source":15,"target":263,"bond":1}
    ,{"source":15,"target":307,"bond":1}
    ,{"source":15,"target":308,"bond":1}
    ,{"source":15,"target":309,"bond":1}
    ,{"source":15,"target":313,"bond":1}
    ,{"source":15,"target":314,"bond":1}
    ,{"source":15,"target":318,"bond":1}
    ,{"source":15,"target":319,"bond":1}
    ,{"source":15,"target":330,"bond":1}
    ,{"source":15,"target":331,"bond":1}
    ,{"source":15,"target":333,"bond":1}
    ,{"source":15,"target":336,"bond":1}
    ,{"source":15,"target":346,"bond":1}
    ,{"source":15,"target":348,"bond":1}
    ,{"source":15,"target":349,"bond":1}
    ,{"source":15,"target":353,"bond":1}
    ,{"source":15,"target":357,"bond":1}
    ,{"source":15,"target":367,"bond":1}
    ,{"source":15,"target":368,"bond":1}
    ,{"source":15,"target":369,"bond":1}
    ,{"source":15,"target":375,"bond":1}
    ,{"source":15,"target":385,"bond":1}
    ,{"source":16,"target":63,"bond":1}
    ,{"source":16,"target":83,"bond":1}
    ,{"source":16,"target":115,"bond":1}
    ,{"source":16,"target":333,"bond":1}
    ,{"source":17,"target":59,"bond":1}
    ,{"source":17,"target":178,"bond":1}
    ,{"source":17,"target":184,"bond":1}
    ,{"source":17,"target":185,"bond":1}
    ,{"source":17,"target":186,"bond":1}
    ,{"source":17,"target":187,"bond":1}
    ,{"source":17,"target":188,"bond":1}
    ,{"source":17,"target":189,"bond":1}
    ,{"source":17,"target":190,"bond":1}
    ,{"source":17,"target":191,"bond":1}
    ,{"source":17,"target":192,"bond":1}
    ,{"source":17,"target":193,"bond":1}
    ,{"source":17,"target":194,"bond":1}
    ,{"source":17,"target":196,"bond":1}
    ,{"source":17,"target":197,"bond":1}
    ,{"source":17,"target":198,"bond":1}
    ,{"source":17,"target":199,"bond":1}
    ,{"source":17,"target":200,"bond":1}
    ,{"source":17,"target":201,"bond":1}
    ,{"source":17,"target":202,"bond":1}
    ,{"source":17,"target":203,"bond":1}
    ,{"source":17,"target":204,"bond":1}
    ,{"source":17,"target":205,"bond":1}
    ,{"source":17,"target":206,"bond":1}
    ,{"source":17,"target":207,"bond":1}
    ,{"source":17,"target":208,"bond":1}
    ,{"source":17,"target":209,"bond":1}
    ,{"source":17,"target":210,"bond":1}
    ,{"source":17,"target":211,"bond":1}
    ,{"source":17,"target":212,"bond":1}
    ,{"source":17,"target":213,"bond":1}
    ,{"source":17,"target":214,"bond":1}
    ,{"source":17,"target":215,"bond":1}
    ,{"source":17,"target":314,"bond":1}
    ,{"source":17,"target":378,"bond":1}
    ,{"source":17,"target":395,"bond":1}
    ,{"source":18,"target":169,"bond":1}
    ,{"source":18,"target":311,"bond":1}
    ,{"source":18,"target":332,"bond":1}
    ,{"source":19,"target":59,"bond":1}
    ,{"source":19,"target":59,"bond":1}
    ,{"source":19,"target":159,"bond":1}
    ,{"source":19,"target":169,"bond":1}
    ,{"source":19,"target":178,"bond":1}
    ,{"source":19,"target":178,"bond":1}
    ,{"source":19,"target":184,"bond":1}
    ,{"source":19,"target":185,"bond":1}
    ,{"source":19,"target":186,"bond":1}
    ,{"source":19,"target":187,"bond":1}
    ,{"source":19,"target":188,"bond":1}
    ,{"source":19,"target":189,"bond":1}
    ,{"source":19,"target":190,"bond":1}
    ,{"source":19,"target":191,"bond":1}
    ,{"source":19,"target":192,"bond":1}
    ,{"source":19,"target":193,"bond":1}
    ,{"source":19,"target":194,"bond":1}
    ,{"source":19,"target":196,"bond":1}
    ,{"source":19,"target":197,"bond":1}
    ,{"source":19,"target":198,"bond":1}
    ,{"source":19,"target":199,"bond":1}
    ,{"source":19,"target":200,"bond":1}
    ,{"source":19,"target":201,"bond":1}
    ,{"source":19,"target":202,"bond":1}
    ,{"source":19,"target":203,"bond":1}
    ,{"source":19,"target":204,"bond":1}
    ,{"source":19,"target":205,"bond":1}
    ,{"source":19,"target":206,"bond":1}
    ,{"source":19,"target":207,"bond":1}
    ,{"source":19,"target":208,"bond":1}
    ,{"source":19,"target":209,"bond":1}
    ,{"source":19,"target":210,"bond":1}
    ,{"source":19,"target":211,"bond":1}
    ,{"source":19,"target":212,"bond":1}
    ,{"source":19,"target":213,"bond":1}
    ,{"source":19,"target":214,"bond":1}
    ,{"source":19,"target":215,"bond":1}
    ,{"source":19,"target":235,"bond":1}
    ,{"source":19,"target":303,"bond":1}
    ,{"source":19,"target":304,"bond":1}
    ,{"source":19,"target":305,"bond":1}
    ,{"source":19,"target":314,"bond":1}
    ,{"source":19,"target":314,"bond":1}
    ,{"source":19,"target":341,"bond":1}
    ,{"source":19,"target":342,"bond":1}
    ,{"source":19,"target":343,"bond":1}
    ,{"source":19,"target":356,"bond":1}
    ,{"source":19,"target":358,"bond":1}
    ,{"source":19,"target":361,"bond":1}
    ,{"source":19,"target":378,"bond":1}
    ,{"source":19,"target":395,"bond":1}
    ,{"source":19,"target":395,"bond":1}
    ,{"source":20,"target":58,"bond":1}
    ,{"source":20,"target":144,"bond":1}
    ,{"source":20,"target":178,"bond":1}
    ,{"source":20,"target":235,"bond":1}
    ,{"source":20,"target":302,"bond":1}
    ,{"source":20,"target":340,"bond":1}
    ,{"source":20,"target":356,"bond":1}
    ,{"source":20,"target":359,"bond":1}
    ,{"source":20,"target":379,"bond":1}
    ,{"source":20,"target":381,"bond":1}
    ,{"source":20,"target":394,"bond":1}
    ,{"source":21,"target":59,"bond":1}
    ,{"source":21,"target":71,"bond":1}
    ,{"source":21,"target":104,"bond":1}
    ,{"source":21,"target":105,"bond":1}
    ,{"source":21,"target":106,"bond":1}
    ,{"source":21,"target":107,"bond":1}
    ,{"source":21,"target":146,"bond":1}
    ,{"source":21,"target":148,"bond":1}
    ,{"source":21,"target":159,"bond":1}
    ,{"source":21,"target":169,"bond":1}
    ,{"source":21,"target":178,"bond":1}
    ,{"source":21,"target":235,"bond":1}
    ,{"source":21,"target":303,"bond":1}
    ,{"source":21,"target":304,"bond":1}
    ,{"source":21,"target":305,"bond":1}
    ,{"source":21,"target":312,"bond":1}
    ,{"source":21,"target":314,"bond":1}
    ,{"source":21,"target":334,"bond":1}
    ,{"source":21,"target":341,"bond":1}
    ,{"source":21,"target":342,"bond":1}
    ,{"source":21,"target":343,"bond":1}
    ,{"source":21,"target":344,"bond":1}
    ,{"source":21,"target":356,"bond":1}
    ,{"source":21,"target":358,"bond":1}
    ,{"source":21,"target":361,"bond":1}
    ,{"source":21,"target":378,"bond":1}
    ,{"source":21,"target":383,"bond":1}
    ,{"source":21,"target":384,"bond":1}
    ,{"source":21,"target":395,"bond":1}
    ,{"source":22,"target":59,"bond":1}
    ,{"source":22,"target":71,"bond":1}
    ,{"source":22,"target":104,"bond":1}
    ,{"source":22,"target":105,"bond":1}
    ,{"source":22,"target":106,"bond":1}
    ,{"source":22,"target":107,"bond":1}
    ,{"source":22,"target":146,"bond":1}
    ,{"source":22,"target":148,"bond":1}
    ,{"source":22,"target":159,"bond":1}
    ,{"source":22,"target":169,"bond":1}
    ,{"source":22,"target":178,"bond":1}
    ,{"source":22,"target":235,"bond":1}
    ,{"source":22,"target":303,"bond":1}
    ,{"source":22,"target":304,"bond":1}
    ,{"source":22,"target":305,"bond":1}
    ,{"source":22,"target":312,"bond":1}
    ,{"source":22,"target":314,"bond":1}
    ,{"source":22,"target":334,"bond":1}
    ,{"source":22,"target":341,"bond":1}
    ,{"source":22,"target":342,"bond":1}
    ,{"source":22,"target":343,"bond":1}
    ,{"source":22,"target":344,"bond":1}
    ,{"source":22,"target":356,"bond":1}
    ,{"source":22,"target":358,"bond":1}
    ,{"source":22,"target":361,"bond":1}
    ,{"source":22,"target":378,"bond":1}
    ,{"source":22,"target":383,"bond":1}
    ,{"source":22,"target":384,"bond":1}
    ,{"source":22,"target":395,"bond":1}
    ,{"source":23,"target":59,"bond":1}
    ,{"source":23,"target":95,"bond":1}
    ,{"source":23,"target":147,"bond":1}
    ,{"source":23,"target":149,"bond":1}
    ,{"source":23,"target":150,"bond":1}
    ,{"source":23,"target":151,"bond":1}
    ,{"source":23,"target":152,"bond":1}
    ,{"source":23,"target":153,"bond":1}
    ,{"source":23,"target":154,"bond":1}
    ,{"source":23,"target":155,"bond":1}
    ,{"source":23,"target":159,"bond":1}
    ,{"source":23,"target":169,"bond":1}
    ,{"source":23,"target":178,"bond":1}
    ,{"source":23,"target":235,"bond":1}
    ,{"source":23,"target":314,"bond":1}
    ,{"source":23,"target":358,"bond":1}
    ,{"source":23,"target":361,"bond":1}
    ,{"source":23,"target":378,"bond":1}
    ,{"source":23,"target":395,"bond":1}
    ,{"source":24,"target":93,"bond":1}
    ,{"source":24,"target":116,"bond":1}
    ,{"source":24,"target":169,"bond":1}
    ,{"source":24,"target":388,"bond":1}
    ,{"source":25,"target":72,"bond":1}
    ,{"source":25,"target":73,"bond":1}
    ,{"source":25,"target":74,"bond":1}
    ,{"source":25,"target":75,"bond":1}
    ,{"source":25,"target":145,"bond":1}
    ,{"source":25,"target":178,"bond":1}
    ,{"source":25,"target":231,"bond":1}
    ,{"source":25,"target":232,"bond":1}
    ,{"source":25,"target":233,"bond":1}
    ,{"source":25,"target":234,"bond":1}
    ,{"source":25,"target":254,"bond":1}
    ,{"source":25,"target":255,"bond":1}
    ,{"source":25,"target":256,"bond":1}
    ,{"source":25,"target":257,"bond":1}
    ,{"source":25,"target":258,"bond":1}
    ,{"source":25,"target":259,"bond":1}
    ,{"source":25,"target":327,"bond":1}
    ,{"source":25,"target":328,"bond":1}
    ,{"source":25,"target":329,"bond":1}
    ,{"source":25,"target":354,"bond":1}
    ,{"source":25,"target":355,"bond":1}
    ,{"source":25,"target":380,"bond":1}
    ,{"source":25,"target":382,"bond":1}
    ,{"source":26,"target":35,"bond":1}
    ,{"source":26,"target":36,"bond":1}
    ,{"source":26,"target":56,"bond":1}
    ,{"source":26,"target":63,"bond":1}
    ,{"source":26,"target":64,"bond":1}
    ,{"source":26,"target":65,"bond":1}
    ,{"source":26,"target":70,"bond":1}
    ,{"source":26,"target":83,"bond":1}
    ,{"source":26,"target":84,"bond":1}
    ,{"source":26,"target":92,"bond":1}
    ,{"source":26,"target":108,"bond":1}
    ,{"source":26,"target":112,"bond":1}
    ,{"source":26,"target":113,"bond":1}
    ,{"source":26,"target":114,"bond":1}
    ,{"source":26,"target":115,"bond":1}
    ,{"source":26,"target":128,"bond":1}
    ,{"source":26,"target":135,"bond":1}
    ,{"source":26,"target":137,"bond":1}
    ,{"source":26,"target":142,"bond":1}
    ,{"source":26,"target":143,"bond":1}
    ,{"source":26,"target":158,"bond":1}
    ,{"source":26,"target":164,"bond":1}
    ,{"source":26,"target":165,"bond":1}
    ,{"source":26,"target":178,"bond":1}
    ,{"source":26,"target":216,"bond":1}
    ,{"source":26,"target":225,"bond":1}
    ,{"source":26,"target":227,"bond":1}
    ,{"source":26,"target":253,"bond":1}
    ,{"source":26,"target":261,"bond":1}
    ,{"source":26,"target":313,"bond":1}
    ,{"source":26,"target":314,"bond":1}
    ,{"source":26,"target":318,"bond":1}
    ,{"source":26,"target":330,"bond":1}
    ,{"source":26,"target":331,"bond":1}
    ,{"source":26,"target":336,"bond":1}
    ,{"source":26,"target":346,"bond":1}
    ,{"source":26,"target":348,"bond":1}
    ,{"source":26,"target":349,"bond":1}
    ,{"source":26,"target":353,"bond":1}
    ,{"source":26,"target":357,"bond":1}
    ,{"source":26,"target":367,"bond":1}
    ,{"source":26,"target":368,"bond":1}
    ,{"source":26,"target":369,"bond":1}
    ,{"source":27,"target":59,"bond":1}
    ,{"source":27,"target":62,"bond":1}
    ,{"source":27,"target":160,"bond":1}
    ,{"source":27,"target":166,"bond":1}
    ,{"source":27,"target":168,"bond":1}
    ,{"source":27,"target":261,"bond":1}
    ,{"source":27,"target":262,"bond":1}
    ,{"source":27,"target":314,"bond":1}
    ,{"source":27,"target":316,"bond":1}
    ,{"source":28,"target":38,"bond":1}
    ,{"source":28,"target":43,"bond":1}
    ,{"source":28,"target":44,"bond":1}
    ,{"source":28,"target":46,"bond":1}
    ,{"source":28,"target":47,"bond":1}
    ,{"source":28,"target":50,"bond":1}
    ,{"source":28,"target":52,"bond":1}
    ,{"source":28,"target":53,"bond":1}
    ,{"source":28,"target":54,"bond":1}
    ,{"source":28,"target":79,"bond":1}
    ,{"source":28,"target":82,"bond":1}
    ,{"source":28,"target":94,"bond":1}
    ,{"source":28,"target":97,"bond":1}
    ,{"source":28,"target":122,"bond":1}
    ,{"source":28,"target":174,"bond":1}
    ,{"source":28,"target":179,"bond":1}
    ,{"source":28,"target":183,"bond":1}
    ,{"source":28,"target":223,"bond":1}
    ,{"source":28,"target":236,"bond":1}
    ,{"source":28,"target":237,"bond":1}
    ,{"source":28,"target":238,"bond":1}
    ,{"source":28,"target":239,"bond":1}
    ,{"source":28,"target":240,"bond":1}
    ,{"source":28,"target":241,"bond":1}
    ,{"source":28,"target":242,"bond":1}
    ,{"source":28,"target":243,"bond":1}
    ,{"source":28,"target":245,"bond":1}
    ,{"source":28,"target":246,"bond":1}
    ,{"source":28,"target":247,"bond":1}
    ,{"source":28,"target":248,"bond":1}
    ,{"source":28,"target":249,"bond":1}
    ,{"source":28,"target":250,"bond":1}
    ,{"source":28,"target":264,"bond":1}
    ,{"source":28,"target":265,"bond":1}
    ,{"source":28,"target":266,"bond":1}
    ,{"source":28,"target":267,"bond":1}
    ,{"source":28,"target":268,"bond":1}
    ,{"source":28,"target":269,"bond":1}
    ,{"source":28,"target":270,"bond":1}
    ,{"source":28,"target":271,"bond":1}
    ,{"source":28,"target":272,"bond":1}
    ,{"source":28,"target":273,"bond":1}
    ,{"source":28,"target":274,"bond":1}
    ,{"source":28,"target":275,"bond":1}
    ,{"source":28,"target":276,"bond":1}
    ,{"source":28,"target":277,"bond":1}
    ,{"source":28,"target":278,"bond":1}
    ,{"source":28,"target":279,"bond":1}
    ,{"source":28,"target":280,"bond":1}
    ,{"source":28,"target":281,"bond":1}
    ,{"source":28,"target":282,"bond":1}
    ,{"source":28,"target":283,"bond":1}
    ,{"source":28,"target":284,"bond":1}
    ,{"source":28,"target":285,"bond":1}
    ,{"source":28,"target":286,"bond":1}
    ,{"source":28,"target":287,"bond":1}
    ,{"source":28,"target":288,"bond":1}
    ,{"source":28,"target":289,"bond":1}
    ,{"source":28,"target":290,"bond":1}
    ,{"source":28,"target":291,"bond":1}
    ,{"source":28,"target":292,"bond":1}
    ,{"source":28,"target":293,"bond":1}
    ,{"source":28,"target":294,"bond":1}
    ,{"source":28,"target":295,"bond":1}
    ,{"source":28,"target":296,"bond":1}
    ,{"source":28,"target":297,"bond":1}
    ,{"source":28,"target":298,"bond":1}
    ,{"source":28,"target":299,"bond":1}
    ,{"source":28,"target":300,"bond":1}
    ,{"source":28,"target":301,"bond":1}
    ,{"source":28,"target":324,"bond":1}
    ,{"source":28,"target":325,"bond":1}
    ,{"source":28,"target":371,"bond":1}
    ,{"source":29,"target":83,"bond":1}
    ,{"source":29,"target":217,"bond":1}
    ,{"source":29,"target":218,"bond":1}
    ,{"source":29,"target":219,"bond":1}
    ,{"source":29,"target":337,"bond":1}
    ,{"source":29,"target":338,"bond":1}
    ,{"source":29,"target":339,"bond":1}
    ,{"source":29,"target":372,"bond":1}
    ,{"source":29,"target":373,"bond":1}
    ,{"source":29,"target":374,"bond":1}
    ,{"source":30,"target":59,"bond":1}
    ,{"source":30,"target":70,"bond":1}
    ,{"source":30,"target":130,"bond":1}
    ,{"source":30,"target":134,"bond":1}
    ,{"source":30,"target":181,"bond":1}
    ,{"source":30,"target":314,"bond":1}
    ,{"source":30,"target":365,"bond":1}
    ,{"source":30,"target":396,"bond":1}
    ,{"source":31,"target":67,"bond":1}
    ,{"source":31,"target":156,"bond":1}
    ,{"source":31,"target":157,"bond":1}
    ,{"source":31,"target":357,"bond":1}
    ,{"source":31,"target":368,"bond":1}
    ,{"source":31,"target":377,"bond":1}
    //#endregion
    //#region Power BI (10-)  -Informe Diario
    /*
    ,{"source":509,"target":546,"bond":2}
    ,{"source":510,"target":546,"bond":2}
    ,{"source":511,"target":546,"bond":2}
    ,{"source":512,"target":546,"bond":2}
    ,{"source":418,"target":547,"bond":2}
    ,{"source":419,"target":547,"bond":2}
    ,{"source":419,"target":547,"bond":2}
    ,{"source":420,"target":547,"bond":2}
    ,{"source":420,"target":547,"bond":2}
    ,{"source":437,"target":547,"bond":2}
    ,{"source":450,"target":547,"bond":2}
    ,{"source":451,"target":547,"bond":2}
    ,{"source":452,"target":547,"bond":2}
    ,{"source":467,"target":547,"bond":2}
    ,{"source":471,"target":547,"bond":2}
    ,{"source":472,"target":547,"bond":2}
    ,{"source":482,"target":547,"bond":2}
    ,{"source":484,"target":547,"bond":2}
    ,{"source":485,"target":547,"bond":2}
    ,{"source":413,"target":548,"bond":2}
    ,{"source":414,"target":548,"bond":2}
    ,{"source":416,"target":548,"bond":2}
    ,{"source":432,"target":548,"bond":2}
    ,{"source":434,"target":548,"bond":2}
    ,{"source":436,"target":548,"bond":2}
    ,{"source":456,"target":548,"bond":2}
    ,{"source":457,"target":548,"bond":2}
    ,{"source":458,"target":548,"bond":2}
    ,{"source":470,"target":548,"bond":2}
    ,{"source":480,"target":548,"bond":2}
    ,{"source":482,"target":548,"bond":2}
    ,{"source":484,"target":548,"bond":2}
    ,{"source":485,"target":548,"bond":2}
    ,{"source":501,"target":548,"bond":2}
    ,{"source":421,"target":549,"bond":2}
    ,{"source":424,"target":549,"bond":2}
    ,{"source":425,"target":549,"bond":2}
    ,{"source":441,"target":549,"bond":2}
    ,{"source":442,"target":549,"bond":2}
    ,{"source":443,"target":549,"bond":2}
    ,{"source":462,"target":549,"bond":2}
    ,{"source":463,"target":549,"bond":2}
    ,{"source":464,"target":549,"bond":2}
    ,{"source":469,"target":549,"bond":2}
    ,{"source":481,"target":549,"bond":2}
    ,{"source":482,"target":549,"bond":2}
    ,{"source":484,"target":549,"bond":2}
    ,{"source":485,"target":549,"bond":2}
    ,{"source":505,"target":549,"bond":2}
    ,{"source":457,"target":550,"bond":2}
    ,{"source":476,"target":550,"bond":2}
    ,{"source":482,"target":550,"bond":2}
    ,{"source":483,"target":550,"bond":2}
    ,{"source":486,"target":550,"bond":2}
    ,{"source":473,"target":551,"bond":2}
    ,{"source":483,"target":551,"bond":2}
    ,{"source":486,"target":551,"bond":2}
    ,{"source":487,"target":551,"bond":2}
    ,{"source":415,"target":552,"bond":2}
    ,{"source":417,"target":552,"bond":2}
    ,{"source":433,"target":552,"bond":2}
    ,{"source":433,"target":552,"bond":2}
    ,{"source":435,"target":552,"bond":2}
    ,{"source":455,"target":552,"bond":2}
    ,{"source":457,"target":552,"bond":2}
    ,{"source":482,"target":552,"bond":2}
    ,{"source":483,"target":552,"bond":2}
    ,{"source":486,"target":552,"bond":2}
    ,{"source":499,"target":552,"bond":2}
    ,{"source":500,"target":552,"bond":2}
    ,{"source":509,"target":553,"bond":2}
    ,{"source":510,"target":553,"bond":2}
    ,{"source":511,"target":553,"bond":2}
    ,{"source":512,"target":553,"bond":2}
    ,{"source":410,"target":554,"bond":2}
    ,{"source":411,"target":554,"bond":2}
    ,{"source":412,"target":554,"bond":2}
    ,{"source":429,"target":554,"bond":2}
    ,{"source":430,"target":554,"bond":2}
    ,{"source":431,"target":554,"bond":2}
    ,{"source":449,"target":554,"bond":2}
    ,{"source":453,"target":554,"bond":2}
    ,{"source":454,"target":554,"bond":2}
    ,{"source":465,"target":554,"bond":2}
    ,{"source":466,"target":554,"bond":2}
    ,{"source":472,"target":554,"bond":2}
    ,{"source":477,"target":554,"bond":2}
    ,{"source":482,"target":554,"bond":2}
    ,{"source":484,"target":554,"bond":2}
    ,{"source":485,"target":554,"bond":2}
    ,{"source":407,"target":555,"bond":2}
    ,{"source":408,"target":555,"bond":2}
    ,{"source":409,"target":555,"bond":2}
    ,{"source":426,"target":555,"bond":2}
    ,{"source":427,"target":555,"bond":2}
    ,{"source":428,"target":555,"bond":2}
    ,{"source":444,"target":555,"bond":2}
    ,{"source":446,"target":555,"bond":2}
    ,{"source":447,"target":555,"bond":2}
    ,{"source":448,"target":555,"bond":2}
    ,{"source":468,"target":555,"bond":2}
    ,{"source":478,"target":555,"bond":2}
    ,{"source":480,"target":555,"bond":2}
    ,{"source":482,"target":555,"bond":2}
    ,{"source":484,"target":555,"bond":2}
    ,{"source":485,"target":555,"bond":2}
    ,{"source":503,"target":555,"bond":2}
    ,{"source":504,"target":555,"bond":2}
    ,{"source":421,"target":556,"bond":2}
    ,{"source":422,"target":556,"bond":2}
    ,{"source":423,"target":556,"bond":2}
    ,{"source":438,"target":556,"bond":2}
    ,{"source":439,"target":556,"bond":2}
    ,{"source":440,"target":556,"bond":2}
    ,{"source":445,"target":556,"bond":2}
    ,{"source":459,"target":556,"bond":2}
    ,{"source":460,"target":556,"bond":2}
    ,{"source":461,"target":556,"bond":2}
    ,{"source":469,"target":556,"bond":2}
    ,{"source":479,"target":556,"bond":2}
    ,{"source":481,"target":556,"bond":2}
    ,{"source":482,"target":556,"bond":2}
    ,{"source":484,"target":556,"bond":2}
    ,{"source":485,"target":556,"bond":2}
    ,{"source":504,"target":556,"bond":2}
    ,{"source":482,"target":557,"bond":2}
    ,{"source":483,"target":557,"bond":2}
    ,{"source":486,"target":557,"bond":2}
    ,{"source":541,"target":557,"bond":2}
    ,{"source":543,"target":557,"bond":2}
    ,{"source":482,"target":558,"bond":2}
    ,{"source":483,"target":558,"bond":2}
    ,{"source":486,"target":558,"bond":2}
    ,{"source":495,"target":558,"bond":2}
    ,{"source":498,"target":558,"bond":2}
    ,{"source":516,"target":558,"bond":2}
    ,{"source":519,"target":558,"bond":2}
    ,{"source":524,"target":558,"bond":2}
    ,{"source":528,"target":558,"bond":2}
    ,{"source":531,"target":558,"bond":2}
    ,{"source":534,"target":558,"bond":2}
    ,{"source":539,"target":558,"bond":2}
    ,{"source":540,"target":558,"bond":2}
    ,{"source":543,"target":558,"bond":2}
    ,{"source":482,"target":559,"bond":2}
    ,{"source":483,"target":559,"bond":2}
    ,{"source":486,"target":559,"bond":2}
    ,{"source":541,"target":559,"bond":2}
    ,{"source":543,"target":559,"bond":2}
    ,{"source":482,"target":560,"bond":2}
    ,{"source":483,"target":560,"bond":2}
    ,{"source":486,"target":560,"bond":2}
    ,{"source":494,"target":560,"bond":2}
    ,{"source":496,"target":560,"bond":2}
    ,{"source":516,"target":560,"bond":2}
    ,{"source":518,"target":560,"bond":2}
    ,{"source":524,"target":560,"bond":2}
    ,{"source":528,"target":560,"bond":2}
    ,{"source":530,"target":560,"bond":2}
    ,{"source":533,"target":560,"bond":2}
    ,{"source":539,"target":560,"bond":2}
    ,{"source":540,"target":560,"bond":2}
    ,{"source":543,"target":560,"bond":2}
    ,{"source":482,"target":561,"bond":2}
    ,{"source":483,"target":561,"bond":2}
    ,{"source":486,"target":561,"bond":2}
    ,{"source":537,"target":561,"bond":2}
    ,{"source":543,"target":561,"bond":2}
    ,{"source":482,"target":562,"bond":2}
    ,{"source":483,"target":562,"bond":2}
    ,{"source":486,"target":562,"bond":2}
    ,{"source":493,"target":562,"bond":2}
    ,{"source":497,"target":562,"bond":2}
    ,{"source":513,"target":562,"bond":2}
    ,{"source":514,"target":562,"bond":2}
    ,{"source":515,"target":562,"bond":2}
    ,{"source":525,"target":562,"bond":2}
    ,{"source":526,"target":562,"bond":2}
    ,{"source":527,"target":562,"bond":2}
    ,{"source":535,"target":562,"bond":2}
    ,{"source":536,"target":562,"bond":2}
    ,{"source":543,"target":562,"bond":2}
    ,{"source":476,"target":563,"bond":2}
    ,{"source":482,"target":563,"bond":2}
    ,{"source":483,"target":563,"bond":2}
    ,{"source":486,"target":563,"bond":2}
    ,{"source":541,"target":563,"bond":2}
    ,{"source":543,"target":563,"bond":2}
    ,{"source":483,"target":564,"bond":2}
    ,{"source":486,"target":564,"bond":2}
    ,{"source":487,"target":564,"bond":2}
    ,{"source":543,"target":564,"bond":2}
    ,{"source":544,"target":564,"bond":2}
    ,{"source":483,"target":565,"bond":2}
    ,{"source":486,"target":565,"bond":2}
    ,{"source":487,"target":565,"bond":2}
    ,{"source":489,"target":565,"bond":2}
    ,{"source":491,"target":565,"bond":2}
    ,{"source":517,"target":565,"bond":2}
    ,{"source":520,"target":565,"bond":2}
    ,{"source":522,"target":565,"bond":2}
    ,{"source":529,"target":565,"bond":2}
    ,{"source":541,"target":565,"bond":2}
    ,{"source":542,"target":565,"bond":2}
    ,{"source":543,"target":565,"bond":2}
    ,{"source":483,"target":566,"bond":2}
    ,{"source":486,"target":566,"bond":2}
    ,{"source":487,"target":566,"bond":2}
    ,{"source":490,"target":566,"bond":2}
    ,{"source":492,"target":566,"bond":2}
    ,{"source":517,"target":566,"bond":2}
    ,{"source":517,"target":566,"bond":2}
    ,{"source":521,"target":566,"bond":2}
    ,{"source":523,"target":566,"bond":2}
    ,{"source":532,"target":566,"bond":2}
    ,{"source":541,"target":566,"bond":2}
    ,{"source":542,"target":566,"bond":2}
    ,{"source":543,"target":566,"bond":2}
    ,{"source":474,"target":567,"bond":2}
    ,{"source":475,"target":567,"bond":2}
    ,{"source":476,"target":567,"bond":2}
    ,{"source":486,"target":567,"bond":2}
    ,{"source":488,"target":567,"bond":2}
    ,{"source":502,"target":567,"bond":2}
    ,{"source":476,"target":568,"bond":2}
    ,{"source":506,"target":568,"bond":2}
    ,{"source":507,"target":568,"bond":2}
    ,{"source":538,"target":568,"bond":2}
    ,{"source":545,"target":568,"bond":2}
    ,{"source":457,"target":569,"bond":2}
    ,{"source":483,"target":569,"bond":2}
    ,{"source":486,"target":569,"bond":2}
    ,{"source":487,"target":569,"bond":2}
    ,{"source":500,"target":569,"bond":2}
    */
   //#endregion
  ]
}
function getGraphRS(callback) {
  callback(graphRS);
}