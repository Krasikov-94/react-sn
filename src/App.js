import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const cardItem = [
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '12990',
    imageUrl: '/img/sneakers/s1.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: '11490',
    imageUrl: '/img/sneakers/s2.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '17100',
    imageUrl: '/img/sneakers/s3.jpg',
  },
  {
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    price: '21300',
    imageUrl: '/img/sneakers/s4.jpg',
  },
  {
    name: 'Мужские Кроссовки Under Armour Curry 8',
    price: '8999',
    imageUrl: '/img/sneakers/s5.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Kyrie 7',
    price: '11990',
    imageUrl: '/img/sneakers/s6.jpg',
  },
  {
    name: 'Мужские Кроссовки Jordan Air Jordan 11',
    price: '12990',
    imageUrl: '/img/sneakers/s7.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike LeBron XVIII',
    price: '16780',
    imageUrl: '/img/sneakers/s8.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Lebron XVIII Low',
    price: '10190',
    imageUrl: '/img/sneakers/s9.jpg',
  },
  {
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    price: '12110',
    imageUrl: '/img/sneakers/s10.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '10990',
    imageUrl: '/img/sneakers/s11.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
    price: '23990',
    imageUrl: '/img/sneakers/s5.jpg',
  },
];
function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search" />
          </div>
        </div>
        <div className="d-flex">
          {cardItem.map((el) => (
            <Card name={el.name} price={el.price} imageUrl={el.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
