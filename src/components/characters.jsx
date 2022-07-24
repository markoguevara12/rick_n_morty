import React from "react";

const styles ={
    card: {
        backgroundColor:'rgba(60,62,68,1)',maxWidth:350,marginBottom:5,color:'fff'
    }
}

const Characters = ({personajes}) => {
    return ( 
        <>
         <div className="row ">            
               
                {personajes.slice(-8).map((x,i)=>(
                    <div key={i} className="col">                      
                           <div className="card text-light" style={styles.card }>
                             <img className="card" src={x.image} alt=""  />
                             
                             <div className="card-body">    
                                <h5 className="card-title" >{x.name}</h5>
                                <hr/>
                                <h6>Location: {x.location.name}</h6>                                
                                <h6>Status: {x.status} </h6>                              
                                <h6>Gender: {x.gender}</h6>
                             </div>
                           </div>                   
                     </div>
                ))}          
         </div>
        </>
     );
}
 
export default Characters;