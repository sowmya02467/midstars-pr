

import React, { useState , useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

 
export default function HospDetails(){



  const location = useLocation()
  const{name,formatted,lat,lon,city,state,postcode}= location.state
   const [routes , setRoutes] = useState([])
  const [latitude , setLatitude] = useState('')
  const [Longitude , setLongitude] = useState('')
  const [detail , setdetail] = useState('')

  const navigate = () =>{
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition((res)=>{
    setLatitude(res.coords.latitude)
    setLongitude(res.coords.longitude)
  })
}
  }
  navigate()

  function useradderess(){
  
  const currentAddress =` https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${Longitude}&apiKey=c5c9f26e865d4d1683dff5d3cab39b98
  `
  
  fetch(currentAddress).then(result=>result.json())
    .then(response => {
      if (response.features) {
        let userLocation=response.features[0].properties.formatted
        setdetail(userLocation);
      } else {
         console.log("No address found");
      }
    });
  
    }
    useradderess()
   

    
useEffect(()=>{

  axios.get(`https://api.geoapify.com/v1/routing?waypoints=${latitude},${Longitude}|${lat},${lon}&mode=drive&apiKey=c5c9f26e865d4d1683dff5d3cab39b98
   `)
 .then((res)=>{
 setRoutes(res.data.features[0].properties.legs[0].steps)
//  console.log(res.data.features[0].properties.legs[0].steps[0].instruction.text)

      },[])
})


  return(

    <div>
      <Row style={{display:"flex"}}>
            <Col>
            <Card  style={{height:'auto',width:'30rem',border:'1.5px solid grey ',padding:20,margin:'2rem',cursor:'pointer' }}>

                 
                 <Card.Text  style={{borderBottom:'1.5px solid grey',paddingBottom:'0.5rem'}}><b>{name}</b></Card.Text>  
                 <Card.Text> <b>User Latitude :</b> {latitude} </Card.Text>  
                 <Card.Text><b>User Longitude : </b>{Longitude} </Card.Text>  
                 <Card.Text style={{borderBottom:'1.5px solid grey',paddingBottom:'0.5rem'}}><b>User Formatted Addresss : </b> {detail} </Card.Text> 
                 <Card.Text> <b>Hospital Latitude :</b> {lat} </Card.Text>  
                 <Card.Text><b>Hospital Longitude : </b>{lon} </Card.Text>  
                 <Card.Text  style={{borderBottom:'1.5px solid grey',paddingBottom:'0.5rem'}}><b>Hospital Formatted Addresss : </b> {formatted} </Card.Text> 
                 <Card.Text><b>Hospital City :</b>{city}  </Card.Text>  
                 <Card.Text><b>Hospital State : </b>{state} </Card.Text> 
                 <Card.Text><b>Hospital postcode : </b>{postcode} </Card.Text>  
            </Card>
            </Col>


            <Col >




            <Card  style={{height:'auto',width:'30rem',border:'1.5px solid grey ',padding:20,margin:'2rem',cursor:'pointer'}}>
               { 
          routes.map((route,index)=>{
        return(
          <div key={index}>
          
             
                <h6 style={{borderBottom:'1px solid grey',paddingBottom:10, fontSize:"1rem"}}>{route.instruction.text}</h6>
                
          
            
          </div>
        )
    })} 
             
 </Card>
            </Col>
          </Row>
    </div>
  )
}
