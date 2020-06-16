// to be recognized as angular module, you need to use a decorator - '@'
// to use the decorator, you need to import the package that exports it - ngModule (for the root).
// you can also import 2 modules, using a comma.
import { ngModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // contains pipes, core diectives and more for working with the d.o.m
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item-component';

// to use the decorator the below line is needed
@ngModule(
  // takes in object with known properties, to configure the class you decorate as an angular module
  // these properties are known as meta-data

  imports: [            // used to bring in other angular modules that your module will need
    BrowserModule       // any imports from @angular are listed here
  ],
  declarations: [       // used to make components, directives and pipes available to your module, that don't come from another module
                        // any imports not from @angular go here 
    AppComponent,        // starting component
    MediaItemComponent
  ],
  bootstrap: [          // used for a root module, and lets angular know which components will be the starting point for the bootstrap process, entry point for app code
     AppComponent       // root module listed here, it will be the starting point for bootstrap 
  ]
)

//class definition, export indicates it's use externally 
export class AppModule {

}