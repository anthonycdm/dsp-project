//export const API = "http://54.36.190.213:3000/";
export const PORT = 8000;
export const API = 'http://soextreme.fr:'+PORT+'/';
export const NOW = new Date();
export const LANGUE = 'fr';
export const CURRENCY = {

	'euro':'€'
};
export const LOC_SOXTRM = {
	lat	 : 43.7613593,
	lon  : 6.378837200000021
};
export const RATING_ACT = 5;
export const RATING_PHOTO = 5;
export const GMAP_KEY = 'AIzaSyAgiDSdRngu3Lqnac4YU5xP3JVwEwwZ0N0';
export const I18N_VALUES = {
  'fr': {
    weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
    months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc']
  }
};
export const CURRENT_CLIENT = JSON.parse(localStorage.getItem('currentUser'));
export const CURRENT_GERANT = JSON.parse(localStorage.getItem('currentGerant'));

export const ERROR_FORM =  {
	
	commentaire : {
			
		nologgedIn : {
			
			message:'Vous devez être connecter pour pouvoir commenter.'
		
		
		},
		invalid : {
			
			message:'Votre message est vide.'
		
		
		}	
		
	},
	reservation : {

		nologgedIn : {
			
			message:'Vous devez être connecter pour pouvoir réserver.'
		
		
		},
		horaires : {
			
			notSelected : {
				
				message:'Veuillez sélectionner un horaire pour réserver.'

			}
		}
		
	},
	login : {
		
		email : {
			
			invalid : {
				
				message:'L\'email renseigné n\'est pas valide.'
			}
	
			
		},
		mdp : {
			
			invalid : {
				
				message:'Le mot de passe renseigné n\'est pas valide.'
			}
			
		
		}
	},	
	
	register : {
		
		email : {
			
			invalid : {
				
				message:'L\'email renseigné n\'est pas valide.'
			},
			empty : {
				
				message:'L\'email renseigné est vide.'
				
			}
	
			
		},
		mdp : {
			
			invalid : {
				
				message:'Le mot de passe renseigné n\'est pas valide.'
			},
			empty : {
				
				message:'Le mot de passe renseigné est vide.'
				
			}
			
		
		}
	}
	
	
};