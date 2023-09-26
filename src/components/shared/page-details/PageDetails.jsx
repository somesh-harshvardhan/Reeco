import React from "react";
import styled from "styled-components";

const PageDetailsContainer = styled.div`
  padding: 14px 80px;
  box-shadow: 0 0 5px rgba(0,0,0,.3);
  position: relative;
  z-index: 1;
`;
const BreadCrumbsContainer = styled.ul`
    list-style:  none;
    display: flex;
    color: rgba(0,0,0,.6);
    & > li > a{
        text-decoration: none;
        color: inherit;
        white-space: pre;

    }

`
const DetailsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 14px;
    
    .title{
        font-size: 24px;
        font-weight: 600;
    }
    .back-btn{
        color: green;
        border: 1px solid green;
        background: transparent;
        padding: 8px 12px;
        border-radius: 22px;
        cursor: pointer;
    }
    .action{
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 14px
    }
`
const BreadCrumbs = ({ locations }) => (
  <BreadCrumbsContainer>
    {locations.map((item, indx) => (
      <li key={indx}>
        <a href={item.url} style={{ textDecoration :  indx === locations.length - 1 ? 'underline' : 'none'}}>{`${item.pathname} ${
          indx !== locations.length - 1 ? ( "> ") : ''
        }`}</a>
      </li>
    ))}
  </BreadCrumbsContainer>
);
const PageDetails = ({ title, action : Action=()=><></>,showBack=true,backText="Back"}) => {
  const locations = [
    {
      url: "#",
      pathname : 'Orders'
    },
    {
        url : '#',
        pathname : 'Order 12345ABC'
    },
  ];
  return <PageDetailsContainer>
  <BreadCrumbs locations={locations}/> 
  <DetailsContainer>
    <h4 className="title">{title}</h4>
    <div className="action">
     {showBack && <button className="back-btn">{backText}</button>}
     {<Action/>}
    </div>
  </DetailsContainer>
  </PageDetailsContainer>;
};

export default PageDetails;
