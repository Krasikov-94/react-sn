import React from 'react';

const Drawer = () => {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className=" d-flex justify-between mb-20">
          Cart
          <img className="removeItem cu-p" src="/img/plus-+.svg" alt="" />
        </h2>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(img/sneakers/s1.jpg)' }}
              className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 rub.</b>
            </div>
            <img className="removeItem" src="/img/plus-+.svg" alt="" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(img/sneakers/s1.jpg)' }}
              className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 rub.</b>
            </div>
            <img className="removeItem" src="/img/plus-+.svg" alt="" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(img/sneakers/s1.jpg)' }}
              className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 rub.</b>
            </div>
            <img className="removeItem" src="/img/plus-+.svg" alt="" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/array.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
