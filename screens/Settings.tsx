import React, { useCallback } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SettingsItem } from '../components/SettingsItem/SettingsItem';
import {useDispatch} from 'react-redux';
import { colors } from '../utils/colors';
import { clearHistory } from '../store/slice/history';
import { clearSaved } from '../store/slice/saved';

export function Settings() {
  const dispatch = useDispatch();

  const deleteItems = useCallback(async(key: 'history' | 'saved') => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify([]));
      dispatch(key === 'history' ? clearHistory() : clearSaved());
      Alert.alert('History cleared');
    }

    catch (e) {
      console.log(e);

    }
  }, [dispatch]);

  return (
      <View style={styles.container}>
        <SettingsItem 
          name="history"
          title="Clear history"
          subtitle="clears all items from your history"
          icon="trash"
          onPress={deleteItems}
        />
        <SettingsItem 
          name="saved"
          title="Clear saved items"
          subtitle="clears all saved items"
          icon="trash"
          onPress={deleteItems}
        />
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
});
