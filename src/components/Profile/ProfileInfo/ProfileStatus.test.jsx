import React from "react";
import {create} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('status from props should be in props', () => {
        const component = create(<ProfileStatus status='omegalul'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('omegalul');
    });

    test('status from props should be in props', () => {
        const component = create(<ProfileStatus status='omegalul'/>);
        const instance = component.getInstance()
        expect(instance.state.text).toBe('omegalul');
    });
})
