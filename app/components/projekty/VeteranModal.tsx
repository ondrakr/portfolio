import React from 'react';
import Modal from './Modal';

const sections = [
  {
    content: "Veterán Cup Letohrad je charitativní hokejbalový turnaj, který se koná každý rok v Letohradě. Ve veřejné sbírce se v roce 2024 vybralo neuvěřitelných půl milionu korun na pomoc nemocných dětí. V rámci Veterán Cupu se konají také aukce, kde jsou nabízeny sportovní předměty jako dresy a hokejky z různých sportů. Součástí programu celého dne, kromě turnaje veteránů, je také utkání osobností. Do Letohradu se sjeli opravdu velké sportovní hvězdy, jako jsou hokejisté NHL i extraligy, olympijští vítězové v biatlonu.",
    images: []
  },
  {
    title1: "Vizuální identita",
    content: "Pro tuto akci jsem vytvořil komplexní vizuální identitu, která zahrnovala návrh loga, výběr barevné palety a typografie. Všechny tyto prvky byly pečlivě sladěny, aby vytvářely jednotný a profesionální vzhled. Dále jsem navrhl webovou stránku, která odráží celkový vizuální styl, a připravil šablony pro sociální sítě. Každý rok také vytvářím nový návrh dresů pro utkání osobností a dres rozhodčích.",
    images: [
      { src: "./../images/veteran/logo_veterancup.png", caption: "Oficiální logo Veterán Cup Letohrad" },
      { src: "./../images/veteran/dresy.png", caption: "Návrh dresů 2023" },
    ]
  },
  {
    title1: "Vývoj webové stránky",
    content: "Při tvorbě webové stránky jsem navrhl kompletní design a strukturu, přičemž jsem čelil chybějícím informacím, které by byly na internetu k dispozici. Stránka je plně responzivní s jednoduchou navigací. Kromě toho jsem vytvořil jednoduché administrační rozhraní pro snadnou aktualizaci obsahu webu, které umožňuje efektivně spravovat informace o akci.",
    images: [
      { src: "./../images/veteran/uvod-web.png", caption: "Úvodní stránka" },
      { src: "./../images/veteran/osobnosti-web.png", caption: "Seznam sportovců na utkání osobností" },
    ]
  },
  {
    title1: "Dosah",
    content: "Dres, který jsem navrhnul, nosili známí sportovci, včetně hokejistů NHL a olympijských medailistů v biatlonu. Můj článek s fotografií šeku, který jsem také navrhl, byl zveřejněn na zpravodajském portálu TN.cz, což přispělo k širší medializaci. Logo, které jsem vytvořil, si navíc nalepil na hokejku extraligový brankář, který s ním odchytal zápas Tipsport extraligy.",
    images: [
      { src: "./../images/veteran/sek.jpg", caption: "Michal Krčmář, Alena Mills, Tomáš Nosek, Matěj Blümel držící šek vybrané částky 391 tisíc" },
      { src: "./../images/veteran/clanek.png", caption: "Článek na webu TN.cz" },
    ]
  },

];

export default function VeteranModal() {
  return (
    <Modal sections={sections} title="Veterán Cup Letohrad"/>
  );
}
