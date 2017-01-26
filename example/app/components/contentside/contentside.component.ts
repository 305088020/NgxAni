import { Component } from '@angular/core';

@Component({
    selector: 'content-side',
    template: `
    <div class="content-side">
        <div class="container">

            <div class="row">
                <div class="col-md-2 sidebar">
                    <ul class="nav nav-pills flex-column">
                        <li class="nav-item pointer" *ngFor="let data of datas;let i=index" (click)="clickHandler(data,i)">
                            <a class="nav-link pointer" [ngClass]="{'active': data.isActive}" [attr.linkto]="data.link">{{data.title}} <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>


                <div class="col-md-10 clearfix">
                    <section1></section1>
                    <section2></section2>
                    <section3></section3>
                    <section4></section4>
                </div>

            </div>

        </div>
    </div>
    `,
    styles: ['hr{margin:20px 0px;}']
})

export class ContentSideComponent {

    private datas = [
        { link: "#section1", title: "Overview", isActive: true },
        { link: "#section2", title: "Reference", isActive: false },
        { link: "#section3", title: "API & Demo", isActive: false },
        { link: "#section4", title: "Future", isActive: false },
    ];

    private clickHandler(data, index) {
        for (let i = 0; i < this.datas.length; i++)
            this.datas[i].isActive = false;

        this.datas[index].isActive = true;

        let dom = document.querySelector(data.link);
        let top = this.getOffsetTop(dom);
        let htmlElement = document.querySelector("html");

        top = Math.max(0, top - 50);
        this.scrollTo(document.body, 500, top);

        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
            this.scrollTo(htmlElement, 500, top);
    }

    private getOffsetTop(dom) {
        let top = 0;
        let offsetParent = dom;

        while (offsetParent != null && offsetParent != document.body) {
            top += offsetParent.offsetTop || 0;
            offsetParent = offsetParent.offsetParent;
        }

        return top;
    }

    private id;
    private scrollTo(dom, time, top) {
        var from = dom.scrollTop;
        var to = top;
        var t = 1000 / 60;
        var k = Math.floor(time / t);
        var d = (to - from) / k;
        var i = 0;

        clearInterval(this.id);
        this.id = setInterval(() => {
            dom.scrollTop += d;
            i++;

            if (i >= k) {
                clearInterval(this.id);
                dom.scrollTop = to;
            }
        }, t);
    }
}
