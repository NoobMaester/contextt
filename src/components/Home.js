import { faker} from '@faker-js/faker';
import { useState } from 'react';
import Product from './Product';


faker.seed(100);

const Home = () => {

  const allProducts = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.fashion(),
  }));

  const [products] = useState(allProducts);

  return (
    <div className='container'>
      {products.map(prod => (
        <Product prod = {prod} key = {prod.id}/>
      ))}
    </div>
  )
}

export default Home;