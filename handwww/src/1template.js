import React from 'react'
import { Tab, Image } from 'semantic-ui-react'

const panes = [
    { menuItem: 'Introduction', render: () =>
	<Tab.Pane>
	    
	</Tab.Pane> },

    { menuItem: 'Distribution', render: () =>
	<Tab.Pane>
	    
	</Tab.Pane> },
    { menuItem: 'Links', render: () =>
	<Tab.Pane>

	</Tab.Pane> },

    { menuItem: 'References', render: () =>
	<Tab.Pane>

	</Tab.Pane> },
    
]

const OA = () => <Tab panes={panes} />

export default OA
