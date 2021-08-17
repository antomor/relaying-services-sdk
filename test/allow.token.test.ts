import { RelayingServices } from '../src';
import { MockRelayingServices } from './mock';
import Expect = jest.Expect;
import {
    MOCK_ACCOUNT,
    MOCK_TOKEN_ADDRESS
} from './constants';

declare const expect: Expect;

describe('Tests for allow token', () => {
    let sdk: RelayingServices;

    beforeEach(async () => {
        sdk = new MockRelayingServices();
    });

    it('Should run allow token', async () => {
        await sdk.allowToken(MOCK_TOKEN_ADDRESS, MOCK_ACCOUNT);
    });
    it('Should run is allow token', async () => {
        await sdk.isAllowedToken(MOCK_TOKEN_ADDRESS);
    });
    it('Should run get allow token', async () => {
        let allowTokens = await sdk.getAllowedTokens();
        console.log(allowTokens);
    });
});