import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  // imports: [],
  templateUrl: './character-add.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>()

  addCharacter() {
    // console.log(this.name(), this.power())
    if (!this.name || !this.power || this.power() < 0) {
      return
    }
    const newCharacter: Character = {
      // id: this.characters().length + 1,
      id: Math.floor(Math.random()* 1000),
      name: this.name(),
      power: this.power(),
    }

    // this.characters().push(newCharacter)//opcion de agregar
    // this.characters.update((list) => [...list, newCharacter])
    // console.log({ newCharacter })
    this.newCharacter.emit(newCharacter)
    this.resetFiels()
  }
   resetFiels(){
    this.name.set('')
    this.power.set(0)
  }
}


