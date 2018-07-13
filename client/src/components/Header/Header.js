import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import "./header.css";
import Card1 from '../../image/CC_1_VB.png';
import Card2 from '../../image/CC_2_VB.png';
import Card3 from '../../image/CC_3_VB.png';

const style = {
    display: 'inline-block',
    margin: '-41px 0px 2px 0px',
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
      paddingTop: '6px'
     },
    titleStyle: {
      color: 'rgb(0, 188, 212)',
    },
  };

const tilesData = [
    {
        img: Card1,
        title: 'MasterCard',
        author: 'Gonza',
    },
    {
        img: Card2,
        title: 'MasterCard',
        author: 'Manoj',
    },
    {
        img: Card3,
        title: 'MasterCard',
        author: 'D',
    }
]


class Header extends React.Component {

    render() {
        return (
               <div>
                    <Paper style={style} className="Paper">
                       
                            <GridList style={styles.gridList} cols={2.2} className="Grid">
                                {tilesData.map((tile) => (
                                    <GridTile
                                        key={tile.img}>
                                        <img alt="headerImg" src={tile.img} className="headerImg" />
                                    </GridTile>
                                ))}
                            </GridList>
                        </Paper>
                </div>

            )
    }
};

export default Header;
