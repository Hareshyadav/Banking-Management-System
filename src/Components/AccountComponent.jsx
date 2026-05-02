import { useNavigate, useParams } from 'react-router-dom';
import React, {useEffect, useState } from 'react';
import {createAccount} from '../services/AccountServices';
import {getAccountById, updateEmployee} from '../services/AccountServices';

const AccountComponent = () => {

  const [accountHolderName, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [balance, setBalance] = useState("");
  const navigate = useNavigate();
   
  const {id} = useParams();
  useEffect(() => {
    if(id) {
       getAccountById(id)
       .then(response => {
        setName(response.data.accountHolderName);
        setAccountNumber(response.data.accountNumber);
        setBalance(response.data.balance);
       }).catch((error) => {
        console.log(error);
       });
    }}, [id]);
    function saveAccount(e) {
      console.log("ee",e.target.value);
      e.preventDefault();
      const account = {accountHolderName, accountNumber, balance};
      console.log(account);
      if(id) {
        updateEmployee(id,account).then((response) => {
          console.log(response.data);
          navigate("/all-accounts");
        }). catch((error) => {
          console.log(error);
        });
      } else {
       createAccount(account).then((response) => {
        console.log(response.data);
        navigate("/all-accounts");
      }). catch((error) => {
        console.log(error);
      });
    }
    }  
  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <h2 className="text-center">Account Details</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Account Holder Name</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="form-control"
                  value={accountHolderName}
                  onChange={(e)=> setName(e.target.value)}>
                </input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Account number</label>
                <input className="form-control"
                  type="text"
                  placeholder='Enter the Account-Number'
                  value={accountNumber}
                  onChange={(e)=> setAccountNumber(e.target.value)}></input>
              </div>
              <div className="form-group mb-2">
                <label className="from-label">balance</label>
                <input className="form-control"
                  type="text"
                  placeholder="Enter your balance"
                  value={balance} 
                  onChange={(e)=> setBalance(e.target.value)}></input>
              </div>
              <div className="form-group mb-2">
                <button className="btn btn-success" onClick={saveAccount}>Submit</button>

              </div>
              </form>
          </div>
        </div>
      </div>
   </div>
  )
  
}


export default AccountComponent