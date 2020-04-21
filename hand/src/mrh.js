import React from 'react'
import { Tab, Image } from 'semantic-ui-react'

const panes = [
    { menuItem: 'Introduction', render: () =>
	<Tab.Pane>
	    <Image src="orig/mrip4191186.jpg" floated="left" />
	    <h3>Multicentric reticulohistiocytosis</h3>
	    <p>A rare systemic disease with (proliferation) of histiocytes which leads to destructive polyarthritis and skin lesions.</p>
	    
  <h3>Distribution:</h3>
	    <p>Target areas of the hands primarily involve the interphalangeal joints, especially at the DIPs. The MCP joints and carpal bones are involved less frequently.</p>
	    
  <h3>Radiographic Appearance:</h3>
	    <p>Symmetric well-circumscribed marginal erosions are seen at the involved articular surfaces. Uncalcified soft tissue nodules and the absence of peri-articular osteoporosis are additional radiographic features of multicentric reticulohistiocytosis. Severe progression of the disease can lead to extensive osseous resorption with foreshortening of the fingers and telescoping digits.</p>
	    
  <h3>Differential Diagnosis:</h3>
	<p>Radiographic findings in multicentric reticulohistiocytosis are different than those in rheumatoid arthritis since there is involvement of the joints distally. Multicentric reticulohistiocytosis can also be differentiated from other arthritides due to the absence of juxtaarticular osteoporosis and periosteal reaction. The erosive pattern seen in gout and psoriatic arthritis is unlike multicentric reticulohistiocytosis due to their asymmetric distribution. Furthermore, calcified soft tissue nodules and overhanging edges are findings in gout which are not seen in multicentric reticulohistiocytosis.</p>
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
