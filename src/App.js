import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Link } from 'react-router-dom';
import Main from './component/Main';



class App extends Component {
  constructor(){
    super();
    this.state = {
        title : 'JineshSubedi.com.np'
    };
  }
  render() {
    return (
      <div>
          <Layout fixedHeader>
              <Header title={<span><span style={{ color: '#ddd' }}></span><strong>{this.state.title}</strong></span>}>
                  <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/about">About Me</Link>
                      <Link to="/portfolio">Portfolio</Link>
                      <Link to="/contact">Contact</Link>
                      <Link to="/blog">Blog</Link>
                      <a href="/download/resume.pdf" download>Download CV</a>
                  </Navigation>
              </Header>
                <Content>
                  <div className="page-content"/>
                  <Main/>
                  <Footer size="mini">
                      <FooterSection type="left" logo={this.state.title}>
                          <FooterLinkList>
                              <Link to="/">Help</Link>
                              <Link to="/">Privacy & Terms</Link>
                          </FooterLinkList>
                      </FooterSection>
                  </Footer>
                </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
