import React from 'react';
// import { Service } from 'reactstrap'; // Assuming 'Service' is provided by reactstrap

function TopServices() {
  return (
    <div>
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="services-list">
          <service className='service'
            title="Web Development"
            description="We create stunning websites tailored to your needs."
            image="path_to_web_development_image.jpg"
          />
          <service className='service'
            title="Graphic Design"
            description="We provide creative graphic design solutions for your business."
            image="path_to_graphic_design_image.jpg"
          />
          
        </div>
      </div>
    </div>
  );
}

export default TopServices;

