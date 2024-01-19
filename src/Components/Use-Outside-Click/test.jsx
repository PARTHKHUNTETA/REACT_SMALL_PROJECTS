import { useRef, useState } from "react";
import useOutside from ".";

export default function useOutsideButtonClick() {
  const ref = useRef();
  const [showContent, setShowContent] = useState(true);
  useOutside(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>Content</h1>
          <p>This is Content</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
