import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  Form,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css'],
})
export class NewCourseFormComponent implements OnInit {
  // // A FormArray aggregates the values of each child FormControl into an array. It calculates its status by reducing the status values of its children. For example, if one of the controls in a FormArray is invalid, the entire array becomes invalid.
  
  
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl(),
  //   }),
  //   topics: new FormArray([]),
  // });


  //It is getting messy in here..Therefore we can use formbuilder in constructor to clean our code


  form;
  //cleaner approach
  constructor(fb: FormBuilder) {
    this.form=fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: [],
      }),
      topics: fb.array([]),
    });
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
  // A FormArray aggregates the values of each child FormControl into an array. Thats why we are using Formcontrol in remove topic method as values stored in formarray are of type formcontrol
  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }


  

  ngOnInit(): void {}
}
