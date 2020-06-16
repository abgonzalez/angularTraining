// code for bootstrapping
// angular offers support for running on multiple platforms
// in this case we are running the application on the browser, so we are using platformBrowserDynamic

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // this is not a class type, this is a function being imported
import { AppModule } from './app.module';

// calling the imported function's, which will return an instance of a platform object
// that returned platform object has a method called bootstrapModule
// bootstrap module, requires a root module to be passed through it's parameter
platformBrowserDynamic().bootstrapModule(AppModule); 


