


var App = function (props){
    var niz = ["a", "b", "c"]

    return (
        <div>
        <h1>Shop List</h1>

        { 
            niz.map((elem)=> <li>{elem}</li>)
         }
         {/* <li>fdhsfgh</li>
         <li>fdhsfgh</li>
         <li>fdhsfgh</li>
         <li>fdhsfgh</li> */}
         </div>
    
    
    
    )
    
}



var rootElement  = document.getElementById('root');
ReactDOM.render(<App ></App>, rootElement );

