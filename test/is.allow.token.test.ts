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
        sdk.initialize({});
    });

    it('Should check for allowed tokens', async () => {
        try{
            await sdk.isAllowedToken(MOCK_TOKEN_ADDRESS);
        }catch(error){
            fail('The token is not allow')
        }
    });
});