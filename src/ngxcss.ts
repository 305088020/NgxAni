import { Injectable } from '@angular/core';

/**
* NgxCss Control style function class
*
*
* @langversion TypeScript 2.0
* @frameworks Angular 2.0.1
* @tiptext
*
*/

@Injectable()
export class NgxCss {

    private div: HTMLElement;
    private pfObj: Object = {};

    constructor() {
        this.div = document.createElement("div");
    }

    //is support css Transition
    public hasTransition() {
        let b = document.body || document.documentElement;
        let s = b.style;
        let p = 'transition';

        if (typeof s[p] == 'string') { return true; }

        let v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];
        p = p.charAt(0).toUpperCase() + p.substr(1);

        for (let i = 0; i < v.length; i++) {
            if (typeof s[v[i] + p] == 'string') { return true; }
        }

        return false;
    }

    //is support css 3d
    public has3d() {
        let has3d;
        let transforms: Object = {
            'webkitTransform': '-webkit-transform',
            'OTransform': '-o-transform',
            'msTransform': '-ms-transform',
            'MozTransform': '-moz-transform',
            'transform': 'transform'
        };
        let el = document.createElement('p');


        document.body.insertBefore(el, null);
        for (let t in transforms) {
            if (el.style[t] !== undefined) {
                el.style[t] = "translate3d(1px, 1px, 1px)";
                has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
            }
        }

        document.body.removeChild(el);

        return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
    }

    //get prefix
    public getPrefix(mode: number = 1): string {
        if (this.pfObj[mode]) return this.pfObj[mode];

        let PFS1: string[] = ["Moz", 'Webkit', 'ms', 'O', 'o', ''];
        let PFS2: string[] = ["-moz-", '-webkit-', '-ms-', '-o-', '-o-', ''];
        let prefixs: string[] = mode == 1 ? PFS1 : PFS2;

        for (let i: number = 0, length = prefixs.length; i < length; i++) {
            if ((PFS1[i] + "Transition") in this.div.style) {
                this.pfObj[mode] = prefixs[i];
                break;
            }
        }

        return this.pfObj[mode];
    }


    public css(ele: HTMLElement, props: Object, type?: number) {
        for (let key in props) {
            if (type == 3)
                this.css3(ele, key, props[key]);
            else
                this.css2(ele, key, props[key]);
        }
    }

    public css2(ele: HTMLElement, style: string, value: any) {
        if (style.indexOf('-') > -1)
            style = this.convertStyleMode(style, "js");

        ele.style[style] = value;
    }

    public css3(ele: HTMLElement, style: string, value: any) {
        style = style.charAt(0).toUpperCase() + style.substr(1);

        ele.style['Webkit' + style] = value;
        ele.style['Moz' + style] = value;
        ele.style['ms' + style] = value;
        ele.style['O' + style] = value;
        ele.style['o' + style] = value;
        ele.style['' + style] = value;
    }

    public setOriginCenter(ele: HTMLElement) {
        this.css3(ele, 'transformOrigin', "center center");
    }


    /**
    * backgroundColor <-> background-color
    */
    public convertStyleMode(style: string, mode?: string) {
        if (mode == "js") {
            return style.replace(/\-[a-zA-Z0-9]/g, function(c) {
                if (c == '-m')
                    return c.substr(1, 1).toLowerCase();
                else
                    return c.substr(1, 1).toUpperCase();
            });
        } else {
            return style.replace(/[A-Z]/g, function(c, i) {
                if (i == 0)
                    return c.toLowerCase();
                else
                    return '-' + c.toLowerCase();
            });
        }
    }

    public addClass(ele: HTMLElement, newClass: string) {
        let oldClass = ele.className;
        let blank = (oldClass != '') ? ' ' : '';

        if (!this.hasClass(ele, newClass))
            ele.className = oldClass + blank + newClass;
    }

    public removeClass(ele: HTMLElement, className: string) {
        if (this.hasClass(ele, className)) {
            let reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            ele.className = ele.className.replace(reg, '');
        }
    }

    public hasClass(ele, className: string) {
        return ele.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }

    public addEventListener(ele: HTMLElement, event: string, handler: any) {
        if (ele['addEventListener'])
            ele['addEventListener'](event, handler, false);
        else if (ele['attachEvent'])
            ele['attachEvent']("on" + event.toLowerCase(), handler);
        else
            ele["on" + event] = handler;
    }

    public removeEventListener(ele: HTMLElement, event: string, handler: any) {
        if (ele['removeEventListener'])
            ele['removeEventListener'](event, handler, false);
        else if (ele['attachEvent'])
            ele['detachEvent']("on" + event.toLowerCase(), handler);
        else
            delete ele["on" + event];
    }
}
