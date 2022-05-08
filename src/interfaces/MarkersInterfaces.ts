export interface Markers {
    lat: number;
    lng: number;
}


export interface Casilla {
    nameMunicipity: string;
    SECCION: number;
    TIPO: string;
    MC: number;
    PORC_MC: number;
    GRAPROES: number;
    PPDESOCUP: number;
    PPSINDER: number;
    PP_AFILIADA_A_SERVICIOS_DE_SALUD_DE_TRABAJO_INFORMAL: number;
    PROM_OCUP: number;
    PRO_OCUP_C: number;
    PVPH_1DOR: number;
    VPH_2YMASD: number;
    VPH_C_ELEC: number;
    VPH_S_ELEC: number;
    VPH_AGUADV: number;
    VPH_AEASP: number;
    VPH_AGUAFV: number;
    VPH_TINACO: number;
    VPH_CISTER: number;
    VPH_EXCSA: number;
    VPH_LETR: number;
    VPH_DRENAJ: number;
    VPH_NODREN: number;
    VPH_C_SERV: number;
    PVPH_C_SERV: number;
    VPH_NDEAED: number;
    VPH_DSADMA: number;
    VPH_NDACMM: number;
    VPH_REFRI: number;
    VPH_LAVAD: number;
    VPH_HMICRO: number;
    VPH_AUTOM: number;
    PVPH_AUTOM: number;
    VPH_MOTO: number;
    VPH_BICI: number;
    VPH_RADIO: number;
    VPH_TV: number;
    VPH_PC: number;
    VPH_TELEF: number;
    VPH_CEL: number;
    VPH_INTER: number;
    PORC_INTERNET: number;
    VPH_STVP: number;
    VPH_SPMVPI: number;
    municipity: string;
    city: string;
    localDistrict: string;
    hasElectronic: string;
    address: string;
    location: string;
    placeType: string;
    lat: number;
    lon: number;
    typeCasilla: string;
}
