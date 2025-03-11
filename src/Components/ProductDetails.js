import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {CardTitle,CardSubtitle,CardText,Button,Card,CardBody} from 'reactstrap'
import axios from 'axios';
import './ProductDetails.css'

function ProductDetails() {
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

    const displayMoreDetails = (index) => {
        alert(index);
        navigate("/productdetails", { state: { selectedIndex: index } });
    };

    const location = useLocation();
    let index = location.state ? location.state.selectedIndex : null;

    return (
        <div>
            {products && index !== null && (
                 <div>
                    {/* <h1>Product Details</h1> */}
                      <h1>{products[index].name}</h1>  
                     
                  {/* <div style={{height:'50vh',width:'90vw'}}>  */}
                    {/* <div style={{width:'100%',height:'100%'}}>   */}
                        {/* <h1 className='justify-content-center'>
                            this is the best birthday cakes
                        </h1> */}
                      {/* <img src={products[index].imgsrc} style={{height:'100%',width:'60%',display:'justify-content-center'}}/>  */}

                    {/* </div>  */}
                 {/* </div> */}
                 <div className='d-flex justify-content-center flex-wrap m-5'>
                  {products[index].items.map((item)=>(
                    <div className='m-2'>
                  <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&w=600"
  />
  <CardBody>
    <CardTitle tag="h5">
      {item.cakename}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {item.price}
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      Add to Cart
    </Button>
  </CardBody>
</Card>

                    </div>
                  ))}


                    </div>
                 







                   </div>
                

            )}
        </div>
    );
}

export default ProductDetails;

