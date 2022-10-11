import react, { useEffect, useState } from "react";
const arr = [
  {
    tokenId: 5,
    contractAddress: "0x01",
    txType: "sale",
    value: 0.01,
  },
  {
    tokenId: 3,
    contractAddress: "0x06",
    txType: "sale",
    value: 0.05,
  },
  {
    tokenId: 5,
    contractAddress: "0x01",
    txType: "mint",
    value: 0.005,
  },
  {
    tokenId: 4,
    contractAddress: "0x09",
    txType: "sale",
    value: 0.02,
  },
  {
    tokenId: 3,
    contractAddress: "0x04",
    txType: "mint",
    value: 0.012,
  },
  {
    tokenId: 3,
    contractAddress: "0x06",
    txType: "mint",
    value: 0.032,
  },
];
const TxArrayRebuilding = () => {
  const [newArray, setNewArray] = useState([]);
  useEffect(() => {
    let temp_arr = [];
    arr.forEach((item_1) => {
      let flag = false;
      arr.forEach((item_2) => {
        if (
          item_1.txType !== item_2.txType &&
          item_1.contractAddress === item_2.contractAddress &&
          item_1.tokenId === item_2.tokenId
        ) {
          item_1.txType === "sale"
            ? temp_arr.push({
                ...item_1,
                sellValue: item_1.value,
                buyValue: item_2.value,
              })
            : temp_arr.push({
                ...item_1,
                buyValue: item_1.value,
                sellValue: item_2.value,
              });
          flag = true;
          return;
        }
      });
      if (!flag) temp_arr.push(item_1);
    });
    setNewArray(temp_arr);
  }, []);
  console.log(newArray);
  return (
    <></>
  );
};

export default TxArrayRebuilding;
