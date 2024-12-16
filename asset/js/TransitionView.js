customElements.define(
  "index-view",
  class extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    render() {
      this.innerHTML = `
      <section>
        <h2>Définition:</h2>
        <p>
          <span>L'API View Transition</span> vous permet de créer des <span>transitions visuelles
          fluides</span> entre les différentes vues de votre site Web. Cela crée une
          expérience utilisateur visuellement plus attrayante pour les
          utilisateurs lorsqu'ils naviguent sur votre site, qu'il s'agisse d'une
          <span>application multipage</span> ou d'une <span>application monopage</span>.
        </p>
        <baseline-status featureId="view-transitions"></baseline-status>
        <div class="container--btn">
          <a href="./pages/Test.html" id="test">Version Test</a>  
          <a href="./pages/Exemple.html">Exemple code</a>
        </div>
      </section>`;
    }
  }
);
