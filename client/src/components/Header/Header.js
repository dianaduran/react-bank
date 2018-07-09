import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from "react-router-dom";
import { CardTitle, CardText } from 'material-ui/Card';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Paper from 'material-ui/Paper';
import "./header.css";
import Imgen from '../../image/sunshine_back.png';
import Card1 from '../../image/CC_1_VB.svg';
import Card2 from '../../image/CC_2_VB.svg';
import Card3 from '../../image/CC_3_VB.svg';

const style = {
    display: 'inline-block',
    margin: '46px 32px 16px 0',
    width: '100%'
};

const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      display: 'flex',
      flexWrap: 'nowrap',
      overflowX: 'auto',
    },
    titleStyle: {
      color: 'rgb(0, 188, 212)',
    },
  };

const tilesData = [
    {
        img: Card1,
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        img: Card2,
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: Card3,
        title: 'Camera',
        author: 'Danson67',
    }
]


class Header extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <img className="homeImg" alt="Img" src={Imgen} />
                    <div className="centered">
                        <CardTitle style={{ fontSize: '60px', color: 'green', fontFamily: 'fantasy' }}>No overdraft fees.</CardTitle>
                        <CardText style={{ fontSize: '50px', color: 'green' }}>No worries</CardText>
                        <Link to="/account">  <RaisedButton label="Open Account" /> </Link>
                    </div>
                </div>


                <div>
                    <Paper style={style}>
                       
                            <GridList style={styles.gridList} cols={2.2}>
                                {tilesData.map((tile) => (
                                    <GridTile
                                        key={tile.img}
                                        actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                                        titleStyle={styles.titleStyle}>
                                        <img src={tile.img} />
                                    </GridTile>
                                ))}
                            </GridList>
                        </Paper>
                </div>

            </div>
        )
    }
};

export default Header;
