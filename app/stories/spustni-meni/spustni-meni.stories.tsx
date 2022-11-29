import { useState } from "react";
import { Recenzije, recenzijeLinks } from "./recenzije.stories";
import styles from "./spustni-meni.css";
import type { Story } from "@ladle/react";
import type { Kalco } from "~/interfaces/kalco";

interface SpustniMeniLastnosti {
  kalco: Kalco;
}

export function spustniMeniLinks() {
  return [{ rel: "stylesheet", href: styles }, ...recenzijeLinks()];
}

export const SpustniMeni: Story<SpustniMeniLastnosti> = ({ kalco }) => {
  const [jeRazsirjen, nastaviJeRazsirjen] = useState(false);

  return (
    <div className="kalcoContainer">
      <button
        className="kalcoGumb"
        onClick={() => nastaviJeRazsirjen((je) => !je)}
      >
        <h3 className="ime">{kalco.bar}</h3>
        {kalco.ocena > 0 && (
          <h2>
            <span>{kalco.ocena} / </span>
            <span className="pjt">5</span>
          </h2>
        )}
        <div className={`puscica ${jeRazsirjen ? "razsirjena" : ""}`}>
          {"->"}
        </div>
      </button>
      {jeRazsirjen && (
        <div className="kalco-info">
          {!kalco.zihr && <h4 className="zihrDisklejmr">Ne zihr</h4>}
          {kalco.linkDoSlike && (
            <img src={kalco.linkDoSlike} alt="kalco-slika" className="slika" />
          )}
          {kalco.dzabe.je ? (
            <h4>Dzabe</h4>
          ) : (
            <h4 className="zaPlacat">Za placat</h4>
          )}
          <a
            href={kalco.zemljevidPovezava}
            target="_blank"
            className="povezavaZemljevidi"
            rel="noreferrer"
          >
            🗺️ Navodila za pot
          </a>
          <Recenzije recenzije={kalco.recenzije} />
        </div>
      )}
    </div>
  );
};

SpustniMeni.args = {
  kalco: {
    bar: "Pivnica Union",
    linkDoSlike: "",
    dzabe: {
      je: true,
      confirmed: true,
    },
    zihr: true,
    zemljevidPovezava: "https://goo.gl/maps/NFHh4fDLHixAebe4A",
    lat: 46.059765,
    lng: 14.4985854,
    recenzije: [
      {
        naslou: "Nic za klicati domov o",
        besedilo:
          "Je zastonj, kr je kr kul, mal je lhk pa frci bala naokuli. Luknja u enmi goli, pada vn ku das gol.",
        ocena: 2,
      },
    ],
  },
};

spustniMeniLinks.storyName = "fuj to, ne klikn";
