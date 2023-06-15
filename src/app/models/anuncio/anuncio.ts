export class Anuncio {
  aviso_id: number = 0;
  created_at: string = "";
  updated_at: string = "";
  name!: string;
  description!: string;
  imagen!: string;
  url: string = "";
  is_active: boolean = true;
}
