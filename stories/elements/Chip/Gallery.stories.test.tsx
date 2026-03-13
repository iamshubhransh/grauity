import {
    CHIP_DARKER_BG_OPTIONS,
    CHIP_STATES,
    CHIP_TYPES,
    CHIP_WITH_BORDER_OPTIONS,
} from 'ui/elements/Chip/constants';

import {
    CHIP_PARITY_COMPONENT_NAME_ALIASES,
    CHIP_PARITY_VARIANT_SNAPSHOTS,
} from './Gallery.stories';

describe('Chip parity metadata', () => {
    it('contains the design-to-code component name mapping', () => {
        expect(CHIP_PARITY_COMPONENT_NAME_ALIASES).toEqual(
            expect.arrayContaining(['Chip', 'System_thunder'])
        );
    });

    it('keeps parity snapshots unique and variant-complete', () => {
        const expectedCombinationsCount =
            CHIP_TYPES.length *
            CHIP_STATES.length *
            CHIP_DARKER_BG_OPTIONS.length *
            CHIP_WITH_BORDER_OPTIONS.length;

        const combinationSnapshots = CHIP_PARITY_VARIANT_SNAPSHOTS.filter(
            (snapshot) => snapshot.label.startsWith('type=')
        );

        expect(combinationSnapshots.length).toBe(expectedCombinationsCount);
        expect(new Set(combinationSnapshots.map((snapshot) => snapshot.id)).size).toBe(
            combinationSnapshots.length
        );
    });
});
