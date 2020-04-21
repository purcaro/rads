import React from 'react';
import { Tab, Image } from 'semantic-ui-react';

import Intro from './intro';
import OA from './oa';
import Rheumatoid from './rheumatoid';
import Psoriasis from './psoriasis';
import Gout from './gout';
import CPPD from './cppd';
import Hemochromatosis  from './hemochromatosis';
import MRH from './mrh';
import Sarcoid from './sarcoid';
import Scleroderma from './scleroderma';
import Silastic  from './silastic';
import Summary from './summary';
import References from './refs';

import './app.css';

function App() {
    const panes = [
	{ menuItem: 'Introduction', render: () => <Intro /> },
	{ menuItem: 'Osteoarthritis', render: () => <OA /> },
	{ menuItem: 'Rheumatoid', render: () => <Rheumatoid /> },
	{ menuItem: 'Psoriasis', render: () => <Psoriasis /> },
	{ menuItem: 'Gout', render: () => <Gout /> },
	{ menuItem: 'CPPD', render: () => <CPPD /> },
	{ menuItem: 'Hemochromatosis', render: () => <Hemochromatosis /> },
	{ menuItem: 'Multicentric reticulohistiocytosis', render: () => <MRH /> },
	{ menuItem: 'Sarcoidosis', render: () => <Sarcoid /> },
	{ menuItem: 'Scleroderma', render: () => <Scleroderma /> },
	{ menuItem: 'Silastic', render: () => <Silastic /> },
	{ menuItem: 'Summary', render: () => <Summary /> },
	{ menuItem: 'References', render: () => <References /> },
    ]

    return (
	<React.Fragment>
	    <Image src="orig/TitleTitle.gif" />
	    <br />
	    <Tab menu={{ fluid: true,
			 vertical: true,
			 tabular: true }} panes={panes} />
	</React.Fragment>
	
    );
}

export default App;
