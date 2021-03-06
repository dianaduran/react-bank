import React from "react";
import Paper from 'material-ui/Paper';
import "./footer.css";
import github from "../../image/github.png";
import linkedin from "../../image/linkedin.png";
import stackoverflow from "../../image/stackoverflow.png";

const style = {
    margin: '5px 0px 0px 0',
    display: 'inherit'
  }

const Footer = () => (

<Paper style={style} zDepth={1}>
     <div className="card-header">
     <h6>Copyright 2018-- VirtuBank</h6>
            <a href="https://github.com/" target="_blank"><img className="icon-Footer rounded-circle" alt="github" src={github} /></a>
            <a href="https://www.linkedin.com/in/" target="_blank"><img className="icon-Footer rounded-circle" alt="linkedin" src={linkedin} /></a>
            <a href="https://stackoverflow.com/" target="_blank"><img className="icon-Footer rounded-circle" alt="stackflow" src={stackoverflow} /></a>
    
        </div>
        </Paper>
 
);

export default Footer;
