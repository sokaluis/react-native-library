import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import { casas } from '../data/sectionData';
import { ItemSeparator } from '../components/ItemSeparator';
import { globalStyles } from '../theme/appTheme';

export const SectionListScreen = () => {
  return (
    <View style={[globalStyles.globalContainer, styles.sectioContainer]}>
      <SectionList
        sections={casas}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => item + index}
        stickySectionHeadersEnabled
        ListHeaderComponent={() => <Header title="Section List" />}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section }) => (
          <View style={styles.headerContainer}>
            <Header title={section.casa} />
          </View>
        )}
        ListFooterComponent={() => (
          <View style={styles.footer}>
            <Header title={`Total de casas ${casas.length}`} />
          </View>
        )}
        renderSectionFooter={({ section }) => (
          <Header title={`Total de casas ${section.data.length}`} />
        )}
        SectionSeparatorComponent={() => <ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectioContainer: {
    alignSelf: 'flex-start',
  },
  headerContainer: {
    backgroundColor: 'white',
  },
  footer: {
    marginBottom: 70,
  },
});
