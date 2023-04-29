import "./ProductCart.css";
import { Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'


function ProductCart({ product }) {
  const { id, title, category, price, image } = product;

  return (
    <Link to={`/productDetail/${id} `} style={{ textDecoration: "none" }} className="card">
      <div className="product-info">
        <p>{title}</p>
        <p>{category}</p>
        <p className="rate">
          <AiFillStar style={{color: "var(--primary-color)", fontSize: '20px'}}/>
          <AiFillStar style={{color: "var(--primary-color)", fontSize: '20px'}}/>
          <AiFillStar style={{color: "var(--primary-color)", fontSize: '20px'}}/>
        {product.rating.rate}
        </p>
        <p>$ {price}</p>
      </div>
      <div className="card-img">
        <img src={image} alt="" />
      </div>
    </Link>
  );
}

export default ProductCart;
