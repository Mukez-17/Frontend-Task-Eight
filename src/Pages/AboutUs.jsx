import React from 'react';
import Navigation from "../Navigation/Navigation";
import { Box, Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <>
      <Navigation />
      <Box sx={{backgroundColor:"black", color:"#fff", padding:"16px 40px 1px"}}>
        <Typography sx={{fontSize:"1.3rem", textAlign:"center", marginBottom:"15px"}}>About iPhone 14 Pro</Typography>
        <p>Welcome to the future of innovation and technology! The iPhone 14 Pro is a concept that envisions the cutting-edge advancements and features that could define the next generation of smartphones. While the iPhone 14 Pro is currently a creation of imagination, it's a glimpse into the exciting possibilities that could await us in the world of mobile devices.</p>
        <Typography sx={{fontSize:"1.3rem"}}>Our Vision</Typography>
        <p>At iPhone 14 Pro, our vision is to explore and speculate on the potential features and design elements that could make the iPhone 14 Pro a standout device. We're inspired by Apple's history of pushing boundaries and redefining user experiences, and we've crafted this concept with the same spirit of innovation.</p>
        <Typography sx={{fontSize:"1.3rem"}}>Key Features</Typography>
        <ul>
          <li><span className="listElement">Revolutionary Design: </span>Imagine a device with a sleek and seamless design, featuring premium materials that not only feel great in your hand but also exude sophistication.</li>
          <li><span className="listElement">Advanced Display Technology: </span>Visual excellence takes center stage with an edge-to-edge display that boasts vibrant colors, incredible clarity, and a smooth refresh rate.</li>
          <li><span className="listElement">Enhanced Camera System: </span>Our concept envisions a camera system that redefines mobile photography, offering features like AI-powered scene recognition, studio-quality portraits, and exceptional low-light performance.</li>
          <li><span className="listElement">Performance Mastery: </span>Powered by the latest generation of Apple's custom chips, the iPhone 14 Pro concept delivers lightning-fast performance and energy efficiency.</li>
          <li><span className="listElement">Ecosystem Integration: </span>Seamlessly connect and interact with your other Apple devices, creating a cohesive ecosystem that enhances your daily life.</li>
        </ul>
        <Typography sx={{fontSize:"1.3rem"}}>Imagination Meets Reality</Typography>
        <p>While the iPhone 14 Pro is currently a concept, we believe that innovation knows no bounds. As technology enthusiasts, we look forward to seeing how the actual iPhone series evolves in the future, possibly bringing to life some of the exciting features we've imagined here.</p>
        <Typography sx={{fontSize:"1.3rem"}}>Stay Connected</Typography>
        <p>Join us on this imaginative journey as we explore the potential future of smartphones. Follow us for the latest updates and discussions about technology, innovation, and the exciting possibilities that lie ahead.</p>
        <p><span className="listElement">Disclaimer: </span>The iPhone 14 Pro concept presented on this website is a creative exploration and is not representative of any official Apple product. This is a speculative concept designed purely for entertainment and imaginative purposes.</p>
      </Box>
    </>
  )
}

export default AboutUs