import React from "react";
import {useNavigate} from 'react-router-dom';
import man1 from '../images/man1.png';
import woman1 from '../images/woman1.png';

function Home(){
const navigate = useNavigate();

return(
<div>
<section className="home1">
<div className="container">
<div className="row">
<div className="col-md-10">

<p>WE CREATE</p>
<h1>incredible<div className="clearfix"></div>digital<div className="clearfix"></div>experiences</h1>
<p className="mb70">We help businesses, start-ups and nonprofits conceive<div className="clearfix"></div>and create brands, websites, tools, and apps that customers love.</p>
<p>UI/UX DESIGN & BRANDING AGENCY</p>
<h2>Award-winning UI/UX design and<div className="clearfix"></div>branding agency in Irvine, California.</h2>
<p>We worked with the world’s biggest brands and the most innovative startups, to create better digital experiences for millions of users.</p>

</div>{/*col*/}
<div className="col-md-2">
<ul>
    <li></li>
</ul>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section className="home2">
<div className="container">
<div className="row">
<div className="col-md-12">
<h3>OUR CAPABILITIES</h3>
</div>{/*col*/}
<div className="col-md-4">
<h3>Design</h3>
<ul>
    <li>UI/UX Design</li>
    <li>Web and mobile apps Design</li>
    <li>Motion Design</li>
    <li>Graphic Design</li>
    <li>Visual content creation</li>
    <li>Advertising design</li>
</ul>
</div>{/*col*/}
<div className="col-md-4">
<h3>Development</h3>
<ul>
    <li>Websites with 3D</li>
    <li>Complex animations</li>
    <li>eCommerce solutions</li>
    <li>SaaS development</li>
    <li>Cross-platform & hybrid apps</li>
    <li>Mobile apps</li>
</ul>
</div>{/*col*/}
<div className="col-md-4">
<h3>Branding</h3>
<ul>
    <li>Brand Identity</li>
    <li>Brand Guidlines</li>
    <li>Logo Design</li>
    <li>Iconography</li>
    <li>Illustration</li>
    <li>Animation</li>
</ul>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section className="home3">
<div className="container">
<div className="row">
<div className="col-md-12">
<h3>OUR WORK </h3>
</div>{/*col*/}
<div className="col-md-4">
    <img src={woman1} alt='woman' />
</div>{/*col*/}
<div className="col-md-4">
<p>GOHAYCH</p>
<h3>Building beautiful<div className='clearfix'></div>technology for<div className='clearfix'></div>innovators</h3>
<p>Branding, Website Design, User Interface, User Experience</p>
<button className="btn1" onClick={() => navigate('form1')}>Case Study</button>
</div>{/*col*/}
<div className="col-md-4">
    <img src={man1} alt='man' />
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section className="home4">
<div className="container">
<div className="row">
<div className="col-md-12">

{/**SLICK*/}

<p>When we do use GoHaych, it's perfect for us. It's nice knowing there's no stopping along the way and that resonated with our executive team</p>
<h6>Andrei Craciun</h6>
<p>ORDER MANAGER</p>

</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section className="home6">
<div className="container">
<div className="row">
<div className="col-md-12">
<p>GROW YOUR DIGITAL KNOWLEDGE WITH DOTOXYGEN</p>
</div>{/*col*/}
<div className="col-md-4">
    <div className="post">
        <p className="date">26<span>may 2021</span></p>
        <h3>Guided Pathways Video Presentation</h3>
        <p>Branding, Website Design, User Interface, User Experience</p>
        <button onClick={() => navigate('form1')}>Read More</button>
    </div>
</div>{/*col*/}
<div className="col-md-4">
    <div className="post">
        <p className="date">26<span>may 2021</span></p>
        <h3>Guided Pathways Video Presentation</h3>
        <p>Branding, Website Design, User Interface, User Experience</p>
        <button onClick={() => navigate('form1')}>Read More</button>
    </div>
</div>{/*col*/}
<div className="col-md-4">
    <div className="post">
        <p className="date">26<span>may 2021</span></p>
        <h3>Guided Pathways Video Presentation</h3>
        <p>Branding, Website Design, User Interface, User Experience</p>
        <button onClick={() => navigate('form1')}>Read More</button>
    </div>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section className="home7">
<div className="container">
<div className="row">
<div className="col-md-12">
    <p>FAQS</p>

    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section className="home8">
<div className="container">
<div className="row">
<div className="col-md-6">

<h2>Have a project<div className='clearfix'></div>in mind?</h2>
<p>Bring it on!</p>

</div>{/*col*/}
<div className="col-md-6">

<div className="flex1">
    <button className="btn1" onClick={() => navigate('form1')}>Contact us</button>
    <button className="btn1" onClick={() => navigate('form1')}>Schedule a Call</button>
</div>

</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section className="home9">
<div className="container">
<div className="row">
<div className="col-md-6">

<p>Up Next</p>
<h2>About US</h2>

</div>{/*col*/}
<div className="col-md-6">

<div className="flex1">
    <button className="btn1" onClick={() => navigate('form1')}><i className="fa fa-arrow-right"></i></button>
</div>

</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

</div>
);}
export default Home;