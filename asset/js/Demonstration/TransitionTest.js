customElements.define(
  "transition-demo",
  class extends HTMLElement {
    connectedCallback() {
      this.render();
      this.querySelector("#btnFirst").addEventListener("click", function () {
        document.startViewTransition(async () => {
          document.getElementById("first_container").style.display = "none";
          document.getElementById("second_container").style.display = "flex";
        });
      });
      this.querySelector("#btnSecond").addEventListener("click", function () {
        document.startViewTransition(async () => {
          document.getElementById("first_container").style.display = "flex";
          document.getElementById("second_container").style.display = "none";
        });
      });
    }
    render() {
      this.innerHTML = `      
      <section class="test">
          <div class="test__container first" id="first_container">
            <h3>1er élément:</h3>
            <button id="btnFirst">Aller sur le 2ème élément</button>
          </div>
          <div class="test__container second" id="second_container">
            <h3>2ème élément:</h3>
            <button id="btnSecond">Aller sur le 1er élément</button>
          </div>
      </section>`;
    }
  }
);
