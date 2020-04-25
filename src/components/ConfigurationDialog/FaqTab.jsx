import React from 'react';
import { DialogContentText, Link } from '@material-ui/core';

function FaqTab() {
  return (
    <>
      <DialogContentText>
        Hello, and welcome! This site was inspired by this video: <Link href="https://www.youtube.com/watch?v=PmVSuWJfHbE">Mike Bloomberg Is Way Richer Than People Realize</Link> by Mother Jones (All credit goes to them). <br />
        I really liked how they displayed the numbers against each other. I figured it would be nice to have an easy way to compare numbers in this fashion, so this site was born. <br />
        The fancy animations are provided by <Link href="https://www.react-spring.io/">React Spring</Link> (they are fantastic!). <br />
        All pictures here are from Wikipedia (Public-domain). No images are hosted on this app. <br />
        I'm still learning, so if you find any issues, please submit them here: <Link href="https://github.com/berrutti/comparing-numbers/issues">Issues.</Link> <br />
        Thanks a lot for your visit!
      </DialogContentText>
    </>)
};

export default FaqTab;