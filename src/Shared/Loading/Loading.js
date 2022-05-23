import React from 'react';

const Loading = () => {
    return (
        <div class="flex justify-center items-center">
  <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-40" role="status">
    <span class="visually-hidden">............Loading...</span>
  </div>
</div>
    );
};

export default Loading;