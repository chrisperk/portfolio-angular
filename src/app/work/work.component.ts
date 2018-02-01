import { Component } from '@angular/core';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css', '../app.component.css']
})
export class WorkComponent {
  projects = [
    {
      name: 'TwitchMore',
      link: 'https://banana-cake-13923.herokuapp.com/',
      title: 'TwitchMore link',
      bannerClass: 'twitchmore-banner work-banner',
      description: 'A React/Redux project that consumes the Twitch API to search its database and allows users to stream up to four Twitch channels at one time using responsive iFrames.'
    },
    {
      name: 'Reddit Search',
      link: 'https://sheltered-wildwood-65386.herokuapp.com/',
      title: 'Reddit link',
      bannerClass: 'reddit-banner work-banner',
      description: 'A simple app using React and Redux to get posts from subreddits and allow users to open in Reddit or share via email.'
    },
    {
      name: 'Gist Blog',
      link: 'https://chrisperk.github.io/javascript-workbook/apps/11gist-blog/',
      title: 'Gist Blog link',
      bannerClass: 'gist-banner work-banner',
      description: 'A responsive digital space using the Materialize library that pulls Gist JSON objects from my GitHub account to display my deepest inner thoughts.'
    },
    {
      name: 'Right Ear, Right Meow',
      link: 'https://chrisperk.github.io/intro-workbook/10LessonTen/Checkpoint2/',
      title: 'RERM link',
      bannerClass: 'rerm-banner work-banner',
      description: 'Crafted a responsive digital space using the Bootstrap framework that shares the story of a foster home for cats in Austin, TX.'
    }
  ]
}
