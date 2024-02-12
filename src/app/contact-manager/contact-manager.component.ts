import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/models/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  //variable declaired to hold all contact details
  allContacts:MyContact[]=[]

  //variable to hold data from user while searching
  searchKey:string='';

  // heading:string='Search here for contacts...' //string interpolation

  url="https://tse3.mm.bing.net/th?id=OIP.EDXSZL9kHEaW3Lljj6j7igHaIE&pid=Api&P=0&h=180" //property binding

  constructor(private api:ApiService){}//dependency injection

  ngOnInit(): void { //life cycle hook
    this.getAllContact()
  }
  getAllContact(){
    this.api.getAllContacts().subscribe((result:any)=>{ //"this." is a reference keyword used to refer class and object
      console.log(result); //array of contact data
      this.allContacts=result

    });
  }
  nameChange(){
    alert('name change')
  }
  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
  }
  deleteContact(contactId:any){
    this.api.deleteContact(contactId).subscribe((result:any)=>{
      alert('Contact deleted')
      this.getAllContact()
    });
  }
}