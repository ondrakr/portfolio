import React from 'react';
import Modal from './Modal';

const sections = [
  {
    content: "Systém pro rezervaci termínů na třídní schůzky. Rodiče si na pár kliknutí zarezervují termín, učitelé mají přehled o účasti a pro správce je vytvořeno jednoduché administrační prostředí. Systém je navržen intuitivně, což šetří čas a usnadňuje organizaci celé škole.",
    images: []
  },
  {
    title1: "Projekt manažer",
    content: "Jako projektový manažer a designér jsem zodpovídal za koordinaci a implementaci projektu. Na základě požadavků zadavatele jsem připravil kompletní zadání, které sloužilo jako podklad pro vývoj aplikace. Vývoj samotného systému realizoval kamarád-programátor. Po dokončení základní fáze jsem prováděl testování, připravoval detailní zpětnou vazbu pro vývojáře a zajišťoval komunikaci s klientem. Strategickým cílem projektu je rozšíření systému na více škol, což přispěje ke zvýšení efektivity a organizace školních aktivit.",
    images: []
  },
  {
    content: "Již brzy ukážeme více...",
    images: []
  },
 
];
export default function RodicakyModal() {
  return (
    <Modal sections={sections} title="Rodičáky"/>
  );
}
