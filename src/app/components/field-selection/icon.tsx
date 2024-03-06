import React from 'react';

const Icon: React.FC = () => {
    return (
      <div>
        <h1>Circle Image Example</h1>
        <CircleImage imageUrl=""/>
      </div>
    );
  };
  
  export default Icon;

function CircleImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
      <img src={imageUrl} alt="circle" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
    </div>
  );
}
