import { Component, OnInit } from '@angular/core';
import { DataService} from '../shared/data.service'; 
import{ ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: ' app-troisieme',
  templateUrl: './troisieme.component.html',
  styleUrls: ['./troisieme.component.css']
})
export class TroisiemeComponent implements OnInit {
  form: FormGroup;
donnees;
  constructor(
    private dataService : DataService,
     private route:ActivatedRoute,
     private formBuilder: FormBuilder
     ) { }

  ngOnInit() {
   // this.donnees = this.dataService.getVoitures();
   this.dataService.getVoitures().subscribe(data =>
    this.donnees = data);
    this.route.paramMap.subscribe(params =>console.log(params));
    this.form = this.formBuilder.group({
      nom:['', Validators.required], prenom:['',Validators.required], message:['', Validators.required]
    })
  }
  createForm(){
    console.log(this.form.valid);
    if( this.form.valid){
      console.log(this.form.value);
    }
  }
}
