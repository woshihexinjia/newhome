declare const TStepWizard: ({
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        stepData: {
            type: import('vue').PropType<import('./src/stepWizard').columnProps[]>;
            default: () => never[];
            required: true;
        };
        successTitle: {
            type: StringConstructor;
            default: string;
        };
        lastBtnTitle: {
            type: StringConstructor;
            default: string;
        };
        active: {
            type: NumberConstructor;
            default: number;
            required: true;
        };
        isShowLastSuccess: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onComplete?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        complete: (...args: any[]) => void;
    }, import('vue').PublicProps, {
        stepData: import('./src/stepWizard').columnProps[];
        successTitle: string;
        lastBtnTitle: string;
        active: number;
        isShowLastSuccess: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        stepData: {
            type: import('vue').PropType<import('./src/stepWizard').columnProps[]>;
            default: () => never[];
            required: true;
        };
        successTitle: {
            type: StringConstructor;
            default: string;
        };
        lastBtnTitle: {
            type: StringConstructor;
            default: string;
        };
        active: {
            type: NumberConstructor;
            default: number;
            required: true;
        };
        isShowLastSuccess: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onComplete?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        stepData: import('./src/stepWizard').columnProps[];
        successTitle: string;
        lastBtnTitle: string;
        active: number;
        isShowLastSuccess: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    stepData: {
        type: import('vue').PropType<import('./src/stepWizard').columnProps[]>;
        default: () => never[];
        required: true;
    };
    successTitle: {
        type: StringConstructor;
        default: string;
    };
    lastBtnTitle: {
        type: StringConstructor;
        default: string;
    };
    active: {
        type: NumberConstructor;
        default: number;
        required: true;
    };
    isShowLastSuccess: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onComplete?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    complete: (...args: any[]) => void;
}, string, {
    stepData: import('./src/stepWizard').columnProps[];
    successTitle: string;
    lastBtnTitle: string;
    active: number;
    isShowLastSuccess: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<string, (_: {}) => any>>;
}) & import('vue').Plugin) & Record<string, any>;
export default TStepWizard;
