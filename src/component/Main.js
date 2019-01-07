import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Landingpage from './Landingpage';
import About from './About';
import Blog from './Blog';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Main = () => (
	<Switch>
	  <Route exact path="/" component={Landingpage} />
	  <Route 
	  	exact path="/about"
	  	render={props => 
	  		<About 
		  		name="jinesh subedi" 
		  		email="jinesh1094@gmail.com"
		  		address="Kathmandu"
		  		gender={true}
		  		nationality="nepali"
		  		occupation="student" 
	  		/>}
	  /> 
	  <Route exact path="/Blog" component={Blog} />
	  <Route exact path="/Portfolio" component={Portfolio} />
	  <Route exact path="/Contact" component={Contact} />
	</Switch>
) 

export default Main;