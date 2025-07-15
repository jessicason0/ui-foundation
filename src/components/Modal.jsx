import React, { useState } from "react";

const imgURL =
  "https://images-ext-1.discordapp.net/external/Jwk3G92sRr7ScbY6MMY9J9FwHqsMVOgOBvTWJ8JWKJI/%3Fq%3D80%26w%3D730%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D/https/plus.unsplash.com/premium_photo-1683619761468-b06992704398?format=webp&width=659&height=1050";

function Modal() {
  const [hasDisplay, setHasDisplay] = useState(false);

  function handleDisplay() {
    setHasDisplay((prev) => !prev);
  }

  return (
    <div className="modal">
      <button onClick={handleDisplay}>Open Modal</button>
      {hasDisplay && (
        <section className="modal__parent">
          <div className="modal__content">
            <button onClick={handleDisplay} className="modal__close">
              x
            </button>
            <p>This is Modal...</p>
            <img src={imgURL} alt="img" />
          </div>
          <div onClick={handleDisplay} className="modal__bg"></div>
        </section>
      )}
    </div>
  );
}

export default Modal;
