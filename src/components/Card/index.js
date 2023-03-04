import React, { useState } from 'react';
import styleCss from './Card.module.scss';

console.log(styleCss);

const Card = (props) => {
  const [isAdd, setIsAdded] = useState(false);
  const onCLickPlus = () => {
    setIsAdded(!isAdd);
  };
  return (
    <div className={styleCss.card}>
      <div className={styleCss.favorite} onClick={props.onFavorite}>
        <img src="/img/heart-un.svg" alt="" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="" />
      <h5>{props.name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Prices:</span>
          <b>{props.price} rub.</b>
        </div>
        <img
          className={styleCss.plus}
          onClick={onCLickPlus}
          src={isAdd ? '/img/green-pl.svg' : '/img/btn-plus.svg'}
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
