import { useParams } from 'react-router-dom';
import './Product.css'
import all_product from '../../assets/all_product'

import { useDispatch } from 'react-redux'
import { add_to_cart } from '../../Store/Features/CartSlicer'

const Product = () => {
  const dispatch = useDispatch()

  const { productId } = useParams()
  const product = all_product.filter((product, i) => {
    return product.id === Number(productId)
  })

  return (
    <div className='product'>
      <img src={product[0].image} alt={product[0].name} className='productImage' />
      <div className="product-info">
        <h1 className='productName'>{product[0].name}</h1>
        <p className='productDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae eum modi natus aspernatur quo eveniet aliquam totam quae tenetur fuga, accusamus fugit quas velit sed odio et quaerat ratione rerum magnam similique, eos dolorem? Modi ullam vero nobis quam ipsum, harum, fuga eum temporibus iure nam dignissimos perspiciatis vel.</p>
        <span className='productPrice'>Price: ${product[0].new_price} <span className='old-price'>${product[0].old_price}</span></span>
        <button onClick={()=>dispatch(add_to_cart(productId))} className='addToCartButton'>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product
