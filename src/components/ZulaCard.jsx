import React, { useState } from "react";

const lolData = [
  {
    name: "Camille",
    desc: "Camille is a precision-focused champion in League of Legends, known for her agility, tactical strikes, and deadly legs augmented with hextech blades. As the principal enforcer of Clan Ferros, she balances ruthless efficiency with a cold sense of justice.",
    img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_32.jpg",
  },
  {
    name: "Katarina",
    desc: "Katarina is a deadly Noxian assassin who thrives in the chaos of battle, darting between enemies with lightning-fast strikes. Her mastery of blades and ability to reset kills make her a relentless force in any skirmish.",
    img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_37.jpg",
  },
  {
    name: "Jax",
    desc: "Jax is a master of arms and one of the last known warriors of Icathia, wielding a lamppost as a weapon due to his unmatched combat prowess. He constantly seeks worthy opponents to challenge his incredible skill.",
    img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_13.jpg",
  },
  {
    name: "Riven",
    desc: "Once a Noxian soldier, Riven now wanders in exile, seeking redemption for her past with a broken blade reforged by her resolve. Her powerful movements and skillful swordplay make her a fierce and agile fighter.",
    img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_63.jpg",
  },
  {
    name: "Sett",
    desc: "Sett is a brutal pit fighter turned leader of Ionia’s criminal underworld, known for his fists-first, talk-later approach. With immense strength and swagger, he dominates anyone who dares stand in his path.",
    img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_38.jpg",
  },
  {
    name: "Shen",
    desc: "Shen is the Eye of Twilight, a stoic leader of the Kinkou Order who balances the spirit and physical realms. With perfect discipline, he protects harmony through swift, calculated interventions.",
    img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_49.jpg",
  },
  {
    name: "Syndra",
    desc: "Syndra is a fearsome mage with immense power and little regard for restraint, manipulating dark spheres to overwhelm her enemies. She believes in absolute freedom and unleashing her potential without limits.",
    img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg",
  },
  {
    name: "Jarvan IV",
    desc: "Crown Prince of Demacia, Jarvan IV is a proud and noble warrior who leads with honor and courage. Wielding his ancestral lance, he inspires allies and strikes fear into the hearts of his enemies.",
    img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_9.jpg",
  },
  {
    name: "Sylas",
    desc: "Sylas is a revolutionary mage who uses the very magic he was once imprisoned for, turning the powers of others against them. Fueled by vengeance, he seeks to overthrow the oppressors of Demacia.",
    img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sylas_0.jpg",
  },
  {
    name: "Tristana",
    desc: "Tristana is a Yordle gunner and a proud member of the Bandle City Special Forces, always ready to leap into battle with her trusty cannon, Boomer. Her explosive enthusiasm and firepower make her a formidable marksman.",
    img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_51.jpg",
  },
];

function ZulaCard() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  function handleClick(item) {
    setSelectedCharacter(item);
  }

  return (
    <div className="zulacard">
      <h2>League of Legends Characters - S Tier</h2>
      {selectedCharacter && (
        <div className="zulacard__char-box">
          <div className="zulacard__char-desc">
            <div>{selectedCharacter.name}</div>
            <p>{selectedCharacter.desc}</p>
          </div>
          <div className="img-container">
            <img src={selectedCharacter.img} alt={selectedCharacter.name} />
          </div>
          <button onClick={() => setSelectedCharacter(null)}>Close</button>
        </div>
      )}

      <div className="zulacard__content">
        {lolData.map((item) => {
          return (
            <div className="zulacard__card" key={item.name}>
              <div className="img-container">
                <img src={item.img} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <button onClick={() => handleClick(item)}>Character Info</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ZulaCard;
