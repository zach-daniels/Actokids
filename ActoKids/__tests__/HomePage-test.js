// __tests__/index-test.js
import React from 'react';
import HomePage from '../HomePage';

import renderer from 'react-test-renderer';

test('Home snapshot', ()=>{
	const snap = renderer.create(<HomePage />).toJSON();
	expect(snap).toMatchSnapshot();
})