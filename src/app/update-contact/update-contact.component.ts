import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/models/myContact';
import { MyGroup } from 'src/models/myGroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  contactId:string='';
  contact:MyContact={};
  groups:MyGroup[]=[] as MyGroup[]

  constructor(private activatedRoute:ActivatedRoute, private api:ApiService, private router:Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      this.contactId = data.Id
      console.log(this.contactId);
      
      //api call for view contact
      this.api.viewContacts(this.contactId).subscribe((data:any)=>{
        console.log(data); //contact details
        this.contact = data;

      //to get all groups
      this.api.getAllGroups().subscribe((data:any)=>{
        console.log(data);
        this.groups = data;
      })
      })

    })
  }
  updateContact(){
    this.api.updateContact(this.contactId, this.contact).subscribe((data:any)=>{
      this.router.navigateByUrl('')
    })
  }
}
