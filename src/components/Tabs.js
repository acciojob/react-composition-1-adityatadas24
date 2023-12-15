import React, { useState } from "react";

const Tabs=({setTabs})=>{

const [data, setData]= useState(setTabs[0]);


return(
    <div>
        <ul>
           { 
              setTabs.map((tab)=>(
                  <li onClick={()=>setData(tab)}>{tab.title}</li>
              ))
           }
           <div>
              { data && <p>{data.content}</p>}
           </div>
        </ul>
        
    </div>
)

}

export default Tabs