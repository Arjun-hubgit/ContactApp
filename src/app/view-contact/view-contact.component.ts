import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  
  contactId:string=''; //to hold contactId

  contact:any=[] //to hold particular contact details

  groupId:string=''; //to hold particular group id

  groupName:string='';

  constructor(private activatedroute:ActivatedRoute,private api:ApiService){}

  ngOnInit(): void {
    this.activatedroute.params.subscribe((data:any)=>{
      console.log(data); //{to console contactId in view contact}
      this.contactId=data.contactId;
      console.log(this.contactId);

      //function to get particular contact details
      this.api.viewContacts(this.contactId).subscribe((data:any)=>{
        console.log(data);
        this.contact=data; //contact details
        this.groupId=data.groupId
        console.log(this.groupId);
        

        //function to get particular group name
      this.api.getGroupName(this.groupId).subscribe((data:any)=>{
        console.log(data);
        this.groupName=data.name
        console.log(this.groupName);
        })
        
      })
    })
  }
}
