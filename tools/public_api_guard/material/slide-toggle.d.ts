export declare class _MatSlideToggleRequiredValidatorModule {
}

export declare const MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS: InjectionToken<MatSlideToggleDefaultOptions>;

export declare const MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR: Provider;

export declare const MAT_SLIDE_TOGGLE_VALUE_ACCESSOR: any;

export declare class MatSlideToggle extends _MatSlideToggleMixinBase implements OnDestroy, AfterContentInit, ControlValueAccessor, CanDisable, CanColor, HasTabIndex, CanDisableRipple {
    _animationMode?: string | undefined;
    _inputElement: ElementRef<HTMLInputElement>;
    _thumbBarEl: ElementRef;
    _thumbEl: ElementRef;
    ariaLabel: string | null;
    ariaLabelledby: string | null;
    readonly change: EventEmitter<MatSlideToggleChange>;
    checked: boolean;
    defaults: MatSlideToggleDefaultOptions;
    readonly dragChange: EventEmitter<void>;
    id: string;
    readonly inputId: string;
    labelPosition: 'before' | 'after';
    name: string | null;
    required: boolean;
    readonly toggleChange: EventEmitter<void>;
    constructor(elementRef: ElementRef, _focusMonitor: FocusMonitor, _changeDetectorRef: ChangeDetectorRef, tabIndex: string,
    _ngZone: NgZone, defaults: MatSlideToggleDefaultOptions, _animationMode?: string | undefined, _dir?: Directionality);
    _onChangeEvent(event: Event): void;
    _onInputClick(event: Event): void;
    _onLabelTextChange(): void;
    focus(options?: FocusOptions): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    toggle(): void;
    writeValue(value: any): void;
    static ngAcceptInputType_checked: boolean | string;
    static ngAcceptInputType_disableRipple: boolean | string;
    static ngAcceptInputType_disabled: boolean | string;
    static ngAcceptInputType_required: boolean | string;
}

export declare class MatSlideToggleChange {
    checked: boolean;
    source: MatSlideToggle;
    constructor(
    source: MatSlideToggle,
    checked: boolean);
}

export interface MatSlideToggleDefaultOptions {
    disableDragValue?: boolean;
    disableToggleValue?: boolean;
}

export declare class MatSlideToggleModule {
}

export declare class MatSlideToggleRequiredValidator extends CheckboxRequiredValidator {
}
