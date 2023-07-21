package com.minatodattebayo.testapp1.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.slf4j.ext.XLogger;
import org.slf4j.ext.XLoggerFactory;
import org.springframework.http.ResponseEntity;
import com.vs.rappit.base.factory.InstanceFactory;
import com.minatodattebayo.testapp1.base.controller.TestBaseController;
import com.minatodattebayo.testapp1.service.ITestService;
import com.minatodattebayo.testapp1.service.TestService;
import com.minatodattebayo.testapp1.model.Test;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "rest/tests/", produces = "application/json")
public class TestController extends TestBaseController<ITestService<Test>, Test> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(TestController.class);
	public TestController(TestService testService) {
		super(testService);
	}
}
