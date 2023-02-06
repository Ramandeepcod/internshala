import './App.css';
import React from 'react';
// import div from 'react-reveal/Fade';
// import { gsap } from "gsap";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {Fade} from 'react-reveal'
import { Parallax } from 'react-parallax';

const arr = [1, 2, 3];
function App() {
  return (
    <>
      <NavBar />
      <div className='three_d_box'>

        {arr.map((number, idx) => {
          return <section key={idx}>
            <Fade right>
            <div className="hello">
            <div class="card">
              <div class="box">
                <div class="imgBx">
                  <img src="img-1.jpg" />
                </div>
                <div class="contentBx">
                  <div>
                    <h2>Post Title</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus molestias optio alias sapiente, praesentium sint provident distinctio nostrum incidunt necessitatibus ratione culpa eveniet? Voluptas vero sequi eligendi modi, qui dignissimos.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <div class="imgBx">
                  <img src="img-2.jpg" />
                </div>
                <div class="contentBx">
                  <div>
                    <h2>Post Title</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus molestias optio alias sapiente, praesentium sint provident distinctio nostrum incidunt necessitatibus ratione culpa eveniet? Voluptas vero sequi eligendi modi, qui dignissimos.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <div class="imgBx">
                  <img src="img-3.jpg" />
                </div>
                <div class="contentBx">
                  <div>
                    <h2>Post Title</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus molestias optio alias sapiente, praesentium sint provident distinctio nostrum incidunt necessitatibus ratione culpa eveniet? Voluptas vero sequi eligendi modi, qui dignissimos.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </Fade>
            <Fade left>
            <div  className="hello">
            <div class="card">
              <div class="box">
                <div class="imgBx">
                  <img src="img-4.jpg" />
                </div>
                <div class="contentBx">
                  <div>
                    <h2>Post Title</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus molestias optio alias sapiente, praesentium sint provident distinctio nostrum incidunt necessitatibus ratione culpa eveniet? Voluptas vero sequi eligendi modi, qui dignissimos.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <div class="imgBx">
                  <img src="img-5.jpg" />
                </div>
                <div class="contentBx">
                  <div>
                    <h2>Post Title</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus molestias optio alias sapiente, praesentium sint provident distinctio nostrum incidunt necessitatibus ratione culpa eveniet? Voluptas vero sequi eligendi modi, qui dignissimos.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <div class="imgBx">
                  <img src="img-6.jpg" />
                </div>
                <div class="contentBx">
                  <div>
                    <h2>Post Title</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus molestias optio alias sapiente, praesentium sint provident distinctio nostrum incidunt necessitatibus ratione culpa eveniet? Voluptas vero sequi eligendi modi, qui dignissimos.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </Fade>
          </section>
        })}
      </div>

      <Parallax bgImage='nature1.jpg' strength={600}>
        <div style={{height: 600}}>
          <div className='parallexfirsttext'>HTML inside the parallax</div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax bgImage='nature1.jpg' blur={{min: -2, max: 6}}>
        <div style={{height: 600}}>
          <div className='parallexfirsttext'>Dynamic Blur</div>
        </div>
      </Parallax> 
      <h1>| | |</h1>
      <Parallax bgImage='nature1.jpg' strength={-600}>
        <div style={{height: 600}}>
          <div className='parallexfirsttext'>Reverse Parallax</div>
        </div>
      </Parallax>  
      <Footer />
    </>
  );
}

export default App;
