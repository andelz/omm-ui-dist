import * as i0 from '@angular/core';
import { input, output, Component, booleanAttribute, viewChild, ChangeDetectionStrategy, model, effect, forwardRef, signal, computed, inject, ElementRef, afterNextRender, LOCALE_ID, Injectable, ChangeDetectorRef, HostListener, Directive, contentChildren, DestroyRef, untracked, viewChildren, afterRenderEffect, Renderer2 } from '@angular/core';
import * as i1 from 'lucide-angular';
import { LucideAngularModule, Check, Minus, DeleteIcon, ChevronsRightIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronLeftIcon, Calendar1Icon, MonitorUp, ChevronDown, PlusIcon, Trash2Icon, ChevronDownIcon, XIcon, SunIcon, MoonIcon, MonitorIcon } from 'lucide-angular';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule, NgControl } from '@angular/forms';
import * as i2 from '@ngx-translate/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import * as i2$1 from '@angular/cdk/overlay';
import { OverlayModule } from '@angular/cdk/overlay';
import { Combobox, ComboboxInput, ComboboxPopupContainer } from '@angular/aria/combobox';
import { Option, Listbox } from '@angular/aria/listbox';
import { CurrencyPipe } from '@angular/common';

class ButtonToggle {
    options = input.required(...(ngDevMode ? [{ debugName: "options" }] : /* istanbul ignore next */ []));
    value = input.required(...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    ariaLabel = input(...(ngDevMode ? [undefined, { debugName: "ariaLabel" }] : /* istanbul ignore next */ []));
    iconSize = input('sm', ...(ngDevMode ? [{ debugName: "iconSize" }] : /* istanbul ignore next */ []));
    valueChange = output();
    select(option) {
        if (option.value !== this.value()) {
            this.valueChange.emit(option.value);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: ButtonToggle, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.7", type: ButtonToggle, isStandalone: true, selector: "omm-button-toggle", inputs: { options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: true, transformFunction: null }, value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: true, transformFunction: null }, ariaLabel: { classPropertyName: "ariaLabel", publicName: "ariaLabel", isSignal: true, isRequired: false, transformFunction: null }, iconSize: { classPropertyName: "iconSize", publicName: "iconSize", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: "<div class=\"button-toggle\" role=\"group\" [attr.aria-label]=\"ariaLabel()\">\n  @for (option of options(); track option.value) {\n    <button\n      type=\"button\"\n      [class.active]=\"value() === option.value\"\n      [attr.aria-pressed]=\"value() === option.value\"\n      [attr.aria-label]=\"option.ariaLabel ?? option.label\"\n      [title]=\"option.label\"\n      (click)=\"select(option)\"\n    >\n      @if (option.icon) {\n        <lucide-icon [img]=\"option.icon\" [attr.data-size]=\"iconSize()\" />\n      }\n      <span>{{ option.label }}</span>\n    </button>\n  }\n</div>\n", styles: [":host{display:inline-flex}.button-toggle{display:inline-flex}.button-toggle button{display:inline-flex;align-items:center;gap:var(--omm-spacing-s);padding:var(--omm-spacing-s) var(--omm-spacing);font-size:var(--omm-font-size-muted);color:var(--omm-text);background:none;border:1px solid var(--omm-input-outline);cursor:pointer}.button-toggle button:first-child{border-radius:var(--omm-corner-s) 0 0 var(--omm-corner-s)}.button-toggle button:last-child{border-radius:0 var(--omm-corner-s) var(--omm-corner-s) 0;border-left:none}.button-toggle button:not(:first-child):not(:last-child){border-left:none}.button-toggle button:hover{opacity:.85;background:var(--omm-active-background)}.button-toggle button.active{opacity:1;color:var(--omm-on-surface-inverted);background:var(--omm-surface-inverted)}\n"], dependencies: [{ kind: "ngmodule", type: LucideAngularModule }, { kind: "component", type: i1.LucideAngularComponent, selector: "lucide-angular, lucide-icon, i-lucide, span-lucide", inputs: ["class", "name", "img", "color", "absoluteStrokeWidth", "size", "strokeWidth"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: ButtonToggle, decorators: [{
            type: Component,
            args: [{ selector: 'omm-button-toggle', imports: [LucideAngularModule], template: "<div class=\"button-toggle\" role=\"group\" [attr.aria-label]=\"ariaLabel()\">\n  @for (option of options(); track option.value) {\n    <button\n      type=\"button\"\n      [class.active]=\"value() === option.value\"\n      [attr.aria-pressed]=\"value() === option.value\"\n      [attr.aria-label]=\"option.ariaLabel ?? option.label\"\n      [title]=\"option.label\"\n      (click)=\"select(option)\"\n    >\n      @if (option.icon) {\n        <lucide-icon [img]=\"option.icon\" [attr.data-size]=\"iconSize()\" />\n      }\n      <span>{{ option.label }}</span>\n    </button>\n  }\n</div>\n", styles: [":host{display:inline-flex}.button-toggle{display:inline-flex}.button-toggle button{display:inline-flex;align-items:center;gap:var(--omm-spacing-s);padding:var(--omm-spacing-s) var(--omm-spacing);font-size:var(--omm-font-size-muted);color:var(--omm-text);background:none;border:1px solid var(--omm-input-outline);cursor:pointer}.button-toggle button:first-child{border-radius:var(--omm-corner-s) 0 0 var(--omm-corner-s)}.button-toggle button:last-child{border-radius:0 var(--omm-corner-s) var(--omm-corner-s) 0;border-left:none}.button-toggle button:not(:first-child):not(:last-child){border-left:none}.button-toggle button:hover{opacity:.85;background:var(--omm-active-background)}.button-toggle button.active{opacity:1;color:var(--omm-on-surface-inverted);background:var(--omm-surface-inverted)}\n"] }]
        }], propDecorators: { options: [{ type: i0.Input, args: [{ isSignal: true, alias: "options", required: true }] }], value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: true }] }], ariaLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "ariaLabel", required: false }] }], iconSize: [{ type: i0.Input, args: [{ isSignal: true, alias: "iconSize", required: false }] }], valueChange: [{ type: i0.Output, args: ["valueChange"] }] } });

class BottomSheet {
    ariaLabel = input(...(ngDevMode ? [undefined, { debugName: "ariaLabel" }] : /* istanbul ignore next */ []));
    /**
     * On a wide viewport, show a centred panel instead of a sheet along the
     * bottom edge. A full-width strip suits a phone held in one hand; on a
     * desktop window it stretches short content across the whole screen.
     */
    panelOnWide = input(false, { ...(ngDevMode ? { debugName: "panelOnWide" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    closed = output();
    dlg = viewChild.required('dlg');
    open() {
        this.dlg().nativeElement.showModal();
    }
    close() {
        this.dlg().nativeElement.close();
    }
    onClose() {
        this.closed.emit();
    }
    onBackdropClick(e) {
        if (e.target === this.dlg().nativeElement)
            this.close();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: BottomSheet, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "21.2.7", type: BottomSheet, isStandalone: true, selector: "omm-bottom-sheet", inputs: { ariaLabel: { classPropertyName: "ariaLabel", publicName: "ariaLabel", isSignal: true, isRequired: false, transformFunction: null }, panelOnWide: { classPropertyName: "panelOnWide", publicName: "panelOnWide", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { closed: "closed" }, viewQueries: [{ propertyName: "dlg", first: true, predicate: ["dlg"], descendants: true, isSignal: true }], ngImport: i0, template: "<dialog\r\n    #dlg\r\n    class=\"bottom-sheet\"\r\n    [class.panel-on-wide]=\"panelOnWide()\"\r\n    [attr.aria-label]=\"ariaLabel()\"\r\n    (close)=\"onClose()\"\r\n    (click)=\"onBackdropClick($event)\">\r\n    <div class=\"sheet\">\r\n        <div class=\"grabber\" aria-hidden=\"true\"></div>\r\n        <div class=\"content\">\r\n            <ng-content></ng-content>\r\n        </div>\r\n    </div>\r\n</dialog>\r\n", styles: [":host{display:contents}dialog.bottom-sheet{inset:auto 0 0;margin:0;padding:0;width:100%;max-width:100vw;min-width:0;background:transparent;border:0;outline:0;box-shadow:none;border-radius:0;overflow:visible;opacity:0;transform:translateY(100%);transition:opacity .25s ease-out,transform .25s ease-out,overlay .25s allow-discrete,display .25s allow-discrete}dialog.bottom-sheet[open]{opacity:1;transform:translateY(0)}@starting-style{dialog.bottom-sheet[open]{opacity:0;transform:translateY(100%)}}@media(prefers-reduced-motion:reduce){dialog.bottom-sheet{transform:none}dialog.bottom-sheet[open]{transform:none}@starting-style{dialog.bottom-sheet[open]{transform:none}}}dialog.bottom-sheet::backdrop{background-color:transparent;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);transition:background-color .25s ease-out,overlay .25s allow-discrete,display .25s allow-discrete}dialog.bottom-sheet[open]::backdrop{background-color:color-mix(in srgb,var(--omm-surface) 40%,transparent)}@starting-style{dialog.bottom-sheet[open]::backdrop{background-color:transparent}}dialog.bottom-sheet .sheet{padding-block-end:var(--omm-safe-area-bottom);background:var(--omm-pane-surface);color:var(--omm-text);border-top-left-radius:var(--omm-spacing-l);border-top-right-radius:var(--omm-spacing-l);max-height:85vh;display:flex;flex-direction:column;overflow:hidden}dialog.bottom-sheet .grabber{width:36px;height:4px;margin:8px auto;border-radius:2px;background:var(--omm-outline);flex:0 0 auto}dialog.bottom-sheet .content{flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column}@media(min-width:600px){dialog.bottom-sheet.panel-on-wide{inset:0;margin:auto;width:min(36rem,100vw - 2 * var(--omm-spacing-l));height:fit-content;transform:translateY(var(--omm-spacing-l))}dialog.bottom-sheet.panel-on-wide[open]{transform:translateY(0)}@starting-style{dialog.bottom-sheet.panel-on-wide[open]{transform:translateY(var(--omm-spacing-l))}}dialog.bottom-sheet.panel-on-wide .sheet{padding-block-end:0;border-radius:var(--omm-spacing-l)}dialog.bottom-sheet.panel-on-wide .grabber{display:none}}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: BottomSheet, decorators: [{
            type: Component,
            args: [{ selector: 'omm-bottom-sheet', imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: "<dialog\r\n    #dlg\r\n    class=\"bottom-sheet\"\r\n    [class.panel-on-wide]=\"panelOnWide()\"\r\n    [attr.aria-label]=\"ariaLabel()\"\r\n    (close)=\"onClose()\"\r\n    (click)=\"onBackdropClick($event)\">\r\n    <div class=\"sheet\">\r\n        <div class=\"grabber\" aria-hidden=\"true\"></div>\r\n        <div class=\"content\">\r\n            <ng-content></ng-content>\r\n        </div>\r\n    </div>\r\n</dialog>\r\n", styles: [":host{display:contents}dialog.bottom-sheet{inset:auto 0 0;margin:0;padding:0;width:100%;max-width:100vw;min-width:0;background:transparent;border:0;outline:0;box-shadow:none;border-radius:0;overflow:visible;opacity:0;transform:translateY(100%);transition:opacity .25s ease-out,transform .25s ease-out,overlay .25s allow-discrete,display .25s allow-discrete}dialog.bottom-sheet[open]{opacity:1;transform:translateY(0)}@starting-style{dialog.bottom-sheet[open]{opacity:0;transform:translateY(100%)}}@media(prefers-reduced-motion:reduce){dialog.bottom-sheet{transform:none}dialog.bottom-sheet[open]{transform:none}@starting-style{dialog.bottom-sheet[open]{transform:none}}}dialog.bottom-sheet::backdrop{background-color:transparent;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);transition:background-color .25s ease-out,overlay .25s allow-discrete,display .25s allow-discrete}dialog.bottom-sheet[open]::backdrop{background-color:color-mix(in srgb,var(--omm-surface) 40%,transparent)}@starting-style{dialog.bottom-sheet[open]::backdrop{background-color:transparent}}dialog.bottom-sheet .sheet{padding-block-end:var(--omm-safe-area-bottom);background:var(--omm-pane-surface);color:var(--omm-text);border-top-left-radius:var(--omm-spacing-l);border-top-right-radius:var(--omm-spacing-l);max-height:85vh;display:flex;flex-direction:column;overflow:hidden}dialog.bottom-sheet .grabber{width:36px;height:4px;margin:8px auto;border-radius:2px;background:var(--omm-outline);flex:0 0 auto}dialog.bottom-sheet .content{flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column}@media(min-width:600px){dialog.bottom-sheet.panel-on-wide{inset:0;margin:auto;width:min(36rem,100vw - 2 * var(--omm-spacing-l));height:fit-content;transform:translateY(var(--omm-spacing-l))}dialog.bottom-sheet.panel-on-wide[open]{transform:translateY(0)}@starting-style{dialog.bottom-sheet.panel-on-wide[open]{transform:translateY(var(--omm-spacing-l))}}dialog.bottom-sheet.panel-on-wide .sheet{padding-block-end:0;border-radius:var(--omm-spacing-l)}dialog.bottom-sheet.panel-on-wide .grabber{display:none}}\n"] }]
        }], propDecorators: { ariaLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "ariaLabel", required: false }] }], panelOnWide: [{ type: i0.Input, args: [{ isSignal: true, alias: "panelOnWide", required: false }] }], closed: [{ type: i0.Output, args: ["closed"] }], dlg: [{ type: i0.ViewChild, args: ['dlg', { isSignal: true }] }] } });

/**
 * Checkbox wrapping a native `<input type="checkbox">`, styled to match the
 * design system. The native input stays in the accessibility tree (label,
 * focus and keyboard behaviour are the browser's), while a custom box + tick
 * are drawn over it.
 *
 * Works three ways:
 *  - standalone signal binding: `[(checked)]="mySignal"`
 *  - one-way + event: `[checked]="x" (checkedChange)="…"`
 *  - reactive/template forms: `formControlName` / `[(ngModel)]` via `ControlValueAccessor`.
 *
 * The label is projected: `<omm-checkbox>Accept terms</omm-checkbox>`.
 */
class Checkbox {
    /** Checked state; two-way bindable and driven by forms via `ControlValueAccessor`. */
    checked = model(false, ...(ngDevMode ? [{ debugName: "checked" }] : /* istanbul ignore next */ []));
    /** Disabled state; also set by forms through `setDisabledState`. */
    disabled = model(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    /** Mixed/partial state — shows a dash and takes visual precedence over `checked`. */
    indeterminate = input(false, ...(ngDevMode ? [{ debugName: "indeterminate" }] : /* istanbul ignore next */ []));
    required = input(false, ...(ngDevMode ? [{ debugName: "required" }] : /* istanbul ignore next */ []));
    /** Accessible name when there is no projected label (icon-only checkbox). */
    ariaLabel = input(...(ngDevMode ? [undefined, { debugName: "ariaLabel" }] : /* istanbul ignore next */ []));
    checkIcon = Check;
    indeterminateIcon = Minus;
    inputRef = viewChild.required('input');
    #onChange = () => { };
    #onTouched = () => { };
    constructor() {
        // `indeterminate` is a DOM property with no attribute equivalent, so mirror it manually.
        effect(() => {
            this.inputRef().nativeElement.indeterminate = this.indeterminate();
        });
    }
    onToggle(event) {
        if (this.disabled())
            return;
        const next = event.target.checked;
        this.checked.set(next);
        this.#onChange(next);
        this.#onTouched();
    }
    onBlur() {
        this.#onTouched();
    }
    // ControlValueAccessor
    writeValue(value) {
        this.checked.set(!!value);
    }
    registerOnChange(fn) {
        this.#onChange = fn;
    }
    registerOnTouched(fn) {
        this.#onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled.set(isDisabled);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: Checkbox, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "21.2.7", type: Checkbox, isStandalone: true, selector: "omm-checkbox", inputs: { checked: { classPropertyName: "checked", publicName: "checked", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, indeterminate: { classPropertyName: "indeterminate", publicName: "indeterminate", isSignal: true, isRequired: false, transformFunction: null }, required: { classPropertyName: "required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, ariaLabel: { classPropertyName: "ariaLabel", publicName: "ariaLabel", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { checked: "checkedChange", disabled: "disabledChange" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => Checkbox),
                multi: true,
            },
        ], viewQueries: [{ propertyName: "inputRef", first: true, predicate: ["input"], descendants: true, isSignal: true }], ngImport: i0, template: "<label class=\"omm-checkbox\" [class.disabled]=\"disabled()\">\r\n    <span class=\"control\">\r\n        <input #input type=\"checkbox\" [checked]=\"checked()\" [disabled]=\"disabled()\"\r\n            [required]=\"required()\" [attr.aria-label]=\"ariaLabel() || null\"\r\n            (change)=\"onToggle($event)\" (blur)=\"onBlur()\" />\r\n        <lucide-icon class=\"mark\" [img]=\"indeterminate() ? indeterminateIcon : checkIcon\" data-size=\"sm\"\r\n            [strokeWidth]=\"3\" aria-hidden=\"true\"></lucide-icon>\r\n    </span>\r\n    <span class=\"label\"><ng-content></ng-content></span>\r\n</label>\r\n", styles: [":host{display:inline-flex}.omm-checkbox{display:inline-flex;flex-flow:row;align-items:center;gap:var(--omm-spacing);cursor:pointer;color:var(--omm-text);line-height:1.3}.omm-checkbox.disabled{cursor:not-allowed;opacity:.5}.omm-checkbox .control{position:relative;flex:0 0 auto;display:inline-flex;width:1.25em;height:1.25em}.omm-checkbox input{appearance:none;-webkit-appearance:none;margin:0;width:100%;height:100%;border:2px solid var(--omm-text);border-radius:var(--omm-corner-xs);background:var(--omm-surface);cursor:inherit;transition:background-color .12s ease,border-color .12s ease}.omm-checkbox input:checked,.omm-checkbox input:indeterminate{background:var(--omm-surface-inverted);color:var(--omm-on-surface-inverted)}.omm-checkbox input:focus-visible{outline:2px solid var(--omm-accent);outline-offset:2px}.omm-checkbox .mark{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:var(--omm-on-accent);pointer-events:none;opacity:0}.omm-checkbox input:checked~.mark,.omm-checkbox input:indeterminate~.mark{opacity:1}.omm-checkbox .label:empty{display:none}\n"], dependencies: [{ kind: "ngmodule", type: LucideAngularModule }, { kind: "component", type: i1.LucideAngularComponent, selector: "lucide-angular, lucide-icon, i-lucide, span-lucide", inputs: ["class", "name", "img", "color", "absoluteStrokeWidth", "size", "strokeWidth"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: Checkbox, decorators: [{
            type: Component,
            args: [{ selector: 'omm-checkbox', imports: [LucideAngularModule], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => Checkbox),
                            multi: true,
                        },
                    ], template: "<label class=\"omm-checkbox\" [class.disabled]=\"disabled()\">\r\n    <span class=\"control\">\r\n        <input #input type=\"checkbox\" [checked]=\"checked()\" [disabled]=\"disabled()\"\r\n            [required]=\"required()\" [attr.aria-label]=\"ariaLabel() || null\"\r\n            (change)=\"onToggle($event)\" (blur)=\"onBlur()\" />\r\n        <lucide-icon class=\"mark\" [img]=\"indeterminate() ? indeterminateIcon : checkIcon\" data-size=\"sm\"\r\n            [strokeWidth]=\"3\" aria-hidden=\"true\"></lucide-icon>\r\n    </span>\r\n    <span class=\"label\"><ng-content></ng-content></span>\r\n</label>\r\n", styles: [":host{display:inline-flex}.omm-checkbox{display:inline-flex;flex-flow:row;align-items:center;gap:var(--omm-spacing);cursor:pointer;color:var(--omm-text);line-height:1.3}.omm-checkbox.disabled{cursor:not-allowed;opacity:.5}.omm-checkbox .control{position:relative;flex:0 0 auto;display:inline-flex;width:1.25em;height:1.25em}.omm-checkbox input{appearance:none;-webkit-appearance:none;margin:0;width:100%;height:100%;border:2px solid var(--omm-text);border-radius:var(--omm-corner-xs);background:var(--omm-surface);cursor:inherit;transition:background-color .12s ease,border-color .12s ease}.omm-checkbox input:checked,.omm-checkbox input:indeterminate{background:var(--omm-surface-inverted);color:var(--omm-on-surface-inverted)}.omm-checkbox input:focus-visible{outline:2px solid var(--omm-accent);outline-offset:2px}.omm-checkbox .mark{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:var(--omm-on-accent);pointer-events:none;opacity:0}.omm-checkbox input:checked~.mark,.omm-checkbox input:indeterminate~.mark{opacity:1}.omm-checkbox .label:empty{display:none}\n"] }]
        }], ctorParameters: () => [], propDecorators: { checked: [{ type: i0.Input, args: [{ isSignal: true, alias: "checked", required: false }] }, { type: i0.Output, args: ["checkedChange"] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: i0.Output, args: ["disabledChange"] }], indeterminate: [{ type: i0.Input, args: [{ isSignal: true, alias: "indeterminate", required: false }] }], required: [{ type: i0.Input, args: [{ isSignal: true, alias: "required", required: false }] }], ariaLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "ariaLabel", required: false }] }], inputRef: [{ type: i0.ViewChild, args: ['input', { isSignal: true }] }] } });

let nextId$2 = 0;
class CurrencyInput {
    locale = typeof navigator !== 'undefined' ? navigator.language : 'de-DE';
    currency = input('EUR', ...(ngDevMode ? [{ debugName: "currency" }] : /* istanbul ignore next */ []));
    value = signal(null, ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    displayValue = signal('', ...(ngDevMode ? [{ debugName: "displayValue" }] : /* istanbul ignore next */ []));
    disabled = signal(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    focused = signal(false, ...(ngDevMode ? [{ debugName: "focused" }] : /* istanbul ignore next */ []));
    uid = nextId$2++;
    inputId = `app-currency-input-${this.uid}`;
    descriptionId = `app-currency-desc-${this.uid}`;
    currencySymbol = computed(() => {
        const parts = new Intl.NumberFormat(this.locale, {
            style: 'currency',
            currency: this.currency(),
        }).formatToParts(0);
        return parts.find((p) => p.type === 'currency')?.value ?? this.currency();
    }, ...(ngDevMode ? [{ debugName: "currencySymbol" }] : /* istanbul ignore next */ []));
    ariaDescription = computed(() => {
        const code = this.currency();
        try {
            const names = new Intl.DisplayNames([this.locale], { type: 'currency' });
            const name = names.of(code);
            if (name)
                return `Enter amount in ${name}`;
        }
        catch {
            // Intl.DisplayNames not supported
        }
        return `Enter amount in ${code}`;
    }, ...(ngDevMode ? [{ debugName: "ariaDescription" }] : /* istanbul ignore next */ []));
    onChange = () => { };
    onTouched = () => { };
    // ControlValueAccessor
    writeValue(value) {
        this.value.set(value);
        if (!this.focused()) {
            this.displayValue.set(value !== null ? this.formatNumber(value) : '');
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled.set(isDisabled);
    }
    // Validator
    validate(_control) {
        const raw = this.displayValue();
        if (raw.trim() && this.value() === null) {
            return { currencyInvalid: { value: raw } };
        }
        return null;
    }
    // Event handlers
    onFocus() {
        this.focused.set(true);
        const val = this.value();
        if (val !== null) {
            const decimalPlaces = this.getDecimalPlaces();
            this.displayValue.set(new Intl.NumberFormat(this.locale, {
                style: 'decimal',
                useGrouping: false,
                minimumFractionDigits: decimalPlaces,
                maximumFractionDigits: decimalPlaces,
            }).format(val));
        }
    }
    onInput(event) {
        const raw = event.target.value;
        this.displayValue.set(raw);
        const parsed = this.parseInput(raw);
        this.value.set(parsed);
        this.onChange(parsed);
    }
    onBlur() {
        this.focused.set(false);
        this.onTouched();
        const val = this.value();
        if (val !== null) {
            this.displayValue.set(this.formatNumber(val));
        }
    }
    // Formatting
    formatNumber(value) {
        const decimalPlaces = this.getDecimalPlaces();
        return new Intl.NumberFormat(this.locale, {
            style: 'decimal',
            useGrouping: true,
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
        }).format(value);
    }
    getDecimalPlaces() {
        return (new Intl.NumberFormat(this.locale, {
            style: 'currency',
            currency: this.currency(),
        }).resolvedOptions().minimumFractionDigits ?? 2);
    }
    // Parsing
    parseInput(raw) {
        if (!raw.trim())
            return null;
        const parts = new Intl.NumberFormat(this.locale).formatToParts(1234567.89);
        const decimal = parts.find((p) => p.type === 'decimal')?.value ?? '.';
        const group = parts.find((p) => p.type === 'group')?.value ?? ',';
        // Escape special regex characters in separators
        const groupEscaped = group.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const decimalEscaped = decimal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        let cleaned = raw.replace(new RegExp(groupEscaped, 'g'), '');
        if (decimal !== '.') {
            cleaned = cleaned.replace(new RegExp(decimalEscaped), '.');
        }
        // Strip non-numeric characters (currency symbols, spaces, etc.)
        cleaned = cleaned.replace(/[^0-9.\-]/g, '');
        const n = parseFloat(cleaned);
        return isNaN(n) ? null : n;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: CurrencyInput, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.2.7", type: CurrencyInput, isStandalone: true, selector: "omm-currency-input", inputs: { currency: { classPropertyName: "currency", publicName: "currency", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-symbol": "currency()" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CurrencyInput),
                multi: true,
            },
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => CurrencyInput),
                multi: true,
            },
        ], ngImport: i0, template: "<input type=\"text\" inputmode=\"decimal\"\r\n    [value]=\"displayValue()\" [disabled]=\"disabled()\" (focus)=\"onFocus()\"\r\n    (input)=\"onInput($event)\" (blur)=\"onBlur()\" />", styles: [":host{display:flex;align-items:center;gap:var(--omm-spacing-s)}:host input{flex:1}:host:before{content:attr(data-symbol)}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: CurrencyInput, decorators: [{
            type: Component,
            args: [{ selector: 'omm-currency-input', standalone: true, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => CurrencyInput),
                            multi: true,
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => CurrencyInput),
                            multi: true,
                        },
                    ], host: {
                        '[attr.data-symbol]': 'currency()',
                    }, template: "<input type=\"text\" inputmode=\"decimal\"\r\n    [value]=\"displayValue()\" [disabled]=\"disabled()\" (focus)=\"onFocus()\"\r\n    (input)=\"onInput($event)\" (blur)=\"onBlur()\" />", styles: [":host{display:flex;align-items:center;gap:var(--omm-spacing-s)}:host input{flex:1}:host:before{content:attr(data-symbol)}\n"] }]
        }], propDecorators: { currency: [{ type: i0.Input, args: [{ isSignal: true, alias: "currency", required: false }] }] } });

/**
 * On-screen numeric PIN entry: a masked dot display over an underline plus a
 * 1–9 / 0 / backspace keypad. Implements ControlValueAccessor so it drops into
 * reactive forms (`[formControl]` / `formControlName`) with a string value of
 * the entered digits. Physical-keyboard input (digits, Backspace, Enter) is
 * handled too for desktop/a11y.
 */
class PinPad {
    /** Fixed PIN length: the number of outlined slots, and the auto-submit threshold. */
    length = input(4, ...(ngDevMode ? [{ debugName: "length" }] : /* istanbul ignore next */ []));
    /** Accessible name for the keypad group and the current entry length. */
    ariaLabel = input('PIN entry', ...(ngDevMode ? [{ debugName: "ariaLabel" }] : /* istanbul ignore next */ []));
    /** Focus the keypad on first render so a physical keyboard works immediately. */
    autofocus = input(true, { ...(ngDevMode ? { debugName: "autofocus" } : /* istanbul ignore next */ {}), transform: (v) => v !== false && v !== 'false' });
    /**
     * When true, the filled dots play a subtle looping wave to signal that entry
     * is being processed (e.g. a PIN is being verified / a vault unlocked).
     */
    verifying = input(false, { ...(ngDevMode ? { debugName: "verifying" } : /* istanbul ignore next */ {}), transform: (v) => v !== false && v !== 'false' });
    #host = inject(ElementRef);
    resetIcon = DeleteIcon;
    constructor() {
        afterNextRender(() => {
            if (this.autofocus())
                this.focus();
        });
    }
    /** Move keyboard focus to the keypad so digit/Backspace/Enter keys are captured. */
    focus() {
        this.#host.nativeElement.focus({ preventScroll: true });
    }
    /** Emits the value once it reaches {@link maxLength} (e.g. to auto-advance). */
    filled = output();
    /** Emits on an Enter keypress, so hosts can treat it as "submit". */
    submitted = output();
    value = signal('', ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    disabled = signal(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    /** Slot indices [0..length) — each renders an outlined dot that fills once entered. */
    slots = computed(() => Array.from({ length: this.length() }, (_, i) => i), ...(ngDevMode ? [{ debugName: "slots" }] : /* istanbul ignore next */ []));
    keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    onChange = () => { };
    onTouched = () => { };
    // ControlValueAccessor
    writeValue(v) {
        this.value.set(v ?? '');
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled.set(isDisabled);
    }
    // Interaction
    press(d) {
        if (this.disabled() || this.value().length >= this.length())
            return;
        const next = this.value() + d;
        this.#commit(next);
        // A pointer tap lands focus on the pressed button; pull it back to the host
        // so subsequent physical keystrokes are still captured.
        this.focus();
        // Auto-submit once every slot is filled.
        if (next.length === this.length())
            this.filled.emit(next);
    }
    backspace() {
        if (this.disabled() || !this.value().length)
            return;
        this.#commit(this.value().slice(0, -1));
        this.focus();
    }
    onKeydown(e) {
        if (this.disabled())
            return;
        if (e.key >= '0' && e.key <= '9') {
            this.press(e.key);
            e.preventDefault();
        }
        else if (e.key === 'Backspace') {
            this.backspace();
            e.preventDefault();
        }
        else if (e.key === 'Enter') {
            this.submitted.emit();
        }
    }
    #commit(next) {
        this.value.set(next);
        this.onTouched();
        this.onChange(next);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: PinPad, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.7", type: PinPad, isStandalone: true, selector: "omm-pin-pad", inputs: { length: { classPropertyName: "length", publicName: "length", isSignal: true, isRequired: false, transformFunction: null }, ariaLabel: { classPropertyName: "ariaLabel", publicName: "ariaLabel", isSignal: true, isRequired: false, transformFunction: null }, autofocus: { classPropertyName: "autofocus", publicName: "autofocus", isSignal: true, isRequired: false, transformFunction: null }, verifying: { classPropertyName: "verifying", publicName: "verifying", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { filled: "filled", submitted: "submitted" }, host: { attributes: { "role": "group", "tabindex": "0" }, listeners: { "keydown": "onKeydown($event)" }, properties: { "attr.aria-label": "ariaLabel()", "attr.aria-disabled": "disabled()" }, classAttribute: "omm-pin-pad" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PinPad),
                multi: true,
            },
        ], ngImport: i0, template: "<div class=\"pin-display\" [class.verifying]=\"verifying()\" aria-hidden=\"true\">\r\n  @for (i of slots(); track i) {\r\n  <span class=\"pin-dot\" [class.filled]=\"i < value().length\" [style.--i]=\"i\"></span>\r\n  }\r\n</div>\r\n\r\n<div class=\"pin-keys\">\r\n  @for (k of keys; track k) {\r\n  <button type=\"button\" class=\"pin-key\" (click)=\"press(k)\" [disabled]=\"disabled()\" [attr.aria-label]=\"k\">\r\n    {{ k }}\r\n  </button>\r\n  }\r\n  <span class=\"pin-key-spacer\" aria-hidden=\"true\"></span>\r\n  <button type=\"button\" class=\"pin-key\" (click)=\"press('0')\" [disabled]=\"disabled()\" aria-label=\"0\">\r\n    0\r\n  </button>\r\n  <button type=\"button\" class=\"pin-key pin-backspace\" (click)=\"backspace()\" [disabled]=\"disabled()\" aria-label=\"Delete\">\r\n    <lucide-icon [img]=\"resetIcon\" data-size=\"xl\" />\r\n  </button>\r\n</div>", styles: [":host{display:flex;flex-direction:column;gap:var(--omm-spacing-xl);outline:none}.pin-display{display:flex;align-items:center;justify-content:space-around;padding-inline:var(--omm-spacing);min-height:1.25rem}.pin-dot{width:1rem;height:1rem;border-radius:50%;border:2px solid color-mix(in srgb,currentColor 35%,transparent);background:transparent;transition:background-color .12s ease,border-color .12s ease}.pin-dot.filled{background:var(--omm-accent, currentColor);border-color:var(--omm-accent, currentColor);animation:pin-dot-fill .15s ease-out}@keyframes pin-dot-fill{0%{transform:scale(.55)}to{transform:scale(1)}}.pin-display.verifying .pin-dot.filled{animation:pin-dot-verify .9s ease-in-out infinite;animation-delay:calc(var(--i, 0) * .12s)}@keyframes pin-dot-verify{0%,to{transform:scale(1);opacity:1}40%{transform:scale(.25);opacity:.65}}@media(prefers-reduced-motion:reduce){.pin-display.verifying .pin-dot.filled{animation:pin-dot-verify-reduced .9s ease-in-out infinite;animation-delay:calc(var(--i, 0) * .12s)}@keyframes pin-dot-verify-reduced{0%,to{opacity:1}50%{opacity:.6}}}.pin-keys{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--omm-spacing)}.pin-key{display:flex;align-items:center;-webkit-user-select:none;user-select:none;justify-content:center;line-height:1;font-size:var(--h2);background:none;border:none;border-radius:999px;padding:var(--omm-spacing) calc(var(--omm-spacing) * 1.5);cursor:pointer;transition:background-color .12s ease}.pin-key:hover:not(:disabled){background:color-mix(in srgb,currentColor 10%,transparent)}.pin-key:active:not(:disabled){background:color-mix(in srgb,currentColor 18%,transparent)}.pin-key:disabled{opacity:.4;cursor:default}.pin-key-spacer{pointer-events:none}.pin-backspace{color:var(--omm-text-muted)}\n"], dependencies: [{ kind: "ngmodule", type: LucideAngularModule }, { kind: "component", type: i1.LucideAngularComponent, selector: "lucide-angular, lucide-icon, i-lucide, span-lucide", inputs: ["class", "name", "img", "color", "absoluteStrokeWidth", "size", "strokeWidth"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: PinPad, decorators: [{
            type: Component,
            args: [{ selector: 'omm-pin-pad', standalone: true, imports: [LucideAngularModule], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => PinPad),
                            multi: true,
                        },
                    ], host: {
                        class: 'omm-pin-pad',
                        role: 'group',
                        tabindex: '0',
                        '[attr.aria-label]': 'ariaLabel()',
                        '[attr.aria-disabled]': 'disabled()',
                        '(keydown)': 'onKeydown($event)',
                    }, template: "<div class=\"pin-display\" [class.verifying]=\"verifying()\" aria-hidden=\"true\">\r\n  @for (i of slots(); track i) {\r\n  <span class=\"pin-dot\" [class.filled]=\"i < value().length\" [style.--i]=\"i\"></span>\r\n  }\r\n</div>\r\n\r\n<div class=\"pin-keys\">\r\n  @for (k of keys; track k) {\r\n  <button type=\"button\" class=\"pin-key\" (click)=\"press(k)\" [disabled]=\"disabled()\" [attr.aria-label]=\"k\">\r\n    {{ k }}\r\n  </button>\r\n  }\r\n  <span class=\"pin-key-spacer\" aria-hidden=\"true\"></span>\r\n  <button type=\"button\" class=\"pin-key\" (click)=\"press('0')\" [disabled]=\"disabled()\" aria-label=\"0\">\r\n    0\r\n  </button>\r\n  <button type=\"button\" class=\"pin-key pin-backspace\" (click)=\"backspace()\" [disabled]=\"disabled()\" aria-label=\"Delete\">\r\n    <lucide-icon [img]=\"resetIcon\" data-size=\"xl\" />\r\n  </button>\r\n</div>", styles: [":host{display:flex;flex-direction:column;gap:var(--omm-spacing-xl);outline:none}.pin-display{display:flex;align-items:center;justify-content:space-around;padding-inline:var(--omm-spacing);min-height:1.25rem}.pin-dot{width:1rem;height:1rem;border-radius:50%;border:2px solid color-mix(in srgb,currentColor 35%,transparent);background:transparent;transition:background-color .12s ease,border-color .12s ease}.pin-dot.filled{background:var(--omm-accent, currentColor);border-color:var(--omm-accent, currentColor);animation:pin-dot-fill .15s ease-out}@keyframes pin-dot-fill{0%{transform:scale(.55)}to{transform:scale(1)}}.pin-display.verifying .pin-dot.filled{animation:pin-dot-verify .9s ease-in-out infinite;animation-delay:calc(var(--i, 0) * .12s)}@keyframes pin-dot-verify{0%,to{transform:scale(1);opacity:1}40%{transform:scale(.25);opacity:.65}}@media(prefers-reduced-motion:reduce){.pin-display.verifying .pin-dot.filled{animation:pin-dot-verify-reduced .9s ease-in-out infinite;animation-delay:calc(var(--i, 0) * .12s)}@keyframes pin-dot-verify-reduced{0%,to{opacity:1}50%{opacity:.6}}}.pin-keys{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--omm-spacing)}.pin-key{display:flex;align-items:center;-webkit-user-select:none;user-select:none;justify-content:center;line-height:1;font-size:var(--h2);background:none;border:none;border-radius:999px;padding:var(--omm-spacing) calc(var(--omm-spacing) * 1.5);cursor:pointer;transition:background-color .12s ease}.pin-key:hover:not(:disabled){background:color-mix(in srgb,currentColor 10%,transparent)}.pin-key:active:not(:disabled){background:color-mix(in srgb,currentColor 18%,transparent)}.pin-key:disabled{opacity:.4;cursor:default}.pin-key-spacer{pointer-events:none}.pin-backspace{color:var(--omm-text-muted)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { length: [{ type: i0.Input, args: [{ isSignal: true, alias: "length", required: false }] }], ariaLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "ariaLabel", required: false }] }], autofocus: [{ type: i0.Input, args: [{ isSignal: true, alias: "autofocus", required: false }] }], verifying: [{ type: i0.Input, args: [{ isSignal: true, alias: "verifying", required: false }] }], filled: [{ type: i0.Output, args: ["filled"] }], submitted: [{ type: i0.Output, args: ["submitted"] }] } });

/**
 * Locale-aware date utilities for the datepicker component.
 * Handles weekday ordering, date formatting/parsing, and locale-specific placeholders
 * using the `Intl` API.
 */
class DatepickerService {
    angularLocale = inject(LOCALE_ID);
    resolvedLocale;
    constructor() {
        this.resolvedLocale = 'de';
        // this.angularLocale !== 'en-US'
        //   ? this.angularLocale
        //   : typeof navigator !== 'undefined'
        //     ? navigator.language
        //     : 'en-US';
    }
    /** Returns the 7 weekday headers (narrow + long names) starting from the locale's first day of week. */
    getWeekdayHeaders() {
        const firstDay = this.getFirstDayOfWeek();
        const narrowFmt = new Intl.DateTimeFormat(this.resolvedLocale, { weekday: 'narrow' });
        const longFmt = new Intl.DateTimeFormat(this.resolvedLocale, { weekday: 'long' });
        // Jan 1, 2024 is a Monday (ISO weekday 1)
        const refMonday = new Date(2024, 0, 1);
        const days = [];
        for (let i = 0; i < 7; i++) {
            const dayOffset = (firstDay - 1 + i) % 7;
            const date = new Date(refMonday);
            date.setDate(refMonday.getDate() + dayOffset);
            days.push({
                narrow: narrowFmt.format(date),
                long: longFmt.format(date),
            });
        }
        return days;
    }
    /** Returns first day of week: 1=Monday ... 7=Sunday */
    getFirstDayOfWeek() {
        try {
            const locale = new Intl.Locale(this.resolvedLocale);
            if (typeof locale.getWeekInfo === 'function') {
                return locale.getWeekInfo().firstDay;
            }
            if ('weekInfo' in locale && locale.weekInfo) {
                return locale.weekInfo.firstDay;
            }
        }
        catch {
            // fallback below
        }
        return this.getFirstDayFallback(this.resolvedLocale);
    }
    getFirstDayFallback(locale) {
        const sundayFirst = ['en-US', 'en-CA', 'ja', 'ko', 'zh', 'he', 'ar'];
        const lang = locale.split('-')[0];
        if (sundayFirst.includes(locale) || sundayFirst.includes(lang)) {
            return 7; // Sunday
        }
        return 1; // Monday
    }
    /** Formats a date as a localized "Month Year" string (e.g. "April 2026"). */
    getMonthYearLabel(date) {
        return new Intl.DateTimeFormat(this.resolvedLocale, {
            month: 'long',
            year: 'numeric',
        }).format(date);
    }
    /** Formats a date as a full localized string (e.g. "Friday, 3 April 2026"). */
    getFullDateLabel(date) {
        return new Intl.DateTimeFormat(this.resolvedLocale, {
            dateStyle: 'full',
        }).format(date);
    }
    /** Formats a date as a short localized string suitable for input display. */
    formatDateForInput(date) {
        return new Intl.DateTimeFormat(this.resolvedLocale, {
            dateStyle: 'short',
        }).format(date);
    }
    /** Returns a locale-specific date format placeholder (e.g. "DD.MM.YYYY" or "MM/DD/YY"). */
    getDateFormatPlaceholder() {
        const ref = new Date(2033, 11, 25); // Dec 25, 2033
        const formatted = this.formatDateForInput(ref);
        return formatted
            .replace('25', 'DD')
            .replace('12', 'MM')
            .replace('2033', 'YYYY')
            .replace('33', 'YY');
    }
    /** Parses a user-entered date string into a `Date`, trying native parsing first, then locale-aware parsing. Returns `null` on failure. */
    parseDateFromInput(raw) {
        if (!raw.trim())
            return null;
        // Try native Date parsing first
        const native = new Date(raw);
        if (!isNaN(native.getTime()) && native.getFullYear() > 1000) {
            return this.normalizeDate(native);
        }
        return this.parseLocaleDate(raw);
    }
    parseLocaleDate(raw) {
        const parts = raw.split(/[\/\-\.]/).map((p) => parseInt(p, 10));
        if (parts.length !== 3 || parts.some(isNaN))
            return null;
        // Determine order by formatting a known reference date
        const ref = new Date(2033, 11, 25); // Dec 25, 2033
        const formatted = this.formatDateForInput(ref);
        const refParts = formatted.split(/[\/\-\.]/).map((p) => parseInt(p, 10));
        const monthIdx = refParts.findIndex((p) => p === 12);
        const dayIdx = refParts.findIndex((p) => p === 25);
        const yearIdx = refParts.findIndex((p) => p === 2033 || p === 33);
        if (monthIdx === -1 || dayIdx === -1 || yearIdx === -1)
            return null;
        let year = parts[yearIdx];
        const month = parts[monthIdx];
        const day = parts[dayIdx];
        if (year < 100)
            year += 2000;
        if (month < 1 || month > 12 || day < 1 || day > 31)
            return null;
        const result = new Date(year, month - 1, day);
        // Validate no date rollover
        if (result.getMonth() !== month - 1 || result.getDate() !== day)
            return null;
        return result;
    }
    normalizeDate(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: DatepickerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: DatepickerService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: DatepickerService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [] });

class Calendar {
    localeService = inject(DatepickerService);
    elementRef = inject(ElementRef);
    cdr = inject(ChangeDetectorRef);
    selectedDate = input(null, ...(ngDevMode ? [{ debugName: "selectedDate" }] : /* istanbul ignore next */ []));
    initialFocusDate = input(new Date(), ...(ngDevMode ? [{ debugName: "initialFocusDate" }] : /* istanbul ignore next */ []));
    min = input(null, ...(ngDevMode ? [{ debugName: "min" }] : /* istanbul ignore next */ []));
    dateSelected = output();
    closeRequested = output();
    focusedDate = signal(new Date(), ...(ngDevMode ? [{ debugName: "focusedDate" }] : /* istanbul ignore next */ []));
    weekdayHeaders = this.localeService.getWeekdayHeaders();
    monthYearLabel = computed(() => this.localeService.getMonthYearLabel(this.focusedDate()), ...(ngDevMode ? [{ debugName: "monthYearLabel" }] : /* istanbul ignore next */ []));
    icons = {
        left: ChevronLeftIcon,
        lefts: ChevronsLeftIcon,
        right: ChevronRightIcon,
        rights: ChevronsRightIcon,
    };
    weeks = computed(() => this.generateWeeks(), ...(ngDevMode ? [{ debugName: "weeks" }] : /* istanbul ignore next */ []));
    constructor() {
        effect(() => {
            const initial = this.initialFocusDate();
            this.focusedDate.set(new Date(initial.getFullYear(), initial.getMonth(), initial.getDate()));
        });
    }
    focusActiveCell() {
        this.cdr.detectChanges();
        const cell = this.elementRef.nativeElement.querySelector('td[tabindex="0"]');
        cell?.focus();
    }
    selectDate(day) {
        if (day.isDisabled)
            return;
        if (day.isOutsideMonth) {
            this.focusedDate.set(day.date);
            return;
        }
        this.dateSelected.emit(day.date);
    }
    navigateMonth(delta) {
        const current = this.focusedDate();
        this.focusedDate.set(new Date(current.getFullYear(), current.getMonth() + delta, 1));
        this.focusActiveCell();
    }
    navigateYear(delta) {
        const current = this.focusedDate();
        this.focusedDate.set(new Date(current.getFullYear() + delta, current.getMonth(), 1));
        this.focusActiveCell();
    }
    onGridKeydown(event) {
        const current = this.focusedDate();
        let handled = true;
        switch (event.key) {
            case 'ArrowRight':
                this.moveFocusClamped(this.addDays(current, 1));
                break;
            case 'ArrowLeft':
                this.moveFocusClamped(this.addDays(current, -1));
                break;
            case 'ArrowDown':
                this.moveFocusClamped(this.addDays(current, 7));
                break;
            case 'ArrowUp':
                this.moveFocusClamped(this.addDays(current, -7));
                break;
            case 'Home':
                this.moveFocusClamped(this.startOfWeek(current));
                break;
            case 'End':
                this.moveFocusClamped(this.endOfWeek(current));
                break;
            case 'PageDown':
                event.shiftKey ? this.moveFocusYear(1) : this.moveFocusMonth(1);
                break;
            case 'PageUp':
                event.shiftKey ? this.moveFocusYear(-1) : this.moveFocusMonth(-1);
                break;
            case 'Enter':
            case ' ':
                if (!this.isBeforeMin(this.focusedDate())) {
                    this.dateSelected.emit(this.focusedDate());
                }
                break;
            default:
                handled = false;
        }
        if (handled) {
            event.preventDefault();
            this.focusActiveCell();
        }
    }
    generateWeeks() {
        const focused = this.focusedDate();
        const year = focused.getFullYear();
        const month = focused.getMonth();
        const selected = this.selectedDate();
        const minDate = this.min();
        const firstDayOfWeek = this.localeService.getFirstDayOfWeek();
        const firstOfMonth = new Date(year, month, 1);
        const firstOfMonthDow = firstOfMonth.getDay();
        const firstOfMonthIso = firstOfMonthDow === 0 ? 7 : firstOfMonthDow;
        let offset = firstOfMonthIso - firstDayOfWeek;
        if (offset < 0)
            offset += 7;
        const gridStart = new Date(year, month, 1 - offset);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const minNorm = minDate
            ? new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate()).getTime()
            : null;
        const weeks = [];
        for (let w = 0; w < 6; w++) {
            const week = [];
            for (let d = 0; d < 7; d++) {
                const cellDate = new Date(gridStart);
                cellDate.setDate(gridStart.getDate() + w * 7 + d);
                const disabled = minNorm !== null && cellDate.getTime() < minNorm;
                week.push({
                    date: cellDate,
                    dayNumber: cellDate.getDate(),
                    dateIso: this.toIsoString(cellDate),
                    isToday: cellDate.getTime() === today.getTime(),
                    isSelected: this.isSameDay(cellDate, selected),
                    isOutsideMonth: cellDate.getMonth() !== month,
                    isDisabled: disabled,
                    isFocusTarget: this.isSameDay(cellDate, focused),
                    fullLabel: this.localeService.getFullDateLabel(cellDate),
                });
            }
            weeks.push(week);
        }
        return weeks;
    }
    isBeforeMin(date) {
        const minDate = this.min();
        if (!minDate)
            return false;
        const minNorm = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
        return date.getTime() < minNorm.getTime();
    }
    moveFocusClamped(target) {
        if (this.isBeforeMin(target))
            return;
        this.focusedDate.set(target);
    }
    addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
    startOfWeek(date) {
        const firstDay = this.localeService.getFirstDayOfWeek();
        const dow = date.getDay();
        const isoDay = dow === 0 ? 7 : dow;
        let diff = isoDay - firstDay;
        if (diff < 0)
            diff += 7;
        return this.addDays(date, -diff);
    }
    endOfWeek(date) {
        return this.addDays(this.startOfWeek(date), 6);
    }
    moveFocusMonth(delta) {
        const current = this.focusedDate();
        const targetMonth = current.getMonth() + delta;
        const maxDay = new Date(current.getFullYear(), targetMonth + 1, 0).getDate();
        const clampedDay = Math.min(current.getDate(), maxDay);
        const target = new Date(current.getFullYear(), targetMonth, clampedDay);
        this.moveFocusClamped(target);
    }
    moveFocusYear(delta) {
        const current = this.focusedDate();
        const targetYear = current.getFullYear() + delta;
        const maxDay = new Date(targetYear, current.getMonth() + 1, 0).getDate();
        const clampedDay = Math.min(current.getDate(), maxDay);
        const target = new Date(targetYear, current.getMonth(), clampedDay);
        this.moveFocusClamped(target);
    }
    isSameDay(a, b) {
        if (!b)
            return false;
        return (a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDate() === b.getDate());
    }
    toIsoString(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: Calendar, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.7", type: Calendar, isStandalone: true, selector: "omm-calendar", inputs: { selectedDate: { classPropertyName: "selectedDate", publicName: "selectedDate", isSignal: true, isRequired: false, transformFunction: null }, initialFocusDate: { classPropertyName: "initialFocusDate", publicName: "initialFocusDate", isSignal: true, isRequired: false, transformFunction: null }, min: { classPropertyName: "min", publicName: "min", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { dateSelected: "dateSelected", closeRequested: "closeRequested" }, ngImport: i0, template: "<div class=\"app-calendar-header\">\r\n    <button type=\"button\" aria-label=\"Previous Year\" (click)=\"navigateYear(-1)\"\r\n        class=\"app-calendar-nav-btn\">\r\n    <lucide-icon [img]=\"icons.lefts\"></lucide-icon>\r\n    </button>\r\n    <button type=\"button\" aria-label=\"Previous Month\" (click)=\"navigateMonth(-1)\"\r\n        class=\"app-calendar-nav-btn\">\r\n    <lucide-icon [img]=\"icons.left\"></lucide-icon>\r\n    </button>\r\n    <h2 aria-live=\"polite\" class=\"app-calendar-title\">{{ monthYearLabel() }}</h2>\r\n    <button type=\"button\" aria-label=\"Next Month\" (click)=\"navigateMonth(1)\"\r\n        class=\"app-calendar-nav-btn\">\r\n    <lucide-icon [img]=\"icons.right\"></lucide-icon></button>\r\n    <button type=\"button\" aria-label=\"Next Year\" (click)=\"navigateYear(1)\" class=\"app-calendar-nav-btn\">\r\n        <lucide-icon [img]=\"icons.rights\"></lucide-icon>\r\n    </button>\r\n</div>\r\n\r\n<table role=\"grid\" (keydown)=\"onGridKeydown($event)\">\r\n    <thead>\r\n        <tr>\r\n            @for (day of weekdayHeaders; track day.long) {\r\n            <th scope=\"col\" [abbr]=\"day.long\">{{ day.narrow }}</th>\r\n            }\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        @for (week of weeks(); track $index) {\r\n        <tr>\r\n            @for (day of week; track day.dateIso) {\r\n            <td role=\"gridcell\" [attr.tabindex]=\"day.isFocusTarget ? 0 : -1\"\r\n                [attr.aria-selected]=\"day.isSelected || null\"\r\n                [attr.aria-disabled]=\"day.isDisabled || day.isOutsideMonth || null\" [attr.aria-label]=\"day.fullLabel\"\r\n                [class.today]=\"day.isToday\" [class.selected]=\"day.isSelected\" [class.outside-month]=\"day.isOutsideMonth\"\r\n                [class.disabled]=\"day.isDisabled\" (click)=\"selectDate(day)\">{{ day.dayNumber }}</td>\r\n            }\r\n        </tr>\r\n        }\r\n    </tbody>\r\n</table>\r\n", styles: [":host{display:block;font-family:system-ui,-apple-system,sans-serif;max-width:400px}:host .app-calendar-header{display:flex;align-items:center;justify-content:space-between;gap:4px;margin-bottom:8px}:host .app-calendar-title{font-size:1rem;font-weight:600;margin:0;text-align:center;flex:1;white-space:nowrap}:host .app-calendar-nav-btn{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;padding:0;border:1px solid transparent;border-radius:4px;background:none;font-size:1.1rem;cursor:pointer;color:inherit}:host .app-calendar-nav-btn:hover{background-color:#0000000f}:host .app-calendar-nav-btn:focus-visible{outline:2px solid #0066cc;outline-offset:-2px}:host table{border-collapse:collapse;width:100%;table-layout:fixed}:host th{padding:4px;font-size:.75rem;font-weight:600;text-align:center;color:#555;-webkit-user-select:none;user-select:none}:host td{padding:0;text-align:center;font-size:.875rem;cursor:pointer;-webkit-user-select:none;user-select:none;border-radius:4px;position:relative;width:36px;height:36px;line-height:36px}:host td:hover:not(.outside-month):not(.disabled){background-color:#0000000f}:host td:focus-visible{outline:2px solid #0066cc;outline-offset:-2px;z-index:1}:host td.today{font-weight:700;border:1px solid currentColor}:host td.selected{background-color:#06c;color:#fff;font-weight:600}:host td.selected:hover{background-color:#0052a3}:host td.outside-month{color:#aaa;cursor:default}:host td.disabled{color:#ccc;cursor:not-allowed;text-decoration:line-through}@media(prefers-reduced-motion:reduce){*{transition:none!important}}\n"], dependencies: [{ kind: "ngmodule", type: LucideAngularModule }, { kind: "component", type: i1.LucideAngularComponent, selector: "lucide-angular, lucide-icon, i-lucide, span-lucide", inputs: ["class", "name", "img", "color", "absoluteStrokeWidth", "size", "strokeWidth"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: Calendar, decorators: [{
            type: Component,
            args: [{ selector: 'omm-calendar', imports: [LucideAngularModule], template: "<div class=\"app-calendar-header\">\r\n    <button type=\"button\" aria-label=\"Previous Year\" (click)=\"navigateYear(-1)\"\r\n        class=\"app-calendar-nav-btn\">\r\n    <lucide-icon [img]=\"icons.lefts\"></lucide-icon>\r\n    </button>\r\n    <button type=\"button\" aria-label=\"Previous Month\" (click)=\"navigateMonth(-1)\"\r\n        class=\"app-calendar-nav-btn\">\r\n    <lucide-icon [img]=\"icons.left\"></lucide-icon>\r\n    </button>\r\n    <h2 aria-live=\"polite\" class=\"app-calendar-title\">{{ monthYearLabel() }}</h2>\r\n    <button type=\"button\" aria-label=\"Next Month\" (click)=\"navigateMonth(1)\"\r\n        class=\"app-calendar-nav-btn\">\r\n    <lucide-icon [img]=\"icons.right\"></lucide-icon></button>\r\n    <button type=\"button\" aria-label=\"Next Year\" (click)=\"navigateYear(1)\" class=\"app-calendar-nav-btn\">\r\n        <lucide-icon [img]=\"icons.rights\"></lucide-icon>\r\n    </button>\r\n</div>\r\n\r\n<table role=\"grid\" (keydown)=\"onGridKeydown($event)\">\r\n    <thead>\r\n        <tr>\r\n            @for (day of weekdayHeaders; track day.long) {\r\n            <th scope=\"col\" [abbr]=\"day.long\">{{ day.narrow }}</th>\r\n            }\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        @for (week of weeks(); track $index) {\r\n        <tr>\r\n            @for (day of week; track day.dateIso) {\r\n            <td role=\"gridcell\" [attr.tabindex]=\"day.isFocusTarget ? 0 : -1\"\r\n                [attr.aria-selected]=\"day.isSelected || null\"\r\n                [attr.aria-disabled]=\"day.isDisabled || day.isOutsideMonth || null\" [attr.aria-label]=\"day.fullLabel\"\r\n                [class.today]=\"day.isToday\" [class.selected]=\"day.isSelected\" [class.outside-month]=\"day.isOutsideMonth\"\r\n                [class.disabled]=\"day.isDisabled\" (click)=\"selectDate(day)\">{{ day.dayNumber }}</td>\r\n            }\r\n        </tr>\r\n        }\r\n    </tbody>\r\n</table>\r\n", styles: [":host{display:block;font-family:system-ui,-apple-system,sans-serif;max-width:400px}:host .app-calendar-header{display:flex;align-items:center;justify-content:space-between;gap:4px;margin-bottom:8px}:host .app-calendar-title{font-size:1rem;font-weight:600;margin:0;text-align:center;flex:1;white-space:nowrap}:host .app-calendar-nav-btn{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;padding:0;border:1px solid transparent;border-radius:4px;background:none;font-size:1.1rem;cursor:pointer;color:inherit}:host .app-calendar-nav-btn:hover{background-color:#0000000f}:host .app-calendar-nav-btn:focus-visible{outline:2px solid #0066cc;outline-offset:-2px}:host table{border-collapse:collapse;width:100%;table-layout:fixed}:host th{padding:4px;font-size:.75rem;font-weight:600;text-align:center;color:#555;-webkit-user-select:none;user-select:none}:host td{padding:0;text-align:center;font-size:.875rem;cursor:pointer;-webkit-user-select:none;user-select:none;border-radius:4px;position:relative;width:36px;height:36px;line-height:36px}:host td:hover:not(.outside-month):not(.disabled){background-color:#0000000f}:host td:focus-visible{outline:2px solid #0066cc;outline-offset:-2px;z-index:1}:host td.today{font-weight:700;border:1px solid currentColor}:host td.selected{background-color:#06c;color:#fff;font-weight:600}:host td.selected:hover{background-color:#0052a3}:host td.outside-month{color:#aaa;cursor:default}:host td.disabled{color:#ccc;cursor:not-allowed;text-decoration:line-through}@media(prefers-reduced-motion:reduce){*{transition:none!important}}\n"] }]
        }], ctorParameters: () => [], propDecorators: { selectedDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "selectedDate", required: false }] }], initialFocusDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "initialFocusDate", required: false }] }], min: [{ type: i0.Input, args: [{ isSignal: true, alias: "min", required: false }] }], dateSelected: [{ type: i0.Output, args: ["dateSelected"] }], closeRequested: [{ type: i0.Output, args: ["closeRequested"] }] } });

class Datepicker {
    icon = Calendar1Icon;
    localeService = inject(DatepickerService);
    min = input(null, ...(ngDevMode ? [{ debugName: "min" }] : /* istanbul ignore next */ []));
    selectedDate = signal(null, ...(ngDevMode ? [{ debugName: "selectedDate" }] : /* istanbul ignore next */ []));
    inputValue = signal('', ...(ngDevMode ? [{ debugName: "inputValue" }] : /* istanbul ignore next */ []));
    disabled = signal(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    calendarDialog = viewChild.required('calendarDialog');
    triggerButton = viewChild.required('triggerButton');
    calendarRef = viewChild.required(Calendar);
    dateFormatPlaceholder = this.localeService.getDateFormatPlaceholder();
    chooseButtonAriaLabel = computed(() => {
        const date = this.selectedDate();
        if (!date)
            return 'Choose Date';
        return `Change Date, ${this.localeService.getFullDateLabel(date)}`;
    }, ...(ngDevMode ? [{ debugName: "chooseButtonAriaLabel" }] : /* istanbul ignore next */ []));
    initialFocusDate = computed(() => this.selectedDate() ?? new Date(), ...(ngDevMode ? [{ debugName: "initialFocusDate" }] : /* istanbul ignore next */ []));
    onChange = () => { };
    onTouched = () => { };
    writeValue(value) {
        if (typeof value === 'string')
            value = new Date(value);
        this.selectedDate.set(value);
        this.inputValue.set(value ? this.localeService.formatDateForInput(value) : '');
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled.set(isDisabled);
    }
    validate(_control) {
        const raw = this.inputValue();
        if (raw && !this.selectedDate()) {
            return { datepickerParse: { value: raw } };
        }
        const date = this.selectedDate();
        const minDate = this.min();
        if (date && minDate) {
            const minNorm = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
            if (date.getTime() < minNorm.getTime()) {
                return { datepickerMin: { min: minDate, actual: date } };
            }
        }
        return null;
    }
    onManualInput(event) {
        const raw = event.target.value;
        this.inputValue.set(raw);
        const parsed = this.localeService.parseDateFromInput(raw);
        this.selectedDate.set(parsed);
        this.onChange(parsed);
    }
    toggleDialog() {
        const dialog = this.calendarDialog().nativeElement;
        if (dialog.open) {
            dialog.close();
        }
        else {
            dialog.showModal();
            // Wait one tick for dialog to be visible, then focus the active cell
            setTimeout(() => this.calendarRef().focusActiveCell());
        }
    }
    onDateSelected(date) {
        this.selectedDate.set(date);
        this.inputValue.set(this.localeService.formatDateForInput(date));
        this.onChange(date);
        this.calendarDialog().nativeElement.close();
    }
    onDialogClose() {
        this.onTouched();
        this.triggerButton().nativeElement.focus();
    }
    onDialogBackdropClick(event) {
        if (event.target === this.calendarDialog().nativeElement) {
            this.calendarDialog().nativeElement.close();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: Datepicker, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "21.2.7", type: Datepicker, isStandalone: true, selector: "omm-datepicker", inputs: { min: { classPropertyName: "min", publicName: "min", isSignal: true, isRequired: false, transformFunction: null } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => Datepicker),
                multi: true,
            },
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => Datepicker),
                multi: true,
            },
        ], viewQueries: [{ propertyName: "calendarDialog", first: true, predicate: ["calendarDialog"], descendants: true, isSignal: true }, { propertyName: "triggerButton", first: true, predicate: ["triggerButton"], descendants: true, isSignal: true }, { propertyName: "calendarRef", first: true, predicate: Calendar, descendants: true, isSignal: true }], ngImport: i0, template: "<input type=\"text\" [placeholder]=\"dateFormatPlaceholder\"\r\n    [value]=\"inputValue()\" [disabled]=\"disabled()\" (input)=\"onManualInput($event)\" (blur)=\"onTouched()\"\r\n    autocomplete=\"off\" />\r\n\r\n<button #triggerButton type=\"button\" class=\"icon\"[disabled]=\"disabled()\"\r\n      (click)=\"toggleDialog()\">\r\n    <lucide-icon [img]=\"icon\"></lucide-icon>\r\n</button>\r\n\r\n<dialog\r\n  #calendarDialog\r\n  aria-modal=\"true\"\r\n  class=\"app-datepicker-dialog\"\r\n  (close)=\"onDialogClose()\"\r\n  (click)=\"onDialogBackdropClick($event)\"\r\n>\r\n  <omm-calendar\r\n    [selectedDate]=\"selectedDate()\"\r\n    [initialFocusDate]=\"initialFocusDate()\"\r\n    [min]=\"min()\"\r\n    (dateSelected)=\"onDateSelected($event)\"\r\n  />\r\n</dialog>\r\n", styles: [":host{display:flex;align-items:center;gap:var(--omm-spacing-s)}:host input{flex:1}\n"], dependencies: [{ kind: "ngmodule", type: LucideAngularModule }, { kind: "component", type: i1.LucideAngularComponent, selector: "lucide-angular, lucide-icon, i-lucide, span-lucide", inputs: ["class", "name", "img", "color", "absoluteStrokeWidth", "size", "strokeWidth"] }, { kind: "component", type: Calendar, selector: "omm-calendar", inputs: ["selectedDate", "initialFocusDate", "min"], outputs: ["dateSelected", "closeRequested"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: Datepicker, decorators: [{
            type: Component,
            args: [{ selector: 'omm-datepicker', imports: [LucideAngularModule, Calendar], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => Datepicker),
                            multi: true,
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => Datepicker),
                            multi: true,
                        },
                    ], template: "<input type=\"text\" [placeholder]=\"dateFormatPlaceholder\"\r\n    [value]=\"inputValue()\" [disabled]=\"disabled()\" (input)=\"onManualInput($event)\" (blur)=\"onTouched()\"\r\n    autocomplete=\"off\" />\r\n\r\n<button #triggerButton type=\"button\" class=\"icon\"[disabled]=\"disabled()\"\r\n      (click)=\"toggleDialog()\">\r\n    <lucide-icon [img]=\"icon\"></lucide-icon>\r\n</button>\r\n\r\n<dialog\r\n  #calendarDialog\r\n  aria-modal=\"true\"\r\n  class=\"app-datepicker-dialog\"\r\n  (close)=\"onDialogClose()\"\r\n  (click)=\"onDialogBackdropClick($event)\"\r\n>\r\n  <omm-calendar\r\n    [selectedDate]=\"selectedDate()\"\r\n    [initialFocusDate]=\"initialFocusDate()\"\r\n    [min]=\"min()\"\r\n    (dateSelected)=\"onDateSelected($event)\"\r\n  />\r\n</dialog>\r\n", styles: [":host{display:flex;align-items:center;gap:var(--omm-spacing-s)}:host input{flex:1}\n"] }]
        }], propDecorators: { min: [{ type: i0.Input, args: [{ isSignal: true, alias: "min", required: false }] }], calendarDialog: [{ type: i0.ViewChild, args: ['calendarDialog', { isSignal: true }] }], triggerButton: [{ type: i0.ViewChild, args: ['triggerButton', { isSignal: true }] }], calendarRef: [{ type: i0.ViewChild, args: [i0.forwardRef(() => Calendar), { isSignal: true }] }] } });

class FileDrop {
    fileDrop = output();
    /** Overlay text; defaults to the translated "Upload and encrypt file". */
    label = input(...(ngDevMode ? [undefined, { debugName: "label" }] : /* istanbul ignore next */ []));
    icon = {
        upload: MonitorUp,
    };
    onDragEnter(event) {
        if (!event.dataTransfer?.types?.includes('Files'))
            return;
        event.preventDefault();
        event.stopImmediatePropagation();
        this.active.set(true);
    }
    onDrop(event) {
        this.onFileDrop(event);
        this.active.set(false);
    }
    onBodyDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    onBodyDrop(event) {
        event.preventDefault();
    }
    dragLeave(event) {
        this.active.set(false);
    }
    active = signal(false, ...(ngDevMode ? [{ debugName: "active" }] : /* istanbul ignore next */ []));
    onFileDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        const dataTransfer = event.dataTransfer;
        if (dataTransfer) {
            if (dataTransfer?.items) {
                const files = [];
                for (let i = 0; i < dataTransfer.items.length; i++) {
                    if (dataTransfer.items[i].kind === 'file') {
                        const file = dataTransfer.items[i].getAsFile();
                        if (file)
                            files.push(file);
                    }
                }
                dataTransfer.items.clear();
                this.fileDrop.emit(files);
            }
            else {
                const files = dataTransfer.files;
                dataTransfer.clearData();
                this.fileDrop.emit(Array.from(files));
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: FileDrop, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.7", type: FileDrop, isStandalone: true, selector: "omm-file-drop", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { fileDrop: "fileDrop" }, host: { listeners: { "document:dragenter": "onDragEnter($event)", "drop": "onDrop($event)", "body:dragover": "onBodyDragOver($event)", "body:drop": "onBodyDrop($event)" } }, ngImport: i0, template: "@if(active()){\r\n<div class=\"file-drop\" animate.enter=\"enter\" animate.leave=\"leaving\"\r\n(dragleave)=\"dragLeave($event)\"\r\n    >\r\n\r\n\r\n    <lucide-icon aria-hidden=\"true\" data-size=\"xl\" [img]=\"icon.upload\"></lucide-icon>\r\n    <h3>{{ label() || ('omm.ui.file-drop.label' | translate) }}</h3>\r\n\r\n</div>\r\n}\r\n", styles: [":host .file-drop{position:absolute;inset:0;background-color:color-mix(in srgb,var(--omm-surface) 80%,transparent);z-index:9999;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);align-items:center;display:flex;flex-direction:column;justify-content:center}:host .file-drop>*{pointer-events:none}:host .file-drop h3,:host .file-drop lucide-icon{opacity:0;animation:fade-slide .5s forwards ease-in-out}:host .file-drop h3{animation-delay:.5s}:host .enter{animation:fade .25s}:host .leaving{opacity:0;transition:opacity .25s ease-out}@keyframes fade{0%{opacity:0}to{opacity:1}}@keyframes fade-slide{0%{opacity:0;transform:translateY(1em)}to{opacity:1;transform:translateY(0)}}\n"], dependencies: [{ kind: "ngmodule", type: LucideAngularModule }, { kind: "component", type: i1.LucideAngularComponent, selector: "lucide-angular, lucide-icon, i-lucide, span-lucide", inputs: ["class", "name", "img", "color", "absoluteStrokeWidth", "size", "strokeWidth"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: FileDrop, decorators: [{
            type: Component,
            args: [{ selector: 'omm-file-drop', imports: [LucideAngularModule, TranslateModule], template: "@if(active()){\r\n<div class=\"file-drop\" animate.enter=\"enter\" animate.leave=\"leaving\"\r\n(dragleave)=\"dragLeave($event)\"\r\n    >\r\n\r\n\r\n    <lucide-icon aria-hidden=\"true\" data-size=\"xl\" [img]=\"icon.upload\"></lucide-icon>\r\n    <h3>{{ label() || ('omm.ui.file-drop.label' | translate) }}</h3>\r\n\r\n</div>\r\n}\r\n", styles: [":host .file-drop{position:absolute;inset:0;background-color:color-mix(in srgb,var(--omm-surface) 80%,transparent);z-index:9999;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);align-items:center;display:flex;flex-direction:column;justify-content:center}:host .file-drop>*{pointer-events:none}:host .file-drop h3,:host .file-drop lucide-icon{opacity:0;animation:fade-slide .5s forwards ease-in-out}:host .file-drop h3{animation-delay:.5s}:host .enter{animation:fade .25s}:host .leaving{opacity:0;transition:opacity .25s ease-out}@keyframes fade{0%{opacity:0}to{opacity:1}}@keyframes fade-slide{0%{opacity:0;transform:translateY(1em)}to{opacity:1;transform:translateY(0)}}\n"] }]
        }], propDecorators: { fileDrop: [{ type: i0.Output, args: ["fileDrop"] }], label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], onDragEnter: [{
                type: HostListener,
                args: ['document:dragenter', ['$event']]
            }], onDrop: [{
                type: HostListener,
                args: ['drop', ['$event']]
            }], onBodyDragOver: [{
                type: HostListener,
                args: ['body:dragover', ['$event']]
            }], onBodyDrop: [{
                type: HostListener,
                args: ['body:drop', ['$event']]
            }] } });

// Declared before DragSelect, whose `contentChildren` query names it: JIT
// compilation (dox's Karma tests) reads that query when DragSelect is defined.
class DragSelectItemDirective {
    #elRef = inject(ElementRef);
    el = this.#elRef.nativeElement;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: DragSelectItemDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.7", type: DragSelectItemDirective, isStandalone: true, selector: "[yuvDragSelectItem]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: DragSelectItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[yuvDragSelectItem]',
                }]
        }] });
class DragSelect {
    #selector;
    #selectStartX = 0;
    #selectStartY = 0;
    #selection = [];
    items = contentChildren(DragSelectItemDirective, ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
    selectables = input(undefined, ...(ngDevMode ? [{ debugName: "selectables" }] : /* istanbul ignore next */ []));
    #selectables = computed(() => this.selectables() ?? this.items().map((item) => item.el), ...(ngDevMode ? [{ debugName: "#selectables" }] : /* istanbul ignore next */ []));
    yuvDragSelect = input(...(ngDevMode ? [undefined, { debugName: "yuvDragSelect" }] : /* istanbul ignore next */ []));
    dragSelectChange = output();
    dragSelect = output();
    onPointerDown(event) {
        if (event.pointerType === 'touch')
            return;
        if (this.yuvDragSelect()?.disabled || event.target.tagName === 'BUTTON')
            return;
        event.preventDefault();
        this.#selectStartX = event.clientX;
        this.#selectStartY = event.clientY;
        // Fixed + topmost so no positioned/stacked app content can paint over it,
        // and click-through so it never becomes the pointer target itself.
        const div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.zIndex = '2147483647';
        div.style.pointerEvents = 'none';
        div.style.width = '0';
        div.style.height = '0';
        div.style.left = this.#selectStartX + 'px';
        div.style.top = this.#selectStartY + 'px';
        const color = this.yuvDragSelect()?.selectorColor || 'var(--omm-accent)';
        div.style.background = `rgb(from ${color} r g b / .2)`;
        div.style.outline = `1px solid rgb(from ${color} r g b / .6)`;
        div.style.outlineOffset = '-1px';
        div.classList.add('drag-select');
        this.#selector = div;
        document.body.append(this.#selector);
        this.#selection = [];
        addEventListener('pointermove', this.#resize);
        addEventListener('pointerup', this.#onPointerUp);
    }
    #onPointerUp = () => {
        removeEventListener('pointermove', this.#resize);
        removeEventListener('pointerup', this.#onPointerUp);
        if (this.#selection.length)
            this.dragSelect.emit(this.#selection);
        if (this.#selector)
            this.#selector.remove();
    };
    #resize = (event) => {
        if (!this.#selector)
            return;
        const diffX = event.clientX - this.#selectStartX;
        const diffY = event.clientY - this.#selectStartY;
        this.#selector.style.left =
            diffX < 0 ? this.#selectStartX + diffX + 'px' : this.#selectStartX + 'px';
        this.#selector.style.top =
            diffY < 0 ? this.#selectStartY + diffY + 'px' : this.#selectStartY + 'px';
        this.#selector.style.height = Math.abs(diffY) + 'px';
        this.#selector.style.width = Math.abs(diffX) + 'px';
        this.#checkSelected();
    };
    #checkSelected = () => {
        if (!this.#selector)
            return;
        const select = this.#selector.getBoundingClientRect();
        const { x, y, height, width } = select;
        if (!height || !width)
            return;
        const currSelectionLength = this.#selection.length;
        this.#selectables().forEach((selectable, idx) => {
            const r1 = { x, y, height, width };
            const r2 = selectable.getBoundingClientRect();
            this.#selection = this.#selection.filter((s) => s !== idx);
            if (this.#checkRectIntersection(r1, r2)) {
                this.#selection.push(idx);
            }
        });
        if (currSelectionLength !== this.#selection.length) {
            this.dragSelectChange.emit(this.#selection);
        }
    };
    #checkRectIntersection = (r1, r2) => {
        return !(r1.x + r1.width < r2.x ||
            r2.x + r2.width < r1.x ||
            r1.y + r1.height < r2.y ||
            r2.y + r2.height < r1.y);
    };
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: DragSelect, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.2.0", version: "21.2.7", type: DragSelect, isStandalone: true, selector: "[ommDragSelect]", inputs: { selectables: { classPropertyName: "selectables", publicName: "selectables", isSignal: true, isRequired: false, transformFunction: null }, yuvDragSelect: { classPropertyName: "yuvDragSelect", publicName: "yuvDragSelect", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { dragSelectChange: "dragSelectChange", dragSelect: "dragSelect" }, host: { listeners: { "pointerdown": "onPointerDown($event)" } }, queries: [{ propertyName: "items", predicate: DragSelectItemDirective, isSignal: true }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: DragSelect, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ommDragSelect]',
                    host: {
                        '(pointerdown)': 'onPointerDown($event)',
                    },
                }]
        }], propDecorators: { items: [{ type: i0.ContentChildren, args: [i0.forwardRef(() => DragSelectItemDirective), { isSignal: true }] }], selectables: [{ type: i0.Input, args: [{ isSignal: true, alias: "selectables", required: false }] }], yuvDragSelect: [{ type: i0.Input, args: [{ isSignal: true, alias: "yuvDragSelect", required: false }] }], dragSelectChange: [{ type: i0.Output, args: ["dragSelectChange"] }], dragSelect: [{ type: i0.Output, args: ["dragSelect"] }] } });

class ListItem {
    value = input.required({ ...(ngDevMode ? { debugName: "value" } : /* istanbul ignore next */ {}), alias: 'ommListItem' });
    disabledInput = input(false, { ...(ngDevMode ? { debugName: "disabledInput" } : /* istanbul ignore next */ {}), transform: booleanAttribute, alias: 'disabled' });
    get disabled() {
        return this.disabledInput();
    }
    /**
     * When false, the row cannot be selected: clicks/keyboard "activate" it
     * (e.g. navigate) instead of toggling selection, and drag-select / long-press
     * selection skip it. Still focusable for keyboard navigation.
     */
    selectable = input(true, { ...(ngDevMode ? { debugName: "selectable" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    list = inject(forwardRef(() => List));
    el = inject(ElementRef).nativeElement;
    index = computed(() => this.list.items().indexOf(this), ...(ngDevMode ? [{ debugName: "index" }] : /* istanbul ignore next */ []));
    isActive = computed(() => this.list.activeIndex() === this.index(), ...(ngDevMode ? [{ debugName: "isActive" }] : /* istanbul ignore next */ []));
    isSelected = computed(() => this.list.isSelected(this.index()), ...(ngDevMode ? [{ debugName: "isSelected" }] : /* istanbul ignore next */ []));
    #originalTabindex = new WeakMap();
    static LONG_PRESS_MS = 500;
    static MOVE_TOLERANCE_PX = 10;
    #longPressTimer = null;
    #pressStartX = 0;
    #pressStartY = 0;
    #suppressNextClick = false;
    #focusablesEffect = effect(() => {
        const active = this.isActive();
        const focusables = this.el.querySelectorAll('a[href], button, input, select, textarea, [tabindex]');
        focusables.forEach((el) => {
            if (el === this.el)
                return;
            if (!this.#originalTabindex.has(el)) {
                this.#originalTabindex.set(el, el.getAttribute('tabindex'));
            }
            if (active) {
                const orig = this.#originalTabindex.get(el);
                if (orig === null)
                    el.removeAttribute('tabindex');
                else
                    el.setAttribute('tabindex', orig);
            }
            else {
                el.setAttribute('tabindex', '-1');
            }
        });
    }, ...(ngDevMode ? [{ debugName: "#focusablesEffect" }] : /* istanbul ignore next */ []));
    focus() {
        this.el.focus();
    }
    getLabel() {
        return this.el.textContent?.trim() ?? '';
    }
    onClick(event) {
        const target = event.target;
        if (target !== this.el &&
            target.closest('button, a, input, select, textarea, [role="button"]')) {
            return;
        }
        if (this.disabled)
            return;
        if (this.#suppressNextClick) {
            this.#suppressNextClick = false;
            return;
        }
        if (!this.selectable()) {
            // Non-selectable rows (e.g. folders) navigate on click rather than select.
            this.list.handleItemActivate(this.index());
            return;
        }
        if (this.list.isTouch() && !this.list.selectionMode()) {
            // On touch, a plain tap opens the viewer without selecting; selection mode
            // is only entered via long-press (see onPointerDown).
            this.list.handleItemActivate(this.index());
            return;
        }
        this.list.handleItemClick(this.index(), event);
    }
    onDblClick(event) {
        const target = event.target;
        if (target !== this.el &&
            target.closest('button, a, input, select, textarea, [role="button"]')) {
            return;
        }
        if (this.disabled)
            return;
        if (this.list.isTouch())
            return;
        if (this.list.selectionMode())
            return;
        // The click already activated the item; don't open it twice.
        if (this.list.activateOnClick() || !this.selectable())
            return;
        this.list.handleItemActivate(this.index());
    }
    onFocus() {
        if (this.list.activeIndex() !== this.index()) {
            this.list.activeIndex.set(this.index());
        }
    }
    onPointerDown(event) {
        if (event.pointerType !== 'touch')
            return;
        if (!this.list.multi() || !this.list.isTouch())
            return;
        if (this.disabled)
            return;
        if (!this.selectable())
            return;
        if (this.list.selectionMode())
            return;
        const target = event.target;
        if (target !== this.el &&
            target.closest('button, a, input, select, textarea, [role="button"]')) {
            return;
        }
        this.#pressStartX = event.clientX;
        this.#pressStartY = event.clientY;
        this.#clearLongPressTimer();
        const index = this.index();
        this.#longPressTimer = setTimeout(() => {
            this.#longPressTimer = null;
            this.#suppressNextClick = true;
            this.list.enterSelectionMode(index);
        }, ListItem.LONG_PRESS_MS);
    }
    onPointerMove(event) {
        if (this.#longPressTimer === null)
            return;
        const dx = event.clientX - this.#pressStartX;
        const dy = event.clientY - this.#pressStartY;
        if (Math.hypot(dx, dy) > ListItem.MOVE_TOLERANCE_PX) {
            this.#clearLongPressTimer();
        }
    }
    onPointerEnd() {
        this.#clearLongPressTimer();
    }
    #clearLongPressTimer() {
        if (this.#longPressTimer !== null) {
            clearTimeout(this.#longPressTimer);
            this.#longPressTimer = null;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: ListItem, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.7", type: ListItem, isStandalone: true, selector: "[ommListItem]", inputs: { value: { classPropertyName: "value", publicName: "ommListItem", isSignal: true, isRequired: true, transformFunction: null }, disabledInput: { classPropertyName: "disabledInput", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, selectable: { classPropertyName: "selectable", publicName: "selectable", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "role": "option" }, listeners: { "click": "onClick($event)", "dblclick": "onDblClick($event)", "focus": "onFocus()", "pointerdown": "onPointerDown($event)", "pointermove": "onPointerMove($event)", "pointerup": "onPointerEnd()", "pointercancel": "onPointerEnd()", "pointerleave": "onPointerEnd()" }, properties: { "attr.tabindex": "isActive() ? 0 : -1", "attr.aria-selected": "list.multi() ? isSelected() : null", "attr.aria-disabled": "disabled || null", "attr.data-active": "isActive() || null", "attr.data-selected": "isSelected() || null", "attr.data-selection-mode": "list.selectionMode() || null", "attr.data-list-has-selection": "list.selection().size > 0 || null", "attr.data-selectable": "selectable() ? null : \"false\"" } }, exportAs: ["ommListItem"], hostDirectives: [{ directive: DragSelectItemDirective }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: ListItem, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ommListItem]',
                    exportAs: 'ommListItem',
                    hostDirectives: [DragSelectItemDirective],
                    host: {
                        role: 'option',
                        '[attr.tabindex]': 'isActive() ? 0 : -1',
                        '[attr.aria-selected]': 'list.multi() ? isSelected() : null',
                        '[attr.aria-disabled]': 'disabled || null',
                        '[attr.data-active]': 'isActive() || null',
                        '[attr.data-selected]': 'isSelected() || null',
                        '[attr.data-selection-mode]': 'list.selectionMode() || null',
                        '[attr.data-list-has-selection]': 'list.selection().size > 0 || null',
                        '[attr.data-selectable]': 'selectable() ? null : "false"',
                        '(click)': 'onClick($event)',
                        '(dblclick)': 'onDblClick($event)',
                        '(focus)': 'onFocus()',
                        '(pointerdown)': 'onPointerDown($event)',
                        '(pointermove)': 'onPointerMove($event)',
                        '(pointerup)': 'onPointerEnd()',
                        '(pointercancel)': 'onPointerEnd()',
                        '(pointerleave)': 'onPointerEnd()',
                    },
                }]
        }], propDecorators: { value: [{ type: i0.Input, args: [{ isSignal: true, alias: "ommListItem", required: true }] }], disabledInput: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], selectable: [{ type: i0.Input, args: [{ isSignal: true, alias: "selectable", required: false }] }] } });

const PHONE_QUERY = '(max-width: 599px)';
const TABLET_QUERY = '(min-width: 600px) and (max-width: 1199px)';
const DESKTOP_QUERY = '(min-width: 1200px)';
const TOUCH_QUERY = '(pointer: coarse)';
const VIRTUAL_KEYBOARD_THRESHOLD_PX = 150;
const TEXT_INPUT_TYPES = new Set([
    'text', 'email', 'password', 'search', 'tel', 'url', 'number',
]);
function isTextLikeFocusTarget(target) {
    if (!(target instanceof Element))
        return false;
    if (target instanceof HTMLTextAreaElement)
        return true;
    if (target instanceof HTMLInputElement)
        return TEXT_INPUT_TYPES.has(target.type);
    if (target instanceof HTMLElement) {
        if (target.isContentEditable)
            return true;
        const attr = target.getAttribute('contenteditable');
        if (attr === '' || attr === 'true' || attr === 'plaintext-only')
            return true;
    }
    return false;
}
class EnvironmentService {
    breakpoint = signal('desktop', ...(ngDevMode ? [{ debugName: "breakpoint" }] : /* istanbul ignore next */ []));
    isTouch = signal(false, ...(ngDevMode ? [{ debugName: "isTouch" }] : /* istanbul ignore next */ []));
    virtualKeyboardVisible = signal(false, ...(ngDevMode ? [{ debugName: "virtualKeyboardVisible" }] : /* istanbul ignore next */ []));
    #queries = [];
    #touchQuery = null;
    #initialized = false;
    #hasTextFocus = false;
    #viewportShrunk = false;
    init() {
        if (this.#initialized)
            return;
        this.#initialized = true;
        if (typeof window === 'undefined' || typeof window.matchMedia !== 'function')
            return;
        const phone = window.matchMedia(PHONE_QUERY);
        const tablet = window.matchMedia(TABLET_QUERY);
        const desktop = window.matchMedia(DESKTOP_QUERY);
        this.#queries = [phone, tablet, desktop];
        const updateBreakpoint = () => {
            if (phone.matches)
                this.breakpoint.set('phone');
            else if (tablet.matches)
                this.breakpoint.set('tablet');
            else
                this.breakpoint.set('desktop');
        };
        for (const q of this.#queries)
            q.addEventListener('change', updateBreakpoint);
        updateBreakpoint();
        this.#touchQuery = window.matchMedia(TOUCH_QUERY);
        const updateTouch = () => this.isTouch.set(this.#touchQuery.matches);
        this.#touchQuery.addEventListener('change', updateTouch);
        updateTouch();
        const recomputeKeyboard = () => {
            this.virtualKeyboardVisible.set(this.#hasTextFocus && this.#viewportShrunk);
        };
        document.addEventListener('focusin', (e) => {
            this.#hasTextFocus = isTextLikeFocusTarget(e.target);
            recomputeKeyboard();
        });
        document.addEventListener('focusout', () => {
            queueMicrotask(() => {
                this.#hasTextFocus = isTextLikeFocusTarget(document.activeElement);
                recomputeKeyboard();
            });
        });
        const vv = window.visualViewport;
        if (vv) {
            const onViewport = () => {
                this.#viewportShrunk =
                    window.innerHeight - vv.height > VIRTUAL_KEYBOARD_THRESHOLD_PX;
                recomputeKeyboard();
            };
            vv.addEventListener('resize', onViewport);
            vv.addEventListener('scroll', onViewport);
            onViewport();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: EnvironmentService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: EnvironmentService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: EnvironmentService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

class List {
    #dRef = inject(DestroyRef);
    #env = inject(EnvironmentService);
    multi = input(false, { ...(ngDevMode ? { debugName: "multi" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    /**
     * When true, a plain click (no modifier, not in selection mode) activates the
     * item instead of replacing the selection. Modifier-click, shift-range,
     * drag-select and long-press still select as usual. Lets a multi-select list
     * keep "click to open" semantics (e.g. a photo grid). Default false.
     */
    activateOnClick = input(false, { ...(ngDevMode ? { debugName: "activateOnClick" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    itemActivate = output();
    selectionChange = output();
    selectionModeChange = output();
    isTouch = this.#env.isTouch;
    items = contentChildren(ListItem, ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
    selectableEls = computed(() => this.items().map((i) => i.el), ...(ngDevMode ? [{ debugName: "selectableEls" }] : /* istanbul ignore next */ []));
    activeIndex = signal(0, ...(ngDevMode ? [{ debugName: "activeIndex" }] : /* istanbul ignore next */ []));
    selection = signal(new Set(), ...(ngDevMode ? [{ debugName: "selection" }] : /* istanbul ignore next */ []));
    selectionMode = signal(false, ...(ngDevMode ? [{ debugName: "selectionMode" }] : /* istanbul ignore next */ []));
    #anchorIndex = -1;
    keyManager;
    #keyManagerSubscription;
    #autoExitSelectionModeEffect = effect(() => {
        if (this.selectionMode() && this.selection().size === 0) {
            untracked(() => {
                this.selectionMode.set(false);
                this.selectionModeChange.emit(false);
            });
        }
    }, ...(ngDevMode ? [{ debugName: "#autoExitSelectionModeEffect" }] : /* istanbul ignore next */ []));
    #itemsEffect = effect(() => {
        const items = this.items();
        if (this.#keyManagerSubscription)
            this.#keyManagerSubscription.unsubscribe();
        if (this.keyManager)
            this.keyManager.destroy();
        this.keyManager = new FocusKeyManager(items).withWrap().withHomeAndEnd().withTypeAhead();
        untracked(() => this.keyManager.setActiveItem(this.activeIndex()));
        this.#keyManagerSubscription = this.keyManager.change
            .pipe(takeUntilDestroyed(this.#dRef))
            .subscribe((index) => {
            if (index != null)
                this.activeIndex.set(index);
        });
    }, ...(ngDevMode ? [{ debugName: "#itemsEffect" }] : /* istanbul ignore next */ []));
    isSelected(index) {
        return this.selection().has(index);
    }
    #isSelectable(index) {
        return this.items()[index]?.selectable() ?? true;
    }
    onKeyDown(event) {
        const items = this.items();
        if (!items.length)
            return;
        // Don't hijack typing inside a row's own input (e.g. inline rename).
        const target = event.target;
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')
            return;
        if (event.key === ' ' || event.key === 'Spacebar') {
            const index = this.activeIndex();
            if (!this.#isSelectable(index)) {
                // Non-selectable rows (e.g. folders) activate instead of toggling.
                event.preventDefault();
                this.handleItemActivate(index);
                return;
            }
            if (this.multi()) {
                event.preventDefault();
                this.#toggleAt(index);
            }
            return;
        }
        if (event.key === 'Enter') {
            event.preventDefault();
            const value = items[this.activeIndex()]?.value();
            if (value !== undefined)
                this.itemActivate.emit(value);
            return;
        }
        this.keyManager.onKeydown(event);
    }
    handleItemClick(index, event) {
        const items = this.items();
        const value = items[index]?.value();
        if (value === undefined)
            return;
        if (!this.#isSelectable(index)) {
            this.handleItemActivate(index);
            return;
        }
        if (!this.multi()) {
            this.selection.set(new Set([index]));
            this.activeIndex.set(index);
            this.#emitSelection();
            return;
        }
        if (this.selectionMode()) {
            this.#toggleAt(index);
            this.activeIndex.set(index);
            return;
        }
        if (event.shiftKey && this.#anchorIndex >= 0) {
            const [a, b] = [this.#anchorIndex, index].sort((x, y) => x - y);
            const next = new Set();
            for (let i = a; i <= b; i++)
                if (this.#isSelectable(i))
                    next.add(i);
            this.selection.set(next);
        }
        else if (event.ctrlKey || event.metaKey) {
            const next = new Set(this.selection());
            if (next.has(index))
                next.delete(index);
            else
                next.add(index);
            this.selection.set(next);
            this.#anchorIndex = index;
        }
        else if (this.activateOnClick()) {
            // Plain click opens the item rather than replacing the selection.
            this.handleItemActivate(index);
            return;
        }
        else {
            this.selection.set(new Set([index]));
            this.#anchorIndex = index;
        }
        this.activeIndex.set(index);
        this.#emitSelection();
    }
    /**
     * Click on a row's `ommListItemToggle`: toggles the row, or with shift adds
     * the range from the anchor. Leaves the rest of the selection untouched.
     */
    handleToggleClick(index, event) {
        if (!this.multi() || !this.#isSelectable(index))
            return;
        if (event.shiftKey && this.#anchorIndex >= 0) {
            const [a, b] = [this.#anchorIndex, index].sort((x, y) => x - y);
            const next = new Set(this.selection());
            for (let i = a; i <= b; i++)
                if (this.#isSelectable(i))
                    next.add(i);
            this.selection.set(next);
            this.#emitSelection();
        }
        else {
            this.#toggleAt(index);
        }
        this.activeIndex.set(index);
    }
    handleItemActivate(index) {
        const value = this.items()[index]?.value();
        if (value === undefined)
            return;
        this.itemActivate.emit(value);
    }
    selectItem(index) {
        const items = this.items();
        if (index < 0 || index >= items.length)
            return;
        this.selection.set(new Set([index]));
        this.activeIndex.set(index);
        this.#anchorIndex = index;
        this.#emitSelection();
    }
    clearSelection() {
        if (this.selection().size === 0)
            return;
        this.selection.set(new Set());
        this.#anchorIndex = -1;
        this.#emitSelection();
    }
    enterSelectionMode(index) {
        if (!this.multi())
            return;
        const items = this.items();
        if (index < 0 || index >= items.length)
            return;
        if (!this.#isSelectable(index))
            return;
        const value = items[index].value();
        if (value === undefined)
            return;
        const wasOn = this.selectionMode();
        this.selection.set(new Set([index]));
        this.activeIndex.set(index);
        this.#anchorIndex = index;
        if (!wasOn) {
            this.selectionMode.set(true);
            this.selectionModeChange.emit(true);
        }
        this.#emitSelection();
    }
    exitSelectionMode() {
        const wasOn = this.selectionMode();
        const hadSelection = this.selection().size > 0;
        if (hadSelection) {
            this.selection.set(new Set());
            this.#anchorIndex = -1;
            this.#emitSelection();
        }
        if (wasOn) {
            this.selectionMode.set(false);
            this.selectionModeChange.emit(false);
        }
    }
    onDragSelectChange(indices) {
        if (!this.multi())
            return;
        this.selection.set(new Set(indices.filter((i) => this.#isSelectable(i))));
        this.#emitSelection();
    }
    #toggleAt(index) {
        const next = new Set(this.selection());
        if (next.has(index))
            next.delete(index);
        else
            next.add(index);
        this.selection.set(next);
        this.#anchorIndex = index;
        this.#emitSelection();
    }
    #emitSelection() {
        const items = this.items();
        this.selectionChange.emit([...this.selection()].map((i) => items[i].value()).filter((v) => v !== undefined));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: List, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "21.2.7", type: List, isStandalone: true, selector: "omm-list", inputs: { multi: { classPropertyName: "multi", publicName: "multi", isSignal: true, isRequired: false, transformFunction: null }, activateOnClick: { classPropertyName: "activateOnClick", publicName: "activateOnClick", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { itemActivate: "itemActivate", selectionChange: "selectionChange", selectionModeChange: "selectionModeChange" }, host: { attributes: { "role": "listbox", "aria-orientation": "vertical" }, listeners: { "keydown": "onKeyDown($event)" }, properties: { "attr.aria-multiselectable": "multi() || null" } }, queries: [{ propertyName: "items", predicate: ListItem, isSignal: true }], ngImport: i0, template: "<div class=\"container\"\r\n     ommDragSelect\r\n     [selectables]=\"selectableEls()\"\r\n     [yuvDragSelect]=\"{ disabled: !multi() || isTouch() }\"\r\n     (dragSelectChange)=\"onDragSelectChange($event)\">\r\n    <ng-content></ng-content>\r\n</div>\r\n", styles: [":host{--bottom-offset: 0;display:block}:host .container{margin:0;padding:0;overflow-y:auto;max-height:100%;min-height:100%;padding-block-end:var(--bottom-offset);box-sizing:border-box}:host ::ng-deep [role=option]{--indicator-size: 3px;--indicator-inset: 2px;--indicator-color: var(--omm-accent);--omm-list-checkbox-size: 18px;--omm-list-checkbox-gap: 12px;display:flex;cursor:pointer;position:relative;outline:0;transition:background-color .2s ease-in-out,padding-inline-end .15s ease-in-out;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}:host ::ng-deep [role=option]:hover{background-color:var(--omm-active-background)}:host ::ng-deep [role=option][data-active=true]{background-color:var(--omm-active-background)}:host ::ng-deep [role=option][aria-selected=true],:host ::ng-deep [role=option][data-selected=true]{color:var(--omm-accent);background-color:var(--omm-selected-background)}:host ::ng-deep [role=option][data-selection-mode=true]:not([data-selectable=false]){padding-inline-end:calc(var(--omm-list-checkbox-size) + var(--omm-list-checkbox-gap) * 2)}:host ::ng-deep [role=option][data-selection-mode=true]:not([data-selectable=false]):after{content:\"\";position:absolute;inset-inline-end:var(--omm-list-checkbox-gap);top:50%;width:var(--omm-list-checkbox-size);height:var(--omm-list-checkbox-size);margin-top:calc(var(--omm-list-checkbox-size) / -2);border:1.5px solid currentColor;border-radius:4px;opacity:.6;box-sizing:border-box;transition:background-color .12s ease-in-out,opacity .12s ease-in-out}:host ::ng-deep [role=option][data-selection-mode=true][data-selected=true]:after{background-color:var(--omm-accent);border-color:var(--omm-accent);opacity:1;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M2.5 6.5l2.5 2.5 5-5' stroke='white' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:center;background-size:70% 70%}:host ::ng-deep [role=option][data-selection-mode=true]:has(.omm-list-item-toggle){padding-inline-end:0}:host ::ng-deep [role=option][data-selection-mode=true]:has(.omm-list-item-toggle):after{display:none}:host ::ng-deep .omm-list-item-toggle{--omm-list-toggle-cover: var(--omm-surface);--omm-list-toggle-check: var(--omm-text-muted);position:relative;transition:border-color .12s ease-in-out;overflow:hidden}:host ::ng-deep .omm-list-item-toggle:before,:host ::ng-deep .omm-list-item-toggle:after{content:\"\";position:absolute;inset:0;opacity:0;pointer-events:none;transition:opacity .12s ease-in-out,background-color .12s ease-in-out,transform .12s ease-in-out;outline:2px solid var(--omm-list-toggle-cover)}:host ::ng-deep .omm-list-item-toggle:before{background-color:var(--omm-list-toggle-cover)}:host ::ng-deep .omm-list-item-toggle:after{background-color:var(--omm-list-toggle-check);-webkit-mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M2.5 6.5l2.5 2.5 5-5' stroke='black' stroke-width='1.6' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\") center/70% 70% no-repeat;mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M2.5 6.5l2.5 2.5 5-5' stroke='black' stroke-width='1.6' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\") center/70% 70% no-repeat;transform:scale(.6)}@media(hover:hover){:host ::ng-deep [role=option]:not([data-selectable=false]):hover .omm-list-item-toggle:before,:host ::ng-deep [role=option]:not([data-selectable=false]):hover .omm-list-item-toggle:after{opacity:1;transform:none}:host ::ng-deep [role=option]:not([data-selected=true]) .omm-list-item-toggle:hover{--omm-list-toggle-check: var(--omm-text)}}:host ::ng-deep [role=option][data-selected=true] .omm-list-item-toggle{--omm-list-toggle-cover: var(--omm-accent);--omm-list-toggle-check: var(--omm-on-accent);border-color:var(--omm-accent)}:host ::ng-deep [role=option][data-selected=true] .omm-list-item-toggle:before,:host ::ng-deep [role=option][data-selected=true] .omm-list-item-toggle:after{opacity:1;transform:none}\n"], dependencies: [{ kind: "directive", type: DragSelect, selector: "[ommDragSelect]", inputs: ["selectables", "yuvDragSelect"], outputs: ["dragSelectChange", "dragSelect"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: List, decorators: [{
            type: Component,
            args: [{ selector: 'omm-list', imports: [DragSelect], host: {
                        role: 'listbox',
                        'aria-orientation': 'vertical',
                        '[attr.aria-multiselectable]': 'multi() || null',
                        '(keydown)': 'onKeyDown($event)',
                    }, template: "<div class=\"container\"\r\n     ommDragSelect\r\n     [selectables]=\"selectableEls()\"\r\n     [yuvDragSelect]=\"{ disabled: !multi() || isTouch() }\"\r\n     (dragSelectChange)=\"onDragSelectChange($event)\">\r\n    <ng-content></ng-content>\r\n</div>\r\n", styles: [":host{--bottom-offset: 0;display:block}:host .container{margin:0;padding:0;overflow-y:auto;max-height:100%;min-height:100%;padding-block-end:var(--bottom-offset);box-sizing:border-box}:host ::ng-deep [role=option]{--indicator-size: 3px;--indicator-inset: 2px;--indicator-color: var(--omm-accent);--omm-list-checkbox-size: 18px;--omm-list-checkbox-gap: 12px;display:flex;cursor:pointer;position:relative;outline:0;transition:background-color .2s ease-in-out,padding-inline-end .15s ease-in-out;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}:host ::ng-deep [role=option]:hover{background-color:var(--omm-active-background)}:host ::ng-deep [role=option][data-active=true]{background-color:var(--omm-active-background)}:host ::ng-deep [role=option][aria-selected=true],:host ::ng-deep [role=option][data-selected=true]{color:var(--omm-accent);background-color:var(--omm-selected-background)}:host ::ng-deep [role=option][data-selection-mode=true]:not([data-selectable=false]){padding-inline-end:calc(var(--omm-list-checkbox-size) + var(--omm-list-checkbox-gap) * 2)}:host ::ng-deep [role=option][data-selection-mode=true]:not([data-selectable=false]):after{content:\"\";position:absolute;inset-inline-end:var(--omm-list-checkbox-gap);top:50%;width:var(--omm-list-checkbox-size);height:var(--omm-list-checkbox-size);margin-top:calc(var(--omm-list-checkbox-size) / -2);border:1.5px solid currentColor;border-radius:4px;opacity:.6;box-sizing:border-box;transition:background-color .12s ease-in-out,opacity .12s ease-in-out}:host ::ng-deep [role=option][data-selection-mode=true][data-selected=true]:after{background-color:var(--omm-accent);border-color:var(--omm-accent);opacity:1;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M2.5 6.5l2.5 2.5 5-5' stroke='white' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:center;background-size:70% 70%}:host ::ng-deep [role=option][data-selection-mode=true]:has(.omm-list-item-toggle){padding-inline-end:0}:host ::ng-deep [role=option][data-selection-mode=true]:has(.omm-list-item-toggle):after{display:none}:host ::ng-deep .omm-list-item-toggle{--omm-list-toggle-cover: var(--omm-surface);--omm-list-toggle-check: var(--omm-text-muted);position:relative;transition:border-color .12s ease-in-out;overflow:hidden}:host ::ng-deep .omm-list-item-toggle:before,:host ::ng-deep .omm-list-item-toggle:after{content:\"\";position:absolute;inset:0;opacity:0;pointer-events:none;transition:opacity .12s ease-in-out,background-color .12s ease-in-out,transform .12s ease-in-out;outline:2px solid var(--omm-list-toggle-cover)}:host ::ng-deep .omm-list-item-toggle:before{background-color:var(--omm-list-toggle-cover)}:host ::ng-deep .omm-list-item-toggle:after{background-color:var(--omm-list-toggle-check);-webkit-mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M2.5 6.5l2.5 2.5 5-5' stroke='black' stroke-width='1.6' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\") center/70% 70% no-repeat;mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M2.5 6.5l2.5 2.5 5-5' stroke='black' stroke-width='1.6' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\") center/70% 70% no-repeat;transform:scale(.6)}@media(hover:hover){:host ::ng-deep [role=option]:not([data-selectable=false]):hover .omm-list-item-toggle:before,:host ::ng-deep [role=option]:not([data-selectable=false]):hover .omm-list-item-toggle:after{opacity:1;transform:none}:host ::ng-deep [role=option]:not([data-selected=true]) .omm-list-item-toggle:hover{--omm-list-toggle-check: var(--omm-text)}}:host ::ng-deep [role=option][data-selected=true] .omm-list-item-toggle{--omm-list-toggle-cover: var(--omm-accent);--omm-list-toggle-check: var(--omm-on-accent);border-color:var(--omm-accent)}:host ::ng-deep [role=option][data-selected=true] .omm-list-item-toggle:before,:host ::ng-deep [role=option][data-selected=true] .omm-list-item-toggle:after{opacity:1;transform:none}\n"] }]
        }], propDecorators: { multi: [{ type: i0.Input, args: [{ isSignal: true, alias: "multi", required: false }] }], activateOnClick: [{ type: i0.Input, args: [{ isSignal: true, alias: "activateOnClick", required: false }] }], itemActivate: [{ type: i0.Output, args: ["itemActivate"] }], selectionChange: [{ type: i0.Output, args: ["selectionChange"] }], selectionModeChange: [{ type: i0.Output, args: ["selectionModeChange"] }], items: [{ type: i0.ContentChildren, args: [i0.forwardRef(() => ListItem), { isSignal: true }] }] } });

/**
 * Marks an element inside an `ommListItem` as the row's selection checkbox
 * (e.g. a file-type badge). The list renders it as a checkbox when the row is
 * hovered (pointer devices), selected, or the list has a selection / is in
 * touch selection mode. Pair with `activateOnClick` on the list so a click on
 * the rest of the row opens the item.
 *
 * Pointer: clicking the toggle toggles the row (shift extends a range).
 * Touch: the toggle only reacts once long-press has entered selection mode, at
 * which point the whole row toggles anyway — so the click just bubbles.
 *
 * Keyboard selection stays on the row (Space), so the toggle is not focusable
 * and hidden from assistive tech; the row already exposes `aria-selected`.
 */
class ListItemToggle {
    #item = inject(ListItem);
    onClick(event) {
        const list = this.#item.list;
        if (list.isTouch() || !list.multi() || !this.#item.selectable() || this.#item.disabled)
            return;
        event.stopPropagation();
        list.handleToggleClick(this.#item.index(), event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: ListItemToggle, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.7", type: ListItemToggle, isStandalone: true, selector: "[ommListItemToggle]", host: { attributes: { "aria-hidden": "true" }, listeners: { "click": "onClick($event)", "dblclick": "$event.stopPropagation()" }, classAttribute: "omm-list-item-toggle" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: ListItemToggle, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ommListItemToggle]',
                    host: {
                        class: 'omm-list-item-toggle',
                        'aria-hidden': 'true',
                        '(click)': 'onClick($event)',
                        '(dblclick)': '$event.stopPropagation()',
                    },
                }]
        }] });

let nextId$1 = 0;
class Select {
    options = input.required(...(ngDevMode ? [{ debugName: "options" }] : /* istanbul ignore next */ []));
    required = input(false, ...(ngDevMode ? [{ debugName: "required" }] : /* istanbul ignore next */ []));
    disabled = input(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    placeholder = input('', ...(ngDevMode ? [{ debugName: "placeholder" }] : /* istanbul ignore next */ []));
    selectionChange = output();
    optionsContainerMaxHeight = 300;
    uid = nextId$1++;
    isOpen = signal(false, ...(ngDevMode ? [{ debugName: "isOpen" }] : /* istanbul ignore next */ []));
    selectedValue = signal(null, ...(ngDevMode ? [{ debugName: "selectedValue" }] : /* istanbul ignore next */ []));
    highlightedIndex = signal(-1, ...(ngDevMode ? [{ debugName: "highlightedIndex" }] : /* istanbul ignore next */ []));
    triggerButton = viewChild.required('triggerButton');
    dropdown = viewChild.required('dropdown');
    chevronIcon = ChevronDown;
    triggerButtonId = `app-select-trigger-${this.uid}`;
    dropdownId = `app-select-dropdown-${this.uid}`;
    listboxId = `app-select-listbox-${this.uid}`;
    displayValue = computed(() => {
        const selected = this.selectedValue();
        if (!selected)
            return this.placeholder() || '';
        return this.options().find((opt) => this.#compareValues(opt.value, selected))?.label || '';
    }, ...(ngDevMode ? [{ debugName: "displayValue" }] : /* istanbul ignore next */ []));
    onChange = () => { };
    onTouched = () => { };
    clickOutsideHandler;
    constructor() {
        effect(() => {
            if (this.isOpen()) {
                this.clickOutsideHandler = (event) => {
                    const dropdown = this.dropdown()?.nativeElement;
                    const trigger = this.triggerButton()?.nativeElement;
                    if (dropdown &&
                        trigger &&
                        !dropdown.contains(event.target) &&
                        !trigger.contains(event.target)) {
                        untracked(() => this.closeDropdown());
                    }
                };
                document.addEventListener('mousedown', this.clickOutsideHandler);
                return () => {
                    if (this.clickOutsideHandler) {
                        document.removeEventListener('mousedown', this.clickOutsideHandler);
                    }
                };
            }
            return () => { };
        });
    }
    // ControlValueAccessor
    writeValue(value) {
        this.selectedValue.set(value !== null && value !== undefined ? value : null);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(_) { }
    // Validator
    validate(_) {
        return this.required() && !this.selectedValue() ? { required: true } : null;
    }
    // Event handlers
    onTriggerClick() {
        if (this.disabled())
            return;
        this.onTouched();
        if (this.isOpen()) {
            this.closeDropdown();
        }
        else {
            this.#openDropdown();
        }
    }
    // When the dropdown is open, focus has moved to the option elements, so this
    // handler only needs to deal with the closed state.
    onTriggerKeydown(event) {
        if (this.disabled() || !['ArrowDown', 'Space', 'Enter'].includes(event.key))
            return;
        switch (event.key) {
            case 'Enter': {
                event.preventDefault();
                break;
            }
            case 'ArrowDown':
                event.preventDefault();
                if (!this.isOpen())
                    this.#openDropdown();
                break;
            case 'Escape':
                if (this.isOpen())
                    this.closeDropdown();
                break;
        }
    }
    onOptionClick(option, evt) {
        evt.preventDefault();
        if (this.disabled())
            return;
        this.#selectOption(option);
        this.closeDropdown();
        this.triggerButton()?.nativeElement.focus();
    }
    onOptionKeydown(event) {
        switch (event.key) {
            case 'Enter':
                event.preventDefault();
                this.onOptionClick(this.options()[this.highlightedIndex()], event);
                break;
            case 'ArrowDown':
                event.preventDefault();
                this.#moveHighlight(1);
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.#moveHighlight(-1);
                break;
            case 'Home':
                event.preventDefault();
                this.#moveHighlightToFirst();
                break;
            case 'End':
                event.preventDefault();
                this.#moveHighlightToLast();
                break;
            case 'Escape':
                event.preventDefault();
                this.closeDropdown();
                this.triggerButton()?.nativeElement.focus();
                break;
            case 'Tab':
                event.preventDefault();
                this.closeDropdown();
                this.triggerButton()?.nativeElement.focus();
                break;
        }
    }
    // Helpers
    #openDropdown() {
        const sv = this.selectedValue();
        const selectedIdx = sv
            ? this.options().findIndex((opt) => this.#compareValues(opt.value, sv))
            : -1;
        const initialIndex = selectedIdx >= 0 ? selectedIdx : this.options().findIndex((opt) => !opt.disabled);
        this.isOpen.set(true);
        this.highlightedIndex.set(initialIndex);
        requestAnimationFrame(() => {
            const dropdown = this.dropdown()?.nativeElement;
            const trigger = this.triggerButton()?.nativeElement;
            if (!dropdown || !trigger)
                return;
            const rect = trigger.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            // Gap between the trigger and the dropdown, and the minimum breathing
            // room we keep against the viewport edge.
            const gap = 4;
            const viewportMargin = 8;
            // The dropdown is a top-layer dialog, so it sits outside whatever padding
            // the app shell uses to stay clear of the system bars. On Android the
            // WebView runs edge-to-edge, which means `innerHeight` includes them —
            // measure against the safe area or a dropdown opening downwards near the
            // bottom ends up under the gesture bar.
            const rootStyle = getComputedStyle(document.documentElement);
            const safeTop = parseFloat(rootStyle.getPropertyValue('--omm-safe-area-top')) || 0;
            const safeBottom = parseFloat(rootStyle.getPropertyValue('--omm-safe-area-bottom')) || 0;
            const spaceBelow = viewportHeight - safeBottom - rect.bottom - gap - viewportMargin;
            const spaceAbove = rect.top - safeTop - gap - viewportMargin;
            // Prefer opening below; only flip up when below can't fit the desired
            // height and above genuinely has more room.
            const shouldOpenAbove = spaceBelow < this.optionsContainerMaxHeight && spaceAbove > spaceBelow;
            const available = Math.max(0, shouldOpenAbove ? spaceAbove : spaceBelow);
            const maxHeight = Math.min(this.optionsContainerMaxHeight, available);
            dropdown.style.position = 'fixed';
            dropdown.style.left = `${rect.left}px`;
            dropdown.style.width = `${rect.width}px`;
            dropdown.style.zIndex = '1000';
            dropdown.style.top = shouldOpenAbove ? 'auto' : `${rect.bottom + gap}px`;
            dropdown.style.bottom = shouldOpenAbove ? `${viewportHeight - rect.top + gap}px` : 'auto';
            dropdown.style.maxHeight = `${maxHeight}px`;
            dropdown.showModal();
            if (initialIndex >= 0) {
                document.getElementById(this.getOptionId(initialIndex))?.focus();
            }
            else {
                dropdown.focus();
            }
        });
    }
    closeDropdown() {
        this.isOpen.set(false);
        this.highlightedIndex.set(-1);
        const dropdown = this.dropdown()?.nativeElement;
        if (dropdown) {
            dropdown.close();
            dropdown.style.position = '';
            dropdown.style.top = '';
            dropdown.style.bottom = '';
            dropdown.style.left = '';
            dropdown.style.width = '';
            dropdown.style.maxHeight = '';
        }
    }
    #selectOption(option) {
        this.selectedValue.set(option.value);
        this.onChange(option.value);
        this.selectionChange.emit(option.value);
    }
    // Focuses the option at the given flat index and scrolls it into view.
    #focusOption(index) {
        this.highlightedIndex.set(index);
        requestAnimationFrame(() => {
            const el = document.getElementById(this.getOptionId(index));
            el?.focus();
            el?.scrollIntoView({ block: 'nearest' });
        });
    }
    #moveHighlight(direction) {
        const opts = this.options();
        let next = this.highlightedIndex() + direction;
        while (next >= 0 && next < opts.length && opts[next].disabled)
            next += direction;
        if (next >= 0 && next < opts.length)
            this.#focusOption(next);
    }
    #moveHighlightToFirst() {
        const idx = this.options().findIndex((o) => !o.disabled);
        if (idx >= 0)
            this.#focusOption(idx);
    }
    #moveHighlightToLast() {
        const opts = this.options();
        for (let i = opts.length - 1; i >= 0; i--) {
            if (!opts[i].disabled) {
                this.#focusOption(i);
                return;
            }
        }
    }
    #compareValues(a, b) {
        if (a === b)
            return true;
        if (a && b && typeof a === 'object' && typeof b === 'object') {
            return JSON.stringify(a) === JSON.stringify(b);
        }
        return false;
    }
    // Template helpers
    getOptionId(flatIndex) {
        return `${this.listboxId}-option-${flatIndex}`;
    }
    isOptionHighlighted(flatIndex) {
        return this.highlightedIndex() === flatIndex;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: Select, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.7", type: Select, isStandalone: true, selector: "omm-select", inputs: { options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: true, transformFunction: null }, required: { classPropertyName: "required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { selectionChange: "selectionChange" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => Select),
                multi: true,
            },
        ], viewQueries: [{ propertyName: "triggerButton", first: true, predicate: ["triggerButton"], descendants: true, isSignal: true }, { propertyName: "dropdown", first: true, predicate: ["dropdown"], descendants: true, isSignal: true }], ngImport: i0, template: "\r\n@let value = selectedValue();\r\n<button #triggerButton type=\"button\" [id]=\"triggerButtonId\" class=\"select-trigger\"\r\n  [class.select-trigger--open]=\"isOpen()\" [class.select-trigger--disabled]=\"disabled()\"\r\n  [class.select-trigger--has-value]=\"!!value\" [disabled]=\"disabled()\" [attr.aria-expanded]=\"isOpen()\"\r\n  [attr.aria-haspopup]=\"'listbox'\" [attr.aria-controls]=\"listboxId\" (click)=\"onTriggerClick()\"\r\n  (keydown)=\"onTriggerKeydown($event)\">\r\n\r\n  <span class=\"select-value\" [class.select-value--placeholder]=\"!value\">\r\n    {{ displayValue() }}\r\n  </span>\r\n\r\n\r\n\r\n  <lucide-icon [img]=\"chevronIcon\"></lucide-icon>\r\n\r\n</button>\r\n\r\n<dialog #dropdown [id]=\"dropdownId\" class=\"select-dropdown\" tabindex=\"-1\"\r\n  [attr.aria-labelledby]=\"triggerButtonId\" (keydown.escape)=\"closeDropdown()\" (close)=\"closeDropdown()\">\r\n\r\n  <div [id]=\"listboxId\" class=\"select-options\" role=\"listbox\" (keydown)=\"onOptionKeydown($event)\"\r\n    [attr.aria-activedescendant]=\"highlightedIndex() >= 0 ? getOptionId(highlightedIndex()) : null\">\r\n\r\n    @if(options().length === 0){\r\n    <div class=\"select-no-options\">\r\n      ...\r\n    </div>\r\n    }\r\n\r\n    @for(item of options(); track $index){\r\n    @let isSelected = item.value === selectedValue();\r\n    <div class=\"select-option\" [class.select-option--selected]=\"isSelected\"\r\n      [class.select-option--highlighted]=\"isOptionHighlighted($index)\" [class.select-option--disabled]=\"item.disabled\"\r\n      role=\"option\" [attr.aria-selected]=\"isSelected\" [attr.aria-disabled]=\"item.disabled\" tabindex=\"-1\"\r\n      (click)=\"onOptionClick(item, $event)\">\r\n      {{ item.label }}\r\n    </div>\r\n    }\r\n  </div>\r\n</dialog>\r\n", styles: [":host{position:relative;width:100%}:host .select-trigger{outline:0;background-color:transparent;border:0;width:100%;display:flex;justify-content:space-between;padding:0;line-height:var(--line-height)}:host dialog.select-dropdown{position:fixed;margin:0;padding:0;overflow:hidden;max-width:none;box-shadow:none;outline:0}:host dialog.select-dropdown::backdrop{-webkit-backdrop-filter:none;backdrop-filter:none;background-color:transparent}:host .select-dropdown-content{display:flex;flex-direction:column;max-height:inherit;overflow:hidden}:host .select-options{max-height:inherit;overflow-y:auto;overscroll-behavior:contain}:host .select-options .select-option{padding:var(--omm-spacing) var(--omm-spacing)}:host .select-options .select-option:focus-visible{outline:none}:host .select-options .select-option[aria-selected=true]{background-color:var(--omm-selected-background)}:host .select-options .select-option:hover,:host .select-options .select-option.select-option--highlighted{background-color:var(--omm-active-background)}\n"], dependencies: [{ kind: "ngmodule", type: LucideAngularModule }, { kind: "component", type: i1.LucideAngularComponent, selector: "lucide-angular, lucide-icon, i-lucide, span-lucide", inputs: ["class", "name", "img", "color", "absoluteStrokeWidth", "size", "strokeWidth"] }, { kind: "ngmodule", type: OverlayModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: Select, decorators: [{
            type: Component,
            args: [{ selector: 'omm-select', imports: [LucideAngularModule, OverlayModule], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => Select),
                            multi: true,
                        },
                    ], template: "\r\n@let value = selectedValue();\r\n<button #triggerButton type=\"button\" [id]=\"triggerButtonId\" class=\"select-trigger\"\r\n  [class.select-trigger--open]=\"isOpen()\" [class.select-trigger--disabled]=\"disabled()\"\r\n  [class.select-trigger--has-value]=\"!!value\" [disabled]=\"disabled()\" [attr.aria-expanded]=\"isOpen()\"\r\n  [attr.aria-haspopup]=\"'listbox'\" [attr.aria-controls]=\"listboxId\" (click)=\"onTriggerClick()\"\r\n  (keydown)=\"onTriggerKeydown($event)\">\r\n\r\n  <span class=\"select-value\" [class.select-value--placeholder]=\"!value\">\r\n    {{ displayValue() }}\r\n  </span>\r\n\r\n\r\n\r\n  <lucide-icon [img]=\"chevronIcon\"></lucide-icon>\r\n\r\n</button>\r\n\r\n<dialog #dropdown [id]=\"dropdownId\" class=\"select-dropdown\" tabindex=\"-1\"\r\n  [attr.aria-labelledby]=\"triggerButtonId\" (keydown.escape)=\"closeDropdown()\" (close)=\"closeDropdown()\">\r\n\r\n  <div [id]=\"listboxId\" class=\"select-options\" role=\"listbox\" (keydown)=\"onOptionKeydown($event)\"\r\n    [attr.aria-activedescendant]=\"highlightedIndex() >= 0 ? getOptionId(highlightedIndex()) : null\">\r\n\r\n    @if(options().length === 0){\r\n    <div class=\"select-no-options\">\r\n      ...\r\n    </div>\r\n    }\r\n\r\n    @for(item of options(); track $index){\r\n    @let isSelected = item.value === selectedValue();\r\n    <div class=\"select-option\" [class.select-option--selected]=\"isSelected\"\r\n      [class.select-option--highlighted]=\"isOptionHighlighted($index)\" [class.select-option--disabled]=\"item.disabled\"\r\n      role=\"option\" [attr.aria-selected]=\"isSelected\" [attr.aria-disabled]=\"item.disabled\" tabindex=\"-1\"\r\n      (click)=\"onOptionClick(item, $event)\">\r\n      {{ item.label }}\r\n    </div>\r\n    }\r\n  </div>\r\n</dialog>\r\n", styles: [":host{position:relative;width:100%}:host .select-trigger{outline:0;background-color:transparent;border:0;width:100%;display:flex;justify-content:space-between;padding:0;line-height:var(--line-height)}:host dialog.select-dropdown{position:fixed;margin:0;padding:0;overflow:hidden;max-width:none;box-shadow:none;outline:0}:host dialog.select-dropdown::backdrop{-webkit-backdrop-filter:none;backdrop-filter:none;background-color:transparent}:host .select-dropdown-content{display:flex;flex-direction:column;max-height:inherit;overflow:hidden}:host .select-options{max-height:inherit;overflow-y:auto;overscroll-behavior:contain}:host .select-options .select-option{padding:var(--omm-spacing) var(--omm-spacing)}:host .select-options .select-option:focus-visible{outline:none}:host .select-options .select-option[aria-selected=true]{background-color:var(--omm-selected-background)}:host .select-options .select-option:hover,:host .select-options .select-option.select-option--highlighted{background-color:var(--omm-active-background)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { options: [{ type: i0.Input, args: [{ isSignal: true, alias: "options", required: true }] }], required: [{ type: i0.Input, args: [{ isSignal: true, alias: "required", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], placeholder: [{ type: i0.Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], selectionChange: [{ type: i0.Output, args: ["selectionChange"] }], triggerButton: [{ type: i0.ViewChild, args: ['triggerButton', { isSignal: true }] }], dropdown: [{ type: i0.ViewChild, args: ['dropdown', { isSignal: true }] }] } });

/**
 * Displays a native HTML `<dialog>` confirmation prompt and resolves
 * a promise with the user's choice (`true` for confirm, `false` for reject).
 */
class ConfirmService {
    translate = inject(TranslateService);
    /**
     * Shows a modal confirmation dialog and returns a promise that resolves to the user's choice.
     * @param message - Body text displayed inside the dialog.
     * @param title - Optional heading shown above the message.
     * @param confirmLabel - Custom label for the confirm button (defaults to translated "Confirm").
     * @param rejectLabel - Custom label for the reject button (defaults to translated "Reject").
     * @returns `true` if the user confirmed, `false` otherwise.
     */
    confirm(message, title, confirmLabel, rejectLabel) {
        return this.confirmWithOption(message, { title, confirmLabel, rejectLabel }).then((r) => r.confirmed);
    }
    /**
     * Like `confirm`, but supports an optional checkbox rendered above the buttons.
     * Returns both the confirm result and the checkbox state.
     */
    confirmWithOption(message, opts = {}) {
        return new Promise((resolve) => {
            const cLabel = opts.confirmLabel || this.translate.instant('dox.app.confirm.button.confirm');
            const rLabel = opts.rejectLabel || this.translate.instant('dox.app.confirm.button.reject');
            const escape = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
            const dialog = document.createElement('dialog');
            const titleId = `confirm-title-${Math.random().toString(36).slice(2, 10)}`;
            const optionHtml = opts.optionLabel
                ? `<label class="confirm-option"><input type="checkbox" name="option"${opts.optionDefault ? ' checked' : ''}> ${escape(opts.optionLabel)}</label>`
                : '';
            if (opts.title)
                dialog.setAttribute('aria-labelledby', titleId);
            if (opts.danger)
                dialog.classList.add('danger');
            dialog.innerHTML = `
        <form method="dialog" class="confirm-dialog">
          ${opts.title ? `<header><h2 id="${titleId}">${escape(opts.title)}</h2></header>` : ''}
          <main>${escape(message)}${optionHtml}</main>
          <footer>
            <button class="tertiary" value="cancel">${escape(rLabel)}</button>
            <button value="confirm" class="primary">${escape(cLabel)}</button>
          </footer>
        </form>
      `;
            document.body.appendChild(dialog);
            dialog.showModal();
            dialog.addEventListener('close', () => {
                const checkbox = dialog.querySelector('input[name="option"]');
                resolve({
                    confirmed: dialog.returnValue === 'confirm',
                    optionChecked: !!checkbox?.checked,
                });
                dialog.remove();
            });
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: ConfirmService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: ConfirmService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: ConfirmService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class CollectionTree {
    #confirm = inject(ConfirmService);
    nodes = input.required(...(ngDevMode ? [{ debugName: "nodes" }] : /* istanbul ignore next */ []));
    editable = input(false, { ...(ngDevMode ? { debugName: "editable" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    selectedId = model(undefined, ...(ngDevMode ? [{ debugName: "selectedId" }] : /* istanbul ignore next */ []));
    labels = input({}, ...(ngDevMode ? [{ debugName: "labels" }] : /* istanbul ignore next */ []));
    addRequest = output();
    renameRequest = output();
    deleteRequest = output();
    addIcon = PlusIcon;
    deleteIcon = Trash2Icon;
    chevronDownIcon = ChevronDownIcon;
    chevronRightIcon = ChevronRightIcon;
    expanded = signal(new Set(), ...(ngDevMode ? [{ debugName: "expanded" }] : /* istanbul ignore next */ []));
    activeId = signal(undefined, ...(ngDevMode ? [{ debugName: "activeId" }] : /* istanbul ignore next */ []));
    menuOpenFor = signal(undefined, ...(ngDevMode ? [{ debugName: "menuOpenFor" }] : /* istanbul ignore next */ []));
    /**
     * When set (via {@link editNode}), the next render focuses and selects the
     * name input for that node id, then clears this signal. Used to start
     * inline editing right after the consumer creates a new node.
     */
    pendingEditId = signal(undefined, ...(ngDevMode ? [{ debugName: "pendingEditId" }] : /* istanbul ignore next */ []));
    rowEls = viewChildren('row', ...(ngDevMode ? [{ debugName: "rowEls" }] : /* istanbul ignore next */ []));
    #pendingEditEffect = effect(() => {
        const pending = this.pendingEditId();
        const rows = this.rowEls();
        if (!pending)
            return;
        const row = rows.find((r) => r.nativeElement.dataset['id'] === pending);
        if (!row)
            return;
        untracked(() => {
            const input = row.nativeElement.querySelector('input.name-input');
            if (input) {
                input.focus();
                input.select();
            }
            this.pendingEditId.set(undefined);
        });
    }, ...(ngDevMode ? [{ debugName: "#pendingEditEffect" }] : /* istanbul ignore next */ []));
    /**
     * Reveals the selected node when `selectedId` is set (e.g. a consumer opening
     * the tree with an existing value): expands its ancestor chain so the
     * highlighted row is visible, then scrolls it into view. A no-op when the
     * node is already visible, so it doesn't interfere with normal clicks.
     */
    #revealSelectedEffect = effect(() => {
        const id = this.selectedId();
        const all = this.nodes();
        if (!id)
            return;
        untracked(() => {
            const byId = new Map(all.map((n) => [n.id, n]));
            const next = new Set(this.expanded());
            let changed = false;
            let cursor = byId.get(id)?.parentId;
            while (cursor && !next.has(cursor)) {
                next.add(cursor);
                changed = true;
                cursor = byId.get(cursor)?.parentId;
            }
            if (changed)
                this.expanded.set(next);
            queueMicrotask(() => this.#findRowEl(id)?.scrollIntoView({ block: 'nearest' }));
        });
    }, ...(ngDevMode ? [{ debugName: "#revealSelectedEffect" }] : /* istanbul ignore next */ []));
    flat = computed(() => {
        const all = this.nodes();
        const byParent = new Map();
        for (const n of all) {
            const list = byParent.get(n.parentId) ?? [];
            list.push(n);
            byParent.set(n.parentId, list);
        }
        for (const list of byParent.values()) {
            list.sort((a, b) => a.name.localeCompare(b.name));
        }
        const exp = this.expanded();
        const out = [];
        const walk = (parentId, depth) => {
            const children = byParent.get(parentId) ?? [];
            for (const c of children) {
                const grand = byParent.get(c.id) ?? [];
                const isExpanded = exp.has(c.id);
                out.push({
                    node: c,
                    depth,
                    hasChildren: grand.length > 0,
                    expanded: isExpanded,
                });
                if (isExpanded)
                    walk(c.id, depth + 1);
            }
        };
        walk(undefined, 0);
        return out;
    }, ...(ngDevMode ? [{ debugName: "flat" }] : /* istanbul ignore next */ []));
    /** Imperative API: focus a row's name input so the user can rename it. */
    editNode(id) {
        // Expand all ancestors so the node is visible.
        const all = this.nodes();
        const byId = new Map(all.map((n) => [n.id, n]));
        const next = new Set(this.expanded());
        let cursor = byId.get(id)?.parentId;
        while (cursor) {
            next.add(cursor);
            cursor = byId.get(cursor)?.parentId;
        }
        this.expanded.set(next);
        this.activeId.set(id);
        this.pendingEditId.set(id);
    }
    toggleExpanded(id, event) {
        event?.stopPropagation();
        const next = new Set(this.expanded());
        if (next.has(id))
            next.delete(id);
        else
            next.add(id);
        this.expanded.set(next);
    }
    onRowClick(node) {
        this.activeId.set(node.id);
        if (!this.editable()) {
            this.selectedId.set(node.id);
        }
    }
    onNameClick(node, event) {
        event.stopPropagation();
        this.activeId.set(node.id);
        if (!this.editable()) {
            this.selectedId.set(node.id);
        }
    }
    onAddChild(parentId, event) {
        event.stopPropagation();
        // Auto-expand the parent so the new child is visible.
        const next = new Set(this.expanded());
        next.add(parentId);
        this.expanded.set(next);
        this.addRequest.emit({ parentId });
    }
    async onDeleteClick(node) {
        const l = this.labels();
        const message = (l.deleteMessage ?? 'Delete "{{name}}"?').replace('{{name}}', node.name);
        const ok = await this.#confirm.confirm(message, l.deleteTitle, l.delete);
        if (!ok)
            return;
        this.deleteRequest.emit({ id: node.id });
    }
    onNameInputCommit(node, event) {
        const input = event.target;
        const value = input.value.trim();
        if (!value || value === node.name) {
            input.value = node.name;
            return;
        }
        this.renameRequest.emit({ id: node.id, name: value });
    }
    onNameInputKeydown(node, event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.target.blur();
        }
        else if (event.key === 'Escape') {
            event.preventDefault();
            event.target.value = node.name;
            event.target.blur();
        }
    }
    onNameInputFocus(id) {
        this.activeId.set(id);
        if (this.pendingEditId() === id) {
            this.pendingEditId.set(undefined);
        }
    }
    onHostKeydown(event) {
        const flat = this.flat();
        if (!flat.length)
            return;
        const currentId = this.activeId() ?? flat[0].node.id;
        const idx = flat.findIndex((f) => f.node.id === currentId);
        if (idx < 0)
            return;
        const current = flat[idx];
        const target = event.target;
        const inInput = target.tagName === 'INPUT';
        switch (event.key) {
            case 'ArrowDown': {
                event.preventDefault();
                const next = flat[Math.min(idx + 1, flat.length - 1)];
                this.#focusRow(next.node.id, inInput);
                break;
            }
            case 'ArrowUp': {
                event.preventDefault();
                const next = flat[Math.max(idx - 1, 0)];
                this.#focusRow(next.node.id, inInput);
                break;
            }
            case 'Home': {
                event.preventDefault();
                this.#focusRow(flat[0].node.id, inInput);
                break;
            }
            case 'End': {
                event.preventDefault();
                this.#focusRow(flat[flat.length - 1].node.id, inInput);
                break;
            }
            case 'ArrowRight': {
                if (inInput)
                    return; // let cursor move
                if (current.hasChildren && !current.expanded) {
                    event.preventDefault();
                    this.toggleExpanded(current.node.id);
                }
                else if (current.hasChildren && current.expanded) {
                    event.preventDefault();
                    const child = flat[idx + 1];
                    if (child)
                        this.#focusRow(child.node.id, false);
                }
                break;
            }
            case 'ArrowLeft': {
                if (inInput)
                    return;
                if (current.expanded) {
                    event.preventDefault();
                    this.toggleExpanded(current.node.id);
                }
                else if (current.node.parentId) {
                    event.preventDefault();
                    this.#focusRow(current.node.parentId, false);
                }
                break;
            }
            case 'Enter': {
                if (inInput)
                    return; // handled by input keydown
                event.preventDefault();
                if (this.editable()) {
                    this.#focusInputFor(current.node.id);
                }
                else {
                    this.selectedId.set(current.node.id);
                }
                break;
            }
            case ' ': {
                if (inInput)
                    return;
                if (!this.editable()) {
                    event.preventDefault();
                    this.selectedId.set(current.node.id);
                }
                break;
            }
            case 'F2': {
                if (this.editable()) {
                    event.preventDefault();
                    this.#focusInputFor(current.node.id);
                }
                break;
            }
            case 'Delete': {
                if (inInput)
                    return;
                if (this.editable()) {
                    event.preventDefault();
                    void this.onDeleteClick(current.node);
                }
                break;
            }
        }
    }
    #focusRow(id, intoInput) {
        this.activeId.set(id);
        queueMicrotask(() => {
            const row = this.#findRowEl(id);
            if (!row)
                return;
            if (intoInput && this.editable()) {
                const input = row.querySelector('input.name-input');
                input?.focus();
                input?.select();
            }
            else {
                row.focus();
            }
        });
    }
    #focusInputFor(id) {
        const row = this.#findRowEl(id);
        const input = row?.querySelector('input.name-input');
        input?.focus();
        input?.select();
    }
    #findRowEl(id) {
        for (const ref of this.rowEls()) {
            if (ref.nativeElement.dataset['id'] === id)
                return ref.nativeElement;
        }
        return undefined;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: CollectionTree, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.7", type: CollectionTree, isStandalone: true, selector: "omm-collection-tree", inputs: { nodes: { classPropertyName: "nodes", publicName: "nodes", isSignal: true, isRequired: true, transformFunction: null }, editable: { classPropertyName: "editable", publicName: "editable", isSignal: true, isRequired: false, transformFunction: null }, selectedId: { classPropertyName: "selectedId", publicName: "selectedId", isSignal: true, isRequired: false, transformFunction: null }, labels: { classPropertyName: "labels", publicName: "labels", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { selectedId: "selectedIdChange", addRequest: "addRequest", renameRequest: "renameRequest", deleteRequest: "deleteRequest" }, host: { attributes: { "role": "tree" }, listeners: { "keydown": "onHostKeydown($event)" } }, viewQueries: [{ propertyName: "rowEls", predicate: ["row"], descendants: true, isSignal: true }], ngImport: i0, template: "@let activeId_ = activeId() ?? flat()[0]?.node?.id;\n@let selectedId_ = selectedId();\n@let isEditable = editable();\n@let lbls = labels();\n\n<ul class=\"tree\">\n    @for (item of flat(); track item.node.id) {\n    <li #row class=\"row\" role=\"treeitem\" [attr.data-id]=\"item.node.id\" [attr.aria-level]=\"item.depth + 1\"\n        [attr.aria-expanded]=\"item.hasChildren ? item.expanded : null\"\n        [attr.aria-selected]=\"!isEditable ? selectedId_ === item.node.id : null\"\n        [attr.tabindex]=\"item.node.id === activeId_ ? 0 : -1\" [style.--depth]=\"item.depth\"\n        (click)=\"onRowClick(item.node)\">\n\n        <span class=\"indent\"></span>\n\n        @if (item.hasChildren) {\n            <span class=\"twisty\">\n                <button type=\"button\" class=\"icon\" tabindex=\"-1\" (click)=\"toggleExpanded(item.node.id, $event)\"\n                [attr.aria-label]=\"item.expanded ? 'Collapse' : 'Expand'\">\n                <lucide-icon [img]=\"item.expanded ? chevronDownIcon : chevronRightIcon\"></lucide-icon>\n            </button>\n        </span>\n        } @else {\n        <span class=\"twisty placeholder\"></span>\n        }\n\n        @if (isEditable) {\n        <input type=\"text\" class=\"name-input\" [value]=\"item.node.name\" (click)=\"onNameClick(item.node, $event)\"\n            (focus)=\"onNameInputFocus(item.node.id)\" (blur)=\"onNameInputCommit(item.node, $event)\"\n            (keydown)=\"onNameInputKeydown(item.node, $event)\" />\n        } @else {\n        <button type=\"button\" class=\"name-button\" (click)=\"onNameClick(item.node, $event)\">\n            {{ item.node.name }}\n        </button>\n        }\n\n        @if (isEditable) {\n        <span class=\"actions\">\n            <button type=\"button\" class=\"icon\" tabindex=\"-1\" (click)=\"onAddChild(item.node.id, $event)\"\n                [attr.aria-label]=\"lbls.addChild ?? 'Add child'\">\n                <lucide-icon [img]=\"addIcon\"></lucide-icon>\n            </button>\n            <button type=\"button\" class=\"icon\" tabindex=\"-1\" (click)=\"onDeleteClick(item.node)\"\n                [attr.aria-label]=\"lbls.delete ?? 'Delete'\">\n                <lucide-icon [img]=\"deleteIcon\"></lucide-icon>\n            </button>\n        </span>\n        }\n    </li>\n    }\n</ul>", styles: [":host{display:block}.tree{list-style:none;margin:0;padding:var(--omm-spacing-s)}.row{display:flex;align-items:center;gap:var(--omm-spacing-xs);padding:var(--omm-spacing-xs) 0;border-radius:var(--omm-corner-xs);outline:0;cursor:default}.row:focus-visible{background-color:var(--omm-active-background)}.row:hover{background-color:var(--omm-active-background)}.row[aria-selected=true]{background-color:var(--omm-selected-background);color:var(--omm-accent)}.indent{flex:0 0 auto;width:calc(var(--depth, 0) * 1rem)}.twisty{flex:0 0 auto;width:1.25rem;height:1.25rem;display:inline-flex;align-items:center;justify-content:center}.name-input{flex:1 1 auto;min-width:0;border:1px solid transparent;background:transparent;padding:.1rem .35rem;align-self:stretch;border-radius:var(--omm-input-corner);font:inherit;color:inherit}.name-input:hover:not(:focus){border-color:var(--omm-input-outline)}.name-input:focus,.name-input:focus-visible{border-color:var(--omm-text);background-color:var(--omm-input)}.name-button{flex:1 1 auto;text-align:left;background:transparent;border:0;padding:var(--omm-spacing-xs) var(--omm-spacing-s);color:inherit;font:inherit;cursor:pointer;border-radius:var(--omm-input-corner);min-width:0;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.row[aria-selected=true] .name-button{color:var(--omm-accent)}.actions{flex:0 0 auto;display:inline-flex;gap:.1rem;margin-left:auto;opacity:.3;transition:opacity .12s ease-in-out}.actions button.icon{color:var(--omm-text-muted)}.row:hover .actions,.row:focus-within .actions,.row.menu-open .actions{opacity:1}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "ngmodule", type: LucideAngularModule }, { kind: "component", type: i1.LucideAngularComponent, selector: "lucide-angular, lucide-icon, i-lucide, span-lucide", inputs: ["class", "name", "img", "color", "absoluteStrokeWidth", "size", "strokeWidth"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: CollectionTree, decorators: [{
            type: Component,
            args: [{ selector: 'omm-collection-tree', imports: [FormsModule, LucideAngularModule], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        role: 'tree',
                        '(keydown)': 'onHostKeydown($event)',
                    }, template: "@let activeId_ = activeId() ?? flat()[0]?.node?.id;\n@let selectedId_ = selectedId();\n@let isEditable = editable();\n@let lbls = labels();\n\n<ul class=\"tree\">\n    @for (item of flat(); track item.node.id) {\n    <li #row class=\"row\" role=\"treeitem\" [attr.data-id]=\"item.node.id\" [attr.aria-level]=\"item.depth + 1\"\n        [attr.aria-expanded]=\"item.hasChildren ? item.expanded : null\"\n        [attr.aria-selected]=\"!isEditable ? selectedId_ === item.node.id : null\"\n        [attr.tabindex]=\"item.node.id === activeId_ ? 0 : -1\" [style.--depth]=\"item.depth\"\n        (click)=\"onRowClick(item.node)\">\n\n        <span class=\"indent\"></span>\n\n        @if (item.hasChildren) {\n            <span class=\"twisty\">\n                <button type=\"button\" class=\"icon\" tabindex=\"-1\" (click)=\"toggleExpanded(item.node.id, $event)\"\n                [attr.aria-label]=\"item.expanded ? 'Collapse' : 'Expand'\">\n                <lucide-icon [img]=\"item.expanded ? chevronDownIcon : chevronRightIcon\"></lucide-icon>\n            </button>\n        </span>\n        } @else {\n        <span class=\"twisty placeholder\"></span>\n        }\n\n        @if (isEditable) {\n        <input type=\"text\" class=\"name-input\" [value]=\"item.node.name\" (click)=\"onNameClick(item.node, $event)\"\n            (focus)=\"onNameInputFocus(item.node.id)\" (blur)=\"onNameInputCommit(item.node, $event)\"\n            (keydown)=\"onNameInputKeydown(item.node, $event)\" />\n        } @else {\n        <button type=\"button\" class=\"name-button\" (click)=\"onNameClick(item.node, $event)\">\n            {{ item.node.name }}\n        </button>\n        }\n\n        @if (isEditable) {\n        <span class=\"actions\">\n            <button type=\"button\" class=\"icon\" tabindex=\"-1\" (click)=\"onAddChild(item.node.id, $event)\"\n                [attr.aria-label]=\"lbls.addChild ?? 'Add child'\">\n                <lucide-icon [img]=\"addIcon\"></lucide-icon>\n            </button>\n            <button type=\"button\" class=\"icon\" tabindex=\"-1\" (click)=\"onDeleteClick(item.node)\"\n                [attr.aria-label]=\"lbls.delete ?? 'Delete'\">\n                <lucide-icon [img]=\"deleteIcon\"></lucide-icon>\n            </button>\n        </span>\n        }\n    </li>\n    }\n</ul>", styles: [":host{display:block}.tree{list-style:none;margin:0;padding:var(--omm-spacing-s)}.row{display:flex;align-items:center;gap:var(--omm-spacing-xs);padding:var(--omm-spacing-xs) 0;border-radius:var(--omm-corner-xs);outline:0;cursor:default}.row:focus-visible{background-color:var(--omm-active-background)}.row:hover{background-color:var(--omm-active-background)}.row[aria-selected=true]{background-color:var(--omm-selected-background);color:var(--omm-accent)}.indent{flex:0 0 auto;width:calc(var(--depth, 0) * 1rem)}.twisty{flex:0 0 auto;width:1.25rem;height:1.25rem;display:inline-flex;align-items:center;justify-content:center}.name-input{flex:1 1 auto;min-width:0;border:1px solid transparent;background:transparent;padding:.1rem .35rem;align-self:stretch;border-radius:var(--omm-input-corner);font:inherit;color:inherit}.name-input:hover:not(:focus){border-color:var(--omm-input-outline)}.name-input:focus,.name-input:focus-visible{border-color:var(--omm-text);background-color:var(--omm-input)}.name-button{flex:1 1 auto;text-align:left;background:transparent;border:0;padding:var(--omm-spacing-xs) var(--omm-spacing-s);color:inherit;font:inherit;cursor:pointer;border-radius:var(--omm-input-corner);min-width:0;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.row[aria-selected=true] .name-button{color:var(--omm-accent)}.actions{flex:0 0 auto;display:inline-flex;gap:.1rem;margin-left:auto;opacity:.3;transition:opacity .12s ease-in-out}.actions button.icon{color:var(--omm-text-muted)}.row:hover .actions,.row:focus-within .actions,.row.menu-open .actions{opacity:1}\n"] }]
        }], propDecorators: { nodes: [{ type: i0.Input, args: [{ isSignal: true, alias: "nodes", required: true }] }], editable: [{ type: i0.Input, args: [{ isSignal: true, alias: "editable", required: false }] }], selectedId: [{ type: i0.Input, args: [{ isSignal: true, alias: "selectedId", required: false }] }, { type: i0.Output, args: ["selectedIdChange"] }], labels: [{ type: i0.Input, args: [{ isSignal: true, alias: "labels", required: false }] }], addRequest: [{ type: i0.Output, args: ["addRequest"] }], renameRequest: [{ type: i0.Output, args: ["renameRequest"] }], deleteRequest: [{ type: i0.Output, args: ["deleteRequest"] }], rowEls: [{ type: i0.ViewChildren, args: ['row', { isSignal: true }] }] } });

class TagsInput {
    disabled = signal(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    allTags = input.required(...(ngDevMode ? [{ debugName: "allTags" }] : /* istanbul ignore next */ []));
    tagRemoveIcon = XIcon;
    options = viewChildren(Option, ...(ngDevMode ? [{ debugName: "options" }] : /* istanbul ignore next */ []));
    query = signal('', ...(ngDevMode ? [{ debugName: "query" }] : /* istanbul ignore next */ []));
    tags = signal([], ...(ngDevMode ? [{ debugName: "tags" }] : /* istanbul ignore next */ []));
    tagSuggestions = computed(() => this.allTags().filter((t) => !this.tags().includes(t) && t.toLowerCase().indexOf(this.query().toLowerCase()) !== -1), ...(ngDevMode ? [{ debugName: "tagSuggestions" }] : /* istanbul ignore next */ []));
    // -------- CVA --------
    #onChange = () => { };
    #onTouched = () => { };
    writeValue(value) {
        this.tags.set(value || []);
    }
    registerOnChange(fn) {
        this.#onChange = fn;
    }
    registerOnTouched(fn) {
        this.#onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled.set(isDisabled);
    }
    onBlur() {
        if (this.query()) {
            this.addTag(this.query());
        }
        this.#onTouched();
    }
    onEnter(evt) {
        evt.preventDefault();
        // stopPropagation keeps the keydown from bubbling to ngCombobox's host handler,
        // which would otherwise run select({commit: true}) and write the picked tag's
        // label back into the input, overwriting our just-cleared query.
        evt.stopPropagation();
        const activeOption = this.options().find(o => o.active());
        if (activeOption) {
            this.addTag(activeOption.value());
        }
        else if (this.query()) {
            this.addTag(this.query());
        }
    }
    addTag(tag) {
        if (tag && !this.tags().includes(tag)) {
            this.tags.set([...this.tags(), tag]);
            this.#emitChange();
        }
        this.query.set('');
    }
    removeTag(index) {
        this.tags.set(this.tags().filter((_, i) => i !== index));
        this.#emitChange();
    }
    onBackspace() {
        if (this.query().length === 0 && this.tags().length > 0) {
            this.tags.set([...this.tags().slice(0, -1)]);
            this.#emitChange();
        }
    }
    #emitChange() {
        this.#onChange([...this.tags()]);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: TagsInput, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.7", type: TagsInput, isStandalone: true, selector: "omm-tags-input", inputs: { allTags: { classPropertyName: "allTags", publicName: "allTags", isSignal: true, isRequired: true, transformFunction: null } }, host: { classAttribute: "omm-input" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => TagsInput),
                multi: true,
            },
        ], viewQueries: [{ propertyName: "options", predicate: Option, descendants: true, isSignal: true }], ngImport: i0, template: "<!-- autocomplete input for picking or adding new tags -->\n<div ngCombobox focusMode=\"manual\">\n  <div class=\"autocomplete\">\n    <!-- input is first in DOM so a wrapping <label> binds to it, not to the first tag's remove button -->\n    <input #origin (blur)=\"onBlur()\" (keydown.backspace)=\"onBackspace()\"\n      [placeholder]=\"'omm.ui.tags-input.input.placeholder'|translate\" (keydown.enter)=\"onEnter($event)\"\n      [(value)]=\"query\" [disabled]=\"disabled()\" aria-label=\"Add tags\" enterkeyhint=\"done\" ngComboboxInput />\n    @for (tag of tags(); track $index) {\n    <span class=\"tag\">\n      {{tag}}\n      <button type=\"button\" tabindex=\"-1\" class=\"icon remove compact\" (click)=\"removeTag($index)\"\n        [attr.aria-label]=\"'omm.ui.tags-input.tag.chip.aria-label.remove' | translate: ({tag})\">\n        <lucide-icon aria-hidden=\"true\" data-size=\"sm\" [img]=\"tagRemoveIcon\"></lucide-icon>\n      </button>\n    </span>\n    }\n  </div>\n  <ng-template ngComboboxPopupContainer>\n    <ng-template [cdkConnectedOverlay]=\"{origin, usePopover: 'inline', matchWidth: true}\"\n      [cdkConnectedOverlayOpen]=\"true\">\n      @if (tagSuggestions().length > 0) {\n      <div class=\"popup\">\n        <div ngListbox>\n          @for (tag of tagSuggestions(); track $index) {\n          <!-- stopPropagation prevents ngCombobox's host click handler from running commit(),\n               which would otherwise overwrite our just-cleared query via the [(value)] model -->\n          <div ngOption [value]=\"tag\" [label]=\"tag\" (pointerdown)=\"$event.preventDefault()\"\n            (click)=\"addTag(tag); $event.stopPropagation()\">\n            <span class=\"option-label\">{{ tag }}</span>\n          </div>\n          }\n        </div>\n      </div>\n      }\n    </ng-template>\n  </ng-template>\n</div>", styles: [":host .autocomplete{display:flex;flex-flow:row wrap;align-items:center;gap:2px}:host .autocomplete input{border:0;background-color:transparent;flex:1;order:1}:host .autocomplete input,:host .autocomplete .tag{padding:var(--omm-spacing-xs);line-height:1em}:host .autocomplete .tag{--tag-border-color: var(--omm-outline);display:inline-flex;align-items:center;gap:2px;border:1px solid var(--tag-border-color);border-radius:.25em}:host .autocomplete .tag:focus-within{--tag-border-color: var(--omm-accent)}:host .autocomplete .tag .remove{outline-offset:-2px;cursor:pointer;line-height:1;color:var(--tag-border-color)}:host .autocomplete .tag .remove:not(:hover){background-color:transparent}@media(hover:hover){:host .autocomplete .tag .remove{opacity:0;pointer-events:none}:host .autocomplete .tag:hover .remove,:host .autocomplete .tag:focus-within .remove{opacity:1;pointer-events:auto}}:host [ngCombobox]:has([aria-expanded=false]) .popup{display:none}:host .popup{background-color:var(--omm-pane-surface);border:1px solid var(--omm-pane-surface-outline);border-radius:var(--omm-corner-s);overflow:hidden}:host [ngOption]{padding:var(--omm-spacing-xs) var(--omm-spacing-s);cursor:pointer}:host [ngOption][aria-selected=true]{background-color:var(--omm-selected-background)}:host [ngOption][data-active=true]{background-color:var(--omm-active-background)}\n"], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "directive", type: Combobox, selector: "[ngCombobox]", inputs: ["filterMode", "disabled", "readonly", "firstMatch", "alwaysExpanded"], exportAs: ["ngCombobox"] }, { kind: "directive", type: ComboboxInput, selector: "input[ngComboboxInput]", inputs: ["value"], outputs: ["valueChange"], exportAs: ["ngComboboxInput"] }, { kind: "directive", type: ComboboxPopupContainer, selector: "ng-template[ngComboboxPopupContainer]", exportAs: ["ngComboboxPopupContainer"] }, { kind: "ngmodule", type: LucideAngularModule }, { kind: "component", type: i1.LucideAngularComponent, selector: "lucide-angular, lucide-icon, i-lucide, span-lucide", inputs: ["class", "name", "img", "color", "absoluteStrokeWidth", "size", "strokeWidth"] }, { kind: "directive", type: Listbox, selector: "[ngListbox]", inputs: ["id", "orientation", "multi", "wrap", "softDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "readonly", "values"], outputs: ["valuesChange"], exportAs: ["ngListbox"] }, { kind: "directive", type: Option, selector: "[ngOption]", inputs: ["id", "value", "disabled", "label"], exportAs: ["ngOption"] }, { kind: "ngmodule", type: OverlayModule }, { kind: "directive", type: i2$1.CdkConnectedOverlay, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush", "cdkConnectedOverlayDisposeOnNavigation", "cdkConnectedOverlayUsePopover", "cdkConnectedOverlayMatchWidth", "cdkConnectedOverlay"], outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"], exportAs: ["cdkConnectedOverlay"] }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: TagsInput, decorators: [{
            type: Component,
            args: [{ selector: 'omm-tags-input', imports: [
                        TranslateModule,
                        Combobox,
                        ComboboxInput,
                        ComboboxPopupContainer,
                        LucideAngularModule,
                        Listbox,
                        Option,
                        OverlayModule,
                    ], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => TagsInput),
                            multi: true,
                        },
                    ], host: {
                        class: 'omm-input',
                    }, template: "<!-- autocomplete input for picking or adding new tags -->\n<div ngCombobox focusMode=\"manual\">\n  <div class=\"autocomplete\">\n    <!-- input is first in DOM so a wrapping <label> binds to it, not to the first tag's remove button -->\n    <input #origin (blur)=\"onBlur()\" (keydown.backspace)=\"onBackspace()\"\n      [placeholder]=\"'omm.ui.tags-input.input.placeholder'|translate\" (keydown.enter)=\"onEnter($event)\"\n      [(value)]=\"query\" [disabled]=\"disabled()\" aria-label=\"Add tags\" enterkeyhint=\"done\" ngComboboxInput />\n    @for (tag of tags(); track $index) {\n    <span class=\"tag\">\n      {{tag}}\n      <button type=\"button\" tabindex=\"-1\" class=\"icon remove compact\" (click)=\"removeTag($index)\"\n        [attr.aria-label]=\"'omm.ui.tags-input.tag.chip.aria-label.remove' | translate: ({tag})\">\n        <lucide-icon aria-hidden=\"true\" data-size=\"sm\" [img]=\"tagRemoveIcon\"></lucide-icon>\n      </button>\n    </span>\n    }\n  </div>\n  <ng-template ngComboboxPopupContainer>\n    <ng-template [cdkConnectedOverlay]=\"{origin, usePopover: 'inline', matchWidth: true}\"\n      [cdkConnectedOverlayOpen]=\"true\">\n      @if (tagSuggestions().length > 0) {\n      <div class=\"popup\">\n        <div ngListbox>\n          @for (tag of tagSuggestions(); track $index) {\n          <!-- stopPropagation prevents ngCombobox's host click handler from running commit(),\n               which would otherwise overwrite our just-cleared query via the [(value)] model -->\n          <div ngOption [value]=\"tag\" [label]=\"tag\" (pointerdown)=\"$event.preventDefault()\"\n            (click)=\"addTag(tag); $event.stopPropagation()\">\n            <span class=\"option-label\">{{ tag }}</span>\n          </div>\n          }\n        </div>\n      </div>\n      }\n    </ng-template>\n  </ng-template>\n</div>", styles: [":host .autocomplete{display:flex;flex-flow:row wrap;align-items:center;gap:2px}:host .autocomplete input{border:0;background-color:transparent;flex:1;order:1}:host .autocomplete input,:host .autocomplete .tag{padding:var(--omm-spacing-xs);line-height:1em}:host .autocomplete .tag{--tag-border-color: var(--omm-outline);display:inline-flex;align-items:center;gap:2px;border:1px solid var(--tag-border-color);border-radius:.25em}:host .autocomplete .tag:focus-within{--tag-border-color: var(--omm-accent)}:host .autocomplete .tag .remove{outline-offset:-2px;cursor:pointer;line-height:1;color:var(--tag-border-color)}:host .autocomplete .tag .remove:not(:hover){background-color:transparent}@media(hover:hover){:host .autocomplete .tag .remove{opacity:0;pointer-events:none}:host .autocomplete .tag:hover .remove,:host .autocomplete .tag:focus-within .remove{opacity:1;pointer-events:auto}}:host [ngCombobox]:has([aria-expanded=false]) .popup{display:none}:host .popup{background-color:var(--omm-pane-surface);border:1px solid var(--omm-pane-surface-outline);border-radius:var(--omm-corner-s);overflow:hidden}:host [ngOption]{padding:var(--omm-spacing-xs) var(--omm-spacing-s);cursor:pointer}:host [ngOption][aria-selected=true]{background-color:var(--omm-selected-background)}:host [ngOption][data-active=true]{background-color:var(--omm-active-background)}\n"] }]
        }], propDecorators: { allTags: [{ type: i0.Input, args: [{ isSignal: true, alias: "allTags", required: true }] }], options: [{ type: i0.ViewChildren, args: [i0.forwardRef(() => Option), { isSignal: true }] }] } });

const THEME_MODES = ['light', 'dark', 'system'];
const STORAGE_KEY = 'omm.theme';
const DEFAULT_MODE = 'system';
const SURFACE_DARK = '#121212';
const SURFACE_LIGHT = '#ffffff';
class ThemeService {
    mode = signal(DEFAULT_MODE, ...(ngDevMode ? [{ debugName: "mode" }] : /* istanbul ignore next */ []));
    resolved = signal('dark', ...(ngDevMode ? [{ debugName: "resolved" }] : /* istanbul ignore next */ []));
    #mediaQuery = null;
    #systemListener = null;
    #initialized = false;
    init() {
        if (this.#initialized)
            return;
        this.#initialized = true;
        const stored = this.#readStored();
        const mode = stored ?? DEFAULT_MODE;
        this.mode.set(mode);
        if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
            this.#mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
            this.#systemListener = () => {
                if (this.mode() === 'system')
                    this.#apply();
            };
            this.#mediaQuery.addEventListener('change', this.#systemListener);
        }
        this.#apply();
    }
    setMode(mode) {
        this.mode.set(mode);
        try {
            localStorage.setItem(STORAGE_KEY, mode);
        }
        catch {
            // localStorage may be unavailable (private mode, quota) — theme still switches for this session
        }
        this.#apply();
    }
    #apply() {
        const mode = this.mode();
        const resolved = this.#resolve(mode);
        this.resolved.set(resolved);
        if (typeof document === 'undefined')
            return;
        const root = document.documentElement;
        if (mode === 'system') {
            root.removeAttribute('data-theme');
        }
        else {
            root.setAttribute('data-theme', mode);
        }
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) {
            meta.setAttribute('content', resolved === 'light' ? SURFACE_LIGHT : SURFACE_DARK);
        }
    }
    #resolve(mode) {
        if (mode === 'light' || mode === 'dark')
            return mode;
        return this.#mediaQuery?.matches ? 'light' : 'dark';
    }
    #readStored() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return this.#isSupported(raw) ? raw : null;
        }
        catch {
            return null;
        }
    }
    #isSupported(value) {
        return typeof value === 'string' && THEME_MODES.includes(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: ThemeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: ThemeService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: ThemeService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

class ThemeToggle {
    labels = input({ light: 'Light', dark: 'Dark', system: 'System' }, ...(ngDevMode ? [{ debugName: "labels" }] : /* istanbul ignore next */ []));
    #theme = inject(ThemeService);
    mode = this.#theme.mode;
    options = computed(() => {
        const l = this.labels();
        return [
            { value: 'light', label: l.light, icon: SunIcon },
            { value: 'dark', label: l.dark, icon: MoonIcon },
            { value: 'system', label: l.system, icon: MonitorIcon },
        ];
    }, ...(ngDevMode ? [{ debugName: "options" }] : /* istanbul ignore next */ []));
    setMode(mode) {
        this.#theme.setMode(mode);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: ThemeToggle, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.2.7", type: ThemeToggle, isStandalone: true, selector: "omm-theme-toggle", inputs: { labels: { classPropertyName: "labels", publicName: "labels", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<omm-button-toggle [options]=\"options()\" [value]=\"mode()\" (valueChange)=\"setMode($event)\" />\r\n", styles: [""], dependencies: [{ kind: "component", type: ButtonToggle, selector: "omm-button-toggle", inputs: ["options", "value", "ariaLabel", "iconSize"], outputs: ["valueChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: ThemeToggle, decorators: [{
            type: Component,
            args: [{ selector: 'omm-theme-toggle', imports: [ButtonToggle], template: "<omm-button-toggle [options]=\"options()\" [value]=\"mode()\" (valueChange)=\"setMode($event)\" />\r\n" }]
        }], propDecorators: { labels: [{ type: i0.Input, args: [{ isSignal: true, alias: "labels", required: false }] }] } });

/**
 * Creates transient toast notifications by injecting DOM elements.
 * Supports info, warning, and error types with configurable duration or sticky dismissal.
 */
class ToastService {
    /**
     * Displays a toast notification.
     * @param message - The text to show.
     * @param type - Visual style: `'info'`, `'warning'`, or `'error'`.
     * @param options - Duration, sticky mode, and host element overrides.
     */
    toast(message, type = 'info', options = {}) {
        const { duration = 3000, sticky = false, hostElement = document.body } = options;
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        // Build via DOM APIs so the message is always treated as plain text (no HTML injection).
        const text = document.createElement('p');
        text.textContent = message;
        toast.appendChild(text);
        if (sticky) {
            const closeBtn = document.createElement('button');
            closeBtn.className = 'toast-close icon';
            closeBtn.textContent = '×';
            toast.appendChild(closeBtn);
        }
        hostElement.appendChild(toast);
        // allow CSS transition to kick in
        requestAnimationFrame(() => {
            toast.classList.add('show');
        });
        const close = () => {
            toast.classList.remove('show');
            toast.addEventListener('transitionend', () => toast.remove(), { once: true });
        };
        if (sticky) {
            const btn = toast.querySelector('.toast-close');
            btn.addEventListener('click', close, { once: true });
            // keyboard support
            btn.addEventListener('keydown', (e) => e.key === 'Enter' && close());
        }
        else {
            setTimeout(close, duration);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: ToastService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: ToastService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: ToastService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class CurrencyInputDirective {
    #angularLocale = inject(LOCALE_ID);
    #control = inject(NgControl, { self: true });
    locale = this.#angularLocale !== 'de-DE'
        ? this.#angularLocale
        : typeof navigator !== 'undefined'
            ? navigator.language
            : 'de-DE';
    currency = input('EUR', ...(ngDevMode ? [{ debugName: "currency" }] : /* istanbul ignore next */ []));
    currencySymbol = computed(() => {
        const parts = new Intl.NumberFormat(this.locale, {
            style: 'currency',
            currency: this.currency(),
        }).formatToParts(0);
        return parts.find((p) => p.type === 'currency')?.value ?? this.currency();
    }, ...(ngDevMode ? [{ debugName: "currencySymbol" }] : /* istanbul ignore next */ []));
    value = signal(null, ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    displayValue = signal('', ...(ngDevMode ? [{ debugName: "displayValue" }] : /* istanbul ignore next */ []));
    disabled = signal(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    focused = signal(false, ...(ngDevMode ? [{ debugName: "focused" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        const control = this.#control.control;
        if (!control)
            return;
        // Listen for model changes (Model -> View)
        control.valueChanges.subscribe((value) => {
            if (!this.focused()) {
                this.displayValue.set(value !== null ? this.formatNumber(value) : '');
            }
        });
    }
    onFocus() {
        this.focused.set(true);
        const val = this.value();
        if (val !== null) {
            const decimalPlaces = this.getDecimalPlaces();
            this.displayValue.set(new Intl.NumberFormat(this.locale, {
                style: 'decimal',
                useGrouping: false,
                minimumFractionDigits: decimalPlaces,
                maximumFractionDigits: decimalPlaces,
            }).format(val));
        }
    }
    onInput(event) {
        const raw = event.target.value;
        this.displayValue.set(raw);
        const parsed = this.parseInput(raw);
        this.value.set(parsed);
        // Update the model silently so we don't trigger an infinite loop
        this.#control.control?.setValue(parsed, {
            emitEvent: false, // Prevents valueChanges from firing again
            emitModelToViewChange: false,
        });
    }
    onBlur() {
        this.focused.set(false);
        const val = this.value();
        if (val !== null) {
            this.displayValue.set(this.formatNumber(val));
        }
    }
    // Formatting
    formatNumber(value) {
        const decimalPlaces = this.getDecimalPlaces();
        return new Intl.NumberFormat(this.locale, {
            style: 'decimal',
            useGrouping: true,
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
        }).format(value);
    }
    getDecimalPlaces() {
        return (new Intl.NumberFormat(this.locale, {
            style: 'currency',
            currency: this.currency(),
        }).resolvedOptions().minimumFractionDigits ?? 2);
    }
    // Parsing
    parseInput(raw) {
        if (!raw.trim())
            return null;
        const parts = new Intl.NumberFormat(this.locale).formatToParts(1234567.89);
        const decimal = parts.find((p) => p.type === 'decimal')?.value ?? '.';
        const group = parts.find((p) => p.type === 'group')?.value ?? ',';
        // Escape special regex characters in separators
        const groupEscaped = group.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const decimalEscaped = decimal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        let cleaned = raw.replace(new RegExp(groupEscaped, 'g'), '');
        if (decimal !== '.') {
            cleaned = cleaned.replace(new RegExp(decimalEscaped), '.');
        }
        // Strip non-numeric characters (currency symbols, spaces, etc.)
        cleaned = cleaned.replace(/[^0-9.\-]/g, '');
        const n = parseFloat(cleaned);
        return isNaN(n) ? null : n;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: CurrencyInputDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.7", type: CurrencyInputDirective, isStandalone: true, selector: "input[ommCurrencyInput]", inputs: { currency: { classPropertyName: "currency", publicName: "currency", isSignal: true, isRequired: false, transformFunction: null } }, host: { listeners: { "focus": "onFocus()", "input": "onInput($event)", "blur": "onBlur()" }, properties: { "attr.data-symbol": "currency()" } }, providers: [CurrencyPipe], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: CurrencyInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[ommCurrencyInput]',
                    standalone: true,
                    providers: [CurrencyPipe],
                    host: {
                        '[attr.data-symbol]': 'currency()',
                    },
                }]
        }], propDecorators: { currency: [{ type: i0.Input, args: [{ isSignal: true, alias: "currency", required: false }] }], onFocus: [{
                type: HostListener,
                args: ['focus']
            }], onInput: [{
                type: HostListener,
                args: ['input', ['$event']]
            }], onBlur: [{
                type: HostListener,
                args: ['blur']
            }] } });

class GrowingTextarea {
    #elRef = inject((ElementRef));
    constructor() {
        afterRenderEffect(() => {
            const textarea = this.#elRef.nativeElement;
            const maxHeight = 240;
            const resize = () => {
                textarea.style.height = 'auto';
                const height = Math.min(textarea.scrollHeight, maxHeight);
                textarea.style.height = height ? `${height}px` : 'var(--line-height)';
                textarea.style.overflowY = textarea.scrollHeight > maxHeight ? 'auto' : 'hidden';
            };
            resize(); // initial size
            textarea.addEventListener('input', resize);
            return () => {
                textarea.removeEventListener('input', resize);
            };
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: GrowingTextarea, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.7", type: GrowingTextarea, isStandalone: true, selector: "textarea[ommGrow]", host: { properties: { "attr.rows": "1" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: GrowingTextarea, decorators: [{
            type: Directive,
            args: [{
                    selector: 'textarea[ommGrow]',
                    host: {
                        '[attr.rows]': '1'
                    }
                }]
        }], ctorParameters: () => [] });

/**
 * True when the browser supports both the Popover API and CSS Anchor Positioning,
 * which together let us render the tooltip in the top layer (no overflow clipping)
 * and position it natively without any JS. Evaluated once at module load.
 */
const SUPPORTS_NATIVE_TOOLTIP = typeof HTMLElement !== 'undefined' &&
    Object.prototype.hasOwnProperty.call(HTMLElement.prototype, 'popover') &&
    typeof CSS !== 'undefined' &&
    CSS.supports('anchor-name', '--x') &&
    CSS.supports('top', 'anchor(bottom)');
/** Unique suffix per directive instance, used for the element id and anchor name. */
let nextId = 0;
/** Press duration (ms) that reveals the tooltip on touch devices. */
const LONG_PRESS_MS = 500;
/** Finger travel (px) past which a press is treated as a scroll/drag, not a long-press. */
const MOVE_TOLERANCE_PX = 10;
/**
 * Delay (ms) before the hidden <tool-tip> is torn out of the DOM. Must outlast the
 * 0.2s fade-out in _tooltip.scss so the exit transition can play; a re-show within
 * this window cancels the removal and reuses the element.
 */
const REMOVE_DELAY_MS = 300;
class Tooltip {
    #elRef = inject(ElementRef);
    #renderer = inject(Renderer2);
    #destroyRef = inject(DestroyRef);
    ommTooltip = input.required(...(ngDevMode ? [{ debugName: "ommTooltip" }] : /* istanbul ignore next */ []));
    tipPosition = input(...(ngDevMode ? [undefined, { debugName: "tipPosition" }] : /* istanbul ignore next */ []));
    #tooltipEl = null;
    /** Pending teardown of the hidden element after its fade-out. */
    #removeTimer = null;
    // Resolved once in the constructor; used to (re)build the element on demand.
    #id = '';
    #anchorName = '';
    #text = '';
    #position;
    // Touch / long-press state.
    #pressTimer = null;
    #pressStart = null;
    /** True while a touch interaction is in progress, to ignore synthesized mouse events. */
    #touchActive = false;
    /** Set when a long-press opened the tooltip, so the trailing `click` is suppressed. */
    #suppressClick = false;
    /** Teardown callbacks for the document-level light-dismiss listeners. */
    #dismiss = [];
    constructor() {
        const trigger = this.#elRef.nativeElement;
        // Fallback: no Popover API / CSS anchor positioning. There is no hoverable top-layer
        // element and a native `title` never shows on touch, so expose the text via both
        // `title` (pointer hover) and `aria-label` (assistive tech). No element is inserted.
        if (!SUPPORTS_NATIVE_TOOLTIP) {
            effect(() => {
                const text = this.ommTooltip();
                this.#renderer.setAttribute(trigger, 'title', text);
                this.#renderer.setAttribute(trigger, 'aria-label', text);
            });
            return;
        }
        this.#id = `omm-tip-${nextId++}`;
        this.#anchorName = `--${this.#id}`;
        this.#renderer.setStyle(trigger, 'anchor-name', this.#anchorName);
        // Cache the latest text/position. The <tool-tip> element is created lazily on
        // #show() (see below) rather than here, so an idle trigger contributes nothing
        // to the DOM; if a tooltip is currently on screen, update it live.
        effect(() => {
            this.#text = this.ommTooltip();
            this.#position = this.tipPosition();
            if (this.#tooltipEl) {
                this.#applyContent(this.#tooltipEl);
            }
        });
        const unlisten = [
            // Pointer (mouse) hover + keyboard focus. Synthetic mouse events fired after a
            // touch tap are ignored via #touchActive so touch never drives the hover path.
            this.#renderer.listen(trigger, 'mouseenter', () => !this.#touchActive && this.#show()),
            this.#renderer.listen(trigger, 'mouseleave', () => !this.#touchActive && this.#hide()),
            this.#renderer.listen(trigger, 'focus', () => this.#show()),
            this.#renderer.listen(trigger, 'blur', () => this.#hide()),
            this.#renderer.listen(trigger, 'keydown.escape', () => this.#hide()),
            // Touch long-press.
            this.#renderer.listen(trigger, 'pointerdown', (e) => this.#onPointerDown(e)),
            this.#renderer.listen(trigger, 'pointermove', (e) => this.#onPointerMove(e)),
            this.#renderer.listen(trigger, 'pointerup', () => this.#endPress()),
            this.#renderer.listen(trigger, 'pointercancel', () => this.#endPress()),
            this.#renderer.listen(trigger, 'pointerleave', () => this.#endPress()),
            this.#renderer.listen(trigger, 'click', (e) => this.#onClick(e)),
            this.#renderer.listen(trigger, 'contextmenu', (e) => this.#onContextMenu(e)),
        ];
        this.#destroyRef.onDestroy(() => {
            unlisten.forEach((fn) => fn());
            this.#clearPressTimer();
            this.#disarmDismiss();
            if (this.#removeTimer !== null) {
                clearTimeout(this.#removeTimer);
                this.#removeTimer = null;
            }
            this.#tooltipEl?.remove();
            this.#tooltipEl = null;
            this.#renderer.removeStyle(trigger, 'anchor-name');
            this.#renderer.removeAttribute(trigger, 'aria-describedby');
        });
    }
    // --- Touch long-press -------------------------------------------------------
    #onPointerDown(event) {
        if (event.pointerType !== 'touch') {
            return;
        }
        this.#touchActive = true;
        this.#pressStart = { x: event.clientX, y: event.clientY };
        const trigger = this.#elRef.nativeElement;
        // Suppress the iOS long-press callout / selection magnifier for the press.
        this.#renderer.setStyle(trigger, '-webkit-touch-callout', 'none');
        this.#renderer.setStyle(trigger, 'user-select', 'none');
        this.#pressTimer = setTimeout(() => {
            this.#pressTimer = null;
            this.#suppressClick = true;
            this.#show();
            this.#armDismiss();
        }, LONG_PRESS_MS);
    }
    #onPointerMove(event) {
        if (!this.#pressStart) {
            return;
        }
        const dx = Math.abs(event.clientX - this.#pressStart.x);
        const dy = Math.abs(event.clientY - this.#pressStart.y);
        if (dx > MOVE_TOLERANCE_PX || dy > MOVE_TOLERANCE_PX) {
            this.#clearPressTimer();
        }
    }
    #endPress() {
        this.#clearPressTimer();
        this.#pressStart = null;
        const trigger = this.#elRef.nativeElement;
        this.#renderer.removeStyle(trigger, '-webkit-touch-callout');
        this.#renderer.removeStyle(trigger, 'user-select');
        // Keep #touchActive set briefly so the synthesized mouse events that follow a
        // touch tap don't drive the hover path; clear it on the next tick.
        setTimeout(() => (this.#touchActive = false));
    }
    #clearPressTimer() {
        if (this.#pressTimer !== null) {
            clearTimeout(this.#pressTimer);
            this.#pressTimer = null;
        }
    }
    #onClick(event) {
        if (this.#suppressClick) {
            // A long-press opened the tooltip — don't trigger the element's own action.
            event.preventDefault();
            event.stopPropagation();
            this.#suppressClick = false;
            return;
        }
        // A real activation (mouse/keyboard). Dismiss the hover tooltip: the trigger often
        // becomes disabled, navigates, or re-renders on click, in which case `mouseleave`
        // never fires and the tooltip would otherwise stay stuck on screen.
        this.#hide();
    }
    #onContextMenu(event) {
        // Block the Android long-press context menu while a touch press is active.
        if (this.#touchActive) {
            event.preventDefault();
        }
    }
    // --- Light dismiss (touch-shown tooltip) ------------------------------------
    #armDismiss() {
        if (this.#dismiss.length) {
            return;
        }
        const onPointerDown = (e) => {
            const target = e.target;
            const trigger = this.#elRef.nativeElement;
            if (target && (trigger.contains(target) || this.#tooltipEl?.contains(target))) {
                return;
            }
            this.#hide();
        };
        const onScroll = () => this.#hide();
        document.addEventListener('pointerdown', onPointerDown, true);
        document.addEventListener('scroll', onScroll, { capture: true, passive: true });
        this.#dismiss.push(() => document.removeEventListener('pointerdown', onPointerDown, true), () => document.removeEventListener('scroll', onScroll, true));
    }
    #disarmDismiss() {
        this.#dismiss.forEach((fn) => fn());
        this.#dismiss = [];
    }
    // --- Show / hide ------------------------------------------------------------
    /** Push the cached text/position onto an existing <tool-tip> element. */
    #applyContent(el) {
        el.textContent = this.#text;
        if (this.#position) {
            this.#renderer.setAttribute(el, 'tip-position', this.#position);
        }
        else {
            this.#renderer.removeAttribute(el, 'tip-position');
        }
    }
    #show() {
        const trigger = this.#elRef.nativeElement;
        if (!trigger.isConnected) {
            return;
        }
        // A hide is fading out — cancel the pending teardown and reuse the element.
        if (this.#removeTimer !== null) {
            clearTimeout(this.#removeTimer);
            this.#removeTimer = null;
        }
        if (!this.#tooltipEl) {
            const el = this.#renderer.createElement('tool-tip');
            this.#renderer.setAttribute(el, 'id', this.#id);
            this.#renderer.setAttribute(el, 'role', 'tooltip');
            this.#renderer.setAttribute(el, 'popover', 'manual');
            this.#renderer.setStyle(el, 'position-anchor', this.#anchorName);
            this.#applyContent(el);
            // Top-layer popovers are positioned relative to the viewport, so appending
            // to <body> escapes any clipping/transform ancestor; the named anchor still
            // resolves to the trigger.
            this.#renderer.appendChild(document.body, el);
            this.#tooltipEl = el;
        }
        this.#renderer.setAttribute(trigger, 'aria-describedby', this.#id);
        try {
            this.#tooltipEl.showPopover();
        }
        catch {
            // showPopover throws if already open or detached — safe to ignore.
        }
    }
    #hide() {
        this.#disarmDismiss();
        const el = this.#tooltipEl;
        if (!el) {
            return;
        }
        try {
            if (el.matches(':popover-open')) {
                el.hidePopover();
            }
        }
        catch {
            // hidePopover throws if not open — safe to ignore.
        }
        this.#renderer.removeAttribute(this.#elRef.nativeElement, 'aria-describedby');
        // Remove the element from the DOM once the fade-out has finished, so an idle
        // page holds no <tool-tip> nodes. A re-show before then cancels this.
        if (this.#removeTimer === null) {
            this.#removeTimer = setTimeout(() => {
                this.#removeTimer = null;
                this.#tooltipEl?.remove();
                this.#tooltipEl = null;
            }, REMOVE_DELAY_MS);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: Tooltip, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.7", type: Tooltip, isStandalone: true, selector: "[ommTooltip]", inputs: { ommTooltip: { classPropertyName: "ommTooltip", publicName: "ommTooltip", isSignal: true, isRequired: true, transformFunction: null }, tipPosition: { classPropertyName: "tipPosition", publicName: "tipPosition", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.7", ngImport: i0, type: Tooltip, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ommTooltip]',
                    standalone: true,
                }]
        }], ctorParameters: () => [], propDecorators: { ommTooltip: [{ type: i0.Input, args: [{ isSignal: true, alias: "ommTooltip", required: true }] }], tipPosition: [{ type: i0.Input, args: [{ isSignal: true, alias: "tipPosition", required: false }] }] } });

// Components

/**
 * Generated bundle index. Do not edit.
 */

export { BottomSheet, ButtonToggle, Calendar, Checkbox, CollectionTree, ConfirmService, CurrencyInput, CurrencyInputDirective, Datepicker, DatepickerService, DragSelect, DragSelectItemDirective, EnvironmentService, FileDrop, GrowingTextarea, List, ListItem, ListItemToggle, PinPad, Select, TagsInput, ThemeService, ThemeToggle, ToastService, Tooltip };
//# sourceMappingURL=omm-ui.mjs.map
