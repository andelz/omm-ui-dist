import * as _angular_core from '@angular/core';
import { ElementRef, OnInit } from '@angular/core';
import * as lucide_angular from 'lucide-angular';
import { LucideIconData } from 'lucide-angular';
import { ControlValueAccessor, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { FocusableOption, FocusKeyManager } from '@angular/cdk/a11y';
import { Option } from '@angular/aria/listbox';

interface ButtonToggleOption<T = string> {
    value: T;
    label: string;
    icon?: LucideIconData;
    ariaLabel?: string;
}
declare class ButtonToggle<T = string> {
    readonly options: _angular_core.InputSignal<ButtonToggleOption<T>[]>;
    readonly value: _angular_core.InputSignal<T>;
    readonly ariaLabel: _angular_core.InputSignal<string | undefined>;
    readonly iconSize: _angular_core.InputSignal<number>;
    readonly valueChange: _angular_core.OutputEmitterRef<T>;
    protected select(option: ButtonToggleOption<T>): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ButtonToggle<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<ButtonToggle<any>, "omm-button-toggle", never, { "options": { "alias": "options"; "required": true; "isSignal": true; }; "value": { "alias": "value"; "required": true; "isSignal": true; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; "isSignal": true; }; "iconSize": { "alias": "iconSize"; "required": false; "isSignal": true; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}

declare class BottomSheet {
    ariaLabel: _angular_core.InputSignal<string | undefined>;
    /**
     * On a wide viewport, show a centred panel instead of a sheet along the
     * bottom edge. A full-width strip suits a phone held in one hand; on a
     * desktop window it stretches short content across the whole screen.
     */
    panelOnWide: _angular_core.InputSignalWithTransform<boolean, unknown>;
    closed: _angular_core.OutputEmitterRef<void>;
    private dlg;
    open(): void;
    close(): void;
    protected onClose(): void;
    protected onBackdropClick(e: MouseEvent): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<BottomSheet, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<BottomSheet, "omm-bottom-sheet", never, { "ariaLabel": { "alias": "ariaLabel"; "required": false; "isSignal": true; }; "panelOnWide": { "alias": "panelOnWide"; "required": false; "isSignal": true; }; }, { "closed": "closed"; }, never, ["*"], true, never>;
}

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
declare class Checkbox implements ControlValueAccessor {
    #private;
    /** Checked state; two-way bindable and driven by forms via `ControlValueAccessor`. */
    readonly checked: _angular_core.ModelSignal<boolean>;
    /** Disabled state; also set by forms through `setDisabledState`. */
    readonly disabled: _angular_core.ModelSignal<boolean>;
    /** Mixed/partial state — shows a dash and takes visual precedence over `checked`. */
    readonly indeterminate: _angular_core.InputSignal<boolean>;
    readonly required: _angular_core.InputSignal<boolean>;
    /** Accessible name when there is no projected label (icon-only checkbox). */
    readonly ariaLabel: _angular_core.InputSignal<string | undefined>;
    protected readonly checkIcon: lucide_angular.LucideIconData;
    protected readonly indeterminateIcon: lucide_angular.LucideIconData;
    protected readonly inputRef: _angular_core.Signal<ElementRef<HTMLInputElement>>;
    constructor();
    protected onToggle(event: Event): void;
    protected onBlur(): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (value: boolean) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<Checkbox, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<Checkbox, "omm-checkbox", never, { "checked": { "alias": "checked"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "indeterminate": { "alias": "indeterminate"; "required": false; "isSignal": true; }; "required": { "alias": "required"; "required": false; "isSignal": true; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; "isSignal": true; }; }, { "checked": "checkedChange"; "disabled": "disabledChange"; }, never, ["*"], true, never>;
}

declare class CurrencyInput implements ControlValueAccessor, Validator {
    private readonly locale;
    readonly currency: _angular_core.InputSignal<string>;
    private readonly value;
    protected readonly displayValue: _angular_core.WritableSignal<string>;
    protected readonly disabled: _angular_core.WritableSignal<boolean>;
    private readonly focused;
    private readonly uid;
    protected readonly inputId: string;
    protected readonly descriptionId: string;
    protected readonly currencySymbol: _angular_core.Signal<string>;
    protected readonly ariaDescription: _angular_core.Signal<string>;
    private onChange;
    protected onTouched: () => void;
    writeValue(value: number | null): void;
    registerOnChange(fn: (value: number | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    validate(_control: AbstractControl): ValidationErrors | null;
    protected onFocus(): void;
    protected onInput(event: Event): void;
    protected onBlur(): void;
    private formatNumber;
    private getDecimalPlaces;
    private parseInput;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<CurrencyInput, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<CurrencyInput, "omm-currency-input", never, { "currency": { "alias": "currency"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

/**
 * On-screen numeric PIN entry: a masked dot display over an underline plus a
 * 1–9 / 0 / backspace keypad. Implements ControlValueAccessor so it drops into
 * reactive forms (`[formControl]` / `formControlName`) with a string value of
 * the entered digits. Physical-keyboard input (digits, Backspace, Enter) is
 * handled too for desktop/a11y.
 */
declare class PinPad implements ControlValueAccessor {
    #private;
    /** Fixed PIN length: the number of outlined slots, and the auto-submit threshold. */
    readonly length: _angular_core.InputSignal<number>;
    /** Accessible name for the keypad group and the current entry length. */
    readonly ariaLabel: _angular_core.InputSignal<string>;
    /** Focus the keypad on first render so a physical keyboard works immediately. */
    readonly autofocus: _angular_core.InputSignalWithTransform<boolean, string | boolean>;
    /**
     * When true, the filled dots play a subtle looping wave to signal that entry
     * is being processed (e.g. a PIN is being verified / a vault unlocked).
     */
    readonly verifying: _angular_core.InputSignalWithTransform<boolean, string | boolean>;
    readonly resetIcon: lucide_angular.LucideIconData;
    constructor();
    /** Move keyboard focus to the keypad so digit/Backspace/Enter keys are captured. */
    focus(): void;
    /** Emits the value once it reaches {@link maxLength} (e.g. to auto-advance). */
    readonly filled: _angular_core.OutputEmitterRef<string>;
    /** Emits on an Enter keypress, so hosts can treat it as "submit". */
    readonly submitted: _angular_core.OutputEmitterRef<void>;
    protected readonly value: _angular_core.WritableSignal<string>;
    protected readonly disabled: _angular_core.WritableSignal<boolean>;
    /** Slot indices [0..length) — each renders an outlined dot that fills once entered. */
    protected readonly slots: _angular_core.Signal<number[]>;
    protected readonly keys: string[];
    private onChange;
    protected onTouched: () => void;
    writeValue(v: string | null): void;
    registerOnChange(fn: (v: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    protected press(d: string): void;
    protected backspace(): void;
    protected onKeydown(e: KeyboardEvent): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<PinPad, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<PinPad, "omm-pin-pad", never, { "length": { "alias": "length"; "required": false; "isSignal": true; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; "isSignal": true; }; "autofocus": { "alias": "autofocus"; "required": false; "isSignal": true; }; "verifying": { "alias": "verifying"; "required": false; "isSignal": true; }; }, { "filled": "filled"; "submitted": "submitted"; }, never, never, true, never>;
}

interface CalendarDay {
    date: Date;
    dayNumber: number;
    dateIso: string;
    isToday: boolean;
    isSelected: boolean;
    isOutsideMonth: boolean;
    isDisabled: boolean;
    isFocusTarget: boolean;
    fullLabel: string;
}
interface WeekdayHeader {
    narrow: string;
    long: string;
}

declare class Calendar {
    private readonly localeService;
    private readonly elementRef;
    private readonly cdr;
    readonly selectedDate: _angular_core.InputSignal<Date | null>;
    readonly initialFocusDate: _angular_core.InputSignal<Date>;
    readonly min: _angular_core.InputSignal<Date | null>;
    readonly dateSelected: _angular_core.OutputEmitterRef<Date>;
    readonly closeRequested: _angular_core.OutputEmitterRef<void>;
    protected readonly focusedDate: _angular_core.WritableSignal<Date>;
    protected readonly weekdayHeaders: WeekdayHeader[];
    protected readonly monthYearLabel: _angular_core.Signal<string>;
    icons: {
        left: lucide_angular.LucideIconData;
        lefts: lucide_angular.LucideIconData;
        right: lucide_angular.LucideIconData;
        rights: lucide_angular.LucideIconData;
    };
    protected readonly weeks: _angular_core.Signal<CalendarDay[][]>;
    constructor();
    focusActiveCell(): void;
    protected selectDate(day: CalendarDay): void;
    protected navigateMonth(delta: number): void;
    protected navigateYear(delta: number): void;
    protected onGridKeydown(event: KeyboardEvent): void;
    private generateWeeks;
    private isBeforeMin;
    private moveFocusClamped;
    private addDays;
    private startOfWeek;
    private endOfWeek;
    private moveFocusMonth;
    private moveFocusYear;
    private isSameDay;
    private toIsoString;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<Calendar, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<Calendar, "omm-calendar", never, { "selectedDate": { "alias": "selectedDate"; "required": false; "isSignal": true; }; "initialFocusDate": { "alias": "initialFocusDate"; "required": false; "isSignal": true; }; "min": { "alias": "min"; "required": false; "isSignal": true; }; }, { "dateSelected": "dateSelected"; "closeRequested": "closeRequested"; }, never, never, true, never>;
}

declare class Datepicker implements ControlValueAccessor, Validator {
    readonly icon: lucide_angular.LucideIconData;
    private readonly localeService;
    readonly min: _angular_core.InputSignal<Date | null>;
    protected readonly selectedDate: _angular_core.WritableSignal<Date | null>;
    protected readonly inputValue: _angular_core.WritableSignal<string>;
    protected readonly disabled: _angular_core.WritableSignal<boolean>;
    protected readonly calendarDialog: _angular_core.Signal<ElementRef<HTMLDialogElement>>;
    protected readonly triggerButton: _angular_core.Signal<ElementRef<HTMLButtonElement>>;
    protected readonly calendarRef: _angular_core.Signal<Calendar>;
    protected readonly dateFormatPlaceholder: string;
    protected readonly chooseButtonAriaLabel: _angular_core.Signal<string>;
    protected readonly initialFocusDate: _angular_core.Signal<Date>;
    private onChange;
    protected onTouched: () => void;
    writeValue(value: Date | string | null): void;
    registerOnChange(fn: (value: Date | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    validate(_control: AbstractControl): ValidationErrors | null;
    protected onManualInput(event: Event): void;
    protected toggleDialog(): void;
    protected onDateSelected(date: Date): void;
    protected onDialogClose(): void;
    protected onDialogBackdropClick(event: MouseEvent): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<Datepicker, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<Datepicker, "omm-datepicker", never, { "min": { "alias": "min"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

/**
 * Locale-aware date utilities for the datepicker component.
 * Handles weekday ordering, date formatting/parsing, and locale-specific placeholders
 * using the `Intl` API.
 */
declare class DatepickerService {
    private readonly angularLocale;
    readonly resolvedLocale: string;
    constructor();
    /** Returns the 7 weekday headers (narrow + long names) starting from the locale's first day of week. */
    getWeekdayHeaders(): WeekdayHeader[];
    /** Returns first day of week: 1=Monday ... 7=Sunday */
    getFirstDayOfWeek(): number;
    private getFirstDayFallback;
    /** Formats a date as a localized "Month Year" string (e.g. "April 2026"). */
    getMonthYearLabel(date: Date): string;
    /** Formats a date as a full localized string (e.g. "Friday, 3 April 2026"). */
    getFullDateLabel(date: Date): string;
    /** Formats a date as a short localized string suitable for input display. */
    formatDateForInput(date: Date): string;
    /** Returns a locale-specific date format placeholder (e.g. "DD.MM.YYYY" or "MM/DD/YY"). */
    getDateFormatPlaceholder(): string;
    /** Parses a user-entered date string into a `Date`, trying native parsing first, then locale-aware parsing. Returns `null` on failure. */
    parseDateFromInput(raw: string): Date | null;
    private parseLocaleDate;
    private normalizeDate;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<DatepickerService, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<DatepickerService>;
}

declare class FileDrop {
    fileDrop: _angular_core.OutputEmitterRef<File[]>;
    readonly icon: {
        upload: lucide_angular.LucideIconData;
    };
    onDragEnter(event: DragEvent): void;
    onDrop(event: DragEvent): void;
    onBodyDragOver(event: DragEvent): void;
    onBodyDrop(event: DragEvent): void;
    dragLeave(event: DragEvent): void;
    active: _angular_core.WritableSignal<boolean>;
    onFileDrop(event: DragEvent): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FileDrop, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FileDrop, "omm-file-drop", never, {}, { "fileDrop": "fileDrop"; }, never, never, true, never>;
}

interface DragSelectOptions {
    disabled?: boolean;
    selectorColor?: string;
}
declare class DragSelect {
    #private;
    items: _angular_core.Signal<readonly DragSelectItemDirective[]>;
    selectables: _angular_core.InputSignal<readonly HTMLElement[] | undefined>;
    yuvDragSelect: _angular_core.InputSignal<DragSelectOptions | undefined>;
    dragSelectChange: _angular_core.OutputEmitterRef<number[]>;
    dragSelect: _angular_core.OutputEmitterRef<number[]>;
    onPointerDown(event: PointerEvent): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<DragSelect, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<DragSelect, "[ommDragSelect]", never, { "selectables": { "alias": "selectables"; "required": false; "isSignal": true; }; "yuvDragSelect": { "alias": "yuvDragSelect"; "required": false; "isSignal": true; }; }, { "dragSelectChange": "dragSelectChange"; "dragSelect": "dragSelect"; }, ["items"], never, true, never>;
}
declare class DragSelectItemDirective {
    #private;
    el: HTMLElement;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<DragSelectItemDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<DragSelectItemDirective, "[yuvDragSelectItem]", never, {}, {}, never, never, true, never>;
}

declare class ListItem<T> implements FocusableOption {
    #private;
    readonly value: _angular_core.InputSignal<T>;
    readonly disabledInput: _angular_core.InputSignalWithTransform<boolean, unknown>;
    get disabled(): boolean;
    /**
     * When false, the row cannot be selected: clicks/keyboard "activate" it
     * (e.g. navigate) instead of toggling selection, and drag-select / long-press
     * selection skip it. Still focusable for keyboard navigation.
     */
    readonly selectable: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly list: List<T>;
    readonly el: HTMLElement;
    readonly index: _angular_core.Signal<number>;
    readonly isActive: _angular_core.Signal<boolean>;
    readonly isSelected: _angular_core.Signal<boolean>;
    static readonly LONG_PRESS_MS = 500;
    static readonly MOVE_TOLERANCE_PX = 10;
    focus(): void;
    getLabel(): string;
    onClick(event: MouseEvent): void;
    onDblClick(event: MouseEvent): void;
    onFocus(): void;
    onPointerDown(event: PointerEvent): void;
    onPointerMove(event: PointerEvent): void;
    onPointerEnd(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ListItem<any>, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<ListItem<any>, "[ommListItem]", ["ommListItem"], { "value": { "alias": "ommListItem"; "required": true; "isSignal": true; }; "disabledInput": { "alias": "disabled"; "required": false; "isSignal": true; }; "selectable": { "alias": "selectable"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof DragSelectItemDirective; inputs: {}; outputs: {}; }]>;
}

declare class List<T> {
    #private;
    multi: _angular_core.InputSignalWithTransform<boolean, unknown>;
    /**
     * When true, a plain click (no modifier, not in selection mode) activates the
     * item instead of replacing the selection. Modifier-click, shift-range,
     * drag-select and long-press still select as usual. Lets a multi-select list
     * keep "click to open" semantics (e.g. a photo grid). Default false.
     */
    activateOnClick: _angular_core.InputSignalWithTransform<boolean, unknown>;
    itemActivate: _angular_core.OutputEmitterRef<T>;
    selectionChange: _angular_core.OutputEmitterRef<T[]>;
    selectionModeChange: _angular_core.OutputEmitterRef<boolean>;
    isTouch: _angular_core.WritableSignal<boolean>;
    items: _angular_core.Signal<readonly ListItem<T>[]>;
    selectableEls: _angular_core.Signal<HTMLElement[]>;
    activeIndex: _angular_core.WritableSignal<number>;
    selection: _angular_core.WritableSignal<ReadonlySet<number>>;
    readonly selectionMode: _angular_core.WritableSignal<boolean>;
    keyManager: FocusKeyManager<ListItem<T>>;
    isSelected(index: number): boolean;
    onKeyDown(event: KeyboardEvent): void;
    handleItemClick(index: number, event: MouseEvent): void;
    /**
     * Click on a row's `ommListItemToggle`: toggles the row, or with shift adds
     * the range from the anchor. Leaves the rest of the selection untouched.
     */
    handleToggleClick(index: number, event: MouseEvent): void;
    handleItemActivate(index: number): void;
    selectItem(index: number): void;
    clearSelection(): void;
    enterSelectionMode(index: number): void;
    exitSelectionMode(): void;
    onDragSelectChange(indices: number[]): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<List<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<List<any>, "omm-list", never, { "multi": { "alias": "multi"; "required": false; "isSignal": true; }; "activateOnClick": { "alias": "activateOnClick"; "required": false; "isSignal": true; }; }, { "itemActivate": "itemActivate"; "selectionChange": "selectionChange"; "selectionModeChange": "selectionModeChange"; }, ["items"], ["*"], true, never>;
}

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
declare class ListItemToggle {
    #private;
    onClick(event: MouseEvent): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ListItemToggle, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<ListItemToggle, "[ommListItemToggle]", never, {}, {}, never, never, true, never>;
}

interface SelectOption<T> {
    label: string;
    disabled?: boolean;
    value: T;
}

declare class Select<T = any> implements ControlValueAccessor {
    #private;
    readonly options: _angular_core.InputSignal<SelectOption<T>[]>;
    readonly required: _angular_core.InputSignal<boolean>;
    readonly disabled: _angular_core.InputSignal<boolean>;
    readonly placeholder: _angular_core.InputSignal<string>;
    readonly selectionChange: _angular_core.OutputEmitterRef<SelectOption<T> | null>;
    readonly optionsContainerMaxHeight = 300;
    private readonly uid;
    protected readonly isOpen: _angular_core.WritableSignal<boolean>;
    protected readonly selectedValue: _angular_core.WritableSignal<T | null>;
    protected readonly highlightedIndex: _angular_core.WritableSignal<number>;
    protected readonly triggerButton: _angular_core.Signal<ElementRef<HTMLButtonElement>>;
    protected readonly dropdown: _angular_core.Signal<ElementRef<HTMLDialogElement>>;
    protected chevronIcon: lucide_angular.LucideIconData;
    protected readonly triggerButtonId: string;
    protected readonly dropdownId: string;
    protected readonly listboxId: string;
    protected readonly displayValue: _angular_core.Signal<string>;
    private onChange;
    private onTouched;
    private clickOutsideHandler?;
    constructor();
    writeValue(value: T): void;
    registerOnChange(fn: (value: SelectOption<T> | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(_: boolean): void;
    validate(_: AbstractControl): ValidationErrors | null;
    protected onTriggerClick(): void;
    protected onTriggerKeydown(event: KeyboardEvent): void;
    protected onOptionClick(option: SelectOption<T>, evt: Event): void;
    protected onOptionKeydown(event: KeyboardEvent): void;
    protected closeDropdown(): void;
    protected getOptionId(flatIndex: number): string;
    protected isOptionHighlighted(flatIndex: number): boolean;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<Select<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<Select<any>, "omm-select", never, { "options": { "alias": "options"; "required": true; "isSignal": true; }; "required": { "alias": "required"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; }, { "selectionChange": "selectionChange"; }, never, never, true, never>;
}

interface TreeNode {
    id: string;
    name: string;
    parentId?: string;
}
interface CollectionTreeLabels {
    addChild?: string;
    delete?: string;
    deleteTitle?: string;
    deleteMessage?: string;
}

interface FlatNode {
    node: TreeNode;
    depth: number;
    hasChildren: boolean;
    expanded: boolean;
}
declare class CollectionTree {
    #private;
    readonly nodes: _angular_core.InputSignal<readonly TreeNode[]>;
    readonly editable: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly selectedId: _angular_core.ModelSignal<string | undefined>;
    readonly labels: _angular_core.InputSignal<CollectionTreeLabels>;
    readonly addRequest: _angular_core.OutputEmitterRef<{
        parentId?: string;
    }>;
    readonly renameRequest: _angular_core.OutputEmitterRef<{
        id: string;
        name: string;
    }>;
    readonly deleteRequest: _angular_core.OutputEmitterRef<{
        id: string;
    }>;
    protected readonly addIcon: lucide_angular.LucideIconData;
    protected readonly deleteIcon: lucide_angular.LucideIconData;
    protected readonly chevronDownIcon: lucide_angular.LucideIconData;
    protected readonly chevronRightIcon: lucide_angular.LucideIconData;
    protected readonly expanded: _angular_core.WritableSignal<ReadonlySet<string>>;
    protected readonly activeId: _angular_core.WritableSignal<string | undefined>;
    protected readonly menuOpenFor: _angular_core.WritableSignal<string | undefined>;
    /**
     * When set (via {@link editNode}), the next render focuses and selects the
     * name input for that node id, then clears this signal. Used to start
     * inline editing right after the consumer creates a new node.
     */
    protected readonly pendingEditId: _angular_core.WritableSignal<string | undefined>;
    protected readonly rowEls: _angular_core.Signal<readonly ElementRef<HTMLLIElement>[]>;
    protected readonly flat: _angular_core.Signal<FlatNode[]>;
    /** Imperative API: focus a row's name input so the user can rename it. */
    editNode(id: string): void;
    protected toggleExpanded(id: string, event?: Event): void;
    protected onRowClick(node: TreeNode): void;
    protected onNameClick(node: TreeNode, event: Event): void;
    protected onAddChild(parentId: string, event: Event): void;
    protected onDeleteClick(node: TreeNode): Promise<void>;
    protected onNameInputCommit(node: TreeNode, event: Event): void;
    protected onNameInputKeydown(node: TreeNode, event: KeyboardEvent): void;
    protected onNameInputFocus(id: string): void;
    protected onHostKeydown(event: KeyboardEvent): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<CollectionTree, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<CollectionTree, "omm-collection-tree", never, { "nodes": { "alias": "nodes"; "required": true; "isSignal": true; }; "editable": { "alias": "editable"; "required": false; "isSignal": true; }; "selectedId": { "alias": "selectedId"; "required": false; "isSignal": true; }; "labels": { "alias": "labels"; "required": false; "isSignal": true; }; }, { "selectedId": "selectedIdChange"; "addRequest": "addRequest"; "renameRequest": "renameRequest"; "deleteRequest": "deleteRequest"; }, never, never, true, never>;
}

declare class TagsInput {
    #private;
    disabled: _angular_core.WritableSignal<boolean>;
    allTags: _angular_core.InputSignal<string[]>;
    tagRemoveIcon: lucide_angular.LucideIconData;
    options: _angular_core.Signal<readonly Option<any>[]>;
    query: _angular_core.WritableSignal<string>;
    tags: _angular_core.WritableSignal<string[]>;
    tagSuggestions: _angular_core.Signal<string[]>;
    writeValue(value: string[] | null): void;
    registerOnChange(fn: (val: string[]) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    onBlur(): void;
    onEnter(evt: Event): void;
    addTag(tag: string): void;
    removeTag(index: number): void;
    onBackspace(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TagsInput, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<TagsInput, "omm-tags-input", never, { "allTags": { "alias": "allTags"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}

type ThemeMode = 'light' | 'dark' | 'system';
declare class ThemeService {
    #private;
    readonly mode: _angular_core.WritableSignal<ThemeMode>;
    readonly resolved: _angular_core.WritableSignal<"light" | "dark">;
    init(): void;
    setMode(mode: ThemeMode): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ThemeService, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<ThemeService>;
}

interface ThemeToggleLabels {
    light: string;
    dark: string;
    system: string;
}
declare class ThemeToggle {
    #private;
    readonly labels: _angular_core.InputSignal<ThemeToggleLabels>;
    protected readonly mode: _angular_core.WritableSignal<ThemeMode>;
    protected readonly options: _angular_core.Signal<ButtonToggleOption<ThemeMode>[]>;
    protected setMode(mode: ThemeMode): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ThemeToggle, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<ThemeToggle, "omm-theme-toggle", never, { "labels": { "alias": "labels"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

/**
 * Displays a native HTML `<dialog>` confirmation prompt and resolves
 * a promise with the user's choice (`true` for confirm, `false` for reject).
 */
declare class ConfirmService {
    private translate;
    /**
     * Shows a modal confirmation dialog and returns a promise that resolves to the user's choice.
     * @param message - Body text displayed inside the dialog.
     * @param title - Optional heading shown above the message.
     * @param confirmLabel - Custom label for the confirm button (defaults to translated "Confirm").
     * @param rejectLabel - Custom label for the reject button (defaults to translated "Reject").
     * @returns `true` if the user confirmed, `false` otherwise.
     */
    confirm(message: string, title?: string, confirmLabel?: string, rejectLabel?: string): Promise<boolean>;
    /**
     * Like `confirm`, but supports an optional checkbox rendered above the buttons.
     * Returns both the confirm result and the checkbox state.
     */
    confirmWithOption(message: string, opts?: {
        title?: string;
        confirmLabel?: string;
        rejectLabel?: string;
        optionLabel?: string;
        optionDefault?: boolean;
        danger?: boolean;
    }): Promise<{
        confirmed: boolean;
        optionChecked: boolean;
    }>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ConfirmService, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<ConfirmService>;
}

type ToastType$1 = 'success' | 'error' | 'info' | 'warning';
interface ToastOptions {
    duration?: number;
    sticky?: boolean;
    hostElement?: Element;
}

type ToastType = 'info' | 'warning' | 'error';
/**
 * Creates transient toast notifications by injecting DOM elements.
 * Supports info, warning, and error types with configurable duration or sticky dismissal.
 */
declare class ToastService {
    /**
     * Displays a toast notification.
     * @param message - The text to show.
     * @param type - Visual style: `'info'`, `'warning'`, or `'error'`.
     * @param options - Duration, sticky mode, and host element overrides.
     */
    toast(message: string, type?: ToastType, options?: ToastOptions): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ToastService, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<ToastService>;
}

type Breakpoint = 'phone' | 'tablet' | 'desktop';
declare class EnvironmentService {
    #private;
    readonly breakpoint: _angular_core.WritableSignal<Breakpoint>;
    readonly isTouch: _angular_core.WritableSignal<boolean>;
    readonly virtualKeyboardVisible: _angular_core.WritableSignal<boolean>;
    init(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<EnvironmentService, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<EnvironmentService>;
}

declare class CurrencyInputDirective implements OnInit {
    #private;
    private readonly locale;
    readonly currency: _angular_core.InputSignal<string>;
    protected readonly currencySymbol: _angular_core.Signal<string>;
    private readonly value;
    protected readonly displayValue: _angular_core.WritableSignal<string>;
    protected readonly disabled: _angular_core.WritableSignal<boolean>;
    private readonly focused;
    ngOnInit(): void;
    protected onFocus(): void;
    protected onInput(event: Event): void;
    protected onBlur(): void;
    private formatNumber;
    private getDecimalPlaces;
    private parseInput;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<CurrencyInputDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<CurrencyInputDirective, "input[ommCurrencyInput]", never, { "currency": { "alias": "currency"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class GrowingTextarea {
    #private;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<GrowingTextarea, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<GrowingTextarea, "textarea[ommGrow]", never, {}, {}, never, never, true, never>;
}

type TooltipPosition = 'top' | 'right' | 'bottom' | 'left' | 'block-start' | 'inline-end' | 'block-end' | 'inline-start';
declare class Tooltip {
    #private;
    readonly ommTooltip: _angular_core.InputSignal<string>;
    readonly tipPosition: _angular_core.InputSignal<TooltipPosition | undefined>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<Tooltip, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<Tooltip, "[ommTooltip]", never, { "ommTooltip": { "alias": "ommTooltip"; "required": true; "isSignal": true; }; "tipPosition": { "alias": "tipPosition"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

export { BottomSheet, ButtonToggle, Calendar, Checkbox, CollectionTree, ConfirmService, CurrencyInput, CurrencyInputDirective, Datepicker, DatepickerService, DragSelect, DragSelectItemDirective, EnvironmentService, FileDrop, GrowingTextarea, List, ListItem, ListItemToggle, PinPad, Select, TagsInput, ThemeService, ThemeToggle, ToastService, Tooltip };
export type { Breakpoint, ButtonToggleOption, CalendarDay, CollectionTreeLabels, DragSelectOptions, SelectOption, ThemeMode, ThemeToggleLabels, ToastOptions, ToastType$1 as ToastType, TooltipPosition, TreeNode, WeekdayHeader };
