import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const GetStarted = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={512}
    height={512}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M18 12a2 2 0 0 0-.59-1.4l-4.29-4.3a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42L15 11H5a1 1 0 0 0 0 2h10l-3.29 3.29a1 1 0 0 0 1.41 1.42l4.29-4.3A2 2 0 0 0 18 12Z" />
  </Svg>
)

const SearchIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 513.749 513.749",
    }}
    viewBox="0 0 513.749 513.749"
    {...props}
  >
    <Path d="m504.352 459.061-99.435-99.477c74.402-99.427 54.115-240.344-45.312-314.746S119.261-9.277 44.859 90.15-9.256 330.494 90.171 404.896c79.868 59.766 189.565 59.766 269.434 0l99.477 99.477c12.501 12.501 32.769 12.501 45.269 0 12.501-12.501 12.501-32.769 0-45.269l.001-.043zm-278.635-73.365c-88.366 0-160-71.634-160-160s71.634-160 160-160 160 71.634 160 160c-.094 88.326-71.673 159.906-160 160z" />
  </Svg>
)

const FilterIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M14 24a1 1 0 0 1-.6-.2l-4-3A1 1 0 0 1 9 20v-5.62L1.984 6.487A3.9 3.9 0 0 1 4.9 0h14.2a3.9 3.9 0 0 1 2.913 6.488L15 14.38V23a1 1 0 0 1-1 1zm-3-4.5 2 1.5v-7a1 1 0 0 1 .253-.664l7.268-8.177A1.9 1.9 0 0 0 19.1 2H4.9a1.9 1.9 0 0 0-1.421 3.158l7.269 8.178A1 1 0 0 1 11 14z" />
  </Svg>
)

const CarIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h45v45H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.01111)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEklEQVR4nO3cW4hVVRzH8ZWX0VAkQZDUiTQsEw3C60toJqFIYkRBIAY9iI9KDzlTU/SQFyTS13owIhVSRKWUoocuVC/lQw+B2jyYLzUzXtLJHJk531jyV2fGvfe57HX27DX+PnAYZuactf///9ln77XWXvs4JyIiIiIiIiIiIiIi0mzAGOABVbq+oj0EvATsBA4Ap4AfgNNAJ/AncGnQ4yZ33Rj09x57vn/8AfwCfAucBD4HPgb2AtuBDcC0++KNAh4HPgP+Y2T025uwyo1GwDjg3WF75kjzb/gUN1oADwInKKdOYIGLHTAWOEa5dQFzXczsJBSD3/wnz8XI7yXWQ0hzA/gU2AKsB1YDy4FFwBygFZia8Xr/v0eBx+w1y6yNdcDLwGvAZuBN4BPgcpVi73MxAr7MSOp7YGaN7SRqIJ5JwB6gktKk//tqFxPghYwi/wy01NFWkEIPam9bRmwX/CfFxQCYaIOHJP8Cs+tsL2ihrc1DGcU+5GIAdGQk0dFAe4kCjEzPk+5VV2Z2AuvN6LNOLEOhPTtxph2vrwCPuLICDmfsJesbbDNRoHj9PEiab/xElisb4LmMoL/K0W6iQDFPsD50mq2uhHMZaQH3AU+UsdAe8LTFmNbXX+jKAngjY694P2fbicJFf2sbb5HudD3d0aYBptvJI61fOjmCQo8BvmvWzhIqSD+MTvNKgPYThYl+yHZmA1eTt8YAsCL0Nmudx9hkVzDSukijTafNp0xq5nzyMzY5c9ymFe9nA8BZ4AjwDvCiTYI1dj3Td9jtsOCHzVLdVZss+8CPLO1Tn118m670Fz8ln8s28HkPeHJ4kacBf+XcgCQfcvxIdNztQu9IeJKEs/92oX8P2KgkW+uqXH6SML5IHSBIUD0qdDEqKnRBVOiCqNAFUaELokIXRIUuiApdEBU6okJfA9rs0tB4+9mesbAmFkHzcjlvf/DBLEqZ414ccbGvBc7r1sjwXI6A2qpcUHibOLUFzqvLv+jDHAFlrhS1ReMxCp3XEf+iWcA/DQbUUsMSrBiFzKty5zDkJ6aB6w0EpD26uqGLcYCngK/tWlet2nOsnS6zEHn1ZbYDzAA2Ah8BZ6o05s++S1LaWRrx0oXeHHn9at3Amu7ZGdzww8DrGSuUeu0s7BeVtNiJoiPiIjea10Dam1Nvwf1KnRAOuBIBDgbKK8y9MNY7ybvIpssfmlyJWF7dOfO66D/5IYN6PmMRdzXXgWddCdndC41+A4NfRbCyGUGtqeGu1OF6yv5VDnYzkd8z63GxqXnZrcJHawikYl9Y0uoiYAs9D9ewNLlizysmL2A+sBv4yY6//Xa8+9G+bWboQr9IWF67LK9uy+tv+93nNW+kYxQREREREREREREREREREXev/wEzscMYR7CNcAAAAABJRU5ErkJggg=="
        id="b"
        width={90}
        height={90}
      />
    </Defs>
  </Svg>
)
export {GetStarted, SearchIcon, FilterIcon, CarIcon}
