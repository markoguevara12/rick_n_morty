import React,{useEffect,useState} from "react";
import Characters from "./characters";
import Pagination from "./Pagination";

//Api todos los pj: https://rickandmortyapi.com/api/character


const Api = () => {
     
    const [personajes,setPersonajes] = useState([])
    const [info,setInfo] = useState({})

const url = 'https://rickandmortyapi.com/api/character'
const getPersonajes = (url)=>{
    fetch(url)
    .then((response)=> response.json())

.then((data)=>{
    setPersonajes(data.results)
    setInfo(data.info)
})}

    useEffect(() => {       
      getPersonajes(url)
    },[])

    
    const onPrevius =()=>{
        getPersonajes(info.prev)
    }
    const onNext =()=>{
        getPersonajes(info.next)
    }

    return ( 
      
            <div className="container mb-5">
                <Pagination prev={info.prev} next={info.next} onPrevius={onPrevius} onNext={onNext}/>

                <Characters personajes={personajes}/>
                <Pagination prev={info.prev} next={info.next} onPrevius={onPrevius} onNext={onNext}/>
            </div>            
                
      
     );
}
 
export default Api;