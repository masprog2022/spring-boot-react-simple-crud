package com.masprog.api.products.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.masprog.api.products.entities.Product;
import com.masprog.api.products.entities.Request;
import com.masprog.api.products.repositories.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository repository;
	
	@Autowired
	private Request request;
	
	public Iterable<Product> findAll(){
		
		return repository.findAll();
	}
	
	public ResponseEntity<?> save(Product product){
		if(product.getName().equals("")) {
			request.setMessage("Nome do Producto obrigatório!");
			return new ResponseEntity<Request>(request, HttpStatus.BAD_REQUEST);
		}else if(product.getBrand().equals("")) {
			request.setMessage("Nome da marca é obrigatório");
			return new ResponseEntity<Request>(request, HttpStatus.BAD_REQUEST);
		}else {
			return new ResponseEntity<Product>(repository.save(product), HttpStatus.CREATED);
		}
	}
	
	public ResponseEntity<?> saveUpdate(Product product, String action){
		if(product.getName().equals("")) {
			request.setMessage("Nome do Producto obrigatório!");
			return new ResponseEntity<Request>(request, HttpStatus.BAD_REQUEST);
		}else if(product.getBrand().equals("")) {
			request.setMessage("Nome da marca é obrigatório");
			return new ResponseEntity<Request>(request, HttpStatus.BAD_REQUEST);
		}else {
			if (action.equals("save")){
			 return new ResponseEntity<Product>(repository.save(product), HttpStatus.CREATED);
			}else {
				return new ResponseEntity<Product>(repository.save(product), HttpStatus.OK);
			}
		}
	}
	
	
}
