function Message() {
    //JSX: Jaavascript XML
    const name = 'Ashton';
    // curly braces are placeholders for expressions (pieces of code that hold a value: functions and variables)
    if (name){
        return <h1>Hello {name}</h1>;
    }
    return <h1>Hello World</h1>;
}

export default Message;