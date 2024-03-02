const parent = React.createElement("div" ,{id: "parent"},[
     React.createElement("div",{id:"child1"}, [
    React.createElement("h2",{},"I am an h2 tag"),
    React.createElement("h1",{},"I am Heading"),
]),
React.createElement("div",{id:"child2"}, [
    React.createElement("h2",{},"I am an h2 tag"),
    React.createElement("h1",{},"I am Heading"),
]),
])

const heading = React.createElement("h1" , {id:"heading"} , "Hello world from React");

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);