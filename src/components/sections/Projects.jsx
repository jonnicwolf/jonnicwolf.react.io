import React from 'react';

const Projects = () => {
  return (
    <section id='projects'>
      <h3 class='section-title'>Projects</h3>

      <div class='slideshow-container'>
        {/* <div class="mySlides-2 fade">
          <img 
            src="video_assets/scd.gif"
            alt='about me foto'
          />
          <div class="text">Ice Cream with attitude!</div>
          <p>The Stoned Cold Dreamery</p>
        </div>

        <div class='mySlides-2 fade'>
          <video autoplay loop>
            <source 
              src="video_assets/DragonRend-trim.mp4"
              type='video/mp4'
              alt='project gif'
            />
          </video>
          <div class="text"> Be the guiding voice of a young hero as they set out into the world on an epic adventure!</div>
          <p>DragonRend</p>
        </div> */}

        <div>Project 1</div>
        <div>Project 2</div>

        {/* <a class="back" onclick="slideToDa(-1, 'mySlides-2')"> &#10094; 
          <span class='bigArrow'>&#10094;</span>
        </a>
        <a class="next bigArrow" onclick="slideToDa(1, 'mySlides-2')"> &#10095;
          <span> &#10095; </span>
        </a> */}
      </div>
    </section>
  )
};

export default Projects;