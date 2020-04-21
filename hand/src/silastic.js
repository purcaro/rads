import React from 'react'
import { Tab, Image } from 'semantic-ui-react'

const panes = [
    { menuItem: 'Introduction', render: () =>
	<Tab.Pane>
	    <Image src="orig/silasticwrist.jpg" floated="left" />
	    <h3>Silastic arthropathy</h3>
	    <p>A complication usually of silicone implants 
		used in orthopedic surgery for joint reconstruction. This process of particle synovitis can also be caused by introduction of other foreign materials used in prosthetic hardware such as metal, polyethylene, polymethylmethacrylate 
		cement, etc.</p>
	    <h3>Distribution:</h3>
	    <p>Silastic arthropathy can occur at any of the bones where there is a prosthetic implant in place. However, involvement at the hand and wrist is most common at the carpal bones, a location that is more susceptible to stress forces. In decreasing order of frequency, scaphoid, lunate and scapholunate implants 
	    are the most commonly affected carpal prostheses.</p>
	    <h3>Radiographic Appearance:</h3>
	    <p>At the site of the implant, an inflammatory process occurs in response to the foreign particles, which are sloughed off of the implant. This leads to erosion of bone and articular cartilage, and intraosseous cystic changes. There can also be soft tissue swelling and calcifications in the immediate 
	    area. Fractures and destructive changes of the prosthesis are sometimes present.</p>
	    <h3>Differential Diagnosis:</h3>
	    <p>Once a prosthetic implant is visualized in conjunction with the above mentioned radiographic findings, the diagnosis usually becomes apparent. Nevertheless, considerations in the differential diagnosis may include amyloidosis, pigmented villonodular synovitis, and infections caused by fungus or tuberculosis.
	    </p>
	    
	    </Tab.Pane> },

	{ menuItem: 'Distribution', render: () =>
	    <Tab.Pane>
		<Image src="orig/silastic500.gif" floated="left" /> 
		<table border="1">
		    <tr> 
			<th width="200" class="joint">Joint</th>
			<th width="100" class="joint">Frequency</th>
			<th>&nbsp;</th>
		    </tr>
		    <tr> 
			<td class="joint">DIP</td>
			<td class="freq">-</td>
			<td>&nbsp;</td>
		    </tr>
		    <tr> 
			<td class="joint">1st IP</td>
			<td class="freq">-</td>
			<td>&nbsp;</td>
		    </tr>
		    <tr> 
			<td class="joint">2nd-5th PIP</td>
			<td class="freq">-</td>
			<td>&nbsp;</td>
		    </tr>
		    <tr> 
			<td class="joint">1st MCP</td>
			<td class="freq">-</td>
			<td>&nbsp;</td>
		    </tr>
		    <tr> 
			<td class="joint">2nd-5th MCP</td>
			<td class="freq">-</td>
			<td>&nbsp;</td>
		    </tr>
		    <tr> 
			<td class="joint">1st CMC</td>
			<td class="freq">-</td>
			<td>&nbsp;</td>
		    </tr>
		    <tr> 
			<td class="joint">2-5 CMC</td>
			<td class="freq">-</td>
			<td>&nbsp;</td>
		    </tr>
		    <tr> 
			<td class="joint">Midcarpal</td>
			<td class="freq">++</td>
			<td rowspan="2"><Image src="orig/silasticwrist.jpg" width="108" height="100" /></td>
		    </tr>
		    <tr> 
			<td class="joint">Radiocarpal</td>
			<td class="freq">++</td>
		    </tr>
		    <tr> 
			<td class="joint">Radioulnar</td>
			<td class="freq">-</td>
			<td>&nbsp;</td>
		    </tr>
		</table>	    
	    </Tab.Pane> },
    { menuItem: 'Links', render: () =>
	<Tab.Pane>
	    <h3>Similar cases on the Internet</h3>
	    <ol>
		<li>none found</li>
	    </ol>
	</Tab.Pane> },

    { menuItem: 'References', render: () =>
	<Tab.Pane>
	    <ol>
		<li>Egloff DV, Varadi G, Narakas A, Simonetta C, Cantero C.<br />
		    <b>Silastic implants of the scaphoid and lunate. A long-term clinical study with a mean follow-up of 13 years.</b><br />
		<i>J Hand Surg [Br]. 1993 Dec;18(6):687-92</i>.</li>
	    </ol>
	</Tab.Pane> },
    
]

const Silastic = () => <Tab panes={panes} />

export default Silastic
