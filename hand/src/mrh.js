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
	    <Image src="orig/Handwrist500.gif" floated="left" /> 
	    <table border="1">
		<tr> 
		    <th width="200" class="joint">Joint</th>
		    <th width="100" class="joint">Frequency</th>
		    <th>&nbsp;</th>
		</tr>
		<tr> 
		    <td class="joint">DIP</td>
		    <td class="freq">+++</td>
		    <td>&nbsp;</td>
		</tr>
		<tr> 
		    <td class="joint">1st IP</td>
		    <td class="freq">+++</td>
		    <td><Image src="orig/mripip.jpg" width="110" height="100" /></td>
		</tr>
		<tr> 
		    <td class="joint">2nd-5th PIP</td>
		    <td class="freq">++</td>
		    <td>&nbsp;</td>
		</tr>
		<tr> 
		    <td class="joint">1st MCP</td>
		    <td class="freq">+</td>
		    <td>&nbsp;</td>
		</tr>
		<tr> 
		    <td class="joint">2nd-5th MCP</td>
		    <td class="freq">+</td>
		    <td><Image src="orig/mrimcp.jpg" width="88" height="100" align="left" /></td>
		</tr>
		<tr> 
		    <td class="joint">1st CMC</td>
		    <td class="freq">+</td>
		    <td><Image src="orig/mri1stmcp.jpg" width="87" height="100" /></td>
		</tr>
		<tr> 
		    <td class="joint">2-5 CMC</td>
		    <td class="freq">+</td>
		    <td>&nbsp;</td>
		</tr>
		<tr> 
		    <td class="joint">Midcarpal</td>
		    <td class="freq">+</td>
		    <td>&nbsp;</td>
		</tr>
		<tr> 
		    <td class="joint">Radiocarpal</td>
		    <td class="freq">+</td>
		    <td>&nbsp;</td>
		</tr>
		<tr> 
		    <td class="joint">Radioulnar</td>
		    <td class="freq">+</td>
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
		<li>Campbell DA, Edwards NL.<br />
		    <b>Multicentric reticulohistiocytosis: systemic macrophage disorder.</b><br />
		    <i>Baillieres Clin Rheumatol. 1991 Aug;5(2):301-19. Review.</i><br />
		</li>
		<li>Friedman PD, Kalisher L.<br />
		    <b>Multicentric reticulohistiocytosis in a child: radiologic findings 
		    and clinical correlation.</b><br />
		<i>Can Assoc Radiol J. 1998 Dec;49(6):378-80. No abstract available.</i></li>
	    </ol>

	</Tab.Pane> },
    
]

const OA = () => <Tab panes={panes} />

export default OA
