

import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
 import axios from "axios";
 import { Navigate, useNavigate } from "react-router-dom";


//  here i am using the ecommerence web site of the geo apify  fom the thirs party api link of hospital list in our location
// first assign the geoapify link and pair the key if our geo apy link
const details =`https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:78.0817225,17.6155151,5000&bias=proximity:78.0817225,17.6155151&limit=20&apiKey=c5c9f26e865d4d1683dff5d3cab39b98
`

 export default function Hops(){



// here usin te usestate hook from from react
    const [ detail, setDetail] = useState([]);
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(details).then((res)=>{
            console.log(res.data.features)
            setDetail(res.data.features)
        }, [])
    })
    
   
    
    return(

        <div style={{ adding:40,display:'flex',flexWrap:'wrap',justifyContent:'center'}} > 

        { detail.map((hosp,index)=>{
            return(
                <div key={index}>
                <Card        onClick={()=> navigate(`/detail/properties/${hosp.properties.name}`,{state:hosp.properties})}   style={{ height:'auto',width:'30rem',border:'1.5px solid grey ',padding:20,margin:'2rem',cursor:'pointer' }}>
                     <Card.Text  style={{borderBottom:'1px solid grey',paddingBottom:10}}> {hosp.properties.name} </Card.Text>
               
                     <Card.Text>{hosp.properties.address_line2} </Card.Text>
               
               </Card>
                </div>
            )
        }) }
      
        </div>
    )
 }

