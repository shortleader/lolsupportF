/**
 * 컴포넌트 생성 방법 
 * 1. class 형 
 *  state 
 *  this.state 
 * this.props 
 * this. 붙여 
 * 
 * 2. 함수형  
 * 순수 presentational 역할 . 값만 받아서 렌더링 시켜주는. 껍다구. 
 * this 안부여도돼. 
 * react hook 이 나옴
 * 함수형에서도 state 쓸수이게돼ㅔㅆ어.
 * 그래서 그 이후로부터는 대부분. 함수형으로 컴포넌트를 작성해
 * 
 */

import React from 'react';


const SearchBar = ({value2, value3, value4}) => (

    <div className="divStyle">
        <div className="div_main">
            <div id="searchContainer" className="searchContainer">
                <div className="tipsy_live" tipsy="FOW.KR 로고" id="fow_logo" >
                    <a href="/">
                        <img className="img" alt="FOW.KR LOGO" src={process.env.PUBLIC_URL + '/img/logo2_1280.png'} height="45px"></img>
                    </a>
                </div>
                <input className="searchText" value={value4} type="text" id="field" autoComplete="off" onChange={value3}></input>

                <input onClick={(e) => value2(value4)} className="searchButton" type="submit" id="submit"></input>
            </div>
        </div>
    </div>
);

export default SearchBar;