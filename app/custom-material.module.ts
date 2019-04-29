import {NgModule} from '@angular/core';

import {MatFormFieldModule, MatInputModule} from '@angular/material';


/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
@NgModule({
  exports: [
    MatFormFieldModule,
    MatInputModule
  ]
}) 
export class CustomMaterialModule {}
