import { Directive, ElementRef , Renderer2 , HostListener } from '@angular/core';

@Directive({selector: '[couleur]'})
export class CouleurDirective {
    constructor (private el : ElementRef, private renderer: Renderer2){ }


    @HostListener('window:keyup', ['$event']) keyUp($event) {
        if ($event.key === 'ArrowDown'){
            this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
        } else if ($event.key === 'ArrowLeft'){
            this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
        } else if ($event.key === 'ArrowUp'){
            this.renderer.setStyle(this.el.nativeElement, 'color', 'purple');
        } else if ($event.key === 'ArrowRight'){
            this.renderer.setStyle(this.el.nativeElement, 'color', 'yellow');
        } 
        
    }

    

}


