import "./App.css";
import Accordion from "./Components/Accordion";
import ImageSlider from "./Components/ImageSlider";
import RandomColor from "./Components/RandomColor";
import StarRating from "./Components/StarRating";
import LoadMoreData from "./Components/LoadMoreData";
import TreeView from "./Components/TreeView";
import QRCodeGenerator from "./Components/QRCode/";
import LightDarkTheme from "./Components/LightDarkTheme";
import ScrollingIndicator from "./Components/ScrollIndicator";

function App() {
  return (
    <>
      {/* <Accordion/> */}

      {/* <RandomColor/> */}

      {/* <StarRating /> */}

      {/* <ImageSlider
        url="https://picsum.photos/v2/list"
        page={"1"}
        limit={"10"}
      /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView /> */}
      {/* <QRCodeGenerator/> */}
      {/* <LightDarkTheme /> */}
      <ScrollingIndicator url="https://dummyjson.com/products?limit=100" />
    </>
  );
}

export default App;
