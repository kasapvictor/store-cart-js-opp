class Element {

    // создает элемент ДОМа
    static create (elType, elClass = "", content = "") {
        let element = document.createElement(elType);

        // добавляет классы
        if (elClass !== "") {
            elClass = elClass.replace(" ", "");
            elClass = elClass.split(",");
            elClass.forEach(item => element.classList.add(item));
        }
        if (content !== "") {
            element.innerHTML = content;
        }

        return element;
    }

    // добавляет атрибуты
    static attr (element, attrs) {
        attrs.forEach(attr => {
            for (let val in attr) {
                element.setAttribute(val, attr[val]);
            }
        });
        return element;
    }
}

