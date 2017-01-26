import { Component } from '@angular/core';

@Component({
    selector: 'section1',
    template: `
    <div>
        <div class="section" id="section1">
            <h1>Overview</h1>
            <hr>

            <div class="info">
                <h4 class="blur">About NgxAni</h4>
                <p>NgxAni is an animation plugin for AngularJS2+.
                <br>
                It is very simple and convenient to use. At the same time it has very good compatibility.
                <br>
                It can almost help you achieve any animation effect you want. You only need a few lines of code to get what you want！
                NgxAni is a service class, do not rely on any file. You can use it in any Component or Directive.
                </p>
            </div>

            <h3>Quick Start</h3>
            <p>Install and manage Ngxui with <a href="https://www.npmjs.com/package/ngxani">npm</a>.
            </p>
            <pre><code class="javascript">
$ npm install ngxui</code></pre>


            <p>import and use the Ngxui library.</p>
            <pre><code class="ts">{{code}}</code></pre>

        </div>
    </div>

    `,
    styles: ['']
})

export class Section1Component {
    private code = `
//1. import module
import { NgxAniModule } from 'ngxui';

//2. set ngModule
@NgModule({
    imports: [BrowserModule, NgxAniModule]
    ... ...

//3. import service
import { NgxAni } from 'ngxui';

//4. constructor
constructor(private ngxAni: NgxAni) { }

//5. use
private animation(dom: ElementRef) {
  this.ngxAni.to(dom, 1, {
      width: "200px",
      height: "100px"
  });
}
`;

}
