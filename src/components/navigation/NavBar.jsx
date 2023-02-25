import React from 'react';

const NavBar = () => {
  return (
    <section id='nav-btn'>
      <div id='semi-circle-btn'></div>
      <ul>
        <li class='option-one'> <a class='nav-option' href="#aboutMe">About Me</a> </li>
        <li class='option-two'> <a class='nav-option' href="#resume"> Resume</a> </li>
        <li class='option-three'> <a class='nav-option' href="#projects">Projects</a> </li>
        <li class='option-four'> <a class='nav-option' href="#skills">Skills</a> </li>
      </ul>
    </section>
  )
};

export default NavBar;