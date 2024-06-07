import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement(
    "h1", //type or tag of html element
    {}, //attributes to mention if any. like id
    "Hello world from react js file"  // children to the element getting created,we can create nested elements using this parameter,
                                     // this parameter can also be passed as an array to create siblings
)
// now heading variable consists of a react type object which contains all the elements mentioned details

// we need a root element to render this created element
// React DOM will give us the ability to assign root and rendering

//JSX will be converted into react element and can be rendered using react dom
const root = ReactDOM.createRoot(document.getElementById("root")) // as React DOM give the ability to manipulate th DOM
const jsxElement = <h1>this is from JSX</h1>
// multilevel and JSX element inside JSX element
const jsxElementMultiLine = (<h1 className="head">
    {jsxElement}
    this is from JSX</h1>)

// functional component is a JS function which starts with capital letter and returns single either react element or JSX
const ElementFunctionalComponent = () => {
    return (
        <div>
            {jsxElementMultiLine}
            {/* component composition */}  
            {// we can use comments like this also as this syntax will comment everything on right side
            }
            <ElementFunctionalComponentInner />
            <ElementFunctionalComponentInner></ElementFunctionalComponentInner>
            {ElementFunctionalComponentInner()}
            {/* all the above 3 syntaxes are same and last one is possible because functional component is js function */ }
        <h1>This is a functional component</h1>
        </div>
)
}

const ElementFunctionalComponentInner = () => {
    return <h1>This is a functional component Inner</h1>
}

// babel can understand this syntax as functional component
root.render(<ElementFunctionalComponent/>)

root.render(heading) // it actually converts the heading object into html tag and attach it to the root element.