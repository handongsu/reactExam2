import React, { useState } from 'react';
import { Buttons } from './Button';
import './Input.css';

function Input() {
  const [pro, setPro] = useState("");
  return (

    <div className='inputSec'>
      <p>나는 <input type='text' placeholder='예)프로그래밍'/>전문가가 될 것이다.<br/>
      그래서 앞으로 매일 하루에 <input type='number' placeholder='예)5시간'/>씩 훈련 할 것이다.</p>

        <button type='submit' className='btnSubmit'>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>

    </div>

  )
}

export default Input