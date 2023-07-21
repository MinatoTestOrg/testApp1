package com.minatodattebayo.testapp1.service;

import com.vs.rappit.base.acl.IPerimeterManager;
import com.minatodattebayo.testapp1.base.service.TestBaseService;
import com.minatodattebayo.testapp1.model.Test;
import com.minatodattebayo.testapp1.service.TestPerimeterImpl;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;


@Service("Test")
public class TestService extends TestBaseService<Test> implements ITestService<Test>{

		@Autowired
		private  TestPerimeterImpl  testPerimeterImpl;

		public TestService(ChangelogService changelogService) {
		super(Test.class);	
		setChangelogService(changelogService); 
		
	}
	
	
	protected IPerimeterManager<Test> getPerimeterManager() {
		return testPerimeterImpl;
	}
}