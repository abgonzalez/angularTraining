// to be recognized as angular module, you need to use a decorator - '@'
// to use the decorator, you need to import the package that exports it - Component (for components).
import { Component } from '@angular/core';

@Component(
  // need 2 meta-data properties at a minimum - selector and template (or template URL)
  {
      // custom dom elements with multiple names - selectors - are hyphenated
      selector: 'mw-app',                  // what angular uses to locate a custom html element and apply the component to
      template: '<h1>My App</h1><p>more writing</p>',       // inline template - to fill the targeted html element above, only for the first element (when it is the root module). For multiple lines use ``
      // template url allows us to load a specific file that contains the template content
      // templateURL: 'app/app.component.html'
      // can also use the stylesURLs: ['file path'] 
      styles: [`        
        h1 { color: #ffffff; }
        .descritption { font-style: italics; }
      `]
  }
)

export class AppComponent {}