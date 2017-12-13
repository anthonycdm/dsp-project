import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Activites } from '../../../models/index';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivitesService } from '../../../services/index';

@Component({
  selector: 'app-add-activite',
  templateUrl: './add-activite.component.html',
  styleUrls: ['./add-activite.component.css']
})
export class AddActiviteComponent implements OnInit {

  form: FormGroup;
  constructor(private route : ActivatedRoute,
  			  private router : Router,
  			  private activite :ActivitesService,
  			  public fb: FormBuilder) { 

  			  this.form = fb.group({
	           	 libelle: ['',[Validators.required, Validators.minLength(3)]],
				       type_act:['',[Validators.required, Validators.minLength(3)]],
				       duree_act:['',[Validators.required, Validators.maxLength(2)]]
        	});

  }
  createActivite(){

     this.activite.createActivite(this.form.value).subscribe(data => {
		
     	let libelle = this.form.get('libelle').value,
     		type_act 	= this.form.get('type_act').value,
     		duree_act	= this.form.get('duree_act').value;
     	
     	console.log(data);

     });

  }

  onSubmit(){

  	this.createActivite();

  }
  ngOnInit() {


  }

}
