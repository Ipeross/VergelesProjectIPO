# VergelesProject IPO (Vergeles EduTrack) 📱

## Descripción

Proyecto para aplicación del centro IES Zaidin Vergeles. Permite monitorear las notas de los alumnos del centro en formato de gráfico de barras.

## Tecnologías Utilizadas

- **React Native**: Como Framework de la aplicación para desarrollar interfaces de usuario que se rendericen de forma nativa.
- **Node.js**: Para hacer la prueba de extracción de datos, simulando una base de datos.
- **Vitory Native**: Para la creación de las gráficas de desempeño de cada alumno.
- **Zustand**: Para la gestión de contexto de la aplicación de manera eficiente, permitiendo un manejo centralizado de la información de cada alumno.
- **React Navigation**: Para la navegación entre pantallas. TabBar principal de HomeScreen y ChartScreen y Stack Screen para la navegación dentro del Chart y su Buscador.
- **React Native Paper**: Uso de componentes para la mejora de apariencia de la aplicación.
- **Hooks de React**: Uso de hooks como useFocusEffect, useCallback para un fondo que cambia de color de manera eficiente y no en segundo plano.
  
## Funcionalidad ⚡

- Consta de 2 pantallas principales; HomeScreen y el "PerformanceScreen" (Realmente PerformanceSearchScreen).
- HomeScreen contiene el título de la aplicación y un Card con una imagen del centro. (Facilmente escalable ya que se puede añadir iformación de los alumnos gracias a la store)
- Fondo animado que cambia de color. Colores, velocidad, "patron de movimiento" facilmente modificable en el código.
- En el Tab del PerformanceScreen encontramos un menú de busqueda(PerformanceSearchScreen), con los alumnos de la REST API. Filtra por nombre los alumnos. (Se podría modificar para que busque por ID por ejemplo)
- Esta screen forma parte de una navegación 'anidada' en la que se puede acceder a un gráfico con las notas de cada alumno(PermormanceChartScreen) clicando sobre su nombre.
- El chart es un componente reutilizable que obtiene la información de las notas de cada alumno, y se modifica segun los datos.
- Utilizo una store de Zustand para manejar un contexto con la información de los alumnos.
- Clase ApiService para las peticiones a la API REST. Solo se utiliza el getStudents aunque hay otro metodo getPcs para sus equipos informaticos.



This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
