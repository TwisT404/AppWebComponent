customElements.define(
  "transition-view",
  class extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    render() {
      this.innerHTML = `<h1>View Transition API</h1>
      <section>
        <h2>Définition:</h2>
        <p>
          L'API View Transition vous permet de créer des transitions visuelles
          fluides entre les différentes vues de votre site Web. Cela crée une
          expérience utilisateur visuellement plus attrayante pour les
          utilisateurs lorsqu'ils naviguent sur votre site, qu'il s'agisse d'une
          application multipage ou d'une application monopage.
        </p>

        <div class="container--btn">
            <a href="./Test.html" id="test">Version Test</a>  
            <a href="./ExempleCode.html">Exemple code</a>
        </div>
      </section>`;
    }
  }
);
