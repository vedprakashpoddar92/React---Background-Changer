import { useState } from 'react';
import Button from './component/Button';

const App = () => {
  const [color, setColor] = useState('red');

  const colors = [
    { name: 'Red', code: 'red' },
    { name: 'Green', code: 'green' },
    { name: 'Blue', code: 'blue' },
    { name: 'Orange', code: 'orange' },
    { name: 'Purple', code: 'purple' },
    { name: 'Black', code: 'black' },
  ];

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center top-4 px-2 inset-x-0 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-white rounded-3xl">
            {colors.map((c) => (
              <Button
                key={c.code}
                colorData={c.code}
                label={c.name}
                onClick={() => setColor(c.code)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap flex-col justify-center items-center relative top-24">
          <p className="text-white text-[3rem]">
            Background Color: <span className="capitalize">{color}</span>
          </p>
          <h3 className="text-white text-[2rem]">
            Click on color button to change background color.
          </h3>
        </div>
      </div>
    </>
  );
};

export default App;
