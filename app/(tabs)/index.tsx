import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated, useWindowDimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

const SLIDE_INTERVAL = 6000; // 6 seconds

export default function HomeScreen() {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
  const images = [
    require('@/assets/images/veg1.jpg'),
    require('@/assets/images/veg2.jpg'),
    require('@/assets/images/veg3.jpg'),
    require('@/assets/images/veg4.jpg'),
  ];

  const captions = [
    'Nature’s healing at your fingertips',
    'Explore vibrant herbal solutions today',
    'Harness plant power for wellness',
    'Your journey to natural health starts'
  ];

  const [index, setIndex] = useState(0);
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }).start();
    const interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(fadeAnim, { toValue: 0, duration: 500, useNativeDriver: true }),
        Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
      ]).start();
      setIndex(prev => (prev + 1) % images.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [fadeAnim]);

  // Responsive font size: 8% of screen width, clamped between 20 and 36
  const fontSize = Math.min(Math.max(SCREEN_WIDTH * 0.08, 20), 36);

  return (
    <View style={[styles.container, { width: SCREEN_WIDTH, height: SCREEN_HEIGHT }]}>
      <Animated.Image
        source={images[index]}
        style={[styles.image, { width: SCREEN_WIDTH, height: SCREEN_HEIGHT, opacity: fadeAnim }]}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <ThemedText style={[styles.caption, { fontSize }]} numberOfLines={2} adjustsFontSizeToFit>
          {captions[index]}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  caption: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '600',
  },
});
