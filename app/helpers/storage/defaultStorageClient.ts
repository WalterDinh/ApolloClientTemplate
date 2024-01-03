import AsyncStorage from '@react-native-async-storage/async-storage';
import ResponseModel from '~models/common/ResponseModel';
import { StorageClient } from './storageClient';

export class DefaultStorageClient implements StorageClient {
    getString = async (key: string): Promise<ResponseModel<string>> => {
        const data = await AsyncStorage.getItem(key);
        return ResponseModel.createSuccess(data);
    };

    putString = async (
        key: string,
        value: string,
    ): Promise<ResponseModel<boolean>> => {
        await AsyncStorage.setItem(key, value);
        return ResponseModel.createSuccess(true);
    };

    delete = async (key: string): Promise<ResponseModel<boolean>> => {
        await AsyncStorage.removeItem(key);
        return ResponseModel.createSuccess(true);
    };

    clean = async (): Promise<ResponseModel<boolean>> => {
        await AsyncStorage.clear();
        return ResponseModel.createSuccess(true);
    };
}
