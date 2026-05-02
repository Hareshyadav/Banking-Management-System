import React, { useEffect, useState } from 'react';
// import { ListAccountComponent } from '../services/AccountServices';
import { useNavigate } from 'react-router-dom';
import { listAccount,deleteAccount } from '../services/AccountServices'; 
import {  } from '../services/AccountServices';
const ListAccountComponent = () => {
  // const dummyData = [
  //   {
  //     id: 1,
  //     holderName: "Product A",
  //     accountNumber: 100,
  //     balance: 2
  //   },
  //   {
  //     id: 2,
  //     holderName: "Product B",
  //     accountNumber: 200,
  //     balance: 5
  //   },
  //   {
  //     id: 3,
  //     holderName: "Product C",
  //     accountNumber: 300,
  //     balance: 1
  //   }
  // ];
  const navigator = useNavigate();
 const [Accounts , setAccounts] = useState([]);
 useEffect(() => {
  getAllAccounts();
  }, []);
  function getAllAccounts() {
    listAccount().then((response) => {
      console.log(response);
      setAccounts(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }
  function addNewaccount() {
    console.log("New Account");
    navigator("/add-account");
  }

  function updateAccount(id) {
    console.log("Update Account with id: ", id);
    navigator(`/update-account/${id}`);
  }
   function deleteCostomer(id) {
    console.log("Delete Account with id: ", id);
    deleteAccount(id).then((response) => {
      console.log(response.data);
      getAllAccounts();
    }).catch((error) => {console.log(error);
    });
    // Implement delete functionality here
  }
  return (
    <div className="container">
      <h2 className="text-center" >Accounts List</h2>
      <button className="btn btn-primary" onClick={addNewaccount}>
        Add Account
      </button>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Account Id</th>
            <th>Account Holder Name</th>
            <th>Account Number</th>
            <th>balance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            Accounts.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.accountHolderName}</td>
                <td>{item.accountNumber}</td>
                <td>{item.balance}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => updateAccount(item.id)}>Update</button>
                  <button className="btn btn-danger" onClick={() => deleteCostomer(item.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
export default ListAccountComponent