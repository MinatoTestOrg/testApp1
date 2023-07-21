package com.minatodattebayo.testapp1.base.model;
import com.vs.rappit.base.model.BaseModel;
import com.vs.rappit.base.annotations.Table;
import com.vs.rappit.base.annotations.Searchable;


@Table(name="Test", keys={"sid"})
public class TestBase extends BaseModel {

	@Searchable(index = true)
	private String test;
	@Searchable(index = true)
	private String test12;

	public void setTest(String test) {
		this.test = test;
	}

	public String getTest() {
		return test;
	}

	public void setTest12(String test12) {
		this.test12 = test12;
	}

	public String getTest12() {
		return test12;
	}



}