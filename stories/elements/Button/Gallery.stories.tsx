import React from 'react';
import Button, { ButtonProps } from 'ui/elements/Button';
import Table from 'ui/elements/Table';

import TokenBlock from '../../helper-components/TokenBlock';

type ButtonParityType = Extract<ButtonProps['variant'], 'primary' | 'secondary' | 'tertiary'>;

type ButtonParitySize = 'small' | 'medium' | 'large' | 'extra large';

type ButtonParityState =
    | 'default'
    | 'filled'
    | 'focus visible'
    | 'hover'
    | 'pressed';

type ButtonParitySubType =
    | 'brand'
    | 'error'
    | 'invert neutral'
    | 'neutral'
    | 'purple'
    | 'static black'
    | 'static white'
    | 'success'
    | 'warning'
    | 'yellow';

type ButtonParityFlag = 'false' | 'true';

export type ButtonParitySnapshot = {
    id: string;
    label: string;
    type: ButtonParityType;
    'sub type': ButtonParitySubType;
    size: ButtonParitySize;
    state: ButtonParityState;
    isdisabled: ButtonParityFlag;
    isloading: ButtonParityFlag;
};

const BUTTON_PARITY_TYPES: ButtonParityType[] = [
    'primary',
    'secondary',
    'tertiary',
];

const BUTTON_PARITY_SIZES: ButtonParitySize[] = [
    'small',
    'medium',
    'large',
    'extra large',
];

const BUTTON_PARITY_STATES: ButtonParityState[] = [
    'default',
    'filled',
    'focus visible',
    'hover',
    'pressed',
];

const BUTTON_PARITY_SUB_TYPES: ButtonParitySubType[] = [
    'brand',
    'error',
    'invert neutral',
    'neutral',
    'purple',
    'static black',
    'static white',
    'success',
    'warning',
    'yellow',
];

const BUTTON_PARITY_FLAGS: ButtonParityFlag[] = ['false', 'true'];

const BUTTON_PARITY_BASE_SNAPSHOT: Omit<ButtonParitySnapshot, 'id' | 'label'> = {
    type: 'primary',
    'sub type': 'brand',
    size: 'medium',
    state: 'default',
    isdisabled: 'false',
    isloading: 'false',
};

const slugify = (value: string) => value.replace(/\s+/g, '-');

export const BUTTON_PARITY_COMPONENT_NAME_ALIASES = [
    'Button',
    'System_check-circle',
];

export const BUTTON_PARITY_VARIANT_SNAPSHOTS: ButtonParitySnapshot[] = [
    ...BUTTON_PARITY_TYPES.map((type) => ({
        ...BUTTON_PARITY_BASE_SNAPSHOT,
        id: `type-${type}`,
        label: `type ${type}`,
        type,
    })),
    ...BUTTON_PARITY_SUB_TYPES.map((subType) => ({
        ...BUTTON_PARITY_BASE_SNAPSHOT,
        id: `sub-type-${slugify(subType)}`,
        label: `sub type ${subType}`,
        'sub type': subType,
    })),
    ...BUTTON_PARITY_SIZES.map((size) => ({
        ...BUTTON_PARITY_BASE_SNAPSHOT,
        id: `size-${slugify(size)}`,
        label: `size ${size}`,
        size,
    })),
    ...BUTTON_PARITY_STATES.map((state) => ({
        ...BUTTON_PARITY_BASE_SNAPSHOT,
        id: `state-${slugify(state)}`,
        label: `state ${state}`,
        state,
    })),
    ...BUTTON_PARITY_FLAGS.map((isdisabled) => ({
        ...BUTTON_PARITY_BASE_SNAPSHOT,
        id: `isdisabled-${isdisabled}`,
        label: `isdisabled ${isdisabled}`,
        isdisabled,
    })),
    ...BUTTON_PARITY_FLAGS.map((isloading) => ({
        ...BUTTON_PARITY_BASE_SNAPSHOT,
        id: `isloading-${isloading}`,
        label: `isloading ${isloading}`,
        isloading,
    })),
];

export const BUTTON_PARITY_PARAMETERS = {
    componentName: 'Button',
    designComponentName: 'System_check-circle',
    componentNameAliases: BUTTON_PARITY_COMPONENT_NAME_ALIASES,
    payloadSnapshots: BUTTON_PARITY_VARIANT_SNAPSHOTS,
};

const BUTTON_PARITY_SUB_TYPE_TO_COLOR: Record<ButtonParitySubType, ButtonProps['color']> = {
    brand: 'brand',
    error: 'error',
    'invert neutral': 'neutral',
    neutral: 'neutral',
    purple: 'purple',
    'static black': 'neutral',
    'static white': 'neutral',
    success: 'success',
    warning: 'warning',
    yellow: 'yellow',
};

const BUTTON_PARITY_SIZE_TO_COMPONENT_SIZE: Record<ButtonParitySize, ButtonProps['size']> = {
    small: 'small',
    medium: 'medium',
    large: 'large',
    'extra large': 'extra-large',
};

const BUTTON_PARITY_STATE_STYLE_OVERRIDES: Record<ButtonParityState, React.CSSProperties> = {
    default: {},
    filled: {
        boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.02)',
    },
    'focus visible': {
        outline: '3px solid var(--border-subtle-primary-default, #99a3ff)',
    },
    hover: {
        filter: 'brightness(0.96)',
    },
    pressed: {
        transform: 'scale(0.95)',
    },
};

const BUTTON_PARITY_SUB_TYPE_STYLE_OVERRIDES: Partial<
    Record<ButtonParitySubType, React.CSSProperties>
> = {
    'static black': {
        color: 'var(--text-emphasis-primary-default, #20253a)',
    },
    'static white': {
        color: 'var(--text-emphasis-white-default, #ffffff)',
        background: 'var(--bg-emphasis-primary-default, #20253a)',
    },
};

const mapParitySnapshotToButtonProps = (
    snapshot: ButtonParitySnapshot
): ButtonProps => ({
    variant: snapshot.type,
    color: BUTTON_PARITY_SUB_TYPE_TO_COLOR[snapshot['sub type']],
    size: BUTTON_PARITY_SIZE_TO_COMPONENT_SIZE[snapshot.size],
    disabled: snapshot.isdisabled === 'true',
    loading: snapshot.isloading === 'true',
    style: {
        ...BUTTON_PARITY_STATE_STYLE_OVERRIDES[snapshot.state],
        ...BUTTON_PARITY_SUB_TYPE_STYLE_OVERRIDES[snapshot['sub type']],
    },
});

export default {
    title: 'Elements/Button',
    component: Button,
    tags: ['!autodocs'],
    parameters: {
        parity: BUTTON_PARITY_PARAMETERS,
    },
};

const Template = (args: ButtonProps) => (
    <Table.Table borderAround={false} borderVertical={false}>
        <Table.TableHead highlightHeaders={false}>
            <Table.TableRow condensed>
                <Table.TableHeadingCell align="left">
                    Snapshot
                </Table.TableHeadingCell>
                <Table.TableHeadingCell align="left">
                    Button
                </Table.TableHeadingCell>
            </Table.TableRow>
        </Table.TableHead>
        <Table.TableBody>
            {BUTTON_PARITY_VARIANT_SNAPSHOTS.map((snapshot) => {
                const { id, label } = snapshot;
                const buttonProps = mapParitySnapshotToButtonProps(snapshot);

                return (
                    <Table.TableRow condensed key={id}>
                        <Table.TableDataCell>
                            <TokenBlock copy>{label}</TokenBlock>
                        </Table.TableDataCell>
                        <Table.TableDataCell>
                            <Button
                                {...args}
                                {...buttonProps}
                                style={{
                                    ...(args?.style || {}),
                                    ...(buttonProps.style || {}),
                                }}
                            >
                                {args?.children}
                            </Button>
                        </Table.TableDataCell>
                    </Table.TableRow>
                );
            })}
        </Table.TableBody>
    </Table.Table>
);

const defaultArgs: ButtonProps = {
    children: 'Button',
    icon: 'check-circle',
    variant: 'primary',
    color: 'brand',
    size: 'medium',
    onClick: () => {},
};

export const StateDefault = Template.bind({});

StateDefault.args = {
    ...defaultArgs,
};
