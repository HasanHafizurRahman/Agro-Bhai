import React, {useState, useEffect} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() =>{
        if(user){
            fetch(`http://localhost:5000/myOrder?user=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
        }
    },[user])
    return (
        <div>
            Your orders: {orders.length}
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
          <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Order</th> 
      </tr>
    </thead>
    <tbody>
      {
          orders.map(o =><tr>
            <th>1</th>
            <td>{o.user.name}</td>
            <td>{o.user.email}</td>
            <td>{o.tool}</td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;