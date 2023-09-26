import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { BsCheckLg, BsPrinter, BsSearch } from "react-icons/bs";
import { VscClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { approve } from "../redux/slices/ItemsSlice";
const Container = styled.div`
  background-color: white;
  border-radius: 8px;
  border: 1px solid #dbdfea;
  padding: 18px 30px;
  margin-top: 30px;
`;
const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .add-btn {
    color: green;
    border: 1px solid green;
    background: transparent;
    padding: 8px 12px;
    border-radius: 22px;
    cursor: pointer;
  }
  .wrapper {
    display: flex;
    align-items: center;
    gap: 34px;
  }
`;
const SearchContainer = styled.div`
  flex-basis: 40%;
  display: flex;
  align-items: center;
  border: 1px solid #dbdfea;
  padding: 8px 12px;
  border-radius: 22px;
  input {
    border: none;
    flex: 1;
    outline: none;
  }
`;
const TableWrapper = styled.div`
  table {
    border-collapse: separate;
  }
  th:first-child {
    border-left: 1px solid #dbdfea;
    border-top-left-radius: 8px;
  }
  th:last-child {
    border-right: 1px solid #dbdfea;
    border-top-right-radius: 8px;
  }
  th {
    border-top: 1px solid #dbdfea;
    border-bottom: 1px solid #dbdfea;
    padding: 8px !important;
  }
  tr td:last-child {
    background-color: #f1efef;
  }
  .product {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  img {
    height: 50px;
  }
  .status-actions{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .edit {
    margin-left: auto;
    justify-items: center;
    display: flex;
    align-items: center;
    gap: 14px;

    > * {
      cursor: pointer;
    }
  }
  .approved{
    color: white;
    border: 1px solid green;
    background: green;
    padding: 8px 12px;
    border-radius: 22px;
    cursor: pointer;
  }
`;
const Search = () => {
  const [search, setSearch] = useState("");
  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
  return (
    <SearchContainer>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search..."
      />
      <BsSearch color="rgba(0,0,0,.4)" />
    </SearchContainer>
  );
};

const Actions = ({ children }) => {
  return (
    <ActionsWrapper>
      {children}
      <div className="wrapper">
        <button className="add-btn"> Add item</button>
        <BsPrinter color="green" size={20} />
      </div>
    </ActionsWrapper>
  );
};

function createData(productName, productImage, brand, price, quantity, status) {
  return {
    productName: (
      <div className="product">
        <img src={productImage} alt="" /> <span>{productName}</span>{" "}
      </div>
    ),
    brand: brand,
    price: `$${price}`,
    quantity: quantity,
    status: ({ approve}) => {
      console.log(status)
      return (
        <div className="status-actions">
        {status === 'approved' && <button className="approved">Approved</button>}
        <div className="edit">
          <BsCheckLg size={20} onClick={approve}  color={status === 'approved' ? 'green' : 'gray'}/>
          <VscClose size={20} color={status === 'missing' ? 'red' :  status === "missing-urgent" ? 'darkred':'gray' } />
          <span>Edit</span>
        </div>
        </div>
      );
    },
  };
}
const OrdersTable = () => {
  const data = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const rows = data.map((item, indx) =>
    createData(
      item.productName,
      item.productImage,
      item.brand,
      item.price,
      item.quantity,
      item.status
    )
  );
  const handleApprove = (indx) => {
    dispatch(approve({ indx }));
  };
  console.log(data);
  return (
    <Container>
      <Actions>
        <Search />
      </Actions>

      <TableContainer component={TableWrapper} sx={{ marginTop: "40px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Product name</TableCell>
              <TableCell align="left" width={100}>
                Brand
              </TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">Total</TableCell>
              <TableCell align="left" width={300}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((item, indx) => (
              <TableRow key={indx}>
                <TableCell>{item.productName}</TableCell>
                <TableCell>{item.brand}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>0</TableCell>
                <TableCell align="right">
                  <item.status
                    approve={() => handleApprove(indx)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default OrdersTable;
