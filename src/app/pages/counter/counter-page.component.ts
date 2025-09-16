// import { CounterPageComponet } from './counter.component';
import {  ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter-page.component.html',
    styles: `
    button {
        padding: 5px;
        margin:5px;
        width: 100px;
        
    }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponet {
    counter = 0;
    counterSignal = signal(0)

    // constructor(){
    //     setInterval(() => {
    //         this.counter += 1
    //         this.counterSignal.update((v) => v + 1)
    //         console.log('tick')
    //     }, 1000);
    // }

    incrementarValor(value: number) {
        this.counter += value;
        // this.counterSignal.set(this.counterSignal()+value);
        this.counterSignal.update( (current) => current + value )
    }
    decrementarValor(value: number) {
        this.counter -= value;
        // this.counterSignal.set(this.counterSignal()-value);
        this.counterSignal.update( (current) => current - value )
    }
    resetValor() {
        this.counter = 0;
        this.counterSignal.set(0)
    }
}