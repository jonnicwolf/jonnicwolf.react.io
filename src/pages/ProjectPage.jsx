import React from 'react';
import styled from 'styled-components';

const ProjectPage = () => {
  return (
    <section id='projects'>
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
      <ul>
        <li>
          <div>proj 1</div>
        </li>
        <li>
          <div>proj 2</div>
        </li>
      </ul>

      {/* <a class="back" onclick="slideToDa(-1, 'mySlides-2')"> &#10094; 
        <span class='bigArrow'>&#10094;</span>
      </a>
      <a class="next bigArrow" onclick="slideToDa(1, 'mySlides-2')"> &#10095;
        <span> &#10095; </span>
      </a> */}
    </section>
  )
};

const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
`
const ProjectItem = styled.li`

`
export default ProjectPage;