package com.masprog.api.products.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.masprog.api.products.entities.Product;
import com.masprog.api.products.repositories.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository repository;
	
	public Iterable<Product> findAll(){
		
		return repository.findAll();
	}
	
}
