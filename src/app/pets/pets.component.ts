// pets.component.ts
import { Component, OnInit } from '@angular/core';
import { Pet, PetService } from '../pet.service';  // Certifique-se de que o caminho está correto

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.petService.getPets().subscribe(pets => this.pets = pets);
  }
}
