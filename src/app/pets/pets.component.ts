import { Component, OnInit } from '@angular/core';
import { Pet, PetService } from '../pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => this.pets = pets);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    // Como o servidor (ou o serviço in-memory) atribui o id, passamos apenas o nome.
    this.petService.addPet({ name } as Pet).subscribe(newPet => {
      this.pets.push(newPet);
    });
  }

  delete(pet: Pet): void {
    this.pets = this.pets.filter(p => p !== pet);
    this.petService.deletePet(pet.id).subscribe();
  }
}
