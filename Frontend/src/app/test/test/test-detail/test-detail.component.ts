import { Component, OnInit,inject } from '@angular/core';
import { TestDetailBaseComponent } from '@baseapp/test/test/test-detail/test-detail.base.component';
import { TestService } from '@baseapp/test/test/test.service';


@Component({
  selector: 'app-test-detail',
  templateUrl: '../../../../../base/app/test/test/test-detail/test-detail.component.html',
  styleUrls: ['./test-detail.scss']
})
export class TestDetailComponent extends TestDetailBaseComponent implements OnInit {
 
	
  ngAfterViewInit(): void {
    this.onAfterViewInit()
  }

  ngOnInit(): void {
    super.onInit();
  }
 
}
