import React from 'react';
import { Dialog, DialogContent, Slide } from '@mui/material';
import {AiOutlineClose} from 'react-icons/ai';
import styled from 'styled-components';

const FlexBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props=>props.justify ? props.justify : 'flex-start'};
    ${props=>props.extraStyles};
    .dialog-title-text{
        font-weight: 600;
    }
`

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const Modal = (props) => {
  const {
    closeModal,
    children,
    maxWidth,
    title,
    showCloseIcon,
    open
  } = props;

  const dialogProps = {
    maxWidth,
    open,
    onClose: closeModal
  };

  const handleKeydown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <Dialog
      TransitionComponent={Transition}
      {...dialogProps}
      disableEnforceFocus
      onKeyDown={handleKeydown}
    >

      <DialogContent>
        <FlexBox justify={'space-between'}>
          {title ? <h4 className="dialog-title-text">{title}</h4> : ''}
          {showCloseIcon && (
            <FlexBox extraStyles={{marginLeft : 'auto'}}>
              <AiOutlineClose onClick={closeModal} size={20}/>
            </FlexBox>
          )}
        </FlexBox>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
