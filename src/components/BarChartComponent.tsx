import { Dimensions, StyleSheet, View } from "react-native";
import { Bar, CartesianChart } from "victory-native"
import { LinearGradient, useFont, vec } from "@shopify/react-native-skia";
import { useStore } from "../store/store";
import { useEffect } from "react";
import { Grade } from "../entities/GradeEntity";
const inter = require("../../fonts/inter-medium.ttf");

const { width, height } = Dimensions.get('window');

interface ChartInfo {
  studentName: String
  studentId: String
  grades: Grade[]
}

export default function BarChartComponent({studentName, studentId, grades} : ChartInfo) {

  const font = useFont(inter, 10)

  if (!Array.isArray(grades)) {

  }

  const data = Array.from({ length: grades.length }, (_, index) => ({
    subject: `${grades.at(index)?.subject}`,
    grades: Math.floor(Math.random() * 10) + 1
  }))

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <CartesianChart
          data={data}
          xKey="subject"
          yKeys={["grades"]}
          domainPadding={{ left: 50, right: 50, top: 30}}
          padding={{bottom: 50}}
          yAxis={[
            {
              yKeys: ["grades"],
              tickValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              tickCount: 10,
              domain: [0.9, 10],
              labelColor: "#000000",
              lineColor: "gray",
              axisSide: "left",
              font,
            }
          ]}
          xAxis={{
            font,
            labelColor: "#000000",
            labelOffset: 2,
            labelRotate: 60,
            axisSide: "bottom",
          }}
          axisOptions={{
            font,
          }}
        >
          {({ points, chartBounds }) => (
            <Bar
              barWidth={15}
              chartBounds={chartBounds}
              points={points.grades}
              roundedCorners={{
                topLeft: 5,
                topRight: 5,
              }}
            >
              <LinearGradient
                start={vec(0, 0)}
                end={vec(0, 400)}
                colors={["#a78bfa", "#a78bfa50"]}
              />
            </Bar>
          )}
        </CartesianChart>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: height * 0.25,
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: width * 0.85,
    height: height * 0.4,
  },
});