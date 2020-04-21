import React from 'react'
import { Tab, Image } from 'semantic-ui-react'

const panes = [
    { menuItem: 'Introduction', render: () =>
	<Tab.Pane>
	    <Image src="orig/cppdp4191181.jpg" floated="left" />
	    <Image src="orig/cppdhand.jpg" floated="left" />
	    <h3>Calcium pyrophosphate dihydrate (CPPD) crystal deposition disease </h3>
	    <p>Slightly more prevalent in men. Chondrocalcinosis results with deposition of CPPD crystals in cartilage. The clinical term pseudogout represents symptomatic acute attacks which present in a similar fashion as gouty or infectious arthritic attacks. CPPD disease is associated with certain metabolic disorders such as hyperparathyroidism, hemochromatosis, hypothyroidism, hypomagnesemia, and hypophosphatsia.</p>
	    
	    <h3>Distribution:</h3>
	    <p>The most commonly affected area of the wrist is at the articulation of the distal radius and proximal carpal row. There is a strong propensity of CPPD crystal deposition disease for the 2nd and 3rd metacarpophalangeal joints. Changes at the interphalangeal joints and other metacarpophalangeal articulations occur much less frequently and to a much lesser degree</p>
	    
	    <h3>Radiographic Appearance:</h3>
	    <p>Calcium deposition is often seen at the triangular fibrocartilage of the wrist. Subchondral sclerosis, joint space narrowing, subchondral cyst formations which may be quite large, and intraarticular bodies from subchondral osseous collapse and fragmentation are all findings which can be seen in patient's with CPPD disease. These radiographic abnormalities are most common at the radiocarpal articulation and at the 2nd and 3rd metacarpophalangeal joints. Additionally, there may a shift in the normal alignment of the scaphoid and lunate and narrowing at the midcarpal compartment. </p>
	    
	    <h3>Differential Diagnosis:</h3>
	    <p>CPPD disease causes destruction of cartilage which can lead to radiographic findings similar to osteoarthritis. Sites of involvement are useful for differentiating the two since the radiocarpal compartment of the wrist is not a common location for osteoarthritis. Lack of an erosive process at the MCP joint differentiates CPPD crystal deposition disease from rheumatoid arthritis. Greater propensity for the MCP joints (also commonly includes the 4th and the 5th) with medial beak-like osteophytosis at the metacarpal heads and more widespread involvement of the carpal bones may help to differentiate hemochromatosis from idiopathic CPPD disease.</p>
	</Tab.Pane> },

    { menuItem: 'Distribution', render: () =>
	<Tab.Pane>
	    <Image src="orig/cppd500.gif" floated="left" /> 
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
		    <td class="freq">+</td>
		    <td>&nbsp;</td>
		</tr>
		<tr> 
		    <td class="joint">2nd-5th MCP</td>
		    <td class="freq">+++</td>
		    <td><Image src="orig/cppdmcp2.jpg" floated="left" />
			<Image src="orig/cppdmcp.jpg" floated="left" />
		    </td>
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
		    <td class="freq">-</td>
		    <td>&nbsp;</td>
		</tr>
		<tr> 
		    <td class="joint">Radiocarpal</td>
		    <td class="freq">+++</td>
		    <td><Image src="orig/cppdwrist.jpg" floated="left" /></td>
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
	    <ol class="linklist">
		<li> eMedicine, Radiology section.<br />
		<a href="http://www.emedicine.com/radio/topic125.htm">http://www.emedicine.com/radio/topic125.htm</a></li>
		<li>Faculté de Médecine de Rennes<br />
		    <a href="http://noemed.univ-rennes1.fr/cgi-bin/iw/dossier.pl?GB%2B1429%2B">http://noemed.univ-rennes1.fr/cgi-bin/iw/dossier.pl?GB+1429+</a></li>
		    </ol>

		</Tab.Pane> },

    { menuItem: 'References', render: () =>
	<Tab.Pane>
	    <ol class="reflist">
		<li>Riestra JL, Sanchez A, Rodriques-Valverde V, Castillo E, Calderon J.<br />
		    <b>Roentgenographic features of the arthropathy associated with CPPD crystal 
		    deposition disease. A comparative study with primary osteoarthritis.</b><br />
		    <i>J Rheumatol. 1985 Dec;12(6):1154-8.</i><br />
		</li>
	    </ol>

	</Tab.Pane> },
    
]

const CPPD = () => <Tab panes={panes} />

export default CPPD
