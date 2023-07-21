import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestBaseModule } from '@baseapp/test/test.base.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TestBaseModule,
    TestRoutingModule
    
  ],
  exports: [
      TestBaseModule,
  ]

})
export class TestModule  { }