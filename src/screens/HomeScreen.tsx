import {
  StyleSheet,
  useWindowDimensions,
  Text,
  Image,
  View,
} from 'react-native';
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia';
import {
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { useCallback, useEffect } from 'react';
import { useStore } from '../store/store';
import { useFocusEffect } from '@react-navigation/native';
import { Card } from 'react-native-paper';



export default function HomeScreen() {
  const { students, pcs, loadStudents, loadPcs } = useStore();
  const { width, height } = useWindowDimensions();

  const purpleShades = ['#EAE6F2', '#DCCEF7', '#CDB8F2', '#BFA1EB', '#B08AE3'];

  const leftColor = useSharedValue(purpleShades[0]);
  const rightColor = useSharedValue(purpleShades[2]);

  useEffect(() => {
    loadStudents();
    loadPcs();
  }, []);

  useFocusEffect(
    useCallback(() => {
      console.log('Pantalla activa: animación en marcha 🚀');
      leftColor.value = withRepeat(
        withTiming(purpleShades[4], { duration: 8000 }),
        -1,
        true
      );
      rightColor.value = withRepeat(
        withTiming(purpleShades[1], { duration: 8000 }),
        -1,
        true
      );

      return () => {
        console.log('Pantalla inactiva: animación pausada ⏸');
        leftColor.value = leftColor.value;
        rightColor.value = rightColor.value;
      };
    }, [])
  );

  const colors = useDerivedValue(() => {
    return [leftColor.value, rightColor.value];
  }, []);

  return (
    <>
      <Canvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient start={vec(0, 0)} end={vec(width, height)} colors={colors} />
        </Rect>
      </Canvas>

      <View style={styles.headerContainer}>
        <Card style={styles.cardHeader}>
          <Card.Title
            title="Vergeles EduTrack"
            subtitle="Seguimiento de alumnos y PCs"
            titleStyle={styles.cardTitle}
            subtitleStyle={styles.cardSubtitle}
            left={() => (
              <Image
                source={require('../../assets/izvlogo.png')}
                style={styles.cardImage}
              />
            )}
          />
        </Card>

        <Card style={{width: '100%'}}>
          <Card.Cover source={{ uri: 'https://www.elindependientedegranada.es/sites/default/files/styles/large/public/ciudadania/instalaciones.jpg?itok=Z7F6FJOS' }} />
        </Card>

      </View>




    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 40,
    left: '5%',
    right: '5%',
    alignItems: 'center',
  },
  cardHeader: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    justifyContent: 'center',
    marginBottom: 40
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5D3A9B',
    marginLeft: 50
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#8F80BC',
    marginLeft: 50
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 1,
    marginTop: 10
  },
});
