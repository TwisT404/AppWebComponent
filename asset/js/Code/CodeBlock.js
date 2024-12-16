customElements.define(
  "code-block",
  class extends HTMLElement {
    connectedCallback() {
      //Initialise variable based on attribute of the tag
      this.lang = this.getAttribute("lang");
      this.code = this.getAttribute("code");
      this.comment = this.getAttribute("comment");
      this.render(this.lang, this.code, this.comment);
    }
    /**
     * Render function returning  JS or CSS coding block with a comment to explain
     * @param {string} lang
     * @param {string} code
     * @param {string} comment
     */
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
