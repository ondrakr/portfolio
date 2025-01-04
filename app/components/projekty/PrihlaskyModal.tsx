import React from 'react';
import Modal from './Modal';


const sections = [
  {
    content: "Informační web byl klíčovým zdrojem informací k přijímacímu řízení na střední školy v roce 2024 a bude jím i v roce letošním. Informace na jednom místě zde najdou rodiče a žáci, ředitelé středních škol nebo výchovní poradci základních škol. Předpokládá se, že stránku navštívilo desetitíce rodičů a poskytla jim přehledně vše o přijímačkách.",
    images: [
      { src: "./../images/prihlasky/uvod.png", caption: "Úvodní stránka" },
      { src: "./../images/prihlasky/stranka.png", caption: "Detail stránky" }
    ]
  },
  {
    title1: "Vývoj",
    content: "Současný design webu představuje již třetí verzi. Ministerstvo školství zveřejnilo nové grafické materiály a logo přijímacího řízení, na jejichž základě jsem během jednoho dne vytvořil kompletní redesign webu ve Figmě a následně implementoval změny do kódu včetně zajištění plné responzivity. Následně jsem navrhl a vytvořil administrační modul s MySQL databází pro správu obsahu webu pro budoucí roky.",
    images: []
  },
  {
    content: "Součástí bylo také vytvoření modulů pro vyhledávání středních a základních škol z rejstříku škol. Vyhledávání základních škol bylo vytvořeno pro účely DiPSy (elektornická přihláška), pokud by v časovém tlaku nestihli integrovat vyhledávání základních škol přímo do DiPSy, rodiče by při podávání přihlášky zkopírovali informace o škole do DiPSy. Tento modul nakonec nemusel být použit.",
    images: [
      { src: "./../images/prihlasky/vyhledani_ss.png", caption: "Vyhledávání středních škol" },
      { src: "./../images/prihlasky/vyhledani_zs.png", caption: "Vyhledávání základních škol" }
    ]
  },
];

export default function PrihlaskyModal() {
  return (
    <Modal sections={sections} title="Přihlášky na střední"/>
  );
}

