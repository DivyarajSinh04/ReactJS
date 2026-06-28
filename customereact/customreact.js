function customRender(reactElement, root) {
    const newDomElement = document.createElement(reactElement.type);
    newDomElement.innerHTML = reactElement.children;
    for (let prop in reactElement.props) {
        newDomElement.setAttribute(prop, reactElement.props[prop]);
    }
    console.log(newDomElement);
    root.appendChild(newDomElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
}

const mainContainer = document.querySelector("#root");
console.log("root: " + mainContainer);
customRender(reactElement, mainContainer);