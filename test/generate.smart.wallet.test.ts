import { RelayingServices } from '../src';
import { MockRelayingServices, Web3Mock } from './mock';
import Expect = jest.Expect;
import {
    MOCK_SMART_WALLET_ADDRESS,
} from './constants';

declare const expect: Expect;

describe('Tests for is generate smart wallet', () => {
    let sdk: RelayingServices;

    beforeEach(async () => {
        sdk = new MockRelayingServices();
    });

    it('Should return is deployed smart wallet', async () => {
        const smallWalletIndex:number = 0;
        const smartWallet = await sdk.generateSmartWallet(smallWalletIndex);
        expect(smartWallet.deployed).toBeTruthy();
        expect(smartWallet.address).toEqual(MOCK_SMART_WALLET_ADDRESS);
        expect(smartWallet.index).toEqual(smallWalletIndex);
    });
});
