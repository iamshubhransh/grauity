import {
    BUTTON_PARITY_COMPONENT_NAME_ALIASES,
    BUTTON_PARITY_PARAMETERS,
    BUTTON_PARITY_VARIANT_SNAPSHOTS,
} from './Gallery.stories';

describe('Button parity metadata', () => {
    it('contains the design-to-code component name mapping', () => {
        expect(BUTTON_PARITY_COMPONENT_NAME_ALIASES).toEqual(
            expect.arrayContaining(['Button', 'System_check-circle'])
        );
        expect(BUTTON_PARITY_PARAMETERS.designComponentName).toBe(
            'System_check-circle'
        );
    });

    it('keeps snapshot ids unique', () => {
        const snapshotIds = BUTTON_PARITY_VARIANT_SNAPSHOTS.map(
            (snapshot) => snapshot.id
        );
        expect(new Set(snapshotIds).size).toBe(snapshotIds.length);
    });

    it('covers all required parity variant values', () => {
        const snapshotTypes = Array.from(
            new Set(BUTTON_PARITY_VARIANT_SNAPSHOTS.map((snapshot) => snapshot.type))
        ).sort();
        expect(snapshotTypes).toEqual(['primary', 'secondary', 'tertiary']);

        const snapshotSubTypes = Array.from(
            new Set(
                BUTTON_PARITY_VARIANT_SNAPSHOTS.map(
                    (snapshot) => snapshot['sub type']
                )
            )
        ).sort();
        expect(snapshotSubTypes).toEqual([
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
        ]);

        const snapshotSizes = Array.from(
            new Set(BUTTON_PARITY_VARIANT_SNAPSHOTS.map((snapshot) => snapshot.size))
        ).sort();
        expect(snapshotSizes).toEqual([
            'extra large',
            'large',
            'medium',
            'small',
        ]);

        const snapshotStates = Array.from(
            new Set(BUTTON_PARITY_VARIANT_SNAPSHOTS.map((snapshot) => snapshot.state))
        ).sort();
        expect(snapshotStates).toEqual([
            'default',
            'filled',
            'focus visible',
            'hover',
            'pressed',
        ]);

        const snapshotDisabledValues = Array.from(
            new Set(
                BUTTON_PARITY_VARIANT_SNAPSHOTS.map((snapshot) => snapshot.isdisabled)
            )
        ).sort();
        expect(snapshotDisabledValues).toEqual(['false', 'true']);

        const snapshotLoadingValues = Array.from(
            new Set(
                BUTTON_PARITY_VARIANT_SNAPSHOTS.map((snapshot) => snapshot.isloading)
            )
        ).sort();
        expect(snapshotLoadingValues).toEqual(['false', 'true']);
    });
});
