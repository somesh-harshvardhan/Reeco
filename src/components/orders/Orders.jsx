import React from 'react'
import Layout from '../shared/layout/Layout'
import styled from 'styled-components'
import Stats from './Stats'
import OrdersTable from './OrdersTable'
const ApproveOrderBtn = styled.button`
    padding: 8px 12px;
    background-color: var(--primary-green);
    color: white;
    border-radius: 22px;
    border: none;
    cursor: pointer;
`
const Container = styled.main`
 padding: 20px 80px;
  background-color: #EEEEEE;
  min-height: 100vh;
`
const actionButton  = ()=><ApproveOrderBtn>Approve Order</ApproveOrderBtn>
const Orders = () => {

const pageDetailsProps = {
    title : 'Order 12345ABC',
    action : actionButton
}
  return (
    <Layout pageDetailsProps={pageDetailsProps}>
        <Container>
         <Stats/>
         <OrdersTable/>
        </Container>
    </Layout>
  )
}

export default Orders