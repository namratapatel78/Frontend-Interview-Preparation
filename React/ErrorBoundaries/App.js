import ReactDOM from 'react-dom';
import React from 'react';
import MyErrorBoundary from './MyErrorBoundary';

require('../styles/main.scss');
require('./components/primary/SChipGroup/index.scss');
require('./helpers/promise/AllSettledPollyfill');

const renderApp = () => {
  return (
    <MyErrorBoundary><App /></MyErrorBoundary>
  );
};

ReactDOM.render(renderApp(), document.getElementById('main'));
