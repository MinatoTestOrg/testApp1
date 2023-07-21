import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';

import { TestDetailComponent } from '@app/test/test/test-detail/test-detail.component';
import { TestListComponent } from '@app/test/test/test-list/test-list.component';

export const routes: Routes = [

{
     path: 'testdetail',
     component: TestDetailComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "TEST_DETAIL",
        breadcrumb: "TEST_DETAIL",
        roles : [
        			"Development Administrator"
				]
     }
},
{
     path: 'testlist',
     component: TestListComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "TEST_LIST",
        breadcrumb: "TEST_LIST",
        roles : [
        			"Development Administrator"
				]
     }
}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TestBaseRoutingModule
{
}
