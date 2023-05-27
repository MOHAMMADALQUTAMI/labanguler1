import { Component } from '@angular/core';
import { Emplyee } from './model/emplyee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'labanguler';
  textPlaceholder = 'Enter your username';
  passwordPlaceholder = 'Enter your password';
  username = 'Mohammad';
  password = '';
  welcomeMessage = '';

  oldName = "";
  status = "add"
  name = "";
  position = "";
  salary = 0;
  barithOfDate = new Date;
  createAndUpdate() {
    debugger;
    if (this.status == 'add') {
      let employee = new Emplyee(this.name, this.position, this.salary, this.barithOfDate)
      this.emplyees.push(employee)
      console.log(employee)

    }
    else {
      let emplyee = this.emplyees.filter(obj => {
        return obj.name === this.oldName;

      });
      emplyee[0].name = this.name;
      emplyee[0].position = this.position;
      emplyee[0].salary = this.salary;
      emplyee[0].barithOfDate = this.barithOfDate;
    }
    this.name = "" ;
    this.position ="";
    this.salary = 0
    this.status = "add"
    this.oldName = "" ;
  }
  emplyees: Emplyee[] = [];
  login() {
    alert('wlecome');
  }

  edit(name: string) {
    // console.log(name);
    this.oldName = name;
    this.status = "edit" ;
    let emplyee = this.emplyees.filter(obj => {
      return obj.name === name;

    });
    this.name = emplyee[0].name;
    this.position = emplyee[0].position;
    this.salary = emplyee[0].salary;
    this.barithOfDate = emplyee[0].barithOfDate;
  }

  delete(name: string) {
    for (let index = 0; index < this.emplyees.length; index++) {
      if(this.emplyees[index].name == name){
        this.emplyees.splice(0,1)
      }
      
    }
  }
}
