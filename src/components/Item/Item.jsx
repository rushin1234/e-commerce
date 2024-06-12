import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css'

import {Link} from 'react-router-dom'

function Item({product}) {
  return (
    <Link to={`/${product.id}`}><Card style={{ width: '18rem' }} className='item'>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        
        <Button variant="primary">${product.new_price}</Button>
      </Card.Body>
    </Card></Link>
  );
}

export default Item;