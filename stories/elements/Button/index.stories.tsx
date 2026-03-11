/* eslint-disable no-console */
import React from 'react';
import Button, { ButtonProps } from 'ui/elements/Button';

export const BUTTON_PARITY_COMPONENT_NAME_ALIASES = [
    'Button',
    'System_check-circle',
];

export const BUTTON_PARITY_PARAMETERS = {
    componentName: 'Button',
    designComponentName: 'System_check-circle',
    componentNameAliases: BUTTON_PARITY_COMPONENT_NAME_ALIASES,
};

export default {
    title: 'Elements/Button',
    component: Button,
    excludeStories: /BUTTON_PARITY_.*/,
    parameters: {
        parity: BUTTON_PARITY_PARAMETERS,
    },
};

const Template = (args: ButtonProps) => <Button {...args} />;

const defaultArgs: ButtonProps = {
    variant: 'primary',
    color: 'brand',
    size: 'medium',
    icon: 'sparkle',
    iconSize: '20',
    iconPosition: 'left',
    className: 'my-class',
    disabled: false,
    loading: false,
    style: { color: '' },
    onClick: () => {
        console.log('Button clicked!');
    },
    fullWidth: false,
    children: 'Click Me!',
    type: 'button',
    tooltip: 'button',
    tabIndex: 0,
    onMouseEnter: () => {
        console.log('Mouse entered button');
    },
    onMouseLeave: () => {
        console.log('Mouse left button');
    },
};

export const TypePrimary = Template.bind({});

TypePrimary.args = {
    ...defaultArgs,
};
