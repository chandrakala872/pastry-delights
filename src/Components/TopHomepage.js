import React from 'react'
import './TopHomepage.css'




function TopHomepage() {
  return (
    <div>
 <div className="container"> 
      <h1 className='heading'>Delicious Cakes</h1>
      {/* <p>
Absolutely! Cakes are a delicious treat enjoyed by people all around the world. Whether it's a birthday, wedding, anniversary, or any other celebration, cakes often play a central role in bringing people together and adding sweetness to the occasion. From classic flavors like chocolate and vanilla to more exotic varieties, cakes come in a wide range of options to suit everyone's taste preferences. Plus, with creative decorations and designs, cakes can be customized to match the theme of any event, making them even more special. </p> */}
<h1 className='happinesscake'>!...Happiness is a Piece of Cake...!</h1>
    </div>
    <div className="homepage-container">
      <div className="content">
        <header>
         
          {/* <p>A Place where you Can Amazing and Delicios Cakes</p> */}
        </header>
        <section className="features">
          <div className="feature">
            <i className="fas fa-desktop"></i>
            {/* <h2 className='cakeheading'> Cakes...!</h2> */}
            {/* <p>The tradition of celebrating birthdays with cake dates back to ancient civilizations, where people would bring offerings of sweetened bread to the gods. Over time, this practice evolved into the modern-day tradition of birthday cakes, which have become a staple of birthday celebrations around the world.</p> */}
          </div>
          <div className="feature">
            <i className="fas fa-cogs"></i>
            <h2 className='easyheading'>Easy Customization</h2>
            <p>The process for ordering a custom cake from WarmOven is simple. All you need to do is visit our website, select your preferred cake options, provide us with the necessary details, and make the payment. Our team will take care of the rest.</p>
          </div>
          <div className="feature">
            <i className="fas fa-heart"></i>
            <h2 className='amazingHeading'>Amazing Experience</h2>
             <p>To ensure the implementation of your recommendations, collaborate with the product design and customer-facing/revenue teams from the onset and present your report after the analysis in a digestible and easy-to-understand manner.</p> 
          </div>
        </section>
        
      </div>
      <div className="image w-50 mt-5 mb-5">
        <img src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D" />
      </div>
    </div>
    <div className="image w-100 mb-5  ml-2">
        <img src="https://www.fnp.com/assets/images/custom/cakes_23/special_occasion/Birthday_web.jpg" />
      </div>
      
    
   
    </div>
  )
}

export default TopHomepage