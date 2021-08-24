import { RelayingServices } from '../src';
import { MockRelayingServices } from './mock';
import Expect = jest.Expect;
import {
    MOCK_TOKEN_ADDRESS
} from './constants';

declare const expect: Expect;

describe('Tests for is allow token', () => {
    let sdk: RelayingServices;

    beforeEach(async () => {
        sdk = new MockRelayingServices();
    });

    it('Should run is allow token', async () => {
        await sdk.isAllowedToken(MOCK_TOKEN_ADDRESS);
    });
});