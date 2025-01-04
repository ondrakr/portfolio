import React from 'react';
import Modal from './Modal';

const sections = [
  {
    content: "Internetová služba TAU (Trénuj a uč se!) slouží k procvičování přijímacích zkoušek na počítači, tabletu i telefonu. Žákům jsou k dispozici všechna testová zadání matematiky a českého jazyka. V aplikaci je online vyhodnocena odpověď a žák na konci uvidí shrnutí všech svých odpovědí a úspěšnost.",
    images: [
      { src: "./../images/tau/uvod.jpeg", caption: "Úvodní stránka" },
      { src: "./../images/tau/uloha.jpeg", caption: "Ukázka úlohy" },

    ]
  },
  {
    title1: "Technologie",
    content: "Pro realizaci projektu byly použity technologie a programovací jazyky, HTML pro strukturování obsahu, CSS pro návrh a stylování uživatelského rozhraní a JavaScript pro interaktivní prvky a dynamické funkce. Backendová logika byla implementována v jazyce PHP, který zajišťuje zpracování požadavků na straně serveru, a jako databázové řešení byl zvolen systém MySQL, který umožňuje efektivní ukládání a správu dat. Projekt rovněž zahrnuje integraci knihovny LaTeX, která slouží k zobrazení matematických výrazů.",
    images: []
  },
  {
    title1: "Vývoj",
    title2: "1. fáze vývoje",
    content: "V první fázi jsem navrhl a připravil celý systém. Začal jsem vytvořením databázové struktury, která zajišťuje efektivní ukládání a správu dat. Navrhl jsem také intuitivní uživatelské rozhraní, které odpovídá moderním trendům a potřebám uživatelů. Současně jsem vytvořil grafický návrh zahrnující vizuální identitu aplikace a navrhl architekturu systému, která zajišťuje stabilitu a škálovatelnost. Na základě těchto návrhů jsem aplikaci naprogramoval a během vývoje provedl důkladné testování, abych zajistil její spolehlivost a funkčnost.",
    images: []
  },
  {
    title2: "2. fáze vývoje",
    content: "Ve druhé fázi jsem vyvinul administrační systém, který umožňuje správu obsahu aplikace. Implementoval jsem nástroje pro vkládání a úpravu úloh, správu odpovědí a kategorií a také pro snadné přidávání obrázků. Součástí tohoto systému je také modul pro analýzu statistik, který poskytuje přehled o využívání aplikace. Díky těmto funkcionalitám jsem zajistil efektivní kontrolu a správu obsahu.",
    images: [
      { src: "./../images/tau/tabulka-admin.png", caption: "Administrační modul - tabulka úloh" },
      { src: "./../images/tau/uprava-ulohy.png", caption: "Administrační modul - editace úlohy" },
    ]
  },
  {
    title2: "3. fáze vývoje",
    content: "V poslední fázi jsem rozšířil administrační systém o tříúrovňový přihlašovací systém s různými úrovněmi přístupových práv, což umožňuje lepší organizaci správy obsahu. Dále jsem vytvořil funkce pro vkládání, kontrolování, zveřejňování a skrývání celých testů. Tím jsem zajistil kompletní a flexibilní správu aplikace, která odpovídá všem požadavkům.",
    images: []
  },
  {
    title1: "Dosah a využití",
    content: "Aplikace byla spuštěna v říjnu 2023, od té doby bylo odesláno přes 11,5 milionů odpovědí, s úspěšností 56%. Rekordní den bylo 10. dubna, kdy bylo odesláno přes 333 tisíc odpovědí. Aplikaci využilo více než 100 tisíc uživatelů.",
    images: []
  }
];

export default function TauModal() {
  return (
    <Modal sections={sections} title="Trénuj a uč se!"/>
  );
}
