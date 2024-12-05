import { test , expect } from "@playwright/test"

test("Get User by ID"           ,async({request}) =>{
const baseURL = "https://reqres.in";

//Use request X to get Single User
const response = await request.get(baseURL+"/api/users/2");

//Verify Response Header is 200
expect (response.status()).toBe(200);

//Extract JSON Body
const responseBody = await response.json();

//make user returned ID "2" and email value
expect (responseBody.data.id).toBe(2);
expect (responseBody.data.email).toBeTruthy();

//Print Response Body
console.log(responseBody);
});

test("Get User with page number",async({request}) =>{
const baseURL = "https://reqres.in";

//Use request X to get User with params X "Page=2"
const response = await request.get(baseURL+"/api/users", {
    params :{
        page: 2
    }
})
    
//Verify Response Header is 200
expect (response.status()).toBe(200);
    
//Extract JSON Body
const responseBody = await response.json();
    
//Verify Page Number Value is 2
expect (responseBody.page).toBe(2);

//Verify Total Users Value is 12
expect (responseBody.total).toBe(12);
    
//Verify First User ID returned Value is 7
expect (responseBody.data[0].id).toBe(7);

//Print Response Body
console.log(responseBody)
});

test("Create New User"          ,async({request}) =>{
const baseURL = "https://reqres.in/";
     
//Use request X to create new User with request data
const response = await request.post(baseURL+"/api/users", {
    data :{
    "name": "mostafa",
    "job": "tester"
    }
})
    
//Verify Response Header is 201
expect (response.status()).toBe('201');
    
//Extract JSON Body
const responseBody = await response.json();

//make sure User returns same provided values in request
expect (responseBody.name).toBe('mostafa');
expect (responseBody.job).toBe('tester');

expect (responseBody.id).toBeTruthy();

//Print Response Body
console.log(responseBody)
});

test("Update User"              ,async({request}) =>{
    const baseURL = "https://reqres.in/";
     
    //Use request X to Update User with request data
    const response = await request.put(baseURL+"/api/users/2", {
        data :{
        "name": "mostafa",
        "job": "Quality Engineer"
        }
    })
        
    //Verify Response Header is 200
    expect (response.status()).toBe('200');
        
    //Extract JSON Body
    const responseBody = await response.json();
    
    //make sure User returns same provided values in request
    expect (responseBody.name).toBe('mostafa');
    expect (responseBody.job).toBe('Quality Engineer');
    
    expect (responseBody.id).toBeTruthy();
    
    //Print Response Body
    console.log(responseBody)      
});

test("Delete User"              ,async({request}) =>{
const baseURL = "https://reqres.in/";

//Use request X to Delete User
const response = await request.delete(baseURL+"/api/users/2")
        
//Verify Response Header is 204
expect (response.status()).toBe('204');          
});