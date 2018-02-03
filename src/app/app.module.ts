import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GetWidthService } from './get-width.service';
import { IfViewportSizeDirective } from './directives/if-viewport-size.directive';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    IfViewportSizeDirective,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GetWidthService, IfViewportSizeDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
