import { Injectable } from '@angular/core';

declare var $: any;

@Injectable()
export class ToastsManager {
    constructor() {
        $(document).on('click', '.toast-close-button', function() {
            $(this).parent().remove();
        });
    }

    success(message: string, title: string = ''): void {
        const html = this.getTemplateMessage(message, 'toast-success', title);
        $('#toast-container').append($(html).hide().fadeIn(300));
        setTimeout(function () {
            $('#toast-container .toast:first').fadeOut(300).remove();
         }, 5000);
    }

    error(message: string, title: string = '') {
        const html = this.getTemplateMessage(message, 'toast-error', title);
        $('#toast-container').append($(html).hide().fadeIn(300));
        setTimeout(function () {
            $('#toast-container .toast:first').fadeOut(300).remove();
         }, 5000);
    }
    info(message: string, title: string = ''): void {
        const html = this.getTemplateMessage(message, 'toast-info', title);
        $('#toast-container').append($(html).hide().fadeIn(300));
        setTimeout(function () {
            $('#toast-container .toast:first').fadeOut(300).remove();
         }, 5000);
    }

    warning(message: string, title: string = ''): void {
        const html = this.getTemplateMessage(message, 'toast-warning', title);
        $('#toast-container').append($(html).hide().fadeIn(300));
        setTimeout(function () {
            $('#toast-container .toast:first').fadeOut(300).remove();
         }, 5000);
    }

    private getTemplateMessage(msg: string, className: string, title: string = ''): string {
        return ` <div class="toast ` + className + ` ng-star-inserted" style="opacity: 1;">
            <button class="toast-close-button ng-scope">×</button>` +
                (title ? `<div class="toast-title">` + title + `</div>` : '') +
                `<span class="toast-message ng-star-inserted" style="">` + msg + `</span>
                </div>
            </div>`;
    }

}
