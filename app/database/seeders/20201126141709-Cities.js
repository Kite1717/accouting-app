'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkInsert('cities', [
      {id:"15",title:"BURDUR"},
      {id:"26",title:"ESKİŞEHİR"},
      {id:"18",title:"ÇANKIRI"},
      {id:"80",title:"OSMANİYE"},
      {id:"41",title:"KOCAELİ"},
      {id:"27",title:"GAZİANTEP"},
      {id:"31",title:"HATAY"},
      {id:"38",title:"KAYSERİ"},
      {id:"29",title:"GÜMÜŞHANE"},
      {id:"54",title:"SAKARYA"},
      {id:"16",title:"BURSA"},
      {id:"69",title:"BAYBURT"},
      {id:"17",title:"ÇANAKKALE"},
      {id:"57",title:"SİNOP"},
      {id:"74",title:"BARTIN"},
      {id:"33",title:"MERSİN"},
      {id:"51",title:"NİĞDE"},
      {id:"42",title:"KONYA"},
      {id:"60",title:"TOKAT"},
      {id:"2",title:"ADIYAMAN"},
      {id:"6",title:"ANKARA"},
      {id:"66",title:"YOZGAT"},
      {id:"52",title:"ORDU"},
      {id:"53",title:"RİZE"},
      {id:"1",title:"ADANA"},
      {id:"40",title:"KIRŞEHİR"},
      {id:"76",title:"IĞDIR"},
      {id:"45",title:"MANİSA"},
      {id:"21",title:"DİYARBAKIR"},
      {id:"64",title:"UŞAK"},
      {id:"5",title:"AMASYA"},
      {id:"24",title:"ERZİNCAN"},
      {id:"32",title:"ISPARTA"},
      {id:"23",title:"ELAZIĞ"},
      {id:"78",title:"KARABÜK"},
      {id:"30",title:"HAKKARİ"},
      {id:"36",title:"KARS"},
      {id:"67",title:"ZONGULDAK"},
      {id:"68",title:"AKSARAY"},
      {id:"44",title:"MALATYA"},
      {id:"10",title:"BALIKESİR"},
      {id:"20",title:"DENİZLİ"},
      {id:"49",title:"MUŞ"},
      {id:"73",title:"ŞIRNAK"},
      {id:"48",title:"MUĞLA"},
      {id:"59",title:"TEKİRDAĞ"},
      {id:"39",title:"KIRKLARELİ"},
      {id:"56",title:"SİİRT"},
      {id:"28",title:"GİRESUN"},
      {id:"63",title:"ŞANLIURFA"},
      {id:"9",title:"AYDIN"},
      {id:"72",title:"BATMAN"},
      {id:"13",title:"BİTLİS"},
      {id:"3",title:"AFYONKARAHİSAR"},
      {id:"8",title:"ARTVİN"},
      {id:"4",title:"AĞRI"},
      {id:"77",title:"YALOVA"},
      {id:"50",title:"NEVŞEHİR"},
      {id:"61",title:"TRABZON"},
      {id:"58",title:"SİVAS"},
      {id:"7",title:"ANTALYA"},
      {id:"37",title:"KASTAMONU"},
      {id:"47",title:"MARDİN"},
      {id:"46",title:"KAHRAMANMARAŞ"},
      {id:"25",title:"ERZURUM"},
      {id:"75",title:"ARDAHAN"},
      {id:"81",title:"DÜZCE"},
      {id:"55",title:"SAMSUN"},
      {id:"19",title:"ÇORUM"},
      {id:"65",title:"VAN"},
      {id:"14",title:"BOLU"},
      {id:"43",title:"KÜTAHYA"},
      {id:"11",title:"BİLECİK"},
      {id:"34",title:"İSTANBUL"},
      {id:"79",title:"KİLİS"},
      {id:"62",title:"TUNCELİ"},
      {id:"12",title:"BİNGÖL"},
      {id:"22",title:"EDİRNE"},
      {id:"71",title:"KIRIKKALE"},
      {id:"70",title:"KARAMAN"},
      {id:"35",title:"İZMİR"}
      ], {});

},

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};