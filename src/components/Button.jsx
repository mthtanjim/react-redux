import React from 'react';

function Button({title, handler}) {
  return (
    <button onClick={handler} className="btn bg-blue-900 hover:bg-blue-700 py-1 px-4 mb-4 rounded border-2 border-gray-500 hover:border-gray-200 my-4">
      {title}
    </button>
  );
}

export default Button;