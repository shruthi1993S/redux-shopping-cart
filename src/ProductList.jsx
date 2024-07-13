import React from 'react';
import { useCart } from './CartContext';

const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    thumbnail: "https://th.bing.com/th/id/OIP.nLi2A0Beu5RPL7TTAaH2mQHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    title: "iPhone X",
    description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display",
    price: 899,
    thumbnail: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664009491/Croma%20Assets/Communication/Mobiles/Images/243460_0_n90peu.png?tr=w-360",
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    thumbnail: "https://i5.walmartimages.com/asr/80aad70e-23d9-4bac-b938-2a64c5e7a563.2e769bfe8c5e1dc83053b6edb4d053ff.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    thumbnail: "https://th.bing.com/th/id/OIP.NVjAsUo7L-NzmtBBS5H09gHaHE?rs=1&pid=ImgDetMain",
  },
  {
    id: 5,
    title: "Huawei P30",
    description: "Huawei’s re-badged P30 Pro New Edition unveiled in Germany.",
    price: 499,
    thumbnail: "https://img.gkbcdn.com/s3/p/2019-03-27/huawei-p30-pro-6-47-inch-8gb-256gb-smartphone-black-1574132270692.jpg",
  }
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.thumbnail} alt={product.title} />
          <h4>{product.title}</h4>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
