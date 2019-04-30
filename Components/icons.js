class IconLink {
    constructor(element) {
        this.element = element;
        this.data = element.dataset.tab;
        this.itemElement = document.querySelector(`.icons-item[data-tab='${this.data}']`);
        this.iconItem = new IconItem(this.itemElement);
        this.element.addEventListener('click', () => this.select());
    }

    select() {
        const links = document.querySelectorAll('icons-link');
        links.forEach(link => link.classList.remove('icons-link-selected'));
        this.element.classList.add('icons-link-selected');
        this.iconItem.select();
    }
}

class IconItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        const items = document.querySelectorAll('.icons-item');
        items.forEach(items => items.classList.remove('icons-item-selected'));
        this.element.classList.add('icons-item-selected');
    }
}


let icons = document.querySelectorAll('.icons .icons-link').forEach(element => new IconLink(element));