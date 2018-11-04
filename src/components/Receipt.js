import React from 'react';

const Receipt = (props) => {
  const {receipt} = props;

  if (Object.keys(receipt.list).length) {
    return (
      <>
        <ul>
          {
            Object.entries(receipt.list).map(item => {
              const [itemName, itemCount] = item;

              return (
                <li key={itemName}>{itemName}: {itemCount}</li>
              );
            })
          }
        </ul>
        <p>Total: {receipt.totalPrice}</p>
      </>
    )
  } else {
    return (
      <p>Receipt is empty</p>
    )
  }
};

export default Receipt;
