export class Activites {

    libelle: string;
    type_act:string;
    duree_act: number;
    condition: String;
    latitude:Float32Array;
    longitude:Float32Array;
   _id:String;
   public get get_id() : String {
   	return this._id;
   }
   

}