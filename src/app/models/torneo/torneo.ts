// torneo.ts
// Modelo Torneo con todos sus atributos inicializados con tipo
export class Torneo {
    torneo_id=0;
    name!: string;
    evento!: string;
    description!: string;
    url!: string;
    date_start!: Date;
    date_end!:Date;
    location!: string;
    deporte_id!: number;
    is_active!: string;
    imagen!: string;
    dates: any;
}
