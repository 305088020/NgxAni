import { Component, ElementRef } from '@angular/core';
import { NgxAni } from '../../../../src';

@Component({
    selector: 'demo3',
    template: `
    <h4 id="demo3">css transform</h4>
    <button class="pointer btn btn-primary" (click)="animation(rect)">click animate</button>
    <div class="rect" #rect></div>
    <pre><code class="typescript">{{code}}</code></pre>
    `,
    styles: ['.rect{background-color:#2233cc}']
})

export class Demo3Component {

    constructor(private ngxAni: NgxAni) { }

    code: string = `
animation(rect){
  let x = Math.random() * 600;
  let rotate = Math.random() * 360;

  ////////////////////////two methods////////////////////////
  //1. use prefix
  this.ngxAni.to(rect, .7, {
    "transform" : "translate3d(100px, 0, 0) rotate(120deg)",
    "-webkit-transform" : "translate3d(100px, 0, 0) rotate(120deg)",
    "-ms-transform" : "translate3d(100px, 0, 0) rotate(120deg)"
  });

  //2. use ngxAni.getTransform
  this.ngxAni.to(rect, .7, this.ngxAni.getTransform({ rotate: rotate, x: x }));
}
`;

    animation(rect: ElementRef) {
        let w: number = Math.min(this.getWidth() - 145, 600);
        this.ngxAni.to(rect, .7, this.ngxAni.getTransform({ rotate: Math.random() * 360, x: Math.random() * w }));
    }

    getRandomColor(): string {
        return '#' + (function (h) {
            return new Array(7 - h.length).join("0") + h
        })((Math.random() * 0x1000000 << 0).toString(16))
    }


    getWidth(): number {
        return document.body.clientWidth || document.documentElement.clientWidth || window.screen.availWidth;
    }


}
