import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../app.component.css']
})
export class AboutComponent {
  tools = [
    {
      name: 'Angular',
      imgSrc: '../../assets/img/angular-logo.png',
      alt: 'Angular logo'
    },
    {
      name: 'React',
      imgSrc: '../../assets/img/react-logo.png',
      alt: 'React logo'
    },
    {
      name: 'Redux',
      imgSrc: '../../assets/img/redux-logo.png',
      alt: 'Redux logo'
    },
    {
      name: 'express.js',
      imgSrc: '../../assets/img/express-logo.png',
      alt: 'express.js logo'
    },
    {
      name: 'node.js',
      imgSrc: '../../assets/img/node-logo.png',
      alt: 'node.js logo'
    },
    {
      name: 'MongoDB',
      imgSrc: '../../assets/img/mongodb-logo.png',
      alt: 'MongoDB logo'
    },
    {
      name: 'JavaScript',
      imgSrc: '../../assets/img/js-logo.png',
      alt: 'JavaScript logo'
    },
    {
      name: 'HTML5',
      imgSrc: '../../assets/img/html-logo.png',
      alt: 'HTML5 logo'
    },
    {
      name: 'CSS3',
      imgSrc: '../../assets/img/css-logo.png',
      alt: 'CSS3 logo'
    }
  ]
}
