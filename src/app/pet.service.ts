// pet.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Pet {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private pets: Pet[] = [
    { id: 1, name: 'Rex' },
    { id: 2, name: 'Mittens' },
    { id: 3, name: 'Buddy' }
  ];

  getPets(): Observable<Pet[]> {
    return of(this.pets);
  }
}
