module.exports = class ChatLine {
    constructor(name, text, img, nameColor) {
        this.name = name;
        this.text = text;
        this.img = img;
        this.nameColor = nameColor || "white"
    }
    render() {
        return `
        <div class="row rounded bg-light  pr-1 col-12 mt-1" style="Border-radius:550px;">
        <div class="col-3 bg-info">
        <img src="${this.img}"class="rounded pt-1"/>
        </div>
        <div class="col-9 bg-secondary pt-1 pb-1">                
        <h4 class="col-12 w-100" style="color:${this.nameColor};">${this.name}</h2>
        <a class="col-12 w-100 h-100 "style="color:white;">${this.text}</a>
        </div>

        </div>
        `
    }
}