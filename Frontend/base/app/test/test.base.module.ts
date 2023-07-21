import { NgModule } from '@angular/core';
import { TestDetailComponent } from '@app/test/test/test-detail/test-detail.component';
import { SharedModule } from '@app/shared/shared.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { WidgetsBaseModule } from '@baseapp/widgets/widgets.base.module';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';
import { TestListComponent } from '@app/test/test/test-list/test-list.component';
import { ExportsModule } from '@app/exports/exports.module';
import { ImportsModule } from '@app/imports/imports.module';

@NgModule({
  declarations: [
TestDetailComponent,
TestListComponent
],
imports: [
SharedModule,
WidgetsBaseModule,
ImportsModule,
ExportsModule
],

exports: [
SharedModule,
WidgetsBaseModule,
TestDetailComponent,
TestListComponent
],

providers: [
BsModalService,
CanDeactivateGuard
],
  
})
export class TestBaseModule { }