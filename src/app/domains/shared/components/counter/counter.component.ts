import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;  //en el tipyscrip al accionarle un string pues en seguida dice que es un string entonces no es necesario ponerleselo              @Input({required: true}) message: string= '';
  @Input({required: true}) message = '';

  counter = signal(0);
counterRef : number | undefined;

  constructor() {
    //No ASYNC, ES PARA DECLARAR VARIABLES
    // this.duration = 12;           // before render
    // solo se ejecuta una vez
    console.log('constructor')
    console.log('-' .repeat(10))
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render                               // corre varias veces antes y despues del render
    console.log('ngOnChange');
    console.log('-' .repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    //renderisa el componente
    // solo corre una vez
    // se puede pedir una promesa, peticion
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('during =>', this.duration);
    console.log('message =>', this.message);
    this.counterRef = window.setInterval(() =>{
      console.log('run interval')
      this.counter.update(statePrev => statePrev + 1);
    }, 1000)
  }

  ngAfterViewInit() {
    // after render
    // pregunttar si los hijos ya fueron rendirisados, los hisjos ya fueron pintados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef)
  }

  doSomething() {
    console.log('change duration')
  }



}
