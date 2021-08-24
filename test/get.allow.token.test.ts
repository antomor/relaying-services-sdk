import { RelayingServices } from '../src';
import { MockRelayingServices } from './mock';
import Expect = jest.Expect;

declare const expect: Expect;

describe('Tests for get allow token', () => {
    let sdk: RelayingServices;

    beforeEach(async () => {
        sdk = new MockRelayingServices();
    });

    it('Should run get allow token', async () => {
        let allowTokens = await sdk.getAllowedTokens();
        console.log(allowTokens);
    });
});