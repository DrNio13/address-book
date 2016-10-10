import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ContactService } from './shared/contact.service';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent ],
    providers: [ ContactService ], // available for all the app
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
