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
import { Row, Col } from 'reactstrap';


//암묵적 return. 중괄호 = {} 로 열면 명시적으로 return 해주어야 댐 
const GameInfo = ({ value }) => (
    <Row>
        <Col className="col1 cell">
            {value.win}
        </Col>
        <Col className="col2 cell">
            <img src={value.myChampion} width="50px"></img>
            
        </Col>
        <Col className="col3 cell">
            {value.gameQueueType}
        </Col>
        <Col className="col4 cell">
            {value.kills} / {value.deaths} / {value.assists}
        </Col>
        <Col className="col5 cell">
            {value.participation}%
        </Col>
        <Col className="col6 cell">
            <img src={value.spell1Id } width="50px"></img><img src={value.spell2Id} width="50px"></img>
            {/* {(value.array).map(item => (

            ))} */}
        </Col>
        <Col className="col7 cell">
            {value.spell1Id}, {value.spell2Id}
        </Col>
        <Col className="col8 cell">
            {value.item0}, {value.item1}
        </Col>
        <Col className="col9 cell">
            {value.championLevel}, {value.goldEarned}, {value.totalMinionsKilled}
        </Col>
        <Col className="col10 cell">
            {value.gameDuration}
        </Col>
        <Col className="col11 cell">
            {value.wardsPlaced} / {value.wardsKilled} / {value.visionWardsBoughtInGame}
        </Col>
        <Col className="col12 cell">
            +
        </Col>
    </Row>

);

export default GameInfo; 
