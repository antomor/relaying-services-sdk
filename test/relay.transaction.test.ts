import { RelayingServices, SmartWallet } from '../src';
import { MockRelayingServices } from './mock';
import { TransactionConfig, TransactionReceipt } from 'web3-core';
import Expect = jest.Expect;
import {
    MOCK_CONTRACT_ADDRESS,
    MOCK_ADDRESS,
    MOCK_SMART_WALLET_ADDRESS,
    MOCK_TRANSACTION_RECEIPT
} from './constants';

declare const expect: Expect;

describe('Tests for relay transaction', () => {
    let sdk: RelayingServices;

    beforeEach(async () => {
        sdk = new MockRelayingServices();
    });

    it('Should relay transaction successfully', async () => {
        const transaction: TransactionConfig = {
            from: MOCK_ADDRESS,
            to: MOCK_CONTRACT_ADDRESS,
            value: 1
        };
        const smartWallet: SmartWallet = {
            address: MOCK_SMART_WALLET_ADDRESS,
            index: 0,
            deployed: true
        };
        const transactionReceipt: TransactionReceipt =
            await sdk.relayTransaction(transaction, smartWallet, 0);
        expect(transactionReceipt).toBe(MOCK_TRANSACTION_RECEIPT);
    });
});

describe('Tests for smart wallet without being deployed', () => {
    let sdk: RelayingServices;

    it('Should fail to relay transaction', async () => {
        const transaction: TransactionConfig = {
            from: MOCK_ADDRESS,
            to: MOCK_CONTRACT_ADDRESS,
            value: 1
        };
        const smartWallet: SmartWallet = {
            address: MOCK_SMART_WALLET_ADDRESS,
            index: 0,
            deployed: true
        };
        try {
            await sdk.relayTransaction(transaction, smartWallet, 0);
        } catch (error) {
            expect(error.message).toBe(
                `Smart Wallet is not deployed or the address ${smartWallet.address} is not a smart wallet.`
            );
        }
    });
});
