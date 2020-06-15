//Practice with HTML binding
const myList = document.getElementById("my_list");


class ListBinding {
    constructor(element) {
        this.listElement = element;
        this.textList = [
            // "zamir",
            // "is",
            // "cool"
            // "Zamir",
            // "Kanji"
        ];
    }

    //makes an li/elements tag
    static createListItem(text) {
        const li = document.createElement("li");
        li.textContent = text;

        return li;
    }

    update() {
        /*Remove all existing <li> element tags*/
        while (this.listElement.firstChild) { //while there is a first child
            this.listElement.removeChild(this.listElement.firstChild);
        }

        //fill <ul>/<ol> tag with <li>
        for (const text of this.textList) {
            this.listElement.appendChild(ListBinding.createListItem(text));
        }
    }

    //adds text to array and updates the DOM
    add(text) {
        this.textList.push(text);
        this.update();
    }

    //remove item starting at index and then how many (1) and then updates DOM
    remove(index) {
        this.textList.splice(index, 1);
        this.update();
    }

}

const listBinding = new ListBinding(myList);