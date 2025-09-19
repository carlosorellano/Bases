import { UpperCasePipe } from '@angular/common';
import { App } from './../../app';
import { Component, computed, signal } from '@angular/core';

@Component({
    selector: 'app-hero-page',
    templateUrl: './hero-page.component.html',
    imports: [UpperCasePipe],
    styleUrls: ['./hero-page.component.css'],
    

})
export class HeroPageComponent {

    name = signal('Ironman')
    age = signal(45)

    heroDescription = computed(() => {
        const description = `${this.name()} - ${this.age()}`
        return description
    })

    capitalizedName = computed(() => this.name().toUpperCase())

    // getHeroDescription() {
    //     return `${this.name()} - ${this.age()}`;
    // }
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