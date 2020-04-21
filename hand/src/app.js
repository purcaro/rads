import React from 'react';
import { Tab } from 'semantic-ui-react';

import Intro from './intro';
import OA from './oa';
import Rheumatoid from './rheumatoid';
import Psoriasis from './psoriasis';
import Gout from './gout';

import './app.css';

function App() {
    const panes = [
	{ menuItem: 'Introduction', render: () => <Intro /> },
	{ menuItem: 'Osteoarthritis', render: () => <OA /> },
	{ menuItem: 'Rheumatoid', render: () => <Rheumatoid /> },
	{ menuItem: 'Psoriasis', render: () => <Psoriasis /> },
	{ menuItem: 'Gout', render: () => <Gout /> },
	{ menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
	{ menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
	{ menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
	{ menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
	{ menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    ]

    return (
	<Tab menu={{ fluid: true,
		     vertical: true,
		     tabular: true }} panes={panes} />
	
    );
}

export default App;
