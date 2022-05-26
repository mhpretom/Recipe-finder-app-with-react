

import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import{useParams} from "react-router-dom";

function Recipe() {
  const[details,setDetails]=useState({});
  const [activeTab,setActiveTab]=useState("instructions");

  const params=useParams();

  const getDetails=async(name)=>{
    const response=await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=ddf73d090b754d0aa4a6617539ad429f`);
    const data=await response.json();
    setDetails(data);
  }

  useEffect(()=>{
    getDetails(params.name);
    
  },[params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>
          {details.title}
        </h2>
        <img src={details.image} alt="..." />
      </div>
      <Info>
        <Button className={activeTab === "instructions"? "active": ""}
        onClick={()=>{
          setActiveTab("instructions")
        }}>Instructions</Button>
        <Button className={activeTab === "ingredients"? "active":""}
        onClick={()=>{
          setActiveTab("ingredients")
        }}>Ingredients</Button>
        <div>
          <Summary dangerouslySetInnerHTML={{__html: details.summary}}></Summary>
          <Instructions dangerouslySetInnerHTML={{__html: details.instructions}}></Instructions>
        </div>
        
      </Info>
    </DetailWrapper>
  )
}


const DetailWrapper=styled.div`
  margin-top: 10rem;
  margin-bottom:5rem;
  display:flex;
  .active{
    background:linear-gradient(35deg,#494949,#313131);
    color:white;
  }

  h2{
    margin-bottom: 2rem;
  }

  li{
    font-size:1.2rem;
    line-height:2.5rem;
  }
  ul{
    margin-top:2rem;
  }
  
`
const Button=styled.button`
  padding:1rem 2rem;
  color: #313131;;
  background:white;
  border:2px solid black;
  margin-right:2rem;
  font-weight:600;
  cursor:pointer;
`
const Info=styled.div`
  margin-left:10rem;
`
const Summary=styled.h3`
    text-align:justify;
    font-size:15px;
`
const Instructions=styled.h3`
    text-align:justify;
    font-size:15px;
`


export default Recipe;