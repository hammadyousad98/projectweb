import { Grid } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Jumbotron,Container,Carousel,Card,CardDeck } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import {} from "react-icons/fa"
import "../index.css"
const LandingPage = () => {
    return ( 
        <div>
       
        <Grid contained> 
        <Carousel className="img">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://www.pixel4k.com/wp-content/uploads/2018/09/yamaha-r1-4k_1536316091.jpg"
            alt="Bike"
            />
            <Carousel.Caption>
            <h3>Bike</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://mcpartsflexpay.com/wp-content/uploads/2019/09/Flex-Blog-Social-Image-parts_of_motorcycle-1080x675.jpg"
            alt="Third slide"
            />

            <Carousel.Caption style={{color:"black"}}>
            <h3 >Parts Name List</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://www.northsservice.com/images/Motorcycle%20Parts%20Page.jpg"
            alt="AUTO PARTS"
            />

            <Carousel.Caption  style={{color:"blue"}}>
            <h3>Bike Parts</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
        </Grid>
        <Grid contained style={{marginTop:"10px"}}>
        <Grid contained>
        <section id="about-sec">
        <div className="container">
        <div className="row align-items-center">
        <div className ="col-lg-5 text-center">
        <img src="https://i.pinimg.com/originals/bd/5b/2e/bd5b2e37613bd354882031b8830e9878.jpg" className="img-fluid sale-img"></img>
        </div>
        <div className="col-lg-7 text-lg-right text-center text-color about-text">
        <h1 style={{fontFamily:"Times New Roman, Times, serif"}}>KAWASAKI NINJA H2R</h1>
        </div>
        </div>
        </div>
        </section>
        <div>
            <h1> New Bikes of 2020</h1>
        </div>
        <CardDeck className="card">
        <Card>
            <Card.Img style={{marginTop:"2px"}} variant="bottom" src="https://www.totalmotorcycle.com/wp-content/uploads/2019/11/2020-Suzuki-GSX-S1000F3-1024x607.jpg" />
            
            <Card.Img style={{marginTop:"60px", marginBottom:"50px"}} variant="bottom" src="https://cdn.dealerspike.com/imglib/v1/800x600/imglib/Assets/Inventory/44/67/4467ADE4-5EEA-4DA7-A5FE-FDC8D1B87A8A.jpg" />
            <Card.Body>
            <h2>Suzuki GSX-S1000 (D2)</h2>
            
            <Button variant="dark" >Learn More</Button>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src="https://fsa.zobj.net/crop.php?r=1Uu3UqkTeJXj8m_zqgQHq7LbwJrHY5ZVEISeKVCxkl1fUTRXE7HYTYSk3mutqOkwgGO2qa0onWH7xEYrXENQQsOmI0Gdw-UBN_Kt38FP7L_XWWUgOMqh-s6i_RjeNBNzX0AzWIqhQWy3CZXgVj2kZS1JA-AeKTG3yWhnig_VuORZVUyaJmQYipwe1AvAsc1yM7gJ-l31jbYLU_O7" />
            <Card.Body>
            <h2>PULSAR RS200</h2>
            
            <Button variant="dark" className="cardButton">Learn More</Button>
            </Card.Body>
                </Card>
        <Card>
            <Card.Img style={{marginTop:"2px"}} variant="top" src="https://c0.wallpaperflare.com/preview/485/402/547/sportbike-sportsbike-honda-honda-cbr-1000-rr.jpg" />
            <Card.Img style={{marginTop:"60px", marginBottom:"50px"}}  variant="top" src="https://i.pinimg.com/originals/a2/08/e8/a208e87a45c9c28e5c06ffd24192fcfc.jpg" />
            <Card.Body>
            <h2>HONDA CBR 650R</h2>
            
            <Button variant="dark" className="cardButton">Learn More</Button>
            </Card.Body>
        </Card>
    </CardDeck>
        </Grid>
        </Grid>
        <section className="services py-5 text-center">
    <div className="container">
        <div className="row">
            
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <span className="service-icon">
                    <i className="fas fa-shipping-fast fa-2x"></i>
                </span>
                <h5 className="font-wieght-bold ">
                    ABOUT
                </h5>
                <p className="text-uppercase">
                    We provide all types of services for Bikes.
                    Also deals in Bike sales and purchase.
                </p>
             </div>
             
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <span className="service-icon">
                    <i className='fas fa-users fa-2x'></i>
                </span>
                <h5 className="font-wieght-bold text-uppercase">
                    Online Customer Support       (24/7 Customer Service)
                </h5>
                <p className="text-uppercase">
                    Register Now to be a part of our journey and to get latest updates and special discount.
                </p>
             </div>
             
        </div>
    </div>
</section>
        </div>
     );
}

 
export default LandingPage;