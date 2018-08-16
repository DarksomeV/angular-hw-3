import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {NgForm} from "@angular/forms";
import {ClientItem} from "../../models/ClientItem";
import {ShoppingListItem} from "../../../../../shoppinglist/src/app/models/ShoppingListItem";





@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  @ViewChild('form') form1: NgForm; //получение нашей формы
  item: ClientItem =  {
    name: '',
    eMail: '',
    age: 1,
    phone: '',
    comments: ''
  };

  clientList: ClientItem[];


  constructor() { }

  ngOnInit() {
    this.clientList = [
      {
        id: 1,
        name: 'Sonya',
        eMail: 'sonya@gmail.com',
        age: 19,
        phone: '063-276-7897',
        comments: 'Bla=Bla-bla'
      },
      {
        id: 2,
        name: 'Artem',
        eMail: 'artem@gmail.com',
        age: 31,
        phone: '098-276-7897',
        comments: ''
      }
    ];
  }


  onSubmit(form ) {
     if (form.invalid) return;
    const newItem: ClientItem = {
      id: this.clientList.length +1,
      name: this.item.name,
      eMail: this.item.eMail,
      age: this.item.age,
      phone: this.item.phone,
      comments: this.item.comments
    };
    this.clientList.push(newItem);
    this.form1.resetForm();
  }

  onFocus(input) {
    console.log(input)
  }
}
