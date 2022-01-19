# react-native-customized-box · ![Version](https://img.shields.io/npm/v/react-native-customized-box?label=version) <a href="https://img.shields.io/npm/l/react-native">![License](https://img.shields.io/npm/l/react-native-customized-box)</a> <a href="https://img.shields.io/readthedocs/react">![Downloads](https://img.shields.io/npm/dw/react-native-customized-box)</a> <a href="https://img.shields.io/badge/Github-hirishu10-lightgrey">![DocsPassing](https://img.shields.io/badge/Github-hirishu10-lightgrey)</a>

<!-- React Native Customized Box -->

React Native Customized Box is very simple and easy to use.

<!-- Contents -->

# Content

- [Getting started](#getting-started)
- [Overview](#overview)
- [Method and Props Configuration](#method-and-props-configuration)
- [Author](#author)
- [License](#license)
<!-- Contents -->

<!-- Getting Started -->

# Getting started

## Prerequisites

- Node (version 12 or greater).
- Yarn (version 1.5 or greater).
- React, React-Native should be installed
- A fork of the repo (for any contributions).

## Installation

> Using NPM

```bash
npm i --save react-native-customized-box
```

> Using Yarn

```bash
yarn add react-native-customized-box
```

<!-- Getting Started -->

<!-- overview -->

# Overview

#### 📖 Below we provide examples with code how to use!

```jsx
import CustomBox from "react-native-customized-box";
```

#### ► Example - 1

> → Box fully customizable

|                                                                                             |                                                                                             |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
| <img src="https://raw.githubusercontent.com/hirishu10/first-file/main/1.png" width="350" /> | <img src="https://raw.githubusercontent.com/hirishu10/first-file/main/6.png" width="350" /> |

> **Code Snippet ↓**

```jsx
      <CustomBox
        placeholder={"Username"}
        boxColor={"dodgerblue"}
        focusColor={"#33ff00"}
        boxStyle={{ borderRadius: 40, borderWidth: 2 }}
      />
      <CustomBox
        placeholder={"Password"}
        toggle={true}
        boxColor={"dodgerblue"}
        focusColor={"#33ff00"}
        boxStyle={{ borderRadius: 40, borderWidth: 2, borderStyle: "dotted" }}
      />
```

<!--  -->

#### ► Example - 2

> → Toggle feature enabled

|                                                                                             |                                                                                             |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
| <img src="https://raw.githubusercontent.com/hirishu10/first-file/main/2.png" width="350" /> | <img src="https://raw.githubusercontent.com/hirishu10/first-file/main/3.png" width="350" /> |

> **Code Snippet ↓**

```jsx
      <CustomBox placeholder={"Username"} />
      <CustomBox placeholder={"Password"} toggle={true} />
```

<!--  -->

#### ► Example - 3

> → Box color change while focusing

|                                                                                             |                                                                                             |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
| <img src="https://raw.githubusercontent.com/hirishu10/first-file/main/4.png" width="350" /> | <img src="https://raw.githubusercontent.com/hirishu10/first-file/main/5.png" width="350" /> |

> **Code Snippet ↓**

```jsx
      <CustomBox
        placeholder={"Username"}
        boxColor={"dodgerblue"}
        focusColor={"#33ff00"}
      />
      <CustomBox
        placeholder={"Password"}
        toggle={true}
        boxColor={"dodgerblue"}
        focusColor={"#33ff00"}
      />
```

<!--  -->

#### ► Example - 4

> → Label and Required option enable to give error on condition

|                                                                                             |                                                                                             |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
| <img src="https://raw.githubusercontent.com/hirishu10/first-file/main/8.png" width="350" /> | <img src="https://raw.githubusercontent.com/hirishu10/first-file/main/9.png" width="350" /> |

> **Code Snippet ↓**

```jsx
      <CustomBox
        placeholder={"Username"}
        boxColor={"dodgerblue"}
        focusColor={"#33ff00"}
        boxStyle={{ borderRadius: 40, borderWidth: 2, borderStyle: "dashed" }}
        inputStyle={{ textAlign: "center", fontWeight: "bold", color: "red" }}
        labelConfig={{
          text: "Username",
          style: {
            color: "#1f5212",
            fontWeight: "bold",
          },
        }}
        requiredConfig={{
          text: "*This is Required",
        }}
      />
      <CustomBox
        placeholder={"Password"}
        toggle={true}
        boxColor={"dodgerblue"}
        focusColor={"#33ff00"}
        boxStyle={{ borderRadius: 40, borderWidth: 2 }}
        inputStyle={{ fontWeight: "bold", color: "red" }}
        labelConfig={{
          text: "Password",
          style: {
            color: "#0e0e21",
            fontWeight: "bold",
          },
        }}
        requiredConfig={{
          text: <Text>*Add Custom Message and decoreate your own</Text>,
          style: { textAlign: "center", textDecorationLine: "underline" },
        }}
      />
```

<!-- overview -->

<!-- method and props  -->

# Method and Props Configuration

🔧 Below are the method which you can use to customized the Box in your style

| Method           |   Type   | Description                                                                                                                                                                           |
| :--------------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `width`          |  Number  | This is not \*Mandatory By `default` set to `300` but you can change and add your own                                                                                                 |
| `height`         |  Number  | This is not \*Mandatory By `default` set to `50` but you can change and add your own                                                                                                  |
| `placeholder`    |  String  | Provide text for the Placeholder                                                                                                                                                      |
| `toggle`         | Boolean  | Provide `True` to display `SHOW/HIDE` by **default** set to `False`                                                                                                                   |
| `boxColor`       |  String  | Provide Color for the _`InputBox`_ by `default` color set to `silver`                                                                                                                 |
| `focusColor`     |  String  | Provide Color for change the box color while focusing the _`InputBox`_                                                                                                                |
| `boxStyle`       |  Object  | Provide custom `style`/decoration for the _`InputBox`_                                                                                                                                |
| `inputStyle`     |  Object  | Provide custom `style`/decoration for the Text inside the _`InputBox`_                                                                                                                |
| `labelConfig`    |  Object  | **`text:`** Provide text for the Label (String) </br> **`style:`** Provide custom style for the Label (Object)                                                                        |
| `requiredConfig` |  Object  | **`text:`** Provide custom mandatory message to display like(\*This is Required) you can add your own (String) </br> **`style:`** Provide custom style for the required text (Object) |
| `values`         |  String  | You can use this to set predefine values or get the current _`InputBox`_ value                                                                                                        |
| `onChangeText`   | Function | Function like `onChangeText`                                                                                                                                                          |

<!-- method and props  -->

<!-- author  -->

# Author

#### Thank You All 🙏🏻

Made with 🖤 by

**Author** : [Rishu Chowdhary](https://github.com/hirishu10)

**Email** : hi.10rishu@gmail.com

<!-- author  -->

<!-- licesnce  -->

# License

#### MIT License 📄

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/hirishu10/react-native-customized-box/blob/main/LICENSE) file for details

<!-- licesnce  -->
