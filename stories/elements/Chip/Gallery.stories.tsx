import React from 'react';
import Chip, { ChipProps } from 'ui/elements/Chip';
import {
    CHIP_DARKER_BG_OPTIONS,
    CHIP_STATES,
    CHIP_TYPES,
    CHIP_WITH_BORDER_OPTIONS,
} from 'ui/elements/Chip/constants';
import Table from 'ui/elements/Table';

import TokenBlock from '../../helper-components/TokenBlock';

type ChipParitySnapshot = Pick<
    ChipProps,
    | 'type'
    | 'state'
    | 'darkerbg'
    | 'withborder'
    | 'size'
    | 'rounded'
    | 'icon'
    | 'iconPosition'
> & {
    id: string;
    label: string;
};

export const CHIP_PARITY_COMPONENT_NAME_ALIASES = ['Chip', 'System_thunder'];

const variantCombinations = CHIP_TYPES.flatMap((type) =>
    CHIP_STATES.flatMap((state) =>
        CHIP_DARKER_BG_OPTIONS.flatMap((darkerbg) =>
            CHIP_WITH_BORDER_OPTIONS.map((withborder) => ({
                type,
                state,
                darkerbg,
                withborder,
            }))
        )
    )
);

export const CHIP_PARITY_VARIANT_SNAPSHOTS: ChipParitySnapshot[] = [
    ...variantCombinations.map(
        ({ type, state, darkerbg, withborder }): ChipParitySnapshot => ({
            id: `${type}-${state}-${darkerbg}-${withborder}`,
            label: `type=${type}, state=${state}, darkerbg=${darkerbg}, withborder=${withborder}`,
            type,
            state,
            darkerbg,
            withborder,
            size: 'medium',
            rounded: false,
            icon: null,
            iconPosition: 'left',
        })
    ),
    {
        id: 'icon-left',
        label: 'icon left',
        type: 'brand',
        state: 'default',
        darkerbg: false,
        withborder: false,
        size: 'medium',
        rounded: false,
        icon: 'thunder',
        iconPosition: 'left',
    },
    {
        id: 'icon-right',
        label: 'icon right',
        type: 'brand',
        state: 'default',
        darkerbg: false,
        withborder: false,
        size: 'medium',
        rounded: false,
        icon: 'thunder',
        iconPosition: 'right',
    },
];

export default {
    title: 'Elements/Chip',
    component: Chip,
    tags: ['!autodocs'],
    parameters: {
        parity: {
            componentName: 'Chip',
            designComponentName: 'System_thunder',
            componentNameAliases: CHIP_PARITY_COMPONENT_NAME_ALIASES,
            payloadSnapshots: CHIP_PARITY_VARIANT_SNAPSHOTS,
        },
    },
};

const Template = (args: ChipProps) => (
    <Table.Table borderAround={false} borderVertical={false}>
        <Table.TableHead highlightHeaders={false}>
            <Table.TableRow condensed>
                <Table.TableHeadingCell align="left">
                    Chip variant
                </Table.TableHeadingCell>
                <Table.TableHeadingCell align="left">
                    Chip
                </Table.TableHeadingCell>
            </Table.TableRow>
        </Table.TableHead>
        <Table.TableBody>
            {CHIP_PARITY_VARIANT_SNAPSHOTS.map(({ id, label, ...snapshot }) => {
                return (
                    <Table.TableRow condensed key={id}>
                        <Table.TableDataCell>
                            <TokenBlock copy>{label}</TokenBlock>
                        </Table.TableDataCell>
                        <Table.TableDataCell>
                            <Chip {...args} {...snapshot}>
                                Chip {snapshot.type}
                            </Chip>
                        </Table.TableDataCell>
                    </Table.TableRow>
                );
            })}
        </Table.TableBody>
    </Table.Table>
);

const defaultArgs: ChipProps = {
    type: 'brand',
    state: 'default',
    darkerbg: false,
    withborder: false,
    size: 'medium',
    textColor: null,
    className: 'chip',
    backgroundColor: null,
    borderColor: null,
    rounded: false,
};

export const Gallery = Template.bind({});

Gallery.args = {
    ...defaultArgs,
};
