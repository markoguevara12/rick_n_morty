
import Api from './components/api.jsx'
import NavBar from './components/navBar.jsx';


const styles ={
  App:{
    backgroundColor:'rgba(33,35,41,1)'
  }
}

function App() {
  return (
    <div style={styles.App} className="App">
      <NavBar brand={`Rick N' Morty`}/>    
      <Api/> 
   
      
    </div>
  );
}

export default App;
   