// Video 6: Crate a composite

function Hello(){
    return(
        <h1>Hello</h1>
    )
}

//video 7
// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
*/
    const h1 = document.createElement(h1)
    h1.textconContent = "H1 is displaying"
    h1.classname = header
    document.getElementById(root).append(h1)


    
ReactDOM.render(
    //video 6
    <div>
        <Hello />
    </div>

    //video 7

    ,
    document.getElementById(root)
)

const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"