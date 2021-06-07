import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-heroe-detail-page',
  templateUrl: './heroe-detail-page.component.html',
  styleUrls: ['./heroe-detail-page.component.css']
})
export class HeroeDetailPageComponent implements OnInit {
  heroForm!: FormGroup;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.heroForm = this.formBuilder.group({
      'name': ['', Validators.required]
    });
  }

}
