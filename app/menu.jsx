import {
    StyleSheet,
    Appearance,
    Platform,
    SafeAreaView,
    ScrollView,
    FlatList,
    View,
    Text,
    Image,
    Dimensions,
  } from 'react-native';
  import { Colors } from '@/constants/Colors';
  import { MenuItems } from '../constants/MenuItems';
  import MenuImages from '../constants/MenuImages';
  
  const screenWidth = Dimensions.get('window').width;
  const CARD_WIDTH = screenWidth / 2 - 24;
  
  export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyle(theme);
  
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;
  
    return (
      <Container style={{ flex: 1, backgroundColor: theme.background }}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>☕ Coffee Menu</Text>
        </View>
  
        {/* Menu List */}
        <FlatList
          data={MenuItems}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.container}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={MenuImages[item.id - 1]} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
        />
  
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 Vividora Coffee</Text>
        </View>
      </Container>
    );
  }
  
  function createStyle(theme) {
    return StyleSheet.create({
      container: {
        padding: 12,
        paddingBottom: 80,
      },
      row: {
        justifyContent: 'space-between',
      },
      header: {
        backgroundColor: '#4B3621',
        paddingVertical: 24,
        alignItems: 'center',
      },
      headerText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '700',
        letterSpacing: 1,
      },
      card: {
        backgroundColor: '#fff',
        width: CARD_WIDTH,
        borderRadius: 14,
        overflow: 'hidden',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
        alignItems: 'center',
      },
      image: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
      },
      title: {
        fontSize: 16,
        fontWeight: '700',
        color: '#6F4E37', // rich coffee color
        marginTop: 8,
      },
      description: {
        fontSize: 13,
        color: '#555',
        textAlign: 'center',
        marginHorizontal: 8,
        marginBottom: 10,
      },
      footer: {
        backgroundColor: '#3E2C23',
        padding: 14,
        alignItems: 'center',
      },
      footerText: {
        color: '#fff',
        fontSize: 13,
      },
    });
  }
  