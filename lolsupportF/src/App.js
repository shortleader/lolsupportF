import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import GameInfo from './components/GameInfo';
import SearchBar from './components/SearchBar';
import { Container } from 'reactstrap';
// import customAxios from './customAxios';

/**
 * es6+ => es5 : babel 
 */
/**
 * export default : 모듈당 딱 1개만 존재
 * export : 모듈 당 여러개 존재 
 * export {A,B}
 * import {A,B} 
 * export default A; 
 * import A 
 */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      GameList: []
    }
  }


  componentDidMount() {
    /*this.loadGame();*/
  }


  /**
   * response : {data : [] , status : 200 , ...}
   */
  loadGame = async (summonerName) => {
    console.log(summonerName);
    await axios.get("http://localhost:8888/search?summonerName="+summonerName)
      .then(({ data }) => {
        this.setState({
          loading: true,
          GameList: data.games
        });
      }).catch(e => {
        console.error(e);
        this.setState({
          loading: false
        });
      });

    // const response = await axios.get('xxx').then(res => (res.status === 200 ? res.data : ({ error: res }))).catch(error => ({error})); 
    // if(!response || response.error) {
    //   //error handling 
    // }else {
    //   //success handling 

    // }

    
  };

  state = {
    summonerName: ''
  }

  onChange = (e) => {
    this.setState({
        summonerName: e.target.value
    });
  };




  render() {
    const { GameList } = this.state;
    console.log(GameList);

    return (
      <div className="App">
      <div>
      <div className="divStyle">
        {
          <SearchBar value2={this.loadGame}
            value3={this.onChange}
            value4={this.state.summonerName}
          />
        }
        {/* <div className="div_main">
          <div id="searchContainer" className="searchContainer">
            <div className="tipsy_live" tipsy="FOW.KR 로고" id="fow_logo" >
              <a href="/">
                <img className="img" alt="FOW.KR LOGO" src={process.env.PUBLIC_URL + '/img/logo2_1280.png'} height="45px"></img>
              </a>
            </div>
            <input className="searchText" type="text" id="field" autoComplete="off"></input>
            <input className="searchButton" type="submit" id="submit"></input>
          </div>
        </div> */}
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

        <div className="divStyle3">
          <div className="leftSideBar">

          </div>
          <div className="bodyDiv">
            <div className="bodyMainDiv">
              <div className="table1">
                <div className="row1">
                  <div className="col1 cell">승</div>
                  <div className="col2 cell">챔피언</div>
                  <div className="col3 cell">타입</div>
                  <div className="col4 cell">KDA</div>
                  <div className="col5 cell">킬관여</div>
                  <div className="col6 cell">S/R</div>
                  <div className="col7 cell">팀</div>
                  <div className="col8 cell">아이템</div>
                  <div className="col9 cell">LV/G/CS</div>
                  <div className="col10 cell">플레이시간</div>
                  <div className="col11 cell">와드</div>
                  <div className="col12 cell">+</div>
                </div>
                {/* <Container fluid={true} > */}
                  {
                    (GameList).map(game => (
                      <GameInfo value={game} />
                    ))
                  }
                {/* </Container> */}
                {/* {
                  (function () {
                    if (GameList.games) {
                      const game = [];
                      for (const [index, value] of GameList.games.entries()) {
                        game.push(
                          <div className="row2">
                            <div className="col1 cell">
                              {value.win}
                            </div>
                            <div className="col2 cell">
                              {value.participantIndex}
                            </div>
                            <div className="col3 cell">
                              {value.gameMode}
                            </div>
                            <div className="col4 cell">
                              {value.kills} / {value.deaths} / {value.assists}
                            </div>
                            <div className="col5 cell">
                              {value.participation}
                            </div>
                            <div className="col6 cell">
                              {value.spell1Id}, {value.spell2Id}
                            </div>
                            <div className="col7 cell">
                              {value.spell1Id}, {value.spell2Id}
                            </div>
                            <div className="col8 cell">
                              {value.item0}, {value.item1}
                            </div>
                            <div className="col9 cell">
                              {value.championLevel}, {value.goldEarned}, {value.totalMinionsKilled}
                            </div>
                            <div className="col10 cell">
                              {value.gameDuration}
                            </div>
                            <div className="col11 cell">
                              {value.wardsPlaced} / {value.wardsKilled} / {value.visionWardsBoughtInGame}
                            </div>
                            <div className="col12 cell">
                              +
                              </div>
                          </div>
                        )
                      }
                      return (
                        game
                      )
                    } else {

                    }
                  })()
                } */}
                {/* <div className="col1 cell">{ip.gameId}</div>
                  <div className="col2 cell">{ip.teams[0].inhibitorKills}</div>
                  <div className="col3 cell">{ip.gameMode}</div>
                  <div className="col4 cell">{ip.participants[2].stats.kills}/{ip.participants[2].stats.deaths}/{ip.participants[2].stats.assists}</div>
                  <div className="col5 cell">킬관여</div>
                  <div className="col6 cell">{ip.participants[2].stats.perk0} / {ip.participants[2].stats.perk4} </div>
                  <div className="col7 cell">팀</div>
                  <div className="col8 cell">{ip.participants[2].stats.item0} / {ip.participants[2].stats.item1} / {ip.participants[2].stats.item2} / {ip.participants[2].stats.item3} / {ip.participants[2].stats.item4} / {ip.participants[2].stats.item5}</div>
                  <div className="col9 cell">{ip.participants[2].stats.champLevel}/{ip.participants[2].stats.goldEarned}/{ip.participants[2].stats.totalMinionsKilled}</div>
                  <div className="col10 cell">플레이시간</div>
                  <div className="col11 cell">와드</div>
                  <div className="col12 cell">+</div>                */}
              </div>
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
            <br />

            Copyright(c) fow.kr |
            <a>이용약관</a>
              |
            <a>
              <b>개인정보취급방침</b>
            </a>
              |
            <img></img>
            <br />
            <hr />
            <span>
              FOW.KR isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
