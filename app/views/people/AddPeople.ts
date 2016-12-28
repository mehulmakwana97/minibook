import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

@Component({
  moduleId: module.id,
  templateUrl: 'AddPeople.html'
})

export class AddPeople {
  title = "Add People";
  constructor() {
    console.log(this);
  }

  onKeyup(name: string) {
    console.log(name);
  }
}
