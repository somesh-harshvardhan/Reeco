import React from 'react'
import styled from 'styled-components'
import { statsData } from '../../../data'
const StatsContainer =styled.div`
 display: flex;
 background-color: white;
 border-radius: 8px;
 border: 1px solid #DBDFEA;
 padding: 18px 0px;
 align-items: stretch;
 .stat{
    flex: 1;
    padding-right: 30px;
    padding-left: 30px;
    padding-top: 8px;
    h3{
        font-size: 14px;
        color: gray;
        font-weight: 600;
        text-transform: capitalize;
    }
    p{  
        margin-top: 4px;
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
    }
 }
 .stat:not(:last-child){
    border-right: 1px solid #DBDFEA;

 }
`
const Stats = () => {
  return (
    <StatsContainer>
     {statsData.map((item,indx)=><div key={indx} className='stat'>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
     </div>)}
    </StatsContainer>
  )
}

export default Stats