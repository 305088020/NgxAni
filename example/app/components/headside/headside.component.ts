import { Component } from '@angular/core';

@Component({
    selector: 'head-side',
    template: `
    <div class="head-side">
        <div class="container">
            <div class="col-md-9">
                <h1>NgxAni</h1>
                <h4>A Simple Animation Plugin for Angular2+.</h4>
            </div>

            <button class="btn btn-primary" (click)="download()">Download</button>
            <button class="btn btn-primary" (click)="npm()">Npm</button>
        </div>
    </div>
    `,

    styles: ['']
})

export class HeadSideComponent {

    download() {
        location.href = "https://github.com/a-jie/NgxAni";
    }

    npm() {
        location.href = "https://www.npmjs.com/package/ngxani";
    }
}
