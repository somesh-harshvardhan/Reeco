import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { BsCheckLg, BsPrinter, BsSearch } from "react-icons/bs";
import { VscClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { approve, missing, missingUrgent,changeQuantity, changePrice} from "../redux/slices/ItemsSlice";
import Modal from "../modal/Modal";
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
    color: var(--primary-green);
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
  .status-actions {
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
  .approved,
  .missing,
  .missing-urgent {
    color: white;
    border: none;
    background: var(--secondary-green);
    padding: 8px 12px;
    border-radius: 22px;
    cursor: pointer;
  }
  .missing {
    background-color: #d8572a;
  }
  .missing-urgent {
    background-color: #bf0603;
  }
`;
const ModalContent = styled.div`
  min-width: 350px;
  p {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .product {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
  }
  .yesno {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 50px;
    font-weight: 500;
    > span {
      cursor: pointer;
    }
  }
`;
const EditModalContent = styled.div`
  min-width: 40vw;
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 80%;
  }
  .brand {
    font-size: 0.8rem;
    color: gray;
  }
  .wrapper {
    margin-top: 20px;
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    gap: 20px;
  }
  .img-wrapper img {
    height: 120px;
  }
  .action {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 100px;
    margin-bottom: 20px;
  }
  .price .price-input input {
    width: 80px;
    padding: 8px 10px;
    border-radius: 8px;
    border: 1px solid #dedede;
    text-align: center;
  }
  .total{
    column-gap: 150px;
  }
  .reason{
    h3{
        font-size: 1rem;
        font-weight: 600;
        span{
            font-weight: 400;
            font-size: .8rem;
            color: rgba(128, 128, 128,0.3);
        }
    }
  }
  .footer{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;
    margin-top: 30px;
    .cancel{
        color: var(--primary-green);
        font-size: 1rem;
        cursor: pointer;
    }
    .send{
        background: var(--primary-green);
    border: 1px solid green;
    color: white;
    padding: 8px 20px;
    border-radius: 22px;
    cursor: pointer;
    }
  }
`;
const Pill = styled.li`
    list-style: none;
    padding: 8px 10px;
    border:  1px solid #dedede;
    border-radius:22px;
    cursor: pointer;
`
const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    position: relative;
    .action-btn{
     position: absolute;
     background-color: var(--secondary-green);
     color: white;
     font-size: 20px;
     height: 30px;
     width: 30px;
     border-radius: 50%;
     display: flex;
     align-items: center;
     justify-content: center;
     cursor: pointer;
     border: none;
    }
    .subtract{
        left: -50%;
    }
    .add{
        right: -50%;
    }
    input{
        width: 80px;
    padding: 8px 10px;
    border-radius: 8px;
    border: 1px solid #dedede;
    text-align: center;
    }
`
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
    total: price * quantity,
    status: ({ approve, handleOpen, setActiveIndex, handleEditOpen }) => {
      return (
        <div className="status-actions">
          {status === "approved" && (
            <button className="approved">Approved</button>
          )}
          {status === "missing" && <button className="missing">Missing</button>}
          {status === "missing-urgent" && (
            <button className="missing-urgent">Missing Urgent</button>
          )}
          <div className="edit">
            <BsCheckLg
              size={status === "approved" ? 24 : 20}
              onClick={approve}
              color={status === "approved" ? "var(--secondary-green)" : "gray"}
            />
            <VscClose
              size={
                status === "missing" || status === "missing-urgent" ? 24 : 20
              }
              color={
                status === "missing"
                  ? "red"
                  : status === "missing-urgent"
                  ? "darkred"
                  : "gray"
              }
              onClick={() => {
                handleOpen();
                setActiveIndex();
              }}
            />
            <span
              onClick={() => {
                setActiveIndex();
                handleEditOpen();
              }}
            >
              Edit
            </span>
          </div>
        </div>
      );
    },
  };
}
const Quantity = ({ quantity ,setQuantity}) => {
  return (
    <QuantityContainer>
      <button className="subtract action-btn" onClick={()=>setQuantity(prev=>prev - 1)} disabled={quantity===0}>-</button>
      <div className="quantity "><input type="text" disabled value={quantity} /></div>
      <button className="add action-btn" onClick={()=>setQuantity(prev=>prev + 1)}>+</button>
    </QuantityContainer>
  );
};
const OrdersTable = () => {
  const data = useSelector((state) => state.items);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const [quantity,setQuantity] = useState(data[activeIndex]?.quantity);
  const [price,setPrice] = useState(data[activeIndex]?.price);


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
  const handleMissing = () => {
    dispatch(missing({ indx: activeIndex }));
    handleClose();
  };
  const handleMissingUrgent = () => {
    dispatch(missingUrgent({ indx: activeIndex }));
    handleClose();
  };
  const handleSend = ()=>{
    dispatch(changeQuantity({indx : activeIndex,quantity}))
    dispatch(changePrice({indx : activeIndex,price}))
    handleEditClose()
  }
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  const activeProduct = data[activeIndex] ?? {};
  useEffect(()=>{
    setQuantity(data[activeIndex]?.quantity);
    setPrice(data[activeIndex]?.price)
  },[activeIndex])
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
                <TableCell>${item.total}</TableCell>
                <TableCell align="right">
                  <item.status
                    approve={() => handleApprove(indx)}
                    handleOpen={handleOpen}
                    setActiveIndex={() => setActiveIndex(indx)}
                    handleEditOpen={handleEditOpen}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        closeModal={handleClose}
        showCloseIcon
        title={"Missing product"}
      >
        <ModalContent>
          <p>
            Is '
            <span className="product">{data[activeIndex]?.productName}'</span>'
            urgent?
          </p>
          <div className="yesno">
            {" "}
            <span onClick={handleMissing}>No</span>
            <span onClick={handleMissingUrgent}>Yes</span>{" "}
          </div>
        </ModalContent>
      </Modal>
      <Modal open={editOpen} closeModal={handleEditClose} showCloseIcon maxWidth={"auto"}>
        <EditModalContent>
          <h3>{activeProduct.productName}</h3>
          <p className="brand">{activeProduct.brand}</p>

          <div className="wrapper">
            <div className="img-wrapper">
              <img src={activeProduct.productImage} alt="" />
            </div>
            <div className="actions-wrapper">
              <div className="price action">
                <div className="label">Price($)</div>
                <div className="price-input">
                  <input type="number" value={price} onChange={(e)=>setPrice(e.target.value >= 0 ? e.target.value : 0)} />
                </div>
              </div>
              <div className="quantity action">
                <div className="label">Quantity</div>
                <Quantity quantity={quantity} setQuantity={setQuantity}/>
              </div>
              <div className="total action">
                <div className="label">Total</div>
                <div className="div">${quantity * price}</div>
              </div>
            </div>
          </div>
          <div className="reason">
            <h3>Choose Reason <span>(optional)</span></h3>
            <div className="wrapper">
            {
                ["Missing Product","Quantity is not same","Price is not the same","Other"].map((item,indx)=><Pill key={indx}>{item}</Pill>)
            }
            </div>
            
          </div>
          <div className="footer">
            <div className="cancel" onClick={handleEditClose}>Cancel</div>
            <button className="send" onClick={handleSend}>Send</button>
          </div>
        </EditModalContent>
      </Modal>
    </Container>
  );
};

export default OrdersTable;
