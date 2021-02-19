import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import TabMenu from './components/TabMenu';
import SearchBar from './components/SearchBar';
import GameListTop from './components/GameListTop';
import GameInfo from './components/GameInfo';
import Copyright from './components/Copyright';
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
        <SearchBar value2={this.loadGame}
            value3={this.onChange}
            value4={this.state.summonerName}
        />
        <TabMenu/>
        <div className="divStyle3">
          <div className="leftSideBar">

          </div>
          <div className="bodyDiv">
            <div className="bodyMainDiv">
              <div className="table1">
                <GameListTop/>
                {/* </Container> */}
                {/* <Container fluid={true} > */}
                  {
                    (GameList).map(game => (
                      <GameInfo value={game} />
                    ))
                  }
              </div>
            </div>
          </div>
          <div className="rightSideBar">
          </div>
          <Copyright/>
        </div>
      </div>
    );
  }
}

export default App;
