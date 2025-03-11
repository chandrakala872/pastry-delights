
import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardText, Button, CardImg, CardTitle, CardSubtitle } from 'reactstrap';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

// import displayMoreDetails from 'react'
import './ProductPages.css'; 




function ProductPages() {
    let navigate = useNavigate();
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3002/fetchdata");
                setProducts(response.data);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };

        fetchData();
    }, []);

    const  displayMoreDetails =(index)=>{
         alert(index)
        navigate("/productdetails",{state:{selectedIndex:index}})
    }

    return (
        <div className='d-flex flex-wrap justify-content-center mt-4'>
            {products && products.map((item, index) => (
                <div key={index}>
                    <Card className="product-card ml-4">
                        <CardImg className="product-img" top src={item.imgsrc} alt={item.name} />
                        <CardBody>
                            <CardTitle className='cardtitle' tag="h5">{item.name}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Cakes are always Special..!</CardSubtitle>
                            <CardText>Cakes are a delicious treat enjoyed by people all around the world. </CardText>
                             <Button onClick={()=>{
                                displayMoreDetails(index)
                             }}>View More</Button> 
                        </CardBody>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default ProductPages;
