import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { RouterModule } from '@angular/router';
import { BermudaTriangleComponent } from './bermuda-triangle/bermuda-triangle.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchOnMapComponent } from './search-on-map/search-on-map.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    BermudaTriangleComponent,
    SearchOnMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
