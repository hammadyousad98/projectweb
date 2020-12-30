import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, FormControl, Grid, Toolbar, Typography } from '@material-ui/core';
import userService from '../services/UserService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Nav, Navbar} from 'react-bootstrap';
import './navbar.css';
 const useStyles = makeStyles((theme) => ({
    Name: {
       color:"dark",
     },
    /*Img: {
      position: "absolute",
      height: "100px",
      width: "50px",
      padding: "0px"

    },*/
   }));
const TopMenu = () => {
    const [navbar, setNavbar]= useState(false);
    const changeBackground = () => {
      if(window.scrollY >= 80){
        setNavbar(true);
        console.log(window.scrollY);
      }
      else {
        setNavbar(false);
      }
    }
    window.addEventListener("scroll", changeBackground); 

    const classes = useStyles();
     return ( 
    <header className={navbar ? "navbar active" : "navbar"}>
    <Navbar variant="info" >
    <Navbar.Brand className={classes.Name} href="/"><em>PROGRESSIVE ENGINEERING</em></Navbar.Brand>
    <img style={{width:"5%", verticalAlign:"left"}} src="https://images-platform.99static.com/_0cmp7AnqRaN5XidZcNOY4D8Rrg=/500x500/top/smart/99designs-contests-attachments/58/58344/attachment_58344906"></img>
    <Nav className="m1-auto">
      <Nav.Link href="/" >Home</Nav.Link>
      <Nav.Link href="/products">Parts</Nav.Link>
      <Nav.Link href="/contact-us">Contact</Nav.Link>
      {!userService.isLoggedin()? <>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>   
             </>:<Button variant="contained"  onClick={(e)=>{
                 userService.logout();
                 window.location.reload();
             }}>Log Out {userService.getLoggedinUser().name}</Button>}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className={classes.Name} />
      <Button variant="outline-info" className={classes.Name}>Search</Button>
    </Form>
  </Navbar>
  </header>
    );

}
 
export default TopMenu;