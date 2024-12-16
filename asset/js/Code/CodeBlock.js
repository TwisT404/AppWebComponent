customElements.define(
  "code-block",
  class extends HTMLElement {
    connectedCallback() {
      this.lang = this.getAttribute("lang");
      this.code = this.getAttribute("code");
      this.comment = this.getAttribute("comment");
      this.render(this.lang, this.code, this.comment);
    }
    render(lang, code, comment) {
      let content = "";
      switch (lang) {
        case "JS":
          content = `
        <div class="container js">
            <h3>${lang}</h3>
            <pre>
            <code>
                <span class="comment">//${comment}</span>
                ${code}
            </code>
            </pre>
        </div>
        `;
          break;

        default:
          content = `
        <div class="container css">
            <h3>${lang}</h3>
            <pre>
                <code>
                  <span class="comment">/*${comment}*/</span>
                  ${code}
              </code>
            </pre>
          </div>
    `;
          break;
      }

      this.innerHTML = content;
    }
  }
);
