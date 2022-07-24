
import Api from './components/api.jsx'
import NavBar from './components/navBar.jsx';


const styles ={
  App:{
    
  }
}

function App() {
  return (
    <div style={styles.App} className="App">
      <NavBar brand={`Marko Guevara`}/>    
      <Api/> 
   
      
    </div>
  );
}

export default App;
   