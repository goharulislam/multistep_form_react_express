import React from "react";
import {useNavigate} from 'react-router-dom';
import man1 from '../images/man1.png';
import woman1 from '../images/woman1.png';

function Footer1(){
const navigate = useNavigate();

return(
<div>
<section className="footer1">
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
export default Footer1;