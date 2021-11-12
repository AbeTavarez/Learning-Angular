import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //* Post Data Array
  posts = [
    {
      title: 'Gulp Logo',
      imageUrl: 'assets/gulp-logo.png',
      username: 'Gulp',
      content: 'Gulp has a new feature',
    },
    {
      title: 'NPM Logo',
      imageUrl: 'assets/npm-logo.png',
      username: 'NPM',
      content: 'NPM has a new feature',
    },
    {
      title: 'Webpack Logo',
      imageUrl: 'assets/webpack-logo.png',
      username: 'Webpack',
      content: 'Webpack has a new feature',
    },
  ];
}
