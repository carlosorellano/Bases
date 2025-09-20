import { Component, computed, signal } from '@angular/core';


interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  // styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {

  name = signal('')
  power = signal(0)

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10001 },
    // { id: 2, name: 'Vegeta', power: 9000 },
    // { id: 3, name: 'Picoro', power: 7000 },
    // { id: 3, name: 'Yamcha', power: 7800 },
  ]);

  // powerClass = computed (() =>{
  //   return {
  //     'text-danger' : true,
  //   } 
  // }) 

  addCharacter() {
    // console.log(this.name(), this.power())
    if (!this.name || !this.power || this.power() < 0) {
      return
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    }

    // this.characters().push(newCharacter)//opcion de agregar
    this.characters.update((list) => [...list, newCharacter])
    this.resetFiels()
  }

  resetFiels(){
    this.name.set('')
    this.power.set(0)
  }
}
