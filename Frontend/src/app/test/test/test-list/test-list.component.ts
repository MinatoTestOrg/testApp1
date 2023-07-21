import { Component, OnInit,inject } from '@angular/core';
import { TestListBaseComponent } from '@baseapp/test/test/test-list/test-list.base.component';
import { TestService } from '@baseapp/test/test/test.service';


@Component({
  selector: 'app-test-list',
  templateUrl: '../../../../../base/app/test/test/test-list/test-list.component.html',
  styleUrls: ['./test-list.scss']
})
export class TestListComponent extends TestListBaseComponent implements OnInit {
 
	
  ngAfterViewInit(): void {
    this.onAfterViewInit()
  }

  ngOnInit(): void {
    super.onInit();
  }
 
}
