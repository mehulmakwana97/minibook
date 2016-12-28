import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'AddPeople.html'
})

export class AddPeople {
  title = "Add People";
  constructor() {
    console.log(this);
  }
}
