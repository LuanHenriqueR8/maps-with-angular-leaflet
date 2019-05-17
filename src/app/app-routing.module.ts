import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { BermudaTriangleComponent } from './bermuda-triangle/bermuda-triangle.component';
import { SearchOnMapComponent } from './search-on-map/search-on-map.component';

const routes: Routes = [
  { path: '', component: ExampleComponent },
  { path: 'bermuda-triangle', component: BermudaTriangleComponent },
  { path: 'search-on-map', component: SearchOnMapComponent },
  { path: '', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
