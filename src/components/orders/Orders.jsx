import React from 'react'
import Layout from '../shared/layout/Layout'
import styled from 'styled-components'
const ApproveOrderBtn = styled.button`
    padding: 8px 12px;
    background-color: green;
    color: white;
    border-radius: 22px;
    border: none;
    cursor: pointer;
`
const actionButton  = ()=><ApproveOrderBtn>Approve Order</ApproveOrderBtn>
const Orders = () => {

const pageDetailsProps = {
    title : 'Order 12345ABC',
    action : actionButton
}
  return (
    <Layout pageDetailsProps={pageDetailsProps}>
        
    </Layout>
  )
}

export default Orders