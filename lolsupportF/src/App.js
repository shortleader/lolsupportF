import React, { Component, useState, useEffect } from 'react';
import './App.css';
import customAxios from './customAxios';

function App() {
  const [ip, setIp] = useState('');
  function callback(data) {
    setIp(data);
  }
  useEffect(
    () => {
      customAxios('/ip', callback);
    }, []
  );

  return (
    <div className="App">
      Your IP : {ip} ^.^
      <div className="divStyle3">
        <div className="leftSideBar">

        </div>
        <div className="bodyDiv">
          <div className="bodyMainDiv">
            <div>
              <div className="news_top">- 금주의 로테이션  챔피언</div>
              <div className="news_box"></div> 
              <div className="news_top">- 현재 진행중인 챔피언 및 스킨 세일</div>
              <div className="news_box">
                <ul>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="news_top">- 최근 패치 내용</div>
              <div className="news_box">
                <ul>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className=""></div>
              <div className="news_top">- 밴, 픽, 승률 TOP 10 (랭크게임 전체)</div>
              <div className="news_nox">
                <table className="">

                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSideBar">

        </div>
        <div className="neo_bottom_center">
          <br/>
          
          Copyright(c) fow.kr |
          <a>이용약관</a>
            | 
          <a>
            <b>개인정보취급방침</b>
          </a>
            | 
          <img></img>
          <br/>
          <hr/>
          <span>
            FOW.KR isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
