import { Injectable,inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseService } from '@baseapp/base.service';
import { TestBase} from './test.base.model';
import { TestApiConstants } from './test.api-constants';


@Injectable({
  providedIn: 'root'
})
export class TestService {

public baseService = inject(BaseService);

  
	  getProtoTypingData(): Observable<any> {
	      const subject:Observable<TestBase> = new Observable(observer => {
	        const data =  require('base/assets/sample-data/test.json');
	        observer.next(data as TestBase);
	      });
	      return subject;
	  }
	 
		getProtoTypingDataById(...args: any): Observable<any> {
	    const params = args[0];
	    const key = Object.keys(params);
	    let foundData: boolean = false;
	    let data: any = {};
	    const subject: Observable<TestBase> = new Observable(observer => {
	      const response = require('base/assets/sample-data/test.json');
	      response.map((o: any) => {
	        foundData = key.every((d: string) => {
	          return o[d] == params[d];
	        })
	        if (foundData) {
	          data = o;
	        }
	      })
	      observer.next(data as TestBase);
	    });
	    return subject;
	  }

    create(...args: any):Observable<any>{
        const serviceOpts = TestApiConstants.create;
        const params= args[0];
        
        const subject = new Observable(observer => {
          this.baseService.post(serviceOpts,params).subscribe((response: any) => {
            observer.next(response);
          },
          (err:any) => {
            observer.error(err);
          });
        });
    
        return subject;
    }
    getById(...args: any):Observable<any>{
        const serviceOpts = TestApiConstants.getById;
        const params= args[0];
        
        const subject = new Observable(observer => {
          this.baseService.get(serviceOpts,params).subscribe((response: any) => {
            observer.next(response);
          },
          (err:any) => {
            observer.error(err);
          });
        });
    
        return subject;
    }
    autoSuggestService(...args: any):Observable<any>{
        const serviceOpts = TestApiConstants.autoSuggestService;
        const params= args[0];
        
        const subject = new Observable(observer => {
          this.baseService.get(serviceOpts,params).subscribe((response: any) => {
            observer.next(response);
          },
          (err:any) => {
            observer.error(err);
          });
        });
    
        return subject;
    }
    getDatatableData(...args: any):Observable<any>{
        const serviceOpts = TestApiConstants.getDatatableData;
        const params= args[0];
        
        const subject = new Observable(observer => {
          this.baseService.post(serviceOpts,params).subscribe((response: any) => {
            observer.next(response);
          },
          (err:any) => {
            observer.error(err);
          });
        });
    
        return subject;
    }
    update(...args: any):Observable<any>{
        const serviceOpts = TestApiConstants.update;
        const params= args[0];
        
        const subject = new Observable(observer => {
          this.baseService.put(serviceOpts,params).subscribe((response: any) => {
            observer.next(response);
          },
          (err:any) => {
            observer.error(err);
          });
        });
    
        return subject;
    }
    delete(...args: any):Observable<any>{
        const serviceOpts = TestApiConstants.delete;
        const params= args[0];
        
        const subject = new Observable(observer => {
          this.baseService.delete(serviceOpts,params).subscribe((response: any) => {
            observer.next(response);
          },
          (err:any) => {
            observer.error(err);
          });
        });
    
        return subject;
    }
}
