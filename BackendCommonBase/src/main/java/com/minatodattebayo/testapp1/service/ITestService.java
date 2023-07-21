package com.minatodattebayo.testapp1.service;

import com.minatodattebayo.testapp1.base.model.TestBase;
import com.minatodattebayo.testapp1.base.service.ITestBaseService;


public interface ITestService<T extends TestBase> extends ITestBaseService<T> {

}
