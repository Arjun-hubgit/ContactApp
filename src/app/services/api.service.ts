import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/models/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000/contacts'
  
  //dependency injection
  constructor(private http:HttpClient) { } 

  //function for get all contacts
  getAllContacts():Observable<MyContact>{
    return this.http.get(this.baseUrl) //request
  }

  //API call to fetch particular contact details
  viewContacts(contactId:string){
    return this.http.get(`${this.baseUrl}/${contactId}`) //path for contact id {http://localhost:3000/contacts/"contactId's"}
  }

  //API call to fetch group name
  getGroupName(groupId:string){
    return this.http.get('http://localhost:3000/groups/'+groupId)
  }

  //API call to fetch group details
  getAllGroups(){
    return this.http.get('http://localhost:3000/groups')
  }

  //API call for adding new contact details to the server
  addContact(contactBody:any){
    return this.http.post(this.baseUrl,contactBody)
  }

  //API call for deleting contact details in the server
  deleteContact(contactId:any){
    return this.http.delete(`${this.baseUrl}/${contactId}`)
  }

  //To update contact
  updateContact(contactId:any, contactBody:any){
    return this.http.put(`${this.baseUrl}/${contactId}`, contactBody)
  }
}
