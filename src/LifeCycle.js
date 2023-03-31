import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("mount!");
    return () => {
      // Unmount 시점에 실행됨
      console.log("Unmount!");
    };
  }, []);

  return <div>Unmount!</div>;
};

const Lifecycle = () => {
  const [isVisible, setIsvisible] = useState(false);
  const toggle = () => setIsvisible(!isVisible);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>On/Off</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;
