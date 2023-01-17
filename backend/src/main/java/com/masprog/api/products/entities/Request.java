package com.masprog.api.products.entities;

import org.springframework.stereotype.Component;



@Component
public class Request {
	
	private String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	

}
