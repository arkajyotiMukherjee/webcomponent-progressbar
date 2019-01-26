class ProgressBar extends HTMLElement {
    constructor() {
        super()

        const shadowRoot =  this.attachShadow({mode: 'open'})
        const _complete = 0
        /*
        shadowRoot.innerHTML = `
        <style>
            .progress-bar {
                width: 50%;
                height: 30px;
                background-color: #edf2f4;
                border-radius: 5px;
                color: #fff;
            }

            .progress-bar-inner {
                height: 100%;
                line-height: 30px;
                background: #2b2d42;
                text-align: center;
                border-radius: 5px;
                transition: width 0.25s;
            }
        </style>

        <div class="progress-bar">
            <div class="progress-bar-inner">${this._complete}%</div>
        </div>
    `
    */

    }

    get complete() {
        return this._complete
    }

    set complete(val) {
        this.setAttribute('complete', val)
    }

    static get observedAttributes() {
        return ['complete']
    }

    attributeChangedCallback(name, oldVal, newVal) {
        var innerBar = this.shadowRoot.querySelector('.progress-bar-inner')
        if (name === 'complete') {
            this._complete = parseInt(newVal, 10) || 0
        }

        innerBar.style.width = this._complete + '%'
        innerBar.innerHTML = this._complete + '%'
    }

    connectedCallback() {
        
        var template = `
            <style>
                .progress-bar {
                    width: 50%;
                    height: 30px;
                    background-color: #edf2f4;
                    border-radius: 5px;
                    color: #fff;
                }

                .progress-bar-inner {
                    height: 100%;
                    line-height: 30px;
                    background: #2b2d42;
                    text-align: center;
                    border-radius: 5px;
                    transition: width 0.25s;
                }
            </style>

            <div class="progress-bar">
                <div class="progress-bar-inner">${this._complete}%</div>
            </div>
        `

        this.shadowRoot.innerHTML = template
        
    }
}

window.customElements.define('progress-bar', ProgressBar)