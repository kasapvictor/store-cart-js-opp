class View {
    static render (where, element) {
        document.querySelector(where).append(element);
    }
 }