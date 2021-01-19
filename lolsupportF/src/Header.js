import React, { Component } from 'react';
import './common/common.css';

function Header() {
  return (
    <div>
      <div className="divStyle">
        <div className="div_main">
          <div id="searchContainer" className="searchContainer">
            <div className="tipsy_live" tipsy="FOW.KR 로고" id="fow_logo" >
              <a href="/">
                <img className="img" alt="FOW.KR LOGO" src={process.env.PUBLIC_URL + '/img/logo2_1280.png'} height="45px"></img>
              </a>
            </div>
            <input className="searchText" type="text" id="field" autoComplete="off"></input>
            <input className="searchButton" type="submit" id="submit"></input>
          </div>
        </div>
      </div>
      <div className="divStyle2">
        <div className="neo_menu_center">
          <div className="neo_menu_table">
            <a className="neo_menu_cell" href="/">홈</a>
            <a className="neo_menu_cell" href="/">챔피언</a>
            <a className="neo_menu_cell" href="/">챔피언통계</a>
            <a className="neo_menu_cell" href="/">랭킹</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
