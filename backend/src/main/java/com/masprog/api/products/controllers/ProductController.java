package com.masprog.api.products.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.masprog.api.products.entities.Product;
import com.masprog.api.products.entities.Request;
import com.masprog.api.products.services.ProductService;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping(value = "/products")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping
	public Iterable<Product> findAll(){
		return productService.findAll();
	}
	
	@PutMapping
	public ResponseEntity<?> update(@RequestBody Product product){
		return productService.saveUpdate(product, "update");
	}
	
	@PostMapping
	public ResponseEntity<?> save(@RequestBody Product product){
		return productService.saveUpdate(product, "save");
	}
	
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Request> delete(@PathVariable Long id){
		return productService.delete(id);
	}
	
	
	
}
