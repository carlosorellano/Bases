import { Component, signal } from '@angular/core';

@Component({
    // selector: 'app-hero-page',
    templateUrl: './hero-page.component.html',
    //   styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent {

    name = signal('Ironman')
    age = signal(45)

    getHeroDescription() {
        return `${this.name()} - ${this.age()}`;
    }
    changeHero() {
        this.name.set('Spiderman')
        this.age.set(22)
    }
    resetForm() {
        this.name.set('Ironman')
        this.age.set(45)
    }

    changeAge() {
        this.age.set(60)
    }




    // changeHero() {
    //     this.nameSignal = 'Spiderman',
    //     this.ageSignal = 22
    // }

}