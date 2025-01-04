import React from 'react';
import Modal from './Modal';

const sections = [
  {
    content: "Webová stránka základní školy Letohrad byla vytvořena s jednoduchým design, který usnadnil orientaci a přístup k informacím. Součástí projektu je administrativní systém s čtyřúrovňovým řízením práv, který umožňuje správcům a uživatelům různých úrovní přístupu upravovat všechny části webu, vkládat obrázky, soubory a měnit obsah stránek bez potřeby technických znalostí. Web je postaven na MySQL databázi a PHP, což zajišťuje stabilitu a flexibilitu při správě obsahu.",
    images: [
      { src: "/images/zsletohrad/uvod.png", caption: "Úvodní stránka" },
      { src: "/images/zsletohrad/podstranka.png", caption: "Podstránka" }
    ]
  },
  {
    title1: "Vývoj",
    content: "Vývoj projektu začal návrhem uživatelského rozhraní ve Figmě, kde jsem se zaměřil na vytvoření co nejjednoduššího a intuitivního designu pro snadnou orientaci návštěvníků. Po schválení návrhu jsem navrhl strukturu MySQL databáze, která tvoří základ pro efektivní správu obsahu. Následovala fáze programování samotného webu s důrazem na responzivitu a optimalizaci. Klíčovou součástí projektu bylo vytvoření propracovaného administračního modulu, který umožňuje správcům webu jednoduše spravovat veškerý obsah, včetně textů, obrázků a dokumentů, bez nutnosti technických znalostí.",
    images: []
  },
  {
    title1: "Administrační modul",
    content: "Administrační modul je navržen s propracovaným čtyřúrovňovým systémem přístupových práv, který zajišťuje efektivní správu obsahu podle role uživatele. Nejvyšší úroveň je určena pro správce webu s plným přístupem ke všem funkcím systému. Druhá úroveň je vyhrazena pro ředitele školy, který může upravovat obsah webu, ale nemůže spravovat strukturu webu. Třetí úroveň je přizpůsobena potřebám učitelů, kteří mohou přidávat články, aktuality a spravovat obsah související s jejich výukou. Čtvrtá úroveň je určena pro vychovatelky školní družiny, které mají možnost aktualizovat informace o družině a jejích aktivitách. Modul umožňuje všem oprávněným uživatelům kompletní správu obsahu webu včetně vytváření a editace stránek, nahrávání obrázků a dokumentů, vkládání iframe elementů a videí. Systém je navržen intuitivně, aby umožnil snadnou správu obsahu i uživatelům bez technických znalostí.",
    images: [
      { src: "/images/zsletohrad/admin.png", caption: "Administrační modul - úprava článků" },
      { src: "/images/zsletohrad/menu.png", caption: "Administrační modul - úprava menu" }
    ]
  },
];

export default function TauModal() {
  return (
    <Modal sections={sections} title="ZŠ Letohrad"/>
  );
}
