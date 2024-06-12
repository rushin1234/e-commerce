import React from 'react';
import { useSelector } from 'react-redux';
import all_product from '../../assets/all_product';
import { useDispatch } from 'react-redux'
import { remove_item } from '../../Store/Features/CartSlicer'
import './Cart.css'
import { Link } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems)
  // console.log(cartItems)
  let cartTotal = 0

  return (
    <div className='shopping-cart'>
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? <p>Your cart is currently empty.</p> : (
        <table border="1" cellPadding="10" >
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              const { id, quantity } = item
              const product = all_product.filter((product) => product.id === id)
              cartTotal += product[0].new_price * quantity

              return <tr key={product[0].id}>
                <td>
                  <Link to={`/${id}`}><img src={product[0].image} alt={product[0].name} width="50" height="50" /></Link>
                </td>
                <td>{product[0].name}</td>
                <td>{quantity}</td>
                <td>${product[0].new_price.toFixed(2)}</td>
                <td>${(product[0].new_price * quantity).toFixed(2)}</td>
                <td>
                  <button className='delete-btn' onClick={() => dispatch(remove_item(id))}><i class="fa-solid fa-trash"></i></button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      )}
      {cartItems.length > 0 && (
        <div>
          <p>Cart Total: ${cartTotal.toFixed(2)}</p>
          {/* Placeholder for checkout button or additional features */}
          <button className='checkout-btn'>Proceed to Checkout ...</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
