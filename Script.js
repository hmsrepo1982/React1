function Person(props){
    return (
    <div className="person">
    <h1>{props.name}</h1>
    <p>My Age : {props.age}</p>
    </div>  
    );
    
  }
  
  var app = (
  <div>
    <Person name="Harsha" age="37"/>
    <Person name="Shiva" age="73"/>
   </div>
  );
  
  ReactDOM.render(app, document.querySelector('#app'));