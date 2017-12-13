import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Activites } from '../../../models/activites';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivitesService } from '../../../services/index';

@Component({
  selector: 'app-update-activite',
  templateUrl: './update-activite.component.html',
  styleUrls: ['./update-activite.component.css']
})
export class UpdateActiviteComponent implements OnInit {

  form: FormGroup;
  myActivity : any =[];


  constructor(private route : ActivatedRoute,
  			  private router : Router,
  			  private activite :ActivitesService,
  			  public fb: FormBuilder) { 
  			
  			 let id_activite = this.route.snapshot.paramMap.get('id');
  			 console.log(id_activite);

  			  this.form = fb.group({
	           	 libelle: '',
				 type_act:'',
				 duree_act:''
        	  });
        	  console.log(this.form);

  }
getActivite(){
     let id_activite = this.route.snapshot.paramMap.get('id');
     this.activite.getActivite(id_activite).subscribe(data => {this.myActivity=data ;console.log(this.myActivity);});

  }
 updateActivite(){

 	 	 //let id_activite = this.route.snapshot.paramMap.get('id');
     this.activite.updateActivite(this.form.value).subscribe(data => {
		
     	let libelle 	= this.form.get('libelle').value,
     		type_act 	= this.form.get('type_act').value,
     		duree_act	= this.form.get('duree_act').value,
     		_id			= this.route.snapshot.paramMap.get('id');
     	
     	console.log(data);

     });

  }

  onSubmit(){

  	this.updateActivite();

  }
  ngOnInit() {

  	 this.getActivite();


  }

}

