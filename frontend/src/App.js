import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header1 from "./components/Header1";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Form1 from "./components/Form1";
function App(){
return(
<>
	<Header1 />
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="blog" element={<Blog />} />
		<Route path="contact" element={<Contact />} />
		<Route path="form1" element={<Form1 />} />
		<Route path="*" element={<NoMatch />} />
	</Routes>
</>
 );
}
export default App;