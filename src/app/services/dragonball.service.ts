import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = ():Character[] => {
    const characters = localStorage.getItem('characters');
    return characters ? JSON.parse(characters):[];
};

@Injectable({providedIn: 'root'})
export class DragonballService {
    // constructor() { }

     characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalSTorage = effect(() =>{
    // console.log(`Character count ${this.characters().length}`)
    localStorage.setItem('characters', JSON.stringify(this.characters()) )
  })

  
  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character])
  }

    
}

//Dependenci Injection